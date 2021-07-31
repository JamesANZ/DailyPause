document.addEventListener("DOMContentLoaded", () => {

  async function init() {
    const meditatedToday = await getMeditatedToday();
    await checkDailyStreak();
    const streak = await promisifiedChromeGet("streak");
    document.getElementById("dailyStreak").innerText = `Your daily streak: ${streak} days`;
    if(!meditatedToday) {
      document.getElementById("meditatedToday").innerText = `You are due for a meditation!`;
    } else {
      document.getElementById("meditatedToday").innerText = `You have meditated today, congrats!`;
    }
  }

  init().catch(console.error);

  let meditateNowButton = document.getElementById("meditateNow");
  let guidedMeditationButton = document.getElementById("guidedMeditation");
  let settings = document.getElementById("settings");
  let help = document.getElementById("help");

  meditateNowButton.addEventListener("click", () => {
    openTab("meditate.html");
  });

  guidedMeditationButton.addEventListener("click",  () => {
    openTab("guidedMeditation.html");
  });

  settings.addEventListener("click",  () => {
    openTab("options.html");
  });

  help.addEventListener("click", () => {
    openTab('mailto:hey@featureavenue.com?subject=Dailypause.co')
  });

  const openTab = (pageName) => {
    console.log(`opening a new ${pageName} tab`);
    chrome.tabs.create({url: pageName});
  }

});

