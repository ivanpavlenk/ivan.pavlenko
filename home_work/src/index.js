$(document).ready(function () {

    // init element of slider 

    let items = $('.item');
    $.each(items, function () {
        $('.bullet-inner').append('<a href="" class="bullet"></a>');
    });

    $('.bullet').eq(0).addClass('active-bullet');

    $('.bullet-inner').after('<a href="" class="next-btn">&#8594;</a>');
    $('.bullet-inner').after('<a href="" class="prev-btn">&#8592;</a>');

    // ============================================

    // function for next - btn ===== 

    $('.next-btn').click(function (e) {
        e.preventDefault();
        let currentImg = $('.item.item-active')
        let currentImgIndex = currentImg.index()
        let nextImgIndex = currentImgIndex + 1
        let nextImg = $('.item').eq(nextImgIndex)
        let bullet = $('.bullet')
        activeBullet = $('.bullet').eq(nextImgIndex)

        currentImg.hide(500)
        currentImg.removeClass('item-active')
        bullet.removeClass('active-bullet')
        activeBullet.addClass('active-bullet')

        if (nextImgIndex == ($('.item:last').index() + 1)) {
            $('.item').eq(0).show(500);
            $('.item').eq(0).addClass('item-active')
            $('.bullet').eq(0).addClass('active-bullet')
        }
        else {
            nextImg.show(500)
            nextImg.addClass('item-active');
        }
    });

    // ==========================================

    // function for prev - btn ===== start 

    $('.prev-btn').click(function (e) {

        e.preventDefault();
        let currentImg = $('.item.item-active')
        let currentImgIndex = currentImg.index()
        let prevImgIndex = currentImgIndex - 1
        let prevImg = $('.item').eq(prevImgIndex)
        let bullet = $('.bullet')
        activeBullet = $('.bullet').eq(prevImgIndex)

        currentImg.hide(500)
        currentImg.removeClass('item-active')
        bullet.removeClass('active-bullet')
        activeBullet.addClass('active-bullet')
        prevImg.show(500)
        prevImg.addClass('item-active');
    });


    // ==========================================

    // function for bullets

    let bullets = $('.bullet')
    bullets.click(function (e) {
        e.preventDefault();
        bullets.removeClass('active-bullet')
        $(this).addClass('active-bullet')
        let images = $('.item')
        let activeImage = images.eq($(this).index())

        images.removeClass('item-active')
        images.hide(500);
        activeImage.show(500)
        activeImage.addClass('item-active')
    });
});