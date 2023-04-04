// cho biến chạy slide  = 1
let slideIndex = 1;
showSlides(slideIndex);
function plugSlides(n) {
    showSlides(slideIndex+=n);
}
function showSlides(n) {
    // lấy dom theo class mySlides 
    let slides = document.getElementsByClassName('mySlides');
    if(n > slides.length) { // chạy vượt quá reset lại slideIndex = 1
        slideIndex = 1;
    }
    if(n < 1) { // bấm vượt quá về âm 
        slideIndex = slides.length;
    }
    // chạy vòng lặp để ẩn hết tất cả ảnh 
    for(let i = 0; i< slides.length; i ++) {
        slides[i].style.display = "none";
    }
   
    // chỉ hiện ảnh nào ở vị trí hiện tại 
    slides[slideIndex - 1].style.display = "block";

}
let myInterval;
function showSlidesAuto(n) {
    // lấy dom theo class mySlides 
    let slides = document.getElementsByClassName('mySlides');
    if(n > slides.length) { // chạy vượt quá reset lại slideIndex = 1
        slideIndex = 1;
    }
    if(n < 1) { // bấm vượt quá về âm 
        slideIndex = slides.length;
    }
    // bổ sung thêm đoạn này 
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    // chạy vòng lặp để ẩn hết tất cả ảnh 
    for(let i = 0; i< slides.length; i ++) {
        slides[i].style.display = "none";
    }
   
    // chỉ hiện ảnh nào ở vị trí hiện tại 
    slides[slideIndex - 1].style.display = "block";
    // thêm dòng này 
    myInterval = setTimeout(showSlidesAuto,1000);
    //hàm này là hàm tự động gọi và theo thời gian nhất định
    // ví dụ 2s gọi 1 lần  tương đương với 2000

}

function stopSlideAuto() {
    clearInterval(myInterval);
}