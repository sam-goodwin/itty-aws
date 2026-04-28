import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ObjectMediaPreviewsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
    media_url: Schema.String,
    media_type: Schema.String,
    metadata: Schema.optional(Schema.Unknown),
    uploaded_media_id: Schema.optional(Schema.NullOr(Schema.String)),
    exported_asset_id: Schema.optional(Schema.NullOr(Schema.String)),
    event_definition_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/object_media_previews/{id}/",
    }),
  );
export type ObjectMediaPreviewsUpdateInput =
  typeof ObjectMediaPreviewsUpdateInput.Type;

// Output Schema
export const ObjectMediaPreviewsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
    media_url: Schema.String,
    media_type: Schema.String,
    metadata: Schema.optional(Schema.Unknown),
    uploaded_media_id: Schema.optional(Schema.NullOr(Schema.String)),
    exported_asset_id: Schema.optional(Schema.NullOr(Schema.String)),
    event_definition_id: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type ObjectMediaPreviewsUpdateOutput =
  typeof ObjectMediaPreviewsUpdateOutput.Type;

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
