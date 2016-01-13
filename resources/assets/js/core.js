var runApp=(function(){
	var oHiddenStorage={};
	var core=function(){
		this.bIsInited=false;
		this.options={
			"host": "/",
			"lang": "en",
			"time": Math.round((new Date()).getTime()/1000)
		};
	};
	core.prototype=(function(){
		return {
		"set_option": function(k,v){
			if(!this.options.hasOwnProperty(k))
				return this;
			this.options[k]=v;
			return this;
		},
		"get_option": function(k){
			return this.options.hasOwnProperty(k)?this.options[k]:undefined;
		},
		"set_param": function(k,v){
			oHiddenStorage[k]=v;
			return this;
		},
		"get_param": function(k){
			if(oHiddenStorage.hasOwnProperty(k))
				return oHiddenStorage[k];
			return undefined;
		},
		"apply_settings": function(opts,defaults,extend){
			if(opts && typeof(opts)=="object" && defaults && typeof(defaults)=="object")
				for(var k in opts)
					if(opts.hasOwnProperty(k)){
						if(defaults.hasOwnProperty(k)){
							if(typeof(opts[k])=="object")
								this.apply_settings(opts[k],defaults[k],extend)
							else
								defaults[k]=opts[k];
						} else if(extend)
							defaults[k]=opts[k];
					}
		},
		"class_method": function(trait){
			if(!trait)
				return;
			for(var method in trait)
				if(trait.hasOwnProperty(method) && typeof(trait[method]=="function"))
					core.prototype[method]=trait[method];
		},
		"class_method_remove": function(method){
			if(!method)
				return;
			if(core.prototype.hasOwnProperty(method) && typeof(core.prototype[method]=="function"))
				delete core.prototype[method];
		},
		"init": function(o){
			if(this.bIsInited)
				return this;
			this.apply_settings(o,this.options);
			this.bIsInited=true;
			return this;
		}
	}; })();
	return new core();
})();