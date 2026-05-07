import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetInviteTargetUsersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/invites/{code}/target-users" }));
export type GetInviteTargetUsersInput = typeof GetInviteTargetUsersInput.Type;

// Output Schema
export const GetInviteTargetUsersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GetInviteTargetUsersOutput = typeof GetInviteTargetUsersOutput.Type;

// The operation
/**
 * Get the target users for an invite.
 */
export const getInviteTargetUsers = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetInviteTargetUsersInput,
    outputSchema: GetInviteTargetUsersOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
