$(document).ready(function () {
  $.ajax({
    url: "http://localhost:8200/get-employee",
    type: "GET",
    dataType: "json",
    success: function (data) {
      // Process the fetched data here
      data.forEach((element) => {
        console.log(element);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // Handle errors here
      console.error("Error:", textStatus, errorThrown);
    },
  });
});
