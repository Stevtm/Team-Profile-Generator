const inquirer = require("inquirer");

// array of questions for use input
const managerQuestions = [
	// manager questions
	{
		type: "input",
		name: "managerName",
		message: "Please enter the team manager's name.",
		validate: (nameInput) => {
			if (nameInput) return true;
			else {
				console.log("You must enter a name!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "managerID",
		message: "Please enter the team manager's ID.",
		validate: (idInput) => {
			if (!idInput) {
				console.log("You must enter an ID!");
				return false;
			} else if (!parseInt(idInput)) {
				console.log("Please enter a numerical ID!");
				return false;
			} else return true;
		},
	},
	{
		type: "input",
		name: "managerEmail",
		message: "Please enter the team manager's email address.",
		validate: (emailInput) => {
			if (emailInput) return true;
			else {
				console.log("You must enter an email!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "managerOffice",
		message: "Please enter the team manager's office number.",
		validate: (officeInput) => {
			if (officeInput) return true;
			else {
				console.log("Please enter an office number!");
				return false;
			}
		},
	},
];

const promptUser = (questions) => {
	return inquirer.prompt(questions);
};

promptUser(managerQuestions).then((res) => console.log(res));
