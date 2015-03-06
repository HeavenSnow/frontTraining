# TODO: 1
#  1. 定义一个变量logModule。
#  2. 该变量用于创建一个module且名为'logModule'。
#  3. 该module注入了'ngTable'。

# TODO: 2
#  1. 基于module创建一个controller且名为'logCtrl'。
#  2. 该controller注入了'$scope','ngTableParams'。
#  3. 在controller中定义一个内部数组accounts,且值为{name:"super",password:"super123",code:"2273"}
#                                               {name:"trantect",password:"abc123_",code:"test"}

# TODO: 3
#  1. 完善controller中onClickImages方法
#  2. 给变量clickFlag赋值为true

# TODO: 4
#  1. 完善controller中onEnterClick方法
#  2. 定义变量curAccount，含有name、password、code这三个key，
#     且对应上面定义的三个变量$scope.name,$scope.password,$scope.code；
#  3. 定义变量isExist，使用underscore中的方法，查找变量accounts
#     中是否存在curAccount的内容，并将查找的结果返回给isExist;
#  4. 若isExist中有值则弹出一个confirm确认框，确认的内容为
#　　“Congratulation! You have logged Success！"
#  5. 若isExist中没有值：
#    　* 找到所有的"form-login"样式的输入框;
#　    * 给这些输入框添加一个错误的样式"has-error";
#　    * 接着弹出一个alert提醒框，提醒内容为"Login Failed!"
#  6. 给变量clickFlag赋值为false
