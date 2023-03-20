let closeBtn = document.querySelector(".close");
let popUpMsg = document.querySelector(".box-cover");
let container = document.querySelector(".container");
let netflix = document.querySelector("#netflix");
let section1 = document.querySelector(".section1");
let html = document.querySelector("html");
let scrollDown = document.querySelector(".scroll-down");
let scrollIcon = document.querySelector(".scroll-icon");
let section3 = document.querySelector(".section3-wrapper");


closeBtn.addEventListener("click", ()=>{
    popUpMsg.style.display = "none"
    container.style.filter = "none"
    html.style.overflowY = "scroll"
});

window.addEventListener("scroll", ()=>{
        var value = window.scrollY;
    
        if(value >= 200 ){
            netflix.style.opacity = "0";
            scrollDown.style.opacity = "0";
            scrollIcon.style.opacity = "0";
        }
        if(value < 200){
            netflix.style.opacity = "1";
            scrollDown.style.opacity = "1";
            scrollIcon.style.opacity = "1";
        }
        if(value >= 400 && value < 500){
            container.style.filter = "brightness(60%)";
        }
        if(value < 400){
            container.style.filter = "none";
        }
        if(value >= 500 && value < 600){
            container.style.filter = "brightness(30%)";
        }
        if(value >= 600 && value < 650){
            container.style.filter = "contrast(0%) brightness(20%)";;
        }

        //social media icons

        if(value >= 400){
            document.querySelector(".share-container").style.opacity = "1";
            document.querySelector(".share-icons").style.cursor = "pointer";
        }
        if(value < 400){
            document.querySelector(".share-container").style.opacity = "0";
            document.querySelector(".share-icons").style.cursor = "default";
        }

        //section 1

        if(value >= 600){
            document.querySelector(".second-text").style.opacity = "0.1";
        }
        if(value >= 657){
            document.querySelector(".second-text").style.opacity = "1";
            section1.style.position = "fixed";
            section1.style.top = "0";
        }
        if(value < 700){
            document.querySelector(".second-text").style.opacity = "0";
            section1.style.position = "relative";
        }
        if(value < 750){
            document.querySelector(".first-text").style.opacity = "0";
            document.querySelector(".third-text").style.opacity = "0";
        }     
        if(value >= 750 && value < 850){
            document.querySelector(".first-text").style.opacity = "0.1";
            document.querySelector(".third-text").style.opacity = "0.1";
        }
        if(value >= 850 && value < 950){
            document.querySelector(".first-text").style.opacity = "0.6";
            document.querySelector(".third-text").style.opacity = "0.6";
        }
        if(value >= 950){
            document.querySelector(".first-text").style.opacity = "1";
            document.querySelector(".third-text").style.opacity = "1";
        }

        if(value > 1300){
            section1.style.position = "relative";
        }

        //section3
})





