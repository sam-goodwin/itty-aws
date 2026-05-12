import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ScimDeleteGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/scim/v2/Groups/{id}" }));
export type ScimDeleteGroupInput = typeof ScimDeleteGroupInput.Type;

// Output Schema
export const ScimDeleteGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScimDeleteGroupOutput = typeof ScimDeleteGroupOutput.Type;

// The operation
/**
 * Delete SCIM Group
 *
 * Delete a Group via the SCIM 2.0 protocol. Authenticate using the SCIM token obtained from the Organization SCIM configuration.
 *
 * @param id - The SCIM Group ID.
 */
export const scimDeleteGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScimDeleteGroupInput,
  outputSchema: ScimDeleteGroupOutput,
  errors: [Forbidden, NotFound] as const,
}));
