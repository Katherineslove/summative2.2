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
 //-----------------------------------------
  $('#hotel').click(function(){
      $('.hotel').css("background", "black");
      $('.motel').css("background", "#808080");
      $('.house').css("background", "#808080");
      $('.hostel').css("background", "#808080");
  });

  $('#motel').click(function(){
    $('.hotel').css("background", "#808080");
    $('.motel').css("background", "black");
    $('.house').css("background", "#808080");
    $('.hostel').css("background", "#808080");
  });

  $('#house').click(function(){
    $('.hotel').css("background", "#808080");
    $('.motel').css("background", "#808080");
    $('.house').css("background", "black");
    $('.hostel').css("background", "#808080");
  });

  $('#hostel').click(function(){
    $('.hotel').css("background", "#808080");
    $('.motel').css("background", "#808080");
    $('.house').css("background", "#808080");
    $('.hostel').css("background", "black");
  })

   //-----------------------------------------

   function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

     function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

});
