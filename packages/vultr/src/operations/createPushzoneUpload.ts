import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreatePushzoneUploadInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushzoneId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    size: Schema.Number,
  }).pipe(
    T.Http({ method: "POST", path: "/cdns/push-zones/{pushzoneId}/files" }),
  );
export type CreatePushzoneUploadInput = typeof CreatePushzoneUploadInput.Type;

// Output Schema
export const CreatePushzoneUploadOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upload_endpoint: Schema.optional(
      Schema.Struct({
        URL: Schema.optional(Schema.String),
        inputs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              label: Schema.optional(Schema.String),
              date_created: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  });
export type CreatePushzoneUploadOutput = typeof CreatePushzoneUploadOutput.Type;

// The operation
/**
 * Create CDN Push Zone File Upload Endpoint
 *
 * Create a presigned post endpoint that can be used to upload a file to your Push Zone.  After sending this request you must send a second POST request to the returned URL. Include all of the returned inputs as form-data fields using the same key and value.  You must also include a field named "file" that holds the file to be uploaded.
 *
 * @param pushzoneId - The [Push Zone ID](#operation/list-pushzones).
 */
export const createPushzoneUpload = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreatePushzoneUploadInput,
    outputSchema: CreatePushzoneUploadOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
