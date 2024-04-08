document.addEventListener("DOMContentLoaded", function () {
  const headerMenu = document.querySelector("#header-menu");
  const menuToggle = document.querySelector("#menu-toggle");
  const bodyEl = document.body;

  menuToggle.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      headerMenu.classList.remove("active");
      bodyEl.classList.remove("lock");
    } else {
      this.classList.add("active");
      headerMenu.classList.add("active");
      bodyEl.classList.add("lock");
    }
  });

  headerMenu.addEventListener("click", function () {
    this.classList.remove("active");
    bodyEl.classList.remove("lock");
    menuToggle.classList.remove("active");
  });
});
