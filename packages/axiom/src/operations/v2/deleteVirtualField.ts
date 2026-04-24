import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const DeleteVirtualFieldInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/v2/vfields/{id}" }));
export type DeleteVirtualFieldInput = typeof DeleteVirtualFieldInput.Type;

// Output Schema
export const DeleteVirtualFieldOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteVirtualFieldOutput = typeof DeleteVirtualFieldOutput.Type;

// The operation
export const deleteVirtualField = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteVirtualFieldInput,
  outputSchema: DeleteVirtualFieldOutput,
  errors: [NotFound] as const,
}));
