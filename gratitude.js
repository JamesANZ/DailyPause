document.addEventListener("DOMContentLoaded", async () => {
  const gratitude = (await promisifiedChromeGet("gratitude")) ?? "";
  for (const g of gratitude) {
    document.getElementById("gratitudeLog").innerHTML += `<p>${g}</p></br>`;
  }
});
