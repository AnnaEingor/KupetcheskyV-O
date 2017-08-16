orderApp.factory("mapService", function () {

  var initMap = function () {
    var centerLatLng = new google.maps.LatLng(56.329549, 44.026211);
    var mapOptions = {
      center: centerLatLng,
      zoom: 12
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: centerLatLng,
      map: map,
      title: "Restaurant Kupetchesky"
    });

    
  }

  var distance = function () {
    var dist = 0;

    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(56.489, 43.601),
      new google.maps.LatLng(56.36, 44.074)    
    );

    var options = {
      bounds: defaultBounds
    };
    
    var autocomplete = new google.maps.places.Autocomplete(address, options);

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      var place = autocomplete.getPlace();

      var addressLat = place.geometry.location.lat();
      var addressLng = place.geometry.location.lng();
      var dist = google.maps.geometry.spherical.computeDistanceBetween(google.maps.LatLng(56.329549, 44.026211),
        new google.maps.LatLng(addressLat, addressLng));
      
    });

    return dist;
  };

  var delivery = function (x) {
     var deliv = 0;
    if (x < 3000) {
      deliv = 500;
    } else if (x >= 3000 && x < 7000) {
      deliv = 700;
    } else {
      deliv = 1000;
    }
    return deliv;
  };

  return {
    initMap: initMap,
    distance: distance,
    delivery: delivery

  }
});


