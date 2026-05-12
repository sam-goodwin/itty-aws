import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetStorageGatewayInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    storageGatewayId: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/storage-gateways/{storageGatewayId}" }));
export type GetStorageGatewayInput = typeof GetStorageGatewayInput.Type;

// Output Schema
export const GetStorageGatewayOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storage_gateway: Schema.optional(
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
  });
export type GetStorageGatewayOutput = typeof GetStorageGatewayOutput.Type;

// The operation
/**
 * Get Storage Gateway
 *
 * Get information about a Storage Gateway.
 *
 * @param storageGatewayId - The [Storage Gateway id](#operation/list-storage-gateways).
 */
export const getStorageGateway = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetStorageGatewayInput,
  outputSchema: GetStorageGatewayOutput,
  errors: [BadRequest, NotFound] as const,
}));
