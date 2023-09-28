const slideShow = document.querySelectorAll(".elemet")

let countElements = 1;
setInterval(() => {
    countElements ++;
    let currentElemet = document.querySelector(".current");

    currentElemet.classList.remove("current");
    if(countElements > slideShow.length){
        slideShow[0].classList.add("current")
        countElements = 1;
    }else{
        currentElemet.nextElementSibling.classList.add("current");
    }
    
}, 1000);