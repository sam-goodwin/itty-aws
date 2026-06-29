import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";
import { SensitiveOutputString } from "../../../sensitive.ts";

// Input Schema
export const UpdateApplicationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    applicationID: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({ method: "PATCH", path: "/platform/applications/{applicationID}" }),
);
export type UpdateApplicationInput = typeof UpdateApplicationInput.Type;

// Output Schema
export const UpdateApplicationOutput =
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
export type UpdateApplicationOutput = typeof UpdateApplicationOutput.Type;

// The operation
/**
 * Update an application
 *
 * Update an application.
 *
 * @param applicationID - Application ID.
 */
export const updateApplication = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateApplicationInput,
  outputSchema: UpdateApplicationOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
