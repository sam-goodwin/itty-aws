import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateStorageGatewayInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageGatewayId: Schema.String.pipe(T.PathParam()),
    label: Schema.String,
  }).pipe(
    T.Http({ method: "PUT", path: "/storage-gateways/{storageGatewayId}" }),
  );
export type UpdateStorageGatewayInput = typeof UpdateStorageGatewayInput.Type;

// Output Schema
export const UpdateStorageGatewayOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateStorageGatewayOutput = typeof UpdateStorageGatewayOutput.Type;

// The operation
/**
 * Update Storage Gateway
 *
 * Update the label for a Storage Gateway.
 *
 * @param storageGatewayId - The [Storage Gateway id](#operation/list-storage-gateways).
 */
export const updateStorageGateway = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateStorageGatewayInput,
    outputSchema: UpdateStorageGatewayOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
