const slides = document.querySelectorAll(".slide");
const slideImg = document.querySelectorAll(".slide-img")
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
var n=1;

let images = [
    './img-1.jpg',
    './img-2.jpg',
    './img-3.jpg',
    './img-4.jpg',
    './img-5.jpg',
    './img-6.jpg',
    './img-7.jpg',
    './img-8.jpg',
   ]

nextBtn.addEventListener('click',()=>{
    console.log('next btn clicked');
    if(img1.getAttribute('src') === './img-1.jpg'){
        img1.src = images[4];
        img2.src = images[0];
        img3.src = images[1];
        img4.src = images[2];
    }
    else if(img1.getAttribute('src') === './img-5.jpg'){
        img1.src = images[5];
        img2.src = images[4];
        img3.src = images[0];
        img4.src = images[1];
    }
    else if(img1.getAttribute('src') === './img-6.jpg'){
        img1.src = images[6];
        img2.src = images[5];
        img3.src = images[4];
        img4.src = images[0];
    }
    else if(img1.getAttribute('src') === './img-7.jpg'){
        img1.src = images[7];
        img2.src = images[6];
        img3.src = images[5];
        img4.src = images[4];
    }
    else if(img1.getAttribute('src') === './img-8.jpg'){
        img1.src = images[0];
        img2.src = images[1];
        img3.src = images[2];
        img4.src = images[3];
    }
})