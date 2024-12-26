

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
$(function(){
      $(".fourthWrap_showKids_1 .fourthWrap_showKids_nav_1, .fourthWrap_showKids_4 .fourthWrap_showKids_nav_2, .fourthWrap_showKids_5 .fourthWrap_showKids_nav_2, .fourthWrap_showKids_6 .fourthWrap_showKids_nav_2, .fourthWrap_showKids_7 .fourthWrap_showKids_nav_2, .pd_sidebar_8, .fourthWrap_showKids_3 .fourthWrap_show_nameSelect2").click(function(){
		    $('.fourthWrap_showKids_1, .fourthWrap_showKids_2, .fourthWrap_showKids_3, .fourthWrap_showKids_4, .fourthWrap_showKids_5, .fourthWrap_showKids_6, .fourthWrap_showKids_7').fadeOut(50);
		    $(".pd_sidebar, .navBtn" ).removeClass("open");
		    $('.fourthWrap_showKids_2').fadeIn(800);
			return false;	//MOSTER
	   })
	  $(".fourthWrap_showKids_1 .fourthWrap_showKids_nav_2, .fourthWrap_showKids_2 .fourthWrap_showKids_nav_2, .fourthWrap_showKids_3 .fourthWrap_showKids_nav_2, .fourthWrap_showKids_5 .fourthWrap_showKids_nav_3, .fourthWrap_showKids_6 .fourthWrap_showKids_nav_3, .fourthWrap_showKids_7 .fourthWrap_showKids_nav_3, .pd_sidebar_10").click(function(){
		    $('.fourthWrap_showKids_1, .fourthWrap_showKids_2, .fourthWrap_showKids_3, .fourthWrap_showKids_4, .fourthWrap_showKids_5, .fourthWrap_showKids_6, .fourthWrap_showKids_7').fadeOut(50);
		    $(".pd_sidebar, .navBtn" ).removeClass("open");
		    $('.fourthWrap_showKids_4').fadeIn(800);
			return false;	//燈鞋
	   })
	   $(".fourthWrap_showKids_2 .fourthWrap_showKids_nav_1, .fourthWrap_showKids_3 .fourthWrap_showKids_nav_1, .fourthWrap_showKids_4 .fourthWrap_showKids_nav_1, .fourthWrap_showKids_5 .fourthWrap_showKids_nav_1, .fourthWrap_showKids_6 .fourthWrap_showKids_nav_1, .fourthWrap_showKids_7 .fourthWrap_showKids_nav_1, .pd_sidebar_7").click(function(){
		    $('.fourthWrap_showKids_1, .fourthWrap_showKids_2, .fourthWrap_showKids_3, .fourthWrap_showKids_4, .fourthWrap_showKids_5, .fourthWrap_showKids_6, .fourthWrap_showKids_7').fadeOut(50);
		    $(".pd_sidebar, .navBtn" ).removeClass("open");
		    $('.fourthWrap_showKids_1').fadeIn(800);
			return false; 	//4.0
	   })
	   $(".fourthWrap_showKids_1 .fourthWrap_showKids_nav_3, .fourthWrap_showKids_2 .fourthWrap_showKids_nav_3, .fourthWrap_showKids_3 .fourthWrap_showKids_nav_3, .fourthWrap_showKids_4 .fourthWrap_showKids_nav_3, .fourthWrap_showKids_6 .fourthWrap_show_nameSelect3, .fourthWrap_showKids_7 .fourthWrap_show_nameSelect3, .pd_sidebar_11").click(function(){
		    $('.fourthWrap_showKids_1, .fourthWrap_showKids_2, .fourthWrap_showKids_3, .fourthWrap_showKids_4, .fourthWrap_showKids_5, .fourthWrap_showKids_6, .fourthWrap_showKids_7').fadeOut(50);
		    $(".pd_sidebar, .navBtn" ).removeClass("open");
		    $('.fourthWrap_showKids_5').fadeIn(800);
			return false; 	//水鞋
	   })
	   $(".fourthWrap_showKids_2 .fourthWrap_show_nameSelect2, .pd_sidebar_9").click(function(){
		    $('.fourthWrap_showKids_1, .fourthWrap_showKids_2, .fourthWrap_showKids_3, .fourthWrap_showKids_4, .fourthWrap_showKids_5, .fourthWrap_showKids_6, .fourthWrap_showKids_7').fadeOut(50);
		    $(".pd_sidebar, .navBtn" ).removeClass("open");
		    $('.fourthWrap_showKids_3').fadeIn(800);
			return false;
	   })
	   $(".fourthWrap_showKids_5 .fourthWrap_show_nameSelect2, .fourthWrap_showKids_7 .fourthWrap_show_nameSelect2, .pd_sidebar_12").click(function(){
		    $('.fourthWrap_showKids_1, .fourthWrap_showKids_2, .fourthWrap_showKids_3, .fourthWrap_showKids_4, .fourthWrap_showKids_5, .fourthWrap_showKids_6, .fourthWrap_showKids_7').fadeOut(50);
		    $(".pd_sidebar, .navBtn" ).removeClass("open");
		    $('.fourthWrap_showKids_6').fadeIn(800);
			return false;
	   })
	   $(".fourthWrap_showKids_5 .fourthWrap_show_nameSelect3, .fourthWrap_showKids_6 .fourthWrap_show_nameSelect2, .pd_sidebar_13").click(function(){
		    $('.fourthWrap_showKids_1, .fourthWrap_showKids_2, .fourthWrap_showKids_3, .fourthWrap_showKids_4, .fourthWrap_showKids_5, .fourthWrap_showKids_6, .fourthWrap_showKids_7').fadeOut(50);
		    $(".pd_sidebar, .navBtn" ).removeClass("open");
		    $('.fourthWrap_showKids_7').fadeIn(800);
			return false;
	   })
	   $(".pd_sidebar_14").click(function(){
		    $(".pd_sidebar, .navBtn" ).removeClass("open");
		    $('.popupWrap_3').fadeIn(800);
			return false;
	   })

});

$(function(){
      $(".navBtn").click(function(){
          $(".pd_sidebar, .navBtn" ).removeClass("open");
          $(".pd_sidebar, .navBtn" ).addClass("open");
          return false;
	  });
      $(".pd_sidebar_close").click(function(){
          $(".pd_sidebar, .navBtn" ).removeClass("open");
          return false;
	  });
});
