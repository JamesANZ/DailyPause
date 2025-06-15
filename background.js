chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ streak: 0 });
  chrome.storage.sync.set({ longestStreak: 0 }); // Initialize longest streak
  chrome.storage.sync.set({ meditationTimeSet: 120000 }); // 2 minutes in milliseconds
  chrome.storage.sync.set({ lastMeditationDay: 0 });
  chrome.action.setBadgeText({ text: "!!!" });
  chrome.alarms.create("dailyMeditationReminder", { periodInMinutes: 720 });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "complete") {
    chrome.action.setBadgeText({ text: "" });
  }
});

// Handle notification clicks
chrome.notifications.onClicked.addListener(() => {
  chrome.tabs.create({ url: "meditate.html" });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "dailyMeditationReminder") {
    chrome.storage.sync.get("lastMeditationDay", (result) => {
      const meditatedToday =
        new Date().setHours(0, 0, 0, 0) === result.lastMeditationDay;
      if (!meditatedToday) {
        chrome.action.setBadgeText({ text: "!!!" });
        chrome.notifications.create({
          type: "basic",
          iconUrl: "/images/DailyPauseweblogo.png",
          title: "Time to Meditate!",
          message: "Click to start your meditation session.",
          priority: 1,
          requireInteraction: true, // Keep notification visible until user interacts
        });
      }
    });
  }
});
