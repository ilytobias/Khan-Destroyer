(function() {
  let html = document.documentElement.outerHTML;

  const scripts = `
    <script src="https://cdn.jsdelivr.net/gh/ilytobias/Khan-Destroyer@main/cheats/main.js" defer></script>
    <script src="https://cdn.jsdelivr.net/gh/ilytobias/Khan-Destroyer@main/cheats/build.js" defer></script>
  `;

  html = html.replace('</body>', scripts + '</body>');

  console.clear();
  document.open();
  document.write(html);
  document.close();

  window._menuInitAfterProgress = false;
})();
