var isT1 = false;
var isT2 = false;
var isT3 = false;
var texing1bannerbg_w=$(".texing1banner-bg").width()+290;
var texing3bannerbg_w=590;
var texing2bannerbg_w=835;
var curHost = window.location.protocol + '//' + window.location.host;
function texingGifMobile(){
	if($(window).width()<=992){
		$(".texing1banner-bg").parent().css("margin-left",$(window).width()-texing1bannerbg_w>>1);
		$(".texing3banner-bg").parent().css("margin-left",$(window).width()-texing3bannerbg_w>>1);
		$(".texing2banner-bg").parent().css("margin-left",$(window).width()-texing2bannerbg_w>>1);
	}
}
texingGifMobile();
var windowheight=950-$(window).height();
if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
	
	$(".play").attr("src",curHost + "/img/mobileplay.png");
}
else{
	$(".play").attr("src",curHost + "/img/play.png");
}
$(window).resize(function(){
	windowheight=950-$(window).height();
	$(".play_div").css("margin-left",$(window).width()-30-$(".play_div").width()>>1);
	texingGifMobile();
});

function t1play(){
	if($('.texing1').offset().top-$(window).scrollTop()+windowheight<600){
		if(!isT1){
			isT1=true;
			var t = new TimelineLite({
			    onStart: function(){
			        $('.texing1banner-bg').css('opacity', 0.3);
			        $('.texing1banner').css('opacity', 0.3);
			    },
			    onComplete:function(){
			    }
			});
			t.to('.texing1banner-bg', 0.7,{opacity:1,"top": 30}, 't');
			t.to('.texing1banner', 0.6,   {opacity:1,"top": -30}, 't');
			t.play();
		}
	}
}

$('.texing2banner-bg').css('opacity', 0.3);
$('.texing2banner-left').css('opacity', 0.3);
$('.texing2banner-right').css('opacity', 0.3);
$('.texing2banner-bg').css('top', 30);
$('.texing2banner-left').css('left', -29);
$('.texing2banner-right').css('left', 493);
function t2play(){
	if($('.texing2').offset().top-$(window).scrollTop()+windowheight<1){
		if(!isT2){
			isT2=true;
			var t = new TimelineLite({
			    onStart: function(){

			    },
			    onComplete:function(){
			    }
			});
			t.to('.texing2banner-bg', 0.3,{opacity:1,"top": 0}, 't');
			t.to('.texing2banner-right', 0.6,   {opacity:1,"left": 463}, 't');
			t.to('.texing2banner-left', 0.6,   {opacity:1,"left": 1}, 't');
			t.play();
		}
	}
}

$(window).scroll(function(e){
	
		t1play();
		t2play();
});

$(document).ready(function(){
	
	$(".play_div").css("margin-left",$(window).width()-30-$(".play_div").width()>>1);
	
	$(".title-name").mouseout(function(e){
		var item = $(e.target);
		item.prev().attr("style","color:#FAFF8A;left:20px;top:0px;-webkit-transition: all 0.3s ease-in-out;-moz-transition: all 0.3s ease-in-out;-o-transition: all 0.3s ease-in-out;transition: all 0.3s ease-in-out;");
	});
	
    $(".title-name").mouseover( 
    	function(e){
		var item = $(e.target);
		item.prev().attr("style","left:50px;top:20px;-webkit-transition: all 0.3s ease-in-out;-moz-transition: all 0.3s ease-in-out;-o-transition: all 0.3s ease-in-out;transition: all 0.3s ease-in-out;");
	    });
  

		$(".step1").one("click",function(){
	    TweenMax.to('.winglogo', 1, {
	        rotation: '360',
	        ease: Linear.easeNone
	    });
	    
	});
	
	

	$(".play_border").click(function(e){
    	var img=$(e.target).next();
		if($(img).is(":hidden")){
	        img.show();
	        img.next().trigger('pause');
		}
   });
    $(document.body).find("video").click(function(){
        stopAll();
   });
   
   $(document.body).find(".play").on("click",function(e){
       $(e.target).hide();
       $(e.target).next().trigger('play');
       
   });
   
   $(document.body).find(".dot").on("click",function(e){
       stopAll();
   });

   function stopAll(){
       $(".play").show();
       $(document.body).find("video").trigger('pause');
   }
});

function gotoTop(min_height){
    //预定义返回顶部的html代码，它的css样式默认为不显示
    //ar gotoTop_html = '<div id="gotoTop">返回顶部</div>';
    //将返回顶部的html代码插入页面上id为page的元素的末尾 
    //$("#page").append(gotoTop_html);
    $("#gotoTop").click(//定义返回顶部点击向上滚动的动画
        function(){$('html,body').animate({scrollTop:0},700);
    }).hover(//为返回顶部增加鼠标进入的反馈效果，用添加删除css类实现
        function(){$(this).addClass("hover");},
        function(){$(this).removeClass("hover");
    });
    //获取页面的最小高度，无传入值则默认为600像素
    min_height ? min_height = min_height : min_height = 600;
    //为窗口的scroll事件绑定处理函数
    $(window).scroll(function(){
        //获取窗口的滚动条的垂直位置
        var s = $(window).scrollTop();
        //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
        if( s > min_height){
            $("#gotoTop").fadeIn(100);
        }else{
            $("#gotoTop").fadeOut(200);
        };
    });
}
gotoTop();
