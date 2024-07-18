var tl = gsap.timeline();

tl.from("h1", {
  opacity: 0,
  y: "-50px",
  duration: 0.5,
  delay: 1,
});

tl.from("ul li", {
  opacity: 0,
  y: "-50px",
  duration: 0.5,
  stagger: 0.2,
});

tl.from(".signin", {
  duration: 0.5,
  x: "50px",
  y: "-50px",
  opacity: 0,
});

tl.from(".login", {
  duration: 0.5,
  x: "-50px",
  y: "-50px",
  opacity: 0,
});

tl.from("button a", {
  color: "white",
  delay: 0.3,
});

var h1 = document.querySelector("h1");

h1.addEventListener("mouseover", function () {
  gsap.to("h1 span", {
    padding: "0px 30px",
    duration: 1,
  });
});

h1.addEventListener("mouseout", function () {
  gsap.to("h1 span", {
    padding: "0px",
    duration: 1,
  });
});

tl.from(".content .first",{
    scale:0.7,
    opacity:0,
    duration:1,
})

tl.to(".content .first",{
    opacity:0,
    delay:0.5,
    duration:1
})

tl.to(".content .sec",{
    delay:1,
    opacity:1,
    duration:1,
})

tl.to(".content .sec",{
    opacity:0,
    duration:1
})

tl.to(".content .third",{
    opacity:1,
    duration:1
})

tl.to(".content .third",{
    opacity:0,
    duration:1
})

tl.to(".content .forth",{
    opacity:1,
    duration:1
})

tl.to(".content .quote",{
    opacity:1,
    delay:0.5,
    duration:1,
    y:"60px"
})
