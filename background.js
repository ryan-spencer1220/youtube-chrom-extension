chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = URLSearchParams(queryParameters);
    console.log(urlParameters);
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
  const newVideoLoaded = () => {
    const bookmarkBtnExists =
      document.getElementsByClassName("bookmark-btn")[0];
  };
});
