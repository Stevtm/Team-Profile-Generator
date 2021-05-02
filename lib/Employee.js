class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}

	// return the name of the employee
	getName() {
		return this.name;
	}

	// return the ID of the employee
	getId() {
		return this.id;
	}

	// return the email address of the employee
	getEmail() {
		return this.email;
	}

	// return the role of the employee
	// NOTE: This is overridden by each type class
	getRole() {
		return "Employee";
	}
}

module.exports = Employee;
