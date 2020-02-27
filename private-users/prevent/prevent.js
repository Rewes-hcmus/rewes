function checkSecurity() {
  if (checkAccount()) {
    document.getElementById("prevent").style.display = "none";
  } else {
    document.getElementById("prevent").style.display = "block";
  }
}