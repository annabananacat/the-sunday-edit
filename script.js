
// ========================================
// 1. Light and Dark Mode
// ========================================

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function getSavedTheme() {
  try {
    return localStorage.getItem("sunday-edit-theme");
  } catch {
    return null;
  }
}

function setTheme(theme) {
  root.dataset.theme = theme;

  if (themeToggle) {
    const isDark = theme === "dark";

    themeToggle.setAttribute("aria-pressed", String(isDark));

    themeToggle.innerHTML = isDark
      ? '<span aria-hidden="true">☀</span>'
      : '<span aria-hidden="true">◐</span>';
  }

  try {
    localStorage.setItem("sunday-edit-theme", theme);
  } catch {
    // Theme remains active if storage is unavailable.
  }
}

const savedTheme = getSavedTheme();

const prefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

setTheme(savedTheme || (prefersDark ? "dark" : "light"));

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = root.dataset.theme;

    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

// ========================================
// 2. Accessible Mobile Navigation
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  if (!menuToggle || !navLinks) return;

  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      navLinks.classList.contains("open")
    ) {
      closeMenu();
      menuToggle.focus();
    }
  });

  const desktopView = window.matchMedia("(min-width: 701px)");

  desktopView.addEventListener("change", event => {
    if (event.matches) {
      closeMenu();
    }
  });
}

// ========================================
// 3. Article Category Filtering
// ========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const articleCards = document.querySelectorAll(".article-card");
const articleCount = document.getElementById("articleCount");

function filterArticles(category) {
  let visibleCount = 0;

  articleCards.forEach(card => {
    const matches =
      category === "all" ||
      card.dataset.category === category;

    card.hidden = !matches;

    if (matches) {
      visibleCount++;
    }
  });

  filterButtons.forEach(button => {
    const isActive = button.dataset.category === category;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (articleCount) {
    articleCount.textContent =
      `${visibleCount} ${visibleCount === 1 ? "story" : "stories"}`;
  }
}

// Filter button events

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterArticles(button.dataset.category);
  });
});

// ========================================
// 4. Navigation Category Links
// ========================================

const categoryLinks = document.querySelectorAll(
  "[data-nav-category]"
);

categoryLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (articleCards.length) {
      filterArticles(link.dataset.navCategory);
    }
  });
});

// Initialize homepage filters

if (articleCards.length) {
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category");

  const validCategories = [
    "Culture",
    "Travel",
    "Art",
    "Design"
  ];

  const initialCategory = validCategories.includes(requestedCategory)
    ? requestedCategory
    : "all";

  filterArticles(initialCategory);
}

// ========================================
// 5. Reading Progress Indicator
// ========================================

const progressBar = document.getElementById("readingProgress");

function updateReadingProgress() {
  if (!progressBar) return;

  const scrollTop = window.scrollY;

  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = scrollHeight > 0
    ? Math.min(100, Math.max(0, scrollTop / scrollHeight * 100))
    : 0;

  progressBar.style.width = `${progress}%`;
}

if (progressBar) {
  window.addEventListener("scroll", updateReadingProgress, {
    passive: true
  });

  window.addEventListener("resize", updateReadingProgress);

  updateReadingProgress();
}
