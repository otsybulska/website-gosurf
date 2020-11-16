$(window).on('load', function() {
  $('.preloader-inner').fadeOut('slow');
  $('.preloader').delay(100).fadeOut('slow');
});

let backtop = $('#backtop');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    backtop.addClass('backtop-active');
  } else {
    backtop.removeClass('backtop-active');
  }
});
backtop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(function () {
  $(".header-slider").slick({
    infinite: true,
    fade: true,
    prevArrow: '<svg class="slider-arrows slider-arrows__left" width="25" height="21"><use xlink:href="/assets/icons/sprite.svg#arrow-left"></use></svg>',
    nextArrow: '<svg class="slider-arrows slider-arrows__right" width="25" height="21"><use xlink:href="/assets/icons/sprite.svg#arrow-right"></use></svg>',
    asNavFor: ".header-dots",
  });

  $(".header-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header-slider",
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<svg class="slider-arrows slider-arrows__left" width="25" height="21"><use xlink:href="/assets/icons/sprite.svg#arrow-left"></use></svg>',
    nextArrow: '<svg class="slider-arrows slider-arrows__right" width="25" height="21"><use xlink:href="/assets/icons/sprite.svg#arrow-right"></use></svg>',
    asNavFor: ".surf-map",
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            centerMode: true
        }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            centerMode: true
        }
      },
      {
        breakpoint: 450,
        settings: {
            slidesToShow: 1,
            centerMode: false
        }
      }
    ]
  });

  $(".surf-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
        responsive: [
      {
        breakpoint: 1040,
        settings: {
            slidesToShow: 2,
            centerMode: true
        }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            centerMode: true
        }
      },
      {
        breakpoint: 450,
        settings: {
            slidesToShow: 1,
            centerMode: false
        }
      }
    ]
  });

  $(".block-slider, .shop-slider").slick({
    infinite: true,
    fade: true,
    prevArrow: '<svg class="slider-arrows slider-arrows__left" width="25" height="21"><use xlink:href="/assets/icons/sprite.svg#arrow-left"></use></svg>',
    nextArrow: '<svg class="slider-arrows slider-arrows__right" width="25" height="21"><use xlink:href="/assets/icons/sprite.svg#arrow-right"></use></svg>',
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><svg width="22" height="18"><use xlink:href="/assets/icons/sprite.svg#plus"></use></svg></div><div class="quantity-button quantity-down"><svg width="16" height="12"><use xlink:href="/assets/icons/sprite.svg#minus"></use></svg></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    let spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max'),
      newVal = 0;

    btnUp.on('click', function () {
      let oldValue = parseFloat(input.val());
      oldValue >= max ? newVal = oldValue : newVal = ++oldValue;
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.on('click', function () {
      let oldValue = parseFloat(input.val());
      oldValue <= min ? newVal = oldValue : newVal = --oldValue;
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  let date = new Date();
  $('.header-nav__day').html(date.getDate());
  $('.header-nav__month').html(date.getMonth()+1);
  $('.header-nav__year').html(date.getFullYear());

  let countPrice = $('.nights').val() * $('.block-info__price').data("nights") + ($('.guests').val() - 1) * $('.block-info__price').data("guests");
  $('.block-info__price').html('$' + countPrice);

  $('.quantity-button').on('click', function () {
    let countPrice = $('.nights').val() * $('.block-info__price').data("nights") + ($('.guests').val() - 1) * $('.block-info__price').data("guests");
    $('.block-info__price').html('$' + countPrice);
  });

  $('.shop-img__circle').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.header__nav-btn').on('click', function () {
    $('.header-nav__list').toggleClass('active');
  });

  new WOW().init();
});
