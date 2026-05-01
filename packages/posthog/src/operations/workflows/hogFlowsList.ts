import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFlowsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  updated_at: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/hog_flows/" }),
);
export type HogFlowsListInput = typeof HogFlowsListInput.Type;

// Output Schema
export const HogFlowsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.NullOr(Schema.String),
      description: Schema.String,
      version: Schema.Number,
      status: Schema.Literals(["draft", "active", "archived"]),
      created_at: Schema.String,
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
      updated_at: Schema.String,
      trigger: Schema.Unknown,
      trigger_masking: Schema.NullOr(Schema.Unknown),
      conversion: Schema.NullOr(Schema.Unknown),
      exit_condition: Schema.Literals([
        "exit_on_conversion",
        "exit_on_trigger_not_matched",
        "exit_on_trigger_not_matched_or_conversion",
        "exit_only_at_end",
      ]),
      edges: Schema.Unknown,
      actions: Schema.Unknown,
      abort_action: Schema.NullOr(Schema.String),
      variables: Schema.NullOr(Schema.Unknown),
      billable_action_types: Schema.NullOr(Schema.Unknown),
    }),
  ),
});
export type HogFlowsListOutput = typeof HogFlowsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HogFlowsListInput,
  outputSchema: HogFlowsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
