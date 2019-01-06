window.onload=function(){
    var cover =document.getElementById("head");
    window.onscroll =function(){
        var st =document.documentElement.scrollTop||document.body.scrollTop;
        if(st>180){
            cover.style.position = 'fixed'
            cover.style.width = "1180px";
        }
        else{
            cover.style.position = 'static'
        }
    }

    var q = document.getElementById("qian").getElementsByTagName("span")[0];
    var w = document.getElementById("qian1");
    w.onclick = function(){
        q.innerText = w.value;
    }
    


    //轮播图
    function getStyle(obj, attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, null)[attr];
        }
    }
    function animate(obj,json,callback){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var isStop = true;
            for(var attr in json){
                var now = 0;
                if(attr == 'opacity'){
                    now = parseInt(getStyle(obj,attr)*100);
                }else{
                    now = parseInt(getStyle(obj,attr));
                }
                var speed = (json[attr] - now) / 30;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
                var cur = now + speed;
                if(attr == 'opacity'){
                    obj.style[attr] = cur / 100;
                }else{
                    obj.style[attr] = cur + 'px';
                }
                if(json[attr] !== cur){
                    isStop = false;
                }
            }
            if(isStop){
                clearInterval(obj.timer);
                callback&&callback();
            }
    }, 10)
    }


    var box = document.getElementById('box');
    var oNavlist = document.getElementById('nav').children;
    var slider = document.getElementById('slider');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var index = 1;
    var timer;
    function next(){
        index++;
        animate(slider,{left:-802*index},function(){
            if(index==7){
                slider.style.left = '-802px';
                index = 1;
            }
        });
        navmove();
    }
    function prev(){
        index--;
        navmove();
        animate(slider,{left:-802*index},function(){
            if(index==0){
                slider.style.left = '-4802px';
                index = 6;
            }
        });
        navmove()
    }
    timer = setInterval(next, 3000);
    box.onmouseover = function(){
        clearInterval(timer)
        animate(left,{opacity:100})
        animate(right,{opacity:100})  
    }
    box.onmouseout = function(){
        timer = setInterval(next, 3000);
        animate(left,{opacity:0})
        animate(right,{opacity:0})
        
    }
    right.onclick = next;
    left.onclick = prev;
    for( var i=0; i<oNavlist.length; i++ ){
        oNavlist[i].idx = i;
        oNavlist[i].onclick = function(){
            index = this.idx+1;
            animate(slider,{left:-800*index});
            navmove();
        }
    }
    function navmove(){
        for( var i=0; i<oNavlist.length; i++ ){
            oNavlist[i].className = "";
        }
        if(index ==7 ){
            oNavlist[0].className = "active";
        }else if(index==0){
            oNavlist[5].className = "active";
        }else {
            oNavlist[index-1].className = "active";
        }
    }

    //上下滚
    var bb = document.getElementById("bb");
    var list = bb.getElementsByTagName("li");
    bb.bb1 = 1;
    for(var a = 0; a < list.length; a++)
        list[a].style.top = "0px";
    bb.onmouseenter = function() {
        clearInterval(bb.bb1);
    };
    bb.onmouseleave = function() {
        bb.bb1 = setInterval(function() {
            for(var a = 0; a < list.length; a++){
                list[a].style.top = parseFloat(list[a].style.top) - 0.16 + "px";
                if(parseFloat(list[a].style.top) <= -29*(a+1))
                    list[a].style.top = parseFloat(list[a].style.top) + 754 + "px";
            }
        }, 5);
    };
    bb.bb1 = setInterval(function() {
        for(var a = 0; a < list.length; a++){
            list[a].style.top = parseFloat(list[a].style.top) - 0.16 + "px";
            if(parseFloat(list[a].style.top) <= -29*(a+1))
                list[a].style.top = parseFloat(list[a].style.top) + 754 + "px";
        }
    }, 5);

    //悬挂
    var g1=document.getElementById('g1');
    var g2=document.getElementById('g2');
    g1.onmouseover=function(){
        g1.style.position="relative";
        g1.style.right=100+"px";
    }
    g1.onmouseout=function(){
        g1.style.position="fixed";
        g1.style.right=-126+"px";
        g2.style.marginTop=74+"px";
    }
}
