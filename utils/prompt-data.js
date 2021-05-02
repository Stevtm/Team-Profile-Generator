// arrays of questions for prompts
// manager questions
const managerQuestions = [
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

// engineer questions
const engineerQuestions = [
	{
		type: "input",
		name: "engineerName",
		message: "Please enter the engineer's name.",
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
		name: "engineerID",
		message: "Please enter the engineer's ID.",
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
		name: "engineerEmail",
		message: "Please enter the engineer's email address.",
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
		name: "engineerGithub",
		message: "Please enter the engineer's GitHub username.",
		validate: (githubInput) => {
			if (githubInput) return true;
			else {
				console.log("Please enter a valid username!");
				return false;
			}
		},
	},
];

// intern questions
const internQuestions = [
	{
		type: "input",
		name: "internName",
		message: "Please enter the intern's name.",
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
		name: "internID",
		message: "Please enter the intern's ID",
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
		name: "internEmail",
		message: "Please enter the intern's email address.",
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
		name: "internSchool",
		message: "Please enter the school the intern attends.",
		validate: (schoolInput) => {
			if (!schoolInput) {
				console.log("You must enter a school!");
				return false;
			} else return true;
		},
	},
];

module.exports = {
	managerQuestions,
	engineerQuestions,
	internQuestions,
};
