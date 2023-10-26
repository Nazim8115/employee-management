const Employee = require("../models/employee.js");
// create new employee
class employeeController {
  static createEmployee = async (req, res) => {
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

    const newEmployee = new Employee({
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
    await newEmployee.save();
    res.status(201).json({ message: "Employee created successfully" });
  };
}
