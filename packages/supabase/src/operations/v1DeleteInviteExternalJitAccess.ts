import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface V1DeleteInviteExternalJitAccessInput {
  ref: string;
  invite_id: string;
}
export const V1DeleteInviteExternalJitAccessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    invite_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/projects/{ref}/database/jit/invite/{invite_id}",
    }),
  ) as unknown as Schema.Codec<V1DeleteInviteExternalJitAccessInput>;

// Output Schema
export type V1DeleteInviteExternalJitAccessOutput = void;
export const V1DeleteInviteExternalJitAccessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1DeleteInviteExternalJitAccessOutput>;

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
