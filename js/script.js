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