// 添加和修改cookie
function setCookie(name, value, days, path) {
	days = days || 0;
	path = path || '/';
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + days);
	document.cookie = name + '=' + encodeURIComponent(value) +';expires=' + oDate +';path=' + path;
}

// 获取cookie
function getCookie(name) {
	var aCookie = document.cookie.split('; ');
	for(var i = 0; i < aCookie.length; i++) {
		var temp = aCookie[i].split('=');

		if(temp[0] === name) {
			return decodeURIComponent(temp[1]);
		}
	}
}