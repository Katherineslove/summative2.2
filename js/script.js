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
    lat: -37.780841,
    lng: 175.277586,
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
  {
    id: 5,
    title: 'Hilton Queenstown Resort & Spa',
    type: 'Hotel',
    cost: 157,
    lat: -45.029461,
    lng: 168.727844,
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
    minNight: 2,
    maxNight: 15,
    minPeople: 1,
    maxPeople: 4,
    description: 'Enjoy your complimentary continental breakfast or a cupa in your own private sunny courtyard surrounded by native plants and the odd croaking frog',
    image: 'dunedin.png'
  },
  {
    id: 8,
    title: 'Albatross Motel',
    type: 'Motel',
    cost: 90,
    lat: -39.478718,
    lng: 176.882508,
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
    minNight: 1,
    maxNight: 10,
    minPeople: 1,
    maxPeople: 1,
    description: 'A sunny and bright studio, this is a perfect spot to unwind and recharge. ',
    image: 'newPlymouth.png'
  }
];

var map;
var allMarkers = [
  {
    id:1,
    lat: -36.846580,
    lng: 174.773410,
    title: 'Waldorf Stadium Apartments Hotel',
  },
  {
    id:2,
    lat: -36.975460,
    lng: 174.816870,
    title: 'Airport Garden Inn',
  },
  {
    id:3,
    lat: -37.780841,
    lng: 175.277586,
    title: 'Backpackers Central Hamilton',
  },
  {
    id:4,
    lat: -41.106991,
    lng: 173.002472,
    title: "Serene Studio",
  },
  {
    id:5,
    title: 'Hilton Queenstown Resort & Spa',
    lat: -45.029461,
    lng: 168.727844,
  },
  {
    id:6,
    title: 'Jailhouse Accommodation',
    lat: -43.543424,
    lng: 172.614116,
  },
  {
    id:7,
    title: 'Private Secluded House',
    lat: -45.900988,
    lng: 170.509934,
  },
  {
    id:8,
    lat: -39.478718,
    lng: 176.882508,
    title: 'Albatross Motel',
  },
  {
    id:9,
    title: 'Egmont Eco',
    lat: -39.070399,
    lng: 174.069812,
  }
];

function initMap(){
    map = new google.maps.Map(document.getElementById('details'), {
      center: {lat: -40.9006, lng: 174.8860},
      zoom: 5.3,
      backgroundColor: '#48dbfb',
      styles: [
          {
              featureType: 'water',
              stylers: [
                    { color: '#48dbfb'}
              ]
          },
          {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                  {
                      lightness: '-40'
                    }
              ]
          },
          {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [
                  { color: '#34495e'}
              ]
          },
          {
            featureType: 'road.highway',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
          },
          {
              featureType: 'landscape',
              stylers: [
                 {
                     color: '#2ecc71'
                 }
              ]
          },
          {
              featureType: 'landscape.man_made',
              stylers: [
                  {
                      color: '#27ae60'
                  }
              ]
          },
          {
              featureType: 'transit',
              stylers: [
                  {
                      visibility: 'off'
                  }
              ]
          }
      ]
    });

    for (var i = 0; i < allMarkers.length; i++) {
        var marker = new google.maps.Marker({
            position: {
                lat: allMarkers[i].lat,
                lng: allMarkers[i].lng
            },
            map: map,
            animation: google.maps.Animation.DROP,
            markerTitle: allMarkers[i].title,
            markerID: allMarkers[i].id
        });
        addClickEventToMarker(marker);
    }

    var infobox;
    var firstMarker;
    var secondMarker;
    function addClickEventToMarker(singleMarker){

        if(infobox){
            infobox.close();
        }
        infobox = new google.maps.InfoWindow();
        google.maps.event.addListener(singleMarker, 'click', function(){
            // console.log('position of singleMarker is ' + singleMarker.position);
            infobox.setContent('<div><h3>'+singleMarker.markerTitle+'</h3></div>');
            infobox.open(map, singleMarker);

            for (var i = 0; i < allMarkers.length; i++) {
                if (allMarkers[i].id === singleMarker.markerID) {
                    var markerSingle = allMarkers[i];
                    break;
                }
            }

            $('#details').show();
            $('#details').find('h2').text(markerSingle['title']);
            $('#details').find('p').text(markerSingle['description']);
            $('#mon').text(markerSingle['openingHours']['Monday']);
            $('#tues').text(markerSingle['openingHours']['Tuesday']);

            // singleMarker.setIcon('images/blueMarker.png');

            if(firstMarker){
                // console.log(firstMarker);
                // console.log('first marker has a value');
                if(secondMarker){
                    firstMarker.setIcon('images/redMarker.png');
                    secondMarker.setIcon('images/redMarker.png');
                    secondMarker = null;
                    firstMarker = singleMarker;
                    singleMarker.setIcon('images/blueMarker.png');
                    if(directionsDisplay){
                        directionsDisplay.setMap(null);
                    }
                } else {
                    // console.log('we are now setting second marker');
                    secondMarker = singleMarker;
                    singleMarker.setIcon('images/blueMarker.png');
                    getDirections();
                }
            } else{
                firstMarker = singleMarker;
                singleMarker.setIcon('images/blueMarker.png');
                // console.log('We have now set first Marker');
            }
            // console.log('marker 1 location is ' + firstMarker.position);
            // console.log('marker 2 location is ' + secondMarker.position);

        });
    }
    var directionsDisplay;
    function getDirections(){
        // console.log('show me the directions');
        var directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeOpacity: 0.5,
                strokeColor: 'red',
                strokeWeight: 10
            }
        });

        directionsDisplay.setMap(map);

        directionsService.route({
            origin: firstMarker.position,
            destination: secondMarker.position,
            travelMode: 'DRIVING'
        }, function(response, status){
            if(status == 'OK'){
                // console.log(response.routes[0].legs);
                for (var i = 0; i < response.routes[0].legs.length; i++) {
                    console.log(response.routes[0].legs[i].distance.text);
                    console.log(response.routes[0].legs[i].duration.text);
                }
                directionsDisplay.setDirections(response);


            } else if(status == 'NOT_FOUND'){
                console.log('either your origin or destination is invalid');
            } else if(status == 'ZERO_RESULTS'){
                alert('sorry there is no routes available');
            }
        })
    }

}


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
      // $('input').each(function() {
      //     if(!$(this).val()){
      //         alert('Some fields are empty');
      //        return false;
      //     }
      // });
      $('#options').fadeOut(1000);
      $('#sections').fadeOut(1000);
      $('.search').fadeOut(1000);
      $('#results').fadeIn(1000);
      $('#places').fadeIn(1000);
      $('#filter').fadeIn(300);
      $('#map').fadeIn(300);
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

    $(".back").click(function(){
      $('#options').fadeIn(300);
      $('#sections').fadeIn(300);
      $('.search').fadeIn(300);
      $('#filter').fadeOut(300);
      $('#map').fadeOut(300);
      $('#results').fadeOut(300);
      $('#places').fadeOut(300);
      $('#details').hidden;
    });

    $("#map").click(function(){
      $('#filter').fadeOut(300);
      $('#places').fadeOut(300);
      console.log('working');
      $('#details').fadeIn(300);
    });

//     function myFunction() {
//   var a = document.getElementById("btn1").value;
//   document.getElementById("demo").innerHTML = a
// }

function oneGuest() {
  var a = document.getElementById("btn1").value;
  document.getElementById("guestsTitle").innerHTML = a;
}

function twoGuests() {
  var b = document.getElementById("btn2").value;
  document.getElementById("guestsTitle").innerHTML = b;
}

function threeGuests() {
  var c = document.getElementById("btn3").value;
  document.getElementById("guestsTitle").innerHTML = c;
}

function fourGuests() {
  var d = document.getElementById("btn4").value;
  document.getElementById("guestsTitle").innerHTML = d;
}


google.maps.event.addDomListener(window, 'load', initMap);
