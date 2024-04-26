/* Footer Button */
const appStoreButton = document.getElementById("appStoreButton");
appStoreButton.addEventListener("click", () => {
  window.location.href =
    "https://apps.apple.com/us/app/medium-read-write-stories/id828256236?ct=&pt=698524";
});

const googlePlayButton = document.getElementById("googlePlayButton");
googlePlayButton.addEventListener("click", () => {
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.medium.reader&pli=1";
});
