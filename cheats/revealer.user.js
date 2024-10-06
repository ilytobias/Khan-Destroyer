if (typeof originalParse === "undefined") {
    window.originalParse = JSON.parse;
}

JSON.parse = function (a, t) {
    let n = originalParse(a, t);
    try {
        const lessonData = JSON.parse(n.data.assessmentItem.item.itemData);
        
        const isPortuguese = location.hostname.split(".")[0] === "pt";
        
        if (lessonData.question && lessonData.question.content && 
            lessonData.question.content[1] === lessonData.question.content[1].toUpperCase()) {

            console.log(lessonData);
            lessonData.question.content += "\n [[☃ explanation 3]] [[☃ explanation 4]]";

            lessonData.question.widgets["explanation 3"] = {
                alignment: "default",
                graded: true,
                options: {
                    explanation: lessonData.hints[lessonData.hints.length - 1].content,
                    hidePrompt: isPortuguese ? "Ocultar" : "Hide", 
                    showPrompt: isPortuguese ? "Resposta" : "Answer", 
                    static: false,
                    widgets: lessonData.hints[lessonData.hints.length - 1]
                }
            };

            lessonData.question.widgets["explanation 4"] = {
                options: {
                    explanation: isPortuguese ? "discord.gg/khanacademy" : "discord.gg/khanacademy", 
                    hidePrompt: "", 
                    showPrompt: isPortuguese ? "Discord" : "Discord" 
                }
            };

            n.data.assessmentItem.item.itemData = JSON.stringify(lessonData);
        }
    } catch (error) {
        console.error("Error parsing lesson data:", error);
    }

    return n;
};

console.error = function() {};
