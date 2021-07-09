document.addEventListener("DOMContentLoaded", () => {

  chrome.storage.sync.get("meditationTimeSet", (result) => {
    document.getElementById("meditationTimeSet").innerText = `You have set the meditation timer for ${result.meditationTimeSet / 60000} minutes`;
  });

  document.getElementById("meditationTimeButton").addEventListener("click", () => {
    const meditationTimeSet = parseInt(document.getElementById("meditationTime").value) * 60000;
    console.log(`meditation time set to: ${meditationTimeSet}`);
    chrome.storage.sync.set({ meditationTimeSet: meditationTimeSet });
    location.reload();
  });
});
