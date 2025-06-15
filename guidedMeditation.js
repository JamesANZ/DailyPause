document.addEventListener("DOMContentLoaded", () => {
  let meditationTimer;
  let startTime;
  let isMeditating = false;
  const DEFAULT_DURATION = 603; // 10 minutes and 3 seconds in seconds
  let remainingTime = DEFAULT_DURATION;

  // Initialize streak display
  chrome.storage.sync.get("streak", (result) => {
    document.getElementById("dailyStreak").innerText =
      `You've been consistently mindful for ${result.streak === 1 ? "1 day" : result.streak + " days"}.`;
  });

  // Timer functions
  function updateTimer() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById("meditationTimer").textContent =
      `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    const progress =
      ((DEFAULT_DURATION - remainingTime) / DEFAULT_DURATION) * 100;
    document.getElementById("meditationProgress").style.width = `${progress}%`;
  }

  function startTimer() {
    if (!isMeditating) {
      isMeditating = true;
      startTime = Date.now();
      document.getElementById("startMeditation").textContent = "Pause Session";
      document
        .getElementById("startMeditation")
        .classList.replace("btn-primary", "btn-warning");

      meditationTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        remainingTime = Math.max(0, DEFAULT_DURATION - elapsed);
        updateTimer();

        if (remainingTime === 0) {
          clearInterval(meditationTimer);
          isMeditating = false;
          document.getElementById("startMeditation").textContent =
            "Start Session";
          document
            .getElementById("startMeditation")
            .classList.replace("btn-warning", "btn-primary");
          // Optional: Play a gentle sound or show a completion message
        }
      }, 1000);
    } else {
      clearInterval(meditationTimer);
      isMeditating = false;
      document.getElementById("startMeditation").textContent = "Resume Session";
      document
        .getElementById("startMeditation")
        .classList.replace("btn-warning", "btn-primary");
    }
  }

  // Event Listeners
  document
    .getElementById("startMeditation")
    .addEventListener("click", startTimer);

  const confirmWatchedVideo = async () => {
    const meditatedToday = await getMeditatedToday();
    if (!meditatedToday) {
      const streak = await promisifiedChromeGet("streak");
      const newStreak = streak + 1;
      const longestStreak = (await promisifiedChromeGet("longestStreak")) || 0;
      if (newStreak > longestStreak) {
        chrome.storage.sync.set({ longestStreak: newStreak });
      }
      chrome.storage.sync.set({
        streak: newStreak,
        lastMeditationDay: new Date().setHours(0, 0, 0, 0),
      });

      // Show success message
      const streakDisplay = document.getElementById("dailyStreak");
      streakDisplay.innerHTML = `
        <div class="alert alert-success" role="alert">
          Great job! You've completed your meditation for today.
          <br>
          Your streak is now ${newStreak} ${newStreak === 1 ? "day" : "days"}!
        </div>
      `;
    } else {
      // Show already meditated message
      const streakDisplay = document.getElementById("dailyStreak");
      streakDisplay.innerHTML = `
        <div class="alert alert-info" role="alert">
          You've already meditated today. Great job maintaining your practice!
        </div>
      `;
    }
    sendMsgComplete();
  };

  document
    .getElementById("guidedMeditationWatched")
    .addEventListener("click", confirmWatchedVideo);

  // Initialize timer display
  updateTimer();
});
