import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostEntitlementsFeaturesInput {
  expand?: string[];
  lookup_key: string;
  metadata?: Record<string, string>;
  name: string;
}
export const PostEntitlementsFeaturesInput =
  /*@__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.Array(Schema.String)),
    lookup_key: Schema.String,
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/entitlements/features",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostEntitlementsFeaturesInput>;

// Output Schema
export interface PostEntitlementsFeaturesOutput {
  active: boolean;
  id: string;
  livemode: boolean;
  lookup_key: string;
  metadata: Record<string, string>;
  name: string;
  object: "entitlements.feature";
}
export const PostEntitlementsFeaturesOutput =
  /*@__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    id: Schema.String,
    livemode: Schema.Boolean,
    lookup_key: Schema.String,
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.String,
    object: Schema.Literals(["entitlements.feature"]),
  }) as unknown as Schema.Codec<PostEntitlementsFeaturesOutput>;

// The operation
/**
 * Create a feature
 *
 * <p>Creates a feature</p>
 */
export const PostEntitlementsFeatures = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostEntitlementsFeaturesInput,
  outputSchema: PostEntitlementsFeaturesOutput,
}));
