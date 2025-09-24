// // CLIENT SIDE ROUTING

const navLinks = document.querySelectorAll(".nav-link");

function setActiveNavbar(path) {
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === path) {
        console.log(`${link.getAttribute("href")} dan ${path}`)
      link.classList.add("active");
    }
  });
}

const route = (event) => {
  // console.log(event);
  event = event || window.event;
  event.preventDefault();
  const path = event.target.getAttribute("href");
  window.history.pushState({}, "", path);
  //   console.log(path)

  setActiveNavbar(path)
  handleLocation();
};

const style_css = document.getElementById("page-style");

// untuk deploy di github
const routes = {
  "/quiz1": { html: "/quiz1/pages-client/index.html", css: "/quiz1/css/style.css" },
  "/quiz1/profile": { html: "/quiz1/pages-client/profile-client.html", css: "/quiz1/css/profile.css" },
  "/quiz1/hometown": { html: "/quiz1/pages-client/hometown-client.html", css: "/quiz1/css/hometown.css" },
  "/quiz1/food": { html: "/quiz1/pages-client/food-client.html", css: "/quiz1/css/food.css" },
  "/quiz1/tourist": { html: "/quiz1/pages-client/tourist-client.html", css: "/quiz1/css/tourist.css" }
};

// untuk run di lokal
// const routes = {
//   "/quiz1": { html: "/pages-client/index.html", css: "css/style.css" },
//   "/quiz1/profile": {
//     html: "/pages-client/profile-client.html",
//     css: "/css/profile.css",
//   },
//   "/quiz1/hometown": {
//     html: "/pages-client/hometown-client.html",
//     css: "/css/hometown.css",
//   },
//   "/quiz1/food": {
//     html: "/pages-client/food-client.html",
//     css: "/css/food.css",
//   },
//   "/quiz1/tourist": {
//     html: "/pages-client/tourist-client.html",
//     css: "/css/tourist.css",
//   },
// };

const handleLocation = async () => {
  const path = window.location.pathname;
  //   console.log(path)
  const route = routes[path] || routes["/quiz1"];
  //   console.log(route)
  const html = await fetch(route.html).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;

  if (route.css) {
    style_css.setAttribute("href", route.css);
  }
};

window.addEventListener("load", () => {
  setActiveNavbar(window.location.pathname);
});

window.addEventListener("popstate", () => {
  setActiveNavbar(window.location.pathname);
});

window.onpopstate = handleLocation;
window.route = route;

handleLocation();


window.addEventListener("scroll", function () {
  const section = document.querySelector("#tourist .kotak-kotak");
  const wrapper = document.querySelector(".cards");

  const rect = section.getBoundingClientRect();

  if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
    wrapper.classList.add("dark");
  } else {
    wrapper.classList.remove("dark"); 
  }
});
