import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SavedPartialUpdateInput {
  project_id: string;
  short_id: string;
  name?: string | null;
  url?: string;
  data_url?: string | null;
  widths?: number[];
  type?: "screenshot" | "iframe" | "recording";
  deleted?: boolean;
  block_consent_modals?: boolean;
}
export const SavedPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    url: Schema.optional(Schema.String),
    data_url: Schema.optional(Schema.NullOr(Schema.String)),
    widths: Schema.optional(Schema.Array(Schema.Number)),
    type: Schema.optional(
      Schema.Literals(["screenshot", "iframe", "recording"]),
    ),
    deleted: Schema.optional(Schema.Boolean),
    block_consent_modals: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/saved/{short_id}/",
    }),
  ) as unknown as Schema.Codec<SavedPartialUpdateInput>;

// Output Schema
export interface SavedPartialUpdateOutput {
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
}
export const SavedPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SavedPartialUpdateOutput>;

// The operation
/**
 * Update a saved heatmap (e.g. rename, change widths, or soft-delete via 'deleted'). Changing the URL of a 'screenshot' heatmap triggers a re-render.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const savedPartialUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SavedPartialUpdateInput,
  outputSchema: SavedPartialUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
