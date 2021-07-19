document.addEventListener("DOMContentLoaded", () => {

    chrome.storage.sync.get("streak", (result) => {
        document.getElementById("dailyStreak").innerText = `Your daily streak: ${result.streak} day(s)`;
    });

    const confirmWatchedVideo = async () => {
        const meditatedToday = await getMeditatedToday();
        if(!meditatedToday) {
            alert("Thank you for meditating, we have added it to your daily streak!");
            const streak = await promisifiedChromeGet("streak");
            chrome.storage.sync.set({ streak: streak + 1, lastMeditationDay: new Date().setHours(0,0,0,0)});
        } else {
            alert("Wow, you have meditated more than once today! Keep up the good work!");
        }
        sendMsgComplete();
    };

    document.getElementById("guidedMeditationWatched").addEventListener("click", confirmWatchedVideo);

});