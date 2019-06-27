$(document).ready(function(){

  var started = false;

  $('#start').click(function(){
    if(started === false){
      $(this).fadeOut(1000);
      $('.getStart').addClass('started');
      $('.getStartContent').addClass('startedContent');
      $('#contentContainer').removeClass('contentContainerStart');
      setTimeout(function(){
        started = true;
      }, 1000)
    }
  })

  $('#logo').click(function(){
    if(started === true){
      $('#start').fadeIn(1000);
      $('.getStart').removeClass('started');
      $('.getStartContent').removeClass('startedContent');
      $('#contentContainer').addClass('contentContainerStart');
      setTimeout(function(){
        started = false;
      }, 1000)
    }

  })




});
