import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeprecatedDeletePinInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    message_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/channels/{channel_id}/pins/{message_id}",
    }),
  );
export type DeprecatedDeletePinInput = typeof DeprecatedDeletePinInput.Type;

// Output Schema
export const DeprecatedDeletePinOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeprecatedDeletePinOutput = typeof DeprecatedDeletePinOutput.Type;

// The operation
export const deprecatedDeletePin = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeprecatedDeletePinInput,
  outputSchema: DeprecatedDeletePinOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
