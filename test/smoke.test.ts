import { describe, expect, it } from "@effect/vitest";
import { Console, Effect, Schedule } from "effect";
import { AWS } from "../src/index.ts";

describe("DynamoDB Smoke Tests", () => {
  const testTableName = "itty-aws-test";
  const client = new AWS.DynamoDB({ region: "us-east-1" });

  it.effect(
    "should perform complete DynamoDB lifecycle: create table, write data, read data, scan, and cleanup",
    () =>
      Effect.gen(function* () {
        yield* Console.log(`Starting smoke test with table: ${testTableName}`);

        // Step 1: Always try to delete the table first to ensure clean state
        yield* Console.log(
          "Step 1: Ensuring clean state by deleting table if it exists...",
        );
        yield* client.deleteTable({ TableName: testTableName }).pipe(
          Effect.catchTag("ResourceNotFoundException", () =>
            Effect.succeed({}),
          ),
          Effect.tap(() => Console.log("Delete table request sent")),
        );

        // Step 2: Wait for table to be deleted (poll until table is gone)
        yield* Console.log("Step 2: Waiting for table deletion to complete...");

        yield* client.describeTable({ TableName: testTableName }).pipe(
          Effect.flatMap(() => {
            console.log("Table not deleted yet");
            return Effect.fail({
              _tag: "TableNotDeleted",
            });
          }),
          Effect.retry({
            times: 100,
            schedule: Schedule.exponential("1 second"),
            until: (error) => error._tag === "ResourceNotFoundException",
          }),
          Effect.timeout("2 minutes"),
          Effect.catchTag("ResourceNotFoundException", () =>
            Console.log("Table successfully deleted").pipe(
              Effect.flatMap(() => Effect.succeed("deleted")),
            ),
          ),
        );

        // Step 3: Create a new table
        yield* Console.log("Step 3: Creating table...");

        const createResult = yield* client
          .createTable({
            TableName: testTableName,
            AttributeDefinitions: [
              {
                AttributeName: "pk",
                AttributeType: "S",
              },
              {
                AttributeName: "sk",
                AttributeType: "S",
              },
            ],
            KeySchema: [
              {
                AttributeName: "pk",
                KeyType: "HASH",
              },
              {
                AttributeName: "sk",
                KeyType: "RANGE",
              },
            ],
            BillingMode: "PAY_PER_REQUEST",
          })
          .pipe(
            Effect.retry({
              times: 30,
              schedule: Schedule.exponential("1 second"),
              while: (error) => error._tag !== "ResourceInUseException",
            }),
          );

        expect(createResult.TableDescription?.TableName).toBe(testTableName);
        expect(createResult.TableDescription?.TableStatus).toBe("CREATING");

        // Step 4: Wait for table to be active using Effect.retry
        yield* Console.log("Step 4: Waiting for table to become active...");

        yield* client.describeTable({ TableName: testTableName }).pipe(
          Effect.flatMap((description) => {
            console.log("Table status:", description.Table?.TableStatus);
            const status = description.Table?.TableStatus || "UNKNOWN";

            if (status === "ACTIVE") {
              return Console.log(
                `Table status: ${status} - Table is ready!`,
              ).pipe(Effect.flatMap(() => Effect.succeed(description)));
            } else {
              return Console.log(`Table status: ${status} - waiting...`).pipe(
                Effect.flatMap(() =>
                  Effect.fail("Table not ready yet" as const),
                ),
              );
            }
          }),
          Effect.retry({
            times: 30,
            schedule: Schedule.exponential("1 second"),
            while: (error) => error === "Table not ready yet",
          }),
          Effect.timeout("5 minutes"),
        );

        // Step 5: Put some test items
        yield* Console.log("Step 5: Writing test data...");

        // Put first item
        yield* client.putItem({
          TableName: testTableName,
          Item: {
            pk: { S: "user#1" },
            sk: { S: "profile" },
            name: { S: "John Doe" },
            email: { S: "john.doe@example.com" },
            age: { N: "30" },
            active: { BOOL: true },
          },
        });

        // Put second item
        yield* client.putItem({
          TableName: testTableName,
          Item: {
            pk: { S: "user#1" },
            sk: { S: "preferences" },
            theme: { S: "dark" },
            notifications: { BOOL: false },
            tags: { SS: ["developer", "early-adopter"] },
          },
        });

        // Put third item
        yield* client.putItem({
          TableName: testTableName,
          Item: {
            pk: { S: "user#2" },
            sk: { S: "profile" },
            name: { S: "Jane Smith" },
            email: { S: "jane.smith@example.com" },
            age: { N: "25" },
            active: { BOOL: true },
          },
        });

        yield* Console.log("Successfully wrote 3 items to table");

        // Step 6: Read items back
        yield* Console.log("Step 6: Reading data back...");

        const user1Profile = yield* client.getItem({
          TableName: testTableName,
          Key: {
            pk: { S: "user#1" },
            sk: { S: "profile" },
          },
        });

        expect(user1Profile.Item).toMatchObject({
          pk: { S: "user#1" },
          sk: { S: "profile" },
          name: { S: "John Doe" },
          email: { S: "john.doe@example.com" },
          age: { N: "30" },
          active: { BOOL: true },
        });

        const user1Prefs = yield* client.getItem({
          TableName: testTableName,
          Key: {
            pk: { S: "user#1" },
            sk: { S: "preferences" },
          },
        });

        expect(user1Prefs.Item).toMatchObject({
          pk: { S: "user#1" },
          sk: { S: "preferences" },
          theme: { S: "dark" },
          notifications: { BOOL: false },
          tags: { SS: ["developer", "early-adopter"] },
        });

        // Step 7: Scan all items
        yield* Console.log("Step 7: Scanning all items...");

        const scanResult = yield* client.scan({
          TableName: testTableName,
        });

        expect(scanResult.Items).toBeDefined();
        expect(scanResult.Items?.length).toBe(3);
        expect(scanResult.Count).toBe(3);

        // Verify all items are present
        const items = scanResult.Items || [];
        const profileItems = items.filter((item) => item.sk?.S === "profile");
        const prefItems = items.filter((item) => item.sk?.S === "preferences");

        expect(profileItems.length).toBe(2);
        expect(prefItems.length).toBe(1);

        // Step 8: Test query operation
        yield* Console.log("Step 8: Querying user#1 items...");

        const queryResult = yield* client.query({
          TableName: testTableName,
          KeyConditionExpression: "pk = :pk",
          ExpressionAttributeValues: {
            ":pk": { S: "user#1" },
          },
        });

        expect(queryResult.Items).toBeDefined();
        expect(queryResult.Items?.length).toBe(2);
        expect(queryResult.Count).toBe(2);

        // Step 9: Test error handling - try to get non-existent item
        yield* Console.log("Step 9: Testing error handling...");

        const nonExistentItem = yield* client.getItem({
          TableName: testTableName,
          Key: {
            pk: { S: "user#999" },
            sk: { S: "profile" },
          },
        });

        expect(nonExistentItem.Item).toBeUndefined();

        // Step 10: Test conditional write failure
        yield* Console.log("Step 10: Testing conditional write failure...");

        const conditionalWriteResult = yield* client
          .putItem({
            TableName: testTableName,
            Item: {
              pk: { S: "user#1" },
              sk: { S: "profile" },
              name: { S: "Updated Name" },
            },
            ConditionExpression: "attribute_not_exists(pk)",
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchTag("ConditionalCheckFailedException", (error) =>
              Effect.succeed({ success: false, error: error._tag }),
            ),
          );

        expect(conditionalWriteResult.success).toBe(false);
        expect(conditionalWriteResult.error).toBe(
          "ConditionalCheckFailedException",
        );

        // Step 11: Update an item
        yield* Console.log("Step 11: Updating an item...");

        const updateResult = yield* client.updateItem({
          TableName: testTableName,
          Key: {
            pk: { S: "user#1" },
            sk: { S: "profile" },
          },
          UpdateExpression: "SET age = :newAge, #nm = :newName",
          ExpressionAttributeNames: {
            "#nm": "name",
          },
          ExpressionAttributeValues: {
            ":newAge": { N: "31" },
            ":newName": { S: "John Doe Updated" },
          },
          ReturnValues: "ALL_NEW",
        });

        expect(updateResult.Attributes).toMatchObject({
          pk: { S: "user#1" },
          sk: { S: "profile" },
          age: { N: "31" },
          name: { S: "John Doe Updated" },
        });

        // Step 12: Delete an item
        yield* Console.log("Step 12: Deleting an item...");

        yield* client.deleteItem({
          TableName: testTableName,
          Key: {
            pk: { S: "user#1" },
            sk: { S: "preferences" },
          },
        });

        // Verify item is deleted
        const deletedItemCheck = yield* client.getItem({
          TableName: testTableName,
          Key: {
            pk: { S: "user#1" },
            sk: { S: "preferences" },
          },
        });

        expect(deletedItemCheck.Item).toBeUndefined();

        // Step 13: Cleanup - Delete the test table
        yield* Console.log("Step 13: Cleaning up - deleting test table...");

        yield* client.deleteTable({
          TableName: testTableName,
        });

        yield* Console.log("Smoke test completed successfully!");
      }),
    { timeout: 120000 }, // 2 minutes timeout for table operations
  );

  it.effect(
    "should handle non-existent table gracefully",
    () =>
      Effect.gen(function* () {
        const nonExistentTable = `non-existent-table-${Date.now()}`;

        const result = yield* client
          .describeTable({
            TableName: nonExistentTable,
          })
          .pipe(
            Effect.map(() => ({
              exists: true,
              error: undefined,
              message: undefined,
            })),
            Effect.catchTag("ResourceNotFoundException", (error) =>
              Effect.succeed({
                exists: false,
                error: error._tag,
                message: error.message,
              }),
            ),
          );

        expect(result.exists).toBe(false);
        expect(result.error).toBe("ResourceNotFoundException");
        expect(result.message).toContain("not found");
      }),
    { timeout: 10000 },
  );

  it.effect(
    "should handle invalid table creation gracefully",
    () =>
      Effect.gen(function* () {
        const result = yield* client
          .createTable({
            TableName: "", // Invalid: empty table name
            AttributeDefinitions: [],
            KeySchema: [],
            BillingMode: "PAY_PER_REQUEST",
          })
          .pipe(
            Effect.map(() => ({ success: true, error: undefined })),
            Effect.catchAll((error) =>
              Effect.succeed({
                success: false,
                error: error._tag || "UnknownError",
              }),
            ),
          );

        expect(result.success).toBe(false);
        // Should be a validation error from AWS
        expect(result.error).toBeDefined();
      }),
    { timeout: 10000 },
  );
});

const ddb = new AWS.DynamoDB({ region: "us-east-1" });

const program = Effect.gen(function* () {
  const user = yield* ddb
    .getItem({
      TableName: "users",
      Key: { id: { S: "123" } },
    })
    .pipe(
      Effect.catchTag("ResourceNotFoundException", () =>
        Effect.succeed({ Item: undefined }),
      ),
      Effect.retry({
        times: 3,
        schedule: Schedule.exponential("1 second"),
      }),
    );

  return user.Item;
});

console.log(program);
