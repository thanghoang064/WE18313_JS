// 1 số hàm xử lý string 

//đếm xem trong chuỗi có bao nhiêu ký tự //chiều dài chuỗi 
// alert(str.length);
//console.log(str.length);
// cắt chuỗi 
//console.log(str.substring(0,3));
// cắt chữ la
//console.log(str.substring(4,6));
// nối chuỗi 
// let str2 = str.concat(" ",str1);
// console.log(str2);
// cắt chuỗi thang 
//trong str nối với chữ try trong str1
// let strc1 = str.substring(str.length-5,str.length);
// let strc2 = str1.substring(4,7);
// let strc3 = strc1.concat(" ",strc2);
// console.log(strc3);
// hàm viết hoa 
let str = "toi la thang";
let str1 = "dep vkweqwjeklwq try";
let strH = str.toUpperCase(); // viết hoa
console.log(strH);
let strT = strH.toLowerCase(); // viết thường
console.log(strT);
// kiểm tra xem có phải là số hay không 
let x = "ththth";
let check = isNaN(x);//biến check là false là số 
// biến check là true không phải là số 
// console.log(check);
// if(check == false) {
//     alert("Là số");
// } else {
//     alert("Khum phải là số");
// }
// kiểm tra xem có phải là số nguyên hay không 
let k = 3;
let k1 = "hihi";
console.log(Number.isInteger(k));//là số hiển thị ra true
console.log(Number.isInteger(k1));
//là chuỗi hoặc là số thực hiển  thị ra false
//hàm làm tròn số 
let num = 1.6345;
let numa = num.toFixed(); // làm tròn số  2
let numb = num.toFixed(3);
console.log(numb);
