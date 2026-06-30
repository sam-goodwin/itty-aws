import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DashboardTemplatesUpdateInput {
  id: string;
  project_id: string;
  template_name?: string | null;
  dashboard_description?: string | null;
  dashboard_filters?: unknown;
  tags?: string[] | null;
  tiles?: unknown;
  variables?: unknown;
  deleted?: boolean | null;
  created_at?: string | null;
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
  image_url?: string | null;
  team_id?: number | null;
  scope?: "team" | "organization" | "global" | "feature_flag" | "" | null;
  availability_contexts?: string[] | null;
  is_featured?: boolean;
  non_portable_references?: {
    actions: number;
    cohorts: number;
    warehouse_tables: string[];
  };
}
export const DashboardTemplatesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    template_name: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_description: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_filters: Schema.optional(Schema.Unknown),
    tags: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    tiles: Schema.optional(Schema.Unknown),
    variables: Schema.optional(Schema.Unknown),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
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
    image_url: Schema.optional(Schema.NullOr(Schema.String)),
    team_id: Schema.optional(Schema.NullOr(Schema.Number)),
    scope: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["team", "organization", "global", "feature_flag"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
    availability_contexts: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    is_featured: Schema.optional(Schema.Boolean),
    non_portable_references: Schema.optional(
      Schema.Struct({
        actions: Schema.Number,
        cohorts: Schema.Number,
        warehouse_tables: Schema.Array(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/dashboard_templates/{id}/",
    }),
  ) as unknown as Schema.Codec<DashboardTemplatesUpdateInput>;

// Output Schema
export interface DashboardTemplatesUpdateOutput {
  id?: string;
  template_name?: string | null;
  dashboard_description?: string | null;
  dashboard_filters?: unknown;
  tags?: string[] | null;
  tiles?: unknown;
  variables?: unknown;
  deleted?: boolean | null;
  created_at?: string | null;
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
  image_url?: string | null;
  team_id?: number | null;
  scope?: "team" | "organization" | "global" | "feature_flag" | "" | null;
  availability_contexts?: string[] | null;
  is_featured?: boolean;
  non_portable_references?: {
    actions: number;
    cohorts: number;
    warehouse_tables: string[];
  };
}
export const DashboardTemplatesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    template_name: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_description: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_filters: Schema.optional(Schema.Unknown),
    tags: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    tiles: Schema.optional(Schema.Unknown),
    variables: Schema.optional(Schema.Unknown),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
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
    image_url: Schema.optional(Schema.NullOr(Schema.String)),
    team_id: Schema.optional(Schema.NullOr(Schema.Number)),
    scope: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["team", "organization", "global", "feature_flag"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
    availability_contexts: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    is_featured: Schema.optional(Schema.Boolean),
    non_portable_references: Schema.optional(
      Schema.Struct({
        actions: Schema.Number,
        cohorts: Schema.Number,
        warehouse_tables: Schema.Array(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DashboardTemplatesUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this dashboard template.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardTemplatesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DashboardTemplatesUpdateInput,
    outputSchema: DashboardTemplatesUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
