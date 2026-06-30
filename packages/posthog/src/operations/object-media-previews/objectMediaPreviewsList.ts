import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ObjectMediaPreviewsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const ObjectMediaPreviewsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/object_media_previews/",
    }),
  ) as unknown as Schema.Codec<ObjectMediaPreviewsListInput>;

// Output Schema
export interface ObjectMediaPreviewsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    created_at?: string;
    updated_at?: string | null;
    media_url?: string;
    media_type?: string;
    metadata?: unknown;
    uploaded_media_id?: string | null;
    exported_asset_id?: string | null;
    event_definition_id?: string | null;
  }[];
}
export const ObjectMediaPreviewsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.NullOr(Schema.String)),
          media_url: Schema.optional(Schema.String),
          media_type: Schema.optional(Schema.String),
          metadata: Schema.optional(Schema.Unknown),
          uploaded_media_id: Schema.optional(Schema.NullOr(Schema.String)),
          exported_asset_id: Schema.optional(Schema.NullOr(Schema.String)),
          event_definition_id: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ObjectMediaPreviewsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const objectMediaPreviewsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ObjectMediaPreviewsListInput,
    outputSchema: ObjectMediaPreviewsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
