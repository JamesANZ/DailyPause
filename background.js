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

chrome.alarms.onAlarm.addListener(() => {
    chrome.notifications.create('', {
        title: 'Time to meditate!',
        message: 'This is your daily mindfulness reminder!',
        iconUrl: 'images/Pause32x.png',
        type: 'basic'
    });
    setReminder().catch(console.error);
});
