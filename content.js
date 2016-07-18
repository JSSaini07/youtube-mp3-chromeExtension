
download_link=undefined;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.message=='download'){
    url=request.url;
    document.getElementById("youtube-url").value=url;
    $('#submit').click();
    interval=setInterval(function(){checkforlink()},100);
  }
});

function checkforlink(){
  links=document.getElementById("dl_link");
  for(i=0;i<links.childElementCount;i++){
    if(links.children[i]!=undefined&&!links.children[i].href.includes('r=-1.1'))
    {
      download_link=links.children[i].href;
    }
  }
  if(download_link!=undefined){
    clearInterval(interval);
    startDownload(download_link);
  }
}

function startDownload(link){
  window.close();
  chrome.runtime.sendMessage({'message':'download','link':link});
}
