import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface AuthenticationFactorsControllerChallengeInput {
  id: string;
  sms_template?: string;
}
export const AuthenticationFactorsControllerChallengeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    sms_template: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/auth/factors/{id}/challenge" }),
  ) as unknown as Schema.Codec<AuthenticationFactorsControllerChallengeInput>;

// Output Schema
export interface AuthenticationFactorsControllerChallengeOutput {
  object?: string;
  id?: string;
  expires_at?: string;
  code?: string;
  authentication_factor_id?: string;
  created_at?: string;
  updated_at?: string;
}
export const AuthenticationFactorsControllerChallengeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    authentication_factor_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AuthenticationFactorsControllerChallengeOutput>;

// The operation
/**
 * Challenge Factor
 *
 * Creates a Challenge for an Authentication Factor.
 *
 * @param id - The unique ID of the Authentication Factor to be challenged.
 */
export const AuthenticationFactorsControllerChallenge =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthenticationFactorsControllerChallengeInput,
    outputSchema: AuthenticationFactorsControllerChallengeOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
