import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const JoinThreadInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "PUT", path: "/channels/{channel_id}/thread-members/@me" }),
);
export type JoinThreadInput = typeof JoinThreadInput.Type;

// Output Schema
export const JoinThreadOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type JoinThreadOutput = typeof JoinThreadOutput.Type;

// The operation
export const joinThread = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JoinThreadInput,
  outputSchema: JoinThreadOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
