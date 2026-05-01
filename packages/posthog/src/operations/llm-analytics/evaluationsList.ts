import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EvaluationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  enabled: Schema.optional(Schema.Boolean),
  id__in: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  order_by: Schema.optional(Schema.String),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/environments/{project_id}/evaluations/",
  }),
);
export type EvaluationsListInput = typeof EvaluationsListInput.Type;

// Output Schema
export const EvaluationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      description: Schema.optional(Schema.String),
      enabled: Schema.optional(Schema.Boolean),
      status: Schema.Literals(["active", "paused", "error"]),
      status_reason: Schema.Unknown,
      evaluation_type: Schema.Literals(["llm_judge", "hog"]),
      evaluation_config: Schema.optional(Schema.Unknown),
      output_type: Schema.Literals(["boolean"]),
      output_config: Schema.optional(
        Schema.Struct({
          allows_na: Schema.optional(Schema.Boolean),
        }),
      ),
      conditions: Schema.optional(Schema.Unknown),
      model_configuration: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            provider: Schema.Literals([
              "openai",
              "anthropic",
              "gemini",
              "openrouter",
              "fireworks",
              "azure_openai",
            ]),
            model: Schema.String,
            provider_key_id: Schema.optional(Schema.NullOr(Schema.String)),
            provider_key_name: Schema.NullOr(Schema.String),
          }),
        ),
      ),
      created_at: Schema.String,
      updated_at: Schema.String,
      created_by: Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
      deleted: Schema.optional(Schema.Boolean),
    }),
  ),
});
export type EvaluationsListOutput = typeof EvaluationsListOutput.Type;

// The operation
/**
 *
 * @param enabled - Filter by enabled status
 * @param id__in - Multiple values may be separated by commas.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Ordering

* `created_at` - Created At
* `-created_at` - Created At (descending)
* `updated_at` - Updated At
* `-updated_at` - Updated At (descending)
* `name` - Name
* `-name` - Name (descending)
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search in name or description
 */
export const evaluationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EvaluationsListInput,
  outputSchema: EvaluationsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
