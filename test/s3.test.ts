import { AWS } from "../src";

const S3 = new AWS.S3();

test("S3 PutObject and GetObject should work", async () => {
  const Key = "test-key";
  const Body = "test-body";

  await S3.putObject({
    Bucket: "itty-s3-bucket",
    Key,
    Body,
  });

  const response = await S3.getObject({
    Bucket: "itty-s3-bucket",
    Key,
  });

  expect(response?.Body?.toString()).toEqual(Body);
})
