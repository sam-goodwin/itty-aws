import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface FeatureFlagsControllerDisableFlagInput {
  slug: string;
}
export const FeatureFlagsControllerDisableFlagInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "PUT", path: "/feature-flags/{slug}/disable" }),
  ) as unknown as Schema.Codec<FeatureFlagsControllerDisableFlagInput>;

// Output Schema
export interface FeatureFlagsControllerDisableFlagOutput {
  object: string;
  id: string;
  slug: string;
  name: string;
  description: string | null;
  owner: {
    email: string;
    first_name: string | null;
    last_name: string | null;
  } | null;
  tags: string[];
  enabled: boolean;
  default_value: boolean;
  created_at: string;
  updated_at: string;
}
export const FeatureFlagsControllerDisableFlagOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    slug: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    owner: Schema.NullOr(
      Schema.Struct({
        email: Schema.String,
        first_name: Schema.NullOr(Schema.String),
        last_name: Schema.NullOr(Schema.String),
      }),
    ),
    tags: Schema.Array(Schema.String),
    enabled: Schema.Boolean,
    default_value: Schema.Boolean,
    created_at: Schema.String,
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<FeatureFlagsControllerDisableFlagOutput>;

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
