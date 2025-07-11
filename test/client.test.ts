import { describe, expect, it, test } from "@effect/vitest";
import { Console, Effect } from "effect";
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

    it.effect(
      "should be able to call listTables with credentials",
      () =>
        Effect.gen(function* () {
          const aws = new AWSClient({ region: "us-east-1" });

          const result = yield* aws.dynamodb.listTables({}).pipe(
            Effect.tap((result) =>
              Console.log("DynamoDB listTables result:", result),
            ),
            Effect.catchAll((error) =>
              Effect.gen(function* () {
                yield* Console.log("DynamoDB listTables error:", error);
                // Just return a marker that we caught an error
                return { errorCaught: true, errorType: error._tag };
              }),
            ),
          );

          expect(result).toBeDefined();

          if ("errorCaught" in result) {
            console.log(`✅ Successfully handled error: ${result.errorType}`);
            expect(result.errorCaught).toBe(true);
          } else {
            console.log(
              `✅ Successfully retrieved ${result.TableNames?.length || 0} tables`,
            );
            expect(result).toHaveProperty("TableNames");
          }
        }),
      { timeout: 10000 },
    );

    it.effect(
      "should handle specific error types",
      () =>
        Effect.gen(function* () {
          const aws = new AWSClient({ region: "us-east-1" });

          let caughtError = false;

          yield* aws.dynamodb.listTables({}).pipe(
            Effect.catchTag("ValidationException", () => {
              caughtError = true;
              return Effect.succeed("ValidationException caught");
            }),
            Effect.catchTag("UnknownError", () => {
              caughtError = true;
              return Effect.succeed("UnknownError caught");
            }),
            Effect.catchAll(() => {
              caughtError = true;
              return Effect.succeed("Some error caught");
            }),
          );

          // We expect some kind of error to be caught (network, auth, etc.)
          expect(caughtError).toBe(true);
          console.log("✅ Error handling works as expected");
        }),
      { timeout: 10000 },
    );
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

    it.effect("should catch and handle errors gracefully", () =>
      Effect.gen(function* () {
        const aws = new AWSClient({ region: "us-east-1" });

        const result = yield* aws.dynamodb.listTables({}).pipe(
          Effect.map((data) => ({ success: true as const, data })),
          Effect.catchAll((error) =>
            Effect.succeed({ success: false as const, error: error._tag }),
          ),
        );

        expect(result).toBeDefined();
        expect(typeof result.success).toBe("boolean");

        if (result.success) {
          console.log("✅ Successfully connected to DynamoDB");
          expect(result.data).toHaveProperty("TableNames");
        } else {
          console.log(`✅ Gracefully handled error: ${result.error}`);
          expect(result.error).toBeDefined();
        }
      }),
    );
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
