// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
let meditativeImage = document.getElementById("meditativeImage");
// TODO duplicate
const presetIntervals = {
  "#3aa757": 3600000, // 1 hour
  "#e8453c": 3600000 * 2, // 2 hours
  "#f9bb2d": 3600000 * 3, // 3 hours
  "#4688f1": 3600000 * 4 // 4 hours
}
const images = [
    "https://www.planetware.com/wpimages/2020/02/new-zealand-in-pictures-beautiful-places-to-photograph-milford-sound.jpg",
    "https://cdn.cnn.com/cnnnext/dam/assets/191212010209-01-new-zealand-beautiful-places-cape-reinga.jpg",
    "https://i.natgeofe.com/n/f14f6c30-8d11-4e33-a5e9-05f1b50bdde3/yosemite-national-park-california.jpg?w=636&h=426"
]
const promptFor = 6500000; // 15 mins

const colorCB = ({ color }) => {
  changeColor.style.backgroundColor = color;
  changeColor.textContent = `${presetIntervals[color] / 3600000}H`;
  meditativeImage.src = images[getRandomInt(images.length)];
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const mindfulnessCallBack = ({ timestamp }) => {
  // reset the icon
  updateIcon(false);
  document.getElementById("status").innerText = `We will remind you to take a mindfulness break every ${timestamp / 3600000} hour(s)`;
  setTimeout(() => {
    //TODO trigger a notification
    document.getElementById("status").innerText = "This is a friendly reminder that it is time to take a mindfulness break";
    // change the icon to alert the user that it is time for a break
    updateIcon(true);
    // show this reminder for 15 minutes then start over
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
