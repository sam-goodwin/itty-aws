import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteFileFromHashInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hash: Schema.String.pipe(T.PathParam()),
    algorithm: Schema.Literals(["sha1", "sha512"]),
    version_id: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "DELETE", path: "/version_file/{hash}" }));
export type DeleteFileFromHashInput = typeof DeleteFileFromHashInput.Type;

// Output Schema
export const DeleteFileFromHashOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteFileFromHashOutput = typeof DeleteFileFromHashOutput.Type;

// The operation
/**
 * Delete a file from its hash
 *
 * @param hash - The hash of the file, considering its byte content, and encoded in hexadecimal
 * @param algorithm - The algorithm of the hash
 * @param version_id - Version ID to delete the version from, if multiple files of the same hash exist
 */
export const deleteFileFromHash = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteFileFromHashInput,
  outputSchema: DeleteFileFromHashOutput,
  errors: [NotFound] as const,
}));
