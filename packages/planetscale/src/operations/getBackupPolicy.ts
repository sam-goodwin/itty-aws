import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetBackupPolicyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/backup-policies/{id}",
  }),
);
export type GetBackupPolicyInput = typeof GetBackupPolicyInput.Type;

// Output Schema
export const GetBackupPolicyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  display_name: Schema.String,
  name: Schema.String,
  target: Schema.Literals(["production", "development"]),
  retention_value: Schema.Number,
  retention_unit: Schema.String,
  frequency_value: Schema.Number,
  frequency_unit: Schema.String,
  schedule_time: Schema.String,
  schedule_day: Schema.NullOr(Schema.Number),
  schedule_week: Schema.NullOr(Schema.Number),
  created_at: Schema.String,
  updated_at: Schema.String,
  last_ran_at: Schema.NullOr(Schema.String),
  next_run_at: Schema.NullOr(Schema.String),
  required: Schema.Boolean,
});
export type GetBackupPolicyOutput = typeof GetBackupPolicyOutput.Type;

// The operation
/**
 * Get a backup policy
 *
 * @param id - The ID of the backup policy
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 */
export const getBackupPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBackupPolicyInput,
  outputSchema: GetBackupPolicyOutput,
  errors: [Forbidden, NotFound] as const,
}));
