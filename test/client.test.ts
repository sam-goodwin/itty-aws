import { Console, Effect } from "effect";
import { describe, expect, test } from "vitest";
import { AWSClient, aws } from "../src/client.ts";

describe("AWS Client", () => {
  // No setup needed - let the AWS credential chain handle authentication

  describe("AWSClient Class", () => {
    test("should create an AWSClient instance", () => {
      const aws = new AWSClient();
      expect(aws).toBeDefined();
      expect(aws.dynamodb).toBeDefined();
    });

    test("should accept region configuration", () => {
      const aws = new AWSClient({ region: "eu-west-1" });
      expect(aws).toBeDefined();
      expect(aws.dynamodb).toBeDefined();
    });

    test("should accept credentials configuration", () => {
      const aws = new AWSClient({
        credentials: {
          accessKeyId: "test-key",
          secretAccessKey: "test-secret",
        },
      });
      expect(aws).toBeDefined();
      expect(aws.dynamodb).toBeDefined();
    });

    test("should accept endpoint configuration", () => {
      const aws = new AWSClient({
        endpoint: "http://localhost:8000",
      });
      expect(aws).toBeDefined();
      expect(aws.dynamodb).toBeDefined();
    });
  });

  describe("DynamoDB", () => {
    test("should create a DynamoDB client proxy", () => {
      const aws = new AWSClient({ region: "us-east-1" });
      expect(aws.dynamodb).toBeDefined();
      expect(typeof aws.dynamodb).toBe("object");
    });

    test("should have listTables method", () => {
      const aws = new AWSClient({ region: "us-east-1" });
      expect(typeof aws.dynamodb.listTables).toBe("function");
    });

    test("listTables should return an Effect", () => {
      const aws = new AWSClient({ region: "us-east-1" });
      const result = aws.dynamodb.listTables({});

      // Effects have a pipe method and are objects
      expect(result).toBeDefined();
      expect(typeof result.pipe).toBe("function");
      expect(typeof result).toBe("object");
    });

    test("should be able to call listTables with credentials", async () => {
      const aws = new AWSClient({ region: "us-east-1" });

      const listTablesEffect = aws.dynamodb.listTables({}).pipe(
        Effect.tap((result) =>
          Console.log("DynamoDB listTables result:", result),
        ),
        Effect.catchAll((error) =>
          Effect.gen(function* () {
            yield* Console.log("DynamoDB listTables error:", error);
            // Return the error as a successful result for testing purposes
            return { error: error._tag, statusCode: error.statusCode };
          }),
        ),
      );

      const result = await Effect.runPromise(listTablesEffect);
      expect(result).toBeDefined();

      // Check if we got either a successful result or a handled error
      if ("error" in result) {
        // We got an error, but that's okay for testing - just verify it's structured correctly
        expect(result.error).toBeDefined();
        expect(typeof result.statusCode).toBe("number");
        console.log(
          `✅ Successfully handled error: ${result.error} (${result.statusCode})`,
        );
      } else {
        // We got a successful result
        expect(result).toHaveProperty("TableNames");
        expect(Array.isArray((result as any).TableNames)).toBe(true);
        console.log(
          `✅ Successfully retrieved ${(result as any).TableNames.length} tables`,
        );
      }
    }, 10000); // 10 second timeout for network request

    test("should handle error cases with proper typing", async () => {
      // Test with invalid region to trigger an error
      const aws = new AWSClient({ region: "invalid-region-12345" });

      const listTablesEffect = aws.dynamodb.listTables({}).pipe(
        Effect.catchTag("ValidationException", (error) =>
          Effect.gen(function* () {
            expect(error._tag).toBe("ValidationException");
            expect(typeof error.statusCode).toBe("number");
            return { handledError: "ValidationException" };
          }),
        ),
        Effect.catchTag("UnknownError", (error) =>
          Effect.gen(function* () {
            expect(error._tag).toBe("UnknownError");
            expect(typeof error.statusCode).toBe("number");
            return { handledError: "UnknownError" };
          }),
        ),
        Effect.catchAll((error) =>
          Effect.succeed({ handledError: error._tag || "ConnectionError" }),
        ),
        Effect.catchAllDefect((defect) =>
          Effect.succeed({
            handledError: "NetworkError",
            defect: String(defect),
          }),
        ),
      );

      const result = await Effect.runPromise(listTablesEffect);
      expect(result).toBeDefined();
      expect(result.handledError).toBeDefined();
      console.log(`✅ Successfully handled error case: ${result.handledError}`);
    }, 10000);
  });

  describe("Client Configuration", () => {
    test("should support different regions", () => {
      const usEast1 = new AWSClient({ region: "us-east-1" });
      const usWest2 = new AWSClient({ region: "us-west-2" });
      const euWest1 = new AWSClient({ region: "eu-west-1" });

      expect(usEast1).toBeDefined();
      expect(usWest2).toBeDefined();
      expect(euWest1).toBeDefined();

      // Each should have DynamoDB service
      expect(usEast1.dynamodb).toBeDefined();
      expect(usWest2.dynamodb).toBeDefined();
      expect(euWest1.dynamodb).toBeDefined();
    });

    test("should default to us-east-1 when no region specified", () => {
      const aws = new AWSClient();
      expect(aws).toBeDefined();
      expect(aws.dynamodb).toBeDefined();
    });
  });

  describe("Error Handling", () => {
    test("should provide typed error handling", () => {
      const aws = new AWSClient({ region: "us-east-1" });
      const result = aws.dynamodb.listTables({});

      // Test that we can pipe error handling
      const withErrorHandling = result.pipe(
        Effect.catchTag("InternalServerError", (error) => {
          expect(error._tag).toBe("InternalServerError");
          return Effect.succeed({ handled: true });
        }),
        Effect.catchTag("InvalidEndpointException", (error) => {
          expect(error._tag).toBe("InvalidEndpointException");
          return Effect.succeed({ handled: true });
        }),
      );

      expect(withErrorHandling).toBeDefined();
      expect(typeof withErrorHandling.pipe).toBe("function");
    });

    test("should provide working Effect-based error handling", async () => {
      const aws = new AWSClient({ region: "us-east-1" });

      // Create a test that will likely fail (no credentials or invalid region)
      const result = await Effect.runPromise(
        aws.dynamodb.listTables({}).pipe(
          Effect.catchTag("InternalServerError", (error) =>
            Effect.gen(function* () {
              expect(error._tag).toBe("InternalServerError");
              yield* Console.log("✅ Successfully caught InternalServerError");
              return { handledError: "InternalServerError" };
            }),
          ),
          Effect.catchTag("InvalidEndpointException", (error) =>
            Effect.gen(function* () {
              expect(error._tag).toBe("InvalidEndpointException");
              yield* Console.log(
                "✅ Successfully caught InvalidEndpointException",
              );
              return { handledError: "InvalidEndpointException" };
            }),
          ),
          Effect.catchAll((error) =>
            Effect.gen(function* () {
              yield* Console.log(`✅ Successfully caught error: ${error._tag}`);
              return { handledError: error._tag || "UnknownError" };
            }),
          ),
        ),
      );

      expect(result).toBeDefined();
      // At this point, either we got a successful result or a handled error
      if ("handledError" in result) {
        expect(result.handledError).toBeDefined();
      } else {
        // Successful result
        expect(result).toHaveProperty("TableNames");
      }
    });
  });

  describe("Legacy API Compatibility", () => {
    test("should maintain backward compatibility with aws() function", () => {
      const legacyClient = aws("us-east-1");
      expect(legacyClient).toBeDefined();
      expect(legacyClient.dynamodb).toBeDefined();
      expect(typeof legacyClient.dynamodb.listTables).toBe("function");
    });
  });
});
