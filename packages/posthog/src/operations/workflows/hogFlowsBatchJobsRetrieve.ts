import * as Schema from "effect/Schema";
import {
  ExitConditionEnumSchema,
  HogFlowActionSchema,
  HogFlowStatusEnumSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFlowsBatchJobsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_flows/{id}/batch_jobs/",
    }),
  );
export type HogFlowsBatchJobsRetrieveInput =
  typeof HogFlowsBatchJobsRetrieveInput.Type;

// Output Schema
export const HogFlowsBatchJobsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    status: Schema.optional(Schema.suspend(() => HogFlowStatusEnumSchema)),
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
      Schema.suspend(() => ExitConditionEnumSchema),
    ),
    edges: Schema.optional(Schema.Unknown),
    actions: Schema.optional(
      Schema.Array(Schema.suspend(() => HogFlowActionSchema)),
    ),
    abort_action: Schema.optional(Schema.NullOr(Schema.String)),
    variables: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.String)),
    ),
    billable_action_types: Schema.optional(Schema.NullOr(Schema.Unknown)),
  });
export type HogFlowsBatchJobsRetrieveOutput =
  typeof HogFlowsBatchJobsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsBatchJobsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFlowsBatchJobsRetrieveInput,
    outputSchema: HogFlowsBatchJobsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
