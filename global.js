$(document).ready(function(){
  var speed = 750;
  
  $("#prev").on('click', function(e){
    $("#slide_container").animate({
      left: '+=500'
    }, speed);
    
    e.preventDefault();
  });
  
  $("#next").on('click', function(e){
    $("#slide_container").animate({
      left: '-=500'
    }, speed);
    
    e.preventDefault();
  });
  
  $('.trigger').hover(function(){
    $('.bubble').hide();
    
    $(this).parent().find('.bubble').show();
  }, function(){
    $(this).parent().find('.bubble').hide();
  });
  
  $('.bubble').hover(function(){
    $(this).show();
  }, function(){
    $(this).hide();
  });
});