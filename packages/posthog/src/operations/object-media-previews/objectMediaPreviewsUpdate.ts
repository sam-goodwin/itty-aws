import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ObjectMediaPreviewsUpdateInput {
  id: string;
  project_id: string;
  created_at?: string;
  updated_at?: string | null;
  media_url?: string;
  media_type?: string;
  metadata?: unknown;
  uploaded_media_id?: string | null;
  exported_asset_id?: string | null;
  event_definition_id?: string | null;
}
export const ObjectMediaPreviewsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    media_url: Schema.optional(Schema.String),
    media_type: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Unknown),
    uploaded_media_id: Schema.optional(Schema.NullOr(Schema.String)),
    exported_asset_id: Schema.optional(Schema.NullOr(Schema.String)),
    event_definition_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/object_media_previews/{id}/",
    }),
  ) as unknown as Schema.Codec<ObjectMediaPreviewsUpdateInput>;

// Output Schema
export interface ObjectMediaPreviewsUpdateOutput {
  id?: string;
  created_at?: string;
  updated_at?: string | null;
  media_url?: string;
  media_type?: string;
  metadata?: unknown;
  uploaded_media_id?: string | null;
  exported_asset_id?: string | null;
  event_definition_id?: string | null;
}
export const ObjectMediaPreviewsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    media_url: Schema.optional(Schema.String),
    media_type: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Unknown),
    uploaded_media_id: Schema.optional(Schema.NullOr(Schema.String)),
    exported_asset_id: Schema.optional(Schema.NullOr(Schema.String)),
    event_definition_id: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<ObjectMediaPreviewsUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this object media preview.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const objectMediaPreviewsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ObjectMediaPreviewsUpdateInput,
    outputSchema: ObjectMediaPreviewsUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
