function tinh() {
    let a = parseInt(document.getElementById('soA').value);
    let b = parseInt(document.getElementById('soB').value);
    let bieuThuc = parseInt(document.getElementById('bieuthuc').value);
    let ketqua = 0;
    let strBieuThuc = "";
    switch(bieuThuc) {
        case 1: // phép cộng 
        ketqua = a + b;
        strBieuThuc = "+";
        break;
        case 2: // phép trừ
        ketqua = a - b;
        strBieuThuc = "-"
        break;
    }
    let thongtin = "<tr><td>Số A</td><td>Biểu thức</td><td>Số B</td><td>Kết quả</td></tr>"
                + "<tr><td>"+a+"</td><td>"+strBieuThuc+"</td><td>"+b+"</td><td>"+ketqua+"</td></tr>";
    document.getElementById('thongtin').innerHTML = thongtin;         

}