function initMap() {
    // The location of Uluru
    var uluru = {lat: 48.739586, lng: 16.749777};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 5, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

  // Smooth Scrolling

$('#main-nav a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });

  // Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#main-nav').style.opacity = 0.9;
    } else {
      document.querySelector('#main-nav').style.opacity = 1;
    }
  });