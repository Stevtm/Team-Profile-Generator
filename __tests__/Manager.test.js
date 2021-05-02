const Manager = require("../lib/Manager");
// extends Employee, officeNumber, getRole()

test("creates a manager object", () => {
	const manager = new Manager("John", 2, "john@smith.com", 101);

	expect(manager.name).toBe("John");
	expect(manager.id).toBe(2);
	expect(manager.email).toBe("john@smith.com");
	expect(manager.officeNumber).toBe(101);
});

test("tests the getName() method", () => {
	const manager = new Manager("John", 2, "john@smith.com", 101);

	expect(manager.getName()).toBe("John");
});

test("tests the getId() method", () => {
	const manager = new Manager("John", 2, "john@smith.com", 101);

	expect(manager.getId()).toBe(2);
});

test("tests the getEmail() method", () => {
	const manager = new Manager("John", 2, "john@smith.com", 101);

	expect(manager.getEmail()).toBe("john@smith.com");
});

test("tests the getRole() method", () => {
	const manager = new Manager("John", 2, "john@smith.com", 101);

	expect(manager.getRole()).toBe("Manager");
});
