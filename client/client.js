var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'http://localhost:3000/text-analyzer',
    body: {
        text: 'some text'
    },
    json: true
};

rp(options)
    .then((body) => {
        console.log('Text after processing: ', body.text);
    })
    .catch(err => console.error('Request error', err));