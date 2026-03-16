// defining variables
const navBar = document.getElementById("nav-links")

function swapIconMenu(forceclose) {
    const targetButton = document.querySelector("#hamburger-menu img");

    if (forceclose === true) {
        navBar.classList.remove("show-space");
    } else {
        navBar.classList.add("per-disclose");
        navBar.classList.toggle("show-space");
    }
    
    if (navBar.classList.contains("show-space")) {
        targetButton.setAttribute("src", "./icons/x_symbol.svg");
    } else {
        targetButton.setAttribute("src", "./icons/more.svg");
    }
}

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

document.getElementById("hamburger-menu").addEventListener("click", swapIconMenu);

navBar.addEventListener("transitionend", (t) => {
    if (!navBar.classList.contains("show-space")) {
        navBar.classList.remove("per-disclose");
    }
});

document.querySelectorAll(".nav-link").forEach(e => {  
    e.addEventListener("click", (c) => {
        
        if (navBar.classList.contains("show-space")) {
            swapIconMenu();
        }
    })
});

window.addEventListener("resize", () => {
    navBar.classList.remove("show-space");
    swapIconMenu(true);
});