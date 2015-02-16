/**
 * Created by developer on 2/5/15.
 */

var onClickImages = function(){
  document.getElementById("btn").style.color = "red";
  console.log("click image");
}

var accounts = [
  {name:"super",password:"super123",code:"2273"},
  {name:"trantect",password:"abc123_",code:"test"}
];
/* TODO: 在第 32 行完成
  1. 使用jquery,定义id为"account"的submit方法；
  2. 在submit方法中实现：
    2.1 定义变量name，用来获取id为 username 的输入框内容；
    2.2 定义变量password，用来获取id为 password 的输入框内容；
    2.3 定义变量code，用来获取id为 code 的输入框内容；
    2.4 定义变量curAccount，含有name、password、code这三个key，
      且对应上面定义的三个变量；
    2.5 定义变量isExist，使用underscore中的方法，查找变量accounts
      中是否存在curAccount的内容，并将查找的结果返回给isExist;
    2.6 若isExist中有值则弹出一个confirm确认框，确认的内容为
    　　“Congratulation! You have logged Success！"
    2.7 若isExist中没有值：
    　* 找到所有的"form-login"样式的输入框;
    　* 给这些输入框添加一个错误的样式"has-error";
    　* 接着弹出一个alert提醒框，提醒内容为"Login Failed!"
    2.8 使用devTool调试页面中存在问题。
*/


