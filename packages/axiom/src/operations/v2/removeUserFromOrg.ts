import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const RemoveUserFromOrgInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "DELETE", path: "/v2/users/{id}" }));
export type RemoveUserFromOrgInput = typeof RemoveUserFromOrgInput.Type;

// Output Schema
export const RemoveUserFromOrgOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RemoveUserFromOrgOutput = typeof RemoveUserFromOrgOutput.Type;

// The operation
/**
 * Remove user from org
 */
export const removeUserFromOrg = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RemoveUserFromOrgInput,
  outputSchema: RemoveUserFromOrgOutput,
  errors: [NotFound] as const,
}));
