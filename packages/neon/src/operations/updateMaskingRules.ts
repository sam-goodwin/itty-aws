import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface UpdateMaskingRulesInput {
  project_id: string;
  branch_id: string;
  masking_rules: {
    database_name: string;
    schema_name: string;
    table_name: string;
    column_name: string;
    masking_function?: string;
    masking_value?: string;
  }[];
}
export const UpdateMaskingRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    branch_id: Schema.String.pipe(T.PathParam()),
    masking_rules: Schema.Array(
      Schema.Struct({
        database_name: Schema.String,
        schema_name: Schema.String,
        table_name: Schema.String,
        column_name: Schema.String,
        masking_function: Schema.optional(Schema.String),
        masking_value: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/branches/{branch_id}/masking_rules",
    }),
  ) as unknown as Schema.Codec<UpdateMaskingRulesInput>;

// Output Schema
export interface UpdateMaskingRulesOutput {
  masking_rules: {
    database_name: string;
    schema_name: string;
    table_name: string;
    column_name: string;
    masking_function?: string;
    masking_value?: string;
  }[];
}
export const UpdateMaskingRulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    masking_rules: Schema.Array(
      Schema.Struct({
        database_name: Schema.String,
        schema_name: Schema.String,
        table_name: Schema.String,
        column_name: Schema.String,
        masking_function: Schema.optional(Schema.String),
        masking_value: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<UpdateMaskingRulesOutput>;

// The operation
/**
 * Update masking rules
 *
 * Updates the masking rules for the specified anonymized branch.
 * Masking rules define how sensitive data should be anonymized using PostgreSQL Anonymizer.
 * **Note**: This endpoint is currently in Beta.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID
 */
export const updateMaskingRules = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateMaskingRulesInput,
  outputSchema: UpdateMaskingRulesOutput,
}));
