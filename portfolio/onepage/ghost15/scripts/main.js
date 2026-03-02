

window.onload=function(){
    $(".loading").fadeOut(1500);
}



$(function() {
    $('#floatTop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});



$(function(){
      $(".btn_buyNow").click(function(){ $(".popupWrap").fadeIn();
	  return false;
	  });
});

$(function(){
	  $(".popup_close" ).click(function(){ $(".popupWrap").fadeOut();
	  return false;
	  });
});


$(function(){
      $(".demo_select_lady").click(function(){
		    $('.demo_select_gentleman, .demo_select_kids').removeClass('select');
		    $('.demo_select_lady').addClass('select');
	        $(".demo_show_2, .demo_show_3").fadeOut();
			$(".demo_show_1").fadeIn();
			return false;
	   })
	   $(".demo_select_gentleman").click(function(){
		    $('.demo_select_lady, .demo_select_kids').removeClass('select');
		    $('.demo_select_gentleman').addClass('select');
	        $(".demo_show_1, .demo_show_3").fadeOut();
			$(".demo_show_2").fadeIn();
			return false;
	   })
	   $(".demo_select_kids").click(function(){
		    $('.demo_select_gentleman, .demo_select_lady').removeClass('select');
		    $('.demo_select_kids').addClass('select');
	        $(".demo_show_1, .demo_show_2").fadeOut();
			$(".demo_show_3").fadeIn();
			return false;
	   })
});

$(function(){
	var NN = 0;
	var GOGO = 0;

	$(".demo_show_1 .demoShoe_next").click(function(){
		if(NN<4){
			NN+=1;
			GOGO = NN*880*-1;
			$(".demo_show_1 ul").stop().animate({left:GOGO},200);
		}
		return false;
	});

	$(".demo_show_1 .demoShoe_pre").click(function(){
		if(NN>0){
			NN-=1;
			GOGO = NN*880*-1;
			$(".demo_show_1 ul").stop().animate({left:GOGO},200);
		}
		return false;
	});

});
$(function(){
	var NN = 0;
	var GOGO = 0;

	$(".demo_show_2 .demoShoe_next").click(function(){
		if(NN<3){
			NN+=1;
			GOGO = NN*880*-1;
			$(".demo_show_2 ul").stop().animate({left:GOGO},200);
		}
		return false;
	});

	$(".demo_show_2 .demoShoe_pre").click(function(){
		if(NN>0){
			NN-=1;
			GOGO = NN*880*-1;
			$(".demo_show_2 ul").stop().animate({left:GOGO},200);
		}
		return false;
	});

});
$(function(){
	var NN = 0;
	var GOGO = 0;

	$(".demo_show_3 .demoShoe_next").click(function(){
		if(NN<1){
			NN+=1;
			GOGO = NN*880*-1;
			$(".demo_show_3 ul").stop().animate({left:GOGO},200);
		}
		return false;
	});

	$(".demo_show_3 .demoShoe_pre").click(function(){
		if(NN>0){
			NN-=1;
			GOGO = NN*880*-1;
			$(".demo_show_3 ul").stop().animate({left:GOGO},200);
		}
		return false;
	});

});


$(function(){
      $(".second_select li:nth-child(1)").click(function(){
		    $('.second_select li:nth-child(1), .second_select li:nth-child(2), .second_bottom_show, .second_bottom_shoe').removeClass('select');
		    $('.second_select li:nth-child(1)').addClass('select');
			return false;
	   })
	  $(".second_select li:nth-child(2)").click(function(){
		    $('.second_select li:nth-child(1), .second_select li:nth-child(2), .second_bottom_show, .second_bottom_shoe').removeClass('select');
		    $('.second_select li:nth-child(2), .second_bottom_show, .second_bottom_shoe').addClass('select');
			return false;
	   })
});



var player;
function onYouTubeIframeAPIReady() {
    // 一般使用 影片的id寫在js裡


    player = new YT.Player('sandalsmv', {
      height: '100%',
      width: '100%',
      videoId: '2nnQGkKf3eU',
	  playerVars: {
		  modestbranding: 0,      // 隱藏YouTube Logo
		  loop: 1,                // 重覆播放
		  playlist:'2nnQGkKf3eU', // 當使用影片要重覆播放時，需再輸入YouTube 影片ID
      },
      events: {
        'onReady': onPlayerReady
      }
    });

  }
  function onPlayerReady(e) {
    // 為確保瀏覽器上可以自動播放，要把影片調成靜音
    e.target.mute().playVideo();
}
