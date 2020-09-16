## In this example the lambda function will add 2 numbers passed with POST.

## Test

To test the following example locally start the api with `sam local start-api` and use the following command in bash:

```curl -d '{"num1":5,"num2":6}' -H "Content-Type: application/json" -X POST http://localhost:3000/add```

## Deploy with SAM

To package and deploy the project in your aws account you have to start with the command `aws configure` to configure your keys.

Before deploying you have to create and s3 bucket in which your project will be uploaded. To do taht use the command:

```aws s3 mb s3://<name of bucket>```

After that you can package and deploy with the following commands:

```sam package --template-file template.yaml --output-template-file sam-template.yaml --s3-bucket <name of bucket>```

```sam deploy --template-file template.yaml --s3-bucket <name of bucket> --stack-name <stack name> --capabilities CAPABILITY_IAM```

After deploying you can use Postman to check everything is working as it should be. You can find the url in API Gateway after deploying your stage.

The symbols < and > should not be included in the command.
