$(document).ready(function() {
  var bkg_page = chrome.extension.getBackgroundPage();

  if (bkg_page.getOption("isLearnPageActivated")) {
    $("#activate").html("<img src=\"images/setting.png\"/>显示原网页");
  } else {
    $("#activate").html("<img src=\"images/setting.png\"/>开启功能");
  }

  $('#activate').click(function () {
    if (bkg_page.getOption("isLearnPageActivated")) {
      isLearnPageActivated = false;
      bkg_page.setOption("isLearnPageActivated", false);
      $("#activate").html("<img src=\"images/setting.png\"/>开启功能");
    } else {
      isLearnPageActivated = true;
      bkg_page.setOption("isLearnPageActivated", true);
      $("#activate").html("<img src=\"images/setting.png\"/>显示原网页");
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

  $('.copyright').click(function () {
    chrome.tabs.create({'url': "http://imanity.cn"});
  });
  $('.copyright').mouseover(function () {
    $('#copyright').css('display', 'inline');
  });
  $('.copyright').mouseout(function () {
    $('#copyright').css('display', 'none');
  });
});
