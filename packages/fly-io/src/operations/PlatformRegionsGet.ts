import * as Schema from "effect/Schema";
import { main_regionRowSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

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
      Schema.Array(Schema.suspend(() => main_regionRowSchema)),
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
