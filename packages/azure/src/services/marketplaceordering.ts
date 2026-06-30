/**
 * Azure Marketplaceordering API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MarketplaceAgreementsCancelInput {
  subscriptionId: string;
  publisherId: string;
  offerId: string;
  planId: string;
}
export const MarketplaceAgreementsCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    publisherId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
    planId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements/{publisherId}/offers/{offerId}/plans/{planId}/cancel",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceAgreementsCancelInput>;

// Output Schema
export interface MarketplaceAgreementsCancelOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const MarketplaceAgreementsCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MarketplaceAgreementsCancelOutput>;

// The operation
/**
 * Cancel marketplace terms.
 *
 * @param api-version - The API version to use for the request.
 * @param subscriptionId - The subscription ID that identifies an Azure subscription.
 * @param publisherId - Publisher identifier string of image being deployed.
 * @param offerId - Offer identifier string of image being deployed.
 * @param planId - Plan identifier string of image being deployed.
 */
export const MarketplaceAgreementsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MarketplaceAgreementsCancelInput,
    outputSchema: MarketplaceAgreementsCancelOutput,
  }),
);
// Input Schema
export interface MarketplaceAgreementsCreateInput {
  offerType: "virtualmachine";
  subscriptionId: string;
  publisherId: string;
  offerId: string;
  planId: string;
  properties?: {
    publisher?: string;
    product?: string;
    plan?: string;
    licenseTextLink?: string;
    privacyPolicyLink?: string;
    marketplaceTermsLink?: string;
    retrieveDatetime?: string;
    signature?: string;
    accepted?: boolean;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const MarketplaceAgreementsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    offerType: Schema.Literals(["virtualmachine"]).pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    publisherId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
    planId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        publisher: Schema.optional(Schema.String),
        product: Schema.optional(Schema.String),
        plan: Schema.optional(Schema.String),
        licenseTextLink: Schema.optional(Schema.String),
        privacyPolicyLink: Schema.optional(Schema.String),
        marketplaceTermsLink: Schema.optional(Schema.String),
        retrieveDatetime: Schema.optional(Schema.String),
        signature: Schema.optional(Schema.String),
        accepted: Schema.optional(Schema.Boolean),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/offerTypes/{offerType}/publishers/{publisherId}/offers/{offerId}/plans/{planId}/agreements/current",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceAgreementsCreateInput>;

// Output Schema
export interface MarketplaceAgreementsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const MarketplaceAgreementsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MarketplaceAgreementsCreateOutput>;

// The operation
/**
 * Save marketplace terms.
 *
 * @param api-version - The API version to use for the request.
 * @param offerType - Offer Type, currently only virtualmachine type is supported.
 * @param subscriptionId - The subscription ID that identifies an Azure subscription.
 * @param publisherId - Publisher identifier string of image being deployed.
 * @param offerId - Offer identifier string of image being deployed.
 * @param planId - Plan identifier string of image being deployed.
 */
export const MarketplaceAgreementsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MarketplaceAgreementsCreateInput,
    outputSchema: MarketplaceAgreementsCreateOutput,
  }),
);
// Input Schema
export interface MarketplaceAgreementsGetInput {
  subscriptionId: string;
  offerType: "virtualmachine";
  publisherId: string;
  offerId: string;
  planId: string;
}
export const MarketplaceAgreementsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    offerType: Schema.Literals(["virtualmachine"]).pipe(T.PathParam()),
    publisherId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
    planId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/offerTypes/{offerType}/publishers/{publisherId}/offers/{offerId}/plans/{planId}/agreements/current",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceAgreementsGetInput>;

// Output Schema
export interface MarketplaceAgreementsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const MarketplaceAgreementsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MarketplaceAgreementsGetOutput>;

// The operation
/**
 * Get marketplace terms.
 *
 * @param api-version - The API version to use for the request.
 * @param subscriptionId - The subscription ID that identifies an Azure subscription.
 * @param offerType - Offer Type, currently only virtualmachine type is supported.
 * @param publisherId - Publisher identifier string of image being deployed.
 * @param offerId - Offer identifier string of image being deployed.
 * @param planId - Plan identifier string of image being deployed.
 */
export const MarketplaceAgreementsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MarketplaceAgreementsGetInput,
    outputSchema: MarketplaceAgreementsGetOutput,
  }),
);
// Input Schema
export interface MarketplaceAgreementsGetAgreementInput {
  subscriptionId: string;
  publisherId: string;
  offerId: string;
  planId: string;
}
export const MarketplaceAgreementsGetAgreementInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    publisherId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
    planId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements/{publisherId}/offers/{offerId}/plans/{planId}",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceAgreementsGetAgreementInput>;

// Output Schema
export interface MarketplaceAgreementsGetAgreementOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const MarketplaceAgreementsGetAgreementOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MarketplaceAgreementsGetAgreementOutput>;

// The operation
/**
 * Get marketplace agreement.
 *
 * @param api-version - The API version to use for the request.
 * @param subscriptionId - The subscription ID that identifies an Azure subscription.
 * @param publisherId - Publisher identifier string of image being deployed.
 * @param offerId - Offer identifier string of image being deployed.
 * @param planId - Plan identifier string of image being deployed.
 */
export const MarketplaceAgreementsGetAgreement =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceAgreementsGetAgreementInput,
    outputSchema: MarketplaceAgreementsGetAgreementOutput,
  }));
// Input Schema
export interface MarketplaceAgreementsListInput {
  subscriptionId: string;
}
export const MarketplaceAgreementsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceAgreementsListInput>;

// Output Schema
export interface MarketplaceAgreementsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const MarketplaceAgreementsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<MarketplaceAgreementsListOutput>;

// The operation
/**
 * List marketplace agreements in the subscription.
 *
 * @param api-version - The API version to use for the request.
 * @param subscriptionId - The subscription ID that identifies an Azure subscription.
 */
export const MarketplaceAgreementsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MarketplaceAgreementsListInput,
    outputSchema: MarketplaceAgreementsListOutput,
  }),
);
// Input Schema
export interface MarketplaceAgreementsSignInput {
  subscriptionId: string;
  publisherId: string;
  offerId: string;
  planId: string;
}
export const MarketplaceAgreementsSignInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    publisherId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
    planId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/agreements/{publisherId}/offers/{offerId}/plans/{planId}/sign",
      apiVersion: "2021-01-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceAgreementsSignInput>;

// Output Schema
export interface MarketplaceAgreementsSignOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const MarketplaceAgreementsSignOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MarketplaceAgreementsSignOutput>;

// The operation
/**
 * Sign marketplace terms.
 *
 * @param api-version - The API version to use for the request.
 * @param subscriptionId - The subscription ID that identifies an Azure subscription.
 * @param publisherId - Publisher identifier string of image being deployed.
 * @param offerId - Offer identifier string of image being deployed.
 * @param planId - Plan identifier string of image being deployed.
 */
export const MarketplaceAgreementsSign = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MarketplaceAgreementsSignInput,
    outputSchema: MarketplaceAgreementsSignOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.MarketplaceOrdering/operations",
    apiVersion: "2021-01-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Microsoft.MarketplaceOrdering REST API operations.
 *
 * @param api-version - The API version to use for the request.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
