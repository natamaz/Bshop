
// script.plugins

$(document).ready(function(){

    if($('.phone').length){
      $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});
    }

    if($('.carousel_main').length){
      $('.carousel_main').owlCarousel({
          loop:true,
          nav:true,
          navText:["",""],
          items:1,
          responsiveClass:true,
      });
    }
    if($('.carousel_news').length){
      $('.carousel_news').owlCarousel({
          loop:true,
          nav:true,
          navText:["",""],
          items:3,
          responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                769:{
                    items:2,
                    nav:true
                },
                1201:{
                    items:3,
                    nav:true,
                    loop:false,
                }
            }
      });
    }
    if($('.carousel_paintings').length){
      $('.carousel_paintings').owlCarousel({
          loop:true,
          nav:true,
          navText:["",""],
          items:2,
          center:true,
          margin: 0,
          responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true,
                    center:false,
                },
                500:{
                    items:2,
                    nav:true,
                    center:true,
                }
            }
      });
    }
    if($('.owl_carousel_item').length){
      $('.owl_carousel_item').owlCarousel({
          loop:true,
          nav:true,
          navText:["",""],
          items:4,
          margin: 0,
          responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true,
                },
                769:{
                    items:2,
                    nav:true,
                },
                993:{
                    items:3,
                    nav:true,
                },
                1201:{
                    items:4,
                    nav:true,
                }
            }
      });
    }
    if($('#horizontal_tab').length){
      $('#horizontal_tab').easyResponsiveTabs({
          type: 'default', //Types: default, vertical, accordion
          width: 'auto', //auto or any width like 600px
          fit: true, // 100% fit in a container
          tabidentify: 'hor_1', // The tab groups identifier
          activate: function(event) { // Callback function if tab is switched
              var $tab = $(this);
              var $info = $('#nested-tabInfo');
              var $name = $('span', $info);
              $name.text($tab.text());
              $info.show();
          }
      });
    }
    if($('#horizontal_tab2').length){
      $('#horizontal_tab2').easyResponsiveTabs({
          type: 'default', //Types: default, vertical, accordion
          width: 'auto', //auto or any width like 600px
          fit: true, // 100% fit in a container
          tabidentify: 'hor_1', // The tab groups identifier
          activate: function(event) { // Callback function if tab is switched
              var $tab = $(this);
              var $info = $('#nested-tabInfo');
              var $name = $('span', $info);
              $name.text($tab.text());
              $info.show();
          }
      });
    }
    if($(".chosen-select").length){
	    $(".chosen-select").chosen({
	     	// rtl: true,
        width: "100%",
        // disable_search_threshold: 10
	    });
	  }


  if($('.validateform_checkout').length){

    $(".validateform_checkout").validate({
           rules:{

                name:{
                    required: true,
                },
                email:{
                    required: true,
                    email: true
                },
                phone:{
                    required: true,
                },
                region:{
                    required: true,
                },
                region_top:{
                    required: true,
                },
                index:{
                    required: true,
                },
           },

           messages:{
                // Это поле обязательно для заполнения
                name:{
                    required: "Error.....",
                },
                email:{
                    required: "Error.....",
                    email: "Error.....",
                },
                phone:{
                    required: "Error.....",
                },
                region:{
                    required: "Error.....",
                },
                region_top:{
                    required: "Error.....",
                },
                index:{
                    required: "Error.....",
                },
           },

    });
  }


  if($('.validateform_login').length){

    $(".validateform_login").validate({
           rules:{

                name:{
                    required: true,
                },
                surname:{
                    required: true,
                },
                email:{
                    required: true,
                    email: true
                },
                phone:{
                    required: true,
                },
                region:{
                    required: true,
                },
                password:{
                    required: true,
                },
                second_password:{
                    required: true,
                },
           },

           messages:{
                // Это поле обязательно для заполнения
                name:{
                    required: "Error.....",
                },
                surname:{
                    required: "Error.....",
                },
                email:{
                    required: "Error.....",
                    email: "Error.....",
                },
                phone:{
                    required: "Error.....",
                },
                region:{
                    required: "Error.....",
                },
                password:{
                    required: "Error.....",
                },
                second_password:{
                    required: "Error.....",
                },
           },

    });
  }

  if($('.validateform_enter').length){

    $(".validateform_enter").validate({
           rules:{

                email:{
                    required: true,
                    email: true
                },
                password:{
                    required: true,
                },
           },

           messages:{
                // Это поле обязательно для заполнения
                email:{
                    required: "Error.....",
                    email: "Error.....",
                },
                password:{
                    required: "Error.....",
                },
           },

    });
  }

  if($('.validateform_email').length){

    $(".validateform_email").validate({
           rules:{

                email:{
                    required: true,
                    email: true
                },

           },

           messages:{
                // Это поле обязательно для заполнения
                email:{
                    required: "Error.....",
                    email: "Error.....",
                },
           },

    });
  }

  $(".modal_btn").on("click",function(event){

      event.preventDefault();

      var id = $(this).attr("data-modal"),
          src = $(this).attr("data-src");

      $('#'+id).arcticmodal({

          beforeOpen : function(){

              $('#'+id).find("iframe").attr("src", src+"?wmode=transparent");

          },

          afterOpen: function() {
            $(id).on('click',function(){
                console.log('this')
            });
        }
          

      });

  });

  if($('.jcf').length){

      $(function() {
          jcf.replaceAll();
      });
  }



  if($('.fancybox').length){

      $('.fancybox').fancybox({
        prevEffect : 'none',
        nextEffect : 'none',
      });

  }
  if($('.tooltip').length){

    if($(window).width() > 767) {

            $('.tooltip').tooltipster({
                theme: 'tooltipster-borderless',
                maxWidth: 290,
                // side: 'bottom',
                // delay: 0,
                contentAsHTML: true,
                interactive: true,
                contentCloning: true,
                // trigger: 'click'
            });

        }
        else {

            $('.tooltip').tooltipster({
                theme: 'tooltipster-borderless',
                maxWidth: 290,
                // side: 'bottom',
                // delay: 0,
                trigger: 'click',
                contentAsHTML: true,
                interactive: true,
                contentCloning: true,
            });

        }


      // $('.tooltip').tooltipster({
      //     theme: 'tooltipster-borderless',
      //     contentCloning: true
      // });

  }

    const targetElement = $('.overlayPopup');
    $('.open-signIn').on("click", function () {
        $('.overlay-signIn').addClass('active');

    });
    $('.overlay-signIn .closeBtn, .overlay-signIn .close').on("click", function () {
        $('.overlay-signIn').removeClass('active');
    });

    const targetElement2 = $('.onclickPopup');
    $('.open-onclick').on("click", function () {
        $('.overlay-onclick').addClass('active');

    });
    $('.overlay-onclick .closeBtn, .overlay-onclick .close').on("click", function () {
        $('.overlay-onclick').removeClass('active');
    });
    const targetElement3 = $('.questionPopup');
    $('.open-question').on("click", function () {
        $('.overlay-question').addClass('active');

    });
    $('.overlay-question .closeBtn, .overlay-question .close').on("click", function () {
        $('.overlay-question').removeClass('active');
    });




});


;;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.navResp();
			//self.navAnchor();
			self.backToTopBtn();
			self.deferredBtn();
			self.filterRespOpen();
			self.accordion();
			self.fileInput();
			self.editForm();
			self.tableRadioClick();

		},

		windowLoad: function(){

			var self = this;

			self.preloader();
			// self.footerHeight.init();

		},

		/**
		**  Nav Resp
		**/

		deferredBtn : function(){

            var self = this;

            $(".deferred_btn").on('click', function () {

                $(this).toggleClass("active");

            });
            $(".deferred_btn_js").on('click', function () {

                $(this).toggleClass("active");

            });
        },



		/**
		**  Nav Anchor


		navAnchor : function(){

            var self = this;

            $(".btn_anchor").on("click", function (event) {
		    //отменяем стандартную обработку нажатия по ссылке
		    event.preventDefault();

		    //забираем идентификатор бока с атрибута href
		    var id  = $(this).attr('href'),

		    //узнаем высоту от начала страницы до блока на который ссылается якорь
		      top = $(id).offset().top;

		    //анимируем переход на расстояние - top за 1500 мс
		    $('body,html').animate({scrollTop: top}, 800);
		  });

        },**/

		/**
		**  Nav Resp
		**/


		navResp : function(){

            var self = this;

            self.w = $(window);


            $(".btn_nav").on('click', function () {

                $(this).toggleClass("active").next(".header_resp_nav").fadeToggle(10);

            });

           if(self.w.width() < 769){

                $(document).on('click', function(event){

                   if(!$(event.target).closest('.resp_nav_wr').length){

                    $('.btn_nav').removeClass('active').next(".header_resp_nav").fadeOut(10);

                   }

                });

	            $(".header_resp_nav a").on('click', function () {

	                $(".header_resp_nav").fadeToggle(10).prevAll(".btn_nav").removeClass('active');

	            });

            }

        },


		/**
		**	Preloader
		**/

		preloader: function(){

			var self = this;

			self.preloader = $('#page-preloader');
	        self.spinner   = self.preloader.find('.preloader');

		    self.spinner.fadeOut();
		    self.preloader.delay(350).fadeOut('slow');
		},

		/**
        **  Back to top
        **/

        backToTopBtn: function(config){

            config = $.extend({
            	top: 50,
                offset: 350,
                transitionIn: 'bounceInRight',
                transitionOut: 'bounceOutRight'
            }, config);

            var btn = $('.back_to_top'),
            $wd = $(window),
            $html = $('html'),
            $body = $('body');


            $wd.on('scroll.back_to_top', function(){

                if($wd.scrollTop() > config.offset){

                    btn.removeClass('hide '+config.transitionOut).addClass(config.transitionIn);

                }
                else{

                    btn.removeClass(config.transitionIn).addClass(config.transitionOut);

                }

            });

            btn.on('click', function(){

                $html.add($body).animate({

                    scrollTop: 0

                });

            });

        },

		/**
		**	Footer Height
		**/

		footerHeight: {

			init: function(){

				var self = this;

				self.footer = $('#footer');
				self.page = $('.page_wrap');

				self.calculation();

				$(window).on('resize', function(){

					self.calculation();

				});

			},

			calculation : function(){

				var self = this;

			    var footerHeight = self.footer.outerHeight();

			    self.page.css({
			    	'padding-bottom': footerHeight
			    });

			}

		},

		/**
		**  Filter Resp
		**/

		filterRespOpen : function(){

            var self = this;

            $(".filter_resp_btn").on('click', function () {

                $(this).toggleClass("active").parent('.filter_resp_btn_wr').toggleClass("active").prev(".filter_resp_open").slideToggle("medium");

            });
        },

        accordion: function(){

	      $(".set > a").on("click", function(){
	        if($(this).hasClass('active')){
	          $(this).removeClass("active");
	          $(this).siblings('.left_nav_lv2').slideUp(200);
	          //$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
	        }else{
	          //$(".set > a i").removeClass("fa-minus").addClass("fa-plus");
	          //$(this).find("i").removeClass("fa-plus").addClass("fa-minus");
	          $(".set > a").removeClass("active");
	          $(this).addClass("active");
	          $('.left_nav_lv2').slideUp(200);
	          $(this).siblings('.left_nav_lv2').slideDown(200);
	        }
	      });

	    },


		/**
        **  File input
        **/

        fileInput: function(){

            $('.files_btn').on('click', function(){

                var $this = $(this),
                    input = $this.parent().find('input[type="file"]');

                input.trigger('click');

            });

            $('input[type="file"]').on('change',function(){

                var $this = $(this),
                    nameFileBox = $this.parent().find('.name_file'),
                    nameFile = $this.val();

                if(nameFile != ''){

                    nameFileBox.text(nameFile).css('display', 'block');
                    $this.parent().addClass('selected');
                }
                else{

                    nameFileBox.text(nameFile).css('display', 'none');
                    $this.parent().removeClass('selected');

                }

            });

            $('.clear_file').on('click', function(){

                var $this = $(this),
                    nameFileBox = $this.parent().find('.name_file');

                $this.parent().removeClass('selected').find('input').val('');
                nameFileBox.text('').css('display', 'none');

            });

        },

        /**
		**  Edit Form
		**/

		editForm : function(){

            var self = this;

            $(".btn_edit_form").on('click', function () {

                $(this).toggleClass("active").closest(".form_box").toggleClass("active").find(".edit_form").toggleClass("active");

            });
        },

        /**
		**  tableRadioClick
		**/

		tableRadioClick : function(){

			var self = this;

			$(".table_radio_js tr").on('click', function () {

				$(this).find("input[type='radio']").prop('checked', true);

				var src = $(this).find("input[type='radio']").attr('data-id');
				$('.rama').removeClass('active');
                $('.' + src).addClass('active');
				console.log(src);

			});
		},

	}

	$('.radio_rama').on('click', function(){
		$('.card_img').addClass('clik');
	});

	$('.radio_close').on('click', function(){
		$('.card_img').removeClass('clik');
	});
	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});




})(jQuery);
! function(i) {
	var o, n;
	i(".title_block").on("click", function() {
		o = i(this).parents(".accordion_item"), n = o.find(".info"),
				o.hasClass("active_block") ? (o.removeClass("active_block"),
						n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
						o.siblings(".active_block").removeClass("active_block").children(
								".info").stop(!0, !0).slideUp())
	})
}(jQuery);

$('.rama-photo').on("click", function () {
	$('.main-photo').addClass('active');

});

const objNum = [
	{
		input: 0,
		size: '20 х 30 см',
		price: '1000',
		sizeAll: '80px',
	},
	{
		input: 1,
		size: '21 х 32 см',
		price: '1 100',
		sizeAll: '79px',
	},
	{
		input: 2,
		size: '22 х 34 см',
		price: '1 200',
		sizeAll: '78px',
	},
	{
		input: 3,
		size: '23 х 36 см',
		price: '1 300',
		sizeAll: '77px',
	},
	{
		input: 4,
		size: '24 х 38 см',
		price: '1 400',
		sizeAll: '76px',
	},
	{
		input: 5,
		size: '25 х 40 см',
		price: '1 500',
		sizeAll: '75px',
	},
	{
		input: 6,
		size: '26 х 42 см',
		price: '1 600',
		sizeAll: '74px',
	},
	{
		input: 7,
		size: '27 х 44 см',
		price: '1 700',
		sizeAll: '73px',
	},
	{
		input: 8,
		size: '28 х 46 см',
		price: '1 700',
		sizeAll: '72px',
	},
	{
		input: 9,
		size: '29 х 48 см',
		price: '1 800',
		sizeAll: '71px',
	},
	{
		input: 10,
		size: '30 х 50 см',
		price: '1 900',
		sizeAll: '70px',
	},
	{
		input: 11,
		size: '31 х 52 см',
		price: '2 000',
		sizeAll: '69px',
	},
	{
		input: 12,
		size: '32 х 54 см',
		price: '2 100',
		sizeAll: '68px',
	},
	{
		input: 13,
		size: '33 х 56 см',
		price: '2 200',
		sizeAll: '67px',
	},
	{
		input: 14,
		size: '34 х 58 см',
		price: '2 300',
		sizeAll: '66px',
	},
	{
		input: 15,
		size: '35 х 60 см',
		price: '2 400',
		sizeAll: '65px',
	},
	{
		input: 16,
		size: '36 х 62 см',
		price: '2 500',
		sizeAll: '64px',
	},
	{
		input: 17,
		size: '37 х 64 см',
		price: '2 600',
		sizeAll: '63px',
	},
	{
		input: 18,
		size: '38 х 66 см',
		price: '2 700',
		sizeAll: '62px',
	},
	{
		input: 19,
		size: '39 х 68 см',
		price: '2 800',
		sizeAll: '61px',
	},
	{
		input: 20,
		size: '40 х 70 см',
		price: '2 900',
		sizeAll: '60px',
	},
	{
		input: 21,
		size: '41 х 72 см',
		price: '3 000',
		sizeAll: '59px',
	},
	{
		input: 22,
		size: '42 х 74 см',
		price: '3 100',
		sizeAll: '58px',
	},
	{
		input: 23,
		size: '43 х 76 см',
		price: '3 200',
		sizeAll: '57px',
	},
	{
		input: 24,
		size: '44 х 78 см',
		price: '3 300',
		sizeAll: '56px',
	},
	{
		input: 25,
		size: '45 х 80 см',
		price: '3 400',
		sizeAll: '55px',
	},
	{
		input: 26,
		size: '46 х 82 см',
		price: '3 500',
		sizeAll: '54px',
	},
	{
		input: 27,
		size: '47 х 84 см',
		price: '3 600',
		sizeAll: '53px',
	},
	{
		input: 28,
		size: '48 х 86 см',
		price: '3 700',
		sizeAll: '52px',
	},
	{
		input: 29,
		size: '49 х 88 см',
		price: '3 800',
		sizeAll: '51px',
	},
	{
		input: 30,
		size: '50 х 90 см',
		price: '3 900',
		sizeAll: '50px',
	},
	{
		input: 31,
		size: '51 х 92 см',
		price: '4 000',
		sizeAll: '49px',
	},
	{
		input: 32,
		size: '52 х 94 см',
		price: '4 100',
		sizeAll: '48px',
	},
	{
		input: 33,
		size: '53 х 96 см',
		price: '4 200',
		sizeAll: '47px',
	},
	{
		input: 34,
		size: '54 х 98 см',
		price: '4 300',
		sizeAll: '46px',
	},
	{
		input: 35,
		size: '55 х 100 см',
		price: '4 400',
		sizeAll: '45px',
	},
	{
		input: 36,
		size: '56 х 102 см',
		price: '4 500',
		sizeAll: '44px',
	},
	{
		input: 37,
		size: '57 х 104 см',
		price: '4 600',
		sizeAll: '43px',
	},
	{
		input: 38,
		size: '58 х 106 см',
		price: '4 700',
		sizeAll: '42px',
	},
	{
		input: 39,
		size: '59 х 108 см',
		price: '4 800',
		sizeAll: '41px',
	},
	{
		input: 40,
		size: '60 х 110 см',
		price: '4 900',
		sizeAll: '40px',
	},
	{
		input: 41,
		size: '61 х 112 см',
		price: '5 000',
		sizeAll: '49px',
	},
	{
		input: 42,
		size: '62 х 114 см',
		price: '5 100',
		sizeAll: '48px',
	},
	{
		input: 43,
		size: '63 х 116 см',
		price: '5 200',
		sizeAll: '47px',
	},
	{
		input: 44,
		size: '64 х 118 см',
		price: '5 300',
		sizeAll: '46px',
	},
	{
		input: 45,
		size: '65 х 120 см',
		price: '5 400',
		sizeAll: '45px',
	},
	{
		input: 46,
		size: '66 х 122 см',
		price: '5 500',
		sizeAll: '44px',
	},
	{
		input: 47,
		size: '67 х 124 см',
		price: '5 600',
		sizeAll: '43px',
	},
	{
		input: 48,
		size: '68 х 126 см',
		price: '5 700',
		sizeAll: '42px',
	},
	{
		input: 49,
		size: '69 х 128 см',
		price: '5 800',
		sizeAll: '41px',
	},
	{
		input: 50,
		size: '70 х 130 см',
		price: '5 900',
		sizeAll: '40px',
	},
	{
		input: 51,
		size: '71 х 132 см',
		price: '6 000',
		sizeAll: '39px',
	},
	{
		input: 52,
		size: '72 х 134 см',
		price: '6 100',
		sizeAll: '38px',
	},
	{
		input: 53,
		size: '73 х 136 см',
		price: '6 200',
		sizeAll: '37px',
	},
	{
		input: 54,
		size: '74 х 138 см',
		price: '6 300',
		sizeAll: '36px',
	},
	{
		input: 55,
		size: '75 х 140 см',
		price: '6 400',
		sizeAll: '35px',
	},
	{
		input: 56,
		size: '76 х 142 см',
		price: '6 500',
		sizeAll: '34px',
	},
	{
		input: 57,
		size: '77 х 144 см',
		price: '6 600',
		sizeAll: '33px',
	},
	{
		input: 58,
		size: '78 х 146 см',
		price: '6 700',
		sizeAll: '32px',
	},
	{
		input: 59,
		size: '79 х 148 см',
		price: '6 800',
		sizeAll: '31px',
	},
	{
		input: 60,
		size: '80 х 150 см',
		price: '6 900',
		sizeAll: '30px',
	},
]

rh = $(".rama-height").height()
ra = $(".ram").width()
rch = $(".rama-corner").height()
rcw = $(".rama-corner").width()
$('.rama-photo').on("click", function () {
	$('.main-photo').addClass('active');
	var numInp = +$("#my-range").val();
	var forObj = objNum.find(obj => obj.input === numInp);
		console.log(forObj.sizeAll)
	$(".rama-height").css({ "height": forObj.sizeAll});
	$(".ram").css({ "width": forObj.sizeAll });
	$(".rama-corner").css({ 'height':forObj.sizeAll });
	$(".rama-corner").css({ 'width': forObj.sizeAll });
	$(".main-photo.active").css({ "padding": forObj.sizeAll });
});


$('.clickder').on("click", function () {
	$('.radio_close').removeAttr('checked');
	console.log(this)
});
$('.modal_close').on("click", function () {
	if($('.radio_close').prop('checked') === true){
		$('.main-photo').removeClass('active');
		$(".main-photo").css({ "padding": 0});  
		console.log(true)
	}
	else {
		console.log(false)
	}
});
$('.arcticmodal-close').on("click", function () {
	if($('.radio_close').prop('checked') === true){
		$('.main-photo').removeClass('active');
		$(".main-photo").css({ "padding": 0});  
		console.log(true)
	}
	else {
		console.log(false)
	}
});

window.onclick = (e) => {
	if(e.target.className === 'arcticmodal-container_i2'){
		if($('.radio_close').prop('checked') === true){
			$('.main-photo').removeClass('active');
			$(".main-photo").css({ "padding": 0});  
		}
	}
	else {
		console.log(false)
	}
}


// $('.radio_close').on("click", function () {
// 	$('.radio_close').setAttribute('checked');
// });


$("#my-range").on("input", function () {
	$(".rama-height").css({ "height": rh - $(this).val() });
	$(".ram").css({ "width": ra - $(this).val() });
	$(".rama-corner").css({ 'height': rch - $(this).val() });
	$(".rama-corner").css({ 'width': rcw - $(this).val() });
	$(".main-photo.active").css({ "padding": ra - $(this).val() });
	var numInp = +$("#my-range").val();
	var forObj = objNum.find(obj => obj.input === numInp);
	$("#changeSm").text(forObj.size)
	$(".priceText").text(forObj.price)
	console.log(numInp)
	console.log(forObj)
});