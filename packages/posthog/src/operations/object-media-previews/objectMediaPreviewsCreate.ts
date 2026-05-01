import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ObjectMediaPreviewsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
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
      method: "POST",
      path: "/api/projects/{project_id}/object_media_previews/",
    }),
  );
export type ObjectMediaPreviewsCreateInput =
  typeof ObjectMediaPreviewsCreateInput.Type;

// Output Schema
export const ObjectMediaPreviewsCreateOutput =
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
