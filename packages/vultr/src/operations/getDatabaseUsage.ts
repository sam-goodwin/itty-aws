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
export const GetDatabaseUsageInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/databases/{databaseId}/usage" }));
export type GetDatabaseUsageInput = typeof GetDatabaseUsageInput.Type;

// Output Schema
export const GetDatabaseUsageOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    usage: Schema.optional(
      Schema.Struct({
        disk: Schema.optional(
          Schema.Struct({
            current_gb: Schema.optional(Schema.String),
            max_gb: Schema.optional(Schema.String),
            percentage: Schema.optional(Schema.String),
          }),
        ),
        memory: Schema.optional(
          Schema.Struct({
            current_mb: Schema.optional(Schema.String),
            max_mb: Schema.optional(Schema.String),
            percentage: Schema.optional(Schema.String),
          }),
        ),
        cpu: Schema.optional(
          Schema.Struct({
            percentage: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  },
);
export type GetDatabaseUsageOutput = typeof GetDatabaseUsageOutput.Type;

// The operation
/**
 * Get Database Usage Information
 *
 * Get disk, memory, and vCPU usage information for a Managed Database.
 *
 * @param databaseId - The [Managed Database ID](#operation/list-databases).
 */
export const getDatabaseUsage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDatabaseUsageInput,
  outputSchema: GetDatabaseUsageOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
