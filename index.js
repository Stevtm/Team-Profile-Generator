const inquirer = require("inquirer");
const {
	managerQuestions,
	engineerQuestions,
	internQuestions,
} = require("./utils/prompt-data");

// create an object to hold all personnel information
const personnel = {
	manager: [],
	engineers: [],
	interns: [],
};

const promptAddEmployeeQuestion = () => {
	return inquirer
		.prompt([
			{
				type: "list",
				name: "addEmployee",
				message: "Would you like to add an Engineer or an Intern?",
				choices: [
					"Add an Engineer",
					"Add an Intern",
					"Don't add any Employees",
				],
				default: "Add an Engineer",
			},
		])
		.then((addEmployeeData) => {
			if (addEmployeeData.addEmployee === "Add an Engineer") {
				return promptEngineer(personnel);
			} else if (addEmployeeData.addEmployee === "Add an Intern") {
				return promptIntern(personnel);
			} else {
				return personnel;
			}
		});
};

const promptManager = () => {
	// prompt the user to answer the manager questions
	return inquirer.prompt(managerQuestions).then((managerData) => {
		personnel.manager.push(managerData);
	});
};

const promptEngineer = () => {
	console.log(`
	=================
	Add a New Engineer
	=================`);

	return inquirer
		.prompt(engineerQuestions)
		.then((engineerData) => {
			personnel.engineers.push(engineerData);
		})
		.then(promptAddEmployeeQuestion);
};

const promptIntern = () => {
	console.log(`
	=================
	Add a New Intern
	=================`);

	return inquirer
		.prompt(internQuestions)
		.then((internData) => {
			personnel.interns.push(internData);
		})
		.then(promptAddEmployeeQuestion);
};

promptManager()
	.then(promptAddEmployeeQuestion)
	.then((personnel) => {
		console.log(personnel);
	});
