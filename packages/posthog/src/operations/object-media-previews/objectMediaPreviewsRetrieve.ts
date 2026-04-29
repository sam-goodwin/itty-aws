import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ObjectMediaPreviewsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/object_media_previews/{id}/",
    }),
  );
export type ObjectMediaPreviewsRetrieveInput =
  typeof ObjectMediaPreviewsRetrieveInput.Type;

// Output Schema
export const ObjectMediaPreviewsRetrieveOutput =
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
export type ObjectMediaPreviewsRetrieveOutput =
  typeof ObjectMediaPreviewsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this object media preview.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const objectMediaPreviewsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ObjectMediaPreviewsRetrieveInput,
    outputSchema: ObjectMediaPreviewsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
