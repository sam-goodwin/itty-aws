import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface RemoveOrganizationMemberInput {
  organization: string;
  id: string;
  delete_passwords?: boolean;
  delete_service_tokens?: boolean;
}
export const RemoveOrganizationMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    delete_passwords: Schema.optional(Schema.Boolean),
    delete_service_tokens: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organization}/members/{id}",
    }),
  ) as unknown as Schema.Codec<RemoveOrganizationMemberInput>;

// Output Schema
export type RemoveOrganizationMemberOutput = void;
export const RemoveOrganizationMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RemoveOrganizationMemberOutput>;

// The operation
/**
 * Remove a member from an organization
 *
 * @param organization - The name of the organization
 * @param id - The ID of the user
 * @param delete_passwords - Whether to delete all passwords associated with the member. Only available when removing other members (not yourself).
 * @param delete_service_tokens - Whether to delete all service tokens associated with the member. Only available when removing other members (not yourself).
 */
export const removeOrganizationMember = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemoveOrganizationMemberInput,
    outputSchema: RemoveOrganizationMemberOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
