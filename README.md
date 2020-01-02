# Rank serverless function 

This repository contains the code of Lambda function used to rank smartbrain users according with entries number.

To deploy these function, I recommend to use [Serverless Framework CLI](https://serverless.com/cli/).

## Deploy process

1. Configure IAM User with correct permissions.
2. Configure serverless using:
```
  sls config credentials --provider aws --key <ID> --secret <SECRET>
```
3. Deploy :rocket:	
```
  sls deploy
```

To remove function use:
```
  sls remove
```