var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://graph.facebook.com/v19.0/1781240519057100/',
  'headers': {
    'Authorization': 'Bearer EAAVVn4dvyJsBOwh9zPsBbyA6k3shKgurTDQvu8ZABU3eUIyV3lV4oF0uNfm05dkWZAqHcpLZA9GKuS52VZCUwZBJwBg4a3FKZAIKNN0ugUnbW4Cox5cQ2KZAZBBAeFyvEW4dD0TiZByxRhi0xSjuPbdBGkAwLrFIxyXz4w9Fwrn5YsDIDTamzc7Qyxpqt2WZCSZBZBEE',
    'Cookie': 'ps_l=0; ps_n=0'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
