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