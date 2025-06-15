document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get("streak", (result) => {
    document.getElementById("dailyStreak").innerText =
      `You've been consistently mindful for ${result.streak === 1 ? "1 day" : result.streak + " days"}.`;
  });

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
    } else {
      alert("Nice, you have meditated more than once today!");
    }
    sendMsgComplete();
  };

  document
    .getElementById("guidedMeditationWatched")
    .addEventListener("click", confirmWatchedVideo);
});
