const Employee = require("../lib/Employee");

test("creates an employee object", () => {
	const employee = new Employee("John", 2, "john@smith.com");

	expect(employee.name).toBe("John");
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.id).toEqual(2);
	expect(employee.email).toEqual(expect.any(String));
	expect(employee.email).toEqual("john@smith.com");
});

// name, id, email, getName(), getId(), getEmail(), getRole()
