import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetJitAccessInput {
  ref: string;
}
export const V1GetJitAccessInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/database/jit" }),
) as unknown as Schema.Codec<V1GetJitAccessInput>;

// Output Schema
export interface V1GetJitAccessOutput {
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
export const V1GetJitAccessOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<V1GetJitAccessOutput>;

// The operation
/**
 * Get user-id to role mappings for JIT access
 *
 * Mappings of roles a user can assume in the project database
 *
 * @param ref - Project ref
 */
export const v1GetJitAccess = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetJitAccessInput,
  outputSchema: V1GetJitAccessOutput,
  errors: [BadRequest, Forbidden] as const,
}));
