[< Go back](https://github.com/ilytobias/Khan-Destroyer)
# Answer Overwrite
  
  **[Tutorial](https://www.youtube.com/watch?v=kM1oWRX2_TU)**
  <details>
    <summary>What does this do?</summary>
    
  *This overwrites your questions to look like this. And it still counts as a correct answer.*
  
  ![Screenshot 2024-04-03 114349](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/704501ab-e727-47fa-924b-6ae5367f8249)
  </details>

* Drag and drop this into your bookmarks bar
  
```js
javascript:let originalParse=JSON.parse;console.log("if you look in the console you WILL see a error, they save it as a question though so I'm not worried about it right now."),JSON.parse=function(t,e){let o=originalParse(t,e);try{const t=JSON.parse(o.data.assessmentItem.item.itemData);t.question&&t.question.content&&t.question.content[1]===t.question.content[1].toUpperCase()&&(console.log(t),t.question.content="Please select a answer choice.\n [[☃ radio 1]] [[☃ explanation 1]]",t.question.widgets={"radio 1":{options:{choices:[{content:"Correct",correct:!0},{content:"Incorrect",correct:!1}]}},"explanation 1":{options:{explanation:"This hack was made by @ilyTobias on Discord & GitHub.",hidePrompt:"",showPrompt:"Credit"}}},o.data.assessmentItem.item.itemData=JSON.stringify(t))}catch(t){}return o},location.softReload=()=>{const t=document.getElementsByTagName("html")[0].outerHTML;document.open(),document.write(t),document.close()},location.softReload();
```  
* Go on Khan.
* Press bookmark.
  <br>
![khanthing](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/7a77ee4e-8d84-4135-b97c-5408b16f780b)
