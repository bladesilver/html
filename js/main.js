$(function(){
 $('.slider__box').slick({
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow left.svg" alt="">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow right.svg" alt="">',
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false
        }
      }
    ]
 });

 $('.menu-btn').on('click', function(){
   $('.menu__list').toggleClass('active');
 });
});