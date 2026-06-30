import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFlowsBatchJobsCreateInput {
  id: string;
  project_id: string;
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
}
export const HogFlowsBatchJobsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/hog_flows/{id}/batch_jobs/",
    }),
  ) as unknown as Schema.Codec<HogFlowsBatchJobsCreateInput>;

// Output Schema
export interface HogFlowsBatchJobsCreateOutput {
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
}
export const HogFlowsBatchJobsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<HogFlowsBatchJobsCreateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsBatchJobsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFlowsBatchJobsCreateInput,
    outputSchema: HogFlowsBatchJobsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
