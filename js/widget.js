define(['jquery'],function($){
	function Widget(){
		// this.handlers = {};
		this.boundingBox = null;
	};
	Widget.prototype = {
		on : function(type,handler){
			if(typeof this.handlers[type] == 'undefined'){
				this.handlers[type] = [];
			}

			this.handlers[type].push(handler);
			return this;
		},
		fire : function(type,data){
			if(this.handlers[type] instanceof Array){
				var handlers = this.handlers[type];
				for(var i = 0, len = handlers.length; i<len; i++){
					handlers[i](data);
				}
			}
		},
		render : function(container){
			this.renderUI();
			this.handlers = {};
			this.bindUI();
			this.syncUI();
			$(container || document.body).append(this.boundingBox);
		},

		destroy : function(){
			this.destructor();
			this.boundingBox.off();
			this.boundingBox.remove();
		},
		// 创建dom节点
		renderUI : function(){

		},
		// 初始化绑定事件
		bindUI : function(){

		},
		// 初始化dom样式
		syncUI : function(){

		},
		// 销毁无用的dom节点
		destructor : function(){

		}
	}

	return {
		Widget : Widget
	};
})