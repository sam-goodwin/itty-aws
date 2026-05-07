import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteAutoModerationRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    rule_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/guilds/{guild_id}/auto-moderation/rules/{rule_id}",
    }),
  );
export type DeleteAutoModerationRuleInput =
  typeof DeleteAutoModerationRuleInput.Type;

// Output Schema
export const DeleteAutoModerationRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteAutoModerationRuleOutput =
  typeof DeleteAutoModerationRuleOutput.Type;

// The operation
export const deleteAutoModerationRule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteAutoModerationRuleInput,
    outputSchema: DeleteAutoModerationRuleOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
