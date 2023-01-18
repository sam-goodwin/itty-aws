import { AWS } from "../src";
import { SsmParameterName, SsmParameterValue } from "./constants";

const client = new AWS.SSM();

test("get parameter", async () => {
  const response = await client.getParameter({
    Name: SsmParameterName,
  });

  expect(response.Parameter?.Value).toEqual(SsmParameterValue);
});
