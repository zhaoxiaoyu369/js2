window.onload=function(){
    //按钮
    var z =document.getElementById('bt3');
    z.onclick=function(){
        var x =document.getElementById('shuliang');  
        if(x.innerHTML!=0){
            x.innerHTML--;
            z2.style.cursor='pointer'
        } 
        if(x.innerHTML==0){
            z.style.cursor='not-allowed';
            
        }    
    }
    var z2 =document.getElementById('bt4');
    z2.onclick=function(){
        var x =document.getElementById('shuliang');
        if(x.innerHTML!=5){
            x.innerHTML++;
            z.style.cursor='pointer'
        }
        if(x.innerHTML==5){
            z2.style.cursor='not-allowed';
            
        }     
    }
    //数量
    var q=document.getElementById('z27');
    q.onclick=function(){
        q1.style.border=0;
        q.style.border='1px solid #fe0d4a';
        var x1 =document.getElementById('shuliang2');
        x1.innerHTML=q.innerHTML; 
    }
    var q1=document.getElementById('z28');
    q1.onclick=function(){
        q.style.border=0;
        q1.style.border= '1px solid #fe0d4a';
        var x1 =document.getElementById('shuliang2');
        x1.innerHTML=q1.innerHTML;
    }

    var w=document.getElementById('z33');
    var r=document.getElementById('z34');
    r.onmouseover=function(){
        tt.src='images/pp1.jpeg';
        w.style.border=0;
        r.style.border='2px solid #ffc24e';
        Bimg.src='images/pp1.jpeg'

    }
    w.onmouseover=function(){
        tt.src='images/pp0.jpeg';
        r.style.border=0;
        w.style.border='2px solid #ffc24e';
        Bimg.src='images/pp0.jpeg'
    }
    //放大镜
    var slider = document.getElementById("slider");
    var img2 = document.getElementById("img2");
    var img1 = document.getElementById("img1");
    var imgs = document.getElementById("tt");
    var imgb = document.getElementById("Bimg");
    imgs.mouseX = 0;
    imgs.mouseY = 0;
    img1.onmouseenter = function(){
        img2.style.display = "block";
        slider.style.display = "block";
    };
    img1.onmouseleave = function(){
        img2.style.display = "none";
        slider.style.display = "none";
    };
    img1.onmousemove = function (event) {
        getMousePos(event);
        imgb.style.left = -parseFloat(imgs.mouseX) + "px";
        imgb.style.top =  -parseFloat(imgs.mouseY) + "px";
        slider.style.left = parseFloat(imgs.mouseX) - 51 + "px";
        slider.style.top = parseFloat(imgs.mouseY) - 51 + "px";
        img2.style.left = parseInt(imgs.offsetLeft) + 409 + "px";
        if(parseFloat(imgs.mouseX) <= 51){
            imgb.style.left = "-51px";
            slider.style.left = "0px";
        }
        if (parseFloat(imgs.mouseX) >= 357){
            imgb.style.left = "-357px";
            slider.style.left = "306px";
        }
        if (parseFloat(imgs.mouseY) <= 51) {
            imgb.style.top = "-51px";
            slider.style.top = "0";
        }
        if (parseFloat(imgs.mouseY) >= 357) {
            imgb.style.top = "-357px";
            slider.style.top = "306px";
        }
    };
    function getMousePos(event) {
        var e = event;
        var scrollX = document.body.scrollLeft;
        var scrollY =document.body.scrollTop;
        var x =(e.pageX || e.clientX) + scrollX;
        var y =(e.pageY || e.clientY) + scrollY;
        imgs.mouseX = x - imgs.offsetLeft;
        imgs.mouseY = y - imgs.offsetTop;
    }


    //购物车
    var ingou = document.getElementById("ingou");
    var inshop = document.getElementById("inshop");
    var ck = document.getElementById("y");
    inshop.style.width = document.documentElement.clientWidth + "px";
    inshop.style.height = document.documentElement.clientHeight + "px";
    ck.style.left = (parseInt(inshop.style.width) - 408)/2 + "px";
    ck.style.top = (parseInt(inshop.style.height) - 228)/2 + "px";
    ingou.onclick = function () {
        inshop.style.display = "block";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    };
    document.getElementById("x").onclick = function () {
        inshop.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    };
    document.getElementById("ctn").onclick = function () {
        inshop.style.display = "none";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    };
    document.getElementById("ctnb").onclick = function () {
        window.location.href = "";
    };
    
}