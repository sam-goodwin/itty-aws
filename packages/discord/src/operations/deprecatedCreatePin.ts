import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeprecatedCreatePinInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    message_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "PUT", path: "/channels/{channel_id}/pins/{message_id}" }),
  );
export type DeprecatedCreatePinInput = typeof DeprecatedCreatePinInput.Type;

// Output Schema
export const DeprecatedCreatePinOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeprecatedCreatePinOutput = typeof DeprecatedCreatePinOutput.Type;

// The operation
export const deprecatedCreatePin = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeprecatedCreatePinInput,
  outputSchema: DeprecatedCreatePinOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
