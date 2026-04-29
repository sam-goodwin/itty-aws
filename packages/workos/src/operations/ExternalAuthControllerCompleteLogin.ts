import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ExternalAuthControllerCompleteLoginInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_auth_id: Schema.String,
    user: Schema.Struct({
      id: Schema.String,
      email: Schema.String,
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
    user_consent_options: Schema.optional(
      Schema.Array(
        Schema.Struct({
          claim: Schema.String,
          type: Schema.String,
          label: Schema.String,
          choices: Schema.Array(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              label: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }).pipe(T.Http({ method: "POST", path: "/authkit/oauth2/complete" }));
export type ExternalAuthControllerCompleteLoginInput =
  typeof ExternalAuthControllerCompleteLoginInput.Type;

// Output Schema
export const ExternalAuthControllerCompleteLoginOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    redirect_uri: Schema.String,
  });
export type ExternalAuthControllerCompleteLoginOutput =
  typeof ExternalAuthControllerCompleteLoginOutput.Type;

// The operation
/**
 * Complete external authentication
 *
 * Completes an external authentication flow and returns control to AuthKit. This endpoint is used with [Standalone Connect](/authkit/connect/standalone) to bridge your existing authentication system with the Connect OAuth API infrastructure.
 * After successfully authenticating a user in your application, calling this endpoint will:
 * - Create or update the user in AuthKit, using the given `id` as its `external_id`.
 * - Return a `redirect_uri` your application should redirect to in order for AuthKit to complete the flow
 * Users are automatically created or updated based on the `id` and `email` provided. If a user with the same `id` exists, their information is updated. Otherwise, a new user is created.
 * If you provide a new `id` with an `email` that already belongs to an existing user, the request will fail with an error as email addresses are unique to a user.
 */
export const ExternalAuthControllerCompleteLogin =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalAuthControllerCompleteLoginInput,
    outputSchema: ExternalAuthControllerCompleteLoginOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
