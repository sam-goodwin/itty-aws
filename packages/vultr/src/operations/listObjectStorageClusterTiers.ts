import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListObjectStorageClusterTiersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/object-storage/clusters/{clusterId}/tiers",
    }),
  );
export type ListObjectStorageClusterTiersInput =
  typeof ListObjectStorageClusterTiersInput.Type;

// Output Schema
export const ListObjectStorageClusterTiersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tiers: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          bw_gb_price: Schema.optional(Schema.Number),
          disk_gb_price: Schema.optional(Schema.Number),
          archive_disk_gb_price: Schema.optional(Schema.Number),
          is_default: Schema.optional(Schema.String),
          price: Schema.optional(Schema.Number),
          ratelimit_ops_bytes: Schema.optional(Schema.Number),
          ratelimit_ops_secs: Schema.optional(Schema.Number),
          sales_desc: Schema.optional(Schema.String),
          sales_name: Schema.optional(Schema.String),
          slug: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ListObjectStorageClusterTiersOutput =
  typeof ListObjectStorageClusterTiersOutput.Type;

// The operation
/**
 * Get All Cluster Tiers
 *
 * Get a list of all Object Storage Tiers for a given Cluster.
 *
 * @param clusterId - The [Cluster id](#operation/list-object-storage-clusters).
 */
export const listObjectStorageClusterTiers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListObjectStorageClusterTiersInput,
    outputSchema: ListObjectStorageClusterTiersOutput,
  }));
