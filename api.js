var axios = require('axios');

var config = {
  method: 'GET',
  url: 'https://hcheat.zendesk.com//api/v2/tickets',
  //    
  headers: {
	'Content-Type': 'application/json',
	'Authorization': 'Basic <auth-value>', // Base64 encoded "username:password"
  },
  params: {
    'external_id': '',
  },
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});