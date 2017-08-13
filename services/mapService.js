orderApp.factory("mapService", function () {
var initMap = function initMap() {
    var centerLatLng = new google.maps.LatLng(56.329549, 44.026211);
    var mapOptions = {
         center: centerLatLng, 
         zoom: 12               
     };
     var map = new google.maps.Map(document.getElementById("map"), mapOptions);

     var marker = new google.maps.Marker({
     position: centerLatLng,
     map: map,
     title:"Restaurant Kupetchesky"
  });
        
}

 var getAddress = function (){
    return address;
 };

var distance = function distance(){
      var dist = 0;
 var autocomplete = new google.maps.places.Autocomplete(address);
 google.maps.event.addListener(autocomplete, 'place_changed', function () {
  var place = autocomplete.getPlace();
  var addressLat = place.geometry.location.lat();
  var addressLng = place.geometry.location.lng();
      var dist = google.maps.geometry.spherical.computeDistanceBetween(google.maps.LatLng(56.329549, 44.026211), 
            new google.maps.LatLng(addressLat, addressLng));
            });  
       return dist;
 };

   var delivery = function delivery(dist){
   var deliv = 0;   
    if(dist < 3000){
       deliv = 500;
    }
      else if(dist>=3000 && dist<7000){
          deliv = 700;
      }
      else {
         deliv = 1000;
      }
         return deliv;
  }

 return{
   initMap: initMap,
   getAddress: getAddress,
   distance: distance,
   delivery: delivery
   
 }
 });

