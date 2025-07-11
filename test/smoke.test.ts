import { describe, expect, it } from "@effect/vitest";
import { Console, Effect } from "effect";
import { AWSClient } from "../src/client.ts";

describe("DynamoDB Smoke Tests", () => {
  const testTableName = `itty-aws-test-${Date.now()}`;
  const aws = new AWSClient({ region: "us-east-1" });

  it.effect(
    "should perform complete DynamoDB lifecycle: create table, write data, read data, scan, and cleanup",
    () =>
      Effect.gen(function* () {
        yield* Console.log(`Starting smoke test with table: ${testTableName}`);

        // Step 1: Check if table exists and delete if it does
        yield* Console.log("Step 1: Checking if table exists...");
        const tableExists = yield* aws.dynamodb
          .describeTable({ TableName: testTableName })
          .pipe(
            Effect.map(() => true),
            Effect.catchTag("ResourceNotFoundException", () =>
              Effect.succeed(false),
            ),
          );

        if (tableExists) {
          yield* Console.log("Table exists, deleting...");
          yield* aws.dynamodb.deleteTable({ TableName: testTableName });

          // Wait for table to be deleted
          yield* Console.log("Waiting for table deletion...");
          yield* Effect.sleep("5 seconds");
        }

        // Step 2: Create a new table
        yield* Console.log("Step 2: Creating table...");
        const createResult = yield* aws.dynamodb.createTable({
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
        });

        expect(createResult.TableDescription?.TableName).toBe(testTableName);
        expect(createResult.TableDescription?.TableStatus).toBe("CREATING");

        // Step 3: Wait for table to be active
        yield* Console.log("Step 3: Waiting for table to become active...");
        let tableStatus = "CREATING";
        let attempts = 0;
        const maxAttempts = 30;

        while (tableStatus !== "ACTIVE" && attempts < maxAttempts) {
          yield* Effect.sleep("2 seconds");
          const description = yield* aws.dynamodb.describeTable({
            TableName: testTableName,
          });
          tableStatus = description.Table?.TableStatus || "UNKNOWN";
          attempts++;
          yield* Console.log(
            `Table status: ${tableStatus} (attempt ${attempts})`,
          );
        }

        expect(tableStatus).toBe("ACTIVE");

        // Step 4: Put some test items
        yield* Console.log("Step 4: Writing test data...");

        // Put first item
        yield* aws.dynamodb.putItem({
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
        yield* aws.dynamodb.putItem({
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
        yield* aws.dynamodb.putItem({
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

        // Step 5: Read items back
        yield* Console.log("Step 5: Reading data back...");

        const user1Profile = yield* aws.dynamodb.getItem({
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

        const user1Prefs = yield* aws.dynamodb.getItem({
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

        // Step 6: Scan all items
        yield* Console.log("Step 6: Scanning all items...");

        const scanResult = yield* aws.dynamodb.scan({
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

        // Step 7: Test query operation
        yield* Console.log("Step 7: Querying user#1 items...");

        const queryResult = yield* aws.dynamodb.query({
          TableName: testTableName,
          KeyConditionExpression: "pk = :pk",
          ExpressionAttributeValues: {
            ":pk": { S: "user#1" },
          },
        });

        expect(queryResult.Items).toBeDefined();
        expect(queryResult.Items?.length).toBe(2);
        expect(queryResult.Count).toBe(2);

        // Step 8: Test error handling - try to get non-existent item
        yield* Console.log("Step 8: Testing error handling...");

        const nonExistentItem = yield* aws.dynamodb.getItem({
          TableName: testTableName,
          Key: {
            pk: { S: "user#999" },
            sk: { S: "profile" },
          },
        });

        expect(nonExistentItem.Item).toBeUndefined();

        // Step 9: Test conditional write failure
        yield* Console.log("Step 9: Testing conditional write failure...");

        const conditionalWriteResult = yield* aws.dynamodb
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

        // Step 10: Update an item
        yield* Console.log("Step 10: Updating an item...");

        const updateResult = yield* aws.dynamodb.updateItem({
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

        // Step 11: Delete an item
        yield* Console.log("Step 11: Deleting an item...");

        yield* aws.dynamodb.deleteItem({
          TableName: testTableName,
          Key: {
            pk: { S: "user#1" },
            sk: { S: "preferences" },
          },
        });

        // Verify item is deleted
        const deletedItemCheck = yield* aws.dynamodb.getItem({
          TableName: testTableName,
          Key: {
            pk: { S: "user#1" },
            sk: { S: "preferences" },
          },
        });

        expect(deletedItemCheck.Item).toBeUndefined();

        // Step 12: Cleanup - Delete the test table
        yield* Console.log("Step 12: Cleaning up - deleting test table...");

        yield* aws.dynamodb.deleteTable({
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

        const result = yield* aws.dynamodb
          .describeTable({ TableName: nonExistentTable })
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
        const result = yield* aws.dynamodb
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
