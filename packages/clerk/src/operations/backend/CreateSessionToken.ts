import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const CreateSessionTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_id: Schema.String.pipe(T.PathParam()),
    expires_in_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(T.Http({ method: "POST", path: "/sessions/{session_id}/tokens" }));
export type CreateSessionTokenInput = typeof CreateSessionTokenInput.Type;

// Output Schema
export const CreateSessionTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.Literals(["token"])),
    jwt: Schema.optional(Schema.String),
  });
export type CreateSessionTokenOutput = typeof CreateSessionTokenOutput.Type;

// The operation
/**
 * Create a session token
 *
 * Creates a session JSON Web Token (JWT) based on a session.
 *
 * @param session_id - The ID of the session
 */
export const CreateSessionToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateSessionTokenInput,
  outputSchema: CreateSessionTokenOutput,
  errors: [NotFound] as const,
}));
