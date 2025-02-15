// ==UserScript==
// @name         Olx Free Filter
// @namespace    
// @version      0.1
// @description  
// @author       
// @match        https://www.olx.pl/oddam-za-darmo/*/
// @match        https://www.olx.pl/oddam-za-darmo/*/?page=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=olx.pl
// @grant        none
//@require       file://D:\Development\Projects\Web\Tampermonkey-Snippets\OlxFreeFilter.user.js
// ==/UserScript==

(function() {
    'use strict';

    const blackList = [
        "kot",
        "koty",
        "kotka",
        "kotki",
        "domu",
        "adoptuj",
        "adopcji",
        "psiak",
        "pies",
        "sunia",
        "przyjacielski",
        "adopcja",
        "szuka",
        "Przecudny",
        "szczeniak",
        "szczeniaczek",
        "przyjazny",
        "dom"
      ];
      let lastHref="";

      function detectAndRemove(){
        const elements = [...document.querySelectorAll(".css-rc5s2u")];
        elements.forEach((element, i) => {
          const headElement = element.querySelector(".er34gjf0");
          const anyBannedWordFound = blackList.some((word) =>
          headElement.innerHTML.toLowerCase().includes(word)
          );
          if (anyBannedWordFound) {
            element.remove();
          }
        });
        console.info(document.querySelector("href").href);
      };   

      function pageMutationObserver()
      {
        const hrefElement = document.querySelector("#ssr_canonical");
        const config = { attributes: true };
        const callback = (mutationList, observer) => {
          for (const mutation of mutationList) {
            if (mutation.type === "attributes")
            {
              console.info("att");
              if (hrefElement.href!==lastHref) {
                detectAndRemove();
                lastHref=hrefElement.href;
              }
            }        
          }
        };
        const observer = new MutationObserver(callback);
        observer.observe(hrefElement, config); 
      }
      
      pageMutationObserver();
     
})();
