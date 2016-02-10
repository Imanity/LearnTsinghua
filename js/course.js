var newElement;
chrome.extension.sendMessage({cmd: "isLearnPageActivated"}, function (response) {
  if (response.isLearnPageActivated) {
    var id = chrome.i18n.getMessage("@@extension_id");
    newElement = document.createElement("link");
    newElement.rel = "stylesheet";
    newElement.type = "text/css";
    newElement.href = 'chrome-extension://' + id + '/css/courseStyle.css';
    newElement.disabled=false;
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(newElement);
    $('body').html($('body').html().split('scrolling="no"')[0] + 'id="frame"' + $('body').html().split('scrolling="no"')[1]);
    $('#frame').css('height', document.body.clientHeight + 'px'); 
  }
});
