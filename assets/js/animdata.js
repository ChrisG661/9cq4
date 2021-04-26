function sdgAnim(elem) {
  var animct = elem;
  var animsrc = `assets/json/data-${animct.dataset.goal}.json`;
  var params = {
    container: animct,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: animsrc,
  };
  return lottie.loadAnimation(params);
}
