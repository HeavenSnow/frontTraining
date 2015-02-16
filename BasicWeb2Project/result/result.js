/**
 * Created by developer on 2/5/15.
 */
var accounts = [
  {name:"super",password:"super123",code:"2273"},
  {name:"trantect",password:"abc123_",code:"test"}
];
var onClickImages = function(){
  document.getElementById("btn").style.color = "red";
  console.log("click image");
}

$("#account").submit(function(){

  var name = $("#username").val();
  var password = $("#password").val();
  var code = $("#code").val();
  var curAccount = {name:name,password:password,code:code};
  var isExist = _.where(accounts,curAccount);

  if(isExist.length != 0){
    window.confirm("Congratulation! You have logined Success");
  }else{
    $(".form-login").addClass("has-error");
    alert("Login Failed!")
  }

})

