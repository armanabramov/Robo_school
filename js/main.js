const owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 40,
    nav: false,
    dots: false,
});

$('.teachers__skider-btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.teachers__slider-btn-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})