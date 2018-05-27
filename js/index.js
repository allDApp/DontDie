
$(function() {
	var NebPay = require("nebpay"); 
	var nebpay = new NebPay();
	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
		var r = window.location.search.substr(1).match(reg);
		if (r!=null)
			 return (r[2]);
			 return null;
	}
	var uid= GetQueryString('uid');
	document.getElementById('PLAYERSOCS').innerHTML="你的最佳成绩为:" + uid + '</br></br><div  role="presentation" href="javascript:void(0)" style="text-align:center"><a id="upnew" href="javascript:void(0)" class="title">上传分数</a></div>';
	if (uid==null){document.getElementById('PLAYERSOCS').innerHTML="点击上方Link Start开始游戏"}
$("#getnew").click(function() {
	
	var to = "n1nFatfAkKTkdKfcvMkrp4eUzbS2eCPJwaM";
	var value = "0";
	var callFunction = "DDSocList";
	var callArgs = "[]";
	nebpay.simulateCall(to, value, callFunction, callArgs, {
		listener: function(resp) {
			//console.log(JSON.stringify(resp.result));
			if(resp.result == ""){
				$("#searchresult").html('<div class="panel-body">无记录</div>');
				return;
			}
			var res = JSON.parse(resp.result);
			if(res.length == 0){
				$("#searchresult").html('<div class="panel-body">无记录</div>');
				return;
			}

			var tempStr = "";

			for (var i = 0; i < res.length; i++) {
				if (i % 2 == 0) {
					tempStr += '<div class="panel-body">';
				} else {
					tempStr += '<div class="panel-footer">';
				}

				//					
				tempStr += '<div><p>';
				tempStr += res[i].Data;
				tempStr += '</p>';
				tempStr += '<p>';
				tempStr += '<small><cite>' + '玩家ID: ' + res[i].author + ' 	 时间ID: ' + res[i].createdDate + '</cite></small>'
				tempStr += '</p> </div> ';
			}
			console.log(tempStr);
			$("#searchresult").html(tempStr);
		}
	});

});
$("#getnew").click();

$("#upnew").click(function() {
	var NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
    var nebpay = new NebPay();
	var to = "n1nFatfAkKTkdKfcvMkrp4eUzbS2eCPJwaM";
	var value = "0";
	var callFunction = "SaveSOC";
	var callArgs = "[\"" + "分数:" + uid +"\"]";
	nebpay.call(to, value, callFunction, callArgs, {
			listener: function(resp) {
					console.log(JSON.stringify(resp));
					alert("上传分数完毕");
			}
	});
});

$("#linkstart").click(function() {
	window.location.href="game.html"
});
});
