document.addEventListener('DOMContentLoaded', () => {
    const oneDayTimeStamp = 86400;

    async function getMeditatedToday() {
        // TODO use whole days rather than last time & 24 hours later
        const lastMeditation = await chrome.storage.sync.get("lastMeditation");
        return lastMeditation >= new Date.now() - oneDayTimeStamp;
    }

    async function getDailyStreakMissed() {
        // TODO use whole days rather than last time & 24 hours later
        const lastMeditation = await chrome.storage.sync.get("lastMeditation");
        return lastMeditation + oneDayTimeStamp < new Date.now();
    }

    function resetDailyStreak() {
        chrome.storage.sync.set({streak: 0});
    }

    async function checkDailyStreak() {
        const missedDailyStreak = await getDailyStreakMissed();
        if(missedDailyStreak) {
            resetDailyStreak();
        }
    }
});