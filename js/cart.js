
var oCarStore = document.getElementById('car-store');

// 读取cookie
var sCookie = getCookie('goods');

var aCookie = sCookie ? JSON.parse(sCookie) : [];


console.log(aCookie)

for(var i = 0; i < aCookie.length; i++) {
	var oCookie = aCookie[i];
	// 创建LI
	var oNewLi = document.createElement('li');
	oNewLi.innerHTML = '<a href="javascript:;" class="delete" data-id="' + oCookie.id +'">删除</a><img src="' + oCookie.url + '" alt=""><div class="title">' + oCookie.title + '</div><div class="price">￥' + oCookie.price + '元, ' + oCookie.num +'个</div>';


	oList.appendChild(oNewLi);
}