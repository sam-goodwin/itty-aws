/**
 * Azure Softwareplan API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface HybridUseBenefitCreateInput {
  scope: string;
  planId: string;
  sku: { name?: string };
  etag?: number;
  properties?: {
    provisioningState?: "Succeeded" | "Cancelled" | "Failed";
    createdDate?: string;
    lastUpdatedDate?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const HybridUseBenefitCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    planId: Schema.String.pipe(T.PathParam()),
    sku: Schema.Struct({
      name: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.Number),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Cancelled", "Failed"]),
        ),
        createdDate: Schema.optional(Schema.String),
        lastUpdatedDate: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits/{planId}",
      apiVersion: "2019-12-01",
    }),
  ) as unknown as Schema.Codec<HybridUseBenefitCreateInput>;

// Output Schema
export interface HybridUseBenefitCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const HybridUseBenefitCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<HybridUseBenefitCreateOutput>;

// The operation
/**
 * Create a new hybrid use benefit under a given scope
 *
 * @param scope - The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
 * @param planId - This is a unique identifier for a plan. Should be a guid.
 * @param api-version - The api-version to be used by the service
 */
export const HybridUseBenefitCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridUseBenefitCreateInput,
    outputSchema: HybridUseBenefitCreateOutput,
  }),
);
// Input Schema
export interface HybridUseBenefitDeleteInput {
  scope: string;
  planId: string;
}
export const HybridUseBenefitDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    planId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits/{planId}",
      apiVersion: "2019-12-01",
    }),
  ) as unknown as Schema.Codec<HybridUseBenefitDeleteInput>;

// Output Schema
export type HybridUseBenefitDeleteOutput = void;
export const HybridUseBenefitDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HybridUseBenefitDeleteOutput>;

// The operation
/**
 * Deletes a given plan ID
 *
 * @param scope - The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
 * @param planId - This is a unique identifier for a plan. Should be a guid.
 * @param api-version - The api-version to be used by the service
 */
export const HybridUseBenefitDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridUseBenefitDeleteInput,
    outputSchema: HybridUseBenefitDeleteOutput,
  }),
);
// Input Schema
export interface HybridUseBenefitGetInput {
  scope: string;
  planId: string;
}
export const HybridUseBenefitGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    planId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits/{planId}",
      apiVersion: "2019-12-01",
    }),
  ) as unknown as Schema.Codec<HybridUseBenefitGetInput>;

// Output Schema
export interface HybridUseBenefitGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const HybridUseBenefitGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<HybridUseBenefitGetOutput>;

// The operation
/**
 * Gets a given plan ID
 *
 * @param scope - The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
 * @param planId - This is a unique identifier for a plan. Should be a guid.
 * @param api-version - The api-version to be used by the service
 */
export const HybridUseBenefitGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HybridUseBenefitGetInput,
  outputSchema: HybridUseBenefitGetOutput,
}));
// Input Schema
export interface HybridUseBenefitListInput {
  scope: string;
  $filter?: string;
}
export const HybridUseBenefitListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits",
      apiVersion: "2019-12-01",
    }),
  ) as unknown as Schema.Codec<HybridUseBenefitListInput>;

// Output Schema
export interface HybridUseBenefitListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const HybridUseBenefitListOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<HybridUseBenefitListOutput>;

// The operation
/**
 * Get all hybrid use benefits associated with an ARM resource.
 *
 * @param scope - The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
 * @param api-version - The api-version to be used by the service
 * @param $filter - Supports applying filter on the type of SKU
 */
export const HybridUseBenefitList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridUseBenefitListInput,
    outputSchema: HybridUseBenefitListOutput,
  }),
);
// Input Schema
export interface HybridUseBenefitRevisionListInput {
  scope: string;
  planId: string;
}
export const HybridUseBenefitRevisionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    planId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits/{planId}/revisions",
      apiVersion: "2019-12-01",
    }),
  ) as unknown as Schema.Codec<HybridUseBenefitRevisionListInput>;

// Output Schema
export interface HybridUseBenefitRevisionListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const HybridUseBenefitRevisionListOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<HybridUseBenefitRevisionListOutput>;

// The operation
/**
 * Gets the version history of a hybrid use benefit
 *
 * @param scope - The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
 * @param planId - This is a unique identifier for a plan. Should be a guid.
 * @param api-version - The api-version to be used by the service
 */
export const HybridUseBenefitRevisionList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HybridUseBenefitRevisionListInput,
    outputSchema: HybridUseBenefitRevisionListOutput,
  }));
// Input Schema
export interface HybridUseBenefitUpdateInput {
  scope: string;
  planId: string;
  sku: { name?: string };
  etag?: number;
  properties?: {
    provisioningState?: "Succeeded" | "Cancelled" | "Failed";
    createdDate?: string;
    lastUpdatedDate?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const HybridUseBenefitUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    planId: Schema.String.pipe(T.PathParam()),
    sku: Schema.Struct({
      name: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.Number),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Cancelled", "Failed"]),
        ),
        createdDate: Schema.optional(Schema.String),
        lastUpdatedDate: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits/{planId}",
      apiVersion: "2019-12-01",
    }),
  ) as unknown as Schema.Codec<HybridUseBenefitUpdateInput>;

// Output Schema
export interface HybridUseBenefitUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const HybridUseBenefitUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<HybridUseBenefitUpdateOutput>;

// The operation
/**
 * Updates an existing hybrid use benefit
 *
 * @param scope - The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
 * @param planId - This is a unique identifier for a plan. Should be a guid.
 * @param api-version - The api-version to be used by the service
 */
export const HybridUseBenefitUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HybridUseBenefitUpdateInput,
    outputSchema: HybridUseBenefitUpdateOutput,
  }),
);
// Input Schema
export interface OperationsListInput {
  scope: string;
}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.SoftwarePlan/operations",
    apiVersion: "2019-12-01",
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
    origin?: string;
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
        origin: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Get operations.
 *
 * List all the operations.
 *
 * @param scope - The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
 * @param api-version - The api-version to be used by the service
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SoftwarePlanRegisterInput {
  subscriptionId: string;
}
export const SoftwarePlanRegisterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.SoftwarePlan/register",
      apiVersion: "2019-12-01",
    }),
  ) as unknown as Schema.Codec<SoftwarePlanRegisterInput>;

// Output Schema
export type SoftwarePlanRegisterOutput = void;
export const SoftwarePlanRegisterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SoftwarePlanRegisterOutput>;

// The operation
/**
 * Register to Microsoft.SoftwarePlan resource provider.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The api-version to be used by the service
 */
export const SoftwarePlanRegister = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SoftwarePlanRegisterInput,
    outputSchema: SoftwarePlanRegisterOutput,
  }),
);
