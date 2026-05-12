import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeletePushzoneFileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushzoneId: Schema.String.pipe(T.PathParam()),
    fileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/cdns/push-zones/{pushzoneId}/files/{fileName}",
    }),
  );
export type DeletePushzoneFileInput = typeof DeletePushzoneFileInput.Type;

// Output Schema
export const DeletePushzoneFileOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeletePushzoneFileOutput = typeof DeletePushzoneFileOutput.Type;

// The operation
/**
 * Delete CDN Pushzone File
 *
 * Delete a CDN Push Zone file.
 *
 * @param pushzoneId - The [Push Zone ID](#operation/list-pushzones).
 * @param fileName - The [File Name](#operation/list-pushzone-files).
 */
export const deletePushzoneFile = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletePushzoneFileInput,
  outputSchema: DeletePushzoneFileOutput,
  errors: [BadRequest, NotFound] as const,
}));
