import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetEntitlementsFeaturesIdInput {
  id: string;
  expand?: string;
}
export const GetEntitlementsFeaturesIdInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/entitlements/features/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetEntitlementsFeaturesIdInput>;

// Output Schema
export interface GetEntitlementsFeaturesIdOutput {
  active: boolean;
  id: string;
  livemode: boolean;
  lookup_key: string;
  metadata: Record<string, string>;
  name: string;
  object: "entitlements.feature";
}
export const GetEntitlementsFeaturesIdOutput =
  /*@__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    id: Schema.String,
    livemode: Schema.Boolean,
    lookup_key: Schema.String,
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.String,
    object: Schema.Literals(["entitlements.feature"]),
  }) as unknown as Schema.Codec<GetEntitlementsFeaturesIdOutput>;

// The operation
/**
 * Retrieve a feature
 *
 * <p>Retrieves a feature</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 * @param id - The ID of the feature.
 */
export const GetEntitlementsFeaturesId = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetEntitlementsFeaturesIdInput,
  outputSchema: GetEntitlementsFeaturesIdOutput,
}));
