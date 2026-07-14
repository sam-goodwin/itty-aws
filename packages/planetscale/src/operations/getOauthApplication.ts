import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetOauthApplicationInput {
  organization: string;
  application_id: string;
}
export const GetOauthApplicationInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    application_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/oauth-applications/{application_id}",
    }),
  ) as unknown as Schema.Codec<GetOauthApplicationInput>;

// Output Schema
export interface GetOauthApplicationOutput {
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
}
export const GetOauthApplicationOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetOauthApplicationOutput>;

// The operation
/**
 * Get an OAuth application
 *
 * @param organization - The name of the organization the OAuth application belongs to
 * @param application_id - The ID of the OAuth application
 */
export const getOauthApplication = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOauthApplicationInput,
  outputSchema: GetOauthApplicationOutput,
  errors: [Forbidden, NotFound] as const,
}));
