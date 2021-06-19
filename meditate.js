document.addEventListener("DOMContentLoaded", () => {

    chrome.storage.sync.get("streak", (streak) => {
        document.getElementById("dailyStreak").innerText = `You daily streak: ${streak} day(s)`;
    });

    const meditate = async () => {
        document.getElementById("timer").hidden = false;
        const time = await chrome.storage.sync.get("time");
        const streak = await chrome.storage.sync.get("streak");
        const meditatedToday = await getMeditatedToday();
        document.getElementById("status").innerText = `meditated today? ${meditatedToday}`;
        startTimer(time);
        setTimeout(() => {
            if (!meditatedToday) {
                chrome.storage.sync.set({streak: streak + 1, lastMeditation: new Date().getTime()})
                document.getElementById("status").innerText = `you have meditated today, keep up the good work!`;
            }
        }, time);
    };

    document.getElementById("meditate").addEventListener("click", meditate);

});