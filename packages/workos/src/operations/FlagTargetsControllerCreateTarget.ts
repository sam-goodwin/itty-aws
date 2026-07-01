import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface FlagTargetsControllerCreateTargetInput {
  resourceId: string;
  slug: string;
}
export const FlagTargetsControllerCreateTargetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/feature-flags/{slug}/targets/{resourceId}",
    }),
  ) as unknown as Schema.Codec<FlagTargetsControllerCreateTargetInput>;

// Output Schema
export type FlagTargetsControllerCreateTargetOutput = void;
export const FlagTargetsControllerCreateTargetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FlagTargetsControllerCreateTargetOutput>;

// The operation
/**
 * Add a feature flag target
 *
 * Enables a feature flag for a specific target in the current environment. Currently, supported targets include users and organizations.
 *
 * @param resourceId - The resource ID in format "user_<id>" or "org_<id>".
 * @param slug - The unique slug identifier of the feature flag.
 */
export const FlagTargetsControllerCreateTarget =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FlagTargetsControllerCreateTargetInput,
    outputSchema: FlagTargetsControllerCreateTargetOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
