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
export const GetConnectionPoolInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    databaseId: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/databases/{databaseId}/connection-pools/{poolName}",
  }),
);
export type GetConnectionPoolInput = typeof GetConnectionPoolInput.Type;

// Output Schema
export const GetConnectionPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connection_pool: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        database: Schema.optional(Schema.String),
        username: Schema.optional(Schema.String),
        mode: Schema.optional(Schema.String),
        size: Schema.optional(Schema.Number),
      }),
    ),
  });
export type GetConnectionPoolOutput = typeof GetConnectionPoolOutput.Type;

// The operation
/**
 * Get Connection Pool
 *
 * Get information about a Managed Database connection pool (PostgreSQL engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param poolName - The [connection pool name](#operation/list-connection-pools).
 */
export const getConnectionPool = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetConnectionPoolInput,
  outputSchema: GetConnectionPoolOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
