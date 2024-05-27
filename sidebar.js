const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.sidebar-close-btn');
const menuBtn = document.querySelector('.sidebar-open-btn');

menuBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-close');
    sidebar.classList.add('sidebar-open');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.add('sidebar-close');
});