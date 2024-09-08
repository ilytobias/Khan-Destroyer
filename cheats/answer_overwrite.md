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
javascript:let originalParse=JSON.parse;JSON.parse=function(e,t){let a=originalParse(e,t);try{a&&a.data&&"object"==typeof a.data&&Object.keys(a.data).forEach((e=>{let t=a.data[e];"assessmentItem"===e&&t&&t.item&&"object"==typeof t.item&&(t.item.itemData=JSON.stringify({answerArea:{calculator:!1,chi2Table:!1,periodicTable:!1,tTable:!1,zTable:!1},hints:[{content:"$\\\\begin{align}\\\\n\\\\left(\\\\dfrac{z^{4}}{6^{2}}\\\\right)^{-3}&=\\\\dfrac{\\\\left(z^{4}\\\\right)^{-3}}{\\\\left(6^{2}\\\\right)^{-3}}\\\\n\\\\end{align}$",images:{},replace:!1,widgets:{}},{content:"$\\\\begin{align}\\\\n\\\\phantom{\\\\left(\\\\dfrac{z^{4}}{6^{2}}\\\\right)^{-3}}&=\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\n&=\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\n&=\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\end{align}$",images:{},replace:!1,widgets:{}}],itemDataVersion:{major:0,minor:1},question:{content:"Khan cheat made by ilyTobias[[☃ radio 1]]",images:{},widgets:{"radio 1":{alignment:"default",graded:!0,options:{choices:[{content:"Correct answer",correct:!0},{content:"Incorrect answer",correct:!1}],deselectEnabled:!1,displayCount:null,hasNoneOfTheAbove:!1,multipleSelect:!1,onePerLine:!0,randomize:!1},static:!1,type:"radio",version:{major:1,minor:0}}}}}))}))}catch(e){console.error("Error processing JSON:",e)}return a};location.softReload = () => { const cachedHTML = document.getElementsByTagName("html")[0].outerHTML; document.open(); document.write(cachedHTML); document.close(); }; location.softReload()
```  
* Go on Khan.
* Press bookmark.
  <br>
![khanthing](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/7a77ee4e-8d84-4135-b97c-5408b16f780b)
