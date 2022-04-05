"user strict";

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

// wyświetlanie i chowanie navigacji
const handleNav = () => {
	nav.classList.toggle("nav--active");
	navBtnBars.classList.remove("brown-bars-color");
	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});
	handleNavItemsAnimation();
};

// animacja linków navigacji
const handleNavItemsAnimation = () => {
	let delayTime = 0;
	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach((section) => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add("brown-bars-color");
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove("brown-bars-color");
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleObserver);
