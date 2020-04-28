function openFunction() {
   document.getElementById('settings').style.display='none';
   document.getElementById('vision').style.display='block';
   document.getElementById("vision").innerHTML = "目前版本号：V2.0.0427rev1.24公测版";
}
function closeFunction() {
   document.getElementById('actually').style.display='none';
}
function realFunction() {
   document.getElementById('actually').style.display='block';
}
function tellFunction() {
   document.getElementById('tell').style.display='block';
}
function tcloseFunction() {
   document.getElementById('tell').style.display='none';
}
function knowFunction() {
   document.getElementById('know').style.display='block';
}
function kcloseFunction() {
   document.getElementById('know').style.display='none';
}
function mustFunction() {
   document.getElementById('must').style.display='block';
}
function mcloseFunction() {
   document.getElementById('must').style.display='none';
}
function otimgFunction() {
   document.getElementById('openthankimg').style.display='none';
   document.getElementById('thankimg').style.display='block';
}
function lxusFunction() {
   document.getElementById('lxus').style.display='block';
}
function lxcloseFunction() {
   document.getElementById('lxus').style.display='none';
}

function getcl(){
 var arr = []//定义一个空的数组
 i =0;//为while循环定义i的初始值
 C = '0123456789ABCDEF';
 //定义颜色代码的字符串
 while(i++ < 6){//循环6次
 x=Math.random()*16;
 //取0-16之间的随机数给变量x
 b=parseInt(x);//取0-16之前的整数给变量b
 c=C.substr(b,1);
 //由第b（0-16之间的整数）位开始取一个字符
 arr.push(c);
 //通过6次循环得到的随机位置取得的字符组合在一起把值给到arr这个数组
 }
 var cl = "#"+ arr.join('');
 //去掉之前数组之间的逗号，前面再加一个井号，
 //这样颜色随机的颜色代码就生成了，并且把颜色代码赋值给变量cl
 return cl;//把cl的值返回给函数getcl()
 }
 //下面开始给div的背景颜色赋值
 function setColor(){

 //新建一个设置颜色的函数setColor
 document.body.style.background = getcl();
 //把上面得到的随机颜色代码赋值给DIV的背景颜色
 
 } 
 function warnFunction(){
	var x;
	var r=confirm("按下按钮!");
	if (r==true){
		x="你按下了\"确定\"按钮![1]";
	}
	else{
		x="你按下了\"取消\"按钮![1]";
	}
	document.getElementById("log_msg").innerHTML=x;
}
 function labFunction(){
	var x;
	var r=confirm("您确定要前往实验室吗？");
	if (r==true){
		window.open('lab.html');
	}
	else{
	}
}
function disp_prompt()
  {
  var name=prompt("请输入您的名字","ZH")
  if (name!=null && name!="")
    {
    document.getElementById("log_msg").innerHTML=("你好，" + name + "！今天过得好吗？[2]")
    }
     else{
		document.getElementById("log_msg").innerHTML=("你按下了\"取消\"按钮![2]");
	}
  }
  
  function yxh_prompt()
  {
  var body=prompt("请输入事件主体","桃子核")
  

  if (body!=null && body!="")
    {var what=prompt("请输入具体事件","不能吞下去")
    if (what!=null && what!="")
    {
      var another=prompt("请输入事件的另一种说法","桃子核太大了，吞下去容易噎着")
       if (another!=null && another!="")
       {
    document.getElementById("log_msg").innerHTML=(body + what + "是怎么回事呢？" + body +"相信大家都很熟悉， 但是" + body + what +"是怎么回事呢？下面就让小编带大家一起了解吧。" + body + what + "其实就是" + another + "，大家可能会惊讶" + body + "怎么会" + what + "呢？但事实就是这样，小编也感到非常惊讶。 那么这就是关于" + body + what + "的事情了，大家有什么想法呢？欢迎在评论区告诉小编一起讨论哦~~~")
    }
    else
    {
    document.getElementById("log_msg").innerHTML=("你按下了\"取消\"按钮![3][3]");
    }
    }
    else
    {
    	document.getElementById("log_msg").innerHTML=("你按下了\"取消\"按钮![3][2]");
    }
    
    }
     else{
		document.getElementById("log_msg").innerHTML=("你按下了\"取消\"按钮![3][1]");
	}
  }
  
  function output()
{
 if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "在本次启动中，您已经点击这个按钮 " + sessionStorage.clickcount + " 次。";
    } else {
        document.getElementById("result").innerHTML = "抱歉！您的浏览器不支持 Web Storage ...";
    }
    if(document.getElementById("yxh").checked)
	{
		document.getElementById('yxhb').style.display='block';
		document.getElementById('zh1b').style.display='none';
		document.getElementById('zh2b').style.display='none';
	}
    if(document.getElementById("zh1").checked)
	{
		document.getElementById('yxhb').style.display='none';
		document.getElementById('zh1b').style.display='block';
		document.getElementById('zh2b').style.display='none';
	}
	    if(document.getElementById("zh2").checked)
	{
		document.getElementById('yxhb').style.display='none';
		document.getElementById('zh1b').style.display='none';
		document.getElementById('zh2b').style.display='block';
	}
}

function zh1_prompt()
  {
  var name=prompt("如何评价XXX？","知乎营销生成器")
  if (name!=null && name!="")
    {
    document.getElementById("log_msg").innerHTML=("如何评价" + name + "？<br>谢不邀，怒答。过千赞就取匿。要想正确看待这个问题，我们必须从历史的角度出发。那首先呢，为什么会出现这样的问题呢?题主你有没有想过?为什么是" + name + "而不是其他东西呢?其实第一个原因是是显而易见的，我就不点破了。其次，我们都知道，抛开剂量谈毒性，没什么意义，同样，如果我们不结合与" + name + "相关的具体环境，空谈" + name + "也是没什么价值的。因此呢，这个" + name + "它就是这个样子，我们就拿看待正常事物的眼光看待" + name + "就好了。")
    }
     else{
		document.getElementById("log_msg").innerHTML=("你按下了\"取消\"按钮![4]");
	}
  }
  
  function zh2_prompt()
  {
  var name=prompt("如何评价XXX？","5G信号覆盖珠峰")
  if (name!=null && name!="")
    {
    document.getElementById("log_msg").innerHTML=("如何评价" + name + "？<br>怒答一发，人在美帝，刚下飞机，正好看到这个问题。要想正确看待这个问题，我们必须从历史的角度出发。第一点嘛，我们必须考虑到一个很关键的一点，即事物都是具有两面性的，那么" + name + "也不例外，要想正确看待" + name +"，我们必须明确看待" + name +"的角度，考虑到这一点，其实也就很明了了嘛。然后第二点，在" + name +"相关的话题上，很多人总是抱着理性思考" + name +"这件事，殊不知其内在的价值已经决定了" + name +"之所以为" + name +"，就在于" + name +"本身的意义。因此呢，这个" + name +"它就是这个样子，我们就拿看待正常事物的眼光看待" + name + "就好了。")
    }
     else{
		document.getElementById("log_msg").innerHTML=("你按下了\"取消\"按钮![5]");
	}
  }
  
  function count()
  {    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcounts) {
            sessionStorage.clickcounts = Number(sessionStorage.clickcounts)+1;
        } else {
            sessionStorage.clickcounts = 1;
        }
        document.getElementById("results").innerHTML = "本次启动中，您已经点击这个按钮 " + sessionStorage.clickcounts + " 次。";
    } else {
        document.getElementById("results").innerHTML = "抱歉！不支持 Web Storage ...";
    }
}

function welcome() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.name) {
         window.XB.actionFromJsWithParam("" + sessionStorage.speak + sessionStorage.name);
        } else {
           var username=prompt("欢迎使用撸号大师！我们该怎样称呼你呢？","你大爷的");
        sessionStorage.name = username;
       sessionStorage.speak=("再次欢迎您，")
        }
       
    } else {
        alert("抱歉！您的浏览器不支持 Web Storage，无法使用本功能！");
    }
}

function welcomesuper() {
sessionStorage.speak=("再次欢迎超级管理员，");
}