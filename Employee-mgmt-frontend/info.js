$(document).ready(function () {
  // Function to get query parameter value by name
  function getQueryParam(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the listItemID from the URL
  var listItemID = getQueryParam("_id");
  console.log(listItemID);

//  fetch data using ajaax 
$.ajax({
    url:,
    type:"GET",
    dataType:"json"
}) 
 
  
});
