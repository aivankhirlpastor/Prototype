export function applySwiper() {
    const blogswiper = new Swiper("#recent-swiper", {
        direction: "horizontal",
        effect: "fade",
        loop: true,

        autoplay: {
            delay: 4000,
            disableOnInteraction: true
        },

        pagination: {
            el: "#recent-swiper .swiper-pagination",
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

export function initialVariable() {
    const subscriptionBanner = document.getElementById("subscription-banner");

    if (document.getElementById("show-more")) {
        document.getElementById("show-more").addEventListener("click", () => {
            subscriptionBanner.classList.add("disclosed");
        });
    }

    if (document.getElementById("restore-info")) {
        document.getElementById("restore-info").addEventListener("click", () => {
            subscriptionBanner.classList.remove("disclosed");
        });
    }
}