import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface DashboardsListInput {
  project_id: string;
  folder?: string;
  format?: "json" | "txt";
  limit?: number;
  offset?: number;
  search?: string;
}
export const DashboardsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  folder: Schema.optional(Schema.String),
  format: Schema.optional(Schema.Literals(["json", "txt"])),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/dashboards/" }),
) as unknown as Schema.Codec<DashboardsListInput>;

// Output Schema
export interface DashboardsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: number;
    name?: string | null;
    description?: string;
    pinned?: boolean;
    created_at?: string;
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
    last_accessed_at?: string | null;
    last_viewed_at?: string | null;
    folder?: string | null;
    is_shared?: boolean;
    deleted?: boolean;
    creation_mode?: "default" | "template" | "duplicate" | "unlisted";
    tags?: unknown[];
    restriction_level?: 21 | 37;
    effective_restriction_level?: 21 | 37;
    effective_privilege_level?: 21 | 37;
    user_access_level?: string | null;
    access_control_version?: string;
    last_refresh?: string | null;
    team_id?: number;
    search_match_type?: "exact" | "similar" | null;
  }[];
}
export const DashboardsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        description: Schema.optional(Schema.String),
        pinned: Schema.optional(Schema.Boolean),
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
        last_accessed_at: Schema.optional(Schema.NullOr(Schema.String)),
        last_viewed_at: Schema.optional(Schema.NullOr(Schema.String)),
        folder: Schema.optional(Schema.NullOr(Schema.String)),
        is_shared: Schema.optional(Schema.Boolean),
        deleted: Schema.optional(Schema.Boolean),
        creation_mode: Schema.optional(
          Schema.Literals(["default", "template", "duplicate", "unlisted"]),
        ),
        tags: Schema.optional(Schema.Array(Schema.Unknown)),
        restriction_level: Schema.optional(Schema.Literals([21, 37])),
        effective_restriction_level: Schema.optional(Schema.Literals([21, 37])),
        effective_privilege_level: Schema.optional(Schema.Literals([21, 37])),
        user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
        access_control_version: Schema.optional(Schema.String),
        last_refresh: Schema.optional(Schema.NullOr(Schema.String)),
        team_id: Schema.optional(Schema.Number),
        search_match_type: Schema.optional(
          Schema.NullOr(Schema.Literals(["exact", "similar"])),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<DashboardsListOutput>;

// The operation
/**
 *
 * @param folder - Optional. Return only dashboards filed directly in this project-tree folder, e.g. 'Unfiled/Dashboards'. An empty string matches dashboards at the project root. Nested sub-folders are not included.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Optional. Match against dashboard `name`, `description`, and tag names. Returns case-insensitive substring matches and fuzzy trigram matches (typos, transpositions, prefix-as-you-type) together, ordered exact-first, then pinned status, then name; each result's `search_match_type` is `exact` or `similar`. When omitted, dashboards are ordered by pinned status then alphabetical name. Capped at 200 characters; longer queries return a 400 error.
 */
export const dashboardsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DashboardsListInput,
  outputSchema: DashboardsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
