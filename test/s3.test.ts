import { describe, expect, test } from "vitest";
import { AWS } from "../src";

import { S3BucketName } from "./constants.js";

const S3 = new AWS.S3();

const Key = "test-key";
const Body = "test-body";

describe("s3", () => {
  test("S3 PutObject, GetObject, HeadObject", async () => {
    await S3.putObject({
      Bucket: S3BucketName,
      Key,
      Body,
    });

    const response = await S3.getObject({
      Bucket: S3BucketName,
      Key,
    });

    expect(response?.Body?.toString()).toEqual(Body);

    const head = await S3.headObject({
      Bucket: S3BucketName,
      Key,
    });

    expect(head.ContentLength).toEqual(9);

    await S3.deleteObject({
      Bucket: S3BucketName,
      Key,
    });
  });

  test("listObjectsV2", async () => {
    let response = await S3.listObjectsV2({
      Bucket: S3BucketName,
    });

    expect(response.Contents).toBe(undefined);

    await S3.putObject({
      Bucket: S3BucketName,
      Key,
      Body,
    });

    response = await S3.listObjectsV2({
      Bucket: S3BucketName,
    });

    expect(response).toMatchObject({
      Contents: [
        {
          Key,
          ETag: expect.any(String),
          LastModified: expect.any(String),
          Owner: {
            DisplayName: expect.any(String),
            ID: expect.any(String),
          },
          StorageClass: "STANDARD",
          Size: 9,
        },
      ],
      MaxKeys: 1000,
      IsTruncated: false,
      Name: S3BucketName,
    });
  });
});
