![](https://dev.azure.com/NavD/PipeLines.Test/_apis/build/status/SecondRepo)
# LambdaFunctions

## Introduction


## Functions

### AddNumbers-Sam

In this example the lambda function will add 2 numbers passed with POST.

Test:

To test the following example locally start the api with ```sam local start-api --template template_add_numbers.yaml``` and use the following command in bash:

```curl -d '{"num1":5,"num2":6}' -H "Content-Type: application/json" -X POST http://localhost:3000/add```

Deploy with SAM:

To package and deploy the project in your aws account you have to start with the command `aws configure` to configure your keys.

Before deploying you have to create and s3 bucket in which your project will be uploaded. To do that use the command:

```aws s3 mb s3://<name of bucket>```

After that you can package and deploy with the following commands:

```sam package --template-file template.yaml --output-template-file sam-template.yaml --s3-bucket <name of bucket>```

```sam deploy --template-file template.yaml --s3-bucket <name of bucket> --stack-name <stack name> --capabilities CAPABILITY_IAM```

After deploying you can use Postman to check everything is working as it should be. You can find the url in API Gateway after deploying your stage.

Moreover a configuration file has been included in .vscode so you can start the debugger and add breakpoints to study and debug the code. To do that in the place of ```sam local start-api --template template_add_numbers.yaml``` type the command ```sam local start-api --template template_add_numbers.yaml -d 5679```

The symbols < and > should not be included in the command.

### InvokeLambdaWithLambda-SAM

In this example a lambda function is invoked from another lambda function.

Test:

To test the following example go to the section Deploy with SAM and when you finished it, to it locally start the api with ```sam local start-api --template template_invoke_lambda_with_lambda.yaml``` and use the following command in bash:

```curl -d '{"operation":"add","operator1":6,"operator2":7}' -H "Content-Type: application/json" -X POST http://localhost:3000/calc``` for calculator lambda function (before doing so uncomment the line 5 and comment line 4) and

```curl -d '{"number":5}' -H "Content-Type: application/json" -X POST http://localhost:3000/calcu``` for calculatorAdd lambda function (do not uncomment line 5 for this curl).

Deploy with SAM

To package and deploy the project in your aws account you have to start with the command `aws configure` to configure your keys.

Before deploying you have to create and s3 bucket in which your project will be uploaded. To do taht use the command:

```aws s3 mb s3://<name of bucket>```

After that you can package and deploy with the following commands:

```sam package --template-file template.yaml --output-template-file sam-template.yaml --s3-bucket <name of bucket>```

```sam deploy --template-file template.yaml --s3-bucket <name of bucket> --stack-name <stack name> --capabilities CAPABILITY_IAM```

After deploying you can use Postman to check everything is working as it should be. You can find the url in API Gateway after deploying your stage.

Moreover a configuration file has been included in .vscode so you can start the debugger and add breakpoints to study and debug the code. To do that in the place of ```sam local start-api --template template_invoke_lambda_with_lambda.yaml``` type the command ```sam local start-api --template template_invoke_lambda_with_lambda.yaml -d 5678```

The symbols < and > should not be included in the command.

### PostGetDeleteDynamodb-SAM

In this example a table is created in DynamoDB and you can get, add info, or delete the table.

Test

To test the following example deploy it and use postman as I pinpoint underneath, so you can see the changes in the dynamoDB server in realtime:

Deploy with SAM

To package and deploy the project in your aws account you have to start with the command ```aws configure``` to configure your keys.

Before deploying you have to create and s3 bucket in which your project will be uploaded. To do taht use the command:

```aws s3 mb s3://<name of bucket>```

After that you can package and deploy with the following commands:

```sam package --template-file template_PostGetDelete_Dynamodb.yaml --output-template-file sam-template.yaml --s3-bucket <name of bucket>```

```sam deploy --template-file sam-template.yaml --s3-bucket <name of bucket> --stack-name <stack name> --capabilities CAPABILITY_IAM```

After deploying you can use Postman to check everything is working as it should be. You can find the url in API Gateway after deploying in your stage.

After opening Postman use the given url from API Gateway (<given>.amazonaws.com/Stage/) add at the end of the url user/example choose as method POST and in the section of body insert the following:
```{ "firstName": "name", "lastName": "lastname", "email": "youremail@this.com", "website": "www.yourwebsite.com" }```

Press send and as a response you should have:
```{"message": "Data inserted successfully"}```

You can use get and delete by inserting in the section of the url {userid} the id that is created in the dynamodb table. for getting and deleting the user respectively.

Moreover a configuration file has been included in .vscode so you can start the debugger and add breakpoints to study and debug the code after you send with postman the required requests.

The symbols < and > should not be included in the command.

### PostGetDeleteQueryDynamodb-Serverless

In this example a table is created in DynamoDB and you can get, add info, query info, or delete from the table and as deployment the framework Serverless is being used.

Test

To test the following example deploy it and use postman as I pinpoint underneath, so you can see the changes in the dynamoDB server in realtime:

Deploy with Serverless

To package and deploy the project in your aws account you have to start with the command ```aws configure``` to configure your keys.

To deploy with serverless install the framework with ```npm install -g serverless```, then install aws-sdk with ```npm install --save aws-sdk```, use ```cd``` to navigate to the folder ```PostGetDeleteQueryDynamodb-Serverless``` and use the command:

```serverless deploy```

After deploying you can use Postman to check everything is working as it should be. You can find the url in API Gateway after deploying your stage.

After opening Postman use the given url from API Gateway (<given>.amazonaws.com/Stage/) add at the end of the url /note choose as method POST and in the section of body insert the following:
```{"Item": {"title": "First Note", "content": "First content", "cat": "general"}}```

After that you should add two headers in Postman, one ```app_user_id``` and one ```app_user_name```. In the end press Send and you will see as a response the note which has been created.

Press send and as a response you should have:
```{"message": "Data inserted successfully"}```

You can check locally with Postman, by installing ```npm install --save-dev serverless-offline``` and using the command:
```serverless offline```

You can check the rest urls that are showed by serverless in your CLI and try all the examples the code is giving.

The symbols < and > should not be included in the command.

