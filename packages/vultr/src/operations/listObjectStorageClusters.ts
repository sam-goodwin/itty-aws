import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListObjectStorageClustersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/object-storage/clusters" }));
export type ListObjectStorageClustersInput =
  typeof ListObjectStorageClustersInput.Type;

// Output Schema
export const ListObjectStorageClustersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          region: Schema.optional(Schema.String),
          hostname: Schema.optional(Schema.String),
          deploy: Schema.optional(Schema.String),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        links: Schema.optional(
          Schema.Struct({
            next: Schema.optional(Schema.String),
            prev: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type ListObjectStorageClustersOutput =
  typeof ListObjectStorageClustersOutput.Type;

// The operation
/**
 * Get All Clusters
 *
 * Get a list of all Object Storage Clusters.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listObjectStorageClusters = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListObjectStorageClustersInput,
    outputSchema: ListObjectStorageClustersOutput,
  }),
);
