(() => {
  if (!document.getElementById("content-library-content-title")) {
    alert("EN: Please run in a lesson\nPT: Por favor, execute em uma lição");
    return;
  }
  if (window._kd) return;
  window._kd = 1;
  const u = "https://cdn.jsdelivr.net/gh/ilytobias/Khan-Destroyer@main/cheats/";

  fetch(u + "main.js")
    .then(r => r.text())
    .then(t => {
      eval(t);

      const waitForExp = () => {
        if (window.exp) {
          fetch(u + "build.js").then(r => r.text()).then(eval);
        } else {
          setTimeout(waitForExp, 50);
        }
      };
      waitForExp();
    });

})();
