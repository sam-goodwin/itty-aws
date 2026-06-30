import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const V1DeleteInviteExternalJitAccessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    invite_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/projects/{ref}/database/jit/invite/{invite_id}",
    }),
  );
export type V1DeleteInviteExternalJitAccessInput =
  typeof V1DeleteInviteExternalJitAccessInput.Type;

// Output Schema
export const V1DeleteInviteExternalJitAccessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type V1DeleteInviteExternalJitAccessOutput =
  typeof V1DeleteInviteExternalJitAccessOutput.Type;

// The operation
/**
 * Deletes the invite for an external user to a database for JIT access
 *
 * Revokes and deletes the invitation
 *
 * @param ref - Project ref
 */
export const v1DeleteInviteExternalJitAccess =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1DeleteInviteExternalJitAccessInput,
    outputSchema: V1DeleteInviteExternalJitAccessOutput,
    errors: [Forbidden] as const,
  }));
