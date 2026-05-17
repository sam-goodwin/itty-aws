import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateInteractionResponseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interaction_id: Schema.String.pipe(T.PathParam()),
    interaction_token: Schema.String.pipe(T.PathParam()),
    with_response: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/interactions/{interaction_id}/{interaction_token}/callback",
    }),
  );
export type CreateInteractionResponseInput =
  typeof CreateInteractionResponseInput.Type;

// Output Schema
export const CreateInteractionResponseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interaction: Schema.Struct({
      id: Schema.String,
      type: Schema.Unknown,
      response_message_id: Schema.optional(Schema.String),
      response_message_loading: Schema.optional(Schema.Boolean),
      response_message_ephemeral: Schema.optional(Schema.Boolean),
      channel_id: Schema.optional(Schema.String),
      guild_id: Schema.optional(Schema.String),
    }),
    resource: Schema.optional(Schema.Unknown),
  });
export type CreateInteractionResponseOutput =
  typeof CreateInteractionResponseOutput.Type;

// The operation
export const createInteractionResponse = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateInteractionResponseInput,
    outputSchema: CreateInteractionResponseOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
