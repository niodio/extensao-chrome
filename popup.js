let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setChanges,
  });
});

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

function setChanges() {
  document;
  // .querySelector(
  //   "body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img"
  // )
  // .remove();
  document.querySelector(
    "body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div"
  ).innerHTML = `<img src="https://c4.wallpaperflare.com/wallpaper/542/137/251/bleach-anime-zaraki-kenpachi-wallpaper-preview.jpg" alt="Google" />`;
}
