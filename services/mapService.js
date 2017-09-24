orderApp.factory("mapService", function () {
  console.log("mapService");
  
var initMap = function () {
     var centerLatLng = new google.maps.LatLng(56.329549, 44.026211);
     var mapOptions = {
       center: centerLatLng,
       zoom: 12
     };
     var map = new google.maps.Map(document.getElementById('map'), mapOptions);

     var marker = new google.maps.Marker({
       position: centerLatLng,
       map: map,
       title: "Restaurant Kupetchesky"
     });
     
     var input = document.getElementById('address');
     var autocomplete = new google.maps.places.Autocomplete(input);
     autocomplete.bindTo('bounds', map);
     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  
     var infowindow = new google.maps.InfoWindow();

      
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  
    // Get the full place details when the user selects a place from the
    // list of suggestions.
   
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      infowindow.close();
     
     var place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }
  
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
  
      // Set the position of the marker using the place ID and location.
      marker.setPlace(/** @type {!google.maps.Place} */ ({
        placeId: place.place_id,
        location: place.geometry.location
        
      }));
      marker.setVisible(true);
  
      infowindow.setContent
     ('<div><strong>' + place.name + '</strong><br>' + '<br>' +
            place.formatted_address + '</div>');
  infowindow.open(map, marker);

    
      var dist = function(){
        var addressLat = place.geometry.location.lat();
        var addressLng= place.geometry.location.lng();
        return Math.round(google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(56.329549, 44.026211),new google.maps.LatLng(addressLat, addressLng)));
        };
console.log(dist());
     
       function delivery(d){
         var deliv = 0;
      if (d < 3000) {
            deliv = 500
            }
           else if (d >= 3000 && d < 7000) {
            deliv = 700
          }
           else if(d>=7000 && d < 10000){
         deliv = 1000;
         }
           else {
              deliv = 0;
             alert("in your case, the cost of delivery will be determined by the manager");
            }
            return deliv;
      };
console.log(delivery(dist()));
     
    });
  }
  
  // Run the initialize function when the window has finished loading.
  google.maps.event.addDomListener(window, 'load', initMap);
 
return initMap;
  
});



   
  

    


