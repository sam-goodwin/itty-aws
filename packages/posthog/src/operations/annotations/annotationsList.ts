import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface AnnotationsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
  search?: string;
}
export const AnnotationsListInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/annotations/" }),
) as unknown as Schema.Codec<AnnotationsListInput>;

// Output Schema
export interface AnnotationsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
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
  }[];
}
export const AnnotationsListOutput = /*@__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
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
        hidden_in_user_interface: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<AnnotationsListOutput>;

// The operation
/**
 * Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/data/annotations) for more information on annotations.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const annotationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AnnotationsListInput,
  outputSchema: AnnotationsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
