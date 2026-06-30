import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface FeatureFlagsMyFlagsRetrieveInput {
  project_id: string;
  groups?: string;
}
export const FeatureFlagsMyFlagsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    groups: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/feature_flags/my_flags/",
    }),
  ) as unknown as Schema.Codec<FeatureFlagsMyFlagsRetrieveInput>;

// Output Schema
export type FeatureFlagsMyFlagsRetrieveOutput = {
  feature_flag?: {
    id?: number;
    team_id?: number;
    name?: string;
    key?: string;
    filters?: Record<string, unknown>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    version?: number | null;
    evaluation_runtime?: "server" | "client" | "all" | "" | null;
    bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
    evaluation_contexts?: string[];
  };
  value?: unknown;
}[];
export const FeatureFlagsMyFlagsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      feature_flag: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          team_id: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          key: Schema.optional(Schema.String),
          filters: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          deleted: Schema.optional(Schema.Boolean),
          active: Schema.optional(Schema.Boolean),
          ensure_experience_continuity: Schema.optional(
            Schema.NullOr(Schema.Boolean),
          ),
          version: Schema.optional(Schema.NullOr(Schema.Number)),
          evaluation_runtime: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals(["server", "client", "all"]),
                Schema.Literals([""]),
              ]),
            ),
          ),
          bucketing_identifier: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals(["distinct_id", "device_id"]),
                Schema.Literals([""]),
              ]),
            ),
          ),
          evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      value: Schema.optional(Schema.Unknown),
    }),
  ) as unknown as Schema.Codec<FeatureFlagsMyFlagsRetrieveOutput>;

// The operation
/**
 * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
 * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
 *
 * @param groups - Groups for feature flag evaluation (JSON object string)
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const featureFlagsMyFlagsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FeatureFlagsMyFlagsRetrieveInput,
    outputSchema: FeatureFlagsMyFlagsRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
