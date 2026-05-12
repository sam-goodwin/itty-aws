import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteDatabaseTopicInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/databases/{databaseId}/topics/{topicName}",
    }),
  );
export type DeleteDatabaseTopicInput = typeof DeleteDatabaseTopicInput.Type;

// Output Schema
export const DeleteDatabaseTopicOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteDatabaseTopicOutput = typeof DeleteDatabaseTopicOutput.Type;

// The operation
/**
 * Delete Database Topic
 *
 * Delete a topic within a Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param topicName - The [database topic](#operation/list-database-topics).
 */
export const deleteDatabaseTopic = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDatabaseTopicInput,
  outputSchema: DeleteDatabaseTopicOutput,
  errors: [BadRequest, NotFound] as const,
}));
