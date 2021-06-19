chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ currentReminderTime: 12 }); // noon
    chrome.storage.sync.set({ streak: 0 });
    chrome.storage.sync.set({ meditationTimeSet: 7200 });
    chrome.storage.sync.set({ lastMeditation: 0 });
});

async function setReminder() {
    await chrome.alarms.clear('mindfulnessReminder');
    const reminderTime = await chrome.storage.sync.get("currentReminderTime");
    const whenToRing = new Date().setHours(reminderTime);
    chrome.alarms.create('mindfulnessReminder', {
        when: whenToRing,
    });
}

chrome.onAlarm.addEventListener(() => {
    chrome.notifications.create('', {
        title: 'Time to meditate!',
        message: 'This is your daily mindfulness reminder!',
        iconUrl: 'images/Pause32x.png',
        type: 'basic'
    });
    setReminder().catch(console.error);
});

setReminder().catch(console.error);