const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let n=0,r=!0;t.addEventListener("click",(()=>{if(r){const t=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=e,n=t,console.log(r)}),1e3);r=!1}})),e.addEventListener("click",(()=>{clearInterval(n),r=!0}));
//# sourceMappingURL=01-color-switcher.efe823ad.js.map
