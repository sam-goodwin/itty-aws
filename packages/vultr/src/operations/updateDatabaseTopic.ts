import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateDatabaseTopicInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    partitions: Schema.optional(Schema.Number),
    replication: Schema.optional(Schema.Number),
    retention_hours: Schema.optional(Schema.Number),
    retention_bytes: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/databases/{databaseId}/topics/{topicName}",
    }),
  );
export type UpdateDatabaseTopicInput = typeof UpdateDatabaseTopicInput.Type;

// Output Schema
export const UpdateDatabaseTopicOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateDatabaseTopicOutput = typeof UpdateDatabaseTopicOutput.Type;

// The operation
/**
 * Update Database Topic
 *
 * Update topic information within a Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param topicName - The [database topic](#operation/list-database-topics).
 */
export const updateDatabaseTopic = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateDatabaseTopicInput,
  outputSchema: UpdateDatabaseTopicOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
