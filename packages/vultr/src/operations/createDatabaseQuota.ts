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
export const CreateDatabaseQuotaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    client_id: Schema.String,
    user: Schema.String,
    consumer_byte_rate: Schema.Number,
    producer_byte_rate: Schema.Number,
    request_percentage: Schema.Number,
  }).pipe(T.Http({ method: "POST", path: "/databases/{databaseId}/quotas" }));
export type CreateDatabaseQuotaInput = typeof CreateDatabaseQuotaInput.Type;

// Output Schema
export const CreateDatabaseQuotaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    quota: Schema.optional(
      Schema.Struct({
        client_id: Schema.optional(Schema.String),
        user: Schema.optional(Schema.String),
        consumer_byte_rate: Schema.optional(Schema.Number),
        producer_byte_rate: Schema.optional(Schema.Number),
        request_percentage: Schema.optional(Schema.Number),
      }),
    ),
  });
export type CreateDatabaseQuotaOutput = typeof CreateDatabaseQuotaOutput.Type;

// The operation
/**
 * Create Database Quota
 *
 * Create a new quota within the Managed Database (Kafka engine types only).
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const createDatabaseQuota = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateDatabaseQuotaInput,
  outputSchema: CreateDatabaseQuotaOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
