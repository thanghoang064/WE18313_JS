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

//tạo 3 ddooos tượng giảng viên gồm 3 thuojc tính và 2 phương thức
let gv1 = {
  ten:"nguyen van a",//day la thuoc tinh(dac diem cua doi tuong)
  tuoi : "30",
  maGv: " ph42792",
  chieucao:170,
  cannang:80,
  toc:"hai mai",
  tay:"to cha ba",
  chan:"khong lo",
  di: function(){//day la phuong thuc(hanh dong cua doi tuong)
    swal("aaaaaaa");
  },

  noi: function(){
    swal("chao cac em");
  },
  kiemtra: function(){
    swal("kh hoc thi chep phat");
  },
  an: function(){
    swal("an toan do ngon");
  },
  day: function(){
    swal("day toan dieu hay");
  }
  
  
  }
  let gv2 = {
    ten:"nguyen van b",//day la thuoc tinh(dac diem cua doi tuong)
    tuoi : "30",
    maGv: " ph42792",
    chieucao:170,
    cannang:80,
    toc:"hai mai",
    tay:"to cha ba",
    chan:"khong lo",
    di: function(){//day la phuong thuc(hanh dong cua doi tuong)
      swal("aaaaaaa");
    },
  
    noi: function(){
      swal("chao cac em");
    },
    kiemtra: function(){
      swal("kh hoc thi chep phat");
    },
    an: function(){
      swal("an toan do ngon");
    },
    day: function(){
      swal("day toan dieu hay");
    }
    
    
    }
    let gv3 = {
      ten:"nguyen van c",//day la thuoc tinh(dac diem cua doi tuong)
      tuoi : "30",
      maGv: " ph42792",
      chieucao:170,
      cannang:80,
      toc:"hai mai",
      tay:"to cha ba",
      chan:"khong lo",
      di: function(){//day la phuong thuc(hanh dong cua doi tuong)
        swal("aaaaaaa");
      },
    
      noi: function(){
        swal("chao cac em");
      },
      kiemtra: function(){
        swal("kh hoc thi chep phat");
      },
      an: function(){
        swal("an toan do ngon");
      },
      day: function(){
        swal("day toan dieu hay");
      }
      
      
      }


