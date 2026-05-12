import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RemoveIamGroupMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v2/groups/{group_id}/members/{id}" }),
  );
export type RemoveIamGroupMemberInput = typeof RemoveIamGroupMemberInput.Type;

// Output Schema
export const RemoveIamGroupMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RemoveIamGroupMemberOutput = typeof RemoveIamGroupMemberOutput.Type;

// The operation
/**
 * Remove Group Member
 *
 * Remove a Member from a Group.
 *
 * @param group_id - The Group ID.
 * @param id - The Group Member ID.
 */
export const removeIamGroupMember = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemoveIamGroupMemberInput,
    outputSchema: RemoveIamGroupMemberOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
