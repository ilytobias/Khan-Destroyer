var menu = document.createElement("div");
menu.innerHTML = `<div style="width:240px; left: 1px; top: 1px; background-color: #282828EB; color: white; outline: transparent 1px; position:absolute; z-index: 99999; border-radius: 5px;">
<div id="gui">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAvVBMVEVHcEz/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAB5AAC1AAALAAD/AAAAAAD////0AAAuAAAbAADlAAC3AAAMAAD/EBA6AAC7AABlAAD/bGz/1tahAADfAACWAACCAAD/f3/RAAD//v7/rq51AAD/NDT/mJhPAAD/JyfYAAAnAAC8AAC+AABtjsUZAAAAH3RSTlMA/PfGZYIdIOEGFVPp1A3e4pe7p6o1OSiJc0fy7Pn3MfnrfgAAATlJREFUOMu9U1ebgjAQFKQIotjr3W2IFEGK2Mvd/f+fdUnIfTT10XkJuzPZLJtJo/Fu6JKkv6C1dhOg2dae8ZORCATiaPKQVmcGcBgztUZ3pQ4U0JG65cMXAyFj1utsFQaLQiuavOT0Lop2XLKUc4Vi8srhwbIOIQ9MJe+vx3NHi+DIg17eqdriuQsVXHjQKgkS944BzpFlRWcAfHeTimCL7OunALcwvAG4VxttK4IYIfT1gWlpfPJIUBX80iTaEAXe0C8vqAicFU2TfeQwim+nIoA0yydcear+BSQZEcdsWSVlAR1UYLMuWAe2Wx6Uwgb1Q2v4Pt3vskHlo9b67C6d1Pds2/PThN1nX6u7Ae+DYI8fOkKRjaJhDFmpeWo8FP9pcTh+6mmK577W58Q55vzVy5jK8vTtr/UPQT82ObllidAAAAAASUVORK5CYII=" style="display: block; margin: auto;">
<h1 style="text-align: center; font-size: 32px;">Khan Destroyer</h1>
<br>
<div style="text-align: center;">

<h3 style="font-size: 19px; font-style: normal !important; color: white !important;">Answers</h3>
    <button onclick="autoAnswer()">Auto Answer</button>
<br><br>
<h3 style="font-size: 19px; font-style: normal !important; color: white !important;">Energy Points</h3>
<div style="text-align: center;">
    <button onclick="farm()">Farm</button>
<br><br>
<h3 style="font-size: 19px; font-style: normal !important; color: white !important;">Stuff</h3>
<button onclick="github()">Github</button>
<h5 style="font-size: 8px; font-style: normal !important; color: white !important;">GUI from Fireflight and Overload</h3>
<h5 style="font-size: 8px; font-style: normal !important; color: white !important;">thanks wang</h3>
<h5 style="font-size: 8px; font-style: normal !important; color: white !important;">refitted by this <a href="https://github.com/orphanlol">asshole</a></h3>
</div>
<br><br>
<h1 style="font-size: 12px; font-style: normal !important; color: white !important;"></h1>
</div>`

// minified drag element code
function dragElement(e){var t=0,n=0,o=0,r=0;function s(e){(e=e||window.event).preventDefault(),o=e.clientX,r=e.clientY,document.onmouseup=i,document.onmousemove=c}function c(s){(s=s||window.event).preventDefault(),t=o-s.clientX,n=r-s.clientY,o=s.clientX,r=s.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=s:e.onmousedown=s}

// specifies what element to drag
dragElement(menu.firstElementChild);
document.body.appendChild(menu);

// runs answer overwrite
fetch('https://raw.githubusercontent.com/orphanlol/Khan-Destroyer/main/overwrite.js').then(r => r.text()).then(r => eval(r))

// skipper code
function autoAnswer() {
    window.stopped = false;
  
    if (void 0 === window.e) {
      alert("Please press Bookmarklet Again before you can use the farmer, this is essensial for this.");
    } else {
      farm();
    }
  }
  
  function farm() {
    if (stopped === true) {
      return;
    }
  
    document.getElementsByClassName("_ssxvf9l")[0]?.click(); // Top Answer
    document.getElementsByClassName("_1f0fvyce")[0]?.click(); // Lets start
  
    setTimeout(function() {
      document.getElementsByClassName("_rz7ls7u")[0]?.click(); // Check answer
      document.getElementsByClassName("_6t500vf")[0]?.click(); // Next question
      document.getElementsByClassName("_1kkrg8oi")[0]?.click(); // Next assignment
  
      farm();
    }, 1000);
  }
  
  function modifyJSONParse() {
    let originalParse = JSON.parse;
    JSON.parse = function(a, t) {
      let n = originalParse(a, t);
      try {
        if (n && n.data && n.data.assessmentItem && n.data.assessmentItem.item && n.data.assessmentItem.item.itemData) {
          n.data.assessmentItem.item.itemData = '{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"free young thug made by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}';
        }
      } catch (r) {
        console.error("Error modifying parsed data:", r);
      }
      return n;
    };
    window.e = true;
    document.write(document.getElementsByTagName("html")[0].outerHTML);
  }
  
// farmer code
function farm() {
    document.write('<html><h1>How to use</h1><h2>Make sure you ran this bookmark on a khan url, doesnt matter what url as long as its an offical khan link.</h1></br><p>Put a khan academy url to a lesson into a input box bellow, then press the farm button and it\'ll farm points on that lesson, you can farm from more then one url at a time BUT NOT THE SAME LESSON.</p><input id="url"></input><button id="btn" onclick="makeFrame(document.getElementById(\'url\').value)">Farm</button></html>');function e(e){const t=document.createElement("iframe");t.width="1px";t.height="1px";t.src=e;document.getElementsByTagName("html")[0].appendChild(t);const a=t.contentWindow;a.eval(`let e=JSON.parse;JSON.parse=function(t,n){let a=e(t,n);try{console.log(a);a.question={content:"free young thug made by ilyTobias[[☃ radio 1]]",images:{},widgets:{"radio 1":{alignment:"default",graded:true,options:{choices:[{content:"Correct answer",correct:true},{content:"Incorrect answer",correct:false}],deselectEnabled:false,displayCount:null,hasNoneOfTheAbove:false,multipleSelect:false,onePerLine:true,randomize:false},"static":false,type:"radio",version:{major:1,minor:0}}}};a&&a.data&&a.data.t&&a.data.t.item&&a.data.t.item.i&&(a.data.t.item.i='{"answerArea":{"calculator":false,"chi2Table":false,"periodicTable":false,"tTable":false,"zTable":false},"hints":[{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}},{"content":"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$","images":{},"replace":false,"widgets":{}}],"itemDataVersion":{"major":0,"minor":1},"question":{"content":"free young thug made by ilyTobias[[☃ radio 1]]","images":{},"widgets":{"radio 1":{"alignment":"default","graded":true,"options":{"choices":[{"content":"Correct answer","correct":true},{"content":"Incorrect answer","correct":false}],"deselectEnabled":false,"displayCount":null,"hasNoneOfTheAbove":false,"multipleSelect":false,"onePerLine":true,"randomize":false},"static":false,"type":"radio","version":{"major":1,"minor":0}}}}}')}catch(r){console.error("Error modifying parsed data:",r)}return a},window.e=!0;(function(){window.stopped=false;if(void 0===window.e)alert("Please run Khan Destroyer before you use the farmer, this is essensial for this.");else{function e(){if(stopped===true){return}document.getElementsByClassName("_ssxvf9l")[0]?.click();document.getElementsByClassName("_1f0fvyce")[0]?.click();setTimeout(function(){document.getElementsByClassName("_rz7ls7u")[0]?.click();document.getElementsByClassName("_6t500vf")[0]?.click();document.getElementsByClassName("_dyu04hi")[0]?.click();e()},1e3)}e()}})();`)}

}
// iframe code
function github() {
    alert('hi, going to github ');
    alert('my balls itch');
    open('https://discord.com/invite/pujbPqMyPF');
}
