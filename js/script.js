// Handles screenshot and navigation to menu.html from any page with a menu button

window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.button2').forEach(function(menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            html2canvas(document.body).then(function(canvas) {
                localStorage.setItem('menuBg', canvas.toDataURL());
                window.location.href = 'menu.html';
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const homeBtn = document.getElementById('homeBtn');
  if (homeBtn) {
    homeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(function() {
        window.location.href = 'index.html';
      }, 1000);
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  if (document.body.classList.contains('home-page')) {
    document.body.classList.add('fade-in');
  }
});