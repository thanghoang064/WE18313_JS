//khai báo đối tượng
let sv1 =  {
    ten:"Nguyễn văn a", // thuộc tính
    tuoi:19,
    maSV:"ph12345",
    gioitinh:"nam",
    di: function() { // đây là phương thức chính là HÀM
      swal("Đi bằng 2 chân");
    },
    hienthi: function() {
        return this.ten + "-" + this.tuoi;
    }
}
//đối tượng bao gồm 2 phần :
//đặc điểm (thuộc tính) là những gì góp phần hình thành
//và nhận dạng đối tượng 
//hành động (Phương thức) là những gì đối tượng đó có
// thể thực hiện

console.log(sv1.ten); // lấy ra được nguyễn văn a
//gọi phương thức trong đối tượng sv1
// sv1.di();
let a = sv1.hienthi();
alert(a);

// tạo 1 nút hình chữ nhật với sự kiện onlick
// trong hàm thực hiện việc onlick tạo đối tượng
// hinhchunhat có thuộc tính là chieudai,chieurong
// co phuong thuc la tinhChuVi,tinhDienTich 
// hiển thị ra chuvi và diện tích hình chữ nhz