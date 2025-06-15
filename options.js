document.addEventListener("DOMContentLoaded", () => {
  // Initialize the current setting display
  chrome.storage.sync.get("meditationTimeSet", (result) => {
    const minutes = result.meditationTimeSet / 60000;
    document.getElementById("meditationTimeSet").innerText =
      `Current meditation duration: ${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
    document.getElementById("meditationTime").value = minutes;
  });

  // Handle saving the meditation time
  document
    .getElementById("meditationTimeButton")
    .addEventListener("click", () => {
      const input = document.getElementById("meditationTime");
      const minutes = parseInt(input.value);

      // Validate input
      if (isNaN(minutes) || minutes < 1 || minutes > 60) {
        alert("Please enter a valid duration between 1 and 60 minutes.");
        return;
      }

      const meditationTimeSet = minutes * 60000;

      // Save the setting
      chrome.storage.sync.set({ meditationTimeSet: meditationTimeSet }, () => {
        // Update the display
        document.getElementById("meditationTimeSet").innerText =
          `Current meditation duration: ${minutes} ${minutes === 1 ? "minute" : "minutes"}`;

        // Show success message
        const button = document.getElementById("meditationTimeButton");
        const originalText = button.textContent;
        button.textContent = "Saved!";
        button.style.backgroundColor = "#43a047";

        // Reset button after 2 seconds
        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = "#4caf50";
        }, 2000);
      });
    });
});
