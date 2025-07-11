document.addEventListener("DOMContentLoaded", () => {
  const meditatedTodayMsg = "You've been mindful today.";
  const notMeditatedTodayMsg = "Please remember to be mindful today.";
  const paymentSection = document.querySelector(".payment-section");

  function displayStreak() {
    const _ = displayPaymentQRIfStreakMissed();
    chrome.storage.sync.get(["streak", "longestStreak"], (result) => {
      document.getElementById("dailyStreak").innerText =
        `Current streak: ${result.streak} ${result.streak === 1 ? "day" : "days"} - Longest streak: ${result.longestStreak} ${result.longestStreak === 1 ? "day" : "days"}`;
    });
  }

  async function displayPaymentQRIfStreakMissed() {
    const streakMissed = await getDailyStreakMissed();
    if (streakMissed) {
      document.getElementById("dailyStreak").innerText =
        `You lost your streak! To help you stay motivated, you can send us a small penalty fee.`;
      paymentSection.hidden = false;
    }
  }

  getMeditatedToday()
    .then((meditatedToday) => {
      document.getElementById("status").innerText =
        `${meditatedToday ? meditatedTodayMsg : notMeditatedTodayMsg}`;
    })
    .catch(console.error);

  function play() {
    new Audio("./ping.wav").play();
  }

  function done(meditatedToday, streak) {
    play();
    if (!meditatedToday) {
      const newStreak = streak + 1;
      chrome.storage.sync.get("longestStreak", (result) => {
        const longestStreak = result.longestStreak || 0;
        if (newStreak > longestStreak) {
          chrome.storage.sync.set({ longestStreak: newStreak });
        }
      });
      chrome.storage.sync.set({
        streak: newStreak,
        lastMeditationDay: new Date().setHours(0, 0, 0, 0),
      });
      sendMsgComplete();
      displayStreak();
    }
    document.getElementById("status").innerText = meditatedTodayMsg;
    document.getElementById("timer").hidden = true;
    document.getElementById("meditate").textContent = "Start Meditation";
    document.getElementById("meditate").disabled = false;
  }

  const meditate = async () => {
    const meditateBtn = document.getElementById("meditate");
    meditateBtn.disabled = true;
    meditateBtn.textContent = "Meditating...";

    document.getElementById("timer").hidden = false;
    const text = document.getElementById("gratitudeBox").value;
    const date = new Date().toLocaleDateString();
    const gratitude = (await promisifiedChromeGet("gratitude")) ?? [];
    if (text !== "") {
      chrome.storage.sync.set({
        gratitude: [...gratitude, `${date} - ${text}`],
      });
    }
    document.getElementById("gratitudeBox").hidden = true;
    document.getElementById("gratitudeBoxLabel").hidden = true;
    const meditationTimeSet = await promisifiedChromeGet("meditationTimeSet");
    const streak = await promisifiedChromeGet("streak");
    const meditatedToday = await getMeditatedToday();
    startTimer(meditationTimeSet / 1000);
    setTimeout(() => {
      done(meditatedToday, streak);
    }, meditationTimeSet);
  };

  document.getElementById("meditate").addEventListener("click", meditate);

  displayStreak();
});
