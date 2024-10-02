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
javascript:(function()%20%7B%0A%20%20%20%20window.stopped%20%3D%20false%3B%0A%20%20%20%20if%20(void%200%20%3D%3D%3D%20window.e)%20alert(%22Please%20press%20Bookmarklet%20Again%20before%20you%20can%20use%20the%20farmer%2C%20this%20is%20essensial%20for%20this.%22)%3B%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20function%20farm()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(stopped%20%3D%3D%3D%20true)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_ssxvf9l%22)%5B0%5D%3F.click()%20%2F%2FTop%20Answer%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_1f0fvyce%22)%5B0%5D%3F.click()%20%2F%2FLets%20start%0A%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_rz7ls7u%22)%5B0%5D%3F.click()%20%2F%2FCheck%20answer%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_6t500vf%22)%5B0%5D%3F.click()%20%2F%2FNext%20question%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_1kkrg8oi%22)%5B0%5D%3F.click()%20%2F%2FNext%20assignment%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20farm()%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%201000)%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20farm()%0A%20%20%20%20%7D%0A%7D)();if(void 0!==window.e)alert("This has already been ran!");else{let e=JSON.parse;JSON.parse=function(a,t){let n=e(a,t);try{n&&n.data&&n.data.assessmentItem&&n.data.assessmentItem.item&&n.data.assessmentItem.item.itemData&&(n.data.assessmentItem.item.itemData='{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"Khan cheat by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}')}catch(r){console.error("Error modifying parsed data:",r)}return n},window.e=!0;document.write(document.getElementsByTagName("html")[0].outerHTML);}
```  

![khanthing](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/7a77ee4e-8d84-4135-b97c-5408b16f780b)
