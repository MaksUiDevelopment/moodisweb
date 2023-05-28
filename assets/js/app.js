$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
    $(".accordion_1").on("click", function (event) {
        event.preventDefault();

        $(".accordion-img_1").toggleClass("active");
    });
    $(".accordion_2").on("click", function (event) {
        event.preventDefault();

        $(".accordion-img_2").toggleClass("active");
    });
    $(".accordion_3").on("click", function (event) {
        event.preventDefault();

        $(".accordion-img_3").toggleClass("active");
    });
    $(".open-map__button").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#map").toggleClass("active");
    });


    /* Collapse */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $(this).parent().toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
