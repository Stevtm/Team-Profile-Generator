const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);

		this.officeNumber = officeNumber;
	}

	// override the getRole() method from Employee
	getRole() {
		return "Manager";
	}
}

module.exports = Manager;
