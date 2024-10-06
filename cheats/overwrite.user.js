// ==UserScript==
// @name         Khan answer overwrite
// @version      1.0
// @description  Khan hack 
// @author       IlyTobias (github@ilytobias)
// @match        https://*.khanacademy.org/*
// @grant        none
// ==/UserScript==

if(typeof originalParse ==="undefined") window.originalParse = JSON.parse;
console.log("if you look in the console you WILL see a error, they save it as a question though so I'm not worried about it right now.")
JSON.parse = function (a, t) {
  let n = originalParse(a, t);
  try {
    // Parse the nested data structure
    const lessonData = JSON.parse(n.data.assessmentItem.item.itemData);
        if (lessonData.question && lessonData.question.content && 
        lessonData.question.content[1] === lessonData.question.content[1].toUpperCase()) {
      console.log(lessonData);
      lessonData.question.content=location.hostname.split(".")[0]==="pt"?"Selecione uma opção de resposta.":"Please select a answer choice."+"\n [[☃ radio 1]] [[☃ explanation 1]]"
        lessonData.question.widgets={
          "radio 1": {
            "options": {
              "choices": [
                { "content": location.hostname.split(".")[0]==="pt"?"Correcto":"Correct", "correct": true },
                { "content": location.hostname.split(".")[0]==="pt"?"Incorrecto":"Incorrect", "correct": false }
              ]
            }
          },
          "explanation 1": {
            "options": {
              "explanation": "discord.gg/khanacademy",
                hidePrompt: "", 
                showPrompt: "Discord"
            }
          }
        };
      n.data.assessmentItem.item.itemData = JSON.stringify(lessonData);
    }
    
  } catch (r) {}
  
  return n;
};
console.error=function(){} //gets rid of the retarded error from khan
