var movies = [
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

var maxNumberOnScreen = 4;
var currentTab = 'Movies';
var pageContainer = document.getElementById('pageContainer');


function showMovies(){
  pageContainer.innerHTML = '<div id="moviesList" class="row"></div>';
  pageContainer.innerHTML += '<div class="row"><div class="col"><nav><ul id="paginationMovies" class="pagination justify-content-end"></ul></nav></div></div>';
  var numberOfPages = Math.ceil(movies.type / maxNumberOnScreen);
  if(numberOfPages > 1){
      var pagination = document.getElementById('paginationAccommodation');
      for (var i = 0; i < numberOfPages; i++) {
          pagination.innerHTML += '<li class="page-item"><a class="page-link" onclick="clickOnPageination('+(i+1)+');" href="#">'+(i+1)+'</a></li>';
      }
  }

  if(maxNumberOnScreen > movies.length){
      showMovieThumbnails(0, movies.length);
  } else {
      showMovieThumbnails(0, maxNumberOnScreen);
  }

}

showMovies();

function clickSort() {
  console.log("You have clicked the button");

}

function clickOnPagination(num){
    console.log('page clicked on ' + num);
    var max = num * maxNumberOnScreen;
    var min = max - maxNumberOnScreen;

    if(max > movies.length){
        max = movies.length;
    }
    showMovieThumbnails(min, max);
}

function showMovieThumbnails(start, end){
  document.getElementById('moviesList').innerHTML = '';
  for (var i = start; i < end; i++) {
        var movie = movies[i];

          var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
            movieCard += '<div class="movieThumb movieThumb2 card h-100" data-id="'+movie.id+'">';
                movieCard += '<img src="images/posters/'+movie.image+'" class="card-img-top" alt="">';
                movieCard += '<div class="card-body">';
                    movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
                movieCard += '</div>';
            movieCard += '</div>';
        movieCard += '</div>';

        document.getElementById('moviesList').innerHTML += movieCard;
    }

    var movieThumbnails = document.getElementsByClassName('movieThumb2');
    for (var i = 0; i < movieThumbnails.length; i++) {
        movieThumbnails[i].onclick = function(){
            var id = parseInt(this.dataset.id);
            showMoreMovie(id);
        };
    }
}

function clickOnPageination(number) {
  console.log("Button " + number + " clicked");

  var max = number * maxNumberOnScreen;
  var min = max - maxNumberOnScreen;

  if (movies.length < max) {
    max = movies.length;
  }

  showMovieThumbnails(min, max);
}

  function showMoreMovie(movieNumber){
      var singleMovie;
      for (var i = 0; i < movies.type; i++) {

          if(movies[i].id === movieNumber){
              singleMovie = movies[i];
              break;
          }
      }

      document.getElementById('posterImage').src = 'images/' + singleMovie.image;
      document.getElementById('movieTitle').innerText = singleMovie.title;
      document.getElementById('movieYear').innerText = singleMovie.year;

      document.getElementById('movieDirectors').innerHTML = '';
      for (var i = 0; i < singleMovie.directors.length; i++) {
          document.getElementById('movieDirectors').innerHTML += '<li class="list-inline-item">'+singleMovie.directors[i]+'</li>';
      }

      document.getElementById('movieBio').innerText = singleMovie.bio;
      document.getElementById('movieLength').innerText = singleMovie.movieLength;

      document.getElementById('movieGenre').innerHTML = '';

      document.getElementById('moviePopUp').style.display = 'flex';
      document.body.style.overflow = 'hidden';

      }

      document.getElementById('close').onclick = function(){
        document.getElementById('moviePopUp').style.display = 'none';
        document.body.style.overflow = 'scroll';
      }


      var pageTabs = document.getElementsByClassName('page-tab');
      for (var i = 0; i < pageTabs.length; i++) {
        pageTabs[i].onclick = function(){
        for (var j = 0; j < pageTabs.length; j++) {
            // console.log(pageTabs[j].classList.contains('active'));
            if(pageTabs[j].classList.contains('active')){
                pageTabs[j].classList.remove('active');
                break;
            }
          }
          if (!this.classList.contains('active')){
              this.classList.add('active');
          }
              changeTab(this.innerText);

              // console.log(this.classList);
              // this.classList.add('newClass', 'secondNewClass');
              // console.log(this.classList.contains('active'));
              // console.log(this.classList.item(1));
              // this.classList.remove('active');
              // this.classList.toggle('active');

      }
}

function changeTab(tabName){
    if(currentTab === tabName){
        console.log('you are still on the same page');
    } else {
        currentTab = tabName;
        pageContainer.innerHTML = '';
        if (tabName === 'Directors') {
            showDirectors();
        } else if (tabName === 'Movies'){

          showMovies();
        }
    }
}

function showDirectors(){
    console.log("show directors");
    pageContainer.innerHTML = '<div class="row"><div class="col"><h1 class="display-4">Directors</h1></div></div>';
}
