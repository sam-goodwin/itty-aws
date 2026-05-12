import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RestoreIamGroupMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "PUT", path: "/v2/groups/{group_id}/members/{id}" }),
  );
export type RestoreIamGroupMemberInput = typeof RestoreIamGroupMemberInput.Type;

// Output Schema
export const RestoreIamGroupMemberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RestoreIamGroupMemberOutput =
  typeof RestoreIamGroupMemberOutput.Type;

// The operation
/**
 * Restore Group Member
 *
 * Restore a soft-deleted Group Member.
 *
 * @param group_id - The Group ID.
 * @param id - The Group Member ID.
 */
export const restoreIamGroupMember = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RestoreIamGroupMemberInput,
    outputSchema: RestoreIamGroupMemberOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
