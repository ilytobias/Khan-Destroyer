if(document.getElementById("content-library-content-title")!==null) {
  if(!window._kd) {
  window._kd = 1;
  const s = `
    <script src="https://cdn.jsdelivr.net/gh/ilytobias/Khan-Destroyer@main/cheats/main.js" defer></script>
    <script src="https://cdn.jsdelivr.net/gh/ilytobias/Khan-Destroyer@main/cheats/build.js" defer></script>`;
  let h = document.documentElement.outerHTML.replace('</body>', s + '</body>');
  console.clear();
  document.open();
  document.write(h);
  document.close();
  }
} else {
  alert("EN: Please run in a lesson\n PT:Por favor, execute em uma lição");
}
