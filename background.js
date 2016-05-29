
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'if(window.location.hostname=="www.youtube.com"&&window.location.pathname=="/watch"&&window.location.search!=""){url=window.location.hostname+window.location.pathname+window.location.search;window.open("http://www.youtube-mp3.org/?url="+url)}'
  });
});
