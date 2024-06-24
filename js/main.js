//Pre defination

let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectorAll(e);

// Group 0: service worker
// main.js
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./offline-uzitrake.js")
      //  .then(reg=>
      //   // console.log('serviceWorker')
      //   )
      .catch((err) => console.log("Error:", err));
  });
}

let emailButtons = selectAll(".emailme");

emailButtons.forEach((emailButton) => {
  emailButton.addEventListener("click", function () {
    window.open("mailto:vickkietrake@gmail.com");
  });
});

//?Call the splittingjs to transform the data-splitting texts to spans of chars
// Splitting();

gsap.registerPlugin(SplitText);

const splitchars = document.querySelectorAll(".split-char");

splitchars.forEach((splitchar) => {
  new SplitText(splitchar, {
    type: "chars,words",
    charsClass: "char",
    wordsClass: "word",
  });
});

//Group 1; code to update time
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    let time = select(".time");
    function updateTime() {
      var date = new Date();
      time.innerHTML = date.toTimeString().substr(0, 5);
    }
    updateTime();
    setInterval(() => {
      updateTime();
    }, 1000);

    //Group 2; code to open menu
    let openMenu = select(".button-menu");
    let closeMenu = select(".button-close");
    let menuholders = selectAll(".menu-will-open");
    let myCursor = select(".mf-cursor");

    menuholders.forEach((body) => {
      openMenu.addEventListener("click", () => {
        setTimeout(() => {
          body.classList.add("menu-is-open");

          if (myCursor) {
            myCursor.style.display = "none";
          }
        }, 1000);
      });
      closeMenu.addEventListener("click", () => {
        setTimeout(() => {
          body.classList.remove("menu-is-open");
          if (myCursor) {
            myCursor.style.display = "block";
          }
        }, 1000);
      });
    });

    // GROUP 3; smooth scrolling

    function lenisSmooth() {
      if (innerWidth > 767) {
        // let logoGif = document.querySelector(".l4__right div");

        const lenis = new Lenis({
          duration: 3,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
          autoResize: true,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      }
    }

    lenisSmooth();

    window.addEventListener("resize", lenisSmooth);

    //Group 4 : line animation for guiding hero

    gsap.registerPlugin(ScrollTrigger);

    if (innerWidth > 767) {
      function lineTimeline(element) {
        const afterPseudo = gsap.timeline({
          defaults: {
            duration: 2,
            ease: "power2.out",
          },
        });

        afterPseudo.fromTo(
          element,
          {
            scaleX: 1,
            opacity: 1,
            transformOrigin: "center center",
          },
          {
            scaleX: 0,
            opacity: 0,
          }
        );

        return afterPseudo;
      }

      selectAll("[line-triggerX]").forEach(function (element) {
        const lineTrigger = element.getAttribute("line-triggerX");

        const linetimeline = lineTimeline(element);

        ScrollTrigger.create({
          trigger: lineTrigger,
          start: "top 80%",
          // markers:true,
          animation: linetimeline,
          onEnter: () => linetimeline.play(),
        });
      });

      function lineyTimeline(element) {
        const afterPseudoY = gsap.timeline({
          defaults: {
            duration: 2,
            ease: "power2.out",
            delay: 1.2,
          },
        });

        afterPseudoY.fromTo(
          element,
          {
            scaleY: 1,
            opacity: 1,
            transformOrigin: "bottom",
          },
          {
            scaleY: 0,
            opacity: 0,
          }
        );

        return afterPseudoY;
      }

      selectAll("[line-triggerY]").forEach(function (element) {
        const lineyTrigger = element.getAttribute("line-triggerY");

        const lineytimeline = lineyTimeline(element);

        ScrollTrigger.create({
          trigger: lineyTrigger,
          start: "top 80%",
          // markers:true,
          animation: lineytimeline,
          toggleActions: "play none none none",
        });
      });
    }

    //Group 5 : show footer

    if (innerWidth > 767) {
      let footerScroller = select(".empty");
      function showFooter() {
        gsap.registerPlugin(ScrollTrigger);

        let herotimeline = gsap.timeline({
          scrollTrigger: {
            trigger: footerScroller,
            start: "top bottom",
            end: "bottom 60%",
            scrub: true,
            // markers: true
          },
        });

        herotimeline.to(footerScroller, {
          y: "-40vh",
          ease: "expo.out",
          // duration: 3
        });
      }

      showFooter();

      window.addEventListener("resize", showFooter);
    }

    // Group 6 : folding of text from opaCITY AnimaTION

    const fx28Titles = [...selectAll("[data-effect28]")];

    if (fx28Titles) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(SplitText);

      let title = new SplitText("[data-effect28]", {
        type: "words,lines,chars",
        wordsClass: "content__title word",
        charsClass: "char",
        linesClass: "lines",
      });

      fx28Titles.forEach((title) => {
        const words = [...title.querySelectorAll(".word")];

        for (const word of words) {
          const chars = word.querySelectorAll(".char");
          const charsTotal = chars.length;

          gsap.fromTo(
            chars,
            {
              "will-change": "transform, filter",
              transformOrigin: "50% 100%",
              scale: (position) => {
                const factor =
                  position < Math.ceil(charsTotal / 2)
                    ? position
                    : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0.5, 2.1, factor);
              },
              y: (position) => {
                const factor =
                  position < Math.ceil(charsTotal / 2)
                    ? position
                    : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                return gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 60, factor);
              },
              rotation: (position) => {
                const factor =
                  position < Math.ceil(charsTotal / 2)
                    ? position
                    : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                return position < charsTotal / 2
                  ? gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), -4, 0, factor)
                  : gsap.utils.mapRange(0, Math.ceil(charsTotal / 2), 0, 4, factor);
              },
              filter: "blur(12px) opacity(0)",
            },
            {
              ease: "power2.inOut",
              y: 0,
              rotation: 0,
              scale: 1,
              filter: "blur(0px) opacity(1)",
              scrollTrigger: {
                trigger: word,
                start: "top bottom+=40%",
                end: "top top+=15%",
                scrub: true,
              },
              stagger: {
                amount: 0.15,
                from: "center",
              },
            }
          );
        }
      });
    }

    //Group 7; code to change image on menu clicking

    let menGallery = select(".menu-gallery"),
      workMenu = select(".menu-work"),
      gallerypics = menGallery.querySelectorAll(".gallery__item-imginner");

    const changeWorkMenu = () => {
      gallerypics.forEach(function (element, i) {
        //  let gallerypic = querySelector(".gallery__item-imginner");
        let imageSet = element.getAttribute("data-image");

        let timeline = gsap.timeline();

        timeline
          .addLabel("rotate,+=0")
          .to(
            element,
            {
              transform: "rotate3d(0, 1, 0, 180deg)",
              perspective: "1000px",
              duration: 1.2,
              ease: "power2.in",
              id: i + 1,
            },
            "rotate"
          )
          .add(() => {
            element.classList.add(`menu-image${i}`);
          });
      });
    };

    const resumeMenu = () => {
      gallerypics.forEach(function (element, i) {
        //  let gallerypic = querySelector(".gallery__item-imginner");
        let imageSet = element.getAttribute("data-image");

        // console.log(element, imageSet, i);
        // element.style.backgroundImage = `${imageSet}`;

        let timeline = gsap.timeline();

        timeline
          .to(element, {
            transform: "rotate3d(0, 1, 0, 0deg);",
            perspective: "1000px",
            duration: 1.2,
            ease: "power2.in",
            id: i + 1,
          })
          .add(() => {
            element.classList.remove(`menu-image${i}`);
          });
      });
    };

    workMenu.addEventListener("mouseenter", () => {
      changeWorkMenu();
    });

    // workMenu.addEventListener("mouseleave", () => {
    //   resumeMenu();
    // });

    //Group 8; code to toggle dark-light modes

    let toggleButton = select(".knob");
    let togglePath = select(".dark-toggle");
    let root = select("body");

    let xCursor = select(".mf-cursor");

    let on = false;

    const toggleMode = () => {
      on = !on;

      let modeOff = gsap.timeline();
      modeOff.to(toggleButton, {
        x: () => (on ? 18 : 0),
        duration: 0.4,
        ease: "expo.in",
      });
      let heylinkers = selectAll(".portfolio-map a");
      heylinkers.forEach((heylinker) => {
        gsap.set(heylinker, {
          color: on ? "#fff" : "#000",
        });
      });
    };

    togglePath.addEventListener("click", () => {
      toggleMode();
      root.classList.toggle("dark-mode");
      xCursor.classList.add("-exclusion");

      // bodyComputedStyle.getPropertyValue('--color-black'),
    });

    //Group 9; initiating and controlling custom cursor

    if (innerWidth > 767) {
      let cursor = new MouseFollower();
    }

    if (select(".mf-cursor")) {
      function hideMf() {
        if (innerWidth < 768) {
          select(".mf-cursor").style.display = "none";
        }
      }

      hideMf();
    }
    window.addEventListener("resize", hideMf);

    //Group 11: scroll to  a location

    gsap.registerPlugin(ScrollToPlugin);

    let toContact = select(".tocontact"),
      toworks = select(".toworks"),
      tohero = select(".tohero"),
      toabout = select(".toabout");

    toContact.addEventListener("click", () => {
      gsap.to(window, {
        duration: 3,
        scrollTo: ".free-time",
        ease: "expo.out",
      });
    });

    toworks.addEventListener("click", () => {
      gsap.to(window, {
        duration: 3,
        scrollTo: { y: ".works", offsetY: 50 },
        ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    });

    tohero.addEventListener("click", () => {
      gsap.to(window, {
        duration: 3,
        scrollTo: { y: ".content-hero" },
        ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    });

    toabout.addEventListener("click", () => {
      gsap.to(window, {
        duration: 3,
        scrollTo: { y: ".intro-port", offsetY: 10 },
        ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    });

    // Group 12: turn scrollers to white

    let linkers = selectAll(".portfolio-map a");
    let body = select("body");
    let colordefault = getComputedStyle(body).backgroundColor;
    let colorbackup = getComputedStyle(body).color;

    let linkersTimeline = gsap.timeline({
      paused: true, // Pause the timeline initially
      scrollTrigger: {
        trigger: ".free-time",
        start: "top center",
        markers: !true,
        onEnter: () => {
          linkersTimeline.play();
        },
        onLeaveBack: () => {
          linkersTimeline.reverse();
        },
      },
    });

    // Additional scroll trigger for when scrolling back to the top
    gsap.to(window, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        onEnter: () => {
          linkersTimeline.reverse();
        },
      },
    });

    linkers.forEach((linker) => {
      linkersTimeline.fromTo(
        linker,
        {
          color: colorbackup,
        },
        {
          color: colordefault,
          duration: 0.4,
          ease: "power1.out",
        }
      );
    });
  }, 0);
});

//use the defaults

//  Group 13: darkmode if user browser prefers

// if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
//   // User prefers dark mode, add the dark-mode class to the body element
//   document.body.classList.add("dark-mode");
// } else {
//   document.body.classList.remove("dark-mode");
// }

//Animate the fucking explorer
let emailbox = select(".email-box");

let explorer = select(".in-world-btn-wrap");
let explorerLine = select(".meeting-content-bottom");

let exploTl = gsap.timeline({});

exploTl.to(explorer, {
  scaleY: 0,
  scaleX: 0,
});

exploTl.fromTo(
  explorerLine,
  {
    scaleX: 1,
    opacity: 1,
    transformOrigin: "center center",
  },
  {
    scaleX: 0,
    opacity: 0,
  }
);

ScrollTrigger.create({
  trigger: explorer,
  start: "top 80%",
  animation: exploTl,
  // scrub: true,
  onEnter: () => exploTl.play(),
  onLeaveBack: () => exploTl.reverse(),
});

//hover animation on same

let expoHoverTl = gsap.timeline();

expoHoverTl.to(explorer, {
  duration: 0.9,
  transform: "scale(1,1.25)",
});

explorer.addEventListener("mouseenter", () => {
  expoHoverTl.play();
});

explorer.addEventListener("mouseleave", () => {
  expoHoverTl.reverse();
});
