// tạo class giảng viên 
function GiangVien(ten,tuoi,magv) { // tham số
    this.ten = ten; // this.ten là thuộc tính của class
    this.tuoi = tuoi;
    this.magv = magv;
    this.hienThi = function() {
        return this.ten;
    }
}
//tạo ra 1 đối tượng giảng viên từ class
// let gv1 = new GiangVien("Nguyen Văn A",18,"GV001");
// let gv2 = new GiangVien("Nguyen Van b",19,"GV002");
// console.log(gv1.hienThi());
let gv = [];// tạo ra 1 mảng rỗng
gv[0] = new GiangVien("Nguyen Văn A",18,"GV001");
gv[1] = new GiangVien("Nguyen Văn B",19,"GV002");
gv[2] = new GiangVien("Nguyen Văn C",20,"GV003");

// console.log(gv[2].ten);

//tạo 1 class hinhchunhat 
//gồm thuộc tính chiều dài,chiều rộng
//gồm phương thức tính chu vi diện tích 
// tạo 1 mảng đối tượng gồm 5 hình chữ nhật 
//và hiển thị chu vi diện tích của hình chữ  nhật ở
// vị trí số 4
function hcn(cd,cr){
    this.cd = cd;
    this.cr = cr;
    this.chuVi = function(){
        return (this.cd + this.cr)*2;
    }
    this.dienTich = function(){
        return this.cd * this.cr;
    }
}
let hinhChuNhat = [];
hinhChuNhat[0] = new hcn(4,3);
hinhChuNhat[1] = new hcn(6,3);
hinhChuNhat[2] = new hcn(7,3);
hinhChuNhat[3] = new hcn(5,4);
hinhChuNhat[4] = new hcn(6,2);
//console.log(hinhChuNhat[4].chuVi());
let sum = 0;
for(let i =0; i <hinhChuNhat.length;i++){
    console.log(hinhChuNhat[i].chuVi());//hien thi tung chuvi trong hcn
    sum+= hinhChuNhat[i].chuVi();
}
console.log(sum);
// tạo 1 class NhanVien gồm 
// thuoc tính ten,namsinh,luongcb,songaycong
//tạo phương thức tính tuổi năm hiện tại-năm sinh
// (có trả về)
// tạo phương thức tính lương = luongcb * songaycong
//tạo 1 mảng đối tượng gồm 5 nhân viên
//hiển thị lương các đối tượng có tuổi > 30 
// đếm xem có bao nhiêu nhân viên có tuổi > 30 
swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: ["hihi","haha"],
  dangerMode: false,
})
.then((h) => {
  if (willDelete1) {
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your imaginary file is safe!");
  }
});