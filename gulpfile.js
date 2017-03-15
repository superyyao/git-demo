'use strict';
//1.less编译压缩合并
//2.js合并压缩 混淆
//3.img复制
//4html压缩
var gulp=require('gulp');
gulp.task('style',function(){
	gulp.src('src/style/*.less')
		.pipe('gulp-less')
});