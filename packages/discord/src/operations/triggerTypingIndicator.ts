import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const TriggerTypingIndicatorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "POST", path: "/channels/{channel_id}/typing" }));
export type TriggerTypingIndicatorInput =
  typeof TriggerTypingIndicatorInput.Type;

// Output Schema
export const TriggerTypingIndicatorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export type TriggerTypingIndicatorOutput =
  typeof TriggerTypingIndicatorOutput.Type;

// The operation
export const triggerTypingIndicator = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TriggerTypingIndicatorInput,
    outputSchema: TriggerTypingIndicatorOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
