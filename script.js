// ==========================
// DHIBLAWE WATER BOWSER
// SCRIPT.JS
// ==========================

// Elements
const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll("section");
const backToTop = document.getElementById("backToTop");
const whatsappBtn = document.querySelector(".floating-whatsapp");

// ==========================
// MOBILE MENU TOGGLE
// ==========================

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close mobile menu after clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

// ==========================
// HEADER SHADOW ON SCROLL
// ==========================

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ==========================
// ACTIVE NAVIGATION LINKS
// ==========================

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }
    });
});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(
    ".card, .step, .reason, .contact-card"
);

const revealOnScroll = () => {
    revealElements.forEach((element, index) => {
        const top = element.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (top < trigger) {
            setTimeout(() => {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }, index * 120);
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ==========================
// SHOW / HIDE FLOATING BUTTONS
// ==========================

function toggleFloatingButtons() {

    if (window.scrollY > 400) {

        if (backToTop) {
            backToTop.style.opacity = "1";
            backToTop.style.visibility = "visible";
        }

        if (whatsappBtn) {
            whatsappBtn.style.opacity = "1";
            whatsappBtn.style.visibility = "visible";
        }

    } else {

        if (backToTop) {
            backToTop.style.opacity = "0";
            backToTop.style.visibility = "hidden";
        }

        if (whatsappBtn) {
            whatsappBtn.style.opacity = "0";
            whatsappBtn.style.visibility = "hidden";
        }
    }
}

window.addEventListener("scroll", toggleFloatingButtons);
window.addEventListener("load", toggleFloatingButtons);

// ==========================
// BACK TO TOP BUTTON
// ==========================

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ==========================
// SMOOTH SCROLL FOR NAV LINKS
// ==========================

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {

            e.preventDefault();

            const targetSection =
                document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// ==========================
// WATER TANK ANIMATION
// ==========================

window.addEventListener("load", () => {

    const waterFill =
        document.querySelector(".water-fill");

    if (waterFill) {
        waterFill.style.height = "85%";
    }
});

// ==========================
// INITIAL STATE
// ==========================

if (backToTop) {
    backToTop.style.opacity = "0";
    backToTop.style.visibility = "hidden";
    backToTop.style.transition = "0.3s";
}

if (whatsappBtn) {
    whatsappBtn.style.opacity = "0";
    whatsappBtn.style.visibility = "hidden";
    whatsappBtn.style.transition = "0.3s";
}