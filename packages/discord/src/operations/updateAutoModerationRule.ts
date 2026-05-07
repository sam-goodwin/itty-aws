import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateAutoModerationRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    rule_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/guilds/{guild_id}/auto-moderation/rules/{rule_id}",
    }),
  );
export type UpdateAutoModerationRuleInput =
  typeof UpdateAutoModerationRuleInput.Type;

// Output Schema
export const UpdateAutoModerationRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type UpdateAutoModerationRuleOutput =
  typeof UpdateAutoModerationRuleOutput.Type;

// The operation
export const updateAutoModerationRule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateAutoModerationRuleInput,
    outputSchema: UpdateAutoModerationRuleOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
