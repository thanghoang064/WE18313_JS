// let str = "hihi haha hoho";

// let str1= "Hom nay la thu ba";
// // //
// // console.log(str.substring(5,9));
// // //
// // console.log(str.substring(10,14));
// let str2 = str.substring(str.length-4,str.length);
// let str3 = str1.substring(str1.length-2,str1.length);
// let str4 = str2.concat(" ",str3);
// console.log(str4);

//Hàm 
let a = 5;
let b = 6;
let c = 7;
let d = 8;//......
let tong = a + b;
let tong1 = c + d;//....
// hàm dùng để đóng gói 1 đoạn chương trình lớn 
// gọn vào 1 chỗ và mang tính tái sử dụng cao
// khai báo hàm không trả về 
function tinhTong(a,b) {// tất cả những gì khai báo trong khe ngoặc được gọi là tham số 
    let c = a+b;
    alert(c);
}
// tinhTong(7,8);//có bao nhiêu tham số thì phải truyền bấy nhiêu giá trị tương ứng
// tinhTong(9,10);
//khai báo hàm có trả về 
function tinhTongReturn(a,b) {
    return a + b;
} 
let tong2 = tinhTongReturn(7,8);// trả về 1 giá trị cụ thể 
let tong3 = tong2 + 15;
alert(tong2); 
//nhập vào chiều dài ,chiều rộng hình chữ nhật 
// tính chu vi và diện tích của hình chữ nhật làm bằng hàm có trả về 
// nhập vào 1 số n kiểm tra xem số n đó là số chẵn hay số lẻ 
//(Làm bằng hàm có trả về)
// mô phỏng lại hàm pow tính lũy thừa truyền vào tham số a và n output là 
//a^n 
//ví dụ a = 2 , n = 3 ;
//output 2^3 = 8
