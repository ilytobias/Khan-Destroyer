// ==UserScript==
// @name         Khan answer overwrite
// @version      1.0
// @description  Khan hack 
// @author       IlyTobias (github@ilytobias)
// @match        https://www.khanacademy.org/*
// @grant        none
// ==/UserScript==

let e = JSON.parse;
JSON.parse = function (a, t) {
  let n = e(a, t);
  try {
    if (n && n.data && n.data.assessmentItem && n.data.assessmentItem.item && n.data.assessmentItem.item.itemData) {
      n.data.assessmentItem.item.itemData = "{\"answerArea\":{\"calculator\":false,\"chi2Table\":false,\"periodicTable\":false,\"tTable\":false,\"zTable\":false},\"hints\":[{\"content\":\"$\\\\\\\\begin{align}\\\\n\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}&=\\\\\\\\dfrac{\\\\\\\\left(z^{4}\\\\\\\\right)^{-3}}{\\\\\\\\left(6^{2}\\\\\\\\right)^{-3}}\\\\n\\\\\\\\end{align}$\",\"images\":{},\"replace\":false,\"widgets\":{}},{\"content\":\"$\\\\\\\\begin{align}\\\\n\\\\\\\\phantom{\\\\\\\\left(\\\\\\\\dfrac{z^{4}}{6^{2}}\\\\\\\\right)^{-3}}&=\\\\\\\\dfrac{z^{(4)(-3)}}{6^{(2)(-3)}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{z^{-12}}{6^{-6}}\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n&=\\\\\\\\dfrac{6^{6}}{z^{12}}\\\\n\\\\\\\\end{align}$\",\"images\":{},\"replace\":false,\"widgets\":{}}],\"itemDataVersion\":{\"major\":0,\"minor\":1},\"question\":{\"content\":\"free young thug made by ilyTobias[[☃ radio 1]]\",\"images\":{},\"widgets\":{\"radio 1\":{\"alignment\":\"default\",\"graded\":true,\"options\":{\"choices\":[{\"content\":\"Correct answer\",\"correct\":true},{\"content\":\"Incorrect answer\",\"correct\":false}],\"deselectEnabled\":false,\"displayCount\":null,\"hasNoneOfTheAbove\":false,\"multipleSelect\":false,\"onePerLine\":true,\"randomize\":false},\"static\":false,\"type\":\"radio\",\"version\":{\"major\":1,\"minor\":0}}}}}";
    }
  } catch (r) {
    console.error("Error modifying parsed data:", r);
  }
  return n;
};
