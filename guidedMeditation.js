document.addEventListener("DOMContentLoaded", () => {

    chrome.storage.sync.get("streak", (streak) => {
        document.getElementById("dailyStreak").innerText = `You daily streak: ${streak} day(s)`;
    });

    const confirmWatchedVideo = async () => {
        const streak = await chrome.storage.sync.get("streak");
        await chrome.storage.set({streak: streak + 1});
    };

    document.getElementById("guidedMeditationWatched").addEventListener("click", confirmWatchedVideo);

});