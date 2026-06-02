import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, UnprocessableEntity } from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const PlatformCreateApplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    domain: Schema.optional(Schema.String),
    proxy_path: Schema.optional(Schema.String),
    environment_types: Schema.optional(Schema.Array(Schema.String)),
    template: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/platform/applications" }));
export type PlatformCreateApplicationInput =
  typeof PlatformCreateApplicationInput.Type;

// Output Schema
export const PlatformCreateApplicationOutput =
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
export type PlatformCreateApplicationOutput =
  typeof PlatformCreateApplicationOutput.Type;

// The operation
/**
 * Create an application
 *
 * Create a new application.
 */
export const PlatformCreateApplication = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformCreateApplicationInput,
    outputSchema: PlatformCreateApplicationOutput,
    errors: [BadRequest, Forbidden, UnprocessableEntity] as const,
  }),
);
