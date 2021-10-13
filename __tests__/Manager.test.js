const Manager = require("../lib/Manager");

test("Does this return a Github user", () => {
  const emp = new Manager("Daniel", 100, "name.email", "officeNum");
  expect(emp.officeNum).toBe("officeNum");
});

test("Does this return a Github user", () => {
  const emp = new Manager("Daniel", 100, "name.email", "officeNum");
  expect(emp.getofficeNum()).toBe("officeNum");
});

test("Does this return a role for Manager", () => {
  const emp = new Manager("Daniel", 100, "name.email", "officeNum");
  expect(emp.getRole()).toBe("Manager");
});
