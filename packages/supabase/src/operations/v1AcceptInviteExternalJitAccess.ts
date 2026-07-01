import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface V1AcceptInviteExternalJitAccessInput {
  ref: string;
  email: string;
  token: string;
}
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
  ) as unknown as Schema.Codec<V1AcceptInviteExternalJitAccessInput>;

// Output Schema
export interface V1AcceptInviteExternalJitAccessOutput {
  user_id?: string;
  user_roles: {
    role: string;
    expires_at?: number;
    allowed_networks?: {
      allowed_cidrs?: { cidr: string }[];
      allowed_cidrs_v6?: { cidr: string }[];
    };
    branches_only?: boolean;
  }[];
}
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
  }) as unknown as Schema.Codec<V1AcceptInviteExternalJitAccessOutput>;

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
