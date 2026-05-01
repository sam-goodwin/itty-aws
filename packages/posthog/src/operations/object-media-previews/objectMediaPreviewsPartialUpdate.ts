import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ObjectMediaPreviewsPartialUpdateInput =
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
      method: "PATCH",
      path: "/api/projects/{project_id}/object_media_previews/{id}/",
    }),
  );
export type ObjectMediaPreviewsPartialUpdateInput =
  typeof ObjectMediaPreviewsPartialUpdateInput.Type;

// Output Schema
export const ObjectMediaPreviewsPartialUpdateOutput =
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
  });
export type ObjectMediaPreviewsPartialUpdateOutput =
  typeof ObjectMediaPreviewsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this object media preview.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const objectMediaPreviewsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ObjectMediaPreviewsPartialUpdateInput,
    outputSchema: ObjectMediaPreviewsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
