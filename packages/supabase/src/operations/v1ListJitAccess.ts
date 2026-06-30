import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListJitAccessInput {
  ref: string;
}
export const V1ListJitAccessInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/database/jit/list" }),
) as unknown as Schema.Codec<V1ListJitAccessInput>;

// Output Schema
export interface V1ListJitAccessOutput {
  items: (
    | {
        user_id: string;
        primary_email: string | null;
        invite_id: unknown;
        expires_at: unknown;
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
    | {
        user_id: unknown;
        primary_email: string;
        invite_id: string;
        expires_at: string;
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
  )[];
}
export const V1ListJitAccessOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Union([
      Schema.Struct({
        user_id: Schema.String,
        primary_email: Schema.NullOr(Schema.String),
        invite_id: Schema.Unknown,
        expires_at: Schema.Unknown,
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
      }),
      Schema.Struct({
        user_id: Schema.Unknown,
        primary_email: Schema.String,
        invite_id: Schema.String,
        expires_at: Schema.String,
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
      }),
    ]),
  ),
}) as unknown as Schema.Codec<V1ListJitAccessOutput>;

// The operation
/**
 * List all user-id to role mappings for JIT access
 *
 * Mappings of roles a user can assume in the project database
 *
 * @param ref - Project ref
 */
export const v1ListJitAccess = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1ListJitAccessInput,
  outputSchema: V1ListJitAccessOutput,
  errors: [BadRequest, Forbidden] as const,
}));
