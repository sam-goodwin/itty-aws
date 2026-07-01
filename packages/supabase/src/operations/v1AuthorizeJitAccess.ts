import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1AuthorizeJitAccessInput {
  ref: string;
  role: string;
  rhost: string;
}
export const V1AuthorizeJitAccessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    role: Schema.String,
    rhost: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{ref}/database/jit" }),
  ) as unknown as Schema.Codec<V1AuthorizeJitAccessInput>;

// Output Schema
export interface V1AuthorizeJitAccessOutput {
  user_id: string;
  user_role: {
    role: string;
    expires_at?: number;
    allowed_networks?: {
      allowed_cidrs?: { cidr: string }[];
      allowed_cidrs_v6?: { cidr: string }[];
    };
    branches_only?: boolean;
  };
}
export const V1AuthorizeJitAccessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String,
    user_role: Schema.Struct({
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
  }) as unknown as Schema.Codec<V1AuthorizeJitAccessOutput>;

// The operation
/**
 * Authorize user-id to role mappings for JIT access
 *
 * Authorizes the request to assume a role in the project database
 *
 * @param ref - Project ref
 */
export const v1AuthorizeJitAccess = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1AuthorizeJitAccessInput,
    outputSchema: V1AuthorizeJitAccessOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
