document.body.querySelector(".menu").addEventListener("click", () => {
    document.body.querySelector(".ptlinks").classList.toggle("show")
    gsap.from(".show", {
        x: 200
    })
})
document.body.querySelector(".close").addEventListener("click", () => {
    document.body.querySelector(".ptlinks").classList.toggle("show")

})

mm = gsap.matchMedia();
mm.add("(min-width: 1000px)", ()=>{


    function page1animation() {
        //nav bar animation
        t1 = gsap.timeline()
        t1.from("nav .logo, nav .links a, nav button", {
            y: -30,
            opacity: 0,
            duration: 1,
            delay: 1,
            stagger: 0.1
        })
    
        //section1 animation
        t2 = gsap.timeline()
        t2.from(".s1left", {
            x: -20,
            opacity: 0,
            duration: 1,
            delay: 2,
            stagger: 0.1
        })
        t2.from(".s1right", {
            opacity: 0,
            duration: 3,
            delay: 0,
            stagger: 0.1
        }, "-=1")
    
        //section2 animation
        t2.from(".section2 img", {
            y: 10,
            opacity: 0,
            duration: 1,
            delay: 0,
            stagger: 0.1
        }, "-=2")
    
    }
    page1animation()
    
    
    function page2animation(){
        gsap.from(".services, .about", {
            y: 20,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".services, .about",
                scroller: "body",
                // markers: true,
                start: "top 70%"
        
            }
        })
        
        t3 = gsap.timeline({
            scrollTrigger:{
                trigger: "#box1",
                // markers: true,
                start: "top 50%"
            }
        })
        
        t3.from("#box1",{
            x: -50,
            opacity:0,
            duration: 1
        })
        t3.from("#box2",{
            x: 50,
            opacity:0,
            duration: 1
        },"-=1")
        
        t4 = gsap.timeline({
            scrollTrigger:{
                trigger: "#box3 .learnmore",
                // markers: true,
                start: "top 85%"
            }
        })
        t4.from("#box3",{
            x: -50,
            opacity:0,
            duration: 1
        })
        t4.from("#box4",{
            x: 50,
            opacity:0,
            duration: 1
        },"-=1")
    }
    page2animation()

})




