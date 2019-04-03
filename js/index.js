$(function () {
    $(".fullpage").fullpage({
        navigation: true,
        sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],
        afterLoad: function (a, index) {
            $('.section').eq(index - 1).addClass('animation').siblings().removeClass('animation');
            $(".section>div div,.section>div img").stop(true, false).removeAttr("style");
            if (index == 4) {
                $(".carbox").animate({
                    marginLeft: 800
                }, 2000, "easeInElastic", function () {
                    $(".keyobard").animate({
                        opacity: 1
                    }, 1000);
                }, 1000)
            }


            if (index == 2) {
                $(".section2 .search01").animate({
                    marginLeft: 20
                }, 1000, "easeOutBack", function () {
                    $('.search01').hide(),
                        $('.search02').show().delay(500).animate({
                            width: 160,
                            marginLeft: 100,
                            marginBottom: 448
                        }, 1000)
                    $(".sofas").delay(500).animate({
                        width: 441
                    }, 1000)
                })
            }

            if (index == 6) {
                $(".gift").animate({
                    top: 10
                }, 1000, function () {
                    $(".street").animate({
                        backgroundPositionX: -1100
                    }, 2000, function () {
                        $(".man").animate({
                            height: 140
                        }, 1000, function () {
                            $(".man").delay(500).animate({
                                right: -200
                            }, 1000, function () {
                                $(".door").show();
                                setTimeout(function () {
                                    $(".girl").show();
                                }, 500)
                            })

                        })
                    })

                })
            }


        }
    });

    //小手跟我飞
    $(".section8").mousemove(function (e) {
        $('.section8 .flyhand').css('left', e.pageX - 65);
        $('.section8 .flyhand').css('top', e.pageY - 10);

    })
    $(".again").click(function () {
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        $.fn.fullpage.moveTo(1);
    })

})