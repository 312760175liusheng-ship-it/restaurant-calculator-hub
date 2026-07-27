const buttons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll("[data-category]");
const empty = document.querySelector(".empty");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    let visible = 0;
    cards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.hidden = !show;
      if (show) visible += 1;
    });
    empty.hidden = visible > 0;
  });
});

