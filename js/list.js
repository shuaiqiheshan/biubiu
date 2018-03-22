var oCartCcenter = document.getElementById('cart-center');
var aAddIn  = oListContent.getElementsByClassName('add-in');

for(var i = 0; i < aAddIn.length; i++) {
	// 添加点击事件
	aAddIn[i].onclick = function () {
		// ID、名称、价格、图片地址、数量、
		var
			goodsId    = this.getAttribute('data-id'),
			goodsUrl   = this.getAttribute('data-url'),
			goodsTitle = this.getAttribute('data-title'),
			goodsPrice = this.getAttribute('data-price');

		// 存储一件商品的信息
		var oGoods = {
			id: goodsId,
			url: goodsUrl,
			title: goodsTitle,
			price: goodsPrice,
			num: 1
		};

		// 读取cookie
		var sGoods = getCookie('goods');

		// 如果sGoods存在，说明有商品被添加过
		// 如果不存在，则需要创建一个新数组
		var aGoods = sGoods ? JSON.parse(sGoods) : [];


		// 判断即将添加的商品是否存在，如果存在则直接数量+1，不存在则将该商品对象添加到数组中
		var notExists = aGoods.every(function (v) {
			if(v.id === oGoods.id) {
				// 商品数量+1
				v.num++;
				return false;
			}
			return true;
		});

		// 如果商品没有存在过，则将商品对象添加到数组中
		if(notExists) {
			aGoods.push(oGoods);
		}

		// 存储到cookie中
		setCookie('goods', JSON.stringify(aGoods), 7);
	}
}