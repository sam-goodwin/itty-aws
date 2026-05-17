import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateInviteTargetUsersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.String.pipe(T.PathParam()),
    target_users_file: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/invites/{code}/target-users",
      contentType: "multipart",
    }),
  );
export type UpdateInviteTargetUsersInput =
  typeof UpdateInviteTargetUsersInput.Type;

// Output Schema
export const UpdateInviteTargetUsersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateInviteTargetUsersOutput =
  typeof UpdateInviteTargetUsersOutput.Type;

// The operation
/**
 * Update the target users for an existing invite.
 */
export const updateInviteTargetUsers = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateInviteTargetUsersInput,
    outputSchema: UpdateInviteTargetUsersOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
