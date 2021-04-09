// DOM query selector
const menuIcon = document.querySelector('.menu-icon');
const aside = document.querySelector('.aside');
const asideClose = document.querySelector('.aside-close-icon');

// toggle function for sidebar
function toggle(el, className) {
	if (el.classList.contains(className)) {
		el.classList.remove(className);
	} else {
		el.classList.add(className);
	}
}

// Event listener for sidebar
menuIcon.addEventListener('click', function() {
	toggle(aside, 'active');
});

asideClose.addEventListener('click', function() {
	toggle(aside, 'active');
});
