[< Go back](https://github.com/ilytobias/Khan-Destroyer)
# Minute "Hack"
  
  **Tutorial coming soon...**
  <details>
    <summary>What does this do?</summary>
    
  *It hacks your Khan Minutes, which shows in your progress tab. Most teachers won't ask to see this, but if yours does, like [deneu](https://github.com/ilytobias)'s, this is really useful.*
  
 ![image](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/0a03776e-bb84-44c3-bc53-410564e0995b)

  </details>

* Drag and drop this into your bookmarks bar
  
```js
javascript:if(typeof originalFetch!=="undefined"){window.originalFetch=window.fetch}let c=true;window.fetch=async function(e,n={}){const t=new Request(e,n);if(t.body&&t.url.includes("mark_conversions")&&c===true){const o=t.clone();const i=await o.text();console.log("Blocked request");return}return originalFetch(t)};
```  
* Go in a Khan lesson.
* Press bookmark.

  Then, at the end, if you want to stop:
  * Drag this
```js
javascript:freeze=false
```
 * Click on it, and then switch tabs then switch back.  
  <br>
![khanthing](https://github.com/ilytobias/Khan-Destroyer/assets/165577429/7a77ee4e-8d84-4135-b97c-5408b16f780b)
