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
//table of contents making
var allHeadingTwos = document.querySelectorAll("h2");
var theLength = allHeadingTwos.length;

var ulElement = document.querySelector("#tablelist");

for (var p = 0; p < theLength; p++) {
  var listItem = document.createElement("li");
  listItem.innerText = allHeadingTwos[p].innerText;
  listItem.setAttribute("class", "thelists");
  listItem.setAttribute("id", "item" + p);
  allHeadingTwos[p].setAttribute("id", "heading" + p);
  ulElement.appendChild(listItem);
  listFunction(p);
}

function listFunction(p) {
  console.log(p);
  document.querySelector("#item" + p).addEventListener("click", function () {
    window.location.href = "./index.html#heading" + p;
  });
}
document
  .querySelector("#thestickynavbutton")
  .addEventListener("click", function () {
    window.open("https://github.com/ayan7001/sticky-navigation-menu", "_blank");
  });
document
  .querySelector("#thenonstickynavbutton")
  .addEventListener("click", function () {
    window.open("https://github.com/ayan7001/normal-navigation-menu", "_blank");
  });
