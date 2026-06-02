import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden } from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const PlatformListApplicationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    include_secret_keys: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "GET", path: "/platform/applications" }));
export type PlatformListApplicationsInput =
  typeof PlatformListApplicationsInput.Type;

// Output Schema
export const PlatformListApplicationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
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
    }),
  );
export type PlatformListApplicationsOutput =
  typeof PlatformListApplicationsOutput.Type;

// The operation
/**
 * List applications
 *
 * List applications.
 *
 * @param include_secret_keys - Whether to include secret keys in the response.
 */
export const PlatformListApplications = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformListApplicationsInput,
    outputSchema: PlatformListApplicationsOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
