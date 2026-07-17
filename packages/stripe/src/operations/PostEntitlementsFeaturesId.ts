import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostEntitlementsFeaturesIdInput {
  id: string;
  active?: boolean;
  expand?: string[];
  metadata?: Record<string, string> | "";
  name?: string;
}
export const PostEntitlementsFeaturesIdInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    active: Schema.optional(Schema.Boolean),
    expand: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(
      Schema.Union([
        Schema.Record(Schema.String, Schema.String),
        Schema.Literals([""]),
      ]),
    ),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/entitlements/features/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostEntitlementsFeaturesIdInput>;

// Output Schema
export interface PostEntitlementsFeaturesIdOutput {
  active: boolean;
  id: string;
  livemode: boolean;
  lookup_key: string;
  metadata: Record<string, string>;
  name: string;
  object: "entitlements.feature";
}
export const PostEntitlementsFeaturesIdOutput =
  /*@__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    id: Schema.String,
    livemode: Schema.Boolean,
    lookup_key: Schema.String,
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.String,
    object: Schema.Literals(["entitlements.feature"]),
  }) as unknown as Schema.Codec<PostEntitlementsFeaturesIdOutput>;

// The operation
/**
 * Updates a feature
 *
 * <p>Update a feature’s metadata or permanently deactivate it.</p>
 */
export const PostEntitlementsFeaturesId = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostEntitlementsFeaturesIdInput,
  outputSchema: PostEntitlementsFeaturesIdOutput,
}));
