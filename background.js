const defaultColor = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color: defaultColor });
    console.log('Default background color set to %cgreen', `color: ${defaultColor}`);
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "updateIcon") {
        if (msg.value) {
            // set back to original
            chrome.browserAction.setIcon({
                path : {
                    "16": "images/Pause16.png",
                    "32": "images/Pause32.png",
                    "48": "images/Pause48.png",
                    "128": "images/Pause128.png"
                }
            });
        } else {
            // set to alert mode to remind user of mindfulness break
            chrome.browserAction.setIcon({
                path : {
                    "16": "images/Pause16.png",
                    "32": "images/Pause32.png",
                    "48": "images/Pause48.png",
                    "128": "images/Pause128.png"
                }
            });
        }
    }
});