$("#login").click(function () {
  window.location.href = 'login.html';
})

isL();
function isL() {
  var islogon = localStorage.getItem("islogon");
  if (islogon) {
    $("#login").hide();
    $("#loged").show();
    $("#username_").html(localStorage.getItem("name"))
  } else {
    $("#login").show();
    $("#loged").hide();
  }
}

$("#logout").click(function () {
  localStorage.removeItem("islogon");
  localStorage.removeItem("name");
  isL();
})