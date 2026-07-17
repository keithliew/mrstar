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

  /* Banner slider (auto-advance, pauses on hover/focus) */
  document.querySelectorAll("[data-slider]").forEach(function (slider) {
    var slides = slider.querySelectorAll(".slider__slide");
    var dots = slider.querySelectorAll(".slider__dot");
    if (slides.length < 2) return;

    var interval = parseInt(slider.getAttribute("data-interval"), 10) || 7000;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var index = 0;
    var timer = null;

    function show(next) {
      slides[index].classList.remove("is-active");
      dots[index] && dots[index].classList.remove("is-active");
      dots[index] && dots[index].setAttribute("aria-selected", "false");
      index = next;
      slides[index].classList.add("is-active");
      dots[index] && dots[index].classList.add("is-active");
      dots[index] && dots[index].setAttribute("aria-selected", "true");
    }

    function start() {
      stop();
      if (reduceMotion) return;
      timer = window.setInterval(function () {
        show((index + 1) % slides.length);
      }, interval);
    }
    function stop() {
      if (timer) { window.clearInterval(timer); timer = null; }
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        show(i);
        start();
      });
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    slider.addEventListener("focusin", stop);
    slider.addEventListener("focusout", start);

    start();
  });

  /* Native lazy-load fallback for older browsers */
  if (!("loading" in HTMLImageElement.prototype)) {
    document.querySelectorAll("img[loading='lazy']").forEach(function (img) {
      img.setAttribute("data-eager-fallback", "true");
    });
  }
})();
