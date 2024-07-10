[< Go back](https://github.com/ilytobias/Khan-Destroyer)
# Auto Answer
  
  **[Tutorial](https://www.youtube.com/watch?v=MdiaEcCMZf4)**
  <details>
    <summary>What does this do?</summary>
    
  *This automatically does your Khan academy lessons for you.*
  
  </details>
  
## Start

* Drag and drop this into your bookmarks bar
  
```js
javascript:alert("Answer Overwrite Loading...\n\nVersion: 1.1");let hook={};function hooker(key,data){hook[key]=data}document.open();document.write(`<iframe id="newPage" src="${location.href}" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>`);document.getElementById("newPage").contentWindow.eval(`let e=JSON.parse;JSON.parse=function(a,t){let n=e(a,t);try{for(let i=0;i<Object.keys(n.data).length;i++){let data=n.data[Object.keys(n.data)[i]];let key=Object.keys(n.data)[i];if(key==="assessmentItem"){n.data[Object.keys(n.data)[i]].item.itemData='{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"Khan cheat made by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}'}}}catch(r){}return n};const de=function(e,t){let n=document.getElementsByTagName(e);for(let i=0;i<n.length;i++){if(n[i].textContent.trim()===t){return n[i]}}return null};function ee(e,t){let n=de(e,t);if(n){n.scrollIntoView();n.click()}}function tt(e){let t=document.getElementsByClassName(e)[0];if(t){t.scrollIntoView();t.click()}}setInterval(function(){ee("button","Let’s go");tt("_ssxvf9l");ee("button","Check");ee("button","Try again");ee("button","Next question");ee("button","Show summary")},3e3);`);
```  

![khanthing](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/7a77ee4e-8d84-4135-b97c-5408b16f780b)
