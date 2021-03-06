const Intern = require("../lib/Intern");

test("Does this return a Github user", () => {
  const emp = new Intern("Daniel", 100, "name.email", "school");
  expect(emp.school).toBe("school");
});

test("Does this return a Github user", () => {
  const emp = new Intern("Daniel", 100, "name.email", "school");
  expect(emp.getSchool()).toBe("school");
});

test("Does this return a role for Intern", () => {
  const emp = new Intern("Daniel", 100, "name.email", "school");
  expect(emp.getRole()).toBe("Intern");
});
