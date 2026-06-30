import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface ApplicationCredentialsControllerListInput {
  id: string;
}
export const ApplicationCredentialsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/connect/applications/{id}/client_secrets",
    }),
  ) as unknown as Schema.Codec<ApplicationCredentialsControllerListInput>;

// Output Schema
export type ApplicationCredentialsControllerListOutput = {
  object: string;
  id: string;
  secret_hint: string;
  last_used_at: string | null;
  created_at: string;
  updated_at: string;
}[];
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
  ) as unknown as Schema.Codec<ApplicationCredentialsControllerListOutput>;

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
