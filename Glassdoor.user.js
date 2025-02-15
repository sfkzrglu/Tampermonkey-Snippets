// ==UserScript==
// @name         Glassdoor
// @namespace    
// @version      0.1
// @description  
// @author       
// @match        https://www.glassdoor.com/*
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=glassdoor.com
//@require       file://D:\Development\Projects\Web\Tampermonkey-Snippets\Glassdoor.user.js
// ==/UserScript==

(function () {

    const CON_WALL_HARDSELL_ID = 'ContentWallHardsell'
    var existCondition = setInterval(function () {
        const element = document.querySelector("#" + CON_WALL_HARDSELL_ID)
        if (element) {
            element.remove();
            window.onscroll = null;
            clearInterval(existCondition)
        }
    }, 500)
   
    window.onload = () => {
        document.body.addEventListener('wheel', (event) => {
            window.scrollBy(0, event.deltaY)
            console.log(event.deltaY);
        });
       
        $("body").css({
            "height": "unset",
            "overflow": "unset"
        });     
    }
   
})();
