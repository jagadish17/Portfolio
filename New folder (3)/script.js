const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function updateThemeButton(isLight) {
  themeToggle.textContent = isLight ? 'Light' : 'Dark';
}

function applyTheme(theme) {
  root.classList.toggle('light-theme', theme === 'light');
  updateThemeButton(theme === 'light');
  localStorage.setItem('portfolioTheme', theme);
}

const savedTheme = localStorage.getItem('portfolioTheme');
applyTheme(savedTheme === 'light' ? 'light' : 'dark');

themeToggle.addEventListener('click', () => {
  const current = root.classList.contains('light-theme') ? 'light' : 'dark';
  applyTheme(current === 'light' ? 'dark' : 'light');
});
