const EmployeeModel = require("../models/employee.js");
// create new employee
class employeeController {
  static createEmployee = async (req, res) => {
    try {
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
      } = req.body;
      const imageUrl = req.file.filename;
      EmployeeModel.create({
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
        imageUrl,
      });
      res.status(201).json({ message: "Employee created successfully" });
    } catch (error) {
      res.status(401).json({ message: "server error" });
    }
  };

  static getAllEmployee = async (req, res) => {
    try {
      const employees = await EmployeeModel.find();
      res.json(employees);
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = employeeController;
