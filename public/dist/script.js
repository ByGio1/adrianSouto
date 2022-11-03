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
      this.Clone(),
        this.ItemTransition(),
        this.BurgerNav(),
        this.NavLinks(),
        this.LoadMore();
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
      // console.log(imageToggle.length);

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
