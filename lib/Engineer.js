const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}

	// override the getRole() method from Employee
	getRole() {
		return "Engineer";
	}

	// return the github username
	getGithub() {
		return this.github;
	}
}

module.exports = Engineer;
