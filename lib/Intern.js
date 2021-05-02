const Employee = require("./Employee");

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}

	// return the intern's school
	getSchool() {
		return this.school;
	}

	// override the getRole() method from Employee
	getRole() {
		return "Intern";
	}
}

module.exports = Intern;
