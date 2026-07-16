import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface OauthApplicationsListInput {
  organization_id: string;
  limit?: number;
  offset?: number;
}
export const OauthApplicationsListInput =
  /*@__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/oauth_applications/",
    }),
  ) as unknown as Schema.Codec<OauthApplicationsListInput>;

// Output Schema
export interface OauthApplicationsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    name?: string;
    client_id?: string;
    redirect_uris_list?: string[];
    is_verified?: boolean;
    created?: string;
    updated?: string;
  }[];
}
export const OauthApplicationsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          client_id: Schema.optional(Schema.String),
          redirect_uris_list: Schema.optional(Schema.Array(Schema.String)),
          is_verified: Schema.optional(Schema.Boolean),
          created: Schema.optional(Schema.String),
          updated: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<OauthApplicationsListOutput>;

// The operation
/**
 * ViewSet for listing OAuth applications at the organization level (read-only).
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const oauthApplicationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OauthApplicationsListInput,
  outputSchema: OauthApplicationsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
