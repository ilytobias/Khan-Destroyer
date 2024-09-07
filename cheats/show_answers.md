[< Go back](https://github.com/ilytobias/Khan-Destroyer)
# Answer revealer
  
  <details>
    <summary>What does this do?</summary>
    
  *It shows the answer to questions. Without the weird format like the other hacks.*
  
 ![image](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/0a03776e-bb84-44c3-bc53-410564e0995b)

  </details>

* Drag and drop this into your bookmarks bar
  
```js
javascript:alert("Answer Revealer Loading...\n\nVersion: 1.1");let iframe=document.createElement("iframe");iframe.id="newPage";iframe.src=location.href;iframe.style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;";document.body.appendChild(iframe);let contentWindow=iframe.contentWindow;contentWindow.hook={};contentWindow.hooker=function(key,data){contentWindow.hook[key]=data};contentWindow.JSON.parse=function(a,t){let n=JSON.parse(a,t);try{if(n.data&&typeof n.data==="object"){for(let i=0;i<Object.keys(n.data).length;i++){let key=Object.keys(n.data)[i];let data=n.data[key];if(key==="assessmentItem"&&data&&typeof data.item==="object"){let itemData=JSON.parse(data.item.itemData);window.hook=itemData;itemData.question.content=itemData.question.content+"[[☃ explanation 2]]";itemData.question.widgets["explanation 2"]={alignment:"default",graded:true,options:{explanation:itemData.hints[itemData.hints.length-1].content,hidePrompt:"Hide",showPrompt:"Answer",static:false,widgets:itemData.hints[itemData.hints.length-1].widgets},static:false,type:"explanation",version:{major:0,minor:0}};n.data[key].item.itemData=JSON.stringify(itemData)}}}}catch(r){}return n};
```  
* Go on Khan.
* Press bookmark.
  <br>
![khanthing](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/7a77ee4e-8d84-4135-b97c-5408b16f780b)
