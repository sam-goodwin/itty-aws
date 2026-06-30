import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface OrganizationFeatureFlagsControllerListInput {
  organizationId: string;
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
}
export const OrganizationFeatureFlagsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organizationId}/feature-flags",
    }),
  ) as unknown as Schema.Codec<OrganizationFeatureFlagsControllerListInput>;

// Output Schema
export interface OrganizationFeatureFlagsControllerListOutput {
  object?: string;
  data?: {
    object?: string;
    id?: string;
    slug?: string;
    name?: string;
    description?: string | null;
    owner?: {
      email: string;
      first_name: string | null;
      last_name: string | null;
    } | null;
    tags?: string[];
    enabled?: boolean;
    default_value?: boolean;
    created_at?: string;
    updated_at?: string;
  }[];
  list_metadata?: { before: string | null; after: string | null };
}
export const OrganizationFeatureFlagsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          slug: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.NullOr(Schema.String)),
          owner: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                email: Schema.String,
                first_name: Schema.NullOr(Schema.String),
                last_name: Schema.NullOr(Schema.String),
              }),
            ),
          ),
          tags: Schema.optional(Schema.Array(Schema.String)),
          enabled: Schema.optional(Schema.Boolean),
          default_value: Schema.optional(Schema.Boolean),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<OrganizationFeatureFlagsControllerListOutput>;

// The operation
/**
 * List enabled feature flags for an organization
 *
 * Get a list of all enabled feature flags for an organization.
 *
 * @param organizationId - Unique identifier of the Organization.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time.
 */
export const OrganizationFeatureFlagsControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationFeatureFlagsControllerListInput,
    outputSchema: OrganizationFeatureFlagsControllerListOutput,
    errors: [NotFound] as const,
  }));
