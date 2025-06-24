document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn_menu");
  const mobileMenu = document.getElementById("mobile_menu");

  mobileMenu.style.display = "none";

  btnMenu.addEventListener("click", () => {
    if (mobileMenu.style.display === "none") {
      mobileMenu.style.display = "block";
    } else {
      mobileMenu.style.display = "none";
    }
  });
});
