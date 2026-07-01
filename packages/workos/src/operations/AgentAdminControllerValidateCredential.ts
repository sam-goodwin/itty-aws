import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface AgentAdminControllerValidateCredentialInput {
  type: "api_key" | "access_token";
  credential: string;
  audience?: string;
}
export const AgentAdminControllerValidateCredentialInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals(["api_key", "access_token"]),
    credential: Schema.String,
    audience: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/agents/credentials/validate" }),
  ) as unknown as Schema.Codec<AgentAdminControllerValidateCredentialInput>;

// Output Schema
export interface AgentAdminControllerValidateCredentialOutput {
  valid: boolean;
  registration_id: string | null;
  expires_at: string | null;
}
export const AgentAdminControllerValidateCredentialOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valid: Schema.Boolean,
    registration_id: Schema.NullOr(Schema.String),
    expires_at: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<AgentAdminControllerValidateCredentialOutput>;

// The operation
/**
 * Validate an agent credential
 *
 * Validate an agent credential — an API key or access token — against the environment of the API key used to authenticate the request. This is a read-only check: it never consumes or mutates the credential.
 */
export const AgentAdminControllerValidateCredential =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentAdminControllerValidateCredentialInput,
    outputSchema: AgentAdminControllerValidateCredentialOutput,
    errors: [BadRequest] as const,
  }));
