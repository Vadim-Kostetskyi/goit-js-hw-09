!function(){var e=document.querySelector(".form");document.querySelector("button");function n(e,n){var t=Math.random()>.3;return new Promise((function(o,c){setTimeout((function(){t?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):c("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var t=e.currentTarget,o=Number(t.delay.value),c=Number(t.step.value),u=Number(t.amount.value),r=1;r<=u;r++)n(r,o).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),o+=c}))}();
//# sourceMappingURL=03-promises.e3da2d66.js.map
