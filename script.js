gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



// PAGE-1

// const mytext = new SplitType('#p1-txt1 h1')

// gsap.from('#p1-txt1 h1',{
//   y:100,
//   stagger:0.5,
//   delay:0.2,
//   duration:1,
// })

gsap.from("#page1 #navbar",{
  // y:-100,
  opacity:0,
  duration:1,
  delay:0.8,
})
gsap.from("#page1 #p1-txt1 h1",{
  y:"9vw",
  opacity:0,
  duration:1,
  delay:0.9,
  stagger:0.7,
})
gsap.from("#page1 #p1-vid-txt video",{
  // y:100,
  opacity:0,
  duration:1.5,
  delay:1.6,
  scale:0.9,
})
gsap.from("#page1 #p1-vid-txt h1",{
  y:100,
  opacity:0,
  duration:1,
  delay:1.1,
})
gsap.from("#page1 #p1-txt3 h1",{
  y:100,
  opacity:0,
  duration:1,
  delay:1.2,
})



// PAGE-3

gsap.from(".page3 .p3-left-inner video",{
  scale:0.5,
  opacity:0.5,
  duration:1,
  delay:0.5,
  scrollTrigger:{
      trigger:".page3 .p3-left-inner video",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 95%",
      scrub:2,
      pin:true
  }
})

gsap.from(".page3 .p3-bottom button",{
  scale:0.9,
  opacity:0.5,
  duration:1,
  delay:0.2,
  scrollTrigger:{
      trigger:".page3 .p3-bottom button",
      scroller:"#main",
      // markers:true,
      start:"top 95%",
      end:"top 95%",
      scrub:2,
      // pin:true
  }
})


// PAGE-4

gsap.from(".page4 .page4-top h1",{
  y:80,
  opacity:0,
  duration:0.7,
  delay:0.2,
  stagger:0.4,
  scrollTrigger:{
    trigger:".page4 .page4-top h1",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 80%",
    scrub:2,
}
})
// LEFT
gsap.from(".page4 .page4-bottom .page4-left .elem1",{
  y:100,
  opacity:0.2,
  duration:0.7,
  delay:0.2,
  stagger:0.4,
  scrollTrigger:{
    trigger:".page4 .page4-bottom .page4-left .elem1",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 80%",
    scrub:2,
}
})
gsap.from(".page4 .page4-bottom .page4-left .elem2",{
  y:100,
  opacity:0.2,
  duration:0.7,
  delay:0.2,
  stagger:0.4,
  scrollTrigger:{
    trigger:".page4 .page4-bottom .page4-left .elem2",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 80%",
    scrub:2,
}
})
gsap.from(".page4 .page4-bottom .page4-left .elem3",{
  y:120,
  opacity:0.2,
  duration:0.7,
  delay:0.2,
  stagger:0.4,
  scrollTrigger:{
    trigger:".page4 .page4-bottom .page4-left .elem3",
    scroller:"#main",
    // markers:true,
    start:"top 92%",
    end:"top 82%",
    scrub:2,
}
})
gsap.from(".page4 .page4-bottom .page4-left .elem4",{
  y:90,
  opacity:0.2,
  duration:0.7,
  delay:0.1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".page4 .page4-bottom .page4-left .elem4",
    scroller:"#main",
    // markers:true,
    start:"top 93%",
    end:"top 83%",
    scrub:2,
}
})

gsap.from(".page4 .page4-bottom .page4-left .elem5",{
  y:90,
  opacity:0.2,
  duration:0.7,
  delay:0.1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".page4 .page4-bottom .page4-left .elem5",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 80%",
    scrub:2,
}
})

// RIGHT
gsap.from(".page4 .page4-bottom .page4-right .elem6",{
  y:90,
  opacity:0.2,
  duration:0.7,
  delay:0.1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".page4 .page4-bottom .page4-right .elem6",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:2,
}
})
gsap.from(".page4 .page4-bottom .page4-right .elem7",{
  y:90,
  opacity:0.2,
  duration:0.7,
  delay:0.1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".page4 .page4-bottom .page4-right .elem7",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:2,
}
})
gsap.from(".page4 .page4-bottom .page4-right .elem8",{
  y:90,
  opacity:0.2,
  duration:0.7,
  delay:0.1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".page4 .page4-bottom .page4-right .elem8",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:2,
}
})
gsap.from(".page4 .page4-bottom .page4-right .elem9",{
  y:90,
  opacity:0.2,
  duration:0.7,
  delay:0.1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".page4 .page4-bottom .page4-right .elem9",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:2,
}
})
// PAGE-5
gsap.from(".page5 .page5-hero h1",{
  y:120,
  opacity:0,
  duration:1,
  delay:0.1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".page5 .page5-hero h1",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:3,
}
})

// PAGE-6
gsap.from(".page6 .page6-right p",{
  y:120,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.7,
  scrollTrigger:{
    trigger:".page6 .page6-right p",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:3,
}
})
// PAGE-7
gsap.from(".page7 .page7-hero h1",{
  y:100,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.7,
  scrollTrigger:{
    trigger:".page7 .page7-hero h1",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:3,
}
})

// PAGE-8

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

gsap.from(".page8 .page8-top .swiper-slide",{
  y: 100,
  opacity:0,
  duration:0.8,
  delay:0.5,
  stagger:0.8,
  scrollTrigger:{
    trigger:".page8 .page8-top .swiper-slide",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:2,
}
})
gsap.from(".page8 .page8-bottom p",{
  y: 100,
  opacity:0,
  duration:0.8,
  delay:0.5,
  stagger:0.8,
  scrollTrigger:{
    trigger:".page8 .page8-bottom p",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:2,
}
})


// PAGE-10
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper2-pagination",
      clickable: true,
    },
  });

// PAGE-13
gsap.from(".page13 h1",{
  y: 100,
  opacity:0,
  duration:0.8,
  delay:0.5,
  // stagger:0.8,
  scrollTrigger:{
    trigger:".page13 h1",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:2,
}
})
gsap.from(".page13 button",{
  y: 100,
  opacity:0,
  duration:0.8,
  delay:0.5,
  // stagger:0.8,
  scrollTrigger:{
    trigger:".page13 h1",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:2,
}
})

