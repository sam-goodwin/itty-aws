/**
 * Azure Policyinsights API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AttestationsCreateOrUpdateAtResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type AttestationsCreateOrUpdateAtResourceInput =
  typeof AttestationsCreateOrUpdateAtResourceInput.Type;

// Output Schema
export const AttestationsCreateOrUpdateAtResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AttestationsCreateOrUpdateAtResourceOutput =
  typeof AttestationsCreateOrUpdateAtResourceOutput.Type;

// The operation
/**
 * Creates or updates an attestation at resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsCreateOrUpdateAtResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttestationsCreateOrUpdateAtResourceInput,
    outputSchema: AttestationsCreateOrUpdateAtResourceOutput,
  }));
// Input Schema
export const AttestationsCreateOrUpdateAtResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type AttestationsCreateOrUpdateAtResourceGroupInput =
  typeof AttestationsCreateOrUpdateAtResourceGroupInput.Type;

// Output Schema
export const AttestationsCreateOrUpdateAtResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AttestationsCreateOrUpdateAtResourceGroupOutput =
  typeof AttestationsCreateOrUpdateAtResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttestationsCreateOrUpdateAtResourceGroupInput,
    outputSchema: AttestationsCreateOrUpdateAtResourceGroupOutput,
  }));
// Input Schema
export const AttestationsCreateOrUpdateAtSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type AttestationsCreateOrUpdateAtSubscriptionInput =
  typeof AttestationsCreateOrUpdateAtSubscriptionInput.Type;

// Output Schema
export const AttestationsCreateOrUpdateAtSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AttestationsCreateOrUpdateAtSubscriptionOutput =
  typeof AttestationsCreateOrUpdateAtSubscriptionOutput.Type;

// The operation
/**
 * Creates or updates an attestation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsCreateOrUpdateAtSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttestationsCreateOrUpdateAtSubscriptionInput,
    outputSchema: AttestationsCreateOrUpdateAtSubscriptionOutput,
  }));
// Input Schema
export const AttestationsDeleteAtResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type AttestationsDeleteAtResourceInput =
  typeof AttestationsDeleteAtResourceInput.Type;

// Output Schema
export const AttestationsDeleteAtResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttestationsDeleteAtResourceOutput =
  typeof AttestationsDeleteAtResourceOutput.Type;

// The operation
/**
 * Deletes an existing attestation at individual resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsDeleteAtResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttestationsDeleteAtResourceInput,
    outputSchema: AttestationsDeleteAtResourceOutput,
  }));
// Input Schema
export const AttestationsDeleteAtResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type AttestationsDeleteAtResourceGroupInput =
  typeof AttestationsDeleteAtResourceGroupInput.Type;

// Output Schema
export const AttestationsDeleteAtResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttestationsDeleteAtResourceGroupOutput =
  typeof AttestationsDeleteAtResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttestationsDeleteAtResourceGroupInput,
    outputSchema: AttestationsDeleteAtResourceGroupOutput,
  }));
// Input Schema
export const AttestationsDeleteAtSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type AttestationsDeleteAtSubscriptionInput =
  typeof AttestationsDeleteAtSubscriptionInput.Type;

// Output Schema
export const AttestationsDeleteAtSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttestationsDeleteAtSubscriptionOutput =
  typeof AttestationsDeleteAtSubscriptionOutput.Type;

// The operation
/**
 * Deletes an existing attestation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsDeleteAtSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttestationsDeleteAtSubscriptionInput,
    outputSchema: AttestationsDeleteAtSubscriptionOutput,
  }));
// Input Schema
export const AttestationsGetAtResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type AttestationsGetAtResourceInput =
  typeof AttestationsGetAtResourceInput.Type;

// Output Schema
export const AttestationsGetAtResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AttestationsGetAtResourceOutput =
  typeof AttestationsGetAtResourceOutput.Type;

// The operation
/**
 * Gets an existing attestation at resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsGetAtResource = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AttestationsGetAtResourceInput,
    outputSchema: AttestationsGetAtResourceOutput,
  }),
);
// Input Schema
export const AttestationsGetAtResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type AttestationsGetAtResourceGroupInput =
  typeof AttestationsGetAtResourceGroupInput.Type;

// Output Schema
export const AttestationsGetAtResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AttestationsGetAtResourceGroupOutput =
  typeof AttestationsGetAtResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttestationsGetAtResourceGroupInput,
    outputSchema: AttestationsGetAtResourceGroupOutput,
  }));
// Input Schema
export const AttestationsGetAtSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    attestationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/attestations/{attestationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type AttestationsGetAtSubscriptionInput =
  typeof AttestationsGetAtSubscriptionInput.Type;

// Output Schema
export const AttestationsGetAtSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AttestationsGetAtSubscriptionOutput =
  typeof AttestationsGetAtSubscriptionOutput.Type;

// The operation
/**
 * Gets an existing attestation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param attestationName - The name of the attestation.
 */
export const AttestationsGetAtSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttestationsGetAtSubscriptionInput,
    outputSchema: AttestationsGetAtSubscriptionOutput,
  }));
// Input Schema
export const AttestationsListForResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/attestations",
      apiVersion: "2024-10-01",
    }),
  );
export type AttestationsListForResourceInput =
  typeof AttestationsListForResourceInput.Type;

// Output Schema
export const AttestationsListForResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AttestationsListForResourceOutput =
  typeof AttestationsListForResourceOutput.Type;

// The operation
/**
 * Gets all attestations for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param $top - Maximum number of records to return.
 * @param $filter - OData filter expression.
 */
export const AttestationsListForResource = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AttestationsListForResourceInput,
    outputSchema: AttestationsListForResourceOutput,
  }),
);
// Input Schema
export const AttestationsListForResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type AttestationsListForResourceGroupInput =
  typeof AttestationsListForResourceGroupInput.Type;

// Output Schema
export const AttestationsListForResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AttestationsListForResourceGroupOutput =
  typeof AttestationsListForResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttestationsListForResourceGroupInput,
    outputSchema: AttestationsListForResourceGroupOutput,
  }));
// Input Schema
export const AttestationsListForSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/attestations",
      apiVersion: "2024-10-01",
    }),
  );
export type AttestationsListForSubscriptionInput =
  typeof AttestationsListForSubscriptionInput.Type;

// Output Schema
export const AttestationsListForSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AttestationsListForSubscriptionOutput =
  typeof AttestationsListForSubscriptionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttestationsListForSubscriptionInput,
    outputSchema: AttestationsListForSubscriptionOutput,
  }));
// Input Schema
export const ComponentPolicyStatesListQueryResultsForPolicyDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ComponentPolicyStatesListQueryResultsForPolicyDefinitionInput =
  typeof ComponentPolicyStatesListQueryResultsForPolicyDefinitionInput.Type;

// Output Schema
export const ComponentPolicyStatesListQueryResultsForPolicyDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ComponentPolicyStatesListQueryResultsForPolicyDefinitionOutput =
  typeof ComponentPolicyStatesListQueryResultsForPolicyDefinitionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ComponentPolicyStatesListQueryResultsForPolicyDefinitionInput,
    outputSchema:
      ComponentPolicyStatesListQueryResultsForPolicyDefinitionOutput,
  }));
// Input Schema
export const ComponentPolicyStatesListQueryResultsForResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ComponentPolicyStatesListQueryResultsForResourceInput =
  typeof ComponentPolicyStatesListQueryResultsForResourceInput.Type;

// Output Schema
export const ComponentPolicyStatesListQueryResultsForResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ComponentPolicyStatesListQueryResultsForResourceOutput =
  typeof ComponentPolicyStatesListQueryResultsForResourceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ComponentPolicyStatesListQueryResultsForResourceInput,
    outputSchema: ComponentPolicyStatesListQueryResultsForResourceOutput,
  }));
// Input Schema
export const ComponentPolicyStatesListQueryResultsForResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ComponentPolicyStatesListQueryResultsForResourceGroupInput =
  typeof ComponentPolicyStatesListQueryResultsForResourceGroupInput.Type;

// Output Schema
export const ComponentPolicyStatesListQueryResultsForResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ComponentPolicyStatesListQueryResultsForResourceGroupOutput =
  typeof ComponentPolicyStatesListQueryResultsForResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ComponentPolicyStatesListQueryResultsForResourceGroupInput,
    outputSchema: ComponentPolicyStatesListQueryResultsForResourceGroupOutput,
  }));
// Input Schema
export const ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput =
  typeof ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput.Type;

// Output Schema
export const ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput =
  typeof ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput,
    outputSchema:
      ComponentPolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput,
  }));
// Input Schema
export const ComponentPolicyStatesListQueryResultsForSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ComponentPolicyStatesListQueryResultsForSubscriptionInput =
  typeof ComponentPolicyStatesListQueryResultsForSubscriptionInput.Type;

// Output Schema
export const ComponentPolicyStatesListQueryResultsForSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ComponentPolicyStatesListQueryResultsForSubscriptionOutput =
  typeof ComponentPolicyStatesListQueryResultsForSubscriptionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ComponentPolicyStatesListQueryResultsForSubscriptionInput,
    outputSchema: ComponentPolicyStatesListQueryResultsForSubscriptionOutput,
  }));
// Input Schema
export const ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput =
  typeof ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput.Type;

// Output Schema
export const ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput =
  typeof ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput,
    outputSchema:
      ComponentPolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.PolicyInsights/operations",
    apiVersion: "2024-10-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Lists available operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PolicyEventsListQueryResultsForManagementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyEventsListQueryResultsForManagementGroupInput =
  typeof PolicyEventsListQueryResultsForManagementGroupInput.Type;

// Output Schema
export const PolicyEventsListQueryResultsForManagementGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyEventsListQueryResultsForManagementGroupOutput =
  typeof PolicyEventsListQueryResultsForManagementGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForManagementGroupInput,
    outputSchema: PolicyEventsListQueryResultsForManagementGroupOutput,
  }));
// Input Schema
export const PolicyEventsListQueryResultsForPolicyDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyEventsListQueryResultsForPolicyDefinitionInput =
  typeof PolicyEventsListQueryResultsForPolicyDefinitionInput.Type;

// Output Schema
export const PolicyEventsListQueryResultsForPolicyDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyEventsListQueryResultsForPolicyDefinitionOutput =
  typeof PolicyEventsListQueryResultsForPolicyDefinitionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForPolicyDefinitionInput,
    outputSchema: PolicyEventsListQueryResultsForPolicyDefinitionOutput,
  }));
// Input Schema
export const PolicyEventsListQueryResultsForPolicySetDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyEventsListQueryResultsForPolicySetDefinitionInput =
  typeof PolicyEventsListQueryResultsForPolicySetDefinitionInput.Type;

// Output Schema
export const PolicyEventsListQueryResultsForPolicySetDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyEventsListQueryResultsForPolicySetDefinitionOutput =
  typeof PolicyEventsListQueryResultsForPolicySetDefinitionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForPolicySetDefinitionInput,
    outputSchema: PolicyEventsListQueryResultsForPolicySetDefinitionOutput,
  }));
// Input Schema
export const PolicyEventsListQueryResultsForResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyEventsListQueryResultsForResourceInput =
  typeof PolicyEventsListQueryResultsForResourceInput.Type;

// Output Schema
export const PolicyEventsListQueryResultsForResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyEventsListQueryResultsForResourceOutput =
  typeof PolicyEventsListQueryResultsForResourceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForResourceInput,
    outputSchema: PolicyEventsListQueryResultsForResourceOutput,
  }));
// Input Schema
export const PolicyEventsListQueryResultsForResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyEventsListQueryResultsForResourceGroupInput =
  typeof PolicyEventsListQueryResultsForResourceGroupInput.Type;

// Output Schema
export const PolicyEventsListQueryResultsForResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyEventsListQueryResultsForResourceGroupOutput =
  typeof PolicyEventsListQueryResultsForResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForResourceGroupInput,
    outputSchema: PolicyEventsListQueryResultsForResourceGroupOutput,
  }));
// Input Schema
export const PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentInput =
  typeof PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentInput.Type;

// Output Schema
export const PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentOutput =
  typeof PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentInput,
    outputSchema:
      PolicyEventsListQueryResultsForResourceGroupLevelPolicyAssignmentOutput,
  }));
// Input Schema
export const PolicyEventsListQueryResultsForSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyEventsListQueryResultsForSubscriptionInput =
  typeof PolicyEventsListQueryResultsForSubscriptionInput.Type;

// Output Schema
export const PolicyEventsListQueryResultsForSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyEventsListQueryResultsForSubscriptionOutput =
  typeof PolicyEventsListQueryResultsForSubscriptionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyEventsListQueryResultsForSubscriptionInput,
    outputSchema: PolicyEventsListQueryResultsForSubscriptionOutput,
  }));
// Input Schema
export const PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentInput =
  typeof PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentInput.Type;

// Output Schema
export const PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOutput =
  typeof PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentInput,
    outputSchema:
      PolicyEventsListQueryResultsForSubscriptionLevelPolicyAssignmentOutput,
  }));
// Input Schema
export const PolicyMetadataGetResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.PolicyInsights/policyMetadata/{resourceName}",
      apiVersion: "2024-10-01",
    }),
  );
export type PolicyMetadataGetResourceInput =
  typeof PolicyMetadataGetResourceInput.Type;

// Output Schema
export const PolicyMetadataGetResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyMetadataGetResourceOutput =
  typeof PolicyMetadataGetResourceOutput.Type;

// The operation
/**
 * Get policy metadata resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceName - The name of the policy metadata resource.
 */
export const PolicyMetadataGetResource = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PolicyMetadataGetResourceInput,
    outputSchema: PolicyMetadataGetResourceOutput,
  }),
);
// Input Schema
export const PolicyMetadataListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.PolicyInsights/policyMetadata",
      apiVersion: "2024-10-01",
    }),
  );
export type PolicyMetadataListInput = typeof PolicyMetadataListInput.Type;

// Output Schema
export const PolicyMetadataListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyMetadataListOutput = typeof PolicyMetadataListOutput.Type;

// The operation
/**
 * Get a list of the policy metadata resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param $top - Maximum number of records to return.
 */
export const PolicyMetadataList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PolicyMetadataListInput,
  outputSchema: PolicyMetadataListOutput,
}));
// Input Schema
export const PolicyRestrictionsCheckAtManagementGroupScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyRestrictionsCheckAtManagementGroupScopeInput =
  typeof PolicyRestrictionsCheckAtManagementGroupScopeInput.Type;

// Output Schema
export const PolicyRestrictionsCheckAtManagementGroupScopeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyRestrictionsCheckAtManagementGroupScopeOutput =
  typeof PolicyRestrictionsCheckAtManagementGroupScopeOutput.Type;

// The operation
/**
 * Checks what restrictions Azure Policy will place on resources within a management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupsNamespace - The namespace for Microsoft Management RP; only "Microsoft.Management" is allowed.
 * @param managementGroupId - Management group ID.
 */
export const PolicyRestrictionsCheckAtManagementGroupScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyRestrictionsCheckAtManagementGroupScopeInput,
    outputSchema: PolicyRestrictionsCheckAtManagementGroupScopeOutput,
  }));
// Input Schema
export const PolicyRestrictionsCheckAtResourceGroupScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyRestrictionsCheckAtResourceGroupScopeInput =
  typeof PolicyRestrictionsCheckAtResourceGroupScopeInput.Type;

// Output Schema
export const PolicyRestrictionsCheckAtResourceGroupScopeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyRestrictionsCheckAtResourceGroupScopeOutput =
  typeof PolicyRestrictionsCheckAtResourceGroupScopeOutput.Type;

// The operation
/**
 * Checks what restrictions Azure Policy will place on a resource within a resource group. Use this when the resource group the resource will be created in is already known.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PolicyRestrictionsCheckAtResourceGroupScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyRestrictionsCheckAtResourceGroupScopeInput,
    outputSchema: PolicyRestrictionsCheckAtResourceGroupScopeOutput,
  }));
// Input Schema
export const PolicyRestrictionsCheckAtSubscriptionScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyRestrictionsCheckAtSubscriptionScopeInput =
  typeof PolicyRestrictionsCheckAtSubscriptionScopeInput.Type;

// Output Schema
export const PolicyRestrictionsCheckAtSubscriptionScopeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyRestrictionsCheckAtSubscriptionScopeOutput =
  typeof PolicyRestrictionsCheckAtSubscriptionScopeOutput.Type;

// The operation
/**
 * Checks what restrictions Azure Policy will place on a resource within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PolicyRestrictionsCheckAtSubscriptionScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyRestrictionsCheckAtSubscriptionScopeInput,
    outputSchema: PolicyRestrictionsCheckAtSubscriptionScopeOutput,
  }));
// Input Schema
export const PolicyStatesListQueryResultsForManagementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesListQueryResultsForManagementGroupInput =
  typeof PolicyStatesListQueryResultsForManagementGroupInput.Type;

// Output Schema
export const PolicyStatesListQueryResultsForManagementGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesListQueryResultsForManagementGroupOutput =
  typeof PolicyStatesListQueryResultsForManagementGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForManagementGroupInput,
    outputSchema: PolicyStatesListQueryResultsForManagementGroupOutput,
  }));
// Input Schema
export const PolicyStatesListQueryResultsForPolicyDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesListQueryResultsForPolicyDefinitionInput =
  typeof PolicyStatesListQueryResultsForPolicyDefinitionInput.Type;

// Output Schema
export const PolicyStatesListQueryResultsForPolicyDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesListQueryResultsForPolicyDefinitionOutput =
  typeof PolicyStatesListQueryResultsForPolicyDefinitionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForPolicyDefinitionInput,
    outputSchema: PolicyStatesListQueryResultsForPolicyDefinitionOutput,
  }));
// Input Schema
export const PolicyStatesListQueryResultsForPolicySetDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesListQueryResultsForPolicySetDefinitionInput =
  typeof PolicyStatesListQueryResultsForPolicySetDefinitionInput.Type;

// Output Schema
export const PolicyStatesListQueryResultsForPolicySetDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesListQueryResultsForPolicySetDefinitionOutput =
  typeof PolicyStatesListQueryResultsForPolicySetDefinitionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForPolicySetDefinitionInput,
    outputSchema: PolicyStatesListQueryResultsForPolicySetDefinitionOutput,
  }));
// Input Schema
export const PolicyStatesListQueryResultsForResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesListQueryResultsForResourceInput =
  typeof PolicyStatesListQueryResultsForResourceInput.Type;

// Output Schema
export const PolicyStatesListQueryResultsForResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesListQueryResultsForResourceOutput =
  typeof PolicyStatesListQueryResultsForResourceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForResourceInput,
    outputSchema: PolicyStatesListQueryResultsForResourceOutput,
  }));
// Input Schema
export const PolicyStatesListQueryResultsForResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesListQueryResultsForResourceGroupInput =
  typeof PolicyStatesListQueryResultsForResourceGroupInput.Type;

// Output Schema
export const PolicyStatesListQueryResultsForResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesListQueryResultsForResourceGroupOutput =
  typeof PolicyStatesListQueryResultsForResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForResourceGroupInput,
    outputSchema: PolicyStatesListQueryResultsForResourceGroupOutput,
  }));
// Input Schema
export const PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput =
  typeof PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput.Type;

// Output Schema
export const PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput =
  typeof PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentInput,
    outputSchema:
      PolicyStatesListQueryResultsForResourceGroupLevelPolicyAssignmentOutput,
  }));
// Input Schema
export const PolicyStatesListQueryResultsForSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesListQueryResultsForSubscriptionInput =
  typeof PolicyStatesListQueryResultsForSubscriptionInput.Type;

// Output Schema
export const PolicyStatesListQueryResultsForSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesListQueryResultsForSubscriptionOutput =
  typeof PolicyStatesListQueryResultsForSubscriptionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesListQueryResultsForSubscriptionInput,
    outputSchema: PolicyStatesListQueryResultsForSubscriptionOutput,
  }));
// Input Schema
export const PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput =
  typeof PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput.Type;

// Output Schema
export const PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput =
  typeof PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentInput,
    outputSchema:
      PolicyStatesListQueryResultsForSubscriptionLevelPolicyAssignmentOutput,
  }));
// Input Schema
export const PolicyStatesSummarizeForManagementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesSummarizeForManagementGroupInput =
  typeof PolicyStatesSummarizeForManagementGroupInput.Type;

// Output Schema
export const PolicyStatesSummarizeForManagementGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesSummarizeForManagementGroupOutput =
  typeof PolicyStatesSummarizeForManagementGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForManagementGroupInput,
    outputSchema: PolicyStatesSummarizeForManagementGroupOutput,
  }));
// Input Schema
export const PolicyStatesSummarizeForPolicyDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesSummarizeForPolicyDefinitionInput =
  typeof PolicyStatesSummarizeForPolicyDefinitionInput.Type;

// Output Schema
export const PolicyStatesSummarizeForPolicyDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesSummarizeForPolicyDefinitionOutput =
  typeof PolicyStatesSummarizeForPolicyDefinitionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForPolicyDefinitionInput,
    outputSchema: PolicyStatesSummarizeForPolicyDefinitionOutput,
  }));
// Input Schema
export const PolicyStatesSummarizeForPolicySetDefinitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesSummarizeForPolicySetDefinitionInput =
  typeof PolicyStatesSummarizeForPolicySetDefinitionInput.Type;

// Output Schema
export const PolicyStatesSummarizeForPolicySetDefinitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesSummarizeForPolicySetDefinitionOutput =
  typeof PolicyStatesSummarizeForPolicySetDefinitionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForPolicySetDefinitionInput,
    outputSchema: PolicyStatesSummarizeForPolicySetDefinitionOutput,
  }));
// Input Schema
export const PolicyStatesSummarizeForResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesSummarizeForResourceInput =
  typeof PolicyStatesSummarizeForResourceInput.Type;

// Output Schema
export const PolicyStatesSummarizeForResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesSummarizeForResourceOutput =
  typeof PolicyStatesSummarizeForResourceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForResourceInput,
    outputSchema: PolicyStatesSummarizeForResourceOutput,
  }));
// Input Schema
export const PolicyStatesSummarizeForResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesSummarizeForResourceGroupInput =
  typeof PolicyStatesSummarizeForResourceGroupInput.Type;

// Output Schema
export const PolicyStatesSummarizeForResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesSummarizeForResourceGroupOutput =
  typeof PolicyStatesSummarizeForResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForResourceGroupInput,
    outputSchema: PolicyStatesSummarizeForResourceGroupOutput,
  }));
// Input Schema
export const PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentInput =
  typeof PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentInput.Type;

// Output Schema
export const PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentOutput =
  typeof PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentInput,
    outputSchema:
      PolicyStatesSummarizeForResourceGroupLevelPolicyAssignmentOutput,
  }));
// Input Schema
export const PolicyStatesSummarizeForSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesSummarizeForSubscriptionInput =
  typeof PolicyStatesSummarizeForSubscriptionInput.Type;

// Output Schema
export const PolicyStatesSummarizeForSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesSummarizeForSubscriptionOutput =
  typeof PolicyStatesSummarizeForSubscriptionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForSubscriptionInput,
    outputSchema: PolicyStatesSummarizeForSubscriptionOutput,
  }));
// Input Schema
export const PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentInput =
  typeof PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentInput.Type;

// Output Schema
export const PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentOutput =
  typeof PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentInput,
    outputSchema:
      PolicyStatesSummarizeForSubscriptionLevelPolicyAssignmentOutput,
  }));
// Input Schema
export const PolicyStatesTriggerResourceGroupEvaluationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/policyStates/latest/triggerEvaluation",
      apiVersion: "2024-10-01",
    }),
  );
export type PolicyStatesTriggerResourceGroupEvaluationInput =
  typeof PolicyStatesTriggerResourceGroupEvaluationInput.Type;

// Output Schema
export const PolicyStatesTriggerResourceGroupEvaluationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PolicyStatesTriggerResourceGroupEvaluationOutput =
  typeof PolicyStatesTriggerResourceGroupEvaluationOutput.Type;

// The operation
/**
 * Triggers a policy evaluation scan for all the resources under the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - Resource group name.
 */
export const PolicyStatesTriggerResourceGroupEvaluation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesTriggerResourceGroupEvaluationInput,
    outputSchema: PolicyStatesTriggerResourceGroupEvaluationOutput,
  }));
// Input Schema
export const PolicyStatesTriggerSubscriptionEvaluationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/policyStates/latest/triggerEvaluation",
      apiVersion: "2024-10-01",
    }),
  );
export type PolicyStatesTriggerSubscriptionEvaluationInput =
  typeof PolicyStatesTriggerSubscriptionEvaluationInput.Type;

// Output Schema
export const PolicyStatesTriggerSubscriptionEvaluationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PolicyStatesTriggerSubscriptionEvaluationOutput =
  typeof PolicyStatesTriggerSubscriptionEvaluationOutput.Type;

// The operation
/**
 * Triggers a policy evaluation scan for all the resources under the subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PolicyStatesTriggerSubscriptionEvaluation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PolicyStatesTriggerSubscriptionEvaluationInput,
    outputSchema: PolicyStatesTriggerSubscriptionEvaluationOutput,
  }));
// Input Schema
export const RemediationsCancelAtManagementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RemediationsCancelAtManagementGroupInput =
  typeof RemediationsCancelAtManagementGroupInput.Type;

// Output Schema
export const RemediationsCancelAtManagementGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsCancelAtManagementGroupOutput =
  typeof RemediationsCancelAtManagementGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCancelAtManagementGroupInput,
    outputSchema: RemediationsCancelAtManagementGroupOutput,
  }));
// Input Schema
export const RemediationsCancelAtResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/cancel",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsCancelAtResourceInput =
  typeof RemediationsCancelAtResourceInput.Type;

// Output Schema
export const RemediationsCancelAtResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsCancelAtResourceOutput =
  typeof RemediationsCancelAtResourceOutput.Type;

// The operation
/**
 * Cancel a remediation at resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCancelAtResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCancelAtResourceInput,
    outputSchema: RemediationsCancelAtResourceOutput,
  }));
// Input Schema
export const RemediationsCancelAtResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/cancel",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsCancelAtResourceGroupInput =
  typeof RemediationsCancelAtResourceGroupInput.Type;

// Output Schema
export const RemediationsCancelAtResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsCancelAtResourceGroupOutput =
  typeof RemediationsCancelAtResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCancelAtResourceGroupInput,
    outputSchema: RemediationsCancelAtResourceGroupOutput,
  }));
// Input Schema
export const RemediationsCancelAtSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/cancel",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsCancelAtSubscriptionInput =
  typeof RemediationsCancelAtSubscriptionInput.Type;

// Output Schema
export const RemediationsCancelAtSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsCancelAtSubscriptionOutput =
  typeof RemediationsCancelAtSubscriptionOutput.Type;

// The operation
/**
 * Cancels a remediation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCancelAtSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCancelAtSubscriptionInput,
    outputSchema: RemediationsCancelAtSubscriptionOutput,
  }));
// Input Schema
export const RemediationsCreateOrUpdateAtManagementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RemediationsCreateOrUpdateAtManagementGroupInput =
  typeof RemediationsCreateOrUpdateAtManagementGroupInput.Type;

// Output Schema
export const RemediationsCreateOrUpdateAtManagementGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsCreateOrUpdateAtManagementGroupOutput =
  typeof RemediationsCreateOrUpdateAtManagementGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCreateOrUpdateAtManagementGroupInput,
    outputSchema: RemediationsCreateOrUpdateAtManagementGroupOutput,
  }));
// Input Schema
export const RemediationsCreateOrUpdateAtResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RemediationsCreateOrUpdateAtResourceInput =
  typeof RemediationsCreateOrUpdateAtResourceInput.Type;

// Output Schema
export const RemediationsCreateOrUpdateAtResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsCreateOrUpdateAtResourceOutput =
  typeof RemediationsCreateOrUpdateAtResourceOutput.Type;

// The operation
/**
 * Creates or updates a remediation at resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCreateOrUpdateAtResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCreateOrUpdateAtResourceInput,
    outputSchema: RemediationsCreateOrUpdateAtResourceOutput,
  }));
// Input Schema
export const RemediationsCreateOrUpdateAtResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RemediationsCreateOrUpdateAtResourceGroupInput =
  typeof RemediationsCreateOrUpdateAtResourceGroupInput.Type;

// Output Schema
export const RemediationsCreateOrUpdateAtResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsCreateOrUpdateAtResourceGroupOutput =
  typeof RemediationsCreateOrUpdateAtResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCreateOrUpdateAtResourceGroupInput,
    outputSchema: RemediationsCreateOrUpdateAtResourceGroupOutput,
  }));
// Input Schema
export const RemediationsCreateOrUpdateAtSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RemediationsCreateOrUpdateAtSubscriptionInput =
  typeof RemediationsCreateOrUpdateAtSubscriptionInput.Type;

// Output Schema
export const RemediationsCreateOrUpdateAtSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsCreateOrUpdateAtSubscriptionOutput =
  typeof RemediationsCreateOrUpdateAtSubscriptionOutput.Type;

// The operation
/**
 * Creates or updates a remediation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsCreateOrUpdateAtSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsCreateOrUpdateAtSubscriptionInput,
    outputSchema: RemediationsCreateOrUpdateAtSubscriptionOutput,
  }));
// Input Schema
export const RemediationsDeleteAtManagementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RemediationsDeleteAtManagementGroupInput =
  typeof RemediationsDeleteAtManagementGroupInput.Type;

// Output Schema
export const RemediationsDeleteAtManagementGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsDeleteAtManagementGroupOutput =
  typeof RemediationsDeleteAtManagementGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsDeleteAtManagementGroupInput,
    outputSchema: RemediationsDeleteAtManagementGroupOutput,
  }));
// Input Schema
export const RemediationsDeleteAtResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsDeleteAtResourceInput =
  typeof RemediationsDeleteAtResourceInput.Type;

// Output Schema
export const RemediationsDeleteAtResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsDeleteAtResourceOutput =
  typeof RemediationsDeleteAtResourceOutput.Type;

// The operation
/**
 * Deletes an existing remediation at individual resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsDeleteAtResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsDeleteAtResourceInput,
    outputSchema: RemediationsDeleteAtResourceOutput,
  }));
// Input Schema
export const RemediationsDeleteAtResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsDeleteAtResourceGroupInput =
  typeof RemediationsDeleteAtResourceGroupInput.Type;

// Output Schema
export const RemediationsDeleteAtResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsDeleteAtResourceGroupOutput =
  typeof RemediationsDeleteAtResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsDeleteAtResourceGroupInput,
    outputSchema: RemediationsDeleteAtResourceGroupOutput,
  }));
// Input Schema
export const RemediationsDeleteAtSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsDeleteAtSubscriptionInput =
  typeof RemediationsDeleteAtSubscriptionInput.Type;

// Output Schema
export const RemediationsDeleteAtSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsDeleteAtSubscriptionOutput =
  typeof RemediationsDeleteAtSubscriptionOutput.Type;

// The operation
/**
 * Deletes an existing remediation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsDeleteAtSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsDeleteAtSubscriptionInput,
    outputSchema: RemediationsDeleteAtSubscriptionOutput,
  }));
// Input Schema
export const RemediationsGetAtManagementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RemediationsGetAtManagementGroupInput =
  typeof RemediationsGetAtManagementGroupInput.Type;

// Output Schema
export const RemediationsGetAtManagementGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsGetAtManagementGroupOutput =
  typeof RemediationsGetAtManagementGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsGetAtManagementGroupInput,
    outputSchema: RemediationsGetAtManagementGroupOutput,
  }));
// Input Schema
export const RemediationsGetAtResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsGetAtResourceInput =
  typeof RemediationsGetAtResourceInput.Type;

// Output Schema
export const RemediationsGetAtResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsGetAtResourceOutput =
  typeof RemediationsGetAtResourceOutput.Type;

// The operation
/**
 * Gets an existing remediation at resource scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsGetAtResource = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemediationsGetAtResourceInput,
    outputSchema: RemediationsGetAtResourceOutput,
  }),
);
// Input Schema
export const RemediationsGetAtResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsGetAtResourceGroupInput =
  typeof RemediationsGetAtResourceGroupInput.Type;

// Output Schema
export const RemediationsGetAtResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsGetAtResourceGroupOutput =
  typeof RemediationsGetAtResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsGetAtResourceGroupInput,
    outputSchema: RemediationsGetAtResourceGroupOutput,
  }));
// Input Schema
export const RemediationsGetAtSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsGetAtSubscriptionInput =
  typeof RemediationsGetAtSubscriptionInput.Type;

// Output Schema
export const RemediationsGetAtSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsGetAtSubscriptionOutput =
  typeof RemediationsGetAtSubscriptionOutput.Type;

// The operation
/**
 * Gets an existing remediation at subscription scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param remediationName - The name of the remediation.
 */
export const RemediationsGetAtSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsGetAtSubscriptionInput,
    outputSchema: RemediationsGetAtSubscriptionOutput,
  }));
// Input Schema
export const RemediationsListDeploymentsAtManagementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RemediationsListDeploymentsAtManagementGroupInput =
  typeof RemediationsListDeploymentsAtManagementGroupInput.Type;

// Output Schema
export const RemediationsListDeploymentsAtManagementGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsListDeploymentsAtManagementGroupOutput =
  typeof RemediationsListDeploymentsAtManagementGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListDeploymentsAtManagementGroupInput,
    outputSchema: RemediationsListDeploymentsAtManagementGroupOutput,
  }));
// Input Schema
export const RemediationsListDeploymentsAtResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/listDeployments",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsListDeploymentsAtResourceInput =
  typeof RemediationsListDeploymentsAtResourceInput.Type;

// Output Schema
export const RemediationsListDeploymentsAtResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsListDeploymentsAtResourceOutput =
  typeof RemediationsListDeploymentsAtResourceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListDeploymentsAtResourceInput,
    outputSchema: RemediationsListDeploymentsAtResourceOutput,
  }));
// Input Schema
export const RemediationsListDeploymentsAtResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RemediationsListDeploymentsAtResourceGroupInput =
  typeof RemediationsListDeploymentsAtResourceGroupInput.Type;

// Output Schema
export const RemediationsListDeploymentsAtResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsListDeploymentsAtResourceGroupOutput =
  typeof RemediationsListDeploymentsAtResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListDeploymentsAtResourceGroupInput,
    outputSchema: RemediationsListDeploymentsAtResourceGroupOutput,
  }));
// Input Schema
export const RemediationsListDeploymentsAtSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    remediationName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations/{remediationName}/listDeployments",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsListDeploymentsAtSubscriptionInput =
  typeof RemediationsListDeploymentsAtSubscriptionInput.Type;

// Output Schema
export const RemediationsListDeploymentsAtSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsListDeploymentsAtSubscriptionOutput =
  typeof RemediationsListDeploymentsAtSubscriptionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListDeploymentsAtSubscriptionInput,
    outputSchema: RemediationsListDeploymentsAtSubscriptionOutput,
  }));
// Input Schema
export const RemediationsListForManagementGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RemediationsListForManagementGroupInput =
  typeof RemediationsListForManagementGroupInput.Type;

// Output Schema
export const RemediationsListForManagementGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsListForManagementGroupOutput =
  typeof RemediationsListForManagementGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListForManagementGroupInput,
    outputSchema: RemediationsListForManagementGroupOutput,
  }));
// Input Schema
export const RemediationsListForResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceId}/providers/Microsoft.PolicyInsights/remediations",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsListForResourceInput =
  typeof RemediationsListForResourceInput.Type;

// Output Schema
export const RemediationsListForResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsListForResourceOutput =
  typeof RemediationsListForResourceOutput.Type;

// The operation
/**
 * Gets all remediations for a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceId - Resource ID.
 * @param $top - Maximum number of records to return.
 * @param $filter - OData filter expression.
 */
export const RemediationsListForResource = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemediationsListForResourceInput,
    outputSchema: RemediationsListForResourceOutput,
  }),
);
// Input Schema
export const RemediationsListForResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RemediationsListForResourceGroupInput =
  typeof RemediationsListForResourceGroupInput.Type;

// Output Schema
export const RemediationsListForResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsListForResourceGroupOutput =
  typeof RemediationsListForResourceGroupOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListForResourceGroupInput,
    outputSchema: RemediationsListForResourceGroupOutput,
  }));
// Input Schema
export const RemediationsListForSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/remediations",
      apiVersion: "2024-10-01",
    }),
  );
export type RemediationsListForSubscriptionInput =
  typeof RemediationsListForSubscriptionInput.Type;

// Output Schema
export const RemediationsListForSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RemediationsListForSubscriptionOutput =
  typeof RemediationsListForSubscriptionOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RemediationsListForSubscriptionInput,
    outputSchema: RemediationsListForSubscriptionOutput,
  }));
