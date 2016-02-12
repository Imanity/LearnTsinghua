var newElement;
chrome.extension.sendMessage({cmd: "isLearnPageActivated"}, function (response) {
  if (response.isLearnPageActivated) {
    var id = chrome.i18n.getMessage("@@extension_id");
    newElement = document.createElement("link");
    newElement.rel = "stylesheet";
    newElement.type = "text/css";
    newElement.href = 'chrome-extension://' + id + '/css/courseStyle.css';
    newElement.disabled=false;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(newElement);
    $('body').html($('body').html().split('scrolling="no"')[0] + 'id="frame"' + $('body').html().split('scrolling="no"')[1]);
    $('#frame').css('height', document.body.clientHeight + 'px');
    var content = $('#left_menu .menu_common');
    var str = '<div id="menu"><div id="circle">菜单</div>';
    for (var i = 0; i < content.length; i++) {
      str += '<div id="circle">' + content[i].innerHTML + '</div>';
    }
    $('body').html($('body').html() + str + '</div><div id="mask"></div>');
    $('#circle:nth-child(1)').css('background-image', 'url("chrome-extension://' + id + '/images/color0.png")');
    for (var i = 0; i < content.length; i++) {
      $('#circle:nth-child(' + (i + 2) + ')').css('background-image', 'url("chrome-extension://' + id + '/images/color' + (i + 1) + '.png")');
    };
    var elem = document.querySelector('#circle:nth-child(1)');
    var draggie = new Draggabilly(elem);
    function onDragMove(instance, event, pointer) {
      $('#mask').css('display', 'block');
      for (var i = 0; i < content.length; i++) {
        $('#circle:nth-child(' + (i + 2) + ')').css('display', 'none');
      }
    };
    draggie.on('dragMove', onDragMove);
    $('#circle:nth-child(1)').mouseenter(function () {
      var angle = 0;
      var left_pos = 0, top_pos = 0;
      var radius = 200;
      for (var i = 0; i < content.length; i++) {
        angle += 2 * Math.PI / content.length;
        left_pos = parseInt($('#circle:nth-child(1)').css('left')) - 100 * Math.cos(angle);
        top_pos = parseInt($('#circle:nth-child(1)').css('top')) - 100 * Math.sin(angle);
        $('#circle:nth-child(' + (i + 2) + ')').css('width', '70px');
        $('#circle:nth-child(' + (i + 2) + ')').css('height', '70px');
        $('#circle:nth-child(' + (i + 2) + ')').css('border-radius', '35px');
        $('#circle:nth-child(' + (i + 2) + ')').css('background-size', '70px');
        $('#circle:nth-child(' + (i + 2) + ')').css('font-size', '14px');
        $('#circle:nth-child(' + (i + 2) + ')').css('padding-top', '28px');
        $('#circle:nth-child(' + (i + 2) + ')').css('display', 'inline');
        $('#circle:nth-child(' + (i + 2) + ')').css('left', $('#circle:nth-child(1)').css('left'));
        $('#circle:nth-child(' + (i + 2) + ')').css('top', $('#circle:nth-child(1)').css('top'));
        $('#circle:nth-child(' + (i + 2) + ')').animate({left: left_pos, top: top_pos});
      };
    });
    $(document).mouseup(function () {
      $('#mask').css('display', 'none');
      for (var i = 0; i < content.length; i++) {
        $('#circle:nth-child(' + (i + 2) + ')').css('left', $('#circle:nth-child(1)').css('left'));
        $('#circle:nth-child(' + (i + 2) + ')').css('top', $('#circle:nth-child(1)').css('top'));
      }
    });
    var init_X = document.body.clientWidth / 2 - 35;
    var init_Y = document.body.clientHeight - 270;
    $('#circle:nth-child(1)').css('left', init_X);
    $('#circle:nth-child(1)').css('top', init_Y);
    for (var i = 0; i < content.length; i++) {
      console.log(i);
      $('#circle:nth-child(' + (i + 2) + ')').css('left', init_X);
      $('#circle:nth-child(' + (i + 2) + ')').css('top', init_Y);
    }
    $('#circle:nth-child(2)').mouseenter(function () {
      $('#circle:nth-child(2)').animate({width: '100px', height: '100px', 'border-radius': '50px', 'background-size': '100px', 'font-size': '20px', 'padding-top': '40px', 'left': '-=15px', 'top': '-=15px'});
    });
    $('#circle:nth-child(3)').mouseenter(function () {
      $('#circle:nth-child(3)').animate({width: '100px', height: '100px', 'border-radius': '50px', 'background-size': '100px', 'font-size': '20px', 'padding-top': '40px', 'left': '-=15px', 'top': '-=15px'});
    });
    $('#circle:nth-child(4)').mouseenter(function () {
      $('#circle:nth-child(4)').animate({width: '100px', height: '100px', 'border-radius': '50px', 'background-size': '100px', 'font-size': '20px', 'padding-top': '40px', 'left': '-=15px', 'top': '-=15px'});
    });
    $('#circle:nth-child(5)').mouseenter(function () {
      $('#circle:nth-child(5)').animate({width: '100px', height: '100px', 'border-radius': '50px', 'background-size': '100px', 'font-size': '20px', 'padding-top': '40px', 'left': '-=15px', 'top': '-=15px'});
    });
    $('#circle:nth-child(6)').mouseenter(function () {
      $('#circle:nth-child(6)').animate({width: '100px', height: '100px', 'border-radius': '50px', 'background-size': '100px', 'font-size': '20px', 'padding-top': '40px', 'left': '-=15px', 'top': '-=15px'});
    });
    $('#circle:nth-child(7)').mouseenter(function () {
      $('#circle:nth-child(7)').animate({width: '100px', height: '100px', 'border-radius': '50px', 'background-size': '100px', 'font-size': '20px', 'padding-top': '40px', 'left': '-=15px', 'top': '-=15px'});
    });
    $('#circle:nth-child(8)').mouseenter(function () {
      $('#circle:nth-child(8)').animate({width: '100px', height: '100px', 'border-radius': '50px', 'background-size': '100px', 'font-size': '20px', 'padding-top': '40px', 'left': '-=15px', 'top': '-=15px'});
    });
    $('#circle:nth-child(9)').mouseenter(function () {
      $('#circle:nth-child(9)').animate({width: '100px', height: '100px', 'border-radius': '50px', 'background-size': '100px', 'font-size': '20px', 'padding-top': '40px', 'left': '-=15px', 'top': '-=15px'});
    });
    $('#circle:nth-child(2)').mouseleave(function () {
      $('#circle:nth-child(2)').animate({width: '70px', height: '70px', 'border-radius': '35px', 'background-size': '70px', 'font-size': '14px', 'padding-top': '28px', 'left': '+=15px', 'top': '+=15px'});
    });
    $('#circle:nth-child(3)').mouseleave(function () {
      $('#circle:nth-child(3)').animate({width: '70px', height: '70px', 'border-radius': '35px', 'background-size': '70px', 'font-size': '14px', 'padding-top': '28px', 'left': '+=15px', 'top': '+=15px'});
    });
    $('#circle:nth-child(4)').mouseleave(function () {
      $('#circle:nth-child(4)').animate({width: '70px', height: '70px', 'border-radius': '35px', 'background-size': '70px', 'font-size': '14px', 'padding-top': '28px', 'left': '+=15px', 'top': '+=15px'});
    });
    $('#circle:nth-child(5)').mouseleave(function () {
      $('#circle:nth-child(5)').animate({width: '70px', height: '70px', 'border-radius': '35px', 'background-size': '70px', 'font-size': '14px', 'padding-top': '28px', 'left': '+=15px', 'top': '+=15px'});
    });
    $('#circle:nth-child(6)').mouseleave(function () {
      $('#circle:nth-child(6)').animate({width: '70px', height: '70px', 'border-radius': '35px', 'background-size': '70px', 'font-size': '14px', 'padding-top': '28px', 'left': '+=15px', 'top': '+=15px'});
    });
    $('#circle:nth-child(7)').mouseleave(function () {
      $('#circle:nth-child(7)').animate({width: '70px', height: '70px', 'border-radius': '35px', 'background-size': '70px', 'font-size': '14px', 'padding-top': '28px', 'left': '+=15px', 'top': '+=15px'});
    });
    $('#circle:nth-child(8)').mouseleave(function () {
      $('#circle:nth-child(8)').animate({width: '70px', height: '70px', 'border-radius': '35px', 'background-size': '70px', 'font-size': '14px', 'padding-top': '28px', 'left': '+=15px', 'top': '+=15px'});
    });
    $('#circle:nth-child(9)').mouseleave(function () {
      $('#circle:nth-child(9)').animate({width: '70px', height: '70px', 'border-radius': '35px', 'background-size': '70px', 'font-size': '14px', 'padding-top': '28px', 'left': '+=15px', 'top': '+=15px'});
    });
  };
});
