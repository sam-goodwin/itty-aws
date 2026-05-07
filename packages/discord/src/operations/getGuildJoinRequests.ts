import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildJoinRequestsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    status: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/requests" }));
export type GetGuildJoinRequestsInput = typeof GetGuildJoinRequestsInput.Type;

// Output Schema
export const GetGuildJoinRequestsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    total: Schema.optional(Schema.Number),
    guild_join_requests: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
  });
export type GetGuildJoinRequestsOutput = typeof GetGuildJoinRequestsOutput.Type;

// The operation
/**
 * List join requests for guild, optionally filtered by application status
 */
export const getGuildJoinRequests = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetGuildJoinRequestsInput,
    outputSchema: GetGuildJoinRequestsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
