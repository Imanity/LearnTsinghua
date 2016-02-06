var isLearnPageActivated = true;

function getOption(str) {
  if (str == 'isLearnPageActivated') {
    return isLearnPageActivated;
  }
}

function setOption(str, val) {
  if (str == 'isLearnPageActivated') {
    isLearnPageActivated = val;
  }
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	switch (request.cmd) {
    case 'isLearnPageActivated':
      sendResponse({
        isLearnPageActivated: isLearnPageActivated
      });
      return true;
    default:
      sendResponse({
				result: "unknown"
			});
			return false;
  }
});
