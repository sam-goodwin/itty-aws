import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface DataIntegrationsControllerGetUserlandUserTokenInput {
  slug: string;
  user_id: string;
  organization_id?: string;
}
export const DataIntegrationsControllerGetUserlandUserTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String,
    organization_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/data-integrations/{slug}/token" }),
  ) as unknown as Schema.Codec<DataIntegrationsControllerGetUserlandUserTokenInput>;

// Output Schema
export type DataIntegrationsControllerGetUserlandUserTokenOutput =
  | {
      active: boolean;
      access_token: {
        object: string;
        access_token: Redacted.Redacted<string>;
        expires_at: string | null;
        scopes: ReadonlyArray<string>;
        missing_scopes: ReadonlyArray<string>;
      };
    }
  | { active: boolean; error: "needs_reauthorization" | "not_installed" };
export const DataIntegrationsControllerGetUserlandUserTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      active: Schema.Boolean,
      access_token: Schema.Struct({
        object: Schema.String,
        access_token: SensitiveOutputString,
        expires_at: Schema.NullOr(Schema.String),
        scopes: Schema.Array(Schema.String),
        missing_scopes: Schema.Array(Schema.String),
      }),
    }),
    Schema.Struct({
      active: Schema.Boolean,
      error: Schema.Literals(["needs_reauthorization", "not_installed"]),
    }),
  ]) as unknown as Schema.Codec<DataIntegrationsControllerGetUserlandUserTokenOutput>;

// The operation
/**
 * Get an access token for a connected account
 *
 * Fetches a valid OAuth access token for a user's connected account. WorkOS automatically handles token refresh, ensuring you always receive a valid, non-expired token.
 *
 * @param slug - The identifier of the integration.
 */
export const DataIntegrationsControllerGetUserlandUserToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataIntegrationsControllerGetUserlandUserTokenInput,
    outputSchema: DataIntegrationsControllerGetUserlandUserTokenOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
