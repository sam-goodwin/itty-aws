import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExperimentSavedMetricsUpdateInput {
  id: number;
  project_id: string;
  name?: string;
  description?: string | null;
  query?: unknown;
  created_by?: {
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
  } | null;
  created_at?: string;
  updated_at?: string;
  tags?: unknown[];
  user_access_level?: string | null;
}
export const ExperimentSavedMetricsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    query: Schema.optional(Schema.Unknown),
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
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/experiment_saved_metrics/{id}/",
    }),
  ) as unknown as Schema.Codec<ExperimentSavedMetricsUpdateInput>;

// Output Schema
export interface ExperimentSavedMetricsUpdateOutput {
  id?: number;
  name?: string;
  description?: string | null;
  query?: unknown;
  created_by?: {
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
  } | null;
  created_at?: string;
  updated_at?: string;
  tags?: unknown[];
  user_access_level?: string | null;
}
export const ExperimentSavedMetricsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    query: Schema.optional(Schema.Unknown),
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
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<ExperimentSavedMetricsUpdateOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this experiment saved metric.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const experimentSavedMetricsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExperimentSavedMetricsUpdateInput,
    outputSchema: ExperimentSavedMetricsUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
