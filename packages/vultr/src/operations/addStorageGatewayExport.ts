import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AddStorageGatewayExportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageGatewayId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/storage-gateways/{storageGatewayId}/exports",
    }),
  );
export type AddStorageGatewayExportInput =
  typeof AddStorageGatewayExportInput.Type;

// Output Schema
export const AddStorageGatewayExportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpc: Schema.optional(
      Schema.Struct({
        label: Schema.optional(Schema.String),
        vfs_uuid: Schema.optional(Schema.String),
        pseudo_root_path: Schema.optional(Schema.String),
        allowed_ips: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type AddStorageGatewayExportOutput =
  typeof AddStorageGatewayExportOutput.Type;

// The operation
/**
 * Add a new export to this storage gateway
 *
 * @param storageGatewayId - The [Storage Gateway id](#operation/list-storage-gateways).
 */
export const addStorageGatewayExport = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AddStorageGatewayExportInput,
    outputSchema: AddStorageGatewayExportOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
