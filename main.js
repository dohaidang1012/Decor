const collapsibles = document.querySelectorAll(".collapsible__down");

collapsibles.forEach(function (collapsible) {
  collapsible.addEventListener("click", function () {
    const content = collapsible.closest(
      ".collapsible__list--article"
    ).nextElementSibling;
    content.classList.toggle("toggle");
    collapsible.classList.toggle('rotate')
  });
});
