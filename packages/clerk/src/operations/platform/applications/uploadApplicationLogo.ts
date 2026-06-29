import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  PayloadTooLarge,
  UnprocessableEntity,
} from "../../../errors.ts";
import { SensitiveOutputString } from "../../../sensitive.ts";

// Input Schema
export const UploadApplicationLogoInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    file: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/platform/applications/{applicationID}/logo",
      contentType: "multipart",
    }),
  );
export type UploadApplicationLogoInput = typeof UploadApplicationLogoInput.Type;

// Output Schema
export const UploadApplicationLogoOutput =
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
export type UploadApplicationLogoOutput =
  typeof UploadApplicationLogoOutput.Type;

// The operation
/**
 * Upload application logo
 *
 * Set or replace an application's logo by uploading an image file.
 *
 * @param applicationID - Application ID.
 */
export const uploadApplicationLogo = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UploadApplicationLogoInput,
    outputSchema: UploadApplicationLogoOutput,
    errors: [
      BadRequest,
      Forbidden,
      NotFound,
      PayloadTooLarge,
      UnprocessableEntity,
    ] as const,
  }),
);
