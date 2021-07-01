chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ currentReminderTime: 12 }); // noon
    chrome.storage.sync.set({ streak: 0 });
    chrome.storage.sync.set({ meditationTimeSet: 120000 }); // 2 minutes in milliseconds
    chrome.storage.sync.set({ lastMeditationDay: 0 });
    setReminder().catch(console.error);
});

async function setReminder() {
    await chrome.alarms.clear('mindfulnessReminder');
    const reminderTime = await new Promise(function(resolve, reject) {
        chrome.storage.sync.get("currentReminderTime", function(result){
            resolve(result["currentReminderTime"]);
        });
    });
    chrome.alarms.create('mindfulnessReminder', {
        when: new Date().setHours(reminderTime)
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "complete") {
        chrome.action.setBadgeText({text: ""}); // remove ! from icon
    }
});

chrome.alarms.onAlarm.addListener(() => {
    // add ! to icon to remind the user to meditate
    chrome.action.setBadgeText({text: "!"});
    setReminder().catch(console.error);
});
