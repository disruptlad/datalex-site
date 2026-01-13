const burger = document.querySelector(".burger");
const drawer = document.querySelector(".drawer");

function closeDrawer() {
  drawer.style.display = "none";
  drawer.setAttribute("aria-hidden", "true");
  burger.setAttribute("aria-expanded", "false");
}

function openDrawer() {
  drawer.style.display = "block";
  drawer.setAttribute("aria-hidden", "false");
  burger.setAttribute("aria-expanded", "true");
}

burger?.addEventListener("click", () => {
  const expanded = burger.getAttribute("aria-expanded") === "true";
  expanded ? closeDrawer() : openDrawer();
});

drawer?.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "a") closeDrawer();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
