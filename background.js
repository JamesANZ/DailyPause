chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ currentReminderTime: 12 }); // noon
    chrome.storage.sync.set({ streak: 0 });
    chrome.storage.sync.set({ meditationTimeSet: 120000 }); // 2 minutes in milliseconds
    chrome.storage.sync.set({ lastMeditationDay: 0 });
    setBadgeReminderIfApplicable();
});

function setBadgeReminderIfApplicable() {
    chrome.storage.sync.get("currentReminderTime", function(result) {
        const reminderTime = new Date().setHours(result);
        const currentTime = new Date().getTime();
        chrome.storage.sync.get("lastMeditationDay", (timestamp) => {
            const meditatedToday = new Date().setHours(0, 0, 0, 0) === timestamp;
            if(currentTime >= reminderTime && !meditatedToday) {
                // gentle reminder via badge text rather than popup notification
                chrome.action.setBadgeText({text: "!"});
            }
        });
    });
}

chrome.runtime.onStartup.addListener(() => {
    setBadgeReminderIfApplicable();
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "complete") {
        chrome.action.setBadgeText({text: ""}); // remove ! from icon
    } else if (request.type === "check") {
        setBadgeReminderIfApplicable();
    }
});

