
function initialize() {
    var input = document.getElementById('searchTextField');
    var options = {
      types: ['establishment'],
      componentRestrictions: {country: "in"}
     };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
}

google.maps.event.addDomListener(window, 'load', initialize);