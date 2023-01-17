import { AWS } from "../src";

process.env.AWS_REGION = "us-west-2";

const client = new AWS.SSM();

test("get parameter", async () => {
  const response = await client.getParameter({
    Name: "my-parameter",
  });

  expect(response.Parameter?.Value).toEqual("test");
});
