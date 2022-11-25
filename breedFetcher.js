const request = require('request');

const args = process.argv.slice(2);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args;


request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log(error);
  }

  args ? console.log(data[0].description) : console.log('Breed not found.');
});

