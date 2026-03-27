import * as Schema from "effect/Schema";
import { API } from "../client";
import * as T from "../traits";
import { Forbidden } from "../errors";

// Input Schema
export const PlatformRegionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/platform/regions" }),
  );
export type PlatformRegionsGetInput = typeof PlatformRegionsGetInput.Type;

// Output Schema
export const PlatformRegionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nearest: Schema.optional(Schema.String),
    regions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          deprecated: Schema.optional(Schema.Boolean),
          gateway_available: Schema.optional(Schema.Boolean),
          geo_region: Schema.optional(Schema.String),
          latitude: Schema.optional(Schema.Number),
          longitude: Schema.optional(Schema.Number),
          name: Schema.optional(Schema.String),
          requires_paid_plan: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  });
export type PlatformRegionsGetOutput = typeof PlatformRegionsGetOutput.Type;

// The operation
/**
 * Get Regions
 *
 * List all regions on the platform with their details.
 */
export const PlatformRegionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PlatformRegionsGetInput,
  outputSchema: PlatformRegionsGetOutput,
  errors: [Forbidden] as const,
}));
