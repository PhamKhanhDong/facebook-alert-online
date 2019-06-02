let id = 123456789;
setInterval(function() {
  $("._42fz").each(function(index, element) {
    if ($(element).data("id") == id) {
      if($(element).find("._5bon").find("span").length > 0 && $(element).find("._5bon").find("span").attr("aria-label") == "Đang hoạt động") {
        chrome.runtime.sendMessage({isOnline: 1}, function(response) { });
      }
    }
  });
}, 3000);
