$(document).ready(function () {
  $.ajax({
    url: "http://localhost:8200/get-employee",
    type: "GET",
    dataType: "json",
    success: function (data) {
      // Process the fetched data here
      let tableData = "";
      data.map((values) => {
        tableData += `<tr>
       <td>${values.emp_id}</td>
       <td>${values.first_name}</td>
       <td>${values.last_name}</td>
       <td>${values.email}</td>
       <td>${values.phone_number}</td>
       <td>${values.department}</td>
       <td>${values.job_title}</td>
       <td>${values.emp_status}</td>
       <td><img src = "${values.profile_picture}" alt="profile image"/></td>
       </tr>`;
      });
      $("#table-body").html(tableData);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // Handle errors here
      console.error("Error:", textStatus, errorThrown);
    },
  });
});
