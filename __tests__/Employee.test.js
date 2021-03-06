const Employee = require("../lib/Employee");

test("Does this return an new class object", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

test("Does this set a name in the new class", () => {
  const emp = new Employee("Daniel");
  expect(emp.name).toBe("Daniel");
});

test("Does this set an ID in the new class", () => {
  const emp = new Employee("Daniel", 100);
  expect(emp.id).toBe(100);
});

test("Does this set an Email in the new class", () => {
  const emp = new Employee("Daniel", 100, "name.email.com");
  expect(emp.email).toBe("name.email.com");
});

test("Does this function return a name", () => {
  const emp = new Employee("Daniel", 100, "name.email.com");
  expect(emp.getName()).toBe("Daniel");
});

test("Does this function return an ID", () => {
  const emp = new Employee("Daniel", 100, "name.email.com");
  expect(emp.getId()).toBe(100);
});

test("Does this function return an email", () => {
  const emp = new Employee("Daniel", 100, "name.email.com");
  expect(emp.getEmail()).toBe("name.email.com");
});

test("Does this function return a role", () => {
  const emp = new Employee("Daniel", 100, "name.email.com");
  expect(emp.getRole()).toBe("Employee");
});
