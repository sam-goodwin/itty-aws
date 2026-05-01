import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ObjectMediaPreviewsPreferredForEventRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/object_media_previews/preferred_for_event/",
    }),
  );
export type ObjectMediaPreviewsPreferredForEventRetrieveInput =
  typeof ObjectMediaPreviewsPreferredForEventRetrieveInput.Type;

// Output Schema
export const ObjectMediaPreviewsPreferredForEventRetrieveOutput =
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
export type ObjectMediaPreviewsPreferredForEventRetrieveOutput =
  typeof ObjectMediaPreviewsPreferredForEventRetrieveOutput.Type;

// The operation
/**
 * Get the preferred media preview for an event definition.
 * Most recent user-uploaded, then most recent exported asset.
 * Requires event_definition (query param).
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const objectMediaPreviewsPreferredForEventRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ObjectMediaPreviewsPreferredForEventRetrieveInput,
    outputSchema: ObjectMediaPreviewsPreferredForEventRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
