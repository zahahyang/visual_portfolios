
window.onload=function(){
    $(".loadingWrap").fadeOut(1500);
}

$(function() {   
    $('#floatTop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');  
        return false;
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 800){
            $('#floatTop').fadeIn();
        } else {
            $('#floatTop').fadeOut();
        }
    });	
});

$(function(){
  var shareNum=0;
      $(".index_button").click(function(){ 
          $(".index_select" ).removeClass("open");
          $(".index_select" ).addClass("open"); 
          return false;
	  });
	 $(".button_universePhoto, .button_universe").click(function(){ 
          $(".noise" ).removeClass("open");
          $(".noise" ).addClass("open"); 
          setTimeout(function(){
            lottery();
          },800);
          return false;
	  });
	 $(".btn_nav").click(function(){ 
          $(".popup_nav" ).fadeIn();          
          return false;
	  });
	 $(".popup_close").click(function(){ 
          $(".popup_nav, .popup_video, .popup_share" ).fadeOut();          
          return false;
	  });
	 $(".nav_1").click(function(){          
		  $(".popup_nav" ).fadeOut();
		  $(".index_select" ).removeClass("open");
	  });
	 $(".nav_2").click(function(){ 
		  $(".popup_nav" ).fadeOut();   
          $(".popup_video" ).fadeIn();
          return false;
	  });
	 $(".nav_3").click(function(){ 
		  $(location).attr("href",".?o=1")
		  $(".popup_nav" ).fadeOut();		  
		  return false;		  
	  });
   $(".nav_4").click(function(){ 
      location.reload();
      return false;     
    });
	 $(".nav_5").click(function(){ 
		  $(".popup_nav" ).fadeOut();	
		  $(".popup_share" ).fadeIn();      
      var url = "https://skechers-twn.com/2023CNY/";
      $('.popup_share_fb').attr('target','_blank').attr('href','http://www.facebook.com/share.php?u='.concat(encodeURIComponent(url)));
     $('.popup_share_line').attr('target','_blank').attr('href','https://social-plugins.line.me/lineit/share?url='+encodeURIComponent(url)+"&text=⚡️點擊圖片立即啟動宇宙求籤⚡️");
               
          return false;	  
	  });
  $('.btn_show_share').click(function(){ 
      $(".popup_share" ).fadeIn();    
      var url = "https://skechers-twn.com/2023CNY/?r="+pageName+"&n="+(shareNum+1);
     $('.popup_share_fb').attr('target','_blank').attr('href','http://www.facebook.com/share.php?u='.concat(encodeURIComponent(url+"&s=fb")));
     $('.popup_share_line').attr('target','_blank').attr('href','https://social-plugins.line.me/lineit/share?url='+encodeURIComponent(url+"&s=line")+"&text=⚡️點擊圖片立即啟動宇宙求籤⚡️");
           
          return false;   
    });
	 function lottery(){
     var num=Math.floor(Math.random()*4);
     shareNum=num;
     $('.indexWrap').hide();
     $('.'+pageName+'_show').eq(shareNum).fadeIn();
     // var url=;
      // $('.btn_show_share').attr('href',);
   }
   $('.btn_show_download').attr('href','https://shop.skechers-twn.com/v2/official/SalePageCategory/470181?sortMode=Newest')
  //  var url = location.href;
  //     window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(url)) );
  // var url = location.href;
  //     window.open('https://social-plugins.line.me/lineit/share?url='+encodeURIComponent(url));
});


var player;
function onYouTubeIframeAPIReady() {    	
    player = new YT.Player('videoShow', {
      height: '100%', 
      width: '100%', 
      videoId: 'kOjt5IIaP2w',
	  playerVars: {		 
		  modestbranding: 0,      // 隱藏YouTube Logo
		  loop: 1,                // 重覆播放
		  playlist:'kOjt5IIaP2w', // 當使用影片要重覆播放時，需再輸入YouTube 影片ID		  
      },   	
      events: {
        'onReady': onPlayerReady
      }
    });	
  }
  function onPlayerReady(e) {    
    e.target.mute().playVideo();
}



