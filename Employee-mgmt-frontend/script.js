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
       <td><img src = "/Employee-mgmt-backend/public/images/${values.imageUrl}" alt="profile image"/></td>
       <td>
        <form
            style="display: inline-block"
            action="./info.html"
            method="get"
            id = "userID";>
            <input type="hidden" value = "${values._id}" name = "_id" visibility="hide">
            <button type ="submit" class = "btn">
              <i class="fa-regular fa-eye" style="color: #100f4e"></i>
            </button>
        </form>
        <i
       class="fa-solid fa-pen-to-square"
       style="color: #100f4e"
        ></i> <i class="fa-solid fa-trash" style="color: #db0c40"></i>
      </td>
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
