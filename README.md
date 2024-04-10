<p align="center">
<img src="https://github.com/ilytobias/Khan-Destroyer/assets/165577429/fcd7fa24-a62c-46c8-bc02-78463bd4c64a" />
</p>

(logo made by [orphanlol](https://github.com/orphanlol))
# About
This is the best Khan Academy hack up to date. Made by Tobias and btw, join my [Discord](https://discord.gg/bFb2cYCTbs).
## Features?
**Anything without a check is planned to be added soon. (In order of what'll be added.)**
- [x] Answer Overwrite
*This makes the question only have 1 answer so you can go through it fast.*|
- [x] Point Farmer.
*This will be added soon.*
- [ ] Auto Answer. Est: 4/10/2024 9PM
- [ ] Answer Viewer. Est: 4/11/2024 9PM
- [ ] Client side badges, points, ect. Est: 4/12/2024 9PM
- [ ] Point Bloater (basically gets you more points)* ???

*The "\*" means it'll probably not be added/be possible.*

# Answer Overwrite
## What is this?
*This overwrites your questions to look like this.*
![Screenshot 2024-04-03 114349](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/704501ab-e727-47fa-924b-6ae5367f8249)

* Drag and drop this into your bookmarks bar
```js
javascript:if(void 0!==window.e)alert("already ran");else{let e=JSON.parse;JSON.parse=function(a,t){let n=e(a,t);try{n&&n.data&&n.data.assessmentItem&&n.data.assessmentItem.item&&n.data.assessmentItem.item.itemData&&(n.data.assessmentItem.item.itemData='{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"free young thug made by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}')}catch(r){console.error("Error modifying parsed data:",r)}return n},window.e=!0;document.write(document.getElementsByTagName("html")[0].outerHTML);}
```

* Go on Khan.
* Press bookmark (duh).

# Farmer 
## What is this?
*this helps farm energy points on khan.*

* Drag and drop this into your bookmarks bar
```js
javascript:(function()%7Bwindow.stopped%3Dfalse%3B%0Aif%20(void%200%20%3D%3D%3D%20window.e)%20alert(%22Please%20run%20Khan%20Destroyer%20before%20you%20use%20the%20farmer%2C%20this%20is%20essensial%20for%20this.%22)%3B%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20function%20farm()%7B%0A%20%20%20%20if(stopped%3D%3D%3Dtrue)%7B%0A%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20document.getElementsByClassName(%22_ssxvf9l%22)%5B0%5D%3F.click()%20%2F%2FTop%20Answer%0A%20%20%20%20document.getElementsByClassName(%22_1f0fvyce%22)%5B0%5D%3F.click()%20%2F%2FLets%20start%0A%20%20%20%20setTimeout(function()%7B%0A%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_rz7ls7u%22)%5B0%5D%3F.click()%2F%2FCheck%20answer%0A%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_6t500vf%22)%5B0%5D%3F.click()%20%2F%2FNext%20question%0A%20%20%20%20%20%20%20%20document.getElementsByClassName(%22_dyu04hi%22)%5B0%5D%3F.click()%2F%2FTry%20again%0A%0A%20%20%20%20%20%20%20%20farm()%0A%20%20%20%20%7D%2C1000)%0A%7D%0A%20%20%20%20%20%20%20%20%0Afarm()%0A%20%20%20%20%7D%7D)()%3B
```
* Go on Khan.
* Press bookmark (duh).
* If you want to stop it then use this bookmark.
```js
javascript:window.stopped=true;
```
