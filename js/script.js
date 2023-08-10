$(document).ready(function(){
    $('.partners').slick({
      autoplay: false,
      arrows: true,
      dots: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 2,
      prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
      nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
      responsive:[{
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    });

    $('.new_1').slick({
      autoplay: false,
      arrows: true,
      dots: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      // appendArrows: $('.new_control_1'),
      // appendDots: $('.new_control_1'),
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 2,
      prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
      nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
      responsive:[{
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          }
        },
        {
        breakpoint: 781,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }]
    });


      $('.main_slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick_arrow slick_back"></button>',
        nextArrow: '<button type="button" class="slick_arrow slick_follow"></button>',
        responsive:[
          {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]
      });
      
  
    // $('.new_2').slick({
    //   autoplay: false,
    //   arrows: true,
    //   dots: true,
    //   pauseOnHover: false,
    //   pauseOnFocus: false,
    //   appendArrows: $('.new_control_2'),
    //   appendDots: $('.new_control_2'),
    //   speed: 1000,
    //   slidesToShow: 4,
    //   slidesToScroll: 2,
    //   prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
    //   nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
    //   responsive:[{
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       }
    //     },
    //     {
    //     breakpoint: 570,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     }
    //   }]
    // });
    // $('.new_3').slick({
    //   autoplay: false,
    //   arrows: true,
    //   dots: true,
    //   pauseOnHover: false,
    //   pauseOnFocus: false,
    //   appendArrows: $('.new_control_3'),
    //   appendDots: $('.new_control_3'),
    //   speed: 1000,
    //   slidesToShow: 4,
    //   slidesToScroll: 2,
    //   prevArrow: '<button type="button" class="slick_arrow slick_prev"></button>',
    //   nextArrow: '<button type="button" class="slick_arrow slick_next"></button>',
    //   responsive:[{
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       }
    //     },
    //     {
    //     breakpoint: 570,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     }
    //   }]
    // });

    sliderControl();
});

//  Alert Close

$('.alert_close').on("click", function(){
  $('.alert.alert--active').removeClass('alert--active');
});

//  Alert Close END

function sliderControl(){
	var slider = $('.new_1');

	for( i=0; i<slider.length; i++ ){
		$(slider[i]).find('.slick_prev').appendTo( $(slider[i]).siblings('.new_control_1') );
		$(slider[i]).find('.slick_next').appendTo( $(slider[i]).siblings('.new_control_1') );
		$(slider[i]).find('.slick-dots').appendTo( $(slider[i]).siblings('.new_control_1') );
	}
}

$(window).resize(function(){
	if( $('.services-list').hasClass('services-list') && ( $('.container').width() == 600 || $('.container').width() == 800 || $('.container').width() == 900 ) ){
    // sliderControl();
    setTimeout(sliderControl, 300);
  }
});

// const hamburger = document.querySelector('.hamburger'),
//       carte = document.querySelector('.carte'),
//       closeElem = document.querySelector('.menu_close');

// hamburger.addEventListener('click', () => {
//   carte.classList.add('active');
// });      

// closeElem.addEventListener('click', () => {
//   carte.classList.remove('active');
// }); 


// function mobMenu(){
//   if( $('.mob_menu').css("display") == 'block' ){
//     $('.header_subbottom .header_ul').prependTo('.under_nav');
//     $('.sub_menu').hide();
//   } else{
//     $('.under_nav .header_ul').prependTo('.header_subbottom');
//     $('.sub_menu').show();
//   }
// }

// mobMenu();

$('.mob_menu').on("click", function(){
  if( $(this).hasClass('active') ){
    $(this).removeClass('active');
    $('.header_ul').slideUp(700);
  } else{
    $(this).addClass('active');
    $('.header_ul').slideDown(700);
  }
});

// $('.under_nav').on("click", function(event){
//   var target = event.target;
//   if( $(target).hasClass('header_a') ){
//     if( $(target).hasClass('active') && $(target).siblings('.sub_menu').css("display") == 'none' ){
//       $(target).siblings('.sub_menu').slideDown(600);
//     } else if( $(target).hasClass('active') ){
//       $(target).removeClass('active');
//       $(target).siblings('.sub_menu').slideUp(600);
//     } else{
//       $(target).addClass('active');
//       $(target).siblings('.sub_menu').slideDown(600);
//     }
//   }

//   if( $(target).hasClass('sub_link') ){
//      $(target).siblings('.sub_menu').slideToggle(600);
//   }
// });

$(document).on("click", function(event){
  var target = event.target;
  if( !$(target).hasClass('mob_menu') && !$(target).hasClass('menu_btn') && !$(target).hasClass('menu_btn_span') && !$(target).hasClass('header_a') && !$(target).hasClass('menu_arrow') ){
    $('.mob_menu').removeClass('active');
    $('.header_ul').slideUp(700);
  }
});


function scrollHead(){
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if( top > 150 ){
    $('.header_subbottom').addClass('fixed');
  } else{
    $('.header_subbottom').removeClass('fixed');
  } 
}

$(window).resize(function(){
  $('.main_slider').slick('setPosition');
});


scrollHead();


/* scrool */
$(window).on("scroll", function(){
  scrollHead();
});

$('.contact_map').on("click", function(){
  $(this).children('iframe').removeAttr('style');
});

  // прокрутка цифр
  if($('.statistica_blog').css("display") == 'flex'){ // если на странице есть секция с цифрами
    var show = true;
    var countbox = ".statistica_blog";
    var number_mest = $('#thousand_num').text();
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' '); // для создания пробела
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.cifra').css('opacity', '1');
            $('.cifra').spincrement({
                thousandSeparator: "",
                duration: 2500
            });
            show = false;
             $('#thousand_num').css('opacity', '1');
            $('#thousand_num').animateNumber({ // прокрутка большой цифры для разделения: 1 000
              number: number_mest,
              numberStep: comma_separator_number_step
            },
            {
              easing: 'swing',
              duration: 2000
            });
        }
    });
  }