//Fade In GSAP animation
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);
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
});
