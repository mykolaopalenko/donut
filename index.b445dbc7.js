!function(){var e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",(function(){var n="true"===e.getAttribute("aria-expended")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expended",!n),t.classList.toggle("is-open")}))}();var menuLinks=document.querySelectorAll(".site-nav__link");menuLinks.forEach((function(e){e.addEventListener("click",(function(){var e=document.querySelector("[data-menu]");e.classList.contains("is-open")&&e.classList.remove("is-open")}))}));
//# sourceMappingURL=index.b445dbc7.js.map
