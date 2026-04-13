import * as Schema from "effect/Schema";
import { API } from "../client";
import * as T from "../traits";
import { Forbidden, NotFound } from "../errors";
import { SensitiveNullableString } from "../sensitive";

// Input Schema
export const CreateServiceTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization}/service-tokens",
    }),
  );
export type CreateServiceTokenInput = typeof CreateServiceTokenInput.Type;

// Output Schema
export const CreateServiceTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    display_name: Schema.String,
    token: Schema.optional(SensitiveNullableString),
    plain_text_refresh_token: Schema.optional(SensitiveNullableString),
    avatar_url: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
    actor_id: Schema.String,
    actor_display_name: Schema.String,
    actor_type: Schema.String,
    service_token_accesses: Schema.optional(
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
            deleted_at: Schema.String,
          }),
        }),
      ),
    ),
    oauth_accesses_by_resource: Schema.optional(
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
  });
export type CreateServiceTokenOutput = typeof CreateServiceTokenOutput.Type;

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
export const createServiceToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateServiceTokenInput,
  outputSchema: CreateServiceTokenOutput,
  errors: [Forbidden, NotFound] as const,
}));
