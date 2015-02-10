/**
 * Created by developer on 2/5/15.
 */

var onClickImages = function(){
  document.getElementById("btn").style.color = "red";
  console.log("click image");
}

$("#account").submit(function(){

  if(($("#username").val() === "super")||
    ($("#password").val() === "super123")||
    ($("#code").val() === "2273")){
    window.confirm("Congratulation! You have logined Success");
  }else{
    $(".form-login").addClass("has-error");
    alert("Login Failed!")
  }

})

