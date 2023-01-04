() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { obj, value, videoId } = obj;

    if (type === "NEW") {
      currentVideo = videoId;
      newVideoLoaded();
    }
  });
};
