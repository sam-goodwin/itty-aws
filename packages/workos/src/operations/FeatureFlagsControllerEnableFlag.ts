import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const FeatureFlagsControllerEnableFlagInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "PUT", path: "/feature-flags/{slug}/enable" }));
export type FeatureFlagsControllerEnableFlagInput =
  typeof FeatureFlagsControllerEnableFlagInput.Type;

// Output Schema
export const FeatureFlagsControllerEnableFlagOutput =
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
export type FeatureFlagsControllerEnableFlagOutput =
  typeof FeatureFlagsControllerEnableFlagOutput.Type;

// The operation
/**
 * Enable a feature flag
 *
 * Enables a feature flag in the current environment.
 *
 * @param slug - A unique key to reference the Feature Flag.
 */
export const FeatureFlagsControllerEnableFlag =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsControllerEnableFlagInput,
    outputSchema: FeatureFlagsControllerEnableFlagOutput,
    errors: [NotFound] as const,
  }));
