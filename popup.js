document.addEventListener("DOMContentLoaded", () => {
  async function init() {
    const meditatedToday = await getMeditatedToday();
    await checkDailyStreak();
    const streak = await promisifiedChromeGet("streak");
    const longestStreak = (await promisifiedChromeGet("longestStreak")) || 0;
    document.getElementById("dailyStreak").innerText =
      `You've been consistently mindful for ${streak === 1 ? "1 day" : streak + " days"}. Your longest streak is ${longestStreak === 1 ? "1 day" : longestStreak + " days"}.`;
    document.getElementById("meditatedToday").innerText =
      `${meditatedToday ? "You've been mindful today." : "Please remember to take a moment."}`;
  }

  init().catch(console.error);

  let meditateNowButton = document.getElementById("meditateNow");
  let guidedMeditationButton = document.getElementById("guidedMeditation");
  let gratitudeButton = document.getElementById("gratitude");
  let settings = document.getElementById("settings");
  let help = document.getElementById("help");

  meditateNowButton.addEventListener("click", () => {
    openTab("meditate.html");
  });

  gratitudeButton.addEventListener("click", () => {
    openTab("gratitude.html");
  });

  guidedMeditationButton.addEventListener("click", () => {
    openTab("guidedMeditation.html");
  });

  settings.addEventListener("click", () => {
    openTab("options.html");
  });

  help.addEventListener("click", () => {
    openTab("mailto:hey@featureavenue.com?subject=Dailypause.co");
  });

  const openTab = (pageName) => {
    chrome.tabs.create({ url: pageName });
  };
});
