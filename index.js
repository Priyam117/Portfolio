const heroSection = document.querySelector(".section-hero");
let footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = '<ion-icon name="arrow-up-outline" class ="scroll-top"></ion-icon>';

footerElem.after(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
}

scrollElement.addEventListener("click", scrollTop);



/*==============================================
 Responsive Navbar section
  ================================================*/


const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
    headerElem.classList.toggle("active");
})