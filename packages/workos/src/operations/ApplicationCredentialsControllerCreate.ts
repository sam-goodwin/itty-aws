import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ApplicationCredentialsControllerCreateInput {
  id: string;
}
export const ApplicationCredentialsControllerCreateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/connect/applications/{id}/client_secrets",
    }),
  ) as unknown as Schema.Codec<ApplicationCredentialsControllerCreateInput>;

// Output Schema
export interface ApplicationCredentialsControllerCreateOutput {
  object?: string;
  id?: string;
  secret_hint?: string;
  last_used_at?: string | null;
  created_at?: string;
  updated_at?: string;
  secret?: Redacted.Redacted<string>;
}
export const ApplicationCredentialsControllerCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    secret_hint: Schema.optional(Schema.String),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    secret: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<ApplicationCredentialsControllerCreateOutput>;

// The operation
/**
 * Create a new client secret for a Connect Application
 *
 * Create new secrets for a Connect Application.
 *
 * @param id - The application ID or client ID of the Connect Application.
 */
export const ApplicationCredentialsControllerCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationCredentialsControllerCreateInput,
    outputSchema: ApplicationCredentialsControllerCreateOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
