import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface AuthenticationChallengesControllerVerifyInput {
  id: string;
  code: string;
}
export const AuthenticationChallengesControllerVerifyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    code: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/auth/challenges/{id}/verify" }),
  ) as unknown as Schema.Codec<AuthenticationChallengesControllerVerifyInput>;

// Output Schema
export interface AuthenticationChallengesControllerVerifyOutput {
  challenge?: {
    object?: string;
    id?: string;
    expires_at?: string;
    code?: string;
    authentication_factor_id?: string;
    created_at?: string;
    updated_at?: string;
  };
  valid?: boolean;
}
export const AuthenticationChallengesControllerVerifyOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AuthenticationChallengesControllerVerifyOutput>;

// The operation
/**
 * Verify Challenge
 *
 * Verifies an Authentication Challenge.
 *
 * @param id - The unique ID of the Authentication Challenge.
 */
export const AuthenticationChallengesControllerVerify =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuthenticationChallengesControllerVerifyInput,
    outputSchema: AuthenticationChallengesControllerVerifyOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
