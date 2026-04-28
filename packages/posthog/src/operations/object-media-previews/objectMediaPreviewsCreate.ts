import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ObjectMediaPreviewsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
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
      method: "POST",
      path: "/api/projects/{project_id}/object_media_previews/",
    }),
  );
export type ObjectMediaPreviewsCreateInput =
  typeof ObjectMediaPreviewsCreateInput.Type;

// Output Schema
export const ObjectMediaPreviewsCreateOutput =
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
export type ObjectMediaPreviewsCreateOutput =
  typeof ObjectMediaPreviewsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const objectMediaPreviewsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ObjectMediaPreviewsCreateInput,
    outputSchema: ObjectMediaPreviewsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
