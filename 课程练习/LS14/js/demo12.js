//属性特性描述符
var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
//获取特定对象，特定属性买的属性描述符
Object.getOwnPropertyDescriptor(obj,"x");
//Object.getOwnPropertyDescriptor(obj,"y");
//Object.getOwnPropertyDescriptor(obj,"z");