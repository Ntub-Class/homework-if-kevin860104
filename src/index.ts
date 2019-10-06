//請介紹兩個字串方法跟數字方法
//1.字串方法
let str1 = 'Hello';
let str2 = 'World';
console.log(str1.concat(' ', str2));
console.log(str2.concat(', ', str1));

//2.字串方法
let p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
let regex = /dog/gi;
console.log(p.replace(regex, 'ferret'));

//1.數字方法
let num1 = 1225.30 
let val = num1.toExponential(); 
console.log(val)

//2.數字方法
let num2 = 177.234 
console.log("num3.toFixed() is "+num2.toFixed()) 
console.log("num3.toFixed(2) is "+num2.toFixed(2)) 
console.log("num3.toFixed(6) is "+num2.toFixed(6))

//錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000;//限制值

if (limit = 500000) {
    if (money >= 40000) {
    console.log('乾爹');
} else {
    console.log('笑死');
}
}else{
    console.log('抱歉哦');
}