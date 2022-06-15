$(document).ready(function(){

//START Header + navigation
  $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll >=50){
      $(".sticky").addClass("stickyadd");
    }else{
      $(".sticky").removeClass("stickyadd");
    }
  });
//END Header + navigation


});

