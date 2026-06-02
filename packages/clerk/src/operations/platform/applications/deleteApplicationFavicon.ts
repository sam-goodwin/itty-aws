import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";
import { SensitiveOutputString } from "../../../sensitive.ts";

// Input Schema
export const DeleteApplicationFaviconInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/platform/applications/{applicationID}/favicon",
    }),
  );
export type DeleteApplicationFaviconInput =
  typeof DeleteApplicationFaviconInput.Type;

// Output Schema
export const DeleteApplicationFaviconOutput =
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
export type DeleteApplicationFaviconOutput =
  typeof DeleteApplicationFaviconOutput.Type;

// The operation
/**
 * Delete application favicon
 *
 * Delete an application's favicon.
 *
 * @param applicationID - Application ID.
 */
export const deleteApplicationFavicon = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteApplicationFaviconInput,
    outputSchema: DeleteApplicationFaviconOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
