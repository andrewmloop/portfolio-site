(()=>{"use strict";function e(e){document.getElementById("mobile-toggle").classList.toggle("mobile-visible")}function t(e){var t=e.target.id,o=document.getElementById("home"),n=Array.from(document.getElementsByClassName("description-text")),c=Array.from(document.getElementsByClassName("emphasis"));"name-text"===t&&(o.style.background="",n.forEach((function(e){e.style.color=""})),c.forEach((function(e){e.style.color=""}))),"web-dev-text"===t&&(o.style.background="url(./assets/dark-code-bg.jpg) no-repeat center",n.forEach((function(e){e.style.color="white"})),c.forEach((function(e){e.style.color="white"}))),"woodworker-text"===t&&(o.style.background="url(./assets/brown-workshop-bg.jpg) no-repeat center",n.forEach((function(e){e.style.color="white"})),c.forEach((function(e){e.style.color="white"})))}document.getElementById("menu-btn").addEventListener("click",e),Array.from(document.getElementsByClassName("mobile-link")).forEach((function(t){t.addEventListener("click",e)})),document.getElementById("name-text").addEventListener("click",t),document.getElementById("web-dev-text").addEventListener("click",t),document.getElementById("woodworker-text"),addEventListener("click",t)})();