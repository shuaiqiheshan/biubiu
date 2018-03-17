//导入工具包require('nide_modules里对应模块')
var gulp = require("gulp");//本地安装gulp所用到的地方 gulp命令
var	sass = require("gulp-sass"); //sass命令
//var connect = require("gulp-connect");//服务命令
//var concat = require("gulp-concat");//合并
var uglify = require("gulp-uglify");//合并并压缩
//var rename = require("gulp-rename");//重命名
var minfyCSS = require("gulp-minify-css");//压缩css文件
var imagemin = require("gulp-imagemin");//压缩图片

//拷贝html
gulp.task("copy-html",function(){
	gulp.src("html/*.html")
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\project2\\html"));//gulp.dest()里可以写绝对路径
});//路径里要是有的话就放在里面，没有的话会创建

//拷贝php
gulp.task("copy-php",function(){
	gulp.src("php/*.php")
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\project2\\php"));//gulp.dest()里可以写绝对路径
});//路径里要是有的话就放在里面，没有的话会创建

//拷贝sass
gulp.task("sass",function(){
	gulp.src("sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./css"));
});
//拷贝并压缩css
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(minfyCSS())
	//.pipe(rename("index.min.css")) //改名
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\project2\\css"));
});

//拷贝并压缩js
gulp.task("copy-js",function(){
	gulp.src("js/*.js")
	//.pipe(concat("index.js"))//合并所有js文件
	//.pipe(uglify())//压缩文件
	//.pipe(rename("index.min.js"))//重命名
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\project2\\js"));
});

//拷贝图片
gulp.task("copy-image",function(){
	gulp.src("img/*.{jpg,png,gif}")
	// .pipe(imagemin())//压缩图片
	.pipe(gulp.dest("E:\\phpStudy\\WWW\\project2\\img"));
});


//监听所有
gulp.task("watch",function(){
	gulp.watch("html/*.html",["copy-html"]);//index.html是修改的html copy-index是起的名字
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("js/*js",["copy-js"]);
	gulp.watch("img/*.{jpg,png,gif}",["copy-image"]);
	gulp.watch("php/*.php",["copy-php"]);
});


