import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFlowsBatchJobsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_flows/{id}/batch_jobs/",
    }),
  );
export type HogFlowsBatchJobsListInput = typeof HogFlowsBatchJobsListInput.Type;

// Output Schema
export const HogFlowsBatchJobsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      status: Schema.optional(
        Schema.Literals([
          "waiting",
          "queued",
          "active",
          "completed",
          "cancelled",
          "failed",
        ]),
      ),
      hog_flow: Schema.String,
      filters: Schema.optional(Schema.Unknown),
      variables: Schema.optional(Schema.Unknown),
      created_at: Schema.String,
      created_by: Schema.Struct({
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
      updated_at: Schema.String,
    }),
  );
export type HogFlowsBatchJobsListOutput =
  typeof HogFlowsBatchJobsListOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsBatchJobsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFlowsBatchJobsListInput,
    outputSchema: HogFlowsBatchJobsListOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
