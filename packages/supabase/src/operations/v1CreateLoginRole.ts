import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1CreateLoginRoleInput {
  ref: string;
  read_only: boolean;
}
export const V1CreateLoginRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ref: Schema.String.pipe(T.PathParam()),
    read_only: Schema.Boolean,
  },
).pipe(
  T.Http({ method: "POST", path: "/v1/projects/{ref}/cli/login-role" }),
) as unknown as Schema.Codec<V1CreateLoginRoleInput>;

// Output Schema
export interface V1CreateLoginRoleOutput {
  role: string;
  password: Redacted.Redacted<string>;
  ttl_seconds: number;
}
export const V1CreateLoginRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.String,
    password: SensitiveOutputString,
    ttl_seconds: Schema.Number,
  }) as unknown as Schema.Codec<V1CreateLoginRoleOutput>;

// The operation
/**
 * [Beta] Create a login role for CLI with temporary password
 *
 * @param ref - Project ref
 */
export const v1CreateLoginRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1CreateLoginRoleInput,
  outputSchema: V1CreateLoginRoleOutput,
  errors: [BadRequest, Forbidden] as const,
}));
