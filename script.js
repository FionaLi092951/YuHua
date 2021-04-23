
$(window).load(function () {
    $(window).on("scroll resize", function () {
        var pos = $('#date').offset();
        $('.post').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {               
                var newDescr = $(this).find('.description').html();
                var oldDescr = $( "#date" ).html();

                $('#date').html(newDescr); 
                if(newDescr !== oldDescr) {
                    $( "#date" ).css('opacity', 0.9).animate({ 'opacity': '1',}, 10);
                return; 
                }
            }
        });
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
    });
});

$(window).load(function () {
    $(window).on("scroll resize", function () {
        var pos = $('#date_top').offset();
        $('.post').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {               
                var newDescr = $(this).find('.description_top').html();
                var oldDescr = $( "#date_top" ).html();

                $('#date_top').html(newDescr); 
                if(newDescr !== oldDescr) {
                    $( "#date_top" ).css('opacity', 0.9).animate({ 'opacity': '1',}, 10);
                return; 
                }
            }
        });
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
    });
});

$(window).load(function () {
    $(window).on("scroll resize", function () {
        var pos = $('#date_bottom').offset();
        $('.post').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {               
                var newDescr = $(this).find('.description_bottom').html();
                var oldDescr = $( "#date_bottom" ).html();

                $('#date_bottom').html(newDescr); 
               
                if(newDescr !== oldDescr) {
                    $( "#date_bottom" ).css('opacity', 0.9).animate({ 'opacity': '1',}, 10);
                return; 
                }
            }
        });
    });

    $(document).ready(function () {
        console.log('hahah')
        if ($(window).width() < $(window).height()) {
            // 竖屏幕
            // 竖屏时默认不显示detail的文字
            $('.credit_detail').css('opacity', 0);
            $('.credit_detail_btn').css('display', "block");
        } else {
            // 横屏时不显示Credit按钮
            // $('.credit_detail_btn').css('display', "block");
        }
        $(window).trigger('scroll'); // init the value
    });
});


function showCreditDetail() {
    if ($('.credit_detail').css('opacity') == 1) {
        $('.credit_detail').css('opacity', 0);
    } else {
        $('.credit_detail').css('opacity', 1);
    }
    $(window).trigger('scroll'); // refresh page
}

