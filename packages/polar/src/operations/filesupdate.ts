import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const FilesupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  version: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "PATCH", path: "/v1/files/{id}" }));
export type FilesupdateInput = typeof FilesupdateInput.Type;

// Output Schema
export const FilesupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type FilesupdateOutput = typeof FilesupdateOutput.Type;

// The operation
/**
 * Update File
 *
 * Update a file.
 * **Scopes**: `files:write`
 *
 * @param id - The file ID.
 */
export const filesupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesupdateInput,
  outputSchema: FilesupdateOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
