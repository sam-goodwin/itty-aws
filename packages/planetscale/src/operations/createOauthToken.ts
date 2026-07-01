import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";
import {
  SensitiveString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CreateOauthTokenInput {
  organization: string;
  id: string;
  client_id: string;
  client_secret: string | Redacted.Redacted<string>;
  grant_type: "authorization_code" | "refresh_token";
  code?: string;
  redirect_uri?: string;
  refresh_token?: string | Redacted.Redacted<string>;
}
export const CreateOauthTokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
  client_id: Schema.String,
  client_secret: SensitiveString,
  grant_type: Schema.Literals(["authorization_code", "refresh_token"]),
  code: Schema.optional(Schema.String),
  redirect_uri: Schema.optional(Schema.String),
  refresh_token: Schema.optional(SensitiveString),
}).pipe(
  T.Http({
    method: "POST",
    path: "/organizations/{organization}/oauth-applications/{id}/token",
  }),
) as unknown as Schema.Codec<CreateOauthTokenInput>;

// Output Schema
export interface CreateOauthTokenOutput {
  id: string;
  name?: string | null;
  display_name: string;
  token?: Redacted.Redacted<string> | null;
  plain_text_refresh_token?: Redacted.Redacted<string> | null;
  avatar_url: string;
  created_at: string;
  updated_at: string;
  expires_at?: string | null;
  last_used_at?: string | null;
  actor_id: string | null;
  actor_display_name: string | null;
  actor_type: string | null;
  service_token_accesses?:
    | {
        id: string;
        access: string;
        description: string;
        resource_name: string;
        resource_id: string;
        resource_type: string;
        resource: {
          id: string;
          name: string;
          created_at: string;
          updated_at: string;
          deleted_at: string | null;
        };
      }[]
    | null;
  oauth_accesses_by_resource?: {
    database: {
      databases: {
        name: string;
        id: string;
        organization: string;
        url: string;
      }[];
      accesses: { name: string; description: string }[];
    };
    organization: {
      organizations: { name: string; id: string; url: string }[];
      accesses: { name: string; description: string }[];
    };
    branch: {
      branches: {
        name: string;
        id: string;
        database: string;
        organization: string;
        url: string;
      }[];
      accesses: { name: string; description: string }[];
    };
    user: {
      users: { name: string; id: string }[];
      accesses: { name: string; description: string }[];
    };
  } | null;
}
export const CreateOauthTokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    display_name: Schema.String,
    token: Schema.optional(SensitiveOutputNullableString),
    plain_text_refresh_token: Schema.optional(SensitiveOutputNullableString),
    avatar_url: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
    actor_id: Schema.NullOr(Schema.String),
    actor_display_name: Schema.NullOr(Schema.String),
    actor_type: Schema.NullOr(Schema.String),
    service_token_accesses: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            access: Schema.String,
            description: Schema.String,
            resource_name: Schema.String,
            resource_id: Schema.String,
            resource_type: Schema.String,
            resource: Schema.Struct({
              id: Schema.String,
              name: Schema.String,
              created_at: Schema.String,
              updated_at: Schema.String,
              deleted_at: Schema.NullOr(Schema.String),
            }),
          }),
        ),
      ),
    ),
    oauth_accesses_by_resource: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          database: Schema.Struct({
            databases: Schema.Array(
              Schema.Struct({
                name: Schema.String,
                id: Schema.String,
                organization: Schema.String,
                url: Schema.String,
              }),
            ),
            accesses: Schema.Array(
              Schema.Struct({
                name: Schema.String,
                description: Schema.String,
              }),
            ),
          }),
          organization: Schema.Struct({
            organizations: Schema.Array(
              Schema.Struct({
                name: Schema.String,
                id: Schema.String,
                url: Schema.String,
              }),
            ),
            accesses: Schema.Array(
              Schema.Struct({
                name: Schema.String,
                description: Schema.String,
              }),
            ),
          }),
          branch: Schema.Struct({
            branches: Schema.Array(
              Schema.Struct({
                name: Schema.String,
                id: Schema.String,
                database: Schema.String,
                organization: Schema.String,
                url: Schema.String,
              }),
            ),
            accesses: Schema.Array(
              Schema.Struct({
                name: Schema.String,
                description: Schema.String,
              }),
            ),
          }),
          user: Schema.Struct({
            users: Schema.Array(
              Schema.Struct({
                name: Schema.String,
                id: Schema.String,
              }),
            ),
            accesses: Schema.Array(
              Schema.Struct({
                name: Schema.String,
                description: Schema.String,
              }),
            ),
          }),
        }),
      ),
    ),
  },
) as unknown as Schema.Codec<CreateOauthTokenOutput>;

// The operation
/**
 * Create or renew an OAuth token
 *
 * Create an OAuth token from an authorization grant code, or refresh an OAuth token from a refresh token
 *
 * @param organization - The name of the organization the OAuth application belongs to
 * @param id - The ID of the OAuth application
 * @param client_id - The OAuth application's client ID
 * @param client_secret - The OAuth application's client secret
 * @param grant_type - Whether an OAuth grant code or a refresh token is being exchanged for an OAuth token
 * @param code - The OAuth grant code provided to your OAuth application's redirect URI. Required when grant_type is authorization_code
 * @param redirect_uri - The OAuth application's redirect URI. Required when grant_type is authorization_code
 * @param refresh_token - The refresh token from the original OAuth token grant. Required when grant_type is refresh_token
 */
export const createOauthToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateOauthTokenInput,
  outputSchema: CreateOauthTokenOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
