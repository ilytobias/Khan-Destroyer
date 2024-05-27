// ==UserScript==
// @name         Khan answer revealer
// @version      1.0
// @description  Khan hack 
// @author       IlyTobias (github@ilytobias)
// @match        https://www.khanacademy.org/*
// @grant        none
// ==/UserScript==

let n = JSON.parse;
JSON.parse = function (t) {
    let e = n(t);
    try {
        let t = JSON.parse(e.data.assessmentItem.item.itemData);
        t.question.content = t.question.content + "[[☃ explanation 2]]";
        console.log(t);
        t.question.widgets["explanation 2"] = {
            alignment: "default"
            , graded: true
            , options: {
                explanation: t.hints[t.hints.length - 1].content
                , hidePrompt: "Hide"
                , showPrompt: "Answer"
                , static: false
                , widgets: t.hints[t.hints.length - 1].widgets
            }
            , static: false
            , type: "explanation"
            , version: {
                major: 0
                , minor: 0
            }
        };
        e.data.assessmentItem.item.itemData = JSON.stringify(t)
    } catch (t) {}
    return e
}
