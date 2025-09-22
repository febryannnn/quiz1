// CLIENT SIDE ROUTING
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/quiz1-web/pages/404.html",
    "/quiz1": "/quiz1-web/pages-client/index.html",
    "/quiz1/profile": "/quiz1-web/pages-client/profile-client.html",
    "/quiz1/hometown": "/quiz1-web/pages-client/hometown-client.html",
    "/quiz1/food": "/quiz1-web/pages-client/food-client.html",
    "/quiz1/tourist": "/quiz1-web/pages-client/tourist-client.html"
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