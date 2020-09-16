const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'});

var lambda = new AWS.Lambda();

exports.handler = async (event) => {
    let {number} = JSON.parse(event.body);
    let payload = JSON.stringify({operation: "multiply",
        input: {
            operator1: number,
            operator2: number
        }
    });
    
    let params = {
        FunctionName: "Calculator",
        InvocationType: "RequestResponse", //synchronous response
        Payload: payload
    };
   
   let data = await lambda.invoke(params).promise();
   
   let result = JSON.parse(data.Payload);
   let response2 = result.body;
   var response = {
    statusCode: 200,
    body: JSON.stringify(response2),
};
return response;
};

