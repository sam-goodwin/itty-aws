import * as Schema from "effect/Schema";
import { API } from "../../platform-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PlatformDeleteApplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationID: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/platform/applications/{applicationID}",
    }),
  );
export type PlatformDeleteApplicationInput =
  typeof PlatformDeleteApplicationInput.Type;

// Output Schema
export const PlatformDeleteApplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.Boolean,
    object: Schema.String,
    id: Schema.String,
  });
export type PlatformDeleteApplicationOutput =
  typeof PlatformDeleteApplicationOutput.Type;

// The operation
/**
 * Delete an application
 *
 * Delete an application.
 *
 * @param applicationID - Application ID.
 */
export const PlatformDeleteApplication = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PlatformDeleteApplicationInput,
    outputSchema: PlatformDeleteApplicationOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
