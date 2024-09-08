[< Go back](https://github.com/ilytobias/Khan-Destroyer)
# Minute farm
  
  **No tutorial**
  <details>
    <summary>What does this do?</summary>
    
  *How long you have a lesson tab open itll count it as minutes done.*
  
  </details>
  
## Start

* Drag and drop this into your bookmarks bar
  
```js
javascript:alert("minute farmer active, you can go on any tab and itll still count for minutes.");"undefined"==typeof originalFetch&&(window.originalFetch=window.fetch),window.fetch=async function(n,e={}){const i=new Request(n,e);if(i.body&&i.url.includes("mark_conversions")){const n=i.clone();return(await n.text()).includes("termination_event")?void console.log("termination blocked"):window.originalFetch(i)}return window.originalFetch(i)};
```

![khanthing](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/7a77ee4e-8d84-4135-b97c-5408b16f780b)
