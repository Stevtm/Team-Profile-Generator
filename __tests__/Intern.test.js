const Intern = require("../lib/Intern");

// inherits from intern, school, getSchool(), getRole()

test("creates an intern object", () => {
	const intern = new Intern("John", 2, "john@smith.com", "Queen's");

	expect(intern.name).toBe("John");
	expect(intern.id).toBe(2);
	expect(intern.email).toBe("john@smith.com");
	expect(intern.school).toBe("Queen's");
});

test("tests the getName() method", () => {
	const intern = new Intern("John", 2, "john@smith.com", "Queen's");

	expect(intern.getName()).toBe("John");
});

test("tests the getId() method", () => {
	const intern = new Intern("John", 2, "john@smith.com", "Queen's");

	expect(intern.getId()).toBe(2);
});

test("tests the getEmail() method", () => {
	const intern = new Intern("John", 2, "john@smith.com", "Queen's");

	expect(intern.getEmail()).toBe("john@smith.com");
});

test("tests the getSchool() method", () => {
	const intern = new Intern("John", 2, "john@smith.com", "Queen's");

	expect(intern.getSchool()).toBe("Queen's");
});

test("tests the getRole() method", () => {
	const intern = new Intern("John", 2, "john@smith.com", "Queen's");

	expect(intern.getRole()).toBe("Intern");
});
