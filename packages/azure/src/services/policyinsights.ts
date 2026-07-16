/**
 * Azure Policyinsights API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AttestationsCreateOrUpdateAtResourceInput {
  resourceId: string;
  attestationName: string;
  properties: {
    policyAssignmentId: string;
    policyDefinitionReferenceId?: string;
    complianceState?: "Compliant" | "NonCompliant" | "Unknown";
    expiresOn?: string;
    owner?: string;
    comments?: string;
    evidence?: { description?: string; sourceUri?: string }[];
    provisioningState?: string;
    lastComplianceStateChangeAt?: string;
    assessmentDate?: string;
    metadata?: unknown;
  };
}
export const AttestationsCreateOrUpdateAtResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      policyAssignmentId: Schema.String,
      policyDefinitionReferenceId: Schema.optional(Schema.String),
      complianceState: Schema.optional(
        Schema.Literals(["Compliant", "NonCompliant", "Unknown"]),
      ),
      expiresOn: Schema.optional(Schema.String),
      owner: Schema.optional(Schema.String),
      comments: Schema.optional(Schema.String),
      evidence: Schema.optional(
        Schema.Array(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            sourceUri: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(Schema.String),
      lastComplianceStateChangeAt: Schema.optional(Schema.String),
      assessmentDate: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Unknown),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsCreateOrUpdateAtResourceInput>;

// Output Schema
export interface AttestationsCreateOrUpdateAtResourceOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AttestationsCreateOrUpdateAtResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<AttestationsCreateOrUpdateAtResourceOutput>;

// The operation
/**
 * Creates or updates an attestation at resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsCreateOrUpdateAtResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttestationsCreateOrUpdateAtResourceInput,
    outputSchema: AttestationsCreateOrUpdateAtResourceOutput,
  }));
// Input Schema
export interface AttestationsCreateOrUpdateAtResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  attestationName: string;
  properties: {
    policyAssignmentId: string;
    policyDefinitionReferenceId?: string;
    complianceState?: "Compliant" | "NonCompliant" | "Unknown";
    expiresOn?: string;
    owner?: string;
    comments?: string;
    evidence?: { description?: string; sourceUri?: string }[];
    provisioningState?: string;
    lastComplianceStateChangeAt?: string;
    assessmentDate?: string;
    metadata?: unknown;
  };
}
export const AttestationsCreateOrUpdateAtResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      policyAssignmentId: Schema.String,
      policyDefinitionReferenceId: Schema.optional(Schema.String),
      complianceState: Schema.optional(
        Schema.Literals(["Compliant", "NonCompliant", "Unknown"]),
      ),
      expiresOn: Schema.optional(Schema.String),
      owner: Schema.optional(Schema.String),
      comments: Schema.optional(Schema.String),
      evidence: Schema.optional(
        Schema.Array(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            sourceUri: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(Schema.String),
      lastComplianceStateChangeAt: Schema.optional(Schema.String),
      assessmentDate: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Unknown),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsCreateOrUpdateAtResourceGroupInput>;

// Output Schema
export interface AttestationsCreateOrUpdateAtResourceGroupOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AttestationsCreateOrUpdateAtResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<AttestationsCreateOrUpdateAtResourceGroupOutput>;

// The operation
/**
 * Creates or updates an attestation at resource group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsCreateOrUpdateAtResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttestationsCreateOrUpdateAtResourceGroupInput,
    outputSchema: AttestationsCreateOrUpdateAtResourceGroupOutput,
  }));
// Input Schema
export interface AttestationsCreateOrUpdateAtSubscriptionInput {
  subscriptionId: string;
  attestationName: string;
  properties: {
    policyAssignmentId: string;
    policyDefinitionReferenceId?: string;
    complianceState?: "Compliant" | "NonCompliant" | "Unknown";
    expiresOn?: string;
    owner?: string;
    comments?: string;
    evidence?: { description?: string; sourceUri?: string }[];
    provisioningState?: string;
    lastComplianceStateChangeAt?: string;
    assessmentDate?: string;
    metadata?: unknown;
  };
}
export const AttestationsCreateOrUpdateAtSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      policyAssignmentId: Schema.String,
      policyDefinitionReferenceId: Schema.optional(Schema.String),
      complianceState: Schema.optional(
        Schema.Literals(["Compliant", "NonCompliant", "Unknown"]),
      ),
      expiresOn: Schema.optional(Schema.String),
      owner: Schema.optional(Schema.String),
      comments: Schema.optional(Schema.String),
      evidence: Schema.optional(
        Schema.Array(
          Schema.Struct({
            description: Schema.optional(Schema.String),
            sourceUri: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(Schema.String),
      lastComplianceStateChangeAt: Schema.optional(Schema.String),
      assessmentDate: Schema.optional(Schema.String),
      metadata: Schema.optional(Schema.Unknown),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsCreateOrUpdateAtSubscriptionInput>;

// Output Schema
export interface AttestationsCreateOrUpdateAtSubscriptionOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AttestationsCreateOrUpdateAtSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<AttestationsCreateOrUpdateAtSubscriptionOutput>;

// The operation
/**
 * Creates or updates an attestation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsCreateOrUpdateAtSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttestationsCreateOrUpdateAtSubscriptionInput,
    outputSchema: AttestationsCreateOrUpdateAtSubscriptionOutput,
  }));
// Input Schema
export interface AttestationsDeleteAtResourceInput {
  resourceId: string;
  attestationName: string;
}
export const AttestationsDeleteAtResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsDeleteAtResourceInput>;

// Output Schema
export type AttestationsDeleteAtResourceOutput = void;
export const AttestationsDeleteAtResourceOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AttestationsDeleteAtResourceOutput>;

// The operation
/**
 * Deletes an existing attestation at individual resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsDeleteAtResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttestationsDeleteAtResourceInput,
    outputSchema: AttestationsDeleteAtResourceOutput,
  }));
// Input Schema
export interface AttestationsDeleteAtResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  attestationName: string;
}
export const AttestationsDeleteAtResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsDeleteAtResourceGroupInput>;

// Output Schema
export type AttestationsDeleteAtResourceGroupOutput = void;
export const AttestationsDeleteAtResourceGroupOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AttestationsDeleteAtResourceGroupOutput>;

// The operation
/**
 * Deletes an existing attestation at resource group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsDeleteAtResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttestationsDeleteAtResourceGroupInput,
    outputSchema: AttestationsDeleteAtResourceGroupOutput,
  }));
// Input Schema
export interface AttestationsDeleteAtSubscriptionInput {
  subscriptionId: string;
  attestationName: string;
}
export const AttestationsDeleteAtSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsDeleteAtSubscriptionInput>;

// Output Schema
export type AttestationsDeleteAtSubscriptionOutput = void;
export const AttestationsDeleteAtSubscriptionOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AttestationsDeleteAtSubscriptionOutput>;

// The operation
/**
 * Deletes an existing attestation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsDeleteAtSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttestationsDeleteAtSubscriptionInput,
    outputSchema: AttestationsDeleteAtSubscriptionOutput,
  }));
// Input Schema
export interface AttestationsGetAtResourceInput {
  resourceId: string;
  attestationName: string;
}
export const AttestationsGetAtResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsGetAtResourceInput>;

// Output Schema
export interface AttestationsGetAtResourceOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AttestationsGetAtResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<AttestationsGetAtResourceOutput>;

// The operation
/**
 * Gets an existing attestation at resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsGetAtResource = /*@__PURE__*/ API.make(() => ({
  inputSchema: AttestationsGetAtResourceInput,
  outputSchema: AttestationsGetAtResourceOutput,
}));
// Input Schema
export interface AttestationsGetAtResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  attestationName: string;
}
export const AttestationsGetAtResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsGetAtResourceGroupInput>;

// Output Schema
export interface AttestationsGetAtResourceGroupOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AttestationsGetAtResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<AttestationsGetAtResourceGroupOutput>;

// The operation
/**
 * Gets an existing attestation at resource group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsGetAtResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttestationsGetAtResourceGroupInput,
    outputSchema: AttestationsGetAtResourceGroupOutput,
  }));
// Input Schema
export interface AttestationsGetAtSubscriptionInput {
  subscriptionId: string;
  attestationName: string;
}
export const AttestationsGetAtSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsGetAtSubscriptionInput>;

// Output Schema
export interface AttestationsGetAtSubscriptionOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AttestationsGetAtSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<AttestationsGetAtSubscriptionOutput>;

// The operation
/**
 * Gets an existing attestation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsGetAtSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttestationsGetAtSubscriptionInput,
    outputSchema: AttestationsGetAtSubscriptionOutput,
  }));
// Input Schema
export interface AttestationsListForResourceInput {
  resourceId: string;
  $top?: number;
  $filter?: string;
}
export const AttestationsListForResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/attestations",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsListForResourceInput>;

// Output Schema
export interface AttestationsListForResourceOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const AttestationsListForResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AttestationsListForResourceOutput>;

// The operation
/**
 * Gets all attestations for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param $top - Maximum number of records to return.
 * @param $filter - OData filter expression.
 */
export const AttestationsListForResource = /*@__PURE__*/ API.make(() => ({
  inputSchema: AttestationsListForResourceInput,
  outputSchema: AttestationsListForResourceOutput,
}));
// Input Schema
export interface AttestationsListForResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $filter?: string;
}
export const AttestationsListForResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/attestations",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsListForResourceGroupInput>;

// Output Schema
export interface AttestationsListForResourceGroupOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const AttestationsListForResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AttestationsListForResourceGroupOutput>;

// The operation
/**
 * Gets all attestations for the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - Maximum number of records to return.
 * @param $filter - OData filter expression.
 */
export const AttestationsListForResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttestationsListForResourceGroupInput,
    outputSchema: AttestationsListForResourceGroupOutput,
  }));
// Input Schema
export interface AttestationsListForSubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $filter?: string;
}
export const AttestationsListForSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/attestations",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<AttestationsListForSubscriptionInput>;

// Output Schema
export interface AttestationsListForSubscriptionOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const AttestationsListForSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AttestationsListForSubscriptionOutput>;

// The operation
/**
 * Gets all attestations for the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $top - Maximum number of records to return.
 * @param $filter - OData filter expression.
 */
export const AttestationsListForSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttestationsListForSubscriptionInput,
    outputSchema: AttestationsListForSubscriptionOutput,
  }));
// Input Schema
export interface ComponentPolicyStatesListQueryResultsForPolicyDefinitionInput {
  subscriptionId: string;
  authorizationNamespace: "Microsoft.Authorization";
  policyDefinitionName: string;
  componentPolicyStatesResource: "latest";
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
}
export const ComponentPolicyStatesListQueryResultsForPolicyDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyDefinitionName: Schema.String.pipe(T.PathParam()),
    componentPolicyStatesResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyDefinitions/{policyDefinitionName}/providers/Microsoft.PolicyInsights/componentPolicyStates/{componentPolicyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForPolicyDefinitionInput>;

// Output Schema
export interface ComponentPolicyStatesListQueryResultsForPolicyDefinitionOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    componentId?: string;
    componentType?: string;
    componentName?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      reason?: string;
    };
    policyDefinitionGroupNames?: string[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const ComponentPolicyStatesListQueryResultsForPolicyDefinitionOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          componentId: Schema.optional(Schema.String),
          componentType: Schema.optional(Schema.String),
          componentName: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              reason: Schema.optional(Schema.String),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForPolicyDefinitionOutput>;

// The operation
/**
 * Queries component policy states for the subscription level policy definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyDefinitionName - Policy definition name.
 * @param componentPolicyStatesResource - The virtual resource under ComponentPolicyStates resource type. In a given time range, 'latest' represents the latest component policy state(s).
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 */
export const ComponentPolicyStatesListQueryResultsForPolicyDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ComponentPolicyStatesListQueryResultsForPolicyDefinitionInput,
    outputSchema:
      ComponentPolicyStatesListQueryResultsForPolicyDefinitionOutput,
  }));
// Input Schema
export interface ComponentPolicyStatesListQueryResultsForResourceInput {
  resourceId: string;
  componentPolicyStatesResource: "latest";
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $expand?: string;
}
export const ComponentPolicyStatesListQueryResultsForResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    componentPolicyStatesResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/componentPolicyStates/{componentPolicyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForResourceInput>;

// Output Schema
export interface ComponentPolicyStatesListQueryResultsForResourceOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    componentId?: string;
    componentType?: string;
    componentName?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      reason?: string;
    };
    policyDefinitionGroupNames?: string[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const ComponentPolicyStatesListQueryResultsForResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          componentId: Schema.optional(Schema.String),
          componentType: Schema.optional(Schema.String),
          componentName: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              reason: Schema.optional(Schema.String),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForResourceOutput>;

// The operation
/**
 * Queries component policy states for the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param componentPolicyStatesResource - The virtual resource under ComponentPolicyStates resource type. In a given time range, 'latest' represents the latest component policy state(s).
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $expand - The $expand query parameter.
 */
export const ComponentPolicyStatesListQueryResultsForResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ComponentPolicyStatesListQueryResultsForResourceInput,
    outputSchema: ComponentPolicyStatesListQueryResultsForResourceOutput,
  }));
// Input Schema
export interface ComponentPolicyStatesListQueryResultsForResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  componentPolicyStatesResource: "latest";
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
}
export const ComponentPolicyStatesListQueryResultsForResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    componentPolicyStatesResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/componentPolicyStates/{componentPolicyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForResourceGroupInput>;

// Output Schema
export interface ComponentPolicyStatesListQueryResultsForResourceGroupOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    componentId?: string;
    componentType?: string;
    componentName?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      reason?: string;
    };
    policyDefinitionGroupNames?: string[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const ComponentPolicyStatesListQueryResultsForResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          componentId: Schema.optional(Schema.String),
          componentType: Schema.optional(Schema.String),
          componentName: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              reason: Schema.optional(Schema.String),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForResourceGroupOutput>;

// The operation
/**
 * Queries component policy states under resource group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param componentPolicyStatesResource - The virtual resource under ComponentPolicyStates resource type. In a given time range, 'latest' represents the latest component policy state(s).
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 */
export const ComponentPolicyStatesListQueryResultsForResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ComponentPolicyStatesListQueryResultsForResourceGroupInput,
    outputSchema: ComponentPolicyStatesListQueryResultsForResourceGroupOutput,
  }));
// Input Schema
export interface ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  authorizationNamespace: "Microsoft.Authorization";
  policyAssignmentName: string;
  componentPolicyStatesResource: "latest";
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
}
export const ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyAssignmentName: Schema.String.pipe(T.PathParam()),
    componentPolicyStatesResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/componentPolicyStates/{componentPolicyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput>;

// Output Schema
export interface ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    componentId?: string;
    componentType?: string;
    componentName?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      reason?: string;
    };
    policyDefinitionGroupNames?: string[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          componentId: Schema.optional(Schema.String),
          componentType: Schema.optional(Schema.String),
          componentName: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              reason: Schema.optional(Schema.String),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput>;

// The operation
/**
 * Queries component policy states for the resource group level policy assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - Resource group name.
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyAssignmentName - Policy assignment name.
 * @param componentPolicyStatesResource - The virtual resource under ComponentPolicyStates resource type. In a given time range, 'latest' represents the latest component policy state(s).
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 */
export const ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput,
    outputSchema:
      ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput,
  }));
// Input Schema
export interface ComponentPolicyStatesListQueryResultsForSubscriptionInput {
  subscriptionId: string;
  componentPolicyStatesResource: "latest";
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
}
export const ComponentPolicyStatesListQueryResultsForSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    componentPolicyStatesResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/componentPolicyStates/{componentPolicyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForSubscriptionInput>;

// Output Schema
export interface ComponentPolicyStatesListQueryResultsForSubscriptionOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    componentId?: string;
    componentType?: string;
    componentName?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      reason?: string;
    };
    policyDefinitionGroupNames?: string[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const ComponentPolicyStatesListQueryResultsForSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          componentId: Schema.optional(Schema.String),
          componentType: Schema.optional(Schema.String),
          componentName: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              reason: Schema.optional(Schema.String),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForSubscriptionOutput>;

// The operation
/**
 * Queries component policy states under subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param componentPolicyStatesResource - The virtual resource under ComponentPolicyStates resource type. In a given time range, 'latest' represents the latest component policy state(s).
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 */
export const ComponentPolicyStatesListQueryResultsForSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ComponentPolicyStatesListQueryResultsForSubscriptionInput,
    outputSchema: ComponentPolicyStatesListQueryResultsForSubscriptionOutput,
  }));
// Input Schema
export interface ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput {
  subscriptionId: string;
  authorizationNamespace: "Microsoft.Authorization";
  policyAssignmentName: string;
  componentPolicyStatesResource: "latest";
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
}
export const ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyAssignmentName: Schema.String.pipe(T.PathParam()),
    componentPolicyStatesResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/componentPolicyStates/{componentPolicyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput>;

// Output Schema
export interface ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    componentId?: string;
    componentType?: string;
    componentName?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      reason?: string;
    };
    policyDefinitionGroupNames?: string[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          componentId: Schema.optional(Schema.String),
          componentType: Schema.optional(Schema.String),
          componentName: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              reason: Schema.optional(Schema.String),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput>;

// The operation
/**
 * Queries component policy states for the subscription level policy assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyAssignmentName - Policy assignment name.
 * @param componentPolicyStatesResource - The virtual resource under ComponentPolicyStates resource type. In a given time range, 'latest' represents the latest component policy state(s).
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 */
export const ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput,
    outputSchema:
      ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.PolicyInsights/operations",
    apiVersion: "2024-10-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  "@odata.count"?: number;
  value?: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  "@odata.count": Schema.optional(Schema.Number),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.Boolean),
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
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists available operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PolicyEventsListQueryResultsForManagementGroupInput {
  policyEventsResource: "default";
  managementGroupsNamespace: "Microsoft.Management";
  managementGroupName: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyEventsListQueryResultsForManagementGroupInput =
  /*@__PURE__*/ Schema.Struct({
    policyEventsResource: Schema.Literals(["default"]).pipe(T.PathParam()),
    managementGroupsNamespace: Schema.Literals(["Microsoft.Management"]).pipe(
      T.PathParam(),
    ),
    managementGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupName}/providers/Microsoft.PolicyInsights/policyEvents/{policyEventsResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyEventsListQueryResultsForManagementGroupInput>;

// Output Schema
export interface PolicyEventsListQueryResultsForManagementGroupOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    tenantId?: string;
    principalOid?: string;
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      tenantId?: string;
      principalOid?: string;
      policyDefinitionAction?: string;
    }[];
  }[];
}
export const PolicyEventsListQueryResultsForManagementGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          principalOid: Schema.optional(Schema.String),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                tenantId: Schema.optional(Schema.String),
                principalOid: Schema.optional(Schema.String),
                policyDefinitionAction: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyEventsListQueryResultsForManagementGroupOutput>;

// The operation
/**
 * Queries policy events for the resources under the management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param policyEventsResource - The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
 * @param managementGroupsNamespace - The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
 * @param managementGroupName - Management group name.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyEventsListQueryResultsForManagementGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForManagementGroupInput,
    outputSchema: PolicyEventsListQueryResultsForManagementGroupOutput,
  }));
// Input Schema
export interface PolicyEventsListQueryResultsForPolicyDefinitionInput {
  subscriptionId: string;
  policyEventsResource: "default";
  authorizationNamespace: "Microsoft.Authorization";
  policyDefinitionName: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyEventsListQueryResultsForPolicyDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyEventsResource: Schema.Literals(["default"]).pipe(T.PathParam()),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyDefinitionName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyDefinitions/{policyDefinitionName}/providers/Microsoft.PolicyInsights/policyEvents/{policyEventsResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyEventsListQueryResultsForPolicyDefinitionInput>;

// Output Schema
export interface PolicyEventsListQueryResultsForPolicyDefinitionOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    tenantId?: string;
    principalOid?: string;
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      tenantId?: string;
      principalOid?: string;
      policyDefinitionAction?: string;
    }[];
  }[];
}
export const PolicyEventsListQueryResultsForPolicyDefinitionOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          principalOid: Schema.optional(Schema.String),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                tenantId: Schema.optional(Schema.String),
                principalOid: Schema.optional(Schema.String),
                policyDefinitionAction: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyEventsListQueryResultsForPolicyDefinitionOutput>;

// The operation
/**
 * Queries policy events for the subscription level policy definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyEventsResource - The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyDefinitionName - Policy definition name.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyEventsListQueryResultsForPolicyDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForPolicyDefinitionInput,
    outputSchema: PolicyEventsListQueryResultsForPolicyDefinitionOutput,
  }));
// Input Schema
export interface PolicyEventsListQueryResultsForPolicySetDefinitionInput {
  subscriptionId: string;
  policyEventsResource: "default";
  authorizationNamespace: "Microsoft.Authorization";
  policySetDefinitionName: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyEventsListQueryResultsForPolicySetDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyEventsResource: Schema.Literals(["default"]).pipe(T.PathParam()),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policySetDefinitionName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policySetDefinitions/{policySetDefinitionName}/providers/Microsoft.PolicyInsights/policyEvents/{policyEventsResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyEventsListQueryResultsForPolicySetDefinitionInput>;

// Output Schema
export interface PolicyEventsListQueryResultsForPolicySetDefinitionOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    tenantId?: string;
    principalOid?: string;
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      tenantId?: string;
      principalOid?: string;
      policyDefinitionAction?: string;
    }[];
  }[];
}
export const PolicyEventsListQueryResultsForPolicySetDefinitionOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          principalOid: Schema.optional(Schema.String),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                tenantId: Schema.optional(Schema.String),
                principalOid: Schema.optional(Schema.String),
                policyDefinitionAction: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyEventsListQueryResultsForPolicySetDefinitionOutput>;

// The operation
/**
 * Queries policy events for the subscription level policy set definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyEventsResource - The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policySetDefinitionName - Policy set definition name.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyEventsListQueryResultsForPolicySetDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForPolicySetDefinitionInput,
    outputSchema: PolicyEventsListQueryResultsForPolicySetDefinitionOutput,
  }));
// Input Schema
export interface PolicyEventsListQueryResultsForResourceInput {
  policyEventsResource: "default";
  resourceId: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $expand?: string;
  $skiptoken?: string;
}
export const PolicyEventsListQueryResultsForResourceInput =
  /*@__PURE__*/ Schema.Struct({
    policyEventsResource: Schema.Literals(["default"]).pipe(T.PathParam()),
    resourceId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/policyEvents/{policyEventsResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyEventsListQueryResultsForResourceInput>;

// Output Schema
export interface PolicyEventsListQueryResultsForResourceOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    tenantId?: string;
    principalOid?: string;
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      tenantId?: string;
      principalOid?: string;
      policyDefinitionAction?: string;
    }[];
  }[];
}
export const PolicyEventsListQueryResultsForResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          principalOid: Schema.optional(Schema.String),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                tenantId: Schema.optional(Schema.String),
                principalOid: Schema.optional(Schema.String),
                policyDefinitionAction: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyEventsListQueryResultsForResourceOutput>;

// The operation
/**
 * Queries policy events for the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param policyEventsResource - The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
 * @param resourceId - Resource ID.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $expand - The $expand query parameter. For example, to expand components use $expand=components
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyEventsListQueryResultsForResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForResourceInput,
    outputSchema: PolicyEventsListQueryResultsForResourceOutput,
  }));
// Input Schema
export interface PolicyEventsListQueryResultsForResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyEventsResource: "default";
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyEventsListQueryResultsForResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyEventsResource: Schema.Literals(["default"]).pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/policyEvents/{policyEventsResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyEventsListQueryResultsForResourceGroupInput>;

// Output Schema
export interface PolicyEventsListQueryResultsForResourceGroupOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    tenantId?: string;
    principalOid?: string;
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      tenantId?: string;
      principalOid?: string;
      policyDefinitionAction?: string;
    }[];
  }[];
}
export const PolicyEventsListQueryResultsForResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          principalOid: Schema.optional(Schema.String),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                tenantId: Schema.optional(Schema.String),
                principalOid: Schema.optional(Schema.String),
                policyDefinitionAction: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyEventsListQueryResultsForResourceGroupOutput>;

// The operation
/**
 * Queries policy events for the resources under the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param policyEventsResource - The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyEventsListQueryResultsForResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForResourceGroupInput,
    outputSchema: PolicyEventsListQueryResultsForResourceGroupOutput,
  }));
// Input Schema
export interface PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyEventsResource: "default";
  authorizationNamespace: "Microsoft.Authorization";
  policyAssignmentName: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyEventsResource: Schema.Literals(["default"]).pipe(T.PathParam()),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyAssignmentName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/policyEvents/{policyEventsResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentInput>;

// Output Schema
export interface PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    tenantId?: string;
    principalOid?: string;
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      tenantId?: string;
      principalOid?: string;
      policyDefinitionAction?: string;
    }[];
  }[];
}
export const PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          principalOid: Schema.optional(Schema.String),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                tenantId: Schema.optional(Schema.String),
                principalOid: Schema.optional(Schema.String),
                policyDefinitionAction: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentOutput>;

// The operation
/**
 * Queries policy events for the resource group level policy assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - Resource group name.
 * @param policyEventsResource - The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyAssignmentName - Policy assignment name.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentInput,
    outputSchema:
      PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentOutput,
  }));
// Input Schema
export interface PolicyEventsListQueryResultsForSubscriptionInput {
  subscriptionId: string;
  policyEventsResource: "default";
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyEventsListQueryResultsForSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyEventsResource: Schema.Literals(["default"]).pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/policyEvents/{policyEventsResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyEventsListQueryResultsForSubscriptionInput>;

// Output Schema
export interface PolicyEventsListQueryResultsForSubscriptionOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    tenantId?: string;
    principalOid?: string;
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      tenantId?: string;
      principalOid?: string;
      policyDefinitionAction?: string;
    }[];
  }[];
}
export const PolicyEventsListQueryResultsForSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          principalOid: Schema.optional(Schema.String),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                tenantId: Schema.optional(Schema.String),
                principalOid: Schema.optional(Schema.String),
                policyDefinitionAction: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyEventsListQueryResultsForSubscriptionOutput>;

// The operation
/**
 * Queries policy events for the resources under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyEventsResource - The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyEventsListQueryResultsForSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForSubscriptionInput,
    outputSchema: PolicyEventsListQueryResultsForSubscriptionOutput,
  }));
// Input Schema
export interface PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentInput {
  subscriptionId: string;
  policyEventsResource: "default";
  authorizationNamespace: "Microsoft.Authorization";
  policyAssignmentName: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyEventsResource: Schema.Literals(["default"]).pipe(T.PathParam()),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyAssignmentName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/policyEvents/{policyEventsResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentInput>;

// Output Schema
export interface PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    tenantId?: string;
    principalOid?: string;
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      tenantId?: string;
      principalOid?: string;
      policyDefinitionAction?: string;
    }[];
  }[];
}
export const PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          principalOid: Schema.optional(Schema.String),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                tenantId: Schema.optional(Schema.String),
                principalOid: Schema.optional(Schema.String),
                policyDefinitionAction: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOutput>;

// The operation
/**
 * Queries policy events for the subscription level policy assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyEventsResource - The name of the virtual resource under PolicyEvents resource type; only "default" is allowed.
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyAssignmentName - Policy assignment name.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentInput,
    outputSchema:
      PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOutput,
  }));
// Input Schema
export interface PolicyMetadataGetResourceInput {
  resourceName: string;
}
export const PolicyMetadataGetResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.PolicyInsights/policyMetadata/{resourceName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyMetadataGetResourceInput>;

// Output Schema
export interface PolicyMetadataGetResourceOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PolicyMetadataGetResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<PolicyMetadataGetResourceOutput>;

// The operation
/**
 * Get policy metadata resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceName - The name of the policy metadata resource.
 */
export const PolicyMetadataGetResource = /*@__PURE__*/ API.make(() => ({
  inputSchema: PolicyMetadataGetResourceInput,
  outputSchema: PolicyMetadataGetResourceOutput,
}));
// Input Schema
export interface PolicyMetadataListInput {
  $top?: number;
}
export const PolicyMetadataListInput =
  /*@__PURE__*/ Schema.Struct({
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.PolicyInsights/policyMetadata",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyMetadataListInput>;

// Output Schema
export interface PolicyMetadataListOutput {
  value: {
    properties?: {
      metadataId?: string;
      category?: string;
      title?: string;
      owner?: string;
      additionalContentUrl?: string;
      metadata?: unknown;
    };
    id?: string;
    type?: string;
    name?: string;
  }[];
  nextLink?: string;
}
export const PolicyMetadataListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            metadataId: Schema.optional(Schema.String),
            category: Schema.optional(Schema.String),
            title: Schema.optional(Schema.String),
            owner: Schema.optional(Schema.String),
            additionalContentUrl: Schema.optional(Schema.String),
            metadata: Schema.optional(Schema.Unknown),
          }),
        ),
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PolicyMetadataListOutput>;

// The operation
/**
 * Get a list of the policy metadata resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param $top - Maximum number of records to return.
 */
export const PolicyMetadataList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PolicyMetadataListInput,
  outputSchema: PolicyMetadataListOutput,
}));
// Input Schema
export interface PolicyRestrictionsCheckAtManagementGroupScopeInput {
  managementGroupsNamespace: "Microsoft.Management";
  managementGroupId: string;
  resourceDetails?: {
    resourceContent: unknown;
    apiVersion?: string;
    scope?: string;
  };
  pendingFields?: { field: string; values?: string[] }[];
}
export const PolicyRestrictionsCheckAtManagementGroupScopeInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupsNamespace: Schema.Literals(["Microsoft.Management"]).pipe(
      T.PathParam(),
    ),
    managementGroupId: Schema.String.pipe(T.PathParam()),
    resourceDetails: Schema.optional(
      Schema.Struct({
        resourceContent: Schema.Unknown,
        apiVersion: Schema.optional(Schema.String),
        scope: Schema.optional(Schema.String),
      }),
    ),
    pendingFields: Schema.optional(
      Schema.Array(
        Schema.Struct({
          field: Schema.String,
          values: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/checkPolicyRestrictions",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyRestrictionsCheckAtManagementGroupScopeInput>;

// Output Schema
export interface PolicyRestrictionsCheckAtManagementGroupScopeOutput {
  fieldRestrictions?: {
    field?: string;
    restrictions?: {
      result?: "Required" | "Removed" | "Deny" | "Audit";
      defaultValue?: string;
      values?: string[];
      policy?: {
        policyDefinitionId?: string;
        policySetDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyAssignmentId?: string;
      };
      policyEffect?: string;
      reason?: string;
    }[];
  }[];
  contentEvaluationResult?: {
    policyEvaluations?: {
      policyInfo?: {
        policyDefinitionId?: string;
        policySetDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyAssignmentId?: string;
      };
      evaluationResult?: string;
      evaluationDetails?: {
        evaluatedExpressions?: {
          result?: string;
          expression?: string;
          expressionKind?: string;
          path?: string;
          expressionValue?: unknown;
          targetValue?: unknown;
          operator?: string;
        }[];
        ifNotExistsDetails?: { resourceId?: string; totalResources?: number };
        reason?: string;
      };
      effectDetails?: { policyEffect?: string };
    }[];
  };
}
export const PolicyRestrictionsCheckAtManagementGroupScopeOutput =
  /*@__PURE__*/ Schema.Struct({
    fieldRestrictions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          field: Schema.optional(Schema.String),
          restrictions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                result: Schema.optional(
                  Schema.Literals(["Required", "Removed", "Deny", "Audit"]),
                ),
                defaultValue: Schema.optional(Schema.String),
                values: Schema.optional(Schema.Array(Schema.String)),
                policy: Schema.optional(
                  Schema.Struct({
                    policyDefinitionId: Schema.optional(Schema.String),
                    policySetDefinitionId: Schema.optional(Schema.String),
                    policyDefinitionReferenceId: Schema.optional(Schema.String),
                    policyAssignmentId: Schema.optional(Schema.String),
                  }),
                ),
                policyEffect: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
    contentEvaluationResult: Schema.optional(
      Schema.Struct({
        policyEvaluations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              policyInfo: Schema.optional(
                Schema.Struct({
                  policyDefinitionId: Schema.optional(Schema.String),
                  policySetDefinitionId: Schema.optional(Schema.String),
                  policyDefinitionReferenceId: Schema.optional(Schema.String),
                  policyAssignmentId: Schema.optional(Schema.String),
                }),
              ),
              evaluationResult: Schema.optional(Schema.String),
              evaluationDetails: Schema.optional(
                Schema.Struct({
                  evaluatedExpressions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        result: Schema.optional(Schema.String),
                        expression: Schema.optional(Schema.String),
                        expressionKind: Schema.optional(Schema.String),
                        path: Schema.optional(Schema.String),
                        expressionValue: Schema.optional(Schema.Unknown),
                        targetValue: Schema.optional(Schema.Unknown),
                        operator: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  ifNotExistsDetails: Schema.optional(
                    Schema.Struct({
                      resourceId: Schema.optional(Schema.String),
                      totalResources: Schema.optional(Schema.Number),
                    }),
                  ),
                  reason: Schema.optional(Schema.String),
                }),
              ),
              effectDetails: Schema.optional(
                Schema.Struct({
                  policyEffect: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PolicyRestrictionsCheckAtManagementGroupScopeOutput>;

// The operation
/**
 * Checks what restrictions Azure Policy will place on resources within a management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupsNamespace - The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
 * @param managementGroupId - Management group ID.
 */
export const PolicyRestrictionsCheckAtManagementGroupScope =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyRestrictionsCheckAtManagementGroupScopeInput,
    outputSchema: PolicyRestrictionsCheckAtManagementGroupScopeOutput,
  }));
// Input Schema
export interface PolicyRestrictionsCheckAtResourceGroupScopeInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceDetails: {
    resourceContent: unknown;
    apiVersion?: string;
    scope?: string;
  };
  pendingFields?: { field: string; values?: string[] }[];
  includeAuditEffect?: boolean;
}
export const PolicyRestrictionsCheckAtResourceGroupScopeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceDetails: Schema.Struct({
      resourceContent: Schema.Unknown,
      apiVersion: Schema.optional(Schema.String),
      scope: Schema.optional(Schema.String),
    }),
    pendingFields: Schema.optional(
      Schema.Array(
        Schema.Struct({
          field: Schema.String,
          values: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    includeAuditEffect: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/checkPolicyRestrictions",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyRestrictionsCheckAtResourceGroupScopeInput>;

// Output Schema
export interface PolicyRestrictionsCheckAtResourceGroupScopeOutput {
  fieldRestrictions?: {
    field?: string;
    restrictions?: {
      result?: "Required" | "Removed" | "Deny" | "Audit";
      defaultValue?: string;
      values?: string[];
      policy?: {
        policyDefinitionId?: string;
        policySetDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyAssignmentId?: string;
      };
      policyEffect?: string;
      reason?: string;
    }[];
  }[];
  contentEvaluationResult?: {
    policyEvaluations?: {
      policyInfo?: {
        policyDefinitionId?: string;
        policySetDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyAssignmentId?: string;
      };
      evaluationResult?: string;
      evaluationDetails?: {
        evaluatedExpressions?: {
          result?: string;
          expression?: string;
          expressionKind?: string;
          path?: string;
          expressionValue?: unknown;
          targetValue?: unknown;
          operator?: string;
        }[];
        ifNotExistsDetails?: { resourceId?: string; totalResources?: number };
        reason?: string;
      };
      effectDetails?: { policyEffect?: string };
    }[];
  };
}
export const PolicyRestrictionsCheckAtResourceGroupScopeOutput =
  /*@__PURE__*/ Schema.Struct({
    fieldRestrictions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          field: Schema.optional(Schema.String),
          restrictions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                result: Schema.optional(
                  Schema.Literals(["Required", "Removed", "Deny", "Audit"]),
                ),
                defaultValue: Schema.optional(Schema.String),
                values: Schema.optional(Schema.Array(Schema.String)),
                policy: Schema.optional(
                  Schema.Struct({
                    policyDefinitionId: Schema.optional(Schema.String),
                    policySetDefinitionId: Schema.optional(Schema.String),
                    policyDefinitionReferenceId: Schema.optional(Schema.String),
                    policyAssignmentId: Schema.optional(Schema.String),
                  }),
                ),
                policyEffect: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
    contentEvaluationResult: Schema.optional(
      Schema.Struct({
        policyEvaluations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              policyInfo: Schema.optional(
                Schema.Struct({
                  policyDefinitionId: Schema.optional(Schema.String),
                  policySetDefinitionId: Schema.optional(Schema.String),
                  policyDefinitionReferenceId: Schema.optional(Schema.String),
                  policyAssignmentId: Schema.optional(Schema.String),
                }),
              ),
              evaluationResult: Schema.optional(Schema.String),
              evaluationDetails: Schema.optional(
                Schema.Struct({
                  evaluatedExpressions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        result: Schema.optional(Schema.String),
                        expression: Schema.optional(Schema.String),
                        expressionKind: Schema.optional(Schema.String),
                        path: Schema.optional(Schema.String),
                        expressionValue: Schema.optional(Schema.Unknown),
                        targetValue: Schema.optional(Schema.Unknown),
                        operator: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  ifNotExistsDetails: Schema.optional(
                    Schema.Struct({
                      resourceId: Schema.optional(Schema.String),
                      totalResources: Schema.optional(Schema.Number),
                    }),
                  ),
                  reason: Schema.optional(Schema.String),
                }),
              ),
              effectDetails: Schema.optional(
                Schema.Struct({
                  policyEffect: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PolicyRestrictionsCheckAtResourceGroupScopeOutput>;

// The operation
/**
 * Checks what restrictions Azure Policy will place on a resource within a resource group. Use this when the resource group the resource will be created in is already known.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PolicyRestrictionsCheckAtResourceGroupScope =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyRestrictionsCheckAtResourceGroupScopeInput,
    outputSchema: PolicyRestrictionsCheckAtResourceGroupScopeOutput,
  }));
// Input Schema
export interface PolicyRestrictionsCheckAtSubscriptionScopeInput {
  subscriptionId: string;
  resourceDetails: {
    resourceContent: unknown;
    apiVersion?: string;
    scope?: string;
  };
  pendingFields?: { field: string; values?: string[] }[];
  includeAuditEffect?: boolean;
}
export const PolicyRestrictionsCheckAtSubscriptionScopeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceDetails: Schema.Struct({
      resourceContent: Schema.Unknown,
      apiVersion: Schema.optional(Schema.String),
      scope: Schema.optional(Schema.String),
    }),
    pendingFields: Schema.optional(
      Schema.Array(
        Schema.Struct({
          field: Schema.String,
          values: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    includeAuditEffect: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/checkPolicyRestrictions",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyRestrictionsCheckAtSubscriptionScopeInput>;

// Output Schema
export interface PolicyRestrictionsCheckAtSubscriptionScopeOutput {
  fieldRestrictions?: {
    field?: string;
    restrictions?: {
      result?: "Required" | "Removed" | "Deny" | "Audit";
      defaultValue?: string;
      values?: string[];
      policy?: {
        policyDefinitionId?: string;
        policySetDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyAssignmentId?: string;
      };
      policyEffect?: string;
      reason?: string;
    }[];
  }[];
  contentEvaluationResult?: {
    policyEvaluations?: {
      policyInfo?: {
        policyDefinitionId?: string;
        policySetDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyAssignmentId?: string;
      };
      evaluationResult?: string;
      evaluationDetails?: {
        evaluatedExpressions?: {
          result?: string;
          expression?: string;
          expressionKind?: string;
          path?: string;
          expressionValue?: unknown;
          targetValue?: unknown;
          operator?: string;
        }[];
        ifNotExistsDetails?: { resourceId?: string; totalResources?: number };
        reason?: string;
      };
      effectDetails?: { policyEffect?: string };
    }[];
  };
}
export const PolicyRestrictionsCheckAtSubscriptionScopeOutput =
  /*@__PURE__*/ Schema.Struct({
    fieldRestrictions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          field: Schema.optional(Schema.String),
          restrictions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                result: Schema.optional(
                  Schema.Literals(["Required", "Removed", "Deny", "Audit"]),
                ),
                defaultValue: Schema.optional(Schema.String),
                values: Schema.optional(Schema.Array(Schema.String)),
                policy: Schema.optional(
                  Schema.Struct({
                    policyDefinitionId: Schema.optional(Schema.String),
                    policySetDefinitionId: Schema.optional(Schema.String),
                    policyDefinitionReferenceId: Schema.optional(Schema.String),
                    policyAssignmentId: Schema.optional(Schema.String),
                  }),
                ),
                policyEffect: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
    contentEvaluationResult: Schema.optional(
      Schema.Struct({
        policyEvaluations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              policyInfo: Schema.optional(
                Schema.Struct({
                  policyDefinitionId: Schema.optional(Schema.String),
                  policySetDefinitionId: Schema.optional(Schema.String),
                  policyDefinitionReferenceId: Schema.optional(Schema.String),
                  policyAssignmentId: Schema.optional(Schema.String),
                }),
              ),
              evaluationResult: Schema.optional(Schema.String),
              evaluationDetails: Schema.optional(
                Schema.Struct({
                  evaluatedExpressions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        result: Schema.optional(Schema.String),
                        expression: Schema.optional(Schema.String),
                        expressionKind: Schema.optional(Schema.String),
                        path: Schema.optional(Schema.String),
                        expressionValue: Schema.optional(Schema.Unknown),
                        targetValue: Schema.optional(Schema.Unknown),
                        operator: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  ifNotExistsDetails: Schema.optional(
                    Schema.Struct({
                      resourceId: Schema.optional(Schema.String),
                      totalResources: Schema.optional(Schema.Number),
                    }),
                  ),
                  reason: Schema.optional(Schema.String),
                }),
              ),
              effectDetails: Schema.optional(
                Schema.Struct({
                  policyEffect: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PolicyRestrictionsCheckAtSubscriptionScopeOutput>;

// The operation
/**
 * Checks what restrictions Azure Policy will place on a resource within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PolicyRestrictionsCheckAtSubscriptionScope =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyRestrictionsCheckAtSubscriptionScopeInput,
    outputSchema: PolicyRestrictionsCheckAtSubscriptionScopeOutput,
  }));
// Input Schema
export interface PolicyStatesListQueryResultsForManagementGroupInput {
  policyStatesResource: "default" | "latest";
  managementGroupsNamespace: "Microsoft.Management";
  managementGroupName: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyStatesListQueryResultsForManagementGroupInput =
  /*@__PURE__*/ Schema.Struct({
    policyStatesResource: Schema.Literals(["default", "latest"]).pipe(
      T.PathParam(),
    ),
    managementGroupsNamespace: Schema.Literals(["Microsoft.Management"]).pipe(
      T.PathParam(),
    ),
    managementGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesListQueryResultsForManagementGroupInput>;

// Output Schema
export interface PolicyStatesListQueryResultsForManagementGroupOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      ifNotExistsDetails?: { resourceId?: string; totalResources?: number };
    };
    policyDefinitionGroupNames?: string[];
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      complianceState?: string;
    }[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const PolicyStatesListQueryResultsForManagementGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              ifNotExistsDetails: Schema.optional(
                Schema.Struct({
                  resourceId: Schema.optional(Schema.String),
                  totalResources: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                complianceState: Schema.optional(Schema.String),
              }),
            ),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesListQueryResultsForManagementGroupOutput>;

// The operation
/**
 * Queries policy states for the resources under the management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param policyStatesResource - The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
 * @param managementGroupsNamespace - The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
 * @param managementGroupName - Management group name.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyStatesListQueryResultsForManagementGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForManagementGroupInput,
    outputSchema: PolicyStatesListQueryResultsForManagementGroupOutput,
  }));
// Input Schema
export interface PolicyStatesListQueryResultsForPolicyDefinitionInput {
  subscriptionId: string;
  policyStatesResource: "default" | "latest";
  authorizationNamespace: "Microsoft.Authorization";
  policyDefinitionName: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyStatesListQueryResultsForPolicyDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyStatesResource: Schema.Literals(["default", "latest"]).pipe(
      T.PathParam(),
    ),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyDefinitionName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyDefinitions/{policyDefinitionName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesListQueryResultsForPolicyDefinitionInput>;

// Output Schema
export interface PolicyStatesListQueryResultsForPolicyDefinitionOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      ifNotExistsDetails?: { resourceId?: string; totalResources?: number };
    };
    policyDefinitionGroupNames?: string[];
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      complianceState?: string;
    }[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const PolicyStatesListQueryResultsForPolicyDefinitionOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              ifNotExistsDetails: Schema.optional(
                Schema.Struct({
                  resourceId: Schema.optional(Schema.String),
                  totalResources: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                complianceState: Schema.optional(Schema.String),
              }),
            ),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesListQueryResultsForPolicyDefinitionOutput>;

// The operation
/**
 * Queries policy states for the subscription level policy definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyStatesResource - The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyDefinitionName - Policy definition name.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyStatesListQueryResultsForPolicyDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForPolicyDefinitionInput,
    outputSchema: PolicyStatesListQueryResultsForPolicyDefinitionOutput,
  }));
// Input Schema
export interface PolicyStatesListQueryResultsForPolicySetDefinitionInput {
  subscriptionId: string;
  policyStatesResource: "default" | "latest";
  authorizationNamespace: "Microsoft.Authorization";
  policySetDefinitionName: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyStatesListQueryResultsForPolicySetDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyStatesResource: Schema.Literals(["default", "latest"]).pipe(
      T.PathParam(),
    ),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policySetDefinitionName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policySetDefinitions/{policySetDefinitionName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesListQueryResultsForPolicySetDefinitionInput>;

// Output Schema
export interface PolicyStatesListQueryResultsForPolicySetDefinitionOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      ifNotExistsDetails?: { resourceId?: string; totalResources?: number };
    };
    policyDefinitionGroupNames?: string[];
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      complianceState?: string;
    }[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const PolicyStatesListQueryResultsForPolicySetDefinitionOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              ifNotExistsDetails: Schema.optional(
                Schema.Struct({
                  resourceId: Schema.optional(Schema.String),
                  totalResources: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                complianceState: Schema.optional(Schema.String),
              }),
            ),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesListQueryResultsForPolicySetDefinitionOutput>;

// The operation
/**
 * Queries policy states for the subscription level policy set definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyStatesResource - The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policySetDefinitionName - Policy set definition name.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyStatesListQueryResultsForPolicySetDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForPolicySetDefinitionInput,
    outputSchema: PolicyStatesListQueryResultsForPolicySetDefinitionOutput,
  }));
// Input Schema
export interface PolicyStatesListQueryResultsForResourceInput {
  policyStatesResource: "default" | "latest";
  resourceId: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $expand?: string;
  $skiptoken?: string;
}
export const PolicyStatesListQueryResultsForResourceInput =
  /*@__PURE__*/ Schema.Struct({
    policyStatesResource: Schema.Literals(["default", "latest"]).pipe(
      T.PathParam(),
    ),
    resourceId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesListQueryResultsForResourceInput>;

// Output Schema
export interface PolicyStatesListQueryResultsForResourceOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      ifNotExistsDetails?: { resourceId?: string; totalResources?: number };
    };
    policyDefinitionGroupNames?: string[];
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      complianceState?: string;
    }[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const PolicyStatesListQueryResultsForResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              ifNotExistsDetails: Schema.optional(
                Schema.Struct({
                  resourceId: Schema.optional(Schema.String),
                  totalResources: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                complianceState: Schema.optional(Schema.String),
              }),
            ),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesListQueryResultsForResourceOutput>;

// The operation
/**
 * Queries policy states for the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param policyStatesResource - The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
 * @param resourceId - Resource ID.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $expand - The $expand query parameter. For example, to expand components use $expand=components
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyStatesListQueryResultsForResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForResourceInput,
    outputSchema: PolicyStatesListQueryResultsForResourceOutput,
  }));
// Input Schema
export interface PolicyStatesListQueryResultsForResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyStatesResource: "default" | "latest";
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyStatesListQueryResultsForResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyStatesResource: Schema.Literals(["default", "latest"]).pipe(
      T.PathParam(),
    ),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesListQueryResultsForResourceGroupInput>;

// Output Schema
export interface PolicyStatesListQueryResultsForResourceGroupOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      ifNotExistsDetails?: { resourceId?: string; totalResources?: number };
    };
    policyDefinitionGroupNames?: string[];
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      complianceState?: string;
    }[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const PolicyStatesListQueryResultsForResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              ifNotExistsDetails: Schema.optional(
                Schema.Struct({
                  resourceId: Schema.optional(Schema.String),
                  totalResources: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                complianceState: Schema.optional(Schema.String),
              }),
            ),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesListQueryResultsForResourceGroupOutput>;

// The operation
/**
 * Queries policy states for the resources under the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param policyStatesResource - The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyStatesListQueryResultsForResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForResourceGroupInput,
    outputSchema: PolicyStatesListQueryResultsForResourceGroupOutput,
  }));
// Input Schema
export interface PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyStatesResource: "default" | "latest";
  authorizationNamespace: "Microsoft.Authorization";
  policyAssignmentName: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyStatesResource: Schema.Literals(["default", "latest"]).pipe(
      T.PathParam(),
    ),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyAssignmentName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput>;

// Output Schema
export interface PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      ifNotExistsDetails?: { resourceId?: string; totalResources?: number };
    };
    policyDefinitionGroupNames?: string[];
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      complianceState?: string;
    }[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              ifNotExistsDetails: Schema.optional(
                Schema.Struct({
                  resourceId: Schema.optional(Schema.String),
                  totalResources: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                complianceState: Schema.optional(Schema.String),
              }),
            ),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput>;

// The operation
/**
 * Queries policy states for the resource group level policy assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - Resource group name.
 * @param policyStatesResource - The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyAssignmentName - Policy assignment name.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput,
    outputSchema:
      PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput,
  }));
// Input Schema
export interface PolicyStatesListQueryResultsForSubscriptionInput {
  subscriptionId: string;
  policyStatesResource: "default" | "latest";
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyStatesListQueryResultsForSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyStatesResource: Schema.Literals(["default", "latest"]).pipe(
      T.PathParam(),
    ),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesListQueryResultsForSubscriptionInput>;

// Output Schema
export interface PolicyStatesListQueryResultsForSubscriptionOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      ifNotExistsDetails?: { resourceId?: string; totalResources?: number };
    };
    policyDefinitionGroupNames?: string[];
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      complianceState?: string;
    }[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const PolicyStatesListQueryResultsForSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              ifNotExistsDetails: Schema.optional(
                Schema.Struct({
                  resourceId: Schema.optional(Schema.String),
                  totalResources: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                complianceState: Schema.optional(Schema.String),
              }),
            ),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesListQueryResultsForSubscriptionOutput>;

// The operation
/**
 * Queries policy states for the resources under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyStatesResource - The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyStatesListQueryResultsForSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForSubscriptionInput,
    outputSchema: PolicyStatesListQueryResultsForSubscriptionOutput,
  }));
// Input Schema
export interface PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput {
  subscriptionId: string;
  policyStatesResource: "default" | "latest";
  authorizationNamespace: "Microsoft.Authorization";
  policyAssignmentName: string;
  $top?: number;
  $orderby?: string;
  $select?: string;
  $from?: string;
  $to?: string;
  $filter?: string;
  $apply?: string;
  $skiptoken?: string;
}
export const PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyStatesResource: Schema.Literals(["default", "latest"]).pipe(
      T.PathParam(),
    ),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyAssignmentName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
    $select: Schema.optional(Schema.String),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $apply: Schema.optional(Schema.String),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesResource}/queryResults",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput>;

// Output Schema
export interface PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  "@odata.nextLink"?: string;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    timestamp?: string;
    resourceId?: string;
    policyAssignmentId?: string;
    policyDefinitionId?: string;
    effectiveParameters?: string;
    isCompliant?: boolean;
    subscriptionId?: string;
    resourceType?: string;
    resourceLocation?: string;
    resourceGroup?: string;
    resourceTags?: string;
    policyAssignmentName?: string;
    policyAssignmentOwner?: string;
    policyAssignmentParameters?: string;
    policyAssignmentScope?: string;
    policyDefinitionName?: string;
    policyDefinitionAction?: string;
    policyDefinitionCategory?: string;
    policySetDefinitionId?: string;
    policySetDefinitionName?: string;
    policySetDefinitionOwner?: string;
    policySetDefinitionCategory?: string;
    policySetDefinitionParameters?: string;
    managementGroupIds?: string;
    policyDefinitionReferenceId?: string;
    complianceState?: string;
    policyEvaluationDetails?: {
      evaluatedExpressions?: {
        result?: string;
        expression?: string;
        expressionKind?: string;
        path?: string;
        expressionValue?: unknown;
        targetValue?: unknown;
        operator?: string;
      }[];
      ifNotExistsDetails?: { resourceId?: string; totalResources?: number };
    };
    policyDefinitionGroupNames?: string[];
    components?: {
      id?: string;
      type?: string;
      name?: string;
      timestamp?: string;
      complianceState?: string;
    }[];
    policyDefinitionVersion?: string;
    policySetDefinitionVersion?: string;
    policyAssignmentVersion?: string;
  }[];
}
export const PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    "@odata.nextLink": Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          timestamp: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          policyAssignmentId: Schema.optional(Schema.String),
          policyDefinitionId: Schema.optional(Schema.String),
          effectiveParameters: Schema.optional(Schema.String),
          isCompliant: Schema.optional(Schema.Boolean),
          subscriptionId: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          resourceLocation: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          resourceTags: Schema.optional(Schema.String),
          policyAssignmentName: Schema.optional(Schema.String),
          policyAssignmentOwner: Schema.optional(Schema.String),
          policyAssignmentParameters: Schema.optional(Schema.String),
          policyAssignmentScope: Schema.optional(Schema.String),
          policyDefinitionName: Schema.optional(Schema.String),
          policyDefinitionAction: Schema.optional(Schema.String),
          policyDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionId: Schema.optional(Schema.String),
          policySetDefinitionName: Schema.optional(Schema.String),
          policySetDefinitionOwner: Schema.optional(Schema.String),
          policySetDefinitionCategory: Schema.optional(Schema.String),
          policySetDefinitionParameters: Schema.optional(Schema.String),
          managementGroupIds: Schema.optional(Schema.String),
          policyDefinitionReferenceId: Schema.optional(Schema.String),
          complianceState: Schema.optional(Schema.String),
          policyEvaluationDetails: Schema.optional(
            Schema.Struct({
              evaluatedExpressions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    result: Schema.optional(Schema.String),
                    expression: Schema.optional(Schema.String),
                    expressionKind: Schema.optional(Schema.String),
                    path: Schema.optional(Schema.String),
                    expressionValue: Schema.optional(Schema.Unknown),
                    targetValue: Schema.optional(Schema.Unknown),
                    operator: Schema.optional(Schema.String),
                  }),
                ),
              ),
              ifNotExistsDetails: Schema.optional(
                Schema.Struct({
                  resourceId: Schema.optional(Schema.String),
                  totalResources: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
          policyDefinitionGroupNames: Schema.optional(
            Schema.Array(Schema.String),
          ),
          components: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                timestamp: Schema.optional(Schema.String),
                complianceState: Schema.optional(Schema.String),
              }),
            ),
          ),
          policyDefinitionVersion: Schema.optional(Schema.String),
          policySetDefinitionVersion: Schema.optional(Schema.String),
          policyAssignmentVersion: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput>;

// The operation
/**
 * Queries policy states for the subscription level policy assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyStatesResource - The virtual resource under PolicyStates resource type. In a given time range, 'latest' represents the latest policy state(s), whereas 'default' represents all policy state(s).
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyAssignmentName - Policy assignment name.
 * @param $top - Maximum number of records to return.
 * @param $orderby - Ordering expression using OData notation. One or more comma-separated column names with an optional "desc" (the default) or "asc", e.g. "$orderby=PolicyAssignmentId, ResourceId asc".
 * @param $select - Select expression using OData notation. Limits the columns on each record to just those requested, e.g. "$select=PolicyAssignmentId, ResourceId".
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 * @param $apply - OData apply expression for aggregations.
 * @param $skiptoken - Skiptoken is only provided if a previous response returned a partial result as a part of nextLink element.
 */
export const PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput,
    outputSchema:
      PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput,
  }));
// Input Schema
export interface PolicyStatesSummarizeForManagementGroupInput {
  policyStatesSummaryResource: "latest";
  managementGroupsNamespace: "Microsoft.Management";
  managementGroupName: string;
  $top?: number;
  $from?: string;
  $to?: string;
  $filter?: string;
}
export const PolicyStatesSummarizeForManagementGroupInput =
  /*@__PURE__*/ Schema.Struct({
    policyStatesSummaryResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    managementGroupsNamespace: Schema.Literals(["Microsoft.Management"]).pipe(
      T.PathParam(),
    ),
    managementGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesSummarizeForManagementGroupInput>;

// Output Schema
export interface PolicyStatesSummarizeForManagementGroupOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    results?: {
      queryResultsUri?: string;
      nonCompliantResources?: number;
      nonCompliantPolicies?: number;
      resourceDetails?: { complianceState?: string; count?: number }[];
      policyDetails?: { complianceState?: string; count?: number }[];
      policyGroupDetails?: { complianceState?: string; count?: number }[];
    };
    policyAssignments?: {
      policyAssignmentId?: string;
      policySetDefinitionId?: string;
      results?: {
        queryResultsUri?: string;
        nonCompliantResources?: number;
        nonCompliantPolicies?: number;
        resourceDetails?: { complianceState?: string; count?: number }[];
        policyDetails?: { complianceState?: string; count?: number }[];
        policyGroupDetails?: { complianceState?: string; count?: number }[];
      };
      policyDefinitions?: {
        policyDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyDefinitionGroupNames?: string[];
        effect?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
      policyGroups?: {
        policyGroupName?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
    }[];
  }[];
}
export const PolicyStatesSummarizeForManagementGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          results: Schema.optional(
            Schema.Struct({
              queryResultsUri: Schema.optional(Schema.String),
              nonCompliantResources: Schema.optional(Schema.Number),
              nonCompliantPolicies: Schema.optional(Schema.Number),
              resourceDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyGroupDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
          policyAssignments: Schema.optional(
            Schema.Array(
              Schema.Struct({
                policyAssignmentId: Schema.optional(Schema.String),
                policySetDefinitionId: Schema.optional(Schema.String),
                results: Schema.optional(
                  Schema.Struct({
                    queryResultsUri: Schema.optional(Schema.String),
                    nonCompliantResources: Schema.optional(Schema.Number),
                    nonCompliantPolicies: Schema.optional(Schema.Number),
                    resourceDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyGroupDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                  }),
                ),
                policyDefinitions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyDefinitionId: Schema.optional(Schema.String),
                      policyDefinitionReferenceId: Schema.optional(
                        Schema.String,
                      ),
                      policyDefinitionGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      effect: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                policyGroups: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyGroupName: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesSummarizeForManagementGroupOutput>;

// The operation
/**
 * Summarizes policy states for the resources under the management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param policyStatesSummaryResource - The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
 * @param managementGroupsNamespace - The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
 * @param managementGroupName - Management group name.
 * @param $top - Maximum number of records to return.
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 */
export const PolicyStatesSummarizeForManagementGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForManagementGroupInput,
    outputSchema: PolicyStatesSummarizeForManagementGroupOutput,
  }));
// Input Schema
export interface PolicyStatesSummarizeForPolicyDefinitionInput {
  subscriptionId: string;
  policyStatesSummaryResource: "latest";
  authorizationNamespace: "Microsoft.Authorization";
  policyDefinitionName: string;
  $top?: number;
  $from?: string;
  $to?: string;
  $filter?: string;
}
export const PolicyStatesSummarizeForPolicyDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyStatesSummaryResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyDefinitionName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyDefinitions/{policyDefinitionName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesSummarizeForPolicyDefinitionInput>;

// Output Schema
export interface PolicyStatesSummarizeForPolicyDefinitionOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    results?: {
      queryResultsUri?: string;
      nonCompliantResources?: number;
      nonCompliantPolicies?: number;
      resourceDetails?: { complianceState?: string; count?: number }[];
      policyDetails?: { complianceState?: string; count?: number }[];
      policyGroupDetails?: { complianceState?: string; count?: number }[];
    };
    policyAssignments?: {
      policyAssignmentId?: string;
      policySetDefinitionId?: string;
      results?: {
        queryResultsUri?: string;
        nonCompliantResources?: number;
        nonCompliantPolicies?: number;
        resourceDetails?: { complianceState?: string; count?: number }[];
        policyDetails?: { complianceState?: string; count?: number }[];
        policyGroupDetails?: { complianceState?: string; count?: number }[];
      };
      policyDefinitions?: {
        policyDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyDefinitionGroupNames?: string[];
        effect?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
      policyGroups?: {
        policyGroupName?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
    }[];
  }[];
}
export const PolicyStatesSummarizeForPolicyDefinitionOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          results: Schema.optional(
            Schema.Struct({
              queryResultsUri: Schema.optional(Schema.String),
              nonCompliantResources: Schema.optional(Schema.Number),
              nonCompliantPolicies: Schema.optional(Schema.Number),
              resourceDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyGroupDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
          policyAssignments: Schema.optional(
            Schema.Array(
              Schema.Struct({
                policyAssignmentId: Schema.optional(Schema.String),
                policySetDefinitionId: Schema.optional(Schema.String),
                results: Schema.optional(
                  Schema.Struct({
                    queryResultsUri: Schema.optional(Schema.String),
                    nonCompliantResources: Schema.optional(Schema.Number),
                    nonCompliantPolicies: Schema.optional(Schema.Number),
                    resourceDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyGroupDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                  }),
                ),
                policyDefinitions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyDefinitionId: Schema.optional(Schema.String),
                      policyDefinitionReferenceId: Schema.optional(
                        Schema.String,
                      ),
                      policyDefinitionGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      effect: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                policyGroups: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyGroupName: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesSummarizeForPolicyDefinitionOutput>;

// The operation
/**
 * Summarizes policy states for the subscription level policy definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyStatesSummaryResource - The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyDefinitionName - Policy definition name.
 * @param $top - Maximum number of records to return.
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 */
export const PolicyStatesSummarizeForPolicyDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForPolicyDefinitionInput,
    outputSchema: PolicyStatesSummarizeForPolicyDefinitionOutput,
  }));
// Input Schema
export interface PolicyStatesSummarizeForPolicySetDefinitionInput {
  subscriptionId: string;
  policyStatesSummaryResource: "latest";
  authorizationNamespace: "Microsoft.Authorization";
  policySetDefinitionName: string;
  $top?: number;
  $from?: string;
  $to?: string;
  $filter?: string;
}
export const PolicyStatesSummarizeForPolicySetDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyStatesSummaryResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policySetDefinitionName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policySetDefinitions/{policySetDefinitionName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesSummarizeForPolicySetDefinitionInput>;

// Output Schema
export interface PolicyStatesSummarizeForPolicySetDefinitionOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    results?: {
      queryResultsUri?: string;
      nonCompliantResources?: number;
      nonCompliantPolicies?: number;
      resourceDetails?: { complianceState?: string; count?: number }[];
      policyDetails?: { complianceState?: string; count?: number }[];
      policyGroupDetails?: { complianceState?: string; count?: number }[];
    };
    policyAssignments?: {
      policyAssignmentId?: string;
      policySetDefinitionId?: string;
      results?: {
        queryResultsUri?: string;
        nonCompliantResources?: number;
        nonCompliantPolicies?: number;
        resourceDetails?: { complianceState?: string; count?: number }[];
        policyDetails?: { complianceState?: string; count?: number }[];
        policyGroupDetails?: { complianceState?: string; count?: number }[];
      };
      policyDefinitions?: {
        policyDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyDefinitionGroupNames?: string[];
        effect?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
      policyGroups?: {
        policyGroupName?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
    }[];
  }[];
}
export const PolicyStatesSummarizeForPolicySetDefinitionOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          results: Schema.optional(
            Schema.Struct({
              queryResultsUri: Schema.optional(Schema.String),
              nonCompliantResources: Schema.optional(Schema.Number),
              nonCompliantPolicies: Schema.optional(Schema.Number),
              resourceDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyGroupDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
          policyAssignments: Schema.optional(
            Schema.Array(
              Schema.Struct({
                policyAssignmentId: Schema.optional(Schema.String),
                policySetDefinitionId: Schema.optional(Schema.String),
                results: Schema.optional(
                  Schema.Struct({
                    queryResultsUri: Schema.optional(Schema.String),
                    nonCompliantResources: Schema.optional(Schema.Number),
                    nonCompliantPolicies: Schema.optional(Schema.Number),
                    resourceDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyGroupDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                  }),
                ),
                policyDefinitions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyDefinitionId: Schema.optional(Schema.String),
                      policyDefinitionReferenceId: Schema.optional(
                        Schema.String,
                      ),
                      policyDefinitionGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      effect: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                policyGroups: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyGroupName: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesSummarizeForPolicySetDefinitionOutput>;

// The operation
/**
 * Summarizes policy states for the subscription level policy set definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyStatesSummaryResource - The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policySetDefinitionName - Policy set definition name.
 * @param $top - Maximum number of records to return.
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 */
export const PolicyStatesSummarizeForPolicySetDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForPolicySetDefinitionInput,
    outputSchema: PolicyStatesSummarizeForPolicySetDefinitionOutput,
  }));
// Input Schema
export interface PolicyStatesSummarizeForResourceInput {
  policyStatesSummaryResource: "latest";
  resourceId: string;
  $top?: number;
  $from?: string;
  $to?: string;
  $filter?: string;
}
export const PolicyStatesSummarizeForResourceInput =
  /*@__PURE__*/ Schema.Struct({
    policyStatesSummaryResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    resourceId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesSummarizeForResourceInput>;

// Output Schema
export interface PolicyStatesSummarizeForResourceOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    results?: {
      queryResultsUri?: string;
      nonCompliantResources?: number;
      nonCompliantPolicies?: number;
      resourceDetails?: { complianceState?: string; count?: number }[];
      policyDetails?: { complianceState?: string; count?: number }[];
      policyGroupDetails?: { complianceState?: string; count?: number }[];
    };
    policyAssignments?: {
      policyAssignmentId?: string;
      policySetDefinitionId?: string;
      results?: {
        queryResultsUri?: string;
        nonCompliantResources?: number;
        nonCompliantPolicies?: number;
        resourceDetails?: { complianceState?: string; count?: number }[];
        policyDetails?: { complianceState?: string; count?: number }[];
        policyGroupDetails?: { complianceState?: string; count?: number }[];
      };
      policyDefinitions?: {
        policyDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyDefinitionGroupNames?: string[];
        effect?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
      policyGroups?: {
        policyGroupName?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
    }[];
  }[];
}
export const PolicyStatesSummarizeForResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          results: Schema.optional(
            Schema.Struct({
              queryResultsUri: Schema.optional(Schema.String),
              nonCompliantResources: Schema.optional(Schema.Number),
              nonCompliantPolicies: Schema.optional(Schema.Number),
              resourceDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyGroupDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
          policyAssignments: Schema.optional(
            Schema.Array(
              Schema.Struct({
                policyAssignmentId: Schema.optional(Schema.String),
                policySetDefinitionId: Schema.optional(Schema.String),
                results: Schema.optional(
                  Schema.Struct({
                    queryResultsUri: Schema.optional(Schema.String),
                    nonCompliantResources: Schema.optional(Schema.Number),
                    nonCompliantPolicies: Schema.optional(Schema.Number),
                    resourceDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyGroupDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                  }),
                ),
                policyDefinitions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyDefinitionId: Schema.optional(Schema.String),
                      policyDefinitionReferenceId: Schema.optional(
                        Schema.String,
                      ),
                      policyDefinitionGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      effect: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                policyGroups: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyGroupName: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesSummarizeForResourceOutput>;

// The operation
/**
 * Summarizes policy states for the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param policyStatesSummaryResource - The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
 * @param resourceId - Resource ID.
 * @param $top - Maximum number of records to return.
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 */
export const PolicyStatesSummarizeForResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForResourceInput,
    outputSchema: PolicyStatesSummarizeForResourceOutput,
  }));
// Input Schema
export interface PolicyStatesSummarizeForResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyStatesSummaryResource: "latest";
  $top?: number;
  $from?: string;
  $to?: string;
  $filter?: string;
}
export const PolicyStatesSummarizeForResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyStatesSummaryResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    $top: Schema.optional(Schema.Number),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesSummarizeForResourceGroupInput>;

// Output Schema
export interface PolicyStatesSummarizeForResourceGroupOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    results?: {
      queryResultsUri?: string;
      nonCompliantResources?: number;
      nonCompliantPolicies?: number;
      resourceDetails?: { complianceState?: string; count?: number }[];
      policyDetails?: { complianceState?: string; count?: number }[];
      policyGroupDetails?: { complianceState?: string; count?: number }[];
    };
    policyAssignments?: {
      policyAssignmentId?: string;
      policySetDefinitionId?: string;
      results?: {
        queryResultsUri?: string;
        nonCompliantResources?: number;
        nonCompliantPolicies?: number;
        resourceDetails?: { complianceState?: string; count?: number }[];
        policyDetails?: { complianceState?: string; count?: number }[];
        policyGroupDetails?: { complianceState?: string; count?: number }[];
      };
      policyDefinitions?: {
        policyDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyDefinitionGroupNames?: string[];
        effect?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
      policyGroups?: {
        policyGroupName?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
    }[];
  }[];
}
export const PolicyStatesSummarizeForResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          results: Schema.optional(
            Schema.Struct({
              queryResultsUri: Schema.optional(Schema.String),
              nonCompliantResources: Schema.optional(Schema.Number),
              nonCompliantPolicies: Schema.optional(Schema.Number),
              resourceDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyGroupDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
          policyAssignments: Schema.optional(
            Schema.Array(
              Schema.Struct({
                policyAssignmentId: Schema.optional(Schema.String),
                policySetDefinitionId: Schema.optional(Schema.String),
                results: Schema.optional(
                  Schema.Struct({
                    queryResultsUri: Schema.optional(Schema.String),
                    nonCompliantResources: Schema.optional(Schema.Number),
                    nonCompliantPolicies: Schema.optional(Schema.Number),
                    resourceDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyGroupDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                  }),
                ),
                policyDefinitions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyDefinitionId: Schema.optional(Schema.String),
                      policyDefinitionReferenceId: Schema.optional(
                        Schema.String,
                      ),
                      policyDefinitionGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      effect: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                policyGroups: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyGroupName: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesSummarizeForResourceGroupOutput>;

// The operation
/**
 * Summarizes policy states for the resources under the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param policyStatesSummaryResource - The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
 * @param $top - Maximum number of records to return.
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 */
export const PolicyStatesSummarizeForResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForResourceGroupInput,
    outputSchema: PolicyStatesSummarizeForResourceGroupOutput,
  }));
// Input Schema
export interface PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyStatesSummaryResource: "latest";
  authorizationNamespace: "Microsoft.Authorization";
  policyAssignmentName: string;
  $top?: number;
  $from?: string;
  $to?: string;
  $filter?: string;
}
export const PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyStatesSummaryResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyAssignmentName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentInput>;

// Output Schema
export interface PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    results?: {
      queryResultsUri?: string;
      nonCompliantResources?: number;
      nonCompliantPolicies?: number;
      resourceDetails?: { complianceState?: string; count?: number }[];
      policyDetails?: { complianceState?: string; count?: number }[];
      policyGroupDetails?: { complianceState?: string; count?: number }[];
    };
    policyAssignments?: {
      policyAssignmentId?: string;
      policySetDefinitionId?: string;
      results?: {
        queryResultsUri?: string;
        nonCompliantResources?: number;
        nonCompliantPolicies?: number;
        resourceDetails?: { complianceState?: string; count?: number }[];
        policyDetails?: { complianceState?: string; count?: number }[];
        policyGroupDetails?: { complianceState?: string; count?: number }[];
      };
      policyDefinitions?: {
        policyDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyDefinitionGroupNames?: string[];
        effect?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
      policyGroups?: {
        policyGroupName?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
    }[];
  }[];
}
export const PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          results: Schema.optional(
            Schema.Struct({
              queryResultsUri: Schema.optional(Schema.String),
              nonCompliantResources: Schema.optional(Schema.Number),
              nonCompliantPolicies: Schema.optional(Schema.Number),
              resourceDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyGroupDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
          policyAssignments: Schema.optional(
            Schema.Array(
              Schema.Struct({
                policyAssignmentId: Schema.optional(Schema.String),
                policySetDefinitionId: Schema.optional(Schema.String),
                results: Schema.optional(
                  Schema.Struct({
                    queryResultsUri: Schema.optional(Schema.String),
                    nonCompliantResources: Schema.optional(Schema.Number),
                    nonCompliantPolicies: Schema.optional(Schema.Number),
                    resourceDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyGroupDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                  }),
                ),
                policyDefinitions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyDefinitionId: Schema.optional(Schema.String),
                      policyDefinitionReferenceId: Schema.optional(
                        Schema.String,
                      ),
                      policyDefinitionGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      effect: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                policyGroups: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyGroupName: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentOutput>;

// The operation
/**
 * Summarizes policy states for the resource group level policy assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - Resource group name.
 * @param policyStatesSummaryResource - The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyAssignmentName - Policy assignment name.
 * @param $top - Maximum number of records to return.
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 */
export const PolicyStatesSummarizeForResourceGroupLevelPolicyAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentInput,
    outputSchema:
      PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentOutput,
  }));
// Input Schema
export interface PolicyStatesSummarizeForSubscriptionInput {
  subscriptionId: string;
  policyStatesSummaryResource: "latest";
  $top?: number;
  $from?: string;
  $to?: string;
  $filter?: string;
}
export const PolicyStatesSummarizeForSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyStatesSummaryResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    $top: Schema.optional(Schema.Number),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesSummarizeForSubscriptionInput>;

// Output Schema
export interface PolicyStatesSummarizeForSubscriptionOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    results?: {
      queryResultsUri?: string;
      nonCompliantResources?: number;
      nonCompliantPolicies?: number;
      resourceDetails?: { complianceState?: string; count?: number }[];
      policyDetails?: { complianceState?: string; count?: number }[];
      policyGroupDetails?: { complianceState?: string; count?: number }[];
    };
    policyAssignments?: {
      policyAssignmentId?: string;
      policySetDefinitionId?: string;
      results?: {
        queryResultsUri?: string;
        nonCompliantResources?: number;
        nonCompliantPolicies?: number;
        resourceDetails?: { complianceState?: string; count?: number }[];
        policyDetails?: { complianceState?: string; count?: number }[];
        policyGroupDetails?: { complianceState?: string; count?: number }[];
      };
      policyDefinitions?: {
        policyDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyDefinitionGroupNames?: string[];
        effect?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
      policyGroups?: {
        policyGroupName?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
    }[];
  }[];
}
export const PolicyStatesSummarizeForSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          results: Schema.optional(
            Schema.Struct({
              queryResultsUri: Schema.optional(Schema.String),
              nonCompliantResources: Schema.optional(Schema.Number),
              nonCompliantPolicies: Schema.optional(Schema.Number),
              resourceDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyGroupDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
          policyAssignments: Schema.optional(
            Schema.Array(
              Schema.Struct({
                policyAssignmentId: Schema.optional(Schema.String),
                policySetDefinitionId: Schema.optional(Schema.String),
                results: Schema.optional(
                  Schema.Struct({
                    queryResultsUri: Schema.optional(Schema.String),
                    nonCompliantResources: Schema.optional(Schema.Number),
                    nonCompliantPolicies: Schema.optional(Schema.Number),
                    resourceDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyGroupDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                  }),
                ),
                policyDefinitions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyDefinitionId: Schema.optional(Schema.String),
                      policyDefinitionReferenceId: Schema.optional(
                        Schema.String,
                      ),
                      policyDefinitionGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      effect: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                policyGroups: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyGroupName: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesSummarizeForSubscriptionOutput>;

// The operation
/**
 * Summarizes policy states for the resources under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyStatesSummaryResource - The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
 * @param $top - Maximum number of records to return.
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 */
export const PolicyStatesSummarizeForSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForSubscriptionInput,
    outputSchema: PolicyStatesSummarizeForSubscriptionOutput,
  }));
// Input Schema
export interface PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentInput {
  subscriptionId: string;
  policyStatesSummaryResource: "latest";
  authorizationNamespace: "Microsoft.Authorization";
  policyAssignmentName: string;
  $top?: number;
  $from?: string;
  $to?: string;
  $filter?: string;
}
export const PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    policyStatesSummaryResource: Schema.Literals(["latest"]).pipe(
      T.PathParam(),
    ),
    authorizationNamespace: Schema.Literals(["Microsoft.Authorization"]).pipe(
      T.PathParam(),
    ),
    policyAssignmentName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $from: Schema.optional(Schema.String),
    $to: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/{authorizationNamespace}/policyAssignments/{policyAssignmentName}/providers/Microsoft.PolicyInsights/policyStates/{policyStatesSummaryResource}/summarize",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentInput>;

// Output Schema
export interface PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentOutput {
  "@odata.context"?: string;
  "@odata.count"?: number;
  value?: {
    "@odata.id"?: string;
    "@odata.context"?: string;
    results?: {
      queryResultsUri?: string;
      nonCompliantResources?: number;
      nonCompliantPolicies?: number;
      resourceDetails?: { complianceState?: string; count?: number }[];
      policyDetails?: { complianceState?: string; count?: number }[];
      policyGroupDetails?: { complianceState?: string; count?: number }[];
    };
    policyAssignments?: {
      policyAssignmentId?: string;
      policySetDefinitionId?: string;
      results?: {
        queryResultsUri?: string;
        nonCompliantResources?: number;
        nonCompliantPolicies?: number;
        resourceDetails?: { complianceState?: string; count?: number }[];
        policyDetails?: { complianceState?: string; count?: number }[];
        policyGroupDetails?: { complianceState?: string; count?: number }[];
      };
      policyDefinitions?: {
        policyDefinitionId?: string;
        policyDefinitionReferenceId?: string;
        policyDefinitionGroupNames?: string[];
        effect?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
      policyGroups?: {
        policyGroupName?: string;
        results?: {
          queryResultsUri?: string;
          nonCompliantResources?: number;
          nonCompliantPolicies?: number;
          resourceDetails?: { complianceState?: string; count?: number }[];
          policyDetails?: { complianceState?: string; count?: number }[];
          policyGroupDetails?: { complianceState?: string; count?: number }[];
        };
      }[];
    }[];
  }[];
}
export const PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentOutput =
  /*@__PURE__*/ Schema.Struct({
    "@odata.context": Schema.optional(Schema.String),
    "@odata.count": Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          "@odata.id": Schema.optional(Schema.String),
          "@odata.context": Schema.optional(Schema.String),
          results: Schema.optional(
            Schema.Struct({
              queryResultsUri: Schema.optional(Schema.String),
              nonCompliantResources: Schema.optional(Schema.Number),
              nonCompliantPolicies: Schema.optional(Schema.Number),
              resourceDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
              policyGroupDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    complianceState: Schema.optional(Schema.String),
                    count: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
          policyAssignments: Schema.optional(
            Schema.Array(
              Schema.Struct({
                policyAssignmentId: Schema.optional(Schema.String),
                policySetDefinitionId: Schema.optional(Schema.String),
                results: Schema.optional(
                  Schema.Struct({
                    queryResultsUri: Schema.optional(Schema.String),
                    nonCompliantResources: Schema.optional(Schema.Number),
                    nonCompliantPolicies: Schema.optional(Schema.Number),
                    resourceDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                    policyGroupDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          complianceState: Schema.optional(Schema.String),
                          count: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                  }),
                ),
                policyDefinitions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyDefinitionId: Schema.optional(Schema.String),
                      policyDefinitionReferenceId: Schema.optional(
                        Schema.String,
                      ),
                      policyDefinitionGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      effect: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                policyGroups: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      policyGroupName: Schema.optional(Schema.String),
                      results: Schema.optional(
                        Schema.Struct({
                          queryResultsUri: Schema.optional(Schema.String),
                          nonCompliantResources: Schema.optional(Schema.Number),
                          nonCompliantPolicies: Schema.optional(Schema.Number),
                          resourceDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                          policyGroupDetails: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                complianceState: Schema.optional(Schema.String),
                                count: Schema.optional(Schema.Number),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentOutput>;

// The operation
/**
 * Summarizes policy states for the subscription level policy assignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param policyStatesSummaryResource - The virtual resource under PolicyStates resource type for summarize action. In a given time range, 'latest' represents the latest policy state(s) and is the only allowed value.
 * @param authorizationNamespace - The namespace for Microsoft Authorization resource provider; only "Microsoft.Authorization" is allowed.
 * @param policyAssignmentName - Policy assignment name.
 * @param $top - Maximum number of records to return.
 * @param $from - ISO 8601 formatted timestamp specifying the start time of the interval to query. When not specified, the service uses ($to - 1-day).
 * @param $to - ISO 8601 formatted timestamp specifying the end time of the interval to query. When not specified, the service uses request time.
 * @param $filter - OData filter expression.
 */
export const PolicyStatesSummarizeForSubscriptionLevelPolicyAssignment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentInput,
    outputSchema:
      PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentOutput,
  }));
// Input Schema
export interface PolicyStatesTriggerResourceGroupEvaluationInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PolicyStatesTriggerResourceGroupEvaluationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/policyStates/latest/triggerEvaluation",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesTriggerResourceGroupEvaluationInput>;

// Output Schema
export type PolicyStatesTriggerResourceGroupEvaluationOutput = void;
export const PolicyStatesTriggerResourceGroupEvaluationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PolicyStatesTriggerResourceGroupEvaluationOutput>;

// The operation
/**
 * Triggers a policy evaluation scan for all the resources under the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - Resource group name.
 */
export const PolicyStatesTriggerResourceGroupEvaluation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesTriggerResourceGroupEvaluationInput,
    outputSchema: PolicyStatesTriggerResourceGroupEvaluationOutput,
  }));
// Input Schema
export interface PolicyStatesTriggerSubscriptionEvaluationInput {
  subscriptionId: string;
}
export const PolicyStatesTriggerSubscriptionEvaluationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/policyStates/latest/triggerEvaluation",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PolicyStatesTriggerSubscriptionEvaluationInput>;

// Output Schema
export type PolicyStatesTriggerSubscriptionEvaluationOutput = void;
export const PolicyStatesTriggerSubscriptionEvaluationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PolicyStatesTriggerSubscriptionEvaluationOutput>;

// The operation
/**
 * Triggers a policy evaluation scan for all the resources under the subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PolicyStatesTriggerSubscriptionEvaluation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesTriggerSubscriptionEvaluationInput,
    outputSchema: PolicyStatesTriggerSubscriptionEvaluationOutput,
  }));
// Input Schema
export interface RemediationsCancelAtManagementGroupInput {
  managementGroupsNamespace: "Microsoft.Management";
  managementGroupId: string;
  remediationName: string;
}
export const RemediationsCancelAtManagementGroupInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupsNamespace: Schema.Literals(["Microsoft.Management"]).pipe(
      T.PathParam(),
    ),
    managementGroupId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/cancel",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsCancelAtManagementGroupInput>;

// Output Schema
export interface RemediationsCancelAtManagementGroupOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsCancelAtManagementGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsCancelAtManagementGroupOutput>;

// The operation
/**
 * Cancels a remediation at management group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupsNamespace - The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
 * @param managementGroupId - Management group ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCancelAtManagementGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCancelAtManagementGroupInput,
    outputSchema: RemediationsCancelAtManagementGroupOutput,
  }));
// Input Schema
export interface RemediationsCancelAtResourceInput {
  resourceId: string;
  remediationName: string;
}
export const RemediationsCancelAtResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/cancel",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsCancelAtResourceInput>;

// Output Schema
export interface RemediationsCancelAtResourceOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsCancelAtResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsCancelAtResourceOutput>;

// The operation
/**
 * Cancel a remediation at resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCancelAtResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCancelAtResourceInput,
    outputSchema: RemediationsCancelAtResourceOutput,
  }));
// Input Schema
export interface RemediationsCancelAtResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  remediationName: string;
}
export const RemediationsCancelAtResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/cancel",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsCancelAtResourceGroupInput>;

// Output Schema
export interface RemediationsCancelAtResourceGroupOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsCancelAtResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsCancelAtResourceGroupOutput>;

// The operation
/**
 * Cancels a remediation at resource group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCancelAtResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCancelAtResourceGroupInput,
    outputSchema: RemediationsCancelAtResourceGroupOutput,
  }));
// Input Schema
export interface RemediationsCancelAtSubscriptionInput {
  subscriptionId: string;
  remediationName: string;
}
export const RemediationsCancelAtSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/cancel",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsCancelAtSubscriptionInput>;

// Output Schema
export interface RemediationsCancelAtSubscriptionOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsCancelAtSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsCancelAtSubscriptionOutput>;

// The operation
/**
 * Cancels a remediation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCancelAtSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCancelAtSubscriptionInput,
    outputSchema: RemediationsCancelAtSubscriptionOutput,
  }));
// Input Schema
export interface RemediationsCreateOrUpdateAtManagementGroupInput {
  managementGroupsNamespace: "Microsoft.Management";
  managementGroupId: string;
  remediationName: string;
  properties?: {
    policyAssignmentId?: string;
    policyDefinitionReferenceId?: string;
    resourceDiscoveryMode?: "ExistingNonCompliant" | "ReEvaluateCompliance";
    provisioningState?: string;
    createdOn?: string;
    lastUpdatedOn?: string;
    filters?: { locations?: string[]; resourceIds?: string[] };
    deploymentStatus?: {
      totalDeployments?: number;
      successfulDeployments?: number;
      failedDeployments?: number;
    };
    statusMessage?: string;
    correlationId?: string;
    resourceCount?: number;
    parallelDeployments?: number;
    failureThreshold?: { percentage?: number };
  };
}
export const RemediationsCreateOrUpdateAtManagementGroupInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupsNamespace: Schema.Literals(["Microsoft.Management"]).pipe(
      T.PathParam(),
    ),
    managementGroupId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        policyAssignmentId: Schema.optional(Schema.String),
        policyDefinitionReferenceId: Schema.optional(Schema.String),
        resourceDiscoveryMode: Schema.optional(
          Schema.Literals(["ExistingNonCompliant", "ReEvaluateCompliance"]),
        ),
        provisioningState: Schema.optional(Schema.String),
        createdOn: Schema.optional(Schema.String),
        lastUpdatedOn: Schema.optional(Schema.String),
        filters: Schema.optional(
          Schema.Struct({
            locations: Schema.optional(Schema.Array(Schema.String)),
            resourceIds: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        deploymentStatus: Schema.optional(
          Schema.Struct({
            totalDeployments: Schema.optional(Schema.Number),
            successfulDeployments: Schema.optional(Schema.Number),
            failedDeployments: Schema.optional(Schema.Number),
          }),
        ),
        statusMessage: Schema.optional(Schema.String),
        correlationId: Schema.optional(Schema.String),
        resourceCount: Schema.optional(Schema.Number),
        parallelDeployments: Schema.optional(Schema.Number),
        failureThreshold: Schema.optional(
          Schema.Struct({
            percentage: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsCreateOrUpdateAtManagementGroupInput>;

// Output Schema
export interface RemediationsCreateOrUpdateAtManagementGroupOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsCreateOrUpdateAtManagementGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsCreateOrUpdateAtManagementGroupOutput>;

// The operation
/**
 * Creates or updates a remediation at management group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupsNamespace - The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
 * @param managementGroupId - Management group ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCreateOrUpdateAtManagementGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCreateOrUpdateAtManagementGroupInput,
    outputSchema: RemediationsCreateOrUpdateAtManagementGroupOutput,
  }));
// Input Schema
export interface RemediationsCreateOrUpdateAtResourceInput {
  resourceId: string;
  remediationName: string;
  properties?: {
    policyAssignmentId?: string;
    policyDefinitionReferenceId?: string;
    resourceDiscoveryMode?: "ExistingNonCompliant" | "ReEvaluateCompliance";
    provisioningState?: string;
    createdOn?: string;
    lastUpdatedOn?: string;
    filters?: { locations?: string[]; resourceIds?: string[] };
    deploymentStatus?: {
      totalDeployments?: number;
      successfulDeployments?: number;
      failedDeployments?: number;
    };
    statusMessage?: string;
    correlationId?: string;
    resourceCount?: number;
    parallelDeployments?: number;
    failureThreshold?: { percentage?: number };
  };
}
export const RemediationsCreateOrUpdateAtResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        policyAssignmentId: Schema.optional(Schema.String),
        policyDefinitionReferenceId: Schema.optional(Schema.String),
        resourceDiscoveryMode: Schema.optional(
          Schema.Literals(["ExistingNonCompliant", "ReEvaluateCompliance"]),
        ),
        provisioningState: Schema.optional(Schema.String),
        createdOn: Schema.optional(Schema.String),
        lastUpdatedOn: Schema.optional(Schema.String),
        filters: Schema.optional(
          Schema.Struct({
            locations: Schema.optional(Schema.Array(Schema.String)),
            resourceIds: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        deploymentStatus: Schema.optional(
          Schema.Struct({
            totalDeployments: Schema.optional(Schema.Number),
            successfulDeployments: Schema.optional(Schema.Number),
            failedDeployments: Schema.optional(Schema.Number),
          }),
        ),
        statusMessage: Schema.optional(Schema.String),
        correlationId: Schema.optional(Schema.String),
        resourceCount: Schema.optional(Schema.Number),
        parallelDeployments: Schema.optional(Schema.Number),
        failureThreshold: Schema.optional(
          Schema.Struct({
            percentage: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsCreateOrUpdateAtResourceInput>;

// Output Schema
export interface RemediationsCreateOrUpdateAtResourceOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsCreateOrUpdateAtResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsCreateOrUpdateAtResourceOutput>;

// The operation
/**
 * Creates or updates a remediation at resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCreateOrUpdateAtResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCreateOrUpdateAtResourceInput,
    outputSchema: RemediationsCreateOrUpdateAtResourceOutput,
  }));
// Input Schema
export interface RemediationsCreateOrUpdateAtResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  remediationName: string;
  properties?: {
    policyAssignmentId?: string;
    policyDefinitionReferenceId?: string;
    resourceDiscoveryMode?: "ExistingNonCompliant" | "ReEvaluateCompliance";
    provisioningState?: string;
    createdOn?: string;
    lastUpdatedOn?: string;
    filters?: { locations?: string[]; resourceIds?: string[] };
    deploymentStatus?: {
      totalDeployments?: number;
      successfulDeployments?: number;
      failedDeployments?: number;
    };
    statusMessage?: string;
    correlationId?: string;
    resourceCount?: number;
    parallelDeployments?: number;
    failureThreshold?: { percentage?: number };
  };
}
export const RemediationsCreateOrUpdateAtResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        policyAssignmentId: Schema.optional(Schema.String),
        policyDefinitionReferenceId: Schema.optional(Schema.String),
        resourceDiscoveryMode: Schema.optional(
          Schema.Literals(["ExistingNonCompliant", "ReEvaluateCompliance"]),
        ),
        provisioningState: Schema.optional(Schema.String),
        createdOn: Schema.optional(Schema.String),
        lastUpdatedOn: Schema.optional(Schema.String),
        filters: Schema.optional(
          Schema.Struct({
            locations: Schema.optional(Schema.Array(Schema.String)),
            resourceIds: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        deploymentStatus: Schema.optional(
          Schema.Struct({
            totalDeployments: Schema.optional(Schema.Number),
            successfulDeployments: Schema.optional(Schema.Number),
            failedDeployments: Schema.optional(Schema.Number),
          }),
        ),
        statusMessage: Schema.optional(Schema.String),
        correlationId: Schema.optional(Schema.String),
        resourceCount: Schema.optional(Schema.Number),
        parallelDeployments: Schema.optional(Schema.Number),
        failureThreshold: Schema.optional(
          Schema.Struct({
            percentage: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsCreateOrUpdateAtResourceGroupInput>;

// Output Schema
export interface RemediationsCreateOrUpdateAtResourceGroupOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsCreateOrUpdateAtResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsCreateOrUpdateAtResourceGroupOutput>;

// The operation
/**
 * Creates or updates a remediation at resource group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCreateOrUpdateAtResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCreateOrUpdateAtResourceGroupInput,
    outputSchema: RemediationsCreateOrUpdateAtResourceGroupOutput,
  }));
// Input Schema
export interface RemediationsCreateOrUpdateAtSubscriptionInput {
  subscriptionId: string;
  remediationName: string;
  properties?: {
    policyAssignmentId?: string;
    policyDefinitionReferenceId?: string;
    resourceDiscoveryMode?: "ExistingNonCompliant" | "ReEvaluateCompliance";
    provisioningState?: string;
    createdOn?: string;
    lastUpdatedOn?: string;
    filters?: { locations?: string[]; resourceIds?: string[] };
    deploymentStatus?: {
      totalDeployments?: number;
      successfulDeployments?: number;
      failedDeployments?: number;
    };
    statusMessage?: string;
    correlationId?: string;
    resourceCount?: number;
    parallelDeployments?: number;
    failureThreshold?: { percentage?: number };
  };
}
export const RemediationsCreateOrUpdateAtSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        policyAssignmentId: Schema.optional(Schema.String),
        policyDefinitionReferenceId: Schema.optional(Schema.String),
        resourceDiscoveryMode: Schema.optional(
          Schema.Literals(["ExistingNonCompliant", "ReEvaluateCompliance"]),
        ),
        provisioningState: Schema.optional(Schema.String),
        createdOn: Schema.optional(Schema.String),
        lastUpdatedOn: Schema.optional(Schema.String),
        filters: Schema.optional(
          Schema.Struct({
            locations: Schema.optional(Schema.Array(Schema.String)),
            resourceIds: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        deploymentStatus: Schema.optional(
          Schema.Struct({
            totalDeployments: Schema.optional(Schema.Number),
            successfulDeployments: Schema.optional(Schema.Number),
            failedDeployments: Schema.optional(Schema.Number),
          }),
        ),
        statusMessage: Schema.optional(Schema.String),
        correlationId: Schema.optional(Schema.String),
        resourceCount: Schema.optional(Schema.Number),
        parallelDeployments: Schema.optional(Schema.Number),
        failureThreshold: Schema.optional(
          Schema.Struct({
            percentage: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsCreateOrUpdateAtSubscriptionInput>;

// Output Schema
export interface RemediationsCreateOrUpdateAtSubscriptionOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsCreateOrUpdateAtSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsCreateOrUpdateAtSubscriptionOutput>;

// The operation
/**
 * Creates or updates a remediation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCreateOrUpdateAtSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCreateOrUpdateAtSubscriptionInput,
    outputSchema: RemediationsCreateOrUpdateAtSubscriptionOutput,
  }));
// Input Schema
export interface RemediationsDeleteAtManagementGroupInput {
  managementGroupsNamespace: "Microsoft.Management";
  managementGroupId: string;
  remediationName: string;
}
export const RemediationsDeleteAtManagementGroupInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupsNamespace: Schema.Literals(["Microsoft.Management"]).pipe(
      T.PathParam(),
    ),
    managementGroupId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsDeleteAtManagementGroupInput>;

// Output Schema
export interface RemediationsDeleteAtManagementGroupOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsDeleteAtManagementGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsDeleteAtManagementGroupOutput>;

// The operation
/**
 * Deletes an existing remediation at management group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupsNamespace - The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
 * @param managementGroupId - Management group ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsDeleteAtManagementGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsDeleteAtManagementGroupInput,
    outputSchema: RemediationsDeleteAtManagementGroupOutput,
  }));
// Input Schema
export interface RemediationsDeleteAtResourceInput {
  resourceId: string;
  remediationName: string;
}
export const RemediationsDeleteAtResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsDeleteAtResourceInput>;

// Output Schema
export interface RemediationsDeleteAtResourceOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsDeleteAtResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsDeleteAtResourceOutput>;

// The operation
/**
 * Deletes an existing remediation at individual resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsDeleteAtResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsDeleteAtResourceInput,
    outputSchema: RemediationsDeleteAtResourceOutput,
  }));
// Input Schema
export interface RemediationsDeleteAtResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  remediationName: string;
}
export const RemediationsDeleteAtResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsDeleteAtResourceGroupInput>;

// Output Schema
export interface RemediationsDeleteAtResourceGroupOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsDeleteAtResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsDeleteAtResourceGroupOutput>;

// The operation
/**
 * Deletes an existing remediation at resource group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsDeleteAtResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsDeleteAtResourceGroupInput,
    outputSchema: RemediationsDeleteAtResourceGroupOutput,
  }));
// Input Schema
export interface RemediationsDeleteAtSubscriptionInput {
  subscriptionId: string;
  remediationName: string;
}
export const RemediationsDeleteAtSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsDeleteAtSubscriptionInput>;

// Output Schema
export interface RemediationsDeleteAtSubscriptionOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsDeleteAtSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsDeleteAtSubscriptionOutput>;

// The operation
/**
 * Deletes an existing remediation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsDeleteAtSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsDeleteAtSubscriptionInput,
    outputSchema: RemediationsDeleteAtSubscriptionOutput,
  }));
// Input Schema
export interface RemediationsGetAtManagementGroupInput {
  managementGroupsNamespace: "Microsoft.Management";
  managementGroupId: string;
  remediationName: string;
}
export const RemediationsGetAtManagementGroupInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupsNamespace: Schema.Literals(["Microsoft.Management"]).pipe(
      T.PathParam(),
    ),
    managementGroupId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsGetAtManagementGroupInput>;

// Output Schema
export interface RemediationsGetAtManagementGroupOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsGetAtManagementGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsGetAtManagementGroupOutput>;

// The operation
/**
 * Gets an existing remediation at management group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupsNamespace - The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
 * @param managementGroupId - Management group ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsGetAtManagementGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsGetAtManagementGroupInput,
    outputSchema: RemediationsGetAtManagementGroupOutput,
  }));
// Input Schema
export interface RemediationsGetAtResourceInput {
  resourceId: string;
  remediationName: string;
}
export const RemediationsGetAtResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsGetAtResourceInput>;

// Output Schema
export interface RemediationsGetAtResourceOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsGetAtResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsGetAtResourceOutput>;

// The operation
/**
 * Gets an existing remediation at resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsGetAtResource = /*@__PURE__*/ API.make(() => ({
  inputSchema: RemediationsGetAtResourceInput,
  outputSchema: RemediationsGetAtResourceOutput,
}));
// Input Schema
export interface RemediationsGetAtResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  remediationName: string;
}
export const RemediationsGetAtResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsGetAtResourceGroupInput>;

// Output Schema
export interface RemediationsGetAtResourceGroupOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsGetAtResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsGetAtResourceGroupOutput>;

// The operation
/**
 * Gets an existing remediation at resource group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsGetAtResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsGetAtResourceGroupInput,
    outputSchema: RemediationsGetAtResourceGroupOutput,
  }));
// Input Schema
export interface RemediationsGetAtSubscriptionInput {
  subscriptionId: string;
  remediationName: string;
}
export const RemediationsGetAtSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsGetAtSubscriptionInput>;

// Output Schema
export interface RemediationsGetAtSubscriptionOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RemediationsGetAtSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RemediationsGetAtSubscriptionOutput>;

// The operation
/**
 * Gets an existing remediation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsGetAtSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsGetAtSubscriptionInput,
    outputSchema: RemediationsGetAtSubscriptionOutput,
  }));
// Input Schema
export interface RemediationsListDeploymentsAtManagementGroupInput {
  managementGroupsNamespace: "Microsoft.Management";
  managementGroupId: string;
  remediationName: string;
  $top?: number;
}
export const RemediationsListDeploymentsAtManagementGroupInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupsNamespace: Schema.Literals(["Microsoft.Management"]).pipe(
      T.PathParam(),
    ),
    managementGroupId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/listDeployments",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsListDeploymentsAtManagementGroupInput>;

// Output Schema
export interface RemediationsListDeploymentsAtManagementGroupOutput {
  value: {
    remediatedResourceId?: string;
    deploymentId?: string;
    status?: string;
    resourceLocation?: string;
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
    createdOn?: string;
    lastUpdatedOn?: string;
  }[];
  nextLink?: string;
}
export const RemediationsListDeploymentsAtManagementGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        remediatedResourceId: Schema.optional(Schema.String),
        deploymentId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        resourceLocation: Schema.optional(Schema.String),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            details: Schema.optional(Schema.Array(Schema.Unknown)),
            additionalInfo: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  type: Schema.optional(Schema.String),
                  info: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        createdOn: Schema.optional(Schema.String),
        lastUpdatedOn: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RemediationsListDeploymentsAtManagementGroupOutput>;

// The operation
/**
 * Gets all deployments for a remediation at management group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupsNamespace - The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
 * @param managementGroupId - Management group ID.
 * @param remediationName - The name of the remediation.
 * @param $top - Maximum number of records to return.
 */
export const RemediationsListDeploymentsAtManagementGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListDeploymentsAtManagementGroupInput,
    outputSchema: RemediationsListDeploymentsAtManagementGroupOutput,
  }));
// Input Schema
export interface RemediationsListDeploymentsAtResourceInput {
  resourceId: string;
  remediationName: string;
  $top?: number;
}
export const RemediationsListDeploymentsAtResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/listDeployments",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsListDeploymentsAtResourceInput>;

// Output Schema
export interface RemediationsListDeploymentsAtResourceOutput {
  value: {
    remediatedResourceId?: string;
    deploymentId?: string;
    status?: string;
    resourceLocation?: string;
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
    createdOn?: string;
    lastUpdatedOn?: string;
  }[];
  nextLink?: string;
}
export const RemediationsListDeploymentsAtResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        remediatedResourceId: Schema.optional(Schema.String),
        deploymentId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        resourceLocation: Schema.optional(Schema.String),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            details: Schema.optional(Schema.Array(Schema.Unknown)),
            additionalInfo: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  type: Schema.optional(Schema.String),
                  info: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        createdOn: Schema.optional(Schema.String),
        lastUpdatedOn: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RemediationsListDeploymentsAtResourceOutput>;

// The operation
/**
 * Gets all deployments for a remediation at resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param remediationName - The name of the remediation.
 * @param $top - Maximum number of records to return.
 */
export const RemediationsListDeploymentsAtResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListDeploymentsAtResourceInput,
    outputSchema: RemediationsListDeploymentsAtResourceOutput,
  }));
// Input Schema
export interface RemediationsListDeploymentsAtResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  remediationName: string;
  $top?: number;
}
export const RemediationsListDeploymentsAtResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/listDeployments",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsListDeploymentsAtResourceGroupInput>;

// Output Schema
export interface RemediationsListDeploymentsAtResourceGroupOutput {
  value: {
    remediatedResourceId?: string;
    deploymentId?: string;
    status?: string;
    resourceLocation?: string;
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
    createdOn?: string;
    lastUpdatedOn?: string;
  }[];
  nextLink?: string;
}
export const RemediationsListDeploymentsAtResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        remediatedResourceId: Schema.optional(Schema.String),
        deploymentId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        resourceLocation: Schema.optional(Schema.String),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            details: Schema.optional(Schema.Array(Schema.Unknown)),
            additionalInfo: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  type: Schema.optional(Schema.String),
                  info: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        createdOn: Schema.optional(Schema.String),
        lastUpdatedOn: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RemediationsListDeploymentsAtResourceGroupOutput>;

// The operation
/**
 * Gets all deployments for a remediation at resource group scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param remediationName - The name of the remediation.
 * @param $top - Maximum number of records to return.
 */
export const RemediationsListDeploymentsAtResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListDeploymentsAtResourceGroupInput,
    outputSchema: RemediationsListDeploymentsAtResourceGroupOutput,
  }));
// Input Schema
export interface RemediationsListDeploymentsAtSubscriptionInput {
  subscriptionId: string;
  remediationName: string;
  $top?: number;
}
export const RemediationsListDeploymentsAtSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/listDeployments",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsListDeploymentsAtSubscriptionInput>;

// Output Schema
export interface RemediationsListDeploymentsAtSubscriptionOutput {
  value: {
    remediatedResourceId?: string;
    deploymentId?: string;
    status?: string;
    resourceLocation?: string;
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
    createdOn?: string;
    lastUpdatedOn?: string;
  }[];
  nextLink?: string;
}
export const RemediationsListDeploymentsAtSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        remediatedResourceId: Schema.optional(Schema.String),
        deploymentId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        resourceLocation: Schema.optional(Schema.String),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            details: Schema.optional(Schema.Array(Schema.Unknown)),
            additionalInfo: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  type: Schema.optional(Schema.String),
                  info: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
        createdOn: Schema.optional(Schema.String),
        lastUpdatedOn: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RemediationsListDeploymentsAtSubscriptionOutput>;

// The operation
/**
 * Gets all deployments for a remediation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param remediationName - The name of the remediation.
 * @param $top - Maximum number of records to return.
 */
export const RemediationsListDeploymentsAtSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListDeploymentsAtSubscriptionInput,
    outputSchema: RemediationsListDeploymentsAtSubscriptionOutput,
  }));
// Input Schema
export interface RemediationsListForManagementGroupInput {
  managementGroupsNamespace: "Microsoft.Management";
  managementGroupId: string;
  $top?: number;
  $filter?: string;
}
export const RemediationsListForManagementGroupInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupsNamespace: Schema.Literals(["Microsoft.Management"]).pipe(
      T.PathParam(),
    ),
    managementGroupId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupId}/providers/Microsoft.PolicyInsights/remediations",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsListForManagementGroupInput>;

// Output Schema
export interface RemediationsListForManagementGroupOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const RemediationsListForManagementGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RemediationsListForManagementGroupOutput>;

// The operation
/**
 * Gets all remediations for the management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupsNamespace - The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
 * @param managementGroupId - Management group ID.
 * @param $top - Maximum number of records to return.
 * @param $filter - OData filter expression.
 */
export const RemediationsListForManagementGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListForManagementGroupInput,
    outputSchema: RemediationsListForManagementGroupOutput,
  }));
// Input Schema
export interface RemediationsListForResourceInput {
  resourceId: string;
  $top?: number;
  $filter?: string;
}
export const RemediationsListForResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/remediations",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsListForResourceInput>;

// Output Schema
export interface RemediationsListForResourceOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const RemediationsListForResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RemediationsListForResourceOutput>;

// The operation
/**
 * Gets all remediations for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param $top - Maximum number of records to return.
 * @param $filter - OData filter expression.
 */
export const RemediationsListForResource = /*@__PURE__*/ API.make(() => ({
  inputSchema: RemediationsListForResourceInput,
  outputSchema: RemediationsListForResourceOutput,
}));
// Input Schema
export interface RemediationsListForResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
  $filter?: string;
}
export const RemediationsListForResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsListForResourceGroupInput>;

// Output Schema
export interface RemediationsListForResourceGroupOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const RemediationsListForResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RemediationsListForResourceGroupOutput>;

// The operation
/**
 * Gets all remediations for the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - Maximum number of records to return.
 * @param $filter - OData filter expression.
 */
export const RemediationsListForResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListForResourceGroupInput,
    outputSchema: RemediationsListForResourceGroupOutput,
  }));
// Input Schema
export interface RemediationsListForSubscriptionInput {
  subscriptionId: string;
  $top?: number;
  $filter?: string;
}
export const RemediationsListForSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<RemediationsListForSubscriptionInput>;

// Output Schema
export interface RemediationsListForSubscriptionOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const RemediationsListForSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RemediationsListForSubscriptionOutput>;

// The operation
/**
 * Gets all remediations for the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $top - Maximum number of records to return.
 * @param $filter - OData filter expression.
 */
export const RemediationsListForSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListForSubscriptionInput,
    outputSchema: RemediationsListForSubscriptionOutput,
  }));
