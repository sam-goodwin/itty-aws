import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const CreateStorageGatewayInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.String,
    type: Schema.Literals(["nfs4"]),
    region: Schema.String,
    export_config: Schema.Array(
      Schema.Struct({
        label: Schema.optional(Schema.String),
        vfs_uuid: Schema.optional(Schema.String),
        pseudo_root_path: Schema.optional(Schema.String),
        allowed_ips: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    network_config: Schema.Unknown,
  }).pipe(T.Http({ method: "POST", path: "/storage-gateways" }));
export type CreateStorageGatewayInput = typeof CreateStorageGatewayInput.Type;

// Output Schema
export const CreateStorageGatewayOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CreateStorageGatewayOutput = typeof CreateStorageGatewayOutput.Type;

// The operation
/**
 * Create Storage Gateway
 */
export const createStorageGateway = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateStorageGatewayInput,
    outputSchema: CreateStorageGatewayOutput,
    errors: [BadRequest] as const,
  }),
);
