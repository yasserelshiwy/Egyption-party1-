// *slide nav
let navSlid = $(".left-nav").outerWidth();
$(".left-nav").css({ left: `-${navSlid}px` });
console.log(navSlid);
let navStatus = false;
$(".button-nav").on("click", function () {
  if (navStatus == true) {
    $(".left-nav").animate({ left: `-${navSlid}px` }, 400);
    $(".button-nav i").removeClass("fa-xmark").addClass("fa-bars");
    $(".button-nav span").html("open");
    navStatus = false;
  } else {
    $(".left-nav").animate({ left: "0px" }, 400);
    $(".button-nav i").removeClass("fa-bars").addClass("fa-xmark");
    $(".button-nav span").html("closs");
    navStatus = true;
  }
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 400) {
    $(".button-nav").removeClass("d-flex").addClass("d-none");
  } else {
    $(".button-nav").removeClass("d-none").addClass("d-flex");
  }
});
// * scroll to specific section
$(".left-nav ul a").on("click", function () {
  const currentSection = $(this).attr("herf");
  const currentOffSetTop = $(currentSection).offset().top;
  $("html,body").animate({ scrollTop: currentOffSetTop }, 2000);
});
// * toggle card
$(".contant .toggle").on("click", function () {
  $(".card").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});
// * countdown timer
let countDate = new Date("Oct 25, 2024 23:59:59").getTime();
let counter = setInterval(() => {
  let dayNow = new Date().getTime();
  let cunterbetween = countDate - dayNow;
  let days = Math.floor(cunterbetween / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (cunterbetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((cunterbetween % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((cunterbetween % (1000 * 60)) / 1000);

  $(".day").html(`${days}`);
  $(".hours").html(`${hours}`);
  $(".minutes").html(`${minutes}`);
  $(".seconds").html(`${seconds}`);
}, 1000);
// * Count textarea Characters
let maxLenth = $(".text-area").attr("maxlength");
let count = $(".count").html(`${maxLenth}`);

$(".text-area").on("keyup", function () {
  let countdown = maxLenth - $(this).val().length;
  if (countdown == 0) {
    $(".count").html("your available character finished");
  } else {
    $(".count").html(countdown);
  }
});
