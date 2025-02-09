document.addEventListener("DOMContentLoaded", async () => {
  const gratitude = (await promisifiedChromeGet("gratitude")) ?? "";
  document.getElementById("gratitudeLog").innerText = gratitude.toString();
});
