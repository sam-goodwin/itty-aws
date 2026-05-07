import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListAutoModerationRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/guilds/{guild_id}/auto-moderation/rules" }),
  );
export type ListAutoModerationRulesInput =
  typeof ListAutoModerationRulesInput.Type;

// Output Schema
export const ListAutoModerationRulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(Schema.Unknown);
export type ListAutoModerationRulesOutput =
  typeof ListAutoModerationRulesOutput.Type;

// The operation
export const listAutoModerationRules = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListAutoModerationRulesInput,
    outputSchema: ListAutoModerationRulesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
