/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-5-15
 * Time: 上午11:20
 * To change this template use File | Settings | File Templates.
 */
//var script = document.createElement("script"); script.src = "http://code.jquery.com/jquery-1.6.3.js"; script.type = "text/javascript"; document.body.appendChild(script);

function isPlainObject( obj ) {
    // Must be an Object.
    // Because of IE, we also have to check the presence of the constructor property.
    // Make sure that DOM nodes and window objects don't pass through, as well
    //首先排除掉obj为空、非object类型和window及节点类型
    if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
        return false;
    }

    //前两个判断条件不用多说，第三个判断条件是在obj的原型中找isPrototypeOf这个方法，
    //而这个方法只会存在于Object的原型中，也就是说如果obj的原型中存在isPrototypeOf则obj
    //是Object的直接实例。当然除非人为的将obj的构造函数的prototype.constructor置为Object，
    //或者将构造函数的prototype置为{}
    try {
        // Not own constructor property must be Object
        if ( obj.constructor &&
            !hasOwn.call(obj, "constructor") &&
            !hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
            return false;
        }
    } catch ( e ) {
        // IE8,9 Will throw exceptions on certain host objects #9897
        return false;
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    //因为in操作符只能访问到可枚举类型，若obj原型中有可枚举类型属性则return false
    //保证了obj是Object.prototype未被修改过的Object的直接实例。
    var key;
    for ( key in obj ) {}

    return key === undefined || hasOwn.call( obj, key );
}

console.log(isPlainObject({}));

function isPlainObject2(obj){
    if(obj&&Object.prototype.toString.call(obj)==="[object Object]"&&obj.constructor===Object && !Object.prototype.hasOwnProperty.call(obj, "constructor")){
        var key;
        for ( key in obj ) {}
        return key === undefined || hasOwnProperty.call( obj, key );
    }
    return false;
}

var arr = new Date();
/*for(var key in arr) {
    consoloe.log(key);
}*/
console.log("isPlainObject: " + isPlainObject2(arr));

