import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface DataIntegrationsControllerUpsertApiKeyInput {
  slug: string;
  user_id: string;
  organization_id?: string;
  secret: string | Redacted.Redacted<string>;
}
export const DataIntegrationsControllerUpsertApiKeyInput =
  /*@__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String,
    organization_id: Schema.optional(Schema.String),
    secret: SensitiveString,
  }).pipe(
    T.Http({ method: "PUT", path: "/data-integrations/{slug}/api-key" }),
  ) as unknown as Schema.Codec<DataIntegrationsControllerUpsertApiKeyInput>;

// Output Schema
export interface DataIntegrationsControllerUpsertApiKeyOutput {
  object?: string;
  id?: string;
  user_id?: string | null;
  organization_id?: string | null;
  scopes?: ReadonlyArray<string>;
  auth_method?: "oauth" | "api_key";
  api_key_last_4?: string | null;
  state?: "connected" | "needs_reauthorization" | "disconnected";
  created_at?: string;
  updated_at?: string;
}
export const DataIntegrationsControllerUpsertApiKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.NullOr(Schema.String)),
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    scopes: Schema.optional(Schema.Array(Schema.String)),
    auth_method: Schema.optional(Schema.Literals(["oauth", "api_key"])),
    api_key_last_4: Schema.optional(Schema.NullOr(Schema.String)),
    state: Schema.optional(
      Schema.Literals(["connected", "needs_reauthorization", "disconnected"]),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataIntegrationsControllerUpsertApiKeyOutput>;

// The operation
/**
 * Upsert an API key for a connected account
 *
 * Creates or updates an API-key-based installation for the specified integration and user. If an installation already exists, the stored API key is rotated to the new value.
 *
 * @param slug - The identifier of the integration.
 */
export const DataIntegrationsControllerUpsertApiKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataIntegrationsControllerUpsertApiKeyInput,
    outputSchema: DataIntegrationsControllerUpsertApiKeyOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
