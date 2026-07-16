import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UploadedMediaCreateInput {
  project_id: string;
}
export const UploadedMediaCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/uploaded_media/",
    }),
  ) as unknown as Schema.Codec<UploadedMediaCreateInput>;

// Output Schema
export type UploadedMediaCreateOutput = Record<string, unknown>;
export const UploadedMediaCreateOutput =
  /*@__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as unknown as Schema.Codec<UploadedMediaCreateOutput>;

// The operation
/**
 * When object storage is available this API allows upload of media which can be used, for example, in text cards on dashboards.
 * Uploaded media must have a content type beginning with 'image/' and be less than 4MB.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const uploadedMediaCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: UploadedMediaCreateInput,
  outputSchema: UploadedMediaCreateOutput,
  errors: [Forbidden, NotFound] as const,
}));
