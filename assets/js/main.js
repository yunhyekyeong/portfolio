gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const goalText = new SplitType(".sc-goal .text", {
  types: "words chars",
});

ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function () {
    const introTl = gsap.timeline({});
    introTl.from(".sc-main .big-tit span", {
      autoAlpha: 0,
      rotationX: -90,
      yPercent: 100,
      scale: 0.75,
      fontWeight: 100,
      stagger: 0.4,
      duration: 1.3,
      delay: 0.3,
      ease: "power4.out",
    });

    const mainTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc-main .inner",
      start: "0% 0%",
      end: "150% 0%",
      scrub: 0,
      invalidateOnRefresh: true,
      pin: true,
      // markers: true,
      onLeave: function () {
        document.querySelector(".header").classList.add("invert");
        document.querySelector(".gnb-btn").classList.add("invert");
      },
      onEnterBack: function () {
        document.querySelector(".header").classList.remove("invert");
        document.querySelector(".gnb-btn").classList.remove("invert");
      },
    },
    ease: "none",
    });
    mainTl
      .to(".sc-main .big-tit .left", { xPercent: -130 }, "a")
      .to(".sc-main .big-tit .right", { xPercent: 140 }, "a")
      .fromTo(".sc-main .big-tit .top", { yPercent: 0 }, { yPercent: -100 },"b")
      .to(".sc-main .inner", { color: "#000", backgroundColor: "#fff", duration: 1 },"c")
      .to(".sc-main .big-tit", { mixBlendMode: "normal", duration: 1 }, "c")
    ;
    
    const projectTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sc-project .box",
        start: "0% 0%",
        end: "400% 0%",
        pin: true,
        scrub: 5,
        invalidateOnRefresh: true,
        // markers: true,
      },
      ease: "none",
    });
    projectTl.to(".project .list", {
      xPercent: -100.1,
      x: function () {
        return window.innerWidth - 181;
      },
    });




    const goalCharTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sc-goal",
        start: "0% 50%",
        end: "100% 100%",
        scrub: 0,
        // markers: true,
      },
      ease: "none",
    });
    goalCharTl.from(
      ".sc-goal .text .char",
      { opacity: 0.05, stagger: 0.1, duration: 1 },
      "a"
    );

    const goalWordTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sc-goal",
        start: "0% 50%",
        end: "100% 100%",
        scrub: 0,
        // markers: true,
      },
      ease: "none",
    });
    goalWordTl.from(
      ".sc-goal .text .word",
      { opacity: 0.05, stagger: 0.1 },
      "a"
    );
  }
})





const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  cursor.style.top = mouseY + "px";
  cursor.style.left = mouseX + "px";
  cursor.animate({ top: mouseY + "px", left: mouseX + "px" }, 1000);
});

const gnbBtn = document.querySelector(".gnb-btn");
const gnb = document.querySelector(".gnb");
gnbBtn.addEventListener("click", () => {
  gnbBtn.classList.toggle("active");
  gnb.classList.toggle("active");
});

const topBtn = document.querySelector(".btn-top");
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentTop = window.scrollY;
  const showTop = document.querySelector(".sc-project").offsetTop;
  topBtn.classList.toggle(
    "active",
    currentTop > showTop && currentTop < lastScroll
  );
  lastScroll = currentTop;
});

setInterval(() => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const day = days[today.getDay()];
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const now = `${year}/${month}/${date}/${day}/${hours}:${minutes}:${seconds}`;
  document.querySelector(".time").innerHTML = now;
}, 1000);


