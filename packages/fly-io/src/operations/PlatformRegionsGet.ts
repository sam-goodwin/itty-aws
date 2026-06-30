import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface PlatformRegionsGetInput {}
export const PlatformRegionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/platform/regions" }),
  ) as unknown as Schema.Codec<PlatformRegionsGetInput>;

// Output Schema
export interface PlatformRegionsGetOutput {
  nearest?: string;
  regions?: {
    code?: string;
    deprecated?: boolean;
    gateway_available?: boolean;
    geo_region?: string;
    latitude?: number;
    longitude?: number;
    name?: string;
    requires_paid_plan?: boolean;
  }[];
}
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
  }) as unknown as Schema.Codec<PlatformRegionsGetOutput>;

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
