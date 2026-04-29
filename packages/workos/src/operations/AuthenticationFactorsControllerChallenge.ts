import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuthenticationFactorsControllerChallengeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    sms_template: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/auth/factors/{id}/challenge" }));
export type AuthenticationFactorsControllerChallengeInput =
  typeof AuthenticationFactorsControllerChallengeInput.Type;

// Output Schema
export const AuthenticationFactorsControllerChallengeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    expires_at: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    authentication_factor_id: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AuthenticationFactorsControllerChallengeOutput =
  typeof AuthenticationFactorsControllerChallengeOutput.Type;

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
