import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetInviteTargetUsersJobStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/invites/{code}/target-users/job-status" }),
  );
export type GetInviteTargetUsersJobStatusInput =
  typeof GetInviteTargetUsersJobStatusInput.Type;

// Output Schema
export const GetInviteTargetUsersJobStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.Unknown,
    total_users: Schema.Number,
    processed_users: Schema.Number,
    created_at: Schema.NullOr(Schema.String),
    completed_at: Schema.NullOr(Schema.String),
    error_message: Schema.NullOr(Schema.String),
  });
export type GetInviteTargetUsersJobStatusOutput =
  typeof GetInviteTargetUsersJobStatusOutput.Type;

// The operation
/**
 * Get the target users job status for an invite.
 */
export const getInviteTargetUsersJobStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetInviteTargetUsersJobStatusInput,
    outputSchema: GetInviteTargetUsersJobStatusOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
