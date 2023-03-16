//mảng là nơi lưu trữ nhiều giá trị có cùng kiểu dữ liệu
//khai báo mảng cách 1 
let mang = [6,7,9,12,13,8,10];
// khai báo mảng cách 2 
// let mangc2 = new Array(6,7,8,9,10);
// cách 1 là cách khai mảng được sử dụng thường xuyên thống nhất sử dụng cách 1
// console.log(mang[3]);
// hàm tính độ dài của mảng
console.log("độ dài của mảng là" + mang.length);
// luôn luôn muốn lấy phần tử cuối cùng của mảng 
console.log("Phần tử cuối cùng của mảng" + mang[mang.length-1]);
// thêm 1 phần tử vào cuối mảng 
mang.push(12);
console.log("Mảng đã được thêm mới là" + mang);
// khai báo 1 mảng có kiểu dữ liệu là string gồm 5 phần tử 
// lấy phần tử cuối cùng và hiển thị ra 
// thêm mới 1 phần tử có kiểu dữ liệu là string vào mảng
// hàm splice(x,y,e1,e2,e3,...); 
// xóa y phần tử sau vị trí x và thêm phần tử vào mảng 
//xóa 3 phần tử sau vị trí 2
mang.splice(2,3,4,5,6); //xóa 
console.log("Mảng sau khi xóa là" + mang);
// xóa 2 phần tử sau vị trí thứ 4 và thêm 3 phần tử bất kỳ vào mảng
let mang1 = [3,5,7];
let mang2 = mang.concat(mang1);
console.log("Mảng sau khi nối là: "+ mang2);
//xóa phần tử cuối cùng của mảng 
mang1.pop();
console.log("mảng 1 sau khi xóa phần tử cuối cùng là " + mang1);
// trả về vị trí của phần tử 
let findIndex = mang1.indexOf(5);// truyền giá trị cần tìm vào trong khe ngoăcvj
console.log("vị trí của phần tử trong mảng là" + findIndex);
//chuyển chuỗi thành mảng 
let str = "hom|nay|la|thu|7";
let arr_str = str.split("|");
console.log(arr_str);
// chuyển mảng thành chuỗi 
let arr = ["a","b","c"];
let str_arr = arr.join();
console.log(str_arr);

