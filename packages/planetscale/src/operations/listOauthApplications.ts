import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListOauthApplicationsInput {
  organization: string;
  page?: number;
  per_page?: number;
}
export const ListOauthApplicationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/oauth-applications",
    }),
  ) as unknown as Schema.Codec<ListOauthApplicationsInput>;

// Output Schema
export interface ListOauthApplicationsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    id: string;
    name: string;
    redirect_uri: string;
    domain: string;
    created_at: string;
    updated_at: string;
    scopes: string;
    avatar: string;
    client_id: string;
    tokens: number;
    dcr: boolean;
    single_org_authorization: boolean;
    requires_org_scope: boolean;
    scopes_by_resource: Record<string, unknown>;
    all_scopes_by_resource: Record<string, unknown>;
  }[];
}
export const ListOauthApplicationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        redirect_uri: Schema.String,
        domain: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        scopes: Schema.String,
        avatar: Schema.String,
        client_id: Schema.String,
        tokens: Schema.Number,
        dcr: Schema.Boolean,
        single_org_authorization: Schema.Boolean,
        requires_org_scope: Schema.Boolean,
        scopes_by_resource: Schema.Record(Schema.String, Schema.Unknown),
        all_scopes_by_resource: Schema.Record(Schema.String, Schema.Unknown),
      }),
    ),
  }) as unknown as Schema.Codec<ListOauthApplicationsOutput>;

// The operation
/**
 * List OAuth applications
 *
 * @param organization - The name of the organization the OAuth applications belong to
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listOauthApplications =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListOauthApplicationsInput,
    outputSchema: ListOauthApplicationsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
