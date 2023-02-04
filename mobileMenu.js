const closeMenuBtn = document.querySelector('.link-items img');
const navItems = document.querySelectorAll('.link-items a');
const mobileMenu = document.querySelector('.link-items');
const hamburger = document.querySelector('.hamburger');

function openMobileMenu() {
  mobileMenu.style.display = 'block';
}

function closeMobileMenu() {
  mobileMenu.style.display = 'none';
}

closeMenuBtn.addEventListener('click', closeMobileMenu);
for (let i = 0; i < navItems.length; i += 1) {
  navItems[i].addEventListener('click', closeMobileMenu);
}

hamburger.addEventListener('click', openMobileMenu);