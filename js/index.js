/**
 * Created by wc on 2016/5/1.
 */
window.onload=function(){
    var bannerSwiper = new Swiper('.banner .swiper-container', {
        pagination: '.banner .swiper-pagination',
        nextButton: '.banner .swiper-button-next',
        prevButton: '.banner .swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 3000,
        speed: 600,
        autoplayDisableOnInteraction: false,
        loop: true
    });

    var buySwiper = new Swiper('.buy-content .swiper-container', {
        pagination: '.buy-content .swiper-pagination',
        paginationClickable: true,
        nextButton: '.buy-content .swiper-button-next',
        prevButton: '.buy-content .swiper-button-prev',
        spaceBetween: 30
    });

};