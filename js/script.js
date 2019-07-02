$(document).ready(function(){

  var started = false;

  $('#start').click(function(){
    if(started === false){
      $(this).fadeOut(1000);
      $('.getStart').addClass('started');
      $('.getStartContent').addClass('startedContent');
      $('#contentContainer').removeClass('contentContainerStart');
      $('#contentContainer').removeClass('showResults');
      $('.checkIn').removeClass('card-img-top');
      $('.checkOut').removeClass('card-img-top');
      $('.travellers').removeClass('card-img-top guestsOverlay');
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


    var input = document.getElementById('autoComplete');
    var autoComplete = new google.maps.places.Autocomplete(input, options);
    autoComplete.addListener('place_changed', function(){
      console.log('the place has been changed');
      var place = autoComplete.getPlace();
      console.log(place);
    });

    var options = {
      types: ['(cities)'],
      componentRestrictions: {country: 'nz'}
    };

    $("#card").click(function(){

        $(".card-body").toggle();

    });

    $("#guestsCard").click(function guestsCardpopUp(){

        $(".guestsCard-body").toggle();

        var count = 1;
        var countEl = document.getElementById("count");
        function plus(){
            count++;
            countEl.value = count;
        }
        function minus(){
          if (count > 1) {
            count--;
            countEl.value = count;
          }
        }

    });

    $(".search").click(function(){
      $('#options').fadeOut(1000);
      $('#sections').fadeOut(1000);
      $('#results').fadeIn(1000);
    });



});



google.maps.event.addDomListener(window, 'load');
