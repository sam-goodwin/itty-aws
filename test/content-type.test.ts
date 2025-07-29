import { describe, expect, it, beforeEach, afterEach, vi } from "@effect/vitest";
import { Effect } from "effect";
import { AWS } from "../src/index.ts";
import { serviceMetadata } from "../src/metadata.ts";

describe("Content-Type Header Tests", () => {
  // Mock the fetch to capture the headers
  const mockFetch = vi.fn();
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    // Reset mock
    mockFetch.mockReset();
    
    // Mock successful response
    mockFetch.mockResolvedValue(
      new Response(JSON.stringify({}), {
        status: 200,
        headers: { 'content-type': 'application/json' }
      })
    );
    
    // Replace global fetch with mock
    globalThis.fetch = mockFetch;
  });

  afterEach(() => {
    // Restore original fetch
    globalThis.fetch = originalFetch;
  });

  it.effect(
    "should set correct Content-Type for DynamoDB (awsJson1_0)",
    () =>
      Effect.gen(function* () {
        const client = new AWS.DynamoDB({ 
          region: "us-east-1",
          credentials: {
            accessKeyId: "test",
            secretAccessKey: "test"
          }
        });

        // Verify DynamoDB uses awsJson1_0
        expect(serviceMetadata.dynamodb.protocol).toBe("awsJson1_0");

        // Make a request
        yield* client.getItem({
          TableName: "test-table",
          Key: { id: { S: "123" } },
        }).pipe(
          Effect.catchAll(() => Effect.succeed({})) // Ignore errors, we just want to check headers
        );

        // Verify the fetch was called with correct Content-Type
        expect(mockFetch).toHaveBeenCalledWith(
          expect.any(String),
          expect.objectContaining({
            headers: expect.objectContaining({
              "Content-Type": "application/x-amz-json-1.0",
            }),
          })
        );
      }),
    { timeout: 5000 }
  );

  it.effect(
    "should set correct Content-Type for CloudTrail (awsJson1_1)",
    () =>
      Effect.gen(function* () {
        const client = new AWS.CloudTrail({ 
          region: "us-east-1",
          credentials: {
            accessKeyId: "test",
            secretAccessKey: "test"
          }
        });

        // Verify CloudTrail uses awsJson1_1
        expect(serviceMetadata.cloudtrail.protocol).toBe("awsJson1_1");

        // Make a request
        yield* client.describeTrails({}).pipe(
          Effect.catchAll(() => Effect.succeed({})) // Ignore errors, we just want to check headers
        );

        // Verify the fetch was called with correct Content-Type
        expect(mockFetch).toHaveBeenCalledWith(
          expect.any(String),
          expect.objectContaining({
            headers: expect.objectContaining({
              "Content-Type": "application/x-amz-json-1.1",
            }),
          })
        );
      }),
    { timeout: 5000 }
  );

  it.effect(
    "should set correct Content-Type for Lambda (restJson1)",
    () =>
      Effect.gen(function* () {
        const client = new AWS.Lambda({ 
          region: "us-east-1",
          credentials: {
            accessKeyId: "test",
            secretAccessKey: "test"
          }
        });

        // Verify Lambda uses restJson1
        expect(serviceMetadata.lambda.protocol).toBe("restJson1");

        // Make a request
        yield* client.listFunctions({}).pipe(
          Effect.catchAll(() => Effect.succeed({})) // Ignore errors, we just want to check headers
        );

        // Verify the fetch was called with correct Content-Type
        expect(mockFetch).toHaveBeenCalledWith(
          expect.any(String),
          expect.objectContaining({
            headers: expect.objectContaining({
              "Content-Type": "application/json",
            }),
          })
        );
      }),
    { timeout: 5000 }
  );

  it("should have different protocols for different services", () => {
    // Verify that we have the expected protocol diversity
    expect(serviceMetadata.dynamodb.protocol).toBe("awsJson1_0");
    expect(serviceMetadata.cloudtrail.protocol).toBe("awsJson1_1");
    expect(serviceMetadata.lambda.protocol).toBe("restJson1");
    
    // Find some other protocol examples
    const awsQueryServices = Object.entries(serviceMetadata).filter(
      ([, meta]) => meta.protocol === "awsQuery"
    );
    expect(awsQueryServices.length).toBeGreaterThan(0);

    const restXmlServices = Object.entries(serviceMetadata).filter(
      ([, meta]) => meta.protocol === "restXml"
    );
    expect(restXmlServices.length).toBeGreaterThan(0);
  });
});
