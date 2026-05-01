import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const FeatureFlagsControllerFindBySlugInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/feature-flags/{slug}" }));
export type FeatureFlagsControllerFindBySlugInput =
  typeof FeatureFlagsControllerFindBySlugInput.Type;

// Output Schema
export const FeatureFlagsControllerFindBySlugOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    owner: Schema.optional(Schema.Unknown),
    tags: Schema.optional(Schema.Array(Schema.String)),
    enabled: Schema.optional(Schema.Boolean),
    default_value: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type FeatureFlagsControllerFindBySlugOutput =
  typeof FeatureFlagsControllerFindBySlugOutput.Type;

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
