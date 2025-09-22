// CLIENT SIDE ROUTING
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/quiz": "/pages-client/index.html",
    "/quiz/profile": "/pages-client/profile-client.html",
    "/quiz/hometown": "/pages-client/hometown-client.html",
    "/quiz/food": "/pages-client/food-client.html",
    "/quiz/tourist": "/pages-client/tourist-client.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();