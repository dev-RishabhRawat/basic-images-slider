const slides = document.querySelectorAll(".slide");
const slideImg = document.querySelectorAll(".slide-img")
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
var n=1;

let images = [
    'img-1.jpg',
    'img-2.jpg',
    'img-3.jpg',
    'img-4.jpg',
    'img-5.jpg',
    'img-6.jpg',
    'img-7.jpg',
    'img-8.jpg',
   ]
prevBtn.addEventListener('click',()=>{
    console.log('previous btn clicked');
    slideImg.forEach((e)=>{
        if(n < 1){
            n =8;
        }
        e.src=`./${images[n-1]}`;
        n=n-1;
        
    })
})
nextBtn.addEventListener('click',()=>{
    console.log('next btn clicked');
    slideImg.forEach((e)=>{
        if(n > 7){
            n =1;
        }
        e.src=`./${images[n]}`;
        n=n+1;
        
    })
})