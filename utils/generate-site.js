const fs = require("fs");

// function to generate an HTML file to the dist folder, given the file contents (generated from src/page-template.js)
const writeFile = (fileContent) => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./dist/index.html", fileContent, (err) => {
			// if there is an error, reject the Promise and send the error to the Promise's `.catch()` method
			if (err) {
				reject(err);
				return;
			}

			// if everything went well, resolve the Promise and send the successful data to the `.then()` method
			resolve({
				ok: true,
				message: "File created!",
			});
		});
	});
};

// function to copy the CSS file from /src to /dist
const copyFile = () => {
	return new Promise((resolve, reject) => {
		fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
			if (err) {
				reject(err);
				return;
			}
			resolve({
				ok: true,
				message: "File copied!",
			});
		});
	});
};

module.exports = { writeFile, copyFile };
