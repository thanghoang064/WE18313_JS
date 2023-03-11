//alert("Hello world");
// var a = 8;
// var b = 9;
// var c = a + b;
// alert("Tổng của a va b là" + c);
// khai báo 2 biến chiều dài chiều rộng 
// tính chu vi và diện tích của hình chữ nhật hiển thị 
//dưới hộp thoại alert
// var d = prompt("Mời bạn nhập vào số d");//dùng để hiển thị hộp thoại 
// nhập dữ liệu từ phím 
// alert("Số d là "    +d);
//var ten = "Thắng"; // chuỗi 
//var sothuc = 8.5; // số thực 
//var flag = false // boolean
// nhập vào 2 số tính tổng hiệu tích thương của 2 số đó và hiển thị ra 
// hộp thoại alert
//1 + 2 = 12
//convert string to int in javascript 
// var so1 = parseInt(prompt("Moi nhap vao so 1"));
// var so2 = parseInt(prompt("Moi nhap vao so 2"));
// var tong = so1 +  so2;
// alert(tong);
//nhập vào hộp thoại họ tên và hộp thoại năm sinh 
// yêu cầu hiển thị ra họ tên + tuổi 
//tuổi  = năm hiện tại - năm sinh 
//get current year in javascript
// var namHienTai = new Date().getFullYear();
// var hoTen = prompt("Nhap vao ho ten");
// var namSinh = prompt("Nhap vao nam sinh");
// var tuoi = namHienTai - namSinh;
// alert(hoTen + "-" + tuoi);
//sử dụng let để khai báo biến 
// let a = 5;
// let a = 6;
//
// {
//     //phạm vi// scope
//     let a = 5;
   
// }
// alert(a);
//var thì khai báo lại được nhiều lần còn let thì 
//chỉ khai báo được 1 lần thuần biến 
// var hoạt động được cả trong phạm vi và ngoài phạm
// vi 
//còn let thì chỉ hoạt động được ở trong phạm vi
// var a = 5;
// a = 6 ;// a = 6 
// let b = 6;
// b = 7;//b = 7
// const c = 7 ;
// c = 8;// ố yeef (Không chạy được )
//câu lệnh điều kiện if else
// if(a >7){
//     alert("Đây là số lớn hơn 7");
// } else {
//     alert("Đây la so nho hon 7");
// }
// nhập vào hộp thoại 1 số bất kì 
// hiển thị lên xem số đấy là số chẵn hay số lẻ 

// Nhập vào hộp thoại họ tên, năm sinh, giới tính (1/0)
// hiển thị ra câu lênh
//ông/bà nguyễn văn a có/kô đủ tuổi đi nghĩa vụ quân sự 
// nếu tuổi >=18 và tuổi <=27 (Đủ tuổi đi NVQS )
// ngược lại (Không đủ tuổi đi NVQS)
// tuổi = năm hiện tại - năm sinh 
// let hoTen = prompt("Mời nhập vào họ tên");
// let namSinh = prompt("Mời nhập vào năm sinh");
// let gioiTinh = prompt("Mời nhập vào giới tính");
// let tuoi = new Date().getFullYear() - namSinh; // tuổi 
// let ckGioiTinh = (gioiTinh == 1) ? "Ông " : "Bà ";
// let ckDieuKien = (tuoi >=18 &&  tuoi <= 27) ? "Đủ" : "Không đủ";
// let kq = ckGioiTinh + hoTen + ckDieuKien + "Đi NVQS";
// alert(kq);


//
// var a = 6;
// var a = 7;
// {
//     alert(a);
// }
var a = 6; // khai báo được nhiều lần 
var a = 7; // gán giá trị 
let b = 7;
// let b = 8; // không thể khai báo được 2 lần 
b = 8;  // đây là gán giá trị 
{
    let c = 9;
    alert(c);
}
// alert(c); // c=  9
// const d = 9 ;
// const d = 10; // Không khai báo lại được
// d = 10 ; // Không gán được luôn 