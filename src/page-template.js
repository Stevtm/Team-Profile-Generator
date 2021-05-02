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
        </body>
    </html>
    `;
};
