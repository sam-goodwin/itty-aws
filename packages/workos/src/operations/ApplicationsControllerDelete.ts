import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ApplicationsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/connect/applications/{id}" }));
export type ApplicationsControllerDeleteInput =
  typeof ApplicationsControllerDeleteInput.Type;

// Output Schema
export const ApplicationsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsControllerDeleteOutput =
  typeof ApplicationsControllerDeleteOutput.Type;

// The operation
/**
 * Delete a Connect Application
 *
 * Delete an existing Connect Application.
 *
 * @param id - The application ID or client ID of the Connect Application.
 */
export const ApplicationsControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsControllerDeleteInput,
    outputSchema: ApplicationsControllerDeleteOutput,
    errors: [NotFound] as const,
  }));
