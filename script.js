// defining variables
const navBar = document.getElementById("nav-links")

// add event listeners

document.addEventListener("scroll", (sc) => {
    const navTarget = document.querySelector("header");

    if (window.scrollY > 58) {
        // fill the background with black by adding the class when scroll from top
        navTarget.id = "blackkey-contrast";
    } else {
        // remove the background fill when scrolled to top
        navTarget.removeAttribute("id");
    }
})

document.getElementById("hamburger-menu").addEventListener("click", () => {
    navBar.classList.toggle("show-space");
    navBar.classList.add("per-disclose");
});

navBar.addEventListener("transitionend", (t) => {
    if (!navBar.classList.contains("show-space")) {
        navBar.classList.remove("per-disclose");
    }
});

document.querySelectorAll(".nav-link").forEach(e => {
    e.addEventListener("click", (c) => {
        navBar.classList.remove("show-space");
    })
});