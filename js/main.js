jQuery(document).ready(function() {




	jQuery("#nav-link0").click(function(event) {
		/* Act on the event */
		$path = jQuery("#about").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 2000);
		jQuery('#nav-link0').addClass('active');
		jQuery('#nav-link2,#nav-link3,#nav-link4,#nav-link5,#nav-link1,#nav-link6').removeClass('active');

		
	});

	jQuery("#nav-link1").click(function(event) {
		/* Act on the event */
		$path = jQuery("#home").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link1').addClass('active');
		jQuery('#nav-link2,#nav-link3,#nav-link4,#nav-link5,#nav-link0,#nav-link6').removeClass('active');

		
	});
	

	jQuery("#nav-link2").click(function(event) {
		/* Act on the event */
		$path = jQuery("#about").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link2').addClass('active');
		jQuery('#nav-link1,#nav-link3,#nav-link4,#nav-link5,#nav-link0,#nav-link6').removeClass('active');
		



	});
	jQuery("#nav-link3").click(function(event) {
		/* Act on the event */
		$path = jQuery("#skill").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link3').addClass('active');
		jQuery('#nav-link2,#nav-link1,#nav-link4,#nav-link5,#nav-link0,#nav-link6').removeClass('active');
		
	});

	 jQuery("#nav-link4").click(function(event) {
		/* Act on the event */
		$path = jQuery("#Resume").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link4').addClass('active');
		jQuery('#nav-link2,#nav-link3,#nav-link1,#nav-link5,#nav-link0,#nav-link6').removeClass('active');
		
	});
	 
	 jQuery("#nav-link5").click(function(event) {
		/* Act on the event */
		$path = jQuery("#MyEducation").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link5').addClass('active');
		jQuery('#nav-link2,#nav-link3,#nav-link4,#nav-link1,#nav-link0,#nav-link6').removeClass('active');
		
		
	});
	 jQuery("#nav-link6").click(function(event) {
		/* Act on the event */
		$path = jQuery("#Contact").offset().top;
		jQuery("html,body").animate({scrollTop:$path}, 1000);
		jQuery('#nav-link6').addClass('active');
		jQuery('#nav-link2,#nav-link3,#nav-link4,#nav-link5,#nav-link0,#nav-link1').removeClass('active');
		
		
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
			
				   		
				

		
	
	 	
	 });
		


	 
