import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SavedListInput {
  project_id: string;
  created_by?: number;
  limit?: number;
  offset?: number;
  order?: string;
  search?: string;
  status?: string;
  type?: string;
}
export const SavedListInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  created_by: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  order: Schema.optional(Schema.String),
  search: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/saved/" }),
) as unknown as Schema.Codec<SavedListInput>;

// Output Schema
export type SavedListOutput = {
  results: {
    id?: string;
    short_id?: string;
    name?: string | null;
    url?: string;
    data_url?: string | null;
    target_widths?: unknown;
    type?: "screenshot" | "iframe" | "recording";
    status?: "processing" | "completed" | "failed";
    has_content?: boolean;
    snapshots?: { width: number; has_content: boolean }[];
    deleted?: boolean;
    block_consent_modals?: boolean;
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
    exception?: string | null;
  }[];
  count: number;
}[];
export const SavedListOutput = /*@__PURE__*/ Schema.Array(
  Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        short_id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        url: Schema.optional(Schema.String),
        data_url: Schema.optional(Schema.NullOr(Schema.String)),
        target_widths: Schema.optional(Schema.Unknown),
        type: Schema.optional(
          Schema.Literals(["screenshot", "iframe", "recording"]),
        ),
        status: Schema.optional(
          Schema.Literals(["processing", "completed", "failed"]),
        ),
        has_content: Schema.optional(Schema.Boolean),
        snapshots: Schema.optional(
          Schema.Array(
            Schema.Struct({
              width: Schema.Number,
              has_content: Schema.Boolean,
            }),
          ),
        ),
        deleted: Schema.optional(Schema.Boolean),
        block_consent_modals: Schema.optional(Schema.Boolean),
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
        exception: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    count: Schema.Number,
  }),
) as unknown as Schema.Codec<SavedListOutput>;

// The operation
/**
 * List saved heatmaps for the project. A saved heatmap pins a page URL and a set of viewport widths, and (for type 'screenshot') renders the page so heatmap data can be overlaid on it.
 *
 * @param created_by - Filter by the creating user's ID.
 * @param limit - Maximum saved heatmaps to return.
 * @param offset - Number to skip, for pagination.
 * @param order - Field to order by, e.g. '-updated_at' (default) or 'created_at'.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Case-insensitive substring match on URL or name.
 * @param status - Filter by generation status: 'processing', 'completed', or 'failed'.
 * @param type - Filter by render mode: 'screenshot', 'iframe', or 'recording'.
 */
export const savedList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SavedListInput,
  outputSchema: SavedListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
