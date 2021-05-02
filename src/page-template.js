// create the manager card
const generateManager = (personnel) => {
	const manager = personnel.manager[0];

	return `
    <article>
        <h2>${manager.getRole()}</h2>
        <h3>${manager.getName()}</h3>
        <p>${manager.getId()}</p>
        <p>${manager.getEmail()}</p>
        <p>${manager.officeNumber}</p>
    </article>`;
};

// create the engineer cards
const generateEngineer = (personnel) => {
	// generate a card for each of the engineers in the array
	return personnel.engineers
		.map((engineer) => {
			return `
            <article>
                <h2>${engineer.getRole()}</h2>
                <h3>${engineer.getName()}</h3>
                <p>${engineer.getId()}</p>
                <p>${engineer.getEmail()}</p>
                <p>${engineer.getGithub()}</p>
            </article>`;
		})
		.join("");
};

// create the intern cards
const generateIntern = (personnel) => {
	// geneate a card for each of the interns in the array
	return personnel.interns
		.map((intern) => {
			return `
        <article>
            <h2>${intern.getRole()}</h2>
            <h3>${intern.getName()}</h3>
            <p>${intern.getId()}</p>
            <p>${intern.getEmail()}</p>
            <p>${intern.getSchool()}</p>
        </article>`;
		})
		.join("");
};

// generate the page
module.exports = (personnel) => {
	return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
        </head>
        <body>
            ${generateManager(personnel)}
            ${generateEngineer(personnel)}
            ${generateIntern(personnel)}
        </body>
    </html>
    `;
};
