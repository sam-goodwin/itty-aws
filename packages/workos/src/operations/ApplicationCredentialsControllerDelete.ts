import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ApplicationCredentialsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/connect/client_secrets/{id}" }));
export type ApplicationCredentialsControllerDeleteInput =
  typeof ApplicationCredentialsControllerDeleteInput.Type;

// Output Schema
export const ApplicationCredentialsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationCredentialsControllerDeleteOutput =
  typeof ApplicationCredentialsControllerDeleteOutput.Type;

// The operation
/**
 * Delete a Client Secret
 *
 * Delete (revoke) an existing client secret.
 *
 * @param id - The unique ID of the client secret.
 */
export const ApplicationCredentialsControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationCredentialsControllerDeleteInput,
    outputSchema: ApplicationCredentialsControllerDeleteOutput,
    errors: [NotFound] as const,
  }));
