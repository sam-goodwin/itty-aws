import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SavedRegenerateCreateInput {
  project_id: string;
  short_id: string;
}
export const SavedRegenerateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/saved/{short_id}/regenerate/",
    }),
  ) as unknown as Schema.Codec<SavedRegenerateCreateInput>;

// Output Schema
export interface SavedRegenerateCreateOutput {
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
export const SavedRegenerateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SavedRegenerateCreateOutput>;

// The operation
/**
 * Re-run screenshot generation for a saved heatmap of type 'screenshot'. Clears existing renders and re-renders at every target width; status returns to 'processing'.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const savedRegenerateCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavedRegenerateCreateInput,
    outputSchema: SavedRegenerateCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
