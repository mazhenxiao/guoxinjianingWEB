define(function(require, exports, module){
	
	 var _str1 = _.template(require("../template/sucess.tpl"))({title:"即时存证成功",txt:"北斗卫星授时标准时间：2016-04-20 15:55:08",layer3:"本次存证的文件将公开展示"});
	 var _str2 = _.template(require("../template/xy.tpl"))();
       	  	 iss.dialog.alert({
       	  	 	id:"id1",
       	  	 	width:500,
       	  	 	height:150,
       	  	 	title:"存证完成",
       	  	 	content:_str1
       	  	 })
       	  	 
      var _str1 = _.template(require("../template/sucess.tpl"))({title:"即时存证成功",txt:"北斗卫星授时标准时间：2016-04-20 15:55:08",layer3:""});
       	  	 iss.dialog.alert({
       	  	 	id:"id2",
       	  	 	width:500,
       	  	 	height:150,
       	  	 	title:"存证完成",
       	  	 	content:_str1
       	  	 })
       	  	 
       	  	 iss.dialog.alert({
       	  	 	id:"id3",
       	  	 	width:500,
       	  	 	height:300,
       	  	 	title:"存证完成",
       	  	 	content:"<img src='img/bar3_05.gif' />",
       	  	 	ok:function(){ window.open("img/bar3_05.gif");return false },
       	  	 	okVal:"下载",
       	  	 	cancelVal:"确定1111",
                cancel:true
       	  	 })
       	  	 
       	  	 	 iss.dialog.alert({
       	  	 	id:"id5",
       	  	 	width:500,
       	  	 	height:100,
       	  	 	title:"存证完成",
       	  	 	content:"<div id='process_bar' style=''><p style='width:20%'></p></div><p id='progress_bar_txt'>20%</p>",
				ok:false
       	  	 })
       	  	 	 
       	  	 	  iss.dialog.alert({
       	  	 	id:"id4",
       	  	 	width:500,
       	  	 	height:300,
       	  	 	title:"存证完成",
       	  	 	content:_str2,
				ok:true
       	  	 })
	
})