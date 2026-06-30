import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisualReviewReposThumbnailsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    identifier: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/visual_review/repos/{id}/thumbnails/{identifier}/",
    }),
  );
export type VisualReviewReposThumbnailsRetrieveInput =
  typeof VisualReviewReposThumbnailsRetrieveInput.Type;

// Output Schema
export const VisualReviewReposThumbnailsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VisualReviewReposThumbnailsRetrieveOutput =
  typeof VisualReviewReposThumbnailsRetrieveOutput.Type;

// The operation
/**
 * Serve a snapshot thumbnail by identifier. Returns WebP with ETag caching.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visualReviewReposThumbnailsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VisualReviewReposThumbnailsRetrieveInput,
    outputSchema: VisualReviewReposThumbnailsRetrieveOutput,
  }));
