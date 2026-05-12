import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListDatabaseTopicsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/databases/{databaseId}/topics" }));
export type ListDatabaseTopicsInput = typeof ListDatabaseTopicsInput.Type;

// Output Schema
export const ListDatabaseTopicsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topics: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          partitions: Schema.optional(Schema.Number),
          replication: Schema.optional(Schema.Number),
          retention_hours: Schema.optional(Schema.Number),
          retention_bytes: Schema.optional(Schema.Number),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ListDatabaseTopicsOutput = typeof ListDatabaseTopicsOutput.Type;

// The operation
/**
 * List Database Topics
 *
 * List all topics within the Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const listDatabaseTopics = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListDatabaseTopicsInput,
  outputSchema: ListDatabaseTopicsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
