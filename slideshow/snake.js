function setDonGia() {
 let loai =  parseInt(document.getElementById('loai').value);

 switch(loai) {
  case 1: 
    document.getElementById('dongia').value = 600000;
    break;
  case 2:
    document.getElementById('dongia').value = 400000;
    break; 
  case 3:
      document.getElementById('dongia').value = 200000;
      break; 
 }
}
function chon(n) {
  // alert(n.value);//n.value là giá trị của radio mà người ta chọn
  if(n.value == 1) {
    document.getElementById('phivanchuyen').value = 30000;
  } else if (n.value == 2) {
    document.getElementById('phivanchuyen').value = 45000;
  }
}