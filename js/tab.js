
(function($){
	//创建tab构造函数
	var Tab =function(tab){
		//获取菜单menu LI
		var aMenuLi = tab.find('.menu li');

		//获取panel
		var aPanel = tab.find('.panel');
		console.log(aPanel);
		aMenuLi.click(function () {
			var index = $(this).index();

			//切换菜单
			aMenuLi.removeClass('active').eq(index).addClass('active');

			//切换panel
			aPanel.removeClass('active').eq(index).addClass('active');


		});

	};
// console.log($('.tab').find('a'))
	// 注册成jQuery方法
$.fn.extend({
	tab:function(){
		this.each(function(k,v){
			new Tab($(v));
		});
	}
});

})(jQuery);

