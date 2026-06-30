import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FeatureFlagsRemoteConfigRetrieveInput {
  id: number;
  project_id: string;
}
export const FeatureFlagsRemoteConfigRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/{id}/remote_config/",
    }),
  ) as unknown as Schema.Codec<FeatureFlagsRemoteConfigRetrieveInput>;

// Output Schema
export type FeatureFlagsRemoteConfigRetrieveOutput = void;
export const FeatureFlagsRemoteConfigRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FeatureFlagsRemoteConfigRetrieveOutput>;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param id - A unique integer value identifying this feature flag.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsRemoteConfigRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeatureFlagsRemoteConfigRetrieveInput,
    outputSchema: FeatureFlagsRemoteConfigRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
