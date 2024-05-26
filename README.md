<p align="center">
<img src="https://github.com/ilytobias/Khan-Destroyer/assets/165577429/fcd7fa24-a62c-46c8-bc02-78463bd4c64a"/><div align="center">

  (logo made by [orphanlol](https://github.com/orphanlol))
</div>

## Support
<div align="center">
  
  Join the [Discord](https://discord.gg/pujbPqMyPF), or star this repo, thank you. <br>
  Running `beta.js` shows the answer if you're opting for a less subtle version of Khan Destroyer.
</div>

## About
<div align="center">

**Important** Most of these are bookmarklets, which you drag to your browser. <br>
  This is the best Khan Academy hack available. I've dedicated weeks of my time to developing this because I dislike the way school websites operate, even though Khan Academy is one of the better ones. Despite its quality, I believe these platforms should reconsider their approach. While most people aren't required to use Khan Academy, I unfortunately am, and I'm tired of spending hours on it for just 10% of my grade, which I still really need. I hope this hack proves useful to anyone who needs it. **Remember, nobody's forcing you to use this.**
  
  TLDR: This Khan hack is better then the rest. (And that's not because I made it - deneu)
  
  _This is my hack (shown in the first image) compared to the [top Khan Academy hack](https://github.com/adubov1/khanacademy_bot) (shown in the second image). Although the other hack is still functional and effective, mine is arguably better because it requires no manual work and eliminates the need for the inspect element console. The only problem is there's no GUI, but that will be subject to change_
  
  ![image](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/83318dc6-0992-4dae-8f2b-4aba24a33749)
  ![image](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/27749e03-6c76-4a0a-89f0-6822885a431e)
</div>
  <details>
    <summary>Features</summary>

  ## These are all the wonderful features of this cheat.
    
  **Anything without a check is planned to be added soon. (In order of what'll be added.)**
  - [x] Answer Overwrite
  *This makes the question only have 1 answer so you can go through it fast.*|
  - [x] Point Farmer.
  *Farms many lessons at the same time now.*
  - [x] Auto Answer.
  - [ ] Skipper.
  - [ ] Answer Viewer. Est: ???
  - [ ] Client side badges, points, ect. Est: ???
  </details>
  
   ## Hacks
  <details>
    <summary>Answer Overwrite</summary>
    
  [Tutorial](https://www.youtube.com/watch?v=kM1oWRX2_TU)
  
  *This overwrites your questions to look like this. Still counts as a correct answer.*
  
  ![Screenshot 2024-04-03 114349](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/704501ab-e727-47fa-924b-6ae5367f8249)
  
  * Drag and drop this into your bookmarks bar
    
  ```js
  javascript:if(void 0!==window.e)alert("already ran");else{let e=JSON.parse;JSON.parse=function(a,t){let n=e(a,t);try{n&&n.data&&n.data.assessmentItem&&n.data.assessmentItem.item&&n.data.assessmentItem.item.itemData&&(n.data.assessmentItem.item.itemData='{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"free young thug made by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}')}catch(r){console.error("Error modifying parsed data:",r)}return n},window.e=!0;document.write(document.getElementsByTagName("html")[0].outerHTML);}
```  
  * Go on Khan.
  * Press bookmark.
  </details>
  
  <details>
    <summary>Auto Answer Questions</summary>
    
**[Tutorial](https://www.youtube.com/watch?v=MdiaEcCMZf4)**
  * Drag and drop this into your bookmarks bar
      
  ```js
  javascript:(function()%20%7B%0A%20%20%20%20window.stopped%20%3D%20false%3B%0A%20%20%20%20if%20(void%200%20%3D%3D%3D%20window.e)%20alert(%22Please%20press%20Bookmarklet%20Again%20before%20you%20can%20use%20the%20farmer%2C%20this%20is%20essensial%20for%20this.%22)%3B%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20function%20farm()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(stopped%20%3D%3D%3D%20true)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_ssxvf9l%22)%5B0%5D%3F.click()%20%2F%2FTop%20Answer%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_1f0fvyce%22)%5B0%5D%3F.click()%20%2F%2FLets%20start%0A%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_rz7ls7u%22)%5B0%5D%3F.click()%20%2F%2FCheck%20answer%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_6t500vf%22)%5B0%5D%3F.click()%20%2F%2FNext%20question%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_1kkrg8oi%22)%5B0%5D%3F.click()%20%2F%2FNext%20assignment%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20farm()%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%201000)%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20farm()%0A%20%20%20%20%7D%0A%7D)();if(void 0!==window.e)alert("already ran");else{let e=JSON.parse;JSON.parse=function(a,t){let n=e(a,t);try{n&&n.data&&n.data.assessmentItem&&n.data.assessmentItem.item&&n.data.assessmentItem.item.itemData&&(n.data.assessmentItem.item.itemData='{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"free young thug made by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}')}catch(r){console.error("Error modifying parsed data:",r)}return n},window.e=!0;document.write(document.getElementsByTagName("html")[0].outerHTML);}
```
    
  * Go on Khan.
  * Press bookmark.
    
  </details>
  
  <details>
    <summary>Energy Point Farmer</summary>
  
* This makes you farm alot of Khan Academy energy points.
  
**I wouldn't use this if you don't know what it is, this is useless for normal people***
  <br>
  
![image](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/c95d39df-6370-4e6a-86ae-b55cb34f6842)
  
* Drag and drop this into your bookmarks bar
  
  ```js
  javascript:document.write(%27%3Chtml%3E%3Ch1%3EHow%20to%20use%3C%2Fh1%3E%3Ch2%3EMake%20sure%20you%20ran%20this%20bookmark%20on%20a%20khan%20url%2C%20doesnt%20matter%20what%20url%20as%20long%20as%20its%20an%20offical%20khan%20link.%3C%2Fh1%3E%3C%2Fbr%3E%3Cp%3EPut%20a%20khan%20academy%20url%20to%20a%20lesson%20into%20a%20input%20box%20bellow%2C%20then%20press%20the%20farm%20button%20and%20it%5C%27ll%20farm%20points%20on%20that%20lesson%2C%20you%20can%20farm%20from%20more%20then%20one%20url%20at%20a%20time%20BUT%20NOT%20THE%20SAME%20LESSON.%3C%2Fp%3E%3Cinput%20id%3D%22url%22%3E%3C%2Finput%3E%3Cbutton%20id%3D%22btn%22%20onclick%3D%22makeFrame(document.getElementById(%5C%27url%5C%27).value)%22%3EFarm%3C%2Fbutton%3E%3C%2Fhtml%3E%27)%3Bfunction%20e(e)%7Bconst%20t%3Ddocument.createElement(%22iframe%22)%3Bt.width%3D%221px%22%3Bt.height%3D%221px%22%3Bt.src%3De%3Bdocument.getElementsByTagName(%22html%22)%5B0%5D.appendChild(t)%3Bconst%20a%3Dt.contentWindow%3Ba.eval(%60let%20e%3DJSON.parse%3BJSON.parse%3Dfunction(t%2Cn)%7Blet%20a%3De(t%2Cn)%3Btry%7Bconsole.log(a)%3Ba.question%3D%7Bcontent%3A%22free%20young%20thug%20made%20by%20ilyTobias%5B%5B%E2%98%83%20radio%201%5D%5D%22%2Cimages%3A%7B%7D%2Cwidgets%3A%7B%22radio%201%22%3A%7Balignment%3A%22default%22%2Cgraded%3Atrue%2Coptions%3A%7Bchoices%3A%5B%7Bcontent%3A%22Correct%20answer%22%2Ccorrect%3Atrue%7D%2C%7Bcontent%3A%22Incorrect%20answer%22%2Ccorrect%3Afalse%7D%5D%2CdeselectEnabled%3Afalse%2CdisplayCount%3Anull%2ChasNoneOfTheAbove%3Afalse%2CmultipleSelect%3Afalse%2ConePerLine%3Atrue%2Crandomize%3Afalse%7D%2C%22static%22%3Afalse%2Ctype%3A%22radio%22%2Cversion%3A%7Bmajor%3A1%2Cminor%3A0%7D%7D%7D%7D%3Ba%26%26a.data%26%26a.data.t%26%26a.data.t.item%26%26a.data.t.item.i%26%26(a.data.t.item.i%3D%27%7B%22answerArea%22%3A%7B%22calculator%22%3Afalse%2C%22chi2Table%22%3Afalse%2C%22periodicTable%22%3Afalse%2C%22tTable%22%3Afalse%2C%22zTable%22%3Afalse%7D%2C%22hints%22%3A%5B%7B%22content%22%3A%22%24%5C%5C%5C%5C%5C%5C%5C%5Cbegin%7Balign%7D%5C%5C%5C%5Cn%5C%5C%5C%5C%5C%5C%5C%5Cleft(%5C%5C%5C%5C%5C%5C%5C%5Cdfrac%7Bz%5E%7B4%7D%7D%7B6%5E%7B2%7D%7D%5C%5C%5C%5C%5C%5C%5C%5Cright)%5E%7B-3%7D%26%3D%5C%5C%5C%5C%5C%5C%5C%5Cdfrac%7B%5C%5C%5C%5C%5C%5C%5C%5Cleft(z%5E%7B4%7D%5C%5C%5C%5C%5C%5C%5C%5Cright)%5E%7B-3%7D%7D%7B%5C%5C%5C%5C%5C%5C%5C%5Cleft(6%5E%7B2%7D%5C%5C%5C%5C%5C%5C%5C%5Cright)%5E%7B-3%7D%7D%5C%5C%5C%5Cn%5C%5C%5C%5C%5C%5C%5C%5Cend%7Balign%7D%24%22%2C%22images%22%3A%7B%7D%2C%22replace%22%3Afalse%2C%22widgets%22%3A%7B%7D%7D%2C%7B%22content%22%3A%22%24%5C%5C%5C%5C%5C%5C%5C%5Cbegin%7Balign%7D%5C%5C%5C%5Cn%5C%5C%5C%5C%5C%5C%5C%5Cphantom%7B%5C%5C%5C%5C%5C%5C%5C%5Cleft(%5C%5C%5C%5C%5C%5C%5C%5Cdfrac%7Bz%5E%7B4%7D%7D%7B6%5E%7B2%7D%7D%5C%5C%5C%5C%5C%5C%5C%5Cright)%5E%7B-3%7D%7D%26%3D%5C%5C%5C%5C%5C%5C%5C%5Cdfrac%7Bz%5E%7B(4)(-3)%7D%7D%7B6%5E%7B(2)(-3)%7D%7D%5C%5C%5C%5Cn%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5Cn%26%3D%5C%5C%5C%5C%5C%5C%5C%5Cdfrac%7Bz%5E%7B-12%7D%7D%7B6%5E%7B-6%7D%7D%5C%5C%5C%5Cn%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5Cn%26%3D%5C%5C%5C%5C%5C%5C%5C%5Cdfrac%7B6%5E%7B6%7D%7D%7Bz%5E%7B12%7D%7D%5C%5C%5C%5Cn%5C%5C%5C%5C%5C%5C%5C%5Cend%7Balign%7D%24%22%2C%22images%22%3A%7B%7D%2C%22replace%22%3Afalse%2C%22widgets%22%3A%7B%7D%7D%5D%2C%22itemDataVersion%22%3A%7B%22major%22%3A0%2C%22minor%22%3A1%7D%2C%22question%22%3A%7B%22content%22%3A%22free%20young%20thug%20made%20by%20ilyTobias%5B%5B%E2%98%83%20radio%201%5D%5D%22%2C%22images%22%3A%7B%7D%2C%22widgets%22%3A%7B%22radio%201%22%3A%7B%22alignment%22%3A%22default%22%2C%22graded%22%3Atrue%2C%22options%22%3A%7B%22choices%22%3A%5B%7B%22content%22%3A%22Correct%20answer%22%2C%22correct%22%3Atrue%7D%2C%7B%22content%22%3A%22Incorrect%20answer%22%2C%22correct%22%3Afalse%7D%5D%2C%22deselectEnabled%22%3Afalse%2C%22displayCount%22%3Anull%2C%22hasNoneOfTheAbove%22%3Afalse%2C%22multipleSelect%22%3Afalse%2C%22onePerLine%22%3Atrue%2C%22randomize%22%3Afalse%7D%2C%22static%22%3Afalse%2C%22type%22%3A%22radio%22%2C%22version%22%3A%7B%22major%22%3A1%2C%22minor%22%3A0%7D%7D%7D%7D%7D%27)%7Dcatch(r)%7Bconsole.error(%22Error%20modifying%20parsed%20data%3A%22%2Cr)%7Dreturn%20a%7D%2Cwindow.e%3D!0%3B(function()%7Bwindow.stopped%3Dfalse%3Bif(void%200%3D%3D%3Dwindow.e)alert(%22Please%20run%20Khan%20Destroyer%20before%20you%20use%20the%20farmer%2C%20this%20is%20essensial%20for%20this.%22)%3Belse%7Bfunction%20e()%7Bif(stopped%3D%3D%3Dtrue)%7Breturn%7Ddocument.getElementsByClassName(%22_ssxvf9l%22)%5B0%5D%3F.click()%3Bdocument.getElementsByClassName(%22_1f0fvyce%22)%5B0%5D%3F.click()%3BsetTimeout(function()%7Bdocument.getElementsByClassName(%22_rz7ls7u%22)%5B0%5D%3F.click()%3Bdocument.getElementsByClassName(%22_6t500vf%22)%5B0%5D%3F.click()%3Bdocument.getElementsByClassName(%22_dyu04hi%22)%5B0%5D%3F.click()%3Be()%7D%2C1e3)%7De()%7D%7D)()%3B%60)%7D

* Go on Khan.
* Press bookmark.
  
  </details>
</p>
