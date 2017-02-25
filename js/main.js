require.config({
	paths:{
		jquery : 'jquery-1.11.1.min',
		jqueryUI : 'http://code.jquery.com/ui/1.12.0/jquery-ui.min'
	}
});

require(['jquery','window'],function($,w){
	$('#a').click(function(){
		var win = new w.Window();
		win.alert({
			title : '提示',
			content : '定制标题和关闭按钮!',
			handler4AlertBtn : function(){
				alert('弹出消息');
			},
			handler4CloseBtn : function(){
				alert('关闭弹窗');
			},
			width:400,
			height:'auto',
			y:30,
			hasCloseBtn:true,
			// skinName : 'window_skin_a',
			text4AlertBtn : '确定',
			dragHandle : '.window_header'
		});

		// win.on('alert',function(){alert('弹出 1!');});
		// win.on('alert',function(){alert('弹出 2!');});
		// win.on('close',function(){alert('关闭 1!');});
		// win.on('close',function(){alert('关闭 2!');});

	})

	/*
		原生confirm用法(阻塞)
		if(confirm('你确定吗？')){
			handler1()''
		}else{
			handler2()
		}
		handler4();
		
		封装组件confirm的用法(回调)
		new w.Window().confirm({
			content : '您确定吗？',
			handler4ConfirmBtn : function(){
				handler1();
				handler3();
			},
			handler4CancelBtn : function(){
				handler2();
				handler3();
			}
		})
	*/
	$('#b').click(function(){
		var win = new w.Window();
		win.confirm({
				title : '系统消息',
				content : '你确定要删除这个文件吗？',
				width:300,
				height:150,
				y:50,
				text4ConfirmBtn : '是',
				text4CancelBtn : '否',
				dragHandle : '.window_header'
			}).on('confirm',function(){
				alert('确定');
			}).on('cancel',function(){
				alert('取消');
			});
	});

	$('#c').click(function(){
		var win = new w.Window();
		win.prompt({
				title : '系统消息',
				width:300,
				height:150,
				y:50,
				text4PromptBtn : '是',
				text4CancelBtn : '否',
				maxLength4PromptInput : 20,
				defaultValue4PromptInput : '请输入.....',
				dragHandle : '.window_header'
			}).on('prompt',function(){
				alert('确定');
			}).on('cancel',function(){
				alert('取消');
			});
	});

	$('#d').click(function(){
		var win = new w.Window();
		win.common({
				content : '我是一个通用窗体',
				width:300,
				height:150,
				y:50,
				hasCloseBtn :true
			});
	})
})