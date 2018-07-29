# Barebones Serverless Function Boilerplate
A barebones serverless function; Built with the [Serverless Platform](https://serverless.com/) on a `NodeJS` runtime; Deployed to [AWS Lambda](https://aws.amazon.com/lambda/).

# Instructions

#### Set up .AWS credentials on your local machine

1. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)

2. Run `aws configure`. It will prompt you to provide these settings:
```
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: ap-southeast-1
Default output format [None]: json
```
Note: Enter your preferred "default region name", for me, it's `ap-southeast-1`. Also, these credentials will be saved into your `~/.aws` folder.


#### Install the Serverless CLI
Needs `>= Node v4`.
```
npm install -g serverless
```


#### Create a new service
A service on Serverless is a collection of all your AWS Lambda functions, the
events that trigger them and any AWS infrastructure resources they need. These
settings are specified in a file called `serverless.yml`.

1. Create a new service from a variety of templates by running
```
# Choose a template
serverless create --template [aws-nodejs / aws-nodejs-ecma-script / aws-python3 / hello-world ...]

# View all available templates
serverless create --help
```

2. Edit your `serverless.yml` file, or use the one included in this repository. More `serverless.yml` settings may be found on the [official Serverless documentation site](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/).

3. Deploy your Service using your default AWS credentials by running
```
serverless deploy -v
```
this deploys all changes to your Functions, Events or Resources in `serverless.yml`

#### Deploying your function

Deploy your function without re-deploying your service with
```
serverless deploy function -f hello
```

#### Logging

Invoke and fetch function logs with
```
serverless invoke -f hello -l
```

Alternatively, if you want to do this within your AWS Lambda Management Console,
navigate to "Monitoring" > "View logs in CloudWatch" > Click on a log stream.
