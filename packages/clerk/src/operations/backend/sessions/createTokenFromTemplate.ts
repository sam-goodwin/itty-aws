import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { NotFound } from "../../../errors.ts";

// Input Schema
export const CreateTokenFromTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_id: Schema.String.pipe(T.PathParam()),
    template_name: Schema.String.pipe(T.PathParam()),
    expires_in_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/sessions/{session_id}/tokens/{template_name}",
    }),
  );
export type CreateTokenFromTemplateInput =
  typeof CreateTokenFromTemplateInput.Type;

// Output Schema
export const CreateTokenFromTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.Literals(["token"])),
    jwt: Schema.optional(Schema.String),
  });
export type CreateTokenFromTemplateOutput =
  typeof CreateTokenFromTemplateOutput.Type;

// The operation
/**
 * Create a session token from a JWT template
 *
 * Creates a JSON Web Token (JWT) based on a session and a JWT Template name defined for your instance
 *
 * @param session_id - The ID of the session
 * @param template_name - The name of the JWT template defined in your instance (e.g. `custom_hasura`).
 */
export const createTokenFromTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateTokenFromTemplateInput,
    outputSchema: CreateTokenFromTemplateOutput,
    errors: [NotFound] as const,
  }),
);
