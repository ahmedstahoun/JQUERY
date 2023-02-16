function slider() {
    if ($(".active").next().length == 0) {
      $(".active").first().removeClass("active");
      $("img").first().addClass("active");
    } else {
      $(".active").next().addClass("active");
      $(".active").first().removeClass("active");
    }
  }
  
  const imgSlideInterval = setInterval(slider, 1000);
  
  $(".slideButton").on("click", function () {
    clearInterval(imgSlideInterval);
  });
