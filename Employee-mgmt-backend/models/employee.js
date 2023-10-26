const mongoose = require("mongoose");
// define employee schema

const employeeSchema = new mongoose.Schema({
  emp_id: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
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
    type: Date,
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
  profile_picture: {
    String,
  },
});

const EmployeeModel = mongoose.model("employee", employeeSchema);
module.exports = EmployeeModel;
