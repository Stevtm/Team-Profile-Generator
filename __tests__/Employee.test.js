const Employee = require("../lib/Employee");
// name, id, email, getName(), getId(), getEmail(), getRole()

test("creates an employee object", () => {
	const employee = new Employee("John", 2, "john@smith.com");

	expect(employee.name).toBe("John");
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.id).toEqual(2);
	expect(employee.email).toEqual(expect.any(String));
	expect(employee.email).toEqual("john@smith.com");
});

test("tests the getName() method", () => {
	const employee = new Employee("John", 2, "john@smith.com");

	expect(employee.getName()).toBe("John");
});

test("tests the getId() method", () => {
	const employee = new Employee("John", 2, "john@smith.com");

	expect(employee.getId()).toBe(2);
});

test("tests the getEmail() method", () => {
	const employee = new Employee("John", 2, "john@smith.com");

	expect(employee.getEmail()).toBe("john@smith.com");
});

test("tests the getRole() method", () => {
	const employee = new Employee("John", 2, "john@smith.com");

	expect(employee.getRole()).toBe("Employee");
});
