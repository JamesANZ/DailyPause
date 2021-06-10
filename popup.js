// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
// TODO duplicate
const presetIntervals = {
  "#3aa757": 3600000, // 1 hour
  "#e8453c": 3600000 * 2, // 2 hours
  "#f9bb2d": 3600000 * 3, // 3 hours
  "#4688f1": 3600000 * 4 // 4 hours
}
const promptFor = 6000000; // 10 mins

const colorCB = ({ color }) => {
  changeColor.style.backgroundColor = color;
  changeColor.textContent = `${presetIntervals[color] / 3600000}H`;
};

const mindfulnessCallBack = ({ timestamp }) => {
  // reset the icon
  updateIcon(false);
  document.getElementById("status").innerText = `We will remind you to take a mindfulness break every ${timestamp / 3600000} hour(s)`;
  startTimer(timestamp / 1000);
  setTimeout(() => {
    //TODO trigger a notification
    document.getElementById("status").innerText = "This is a friendly reminder that it is time to take a mindfulness break";
    //set mindfulness timer
    startTimer(120);
    // change the icon to alert the user that it is time for a break
    updateIcon(true);
    // show this reminder for 10 minutes then start over
    setTimeout(() => {
      setMindfulnessReminder();
    }, promptFor);
  }, timestamp);
};

const updateIcon = (value) => {
  chrome.runtime.sendMessage({
    action: 'updateIcon',
    value: value
  });
}

chrome.storage.sync.get("color", colorCB);
chrome.storage.sync.get("timestamp", mindfulnessCallBack);

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setMindfulnessReminder,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", colorCB);
}

function setMindfulnessReminder() {
  chrome.storage.sync.get("timestamp", mindfulnessCallBack);
}
