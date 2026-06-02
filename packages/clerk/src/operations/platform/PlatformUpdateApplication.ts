import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const PlatformUpdateApplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "PATCH", path: "/platform/applications/{applicationID}" }),
  );
export type PlatformUpdateApplicationInput =
  typeof PlatformUpdateApplicationInput.Type;

// Output Schema
export const PlatformUpdateApplicationOutput =
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
export type PlatformUpdateApplicationOutput =
  typeof PlatformUpdateApplicationOutput.Type;

// The operation
/**
 * Update an application
 *
 * Update an application.
 *
 * @param applicationID - Application ID.
 */
export const PlatformUpdateApplication = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformUpdateApplicationInput,
    outputSchema: PlatformUpdateApplicationOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
