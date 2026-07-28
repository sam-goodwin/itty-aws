import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface FilesdeleteInput {
  id: string;
}
export const FilesdeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v1/files/{id}" }),
) as unknown as Schema.Codec<FilesdeleteInput>;

// Output Schema
export type FilesdeleteOutput = void;
export const FilesdeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FilesdeleteOutput>;

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
}));
