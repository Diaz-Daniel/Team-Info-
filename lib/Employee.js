class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //  `name`
  getName() {
    return this.name;
  }

  // * `id`
  getId() {
    return this.id;
  }

  // * `email`
  getEmail() {
    return this.email;
  }
  //getRole() return "Employee"
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
