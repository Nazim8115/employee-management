const EmployeeModel = require("../models/employee.js");
// create new employee
class employeeController {
  static createEmployee = async (req, res) => {
    try {
      const {
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

      const emp_id = (await EmployeeModel.find()).length + 1;
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
      res
        .status(201)
        .redirect("http://localhost:5500/Employee-mgmt-frontend/index.html");
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

  static getEmployeeById = async (req, res) => {
    let x = req.params.id;
    let y = x.split(":");

    try {
      const employee = await EmployeeModel.findById(y[1]);

      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

  static deleteEmloyeeByID = async (req, res) => {
    try {
      const re = await EmployeeModel.findByIdAndDelete(req.params.id);
      if (!re) {
        res.send("not found");
      }
      res.redirect("http://localhost:5500/Employee-mgmt-frontend/index.html");
    } catch (error) {
      res.send("server error ");
    }
  };
}
module.exports = employeeController;
