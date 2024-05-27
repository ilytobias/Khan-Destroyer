[< Go back](https://github.com/ilytobias/Khan-Destroyer)
# Answer revealer
  
  **Tutorial coming soon...**
  <details>
    <summary>What does this do?</summary>
    
  *It shows the answer to questions. Without the weird format like the other hacks.*
  
 ![image](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/0a03776e-bb84-44c3-bc53-410564e0995b)

  </details>

* Drag and drop this into your bookmarks bar
  
```js
javascript:if(window.e!==undefined){alert("already ran")}else{let n=JSON.parse;JSON.parse=function(t){let e=n(t);try{let t=JSON.parse(e.data.assessmentItem.item.itemData);t.question.content=t.question.content+"[[☃ explanation 2]]";console.log(t);t.question.widgets["explanation 2"]={alignment:"default",graded:true,options:{explanation:t.hints[t.hints.length-1].content,hidePrompt:"Hide",showPrompt:"Answer",static:false,widgets:t.hints[t.hints.length-1].widgets},static:false,type:"explanation",version:{major:0,minor:0}};e.data.assessmentItem.item.itemData=JSON.stringify(t)}catch(t){}return e}}window.e=true;document.write(document.getElementsByTagName("html")[0].outerHTML);
```  
* Go on Khan.
* Press bookmark.
  <br>
![khanthing](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/7a77ee4e-8d84-4135-b97c-5408b16f780b)
