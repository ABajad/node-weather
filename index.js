const request = require('request');

let apiKey = '30584515b37927e8b77f3dcbf814a6e3';
let city = 'delhi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err){
      console.log('error:', err);
    } else {
      console.log('body:', body);
    }
  });

