const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀" : "◐";
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#111216" : "#f5f5f7";
});

const filters = document.querySelectorAll(".filter");
const articles = document.querySelectorAll(".article-card");
const articleCount = document.getElementById("articleCount");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    let visible = 0;
    articles.forEach(article => {
      const show = selected === "all" || article.dataset.category === selected;
      article.hidden = !show;
      if (show) visible++;
    });
    articleCount.textContent = `${visible} ${visible === 1 ? "note" : "notes"}`;
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
