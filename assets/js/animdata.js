function createAnimation(element) {
  this.container = element;
  this.params = {
    container: this.container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: this.container.dataset.animsrc,
  };
  lottie.loadAnimation(this.params);
}

window.addEventListener("load", () => {
  document.querySelectorAll(".lottie").forEach((element) => {
    try {
      new createAnimation(element);
    } catch (e) {
      return;
    }
  });
});
