const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async(event) => {
    let userid = event.pathParameters.userid;

    let data = await dynamodb.delete({
        TableName: tableName,
        Key: {
            userid: userid
        }
    }).promise();

    if(data.Item)
    {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "User not found"
            })
        };
    }
    else{
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "User deleted successfully"
            })
        };
    }
}