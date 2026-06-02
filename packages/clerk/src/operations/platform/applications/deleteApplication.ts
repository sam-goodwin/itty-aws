import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const DeleteApplicationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    applicationID: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "DELETE", path: "/platform/applications/{applicationID}" }),
);
export type DeleteApplicationInput = typeof DeleteApplicationInput.Type;

// Output Schema
export const DeleteApplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.Boolean,
    object: Schema.String,
    id: Schema.String,
  });
export type DeleteApplicationOutput = typeof DeleteApplicationOutput.Type;

// The operation
/**
 * Delete an application
 *
 * Delete an application.
 *
 * @param applicationID - Application ID.
 */
export const deleteApplication = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteApplicationInput,
  outputSchema: DeleteApplicationOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
