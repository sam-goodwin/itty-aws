import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetDatabaseQuotaInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseId: Schema.String.pipe(T.PathParam()),
  clientId: Schema.String.pipe(T.PathParam()),
  username: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/databases/{databaseId}/quotas/{clientId}/{username}",
  }),
);
export type GetDatabaseQuotaInput = typeof GetDatabaseQuotaInput.Type;

// Output Schema
export const GetDatabaseQuotaOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    quota: Schema.optional(
      Schema.Struct({
        client_id: Schema.optional(Schema.String),
        user: Schema.optional(Schema.String),
        consumer_byte_rate: Schema.optional(Schema.Number),
        producer_byte_rate: Schema.optional(Schema.Number),
        request_percentage: Schema.optional(Schema.Number),
      }),
    ),
  },
);
export type GetDatabaseQuotaOutput = typeof GetDatabaseQuotaOutput.Type;

// The operation
/**
 * Get Database Quota
 *
 * Get information about a Managed Database quota (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 * @param clientId - The [database quota's client ID](#operation/list-database-quotas).
 * @param username - The [database quota's user](#operation/list-database-quotas).
 */
export const getDatabaseQuota = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatabaseQuotaInput,
  outputSchema: GetDatabaseQuotaOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
