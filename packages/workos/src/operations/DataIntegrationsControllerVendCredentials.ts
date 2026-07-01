import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface DataIntegrationsControllerVendCredentialsInput {
  slug: string;
  user_id: string;
  organization_id?: string;
}
export const DataIntegrationsControllerVendCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String,
    organization_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/data-integrations/{slug}/credentials" }),
  ) as unknown as Schema.Codec<DataIntegrationsControllerVendCredentialsInput>;

// Output Schema
export type DataIntegrationsControllerVendCredentialsOutput =
  | {
      active: boolean;
      credential: {
        object: string;
        auth_method: string;
        value: string;
        expires_at: string | null;
        scopes: ReadonlyArray<string>;
        missing_scopes: ReadonlyArray<string>;
      };
    }
  | {
      active: boolean;
      credential: { object: string; auth_method: string; value: string };
    }
  | { active: boolean; error: "not_installed" | "needs_reauthorization" };
export const DataIntegrationsControllerVendCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      active: Schema.Boolean,
      credential: Schema.Struct({
        object: Schema.String,
        auth_method: Schema.String,
        value: Schema.String,
        expires_at: Schema.NullOr(Schema.String),
        scopes: Schema.Array(Schema.String),
        missing_scopes: Schema.Array(Schema.String),
      }),
    }),
    Schema.Struct({
      active: Schema.Boolean,
      credential: Schema.Struct({
        object: Schema.String,
        auth_method: Schema.String,
        value: Schema.String,
      }),
    }),
    Schema.Struct({
      active: Schema.Boolean,
      error: Schema.Literals(["not_installed", "needs_reauthorization"]),
    }),
  ]) as unknown as Schema.Codec<DataIntegrationsControllerVendCredentialsOutput>;

// The operation
/**
 * Vend credentials for a connected account
 *
 * Returns credentials for a user's connected account. Branches on the installation's `auth_method`: OAuth installations return an access token (refreshed if needed); API-key installations return the stored secret.
 *
 * @param slug - The identifier of the integration.
 */
export const DataIntegrationsControllerVendCredentials =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataIntegrationsControllerVendCredentialsInput,
    outputSchema: DataIntegrationsControllerVendCredentialsOutput,
    errors: [BadRequest, NotFound] as const,
  }));
