import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const ListStorageGatewaysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/storage-gateways" }));
export type ListStorageGatewaysInput = typeof ListStorageGatewaysInput.Type;

// Output Schema
export const ListStorageGatewaysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storage_gateway: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          date_created: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          label: Schema.optional(Schema.String),
          pending_charges: Schema.optional(Schema.Number),
          tags: Schema.optional(Schema.Array(Schema.String)),
          health: Schema.optional(Schema.String),
          network_config: Schema.optional(
            Schema.Struct({
              primary: Schema.optional(
                Schema.Struct({
                  ipv4_public_enabled: Schema.optional(Schema.Boolean),
                  ipv6_public_enabled: Schema.optional(Schema.Boolean),
                  vpc: Schema.optional(
                    Schema.Struct({
                      vpc_uuid: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            }),
          ),
          export_config: Schema.optional(
            Schema.Struct({
              label: Schema.optional(Schema.String),
              vfs_uuid: Schema.optional(Schema.String),
              pseudo_root_path: Schema.optional(Schema.String),
              allowed_ips: Schema.optional(Schema.Array(Schema.String)),
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
export type ListStorageGatewaysOutput = typeof ListStorageGatewaysOutput.Type;

// The operation
/**
 * List storage gateways
 *
 * Get a list of all Storage Gateways in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listStorageGateways = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListStorageGatewaysInput,
  outputSchema: ListStorageGatewaysOutput,
  errors: [BadRequest] as const,
}));
