
try{
  document.getElementById("youtube-url").value=window.location.search.substr(5,window.location.search.length);
  window.location="javascript:btnSubmitClick()";
  var link=null;
  var getURL=setInterval(function(){
  if(link!=null){clearInterval(getURL);window.location=link;setTimeout(function(){window.close();},1000)}
    download_div=document.getElementById("dl_link");
    for(i=0;i<download_div.childElementCount;i++) {
      if(download_div.children[i].href.indexOf("s_create")>=0) {
        link=download_div.children[i].href;
        break;
      }
    }
  },1000);
}
catch(e){window.close();alert("Couldn't Download This Video!");}
