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
     title:"Restaurant Kupetchesky"
  });
        
}




// var distance = function(){
// var dist=0;
// console.log(address);
//  var autocomplete = new google.maps.places.Autocomplete(address)
//  console.log(autocomplete);

//    google.maps.event.addListener(autocomplete, 'place_changed', function () {
//    var place = autocomplete.getPlace();
  
//   var addressLat = place.geometry.location.lat();
//     var addressLng = place.geometry.location.lng();
//         var dist = google.maps.geometry.spherical.computeDistanceBetween(google.maps.LatLng(56.329549, 44.026211), 
//              new google.maps.LatLng(addressLat, addressLng));
//              });  
//         return dist;
//   };




   var delivery = function(distance){
       var deliv = 0;
    if(distance < 3000){
       deliv = 500;
    }
      else if(distance>=3000 && distance<7000){
          deliv = 700;
      }
      else {
         deliv = 1000;
      }
             return deliv;
   }

   console.log(delivery(distance))
       
 return{
   initMap: initMap,
 //  getAddress: getAddress,
  distance: distance,
  delivery: delivery,
   
 }
 });

