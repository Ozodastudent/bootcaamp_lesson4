var HeaderbtnEl = document.querySelector(".toggle-btn");
var headerEl = document.querySelector(".header");
HeaderbtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("header-open");
});
