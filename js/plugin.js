$(document).ready(function(){
  'use strict';
  var nav=$(".navbar").innerHeight();
  var winH=$(window).height();
  $(".header, .overlay").css('height', winH - nav );
  $('.features ul >li').hover(function(){
   $(this).children().eq(0).animate({
     height:'100%'
   });
  }, function(){
    $(this).children().eq(0).animate({
      height:0
    });
  });
    $('.pricing .table').hover(function(){
      $(this).find('span').animate({
        marginBottom:'0px'
      },1000);
     }, function(){
      $(this).find('span').animate({
        marginBottom:'-30px'
       },1000);
  });
});
