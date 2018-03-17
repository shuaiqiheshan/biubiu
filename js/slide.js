// //鼠标进入事件

$(".slide a").hover(function(){
			
			$(this).find(".online").css({"display":"none"});
			$(this).find(".ask").css({"display":"block"});
			$(this).find(".ask").css({"background":"#e72419"});
		},
		function(){
			
			$(this).find(".online").css({"display":"block"});
			$(this).find(".ask").css({"display":"none"});
			$(this).find(".ask").css({"background":"white"});
			}
		);



