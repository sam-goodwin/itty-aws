import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";
import { SensitiveOutputNullableString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ListServiceTokensInput {
  organization: string;
  page?: number;
  per_page?: number;
}
export const ListServiceTokensInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/service-tokens",
  }),
) as unknown as Schema.Codec<ListServiceTokensInput>;

// Output Schema
export interface ListServiceTokensOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    name?: string | null;
    display_name: string;
    token?: string | null;
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
  }>;
}
export const ListServiceTokensOutput =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.optional(Schema.NullOr(Schema.String)),
        display_name: Schema.String,
        token: Schema.optional(Schema.NullOr(Schema.String)),
        plain_text_refresh_token: Schema.optional(
          SensitiveOutputNullableString,
        ),
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
      }),
    ),
  }) as unknown as Schema.Codec<ListServiceTokensOutput>;

// The operation
/**
 * List service tokens
 *
 * List service tokens for an organization.
 *
 * @param organization - The name of the organization
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listServiceTokens = /*@__PURE__*/ API.makePaginated(() => ({
  inputSchema: ListServiceTokensInput,
  outputSchema: ListServiceTokensOutput,
  errors: [Forbidden, NotFound] as const,
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "next_page",
    items: "data",
  },
}));
