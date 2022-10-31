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
      const navBar = document.getElementById("#js-navbar");
      const imageToggle = document.querySelectorAll("html.no-touchevents, a.js-navbar-image-toggle");
      console.log(imageToggle);

      imageToggle.addEventListener("mouseenter", function () {  
        const image = imageToggle.getAttribute('data-link');
        navBar.classList.add("c-navbar--" + image);
      });
      imageToggle.addEventListener("mouseleave", function () {  
        const image = imageToggle.getAttribute('data-link');
        navBar.classList.remove("c-navbar--" + image);
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

  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 2000);
});

//Custom Cursor
