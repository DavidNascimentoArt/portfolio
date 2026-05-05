const btn = document.getElementById('colorBtn');
btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const msg = document.getElementById('message');
  msg.textContent = document.documentElement.classList.contains('dark') ? 'Dark theme' : 'Light theme';
});
