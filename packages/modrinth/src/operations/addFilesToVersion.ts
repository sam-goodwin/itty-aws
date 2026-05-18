import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const AddFilesToVersionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.PathParam()),
    data: Schema.optional(Schema.Literals(["[object Object]"])),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/version/{id}/file",
    contentType: "multipart",
  }),
);
export type AddFilesToVersionInput = typeof AddFilesToVersionInput.Type;

// Output Schema
export const AddFilesToVersionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AddFilesToVersionOutput = typeof AddFilesToVersionOutput.Type;

// The operation
/**
 * Add files to version
 *
 * Project files are attached. `.mrpack` and `.jar` files are accepted.
 *
 * @param id - The ID of the version
 */
export const addFilesToVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddFilesToVersionInput,
  outputSchema: AddFilesToVersionOutput,
  errors: [BadRequest, NotFound] as const,
}));
