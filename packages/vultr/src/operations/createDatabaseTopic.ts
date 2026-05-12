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
export const CreateDatabaseTopicInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    partitions: Schema.Number,
    replication: Schema.Number,
    retention_hours: Schema.Number,
    retention_bytes: Schema.Number,
  }).pipe(T.Http({ method: "POST", path: "/databases/{databaseId}/topics" }));
export type CreateDatabaseTopicInput = typeof CreateDatabaseTopicInput.Type;

// Output Schema
export const CreateDatabaseTopicOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topic: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        partitions: Schema.optional(Schema.Number),
        replication: Schema.optional(Schema.Number),
        retention_hours: Schema.optional(Schema.Number),
        retention_bytes: Schema.optional(Schema.Number),
      }),
    ),
  });
export type CreateDatabaseTopicOutput = typeof CreateDatabaseTopicOutput.Type;

// The operation
/**
 * Create Database Topic
 *
 * Create a new topic within the Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const createDatabaseTopic = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateDatabaseTopicInput,
  outputSchema: CreateDatabaseTopicOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
