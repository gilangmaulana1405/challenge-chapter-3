const nextIcon = '<img src="./img/next.png" width="30" height="30" class="mt-3" alt="">';
const prevIcon = '<img src="./img/prev.png" width="30" height="30" class="mt-3" alt="">';

$('.owl-carousel').owlCarousel({
    stagePadding: 1,
    loop: true,
    autoplay: true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            nav: true,
            items: 2
        },

        1000: {
            nav: true,
            items: 3
        }
    }
})