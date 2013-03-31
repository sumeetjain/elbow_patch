$(document).ready(function(){
  $("#prev").on('click', function(e){
    $("#slide_container").animate({
      left: '+=400'
    }, 300);
    
    e.preventDefault();
  });
  
  $("#next").on('click', function(e){
    $("#slide_container").animate({
      left: '-=400'
    }, 300);
    
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