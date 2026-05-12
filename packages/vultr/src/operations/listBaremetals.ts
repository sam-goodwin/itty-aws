import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ListBaremetalsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/bare-metals" }));
export type ListBaremetalsInput = typeof ListBaremetalsInput.Type;

// Output Schema
export const ListBaremetalsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bare_metals: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        os: Schema.optional(Schema.String),
        ram: Schema.optional(Schema.String),
        disk: Schema.optional(Schema.String),
        main_ip: Schema.optional(Schema.String),
        cpu_count: Schema.optional(Schema.Number),
        region: Schema.optional(Schema.String),
        default_password: Schema.optional(SensitiveString),
        date_created: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        netmask_v4: Schema.optional(Schema.String),
        gateway_v4: Schema.optional(Schema.String),
        plan: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        internal_ip: Schema.optional(Schema.String),
        vpcs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              version: Schema.optional(Schema.Number),
              subnet: Schema.optional(Schema.String),
            }),
          ),
        ),
        tag: Schema.optional(Schema.String),
        os_id: Schema.optional(Schema.Number),
        app_id: Schema.optional(Schema.Number),
        image_id: Schema.optional(Schema.String),
        snapshot_id: Schema.optional(Schema.String),
        v6_network: Schema.optional(Schema.String),
        v6_main_ip: Schema.optional(Schema.String),
        v6_network_size: Schema.optional(Schema.Number),
        mac_address: Schema.optional(Schema.Number),
        tags: Schema.optional(Schema.Array(Schema.String)),
        user_scheme: Schema.optional(Schema.String),
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
export type ListBaremetalsOutput = typeof ListBaremetalsOutput.Type;

// The operation
/**
 * List Bare Metal Instances
 *
 * List all Bare Metal instances in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.

 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listBaremetals = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListBaremetalsInput,
  outputSchema: ListBaremetalsOutput,
  errors: [BadRequest, NotFound] as const,
}));
