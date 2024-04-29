var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://lookaside.fbsbx.com/whatsapp_business/attachments/?mid=1781240519057100&ext=1708550090&hash=ATuZdjk28iDqHZ7waU4UnLqcY6OBp6wRq6Gq0s0b_Xs1UQ',
  'headers': {
    'Authorization': 'Bearer EAAKzNs0F3yEBOz0249tgLwaJ6Rl3eeWr5MM9mibPDwJV0wF8ZCLNZABMUVBm7q9DeurZCSCIzBaCTyrS4PhyO42dquJzBzZBT5y6BEnPrEUvDnZAId1SIVSIlZCz6q7RiRFQkvBYblZAiD5TICMRIabjMZAhx3Ef2ZArFzn4VDZCWXyVNi51npUhddHZBdyCxV35WHGT5e1eBCUUOaZBbejSvobepcUgeCAZD'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
