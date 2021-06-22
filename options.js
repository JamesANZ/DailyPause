document.addEventListener("DOMContentLoaded", () => {

  chrome.storage.sync.get("currentReminderTime", (result) => {
    document.getElementById("currentReminderTime").innerText = `we will remind you at ${result.currentReminderTime * 100}`;
  });

  chrome.storage.sync.get("meditationTimeSet", (result) => {
    document.getElementById("meditationTimeSet").innerText = `You have set the meditation timer for ${result.meditationTimeSet / 60000} minutes`;
  });

  document.getElementById("reminderButton").addEventListener("click", () => {
    const reminderTime = document.getElementById("reminderSetting").value;
    chrome.storage.sync.set({ currentReminderTime: parseInt(reminderTime.replace(":", "")) / 100 });
    location.reload();
  });

  document.getElementById("meditationTimeButton").addEventListener("click", () => {
    const meditationTimeSet = parseInt(document.getElementById("meditationTime").value) * 60000;
    console.log(`meditation time set to: ${meditationTimeSet}`);
    chrome.storage.sync.set({ meditationTimeSet: meditationTimeSet });
    location.reload();
  });
});
