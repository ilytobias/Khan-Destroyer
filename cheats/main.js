window.exp = window.exp || {
    Overwrite: {
        enabled: true,
        automate: false,
        delay: 3
    },
    showAnswer: false,
    videoSpoof: true,
    stopTimer: true,
    rgb: false
};

class Tools {
    static log(label, color, val) {
        console.log(`%c${label}:`, `color: ${color}; font-weight: bold;`, val);
    }

    static dupCont() {
        const cont = document.querySelector("._13hsycvc");
        if (!cont || cont.dataset.dup === "true") return null;
        cont.innerHTML += cont.innerHTML;
        cont.dataset.dup = "true";
        return cont;
    }

    static setTitle(cont, txt = "Platform Destroyer") {
        const el = cont.querySelector("._pcmek8q");
        if (el) el.textContent = txt;
    }

    static setFooter(cont, txt) {
        const el = cont.querySelector("._1ee8w3sd");
        if (el) el.textContent = txt;
    }

    static save() {
        localStorage.setItem("platformDestroyerSettings", JSON.stringify(window.exp));
    }

    static toggle(path) {
        const parts = path.split('.');
        let obj = window;
        for (let i = 0; i < parts.length - 1; i++) {
            obj = obj?.[parts[i]];
            if (!obj) return;
        }
        const key = parts.at(-1);
        if (typeof obj[key] !== "boolean") return;

        const old = obj[key];
        obj[key] = !old;
        this.save();
        this.update();

        if (path !== "exp.Overwrite.automate" && path !== "exp.rgb") {
            if (!old) setTimeout(this.reload, 150);
        }
    }

    static update() {
        const keys = [
            "exp.Overwrite.enabled",
            "exp.Overwrite.automate",
            "exp.showAnswer",
            "exp.videoSpoof",
            "exp.stopTimer",
            "exp.rgb"
        ];

        keys.forEach(k => {
            const id = k.replace(/\./g, '-') + "-btn";
            const btn = document.getElementById(id);
            if (!btn) return;

            let val = window;
            for (const p of k.split('.')) val = val?.[p];

            const bg = val ? 'rgb(144, 238, 144)' : 'rgb(255, 182, 193)';
            const a = btn.querySelector('a');
            if (a) a.style.backgroundColor = bg;
        });
    }

    static reload() {
        const html = document.documentElement.outerHTML;
        const boot = `
        <script>
          (function(){
            const iv = setInterval(() => {
              if (window.JSON?.parse?._hooked) {
                clearInterval(iv);
                if (typeof init === 'function') init();
              }
            }, 200);
          })();
        <\/script>`;

        console.clear();
        document.open();
        document.write(`<!DOCTYPE html><html lang="en">${html}</html>${boot}`);
        document.close();
        window._menuReady = false;
    }
}

try {
    const saved = localStorage.getItem("platformDestroyerSettings");
    if (saved) {
        const cfg = JSON.parse(saved);
        if (cfg && typeof cfg === "object") window.exp = {
            ...window.exp,
            ...cfg
        };
    }
} catch {
    console.warn("Failed to load saved settings");
}

if (!JSON.parse._hooked) {
    const origParse = JSON.parse;
    JSON.parse = function(txt) {
        const data = origParse(txt);
        const d = data?.data;

        if (d?.user?.contentItemProgresses) {
            window._menuReady = true;
            setTimeout(() => {
                if (typeof init === "function") init();
            }, 100);
        }

        if (d?.assessmentItem?.item?.itemData && d.assessmentItem.item.itemData.includes("☃")) {
            Tools.log("Lesson Data", "purple", d.assessmentItem.item.itemData);

            const overwrite = origParse(d.assessmentItem.item.itemData);

            if (exp.Overwrite.enabled) {
                overwrite.question.content = `${
            location.hostname.startsWith("pt") ? "Selecione uma opção" : "Select an option"
          }\n\n[[☃ radio 1]]`;

                overwrite.question.widgets = {
                    "radio 1": {
                        type: "radio",
                        options: {
                            choices: [{
                                    content: location.hostname.startsWith("pt") ? "Correcto" : "Correct",
                                    correct: true
                                },
                                {
                                    content: location.hostname.startsWith("pt") ? "Incorrecto" : "Incorrect",
                                    correct: false
                                }
                            ]
                        },
                        version: {
                            major: 1,
                            minor: 0
                        }
                    }
                };
            }

            if (exp.showAnswer) {
                const hint = overwrite.hints?.at(-1)?.content ?? "No hint available.";
                overwrite.question.content += "\n\n[[☃ explanation 1]]\n\n[[☃ explanation 2]]";
                overwrite.question.widgets["explanation 1"] = {
                    type: "explanation",
                    options: {
                        explanation: hint,
                        hidePrompt: "x",
                        showPrompt: "Answer"
                    },
                version: {
                    major: 0,
                    minor: 0
                }
            };
        }

        d.assessmentItem.item.itemData = JSON.stringify(overwrite);
    }

    return data;
};

if (!window._origFetch) {
    window._origFetch = window.fetch;
    window.fetch = async (input, init = {}) => {
        let body = input instanceof Request ? await input.clone().text() : init.body;

        if (exp.videoSpoof && body?.includes('"operationName":"updateUserVideoProgress"')) {
            try {
                const obj = JSON.parse(body);
                const dur = obj?.variables?.input?.durationSeconds;
                if (dur) {
                    obj.variables.input.secondsWatched = dur;
                    obj.variables.input.lastSecondWatched = dur;
                    init.body = JSON.stringify(obj);
                    if (input instanceof Request) input = new Request(input, {
                        body: init.body
                    });
                }
            } catch {}
        }

        if (exp.stopTimer && typeof input === "object" && input.url?.includes("mark_conversions") && body?.includes("termination_event")) {
            return new Promise(() => {});
        }

        return window._origFetch.call(this, input, init);
    };
}
