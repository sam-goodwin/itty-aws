import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetIssuingPhysicalBundlesPhysicalBundleInput {
  physical_bundle: string;
  expand?: string;
}
export const GetIssuingPhysicalBundlesPhysicalBundleInput =
  /*@__PURE__*/ Schema.Struct({
    physical_bundle: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/physical_bundles/{physical_bundle}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetIssuingPhysicalBundlesPhysicalBundleInput>;

// Output Schema
export interface GetIssuingPhysicalBundlesPhysicalBundleOutput {
  features: {
    card_logo: "optional" | "required" | "unsupported";
    carrier_text: "optional" | "required" | "unsupported";
    second_line: "optional" | "required" | "unsupported";
  };
  id: string;
  livemode: boolean;
  name: string;
  object: "issuing.physical_bundle";
  status: "active" | "inactive" | "review";
  type: "custom" | "standard";
}
export const GetIssuingPhysicalBundlesPhysicalBundleOutput =
  /*@__PURE__*/ Schema.Struct({
    features: Schema.Struct({
      card_logo: Schema.Literals(["optional", "required", "unsupported"]),
      carrier_text: Schema.Literals(["optional", "required", "unsupported"]),
      second_line: Schema.Literals(["optional", "required", "unsupported"]),
    }),
    id: Schema.String,
    livemode: Schema.Boolean,
    name: Schema.String,
    object: Schema.Literals(["issuing.physical_bundle"]),
    status: Schema.Literals(["active", "inactive", "review"]),
    type: Schema.Literals(["custom", "standard"]),
  }) as unknown as Schema.Codec<GetIssuingPhysicalBundlesPhysicalBundleOutput>;

// The operation
/**
 * Retrieve a physical bundle
 *
 * <p>Retrieves a physical bundle object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetIssuingPhysicalBundlesPhysicalBundle =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetIssuingPhysicalBundlesPhysicalBundleInput,
    outputSchema: GetIssuingPhysicalBundlesPhysicalBundleOutput,
  }));
