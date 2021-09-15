/*-----dark night mode-----*/

var icon = document.getElementById("icon");

icon.onclick = function() {
   document.body.classList.toggle("dark-theme");
   if (document.body.classList.contains("dark-theme")) {
      icon.src = "img/sun.png";
   }
   else {
      icon.src = "img/moon.png";
   }
}


/*----color switcher----*/

/*var colorSheets = [
   {
      color: "#f09cb9",
      title: "Switch to Default",
      href: "./css/color-css/color-default.css"
            },
   {
      color: "#f08a1d",
      title: "Switch to dark",
      href: "./css/color-css/color-dark.css"
            },
   {
      color: "#3f61d1",
      title: "Switch to blue",
      href: "./css/color-css/color-blue.css"
            },
   {
      color: "#fc0303",
      title: "Switch to red",
      href: "./css/color-css/color-red.css"
            },
   {
      color: "#f3ff08",
      title: "Switch to yellow",
      href: "./css/color-css/color-yellow.css"
            }
        ];

ColorSwitcher.init(colorSheets);*/

document.querySelector(".switcher-btn").onclick = () => {
   document.querySelector(".color-switcher").classList.toggle("active");
};

let themeButtons = document.querySelectorAll(".theme-buttons");

themeButtons.forEach(color => {
   color.addEventListener("click", () => {
      let dataColor = color.getAttribute("data-color");
      document.querySelector(":root").style.setProperty("--loader-color", dataColor);
   });
});