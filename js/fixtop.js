
var directoryTop01  = document.getElementsByClassName('directory-top01')[0];

/*
	吸顶效果
*/
window.onscroll = function () {
	var iScrollT = document.body.scrollTop || document.documentElement.scrollTop;

	// 吸顶
	if(iScrollT > 750) {
		directoryTop01.className = 'fixTop directory-top01';
	} else {
		directoryTop01.className = 'directory-top01';
	}
	
	// 返回顶部
	if(iScrollT > 0) {
		directoryTop01.style.display = 'block';
		directoryTop01.onclick = function() {
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		}
	}
}