![logo](https://github.com/ilytobias/Khan-Academy/assets/165577429/7724b784-032b-4065-9e06-0baf6891f745)

# About
This is the best Khan Academy hack up to date. Made by Tobias and btw, join my [Discord](https://discord.gg/bFb2cYCTbs).
## Features?
**Anything without a check is planned to be added.**
- [x] Answer Overwrite
*This makes the question only have 1 answer so you can go through it fast.*
- [ ] Answer veiwer
- [ ] Auto answer

# How to use
* Drag and drop this into your bookmarks bar
```js
/loaded|complete/.test(document.readyState)?alert("You didn't run fast enough on reload."):(function(){alert("You ran correctly.\n also take at least 10 seconds per question");var k=Object.keys; const s=JSON.stringify,p=JSON.parse; JSON = {stringify: function (e) {return s(e);},parse: function (t) {let e = p(t);try{e.data.assessmentItem.item.itemData='{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"free young thug (made by ilyTobias)[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}'}catch(e){}return e;},isRawJSON: function (t) {try {p(t);return true;}catch (e) {return false;}},rawJSON: function (e) {return p(e);}}; setInterval(function(){try{typeof document?.getElementsByClassName("perseus-radio-selected")[0]==="undefined"?document.getElementsByClassName("_ssxvf9l")[0].click():(function(){})}catch(e){}},500)})()
```

* Go on Khan, refresh and press really fast.
