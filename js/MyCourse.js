var newElement;
chrome.extension.sendMessage({cmd: "isLearnPageActivated"}, function (response) {
  if (response.isLearnPageActivated) {
    var id = chrome.i18n.getMessage("@@extension_id");
    newElement = document.createElement("link");
    newElement.rel = "stylesheet";
    newElement.type = "text/css";
    newElement.href = 'chrome-extension://' + id + '/css/MyCourseStyle.css';
    newElement.disabled=false;
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(newElement);
    $('#info_1').html("<thead><tr><th>课程名称</th><th>未交作业</th><th>未读公告</th><th>新文件</th></tr></thead>" + $('#info_1').html());
    for (var i = 2; i < $('#info_1 tbody tr').length; i++) {
      for (var j = 1; j < 4; j++) {
        $('#info_1 tbody tr:eq(' + i + ') td:eq(' + j + ')').html($('#info_1 tbody tr:eq(' + i + ') td:eq(' + j + ')').html().split('个')[0]);
      }
    }
  }
});
