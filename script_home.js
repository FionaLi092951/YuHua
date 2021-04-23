$(window).load(function () {

    $(window).on("scroll resize", function () {
        if ($(window).width() < $(window).height()) {
            // 竖屏幕
            $('.slider2-ver').css('opacity', 1);
            $('.slider2-hor').css('opacity', 0);
        } else {
            // 横屏幕
            $('.slider2-ver').css('opacity', 0);
            $('.slider2-hor').css('opacity', 1);
        }
    });

    $(document).ready(function () {
        if ($(window).width() < $(window).height()) {
            // 竖屏幕
            $('.slider2-ver').css('opacity', 1);
            $('.slider2-hor').css('opacity', 0);
        } else {
            // 横屏幕
            $('.slider2-ver').css('opacity', 0);
            $('.slider2-hor').css('opacity', 1);
        }
        // console.log('hahah')
        // $(window).trigger('scroll');
    });
});


