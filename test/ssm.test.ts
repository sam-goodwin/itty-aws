import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { AWS } from "../src";
import { endpoint } from "./constants";

const client = new AWS.SSM({
  endpoint,
});

interface TestContext {
  ssmParameterName: string;
  ssmParameterValue: string;
}

describe("SSM", () => {
  beforeEach<TestContext>(async (context) => {
    const ssmParameterName = `itty-parameter-name-${Date.now()}`;
    const ssmParameterValue = `itty-parameter-value-${Date.now()}`;
    await client.putParameter({
      Name: ssmParameterName,
      Value: ssmParameterValue,
      Type: "String",
      Overwrite: true,
    });
    context.ssmParameterName = ssmParameterName;
    context.ssmParameterValue = ssmParameterValue;
  });

  afterEach<TestContext>(async (context) => {
    await client.deleteParameter({
      Name: context.ssmParameterName,
    });
  });

  test<TestContext>("getParameter", async (context) => {
    const response = await client.getParameter({
      Name: context.ssmParameterName,
    });

    expect(response.Parameter?.Value).toEqual(context.ssmParameterValue);
  });
});
