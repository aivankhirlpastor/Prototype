
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
