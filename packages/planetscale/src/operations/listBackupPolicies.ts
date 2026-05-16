import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListBackupPoliciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/backup-policies",
    }),
  );
export type ListBackupPoliciesInput = typeof ListBackupPoliciesInput.Type;

// Output Schema
export const ListBackupPoliciesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  });
export type ListBackupPoliciesOutput = typeof ListBackupPoliciesOutput.Type;

// The operation
/**
 * List backup policies
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listBackupPolicies = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(
  () => ({
    inputSchema: ListBackupPoliciesInput,
    outputSchema: ListBackupPoliciesOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }),
);
