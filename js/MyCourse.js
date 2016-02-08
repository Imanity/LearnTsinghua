var newElement;
chrome.extension.sendMessage({cmd: "isLearnPageActivated"}, function (response) {
  if (response.isLearnPageActivated) {
    var id = chrome.i18n.getMessage("@@extension_id");
    newElement = document.createElement("link");
    newElement.rel = "stylesheet";
    newElement.type = "text/css";
    newElement.href = 'chrome-extension://' + id + '/css/MyCourseStyle.css';
    newElement.disabled = false;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(newElement);
    $('#info_1').html("<thead><tr><th>课程名称</th><th>未交作业</th><th>未读公告</th><th>新文件</th></tr></thead>" + $('#info_1').html());
    for (var i = 2; i < $('#info_1 tbody tr').length; i++) {
      var courseId = $('#info_1 tbody tr:eq(' + i + ') td:eq(0)').html().split('id=')[1].split('\"')[0];
      for (var j = 1; j < 4; j++) {
        var inner = $('#info_1 tbody tr:eq(' + i + ') td:eq(' + j + ')').html().split('个')[0] + '个</a>';
        switch (j) {
          case 1:
            inner = '<a class="detail" target="_blank" href="/MultiLanguage/lesson/student/hom_wk_brw.jsp?course_id=' + courseId + '">' + inner;
            break;
          case 2:
            inner = '<a class="detail" target="_blank" href="/MultiLanguage/public/bbs/getnoteid_student.jsp?course_id=' + courseId + '">' + inner;
            break;
          case 3:
            inner = '<a class="detail" target="_blank" href="/MultiLanguage/lesson/student/download.jsp?course_id=' + courseId + '">' + inner;
            break;
          default:
            break;
        }
        $('#info_1 tbody tr:eq(' + i + ') td:eq(' + j + ')').html(inner);
      }
    }
    var tmp = $('body').html();
    $('body').html(tmp + '<iframe id="detail" width="200px" height="160px"></iframe>');
    $('.detail').mouseover(function (e) {
      $('#detail').attr('src', this.href);
      $('#detail').css('display', 'inline');
      $('#detail').css('left', e.clientX + 50);
      $('#detail').css('top', e.clientY - 20);
    });
    $('.detail').mouseout(function () {
      $('#detail').css('display', 'none');
    });
  };
});
