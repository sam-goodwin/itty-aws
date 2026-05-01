import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFlowsSchedulesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    updated_at: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    status: Schema.optional(Schema.Literals(["draft", "active", "archived"])),
    trigger: Schema.optional(Schema.Unknown),
    trigger_masking: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          ttl: Schema.optional(Schema.NullOr(Schema.Number)),
          threshold: Schema.optional(Schema.NullOr(Schema.Number)),
          hash: Schema.optional(Schema.String),
          bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
        }),
      ),
    ),
    conversion: Schema.optional(Schema.NullOr(Schema.Unknown)),
    exit_condition: Schema.optional(
      Schema.Literals([
        "exit_on_conversion",
        "exit_on_trigger_not_matched",
        "exit_on_trigger_not_matched_or_conversion",
        "exit_only_at_end",
      ]),
    ),
    edges: Schema.optional(Schema.Unknown),
    actions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          on_error: Schema.optional(Schema.Unknown),
          created_at: Schema.optional(Schema.Number),
          updated_at: Schema.optional(Schema.Number),
          filters: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                source: Schema.optional(
                  Schema.Literals([
                    "events",
                    "person-updates",
                    "data-warehouse-table",
                  ]),
                ),
                actions: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                events: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                data_warehouse: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                properties: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
                transpiled: Schema.optional(Schema.Unknown),
                filter_test_accounts: Schema.optional(Schema.Boolean),
                bytecode_error: Schema.optional(Schema.String),
              }),
            ),
          ),
          type: Schema.optional(Schema.String),
          config: Schema.optional(Schema.Unknown),
          output_variable: Schema.optional(Schema.NullOr(Schema.Unknown)),
        }),
      ),
    ),
    abort_action: Schema.optional(Schema.NullOr(Schema.String)),
    variables: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.String)),
    ),
    billable_action_types: Schema.optional(Schema.NullOr(Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/hog_flows/{id}/schedules/",
    }),
  );
export type HogFlowsSchedulesCreateInput =
  typeof HogFlowsSchedulesCreateInput.Type;

// Output Schema
export const HogFlowsSchedulesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
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
  });
export type HogFlowsSchedulesCreateOutput =
  typeof HogFlowsSchedulesCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsSchedulesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFlowsSchedulesCreateInput,
    outputSchema: HogFlowsSchedulesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
