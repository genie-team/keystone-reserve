import { S3Config } from '@k6-contrib/fields-s3';
import { S3ImagesConfig } from '@k6-contrib/fields-s3-images';
export let s3ImagesConfig: S3ImagesConfig;
export let s3Config: S3Config;
import 'dotenv/config';

if (process.env.S3_BUCKET) {
    s3ImagesConfig = {
        bucket: process.env.S3_BUCKET, // name of bucket
        folder: process.env.S3_PATH,
        baseUrl: process.env.S3_BASE_URL, // if provided the url is not compouted from endpoint and folder, rather use this as `${baseUrl}/${filename}`
        s3Options: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
            region: process.env.REGION, // use region for aws, endpoint for s3 compatible storage
        },
        sizes: {
            sm: 360,
            md: 720,
            lg: 1280,

            // optional
            // if specified, a base64 data url will be generated from an image resized to this number of pixels
            // see: https://nextjs.org/docs/api-reference/next/image#blurdataurl for potential uses
            base64: 10,
        },
        uploadParams() {
            return {
                ACL: 'public-read', // needed to make it public
            };
        },
    };
    s3Config = {
        bucket: process.env.S3_BUCKET, // name of bucket
        folder: process.env.S3_PATH,
        baseUrl: process.env.S3_BASE_URL, // if provided the url is not compouted from endpoint and folder, rather use this as `${baseUrl}/${filename}`
        s3Options: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
          region: process.env.REGION, // use region for aws, endpoint for s3 compatible storage
        },
        uploadParams() {
          return {
            ACL: 'public-read', // needed to make it public
          };
        },
      };
}


// 3000 is standard for node apps
// Once deployed, Railway will supply this var to your app
export const PORT = parseInt(process.env.PORT) || 3000;

// Postgres DB URL
// The default value here will work if you've installed Postgres on MacOS using brew
// One the app is deployed to Railway, this var will be supplied by the Postgres plugin
export const DATABASE_URL =
  process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost/keystone-6-example`;

// Default to 30 days
export const SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE) || 60 * 60 * 24 * 30;
