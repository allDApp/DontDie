function detectOS() {
    var sUserAgent = navigator.userAgent;
    
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    
    if (isMac) return "Mac";
    
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    
    if (isUnix) return "Unix";
    
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    
    if (isLinux) return "Linux";
    
    if (isWin) return "Windows";
    
    return "other";
}

function p_ext(){
	
	var os=detectOS();
	switch(os){
		case "Mac":
			return ".dmg";
		break;
		default:
			return ".exe";
	}
	
}

function p_downlink(event,item){

	var type = $(item).attr("data-type");

	switch (type) {
		case "wing":
			sendHm("0636008bf3ca291355aef96b8638c345","egret.com/products/wing.html");
			break;
		case "dragonbones":
			sendHm("bbc75678a1649d0f272cba2cf5965311","egret.com/products/dragonbones.html");
			break;
		case "runtime":
			sendHm("daddfb1b297e97d6e035e98a14c7d207","egret.com/products/runtime.html");
			break;
		case "engine":
			sendHm("1c28460087e13846a35011f9bbba5e08","egret.com/products/engine.html");
			break;
		default :
			break;
	}

	if (event.preventDefault && type !== "runtime" && type !== "engine"){
		event.preventDefault();
		var url=$(item).attr("href");
		url=url.substr(0,url.length-4)+p_ext();
		window.location=url;
		//alert(url);
	}
}

function mobileClick(){
	
	if(navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)){
		
		var arr=$(".osswitch");
		for(i=0;i<arr.length;i++)
		{
			var item=arr[i];
			$(item).on("click",function(){
				alert("请使用PC端浏览器进行下载！");
				return false;
			});
			
			//var url=$(item).attr("href");
			//url=url.substr(0,url.length-4)+p_ext();
			//$(item).attr("href",url);
		}
		
	}
	
}
mobileClick();

function osswitch(){
	
	var arr=$(".osswitch");
	for(i=0;i<arr.length;i++)
	{
		var item=arr[i];
		var url=$(item).attr("href");
		url=url.substr(0,url.length-4)+p_ext();
		$(item).attr("href",url);
	}
}
osswitch();

/*change download product*/
(function(){
   var date = ["JAN","FEB","MAR","APR","MAY","JUN","JULY","AUG","SEP","OCT","NOV","DEC"];
   $(".month").each( function( item ) {
	    console.log( item,$(this).text() );
	    var month = $(this).text();
		if( parseInt(month) ) {
			$(this).text(date[month]);
		}	
   });
})();