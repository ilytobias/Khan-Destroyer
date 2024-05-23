<p align="center">
<img src="https://github.com/ilytobias/Khan-Destroyer/assets/165577429/fcd7fa24-a62c-46c8-bc02-78463bd4c64a" />
</p>
<p align="center">
  
  [Join the discord!](https://discord.gg/pujbPqMyPF)
</p>

<p align="center">
  
  (logo made by [orphanlol](https://github.com/orphanlol))
</p>
## About

This is the best Khan academy hack, I've spent weeks of my time on this because I hate the way school websites do it, even with Khan being probably one of the best they should all just stop. Most people aren't forced to do Khan but I upsetingly am and I'm sick of the hours of work I have to do for a 10% of my grade which I still really need so I hope anybody who wants this uses it. **Remember nobody's forcing you to use this.**

*This is my hack (the second image) VS the [top khan hack](https://github.com/adubov1/khanacademy_bot) (the first image). This still works and is good although mine is arguably better given the fact that you don't have to do any work. And no need for the inspect element console.*
![image](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/27749e03-6c76-4a0a-89f0-6822885a431e)
![image](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/83318dc6-0992-4dae-8f2b-4aba24a33749)

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
  <summary>Energy Point Farmer</summary>

*This makes you farm alot of Khan Academy energy points.*<br>
![image](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/c95d39df-6370-4e6a-86ae-b55cb34f6842)

* Drag and drop this into your bookmarks bar
```js
javascript:document.write(\'<html><h1>How to use</h1><h2>Make sure you ran this bookmark on a khan url, doesnt matter what url as long as its an offical khan link.</h1></br><p>Put a khan academy url to a lesson into a input box bellow, then press the farm button and it\\\'ll farm points on that lesson, you can farm from more then one url at a time BUT NOT THE SAME LESSON.</p><input id="url"></input><button id="btn" onclick="makeFrame(document.getElementById(\\\'url\\\').value)">Farm</button></html>\');function e(e){const t=document.createElement("iframe");t.width="1px";t.height="1px";t.src=e;document.getElementsByTagName("html")[0].appendChild(t);const a=t.contentWindow;a.eval(`let e=JSON.parse;JSON.parse=function(t,n){let a=e(t,n);try{console.log(a);a.question={content:"free young thug made by ilyTobias[[☃ radio 1]]",images:{},widgets:{"radio 1":{alignment:"default",graded:true,options:{choices:[{content:"Correct answer",correct:true},{content:"Incorrect answer",correct:false}],deselectEnabled:false,displayCount:null,hasNoneOfTheAbove:false,multipleSelect:false,onePerLine:true,randomize:false},"static":false,type:"radio",version:{major:1,minor:0}}}};a&&a.data&&a.data.t&&a.data.t.item&&a.data.t.item.i&&(a.data.t.item.i=\'{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\\\\\\\\\begin{align}\\\\\\\\n\\\\\\\\\\\\\\\\left(\\\\\\\\\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\\\\\\\\\right)^{-3}&=\\\\\\\\\\\\\\\\dfrac{\\\\\\\\\\\\\\\\left(z^{4}\\\\\\\\\\\\\\\\right)^{-3}}{\\\\\\\\\\\\\\\\left(6^{2}\\\\\\\\\\\\\\\\right)^{-3}}\\\\\\\\n\\\\\\\\\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\\\\\\\\\begin{align}\\\\\\\\n\\\\\\\\\\\\\\\\phantom{\\\\\\\\\\\\\\\\left(\\\\\\\\\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\\\\\\\\\right)^{-3}}&=\\\\\\\\\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\\\\\n\\\\\\\\\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"free young thug made by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}\')}catch(r){console.error("Error modifying parsed data:",r)}return a},window.e=!0;(function(){window.stopped=false;if(void 0===window.e)alert("Press the bookmark one more time.");else{function e(){if(stopped===true){return}document.getElementsByClassName("_ssxvf9l")[0]?.click();document.getElementsByClassName("_1f0fvyce")[0]?.click();setTimeout(function(){document.getElementsByClassName("_rz7ls7u")[0]?.click();document.getElementsByClassName("_6t500vf")[0]?.click();document.getElementsByClassName("_dyu04hi")[0]?.click();e()},1e3)}e()}})();`)}\n```

* Go on Khan.
* Press bookmark.
</details>

<details>
<summary>Auto Answer Questions</summary>
* Drag and drop this into your bookmarks bar
  
```js
javascript:(function()%20%7B%0A%20%20%20%20window.stopped%20%3D%20false%3B%0A%20%20%20%20if%20(void%200%20%3D%3D%3D%20window.e)%20alert(%22Please%20run%20Khan%20Destroyer%20before%20you%20use%20the%20farmer%2C%20this%20is%20essensial%20for%20this.%22)%3B%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20function%20farm()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(stopped%20%3D%3D%3D%20true)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_ssxvf9l%22)%5B0%5D%3F.click()%20%2F%2FTop%20Answer%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_1f0fvyce%22)%5B0%5D%3F.click()%20%2F%2FLets%20start%0A%20%20%20%20%20%20%20%20%20%20%20%20setTimeout(function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_rz7ls7u%22)%5B0%5D%3F.click()%20%2F%2FCheck%20answer%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_6t500vf%22)%5B0%5D%3F.click()%20%2F%2FNext%20question%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_1kkrg8oi%22)%5B0%5D%3F.click()%20%2F%2FNext%20assignment%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20farm()%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%201000)%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20farm()%0A%20%20%20%20%7D%0A%7D)();if(void 0!==window.e)alert("already ran");else{let e=JSON.parse;JSON.parse=function(a,t){let n=e(a,t);try{n&&n.data&&n.data.assessmentItem&&n.data.assessmentItem.item&&n.data.assessmentItem.item.itemData&&(n.data.assessmentItem.item.itemData='{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"free young thug made by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}')}catch(r){console.error("Error modifying parsed data:",r)}return n},window.e=!0;document.write(document.getElementsByTagName("html")[0].outerHTML);}
```
  
* Go on Khan.
* Press bookmark.
</details>
