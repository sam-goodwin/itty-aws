import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetPushzoneInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pushzoneId: Schema.String.pipe(T.PathParam()),
  fileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/cdns/push-zones/{pushzoneId}/files/{fileName}",
  }),
);
export type GetPushzoneInput = typeof GetPushzoneInput.Type;

// Output Schema
export const GetPushzoneOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  file: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      mime: Schema.optional(Schema.String),
      size: Schema.optional(Schema.String),
      content: Schema.optional(Schema.String),
      last_modified: Schema.optional(Schema.String),
    }),
  ),
});
export type GetPushzoneOutput = typeof GetPushzoneOutput.Type;

// The operation
/**
 * Get CDN Push Zone File
 *
 * Get information about a CDN Push Zone file
 *
 * @param pushzoneId - The [Push Zone ID](#operation/list-pushzones).
 * @param fileName - The [File Name](#operation/list-pushzone-files).
 */
export const getPushzone = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetPushzoneInput,
  outputSchema: GetPushzoneOutput,
  errors: [BadRequest, NotFound] as const,
}));
