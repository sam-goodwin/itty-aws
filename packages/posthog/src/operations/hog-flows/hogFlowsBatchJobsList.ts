import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFlowsBatchJobsListInput {
  id: string;
  project_id: string;
}
export const HogFlowsBatchJobsListInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_flows/{id}/batch_jobs/",
    }),
  ) as unknown as Schema.Codec<HogFlowsBatchJobsListInput>;

// Output Schema
export type HogFlowsBatchJobsListOutput = {
  id: string;
  status?:
    | "waiting"
    | "queued"
    | "active"
    | "completed"
    | "cancelled"
    | "failed";
  hog_flow: string;
  filters?: unknown;
  variables?: unknown;
  created_at: string;
  created_by: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  };
  updated_at: string;
}[];
export const HogFlowsBatchJobsListOutput =
  /*@__PURE__*/ Schema.Array(
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
        role_at_organization: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals([
                "engineering",
                "data",
                "product",
                "founder",
                "leadership",
                "marketing",
                "sales",
                "other",
              ]),
              Schema.Literals([""]),
            ]),
          ),
        ),
      }),
      updated_at: Schema.String,
    }),
  ) as unknown as Schema.Codec<HogFlowsBatchJobsListOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsBatchJobsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: HogFlowsBatchJobsListInput,
  outputSchema: HogFlowsBatchJobsListOutput,
  errors: [Forbidden, NotFound] as const,
}));
