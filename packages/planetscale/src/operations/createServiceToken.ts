import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CreateServiceTokenInput {
  organization: string;
  name?: string;
  ttl?: number;
}
export const CreateServiceTokenInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization}/service-tokens",
    }),
  ) as unknown as Schema.Codec<CreateServiceTokenInput>;

// Output Schema
export interface CreateServiceTokenOutput {
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
  service_token_accesses?: ReadonlyArray<{
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
  }> | null;
  oauth_accesses_by_resource?: {
    database: {
      databases: ReadonlyArray<{
        name: string;
        id: string;
        organization: string;
        url: string;
      }>;
      accesses: ReadonlyArray<{ name: string; description: string }>;
    };
    organization: {
      organizations: ReadonlyArray<{ name: string; id: string; url: string }>;
      accesses: ReadonlyArray<{ name: string; description: string }>;
    };
    branch: {
      branches: ReadonlyArray<{
        name: string;
        id: string;
        database: string;
        organization: string;
        url: string;
      }>;
      accesses: ReadonlyArray<{ name: string; description: string }>;
    };
    user: {
      users: ReadonlyArray<{ name: string; id: string }>;
      accesses: ReadonlyArray<{ name: string; description: string }>;
    };
  } | null;
}
export const CreateServiceTokenOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CreateServiceTokenOutput>;

// The operation
/**
 * Create a service token
 *
 * Create a new service token for the organization.
 *
 * @param organization - The name of the organization
 * @param name - The name of the service token
 * @param ttl - Time to live (in seconds) for the service token. The token will be invalid when TTL has passed
 */
export const createServiceToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateServiceTokenInput,
  outputSchema: CreateServiceTokenOutput,
  errors: [Forbidden, NotFound] as const,
}));
