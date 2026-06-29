import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";
import { SensitiveOutputString } from "../../../sensitive.ts";

// Input Schema
export const DeleteApplicationLogoInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/platform/applications/{applicationID}/logo",
    }),
  );
export type DeleteApplicationLogoInput = typeof DeleteApplicationLogoInput.Type;

// Output Schema
export const DeleteApplicationLogoOutput =
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
export type DeleteApplicationLogoOutput =
  typeof DeleteApplicationLogoOutput.Type;

// The operation
/**
 * Delete application logo
 *
 * Delete an application's logo.
 *
 * @param applicationID - Application ID.
 */
export const deleteApplicationLogo = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteApplicationLogoInput,
    outputSchema: DeleteApplicationLogoOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
