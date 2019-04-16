var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//"Mike"
person.name = "Lucy";
console.log(person.name);//"Mike"
delete person.name;
console.log(person.name);//"Mike"

