import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateAutoModerationRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/guilds/{guild_id}/auto-moderation/rules",
    }),
  );
export type CreateAutoModerationRuleInput =
  typeof CreateAutoModerationRuleInput.Type;

// Output Schema
export const CreateAutoModerationRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CreateAutoModerationRuleOutput =
  typeof CreateAutoModerationRuleOutput.Type;

// The operation
export const createAutoModerationRule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateAutoModerationRuleInput,
    outputSchema: CreateAutoModerationRuleOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
