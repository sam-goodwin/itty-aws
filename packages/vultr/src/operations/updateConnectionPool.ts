import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateConnectionPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    database: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
    size: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/databases/{databaseId}/connection-pools/{poolName}",
    }),
  );
export type UpdateConnectionPoolInput = typeof UpdateConnectionPoolInput.Type;

// Output Schema
export const UpdateConnectionPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateConnectionPoolOutput = typeof UpdateConnectionPoolOutput.Type;

// The operation
/**
 * Update Connection Pool
 *
 * Update connection-pool information within a Managed Database (PostgreSQL engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param poolName - The [connection pool name](#operation/list-connection-pools).
 */
export const updateConnectionPool = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateConnectionPoolInput,
    outputSchema: UpdateConnectionPoolOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }),
);
