document.addEventListener("DOMContentLoaded", () => {

  chrome.storage.get("currentReminderTime", (time) => {
    document.getElementById("currentReminderTime").value = `we will remind you at ${time}`;
  });

  chrome.storage.get("meditationTimeSet", (time) => {
    document.getElementById("meditationTimeSet").value = `we will remind you at ${time}`;
  });

  document.getElementById("reminderButton").addEventListener("click", () => {
    const reminderTime = document.getElementById("reminderSetting").value;
    const reminerTimeAsDate = new Date(reminderTime).getHours();
    console.log(`reminder time set to: ${reminderTime}`);
    chrome.storage.sync.set({ reminderTime });
  });

  document.getElementById("meditationTimeButton").addEventListener("click", () => {
    const meditationTimeSet = document.getElementById("meditationTime").value;
    console.log(`meditation time set to: ${meditationTimeSet}`);
    chrome.storage.sync.set({ meditationTimeSet });
  });
});
