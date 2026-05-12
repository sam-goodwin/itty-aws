import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ListObjectStoragesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/object-storage" }));
export type ListObjectStoragesInput = typeof ListObjectStoragesInput.Type;

// Output Schema
export const ListObjectStoragesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object_storages: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          date_created: Schema.optional(Schema.String),
          cluster_id: Schema.optional(Schema.Number),
          region: Schema.optional(Schema.String),
          label: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          s3_hostname: Schema.optional(Schema.String),
          s3_access_key: Schema.optional(Schema.String),
          s3_secret_key: Schema.optional(SensitiveString),
          pending_charges: Schema.optional(Schema.Number),
          tier: Schema.optional(
            Schema.Struct({
              OBJSTORETIERID: Schema.optional(Schema.Number),
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
export type ListObjectStoragesOutput = typeof ListObjectStoragesOutput.Type;

// The operation
/**
 * List Object Storages
 *
 * Get a list of all Object Storage in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listObjectStorages = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListObjectStoragesInput,
  outputSchema: ListObjectStoragesOutput,
  errors: [BadRequest] as const,
}));
