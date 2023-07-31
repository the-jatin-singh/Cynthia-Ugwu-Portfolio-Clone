// 1. Smooth Scrolling ( locomotive JS )
    // attach locomotive scroll css
    // attach locomotive scroll min js
    // some code from loco gitub from js

// 2. Gsap

// 3. Scroll Trigger


if (window.location.hash) {
    // Check if the URL has a fragment identifier
    window.location.hash = ''; // Clear the fragment identifier
  }
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



// function firstPageUpwardAnimation () {
//     var tl = gsap.timeline();

//     tl.to (".bounding-elem",{
//         y:0,
//         ease:Expo.easeInOut,
//         duration:2,
//         stagger:0.15,

//     })
//     .to(".bounding-rev-elem",{
//         y:0,
//         ease:Expo.easeInOut,
//         duration:2,
//         stagger:0.2,
//         delay:-1.7,
//     })
//     .from ("#hero-footer",{
//         opacity:0,
//         duration:2,
//         delay:-0.5,

//     })
    
// }


var timeOut;
function mouseSkew () {
    var xScale = 1;
    var yScale = 1;
        
    var xPrev = 0;
    var yPrev = 0;

    window.addEventListener("mousemove",function(dets){

        clearTimeout(timeOut);

        var xScale = gsap.utils.clamp(0.7,1.2,dets.clientX - xPrev);
        var yScale = gsap.utils.clamp(0.7,1.2,dets.clientY - yPrev);
        
        xPrev = dets.clientX;
        yPrev = dets.clientY;

        mouseCircle (xScale,yScale);
        timeOut = setTimeout(function(){
            document.querySelector("#mouse-circle").style.transform =`translate(${dets.clientX-7}px,${dets.clientY-7}px) scale(1,1)`
        }, 100);
    });
}

function mouseCircle (xScale,yScale) {
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#mouse-circle").style.transform =`translate(${dets.clientX-7}px,${dets.clientY-7}px) scale(${xScale},${yScale})`
    })
}


document.querySelectorAll(".elem").forEach(function(elem){

    var rotate = 0;
    var diffRot = 0;


    elem.addEventListener("mouseleave",function(dets){

        gsap.to(elem.querySelector("img"),{
            opacity:0,
            display:"none",
            ease:Power1,
            
        })
    })


    elem.addEventListener("mousemove",function(dets){

        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffRot = dets.clientX - rotate;
        rotate = dets.clientX;


        gsap.to(elem.querySelector("img"),{
            display:"Block",
            opacity:1,
            ease:Power3,
            top:diff + "translateY(50%)",
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diffRot),

        })
    })
})



document.querySelector(".menu h4").addEventListener('click',function () {
    console.log("clicked")
    var tline = gsap.timeline();

    tline.to(".flex-elem",{
        
        y:'100%',
        ease:Expo.easeInOut,
        duration:1.5,
        stagger:0.1,
        delay:-0.6,
        PointerEvent:'none',
    })
    .to (".menu-bounding-elem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1,
        stagger:0.1,
        delay:-1.4,
    })
    
    
})



// time 
function getCurrentTimeInLocalTime() {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: 'short',
    };
  
    const currentTime = new Date().toLocaleString('en-US', options);
    return currentTime;
}
  
// Example usage:
const currentTimeInLocalTime = getCurrentTimeInLocalTime();
console.log(currentTimeInLocalTime);
document.getElementById("ct").innerHTML=currentTimeInLocalTime;



// preloader animation
// document.addEventListener('DOMContentLoaded', function() {
//     preloaderAnimation();
// });


// function preloaderAnimation() {
//     console.log("loader");
//     gsap.to("#preloader", {
//         bottom: '100px',
//     });
// }

function preloaderAnimation() {

    var preloader = document.getElementById("preloader");
    var percentage = document.querySelector(".percentage");


    var tline = gsap.timeline({ onUpdate: updatePercentage, onComplete: removePreloader });



    tline.to('.progress',{
        width:'100%',
        duration:2,
    })
    .to(preloader, {
      y: "-100%",
      duration: 1,
      delay:0,
      ease:Power1,
      onComplete: removePreloader, // Function to remove the preloader from DOM after animation
    })
    .to (".bounding-elem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:0.15,
        delay:-1.7,

    })
    .to(".bounding-rev-elem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:0.2,
        delay:-1.4,
    })
    .from ("#hero-footer",{
        opacity:0,
        duration:1.5,
        delay:-0.6,

    });

    function updatePercentage() {
        var progressPercent = tline.progress()*250;
        percentage.innerText = progressPercent.toFixed(0) + '%';
      }
  
    function removePreloader() {
        body.classList.remove("no-scroll");
        preloader.remove();
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    preloaderAnimation();
  });




mouseSkew()
firstPageUpwardAnimation ()