document.addEventListener("DOMContentLoaded", () => {

  async function init() {
    const meditatedToday = await getMeditatedToday();
    await checkDailyStreak();
    const streak = await promisifiedChromeGet("streak");
    if(streak === 1) {
      document.getElementById("dailyStreak").innerText = `You've been consistently mindful for ${streak} day`;
    } else {
      document.getElementById("dailyStreak").innerText = `You've been consistently mindful for ${streak} days`;
    }
    if(!meditatedToday) {
      document.getElementById("meditatedToday").innerText = `Please remember to take a moment`;
    } else {
      document.getElementById("meditatedToday").innerText = `You've been mindful today`;
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

