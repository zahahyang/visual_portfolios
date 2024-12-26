<?php 

    header("Content-Type:text/html; charset=utf-8");

    $title="SKECHERS GO兔新春限定款 宇宙求籤";

    $des="SKECHERS智慧之兔降臨，跟著S宇宙解籤潮模穿上SKECHERS CNY GO兔新春限定款求個上上籤，新的一年將「兔飛猛進 潮來運轉」";

    $website="https://skechers-twn.com/2023CNY/";

    $shareURL=$website;

    $shareImg=$website.'images/share.jpg';

    

// 



// LINE分享文字

// 



// ⚡️點擊圖片立即啟動宇宙求籤⚡️

    $type=(isset($_GET["r"]))?$_GET["r"]:"";

    $share=(isset($_GET["s"]))?$_GET["s"]:"";

    $num=(isset($_GET["n"]))?$_GET["n"]:"";

    if($type!=""&&$share!=""&&$num!=""){

        // $q=explode("=",base64_decode($data))[0]; 

        if($share=='line'){

        	$des="進入S宇宙跟著解籤潮模穿SKECHERS CNY GO兔新春限定款求個上上籤，新的一年將「兔飛猛進 潮來運轉」";

        }

        $shareURL= $shareURL."?r=".$type."&s=".$share."&n=".$num;

        $shareImg= $website."share/".$type.'/'.$num.".jpg";  

    }



    

?>



<!DOCTYPE html>

<html lang="zh-TW">

	<head>	

		<!--META-->		

		<meta charset="utf-8">        

        <meta name="viewport" content="width=950, user-scalable=1">

        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title>SKECHERS GO兔新春限定款 宇宙求籤</title>

		<meta name="description" content="<?php echo $des;?>" />

        <meta name="title" content="<?php echo $title;?>">

        <meta name="description" content="<?php echo $des;?>">

        <meta property="og:title" content="<?php echo $title;?>">

        <meta property="og:description" content="<?php echo $des;?>">

        <meta property="og:image" content="<?php echo $shareImg;?>">

        <meta property="og:url" content="<?php echo $shareURL;?>">

		

		<!--CSS-->

		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

		<link rel="stylesheet" type="text/css" href="css/animate.css">

        <link rel="stylesheet" type="text/css" href="css/main.css"> 

        <link rel="stylesheet" type="text/css" href="css/responsive.css"> 

	</head>

    

	<body>			

		     

        <!--index-->

        <section class="indexWrap position-relative" id="indexLink1">

			 <div class="bg_icon"></div>

			 <video autoplay muted loop playsinline >

			       <source src="images/bg_numbers.mp4" type="video/mp4">

			 </video>

			 <div class="index_logo text-hide wow fadeInDown">SKECHERS<img src="images/index_logo.png"  width="100%" alt="SKECHERS"/></div>

			 <h1 class="text-hide wow zoomIn" data-wow-delay=".3s">兔來猛進 潮來運轉

				  <img src="images/index_TIT.png"  width="100%" alt="兔來猛進 潮來運轉"/>

			      <div class="index_TIT_light text-hide"><img src="images/index_TIT.gif"  width="100%"/></div>

			 </h1>

			 <div class="index_cont wow fadeInUp" data-wow-delay=".5s"><img src="images/index_cont.png"  width="100%" /></div>

			 <div class="index_show">

				  <div class="index_blueLight"><img src="images/index_blueLight.png"  width="100%" /></div>

				  <div class="index_blueLight index_blueLight2"><img src="images/index_blueLight.png"  width="100%" /></div>

			      <div class="index_b wow fadeInLeft" data-wow-delay=".6s"><img src="images/index_b.png"  width="100%" /></div>

				  <div class="index_g wow fadeInRight" data-wow-delay=".7s"><img src="images/index_g.png"  width="100%" /></div>

			 </div>

			 <a class="index_button"  href="#"><img src="images/index_button.png"  width="100%" /></a>

             <div class="index_select <?=(isset($_GET["o"]))?"open":""; ?>">

				 <div class="bg_icon"></div>

				 <video autoplay muted loop playsinline>

					   <source src="images/bg_numbers.mp4" type="video/mp4">

				 </video>

				 <div class="index_logo text-hide wow fadeInDown">SKECHERS<img src="images/index_logo.png"  width="100%" alt="SKECHERS"/></div>

			     <h2 class="text-hide wow zoomIn" data-wow-delay=".3s">跟著解籤達人 求個宇宙籤 你想要什麼籤 S宇宙都給你

				       <img src="images/index_play_TIT.png"  width="100%" alt="跟著解籤達人 求個宇宙籤 你想要什麼籤 S宇宙都給你"/></h2>

				 <a class="index_select1 text-hide" href="sport.html">跑者宇宙<img src="images/index_select1.png"  width="100%" alt="跑者宇宙"/></a>

				 <a class="index_select2 text-hide" href="trends.html">潮流宇宙<img src="images/index_select2.png"  width="100%" alt="潮流宇宙"/></a>

				 <a class="index_select3 text-hide" href="fairytale.html">童話宇宙<img src="images/index_select3.png"  width="100%" alt="童話宇宙"/></a>

			 </div>	 		 

        </section>

		

		<a class="btn_nav text-hide d-block" href="#" >選單<img src="images/btn_nav2.gif"  width="100%" alt="選單" /></a>

		

		<section class="popup_nav" style="display: none;">			 

			 <div class="nav_bg">

				  <img src="images/nav_bg.png"  width="100%" />

				  <a class="popup_close text-hide d-block" href="#" >關閉<img src="images/popup_close.png"  width="100%" alt="關閉" /></a>

				  <ul class="list-unstyled">

					   <li>

					        <a class="nav_1 text-hide d-block" href=".">S宇宙入口<img src="images/nav_1.png"  width="100%" alt="S宇宙入口" />

				                 <span><img src="images/nav_icon.png"  width="100%" /></span>

				            </a>

					   </li>

					   <li>

					        <a class="nav_2 text-hide d-block" href="#">宇宙特輯<img src="images/nav_2.png"  width="100%" alt="宇宙特輯" />

				                 <span><img src="images/nav_icon.png"  width="100%" /></span>

				            </a>

					   </li>

					   <li>

					        <a class="nav_3 text-hide d-block" href="#">重啟宇宙求籤<img src="images/nav_3.png"  width="100%" alt="重啟宇宙求籤" />

				                 <span><img src="images/nav_icon.png"  width="100%" /></span>

				            </a>

					   </li>

					   <li>

					        <a class="nav_4 text-hide d-block" href="#">再抽一次宇宙籤<img src="images/nav_4.png"  width="100%" alt="再抽一次宇宙籤" />

				                 <span><img src="images/nav_icon.png"  width="100%" /></span>

				            </a>

					   </li>
					  
					  <li>

					        <a class="nav_5 text-hide d-block" href="#">分享宇宙求籤<img src="images/nav_5.png"  width="100%" alt="分享宇宙求籤" />

				                 <span><img src="images/nav_icon.png"  width="100%" /></span>

				            </a>

					   </li>

					   

				  </ul>

			 </div>

        </section>

		<section class="popup_video" style="display: none;">			 

			 <div class="video_bg">

				  <img src="images/popup_video_bg.png"  width="100%" />

				  <a class="popup_close text-hide d-block" href="#" >關閉<img src="images/popup_close.png"  width="100%" alt="關閉" /></a>

				  <div class="wave"><img src="images/wave.gif"  width="100%"/></div>

				  <div class="video_screen wow fadeInUp">

			           <video id="videoShow" autoplay></video>				 

			      </div>

			 </div>

        </section>

        
        <section class="popup_share" style="display: none;">			 
			 <div class="popup_share_bg">
				  <img src="images/popup_share_bg.png"  width="100%" />
				  <a class="popup_close text-hide d-block" href="#" >關閉<img src="images/popup_close.png"  width="100%" alt="關閉" /></a>
				  <a class="popup_share_fb text-hide d-block" href="#" ><img src="images/popup_share_fb.png"  width="100%"  /></a>
				  <a class="popup_share_line text-hide d-block" href="#" ><img src="images/popup_share_line.png"  width="100%"  /></a>
				  
			 </div>
        </section>
        

		<script type="text/javascript" src="scripts/wow.js"></script>

        <script src="https://www.youtube.com/iframe_api"></script>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>	

        <script type="text/javascript">var pageName="index";</script>	

        <script type="text/javascript" src="scripts/main.js"></script>

   

	</body>    

</html>

<script>

	new WOW().init();

	

</script>