var loginUser = localStorage.getItem("loginUser");


setTimeout(function () {
   $("#progess").hide();
   $("#view").show();
   show();
},1000);

function show() {
  var hisArr = localStorage.getItem('hotelArr');
  if (hisArr != null) {
    var jsonObj =  JSON.parse(hisArr);//转换为json对象
    for (var i=0; i<jsonObj.length; i++) {
      console.log(jsonObj[i])
      var html = ''
          html +=`
          <tr>
            <td id="name">`+ jsonObj[i].name +`</td>
            <td id="level">`+ jsonObj[i].ad +`</td>
            <td id="time">`+ jsonObj[i].time +`</td>
            <td id="num">`+ jsonObj[i].money +`</td>
            <td id="ps">预定中</td>
          </tr>`
       $("#modal").append(html);
    }
  } 
}