var newElement;
chrome.extension.sendMessage({cmd: "isLearnPageActivated"}, function (response) {
  if (response.isLearnPageActivated) {
    var id = chrome.i18n.getMessage("@@extension_id");
    newElement = document.createElement("link");
    newElement.rel = "stylesheet";
    newElement.type = "text/css";
    newElement.href = 'chrome-extension://' + id + '/css/downloadStyle.css';
    newElement.disabled=false;
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(newElement);
    $('#new_url').parent().parent().css('display', 'none');
    var tags = $('.textTD');
    var str = '<nav class="menu menu--ferdinand"><ul>';
    var tmp;
    tmp = tags[0].outerHTML;
    tmp = tmp.split('onclick=')[1].split('>')[0];
    str += '<li class="menu__item menu__item--current"><a class="menu__link" onclick=' + tmp + '>' + tags[0].innerHTML + '</a></li>';
    for (var i = 1; i < tags.length; i++) {
      tmp = tags[i].outerHTML;
      tmp = tmp.split('onclick=')[1].split('>')[0];
      str += '<li class="menu__item"><a class="menu__link" onclick=' + tmp + '>' + tags[i].innerHTML + '</a></li>';
    }
    str += '</ul></nav>';
    $('#table_box').parent().html(str);
    (function() {
			[].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
				var menuItems = menu.querySelectorAll('.menu__link'),
					setCurrent = function(ev) {
						ev.preventDefault();
						var item = ev.target.parentNode; // li
						// return if already current
						if (classie.has(item, 'menu__item--current')) {
							return false;
						}
						// remove current
						classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
						// set current
						classie.add(item, 'menu__item--current');
					};
				[].slice.call(menuItems).forEach(function(el) {
					el.addEventListener('click', setCurrent);
				});
			});
			[].slice.call(document.querySelectorAll('.link-copy')).forEach(function(link) {
				link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
				new Clipboard(link);
				link.addEventListener('click', function() {
					classie.add(link, 'link-copy--animate');
					setTimeout(function() {
						classie.remove(link, 'link-copy--animate');
					}, 300);
				});
			});
		})(window);
    $('nav').parent().css('background-color', '#31bc86');
  }
});
