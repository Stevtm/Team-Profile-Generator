const Engineer = require("../lib/Engineer");
// inherit from Employee, github, getGithub(), getRole()

test("creates an engineer object", () => {
	const engineer = new Engineer("John", 2, "john@smith.com", "jsmith");

	expect(engineer.name).toBe("John");
	expect(engineer.id).toBe(2);
	expect(engineer.email).toBe("john@smith.com");
	expect(engineer.github).toBe("jsmith");
});

test("tests the getName() method", () => {
	const engineer = new Engineer("John", 2, "john@smith.com", "jsmith");

	expect(engineer.getName()).toBe("John");
});

test("tests the getId() method", () => {
	const engineer = new Engineer("John", 2, "john@smith.com", "jsmith");

	expect(engineer.getId()).toBe(2);
});

test("tests the getEmail() method", () => {
	const engineer = new Engineer("John", 2, "john@smith.com", "jsmith");

	expect(engineer.getEmail()).toBe("john@smith.com");
});

test("tests the getGithub() method", () => {
	const engineer = new Engineer("John", 2, "john@smith.com", "jsmith");

	expect(engineer.getGithub()).toBe("jsmith");
});

test("tests the getRole() method", () => {
	const engineer = new Engineer("John", 2, "john@smith.com", "jsmith");

	expect(engineer.getRole()).toBe("Engineer");
});
