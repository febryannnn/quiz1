// CLIENT SIDE ROUTING
const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  const path = event.target.getAttribute("href");
  window.history.pushState({}, "", path);
  console.log(path)
  handleLocation();
};

const routes = {
  "/quiz1": "/quiz1/pages-client/index.html",
  "/quiz1/profile": "/quiz1/pages-client/profile-client.html",
  "/quiz1/hometown": "/quiz1/pages-client/hometown-client.html",
  "/quiz1/food": "/quiz1/pages-client/food-client.html",
  "/quiz1/tourist": "/quiz1/pages-client/tourist-client.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  console.log(path)
  const route = routes[path] || routes["/quiz1"];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
