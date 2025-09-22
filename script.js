// Daftar rute
const routes = {
  404: "/pages/404.html",
  "/quiz": "/pages-client/index.html",
  "/quiz/profile": "/pages-client/profile-client.html",
  "/quiz/hometown": "/pages-client/hometown-client.html",
  "/quiz/food": "/pages-client/food-client.html",
  "/quiz/tourist": "/pages-client/tourist-client.html"
};

// Navigasi saat klik link
const route = (event) => {
  event.preventDefault();
  // ambil href hash tanpa #
  const hash = event.currentTarget.getAttribute('href').replace('#', '');
  window.location.hash = hash;
  handleLocation();
};

// Load konten sesuai hash
const handleLocation = async () => {
  // ambil hash, default "/quiz"
  const path = window.location.hash.replace("#", "") || "/quiz";
  const routePath = routes[path] || routes[404];

  try {
    const html = await fetch(routePath).then(res => res.text());
    document.getElementById("main-page").innerHTML = html.trim();
  } catch (err) {
    document.getElementById("main-page").innerHTML = "<h2>Error loading page</h2>";
    console.error(err);
  }

  // update active class navbar
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + path){
      link.classList.add('active');
    }
  });
};

// Handle back/forward button
window.onhashchange = handleLocation;

// Jalankan pertama kali
handleLocation();
window.route = route;
