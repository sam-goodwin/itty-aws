import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const GetDatabaseTopicInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseId: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/databases/{databaseId}/topics/{topicName}" }),
);
export type GetDatabaseTopicInput = typeof GetDatabaseTopicInput.Type;

// Output Schema
export const GetDatabaseTopicOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    topic: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        partitions: Schema.optional(Schema.Number),
        replication: Schema.optional(Schema.Number),
        retention_hours: Schema.optional(Schema.Number),
        retention_bytes: Schema.optional(Schema.Number),
      }),
    ),
  },
);
export type GetDatabaseTopicOutput = typeof GetDatabaseTopicOutput.Type;

// The operation
/**
 * Get Database Topic
 *
 * Get information about a Managed Database topic (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param topicName - The [database topic](#operation/list-database-topics).
 */
export const getDatabaseTopic = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatabaseTopicInput,
  outputSchema: GetDatabaseTopicOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
