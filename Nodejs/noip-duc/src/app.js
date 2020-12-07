// Change the USERNAME, PASSWORD and HOSTNAME variables in the '.env' file

require('dotenv').config(); // Load the environement variables

const request = require('request'); // Require the package to send the get request

const auth = `Basic ${Buffer.from(
    `${process.env.USERNAME}:${process.env.PASSWORD}`
).toString('base64')}`; // Create the base64 basic auth variable

const options = {
    url: `http://dynupdate.no-ip.com/nic/update?hostname=${process.env.HOSTNAME}&myip`,
    headers: {
        Authorization: auth,
    },
}; // Define the headers needed to send the request

request(options, (err, res, body) => {
    console.log(body);
}); // Send the request and log the responded in console
