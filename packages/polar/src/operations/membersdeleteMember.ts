import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const MembersdeleteMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/v1/members/{id}" }));
export type MembersdeleteMemberInput = typeof MembersdeleteMemberInput.Type;

// Output Schema
export const MembersdeleteMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MembersdeleteMemberOutput = typeof MembersdeleteMemberOutput.Type;

// The operation
/**
 * Delete Member
 *
 * Delete a member.
 * The authenticated user or organization must have access to the member's organization.
 * **Scopes**: `members:write`
 */
export const membersdeleteMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MembersdeleteMemberInput,
  outputSchema: MembersdeleteMemberOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
