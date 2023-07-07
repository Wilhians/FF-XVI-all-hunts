const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

document.getElementById("search-button").addEventListener("click", function () {
  var input = document.getElementById("search-input").value.toLowerCase();
  var items = document.querySelectorAll("#menu li");

  items.forEach(function (item) {
    var text = item.textContent.toLowerCase();
    if (text.includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
