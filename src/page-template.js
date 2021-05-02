// create the manager card
const generateManager = (personnel) => {
	const manager = personnel.manager[0];

	return `
    <article class="card">
        <div class="card-header">
            <h2>${manager.getName()}</h2>
            <h3>${manager.getRole()}</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>ID: </b>${manager.getId()}</li>
            <li class="list-group-item"><b>Email: </b>${manager.getEmail()}</li>
            <li class="list-group-item">
                <b>Office Number: </b>${manager.officeNumber}
            </li>
        </ul>
    </article>`;
};

// create the engineer cards
const generateEngineer = (personnel) => {
	// generate a card for each of the engineers in the array
	return personnel.engineers
		.map((engineer) => {
			return `
            <article class="card">
            <div class="card-header">
                <h2>${engineer.getName()}</h2>
                <h3>${engineer.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>ID: </b>${engineer.getId()}</li>
                <li class="list-group-item"><b>Email: </b>${engineer.getEmail()}</li>
                <li class="list-group-item">
                    <b>GitHub: </b>${engineer.getGithub()}
                </li>
            </ul>
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
            <article class="card">
            <div class="card-header">
                <h2>${intern.getName()}</h2>
                <h3>${intern.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>ID: </b>${intern.getId()}</li>
                <li class="list-group-item"><b>Email: </b>${intern.getEmail()}</li>
                <li class="list-group-item">
                    <b>School: </b>${intern.getSchool()}
                </li>
            </ul>
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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <header class="bg-dark text-light">
                <h1>Team Profile</h1>
            </header>
            <main>
                <section>
                    ${generateManager(personnel)}
                    ${generateEngineer(personnel)}
                    ${generateIntern(personnel)}
                </section>
            </main>
        </body>
    </html>
    `;
};
