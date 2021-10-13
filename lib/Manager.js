const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    // Office Number
    this.officeNum = officeNum;
  }

  // getGithub()`
  getOfficeNum() {
    return this.officeNum;
  }

  // getRole() Manager
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

// `officeNumber`

//  `getRole()`&mdash;overridden to return `'Manager'`
