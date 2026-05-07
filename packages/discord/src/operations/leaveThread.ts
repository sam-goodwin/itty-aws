import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const LeaveThreadInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/channels/{channel_id}/thread-members/@me",
  }),
);
export type LeaveThreadInput = typeof LeaveThreadInput.Type;

// Output Schema
export const LeaveThreadOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LeaveThreadOutput = typeof LeaveThreadOutput.Type;

// The operation
export const leaveThread = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LeaveThreadInput,
  outputSchema: LeaveThreadOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
