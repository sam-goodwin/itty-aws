/**
 * Azure Communitytraining API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface CommunityTrainingsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  communityTrainingName: string;
  properties?: {
    portalName: string;
    portalAdminEmailAddress: string;
    portalOwnerOrganizationName: string;
    portalOwnerEmailAddress: string;
    identityConfiguration: {
      identityType: string;
      teamsEnabled?: boolean;
      tenantId: string;
      domainName: string;
      clientId: string;
      clientSecret: string | Redacted.Redacted<string>;
      b2cAuthenticationPolicy?: string;
      b2cPasswordResetPolicy?: string | Redacted.Redacted<string>;
      customLoginParameters?: string;
    };
    zoneRedundancyEnabled: boolean;
    disasterRecoveryEnabled: boolean;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
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
export const CommunityTrainingsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communityTrainingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        portalName: Schema.String,
        portalAdminEmailAddress: Schema.String,
        portalOwnerOrganizationName: Schema.String,
        portalOwnerEmailAddress: Schema.String,
        identityConfiguration: Schema.Struct({
          identityType: Schema.String,
          teamsEnabled: Schema.optional(Schema.Boolean),
          tenantId: Schema.String,
          domainName: Schema.String,
          clientId: Schema.String,
          clientSecret: SensitiveString,
          b2cAuthenticationPolicy: Schema.optional(Schema.String),
          b2cPasswordResetPolicy: Schema.optional(SensitiveString),
          customLoginParameters: Schema.optional(Schema.String),
        }),
        zoneRedundancyEnabled: Schema.Boolean,
        disasterRecoveryEnabled: Schema.Boolean,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Community/communityTrainings/{communityTrainingName}",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<CommunityTrainingsCreateInput>;

// Output Schema
export interface CommunityTrainingsCreateOutput {
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
export const CommunityTrainingsCreateOutput =
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
  }) as unknown as Schema.Codec<CommunityTrainingsCreateOutput>;

// The operation
/**
 * Create a CommunityTraining
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communityTrainingName - The name of the Community Training Resource
 */
export const CommunityTrainingsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommunityTrainingsCreateInput,
    outputSchema: CommunityTrainingsCreateOutput,
  }),
);
// Input Schema
export interface CommunityTrainingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  communityTrainingName: string;
}
export const CommunityTrainingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communityTrainingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Community/communityTrainings/{communityTrainingName}",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<CommunityTrainingsDeleteInput>;

// Output Schema
export type CommunityTrainingsDeleteOutput = void;
export const CommunityTrainingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CommunityTrainingsDeleteOutput>;

// The operation
/**
 * Delete a CommunityTraining
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communityTrainingName - The name of the Community Training Resource
 */
export const CommunityTrainingsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommunityTrainingsDeleteInput,
    outputSchema: CommunityTrainingsDeleteOutput,
  }),
);
// Input Schema
export interface CommunityTrainingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  communityTrainingName: string;
}
export const CommunityTrainingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communityTrainingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Community/communityTrainings/{communityTrainingName}",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<CommunityTrainingsGetInput>;

// Output Schema
export interface CommunityTrainingsGetOutput {
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
export const CommunityTrainingsGetOutput =
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
  }) as unknown as Schema.Codec<CommunityTrainingsGetOutput>;

// The operation
/**
 * Get a CommunityTraining
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communityTrainingName - The name of the Community Training Resource
 */
export const CommunityTrainingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommunityTrainingsGetInput,
    outputSchema: CommunityTrainingsGetOutput,
  }),
);
// Input Schema
export interface CommunityTrainingsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const CommunityTrainingsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Community/communityTrainings",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<CommunityTrainingsListByResourceGroupInput>;

// Output Schema
export interface CommunityTrainingsListByResourceGroupOutput {
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
export const CommunityTrainingsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<CommunityTrainingsListByResourceGroupOutput>;

// The operation
/**
 * List CommunityTraining resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CommunityTrainingsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommunityTrainingsListByResourceGroupInput,
    outputSchema: CommunityTrainingsListByResourceGroupOutput,
  }));
// Input Schema
export interface CommunityTrainingsListBySubscriptionInput {
  subscriptionId: string;
}
export const CommunityTrainingsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Community/communityTrainings",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<CommunityTrainingsListBySubscriptionInput>;

// Output Schema
export interface CommunityTrainingsListBySubscriptionOutput {
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
export const CommunityTrainingsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<CommunityTrainingsListBySubscriptionOutput>;

// The operation
/**
 * List CommunityTraining resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CommunityTrainingsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommunityTrainingsListBySubscriptionInput,
    outputSchema: CommunityTrainingsListBySubscriptionOutput,
  }));
// Input Schema
export interface CommunityTrainingsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  communityTrainingName: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  properties?: {
    identityConfiguration?: {
      identityType?: string;
      teamsEnabled?: boolean;
      tenantId?: string;
      domainName?: string;
      clientId?: string;
      clientSecret?: string | Redacted.Redacted<string>;
      b2cAuthenticationPolicy?: string;
      b2cPasswordResetPolicy?: string | Redacted.Redacted<string>;
      customLoginParameters?: string;
    };
  };
}
export const CommunityTrainingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communityTrainingName: Schema.String.pipe(T.PathParam()),
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
    properties: Schema.optional(
      Schema.Struct({
        identityConfiguration: Schema.optional(
          Schema.Struct({
            identityType: Schema.optional(Schema.String),
            teamsEnabled: Schema.optional(Schema.Boolean),
            tenantId: Schema.optional(Schema.String),
            domainName: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
            clientSecret: Schema.optional(SensitiveString),
            b2cAuthenticationPolicy: Schema.optional(Schema.String),
            b2cPasswordResetPolicy: Schema.optional(SensitiveString),
            customLoginParameters: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Community/communityTrainings/{communityTrainingName}",
      apiVersion: "2023-11-01",
    }),
  ) as unknown as Schema.Codec<CommunityTrainingsUpdateInput>;

// Output Schema
export interface CommunityTrainingsUpdateOutput {
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
export const CommunityTrainingsUpdateOutput =
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
  }) as unknown as Schema.Codec<CommunityTrainingsUpdateOutput>;

// The operation
/**
 * Update a CommunityTraining
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communityTrainingName - The name of the Community Training Resource
 */
export const CommunityTrainingsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommunityTrainingsUpdateInput,
    outputSchema: CommunityTrainingsUpdateOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Community/operations",
    apiVersion: "2023-11-01",
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
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
