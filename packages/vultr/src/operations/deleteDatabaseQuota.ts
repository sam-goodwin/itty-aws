import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteDatabaseQuotaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    clientId: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/databases/{databaseId}/quotas/{clientId}/{username}",
    }),
  );
export type DeleteDatabaseQuotaInput = typeof DeleteDatabaseQuotaInput.Type;

// Output Schema
export const DeleteDatabaseQuotaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteDatabaseQuotaOutput = typeof DeleteDatabaseQuotaOutput.Type;

// The operation
/**
 * Delete Database Quota
 *
 * Delete a quota within a Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param clientId - The [database quota's client ID](#operation/list-database-quotas).
 * @param username - The [database quota's user](#operation/list-database-quotas).
 */
export const deleteDatabaseQuota = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDatabaseQuotaInput,
  outputSchema: DeleteDatabaseQuotaOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
