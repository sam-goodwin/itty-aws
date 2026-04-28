import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const OauthApplicationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/oauth_applications/",
    }),
  );
export type OauthApplicationsListInput = typeof OauthApplicationsListInput.Type;

// Output Schema
export const OauthApplicationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.optional(Schema.String),
        client_id: Schema.optional(Schema.String),
        redirect_uris_list: Schema.Array(Schema.String),
        is_verified: Schema.optional(Schema.Boolean),
        created: Schema.String,
        updated: Schema.String,
      }),
    ),
  });
export type OauthApplicationsListOutput =
  typeof OauthApplicationsListOutput.Type;

// The operation
/**
 * ViewSet for listing OAuth applications at the organization level (read-only).
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const oauthApplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OauthApplicationsListInput,
    outputSchema: OauthApplicationsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
