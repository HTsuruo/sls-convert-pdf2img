const aws = require('aws-sdk');
const pdf2image = require('./pdf2image')

// module.exports.webhook = (event, context, callback) => {
//   const S3 = new AWS.S3({
//     s3ForcePathStyle: true,
//     endpoint: new AWS.Endpoint('http://localhost:8000'),
//     accessKeyId: 'S3RVER',
//     secretAccessKey: 'S3RVER',
//   });
//   S3.putObject({
//     Bucket: 'local-bucket',
//     Key: 'docs/12345678',
//     Body: new Buffer('abcd'),
//   }, () => { callback(null, 'ok'); });
// };

module.exports.s3hook = (event, context) => {
  console.log(JSON.stringify(event));
  console.log(JSON.stringify(context));
  console.log(JSON.stringify(process.env));
  console.log('this is s3hook function.')
};
