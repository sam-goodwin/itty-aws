import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteStorageGatewayExportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageGatewayId: Schema.String.pipe(T.PathParam()),
    exportId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/storage-gateways/{storageGatewayId}/exports/{exportId}",
    }),
  );
export type DeleteStorageGatewayExportInput =
  typeof DeleteStorageGatewayExportInput.Type;

// Output Schema
export const DeleteStorageGatewayExportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteStorageGatewayExportOutput =
  typeof DeleteStorageGatewayExportOutput.Type;

// The operation
/**
 * Delete Storage Gateway Export
 *
 * Delete a Storage Gateway Export.
 *
 * @param storageGatewayId - The [Storage Gateway id](#operation/list-storage-gateways).
 * @param exportId - The [Storage Gateway export id](#operation/list-storage-gateways).
 */
export const deleteStorageGatewayExport = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteStorageGatewayExportInput,
    outputSchema: DeleteStorageGatewayExportOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
