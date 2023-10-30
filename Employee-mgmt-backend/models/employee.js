const mongoose = require("mongoose");
// define employee schema

const employeeSchema = new mongoose.Schema({
  emp_id: {
    type: String,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  address: {
    type: String,
  },
  department: {
    type: String,
  },
  job_title: {
    type: String,
  },
  salary: {
    type: Number,
  },
  hire_date: {
    type: String,
  },
  emp_status: {
    type: String,
    required: true,
  },
  supervisor: {
    type: String,
  },
  leave_balance: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
});

const EmployeeModel = mongoose.model("employee", employeeSchema);
module.exports = EmployeeModel;
