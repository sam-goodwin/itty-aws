import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const InviteResolveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.String.pipe(T.PathParam()),
  with_counts: Schema.optional(Schema.Boolean),
  guild_scheduled_event_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/invites/{code}" }));
export type InviteResolveInput = typeof InviteResolveInput.Type;

// Output Schema
export const InviteResolveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type InviteResolveOutput = typeof InviteResolveOutput.Type;

// The operation
export const inviteResolve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InviteResolveInput,
  outputSchema: InviteResolveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
