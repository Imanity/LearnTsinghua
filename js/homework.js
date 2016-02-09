var newElement;
chrome.extension.sendMessage({cmd: "isLearnPageActivated"}, function (response) {
  if (response.isLearnPageActivated) {
    var id = chrome.i18n.getMessage("@@extension_id");
    newElement = document.createElement("link");
    newElement.rel = "stylesheet";
    newElement.type = "text/css";
    newElement.href = 'chrome-extension://' + id + '/css/homeworkStyle.css';
    newElement.disabled=false;
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(newElement);
    $('.info_title').html('<div>' + $('.info_title').html().split('&nbsp;')[1].split('\"')[0] + '</div><button class="button button--winona button--border-thin button--round-s" data-text="查看成绩" onclick="javascript:window.location.href=\'hom_wk_recmark.jsp?course_id=133402\';"><span>查看成绩</span></button>');
  }
});
