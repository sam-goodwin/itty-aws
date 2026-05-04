import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const FilesuploadedInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  path: Schema.String,
  parts: Schema.Array(
    Schema.Struct({
      number: Schema.Number,
      checksum_etag: Schema.String,
      checksum_sha256_base64: Schema.Unknown,
    }),
  ),
}).pipe(T.Http({ method: "POST", path: "/v1/files/{id}/uploaded" }));
export type FilesuploadedInput = typeof FilesuploadedInput.Type;

// Output Schema
export const FilesuploadedOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type FilesuploadedOutput = typeof FilesuploadedOutput.Type;

// The operation
/**
 * Complete File Upload
 *
 * Complete a file upload.
 * **Scopes**: `files:write`
 *
 * @param id - The file ID.
 */
export const filesuploaded = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesuploadedInput,
  outputSchema: FilesuploadedOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
