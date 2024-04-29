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
    "type": "interactive",
    "interactive": {
      "type": "list",
      "header": {
        "type": "text",
        "text": "HEADER_TEXT"
      },
      "body": {
        "text": "BODY_TEXT"
      },
      "footer": {
        "text": "FOOTER_TEXT"
      },
      "action": {
        "button": "BUTTON_TEXT",
        "sections": [
          {
            "title": "SECTION_1_TITLE",
            "rows": [
              {
                "id": "SECTION_1_ROW_1_ID",
                "title": "SECTION_1_ROW_1_TITLE",
                "description": "SECTION_1_ROW_1_DESCRIPTION"
              },
              {
                "id": "SECTION_1_ROW_2_ID",
                "title": "SECTION_1_ROW_2_TITLE",
                "description": "SECTION_1_ROW_2_DESCRIPTION"
              }
            ]
          },
          {
            "title": "SECTION_2_TITLE",
            "rows": [
              {
                "id": "SECTION_2_ROW_1_ID",
                "title": "SECTION_2_ROW_1_TITLE",
                "description": "SECTION_2_ROW_1_DESCRIPTION"
              },
              {
                "id": "SECTION_2_ROW_2_ID",
                "title": "SECTION_2_ROW_2_TITLE",
                "description": "SECTION_2_ROW_2_DESCRIPTION"
              }
            ]
          }
        ]
      }
    }

  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
