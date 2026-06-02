import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const PlatformCreateInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    domain: Schema.String,
    environment_type: Schema.optional(Schema.Literals(["production"])),
    clone_instance_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/platform/applications/{applicationID}/instances",
    }),
  );
export type PlatformCreateInstanceInput =
  typeof PlatformCreateInstanceInput.Type;

// Output Schema
export const PlatformCreateInstanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["instance"]),
    id: Schema.String,
    environment_type: Schema.Literals(["production"]),
    active_domain: Schema.Struct({
      object: Schema.Literals(["domain"]),
      id: Schema.String,
      name: Schema.String,
      is_satellite: Schema.optional(Schema.Boolean),
      is_provider_domain: Schema.optional(Schema.Boolean),
      frontend_api_url: Schema.String,
      development_origin: Schema.String,
      accounts_portal_url: Schema.optional(Schema.String),
      proxy_url: Schema.optional(Schema.String),
      cname_targets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            host: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
            required: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
      created_at: Schema.String,
      updated_at: Schema.String,
      application: Schema.optional(
        Schema.Struct({
          object: Schema.Literals(["application"]),
          id: Schema.String,
          created_at: Schema.String,
          updated_at: Schema.String,
        }),
      ),
      instance: Schema.optional(
        Schema.Struct({
          object: Schema.Literals(["instance"]),
          id: Schema.String,
          environment_type: Schema.Literals(["production", "development"]),
          created_at: Schema.String,
          updated_at: Schema.String,
        }),
      ),
    }),
    secret_key: SensitiveOutputString,
    publishable_key: Schema.String,
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type PlatformCreateInstanceOutput =
  typeof PlatformCreateInstanceOutput.Type;

// The operation
/**
 * Create instance
 *
 * Creates a production instance for the given application. Optionally clones
 * configuration from an existing development instance.
 *
 * @param applicationID - Application ID.
 */
export const PlatformCreateInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformCreateInstanceInput,
    outputSchema: PlatformCreateInstanceOutput,
    errors: [
      BadRequest,
      PaymentRequired,
      Forbidden,
      NotFound,
      UnprocessableEntity,
    ] as const,
  }),
);
