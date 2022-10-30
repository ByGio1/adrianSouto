//ItemTransition - HomePage GSAP animation
window.addEventListener("load", () => {
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
      this.Clone(), this.ItemTransition(), this.LoadMore();
    },
    Clone: function () {},
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
    LoadMore: function () {},
  };
  GlobalPage.Init();
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

// Splash screen (Intro Animation)
document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");
  const letter = document.querySelector(".welcome-header");
  const letterSpan = document.querySelectorAll(".letter");

  setTimeout(() => {
    letterSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 200);
    });

    setTimeout(() => {
      letterSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2000);
  });
});
