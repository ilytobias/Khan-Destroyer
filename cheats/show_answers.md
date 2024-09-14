[< Go back](https://github.com/ilytobias/Khan-Destroyer)
# Answer revealer
  
  <details>
    <summary>What does this do?</summary>
    
  *It shows the answer to questions. Without the weird format like the other hacks.*
  
 ![image](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/0a03776e-bb84-44c3-bc53-410564e0995b)

  </details>

* Drag and drop this into your bookmarks bar
  
```js
alert("Thanks for using my hack, answer revealer loading..."),void 0===window.originalJSON&&(window.originalJSON=JSON.parse),location.softReload=()=>{const t=document.getElementsByTagName("html")[0].outerHTML;document.open(),document.write(t),document.close()},window.hook={},JSON.parse=function(t,e){let o=window.originalJSON(t,e);try{o&&o.data&&"object"==typeof o.data&&Object.keys(o.data).forEach((t=>{let e=o.data[t];if("assessmentItem"===t&&e&&"object"==typeof e.item&&e.item.itemData){let n=JSON.parse(e.item.itemData);window.hook=n,n.question&&"object"==typeof n.question&&(n.question.content+="[[☃ explanation 2]]",n.question.widgets["explanation 2"]={alignment:"default",graded:!0,options:{explanation:n.hints[n.hints.length-1].content,hidePrompt:"Hide",showPrompt:"Answer",static:!1,widgets:n.hints[n.hints.length-1].widgets},static:!1,type:"explanation",version:{major:0,minor:0}}),o.data[t].item.itemData=JSON.stringify(n)}}))}catch(t){console.error("Error parsing JSON:",t)}return o},location.softReload();
```  
* Go on Khan.
* Press bookmark.
  <br>
![khanthing](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/7a77ee4e-8d84-4135-b97c-5408b16f780b)
