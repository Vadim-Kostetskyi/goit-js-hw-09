const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),o=document.querySelector("body");let r=0;chengeColorStarted=!0,e.addEventListener("click",(()=>{if(chengeColorStarted){const e=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t,r=e,console.log(chengeColorStarted)}),1e3);chengeColorStarted=!1}})),t.addEventListener("click",(()=>{clearInterval(r),chengeColorStarted=!0}));
//# sourceMappingURL=01-color-switcher.828933b9.js.map
