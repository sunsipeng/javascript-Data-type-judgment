(function(win){
	/**
	 * 数据类型判断
	 * @author sipeng
	 * site: http://www.sipent.net
	 * Date: 2016-11-4
	 */
	function IsType( data,type ){
		this.is = function(data,type){
			return Object.prototype.toString.call(data) === "[object "+type+"]";
		}
	}
	IsType.prototype._isArray = function(data){
		return Object.prototype.toString.call(data) === "[object Array]";			
	};
	IsType.prototype._isObject = function(data){
		return Object.prototype.toString.call(data) === "[object Object]";			
	}
	IsType.prototype._isNumber = function(data){
		return Object.prototype.toString.call(data) === "[object Number]";
	}
	IsType.prototype._isString = function(data){
		return Object.prototype.toString.call(data) === "[object String]";
	}
	win.IsType = new IsType();

})(window);