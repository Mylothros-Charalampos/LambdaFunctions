## In this example the lambda function will add 2 numbers passed with POST.

## Test

To test the following example deploy it and use postman as a pinpoint underneath, so you can see the changes in the dynamoDB server in realtime:

## Deploy with SAM

To package and deploy the project in your aws account you have to start with the command ```aws configure``` to configure your keys.

Before deploying you have to create and s3 bucket in which your project will be uploaded. To do taht use the command:

```aws s3 mb s3://<name of bucket>```

After that you can package and deploy with the following commands:

```sam package --template-file template.yaml --output-template-file sam-template.yaml --s3-bucket <name of bucket>```

```sam deploy --template-file template.yaml --s3-bucket <name of bucket> --stack-name <stack name> --capabilities CAPABILITY_IAM```

After deploying you can use Postman to check everything is working as it should be. You can find the url in API Gateway after deploying your stage.

After opening Postman use the given url from API Gateway (<given>.amazonaws.com/Stage/) add at the end of the url user/example choose as method POST and in the section of body insert the following:
{
    "firstName": "name",
    "lastName": "lastname",
    "email": "youremail@this.com",
    "website": "www.yourwebsite.com"
}

Press send and as a response you should have:
{
    "message": "Data inserted successfully"
}

The symbols < and > should not be included in the command.
