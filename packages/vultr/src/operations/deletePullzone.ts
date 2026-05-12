import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeletePullzoneInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pullzoneId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/cdns/pull-zones/{pullzoneId}" }));
export type DeletePullzoneInput = typeof DeletePullzoneInput.Type;

// Output Schema
export const DeletePullzoneOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeletePullzoneOutput = typeof DeletePullzoneOutput.Type;

// The operation
/**
 * Delete CDN Pullzone
 *
 * Delete a CDN Pull Zone.
 *
 * @param pullzoneId - The [Pull Zone ID](#operation/list-pullzones).
 */
export const deletePullzone = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletePullzoneInput,
  outputSchema: DeletePullzoneOutput,
  errors: [BadRequest, NotFound] as const,
}));
