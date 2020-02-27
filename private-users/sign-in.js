function checkAccount() {
  if (document.getElementById("usname") !== null) {
    var usname = document.getElementById("usname").value;
  };
  if (document.getElementById("pass") !== null) {
    var pass = document.getElementById("pass").value;
  }
  return checked = (usname !== "abc" || pass !== "abc") ? false : true;

}

function flow() {
  checkAccount();
  if (checked) {
    document.getElementById("validateAccount").style.display = "none";
  } else {
    document.getElementById("validateAccount").style.display = "flex";
  }
  // window.location.replace('...');
  let url = document.referrer.split("/");
  if (url[url.length - 1] === "index.html") {
    window.location.assign(window.location.origin + window.location.pathname.replace(window.location.pathname, "/private-users/private-users-main-page/main-page.html"));
  }
}

function checkBack() {
  document.getElementById("validateAccount").style.display = "none";
  let url = document.referrer;
  window.location.assign(url);
}