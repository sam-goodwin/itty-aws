import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const IamAssumeRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  role_id: Schema.optional(Schema.String),
  session_name: Schema.optional(Schema.String),
  duration: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "POST", path: "/v2/assumed-roles/assume" }));
export type IamAssumeRoleInput = typeof IamAssumeRoleInput.Type;

// Output Schema
export const IamAssumeRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  assumed_role_session: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      session_token: Schema.optional(SensitiveString),
      user_id: Schema.optional(Schema.String),
      oidc_issuer_id: Schema.optional(Schema.String),
      role_id: Schema.optional(Schema.String),
      session_name: Schema.optional(Schema.String),
      auth_method: Schema.optional(Schema.String),
      expires_at: Schema.optional(Schema.String),
      assumed_at: Schema.optional(Schema.String),
      remaining_duration: Schema.optional(Schema.Number),
      conditions_met: Schema.optional(Schema.Boolean),
      source_ip: Schema.optional(Schema.String),
      s3_credentials: Schema.optional(Schema.Unknown),
    }),
  ),
});
export type IamAssumeRoleOutput = typeof IamAssumeRoleOutput.Type;

// The operation
/**
 * Assume Role
 *
 * Create an assumed-role session by assuming an IAM Role.
 */
export const iamAssumeRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IamAssumeRoleInput,
  outputSchema: IamAssumeRoleOutput,
  errors: [BadRequest, Forbidden] as const,
}));
