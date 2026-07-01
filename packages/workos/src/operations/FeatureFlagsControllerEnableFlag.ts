import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface FeatureFlagsControllerEnableFlagInput {
  slug: string;
}
export const FeatureFlagsControllerEnableFlagInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "PUT", path: "/feature-flags/{slug}/enable" }),
  ) as unknown as Schema.Codec<FeatureFlagsControllerEnableFlagInput>;

// Output Schema
export interface FeatureFlagsControllerEnableFlagOutput {
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
  tags: ReadonlyArray<string>;
  enabled: boolean;
  default_value: boolean;
  created_at: string;
  updated_at: string;
}
export const FeatureFlagsControllerEnableFlagOutput =
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
  }) as unknown as Schema.Codec<FeatureFlagsControllerEnableFlagOutput>;

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
