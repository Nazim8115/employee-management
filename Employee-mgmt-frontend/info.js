$(document).ready(function () {
  // Function to get query parameter value by name
  function getQueryParam(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the listItemID from the URL
  var listItemID = getQueryParam("_id");

  //  fetch data using ajaax
  $.ajax({
    url: `http://localhost:8200/employee/:${listItemID}`,
    type: "GET",
    dataType: "json",
    success: function (data) {
      let userInfo = "";
      userInfo += ` <div class="col-lg-6 mb-4 mb-lg-0">
      <img
        src="https://bootdey.com/img/Content/avatar/avatar7.png"
        alt="..."
      />
    </div>
    <div class="col-lg-6 px-xl-10">
      <div
        class="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded"
      >
        <h3 class="h2 text-white mb-0">${
          data.first_name + " " + data.last_name
        }</h3>
        <span class="text-light">${data.department}</span>
      </div>
      <ul class="list-unstyled mb-1-9">
        <li class="mb-2 mb-xl-3 display-28">
          <span
            class="display-26 text-secondary me-2 font-weight-600"
            >Job Title:</span
          >
          Software Engineer
        </li>
        <li class="mb-2 mb-xl-3 display-28">
          <span
            class="display-26 text-secondary me-2 font-weight-600"
            >Salary:</span
          >
          ${data.salary}
        </li>
        <li class="mb-2 mb-xl-3 display-28">
          <span
            class="display-26 text-secondary me-2 font-weight-600"
            >Email:</span
          >
          nazimkhan@mail.com
        </li>
        <li class="mb-2 mb-xl-3 display-28">
          <span
            class="display-26 text-secondary me-2 font-weight-600"
            >Phone:</span
          >
          811-512-1019
        </li>

        <li class="mb-2 mb-xl-3 display-28">
          <span
            class="display-26 text-secondary me-2 font-weight-600"
            >Hire Date:</span
          >
          5/12/2022
        </li>
        <li class="mb-2 display-28">
          <span
            class="display-26 text-secondary me-2 font-weight-600"
            >Employee Status:</span
          >
          Active
        </li>
        <li class="mb-2 display-28">
          <span
            class="display-26 text-secondary me-2 font-weight-600"
            >Leave Balance:</span
          >
          Active
        </li>
        <li class="display-28">
          <span
            class="display-26 text-secondary me-2 font-weight-600"
            >Supervisor:</span
          >
          Nazim khan
        </li>
      </ul>
    </div>`;
      $("#info-data").html(userInfo);
    },

    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error:", textStatus, errorThrown);
    },
  });
});
