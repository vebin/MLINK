!function(){
	//  app_open_mlink 打开APP元素class
	if(!document.querySelector('.app_open_mlink') && !MLINK_DATA){ return };
	var head = document.querySelector('head');

	// 引用mLink JS文件.
	var script = document.createElement('script');
	script.src = "https://static.mlinks.cc/scripts/dist/mlink.min.js";
	head.appendChild(script);

	// 短链
	var mlink_link = 'https://anwka9.mlinks.cc/AcRD';//短链地址

	document.addEventListener('touchmove',function(e){
		if( mlinksLenght < document.querySelectorAll('.app_open_mlink').length ){
			app_open_mlinks = document.querySelectorAll('.app_open_mlink');
			mlinksLenght = app_open_mlinks.length;
			AppMlinks()
		}
	})
	// 所有打开APP按钮
	var app_open_mlinks = document.querySelectorAll('.app_open_mlink'),
		mlinksLenght = app_open_mlinks.length;
	function AppMlinks(){
		app_open_mlinks = document.querySelectorAll('.app_open_mlink');
		var App_mlink_options = [];

		for(var i = 0;i<app_open_mlinks.length;i++){
		    var ele = app_open_mlinks[i];
		    App_mlink_options[i] = {};
		    if( MLINK_DATA.type == 'doublefloor' ){         // 楼中楼
		        App_mlink_options[i].mlink = mlink_link +'?type=doublefloor&id='+ window.btoa(location.href) +'&title='+ encodeURI(document.title);
		    }else{         // 其他
		        App_mlink_options[i].mlink = mlink_link +'?type='+ MLINK_DATA.type +'&id='+ MLINK_DATA.id;
		    }
		    App_mlink_options[i].button = ele;
		}

		new Mlink(App_mlink_options);
	}

	var setTimer = setTimeout(function(){
		AppMlinks();
		clearTimeout(setTimer);
	},1e3)

}()
