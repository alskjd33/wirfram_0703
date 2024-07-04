$(document).ready(function () {
  // 서브메뉴전체가 보여지는 코드
  //  $(".navi > li").mouseover(function(){
  //   $(".submenu").stop().slideDown(500)
  //  }).mouseout(function(){
  //   $(".submenu").stop().slideUp(500)
  //  })
  // 네비에 해당하는 서브메뉴가 나오는코드
  $(".navi > li").mouseover(function () {
    // console.log(this);
    $(this).find(".submenu").stop().slideDown(500);
  });
  $(".navi > li").mouseout(function () {
    // console.log(this);
    $(this).find(".submenu").stop().slideUp(500);
  });
  //   이미지 슬라이드 기능
  setInterval(function(){
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: -1200});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: -2400});
    $(".slidelist").delay(2000);
    $(".slidelist").animate({marginLeft: 0});
    $(".slidelist").delay(2000);
  })
  // tabmenu
  $(function () {
    $(".tabmenu > li > a").click(function () {
      // console.log(this);
      $(this).parent().addClass("active").siblings().removeClass("active");
    });
  });
  //모달기능
  $(".popup").click(function(){
    $(".modal").addClass("active")
  })
//   모달 닫기 기능
$(".close").click(function(){
    $(".modal").removeClass("active")
  })
});
