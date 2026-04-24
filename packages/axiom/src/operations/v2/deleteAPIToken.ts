import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const DeleteAPITokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/tokens/{id}" }));
export type DeleteAPITokenInput = typeof DeleteAPITokenInput.Type;

// Output Schema
export const DeleteAPITokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteAPITokenOutput = typeof DeleteAPITokenOutput.Type;

// The operation
/**
 * Delete API token
 */
export const deleteAPIToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteAPITokenInput,
  outputSchema: DeleteAPITokenOutput,
  errors: [NotFound] as const,
}));
