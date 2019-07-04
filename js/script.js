// The array of all my accommodation options.

var accommodationOptions = [
  {
    id: 1,
    title: 'Waldorf Stadium Apartments Hotel',
    type: 'Hotel',
    cost: 157,
    lat: -36.846580,
    lng: 174.773410,
    location: 'Auckland',
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
    location: 'Auckland',
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
    lat: -37.780841,
    lng: 175.277586,
    location: 'Hamilton',
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
    location: 'Moteuka',
    minNight: 2,
    maxNight: 15,
    minPeople: 1,
    maxPeople: 4,
    description: 'A sunny and bright studio, this is a perfect spot to unwind and recharge. ',
    image: 'studio.png'
  },
  {
    id: 5,
    title: 'Hilton Queenstown Resort & Spa',
    type: 'Hotel',
    cost: 157,
    lat: -45.029461,
    lng: 168.727844,
    location: 'Queenstown',
    minNight: 1,
    maxNight: 5,
    minPeople: 1,
    maxPeople: 2,
    description: 'Polished quarters, some with lake views, in a premium hotel offering dining, a spa & an indoor pool.',
    image: 'queenstown.png'
  },
  {
    id: 6,
    title: 'Jailhouse Accommodation',
    type: 'Hostel',
    cost: 30,
    lat: -43.543424,
    lng: 172.614116,
    location: 'Christchurch',
    minNight: 1,
    maxNight: 10,
    minPeople: 1,
    maxPeople: 1,
    description: 'Low-key hostel in a Gothic Revival-style prison with a coffee bar, a game room & a guest kitchen.',
    image: 'jailhouse.png'
  },
  {
    id: 7,
    title: 'Private Secluded House',
    type: 'House',
    cost: 240,
    lat: -45.900988,
    lng: 170.509934,
    location: 'Dunedin',
    minNight: 2,
    maxNight: 15,
    minPeople: 1,
    maxPeople: 4,
    description: 'Enjoy a cupa in your own private sunny courtyard surrounded by native plants and the odd croaking frog',
    image: 'dunedin.png'
  },
  {
    id: 8,
    title: 'Albatross Motel',
    type: 'Motel',
    cost: 90,
    lat: -39.478718,
    lng: 176.882508,
    location: 'Napier',
    minNight: 2,
    maxNight: 4,
    minPeople: 3,
    maxPeople: 10,
    description: 'Modern studios & apartments in a casual motel offering free Wi-Fi & parking, plus an outdoor pool.',
    image: 'napier.png'
  },
  {
    id: 9,
    title: 'Egmont Eco',
    type: 'Hostel',
    cost: 30,
    lat: -39.070399,
    lng: 174.069812,
    location: 'New Plymouth',
    minNight: 1,
    maxNight: 10,
    minPeople: 1,
    maxPeople: 1,
    description: 'A sunny and bright studio, this is a perfect spot to unwind and recharge. ',
    image: 'newPlymouth.png'
  }
];


// Everything that is working on load.
$(document).ready(function(){

  var started = false;


// When the start button is clicked this function begins to work
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
      }, 1000);
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
      }, 1000);
    }
  })
 //-----------------------------------------
// The code for the buttons to change colour
  $('#hotel').click(function(){
    $('.hotel').css('background', 'black');
    $('.motel').css('background', '#808080');
    $('.house').css('background', '#808080');
    $('.hostel').css('background', '#808080');
  });

  $('#motel').click(function(){
    $('.hotel').css('background', '#808080');
    $('.motel').css('background', 'black');
    $('.house').css('background', '#808080');
    $('.hostel').css('background', '#808080');
  });

  $('#house').click(function(){
    $('.hotel').css('background', '#808080');
    $('.motel').css('background', '#808080');
    $('.house').css('background', 'black');
    $('.hostel').css('background', '#808080');
  });

  $('#hostel').click(function(){
    $('.hotel').css('background', '#808080');
    $('.motel').css('background', '#808080');
    $('.house').css('background', '#808080');
    $('.hostel').css('background', 'black');
  });

   //-----------------------------------------
// when the search button is clicked show an error or proceed

    $('.search').click(function(){
      var inputCheck = true;
      $('input').each(function() {
          if(!$(this).val()){
            Swal.fire(
              'Error!',
              'You need to fill in all of the sections',
              'error'
            );
             inputCheck = false;
          }
      });

      if (inputCheck === true) {
        $('#options').fadeOut(1000);
        $('#sections').fadeOut(1000);
        $('.search').fadeOut(1000);
        $('#results').delay(1000).queue(function(next){
          $('#results').removeClass('hidden');
          $('#filter').removeClass('hidden');
          next();
        });
        displayRooms();
      };

    });

});

// code for the calenders to work
$( function() {
    $( '#datepicker' ).datepicker();
  } );

$( function() {
    $( '#datepicker2' ).datepicker();
  } );

$('.backToStart').click(function(){
  $('#options').fadeIn(300);
  $('#sections').fadeIn(300);
  $('.search').fadeIn(300);
  $('#filter').fadeOut(300);
  $('#places').fadeOut(300);
  $('#details').hidden;
  $('#results').addClass('hidden');
});

// function that shows the accommodation options
function displayRooms() {

  var optionSelect = document.getElementById('options');
  var optionValue =  document.getElementById('options').value;

  var locationSelect = document.getElementById('locationSelect');
  var locationValue = locationSelect.options[locationSelect.selectedIndex].text;

  console.log(dateDiff);

  var guestSelect = document.getElementById('guestSelect');
  var guestValue = parseInt(guestSelect.options[guestSelect.selectedIndex].text);

  var finalArray = [];

  for (var i = 0; i < accommodationOptions.length; i++) {
    if ((dateDiff >= accommodationOptions[i].minNight && dateDiff <= accommodationOptions[i].maxNight) && (guestValue >= accommodationOptions[i].minPeople && guestValue <= accommodationOptions[i].maxPeople)) {
      finalArray.push(accommodationOptions[i]);
    };
};

  for (var i = 0; i < finalArray.length; i++) {

    var card = '';
    card += '<div class="col-12 col-sm-6 col-md-4 mb-3 text-center">';
    card += '<div class="card">';
        card += '<img src="images/thumbnails/'+finalArray[i].image+ '" class="card-img-top" alt="">';
        card += '<div class="card-body">';
        card += '<h5 class="card-title">'+finalArray[i].title+'</h5>';
        card +=   '<p class="card-text">' + finalArray[i].description +'</p>';
        card +=   '<p class="card-text">' + '$' + finalArray[i].cost +'</p>';
        card +=   '<button href="#" class="btn btn-primary"> Make a booking </button>';
      card +=   '</div>';
    card +=   '</div>';
    card += '</div>';

    document.getElementById('filter').innerHTML += card;
  }
}


var dateDiff;
var select = function(dateStr) {
    var d1 = $('#datepicker').datepicker('getDate');
    var d2 = $('#datepicker2').datepicker('getDate');
    var diff = 0;
    if (d1 && d2) {
          diff = Math.floor((d2.getTime() - d1.getTime()) / 86400000); // ms per day
    };
    dateDiff = diff;
};

$('#datepicker').datepicker({
  minDate: new Date(2019, 7 - 1, 8),
  maxDate: new Date(2019, 7 - 1, 28),
  onSelect: select,
});

$('#datepicker2').datepicker({onSelect: select});
