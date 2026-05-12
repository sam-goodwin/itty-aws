import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ScimDeleteUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/scim/v2/Users/{id}" }));
export type ScimDeleteUserInput = typeof ScimDeleteUserInput.Type;

// Output Schema
export const ScimDeleteUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScimDeleteUserOutput = typeof ScimDeleteUserOutput.Type;

// The operation
/**
 * Delete SCIM User
 *
 * Delete a User via the SCIM 2.0 protocol. Authenticate using the SCIM token obtained from the Organization SCIM configuration.
 *
 * @param id - The SCIM User ID.
 */
export const scimDeleteUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScimDeleteUserInput,
  outputSchema: ScimDeleteUserOutput,
  errors: [Forbidden, NotFound] as const,
}));
