window.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu-panel');
    // Force reflow
    void menu.offsetWidth;
    setTimeout(() => {
        menu.classList.add('active');
    }, 10);

    // Animate exit for close button
    const closeBtn = document.getElementById('closeMenuBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            menu.classList.add('exiting');
            menu.classList.remove('active');
            setTimeout(function() {
                window.history.back();
            }, 500);
        });
    }

    // Animate exit for all menu links
    document.querySelectorAll('.menu-panel a[class^="absolute-link"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            menu.classList.add('exiting');
            menu.classList.remove('active');
            setTimeout(function() {
                window.location.href = href;
            }, 500);
        });
    });
});