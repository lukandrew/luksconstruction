// change size of menu
$(window).on("scroll touchmove", function () {
if ($(document).scrollTop() > 300-120 && $(document).width() > 650)
{
	$('#logo').css({
		'height' : '2em',
		'width' : '3em'
	});
	// $('.mainMenu').css('opacity', '0.8');
} else if ($(document).width() > 650) {
	$('#logo').css({
		'height' : '4.5em',
		'width' : '6.5em'
	});
	// $('.mainMenu').css('opacity', '0');
};
});
// slow scroll by paige
$(document).ready(function(){
	$('.mainMenu').on('click', 'a', function(event){
		event.preventDefault();
		if ($(document).width() < 640) {
		$('.menuToggle').click();
	}
		var id = $(this).attr('href'),
		top = ($(id).offset().top);
		$('body,html').animate({scrollTop: top-100}, 1500);
	});
});

//menuToogle
$(function () {
	$('.menuToggle').on('click', function () {
		$('.menu').slideToggle(400, function () {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
			else {
				$(this).css({
					'display' : 'flex'
				});
			};
		});
	});
});
//end


//review
function testimonialSlideshow(){

	var arrayT = ['This guys are good! Excellent, from start to finish. Hard working, fast and did a very nice job. They were very flexible and finished the job in a very short time frame. We are extremely happy with the final product and would recommend him to anyone replacing and refinishing their floors.<h4> Sofi L.</h4>', 'Andrew did a great job on the floors. He also accommodated the other work crew by doing the floor in stages. Very easy to get ahold of when I had questions. I would use him again and would recommend him to others. <h4> Paige B.</h4>', 'Welcome to my house. Thanks for that to LUKS Construction. He did great job. I like he was very flexible, so could do the job while I was out of city and once I came back was really surprised how the floor can be different and so bright and shiny. I can see the quality and do not worry about future even if he has insurance I do not think I will need it. Good job. Will call u back for my next project. <h4> Aleks B.</h4>', 'I recently hired Luks Construction. It was a pleasure to work with Andrew and his crew. They did a great job installing hardwood floors in my home. I definitely recommend them!. <h4> Stella M.</h4>'];

	var i = 0;
	$('#reviews p em').html( arrayT[i] );
	var num = arrayT.length;
	setInterval(function(){
		$('#reviews p em').animate({
			opacity: 0
		}, function(){
			$('#reviews p em').html( arrayT[i] );
			$('#reviews p em').animate({
				opacity: 1
			})
		})
		i++;
		if (i == num ){
			i = 0;
		}

	}, 5000);
}

testimonialSlideshow();

var Menu = {

  el: {
    ham: $('.menuToggle'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },

  init: function() {
    Menu.bindUIactions();
  },

  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },

  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click');
  }
};

Menu.init();


$(document).ready(function(){
	// $(".owl-carousel").owlCarousel();
	if($(document).width() < 640) {
		$('.custom1').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items:1,
			margin:30,
			stagePadding:30,
			smartSpeed:450
		});
	} else {

			$('.owl-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    nav:true,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:3
			        },
			        1000:{
			            items:5
			        }
			    }
			});

	}
});


$(document).ready(function(){
	$('.phone').on('click', function() {
		$(window).open('tel:+1-425-971-2895');
	});
});

$(document).ready(function(){

  $('form').submit(function(){ 
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function(){
      alert('Thank you!');
      setTimeout(function(){
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });

})
