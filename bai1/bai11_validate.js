function anNut() {
    
    let email = document.getElementById('email').value;
    let loi = document.getElementsByClassName('loi');
    //validate rỗng 
    if(email == "") {
        // alert("bạn chưa nhập vào email");
        loi[0].innerHTML = "Bạn chưa nhập email";
        return;
    }
    //validate email 
    let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
     // nếu là email thì trả về true nếu kp thì trả về false
    console.log(regexEmail.test(email));
    if(!regexEmail.test(email)) { // nếu như kp email 
        // alert("Không đúng định dạng email");
        loi[0].innerHTML = "Bạn nhập chưa đúng định dạng email";
        return;
    }
    // tương tự làm với số điện thoại 

  
}