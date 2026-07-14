/**
 * Azure Machinelearningservices API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputNullableString,
  SensitiveOutputString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface BatchDeploymentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  deploymentName: string;
  properties: {
    codeConfiguration?: { codeId?: string | null; scoringScript: string };
    description?: string | null;
    environmentId?: string | null;
    environmentVariables?: Record<string, string | null> | null;
    properties?: Record<string, string | null> | null;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  kind?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const BatchDeploymentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      codeConfiguration: Schema.optional(
        Schema.Struct({
          codeId: Schema.optional(Schema.NullOr(Schema.String)),
          scoringScript: Schema.String,
        }),
      ),
      description: Schema.optional(Schema.NullOr(Schema.String)),
      environmentId: Schema.optional(Schema.NullOr(Schema.String)),
      environmentVariables: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}/deployments/{deploymentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BatchDeploymentsCreateOrUpdateInput>;

// Output Schema
export interface BatchDeploymentsCreateOrUpdateOutput {
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
export const BatchDeploymentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BatchDeploymentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates/updates a batch inference deployment (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Name for the Batch Endpoint.
 * @param deploymentName - The identifier for the Batch deployments.
 */
export const BatchDeploymentsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BatchDeploymentsCreateOrUpdateInput,
    outputSchema: BatchDeploymentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface BatchDeploymentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  deploymentName: string;
}
export const BatchDeploymentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}/deployments/{deploymentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BatchDeploymentsDeleteInput>;

// Output Schema
export type BatchDeploymentsDeleteOutput = void;
export const BatchDeploymentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BatchDeploymentsDeleteOutput>;

// The operation
/**
 * Delete Batch Inference deployment (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Name for the Batch Endpoint.
 * @param deploymentName - The identifier for the Batch deployments.
 */
export const BatchDeploymentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchDeploymentsDeleteInput,
  outputSchema: BatchDeploymentsDeleteOutput,
}));
// Input Schema
export interface BatchDeploymentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  deploymentName: string;
}
export const BatchDeploymentsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}/deployments/{deploymentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BatchDeploymentsGetInput>;

// Output Schema
export interface BatchDeploymentsGetOutput {
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
export const BatchDeploymentsGetOutput =
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
  }) as unknown as Schema.Codec<BatchDeploymentsGetOutput>;

// The operation
/**
 * Get batch inference deployment by id.
 *
 * Gets a batch inference deployment by id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Name for the Batch Endpoint.
 * @param deploymentName - The identifier for the Batch deployments.
 */
export const BatchDeploymentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchDeploymentsGetInput,
  outputSchema: BatchDeploymentsGetOutput,
}));
// Input Schema
export interface BatchDeploymentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  $orderBy?: string;
  $top?: number;
  $skip?: string;
}
export const BatchDeploymentsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    $orderBy: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}/deployments",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BatchDeploymentsListInput>;

// Output Schema
export interface BatchDeploymentsListOutput {
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
export const BatchDeploymentsListOutput =
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
  }) as unknown as Schema.Codec<BatchDeploymentsListOutput>;

// The operation
/**
 * Lists Batch inference deployments in the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Name for the Batch Endpoint.
 * @param $orderBy - Ordering of list.
 * @param $top - Top of list.
 * @param $skip - Continuation token for pagination.
 */
export const BatchDeploymentsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchDeploymentsListInput,
  outputSchema: BatchDeploymentsListOutput,
}));
// Input Schema
export interface BatchDeploymentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  deploymentName: string;
  properties?: { description?: string | null };
  tags?: Record<string, string | null>;
}
export const BatchDeploymentsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    tags: Schema.optional(
      Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}/deployments/{deploymentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BatchDeploymentsUpdateInput>;

// Output Schema
export interface BatchDeploymentsUpdateOutput {
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
export const BatchDeploymentsUpdateOutput =
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
  }) as unknown as Schema.Codec<BatchDeploymentsUpdateOutput>;

// The operation
/**
 * Update a batch inference deployment (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Name for the Batch Endpoint.
 * @param deploymentName - The identifier for the Batch deployments.
 */
export const BatchDeploymentsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchDeploymentsUpdateInput,
  outputSchema: BatchDeploymentsUpdateOutput,
}));
// Input Schema
export interface BatchEndpointsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  properties: {
    authMode: "AMLToken" | "Key" | "AADToken";
    description?: string | null;
    keys?: { primaryKey?: string | null; secondaryKey?: string | null };
    properties?: Record<string, string | null> | null;
    scoringUri?: string | null;
    swaggerUri?: string | null;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  kind?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const BatchEndpointsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      authMode: Schema.Literals(["AMLToken", "Key", "AADToken"]),
      description: Schema.optional(Schema.NullOr(Schema.String)),
      keys: Schema.optional(
        Schema.Struct({
          primaryKey: Schema.optional(Schema.NullOr(Schema.String)),
          secondaryKey: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      scoringUri: Schema.optional(Schema.NullOr(Schema.String)),
      swaggerUri: Schema.optional(Schema.NullOr(Schema.String)),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BatchEndpointsCreateOrUpdateInput>;

// Output Schema
export interface BatchEndpointsCreateOrUpdateOutput {
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
export const BatchEndpointsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BatchEndpointsCreateOrUpdateOutput>;

// The operation
/**
 * Create a batch inference endpoint (asynchronous).
 *
 * Creates a batch inference endpoint (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Name for the Batch Endpoint.
 */
export const BatchEndpointsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BatchEndpointsCreateOrUpdateInput,
    outputSchema: BatchEndpointsCreateOrUpdateOutput,
  }));
// Input Schema
export interface BatchEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
}
export const BatchEndpointsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BatchEndpointsDeleteInput>;

// Output Schema
export type BatchEndpointsDeleteOutput = void;
export const BatchEndpointsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BatchEndpointsDeleteOutput>;

// The operation
/**
 * Delete Batch Inference Endpoint (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Name for the Batch Endpoint.
 */
export const BatchEndpointsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchEndpointsDeleteInput,
  outputSchema: BatchEndpointsDeleteOutput,
}));
// Input Schema
export interface BatchEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
}
export const BatchEndpointsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<BatchEndpointsGetInput>;

// Output Schema
export interface BatchEndpointsGetOutput {
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
export const BatchEndpointsGetOutput =
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
  }) as unknown as Schema.Codec<BatchEndpointsGetOutput>;

// The operation
/**
 * Get batch inference endpoint by name.
 *
 * Gets a batch inference endpoint by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Name for the Batch Endpoint.
 */
export const BatchEndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchEndpointsGetInput,
  outputSchema: BatchEndpointsGetOutput,
}));
// Input Schema
export interface BatchEndpointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  count?: number;
  $skip?: string;
}
export const BatchEndpointsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    count: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BatchEndpointsListInput>;

// Output Schema
export interface BatchEndpointsListOutput {
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
export const BatchEndpointsListOutput =
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
  }) as unknown as Schema.Codec<BatchEndpointsListOutput>;

// The operation
/**
 * Lists Batch inference endpoint in the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param count - Number of endpoints to be retrieved in a page of results.
 * @param $skip - Continuation token for pagination.
 */
export const BatchEndpointsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchEndpointsListInput,
  outputSchema: BatchEndpointsListOutput,
}));
// Input Schema
export interface BatchEndpointsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
}
export const BatchEndpointsListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}/listkeys",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BatchEndpointsListKeysInput>;

// Output Schema
export interface BatchEndpointsListKeysOutput {
  primaryKey?: string | null;
  secondaryKey?: string | null;
}
export const BatchEndpointsListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.NullOr(Schema.String)),
    secondaryKey: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<BatchEndpointsListKeysOutput>;

// The operation
/**
 * Lists batch Inference Endpoint keys.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Name for the Batch Endpoint.
 */
export const BatchEndpointsListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchEndpointsListKeysInput,
  outputSchema: BatchEndpointsListKeysOutput,
}));
// Input Schema
export interface BatchEndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<string, unknown>;
  };
  tags?: Record<string, string | null>;
}
export const BatchEndpointsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
    tags: Schema.optional(
      Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/batchEndpoints/{endpointName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<BatchEndpointsUpdateInput>;

// Output Schema
export interface BatchEndpointsUpdateOutput {
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
export const BatchEndpointsUpdateOutput =
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
  }) as unknown as Schema.Codec<BatchEndpointsUpdateOutput>;

// The operation
/**
 * Update a batch inference endpoint (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Name for the Batch Endpoint.
 */
export const BatchEndpointsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchEndpointsUpdateInput,
  outputSchema: BatchEndpointsUpdateOutput,
}));
// Input Schema
export interface CapabilityHostsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const CapabilityHostsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/capabilityHosts/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<CapabilityHostsCreateOrUpdateInput>;

// Output Schema
export interface CapabilityHostsCreateOrUpdateOutput {
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
export const CapabilityHostsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CapabilityHostsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - CapabilityHost name.
 */
export const CapabilityHostsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CapabilityHostsCreateOrUpdateInput,
    outputSchema: CapabilityHostsCreateOrUpdateOutput,
  }));
// Input Schema
export interface CapabilityHostsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const CapabilityHostsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/capabilityHosts/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<CapabilityHostsDeleteInput>;

// Output Schema
export type CapabilityHostsDeleteOutput = void;
export const CapabilityHostsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CapabilityHostsDeleteOutput>;

// The operation
/**
 * Delete capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - CapabilityHost name.
 */
export const CapabilityHostsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CapabilityHostsDeleteInput,
  outputSchema: CapabilityHostsDeleteOutput,
}));
// Input Schema
export interface CapabilityHostsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const CapabilityHostsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/capabilityHosts/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<CapabilityHostsGetInput>;

// Output Schema
export interface CapabilityHostsGetOutput {
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
export const CapabilityHostsGetOutput =
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
  }) as unknown as Schema.Codec<CapabilityHostsGetOutput>;

// The operation
/**
 * Get capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - CapabilityHost name.
 */
export const CapabilityHostsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CapabilityHostsGetInput,
  outputSchema: CapabilityHostsGetOutput,
}));
// Input Schema
export interface CodeContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const CodeContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<CodeContainersCreateOrUpdateInput>;

// Output Schema
export interface CodeContainersCreateOrUpdateOutput {
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
export const CodeContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CodeContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 */
export const CodeContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CodeContainersCreateOrUpdateInput,
    outputSchema: CodeContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface CodeContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const CodeContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<CodeContainersDeleteInput>;

// Output Schema
export type CodeContainersDeleteOutput = void;
export const CodeContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CodeContainersDeleteOutput>;

// The operation
/**
 * Delete container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 */
export const CodeContainersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeContainersDeleteInput,
  outputSchema: CodeContainersDeleteOutput,
}));
// Input Schema
export interface CodeContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const CodeContainersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<CodeContainersGetInput>;

// Output Schema
export interface CodeContainersGetOutput {
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
export const CodeContainersGetOutput =
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
  }) as unknown as Schema.Codec<CodeContainersGetOutput>;

// The operation
/**
 * Get containers.
 *
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 */
export const CodeContainersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeContainersGetInput,
  outputSchema: CodeContainersGetOutput,
}));
// Input Schema
export interface CodeContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
}
export const CodeContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<CodeContainersListInput>;

// Output Schema
export interface CodeContainersListOutput {
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
export const CodeContainersListOutput =
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
  }) as unknown as Schema.Codec<CodeContainersListOutput>;

// The operation
/**
 * List containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param $skip - Continuation token for pagination.
 */
export const CodeContainersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeContainersListInput,
  outputSchema: CodeContainersListOutput,
}));
// Input Schema
export interface CodeVersionsCreateOrGetStartPendingUploadInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  pendingUploadId?: string | null;
  pendingUploadType?: "None" | "TemporaryBlobReference";
}
export const CodeVersionsCreateOrGetStartPendingUploadInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    pendingUploadId: Schema.optional(Schema.NullOr(Schema.String)),
    pendingUploadType: Schema.optional(
      Schema.Literals(["None", "TemporaryBlobReference"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}/versions/{version}/startPendingUpload",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<CodeVersionsCreateOrGetStartPendingUploadInput>;

// Output Schema
export interface CodeVersionsCreateOrGetStartPendingUploadOutput {
  blobReferenceForConsumption?: {
    blobUri?: string | null;
    credential?: { credentialType: "SAS" };
    storageAccountArmId?: string | null;
  };
  pendingUploadId?: string | null;
  pendingUploadType?: "None" | "TemporaryBlobReference";
}
export const CodeVersionsCreateOrGetStartPendingUploadOutput =
  /*@__PURE__*/ Schema.Struct({
    blobReferenceForConsumption: Schema.optional(
      Schema.Struct({
        blobUri: Schema.optional(Schema.NullOr(Schema.String)),
        credential: Schema.optional(
          Schema.Struct({
            credentialType: Schema.Literals(["SAS"]),
          }),
        ),
        storageAccountArmId: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    pendingUploadId: Schema.optional(Schema.NullOr(Schema.String)),
    pendingUploadType: Schema.optional(
      Schema.Literals(["None", "TemporaryBlobReference"]),
    ),
  }) as unknown as Schema.Codec<CodeVersionsCreateOrGetStartPendingUploadOutput>;

// The operation
/**
 * Generate a storage location and credential for the client to upload a code asset to.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const CodeVersionsCreateOrGetStartPendingUpload =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CodeVersionsCreateOrGetStartPendingUploadInput,
    outputSchema: CodeVersionsCreateOrGetStartPendingUploadOutput,
  }));
// Input Schema
export interface CodeVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const CodeVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<CodeVersionsCreateOrUpdateInput>;

// Output Schema
export interface CodeVersionsCreateOrUpdateOutput {
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
export const CodeVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CodeVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const CodeVersionsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeVersionsCreateOrUpdateInput,
  outputSchema: CodeVersionsCreateOrUpdateOutput,
}));
// Input Schema
export interface CodeVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const CodeVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<CodeVersionsDeleteInput>;

// Output Schema
export type CodeVersionsDeleteOutput = void;
export const CodeVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CodeVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const CodeVersionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeVersionsDeleteInput,
  outputSchema: CodeVersionsDeleteOutput,
}));
// Input Schema
export interface CodeVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const CodeVersionsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  version: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}/versions/{version}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<CodeVersionsGetInput>;

// Output Schema
export interface CodeVersionsGetOutput {
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
export const CodeVersionsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CodeVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const CodeVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeVersionsGetInput,
  outputSchema: CodeVersionsGetOutput,
}));
// Input Schema
export interface CodeVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  $orderBy?: string;
  $top?: number;
  $skip?: string;
  hash?: string;
  hashVersion?: string;
}
export const CodeVersionsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $orderBy: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $skip: Schema.optional(Schema.String),
  hash: Schema.optional(Schema.String),
  hashVersion: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}/versions",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<CodeVersionsListInput>;

// Output Schema
export interface CodeVersionsListOutput {
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
export const CodeVersionsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CodeVersionsListOutput>;

// The operation
/**
 * List versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param $orderBy - Ordering of list.
 * @param $top - Maximum number of records to return.
 * @param $skip - Continuation token for pagination.
 * @param hash - If specified, return CodeVersion assets with specified content hash value, regardless of name
 * @param hashVersion - Hash algorithm version when listing by hash
 */
export const CodeVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeVersionsListInput,
  outputSchema: CodeVersionsListOutput,
}));
// Input Schema
export interface CodeVersionsPublishInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  destinationName?: string | null;
  destinationVersion?: string | null;
  registryName?: string | null;
}
export const CodeVersionsPublishInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    destinationName: Schema.optional(Schema.NullOr(Schema.String)),
    destinationVersion: Schema.optional(Schema.NullOr(Schema.String)),
    registryName: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/codes/{name}/versions/{version}/publish",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<CodeVersionsPublishInput>;

// Output Schema
export type CodeVersionsPublishOutput = void;
export const CodeVersionsPublishOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CodeVersionsPublishOutput>;

// The operation
/**
 * Publish version asset into registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const CodeVersionsPublish = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeVersionsPublishInput,
  outputSchema: CodeVersionsPublishOutput,
}));
// Input Schema
export interface ComponentContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const ComponentContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ComponentContainersCreateOrUpdateInput>;

// Output Schema
export interface ComponentContainersCreateOrUpdateOutput {
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
export const ComponentContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ComponentContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 */
export const ComponentContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ComponentContainersCreateOrUpdateInput,
    outputSchema: ComponentContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface ComponentContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const ComponentContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ComponentContainersDeleteInput>;

// Output Schema
export type ComponentContainersDeleteOutput = void;
export const ComponentContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ComponentContainersDeleteOutput>;

// The operation
/**
 * Delete container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 */
export const ComponentContainersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComponentContainersDeleteInput,
  outputSchema: ComponentContainersDeleteOutput,
}));
// Input Schema
export interface ComponentContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const ComponentContainersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ComponentContainersGetInput>;

// Output Schema
export interface ComponentContainersGetOutput {
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
export const ComponentContainersGetOutput =
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
  }) as unknown as Schema.Codec<ComponentContainersGetOutput>;

// The operation
/**
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 */
export const ComponentContainersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComponentContainersGetInput,
  outputSchema: ComponentContainersGetOutput,
}));
// Input Schema
export interface ComponentContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const ComponentContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ComponentContainersListInput>;

// Output Schema
export interface ComponentContainersListOutput {
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
export const ComponentContainersListOutput =
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
  }) as unknown as Schema.Codec<ComponentContainersListOutput>;

// The operation
/**
 * List component containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param $skip - Continuation token for pagination.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const ComponentContainersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComponentContainersListInput,
  outputSchema: ComponentContainersListOutput,
}));
// Input Schema
export interface ComponentVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const ComponentVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ComponentVersionsCreateOrUpdateInput>;

// Output Schema
export interface ComponentVersionsCreateOrUpdateOutput {
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
export const ComponentVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ComponentVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const ComponentVersionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ComponentVersionsCreateOrUpdateInput,
    outputSchema: ComponentVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ComponentVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const ComponentVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ComponentVersionsDeleteInput>;

// Output Schema
export type ComponentVersionsDeleteOutput = void;
export const ComponentVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ComponentVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const ComponentVersionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComponentVersionsDeleteInput,
  outputSchema: ComponentVersionsDeleteOutput,
}));
// Input Schema
export interface ComponentVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const ComponentVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ComponentVersionsGetInput>;

// Output Schema
export interface ComponentVersionsGetOutput {
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
export const ComponentVersionsGetOutput =
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
  }) as unknown as Schema.Codec<ComponentVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const ComponentVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComponentVersionsGetInput,
  outputSchema: ComponentVersionsGetOutput,
}));
// Input Schema
export interface ComponentVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  $orderBy?: string;
  $top?: number;
  $skip?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const ComponentVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $orderBy: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ComponentVersionsListInput>;

// Output Schema
export interface ComponentVersionsListOutput {
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
export const ComponentVersionsListOutput =
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
  }) as unknown as Schema.Codec<ComponentVersionsListOutput>;

// The operation
/**
 * List component versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 * @param $orderBy - Ordering of list.
 * @param $top - Maximum number of records to return.
 * @param $skip - Continuation token for pagination.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const ComponentVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComponentVersionsListInput,
  outputSchema: ComponentVersionsListOutput,
}));
// Input Schema
export interface ComponentVersionsPublishInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  destinationName?: string | null;
  destinationVersion?: string | null;
  registryName?: string | null;
}
export const ComponentVersionsPublishInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    destinationName: Schema.optional(Schema.NullOr(Schema.String)),
    destinationVersion: Schema.optional(Schema.NullOr(Schema.String)),
    registryName: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}/versions/{version}/publish",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ComponentVersionsPublishInput>;

// Output Schema
export type ComponentVersionsPublishOutput = void;
export const ComponentVersionsPublishOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ComponentVersionsPublishOutput>;

// The operation
/**
 * Publish version asset into registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const ComponentVersionsPublish = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComponentVersionsPublishInput,
  outputSchema: ComponentVersionsPublishOutput,
}));
// Input Schema
export interface ComputeCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  computeName: string;
  properties?: {
    computeType:
      | "AKS"
      | "Kubernetes"
      | "AmlCompute"
      | "ComputeInstance"
      | "DataFactory"
      | "VirtualMachine"
      | "HDInsight"
      | "Databricks"
      | "DataLakeAnalytics"
      | "SynapseSpark";
    computeLocation?: string;
    provisioningState?:
      | "Unknown"
      | "Updating"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    description?: string | null;
    createdOn?: string;
    modifiedOn?: string;
    resourceId?: string | null;
    provisioningErrors?:
      | {
          error?: {
            code?: string;
            message?: string;
            target?: string;
            details?: unknown[];
            additionalInfo?: { type?: string; info?: unknown }[];
          };
        }[]
      | null;
    isAttachedCompute?: boolean;
    disableLocalAuth?: boolean;
  };
  location?: string;
  tags?: Record<string, string> | null;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
}
export const ComputeCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    computeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        computeType: Schema.Literals([
          "AKS",
          "Kubernetes",
          "AmlCompute",
          "ComputeInstance",
          "DataFactory",
          "VirtualMachine",
          "HDInsight",
          "Databricks",
          "DataLakeAnalytics",
          "SynapseSpark",
        ]),
        computeLocation: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Updating",
            "Creating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        createdOn: Schema.optional(Schema.String),
        modifiedOn: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.NullOr(Schema.String)),
        provisioningErrors: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Struct({
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
              }),
            ),
          ),
        ),
        isAttachedCompute: Schema.optional(Schema.Boolean),
        disableLocalAuth: Schema.optional(Schema.Boolean),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ComputeCreateOrUpdateInput>;

// Output Schema
export interface ComputeCreateOrUpdateOutput {
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
export const ComputeCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ComputeCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param computeName - Name of the Azure Machine Learning compute.
 */
export const ComputeCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComputeCreateOrUpdateInput,
  outputSchema: ComputeCreateOrUpdateOutput,
}));
// Input Schema
export interface ComputeDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  computeName: string;
  underlyingResourceAction: "Delete" | "Detach";
}
export const ComputeDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  computeName: Schema.String.pipe(T.PathParam()),
  underlyingResourceAction: Schema.Literals(["Delete", "Detach"]),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ComputeDeleteInput>;

// Output Schema
export type ComputeDeleteOutput = void;
export const ComputeDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ComputeDeleteOutput>;

// The operation
/**
 * Deletes specified Machine Learning compute.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param computeName - Name of the Azure Machine Learning compute.
 * @param underlyingResourceAction - Delete the underlying compute if 'Delete', or detach the underlying compute from workspace if 'Detach'.
 */
export const ComputeDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComputeDeleteInput,
  outputSchema: ComputeDeleteOutput,
}));
// Input Schema
export interface ComputeGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  computeName: string;
}
export const ComputeGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  computeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ComputeGetInput>;

// Output Schema
export interface ComputeGetOutput {
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
export const ComputeGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ComputeGetOutput>;

// The operation
/**
 * Gets compute definition by its name. Any secrets (storage keys, service credentials, etc) are not returned - use 'keys' nested resource to get them.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param computeName - Name of the Azure Machine Learning compute.
 */
export const ComputeGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComputeGetInput,
  outputSchema: ComputeGetOutput,
}));
// Input Schema
export interface ComputeListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
}
export const ComputeListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  $skip: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ComputeListInput>;

// Output Schema
export interface ComputeListOutput {
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
export const ComputeListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ComputeListOutput>;

// The operation
/**
 * Gets computes in specified workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param $skip - Continuation token for pagination.
 */
export const ComputeList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComputeListInput,
  outputSchema: ComputeListOutput,
}));
// Input Schema
export interface ComputeListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  computeName: string;
}
export const ComputeListKeysInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  computeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/listKeys",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ComputeListKeysInput>;

// Output Schema
export interface ComputeListKeysOutput {
  computeType:
    | "AKS"
    | "Kubernetes"
    | "AmlCompute"
    | "ComputeInstance"
    | "DataFactory"
    | "VirtualMachine"
    | "HDInsight"
    | "Databricks"
    | "DataLakeAnalytics"
    | "SynapseSpark";
}
export const ComputeListKeysOutput = /*@__PURE__*/ Schema.Struct({
  computeType: Schema.Literals([
    "AKS",
    "Kubernetes",
    "AmlCompute",
    "ComputeInstance",
    "DataFactory",
    "VirtualMachine",
    "HDInsight",
    "Databricks",
    "DataLakeAnalytics",
    "SynapseSpark",
  ]),
}) as unknown as Schema.Codec<ComputeListKeysOutput>;

// The operation
/**
 * Gets secrets related to Machine Learning compute (storage keys, service credentials, etc).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param computeName - Name of the Azure Machine Learning compute.
 */
export const ComputeListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComputeListKeysInput,
  outputSchema: ComputeListKeysOutput,
}));
// Input Schema
export interface ComputeListNodesInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  computeName: string;
}
export const ComputeListNodesInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  computeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/listNodes",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ComputeListNodesInput>;

// Output Schema
export interface ComputeListNodesOutput {
  nodes?: {
    nodeId?: string;
    privateIpAddress?: string | null;
    publicIpAddress?: string | null;
    port?: number;
    nodeState?:
      | "idle"
      | "running"
      | "preparing"
      | "unusable"
      | "leaving"
      | "preempted";
    runId?: string | null;
  }[];
  nextLink?: string;
}
export const ComputeListNodesOutput = /*@__PURE__*/ Schema.Struct({
  nodes: Schema.optional(
    Schema.Array(
      Schema.Struct({
        nodeId: Schema.optional(Schema.String),
        privateIpAddress: Schema.optional(Schema.NullOr(Schema.String)),
        publicIpAddress: Schema.optional(Schema.NullOr(Schema.String)),
        port: Schema.optional(Schema.Number),
        nodeState: Schema.optional(
          Schema.Literals([
            "idle",
            "running",
            "preparing",
            "unusable",
            "leaving",
            "preempted",
          ]),
        ),
        runId: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ComputeListNodesOutput>;

// The operation
/**
 * Get the details (e.g IP address, port etc) of all the compute nodes in the compute.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param computeName - Name of the Azure Machine Learning compute.
 */
export const ComputeListNodes = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComputeListNodesInput,
  outputSchema: ComputeListNodesOutput,
}));
// Input Schema
export interface ComputeRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  computeName: string;
}
export const ComputeRestartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  computeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/restart",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ComputeRestartInput>;

// Output Schema
export type ComputeRestartOutput = void;
export const ComputeRestartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ComputeRestartOutput>;

// The operation
/**
 * Posts a restart action to a compute instance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param computeName - Name of the Azure Machine Learning compute.
 */
export const ComputeRestart = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComputeRestartInput,
  outputSchema: ComputeRestartOutput,
}));
// Input Schema
export interface ComputeStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  computeName: string;
}
export const ComputeStartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  computeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/start",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ComputeStartInput>;

// Output Schema
export type ComputeStartOutput = void;
export const ComputeStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ComputeStartOutput>;

// The operation
/**
 * Posts a start action to a compute instance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param computeName - Name of the Azure Machine Learning compute.
 */
export const ComputeStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComputeStartInput,
  outputSchema: ComputeStartOutput,
}));
// Input Schema
export interface ComputeStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  computeName: string;
}
export const ComputeStopInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  computeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/stop",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ComputeStopInput>;

// Output Schema
export type ComputeStopOutput = void;
export const ComputeStopOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ComputeStopOutput>;

// The operation
/**
 * Posts a stop action to a compute instance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param computeName - Name of the Azure Machine Learning compute.
 */
export const ComputeStop = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComputeStopInput,
  outputSchema: ComputeStopOutput,
}));
// Input Schema
export interface ComputeUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  computeName: string;
  properties?: {
    properties?: {
      scaleSettings?: {
        maxNodeCount: number;
        minNodeCount?: number;
        nodeIdleTimeBeforeScaleDown?: string;
      };
    };
  };
}
export const ComputeUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  computeName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      properties: Schema.optional(
        Schema.Struct({
          scaleSettings: Schema.optional(
            Schema.Struct({
              maxNodeCount: Schema.Number,
              minNodeCount: Schema.optional(Schema.Number),
              nodeIdleTimeBeforeScaleDown: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ComputeUpdateInput>;

// Output Schema
export interface ComputeUpdateOutput {
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
export const ComputeUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ComputeUpdateOutput>;

// The operation
/**
 * Updates properties of a compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param computeName - Name of the Azure Machine Learning compute.
 */
export const ComputeUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ComputeUpdateInput,
  outputSchema: ComputeUpdateOutput,
}));
// Input Schema
export interface DataContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const DataContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DataContainersCreateOrUpdateInput>;

// Output Schema
export interface DataContainersCreateOrUpdateOutput {
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
export const DataContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 */
export const DataContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataContainersCreateOrUpdateInput,
    outputSchema: DataContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface DataContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const DataContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DataContainersDeleteInput>;

// Output Schema
export type DataContainersDeleteOutput = void;
export const DataContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataContainersDeleteOutput>;

// The operation
/**
 * Delete container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 */
export const DataContainersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataContainersDeleteInput,
  outputSchema: DataContainersDeleteOutput,
}));
// Input Schema
export interface DataContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const DataContainersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data/{name}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<DataContainersGetInput>;

// Output Schema
export interface DataContainersGetOutput {
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
export const DataContainersGetOutput =
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
  }) as unknown as Schema.Codec<DataContainersGetOutput>;

// The operation
/**
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 */
export const DataContainersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataContainersGetInput,
  outputSchema: DataContainersGetOutput,
}));
// Input Schema
export interface DataContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const DataContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DataContainersListInput>;

// Output Schema
export interface DataContainersListOutput {
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
export const DataContainersListOutput =
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
  }) as unknown as Schema.Codec<DataContainersListOutput>;

// The operation
/**
 * List data containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param $skip - Continuation token for pagination.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const DataContainersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataContainersListInput,
  outputSchema: DataContainersListOutput,
}));
// Input Schema
export interface DatastoresCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  skipValidation?: boolean;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const DatastoresCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    skipValidation: Schema.optional(Schema.Boolean),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DatastoresCreateOrUpdateInput>;

// Output Schema
export interface DatastoresCreateOrUpdateOutput {
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
export const DatastoresCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DatastoresCreateOrUpdateOutput>;

// The operation
/**
 * Create or update datastore.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Datastore name.
 * @param skipValidation - Flag to skip validation.
 */
export const DatastoresCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatastoresCreateOrUpdateInput,
  outputSchema: DatastoresCreateOrUpdateOutput,
}));
// Input Schema
export interface DatastoresDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const DatastoresDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores/{name}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<DatastoresDeleteInput>;

// Output Schema
export type DatastoresDeleteOutput = void;
export const DatastoresDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DatastoresDeleteOutput>;

// The operation
/**
 * Delete datastore.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Datastore name.
 */
export const DatastoresDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatastoresDeleteInput,
  outputSchema: DatastoresDeleteOutput,
}));
// Input Schema
export interface DatastoresGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const DatastoresGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores/{name}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<DatastoresGetInput>;

// Output Schema
export interface DatastoresGetOutput {
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
export const DatastoresGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DatastoresGetOutput>;

// The operation
/**
 * Get datastore.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Datastore name.
 */
export const DatastoresGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatastoresGetInput,
  outputSchema: DatastoresGetOutput,
}));
// Input Schema
export interface DatastoresListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
  count?: number;
  isDefault?: boolean;
  names?: string;
  searchText?: string;
  orderBy?: string;
  orderByAsc?: boolean;
}
export const DatastoresListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  $skip: Schema.optional(Schema.String),
  count: Schema.optional(Schema.Number),
  isDefault: Schema.optional(Schema.Boolean),
  names: Schema.optional(Schema.String),
  searchText: Schema.optional(Schema.String),
  orderBy: Schema.optional(Schema.String),
  orderByAsc: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<DatastoresListInput>;

// Output Schema
export interface DatastoresListOutput {
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
export const DatastoresListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DatastoresListOutput>;

// The operation
/**
 * List datastores.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param $skip - Continuation token for pagination.
 * @param count - Maximum number of results to return.
 * @param isDefault - Filter down to the workspace default datastore.
 * @param names - Names of datastores to return.
 * @param searchText - Text to search for in the datastore names.
 * @param orderBy - Order by property (createdtime | modifiedtime | name).
 * @param orderByAsc - Order by property in ascending order.
 */
export const DatastoresList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatastoresListInput,
  outputSchema: DatastoresListOutput,
}));
// Input Schema
export interface DatastoresListSecretsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  expirableSecret?: boolean;
  expireAfterHours?: number;
}
export const DatastoresListSecretsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    expirableSecret: Schema.optional(Schema.Boolean),
    expireAfterHours: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores/{name}/listSecrets",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DatastoresListSecretsInput>;

// Output Schema
export interface DatastoresListSecretsOutput {
  secretsType: "AccountKey" | "Certificate" | "Sas" | "ServicePrincipal";
}
export const DatastoresListSecretsOutput =
  /*@__PURE__*/ Schema.Struct({
    secretsType: Schema.Literals([
      "AccountKey",
      "Certificate",
      "Sas",
      "ServicePrincipal",
    ]),
  }) as unknown as Schema.Codec<DatastoresListSecretsOutput>;

// The operation
/**
 * Get datastore secrets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Datastore name.
 */
export const DatastoresListSecrets = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatastoresListSecretsInput,
  outputSchema: DatastoresListSecretsOutput,
}));
// Input Schema
export interface DataVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const DataVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DataVersionsCreateOrUpdateInput>;

// Output Schema
export interface DataVersionsCreateOrUpdateOutput {
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
export const DataVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const DataVersionsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataVersionsCreateOrUpdateInput,
  outputSchema: DataVersionsCreateOrUpdateOutput,
}));
// Input Schema
export interface DataVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const DataVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DataVersionsDeleteInput>;

// Output Schema
export type DataVersionsDeleteOutput = void;
export const DataVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const DataVersionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataVersionsDeleteInput,
  outputSchema: DataVersionsDeleteOutput,
}));
// Input Schema
export interface DataVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const DataVersionsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  version: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data/{name}/versions/{version}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<DataVersionsGetInput>;

// Output Schema
export interface DataVersionsGetOutput {
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
export const DataVersionsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DataVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const DataVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataVersionsGetInput,
  outputSchema: DataVersionsGetOutput,
}));
// Input Schema
export interface DataVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  $orderBy?: string;
  $top?: number;
  $skip?: string;
  $tags?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const DataVersionsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $orderBy: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $skip: Schema.optional(Schema.String),
  $tags: Schema.optional(Schema.String),
  listViewType: Schema.optional(
    Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
  ),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data/{name}/versions",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<DataVersionsListInput>;

// Output Schema
export interface DataVersionsListOutput {
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
export const DataVersionsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DataVersionsListOutput>;

// The operation
/**
 * List data versions in the data container
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 * @param $orderBy - Please choose OrderBy value from ['createdtime', 'modifiedtime']
 * @param $top - Top count of results, top count cannot be greater than the page size.
If topCount > page size, results with be default page size count will be returned
 * @param $skip - Continuation token for pagination.
 * @param $tags - Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
 * @param listViewType - [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All]View type for including/excluding (for example) archived entities.
 */
export const DataVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataVersionsListInput,
  outputSchema: DataVersionsListOutput,
}));
// Input Schema
export interface DataVersionsPublishInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  destinationName?: string | null;
  destinationVersion?: string | null;
  registryName?: string | null;
}
export const DataVersionsPublishInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    destinationName: Schema.optional(Schema.NullOr(Schema.String)),
    destinationVersion: Schema.optional(Schema.NullOr(Schema.String)),
    registryName: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/data/{name}/versions/{version}/publish",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DataVersionsPublishInput>;

// Output Schema
export type DataVersionsPublishOutput = void;
export const DataVersionsPublishOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataVersionsPublishOutput>;

// The operation
/**
 * Publish version asset into registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const DataVersionsPublish = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataVersionsPublishInput,
  outputSchema: DataVersionsPublishOutput,
}));
// Input Schema
export interface EnvironmentContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const EnvironmentContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentContainersCreateOrUpdateInput>;

// Output Schema
export interface EnvironmentContainersCreateOrUpdateOutput {
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
export const EnvironmentContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<EnvironmentContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 */
export const EnvironmentContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentContainersCreateOrUpdateInput,
    outputSchema: EnvironmentContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface EnvironmentContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const EnvironmentContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentContainersDeleteInput>;

// Output Schema
export type EnvironmentContainersDeleteOutput = void;
export const EnvironmentContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EnvironmentContainersDeleteOutput>;

// The operation
/**
 * Delete container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 */
export const EnvironmentContainersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentContainersDeleteInput,
  outputSchema: EnvironmentContainersDeleteOutput,
}));
// Input Schema
export interface EnvironmentContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const EnvironmentContainersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentContainersGetInput>;

// Output Schema
export interface EnvironmentContainersGetOutput {
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
export const EnvironmentContainersGetOutput =
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
  }) as unknown as Schema.Codec<EnvironmentContainersGetOutput>;

// The operation
/**
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 */
export const EnvironmentContainersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentContainersGetInput,
  outputSchema: EnvironmentContainersGetOutput,
}));
// Input Schema
export interface EnvironmentContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const EnvironmentContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentContainersListInput>;

// Output Schema
export interface EnvironmentContainersListOutput {
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
export const EnvironmentContainersListOutput =
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
  }) as unknown as Schema.Codec<EnvironmentContainersListOutput>;

// The operation
/**
 * List environment containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param $skip - Continuation token for pagination.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const EnvironmentContainersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentContainersListInput,
  outputSchema: EnvironmentContainersListOutput,
}));
// Input Schema
export interface EnvironmentVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const EnvironmentVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentVersionsCreateOrUpdateInput>;

// Output Schema
export interface EnvironmentVersionsCreateOrUpdateOutput {
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
export const EnvironmentVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<EnvironmentVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an EnvironmentVersion.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const EnvironmentVersionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentVersionsCreateOrUpdateInput,
    outputSchema: EnvironmentVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface EnvironmentVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const EnvironmentVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentVersionsDeleteInput>;

// Output Schema
export type EnvironmentVersionsDeleteOutput = void;
export const EnvironmentVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EnvironmentVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const EnvironmentVersionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentVersionsDeleteInput,
  outputSchema: EnvironmentVersionsDeleteOutput,
}));
// Input Schema
export interface EnvironmentVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const EnvironmentVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentVersionsGetInput>;

// Output Schema
export interface EnvironmentVersionsGetOutput {
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
export const EnvironmentVersionsGetOutput =
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
  }) as unknown as Schema.Codec<EnvironmentVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const EnvironmentVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentVersionsGetInput,
  outputSchema: EnvironmentVersionsGetOutput,
}));
// Input Schema
export interface EnvironmentVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  $orderBy?: string;
  $top?: number;
  $skip?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const EnvironmentVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $orderBy: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentVersionsListInput>;

// Output Schema
export interface EnvironmentVersionsListOutput {
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
export const EnvironmentVersionsListOutput =
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
  }) as unknown as Schema.Codec<EnvironmentVersionsListOutput>;

// The operation
/**
 * List versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param $orderBy - Ordering of list.
 * @param $top - Maximum number of records to return.
 * @param $skip - Continuation token for pagination.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const EnvironmentVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentVersionsListInput,
  outputSchema: EnvironmentVersionsListOutput,
}));
// Input Schema
export interface EnvironmentVersionsPublishInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  destinationName?: string | null;
  destinationVersion?: string | null;
  registryName?: string | null;
}
export const EnvironmentVersionsPublishInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    destinationName: Schema.optional(Schema.NullOr(Schema.String)),
    destinationVersion: Schema.optional(Schema.NullOr(Schema.String)),
    registryName: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/environments/{name}/versions/{version}/publish",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentVersionsPublishInput>;

// Output Schema
export type EnvironmentVersionsPublishOutput = void;
export const EnvironmentVersionsPublishOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EnvironmentVersionsPublishOutput>;

// The operation
/**
 * Publish version asset into registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const EnvironmentVersionsPublish = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentVersionsPublishInput,
  outputSchema: EnvironmentVersionsPublishOutput,
}));
// Input Schema
export interface FeaturesetContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const FeaturesetContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturesetContainersCreateOrUpdateInput>;

// Output Schema
export interface FeaturesetContainersCreateOrUpdateOutput {
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
export const FeaturesetContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FeaturesetContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 */
export const FeaturesetContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeaturesetContainersCreateOrUpdateInput,
    outputSchema: FeaturesetContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface FeaturesetContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const FeaturesetContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturesetContainersDeleteInput>;

// Output Schema
export type FeaturesetContainersDeleteOutput = void;
export const FeaturesetContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FeaturesetContainersDeleteOutput>;

// The operation
/**
 * Delete container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 */
export const FeaturesetContainersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FeaturesetContainersDeleteInput,
  outputSchema: FeaturesetContainersDeleteOutput,
}));
// Input Schema
export interface FeaturesetContainersGetEntityInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const FeaturesetContainersGetEntityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturesetContainersGetEntityInput>;

// Output Schema
export interface FeaturesetContainersGetEntityOutput {
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
export const FeaturesetContainersGetEntityOutput =
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
  }) as unknown as Schema.Codec<FeaturesetContainersGetEntityOutput>;

// The operation
/**
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 */
export const FeaturesetContainersGetEntity =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeaturesetContainersGetEntityInput,
    outputSchema: FeaturesetContainersGetEntityOutput,
  }));
// Input Schema
export interface FeaturesetContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
  tags?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
  pageSize?: number;
  name?: string;
  description?: string;
  createdBy?: string;
}
export const FeaturesetContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
    pageSize: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createdBy: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturesetContainersListInput>;

// Output Schema
export interface FeaturesetContainersListOutput {
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
export const FeaturesetContainersListOutput =
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
  }) as unknown as Schema.Codec<FeaturesetContainersListOutput>;

// The operation
/**
 * List featurestore entity containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param $skip - Continuation token for pagination.
 * @param tags - Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
 * @param listViewType - [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All]View type for including/excluding (for example) archived entities.
 * @param pageSize - page size
 * @param name - name for the featureset
 * @param description - description for the feature set
 * @param createdBy - createdBy user name
 */
export const FeaturesetContainersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FeaturesetContainersListInput,
  outputSchema: FeaturesetContainersListOutput,
}));
// Input Schema
export interface FeaturesetVersionsBackfillInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  dataAvailabilityStatus?: ("None" | "Pending" | "Incomplete" | "Complete")[];
  description?: string;
  displayName?: string;
  featureWindow?: {
    featureWindowEnd?: string | null;
    featureWindowStart?: string | null;
  };
  jobId?: string;
  properties?: Record<string, string | null>;
  resource?: { instanceType?: string | null };
  sparkConfiguration?: Record<string, string | null>;
  tags?: Record<string, string | null>;
}
export const FeaturesetVersionsBackfillInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    dataAvailabilityStatus: Schema.optional(
      Schema.Array(
        Schema.Literals(["None", "Pending", "Incomplete", "Complete"]),
      ),
    ),
    description: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    featureWindow: Schema.optional(
      Schema.Struct({
        featureWindowEnd: Schema.optional(Schema.NullOr(Schema.String)),
        featureWindowStart: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    jobId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
    ),
    resource: Schema.optional(
      Schema.Struct({
        instanceType: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    sparkConfiguration: Schema.optional(
      Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
    ),
    tags: Schema.optional(
      Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}/versions/{version}/backfill",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturesetVersionsBackfillInput>;

// Output Schema
export interface FeaturesetVersionsBackfillOutput {
  jobIds?: string[] | null;
}
export const FeaturesetVersionsBackfillOutput =
  /*@__PURE__*/ Schema.Struct({
    jobIds: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  }) as unknown as Schema.Codec<FeaturesetVersionsBackfillOutput>;

// The operation
/**
 * Backfill.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const FeaturesetVersionsBackfill = /*@__PURE__*/ API.make(() => ({
  inputSchema: FeaturesetVersionsBackfillInput,
  outputSchema: FeaturesetVersionsBackfillOutput,
}));
// Input Schema
export interface FeaturesetVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const FeaturesetVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturesetVersionsCreateOrUpdateInput>;

// Output Schema
export interface FeaturesetVersionsCreateOrUpdateOutput {
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
export const FeaturesetVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FeaturesetVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const FeaturesetVersionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeaturesetVersionsCreateOrUpdateInput,
    outputSchema: FeaturesetVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface FeaturesetVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const FeaturesetVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturesetVersionsDeleteInput>;

// Output Schema
export type FeaturesetVersionsDeleteOutput = void;
export const FeaturesetVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FeaturesetVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const FeaturesetVersionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FeaturesetVersionsDeleteInput,
  outputSchema: FeaturesetVersionsDeleteOutput,
}));
// Input Schema
export interface FeaturesetVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const FeaturesetVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturesetVersionsGetInput>;

// Output Schema
export interface FeaturesetVersionsGetOutput {
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
export const FeaturesetVersionsGetOutput =
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
  }) as unknown as Schema.Codec<FeaturesetVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const FeaturesetVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FeaturesetVersionsGetInput,
  outputSchema: FeaturesetVersionsGetOutput,
}));
// Input Schema
export interface FeaturesetVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  $skip?: string;
  tags?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
  pageSize?: number;
  versionName?: string;
  version?: string;
  description?: string;
  createdBy?: string;
  stage?: string;
}
export const FeaturesetVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
    pageSize: Schema.optional(Schema.Number),
    versionName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createdBy: Schema.optional(Schema.String),
    stage: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturesetVersionsListInput>;

// Output Schema
export interface FeaturesetVersionsListOutput {
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
export const FeaturesetVersionsListOutput =
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
  }) as unknown as Schema.Codec<FeaturesetVersionsListOutput>;

// The operation
/**
 * List versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 * @param $skip - Continuation token for pagination.
 * @param tags - Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
 * @param listViewType - [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All]View type for including/excluding (for example) archived entities.
 * @param pageSize - page size
 * @param versionName - name for the featureset version
 * @param version - featureset version
 * @param description - description for the feature set version
 * @param createdBy - createdBy user name
 * @param stage - Specifies the featurestore stage
 */
export const FeaturesetVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FeaturesetVersionsListInput,
  outputSchema: FeaturesetVersionsListOutput,
}));
// Input Schema
export interface FeaturesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  featuresetName: string;
  featuresetVersion: string;
  featureName: string;
}
export const FeaturesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  featuresetName: Schema.String.pipe(T.PathParam()),
  featuresetVersion: Schema.String.pipe(T.PathParam()),
  featureName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{featuresetName}/versions/{featuresetVersion}/features/{featureName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<FeaturesGetInput>;

// Output Schema
export interface FeaturesGetOutput {
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
export const FeaturesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FeaturesGetOutput>;

// The operation
/**
 * Get feature.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param featuresetName - Name of Azure Machine Learning featuresets.
 * @param featuresetVersion - Inference Version name.
 * @param featureName - Inference FeatureName name.
 */
export const FeaturesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FeaturesGetInput,
  outputSchema: FeaturesGetOutput,
}));
// Input Schema
export interface FeaturesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  featuresetName: string;
  featuresetVersion: string;
  $skip?: string;
  tags?: string;
  featureName?: string;
  description?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
  pageSize?: number;
}
export const FeaturesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  featuresetName: Schema.String.pipe(T.PathParam()),
  featuresetVersion: Schema.String.pipe(T.PathParam()),
  $skip: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.String),
  featureName: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  listViewType: Schema.optional(
    Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
  ),
  pageSize: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{featuresetName}/versions/{featuresetVersion}/features",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<FeaturesListInput>;

// Output Schema
export interface FeaturesListOutput {
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
export const FeaturesListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<FeaturesListOutput>;

// The operation
/**
 * List Features.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param featuresetName - Name of Azure Machine Learning featuresets.
 * @param featuresetVersion - Inference Version name.
 * @param $skip - Continuation token for pagination.
 * @param tags - Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
 * @param featureName - feature name.
 * @param description - Description of the featureset.
 * @param listViewType - [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All]View type for including/excluding (for example) archived entities.
 * @param pageSize - Page size.
 */
export const FeaturesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FeaturesListInput,
  outputSchema: FeaturesListOutput,
}));
// Input Schema
export interface FeaturestoreEntityContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const FeaturestoreEntityContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featurestoreEntities/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturestoreEntityContainersCreateOrUpdateInput>;

// Output Schema
export interface FeaturestoreEntityContainersCreateOrUpdateOutput {
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
export const FeaturestoreEntityContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FeaturestoreEntityContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 */
export const FeaturestoreEntityContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeaturestoreEntityContainersCreateOrUpdateInput,
    outputSchema: FeaturestoreEntityContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface FeaturestoreEntityContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const FeaturestoreEntityContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featurestoreEntities/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturestoreEntityContainersDeleteInput>;

// Output Schema
export type FeaturestoreEntityContainersDeleteOutput = void;
export const FeaturestoreEntityContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FeaturestoreEntityContainersDeleteOutput>;

// The operation
/**
 * Delete container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 */
export const FeaturestoreEntityContainersDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeaturestoreEntityContainersDeleteInput,
    outputSchema: FeaturestoreEntityContainersDeleteOutput,
  }));
// Input Schema
export interface FeaturestoreEntityContainersGetEntityInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const FeaturestoreEntityContainersGetEntityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featurestoreEntities/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturestoreEntityContainersGetEntityInput>;

// Output Schema
export interface FeaturestoreEntityContainersGetEntityOutput {
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
export const FeaturestoreEntityContainersGetEntityOutput =
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
  }) as unknown as Schema.Codec<FeaturestoreEntityContainersGetEntityOutput>;

// The operation
/**
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 */
export const FeaturestoreEntityContainersGetEntity =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeaturestoreEntityContainersGetEntityInput,
    outputSchema: FeaturestoreEntityContainersGetEntityOutput,
  }));
// Input Schema
export interface FeaturestoreEntityContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
  tags?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
  pageSize?: number;
  name?: string;
  description?: string;
  createdBy?: string;
}
export const FeaturestoreEntityContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
    pageSize: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createdBy: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featurestoreEntities",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturestoreEntityContainersListInput>;

// Output Schema
export interface FeaturestoreEntityContainersListOutput {
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
export const FeaturestoreEntityContainersListOutput =
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
  }) as unknown as Schema.Codec<FeaturestoreEntityContainersListOutput>;

// The operation
/**
 * List featurestore entity containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param $skip - Continuation token for pagination.
 * @param tags - Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
 * @param listViewType - [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All]View type for including/excluding (for example) archived entities.
 * @param pageSize - page size
 * @param name - name for the featurestore entity
 * @param description - description for the featurestore entity
 * @param createdBy - createdBy user name
 */
export const FeaturestoreEntityContainersList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeaturestoreEntityContainersListInput,
    outputSchema: FeaturestoreEntityContainersListOutput,
  }));
// Input Schema
export interface FeaturestoreEntityVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const FeaturestoreEntityVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featurestoreEntities/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturestoreEntityVersionsCreateOrUpdateInput>;

// Output Schema
export interface FeaturestoreEntityVersionsCreateOrUpdateOutput {
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
export const FeaturestoreEntityVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FeaturestoreEntityVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const FeaturestoreEntityVersionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeaturestoreEntityVersionsCreateOrUpdateInput,
    outputSchema: FeaturestoreEntityVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface FeaturestoreEntityVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const FeaturestoreEntityVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featurestoreEntities/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturestoreEntityVersionsDeleteInput>;

// Output Schema
export type FeaturestoreEntityVersionsDeleteOutput = void;
export const FeaturestoreEntityVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FeaturestoreEntityVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const FeaturestoreEntityVersionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeaturestoreEntityVersionsDeleteInput,
    outputSchema: FeaturestoreEntityVersionsDeleteOutput,
  }));
// Input Schema
export interface FeaturestoreEntityVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const FeaturestoreEntityVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featurestoreEntities/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturestoreEntityVersionsGetInput>;

// Output Schema
export interface FeaturestoreEntityVersionsGetOutput {
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
export const FeaturestoreEntityVersionsGetOutput =
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
  }) as unknown as Schema.Codec<FeaturestoreEntityVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const FeaturestoreEntityVersionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeaturestoreEntityVersionsGetInput,
    outputSchema: FeaturestoreEntityVersionsGetOutput,
  }));
// Input Schema
export interface FeaturestoreEntityVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  $skip?: string;
  tags?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
  pageSize?: number;
  versionName?: string;
  version?: string;
  description?: string;
  createdBy?: string;
  stage?: string;
}
export const FeaturestoreEntityVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
    pageSize: Schema.optional(Schema.Number),
    versionName: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    createdBy: Schema.optional(Schema.String),
    stage: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featurestoreEntities/{name}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<FeaturestoreEntityVersionsListInput>;

// Output Schema
export interface FeaturestoreEntityVersionsListOutput {
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
export const FeaturestoreEntityVersionsListOutput =
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
  }) as unknown as Schema.Codec<FeaturestoreEntityVersionsListOutput>;

// The operation
/**
 * List versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name. This is case-sensitive.
 * @param $skip - Continuation token for pagination.
 * @param tags - Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
 * @param listViewType - [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All]View type for including/excluding (for example) archived entities.
 * @param pageSize - page size
 * @param versionName - name for the featurestore entity version
 * @param version - featurestore entity version
 * @param description - description for the feature entity version
 * @param createdBy - createdBy user name
 * @param stage - Specifies the featurestore stage
 */
export const FeaturestoreEntityVersionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FeaturestoreEntityVersionsListInput,
    outputSchema: FeaturestoreEntityVersionsListOutput,
  }));
// Input Schema
export interface JobsCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  id: string;
}
export const JobsCancelInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/jobs/{id}/cancel",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<JobsCancelInput>;

// Output Schema
export type JobsCancelOutput = void;
export const JobsCancelOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<JobsCancelOutput>;

// The operation
/**
 * Cancels a Job (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param id - The name and identifier for the Job. This is case-sensitive.
 */
export const JobsCancel = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsCancelInput,
  outputSchema: JobsCancelOutput,
}));
// Input Schema
export interface JobsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  id: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const JobsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/jobs/{id}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<JobsCreateOrUpdateInput>;

// Output Schema
export interface JobsCreateOrUpdateOutput {
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
export const JobsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<JobsCreateOrUpdateOutput>;

// The operation
/**
 * Creates and executes a Job.
For update case, the Tags in the definition passed in will replace Tags in the existing job.
 *
 * Creates and executes a Job.
 * For update case, the Tags in the definition passed in will replace Tags in the existing job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param id - The name and identifier for the Job. This is case-sensitive.
 */
export const JobsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsCreateOrUpdateInput,
  outputSchema: JobsCreateOrUpdateOutput,
}));
// Input Schema
export interface JobsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  id: string;
}
export const JobsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/jobs/{id}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<JobsDeleteInput>;

// Output Schema
export type JobsDeleteOutput = void;
export const JobsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<JobsDeleteOutput>;

// The operation
/**
 * Deletes a Job (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param id - The name and identifier for the Job. This is case-sensitive.
 */
export const JobsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsDeleteInput,
  outputSchema: JobsDeleteOutput,
}));
// Input Schema
export interface JobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  id: string;
}
export const JobsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/jobs/{id}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<JobsGetInput>;

// Output Schema
export interface JobsGetOutput {
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
export const JobsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobsGetOutput>;

// The operation
/**
 * Gets a Job by name/id.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param id - The name and identifier for the Job. This is case-sensitive.
 */
export const JobsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsGetInput,
  outputSchema: JobsGetOutput,
}));
// Input Schema
export interface JobsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
  jobType?: string;
  tag?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
  properties?: string;
}
export const JobsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  $skip: Schema.optional(Schema.String),
  jobType: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  listViewType: Schema.optional(
    Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
  ),
  properties: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/jobs",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<JobsListInput>;

// Output Schema
export interface JobsListOutput {
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
export const JobsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<JobsListOutput>;

// The operation
/**
 * Lists Jobs in the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param $skip - Continuation token for pagination.
 * @param jobType - Type of job to be returned.
 * @param tag - Jobs returned will have this tag key.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 * @param properties - Comma-separated list of user property names (and optionally values). Example: prop1,prop2=value2
 */
export const JobsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: JobsListInput,
  outputSchema: JobsListOutput,
}));
// Input Schema
export interface ManagedNetworkProvisionsProvisionManagedNetworkInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  includeSpark?: boolean;
}
export const ManagedNetworkProvisionsProvisionManagedNetworkInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    includeSpark: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/provisionManagedNetwork",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ManagedNetworkProvisionsProvisionManagedNetworkInput>;

// Output Schema
export interface ManagedNetworkProvisionsProvisionManagedNetworkOutput {
  sparkReady?: boolean;
  status?: "Inactive" | "Active";
}
export const ManagedNetworkProvisionsProvisionManagedNetworkOutput =
  /*@__PURE__*/ Schema.Struct({
    sparkReady: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.Literals(["Inactive", "Active"])),
  }) as unknown as Schema.Codec<ManagedNetworkProvisionsProvisionManagedNetworkOutput>;

// The operation
/**
 * Provisions the managed network of a machine learning workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const ManagedNetworkProvisionsProvisionManagedNetwork =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedNetworkProvisionsProvisionManagedNetworkInput,
    outputSchema: ManagedNetworkProvisionsProvisionManagedNetworkOutput,
  }));
// Input Schema
export interface ManagedNetworkSettingsRuleCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleName: string;
  properties: {
    category?: "Required" | "Recommended" | "UserDefined" | "Dependency";
    status?: "Inactive" | "Active" | "Provisioning" | "Deleting" | "Failed";
    type: "FQDN" | "PrivateEndpoint" | "ServiceTag";
    errorInformation?: string;
    parentRuleNames?: string[];
  };
}
export const ManagedNetworkSettingsRuleCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      category: Schema.optional(
        Schema.Literals([
          "Required",
          "Recommended",
          "UserDefined",
          "Dependency",
        ]),
      ),
      status: Schema.optional(
        Schema.Literals([
          "Inactive",
          "Active",
          "Provisioning",
          "Deleting",
          "Failed",
        ]),
      ),
      type: Schema.Literals(["FQDN", "PrivateEndpoint", "ServiceTag"]),
      errorInformation: Schema.optional(Schema.String),
      parentRuleNames: Schema.optional(Schema.Array(Schema.String)),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/outboundRules/{ruleName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ManagedNetworkSettingsRuleCreateOrUpdateInput>;

// Output Schema
export interface ManagedNetworkSettingsRuleCreateOrUpdateOutput {
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
export const ManagedNetworkSettingsRuleCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedNetworkSettingsRuleCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an outbound rule in the managed network of a machine learning workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param ruleName - Name of the workspace managed network outbound rule
 */
export const ManagedNetworkSettingsRuleCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedNetworkSettingsRuleCreateOrUpdateInput,
    outputSchema: ManagedNetworkSettingsRuleCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManagedNetworkSettingsRuleDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleName: string;
}
export const ManagedNetworkSettingsRuleDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/outboundRules/{ruleName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ManagedNetworkSettingsRuleDeleteInput>;

// Output Schema
export type ManagedNetworkSettingsRuleDeleteOutput = void;
export const ManagedNetworkSettingsRuleDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedNetworkSettingsRuleDeleteOutput>;

// The operation
/**
 * Deletes an outbound rule from the managed network of a machine learning workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param ruleName - Name of the workspace managed network outbound rule
 */
export const ManagedNetworkSettingsRuleDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedNetworkSettingsRuleDeleteInput,
    outputSchema: ManagedNetworkSettingsRuleDeleteOutput,
  }));
// Input Schema
export interface ManagedNetworkSettingsRuleGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  ruleName: string;
}
export const ManagedNetworkSettingsRuleGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/outboundRules/{ruleName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ManagedNetworkSettingsRuleGetInput>;

// Output Schema
export interface ManagedNetworkSettingsRuleGetOutput {
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
export const ManagedNetworkSettingsRuleGetOutput =
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
  }) as unknown as Schema.Codec<ManagedNetworkSettingsRuleGetOutput>;

// The operation
/**
 * Gets an outbound rule from the managed network of a machine learning workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param ruleName - Name of the workspace managed network outbound rule
 */
export const ManagedNetworkSettingsRuleGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedNetworkSettingsRuleGetInput,
    outputSchema: ManagedNetworkSettingsRuleGetOutput,
  }));
// Input Schema
export interface ManagedNetworkSettingsRuleListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const ManagedNetworkSettingsRuleListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/outboundRules",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ManagedNetworkSettingsRuleListInput>;

// Output Schema
export interface ManagedNetworkSettingsRuleListOutput {
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
export const ManagedNetworkSettingsRuleListOutput =
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
  }) as unknown as Schema.Codec<ManagedNetworkSettingsRuleListOutput>;

// The operation
/**
 * Lists the managed network outbound rules for a machine learning workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const ManagedNetworkSettingsRuleList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedNetworkSettingsRuleListInput,
    outputSchema: ManagedNetworkSettingsRuleListOutput,
  }));
// Input Schema
export interface MarketplaceSubscriptionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties: {
    marketplacePlan?: {
      offerId?: string | null;
      planId?: string | null;
      publisherId?: string | null;
    };
    marketplaceSubscriptionStatus?: "Subscribed" | "Suspended" | "Unsubscribed";
    modelId: string;
    provisioningState?:
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Canceled";
  };
}
export const MarketplaceSubscriptionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      marketplacePlan: Schema.optional(
        Schema.Struct({
          offerId: Schema.optional(Schema.NullOr(Schema.String)),
          planId: Schema.optional(Schema.NullOr(Schema.String)),
          publisherId: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      marketplaceSubscriptionStatus: Schema.optional(
        Schema.Literals(["Subscribed", "Suspended", "Unsubscribed"]),
      ),
      modelId: Schema.String,
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Updating",
          "Canceled",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/marketplaceSubscriptions/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceSubscriptionsCreateOrUpdateInput>;

// Output Schema
export interface MarketplaceSubscriptionsCreateOrUpdateOutput {
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
export const MarketplaceSubscriptionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<MarketplaceSubscriptionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update Marketplace Subscription (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name.
 */
export const MarketplaceSubscriptionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceSubscriptionsCreateOrUpdateInput,
    outputSchema: MarketplaceSubscriptionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface MarketplaceSubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const MarketplaceSubscriptionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/marketplaceSubscriptions/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceSubscriptionsDeleteInput>;

// Output Schema
export type MarketplaceSubscriptionsDeleteOutput = void;
export const MarketplaceSubscriptionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MarketplaceSubscriptionsDeleteOutput>;

// The operation
/**
 * Delete Marketplace Subscription (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name.
 */
export const MarketplaceSubscriptionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceSubscriptionsDeleteInput,
    outputSchema: MarketplaceSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface MarketplaceSubscriptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const MarketplaceSubscriptionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/marketplaceSubscriptions/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceSubscriptionsGetInput>;

// Output Schema
export interface MarketplaceSubscriptionsGetOutput {
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
export const MarketplaceSubscriptionsGetOutput =
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
  }) as unknown as Schema.Codec<MarketplaceSubscriptionsGetOutput>;

// The operation
/**
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Container name.
 */
export const MarketplaceSubscriptionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: MarketplaceSubscriptionsGetInput,
  outputSchema: MarketplaceSubscriptionsGetOutput,
}));
// Input Schema
export interface MarketplaceSubscriptionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
}
export const MarketplaceSubscriptionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/marketplaceSubscriptions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceSubscriptionsListInput>;

// Output Schema
export interface MarketplaceSubscriptionsListOutput {
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
export const MarketplaceSubscriptionsListOutput =
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
  }) as unknown as Schema.Codec<MarketplaceSubscriptionsListOutput>;

// The operation
/**
 * List containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param $skip - Continuation token for pagination.
 */
export const MarketplaceSubscriptionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceSubscriptionsListInput,
    outputSchema: MarketplaceSubscriptionsListOutput,
  }));
// Input Schema
export interface ModelContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const ModelContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ModelContainersCreateOrUpdateInput>;

// Output Schema
export interface ModelContainersCreateOrUpdateOutput {
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
export const ModelContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ModelContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 */
export const ModelContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ModelContainersCreateOrUpdateInput,
    outputSchema: ModelContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface ModelContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const ModelContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ModelContainersDeleteInput>;

// Output Schema
export type ModelContainersDeleteOutput = void;
export const ModelContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ModelContainersDeleteOutput>;

// The operation
/**
 * Delete container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 */
export const ModelContainersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ModelContainersDeleteInput,
  outputSchema: ModelContainersDeleteOutput,
}));
// Input Schema
export interface ModelContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const ModelContainersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ModelContainersGetInput>;

// Output Schema
export interface ModelContainersGetOutput {
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
export const ModelContainersGetOutput =
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
  }) as unknown as Schema.Codec<ModelContainersGetOutput>;

// The operation
/**
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 */
export const ModelContainersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ModelContainersGetInput,
  outputSchema: ModelContainersGetOutput,
}));
// Input Schema
export interface ModelContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
  count?: number;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const ModelContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ModelContainersListInput>;

// Output Schema
export interface ModelContainersListOutput {
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
export const ModelContainersListOutput =
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
  }) as unknown as Schema.Codec<ModelContainersListOutput>;

// The operation
/**
 * List model containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param $skip - Continuation token for pagination.
 * @param count - Maximum number of results to return.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const ModelContainersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ModelContainersListInput,
  outputSchema: ModelContainersListOutput,
}));
// Input Schema
export interface ModelVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const ModelVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ModelVersionsCreateOrUpdateInput>;

// Output Schema
export interface ModelVersionsCreateOrUpdateOutput {
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
export const ModelVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ModelVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const ModelVersionsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ModelVersionsCreateOrUpdateInput,
  outputSchema: ModelVersionsCreateOrUpdateOutput,
}));
// Input Schema
export interface ModelVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const ModelVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ModelVersionsDeleteInput>;

// Output Schema
export type ModelVersionsDeleteOutput = void;
export const ModelVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ModelVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const ModelVersionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ModelVersionsDeleteInput,
  outputSchema: ModelVersionsDeleteOutput,
}));
// Input Schema
export interface ModelVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
}
export const ModelVersionsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  version: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}/versions/{version}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ModelVersionsGetInput>;

// Output Schema
export interface ModelVersionsGetOutput {
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
export const ModelVersionsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ModelVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const ModelVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ModelVersionsGetInput,
  outputSchema: ModelVersionsGetOutput,
}));
// Input Schema
export interface ModelVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  $skip?: string;
  $orderBy?: string;
  $top?: number;
  version?: string;
  description?: string;
  offset?: number;
  tags?: string;
  properties?: string;
  feed?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const ModelVersionsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $skip: Schema.optional(Schema.String),
  $orderBy: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  version: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  offset: Schema.optional(Schema.Number),
  tags: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.String),
  feed: Schema.optional(Schema.String),
  listViewType: Schema.optional(
    Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
  ),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}/versions",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ModelVersionsListInput>;

// Output Schema
export interface ModelVersionsListOutput {
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
export const ModelVersionsListOutput =
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
  }) as unknown as Schema.Codec<ModelVersionsListOutput>;

// The operation
/**
 * List model versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param $skip - Continuation token for pagination.
 * @param $orderBy - Ordering of list.
 * @param $top - Maximum number of records to return.
 * @param version - Model version.
 * @param description - Model description.
 * @param offset - Number of initial results to skip.
 * @param tags - Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
 * @param properties - Comma-separated list of property names (and optionally values). Example: prop1,prop2=value2
 * @param feed - Name of the feed.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const ModelVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ModelVersionsListInput,
  outputSchema: ModelVersionsListOutput,
}));
// Input Schema
export interface ModelVersionsPublishInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  version: string;
  destinationName?: string | null;
  destinationVersion?: string | null;
  registryName?: string | null;
}
export const ModelVersionsPublishInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    destinationName: Schema.optional(Schema.NullOr(Schema.String)),
    destinationVersion: Schema.optional(Schema.NullOr(Schema.String)),
    registryName: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}/versions/{version}/publish",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ModelVersionsPublishInput>;

// Output Schema
export type ModelVersionsPublishOutput = void;
export const ModelVersionsPublishOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ModelVersionsPublishOutput>;

// The operation
/**
 * Publish version asset into registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Name of Azure Machine Learning workspace.
 * @param name - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const ModelVersionsPublish = /*@__PURE__*/ API.make(() => ({
  inputSchema: ModelVersionsPublishInput,
  outputSchema: ModelVersionsPublishOutput,
}));
// Input Schema
export interface OnlineDeploymentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  deploymentName: string;
  properties: {
    codeConfiguration?: { codeId?: string | null; scoringScript: string };
    description?: string | null;
    environmentId?: string | null;
    environmentVariables?: Record<string, string | null> | null;
    properties?: Record<string, string | null> | null;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  kind?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const OnlineDeploymentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      codeConfiguration: Schema.optional(
        Schema.Struct({
          codeId: Schema.optional(Schema.NullOr(Schema.String)),
          scoringScript: Schema.String,
        }),
      ),
      description: Schema.optional(Schema.NullOr(Schema.String)),
      environmentId: Schema.optional(Schema.NullOr(Schema.String)),
      environmentVariables: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments/{deploymentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineDeploymentsCreateOrUpdateInput>;

// Output Schema
export interface OnlineDeploymentsCreateOrUpdateOutput {
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
export const OnlineDeploymentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<OnlineDeploymentsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update Inference Endpoint Deployment (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 * @param deploymentName - Inference Endpoint Deployment name.
 */
export const OnlineDeploymentsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OnlineDeploymentsCreateOrUpdateInput,
    outputSchema: OnlineDeploymentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface OnlineDeploymentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  deploymentName: string;
}
export const OnlineDeploymentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments/{deploymentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineDeploymentsDeleteInput>;

// Output Schema
export type OnlineDeploymentsDeleteOutput = void;
export const OnlineDeploymentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OnlineDeploymentsDeleteOutput>;

// The operation
/**
 * Delete Inference Endpoint Deployment (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 * @param deploymentName - Inference Endpoint Deployment name.
 */
export const OnlineDeploymentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineDeploymentsDeleteInput,
  outputSchema: OnlineDeploymentsDeleteOutput,
}));
// Input Schema
export interface OnlineDeploymentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  deploymentName: string;
}
export const OnlineDeploymentsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments/{deploymentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineDeploymentsGetInput>;

// Output Schema
export interface OnlineDeploymentsGetOutput {
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
export const OnlineDeploymentsGetOutput =
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
  }) as unknown as Schema.Codec<OnlineDeploymentsGetOutput>;

// The operation
/**
 * Get Inference Deployment Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 * @param deploymentName - Inference Endpoint Deployment name.
 */
export const OnlineDeploymentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineDeploymentsGetInput,
  outputSchema: OnlineDeploymentsGetOutput,
}));
// Input Schema
export interface OnlineDeploymentsGetLogsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  deploymentName: string;
  containerType?: "StorageInitializer" | "InferenceServer";
  tail?: number | null;
}
export const OnlineDeploymentsGetLogsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    containerType: Schema.optional(
      Schema.Literals(["StorageInitializer", "InferenceServer"]),
    ),
    tail: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments/{deploymentName}/getLogs",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineDeploymentsGetLogsInput>;

// Output Schema
export interface OnlineDeploymentsGetLogsOutput {
  content?: string | null;
}
export const OnlineDeploymentsGetLogsOutput =
  /*@__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<OnlineDeploymentsGetLogsOutput>;

// The operation
/**
 * Polls an Endpoint operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 * @param deploymentName - Inference Endpoint Deployment name.
 */
export const OnlineDeploymentsGetLogs = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineDeploymentsGetLogsInput,
  outputSchema: OnlineDeploymentsGetLogsOutput,
}));
// Input Schema
export interface OnlineDeploymentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  $orderBy?: string;
  $top?: number;
  $skip?: string;
}
export const OnlineDeploymentsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    $orderBy: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineDeploymentsListInput>;

// Output Schema
export interface OnlineDeploymentsListOutput {
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
export const OnlineDeploymentsListOutput =
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
  }) as unknown as Schema.Codec<OnlineDeploymentsListOutput>;

// The operation
/**
 * List Inference Endpoint Deployments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 * @param $orderBy - Ordering of list.
 * @param $top - Top of list.
 * @param $skip - Continuation token for pagination.
 */
export const OnlineDeploymentsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineDeploymentsListInput,
  outputSchema: OnlineDeploymentsListOutput,
}));
// Input Schema
export interface OnlineDeploymentsListSkusInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  deploymentName: string;
  count?: number;
  $skip?: string;
}
export const OnlineDeploymentsListSkusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    count: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments/{deploymentName}/skus",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineDeploymentsListSkusInput>;

// Output Schema
export interface OnlineDeploymentsListSkusOutput {
  value: {
    capacity?: {
      default?: number;
      maximum?: number;
      minimum?: number;
      scaleType?: "Automatic" | "Manual" | "None";
    };
    resourceType?: string | null;
    sku?: { name: string; tier?: "Free" | "Basic" | "Standard" | "Premium" };
  }[];
  nextLink?: string;
}
export const OnlineDeploymentsListSkusOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        capacity: Schema.optional(
          Schema.Struct({
            default: Schema.optional(Schema.Number),
            maximum: Schema.optional(Schema.Number),
            minimum: Schema.optional(Schema.Number),
            scaleType: Schema.optional(
              Schema.Literals(["Automatic", "Manual", "None"]),
            ),
          }),
        ),
        resourceType: Schema.optional(Schema.NullOr(Schema.String)),
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.String,
            tier: Schema.optional(
              Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OnlineDeploymentsListSkusOutput>;

// The operation
/**
 * List Inference Endpoint Deployment Skus.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 * @param deploymentName - Inference Endpoint Deployment name.
 * @param count - Number of Skus to be retrieved in a page of results.
 * @param $skip - Continuation token for pagination.
 */
export const OnlineDeploymentsListSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineDeploymentsListSkusInput,
  outputSchema: OnlineDeploymentsListSkusOutput,
}));
// Input Schema
export interface OnlineDeploymentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  deploymentName: string;
  sku?: {
    capacity?: number;
    family?: string;
    name?: string;
    size?: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
  };
  tags?: Record<string, string | null>;
}
export const OnlineDeploymentsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        capacity: Schema.optional(Schema.Number),
        family: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
      }),
    ),
    tags: Schema.optional(
      Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/deployments/{deploymentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineDeploymentsUpdateInput>;

// Output Schema
export interface OnlineDeploymentsUpdateOutput {
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
export const OnlineDeploymentsUpdateOutput =
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
  }) as unknown as Schema.Codec<OnlineDeploymentsUpdateOutput>;

// The operation
/**
 * Update Online Deployment (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 * @param deploymentName - Inference Endpoint Deployment name.
 */
export const OnlineDeploymentsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineDeploymentsUpdateInput,
  outputSchema: OnlineDeploymentsUpdateOutput,
}));
// Input Schema
export interface OnlineEndpointsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  properties: {
    authMode: "AMLToken" | "Key" | "AADToken";
    description?: string | null;
    keys?: { primaryKey?: string | null; secondaryKey?: string | null };
    properties?: Record<string, string | null> | null;
    scoringUri?: string | null;
    swaggerUri?: string | null;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  kind?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const OnlineEndpointsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      authMode: Schema.Literals(["AMLToken", "Key", "AADToken"]),
      description: Schema.optional(Schema.NullOr(Schema.String)),
      keys: Schema.optional(
        Schema.Struct({
          primaryKey: Schema.optional(Schema.NullOr(Schema.String)),
          secondaryKey: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      scoringUri: Schema.optional(Schema.NullOr(Schema.String)),
      swaggerUri: Schema.optional(Schema.NullOr(Schema.String)),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineEndpointsCreateOrUpdateInput>;

// Output Schema
export interface OnlineEndpointsCreateOrUpdateOutput {
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
export const OnlineEndpointsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<OnlineEndpointsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update Online Endpoint (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 */
export const OnlineEndpointsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OnlineEndpointsCreateOrUpdateInput,
    outputSchema: OnlineEndpointsCreateOrUpdateOutput,
  }));
// Input Schema
export interface OnlineEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
}
export const OnlineEndpointsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineEndpointsDeleteInput>;

// Output Schema
export type OnlineEndpointsDeleteOutput = void;
export const OnlineEndpointsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OnlineEndpointsDeleteOutput>;

// The operation
/**
 * Delete Online Endpoint (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 */
export const OnlineEndpointsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineEndpointsDeleteInput,
  outputSchema: OnlineEndpointsDeleteOutput,
}));
// Input Schema
export interface OnlineEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
}
export const OnlineEndpointsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineEndpointsGetInput>;

// Output Schema
export interface OnlineEndpointsGetOutput {
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
export const OnlineEndpointsGetOutput =
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
  }) as unknown as Schema.Codec<OnlineEndpointsGetOutput>;

// The operation
/**
 * Get Online Endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 */
export const OnlineEndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineEndpointsGetInput,
  outputSchema: OnlineEndpointsGetOutput,
}));
// Input Schema
export interface OnlineEndpointsGetTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
}
export const OnlineEndpointsGetTokenInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/token",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineEndpointsGetTokenInput>;

// Output Schema
export interface OnlineEndpointsGetTokenOutput {
  accessToken?: Redacted.Redacted<string> | null;
  expiryTimeUtc?: number;
  refreshAfterTimeUtc?: number;
  tokenType?: string | null;
}
export const OnlineEndpointsGetTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(SensitiveOutputNullableString),
    expiryTimeUtc: Schema.optional(Schema.Number),
    refreshAfterTimeUtc: Schema.optional(Schema.Number),
    tokenType: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<OnlineEndpointsGetTokenOutput>;

// The operation
/**
 * Retrieve a valid AML token for an Endpoint using AMLToken-based authentication.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 */
export const OnlineEndpointsGetToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineEndpointsGetTokenInput,
  outputSchema: OnlineEndpointsGetTokenOutput,
}));
// Input Schema
export interface OnlineEndpointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name?: string;
  count?: number;
  computeType?: "Managed" | "Kubernetes" | "AzureMLCompute";
  $skip?: string;
  tags?: string;
  properties?: string;
  orderBy?: "CreatedAtDesc" | "CreatedAtAsc" | "UpdatedAtDesc" | "UpdatedAtAsc";
}
export const OnlineEndpointsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
    computeType: Schema.optional(
      Schema.Literals(["Managed", "Kubernetes", "AzureMLCompute"]),
    ),
    $skip: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.String),
    orderBy: Schema.optional(
      Schema.Literals([
        "CreatedAtDesc",
        "CreatedAtAsc",
        "UpdatedAtDesc",
        "UpdatedAtAsc",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineEndpointsListInput>;

// Output Schema
export interface OnlineEndpointsListOutput {
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
export const OnlineEndpointsListOutput =
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
  }) as unknown as Schema.Codec<OnlineEndpointsListOutput>;

// The operation
/**
 * List Online Endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Name of the endpoint.
 * @param count - Number of endpoints to be retrieved in a page of results.
 * @param computeType - EndpointComputeType to be filtered by.
 * @param $skip - Continuation token for pagination.
 * @param tags - A set of tags with which to filter the returned models. It is a comma separated string of tags key or tags key=value. Example: tagKey1,tagKey2,tagKey3=value3 .
 * @param properties - A set of properties with which to filter the returned models. It is a comma separated string of properties key and/or properties key=value Example: propKey1,propKey2,propKey3=value3 .
 * @param orderBy - The option to order the response.
 */
export const OnlineEndpointsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineEndpointsListInput,
  outputSchema: OnlineEndpointsListOutput,
}));
// Input Schema
export interface OnlineEndpointsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
}
export const OnlineEndpointsListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/listKeys",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineEndpointsListKeysInput>;

// Output Schema
export interface OnlineEndpointsListKeysOutput {
  primaryKey?: string | null;
  secondaryKey?: string | null;
}
export const OnlineEndpointsListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.NullOr(Schema.String)),
    secondaryKey: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<OnlineEndpointsListKeysOutput>;

// The operation
/**
 * List EndpointAuthKeys for an Endpoint using Key-based authentication.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 */
export const OnlineEndpointsListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineEndpointsListKeysInput,
  outputSchema: OnlineEndpointsListKeysOutput,
}));
// Input Schema
export interface OnlineEndpointsRegenerateKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  keyType: "Primary" | "Secondary";
  keyValue?: string | null;
}
export const OnlineEndpointsRegenerateKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.Literals(["Primary", "Secondary"]),
    keyValue: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}/regenerateKeys",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineEndpointsRegenerateKeysInput>;

// Output Schema
export type OnlineEndpointsRegenerateKeysOutput = void;
export const OnlineEndpointsRegenerateKeysOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OnlineEndpointsRegenerateKeysOutput>;

// The operation
/**
 * Regenerate EndpointAuthKeys for an Endpoint using Key-based authentication (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 */
export const OnlineEndpointsRegenerateKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OnlineEndpointsRegenerateKeysInput,
    outputSchema: OnlineEndpointsRegenerateKeysOutput,
  }));
// Input Schema
export interface OnlineEndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  endpointName: string;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<string, unknown>;
  };
  tags?: Record<string, string | null>;
}
export const OnlineEndpointsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
    tags: Schema.optional(
      Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/onlineEndpoints/{endpointName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<OnlineEndpointsUpdateInput>;

// Output Schema
export interface OnlineEndpointsUpdateOutput {
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
export const OnlineEndpointsUpdateOutput =
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
  }) as unknown as Schema.Codec<OnlineEndpointsUpdateOutput>;

// The operation
/**
 * Update Online Endpoint (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param endpointName - Online Endpoint name.
 */
export const OnlineEndpointsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: OnlineEndpointsUpdateInput,
  outputSchema: OnlineEndpointsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.MachineLearningServices/operations",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: "user" | "system" | "user,system";
    actionType?: "Internal";
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
        origin: Schema.optional(
          Schema.Literals(["user", "system", "user,system"]),
        ),
        actionType: Schema.optional(Schema.Literals(["Internal"])),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Azure Machine Learning Workspaces REST API operations
 *
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string; subnetArmId?: string };
    privateLinkServiceConnectionState?: {
      actionsRequired?: string;
      description?: string;
      status?: "Approved" | "Pending" | "Rejected" | "Disconnected" | "Timeout";
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  location?: string;
  tags?: Record<string, string>;
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            subnetArmId: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            actionsRequired: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            status: Schema.optional(
              Schema.Literals([
                "Approved",
                "Pending",
                "Rejected",
                "Disconnected",
                "Timeout",
              ]),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOrUpdateOutput {
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
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Called by end-users to approve or reject a PE connection.
This method must validate and forward the call to NRP.
 *
 * Called by end-users to approve or reject a PE connection.
 * This method must validate and forward the call to NRP.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param privateEndpointConnectionName - NRP Private Endpoint Connection Name
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Called by end-users to delete a PE connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param privateEndpointConnectionName - NRP Private Endpoint Connection Name
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
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
export const PrivateEndpointConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Called by end-users to get a PE connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param privateEndpointConnectionName - NRP Private Endpoint Connection Name
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateEndpointConnections",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
  value?: {
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
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
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
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * Called by end-users to get all PE connections.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateLinkResources",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListInput>;

// Output Schema
export interface PrivateLinkResourcesListOutput {
  value?: {
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
export const PrivateLinkResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
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
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesListOutput>;

// The operation
/**
 * Called by Client (Portal, CLI, etc) to get available "private link resources" for the workspace.
Each "private link resource" is a connection endpoint (IP address) to the resource.
Pre single connection endpoint per workspace: the Data Plane IP address, returned by DNS resolution.
Other RPs, such as Azure Storage, have multiple - one for Blobs, other for Queues, etc.
Defined in the "[NRP] Private Endpoint Design" doc, topic "GET API for GroupIds".
 *
 * Called by Client (Portal, CLI, etc) to get available "private link resources" for the workspace.
 * Each "private link resource" is a connection endpoint (IP address) to the resource.
 * Pre single connection endpoint per workspace: the Data Plane IP address, returned by DNS resolution.
 * Other RPs, such as Azure Storage, have multiple - one for Blobs, other for Queues, etc.
 * Defined in the "[NRP] Private Endpoint Design" doc, topic "GET API for GroupIds".
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesListInput,
  outputSchema: PrivateLinkResourcesListOutput,
}));
// Input Schema
export interface QuotasListInput {
  subscriptionId: string;
  location: string;
}
export const QuotasListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/locations/{location}/quotas",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<QuotasListInput>;

// Output Schema
export interface QuotasListOutput {
  value: {
    id?: string;
    amlWorkspaceLocation?: string;
    type?: string;
    name?: { value?: string; localizedValue?: string };
    limit?: number;
    unit?: "Count";
  }[];
  nextLink?: string;
}
export const QuotasListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      amlWorkspaceLocation: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      name: Schema.optional(
        Schema.Struct({
          value: Schema.optional(Schema.String),
          localizedValue: Schema.optional(Schema.String),
        }),
      ),
      limit: Schema.optional(Schema.Number),
      unit: Schema.optional(Schema.Literals(["Count"])),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<QuotasListOutput>;

// The operation
/**
 * Gets the currently assigned Workspace Quotas based on VMFamily.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location name.
 */
export const QuotasList = /*@__PURE__*/ API.make(() => ({
  inputSchema: QuotasListInput,
  outputSchema: QuotasListOutput,
}));
// Input Schema
export interface QuotasUpdateInput {
  subscriptionId: string;
  location: string;
  value?: { id?: string; type?: string; limit?: number; unit?: "Count" }[];
}
export const QuotasUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        limit: Schema.optional(Schema.Number),
        unit: Schema.optional(Schema.Literals(["Count"])),
      }),
    ),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/locations/{location}/updateQuotas",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<QuotasUpdateInput>;

// Output Schema
export interface QuotasUpdateOutput {
  value?: {
    id?: string;
    type?: string;
    limit?: number;
    unit?: "Count";
    status?:
      | "Undefined"
      | "Success"
      | "Failure"
      | "InvalidQuotaBelowClusterMinimum"
      | "InvalidQuotaExceedsSubscriptionLimit"
      | "InvalidVMFamilyName"
      | "OperationNotSupportedForSku"
      | "OperationNotEnabledForRegion";
  }[];
  nextLink?: string;
}
export const QuotasUpdateOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        limit: Schema.optional(Schema.Number),
        unit: Schema.optional(Schema.Literals(["Count"])),
        status: Schema.optional(
          Schema.Literals([
            "Undefined",
            "Success",
            "Failure",
            "InvalidQuotaBelowClusterMinimum",
            "InvalidQuotaExceedsSubscriptionLimit",
            "InvalidVMFamilyName",
            "OperationNotSupportedForSku",
            "OperationNotEnabledForRegion",
          ]),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<QuotasUpdateOutput>;

// The operation
/**
 * Update quota for each VM family in workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location name.
 */
export const QuotasUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: QuotasUpdateInput,
  outputSchema: QuotasUpdateOutput,
}));
// Input Schema
export interface RegistriesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  properties: {
    discoveryUrl?: string | null;
    intellectualPropertyPublisher?: string | null;
    managedResourceGroup?: { resourceId?: string | null };
    managedResourceGroupSettings?: {
      assignedIdentities?: { principalId?: string }[] | null;
    };
    mlFlowRegistryUri?: string | null;
    registryPrivateEndpointConnections?:
      | {
          id?: string | null;
          location?: string | null;
          properties?: {
            groupIds?: string[] | null;
            privateEndpoint?: { id?: string };
            registryPrivateLinkServiceConnectionState?: {
              actionsRequired?: string | null;
              description?: string | null;
              status?:
                | "Approved"
                | "Pending"
                | "Rejected"
                | "Disconnected"
                | "Timeout";
            };
            provisioningState?: string | null;
          };
        }[]
      | null;
    publicNetworkAccess?: string | null;
    regionDetails?:
      | {
          acrDetails?:
            | {
                systemCreatedAcrAccount?: {
                  acrAccountName?: string | null;
                  acrAccountSku?: string | null;
                  armResourceId?: { resourceId?: string | null };
                };
              }[]
            | null;
          location?: string | null;
          storageAccountDetails?:
            | {
                systemCreatedStorageAccount?: {
                  allowBlobPublicAccess?: boolean;
                  armResourceId?: { resourceId?: string | null };
                  storageAccountHnsEnabled?: boolean;
                  storageAccountName?: string | null;
                  storageAccountType?: string | null;
                };
              }[]
            | null;
        }[]
      | null;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  kind?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const RegistriesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      discoveryUrl: Schema.optional(Schema.NullOr(Schema.String)),
      intellectualPropertyPublisher: Schema.optional(
        Schema.NullOr(Schema.String),
      ),
      managedResourceGroup: Schema.optional(
        Schema.Struct({
          resourceId: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      managedResourceGroupSettings: Schema.optional(
        Schema.Struct({
          assignedIdentities: Schema.optional(
            Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  principalId: Schema.optional(Schema.String),
                }),
              ),
            ),
          ),
        }),
      ),
      mlFlowRegistryUri: Schema.optional(Schema.NullOr(Schema.String)),
      registryPrivateEndpointConnections: Schema.optional(
        Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.NullOr(Schema.String)),
              location: Schema.optional(Schema.NullOr(Schema.String)),
              properties: Schema.optional(
                Schema.Struct({
                  groupIds: Schema.optional(
                    Schema.NullOr(Schema.Array(Schema.String)),
                  ),
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  registryPrivateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      actionsRequired: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      description: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      status: Schema.optional(
                        Schema.Literals([
                          "Approved",
                          "Pending",
                          "Rejected",
                          "Disconnected",
                          "Timeout",
                        ]),
                      ),
                    }),
                  ),
                  provisioningState: Schema.optional(
                    Schema.NullOr(Schema.String),
                  ),
                }),
              ),
            }),
          ),
        ),
      ),
      publicNetworkAccess: Schema.optional(Schema.NullOr(Schema.String)),
      regionDetails: Schema.optional(
        Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              acrDetails: Schema.optional(
                Schema.NullOr(
                  Schema.Array(
                    Schema.Struct({
                      systemCreatedAcrAccount: Schema.optional(
                        Schema.Struct({
                          acrAccountName: Schema.optional(
                            Schema.NullOr(Schema.String),
                          ),
                          acrAccountSku: Schema.optional(
                            Schema.NullOr(Schema.String),
                          ),
                          armResourceId: Schema.optional(
                            Schema.Struct({
                              resourceId: Schema.optional(
                                Schema.NullOr(Schema.String),
                              ),
                            }),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              ),
              location: Schema.optional(Schema.NullOr(Schema.String)),
              storageAccountDetails: Schema.optional(
                Schema.NullOr(
                  Schema.Array(
                    Schema.Struct({
                      systemCreatedStorageAccount: Schema.optional(
                        Schema.Struct({
                          allowBlobPublicAccess: Schema.optional(
                            Schema.Boolean,
                          ),
                          armResourceId: Schema.optional(
                            Schema.Struct({
                              resourceId: Schema.optional(
                                Schema.NullOr(Schema.String),
                              ),
                            }),
                          ),
                          storageAccountHnsEnabled: Schema.optional(
                            Schema.Boolean,
                          ),
                          storageAccountName: Schema.optional(
                            Schema.NullOr(Schema.String),
                          ),
                          storageAccountType: Schema.optional(
                            Schema.NullOr(Schema.String),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              ),
            }),
          ),
        ),
      ),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistriesCreateOrUpdateInput>;

// Output Schema
export interface RegistriesCreateOrUpdateOutput {
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
export const RegistriesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistriesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update registry
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 */
export const RegistriesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistriesCreateOrUpdateInput,
  outputSchema: RegistriesCreateOrUpdateOutput,
}));
// Input Schema
export interface RegistriesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const RegistriesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<RegistriesDeleteInput>;

// Output Schema
export type RegistriesDeleteOutput = void;
export const RegistriesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistriesDeleteOutput>;

// The operation
/**
 * Delete registry
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 */
export const RegistriesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistriesDeleteInput,
  outputSchema: RegistriesDeleteOutput,
}));
// Input Schema
export interface RegistriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
}
export const RegistriesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<RegistriesGetInput>;

// Output Schema
export interface RegistriesGetOutput {
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
export const RegistriesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RegistriesGetOutput>;

// The operation
/**
 * Get registry
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 */
export const RegistriesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistriesGetInput,
  outputSchema: RegistriesGetOutput,
}));
// Input Schema
export interface RegistriesListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const RegistriesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<RegistriesListInput>;

// Output Schema
export interface RegistriesListOutput {
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
export const RegistriesListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<RegistriesListOutput>;

// The operation
/**
 * List registries
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const RegistriesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistriesListInput,
  outputSchema: RegistriesListOutput,
}));
// Input Schema
export interface RegistriesListBySubscriptionInput {
  subscriptionId: string;
}
export const RegistriesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/registries",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistriesListBySubscriptionInput>;

// Output Schema
export interface RegistriesListBySubscriptionOutput {
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
export const RegistriesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<RegistriesListBySubscriptionOutput>;

// The operation
/**
 * List registries by subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RegistriesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistriesListBySubscriptionInput,
    outputSchema: RegistriesListBySubscriptionOutput,
  }));
// Input Schema
export interface RegistriesRemoveRegionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  properties: {
    discoveryUrl?: string | null;
    intellectualPropertyPublisher?: string | null;
    managedResourceGroup?: { resourceId?: string | null };
    managedResourceGroupSettings?: {
      assignedIdentities?: { principalId?: string }[] | null;
    };
    mlFlowRegistryUri?: string | null;
    registryPrivateEndpointConnections?:
      | {
          id?: string | null;
          location?: string | null;
          properties?: {
            groupIds?: string[] | null;
            privateEndpoint?: { id?: string };
            registryPrivateLinkServiceConnectionState?: {
              actionsRequired?: string | null;
              description?: string | null;
              status?:
                | "Approved"
                | "Pending"
                | "Rejected"
                | "Disconnected"
                | "Timeout";
            };
            provisioningState?: string | null;
          };
        }[]
      | null;
    publicNetworkAccess?: string | null;
    regionDetails?:
      | {
          acrDetails?:
            | {
                systemCreatedAcrAccount?: {
                  acrAccountName?: string | null;
                  acrAccountSku?: string | null;
                  armResourceId?: { resourceId?: string | null };
                };
              }[]
            | null;
          location?: string | null;
          storageAccountDetails?:
            | {
                systemCreatedStorageAccount?: {
                  allowBlobPublicAccess?: boolean;
                  armResourceId?: { resourceId?: string | null };
                  storageAccountHnsEnabled?: boolean;
                  storageAccountName?: string | null;
                  storageAccountType?: string | null;
                };
              }[]
            | null;
        }[]
      | null;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  kind?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const RegistriesRemoveRegionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      discoveryUrl: Schema.optional(Schema.NullOr(Schema.String)),
      intellectualPropertyPublisher: Schema.optional(
        Schema.NullOr(Schema.String),
      ),
      managedResourceGroup: Schema.optional(
        Schema.Struct({
          resourceId: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      managedResourceGroupSettings: Schema.optional(
        Schema.Struct({
          assignedIdentities: Schema.optional(
            Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  principalId: Schema.optional(Schema.String),
                }),
              ),
            ),
          ),
        }),
      ),
      mlFlowRegistryUri: Schema.optional(Schema.NullOr(Schema.String)),
      registryPrivateEndpointConnections: Schema.optional(
        Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.NullOr(Schema.String)),
              location: Schema.optional(Schema.NullOr(Schema.String)),
              properties: Schema.optional(
                Schema.Struct({
                  groupIds: Schema.optional(
                    Schema.NullOr(Schema.Array(Schema.String)),
                  ),
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  registryPrivateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      actionsRequired: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      description: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      status: Schema.optional(
                        Schema.Literals([
                          "Approved",
                          "Pending",
                          "Rejected",
                          "Disconnected",
                          "Timeout",
                        ]),
                      ),
                    }),
                  ),
                  provisioningState: Schema.optional(
                    Schema.NullOr(Schema.String),
                  ),
                }),
              ),
            }),
          ),
        ),
      ),
      publicNetworkAccess: Schema.optional(Schema.NullOr(Schema.String)),
      regionDetails: Schema.optional(
        Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              acrDetails: Schema.optional(
                Schema.NullOr(
                  Schema.Array(
                    Schema.Struct({
                      systemCreatedAcrAccount: Schema.optional(
                        Schema.Struct({
                          acrAccountName: Schema.optional(
                            Schema.NullOr(Schema.String),
                          ),
                          acrAccountSku: Schema.optional(
                            Schema.NullOr(Schema.String),
                          ),
                          armResourceId: Schema.optional(
                            Schema.Struct({
                              resourceId: Schema.optional(
                                Schema.NullOr(Schema.String),
                              ),
                            }),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              ),
              location: Schema.optional(Schema.NullOr(Schema.String)),
              storageAccountDetails: Schema.optional(
                Schema.NullOr(
                  Schema.Array(
                    Schema.Struct({
                      systemCreatedStorageAccount: Schema.optional(
                        Schema.Struct({
                          allowBlobPublicAccess: Schema.optional(
                            Schema.Boolean,
                          ),
                          armResourceId: Schema.optional(
                            Schema.Struct({
                              resourceId: Schema.optional(
                                Schema.NullOr(Schema.String),
                              ),
                            }),
                          ),
                          storageAccountHnsEnabled: Schema.optional(
                            Schema.Boolean,
                          ),
                          storageAccountName: Schema.optional(
                            Schema.NullOr(Schema.String),
                          ),
                          storageAccountType: Schema.optional(
                            Schema.NullOr(Schema.String),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
              ),
            }),
          ),
        ),
      ),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/removeRegions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistriesRemoveRegionsInput>;

// Output Schema
export interface RegistriesRemoveRegionsOutput {
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
export const RegistriesRemoveRegionsOutput =
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
  }) as unknown as Schema.Codec<RegistriesRemoveRegionsOutput>;

// The operation
/**
 * Remove regions from registry
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 */
export const RegistriesRemoveRegions = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistriesRemoveRegionsInput,
  outputSchema: RegistriesRemoveRegionsOutput,
}));
// Input Schema
export interface RegistriesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  sku?: {
    capacity?: number;
    family?: string;
    name?: string;
    size?: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
  };
  tags?: Record<string, string | null>;
}
export const RegistriesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  registryName: Schema.String.pipe(T.PathParam()),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
      userAssignedIdentities: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      ),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      capacity: Schema.optional(Schema.Number),
      family: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      size: Schema.optional(Schema.String),
      tier: Schema.optional(
        Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
      ),
    }),
  ),
  tags: Schema.optional(
    Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<RegistriesUpdateInput>;

// Output Schema
export interface RegistriesUpdateOutput {
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
export const RegistriesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RegistriesUpdateOutput>;

// The operation
/**
 * Update tags
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 */
export const RegistriesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistriesUpdateInput,
  outputSchema: RegistriesUpdateOutput,
}));
// Input Schema
export interface RegistryCodeContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  codeName: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const RegistryCodeContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    codeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryCodeContainersCreateOrUpdateInput>;

// Output Schema
export interface RegistryCodeContainersCreateOrUpdateOutput {
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
export const RegistryCodeContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistryCodeContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update Code container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param codeName - Container name.
 */
export const RegistryCodeContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryCodeContainersCreateOrUpdateInput,
    outputSchema: RegistryCodeContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistryCodeContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  codeName: string;
}
export const RegistryCodeContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    codeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryCodeContainersDeleteInput>;

// Output Schema
export type RegistryCodeContainersDeleteOutput = void;
export const RegistryCodeContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistryCodeContainersDeleteOutput>;

// The operation
/**
 * Delete Code container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param codeName - Container name.
 */
export const RegistryCodeContainersDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryCodeContainersDeleteInput,
    outputSchema: RegistryCodeContainersDeleteOutput,
  }));
// Input Schema
export interface RegistryCodeContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  codeName: string;
}
export const RegistryCodeContainersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    codeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryCodeContainersGetInput>;

// Output Schema
export interface RegistryCodeContainersGetOutput {
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
export const RegistryCodeContainersGetOutput =
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
  }) as unknown as Schema.Codec<RegistryCodeContainersGetOutput>;

// The operation
/**
 * Get Code container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param codeName - Container name.
 */
export const RegistryCodeContainersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryCodeContainersGetInput,
  outputSchema: RegistryCodeContainersGetOutput,
}));
// Input Schema
export interface RegistryCodeContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  $skip?: string;
}
export const RegistryCodeContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryCodeContainersListInput>;

// Output Schema
export interface RegistryCodeContainersListOutput {
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
export const RegistryCodeContainersListOutput =
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
  }) as unknown as Schema.Codec<RegistryCodeContainersListOutput>;

// The operation
/**
 * List containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param $skip - Continuation token for pagination.
 */
export const RegistryCodeContainersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryCodeContainersListInput,
  outputSchema: RegistryCodeContainersListOutput,
}));
// Input Schema
export interface RegistryCodeVersionsCreateOrGetStartPendingUploadInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  codeName: string;
  version: string;
  pendingUploadId?: string | null;
  pendingUploadType?: "None" | "TemporaryBlobReference";
}
export const RegistryCodeVersionsCreateOrGetStartPendingUploadInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    codeName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    pendingUploadId: Schema.optional(Schema.NullOr(Schema.String)),
    pendingUploadType: Schema.optional(
      Schema.Literals(["None", "TemporaryBlobReference"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}/versions/{version}/startPendingUpload",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryCodeVersionsCreateOrGetStartPendingUploadInput>;

// Output Schema
export interface RegistryCodeVersionsCreateOrGetStartPendingUploadOutput {
  blobReferenceForConsumption?: {
    blobUri?: string | null;
    credential?: { credentialType: "SAS" };
    storageAccountArmId?: string | null;
  };
  pendingUploadId?: string | null;
  pendingUploadType?: "None" | "TemporaryBlobReference";
}
export const RegistryCodeVersionsCreateOrGetStartPendingUploadOutput =
  /*@__PURE__*/ Schema.Struct({
    blobReferenceForConsumption: Schema.optional(
      Schema.Struct({
        blobUri: Schema.optional(Schema.NullOr(Schema.String)),
        credential: Schema.optional(
          Schema.Struct({
            credentialType: Schema.Literals(["SAS"]),
          }),
        ),
        storageAccountArmId: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    pendingUploadId: Schema.optional(Schema.NullOr(Schema.String)),
    pendingUploadType: Schema.optional(
      Schema.Literals(["None", "TemporaryBlobReference"]),
    ),
  }) as unknown as Schema.Codec<RegistryCodeVersionsCreateOrGetStartPendingUploadOutput>;

// The operation
/**
 * Generate a storage location and credential for the client to upload a code asset to.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param codeName - Container name.
 * @param version - Version identifier.
 */
export const RegistryCodeVersionsCreateOrGetStartPendingUpload =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryCodeVersionsCreateOrGetStartPendingUploadInput,
    outputSchema: RegistryCodeVersionsCreateOrGetStartPendingUploadOutput,
  }));
// Input Schema
export interface RegistryCodeVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  codeName: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const RegistryCodeVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    codeName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryCodeVersionsCreateOrUpdateInput>;

// Output Schema
export interface RegistryCodeVersionsCreateOrUpdateOutput {
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
export const RegistryCodeVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistryCodeVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param codeName - Container name.
 * @param version - Version identifier.
 */
export const RegistryCodeVersionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryCodeVersionsCreateOrUpdateInput,
    outputSchema: RegistryCodeVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistryCodeVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  codeName: string;
  version: string;
}
export const RegistryCodeVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    codeName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryCodeVersionsDeleteInput>;

// Output Schema
export type RegistryCodeVersionsDeleteOutput = void;
export const RegistryCodeVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistryCodeVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param codeName - Container name.
 * @param version - Version identifier.
 */
export const RegistryCodeVersionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryCodeVersionsDeleteInput,
  outputSchema: RegistryCodeVersionsDeleteOutput,
}));
// Input Schema
export interface RegistryCodeVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  codeName: string;
  version: string;
}
export const RegistryCodeVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    codeName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryCodeVersionsGetInput>;

// Output Schema
export interface RegistryCodeVersionsGetOutput {
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
export const RegistryCodeVersionsGetOutput =
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
  }) as unknown as Schema.Codec<RegistryCodeVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param codeName - Container name.
 * @param version - Version identifier.
 */
export const RegistryCodeVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryCodeVersionsGetInput,
  outputSchema: RegistryCodeVersionsGetOutput,
}));
// Input Schema
export interface RegistryCodeVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  codeName: string;
  $orderBy?: string;
  $top?: number;
  $skip?: string;
}
export const RegistryCodeVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    codeName: Schema.String.pipe(T.PathParam()),
    $orderBy: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryCodeVersionsListInput>;

// Output Schema
export interface RegistryCodeVersionsListOutput {
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
export const RegistryCodeVersionsListOutput =
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
  }) as unknown as Schema.Codec<RegistryCodeVersionsListOutput>;

// The operation
/**
 * List versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param codeName - Container name.
 * @param $orderBy - Ordering of list.
 * @param $top - Maximum number of records to return.
 * @param $skip - Continuation token for pagination.
 */
export const RegistryCodeVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryCodeVersionsListInput,
  outputSchema: RegistryCodeVersionsListOutput,
}));
// Input Schema
export interface RegistryComponentContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  componentName: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const RegistryComponentContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components/{componentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryComponentContainersCreateOrUpdateInput>;

// Output Schema
export interface RegistryComponentContainersCreateOrUpdateOutput {
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
export const RegistryComponentContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistryComponentContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param componentName - Container name.
 */
export const RegistryComponentContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryComponentContainersCreateOrUpdateInput,
    outputSchema: RegistryComponentContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistryComponentContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  componentName: string;
}
export const RegistryComponentContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components/{componentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryComponentContainersDeleteInput>;

// Output Schema
export type RegistryComponentContainersDeleteOutput = void;
export const RegistryComponentContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistryComponentContainersDeleteOutput>;

// The operation
/**
 * Delete container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param componentName - Container name.
 */
export const RegistryComponentContainersDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryComponentContainersDeleteInput,
    outputSchema: RegistryComponentContainersDeleteOutput,
  }));
// Input Schema
export interface RegistryComponentContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  componentName: string;
}
export const RegistryComponentContainersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components/{componentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryComponentContainersGetInput>;

// Output Schema
export interface RegistryComponentContainersGetOutput {
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
export const RegistryComponentContainersGetOutput =
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
  }) as unknown as Schema.Codec<RegistryComponentContainersGetOutput>;

// The operation
/**
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param componentName - Container name.
 */
export const RegistryComponentContainersGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryComponentContainersGetInput,
    outputSchema: RegistryComponentContainersGetOutput,
  }));
// Input Schema
export interface RegistryComponentContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  $skip?: string;
}
export const RegistryComponentContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryComponentContainersListInput>;

// Output Schema
export interface RegistryComponentContainersListOutput {
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
export const RegistryComponentContainersListOutput =
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
  }) as unknown as Schema.Codec<RegistryComponentContainersListOutput>;

// The operation
/**
 * List containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param $skip - Continuation token for pagination.
 */
export const RegistryComponentContainersList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryComponentContainersListInput,
    outputSchema: RegistryComponentContainersListOutput,
  }));
// Input Schema
export interface RegistryComponentVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  componentName: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const RegistryComponentVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components/{componentName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryComponentVersionsCreateOrUpdateInput>;

// Output Schema
export interface RegistryComponentVersionsCreateOrUpdateOutput {
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
export const RegistryComponentVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistryComponentVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param componentName - Container name.
 * @param version - Version identifier.
 */
export const RegistryComponentVersionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryComponentVersionsCreateOrUpdateInput,
    outputSchema: RegistryComponentVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistryComponentVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  componentName: string;
  version: string;
}
export const RegistryComponentVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components/{componentName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryComponentVersionsDeleteInput>;

// Output Schema
export type RegistryComponentVersionsDeleteOutput = void;
export const RegistryComponentVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistryComponentVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param componentName - Container name.
 * @param version - Version identifier.
 */
export const RegistryComponentVersionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryComponentVersionsDeleteInput,
    outputSchema: RegistryComponentVersionsDeleteOutput,
  }));
// Input Schema
export interface RegistryComponentVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  componentName: string;
  version: string;
}
export const RegistryComponentVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components/{componentName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryComponentVersionsGetInput>;

// Output Schema
export interface RegistryComponentVersionsGetOutput {
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
export const RegistryComponentVersionsGetOutput =
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
  }) as unknown as Schema.Codec<RegistryComponentVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param componentName - Container name.
 * @param version - Version identifier.
 */
export const RegistryComponentVersionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryComponentVersionsGetInput,
    outputSchema: RegistryComponentVersionsGetOutput,
  }));
// Input Schema
export interface RegistryComponentVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  componentName: string;
  $orderBy?: string;
  $top?: number;
  $skip?: string;
}
export const RegistryComponentVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    componentName: Schema.String.pipe(T.PathParam()),
    $orderBy: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components/{componentName}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryComponentVersionsListInput>;

// Output Schema
export interface RegistryComponentVersionsListOutput {
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
export const RegistryComponentVersionsListOutput =
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
  }) as unknown as Schema.Codec<RegistryComponentVersionsListOutput>;

// The operation
/**
 * List versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param componentName - Container name.
 * @param $orderBy - Ordering of list.
 * @param $top - Maximum number of records to return.
 * @param $skip - Continuation token for pagination.
 */
export const RegistryComponentVersionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryComponentVersionsListInput,
    outputSchema: RegistryComponentVersionsListOutput,
  }));
// Input Schema
export interface RegistryDataContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  name: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const RegistryDataContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/data/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryDataContainersCreateOrUpdateInput>;

// Output Schema
export interface RegistryDataContainersCreateOrUpdateOutput {
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
export const RegistryDataContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistryDataContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param name - Container name.
 */
export const RegistryDataContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryDataContainersCreateOrUpdateInput,
    outputSchema: RegistryDataContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistryDataContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  name: string;
}
export const RegistryDataContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/data/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryDataContainersDeleteInput>;

// Output Schema
export type RegistryDataContainersDeleteOutput = void;
export const RegistryDataContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistryDataContainersDeleteOutput>;

// The operation
/**
 * Delete container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param name - Container name.
 */
export const RegistryDataContainersDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryDataContainersDeleteInput,
    outputSchema: RegistryDataContainersDeleteOutput,
  }));
// Input Schema
export interface RegistryDataContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  name: string;
}
export const RegistryDataContainersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/data/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryDataContainersGetInput>;

// Output Schema
export interface RegistryDataContainersGetOutput {
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
export const RegistryDataContainersGetOutput =
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
  }) as unknown as Schema.Codec<RegistryDataContainersGetOutput>;

// The operation
/**
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param name - Container name.
 */
export const RegistryDataContainersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryDataContainersGetInput,
  outputSchema: RegistryDataContainersGetOutput,
}));
// Input Schema
export interface RegistryDataContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  $skip?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const RegistryDataContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/data",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryDataContainersListInput>;

// Output Schema
export interface RegistryDataContainersListOutput {
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
export const RegistryDataContainersListOutput =
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
  }) as unknown as Schema.Codec<RegistryDataContainersListOutput>;

// The operation
/**
 * List Data containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param $skip - Continuation token for pagination.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const RegistryDataContainersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryDataContainersListInput,
  outputSchema: RegistryDataContainersListOutput,
}));
// Input Schema
export interface RegistryDataReferencesGetBlobReferenceSASInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  name: string;
  version: string;
  assetId?: string | null;
  blobUri?: string | null;
}
export const RegistryDataReferencesGetBlobReferenceSASInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    assetId: Schema.optional(Schema.NullOr(Schema.String)),
    blobUri: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/datareferences/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryDataReferencesGetBlobReferenceSASInput>;

// Output Schema
export interface RegistryDataReferencesGetBlobReferenceSASOutput {
  blobReferenceForConsumption?: {
    blobUri?: string | null;
    credential?: {
      credentialType:
        | "SAS"
        | "DockerCredentials"
        | "ManagedIdentity"
        | "NoCredentials";
    };
    storageAccountArmId?: string | null;
  };
}
export const RegistryDataReferencesGetBlobReferenceSASOutput =
  /*@__PURE__*/ Schema.Struct({
    blobReferenceForConsumption: Schema.optional(
      Schema.Struct({
        blobUri: Schema.optional(Schema.NullOr(Schema.String)),
        credential: Schema.optional(
          Schema.Struct({
            credentialType: Schema.Literals([
              "SAS",
              "DockerCredentials",
              "ManagedIdentity",
              "NoCredentials",
            ]),
          }),
        ),
        storageAccountArmId: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<RegistryDataReferencesGetBlobReferenceSASOutput>;

// The operation
/**
 * Get blob reference SAS Uri.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param name - Data reference name.
 * @param version - Version identifier.
 */
export const RegistryDataReferencesGetBlobReferenceSAS =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryDataReferencesGetBlobReferenceSASInput,
    outputSchema: RegistryDataReferencesGetBlobReferenceSASOutput,
  }));
// Input Schema
export interface RegistryDataVersionsCreateOrGetStartPendingUploadInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  name: string;
  version: string;
  pendingUploadId?: string | null;
  pendingUploadType?: "None" | "TemporaryBlobReference";
}
export const RegistryDataVersionsCreateOrGetStartPendingUploadInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    pendingUploadId: Schema.optional(Schema.NullOr(Schema.String)),
    pendingUploadType: Schema.optional(
      Schema.Literals(["None", "TemporaryBlobReference"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/data/{name}/versions/{version}/startPendingUpload",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryDataVersionsCreateOrGetStartPendingUploadInput>;

// Output Schema
export interface RegistryDataVersionsCreateOrGetStartPendingUploadOutput {
  blobReferenceForConsumption?: {
    blobUri?: string | null;
    credential?: { credentialType: "SAS" };
    storageAccountArmId?: string | null;
  };
  pendingUploadId?: string | null;
  pendingUploadType?: "None" | "TemporaryBlobReference";
}
export const RegistryDataVersionsCreateOrGetStartPendingUploadOutput =
  /*@__PURE__*/ Schema.Struct({
    blobReferenceForConsumption: Schema.optional(
      Schema.Struct({
        blobUri: Schema.optional(Schema.NullOr(Schema.String)),
        credential: Schema.optional(
          Schema.Struct({
            credentialType: Schema.Literals(["SAS"]),
          }),
        ),
        storageAccountArmId: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    pendingUploadId: Schema.optional(Schema.NullOr(Schema.String)),
    pendingUploadType: Schema.optional(
      Schema.Literals(["None", "TemporaryBlobReference"]),
    ),
  }) as unknown as Schema.Codec<RegistryDataVersionsCreateOrGetStartPendingUploadOutput>;

// The operation
/**
 * Generate a storage location and credential for the client to upload a data asset to.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const RegistryDataVersionsCreateOrGetStartPendingUpload =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryDataVersionsCreateOrGetStartPendingUploadInput,
    outputSchema: RegistryDataVersionsCreateOrGetStartPendingUploadOutput,
  }));
// Input Schema
export interface RegistryDataVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  name: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const RegistryDataVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/data/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryDataVersionsCreateOrUpdateInput>;

// Output Schema
export interface RegistryDataVersionsCreateOrUpdateOutput {
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
export const RegistryDataVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistryDataVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const RegistryDataVersionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryDataVersionsCreateOrUpdateInput,
    outputSchema: RegistryDataVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistryDataVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  name: string;
  version: string;
}
export const RegistryDataVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/data/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryDataVersionsDeleteInput>;

// Output Schema
export type RegistryDataVersionsDeleteOutput = void;
export const RegistryDataVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistryDataVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const RegistryDataVersionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryDataVersionsDeleteInput,
  outputSchema: RegistryDataVersionsDeleteOutput,
}));
// Input Schema
export interface RegistryDataVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  name: string;
  version: string;
}
export const RegistryDataVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/data/{name}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryDataVersionsGetInput>;

// Output Schema
export interface RegistryDataVersionsGetOutput {
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
export const RegistryDataVersionsGetOutput =
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
  }) as unknown as Schema.Codec<RegistryDataVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param name - Container name.
 * @param version - Version identifier.
 */
export const RegistryDataVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryDataVersionsGetInput,
  outputSchema: RegistryDataVersionsGetOutput,
}));
// Input Schema
export interface RegistryDataVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  name: string;
  $orderBy?: string;
  $top?: number;
  $skip?: string;
  $tags?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const RegistryDataVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $orderBy: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.String),
    $tags: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/data/{name}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryDataVersionsListInput>;

// Output Schema
export interface RegistryDataVersionsListOutput {
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
export const RegistryDataVersionsListOutput =
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
  }) as unknown as Schema.Codec<RegistryDataVersionsListOutput>;

// The operation
/**
 * List data versions in the data container
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param name - Container name.
 * @param $orderBy - Please choose OrderBy value from ['createdtime', 'modifiedtime']
 * @param $top - Top count of results, top count cannot be greater than the page size.
If topCount > page size, results with be default page size count will be returned
 * @param $skip - Continuation token for pagination.
 * @param $tags - Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
 * @param listViewType - [ListViewType.ActiveOnly, ListViewType.ArchivedOnly, ListViewType.All]View type for including/excluding (for example) archived entities.
 */
export const RegistryDataVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryDataVersionsListInput,
  outputSchema: RegistryDataVersionsListOutput,
}));
// Input Schema
export interface RegistryEnvironmentContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  environmentName: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const RegistryEnvironmentContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/environments/{environmentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryEnvironmentContainersCreateOrUpdateInput>;

// Output Schema
export interface RegistryEnvironmentContainersCreateOrUpdateOutput {
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
export const RegistryEnvironmentContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistryEnvironmentContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param environmentName - Container name. This is case-sensitive.
 */
export const RegistryEnvironmentContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryEnvironmentContainersCreateOrUpdateInput,
    outputSchema: RegistryEnvironmentContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistryEnvironmentContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  environmentName: string;
}
export const RegistryEnvironmentContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/environments/{environmentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryEnvironmentContainersDeleteInput>;

// Output Schema
export type RegistryEnvironmentContainersDeleteOutput = void;
export const RegistryEnvironmentContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistryEnvironmentContainersDeleteOutput>;

// The operation
/**
 * Delete container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param environmentName - Container name. This is case-sensitive.
 */
export const RegistryEnvironmentContainersDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryEnvironmentContainersDeleteInput,
    outputSchema: RegistryEnvironmentContainersDeleteOutput,
  }));
// Input Schema
export interface RegistryEnvironmentContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  environmentName: string;
}
export const RegistryEnvironmentContainersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/environments/{environmentName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryEnvironmentContainersGetInput>;

// Output Schema
export interface RegistryEnvironmentContainersGetOutput {
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
export const RegistryEnvironmentContainersGetOutput =
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
  }) as unknown as Schema.Codec<RegistryEnvironmentContainersGetOutput>;

// The operation
/**
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param environmentName - Container name. This is case-sensitive.
 */
export const RegistryEnvironmentContainersGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryEnvironmentContainersGetInput,
    outputSchema: RegistryEnvironmentContainersGetOutput,
  }));
// Input Schema
export interface RegistryEnvironmentContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  $skip?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const RegistryEnvironmentContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/environments",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryEnvironmentContainersListInput>;

// Output Schema
export interface RegistryEnvironmentContainersListOutput {
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
export const RegistryEnvironmentContainersListOutput =
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
  }) as unknown as Schema.Codec<RegistryEnvironmentContainersListOutput>;

// The operation
/**
 * List environment containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param $skip - Continuation token for pagination.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const RegistryEnvironmentContainersList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryEnvironmentContainersListInput,
    outputSchema: RegistryEnvironmentContainersListOutput,
  }));
// Input Schema
export interface RegistryEnvironmentVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  environmentName: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const RegistryEnvironmentVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/environments/{environmentName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryEnvironmentVersionsCreateOrUpdateInput>;

// Output Schema
export interface RegistryEnvironmentVersionsCreateOrUpdateOutput {
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
export const RegistryEnvironmentVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistryEnvironmentVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param environmentName - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const RegistryEnvironmentVersionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryEnvironmentVersionsCreateOrUpdateInput,
    outputSchema: RegistryEnvironmentVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistryEnvironmentVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  environmentName: string;
  version: string;
}
export const RegistryEnvironmentVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/environments/{environmentName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryEnvironmentVersionsDeleteInput>;

// Output Schema
export type RegistryEnvironmentVersionsDeleteOutput = void;
export const RegistryEnvironmentVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistryEnvironmentVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param environmentName - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const RegistryEnvironmentVersionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryEnvironmentVersionsDeleteInput,
    outputSchema: RegistryEnvironmentVersionsDeleteOutput,
  }));
// Input Schema
export interface RegistryEnvironmentVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  environmentName: string;
  version: string;
}
export const RegistryEnvironmentVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/environments/{environmentName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryEnvironmentVersionsGetInput>;

// Output Schema
export interface RegistryEnvironmentVersionsGetOutput {
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
export const RegistryEnvironmentVersionsGetOutput =
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
  }) as unknown as Schema.Codec<RegistryEnvironmentVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param environmentName - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const RegistryEnvironmentVersionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryEnvironmentVersionsGetInput,
    outputSchema: RegistryEnvironmentVersionsGetOutput,
  }));
// Input Schema
export interface RegistryEnvironmentVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  environmentName: string;
  $orderBy?: string;
  $top?: number;
  $skip?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const RegistryEnvironmentVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    environmentName: Schema.String.pipe(T.PathParam()),
    $orderBy: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/environments/{environmentName}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryEnvironmentVersionsListInput>;

// Output Schema
export interface RegistryEnvironmentVersionsListOutput {
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
export const RegistryEnvironmentVersionsListOutput =
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
  }) as unknown as Schema.Codec<RegistryEnvironmentVersionsListOutput>;

// The operation
/**
 * List versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param environmentName - Container name. This is case-sensitive.
 * @param $orderBy - Ordering of list.
 * @param $top - Maximum number of records to return.
 * @param $skip - Continuation token for pagination.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const RegistryEnvironmentVersionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryEnvironmentVersionsListInput,
    outputSchema: RegistryEnvironmentVersionsListOutput,
  }));
// Input Schema
export interface RegistryModelContainersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  modelName: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const RegistryModelContainersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    modelName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/models/{modelName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryModelContainersCreateOrUpdateInput>;

// Output Schema
export interface RegistryModelContainersCreateOrUpdateOutput {
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
export const RegistryModelContainersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistryModelContainersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update model container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param modelName - Container name. This is case-sensitive.
 */
export const RegistryModelContainersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryModelContainersCreateOrUpdateInput,
    outputSchema: RegistryModelContainersCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistryModelContainersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  modelName: string;
}
export const RegistryModelContainersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    modelName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/models/{modelName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryModelContainersDeleteInput>;

// Output Schema
export type RegistryModelContainersDeleteOutput = void;
export const RegistryModelContainersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistryModelContainersDeleteOutput>;

// The operation
/**
 * Delete container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param modelName - Container name. This is case-sensitive.
 */
export const RegistryModelContainersDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryModelContainersDeleteInput,
    outputSchema: RegistryModelContainersDeleteOutput,
  }));
// Input Schema
export interface RegistryModelContainersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  modelName: string;
}
export const RegistryModelContainersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    modelName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/models/{modelName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryModelContainersGetInput>;

// Output Schema
export interface RegistryModelContainersGetOutput {
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
export const RegistryModelContainersGetOutput =
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
  }) as unknown as Schema.Codec<RegistryModelContainersGetOutput>;

// The operation
/**
 * Get container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param modelName - Container name. This is case-sensitive.
 */
export const RegistryModelContainersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryModelContainersGetInput,
  outputSchema: RegistryModelContainersGetOutput,
}));
// Input Schema
export interface RegistryModelContainersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  $skip?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const RegistryModelContainersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/models",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryModelContainersListInput>;

// Output Schema
export interface RegistryModelContainersListOutput {
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
export const RegistryModelContainersListOutput =
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
  }) as unknown as Schema.Codec<RegistryModelContainersListOutput>;

// The operation
/**
 * List model containers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param $skip - Continuation token for pagination.
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const RegistryModelContainersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryModelContainersListInput,
  outputSchema: RegistryModelContainersListOutput,
}));
// Input Schema
export interface RegistryModelVersionsCreateOrGetStartPendingUploadInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  modelName: string;
  version: string;
  pendingUploadId?: string | null;
  pendingUploadType?: "None" | "TemporaryBlobReference";
}
export const RegistryModelVersionsCreateOrGetStartPendingUploadInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    modelName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    pendingUploadId: Schema.optional(Schema.NullOr(Schema.String)),
    pendingUploadType: Schema.optional(
      Schema.Literals(["None", "TemporaryBlobReference"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/models/{modelName}/versions/{version}/startPendingUpload",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryModelVersionsCreateOrGetStartPendingUploadInput>;

// Output Schema
export interface RegistryModelVersionsCreateOrGetStartPendingUploadOutput {
  blobReferenceForConsumption?: {
    blobUri?: string | null;
    credential?: { credentialType: "SAS" };
    storageAccountArmId?: string | null;
  };
  pendingUploadId?: string | null;
  pendingUploadType?: "None" | "TemporaryBlobReference";
}
export const RegistryModelVersionsCreateOrGetStartPendingUploadOutput =
  /*@__PURE__*/ Schema.Struct({
    blobReferenceForConsumption: Schema.optional(
      Schema.Struct({
        blobUri: Schema.optional(Schema.NullOr(Schema.String)),
        credential: Schema.optional(
          Schema.Struct({
            credentialType: Schema.Literals(["SAS"]),
          }),
        ),
        storageAccountArmId: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    pendingUploadId: Schema.optional(Schema.NullOr(Schema.String)),
    pendingUploadType: Schema.optional(
      Schema.Literals(["None", "TemporaryBlobReference"]),
    ),
  }) as unknown as Schema.Codec<RegistryModelVersionsCreateOrGetStartPendingUploadOutput>;

// The operation
/**
 * Generate a storage location and credential for the client to upload a model asset to.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param modelName - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const RegistryModelVersionsCreateOrGetStartPendingUpload =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryModelVersionsCreateOrGetStartPendingUploadInput,
    outputSchema: RegistryModelVersionsCreateOrGetStartPendingUploadOutput,
  }));
// Input Schema
export interface RegistryModelVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  modelName: string;
  version: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const RegistryModelVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    modelName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/models/{modelName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryModelVersionsCreateOrUpdateInput>;

// Output Schema
export interface RegistryModelVersionsCreateOrUpdateOutput {
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
export const RegistryModelVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegistryModelVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param modelName - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const RegistryModelVersionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistryModelVersionsCreateOrUpdateInput,
    outputSchema: RegistryModelVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistryModelVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  modelName: string;
  version: string;
}
export const RegistryModelVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    modelName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/models/{modelName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryModelVersionsDeleteInput>;

// Output Schema
export type RegistryModelVersionsDeleteOutput = void;
export const RegistryModelVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistryModelVersionsDeleteOutput>;

// The operation
/**
 * Delete version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param modelName - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const RegistryModelVersionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryModelVersionsDeleteInput,
  outputSchema: RegistryModelVersionsDeleteOutput,
}));
// Input Schema
export interface RegistryModelVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  modelName: string;
  version: string;
}
export const RegistryModelVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    modelName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/models/{modelName}/versions/{version}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryModelVersionsGetInput>;

// Output Schema
export interface RegistryModelVersionsGetOutput {
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
export const RegistryModelVersionsGetOutput =
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
  }) as unknown as Schema.Codec<RegistryModelVersionsGetOutput>;

// The operation
/**
 * Get version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param modelName - Container name. This is case-sensitive.
 * @param version - Version identifier. This is case-sensitive.
 */
export const RegistryModelVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryModelVersionsGetInput,
  outputSchema: RegistryModelVersionsGetOutput,
}));
// Input Schema
export interface RegistryModelVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  registryName: string;
  modelName: string;
  $skip?: string;
  $orderBy?: string;
  $top?: number;
  version?: string;
  description?: string;
  tags?: string;
  properties?: string;
  listViewType?: "ActiveOnly" | "ArchivedOnly" | "All";
}
export const RegistryModelVersionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    registryName: Schema.String.pipe(T.PathParam()),
    modelName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
    $orderBy: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    version: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.String),
    listViewType: Schema.optional(
      Schema.Literals(["ActiveOnly", "ArchivedOnly", "All"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/models/{modelName}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<RegistryModelVersionsListInput>;

// Output Schema
export interface RegistryModelVersionsListOutput {
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
export const RegistryModelVersionsListOutput =
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
  }) as unknown as Schema.Codec<RegistryModelVersionsListOutput>;

// The operation
/**
 * List versions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param registryName - Name of Azure Machine Learning registry. This is case-insensitive
 * @param modelName - Container name. This is case-sensitive.
 * @param $skip - Continuation token for pagination.
 * @param $orderBy - Ordering of list.
 * @param $top - Maximum number of records to return.
 * @param version - Version identifier.
 * @param description - Model description.
 * @param tags - Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2
 * @param properties - Comma-separated list of property names (and optionally values). Example: prop1,prop2=value2
 * @param listViewType - View type for including/excluding (for example) archived entities.
 */
export const RegistryModelVersionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistryModelVersionsListInput,
  outputSchema: RegistryModelVersionsListOutput,
}));
// Input Schema
export interface SchedulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties: {
    description?: string | null;
    properties?: Record<string, string | null> | null;
    tags?: Record<string, string | null> | null;
  };
}
export const SchedulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
      tags: Schema.optional(
        Schema.NullOr(
          Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/schedules/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchedulesCreateOrUpdateInput>;

// Output Schema
export interface SchedulesCreateOrUpdateOutput {
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
export const SchedulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SchedulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Schedule name.
 */
export const SchedulesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesCreateOrUpdateInput,
  outputSchema: SchedulesCreateOrUpdateOutput,
}));
// Input Schema
export interface SchedulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const SchedulesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/schedules/{name}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<SchedulesDeleteInput>;

// Output Schema
export type SchedulesDeleteOutput = void;
export const SchedulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SchedulesDeleteOutput>;

// The operation
/**
 * Delete schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Schedule name.
 */
export const SchedulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesDeleteInput,
  outputSchema: SchedulesDeleteOutput,
}));
// Input Schema
export interface SchedulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const SchedulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/schedules/{name}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<SchedulesGetInput>;

// Output Schema
export interface SchedulesGetOutput {
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
export const SchedulesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SchedulesGetOutput>;

// The operation
/**
 * Get schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Schedule name.
 */
export const SchedulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesGetInput,
  outputSchema: SchedulesGetOutput,
}));
// Input Schema
export interface SchedulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
  listViewType?: "EnabledOnly" | "DisabledOnly" | "All";
}
export const SchedulesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  $skip: Schema.optional(Schema.String),
  listViewType: Schema.optional(
    Schema.Literals(["EnabledOnly", "DisabledOnly", "All"]),
  ),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/schedules",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<SchedulesListInput>;

// Output Schema
export interface SchedulesListOutput {
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
export const SchedulesListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SchedulesListOutput>;

// The operation
/**
 * List schedules in specified workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param $skip - Continuation token for pagination.
 * @param listViewType - Status filter for schedule.
 */
export const SchedulesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesListInput,
  outputSchema: SchedulesListOutput,
}));
// Input Schema
export interface ServerlessEndpointsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  properties: {
    authMode: "Key" | "AAD" | "KeyAndAAD";
    contentSafety?: { contentSafetyStatus: "Enabled" | "Disabled" };
    endpointState?:
      | "Unknown"
      | "Creating"
      | "Deleting"
      | "Suspending"
      | "Reinstating"
      | "Online"
      | "Suspended"
      | "CreationFailed"
      | "DeletionFailed";
    inferenceEndpoint?: {
      headers?: Record<string, string | null> | null;
      uri: string;
    };
    marketplaceSubscriptionId?: string | null;
    modelSettings?: { modelId?: string | null };
    provisioningState?:
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Canceled";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  kind?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ServerlessEndpointsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      authMode: Schema.Literals(["Key", "AAD", "KeyAndAAD"]),
      contentSafety: Schema.optional(
        Schema.Struct({
          contentSafetyStatus: Schema.Literals(["Enabled", "Disabled"]),
        }),
      ),
      endpointState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Creating",
          "Deleting",
          "Suspending",
          "Reinstating",
          "Online",
          "Suspended",
          "CreationFailed",
          "DeletionFailed",
        ]),
      ),
      inferenceEndpoint: Schema.optional(
        Schema.Struct({
          headers: Schema.optional(
            Schema.NullOr(
              Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
            ),
          ),
          uri: Schema.String,
        }),
      ),
      marketplaceSubscriptionId: Schema.optional(Schema.NullOr(Schema.String)),
      modelSettings: Schema.optional(
        Schema.Struct({
          modelId: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Updating",
          "Canceled",
        ]),
      ),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ServerlessEndpointsCreateOrUpdateInput>;

// Output Schema
export interface ServerlessEndpointsCreateOrUpdateOutput {
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
export const ServerlessEndpointsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ServerlessEndpointsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update Serverless Endpoint (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Serverless Endpoint name.
 */
export const ServerlessEndpointsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServerlessEndpointsCreateOrUpdateInput,
    outputSchema: ServerlessEndpointsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ServerlessEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const ServerlessEndpointsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ServerlessEndpointsDeleteInput>;

// Output Schema
export type ServerlessEndpointsDeleteOutput = void;
export const ServerlessEndpointsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServerlessEndpointsDeleteOutput>;

// The operation
/**
 * Delete Serverless Endpoint (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Serverless Endpoint name.
 */
export const ServerlessEndpointsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServerlessEndpointsDeleteInput,
  outputSchema: ServerlessEndpointsDeleteOutput,
}));
// Input Schema
export interface ServerlessEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const ServerlessEndpointsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ServerlessEndpointsGetInput>;

// Output Schema
export interface ServerlessEndpointsGetOutput {
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
export const ServerlessEndpointsGetOutput =
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
  }) as unknown as Schema.Codec<ServerlessEndpointsGetOutput>;

// The operation
/**
 * Get Serverless Endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Serverless Endpoint name.
 */
export const ServerlessEndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServerlessEndpointsGetInput,
  outputSchema: ServerlessEndpointsGetOutput,
}));
// Input Schema
export interface ServerlessEndpointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  $skip?: string;
}
export const ServerlessEndpointsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ServerlessEndpointsListInput>;

// Output Schema
export interface ServerlessEndpointsListOutput {
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
export const ServerlessEndpointsListOutput =
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
  }) as unknown as Schema.Codec<ServerlessEndpointsListOutput>;

// The operation
/**
 * List Serverless Endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param $skip - Continuation token for pagination.
 */
export const ServerlessEndpointsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServerlessEndpointsListInput,
  outputSchema: ServerlessEndpointsListOutput,
}));
// Input Schema
export interface ServerlessEndpointsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
}
export const ServerlessEndpointsListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}/listKeys",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ServerlessEndpointsListKeysInput>;

// Output Schema
export interface ServerlessEndpointsListKeysOutput {
  primaryKey?: string | null;
  secondaryKey?: string | null;
}
export const ServerlessEndpointsListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.NullOr(Schema.String)),
    secondaryKey: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<ServerlessEndpointsListKeysOutput>;

// The operation
/**
 * List EndpointAuthKeys for an Endpoint using Key-based authentication.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Serverless Endpoint name.
 */
export const ServerlessEndpointsListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServerlessEndpointsListKeysInput,
  outputSchema: ServerlessEndpointsListKeysOutput,
}));
// Input Schema
export interface ServerlessEndpointsRegenerateKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  keyType: "Primary" | "Secondary";
  keyValue?: string | null;
}
export const ServerlessEndpointsRegenerateKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    keyType: Schema.Literals(["Primary", "Secondary"]),
    keyValue: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}/regenerateKeys",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ServerlessEndpointsRegenerateKeysInput>;

// Output Schema
export interface ServerlessEndpointsRegenerateKeysOutput {
  primaryKey?: string | null;
  secondaryKey?: string | null;
}
export const ServerlessEndpointsRegenerateKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.NullOr(Schema.String)),
    secondaryKey: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<ServerlessEndpointsRegenerateKeysOutput>;

// The operation
/**
 * Regenerate EndpointAuthKeys for an Endpoint using Key-based authentication (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Serverless Endpoint name.
 */
export const ServerlessEndpointsRegenerateKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServerlessEndpointsRegenerateKeysInput,
    outputSchema: ServerlessEndpointsRegenerateKeysOutput,
  }));
// Input Schema
export interface ServerlessEndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  name: string;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<string, unknown>;
  };
  sku?: {
    capacity?: number;
    family?: string;
    name?: string;
    size?: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
  };
  tags?: Record<string, string | null>;
}
export const ServerlessEndpointsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        capacity: Schema.optional(Schema.Number),
        family: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
      }),
    ),
    tags: Schema.optional(
      Schema.Record(Schema.String, Schema.NullOr(Schema.String)),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ServerlessEndpointsUpdateInput>;

// Output Schema
export interface ServerlessEndpointsUpdateOutput {
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
export const ServerlessEndpointsUpdateOutput =
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
  }) as unknown as Schema.Codec<ServerlessEndpointsUpdateOutput>;

// The operation
/**
 * Update Serverless Endpoint (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param name - Serverless Endpoint name.
 */
export const ServerlessEndpointsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServerlessEndpointsUpdateInput,
  outputSchema: ServerlessEndpointsUpdateOutput,
}));
// Input Schema
export interface UsagesListInput {
  subscriptionId: string;
  location: string;
}
export const UsagesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/locations/{location}/usages",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<UsagesListInput>;

// Output Schema
export interface UsagesListOutput {
  value: {
    id?: string;
    amlWorkspaceLocation?: string;
    type?: string;
    unit?: "Count";
    currentValue?: number;
    limit?: number;
    name?: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const UsagesListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      amlWorkspaceLocation: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      unit: Schema.optional(Schema.Literals(["Count"])),
      currentValue: Schema.optional(Schema.Number),
      limit: Schema.optional(Schema.Number),
      name: Schema.optional(
        Schema.Struct({
          value: Schema.optional(Schema.String),
          localizedValue: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UsagesListOutput>;

// The operation
/**
 * Gets the current usage information as well as limits for AML resources for given subscription and location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location name.
 */
export const UsagesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsagesListInput,
  outputSchema: UsagesListOutput,
}));
// Input Schema
export interface VirtualMachineSizesListInput {
  subscriptionId: string;
  location: string;
}
export const VirtualMachineSizesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/locations/{location}/vmSizes",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineSizesListInput>;

// Output Schema
export interface VirtualMachineSizesListOutput {
  value?: {
    name?: string;
    family?: string;
    vCPUs?: number;
    gpus?: number;
    osVhdSizeMB?: number;
    maxResourceVolumeMB?: number;
    memoryGB?: number;
    lowPriorityCapable?: boolean;
    premiumIO?: boolean;
    estimatedVMPrices?: {
      billingCurrency: "USD";
      unitOfMeasure: "OneHour";
      values: {
        retailPrice: number;
        osType: "Linux" | "Windows";
        vmTier: "Standard" | "LowPriority" | "Spot";
      }[];
    };
    supportedComputeTypes?: string[];
  }[];
}
export const VirtualMachineSizesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          family: Schema.optional(Schema.String),
          vCPUs: Schema.optional(Schema.Number),
          gpus: Schema.optional(Schema.Number),
          osVhdSizeMB: Schema.optional(Schema.Number),
          maxResourceVolumeMB: Schema.optional(Schema.Number),
          memoryGB: Schema.optional(Schema.Number),
          lowPriorityCapable: Schema.optional(Schema.Boolean),
          premiumIO: Schema.optional(Schema.Boolean),
          estimatedVMPrices: Schema.optional(
            Schema.Struct({
              billingCurrency: Schema.Literals(["USD"]),
              unitOfMeasure: Schema.Literals(["OneHour"]),
              values: Schema.Array(
                Schema.Struct({
                  retailPrice: Schema.Number,
                  osType: Schema.Literals(["Linux", "Windows"]),
                  vmTier: Schema.Literals(["Standard", "LowPriority", "Spot"]),
                }),
              ),
            }),
          ),
          supportedComputeTypes: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<VirtualMachineSizesListOutput>;

// The operation
/**
 * Returns supported VM Sizes in a location
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location name.
 */
export const VirtualMachineSizesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachineSizesListInput,
  outputSchema: VirtualMachineSizesListOutput,
}));
// Input Schema
export interface WorkspaceConnectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  connectionName: string;
  properties: {
    authType:
      | "PAT"
      | "ManagedIdentity"
      | "UsernamePassword"
      | "None"
      | "SAS"
      | "AccountKey"
      | "ServicePrincipal"
      | "AccessKey"
      | "ApiKey"
      | "CustomKeys"
      | "OAuth2"
      | "AAD"
      | "DelegatedSAS"
      | "ProjectManagedIdentity"
      | "AccountManagedIdentity"
      | "UserEntraToken"
      | "AgentUserImpersonation"
      | "AgenticIdentityToken"
      | "AgenticUser";
    category?:
      | "PythonFeed"
      | "ContainerRegistry"
      | "Git"
      | "S3"
      | "Snowflake"
      | "AzureKeyVault"
      | "AzureSqlDb"
      | "AzureSynapseAnalytics"
      | "AzureMySqlDb"
      | "AzurePostgresDb"
      | "ADLSGen2"
      | "AzureContainerAppEnvironment"
      | "Redis"
      | "ApiKey"
      | "AzureOpenAI"
      | "AIServices"
      | "CognitiveSearch"
      | "CognitiveService"
      | "CustomKeys"
      | "AzureBlob"
      | "AzureStorageAccount"
      | "AzureOneLake"
      | "CosmosDb"
      | "CosmosDbMongoDbApi"
      | "AzureDataExplorer"
      | "AzureMariaDb"
      | "AzureDatabricksDeltaLake"
      | "AzureSqlMi"
      | "AzureTableStorage"
      | "AmazonRdsForOracle"
      | "AmazonRdsForSqlServer"
      | "AmazonRedshift"
      | "Db2"
      | "Drill"
      | "GoogleBigQuery"
      | "Greenplum"
      | "Hbase"
      | "Hive"
      | "Impala"
      | "Informix"
      | "MariaDb"
      | "MicrosoftAccess"
      | "MySql"
      | "Netezza"
      | "Oracle"
      | "Phoenix"
      | "PostgreSql"
      | "Presto"
      | "SapOpenHub"
      | "SapBw"
      | "SapHana"
      | "SapTable"
      | "Spark"
      | "SqlServer"
      | "Sybase"
      | "Teradata"
      | "Vertica"
      | "Pinecone"
      | "Databricks"
      | "Cassandra"
      | "Couchbase"
      | "MongoDbV2"
      | "MongoDbAtlas"
      | "AmazonS3Compatible"
      | "FileServer"
      | "FtpServer"
      | "GoogleCloudStorage"
      | "Hdfs"
      | "OracleCloudStorage"
      | "Sftp"
      | "GenericHttp"
      | "ODataRest"
      | "Odbc"
      | "GenericRest"
      | "RemoteTool"
      | "AmazonMws"
      | "Concur"
      | "Dynamics"
      | "DynamicsAx"
      | "DynamicsCrm"
      | "GoogleAdWords"
      | "Hubspot"
      | "Jira"
      | "Magento"
      | "Marketo"
      | "Office365"
      | "Eloqua"
      | "Responsys"
      | "OracleServiceCloud"
      | "PayPal"
      | "QuickBooks"
      | "Salesforce"
      | "SalesforceServiceCloud"
      | "SalesforceMarketingCloud"
      | "SapCloudForCustomer"
      | "SapEcc"
      | "ServiceNow"
      | "SharePointOnlineList"
      | "Shopify"
      | "Square"
      | "WebTable"
      | "Xero"
      | "Zoho"
      | "GenericContainerRegistry"
      | "Elasticsearch"
      | "AppInsights"
      | "AppConfig"
      | "OpenAI"
      | "Serp"
      | "BingLLMSearch"
      | "Serverless"
      | "ManagedOnlineEndpoint"
      | "ApiManagement"
      | "ModelGateway"
      | "GroundingWithBingSearch"
      | "GroundingWithCustomSearch"
      | "Sharepoint"
      | "MicrosoftFabric"
      | "PowerPlatformEnvironment"
      | "RemoteA2A";
    createdByWorkspaceArmId?: string;
    error?: string;
    expiryTime?: string;
    group?:
      | "Azure"
      | "AzureAI"
      | "Database"
      | "NoSQL"
      | "File"
      | "GenericProtocol"
      | "ServicesAndApps";
    isSharedToAll?: boolean;
    metadata?: Record<string, string>;
    peRequirement?: "Required" | "NotRequired" | "NotApplicable";
    peStatus?: "Inactive" | "Active" | "NotApplicable";
    sharedUserList?: string[];
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
  };
}
export const WorkspaceConnectionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      authType: Schema.Literals([
        "PAT",
        "ManagedIdentity",
        "UsernamePassword",
        "None",
        "SAS",
        "AccountKey",
        "ServicePrincipal",
        "AccessKey",
        "ApiKey",
        "CustomKeys",
        "OAuth2",
        "AAD",
        "DelegatedSAS",
        "ProjectManagedIdentity",
        "AccountManagedIdentity",
        "UserEntraToken",
        "AgentUserImpersonation",
        "AgenticIdentityToken",
        "AgenticUser",
      ]),
      category: Schema.optional(
        Schema.Literals([
          "PythonFeed",
          "ContainerRegistry",
          "Git",
          "S3",
          "Snowflake",
          "AzureKeyVault",
          "AzureSqlDb",
          "AzureSynapseAnalytics",
          "AzureMySqlDb",
          "AzurePostgresDb",
          "ADLSGen2",
          "AzureContainerAppEnvironment",
          "Redis",
          "ApiKey",
          "AzureOpenAI",
          "AIServices",
          "CognitiveSearch",
          "CognitiveService",
          "CustomKeys",
          "AzureBlob",
          "AzureStorageAccount",
          "AzureOneLake",
          "CosmosDb",
          "CosmosDbMongoDbApi",
          "AzureDataExplorer",
          "AzureMariaDb",
          "AzureDatabricksDeltaLake",
          "AzureSqlMi",
          "AzureTableStorage",
          "AmazonRdsForOracle",
          "AmazonRdsForSqlServer",
          "AmazonRedshift",
          "Db2",
          "Drill",
          "GoogleBigQuery",
          "Greenplum",
          "Hbase",
          "Hive",
          "Impala",
          "Informix",
          "MariaDb",
          "MicrosoftAccess",
          "MySql",
          "Netezza",
          "Oracle",
          "Phoenix",
          "PostgreSql",
          "Presto",
          "SapOpenHub",
          "SapBw",
          "SapHana",
          "SapTable",
          "Spark",
          "SqlServer",
          "Sybase",
          "Teradata",
          "Vertica",
          "Pinecone",
          "Databricks",
          "Cassandra",
          "Couchbase",
          "MongoDbV2",
          "MongoDbAtlas",
          "AmazonS3Compatible",
          "FileServer",
          "FtpServer",
          "GoogleCloudStorage",
          "Hdfs",
          "OracleCloudStorage",
          "Sftp",
          "GenericHttp",
          "ODataRest",
          "Odbc",
          "GenericRest",
          "RemoteTool",
          "AmazonMws",
          "Concur",
          "Dynamics",
          "DynamicsAx",
          "DynamicsCrm",
          "GoogleAdWords",
          "Hubspot",
          "Jira",
          "Magento",
          "Marketo",
          "Office365",
          "Eloqua",
          "Responsys",
          "OracleServiceCloud",
          "PayPal",
          "QuickBooks",
          "Salesforce",
          "SalesforceServiceCloud",
          "SalesforceMarketingCloud",
          "SapCloudForCustomer",
          "SapEcc",
          "ServiceNow",
          "SharePointOnlineList",
          "Shopify",
          "Square",
          "WebTable",
          "Xero",
          "Zoho",
          "GenericContainerRegistry",
          "Elasticsearch",
          "AppInsights",
          "AppConfig",
          "OpenAI",
          "Serp",
          "BingLLMSearch",
          "Serverless",
          "ManagedOnlineEndpoint",
          "ApiManagement",
          "ModelGateway",
          "GroundingWithBingSearch",
          "GroundingWithCustomSearch",
          "Sharepoint",
          "MicrosoftFabric",
          "PowerPlatformEnvironment",
          "RemoteA2A",
        ]),
      ),
      createdByWorkspaceArmId: Schema.optional(Schema.String),
      error: Schema.optional(Schema.String),
      expiryTime: Schema.optional(Schema.String),
      group: Schema.optional(
        Schema.Literals([
          "Azure",
          "AzureAI",
          "Database",
          "NoSQL",
          "File",
          "GenericProtocol",
          "ServicesAndApps",
        ]),
      ),
      isSharedToAll: Schema.optional(Schema.Boolean),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      peRequirement: Schema.optional(
        Schema.Literals(["Required", "NotRequired", "NotApplicable"]),
      ),
      peStatus: Schema.optional(
        Schema.Literals(["Inactive", "Active", "NotApplicable"]),
      ),
      sharedUserList: Schema.optional(Schema.Array(Schema.String)),
      target: Schema.optional(Schema.String),
      useWorkspaceManagedIdentity: Schema.optional(Schema.Boolean),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceConnectionsCreateInput>;

// Output Schema
export interface WorkspaceConnectionsCreateOutput {
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
export const WorkspaceConnectionsCreateOutput =
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
  }) as unknown as Schema.Codec<WorkspaceConnectionsCreateOutput>;

// The operation
/**
 * Create or update machine learning workspaces connections under the specified workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param connectionName - Friendly name of the workspace connection
 */
export const WorkspaceConnectionsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspaceConnectionsCreateInput,
  outputSchema: WorkspaceConnectionsCreateOutput,
}));
// Input Schema
export interface WorkspaceConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  connectionName: string;
}
export const WorkspaceConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceConnectionsDeleteInput>;

// Output Schema
export type WorkspaceConnectionsDeleteOutput = void;
export const WorkspaceConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspaceConnectionsDeleteOutput>;

// The operation
/**
 * Delete machine learning workspaces connections by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param connectionName - Friendly name of the workspace connection
 */
export const WorkspaceConnectionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspaceConnectionsDeleteInput,
  outputSchema: WorkspaceConnectionsDeleteOutput,
}));
// Input Schema
export interface WorkspaceConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  connectionName: string;
}
export const WorkspaceConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceConnectionsGetInput>;

// Output Schema
export interface WorkspaceConnectionsGetOutput {
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
export const WorkspaceConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<WorkspaceConnectionsGetOutput>;

// The operation
/**
 * Lists machine learning workspaces connections by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param connectionName - Friendly name of the workspace connection
 */
export const WorkspaceConnectionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspaceConnectionsGetInput,
  outputSchema: WorkspaceConnectionsGetOutput,
}));
// Input Schema
export interface WorkspaceConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  target?: string;
  category?: string;
  includeAll?: boolean;
}
export const WorkspaceConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    target: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    includeAll: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceConnectionsListInput>;

// Output Schema
export interface WorkspaceConnectionsListOutput {
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
export const WorkspaceConnectionsListOutput =
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
  }) as unknown as Schema.Codec<WorkspaceConnectionsListOutput>;

// The operation
/**
 * List all the available machine learning workspaces connections under the specified workspace.
 *
 * Lists all the available machine learning workspaces connections under the specified workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param target - Target of the workspace connection.
 * @param category - Category of the workspace connection.
 * @param includeAll - query parameter that indicates if get connection call should return both connections and datastores
 */
export const WorkspaceConnectionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspaceConnectionsListInput,
  outputSchema: WorkspaceConnectionsListOutput,
}));
// Input Schema
export interface WorkspaceConnectionsListSecretsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  connectionName: string;
}
export const WorkspaceConnectionsListSecretsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}/listsecrets",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceConnectionsListSecretsInput>;

// Output Schema
export interface WorkspaceConnectionsListSecretsOutput {
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
export const WorkspaceConnectionsListSecretsOutput =
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
  }) as unknown as Schema.Codec<WorkspaceConnectionsListSecretsOutput>;

// The operation
/**
 * List all the secrets of a machine learning workspaces connections.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param connectionName - Friendly name of the workspace connection
 */
export const WorkspaceConnectionsListSecrets =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspaceConnectionsListSecretsInput,
    outputSchema: WorkspaceConnectionsListSecretsOutput,
  }));
// Input Schema
export interface WorkspaceConnectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  connectionName: string;
  properties?: {
    authType:
      | "PAT"
      | "ManagedIdentity"
      | "UsernamePassword"
      | "None"
      | "SAS"
      | "AccountKey"
      | "ServicePrincipal"
      | "AccessKey"
      | "ApiKey"
      | "CustomKeys"
      | "OAuth2"
      | "AAD"
      | "DelegatedSAS"
      | "ProjectManagedIdentity"
      | "AccountManagedIdentity"
      | "UserEntraToken"
      | "AgentUserImpersonation"
      | "AgenticIdentityToken"
      | "AgenticUser";
    category?:
      | "PythonFeed"
      | "ContainerRegistry"
      | "Git"
      | "S3"
      | "Snowflake"
      | "AzureKeyVault"
      | "AzureSqlDb"
      | "AzureSynapseAnalytics"
      | "AzureMySqlDb"
      | "AzurePostgresDb"
      | "ADLSGen2"
      | "AzureContainerAppEnvironment"
      | "Redis"
      | "ApiKey"
      | "AzureOpenAI"
      | "AIServices"
      | "CognitiveSearch"
      | "CognitiveService"
      | "CustomKeys"
      | "AzureBlob"
      | "AzureStorageAccount"
      | "AzureOneLake"
      | "CosmosDb"
      | "CosmosDbMongoDbApi"
      | "AzureDataExplorer"
      | "AzureMariaDb"
      | "AzureDatabricksDeltaLake"
      | "AzureSqlMi"
      | "AzureTableStorage"
      | "AmazonRdsForOracle"
      | "AmazonRdsForSqlServer"
      | "AmazonRedshift"
      | "Db2"
      | "Drill"
      | "GoogleBigQuery"
      | "Greenplum"
      | "Hbase"
      | "Hive"
      | "Impala"
      | "Informix"
      | "MariaDb"
      | "MicrosoftAccess"
      | "MySql"
      | "Netezza"
      | "Oracle"
      | "Phoenix"
      | "PostgreSql"
      | "Presto"
      | "SapOpenHub"
      | "SapBw"
      | "SapHana"
      | "SapTable"
      | "Spark"
      | "SqlServer"
      | "Sybase"
      | "Teradata"
      | "Vertica"
      | "Pinecone"
      | "Databricks"
      | "Cassandra"
      | "Couchbase"
      | "MongoDbV2"
      | "MongoDbAtlas"
      | "AmazonS3Compatible"
      | "FileServer"
      | "FtpServer"
      | "GoogleCloudStorage"
      | "Hdfs"
      | "OracleCloudStorage"
      | "Sftp"
      | "GenericHttp"
      | "ODataRest"
      | "Odbc"
      | "GenericRest"
      | "RemoteTool"
      | "AmazonMws"
      | "Concur"
      | "Dynamics"
      | "DynamicsAx"
      | "DynamicsCrm"
      | "GoogleAdWords"
      | "Hubspot"
      | "Jira"
      | "Magento"
      | "Marketo"
      | "Office365"
      | "Eloqua"
      | "Responsys"
      | "OracleServiceCloud"
      | "PayPal"
      | "QuickBooks"
      | "Salesforce"
      | "SalesforceServiceCloud"
      | "SalesforceMarketingCloud"
      | "SapCloudForCustomer"
      | "SapEcc"
      | "ServiceNow"
      | "SharePointOnlineList"
      | "Shopify"
      | "Square"
      | "WebTable"
      | "Xero"
      | "Zoho"
      | "GenericContainerRegistry"
      | "Elasticsearch"
      | "AppInsights"
      | "AppConfig"
      | "OpenAI"
      | "Serp"
      | "BingLLMSearch"
      | "Serverless"
      | "ManagedOnlineEndpoint"
      | "ApiManagement"
      | "ModelGateway"
      | "GroundingWithBingSearch"
      | "GroundingWithCustomSearch"
      | "Sharepoint"
      | "MicrosoftFabric"
      | "PowerPlatformEnvironment"
      | "RemoteA2A";
    createdByWorkspaceArmId?: string;
    error?: string;
    expiryTime?: string;
    group?:
      | "Azure"
      | "AzureAI"
      | "Database"
      | "NoSQL"
      | "File"
      | "GenericProtocol"
      | "ServicesAndApps";
    isSharedToAll?: boolean;
    metadata?: Record<string, string>;
    peRequirement?: "Required" | "NotRequired" | "NotApplicable";
    peStatus?: "Inactive" | "Active" | "NotApplicable";
    sharedUserList?: string[];
    target?: string;
    useWorkspaceManagedIdentity?: boolean;
  };
}
export const WorkspaceConnectionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        authType: Schema.Literals([
          "PAT",
          "ManagedIdentity",
          "UsernamePassword",
          "None",
          "SAS",
          "AccountKey",
          "ServicePrincipal",
          "AccessKey",
          "ApiKey",
          "CustomKeys",
          "OAuth2",
          "AAD",
          "DelegatedSAS",
          "ProjectManagedIdentity",
          "AccountManagedIdentity",
          "UserEntraToken",
          "AgentUserImpersonation",
          "AgenticIdentityToken",
          "AgenticUser",
        ]),
        category: Schema.optional(
          Schema.Literals([
            "PythonFeed",
            "ContainerRegistry",
            "Git",
            "S3",
            "Snowflake",
            "AzureKeyVault",
            "AzureSqlDb",
            "AzureSynapseAnalytics",
            "AzureMySqlDb",
            "AzurePostgresDb",
            "ADLSGen2",
            "AzureContainerAppEnvironment",
            "Redis",
            "ApiKey",
            "AzureOpenAI",
            "AIServices",
            "CognitiveSearch",
            "CognitiveService",
            "CustomKeys",
            "AzureBlob",
            "AzureStorageAccount",
            "AzureOneLake",
            "CosmosDb",
            "CosmosDbMongoDbApi",
            "AzureDataExplorer",
            "AzureMariaDb",
            "AzureDatabricksDeltaLake",
            "AzureSqlMi",
            "AzureTableStorage",
            "AmazonRdsForOracle",
            "AmazonRdsForSqlServer",
            "AmazonRedshift",
            "Db2",
            "Drill",
            "GoogleBigQuery",
            "Greenplum",
            "Hbase",
            "Hive",
            "Impala",
            "Informix",
            "MariaDb",
            "MicrosoftAccess",
            "MySql",
            "Netezza",
            "Oracle",
            "Phoenix",
            "PostgreSql",
            "Presto",
            "SapOpenHub",
            "SapBw",
            "SapHana",
            "SapTable",
            "Spark",
            "SqlServer",
            "Sybase",
            "Teradata",
            "Vertica",
            "Pinecone",
            "Databricks",
            "Cassandra",
            "Couchbase",
            "MongoDbV2",
            "MongoDbAtlas",
            "AmazonS3Compatible",
            "FileServer",
            "FtpServer",
            "GoogleCloudStorage",
            "Hdfs",
            "OracleCloudStorage",
            "Sftp",
            "GenericHttp",
            "ODataRest",
            "Odbc",
            "GenericRest",
            "RemoteTool",
            "AmazonMws",
            "Concur",
            "Dynamics",
            "DynamicsAx",
            "DynamicsCrm",
            "GoogleAdWords",
            "Hubspot",
            "Jira",
            "Magento",
            "Marketo",
            "Office365",
            "Eloqua",
            "Responsys",
            "OracleServiceCloud",
            "PayPal",
            "QuickBooks",
            "Salesforce",
            "SalesforceServiceCloud",
            "SalesforceMarketingCloud",
            "SapCloudForCustomer",
            "SapEcc",
            "ServiceNow",
            "SharePointOnlineList",
            "Shopify",
            "Square",
            "WebTable",
            "Xero",
            "Zoho",
            "GenericContainerRegistry",
            "Elasticsearch",
            "AppInsights",
            "AppConfig",
            "OpenAI",
            "Serp",
            "BingLLMSearch",
            "Serverless",
            "ManagedOnlineEndpoint",
            "ApiManagement",
            "ModelGateway",
            "GroundingWithBingSearch",
            "GroundingWithCustomSearch",
            "Sharepoint",
            "MicrosoftFabric",
            "PowerPlatformEnvironment",
            "RemoteA2A",
          ]),
        ),
        createdByWorkspaceArmId: Schema.optional(Schema.String),
        error: Schema.optional(Schema.String),
        expiryTime: Schema.optional(Schema.String),
        group: Schema.optional(
          Schema.Literals([
            "Azure",
            "AzureAI",
            "Database",
            "NoSQL",
            "File",
            "GenericProtocol",
            "ServicesAndApps",
          ]),
        ),
        isSharedToAll: Schema.optional(Schema.Boolean),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        peRequirement: Schema.optional(
          Schema.Literals(["Required", "NotRequired", "NotApplicable"]),
        ),
        peStatus: Schema.optional(
          Schema.Literals(["Inactive", "Active", "NotApplicable"]),
        ),
        sharedUserList: Schema.optional(Schema.Array(Schema.String)),
        target: Schema.optional(Schema.String),
        useWorkspaceManagedIdentity: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceConnectionsUpdateInput>;

// Output Schema
export interface WorkspaceConnectionsUpdateOutput {
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
export const WorkspaceConnectionsUpdateOutput =
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
  }) as unknown as Schema.Codec<WorkspaceConnectionsUpdateOutput>;

// The operation
/**
 * Update machine learning workspaces connections under the specified workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param connectionName - Friendly name of the workspace connection
 */
export const WorkspaceConnectionsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspaceConnectionsUpdateInput,
  outputSchema: WorkspaceConnectionsUpdateOutput,
}));
// Input Schema
export interface WorkspaceFeaturesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspaceFeaturesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/features",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspaceFeaturesListInput>;

// Output Schema
export interface WorkspaceFeaturesListOutput {
  value: { id?: string; displayName?: string; description?: string }[];
  nextLink?: string;
}
export const WorkspaceFeaturesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspaceFeaturesListOutput>;

// The operation
/**
 * Lists all enabled features for a workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspaceFeaturesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspaceFeaturesListInput,
  outputSchema: WorkspaceFeaturesListOutput,
}));
// Input Schema
export interface WorkspacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  properties: {
    allowPublicAccessWhenBehindVnet?: boolean;
    applicationInsights?: string;
    associatedWorkspaces?: string[];
    containerRegistry?: string;
    description?: string;
    discoveryUrl?: string;
    enableDataIsolation?: boolean;
    enableServiceSideCMKEncryption?: boolean;
    encryption?: {
      cosmosDbResourceId?: string;
      identity?: { userAssignedIdentity?: string };
      keyVaultProperties: {
        identityClientId?: string;
        keyIdentifier: string;
        keyVaultArmId: string;
      };
      searchAccountResourceId?: string;
      status: "Enabled" | "Disabled";
      storageAccountResourceId?: string;
    };
    featureStoreSettings?: {
      computeRuntime?: { sparkRuntimeVersion?: string };
      offlineStoreConnectionName?: string;
      onlineStoreConnectionName?: string;
    };
    friendlyName?: string;
    hbiWorkspace?: boolean;
    hubResourceId?: string;
    imageBuildCompute?: string;
    keyVault?: string;
    managedNetwork?: {
      enableNetworkMonitor?: boolean;
      isolationMode?:
        | "Disabled"
        | "AllowInternetOutbound"
        | "AllowOnlyApprovedOutbound";
      networkId?: string;
      outboundRules?: Record<
        string,
        {
          category?: "Required" | "Recommended" | "UserDefined" | "Dependency";
          status?:
            | "Inactive"
            | "Active"
            | "Provisioning"
            | "Deleting"
            | "Failed";
          type: "FQDN" | "PrivateEndpoint" | "ServiceTag";
          errorInformation?: string;
          parentRuleNames?: string[];
        }
      > | null;
      status?: { sparkReady?: boolean; status?: "Inactive" | "Active" };
      firewallSku?: "Standard" | "Basic";
      managedNetworkKind?: "V1" | "V2";
      firewallPublicIpAddress?: string | null;
    };
    mlFlowTrackingUri?: string;
    notebookInfo?: {
      fqdn?: string;
      isPrivateLinkEnabled?: boolean;
      notebookPreparationError?: { errorMessage?: string; statusCode?: number };
      resourceId?: string;
    };
    primaryUserAssignedIdentity?: string;
    privateEndpointConnections?: {
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
    privateLinkCount?: number;
    provisionNetworkNow?: boolean;
    provisioningState?:
      | "Unknown"
      | "Updating"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    publicNetworkAccess?: "Enabled" | "Disabled";
    serverlessComputeSettings?: {
      serverlessComputeCustomSubnet?: string;
      serverlessComputeNoPublicIP?: boolean;
    };
    serviceManagedResourcesSettings?: {
      cosmosDb?: { collectionsThroughput?: number };
    };
    serviceProvisionedResourceGroup?: string;
    sharedPrivateLinkResources?: {
      name?: string;
      properties?: {
        groupId?: string;
        privateLinkResourceId?: string;
        requestMessage?: string;
        status?:
          | "Approved"
          | "Pending"
          | "Rejected"
          | "Disconnected"
          | "Timeout";
      };
    }[];
    storageAccount?: string;
    storageHnsEnabled?: boolean;
    systemDatastoresAuthMode?: "AccessKey" | "Identity" | "UserDelegationSAS";
    tenantId?: string;
    v1LegacyMode?: boolean;
    workspaceHubConfig?: {
      additionalWorkspaceStorageAccounts?: string[];
      defaultWorkspaceResourceGroup?: string;
    };
    workspaceId?: string;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  kind?: string;
  location?: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
}
export const WorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      allowPublicAccessWhenBehindVnet: Schema.optional(Schema.Boolean),
      applicationInsights: Schema.optional(Schema.String),
      associatedWorkspaces: Schema.optional(Schema.Array(Schema.String)),
      containerRegistry: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      discoveryUrl: Schema.optional(Schema.String),
      enableDataIsolation: Schema.optional(Schema.Boolean),
      enableServiceSideCMKEncryption: Schema.optional(Schema.Boolean),
      encryption: Schema.optional(
        Schema.Struct({
          cosmosDbResourceId: Schema.optional(Schema.String),
          identity: Schema.optional(
            Schema.Struct({
              userAssignedIdentity: Schema.optional(Schema.String),
            }),
          ),
          keyVaultProperties: Schema.Struct({
            identityClientId: Schema.optional(Schema.String),
            keyIdentifier: Schema.String,
            keyVaultArmId: Schema.String,
          }),
          searchAccountResourceId: Schema.optional(Schema.String),
          status: Schema.Literals(["Enabled", "Disabled"]),
          storageAccountResourceId: Schema.optional(Schema.String),
        }),
      ),
      featureStoreSettings: Schema.optional(
        Schema.Struct({
          computeRuntime: Schema.optional(
            Schema.Struct({
              sparkRuntimeVersion: Schema.optional(Schema.String),
            }),
          ),
          offlineStoreConnectionName: Schema.optional(Schema.String),
          onlineStoreConnectionName: Schema.optional(Schema.String),
        }),
      ),
      friendlyName: Schema.optional(Schema.String),
      hbiWorkspace: Schema.optional(Schema.Boolean),
      hubResourceId: Schema.optional(Schema.String),
      imageBuildCompute: Schema.optional(Schema.String),
      keyVault: Schema.optional(Schema.String),
      managedNetwork: Schema.optional(
        Schema.Struct({
          enableNetworkMonitor: Schema.optional(Schema.Boolean),
          isolationMode: Schema.optional(
            Schema.Literals([
              "Disabled",
              "AllowInternetOutbound",
              "AllowOnlyApprovedOutbound",
            ]),
          ),
          networkId: Schema.optional(Schema.String),
          outboundRules: Schema.optional(
            Schema.NullOr(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  category: Schema.optional(
                    Schema.Literals([
                      "Required",
                      "Recommended",
                      "UserDefined",
                      "Dependency",
                    ]),
                  ),
                  status: Schema.optional(
                    Schema.Literals([
                      "Inactive",
                      "Active",
                      "Provisioning",
                      "Deleting",
                      "Failed",
                    ]),
                  ),
                  type: Schema.Literals([
                    "FQDN",
                    "PrivateEndpoint",
                    "ServiceTag",
                  ]),
                  errorInformation: Schema.optional(Schema.String),
                  parentRuleNames: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
          ),
          status: Schema.optional(
            Schema.Struct({
              sparkReady: Schema.optional(Schema.Boolean),
              status: Schema.optional(Schema.Literals(["Inactive", "Active"])),
            }),
          ),
          firewallSku: Schema.optional(Schema.Literals(["Standard", "Basic"])),
          managedNetworkKind: Schema.optional(Schema.Literals(["V1", "V2"])),
          firewallPublicIpAddress: Schema.optional(
            Schema.NullOr(Schema.String),
          ),
        }),
      ),
      mlFlowTrackingUri: Schema.optional(Schema.String),
      notebookInfo: Schema.optional(
        Schema.Struct({
          fqdn: Schema.optional(Schema.String),
          isPrivateLinkEnabled: Schema.optional(Schema.Boolean),
          notebookPreparationError: Schema.optional(
            Schema.Struct({
              errorMessage: Schema.optional(Schema.String),
              statusCode: Schema.optional(Schema.Number),
            }),
          ),
          resourceId: Schema.optional(Schema.String),
        }),
      ),
      primaryUserAssignedIdentity: Schema.optional(Schema.String),
      privateEndpointConnections: Schema.optional(
        Schema.Array(
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
      ),
      privateLinkCount: Schema.optional(Schema.Number),
      provisionNetworkNow: Schema.optional(Schema.Boolean),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Updating",
          "Creating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Canceled",
        ]),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      serverlessComputeSettings: Schema.optional(
        Schema.Struct({
          serverlessComputeCustomSubnet: Schema.optional(Schema.String),
          serverlessComputeNoPublicIP: Schema.optional(Schema.Boolean),
        }),
      ),
      serviceManagedResourcesSettings: Schema.optional(
        Schema.Struct({
          cosmosDb: Schema.optional(
            Schema.Struct({
              collectionsThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
      serviceProvisionedResourceGroup: Schema.optional(Schema.String),
      sharedPrivateLinkResources: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                groupId: Schema.optional(Schema.String),
                privateLinkResourceId: Schema.optional(Schema.String),
                requestMessage: Schema.optional(Schema.String),
                status: Schema.optional(
                  Schema.Literals([
                    "Approved",
                    "Pending",
                    "Rejected",
                    "Disconnected",
                    "Timeout",
                  ]),
                ),
              }),
            ),
          }),
        ),
      ),
      storageAccount: Schema.optional(Schema.String),
      storageHnsEnabled: Schema.optional(Schema.Boolean),
      systemDatastoresAuthMode: Schema.optional(
        Schema.Literals(["AccessKey", "Identity", "UserDelegationSAS"]),
      ),
      tenantId: Schema.optional(Schema.String),
      v1LegacyMode: Schema.optional(Schema.Boolean),
      workspaceHubConfig: Schema.optional(
        Schema.Struct({
          additionalWorkspaceStorageAccounts: Schema.optional(
            Schema.Array(Schema.String),
          ),
          defaultWorkspaceResourceGroup: Schema.optional(Schema.String),
        }),
      ),
      workspaceId: Schema.optional(Schema.String),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesCreateOrUpdateInput>;

// Output Schema
export interface WorkspacesCreateOrUpdateOutput {
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
export const WorkspacesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WorkspacesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a workspace with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspacesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesCreateOrUpdateInput,
  outputSchema: WorkspacesCreateOrUpdateOutput,
}));
// Input Schema
export interface WorkspacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  forceToPurge?: boolean;
}
export const WorkspacesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  forceToPurge: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<WorkspacesDeleteInput>;

// Output Schema
export type WorkspacesDeleteOutput = void;
export const WorkspacesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspacesDeleteOutput>;

// The operation
/**
 * Deletes a machine learning workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 * @param forceToPurge - Flag to indicate delete is a purge request.
 */
export const WorkspacesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesDeleteInput,
  outputSchema: WorkspacesDeleteOutput,
}));
// Input Schema
export interface WorkspacesDiagnoseInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  value?: {
    applicationInsights?: Record<string, unknown>;
    containerRegistry?: Record<string, unknown>;
    dnsResolution?: Record<string, unknown>;
    keyVault?: Record<string, unknown>;
    nsg?: Record<string, unknown>;
    others?: Record<string, unknown>;
    requiredResourceProviders?: Record<string, unknown>;
    resourceLock?: Record<string, unknown>;
    storageAccount?: Record<string, unknown>;
    udr?: Record<string, unknown>;
  };
}
export const WorkspacesDiagnoseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    value: Schema.optional(
      Schema.Struct({
        applicationInsights: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        containerRegistry: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        dnsResolution: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        keyVault: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        nsg: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        others: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        requiredResourceProviders: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        resourceLock: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        storageAccount: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        udr: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/diagnose",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesDiagnoseInput>;

// Output Schema
export interface WorkspacesDiagnoseOutput {
  value?: {
    userDefinedRouteResults?: {
      code?: string;
      level?: "Warning" | "Error" | "Information";
      message?: string;
    }[];
    networkSecurityRuleResults?: {
      code?: string;
      level?: "Warning" | "Error" | "Information";
      message?: string;
    }[];
    resourceLockResults?: {
      code?: string;
      level?: "Warning" | "Error" | "Information";
      message?: string;
    }[];
    dnsResolutionResults?: {
      code?: string;
      level?: "Warning" | "Error" | "Information";
      message?: string;
    }[];
    storageAccountResults?: {
      code?: string;
      level?: "Warning" | "Error" | "Information";
      message?: string;
    }[];
    keyVaultResults?: {
      code?: string;
      level?: "Warning" | "Error" | "Information";
      message?: string;
    }[];
    containerRegistryResults?: {
      code?: string;
      level?: "Warning" | "Error" | "Information";
      message?: string;
    }[];
    applicationInsightsResults?: {
      code?: string;
      level?: "Warning" | "Error" | "Information";
      message?: string;
    }[];
    otherResults?: {
      code?: string;
      level?: "Warning" | "Error" | "Information";
      message?: string;
    }[];
  };
}
export const WorkspacesDiagnoseOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Struct({
        userDefinedRouteResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              level: Schema.optional(
                Schema.Literals(["Warning", "Error", "Information"]),
              ),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
        networkSecurityRuleResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              level: Schema.optional(
                Schema.Literals(["Warning", "Error", "Information"]),
              ),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
        resourceLockResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              level: Schema.optional(
                Schema.Literals(["Warning", "Error", "Information"]),
              ),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
        dnsResolutionResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              level: Schema.optional(
                Schema.Literals(["Warning", "Error", "Information"]),
              ),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
        storageAccountResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              level: Schema.optional(
                Schema.Literals(["Warning", "Error", "Information"]),
              ),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
        keyVaultResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              level: Schema.optional(
                Schema.Literals(["Warning", "Error", "Information"]),
              ),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
        containerRegistryResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              level: Schema.optional(
                Schema.Literals(["Warning", "Error", "Information"]),
              ),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
        applicationInsightsResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              level: Schema.optional(
                Schema.Literals(["Warning", "Error", "Information"]),
              ),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
        otherResults: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              level: Schema.optional(
                Schema.Literals(["Warning", "Error", "Information"]),
              ),
              message: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<WorkspacesDiagnoseOutput>;

// The operation
/**
 * Diagnose workspace setup issue.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspacesDiagnose = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesDiagnoseInput,
  outputSchema: WorkspacesDiagnoseOutput,
}));
// Input Schema
export interface WorkspacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<WorkspacesGetInput>;

// Output Schema
export interface WorkspacesGetOutput {
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
export const WorkspacesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WorkspacesGetOutput>;

// The operation
/**
 * Gets the properties of the specified machine learning workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspacesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesGetInput,
  outputSchema: WorkspacesGetOutput,
}));
// Input Schema
export interface WorkspacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  kind?: string;
  $skip?: string;
  aiCapabilities?: string;
}
export const WorkspacesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.String),
    $skip: Schema.optional(Schema.String),
    aiCapabilities: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListByResourceGroupInput>;

// Output Schema
export interface WorkspacesListByResourceGroupOutput {
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
export const WorkspacesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<WorkspacesListByResourceGroupOutput>;

// The operation
/**
 * Lists all the available machine learning workspaces under the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param kind - Kind of workspace.
 * @param $skip - Continuation token for pagination.
 */
export const WorkspacesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListByResourceGroupInput,
    outputSchema: WorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export interface WorkspacesListBySubscriptionInput {
  subscriptionId: string;
  kind?: string;
  $skip?: string;
  aiCapabilities?: string;
}
export const WorkspacesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.String),
    $skip: Schema.optional(Schema.String),
    aiCapabilities: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/workspaces",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListBySubscriptionInput>;

// Output Schema
export interface WorkspacesListBySubscriptionOutput {
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
export const WorkspacesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<WorkspacesListBySubscriptionOutput>;

// The operation
/**
 * Lists all the available machine learning workspaces under the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param kind - Kind of workspace.
 * @param $skip - Continuation token for pagination.
 */
export const WorkspacesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListBySubscriptionInput,
    outputSchema: WorkspacesListBySubscriptionOutput,
  }));
// Input Schema
export interface WorkspacesListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/listKeys",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListKeysInput>;

// Output Schema
export interface WorkspacesListKeysOutput {
  appInsightsInstrumentationKey?: string;
  containerRegistryCredentials?: {
    location?: string;
    passwords?: { name?: string; value?: string }[];
    username?: string;
  };
  notebookAccessKeys?: {
    primaryAccessKey?: string;
    secondaryAccessKey?: string;
  };
  userStorageArmId?: string;
  userStorageKey?: string;
}
export const WorkspacesListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    appInsightsInstrumentationKey: Schema.optional(Schema.String),
    containerRegistryCredentials: Schema.optional(
      Schema.Struct({
        location: Schema.optional(Schema.String),
        passwords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        username: Schema.optional(Schema.String),
      }),
    ),
    notebookAccessKeys: Schema.optional(
      Schema.Struct({
        primaryAccessKey: Schema.optional(Schema.String),
        secondaryAccessKey: Schema.optional(Schema.String),
      }),
    ),
    userStorageArmId: Schema.optional(Schema.String),
    userStorageKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspacesListKeysOutput>;

// The operation
/**
 * Lists all the keys associated with this workspace. This includes keys for the storage account, app insights and password for container registry.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspacesListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesListKeysInput,
  outputSchema: WorkspacesListKeysOutput,
}));
// Input Schema
export interface WorkspacesListNotebookAccessTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesListNotebookAccessTokenInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/listNotebookAccessToken",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListNotebookAccessTokenInput>;

// Output Schema
export interface WorkspacesListNotebookAccessTokenOutput {
  accessToken?: Redacted.Redacted<string>;
  expiresIn?: number;
  hostName?: string;
  notebookResourceId?: string;
  publicDns?: string;
  refreshToken?: Redacted.Redacted<string>;
  scope?: string;
  tokenType?: string;
}
export const WorkspacesListNotebookAccessTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(SensitiveOutputString),
    expiresIn: Schema.optional(Schema.Number),
    hostName: Schema.optional(Schema.String),
    notebookResourceId: Schema.optional(Schema.String),
    publicDns: Schema.optional(Schema.String),
    refreshToken: Schema.optional(SensitiveOutputString),
    scope: Schema.optional(Schema.String),
    tokenType: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspacesListNotebookAccessTokenOutput>;

// The operation
/**
 * Get Azure Machine Learning Workspace notebook access token
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspacesListNotebookAccessToken =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListNotebookAccessTokenInput,
    outputSchema: WorkspacesListNotebookAccessTokenOutput,
  }));
// Input Schema
export interface WorkspacesListNotebookKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesListNotebookKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/listNotebookKeys",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListNotebookKeysInput>;

// Output Schema
export interface WorkspacesListNotebookKeysOutput {
  primaryAccessKey?: string;
  secondaryAccessKey?: string;
}
export const WorkspacesListNotebookKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryAccessKey: Schema.optional(Schema.String),
    secondaryAccessKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspacesListNotebookKeysOutput>;

// The operation
/**
 * Lists keys of Azure Machine Learning Workspaces notebook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspacesListNotebookKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesListNotebookKeysInput,
  outputSchema: WorkspacesListNotebookKeysOutput,
}));
// Input Schema
export interface WorkspacesListOutboundNetworkDependenciesEndpointsInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesListOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListOutboundNetworkDependenciesEndpointsInput>;

// Output Schema
export interface WorkspacesListOutboundNetworkDependenciesEndpointsOutput {
  value?: {
    properties?: {
      category?: string;
      endpoints?: {
        domainName?: string;
        endpointDetails?: { port?: number }[];
      }[];
    };
  }[];
}
export const WorkspacesListOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              category: Schema.optional(Schema.String),
              endpoints: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    domainName: Schema.optional(Schema.String),
                    endpointDetails: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          port: Schema.optional(Schema.Number),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<WorkspacesListOutboundNetworkDependenciesEndpointsOutput>;

// The operation
/**
 * Called by Client (Portal, CLI, etc) to get a list of all external outbound dependencies (FQDNs) programmatically.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspacesListOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListOutboundNetworkDependenciesEndpointsInput,
    outputSchema: WorkspacesListOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export interface WorkspacesListStorageAccountKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesListStorageAccountKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/listStorageAccountKeys",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesListStorageAccountKeysInput>;

// Output Schema
export interface WorkspacesListStorageAccountKeysOutput {
  userStorageKey?: string;
}
export const WorkspacesListStorageAccountKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    userStorageKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspacesListStorageAccountKeysOutput>;

// The operation
/**
 * Lists keys of Azure Machine Learning Workspace's storage account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspacesListStorageAccountKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListStorageAccountKeysInput,
    outputSchema: WorkspacesListStorageAccountKeysOutput,
  }));
// Input Schema
export interface WorkspacesPrepareNotebookInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesPrepareNotebookInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/prepareNotebook",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesPrepareNotebookInput>;

// Output Schema
export interface WorkspacesPrepareNotebookOutput {
  fqdn?: string;
  isPrivateLinkEnabled?: boolean;
  notebookPreparationError?: { errorMessage?: string; statusCode?: number };
  resourceId?: string;
}
export const WorkspacesPrepareNotebookOutput =
  /*@__PURE__*/ Schema.Struct({
    fqdn: Schema.optional(Schema.String),
    isPrivateLinkEnabled: Schema.optional(Schema.Boolean),
    notebookPreparationError: Schema.optional(
      Schema.Struct({
        errorMessage: Schema.optional(Schema.String),
        statusCode: Schema.optional(Schema.Number),
      }),
    ),
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<WorkspacesPrepareNotebookOutput>;

// The operation
/**
 * Prepare Azure Machine Learning Workspace's notebook resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspacesPrepareNotebook = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesPrepareNotebookInput,
  outputSchema: WorkspacesPrepareNotebookOutput,
}));
// Input Schema
export interface WorkspacesResyncKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesResyncKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/resyncKeys",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkspacesResyncKeysInput>;

// Output Schema
export type WorkspacesResyncKeysOutput = void;
export const WorkspacesResyncKeysOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspacesResyncKeysOutput>;

// The operation
/**
 * Resync all the keys associated with this workspace.This includes keys for the storage account, app insights and password for container registry
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspacesResyncKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesResyncKeysInput,
  outputSchema: WorkspacesResyncKeysOutput,
}));
// Input Schema
export interface WorkspacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  properties?: {
    applicationInsights?: string;
    containerRegistry?: string;
    description?: string;
    enableDataIsolation?: boolean;
    encryption?: { keyVaultProperties: { keyIdentifier: string } };
    featureStoreSettings?: {
      computeRuntime?: { sparkRuntimeVersion?: string };
      offlineStoreConnectionName?: string;
      onlineStoreConnectionName?: string;
    };
    friendlyName?: string;
    imageBuildCompute?: string;
    managedNetwork?: {
      enableNetworkMonitor?: boolean;
      isolationMode?:
        | "Disabled"
        | "AllowInternetOutbound"
        | "AllowOnlyApprovedOutbound";
      networkId?: string;
      outboundRules?: Record<
        string,
        {
          category?: "Required" | "Recommended" | "UserDefined" | "Dependency";
          status?:
            | "Inactive"
            | "Active"
            | "Provisioning"
            | "Deleting"
            | "Failed";
          type: "FQDN" | "PrivateEndpoint" | "ServiceTag";
          errorInformation?: string;
          parentRuleNames?: string[];
        }
      > | null;
      status?: { sparkReady?: boolean; status?: "Inactive" | "Active" };
      firewallSku?: "Standard" | "Basic";
      managedNetworkKind?: "V1" | "V2";
      firewallPublicIpAddress?: string | null;
    };
    primaryUserAssignedIdentity?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
    serverlessComputeSettings?: {
      serverlessComputeCustomSubnet?: string;
      serverlessComputeNoPublicIP?: boolean;
    };
    serviceManagedResourcesSettings?: {
      cosmosDb?: { collectionsThroughput?: number };
    };
    systemDatastoresAuthMode?: "AccessKey" | "Identity" | "UserDelegationSAS";
    v1LegacyMode?: boolean;
  };
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
}
export const WorkspacesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
      userAssignedIdentities: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      ),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      applicationInsights: Schema.optional(Schema.String),
      containerRegistry: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      enableDataIsolation: Schema.optional(Schema.Boolean),
      encryption: Schema.optional(
        Schema.Struct({
          keyVaultProperties: Schema.Struct({
            keyIdentifier: Schema.String,
          }),
        }),
      ),
      featureStoreSettings: Schema.optional(
        Schema.Struct({
          computeRuntime: Schema.optional(
            Schema.Struct({
              sparkRuntimeVersion: Schema.optional(Schema.String),
            }),
          ),
          offlineStoreConnectionName: Schema.optional(Schema.String),
          onlineStoreConnectionName: Schema.optional(Schema.String),
        }),
      ),
      friendlyName: Schema.optional(Schema.String),
      imageBuildCompute: Schema.optional(Schema.String),
      managedNetwork: Schema.optional(
        Schema.Struct({
          enableNetworkMonitor: Schema.optional(Schema.Boolean),
          isolationMode: Schema.optional(
            Schema.Literals([
              "Disabled",
              "AllowInternetOutbound",
              "AllowOnlyApprovedOutbound",
            ]),
          ),
          networkId: Schema.optional(Schema.String),
          outboundRules: Schema.optional(
            Schema.NullOr(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  category: Schema.optional(
                    Schema.Literals([
                      "Required",
                      "Recommended",
                      "UserDefined",
                      "Dependency",
                    ]),
                  ),
                  status: Schema.optional(
                    Schema.Literals([
                      "Inactive",
                      "Active",
                      "Provisioning",
                      "Deleting",
                      "Failed",
                    ]),
                  ),
                  type: Schema.Literals([
                    "FQDN",
                    "PrivateEndpoint",
                    "ServiceTag",
                  ]),
                  errorInformation: Schema.optional(Schema.String),
                  parentRuleNames: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
          ),
          status: Schema.optional(
            Schema.Struct({
              sparkReady: Schema.optional(Schema.Boolean),
              status: Schema.optional(Schema.Literals(["Inactive", "Active"])),
            }),
          ),
          firewallSku: Schema.optional(Schema.Literals(["Standard", "Basic"])),
          managedNetworkKind: Schema.optional(Schema.Literals(["V1", "V2"])),
          firewallPublicIpAddress: Schema.optional(
            Schema.NullOr(Schema.String),
          ),
        }),
      ),
      primaryUserAssignedIdentity: Schema.optional(Schema.String),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      serverlessComputeSettings: Schema.optional(
        Schema.Struct({
          serverlessComputeCustomSubnet: Schema.optional(Schema.String),
          serverlessComputeNoPublicIP: Schema.optional(Schema.Boolean),
        }),
      ),
      serviceManagedResourcesSettings: Schema.optional(
        Schema.Struct({
          cosmosDb: Schema.optional(
            Schema.Struct({
              collectionsThroughput: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
      systemDatastoresAuthMode: Schema.optional(
        Schema.Literals(["AccessKey", "Identity", "UserDelegationSAS"]),
      ),
      v1LegacyMode: Schema.optional(Schema.Boolean),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(
        Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
      ),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<WorkspacesUpdateInput>;

// Output Schema
export interface WorkspacesUpdateOutput {
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
export const WorkspacesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WorkspacesUpdateOutput>;

// The operation
/**
 * Updates a machine learning workspace with the specified parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - Azure Machine Learning Workspace Name
 */
export const WorkspacesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesUpdateInput,
  outputSchema: WorkspacesUpdateOutput,
}));
