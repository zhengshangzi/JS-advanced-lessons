var a1 = [,"abc"];
console.log(a1.length);//2

for(var i in a1){
    console.log(i,a1[i]);
}
console.log(0 in a1,1 in a1);

var a2 = new Array(3);
console.log(a2.length);//3
console.log(a2);//(3) [empty × 3]

//注意：
var a3 = [,,];
console.log(a3.length);//2

console.log(["a","b"].length);//2
console.log(["a","b",].length);//2
console.log(["a","b",,].length);//3