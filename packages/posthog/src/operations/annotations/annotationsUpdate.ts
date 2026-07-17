import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface AnnotationsUpdateInput {
  id: number;
  project_id: string;
  content?: string | null;
  date_marker?: string | null;
  creation_type?: "USR" | "GIT";
  dashboard_item?: number | null;
  dashboard_id?: number | null;
  dashboard_name?: string | null;
  insight_short_id?: string | null;
  insight_name?: string | null;
  insight_derived_name?: string | null;
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
  created_at?: string | null;
  updated_at?: string;
  deleted?: boolean;
  scope?:
    | "dashboard_item"
    | "dashboard"
    | "project"
    | "organization"
    | "recording";
  emoji?: string | null;
  hidden_in_user_interface?: boolean | null;
}
export const AnnotationsUpdateInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.Number.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  content: Schema.optional(Schema.NullOr(Schema.String)),
  date_marker: Schema.optional(Schema.NullOr(Schema.String)),
  creation_type: Schema.optional(Schema.Literals(["USR", "GIT"])),
  dashboard_item: Schema.optional(Schema.NullOr(Schema.Number)),
  dashboard_id: Schema.optional(Schema.NullOr(Schema.Number)),
  dashboard_name: Schema.optional(Schema.NullOr(Schema.String)),
  insight_short_id: Schema.optional(Schema.NullOr(Schema.String)),
  insight_name: Schema.optional(Schema.NullOr(Schema.String)),
  insight_derived_name: Schema.optional(Schema.NullOr(Schema.String)),
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
  created_at: Schema.optional(Schema.NullOr(Schema.String)),
  updated_at: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
  scope: Schema.optional(
    Schema.Literals([
      "dashboard_item",
      "dashboard",
      "project",
      "organization",
      "recording",
    ]),
  ),
  emoji: Schema.optional(Schema.NullOr(Schema.String)),
  hidden_in_user_interface: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/api/projects/{project_id}/annotations/{id}/",
  }),
) as unknown as Schema.Codec<AnnotationsUpdateInput>;

// Output Schema
export interface AnnotationsUpdateOutput {
  id?: number;
  content?: string | null;
  date_marker?: string | null;
  creation_type?: "USR" | "GIT";
  dashboard_item?: number | null;
  dashboard_id?: number | null;
  dashboard_name?: string | null;
  insight_short_id?: string | null;
  insight_name?: string | null;
  insight_derived_name?: string | null;
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
  created_at?: string | null;
  updated_at?: string;
  deleted?: boolean;
  scope?:
    | "dashboard_item"
    | "dashboard"
    | "project"
    | "organization"
    | "recording";
  emoji?: string | null;
  hidden_in_user_interface?: boolean | null;
}
export const AnnotationsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    content: Schema.optional(Schema.NullOr(Schema.String)),
    date_marker: Schema.optional(Schema.NullOr(Schema.String)),
    creation_type: Schema.optional(Schema.Literals(["USR", "GIT"])),
    dashboard_item: Schema.optional(Schema.NullOr(Schema.Number)),
    dashboard_id: Schema.optional(Schema.NullOr(Schema.Number)),
    dashboard_name: Schema.optional(Schema.NullOr(Schema.String)),
    insight_short_id: Schema.optional(Schema.NullOr(Schema.String)),
    insight_name: Schema.optional(Schema.NullOr(Schema.String)),
    insight_derived_name: Schema.optional(Schema.NullOr(Schema.String)),
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
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
    updated_at: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    scope: Schema.optional(
      Schema.Literals([
        "dashboard_item",
        "dashboard",
        "project",
        "organization",
        "recording",
      ]),
    ),
    emoji: Schema.optional(Schema.NullOr(Schema.String)),
    hidden_in_user_interface: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }) as unknown as Schema.Codec<AnnotationsUpdateOutput>;

// The operation
/**
 * Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/data/annotations) for more information on annotations.
 *
 * @param id - A unique integer value identifying this annotation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const annotationsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AnnotationsUpdateInput,
  outputSchema: AnnotationsUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
