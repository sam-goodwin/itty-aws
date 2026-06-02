import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  PayloadTooLarge,
  UnprocessableEntity,
} from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const PlatformUploadApplicationFaviconInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    file: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/platform/applications/{applicationID}/favicon",
      contentType: "multipart",
    }),
  );
export type PlatformUploadApplicationFaviconInput =
  typeof PlatformUploadApplicationFaviconInput.Type;

// Output Schema
export const PlatformUploadApplicationFaviconOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String,
    name: Schema.String,
    instances: Schema.Array(
      Schema.Struct({
        instance_id: Schema.String,
        environment_type: Schema.Literals(["development", "production"]),
        secret_key: Schema.optional(SensitiveOutputString),
        publishable_key: Schema.optional(Schema.String),
      }),
    ),
  });
export type PlatformUploadApplicationFaviconOutput =
  typeof PlatformUploadApplicationFaviconOutput.Type;

// The operation
/**
 * Upload application favicon
 *
 * Set or replace an application's favicon by uploading an image file.
 *
 * @param applicationID - Application ID.
 */
export const PlatformUploadApplicationFavicon =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PlatformUploadApplicationFaviconInput,
    outputSchema: PlatformUploadApplicationFaviconOutput,
    errors: [
      BadRequest,
      Forbidden,
      NotFound,
      PayloadTooLarge,
      UnprocessableEntity,
    ] as const,
  }));
