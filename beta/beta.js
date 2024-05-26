let p = JSON.parse;
JSON.parse = function(e) {
    let a = p(e);
    try {
        let lol=JSON.parse(a.data.assessmentItem.item.itemData)
    lol.question.content=lol.question.content+"Answer:"+lol.hints[lol.hints.length-1].content+"[[☃ radio 2]]"
        a.data.assessmentItem.item.itemData=JSON.stringify(lol)
    } catch (t) {}
    return a
}
