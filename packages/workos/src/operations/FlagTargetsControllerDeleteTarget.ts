import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const FlagTargetsControllerDeleteTargetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/feature-flags/{slug}/targets/{resourceId}",
    }),
  );
export type FlagTargetsControllerDeleteTargetInput =
  typeof FlagTargetsControllerDeleteTargetInput.Type;

// Output Schema
export const FlagTargetsControllerDeleteTargetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FlagTargetsControllerDeleteTargetOutput =
  typeof FlagTargetsControllerDeleteTargetOutput.Type;

// The operation
/**
 * Remove a feature flag target
 *
 * Removes a target from the feature flag's target list in the current environment. Currently, supported targets include users and organizations.
 *
 * @param resourceId - The resource ID in format "user_<id>" or "org_<id>".
 * @param slug - The unique slug identifier of the feature flag.
 */
export const FlagTargetsControllerDeleteTarget =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FlagTargetsControllerDeleteTargetInput,
    outputSchema: FlagTargetsControllerDeleteTargetOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
