/**
 * Created by qile on 2017/8/14.
 */
//检测是否在严格模式的方法

"use stirct"
function isStrictMode() {
    return this === window?false:true;
}
//"use stirct" //严格模式
console.log(isStrictMode());
//非严格模式下，普通函数内部this指向window对象
//严格模式下，this指向underfined