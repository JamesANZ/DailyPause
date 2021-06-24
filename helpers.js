const oneDayTimeStamp = 86400000; // in ms

function promisifiedChromeGet(valueName) {
    return new Promise(function(resolve, reject) {
        chrome.storage.sync.get(valueName, function(result){
            resolve(result[valueName]);
        });
    });
}

async function getMeditatedToday() {
    const lastMeditationDay = await promisifiedChromeGet("lastMeditationDay");
    return lastMeditationDay >= new Date().setHours(0,0,0,0) - oneDayTimeStamp;
}

async function getDailyStreakMissed() {
    const lastMeditationDay = await promisifiedChromeGet("lastMeditationDay");
    return lastMeditationDay + oneDayTimeStamp < new Date().setHours(0,0,0,0);
}

function resetDailyStreak() {
    chrome.storage.sync.set({ streak: 0 });
}

async function checkDailyStreak() {
    const missedDailyStreak = await getDailyStreakMissed();
    if(missedDailyStreak) {
        resetDailyStreak();
    }
}
