import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";
import { SensitiveOutputString } from "../../../sensitive.ts";

// Input Schema
export const GetApplicationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applicationID: Schema.String.pipe(T.PathParam()),
  include_secret_keys: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "GET", path: "/platform/applications/{applicationID}" }),
);
export type GetApplicationInput = typeof GetApplicationInput.Type;

// Output Schema
export const GetApplicationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetApplicationOutput = typeof GetApplicationOutput.Type;

// The operation
/**
 * Get an application
 *
 * Get application details.
 *
 * @param applicationID - Application ID.
 * @param include_secret_keys - Whether to include secret keys in the response. If 'true', the response will include the secret keys for each instance.
 */
export const getApplication = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetApplicationInput,
  outputSchema: GetApplicationOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
