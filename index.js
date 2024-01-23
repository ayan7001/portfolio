console.log(innerWidth);
var theActiveMenu = document.querySelector("#thehomemenu");
theActiveMenu.setAttribute("status", "on");
var theActiveMobileMenu = document.querySelector("#mobilecontent1");
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
//progressbar one
let theProgressbar = document.querySelector(".progressing");
let viewportToProgressbarHeight = theProgressbar.offsetTop;

document.addEventListener("scroll", function () {
  if (viewportToProgressbarHeight - window.scrollY <= 670) {
    theProgressbar.setAttribute("switch", "on");
    document.querySelector(".extrasmallpara").setAttribute("switch", "on");
  }
});

//progressbar two
let theProgressbarTwo = document.querySelector(".progressingtwo");
let viewportToProgressbarHeightTwo = theProgressbarTwo.offsetTop;
console.log(viewportToProgressbarHeightTwo, window.scrollY);
document.addEventListener("scroll", function () {
  if (viewportToProgressbarHeightTwo - window.scrollY <= 670) {
    theProgressbarTwo.setAttribute("switch", "on");
    document.querySelector(".extrasmallparatwo").setAttribute("switch", "on");
  }
});

//progressbar three
let theProgressbarThree = document.querySelector(".progressingthree");
let viewportToProgressbarHeightThree = theProgressbarThree.offsetTop;
console.log(viewportToProgressbarHeightThree, window.scrollY);
document.addEventListener("scroll", function () {
  if (viewportToProgressbarHeightThree - window.scrollY <= 670) {
    theProgressbarThree.setAttribute("switch", "on");
    document.querySelector(".extrasmallparathree").setAttribute("switch", "on");
  }
});

//progressbar four
let theProgressbarFour = document.querySelector(".progressingfour");
let viewportToProgressbarHeightFour = theProgressbarFour.offsetTop;
document.addEventListener("scroll", function () {
  if (viewportToProgressbarHeightFour - window.scrollY <= 645) {
    theProgressbarFour.setAttribute("switch", "on");
    document.querySelector(".extrasmallparafour").setAttribute("switch", "on");
  }
});

//progressbar five
let theProgressbarFive = document.querySelector(".progressingfive");
let viewportToProgressbarHeightFive = theProgressbarFive.offsetTop;
document.addEventListener("scroll", function () {
  if (viewportToProgressbarHeightFive - window.scrollY <= 645) {
    theProgressbarFive.setAttribute("switch", "on");
    document.querySelector(".extrasmallparafive").setAttribute("switch", "on");
  }
});
//progressbar six
let theProgressbarSix = document.querySelector(".progressingsix");
let viewportToProgressbarHeightSix = theProgressbarSix.offsetTop;
document.addEventListener("scroll", function () {
  if (viewportToProgressbarHeightSix - window.scrollY <= 645) {
    theProgressbarSix.setAttribute("switch", "on");
    document.querySelector(".extrasmallparasix").setAttribute("switch", "on");
  }
});
//progressbar seven
let theProgressbarSeven = document.querySelector(".progressingseven");
let viewportToProgressbarHeightSeven = theProgressbarSeven.offsetTop;
document.addEventListener("scroll", function () {
  if (viewportToProgressbarHeightSeven - window.scrollY <= 645) {
    theProgressbarSeven.setAttribute("switch", "on");
    document.querySelector(".extrasmallparaseven").setAttribute("switch", "on");
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
document.querySelector(".bloghtml").addEventListener("click", function () {
  window.open("./public/blogs.html", "_blank");
});
//email buttons
let allEmailButtons = document.querySelectorAll(".emailwritingbutton");
allEmailButtons.forEach(function () {
  for (var eb = 0; eb < 3; eb++) {
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

let theTindogButton = document.querySelector("#tindogprojectbutton");
theTindogButton.addEventListener("click", function () {
  window.open("./projects/tindog/index.html", "_blank");
});

let theTinyCalculatorButton = document.querySelector("#tinycalculatorbutton");
theTinyCalculatorButton.addEventListener("click", function () {
  window.open("./projects/tiny-calculator/index.html", "_blank");
});
let thePlayDrumButton = document.querySelector("#playthedrumbutton");
thePlayDrumButton.addEventListener("click", function () {
  window.open("./projects/play-drum/index.html", "_blank");
});
let theMemoryBoosterButton = document.querySelector("#thememoryboosterbutton");
theMemoryBoosterButton.addEventListener("click", function () {
  window.open("./projects/simon-game/index.html", "_blank");
});

let theFirstBlogArticle = document.querySelector("#thefirstblog");
theFirstBlogArticle.addEventListener("click", function () {
  window.open("./responsive-navigation-menu-creation/index.html", "_blank");
});
