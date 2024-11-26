document.addEventListener("DOMContentLoaded", () => {
  const meditatedTodayMsg = "You've been mindful today.";
  const notMeditatedTodayMsg = "Please remember to be mindful today.";

  function displayStreak() {
    const _ = displayPaymentQRIfStreakMissed();
    chrome.storage.sync.get("streak", (result) => {
      document.getElementById("dailyStreak").innerText =
        `You've been consistently mindful for ${result.streak} ${result.streak === 1 ? "day." : "days."}`;
    });
  }

  async function displayPaymentQRIfStreakMissed() {
    const streakMissed = await getDailyStreakMissed();
    if (streakMissed) {
      document.getElementById("dailyStreak").innerText =
        `You lost your streak! To help you stay motivated, you can send us a small penalty fee.`;
      document.getElementById("payment").hidden = false;
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
      chrome.storage.sync.set({
        streak: streak + 1,
        lastMeditationDay: new Date().setHours(0, 0, 0, 0),
      });
      sendMsgComplete();
      displayStreak();
    }
    document.getElementById("status").innerText = meditatedTodayMsg;
    document.getElementById("timer").hidden = true;
  }

  const meditate = async () => {
    document.getElementById("timer").hidden = false;
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
