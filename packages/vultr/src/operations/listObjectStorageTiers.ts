import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListObjectStorageTiersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/object-storage/tiers" }),
  );
export type ListObjectStorageTiersInput =
  typeof ListObjectStorageTiersInput.Type;

// Output Schema
export const ListObjectStorageTiersOutput =
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
          locations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                hostname: Schema.optional(Schema.String),
                id: Schema.optional(Schema.Number),
                name: Schema.optional(Schema.String),
                region: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  });
export type ListObjectStorageTiersOutput =
  typeof ListObjectStorageTiersOutput.Type;

// The operation
/**
 * Get All Tiers
 *
 * Get a list of all Object Storage Tiers.
 */
export const listObjectStorageTiers = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListObjectStorageTiersInput,
    outputSchema: ListObjectStorageTiersOutput,
  }),
);
