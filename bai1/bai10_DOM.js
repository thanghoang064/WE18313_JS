let i = 0 ;
function thayDoiMau() {
//demo truy xuất dom theo tên thẻ 
    let a = document.getElementsByTagName('h1');
    //duyệt mảng đối tượng a 
    // reset tất cả các phần tử trong mảng thành màu đen 
    if(i >= a.length) {
        i = 0;
    }
    for(let index = 0;index < a.length;index ++ ) {
        a[index].style.color = "black";
    }
    // đổi màu phần tử ở vị trí i và i này tăng khi người dùng ấn nút
    a[i].style.color = "red";
    // console.log(i);
    i++;
// let a = document.getElementsByTagName('h1'); // là 1 mảng đối tượng
// console.log(a[1].outerText); // lấy được ra text của vị trí thứ nhất trong mảng đối tượng a
// thay đổi text 
//a[1].innerHTML = "huhu"; // thuộc tính innerHTML có thể can thiệp làm thay đổi text
//css 
// a[1].style.color = "red"; // thuộc tính style dùng để can thiệp vào css thay đổi màu chữ
}

function myNut() {
    // truy xuất dom theo tên class
    // let b = document.getElementsByClassName('test');
    // console.log(b[2].outerText);
    //truy xuất dom theo id 
    let hoten = document.getElementById('hoten').value; // lấy giá trị từ
    // input người dùng nhập vào 
    //swal("ten toi là  "+hoten);
    let tuoi = document.getElementById('tuoi').value;
    let result = "<tr><td>Họ tên</td><td>Tuổi</td></tr><tr><td>"+hoten+"</td><td>"+tuoi+"</td></tr>"; // tạo chuỗi bảng html
    let tinh = document.getElementById('tinh').value;
    alert(tinh);
    // chọn 1 hiển thị lên tôi là người hà nội 
    // chọn 2 hiển thị tôi là người hp
    //chọn 3 hiển thị tôi là người hưng yên
    document.getElementById('ketqua').innerHTML = result; //gán chuỗi html chứa bảng vào 
    // tạo 2 input chiều dài chiều rộng tính diện tích hình chữ nhật 
}