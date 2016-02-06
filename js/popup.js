$(document).ready(function() {
  var bkg_page = chrome.extension.getBackgroundPage();

  if (bkg_page.getOption("isLearnPageActivated")) {
    $("#activate").html("取消激活");
  } else {
    $("#activate").html("激活");
  }

  $('#activate').click(function () {
    if (bkg_page.getOption("isLearnPageActivated")) {
      isLearnPageActivated = false;
      bkg_page.setOption("isLearnPageActivated", false);
      $("#activate").html("激活");
    } else {
      isLearnPageActivated = true;
      bkg_page.setOption("isLearnPageActivated", true);
      $("#activate").html("取消激活");
    }
  });

  $('#userpass').keydown(function() {
    if(event.keyCode == 13) {
      $('#login').click();
    }
  });

  $('#login').click(function () {
    var userid = $('#userid').val();
    var userpass = $('#userpass').val();
    var url = "https://learn.tsinghua.edu.cn/MultiLanguage/lesson/teacher/loginteacher.jsp?userid=" + userid + "&userpass=" + userpass;
    chrome.tabs.create({'url': url});
  });
});
