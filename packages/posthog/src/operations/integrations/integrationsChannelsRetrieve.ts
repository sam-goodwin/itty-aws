import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface IntegrationsChannelsRetrieveInput {
  id: number;
  project_id: string;
  limit?: number;
  offset?: number;
  search?: string;
}
export const IntegrationsChannelsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/channels/",
    }),
  ) as unknown as Schema.Codec<IntegrationsChannelsRetrieveInput>;

// Output Schema
export interface IntegrationsChannelsRetrieveOutput {
  channels: {
    id: string;
    name: string;
    is_private: boolean;
    is_member: boolean;
    is_ext_shared: boolean;
    is_private_without_access: boolean;
  }[];
  lastRefreshedAt?: string | null;
  has_more?: boolean;
}
export const IntegrationsChannelsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    channels: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        is_private: Schema.Boolean,
        is_member: Schema.Boolean,
        is_ext_shared: Schema.Boolean,
        is_private_without_access: Schema.Boolean,
      }),
    ),
    lastRefreshedAt: Schema.optional(Schema.NullOr(Schema.String)),
    has_more: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<IntegrationsChannelsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param limit - Maximum number of channels to return per request (max 200).
 * @param offset - Number of channels to skip before returning results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Optional case-insensitive channel name or ID search query.
 */
export const integrationsChannelsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsChannelsRetrieveInput,
    outputSchema: IntegrationsChannelsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
