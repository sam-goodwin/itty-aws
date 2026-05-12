import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateDatabaseQuotaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    clientId: Schema.String.pipe(T.PathParam()),
    username: Schema.String.pipe(T.PathParam()),
    consumer_byte_rate: Schema.Number,
    producer_byte_rate: Schema.Number,
    request_percentage: Schema.Number,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/databases/{databaseId}/quotas/{clientId}/{username}",
    }),
  );
export type UpdateDatabaseQuotaInput = typeof UpdateDatabaseQuotaInput.Type;

// Output Schema
export const UpdateDatabaseQuotaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateDatabaseQuotaOutput = typeof UpdateDatabaseQuotaOutput.Type;

// The operation
/**
 * Update Database Quota
 *
 * Update quota information within a Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param clientId - The [database quota's client ID](#operation/list-database-quotas).
 * @param username - The [database quota's user](#operation/list-database-quotas).
 */
export const updateDatabaseQuota = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateDatabaseQuotaInput,
  outputSchema: UpdateDatabaseQuotaOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
