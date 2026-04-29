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
    object: Schema.String,
    id: Schema.String,
    slug: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    owner: Schema.Unknown,
    tags: Schema.Array(Schema.String),
    enabled: Schema.Boolean,
    default_value: Schema.Boolean,
    created_at: Schema.String,
    updated_at: Schema.String,
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
