// viết 1 hàm 
//tính giai thừa với tham số đầu vào là x
// output là kết quả giai thừa
//5! = 1* 2 * 3* 4*5 = 120
// sử dụng hàm cóa trả về 
// let x = 5;
// function giaithua(x){
//     return x;
// }

// nhập vào 1 số n kiểm tra xem số n đó là số chẵn hay số lẻ 
//(Làm bằng hàm có trả về)
// let n = prompt("moi nhap n: ");
// function chanle(n){
//     if(n%2==0){
//         return a = "day la so chan";
//     }
//     else{
//         return b = "day la so le";
//     }
// }
// let c = chanle(n);
// alert(c);
// vòng lặp (for,while,do while)
// vòng lặp giúp lặp đi lặp lại 1 công việc nào đó cơ số lần 
// alert("hello wolrd");
// alert("hello wolrd");
// alert("hello wolrd");
// vòng lặp for
// hiển thị ra 10 lần hello world 
// for(let i = 0;i < 10;i++) {
//     alert("hello wolrd" + i);
// }
//5! = 1 * 2 * 3 * 4 * 5;
let x = 6; // cần phải tính 6!
function giaithua(x){
let s = 1;
for(let i = 1; i <= x;i++) {
    s*=i; //  s = s * i 
   // console.log(s + "*" + i +"=" + (s*i))
    // s = 1 * 1 = 1;
    // s = 1 * 2 = 2;
    // s = 2 * 3 = 6;
    // s = 6 * 4 = 24;
    // s = 24 * 5= 120;
    // s = 120 * 6 = 720
} 
return s;
}
let gt = giaithua(x);