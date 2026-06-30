import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const V1InviteExternalJitAccessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    email: Schema.String,
    roles: Schema.Array(
      Schema.Struct({
        role: Schema.String,
        expires_at: Schema.optional(Schema.Number),
        allowed_networks: Schema.optional(
          Schema.Struct({
            allowed_cidrs: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  cidr: Schema.String,
                }),
              ),
            ),
            allowed_cidrs_v6: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  cidr: Schema.String,
                }),
              ),
            ),
          }),
        ),
        branches_only: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{ref}/database/jit/invite" }),
  );
export type V1InviteExternalJitAccessInput =
  typeof V1InviteExternalJitAccessInput.Type;

// Output Schema
export const V1InviteExternalJitAccessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String,
    invite_id: Schema.String,
    user_roles: Schema.Array(
      Schema.Struct({
        role: Schema.String,
        expires_at: Schema.optional(Schema.Number),
        allowed_networks: Schema.optional(
          Schema.Struct({
            allowed_cidrs: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  cidr: Schema.String,
                }),
              ),
            ),
            allowed_cidrs_v6: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  cidr: Schema.String,
                }),
              ),
            ),
          }),
        ),
        branches_only: Schema.optional(Schema.Boolean),
      }),
    ),
  });
export type V1InviteExternalJitAccessOutput =
  typeof V1InviteExternalJitAccessOutput.Type;

// The operation
/**
 * Invites an external user to a database for JIT access
 *
 * Invites the external user and sets initial roles that can be assumed and for how long
 *
 * @param ref - Project ref
 */
export const v1InviteExternalJitAccess = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1InviteExternalJitAccessInput,
    outputSchema: V1InviteExternalJitAccessOutput,
    errors: [Forbidden] as const,
  }),
);
