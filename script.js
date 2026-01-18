// Custom cursor disabled
// document.addEventListener("DOMContentLoaded", function () {
// 	const cursor = document.createElement("div");
// 	cursor.classList.add("cursor");

// 	const cursorDot = document.createElement("div");
// 	cursorDot.classList.add("cursor-dot");

// 	document.body.appendChild(cursor);
// 	document.body.appendChild(cursorDot);

// 	document.addEventListener("mousemove", function (e) {
// 		cursor.style.left = e.clientX + "px";
// 		cursor.style.top = e.clientY + "px";

// 		cursorDot.style.left = e.clientX + "px";
// 		cursorDot.style.top = e.clientY + "px";
// 	});

// 	document.addEventListener("mousedown", function () {
// 		cursor.classList.add("active");
// 		cursorDot.classList.add("active");
// 	});

// 	document.addEventListener("mouseup", function () {
// 		cursor.classList.remove("active");
// 		cursorDot.classList.remove("active");
// 	});

// 	// Add hover effect to clickable elements
// 	const clickables = document.querySelectorAll(
// 		'a, button, input[type="submit"], .project-card, .skill-item',
// 	);
// 	clickables.forEach((item) => {
// 		item.addEventListener("mouseover", function () {
// 			cursor.classList.add("hover");
// 		});
// 		item.addEventListener("mouseleave", function () {
// 			cursor.classList.remove("hover");
// 		});
// 	});

// 	// Add js-enabled class to body to activate custom cursor
// 	document.body.classList.add("js-enabled");
// });

// ==================== Loading Animation ====================
window.addEventListener('load', () => {
	const loader = document.querySelector('.loader');
	if (loader) {
		setTimeout(() => {
			loader.classList.add('hidden');
		}, 1000);
	}
});

// ==================== Mobile Menu Toggle ====================
let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
let m = document.querySelector(".main-body");
let count = 0;

menu.addEventListener("click", () => {
	menu.classList.toggle("bx-x");
	navbar.classList.toggle("active");
	navbar.classList.toggle("open");

	if (m) {
		m.style.marginTop = "200px";
		count++;
		if (count % 2 == 0) {
			m.style.marginTop = "0px";
		}

		if (m.classList.contains("m-t")) {
			m.classList.remove("m-t");
		} else {
			m.classList.add("m-t");
		}
	}
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		if (window.innerWidth <= 768) {
			navbar.classList.remove('active');
			navbar.classList.remove('open');
			menu.classList.remove('bx-x');
			if (m) {
				m.style.marginTop = "0px";
			}
		}
	});
});

// ==================== Sticky Header ====================
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;

	if (currentScroll > 100) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}

	lastScroll = currentScroll;
});

// ==================== Active Navigation Highlight ====================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 100;
		const sectionId = current.getAttribute('id');
		const navLink = document.querySelector('.navbar a[href*=' + sectionId + ']');

		if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			navLink.classList.add('active');
		} else if (navLink) {
			navLink.classList.remove('active');
		}
	});
}

window.addEventListener('scroll', scrollActive);

// ==================== Scroll Reveal Animation ====================
function scrollReveal() {
	const reveals = document.querySelectorAll('.experience-entry, .skill-item, .project-card, .email-card');

	reveals.forEach(element => {
		const windowHeight = window.innerHeight;
		const elementTop = element.getBoundingClientRect().top;
		const elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			element.classList.add('fade-in-up');
		}
	});
}

window.addEventListener('scroll', scrollReveal);
// Initial check
scrollReveal();

GitHubCalendar(".calendar", "Jatin-Lalit");
GitHubCalendar(".calendar", "Jatin-Lalit", { responsive: true });

function resume() {
	window.open(
		"https://drive.google.com/file/d/1aqeJTS5NKnIqk9TYsnpIEUgYWh58kmn8/view?usp=sharing",
	);
}

document
	.getElementById("contactForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		document.getElementById("spinner-grow").style.display = "block";
		let name = document.getElementById("name");
		let email = document.getElementById("email");
		let message = document.getElementById("message");

		const formData = {
			name: name.value,
			email: email.value,
			message: message.value,
		};

		const url = "https://formlanding.onrender.com/post";

		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.msg === "true") {
					document.getElementById("spinner-grow").style.display = "none";
					Swal.fire(
						"Thank you for contacting me!, I will try to connect you as soon as possible",
					);

					// alert("Thank you for contacting us!, I will try to connect you as soon as possible");
				} else {
					Swal.fire("An error occurred. Please try again later.");
				}
			})
			.catch((error) => {
				alert("An error occurred. ");
			});
	});
document.getElementById("can-not-share-code").addEventListener("click", () => {
	Swal.fire("Can Not Share Code Related To This Project With Others");
});
