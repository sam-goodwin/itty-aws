import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListDatabaseQuotasInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/databases/{databaseId}/quotas" }));
export type ListDatabaseQuotasInput = typeof ListDatabaseQuotasInput.Type;

// Output Schema
export const ListDatabaseQuotasOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quotas: Schema.optional(
      Schema.Array(
        Schema.Struct({
          client_id: Schema.optional(Schema.String),
          user: Schema.optional(Schema.String),
          consumer_byte_rate: Schema.optional(Schema.Number),
          producer_byte_rate: Schema.optional(Schema.Number),
          request_percentage: Schema.optional(Schema.Number),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type ListDatabaseQuotasOutput = typeof ListDatabaseQuotasOutput.Type;

// The operation
/**
 * List Database Quotas
 *
 * List all quotas within the Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const listDatabaseQuotas = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListDatabaseQuotasInput,
  outputSchema: ListDatabaseQuotasOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
