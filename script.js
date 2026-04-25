document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  const cards = document.querySelectorAll('.stat-card h3[data-target]');
  cards.forEach((el) => {
    const target = Number(el.dataset.target);
    let value = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const timer = setInterval(() => {
      value += step;
      if (value >= target) {
        value = target;
        clearInterval(timer);
      }
      el.textContent = `${value}${el.dataset.suffix || ''}`;
    }, 30);
  });

  const form = document.querySelector('#message-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('留言已提交！谢谢你的关注🏀');
      form.reset();
    });
  }
});
