import { expect, test } from "vitest";
import { AWS } from "../src";
import { endpoint, SsmParameterName, SsmParameterValue } from "./constants";

const client = new AWS.SSM({
  endpoint,
});

test("get parameter", async () => {
  const response = await client.getParameter({
    Name: SsmParameterName,
  });

  expect(response.Parameter?.Value).toEqual(SsmParameterValue);
});
