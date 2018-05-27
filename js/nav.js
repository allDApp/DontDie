$(document).ready(function(){
	$("nav .subnav").hide();
	$(".menu li").mouseenter(function(){
		$("nav .subnav").hide();
	});
	$(".menuProduct").mouseenter(function(){
		// $("nav .subnav").hide();
		var l=$(this).offset().left;
		$("nav .subnav-products").css("left",l);
		$("nav .subnav-products").show();
		display=1;
	});
	$("nav .subnav-products").mouseleave(function(){
		$(this).hide();
		display=0;
	});

	// 
	$(".menuDevCenter").mouseenter(function(){
		// $("nav .subnav").hide();
		var l=$(this).offset().left;
		$("nav .subnav-dev-center").css("left",l);
		$("nav .subnav-dev-center").show();
		display=1;
	});
	$("nav .subnav-dev-center").mouseleave(function(){
		$(this).hide();
		display=0;
	});
	// 
	$(".menuOpen").mouseenter(function(){
		// $("nav .subnav").hide();
		var l=$(this).offset().left;
		$("nav .subnav-open").css("left",l);
		$("nav .subnav-open").show();
		display=1;
	});
	$("nav .subnav-open").mouseleave(function(){
		$(this).hide();
		display=0;
	});
	// 
	$(".menuClub").mouseenter(function(){
		// $("nav .subnav").hide();
		var l=$(this).offset().left;
		$("nav .subnav-club").css("left",l);
		$("nav .subnav-club").show();
		display=1;
	});
	$("nav .subnav-club").mouseleave(function(){
		$(this).hide();
		display=0;
	});


	var mobileMenu=0;
	$(".navMore").click(function(){
		if(mobileMenu==0){
			$("nav ul.menu").show();
			mobileMenu=1;
		}
		else{
			$("nav ul.menu").hide();
			mobileMenu=0;
		}
		
	});

})