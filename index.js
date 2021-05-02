const inquirer = require("inquirer");

// import methods
const {
	managerQuestions,
	engineerQuestions,
	internQuestions,
} = require("./utils/prompt-data");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");

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

// prompt that asks the user if they want to add an (additional) Engineer or Intern
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
					"Don't add any more Employees",
				],
				default: "Add an Engineer",
			},
		])
		.then((addEmployeeData) => {
			// to add an engineer, call promptEngineer() to prompt for engineer data
			if (addEmployeeData.addEmployee === "Add an Engineer") {
				return promptEngineer(personnel);
			}
			// to add an intern, call promptIntern() to prompt for intern data
			else if (addEmployeeData.addEmployee === "Add an Intern") {
				return promptIntern(personnel);
			}
			// if no more employees are added, return the personnel object
			else {
				return personnel;
			}
		});
};

// function that prompts the user with the manager questions and creates a new Manager object
const promptManager = () => {
	console.log(`
	=============
	Add a Manager
	=============`);

	// prompt the user to answer the manager questions
	return inquirer.prompt(managerQuestions).then((managerData) => {
		const { managerName, managerID, managerEmail, managerOffice } = managerData;

		// create new Manager object
		const manager = new Manager(
			managerName,
			managerID,
			managerEmail,
			managerOffice
		);

		// push Manager object to personnel object
		personnel.manager.push(manager);
	});
};

// function that prompts the user with the engineer questions and creates a new Engineer object
const promptEngineer = () => {
	console.log(`
	==================
	Add a New Engineer
	==================`);

	return (
		inquirer
			.prompt(engineerQuestions)
			.then((engineerData) => {
				const {
					engineerName,
					engineerID,
					engineerEmail,
					engineerGithub,
				} = engineerData;

				// create a new Engineer object
				const engineer = new Engineer(
					engineerName,
					engineerID,
					engineerEmail,
					engineerGithub
				);

				// push Engineer object to personnel object
				personnel.engineers.push(engineer);
			})
			// ask the user if they want to add additonal Engineers or Interns
			.then(promptAddEmployeeQuestion)
	);
};

// function that prompts the user with intern questions and creates a new Intern object
const promptIntern = () => {
	console.log(`
	=================
	Add a New Intern
	=================`);

	return (
		inquirer
			.prompt(internQuestions)
			.then((internData) => {
				const { internName, internID, internEmail, internSchool } = internData;

				// create new Intern object
				const intern = new Intern(
					internName,
					internID,
					internEmail,
					internSchool
				);

				// push Intern object to personnel object
				personnel.interns.push(intern);
			})
			// ask the user if they want to add additional Engineers or Intern
			.then(promptAddEmployeeQuestion)
	);
};

// EXECUTION FLOW
// start by prompting the user for the manager input
promptManager()
	// ask the user to add Engineers and Interns (this prompt flow continues until the user is done, then returns the populated personnel object)
	.then(promptAddEmployeeQuestion)
	// generate the HTML content based on the personnel object
	.then((personnel) => {
		return generatePage(personnel);
	})
	// write the HTML content to an HTML file at dist/
	.then((page) => writeFile(page))
	// copy the CSS file from src/ to dist/
	.then((writeFileResponse) => {
		console.log(writeFileResponse);
		return copyFile();
	})
	// return a positive response for the copy action
	.then((copyFileReponse) => {
		console.log(copyFileReponse);
	})
	// catch any errors that occur during the process
	.catch((err) => {
		console.log(err);
	});
