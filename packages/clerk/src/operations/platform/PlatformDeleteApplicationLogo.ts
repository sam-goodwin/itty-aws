import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const PlatformDeleteApplicationLogoInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/platform/applications/{applicationID}/logo",
    }),
  );
export type PlatformDeleteApplicationLogoInput =
  typeof PlatformDeleteApplicationLogoInput.Type;

// Output Schema
export const PlatformDeleteApplicationLogoOutput =
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
export type PlatformDeleteApplicationLogoOutput =
  typeof PlatformDeleteApplicationLogoOutput.Type;

// The operation
/**
 * Delete application logo
 *
 * Delete an application's logo.
 *
 * @param applicationID - Application ID.
 */
export const PlatformDeleteApplicationLogo =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PlatformDeleteApplicationLogoInput,
    outputSchema: PlatformDeleteApplicationLogoOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
