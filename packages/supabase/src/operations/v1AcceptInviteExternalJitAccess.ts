import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const V1AcceptInviteExternalJitAccessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    email: Schema.String,
    token: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/database/jit/invite/accept",
    }),
  );
export type V1AcceptInviteExternalJitAccessInput =
  typeof V1AcceptInviteExternalJitAccessInput.Type;

// Output Schema
export const V1AcceptInviteExternalJitAccessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.optional(Schema.String),
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
export type V1AcceptInviteExternalJitAccessOutput =
  typeof V1AcceptInviteExternalJitAccessOutput.Type;

// The operation
/**
 * Accepts invitation for JIT database access
 *
 * Accepts the invitation to JIT database access
 *
 * @param ref - Project ref
 */
export const v1AcceptInviteExternalJitAccess =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1AcceptInviteExternalJitAccessInput,
    outputSchema: V1AcceptInviteExternalJitAccessOutput,
  }));
