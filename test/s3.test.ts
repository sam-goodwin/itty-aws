import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { AWS } from "../src";

import { endpoint } from "./constants.js";

const client = new AWS.S3({
  endpoint,
});

interface TestContext {
  bucket: string;
}

const Key = "test-key";
const Body = "test-body";

describe("S3", () => {
  beforeEach<TestContext>(async (context) => {
    const bucket = `itty-s3-bucket-${Date.now()}`;
    await client.createBucket({
      Bucket: bucket,
    });
    context.bucket = bucket;
  });

  afterEach<TestContext>(async (context) => {
    const { Contents } = await client.listObjectsV2({
      Bucket: context.bucket,
    });

    for (const object of Contents ?? []) {
      await client.deleteObject({
        Bucket: context.bucket,
        Key: object.Key!,
      });
    }

    await client.deleteBucket({
      Bucket: context.bucket,
    });
  });

  test<TestContext>("putObject, getObject, headObject", async (context) => {
    await client.putObject({
      Bucket: context.bucket,
      Key,
      Body,
    });

    const response = await client.getObject({
      Bucket: context.bucket,
      Key,
    });

    expect(response?.Body?.toString()).toEqual(Body);

    const head = await client.headObject({
      Bucket: context.bucket,
      Key,
    });

    expect(head.ContentLength).toEqual(9);

    await client.deleteObject({
      Bucket: context.bucket,
      Key,
    });
  });

  test<TestContext>("listObjectsV2", async (context) => {
    {
      const response = await client.listObjectsV2({
        Bucket: context.bucket,
      });

      expect(response.Contents).toBe(undefined);
    }

    {
      await client.putObject({
        Bucket: context.bucket,
        Key,
        Body,
      });

      const response = await client.listObjectsV2({
        Bucket: context.bucket,
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
        Name: context.bucket,
      });
    }
  });
});
