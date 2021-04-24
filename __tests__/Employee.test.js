const Employee = require("../lib/Employee");

test("creates an employee object", () => {
	const employee = new Employee("John");

	expect(employee.name).toBe("John");
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
});

// name, id, email, getName(), getId(), getEmail(), getRole()
