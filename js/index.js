const join = document.querySelector(".join"),
  overlay = document.querySelector(".overlay"),
  closeBtn = document.querySelector(".overlay .close");

join.addEventListener("click", () => {
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});
document.getElementById('navToggle').addEventListener('click', function(event) {
  event.preventDefault();
  var navbar = document.getElementById('navbar');
  if (navbar.classList.contains('hidden')) {
      navbar.classList.remove('hidden');
      navbar.classList.add('visible');
  } else {
      navbar.classList.remove('visible');
      navbar.classList.add('hidden');
  }
});
