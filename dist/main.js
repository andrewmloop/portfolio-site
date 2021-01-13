(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),c=t(126),d=o()((function(n){return n[1]})),s=a()(c.Z);d.push([n.id,"/* ---------------------------------\n----------- CSS RESET --------------\n--------------------------------- */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* ----------------------------------\n------------- MAIN CSS --------------\n---------------------------------- */\n* {\n  box-sizing: border-box;\n  --smoky-black: #0f0905ff;\n  --ghost-white: #f0eff4ff;\n  --golden-rod: #F5B512;\n  --midnight-blue: #191970;\n\n  --head-font: 'Karla', sans-serif;\n  --body-font: 'Lato', sans-serif;\n}\n\nhtml {\n  font-size: 62.5%;\n  font-family: var(--body-font);\n  scroll-behavior: smooth;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: var(--smoky-black);\n}\n\n/* ----------------------------------\n------------ HEADER CSS -------------\n---------------------------------- */\nheader {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  margin: 0;\n  padding: 0 2rem;\n\n  width: 100%;\n  height: 5rem;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  background-color: var(--smoky-black);\n\n  z-index: 1;\n}\n\n.logo-text {\n  font-size: 4rem;\n  font-family: var(--head-font);\n  font-weight: bold;\n  color: var(--ghost-white);\n}\n\nnav {\n  margin: 0;\n  padding: 0;\n\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.link {\n  font-size: 2rem;\n  text-decoration: none;\n  color: var(--ghost-white);\n  margin: 0 2rem;\n}\n\n.link:hover,\n.mobile-link:hover {\n  text-decoration: underline;\n  text-decoration-color: var(--golden-rod);\n  transform: scale(1.1);\n  transition: 0.5s;\n}\n\n#toggle-menu {\n  display: none;\n}\n\n#mobile-toggle {\n  position: absolute;\n  top: 5rem;\n\n  width: 50%;\n  height: calc(100vh - 5rem);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, .8);\n\n  transition: .5s;\n}\n\n#menu-btn {\n  background-color: var(--smoky-black);\n  border: none;\n\n  width: 6rem;\n  height: 100%;\n}\n\n.mobile-link {\n  font-size: 3rem;\n  text-decoration: none;\n  color: var(--ghost-white);\n  margin: 2rem 0;\n}\n\n.mobile-hidden {\n  right: -600px;\n}\n\n.mobile-visible {\n  right: 0;\n}\n\n@media (max-width: 650px) {\n  nav {\n    display: none;\n  }\n\n  #toggle-menu {\n    display: block;\n  }\n}\n\n/* ----------------------------------\n------------- HOME CSS --------------\n---------------------------------- */\n.main-section {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 5rem);\n}\n\n#home {\n  background: url("+s+");\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  padding: 0 2rem;\n\n  transition: 1.5s;\n}\n\n#name-text {\n  font-size: 9rem;\n}\n\n.title {\n  font-family: var(--head-font);\n  font-size: 6rem;\n}\n\n.description-container {\n  margin: 2rem 0 0;\n  text-align: center;\n}\n\n.stagger-left {\n  text-align: left;\n}\n\n.stagger-middle {\n  text-align: center;\n}\n\n.stagger-right {\n  text-align: right;\n}\n\n.description-text {\n  font-size: 3.5rem;\n  color: var(--smoky-black);\n\n  margin: 2rem 0;\n\n  transition: .5s;\n}\n\n.large-text {\n  font-size: 9rem;\n}\n\n.bold-text {\n  font-weight: bold;\n}\n\n.emphasis {\n  display: inline-block;\n  font-family: var(--head-font);\n  font-size: 4rem;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-color: var(--golden-rod);\n  text-decoration-thickness: .6rem;\n\n  padding: 0 .5rem;\n}\n\n.emphasis:hover {\n  transform: scale(1.05);\n  transition: 0.5s;\n  cursor: pointer;\n}\n\n@media (max-width: 650px) {\n  #home,\n  .stagger-left,\n  .stagger-middle,\n  .stagger-right {\n    text-align: center;\n  }\n}\n\n@media (max-width: 500px) {\n  .large-text,\n  #name-text {\n    font-size: 7rem;\n  }\n\n  .emphasis {\n    font-size: 3.5rem;\n  }\n\n  .description-text {\n    font-size: 3.25rem;\n  }\n}\n\n@media (max-width: 350px) {\n  .large-text,\n  #name-text {\n    font-size: 6rem;\n  }\n\n  .emphasis {\n    font-size: 3rem;\n  }\n\n  .description-text {\n    font-size: 2.75rem;\n  }\n}\n\n/* ----------------------------------\n----------- Project CSS -------------\n---------------------------------- */\n.section {\n  position: relative;\n  width: 100%;\n\n  margin: 4rem 0 8rem;\n  padding: 0 2rem;\n}\n\n.center {\n  text-align: center;\n}\n\n.white-text {\n  color: white;\n}\n\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  width: 100%;\n}\n\n.project {\n  width: 65%;\n  height: auto;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n\n  background-color: white;\n  border: none;\n\n  padding-right: 2rem;\n  margin: 4rem 0;\n\n  border-radius: .5rem;\n  box-shadow: 1rem 1rem var(--golden-rod);\n\n  overflow: hidden;\n\n  transition: .5s;\n}\n\n.project:hover {\n  box-shadow: 2rem 2rem var(--golden-rod);\n}\n\n.image-container {\n  width: 300px;\n  height: 100%;\n\n  font-size: 0;\n  margin-right: 2rem;\n}\n\n.project-img {\n  transition: .5s;\n  height: 100%;\n\n  width: 300px;\n}\n\n.project-img:hover {\n  opacity: .5;\n}\n\n.info-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: center;\n\n  padding: 1.5rem 0;\n}\n\n.project-title {\n  font-size: 4rem;\n  font-family: var(--head-font);\n  text-align: center;\n}\n\n.project-text {\n  margin: 1rem 0;\n  font-size: 2rem;\n  line-height: 2.5rem;\n}\n\n.project-links {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.project-link {\n  margin: 0 .5rem;\n  transition: .5s;\n}\n\n.project-link:hover {\n  transform: scale(1.1);\n}\n\n@media (max-width: 1450px) {\n  .project {\n    width: 75%;\n  }\n}\n\n@media (max-width: 1300px) {\n  .project {\n    width: 85%;\n  }\n}\n\n@media (max-width: 1150px) {\n  .project {\n    width: 90%;\n  }\n}\n\n@media (max-width: 1100px) {\n  .project {\n    width: 95%;\n  }\n}\n\n@media (max-width: 1000px) {\n  .image-container,\n  .project-img {\n    width: 350px;\n  }\n}\n\n@media (max-width: 950px) {\n  .projects-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto;\n    justify-items: center;\n    align-items: start;\n\n    grid-gap: 2rem;\n  }\n\n  .project {\n    flex-direction: column;\n    width: 90%;\n    padding: 0;\n  }\n\n  .image-container,\n  .project-img {\n    width: 100%;\n  }\n\n  .info-container {\n    margin-top: 1rem;\n    padding: 0 2rem 2rem;\n\n  }\n}\n\n@media (max-width: 750px) {\n  .projects-container {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 450px) {\n  .project-title {\n    font-size: 3rem;\n  }\n\n  .info-container {\n    padding: 0 1rem 1rem;\n  }\n}\n\n/* ----------------------------------\n----------- About CSS ------------\n---------------------------------- */\n.about-container {\n  width: 65%;\n  margin: 4rem auto;\n  padding: 2rem;\n\n  background-color: white;\n  border-radius: .5rem;\n  box-shadow: 1rem 1rem var(--golden-rod);\n  transition: .5s;\n}\n\n.about-container:hover {\n  box-shadow: 2rem 2rem var(--golden-rod);\n}\n\n.about-text {\n  margin-bottom: 2rem;\n  font-size: 2.5rem;\n  line-height: 3.5rem;\n}\n\n/* ----------------------------------\n----------- Contact CSS ------------\n---------------------------------- */\n#contact {\n  margin-top: 12rem;\n}\n\n.contact-container {\n  width: 65%;\n  margin: 4rem auto;\n  padding: 2rem;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  background-color: white;\n  border-radius: .5rem;\n  box-shadow: 1rem 1rem var(--golden-rod);\n  transition: .5s;\n}\n\n.contact-container:hover {\n  box-shadow: 2rem 2rem var(--golden-rod);\n}\n\n.contact-link {\n  margin: 0 2rem;\n  text-decoration: none;\n  color: black;\n  font-size: 3rem;\n\n  transition: .5s;\n}\n\n.contact-link:hover {\n  transform: scale(1.1);\n}\n\n@media (max-width: 1400px) {\n  .about-container,\n  .contact-container {\n    width: 70%;\n  }\n}\n\n@media (max-width: 1300px) {\n  .about-container,\n  .contact-container {\n    width: 80%;\n  }\n}\n\n@media (max-width: 1150px) {\n  .about-container,\n  .contact-container {\n    width: 85%;\n  }\n}\n\n@media (max-width: 1100px) {\n  .about-container,\n  .contact-container {\n    width: 95%;\n  }\n}\n\n@media (max-width: 600px) {\n  .contact-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto;\n    justify-items: center;\n    height: auto;\n  }\n\n  .contact-link {\n    margin: 1rem;\n  }\n}\n\n@media (max-width: 500px) {\n  .title {\n    font-size: 5rem;\n  }\n\n  .about-text {\n    font-size: 2rem;\n  }\n}\n\n@media (max-width: 400px) {\n  .about-container {\n    padding: 2rem 1rem;\n  }\n}\n\n@media (max-width: 350px) {\n  .contact-container {\n    grid-template-columns: 1fr;\n  }\n}\n\n",""]);const l=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},126:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"73fcb2ee54e15b8d55c95a1caad0b493.jpg"},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],d=e.base?c[0]+e.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var m=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(i[m].references++,i[m].updater(f)):i.push({identifier:l,updater:u(f,e),references:1}),r.push(l)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function m(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,g=0;function u(n,e){var t,r,o;if(e.singleton){var i=g++;t=h||(h=d(e)),r=m.bind(null,t,i,!1),o=m.bind(null,t,i,!0)}else t=d(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var d=c(n,e),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}}},e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),r=t(426);function o(n){document.getElementById("mobile-toggle").classList.toggle("mobile-visible")}function i(n){var e=n.target.id,t=document.getElementById("home"),r=Array.from(document.getElementsByClassName("description-text")),o=Array.from(document.getElementsByClassName("emphasis"));"name-text"===e&&(t.style.background="",r.forEach((function(n){n.style.color=""})),o.forEach((function(n){n.style.color=""}))),"web-dev-text"===e&&(t.style.background="url(./assets/dark-code-bg.jpg) no-repeat center",r.forEach((function(n){n.style.color="white"})),o.forEach((function(n){n.style.color="white"}))),"woodworker-text"===e&&(t.style.background="url(./assets/brown-workshop-bg.jpg) no-repeat center",r.forEach((function(n){n.style.color="white"})),o.forEach((function(n){n.style.color="white"})))}e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,document.getElementById("menu-btn").addEventListener("click",o),Array.from(document.getElementsByClassName("mobile-link")).forEach((function(n){n.addEventListener("click",o)})),document.getElementById("name-text").addEventListener("click",i),document.getElementById("web-dev-text").addEventListener("click",i),document.getElementById("woodworker-text"),addEventListener("click",i)})()})();