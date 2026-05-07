import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetAutoModerationRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    rule_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/guilds/{guild_id}/auto-moderation/rules/{rule_id}",
    }),
  );
export type GetAutoModerationRuleInput = typeof GetAutoModerationRuleInput.Type;

// Output Schema
export const GetAutoModerationRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type GetAutoModerationRuleOutput =
  typeof GetAutoModerationRuleOutput.Type;

// The operation
export const getAutoModerationRule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetAutoModerationRuleInput,
    outputSchema: GetAutoModerationRuleOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
