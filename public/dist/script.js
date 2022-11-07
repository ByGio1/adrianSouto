// Custom Cursor
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  setTimeout(function () {
    document
      .querySelector(".cursor")
      .setAttribute(
        "style",
        "opacity: 1 !important; mix-blend-mode: normal !important"
      );
    setTimeout(function () {
      document
        .querySelector(".cursor")
        .setAttribute(
          "style",
          "opacity: 1 !important; mix-blend-mode: difference !important"
        );
    }, 100);
  }, 100);
});
window.dispatchEvent(new Event("resize"));
setTimeout(function () {
  document
    .querySelector(".cursor")
    .setAttribute(
      "style",
      "opacity: 1 !important; mix-blend-mode: normal !important"
    );
  setTimeout(function () {
    document
      .querySelector(".cursor")
      .setAttribute(
        "style",
        "opacity: 1 !important; mix-blend-mode: difference !important"
      );
  }, 100);
}, 100);

//Getting type device (mobile, touchdevide)
window.isMobile = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
window.isTouchDevice = function () {
  return typeof window.ontouchstart !== "undefined";
};

//ItemTransition - HomePage GSAP animation
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  //ItemTransition editorial page (Color background)
  const imagesBackground = gsap.utils.toArray(".js-media-visibility");
  imagesBackground.forEach((image) => {
    gsap.to(image, {
      scrollTrigger: {
        trigger: image,
        scrub: 1,
        toggleClass: "is-visible",
      },
    });
  });

  //HomePage GSAP Animations (Global Function)
  GlobalPage = {
    Init: function () {
      this.onLoaded(),
        this.CursorAnimation(),
        this.cursorText(),
        this.mouseOver(),
        this.setBack(),
        this.ItemTransition(),
        this.BurgerNav(),
        this.NavLinks();
    },
    onLoaded: function () {
      var cursorLoaded = document.getElementById("cursor-outer");
      gsap.to(cursorLoaded, 0.5, {
        delay: 0.5,
        left: 20,
        ease: Expo.easeOut,
      });
    },
    CursorAnimation: function () {
      if (!isMobile() || !isTouchDevice()) {
        var speed = 0.15;
        var fpms = 60 / 1000;
        var innerCursor = document.getElementById("cursor-inner");
        var outerCursor = document.getElementById("cursor-outer");

        var xSet = gsap.quickSetter(innerCursor, "x", "px");
        var ySet = gsap.quickSetter(innerCursor, "y", "px");
        var xSet2 = gsap.quickSetter(outerCursor, "x", "px");
        var ySet2 = gsap.quickSetter(outerCursor, "y", "px");
        gsap.set(innerCursor, { xPercent: -50, yPercent: -50 });
        gsap.set(outerCursor, { yPercent: -55 });
        var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        var pos2 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        var mouse = { x: pos.x, y: pos.y };
        var mouse2 = { x: pos2.x, y: pos2.y };
        function moveCursor(e) {
          gsap.to(innerCursor, 0.3, {
            css: { opacity: 1 },
            ease: Expo.easeIn,
          });
          window.removeEventListener("mousemove", moveCursor);
        }
      }
      window.addEventListener("mousemove", moveCursor);
      setTimeout(function () {
        window.addEventListener("mousemove", (e) => {
          mouse.x = e.x;
          mouse.y = e.y;
          mouse2.x = e.x;
          mouse2.y = e.y;
        });
        gsap.ticker.add((time, deltaTime) => {
          var delta = deltaTime * fpms;
          var dt = 1.05 - Math.pow(1.0 - speed, delta);
          var dt2 = 1.0 - Math.pow(1.0 - speed, delta);
          pos.x += (mouse.x - pos.x) * dt;
          pos.y += (mouse.y - pos.y) * dt;
          pos2.x += (mouse2.x - pos2.x) * dt2;
          pos2.y += (mouse2.y - pos2.y) * dt2;
          xSet(pos.x);
          ySet(pos.y);
          xSet2(pos2.x);
          ySet2(pos2.y);
        });
      }, 100);
      document
        .querySelector("body")
        .addEventListener("mouseleave", function () {
          gsap.to(".cursor", 0.3, { opacity: 0, ease: Expo.easeOut });
        });
      document
        .querySelector("body")
        .addEventListener("mouseenter", function () {
          gsap.to(".cursor", 0.3, {
            delay: 0.2,
            opacity: 1,
            ease: Expo.easeOut,
          });
        });
    },
    cursorText: function () {
      if (!isMobile() || !isTouchDevice()) {
        var projectCap = document.querySelectorAll(".project__caption");
        var cursorText = document.getElementById("cursor-outer");

        for (let i = 0; i < projectCap.length; i++) {
          const element = projectCap[i];
          const clonned = cursorText.appendChild(element.cloneNode(true));
          clonned.classList.add("is-inactive");
        }

        var hasOriginalCaption = document.querySelectorAll("#caption__init");
        for (let i = 0; i < hasOriginalCaption.length; i++) {
          const element = hasOriginalCaption[i];
          element.addEventListener("mouseover", function mouseOver() {
            console.log("Hey, you hover me!");
          });
          element.addEventListener("mouseout", function mouseOut() {
            console.log("Hey, you hover out of me!");
          });
        }
      }
    },
    mouseOver: function () {
      var hoveredProject = [].map.call(
        document.querySelectorAll("#caption__init .project__caption"),
        function (i) {
          return i.textContent;
        }
      );
      const string = JSON.stringify(hoveredProject);
      console.log(string);
      console.log(typeof string);

      console.log(hoveredProject);
      console.log(typeof hoveredProject);

      var hoveredProjectActive = [].slice
        .call(document.querySelectorAll("#cursor-outer .project__caption"))
        .filter((el) => el.innerText.indexOf(`${hoveredProject}`) !== -1);

      console.log(hoveredProjectActive.length);
      console.log(hoveredProjectActive);
      console.log(typeof hoveredProjectActive);

      var hoveredProjectThis = [].map.call(
        document.querySelectorAll("#cursor-outer .project__caption"),
        function (i) {
          return i.textContent;
        }
      );

      console.log(hoveredProjectThis);
      console.log(typeof hoveredProjectThis);

      hoveredProjectActive.filter(function () {
        if (hoveredProjectThis === hoveredProject) {
          console.log("Hey, you get matched!");
          document
            .querySelectorAll("#cursor-outer .project__caption")
            .classList.remove("is-inactive");
          document
            .querySelectorAll("#cursor-outer .project__caption")
            .classList.add("is-active");
          gsap.to(document.querySelectorAll("#cursor-outer .is-active"), 0.8, {
            y: "0",
            yPercent: 0,
            ease: Expo.easeOut,
          });
          gsap.to(document.querySelectorAll("#cursor-outer .is-inactive"), 0, {
            y: "0",
            delay: 0.01,
            yPercent: 120,
            onComplete: function setBack() {},
            ease: Expo.easeOut,
          });
        }
      });
    },
    mouseOut: function () {
      var hoveredProject = [].map.call(
        document.querySelectorAll("#caption__init .project__caption"),
        function (i) {
          return i.textContent;
        }
      );
      var hoveredProjectActive = [].slice
        .call(document.querySelectorAll(".project__caption"))
        .filter((el) => el.innerText.indexOf(`${hoveredProject}`) !== -1);
      console.log(hoveredProjectActive);
      gsap.to(document.querySelectorAll("#cursor-outer .is-active"), 0.8, {
        y: "0",
        yPercent: -120,
        onComplete: function setBack() {},
        ease: Expo.easeOut,
      });
      gsap.to(document.querySelectorAll("#cursor-outer .is-inactive"), 0, {
        y: "0",
        delay: 0.01,
        yPercent: 120,
        ease: Expo.easeOut,
      });
      hoveredProjectActive.classList.remove("is-active");
      hoveredProjectActive.classList.add("is-inactive");
    },
    setBack: function () {
      if (document.querySelectorAll("#cursor-outer .is-inactive")) {
        gsap.to(document.querySelectorAll("#cursor-outer .is-inactive"), 0, {
          y: "0",
          yPercent: 120,
          ease: Expo.easeOut,
        });
      }
    },
    ItemTransition: function () {
      gsap.utils
        .toArray("#js-home-items >div:last-of-type .js-home-item")
        .forEach(function (item) {
          const n = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              pin: !1,
              scrub: !0,
              start: "top 70%",
              end: "bottom top",
            },
          });
          var i = item.querySelector(".js-home-item-media-container"),
            item = item.querySelector(".js-home-item-media");
          n.to(item, { duration: 1, opacity: 1 }, 0),
            n.to(i, { duration: 1.5, scale: 1 }, "-=1"),
            n.to(item, { duration: 1, opacity: 0 }, "+=1");
        });
    },
    BurgerNav: function () {
      const buttonToggle = document.getElementById("js-navbar-menu-toggle");
      const navContainer = document.getElementById("js-navbar");
      buttonToggle.addEventListener("click", function (e) {
        e.preventDefault();
        e = navContainer;
        e.classList.contains("is-active")
          ? e.classList.remove("is-active")
          : e.classList.add("is-active");
      });
    },
    NavLinks: function () {
      const navBar = document.getElementById("js-navbar");
      var imageToggle = document.querySelectorAll(".js-navbar-image-toggle");
      // console.log(typeof imageToggle);

      for (let i = 0; i < imageToggle.length; i++) {
        const element = imageToggle[i];

        element.addEventListener("mouseenter", function () {
          var x = element.getAttribute("data-link");
          navBar.classList.add("c-navbar--" + x);
        });
        element.addEventListener("mouseleave", function () {
          var x = element.getAttribute("data-link");
          navBar.classList.remove("c-navbar--" + x);
        });
      }
    },
  };
  GlobalPage.Init();
  console.log(
    "%cDESIGNED BY JL",
    "color: #fff; background: #000; font-weight: 100"
  );
});

//Progress Bar
function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};

//Change text onclick button Menu / Close
document.addEventListener("DOMContentLoaded", function () {
  const linkToggle = document.querySelector("#js-navbar-menu-toggle");
  const main = document.getElementById("app");
  linkToggle.addEventListener("click", function () {
    main.classList.add("onMenu");
    clearTimeout();
    setTimeout(function () {
      main.classList.remove("onMenu");
    }, 1000);
    main.classList.toggle("open-menu");
  });
});
