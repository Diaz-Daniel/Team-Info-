const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    // GitHub username
    this.github = github;
  }

  // getGithub()`
  getGithub() {
    return this.github;
  }

  // * `getRole()`&mdash;overridden to return `'Engineer'`
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
