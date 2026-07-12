/* MR STAR — shared script: mobile nav, fade-up reveals, lazy-load fallback */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Fade-up reveals on scroll */
  var fadeEls = document.querySelectorAll(".fade-up");
  if (fadeEls.length) {
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
      );
      fadeEls.forEach(function (el) { observer.observe(el); });
    } else {
      fadeEls.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* Native lazy-load fallback for older browsers */
  if (!("loading" in HTMLImageElement.prototype)) {
    document.querySelectorAll("img[loading='lazy']").forEach(function (img) {
      img.setAttribute("data-eager-fallback", "true");
    });
  }
})();
