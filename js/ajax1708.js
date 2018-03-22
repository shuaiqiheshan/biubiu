
//ajax请求的封装
//参数：
// 请求方式: 字符串类型
// url: 字符串类型
// 是否异步：boolean类型
// 请求参数：字符串类型
// 回调函数

//返回值：无
function ajax1708(method,url,paramStr,isAsync,callback){
	//1、创建对象
	let xhr = new XMLHttpRequest();		
	//2、设置请求参数
	let urlStr = url;
	if(method.toLowerCase()=="get" && paramStr!=""){
		urlStr+="?"+paramStr;
	}
	xhr.open(method,urlStr,isAsync);		
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(callback!=null){
				callback(xhr.responseText);	
			}			
		}
	}

	//4、发送请求
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(paramStr);
	}else{
		xhr.send();
	}
	
}