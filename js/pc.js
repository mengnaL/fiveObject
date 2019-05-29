$(function(){
	var num = 0;
    function banner(){
      $('#wrap div').eq(num).addClass('active').siblings().removeClass('active');
      
        $("#wrap div .wrap_a").eq(num).addClass("animated bounceInLeft ");
        $("#wrap div .wrap_a").eq(num).css({"animation-iteration-count":"infinite","animation-duration":"4s"});
        $("#wrap div .wrap_b").eq(num).addClass("animated bounceInRight");
        $("#wrap div .wrap_b").eq(num).css({"animation-iteration-count":"infinite","animation-duration":"4s"});
    }

    // 轮播
    function next() {
		num++;
		if (num > $('#wrap div').length - 1) {
			num = 0;
		};
		banner();
    }
    time = setInterval(next,4000);
    
    $("#top_text div").click(function(){
        var index = $(this).index();
        // $(this).addClass('select').siblings().removeClass('select');
        $("#bot_change div").eq(index).show().siblings().hide();
        $("#bot_change div .bot_showa").eq(index).addClass("animated bounceInLeft");
        $("#bot_change div .bot_showb").eq(index).addClass("animated bounceInRight");
    })
    $("#cirleAll div").click(function(){
      var index = $(this).index();
      $(this).addClass("circleC").siblings().removeClass("circleC");
      $("#bot_change div").eq(index).show().siblings().hide();
      $("#bot_change div .bot_showa").eq(index).addClass("animated bounceInLeft");
    })

    // 定时器控制数字
		// document.getElementById("gray").onmousemove = function(){
    //   setInterval(function(){
    //     num+=100;
    //     document.getElementById("change_grayA").innerHTML = num;
    //   },500)
    //   }
    // 侧边栏
    var lock = true;
    $("#arrow").click(function(){
      if(lock){
        $("#arrow i").css({"borderRadius":"0","height":"3px"});
        $("#arrow_a").css({"top":"35px","transformOrigin":"left center","transform":"rotate(-45deg)"});
        $("#arrow_b").css({"width":"55px","marginLeft":"-0px","borderRadius":"10px 0 0 10px"});
        $("#arrow_c").css({"top":"35px","transformOrigin":"left center","transform":"rotate(45deg)"});
        $("#left_menu").show();
        $("#box_all").css({"marginLeft":"230px","transition":"all 0s"});
        lock = false;
      }else{
        $("#arrow i").css({"width":"50px","height":"5px","background":"#fff","position":"absolute","borderRadius":"10px 0 0 10px","transition":"all 300ms"});
        $("#arrow_a").css({"width":"35px","top":"20px","transformOrigin":"right center","transform":"rotate(-0deg)"});
        $("#arrow_b").css({"width":"35px","top":"35px"});
        $("#arrow_c").css({"width":"35px","top":"50px","transformOrigin":"right center","transform":"rotate(-0deg)"});
        $("#left_menu").hide();
        $("#left_menu").css({"transition":"all 1s"});
        $("#box_all").css({"marginLeft":"-0px","transition":"all 1s"});
        lock = true;
      }
      
    })

    // 悬浮广告
    
})