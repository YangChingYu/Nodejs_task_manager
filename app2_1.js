var age1 = 30;
var age2 = '30';

var reslut = age1 == age2;
//javascript dont care abput the data type so we can compare the string with the int
var reslut2 = age1 === age2;
//otherwise we can 用三個等號可以同時比較資料型態
console.log(reslut)

console.log(reslut2)