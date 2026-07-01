import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetEntitlementsActiveEntitlementsIdInput {
  id: string;
  expand?: string;
}
export const GetEntitlementsActiveEntitlementsIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/entitlements/active_entitlements/{id}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetEntitlementsActiveEntitlementsIdInput>;

// Output Schema
export interface GetEntitlementsActiveEntitlementsIdOutput {
  feature:
    | string
    | {
        active: boolean;
        id: string;
        livemode: boolean;
        lookup_key: string;
        metadata: Record<string, string>;
        name: string;
        object: "entitlements.feature";
      };
  id: string;
  livemode: boolean;
  lookup_key: string;
  object: "entitlements.active_entitlement";
}
export const GetEntitlementsActiveEntitlementsIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    feature: Schema.Union([
      Schema.String,
      Schema.Struct({
        active: Schema.Boolean,
        id: Schema.String,
        livemode: Schema.Boolean,
        lookup_key: Schema.String,
        metadata: Schema.Record(Schema.String, Schema.String),
        name: Schema.String,
        object: Schema.Literals(["entitlements.feature"]),
      }),
    ]),
    id: Schema.String,
    livemode: Schema.Boolean,
    lookup_key: Schema.String,
    object: Schema.Literals(["entitlements.active_entitlement"]),
  }) as unknown as Schema.Codec<GetEntitlementsActiveEntitlementsIdOutput>;

// The operation
/**
 * Retrieve an active entitlement
 *
 * <p>Retrieve an active entitlement</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 * @param id - The ID of the entitlement.
 */
export const GetEntitlementsActiveEntitlementsId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetEntitlementsActiveEntitlementsIdInput,
    outputSchema: GetEntitlementsActiveEntitlementsIdOutput,
  }));
