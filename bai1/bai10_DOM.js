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