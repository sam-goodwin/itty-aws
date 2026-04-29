import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ApplicationCredentialsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/connect/applications/{id}/client_secrets",
    }),
  );
export type ApplicationCredentialsControllerListInput =
  typeof ApplicationCredentialsControllerListInput.Type;

// Output Schema
export const ApplicationCredentialsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      object: Schema.String,
      id: Schema.String,
      secret_hint: Schema.String,
      last_used_at: Schema.NullOr(Schema.String),
      created_at: Schema.String,
      updated_at: Schema.String,
    }),
  );
export type ApplicationCredentialsControllerListOutput =
  typeof ApplicationCredentialsControllerListOutput.Type;

// The operation
/**
 * List Client Secrets for a Connect Application
 *
 * List all client secrets associated with a Connect Application.
 *
 * @param id - The application ID or client ID of the Connect Application.
 */
export const ApplicationCredentialsControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationCredentialsControllerListInput,
    outputSchema: ApplicationCredentialsControllerListOutput,
    errors: [NotFound] as const,
  }));
