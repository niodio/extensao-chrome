//abrir site do google ao instalar extensão
chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.create({ url: "https://www.google.com" });
});

// background.js

let color = "#000000";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});
