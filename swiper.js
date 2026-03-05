export function applySwiper() {
    const blogswiper = new Swiper("#recent-swiper", {
        direction: "horizontal",
        effect: "fade",
        loop: true, 

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