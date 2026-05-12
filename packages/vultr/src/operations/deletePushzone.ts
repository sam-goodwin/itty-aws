import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeletePushzoneInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pushzoneId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/cdns/push-zones/{pushzoneId}" }));
export type DeletePushzoneInput = typeof DeletePushzoneInput.Type;

// Output Schema
export const DeletePushzoneOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeletePushzoneOutput = typeof DeletePushzoneOutput.Type;

// The operation
/**
 * Delete CDN Pushzone
 *
 * Delete a CDN Push Zone.
 *
 * @param pushzoneId - The [Push Zone ID](#operation/list-pushzones).
 */
export const deletePushzone = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletePushzoneInput,
  outputSchema: DeletePushzoneOutput,
  errors: [BadRequest, NotFound] as const,
}));
