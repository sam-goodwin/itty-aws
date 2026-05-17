import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const InviteRevokeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/invites/{code}" }));
export type InviteRevokeInput = typeof InviteRevokeInput.Type;

// Output Schema
export const InviteRevokeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type InviteRevokeOutput = typeof InviteRevokeOutput.Type;

// The operation
export const inviteRevoke = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InviteRevokeInput,
  outputSchema: InviteRevokeOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
