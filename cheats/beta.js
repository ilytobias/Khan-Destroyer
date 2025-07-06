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
}
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
const sels = [
  '[data-testid="choice-icon__library-choice-icon"]',
  '[data-testid="exercise-check-answer"]',
  '[data-testid="exercise-next-question"]',
  '._1udzurba', '._awve9b', '._hxicrxf', '._ypgawqo'
];

setInterval(() => {
  if (exp?.Overwrite?.automate) sels.forEach(sel => document.querySelector(sel)?.click());
}, (exp?.Overwrite?.delay || 1) * 1000);

function getMenu() {
  const menu = document.querySelector("._13hsycvc[data-dup='true']") || Tools.dupCont();
  if (menu) {
    Tools.setTitle(menu, "🧠 Platform Destroyer");
    Tools.setFooter(menu, "© 2025 ilyTobias");
  }
  return menu;
}

function btn(text, id, active = false, small = false) {
  const bg = active ? 'rgb(144,238,144)' : 'rgb(255,182,193)';
  const size = small ? '12px' : '16px';
  const pad = small ? '4px 8px' : '8px 12px';
  const html = `<li id="${id}-btn" style="margin-bottom:6px; list-style:none;">
    <a href="javascript:void(0)" class="_pkhvgz8" data-path="${id.replace(/-/g, '.')}" style="display:flex; align-items:center; background-color:${bg}; font-size:${size}; padding:${pad}; cursor:pointer; user-select:none; text-decoration:none; color:#21242c;">
      <span>${text}</span>
    </a>
  </li>`;
  const target = document.querySelector(`[data-testid="learnable-content-cells"]`);
  if (target) target.insertAdjacentHTML("beforeend", html);
}

function delayInput(val) {
  const target = document.querySelector(`[data-testid="learnable-content-cells"]`);
  if (!target) return;
  document.getElementById("auto-delay")?.remove();
  const wrap = document.createElement('li');
  wrap.id = "auto-delay";
  wrap.style.cssText = "margin-bottom:6px; list-style:none; background:#fff; border-radius:4px; padding:6px 12px; display:flex; align-items:center; gap:8px; box-shadow:0 1px 3px rgb(0 0 0 / 0.1);";
  wrap.innerHTML = `<label for="delayInput" style="font-size:14px; color:#21242c; user-select:none; flex-grow:1; cursor:pointer;">Delay (s):</label>
    <input id="delayInput" type="number" min="0.5" step="0.1" value="${val}" placeholder="Delay (4s)" style="width:70px; padding:4px 8px; font-size:14px; border:1px solid #ccc; border-radius:4px; box-sizing:border-box;" />`;
  const autoBtn = document.getElementById("exp-Overwrite-automate-btn");
  if (autoBtn) autoBtn.insertAdjacentElement("afterend", wrap);
  else target.appendChild(wrap);
  wrap.querySelector('input').addEventListener('input', e => {
    const v = parseFloat(e.target.value);
    if (v >= 3) {
      exp.Overwrite.delay = v;
      Tools.save();
    }
  });
}

function addRgbCss() {
  if (document.getElementById("rgb-style")) return;
  const style = document.createElement("style");
  style.id = "rgb-style";
  style.textContent = `@keyframes rgbCycle{0%{filter:hue-rotate(0deg);}100%{filter:hue-rotate(360deg);}}.rgb-anim{animation:rgbCycle 10s linear infinite;}`;
  document.head.appendChild(style);
}

function toggleRgb(on) {
  addRgbCss();
  const title = document.getElementById("content-library-content-title");
  const svg = document.querySelector('path[d="M2.31,5.8A3.56,3.56,0,0,0,.66,8.6V19.4a3.56,3.56,0,0,0,1.65,2.8L12,27.62a3.75,3.75,0,0,0,3.3,0L25,22.2a3.56,3.56,0,0,0,1.65-2.8V8.6A3.56,3.56,0,0,0,25,5.8L15.31.38a3.75,3.75,0,0,0-3.3,0Z"]');
  const head = document.getElementById("top-header-container");
  if (on) {
    title?.classList.add("rgb-anim");
    if (svg) svg.style.filter = "hue-rotate(0deg)";
    head?.classList.add("rgb-anim");
  } else {
    title?.classList.remove("rgb-anim");
    if (svg) svg.style.filter = "";
    head?.classList.remove("rgb-anim");
  }
}

function buildUI() {
  const target = document.querySelector(`[data-testid="learnable-content-cells"]`);
  if (!target) return setTimeout(buildUI, 250);
  target.innerHTML = "";
  const t = (pt, en) => location.hostname.startsWith("pt") ? pt : en;
  const btns = [
    { text: t("Sobrescrever", "Overwrite"), path: "exp.Overwrite.enabled" },
    { text: t("Automatizar", "Automate"), path: "exp.Overwrite.automate", small: true },
    { text: t("Mostrar Resposta", "Show Answer"), path: "exp.showAnswer" },
    { text: t("Falso Vídeo", "Video Spoof"), path: "exp.videoSpoof" },
    { text: t("Parar Temporizador", "Stop Timer"), path: "exp.stopTimer" },
    { text: t("RGB", "RGB"), path: "exp.rgb" }
  ];
  btns.forEach(({ text, path, small }) => {
    let val = window;
    for (const p of path.split('.')) val = val?.[p];
    btn(text, path.replace(/\./g, '-'), val === true, small);
    if (path === "exp.Overwrite.automate") setTimeout(() => delayInput(exp.Overwrite.delay), 10);
  });
  target.querySelectorAll('li > a').forEach(a => {
    a.addEventListener('click', () => {
      Tools.toggle(a.dataset.path);
      if (a.dataset.path === "exp.rgb") toggleRgb(exp.rgb);
    });
  });
  Tools.update();
  if (exp.rgb) toggleRgb(true);
}

function refreshFooter() {
  document.querySelector("._1e104hfr")?.remove();
  document.querySelector("._1mzlqz11")?.remove();

  const footer = document.querySelector("._1fzkfbec");
  if (!footer) return setTimeout(refreshFooter, 250);

  footer.innerHTML = `
    <a class="_1w88iq7y" href="https://github.com/ilytobias/Khan-Destroyer" target="_blank">Github</a>
    <a class="_1w88iq7y" href="https://discord.gg/platformdestroyer" target="_blank">Discord</a>`;
}

function init() {
  const menuReady = document.querySelector("._13hsycvc");
  const footerReady = document.querySelector("._1fzkfbec");
  const uiReady = document.querySelector(`[data-testid="learnable-content-cells"]`);
  if (!menuReady || !footerReady || !uiReady) return setTimeout(init, 250);
  getMenu();
  buildUI();
  refreshFooter();
  addRgbCss();
  if (exp.rgb) toggleRgb(true);
}

Tools.reload();
init();
