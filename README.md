# sls-convert-pdf2img
convert pdf to image on aws lambda function with S3 events.

## Env.
* serverless-framework: 1.65.0
* runtime: aws node.js 12.x


## How to Run.

```
# package install
$ npm i

# run local server
$ npm start
( $ npx sls offline start )

# put object to s3 bucket
$ npm run put [filePath]

# run a function
$ npm run func [functionName]

```

## Command Memo.

```
# install
$ npm i -g serverless

# version
$ npx sls -v
or
$ npx serverless -v

# create project for nodejs
$ npx sls create -t aws-nodejs -p my-service

# offline start
$ npx sls offline start

# deploy
$ npx sls deploy -v

# deploy with stage
$ npx sls deploy --stage prod

# delete project
$ npx sls remove

# put object to s3
$ aws --endpoint http://localhost:8000 s3api put-object --bucket local-bucket --key docs/ --body ~/Desktop/test.pdf --profile s3rver
※ accessid and keyid ⇒ [ S3RVER ]

# run function
$ npx sls invoke local --function functionName

```

## AWS - Invoke Local.

```
serverless invoke local --function functionName
```
* https://serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/


## Ref.
* Serverless Frameworkの使い方まとめ
	* https://qiita.com/horike37/items/b295a91908fcfd4033a2
* Serverless + TypeScript + AWS Lambdaの開発環境構築
	* http://suguru03.hatenablog.com/entry/2019/01/16/150326
* Serverless Frameworkで環境変数を外部ファイルから読み込み、環境毎に自動で切り替えてみる
	* https://dev.classmethod.jp/cloud/serverless-framework-conf-change/
* npm-scriptsについて
	* https://qiita.com/axross/items/a2a0d148e40b66074858
