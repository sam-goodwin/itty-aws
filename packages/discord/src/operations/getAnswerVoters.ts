import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetAnswerVotersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
  message_id: Schema.String.pipe(T.PathParam()),
  answer_id: Schema.Number.pipe(T.PathParam()),
  after: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/channels/{channel_id}/polls/{message_id}/answers/{answer_id}",
  }),
);
export type GetAnswerVotersInput = typeof GetAnswerVotersInput.Type;

// Output Schema
export const GetAnswerVotersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  users: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      username: Schema.String,
      avatar: Schema.NullOr(Schema.String),
      discriminator: Schema.String,
      public_flags: Schema.Number,
      flags: Schema.Number,
      bot: Schema.optional(Schema.Boolean),
      system: Schema.optional(Schema.Boolean),
      banner: Schema.optional(Schema.NullOr(Schema.String)),
      accent_color: Schema.optional(Schema.NullOr(Schema.Number)),
      global_name: Schema.NullOr(Schema.String),
      avatar_decoration_data: Schema.optional(Schema.Unknown),
      collectibles: Schema.optional(Schema.Unknown),
      primary_guild: Schema.Unknown,
    }),
  ),
});
export type GetAnswerVotersOutput = typeof GetAnswerVotersOutput.Type;

// The operation
export const getAnswerVoters = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAnswerVotersInput,
  outputSchema: GetAnswerVotersOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
