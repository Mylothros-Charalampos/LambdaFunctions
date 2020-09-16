In this example the lambda function will add 2 numbers passed with POST.

##Test

To test the following example deploy it and use postman as a pinpoint underneath, so you can see the changes in the dynamoDB server in realtime:

##Deploy with SAM

To package and deploy the project in your aws account you have to start with the command `aws configure` to configure your keys.

To deploy with serverless install the framework with `npm install -g serverless` then install aws-sdk with `npm install --save aws-sdk` and use the command:

`serverless deploy`

After deploying you can use Postman to check everything is working as it should be. You can find the url in API Gateway after deploying your stage.

After opening Postman use the given url from API Gateway (<given>.amazonaws.com/Stage/) add at the end of the url /note choose as method POST and in the section of body insert the following:
`{
    "Item": {
        "title": "First Note",
        "content": "First content",
        "cat": "general"
    }
}`

After that you should add two headers in Postman, one app_user_id and one app_user_name. In the end press Send and you will see as a response the note which has been created.

Press send and as a response you should have:
`{
    "message": "Data inserted successfully"
 }`

You can check locally with Postman, by installing with `npm install --save-dev serverless-offline` and using the command:
`serverless offline`

The symbols < and > should not be included in the command.
