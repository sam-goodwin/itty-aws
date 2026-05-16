import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";
import { SensitiveNullableString } from "../sensitive.ts";

// Input Schema
export const ListOauthTokensInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  application_id: Schema.String.pipe(T.PathParam()),
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/oauth-applications/{application_id}/tokens",
  }),
);
export type ListOauthTokensInput = typeof ListOauthTokensInput.Type;

// Output Schema
export const ListOauthTokensOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      plain_text_refresh_token: Schema.optional(SensitiveNullableString),
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
});
export type ListOauthTokensOutput = typeof ListOauthTokensOutput.Type;

// The operation
/**
 * List OAuth tokens
 *
 * List OAuth tokens created by an OAuth application
 *
 * @param organization - The name of the organization the OAuth application belongs to
 * @param application_id - The ID of the OAuth application
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listOauthTokens = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(
  () => ({
    inputSchema: ListOauthTokensInput,
    outputSchema: ListOauthTokensOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }),
);
