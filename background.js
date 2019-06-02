let online = 0;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.isOnline == 1) {
      online = 1;
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "this is test",
        message: "KD is handsome!"
      }, callback);

    } else {
      online=0;
    }

    sendResponse({isOnline: online});
  }
);

function callback() {}
