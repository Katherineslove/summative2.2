var accommodationOptions = [
  {
    id: 1,
    title: 'Waldorf Stadium Apartments Hotel',
    type: 'Hotel',
    cost: 157,
    lat: -36.846580,
    lng: 174.773410,
    minNight: 1,
    maxNight: 5,
    minPeople: 1,
    maxPeople: 2,
    description: 'Luxury apartment with kitchen, near Queen Street Shopping District',
    image: 'waldorfStadiumApartments.png'
  },
  {
    id: 2,
    title: 'Airport Garden Inn',
    type: 'Motel',
    cost: 90,
    lat: -36.975460,
    lng: 174.816870,
    minNight: 2,
    maxNight: 4,
    minPeople: 3,
    maxPeople: 10,
    description: 'Adults-only hotel in Mangere with outdoor pool, restaurant',
    image: 'airportGardenInn.png'
  },
  {
    id: 3,
    title: 'Backpackers Central Hamilton',
    type: 'Hostel',
    cost: 30,
    lat: -38.147470,
    lng: 144.352620,
    minNight: 1,
    maxNight: 10,
    minPeople: 1,
    maxPeople: 1,
    description: 'Backpackers Central Hamilton offers hostel in the centre of Hamilton, less than 5 minutes walk from local shops, restaurants and cafes. Free WiFi and free lockers are provided.',
    image: 'backpackers.jpg'
  },
  {
    id: 4,
    title: 'Serene Studio in Motueka',
    type: 'House',
    cost: 240,
    lat: -41.106991,
    lng: 173.002472,
    minNight: 2,
    maxNight: 15,
    minPeople: 1,
    maxPeople: 4,
    description: 'A sunny and bright studio, this is a perfect spot to unwind and recharge. ',
    image: 'studio.png'
  },
];

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
      $('input').each(function() {
          if(!$(this).val()){
              alert('Some fields are empty');
             return false;
          }
      });
      $('#options').fadeOut(1000);
      $('#sections').fadeOut(1000);
      $('.search').fadeOut(1000);
      $('#results').fadeIn(1000);
      $('#places').fadeIn(1000);
      $('#filter').fadeIn(300);
      $('#map').fadeIn(300);
    });

    $("#results").click(function(){
      $('#options').fadeIn(300);
      $('#sections').fadeIn(300);
      $('.search').fadeIn(300);
      $('#filter').fadeOut(300);
      $('#map').fadeOut(300);
      $('#results').fadeOut(300);
      $('#places').fadeOut(300);
    });


var modal = document.getElementById("myModal");
var results = document.getElementById("results");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  results.style.display = "none";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  results.style.display = "block";
}

});

$( function() {
    $( "#datepicker" ).datepicker();
  } );


  $( function() {
      $( "#datepicker2" ).datepicker();
    } );

google.maps.event.addDomListener(window, 'load');
