import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface FeatureFlagsControllerFindBySlugInput {
  slug: string;
}
export const FeatureFlagsControllerFindBySlugInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/feature-flags/{slug}" }),
  ) as unknown as Schema.Codec<FeatureFlagsControllerFindBySlugInput>;

// Output Schema
export interface FeatureFlagsControllerFindBySlugOutput {
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
}
export const FeatureFlagsControllerFindBySlugOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<FeatureFlagsControllerFindBySlugOutput>;

// The operation
/**
 * Get a feature flag
 *
 * Get the details of an existing feature flag by its slug.
 *
 * @param slug - A unique key to reference the Feature Flag.
 */
export const FeatureFlagsControllerFindBySlug =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsControllerFindBySlugInput,
    outputSchema: FeatureFlagsControllerFindBySlugOutput,
    errors: [NotFound] as const,
  }));
