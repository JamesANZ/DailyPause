document.addEventListener("DOMContentLoaded", async () => {
  const gratitude = await promisifiedChromeGet("gratitude");
  if (gratitude) {
    document.getElementById("gratitudeLog").innerText = gratitude.split(",");
  }
});
