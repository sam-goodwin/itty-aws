import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface RemoveUserFromOrgInput {
  id: string;
}
export const RemoveUserFromOrgInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "DELETE", path: "/v2/users/{id}" }),
) as unknown as Schema.Codec<RemoveUserFromOrgInput>;

// Output Schema
export type RemoveUserFromOrgOutput = void;
export const RemoveUserFromOrgOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RemoveUserFromOrgOutput>;

// The operation
/**
 * Remove user from org
 */
export const removeUserFromOrg = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RemoveUserFromOrgInput,
  outputSchema: RemoveUserFromOrgOutput,
  errors: [NotFound] as const,
}));
