(function($){
	//创建tab构造函数
	var Tab =function(tab){
		//获取菜单menu LI
		var aDirectoryTop01 = tab.find('.directory-top01 a');

		//获取change
		var aChange = tab.find('.change');

		aDirectoryTop01.click(function () {
			var index = $(this).index();

			//切换菜单
			aDirectoryTop01.removeClass('active').eq(index).addClass('active');

			//切换菜单
			aChange.removeClass('frist').eq(index).addClass('frist');


		});

	};

	//注册成jQuery方法
$.fn.extend({
	tab:function(){
		this.each(function(k,v){
			new Tab($(v));
		});
	}
});

})(jQuery);