import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const FeatureFlagsControllerDisableFlagInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "PUT", path: "/feature-flags/{slug}/disable" }));
export type FeatureFlagsControllerDisableFlagInput =
  typeof FeatureFlagsControllerDisableFlagInput.Type;

// Output Schema
export const FeatureFlagsControllerDisableFlagOutput =
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
export type FeatureFlagsControllerDisableFlagOutput =
  typeof FeatureFlagsControllerDisableFlagOutput.Type;

// The operation
/**
 * Disable a feature flag
 *
 * Disables a feature flag in the current environment.
 *
 * @param slug - A unique key to reference the Feature Flag.
 */
export const FeatureFlagsControllerDisableFlag =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsControllerDisableFlagInput,
    outputSchema: FeatureFlagsControllerDisableFlagOutput,
    errors: [NotFound] as const,
  }));
