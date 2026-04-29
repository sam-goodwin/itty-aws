import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ApplicationCredentialsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/connect/applications/{id}/client_secrets",
    }),
  );
export type ApplicationCredentialsControllerCreateInput =
  typeof ApplicationCredentialsControllerCreateInput.Type;

// Output Schema
export const ApplicationCredentialsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    secret_hint: Schema.String,
    last_used_at: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
    secret: SensitiveString,
  });
export type ApplicationCredentialsControllerCreateOutput =
  typeof ApplicationCredentialsControllerCreateOutput.Type;

// The operation
/**
 * Create a new client secret for a Connect Application
 *
 * Create new secrets for a Connect Application.
 *
 * @param id - The application ID or client ID of the Connect Application.
 */
export const ApplicationCredentialsControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationCredentialsControllerCreateInput,
    outputSchema: ApplicationCredentialsControllerCreateOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
