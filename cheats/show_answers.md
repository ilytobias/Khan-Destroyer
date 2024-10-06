[< Go back](https://github.com/ilytobias/Khan-Destroyer)
# Answer revealer
  
  <details>
    <summary>What does this do?</summary>
    
  *It shows the answer to questions. Without the weird format like the other hacks.*
  
 ![image](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/0a03776e-bb84-44c3-bc53-410564e0995b)

  </details>

* Drag and drop this into your bookmarks bar
  
```js
javascript:"undefined"==typeof originalParse&&(window.originalParse=JSON.parse),JSON.parse=function(t,e){let n=originalParse(t,e);try{const t=JSON.parse(n.data.assessmentItem.item.itemData),e="pt"===location.hostname.split(".")[0];t.question&&t.question.content&&t.question.content[1]===t.question.content[1].toUpperCase()&&(console.log(t),t.question.content+="\n [[☃ explanation 3]] [[☃ explanation 4]]",t.question.widgets["explanation 3"]={alignment:"default",graded:!0,options:{explanation:t.hints[t.hints.length-1].content,hidePrompt:e?"Ocultar":"Hide",showPrompt:e?"Resposta":"Answer",static:!1,widgets:t.hints[t.hints.length-1]}},t.question.widgets["explanation 4"]={options:{explanation:"discord.gg/khanacademy",hidePrompt:"",showPrompt:"Discord"}},n.data.assessmentItem.item.itemData=JSON.stringify(t))}catch(t){console.error("Error parsing lesson data:",t)}return n},location.softReload=()=>{const t=document.getElementsByTagName("html")[0].outerHTML;document.open(),document.write(t),document.close()},location.softReload(),console.error=function(){};
```  
* Go on Khan.
* Press bookmark.
  <br>
![khanthing](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/7a77ee4e-8d84-4135-b97c-5408b16f780b)
