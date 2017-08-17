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
  };



  var delivery = function () {
    var deliv = 0;

  var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(56.6, 44.1),
  new google.maps.LatLng(56.0, 43.9));


var options = {
  bounds: defaultBounds,
  types: ['establishment'],
  componentRestrictions: {country: 'ru'}
};
    
    var autocomplete = new google.maps.places.Autocomplete(address, options);
    
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      var place = autocomplete.getPlace();
    console.log(place);
      var addressLat = place.geometry.location.lat();
     
    console.log(addressLat);
      var addressLng = place.geometry.location.lng();
    console.log(addressLng);
      var dist = Math.round(google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(56.329549, 44.026211),new google.maps.LatLng(addressLat, addressLng)));
    
      console.log(dist);
  
     if (dist < 3000)
         deliv = 500;
     else if (dist >= 3000 && dist < 7000) 
          deliv = 700;
    else 
          deliv = 1000;
    
    console.log(deliv);
      return deliv;
  });

  };

  return {
    initMap: initMap,
    delivery: delivery
  }
});


