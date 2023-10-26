const Employee = require("../models/employee.js");
// create new employee
class employeeController {
  static createEmployee = async (req, res) => {
    console.log(req.body);
    const {
      emp_id,
      first_name,
      last_name,
      email,
      phone_number,
      address,
      department,
      job_title,
      salary,
      hire_date,
      emp_status,
      supervisor,
      leave_balance,
      profile_picture,
    } = req.body;
    console.log(salary);
    console.log(profile_picture);
    Employee.create({
      emp_id,
      first_name,
      last_name,
      email,
      phone_number,
      address,
      department,
      job_title,
      salary,
      hire_date,
      emp_status,
      supervisor,
      leave_balance,
      profile_picture,
    });
    res.status(201).json({ message: "Employee created successfully" });
  };
}
module.exports = employeeController;
