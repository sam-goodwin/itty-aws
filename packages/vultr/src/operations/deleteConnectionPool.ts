import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteConnectionPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/databases/{databaseId}/connection-pools/{poolName}",
    }),
  );
export type DeleteConnectionPoolInput = typeof DeleteConnectionPoolInput.Type;

// Output Schema
export const DeleteConnectionPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteConnectionPoolOutput = typeof DeleteConnectionPoolOutput.Type;

// The operation
/**
 * Delete Connection Pool
 *
 * Delete a connection pool within a Managed Database (PostgreSQL engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param poolName - The [connection pool name](#operation/list-connection-pools).
 */
export const deleteConnectionPool = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteConnectionPoolInput,
    outputSchema: DeleteConnectionPoolOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
