function form(type) {
  document.getElementById("login").classList.remove("active");
  document.getElementById("register").classList.remove("active");
  if (form === "login") {
    document.getElementById("login").classList.add("active");
  } else if (form === "register") {
    document.getElementById("register").classList.add("active");
  }
}
