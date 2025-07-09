document.addEventListener("DOMContentLoaded", async () => {
  const gratitude = (await promisifiedChromeGet("gratitude")) ?? [];
  const gratitudeLog = document.getElementById("gratitudeLog");

  if (!Array.isArray(gratitude) || gratitude.length === 0) {
    gratitudeLog.innerHTML = `
      <div class="empty-state">
        <p>No gratitude entries yet. Start your meditation journey to begin recording your moments of gratitude.</p>
      </div>
    `;
    return;
  }

  // Sort entries by date (newest first)
  gratitude.sort((a, b) => {
    const [dayA, monthA, yearA] = a.split(" - ")[0].split("/");
    const [dayB, monthB, yearB] = b.split(" - ")[0].split("/");
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateB - dateA;
  });

  // Group entries by month
  const groupedEntries = {};
  gratitude.forEach((entry) => {
    const [dateStr, content] = entry.split(" - ");
    const [day, month, year] = dateStr.split("/");
    const date = new Date(year, month - 1, day);
    const monthYear = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    if (!groupedEntries[monthYear]) {
      groupedEntries[monthYear] = [];
    }
    groupedEntries[monthYear].push({ date, content });
  });

  // Create HTML for each month's entries
  Object.entries(groupedEntries).forEach(([monthYear, entries]) => {
    const monthSection = document.createElement("div");
    monthSection.className = "gratitude-month";
    monthSection.innerHTML = `
      <h3 class="month-header">${monthYear}</h3>
      <div class="month-entries">
        ${entries
          .map(
            (entry) => `
          <div class="gratitude-entry">
            <div class="entry-date">${entry.date.toLocaleDateString("en-US", { weekday: "long", day: "numeric" })}</div>
            <div class="entry-content">${entry.content}</div>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
    gratitudeLog.appendChild(monthSection);
  });

  // CSV Download functionality
  document.getElementById("downloadCSV").addEventListener("click", () => {
    downloadGratitudeCSV(gratitude);
  });
});

function downloadGratitudeCSV(gratitudeEntries) {
  // Create CSV content
  const csvContent = [
    // CSV header
    "Date,Gratitude Entry",
    // CSV data rows
    ...gratitudeEntries.map((entry) => {
      const [dateStr, content] = entry.split(" - ");
      const [day, month, year] = dateStr.split("/");
      const date = new Date(year, month - 1, day);

      // Format date as YYYY-MM-DD
      const formattedDate = date.toISOString().split("T")[0];

      // Escape content for CSV (handle quotes and commas)
      const escapedContent = content.replace(/"/g, '""');

      return `"${formattedDate}","${escapedContent}"`;
    }),
  ].join("\n");

  // Create and download the file
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `gratitude_journal_${new Date().toISOString().split("T")[0]}.csv`,
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
