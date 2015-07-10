$(document).ready(function() {

    // 时间轴
    var timeline = $('#timeline');
    // 轮播图片插件
    var owl = $('#owl');
    owl.owlCarousel({
        items: 4,
        autoPlay: true,
        navigation: true,
        navigationText: [
            '<a class="prev"><i class="fa fa-chevron-left"></i></a>',
            '<a class="next"><i class="fa fa-chevron-right"></i></a>'
        ],
        pagination: false,
        theme: ""
    });

    $(window).scroll(function() {
        // 导航悬挂窗口
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 250) {
            $('#nav').addClass('fixed');
        } else {
            $('#nav').removeClass('fixed');
        }

        timeliner();
    });

    // 博客分享按钮
    $('a.share-toggle').each(function(i) {
        $(this).on('click', function() {
            var next = $(this).next();
            if (next.hasClass('active')) {
                next.removeClass('active');
            } else {
                next.addClass('active');
            }
        });
    });

    timeliner();
});

function timeliner() {
    var timeline = $('#timeline'),
        timelineTop = timeline.offset().top,
        timelineHeight = timeline.height(),
        timelineMaxHeight = $('.blog-timeline .content .wrap').first().outerHeight(),
        scrollTop = $(window).scrollTop();

    var nowHeight = scrollTop <= 341 ? 0 : scrollTop - 341;

    if (nowHeight <= timelineMaxHeight) {
        timeline.css('height', nowHeight + 'px');
    } else {
        if (scrollTop >= timelineMaxHeight) {
            timeline.css('height', timelineMaxHeight + 'px');
        } else {
            timeline.css('height', '0px');
        }
    }

    var dateBox = $('.item-wrap .item-date');
    dateBox.each(function (i) {
        var top = $(this).offset().top,
            height = $(this).height(),
            thisY = top + height / 2,
            maxY = timelineHeight + timelineTop;

        if (thisY <= maxY) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
}