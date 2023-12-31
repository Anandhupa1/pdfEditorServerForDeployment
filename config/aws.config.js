// config/awsConfig.js
const { S3Client } = require('@aws-sdk/client-s3');
require('dotenv').config();

// Configure AWS with environment variables
const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID1,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY1,
  },
  region: process.env.AWS_REGION1,
});

module.exports = {
  s3: s3Client,
  bucketName: process.env.AWS_BUCKET_NAME,
};
