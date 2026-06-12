import * as Schema from "effect/Schema";
import { issuing_physical_bundle_featuresSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetIssuingPhysicalBundlesPhysicalBundleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    physical_bundle: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/physical_bundles/{physical_bundle}",
      contentType: "form-urlencoded",
    }),
  );
export type GetIssuingPhysicalBundlesPhysicalBundleInput =
  typeof GetIssuingPhysicalBundlesPhysicalBundleInput.Type;

// Output Schema
export const GetIssuingPhysicalBundlesPhysicalBundleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    features: Schema.suspend(() => issuing_physical_bundle_featuresSchema),
    id: Schema.String,
    livemode: Schema.Boolean,
    name: Schema.String,
    object: Schema.Literals(["issuing.physical_bundle"]),
    status: Schema.Literals(["active", "inactive", "review"]),
    type: Schema.Literals(["custom", "standard"]),
  });
export type GetIssuingPhysicalBundlesPhysicalBundleOutput =
  typeof GetIssuingPhysicalBundlesPhysicalBundleOutput.Type;

// The operation
/**
 * Retrieve a physical bundle
 *
 * <p>Retrieves a physical bundle object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetIssuingPhysicalBundlesPhysicalBundle =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetIssuingPhysicalBundlesPhysicalBundleInput,
    outputSchema: GetIssuingPhysicalBundlesPhysicalBundleOutput,
  }));
