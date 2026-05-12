import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetPushzoneFilesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pushzoneId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/cdns/push-zones/{pushzoneId}/files" }));
export type GetPushzoneFilesInput = typeof GetPushzoneFilesInput.Type;

// Output Schema
export const GetPushzoneFilesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    files: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          size: Schema.optional(Schema.String),
          last_modified: Schema.optional(Schema.String),
        }),
      ),
    ),
    count: Schema.optional(Schema.Number),
    total_size: Schema.optional(Schema.Number),
  },
);
export type GetPushzoneFilesOutput = typeof GetPushzoneFilesOutput.Type;

// The operation
/**
 * List CDN Push Zone Files
 *
 * Get a list of files that have been uploaded to a specific CDN Push Zones
 *
 * @param pushzoneId - The [Push Zone ID](#operation/list-pushzones).
 */
export const getPushzoneFiles = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetPushzoneFilesInput,
  outputSchema: GetPushzoneFilesOutput,
  errors: [BadRequest, NotFound] as const,
}));
