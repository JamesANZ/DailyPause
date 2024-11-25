chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ streak: 0 });
  chrome.storage.sync.set({ meditationTimeSet: 120000 }); // 2 minutes in milliseconds
  chrome.storage.sync.set({ lastMeditationDay: 0 });
  chrome.action.setBadgeText({ text: "!!!" }); // user has just installed and therefore has not meditated
});

chrome.runtime.onStartup.addListener(() => {
  chrome.storage.sync.get("lastMeditationDay", (result) => {
    const meditatedToday =
      new Date().setHours(0, 0, 0, 0) === result.lastMeditationDay;
    chrome.action.setBadgeText({ text: `${meditatedToday ? "" : "!!!"}` });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "complete") {
    chrome.action.setBadgeText({ text: "" });
  }
});
