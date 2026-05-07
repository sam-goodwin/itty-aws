import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ActionGuildJoinRequestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    request_id: Schema.String.pipe(T.PathParam()),
    action: Schema.optional(Schema.Unknown),
    rejection_reason: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/guilds/{guild_id}/requests/{request_id}",
    }),
  );
export type ActionGuildJoinRequestInput =
  typeof ActionGuildJoinRequestInput.Type;

// Output Schema
export const ActionGuildJoinRequestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    reviewed_at: Schema.NullOr(Schema.String),
    application_status: Schema.Unknown,
    rejection_reason: Schema.NullOr(Schema.String),
    guild_id: Schema.String,
    user_id: Schema.String,
    user: Schema.optional(Schema.Unknown),
    form_responses: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.Unknown)),
    ),
    actioned_by_user: Schema.optional(Schema.Unknown),
  });
export type ActionGuildJoinRequestOutput =
  typeof ActionGuildJoinRequestOutput.Type;

// The operation
/**
 * Approve or reject guild join request
 */
export const actionGuildJoinRequest = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ActionGuildJoinRequestInput,
    outputSchema: ActionGuildJoinRequestOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
