import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteStorageGatewayInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageGatewayId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/storage-gateways/{storageGatewayId}" }),
  );
export type DeleteStorageGatewayInput = typeof DeleteStorageGatewayInput.Type;

// Output Schema
export const DeleteStorageGatewayOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteStorageGatewayOutput = typeof DeleteStorageGatewayOutput.Type;

// The operation
/**
 * Delete Storage Gateway
 *
 * Delete a Storage Gateway.
 *
 * @param storageGatewayId - The [Storage Gateway id](#operation/list-storage-gateways).
 */
export const deleteStorageGateway = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteStorageGatewayInput,
    outputSchema: DeleteStorageGatewayOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
