import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuthenticationChallengesControllerVerifyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    code: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/auth/challenges/{id}/verify" }));
export type AuthenticationChallengesControllerVerifyInput =
  typeof AuthenticationChallengesControllerVerifyInput.Type;

// Output Schema
export const AuthenticationChallengesControllerVerifyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    challenge: Schema.optional(
      Schema.Struct({
        object: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        expires_at: Schema.optional(Schema.String),
        code: Schema.optional(Schema.String),
        authentication_factor_id: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
    valid: Schema.optional(Schema.Boolean),
  });
export type AuthenticationChallengesControllerVerifyOutput =
  typeof AuthenticationChallengesControllerVerifyOutput.Type;

// The operation
/**
 * Verify Challenge
 *
 * Verifies an Authentication Challenge.
 *
 * @param id - The unique ID of the Authentication Challenge.
 */
export const AuthenticationChallengesControllerVerify =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthenticationChallengesControllerVerifyInput,
    outputSchema: AuthenticationChallengesControllerVerifyOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
