jQuery(document).ready(function() {

		
	// menu program
	$(".nav-icon").click(function(){
		$(".main-menu").css("left","0px");
		function showMenu() {
			$(".main-menu").css("clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");
			$(".nav-icon").animate({right:'-100'},300);
		}
		setTimeout(showMenu,100);
	});

	$(".close-icon").click(function(){

		$(".main-menu").css("clip-path","polygon(0 0,0% 0,100% 100%,0% 100%)");
		function hideMenu (){
			$(".main-menu").css("left","-300px");
			$(".nav-icon").animate({right:'50'},300);
		}
		setTimeout(hideMenu,300);
		function orginalLayout(){
			$(".main-menu").css("clip-path","polygon(0 0,100% 0,0% 100%,0% 100%)");
		}
		setTimeout(orginalLayout,600);
	});


	// slide bagraound
	function slideBg(params) {
		$( ".slide1" ).css( {
			"margin-top": "0%",
			"opacity": ".5",
			"margin-top": "50px"
		  } ).fadeIn( "slow" );
	
		  $( ".slide2" ).css( {
			"margin-top": "0%",
			"opacity": ".5"
		  } ).fadeIn( "slow" );
	
		  $( ".slide3" ).css( {
			"margin-top": "0%",
			"opacity": ".5",
			"margin-top": "50px"
		  } ).fadeIn( "slow" );
	
		  $( ".slide4" ).css( {
			"margin-top": "0%",
			"opacity": ".5"
		  } ).fadeIn( "slow" );
	}
	setTimeout(slideBg,600);
	
	  




	jQuery("#nav-link0").click(function(event) {
		/* Act on the event */
		$path = jQuery("#about").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 2000);
		
		
	});

	jQuery("#nav-link1").click(function(event) {
		/* Act on the event */
		$path = jQuery("#home").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link1 .under-line').css({
			
			"width": "180px"
		  } );
		jQuery('#nav-link2 .under-line,#nav-link3 .under-line,#nav-link4 .under-line,#nav-link5 .under-line,#nav-link0 .under-line,#nav-link6 .under-line').css({
			
			"width": "150px"
		  } );

		
	});
	

	jQuery("#nav-link2").click(function(event) {
		/* Act on the event */
		$path = jQuery("#about").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link2 .under-line').css({
			
			"width": "180px"
		  } );
		jQuery('#nav-link1 .under-line,#nav-link3 .under-line,#nav-link4 .under-line,#nav-link5 .under-line,#nav-link0 .under-line,#nav-link6 .under-line').css({
			
			"width": "150px"
		  } );


	});
	jQuery("#nav-link3").click(function(event) {
		/* Act on the event */
		$path = jQuery("#skill").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link3 .under-line').css({
			
			"width": "180px"
		  } );
		jQuery('#nav-link1 .under-line,#nav-link2 .under-line,#nav-link4 .under-line,#nav-link5 .under-line,#nav-link0 .under-line,#nav-link6 .under-line').css({
			
			"width": "150px"
		  } );
	});

	 jQuery("#nav-link4").click(function(event) {
		/* Act on the event */
		$path = jQuery("#Resume").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link4 .under-line').css({
			
			"width": "180px"
		  } );
		jQuery('#nav-link1 .under-line,#nav-link2 .under-line,#nav-link3 .under-line,#nav-link5 .under-line,#nav-link0 .under-line,#nav-link6 .under-line').css({
			
			"width": "150px"
		  } );
	});
	 
	 jQuery("#nav-link5").click(function(event) {
		/* Act on the event */
		$path = jQuery("#MyEducation").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link5 .under-line').css({
			
			"width": "180px"
		  } );
		jQuery('#nav-link1 .under-line,#nav-link3 .under-line,#nav-link4 .under-line,#nav-link2 .under-line,#nav-link0 .under-line,#nav-link6 .under-line').css({
			
			"width": "150px"
		  } );
		
	});
	 jQuery("#nav-link6").click(function(event) {
		/* Act on the event */
		$path = jQuery("#Contact").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link6 .under-line').css({
			
			"width": "180px"
		  } );
		jQuery('#nav-link1 .under-line,#nav-link3 .under-line,#nav-link4 .under-line,#nav-link5 .under-line,#nav-link0 .under-line,#nav-link2 .under-line').css({
			
			"width": "150px"
		  } );
		
	});
	 
		/* Act on the event */
// 		$(function() {
//      var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
//      console.log(pgurl);
//      $("#navbarNav li").each(function(){
//           if($('a',this).attr("href") == pgurl || $('a', this).attr("href") == '' )
//           $(this).addClass("active");
//      })
// });
			$(window).on('load', function() { // makes sure the whole site is loaded 
			$('.main-sq').fadeOut(); // will first fade out the loading animation 
			$('.loader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
			$('body').delay(350).css({'overflow':'visible'});
		  });
				   		
				

		
	
	 	
	 });
