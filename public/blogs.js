console.log(innerWidth);
var theActiveMenu = document.querySelector("#blogmenu");
theActiveMenu.setAttribute("status", "on");
var theActiveMobileMenu = document.querySelector("#mobilecontent4");
theActiveMobileMenu.setAttribute("status", "on");

var stickySection = document.querySelector(".secondsection");
var topDistance = stickySection.offsetTop;
var theHamburger = document.querySelector(".hamburger");
var theThirdHam = document.querySelector(".ham3");
let theMobileMenu = document.querySelector("#mobilecontents");
console.log(topDistance);

document.addEventListener("scroll", function () {
  if (window.scrollY >= topDistance) {
    stickySection.classList.add("sticky");
  } else {
    stickySection.classList.remove("sticky");
  }
});

theHamburger.addEventListener("click", function () {
  if (theThirdHam.getAttribute("switch") === "off") {
    document.querySelector(".ham1").setAttribute("switch", "on");
    document.querySelector(".ham2").setAttribute("switch", "on");
    document.querySelector(".ham3").setAttribute("switch", "on");
    theMobileMenu.setAttribute("switch", "on");
  } else if (theThirdHam.getAttribute("switch") === "on") {
    document.querySelector(".ham1").setAttribute("switch", "off");
    document.querySelector(".ham2").setAttribute("switch", "off");
    document.querySelector(".ham3").setAttribute("switch", "off");
    theMobileMenu.setAttribute("switch", "off");
  }
});
let theMobileMenuAchors = document.querySelectorAll(".mobilemenuanchors");
theMobileMenuAchors.forEach(function () {
  for (var i = 0; i < 4; i++) {
    theMobileMenuAchors[i].addEventListener("click", function () {
      theMobileMenu.setAttribute("switch", "off");
      document.querySelector(".ham1").setAttribute("switch", "off");
      document.querySelector(".ham2").setAttribute("switch", "off");
      document.querySelector(".ham3").setAttribute("switch", "off");
    });
  }
});

document
  .querySelector(".linkedinfooterlogo")
  .addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/ayan-mallik-28156b175", "_blank");
  });

document
  .querySelector(".twitterfooterlogo")
  .addEventListener("click", function () {
    window.open("https://twitter.com/i/flow/login", "_blank");
  });
document
  .querySelector(".facebookfooterlogo")
  .addEventListener("click", function () {
    window.open("https://www.facebook.com/AYAN0", "_blank");
  });

//email buttons
let allEmailButtons = document.querySelectorAll(".emailwritingbutton");
allEmailButtons.forEach(function () {
  for (var eb = 0; eb < 1; eb++) {
    allEmailButtons[eb].addEventListener("click", function () {
      window.location.href = "mailto:ayanmallik@duck.com";
    });
  }
});
//share buttons
var url = window.location.href;
console.log("url is " + url);
const linkdinButton = document.querySelector("#sharetolinkdin");
linkdinButton.addEventListener("click", function () {
  window.open(
    "https://www.linkedin.com/sharing/share-offsite/?url=" + url,
    "_blank"
  );
});

const twitterButton = document.querySelector("#sharetotwitter");
twitterButton.addEventListener("click", function () {
  window.open(
    "https://twitter.com/share?&url=" +
      url +
      "&text=msg&hashtags=javascript,programming,ayanmallik",
    "_blank"
  );
});

const facebookButton = document.querySelector("#sharetofacebook");
facebookButton.addEventListener("click", function () {
  window.open("https://www.facebook.com/share.php?u=" + url, "_blank");
});
let theFirstBlogArticle = document.querySelector("#thefirstblog");
theFirstBlogArticle.addEventListener("click", function () {
  window.open("../responsive-navigation-menu-creation/index.html", "_blank");
});
