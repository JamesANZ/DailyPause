document.addEventListener("DOMContentLoaded", () => {

    const meditatedTodayMsg = "you have meditated today, keep up the good work!";
    const notMeditatedTodayMsg = "You have not yet meditated today, do it now to keep up your streak!";

    chrome.storage.sync.get("streak", (result) => {
        document.getElementById("dailyStreak").innerText = `Your daily streak: ${result.streak} day(s)`;
    });

    getMeditatedToday().then((meditatedToday) => {
        if(meditatedToday) {
            document.getElementById("status").innerText = meditatedTodayMsg;
        } else {
            document.getElementById("status").innerText = notMeditatedTodayMsg;
        }
    }).catch(console.error);

    function play() {
        new Audio('./ping.wav').play();
    }

    function done(meditatedToday, streak) {
        play();
        if (!meditatedToday) {
            chrome.storage.sync.set({streak: streak + 1, lastMeditationDay: new Date().setHours(0,0,0,0)});
            sendMsgComplete();
        }
        document.getElementById("status").innerText = meditatedTodayMsg;
        document.getElementById("timer").hidden = true;
    }

    const meditate = async () => {
        document.getElementById("timer").hidden = false;
        const meditationTimeSet = await promisifiedChromeGet("meditationTimeSet");
        const streak = await promisifiedChromeGet("streak");
        const meditatedToday = await getMeditatedToday();
        startTimer(meditationTimeSet / 1000);
        setTimeout(() => {
            done(meditatedToday, streak);
        }, meditationTimeSet);
    };

    document.getElementById("meditate").addEventListener("click", meditate);

});