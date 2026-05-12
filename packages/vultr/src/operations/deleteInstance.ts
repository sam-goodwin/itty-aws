import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/instances/{instanceId}" }));
export type DeleteInstanceInput = typeof DeleteInstanceInput.Type;

// Output Schema
export const DeleteInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteInstanceOutput = typeof DeleteInstanceOutput.Type;

// The operation
/**
 * Delete Instance
 *
 * Delete an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const deleteInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteInstanceInput,
  outputSchema: DeleteInstanceOutput,
  errors: [BadRequest, NotFound] as const,
}));
