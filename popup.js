document.addEventListener("DOMContentLoaded", () => {
  async function init() {
    const meditatedToday = await getMeditatedToday();
    await checkDailyStreak();
    const streak = await promisifiedChromeGet("streak");
    document.getElementById("dailyStreak").innerText =
      `You've been consistently mindful for ${streak === 1 ? "1 day." : streak + " days."}`;
    document.getElementById("meditatedToday").innerText =
      `${meditatedToday ? "You've been mindful today." : "Please remember to take a moment."}`;
  }

  init().catch(console.error);

  let meditateNowButton = document.getElementById("meditateNow");
  let guidedMeditationButton = document.getElementById("guidedMeditation");
  let settings = document.getElementById("settings");
  let help = document.getElementById("help");

  meditateNowButton.addEventListener("click", () => {
    openTab("meditate.html");
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
