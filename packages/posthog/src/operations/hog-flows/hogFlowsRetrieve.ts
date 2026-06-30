import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFlowsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/hog_flows/{id}/" }),
);
export type HogFlowsRetrieveInput = typeof HogFlowsRetrieveInput.Type;

// Output Schema
export const HogFlowsRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    status: Schema.optional(Schema.Literals(["draft", "active", "archived"])),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    updated_at: Schema.optional(Schema.String),
    trigger: Schema.optional(Schema.Unknown),
    trigger_masking: Schema.optional(Schema.Unknown),
    conversion: Schema.optional(Schema.Unknown),
    exit_condition: Schema.optional(
      Schema.Literals([
        "exit_on_conversion",
        "exit_on_trigger_not_matched",
        "exit_on_trigger_not_matched_or_conversion",
        "exit_only_at_end",
      ]),
    ),
    edges: Schema.optional(
      Schema.Array(
        Schema.Struct({
          to: Schema.String,
          type: Schema.Literals(["continue", "branch"]),
          index: Schema.optional(Schema.Number),
          from: Schema.String,
        }),
      ),
    ),
    actions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          on_error: Schema.optional(Schema.Unknown),
          created_at: Schema.optional(Schema.Number),
          updated_at: Schema.optional(Schema.Number),
          filters: Schema.optional(Schema.Unknown),
          type: Schema.optional(Schema.String),
          config: Schema.optional(Schema.Unknown),
          output_variable: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    abort_action: Schema.optional(Schema.NullOr(Schema.String)),
    variables: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.String)),
    ),
    billable_action_types: Schema.optional(Schema.Unknown),
    schedules: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          rrule: Schema.optional(Schema.String),
          starts_at: Schema.optional(Schema.String),
          timezone: Schema.optional(Schema.String),
          variables: Schema.optional(Schema.Unknown),
          status: Schema.optional(
            Schema.Literals(["active", "paused", "completed"]),
          ),
          next_run_at: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  },
);
export type HogFlowsRetrieveOutput = typeof HogFlowsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HogFlowsRetrieveInput,
  outputSchema: HogFlowsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
