const inquirer = require("inquirer");

// import methods
const {
	managerQuestions,
	engineerQuestions,
	internQuestions,
} = require("./utils/prompt-data");
const generatePage = require("./src/page-template");
const writeFile = require("./utils/generate-site");

// import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// create an array to hold all personnel information
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
	console.log(`
	=============
	Add a Manager
	=============`);

	// prompt the user to answer the manager questions
	return inquirer.prompt(managerQuestions).then((managerData) => {
		const { managerName, managerID, managerEmail, managerOffice } = managerData;
		const manager = new Manager(
			managerName,
			managerID,
			managerEmail,
			managerOffice
		);
		personnel.manager.push(manager);
	});
};

const promptEngineer = () => {
	console.log(`
	==================
	Add a New Engineer
	==================`);

	return inquirer
		.prompt(engineerQuestions)
		.then((engineerData) => {
			const {
				engineerName,
				engineerID,
				engineerEmail,
				engineerGithub,
			} = engineerData;
			const engineer = new Engineer(
				engineerName,
				engineerID,
				engineerEmail,
				engineerGithub
			);
			personnel.engineers.push(engineer);
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
			const { internName, internID, internEmail, internSchool } = internData;
			const intern = new Intern(
				internName,
				internID,
				internEmail,
				internSchool
			);
			personnel.interns.push(intern);
		})
		.then(promptAddEmployeeQuestion);
};

promptManager()
	.then(promptAddEmployeeQuestion)
	.then((personnel) => {
		return generatePage(personnel);
	})
	.then((page) => writeFile(page));
