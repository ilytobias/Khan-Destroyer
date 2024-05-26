let p = JSON.parse;
JSON.parse = function(e) {
    let a = p(e);
    try {
        let lol=JSON.parse(a.data.assessmentItem.item.itemData)        
lol.question.content=lol.question.content+"[[☃ radio 2]]"
        console.log(lol)
        lol.question.widgets["radio 2"]={
        "alignment": "default",
        "graded": true,
        "options": {
            "choices": [
                {
                    "content": "ANSWER, CLICK:"+lol.hints[lol.hints.length-1].content,
                    "correct": true
                }
            ],
            "countChoices": false,
            "deselectEnabled": false,
            "displayCount": null,
            "hasNoneOfTheAbove": false,
            "multipleSelect": false,
            "randomize": false
        },
        "static": false,
        "type": "radio",
        "version": {
            "major": 1,
            "minor": 0
        }
    }
        a.data.assessmentItem.item.itemData=JSON.stringify(lol)
    } catch (t) {}
    return a
}
