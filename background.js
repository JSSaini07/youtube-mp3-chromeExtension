
opened_tab_id="";
url="";

chrome.browserAction.onClicked.addListener(function(tab) {
  if(tab.url.includes('https://www.youtube.com/watch?v='))
  {
    url=tab.url;
    chrome.tabs.create({'url':'http://www.youtube-mp3.org/',active:false},function(tab){
      opened_tab_id=tab.id;
    });
  }
});

chrome.tabs.onUpdated.addListener(function(tabid,info,tab){
  if(info.status=='complete'&&opened_tab_id==tabid){
    chrome.tabs.sendMessage(opened_tab_id,{'message':'download','url':url});
  }
});

chrome.extension.onMessage.addListener(function(message, tabinfo) {
  console.log(message);
    if (message.message == 'download') {
        chrome.tabs.create({'url': message.link,active:false});
    };
});
