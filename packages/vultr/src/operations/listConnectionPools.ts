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
export const ListConnectionPoolsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/databases/{databaseId}/connection-pools" }),
  );
export type ListConnectionPoolsInput = typeof ListConnectionPoolsInput.Type;

// Output Schema
export const ListConnectionPoolsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connections: Schema.optional(
      Schema.Struct({
        used: Schema.optional(Schema.Number),
        available: Schema.optional(Schema.Number),
        max: Schema.optional(Schema.Number),
      }),
    ),
    connection_pools: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          database: Schema.optional(Schema.String),
          username: Schema.optional(Schema.String),
          mode: Schema.optional(Schema.String),
          size: Schema.optional(Schema.Number),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ListConnectionPoolsOutput = typeof ListConnectionPoolsOutput.Type;

// The operation
/**
 * List Connection Pools
 *
 * List all connection pools within the Managed Database (PostgreSQL engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const listConnectionPools = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListConnectionPoolsInput,
  outputSchema: ListConnectionPoolsOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
