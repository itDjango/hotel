var loginUser = localStorage.getItem("loginUser");
var name = localStorage.getItem("name");
if (localStorage.getItem("name").length > 4) {
    name = localStorage.getItem("name").slice(0,5) + '..'
}
$("#username").html(name)
$("#username_").html(localStorage.getItem("name"));
$("#logout").click(function () {
  localStorage.removeItem("islogon");
  localStorage.removeItem("name");
  window.location.href = '../index.html'
})

$("#send").click(function () {  //确定修改
   $.message('成功');
})
