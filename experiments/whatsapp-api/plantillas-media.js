var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://graph.facebook.com/v18.0/246282258561957/messages',
  'headers': {
    'Authorization': 'Bearer EAAVVn4dvyJsBOwh9zPsBbyA6k3shKgurTDQvu8ZABU3eUIyV3lV4oF0uNfm05dkWZAqHcpLZA9GKuS52VZCUwZBJwBg4a3FKZAIKNN0ugUnbW4Cox5cQ2KZAZBBAeFyvEW4dD0TiZByxRhi0xSjuPbdBGkAwLrFIxyXz4w9Fwrn5YsDIDTamzc7Qyxpqt2WZCSZBZBEE',
    'Content-Type': 'application/json',
    'Cookie': 'ps_l=0; ps_n=0'
  },
  body: JSON.stringify({
    "messaging_product": "whatsapp",
    "to": "525625526851",
    "type": "image",
    "image": {
      "link": "https://storage.googleapis.com/aida-mx-core-dev-public-static/source/img/logo.png"
    }
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

//Platinllas Media = Imagenes, videos, audios y PDFs
//Para enviar Media: cambiar lo que diga "image" por "video", o en su defecto document(PDFs, word, txt, etc) o audio
//video: https://storage.googleapis.com/aida-mx-dev-conversacion-files/onboarding/aida_media_onboarding_welcome.MP4
//image: https://storage.googleapis.com/aida-mx-core-dev-public-static/source/img/logo.png