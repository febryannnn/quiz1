// CLIENT SIDE ROUTING
const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  const path = event.target.getAttribute("href");
  window.history.pushState({}, "", path);
  console.log(path)
  handleLocation();
};
const style_css = document.getElementById("page-style");


const routes = {
  "/quiz1": { html: "/quiz1/pages-client/index.html", css: "/quiz1/css/style.css" },
  "/quiz1/profile": { html: "/quiz1/pages-client/profile-client.html", css: "/quiz1/css/profile.css" },
  "/quiz1/hometown": { html: "/quiz1/pages-client/hometown-client.html", css: "/quiz1/css/hometown.css" },
  "/quiz1/food": { html: "/quiz1/pages-client/food-client.html", css: "/quiz1/css/food.css" },
  "/quiz1/tourist": { html: "/quiz1/pages-client/tourist-client.html", css: "/quiz1/css/tourist.css" }
};


const handleLocation = async () => {
  const path = window.location.pathname;
  console.log(path)
  const route = routes[path] || routes["/quiz1"];
  console.log(route)
  const html = await fetch(route.html).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;

  if (route.css) {
    style_css.setAttribute("href", route.css);
  }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
