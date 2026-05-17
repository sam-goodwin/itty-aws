import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const FilesdeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v1/files/{id}" }));
export type FilesdeleteInput = typeof FilesdeleteInput.Type;

// Output Schema
export const FilesdeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FilesdeleteOutput = typeof FilesdeleteOutput.Type;

// The operation
/**
 * Delete File
 *
 * Delete a file.
 * **Scopes**: `files:write`
 */
export const filesdelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesdeleteInput,
  outputSchema: FilesdeleteOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
