function ibg(){
    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
ibg();


let iconMenu = document.querySelector(".icon-menu");
let menuBody = document.querySelector(".menu__body");

iconMenu.addEventListener("click", function(){
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
})


$('.slider__body').slick(
    {
        dots: true,
        arrows: false, 
        accessibility: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive:[{
            breakpoint: 768,
            settings:{}
        }]
    }
);



