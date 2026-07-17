/**
 * Azure Solutions API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ApplicationDefinitionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationDefinitionName: string;
  properties: {
    lockLevel: "CanNotDelete" | "ReadOnly" | "None";
    displayName?: string;
    isEnabled?: boolean;
    authorizations?: { principalId: string; roleDefinitionId: string }[];
    artifacts?: {
      name:
        | "NotSpecified"
        | "ApplicationResourceTemplate"
        | "CreateUiDefinition"
        | "MainTemplateParameters";
      uri: string;
      type: "NotSpecified" | "Template" | "Custom";
    }[];
    description?: string;
    packageFileUri?: string;
    storageAccountId?: string;
    mainTemplate?: unknown;
    createUiDefinition?: unknown;
    notificationPolicy?: { notificationEndpoints: { uri: string }[] };
    lockingPolicy?: {
      allowedActions?: string[];
      allowedDataActions?: string[];
    };
    deploymentPolicy?: {
      deploymentMode: "NotSpecified" | "Incremental" | "Complete";
    };
    managementPolicy?: { mode?: "NotSpecified" | "Unmanaged" | "Managed" };
    policies?: {
      name?: string;
      policyDefinitionId?: string;
      parameters?: string;
    }[];
  };
  managedBy?: string;
  sku?: {
    name: string;
    tier?: string;
    size?: string;
    family?: string;
    model?: string;
    capacity?: number;
  };
}
export const ApplicationDefinitionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationDefinitionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      lockLevel: Schema.Literals(["CanNotDelete", "ReadOnly", "None"]),
      displayName: Schema.optional(Schema.String),
      isEnabled: Schema.optional(Schema.Boolean),
      authorizations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            roleDefinitionId: Schema.String,
          }),
        ),
      ),
      artifacts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.Literals([
              "NotSpecified",
              "ApplicationResourceTemplate",
              "CreateUiDefinition",
              "MainTemplateParameters",
            ]),
            uri: Schema.String,
            type: Schema.Literals(["NotSpecified", "Template", "Custom"]),
          }),
        ),
      ),
      description: Schema.optional(Schema.String),
      packageFileUri: Schema.optional(Schema.String),
      storageAccountId: Schema.optional(Schema.String),
      mainTemplate: Schema.optional(Schema.Unknown),
      createUiDefinition: Schema.optional(Schema.Unknown),
      notificationPolicy: Schema.optional(
        Schema.Struct({
          notificationEndpoints: Schema.Array(
            Schema.Struct({
              uri: Schema.String,
            }),
          ),
        }),
      ),
      lockingPolicy: Schema.optional(
        Schema.Struct({
          allowedActions: Schema.optional(Schema.Array(Schema.String)),
          allowedDataActions: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      deploymentPolicy: Schema.optional(
        Schema.Struct({
          deploymentMode: Schema.Literals([
            "NotSpecified",
            "Incremental",
            "Complete",
          ]),
        }),
      ),
      managementPolicy: Schema.optional(
        Schema.Struct({
          mode: Schema.optional(
            Schema.Literals(["NotSpecified", "Unmanaged", "Managed"]),
          ),
        }),
      ),
      policies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            policyDefinitionId: Schema.optional(Schema.String),
            parameters: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
    managedBy: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationDefinitionsCreateOrUpdateInput>;

// Output Schema
export interface ApplicationDefinitionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ApplicationDefinitionsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationDefinitionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a managed application definition.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param applicationDefinitionName - The name of the managed application definition.
 */
export const ApplicationDefinitionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationDefinitionsCreateOrUpdateInput,
    outputSchema: ApplicationDefinitionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ApplicationDefinitionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationDefinitionName: string;
}
export const ApplicationDefinitionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationDefinitionsDeleteInput>;

// Output Schema
export type ApplicationDefinitionsDeleteOutput = void;
export const ApplicationDefinitionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationDefinitionsDeleteOutput>;

// The operation
/**
 * Deletes the managed application definition.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param applicationDefinitionName - The name of the managed application definition.
 */
export const ApplicationDefinitionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationDefinitionsDeleteInput,
    outputSchema: ApplicationDefinitionsDeleteOutput,
  }));
// Input Schema
export interface ApplicationDefinitionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationDefinitionName: string;
}
export const ApplicationDefinitionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationDefinitionsGetInput>;

// Output Schema
export interface ApplicationDefinitionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ApplicationDefinitionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationDefinitionsGetOutput>;

// The operation
/**
 * Gets the managed application definition.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param applicationDefinitionName - The name of the managed application definition.
 */
export const ApplicationDefinitionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationDefinitionsGetInput,
  outputSchema: ApplicationDefinitionsGetOutput,
}));
// Input Schema
export interface ApplicationDefinitionsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ApplicationDefinitionsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationDefinitionsListByResourceGroupInput>;

// Output Schema
export interface ApplicationDefinitionsListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
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
export const ApplicationDefinitionsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationDefinitionsListByResourceGroupOutput>;

// The operation
/**
 * Lists the managed application definitions in a resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationDefinitionsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationDefinitionsListByResourceGroupInput,
    outputSchema: ApplicationDefinitionsListByResourceGroupOutput,
  }));
// Input Schema
export interface ApplicationDefinitionsListBySubscriptionInput {
  subscriptionId: string;
}
export const ApplicationDefinitionsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Solutions/applicationDefinitions",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationDefinitionsListBySubscriptionInput>;

// Output Schema
export interface ApplicationDefinitionsListBySubscriptionOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
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
export const ApplicationDefinitionsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationDefinitionsListBySubscriptionOutput>;

// The operation
/**
 * Lists all the application definitions within a subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationDefinitionsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationDefinitionsListBySubscriptionInput,
    outputSchema: ApplicationDefinitionsListBySubscriptionOutput,
  }));
// Input Schema
export interface ApplicationDefinitionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationDefinitionName: string;
  tags?: Record<string, string>;
}
export const ApplicationDefinitionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationDefinitionName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationDefinitionsUpdateInput>;

// Output Schema
export interface ApplicationDefinitionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ApplicationDefinitionsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationDefinitionsUpdateOutput>;

// The operation
/**
 * Updates the managed application definition.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param applicationDefinitionName - The name of the managed application definition.
 */
export const ApplicationDefinitionsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationDefinitionsUpdateInput,
    outputSchema: ApplicationDefinitionsUpdateOutput,
  }));
// Input Schema
export interface ApplicationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationName: string;
  properties: {
    managedResourceGroupId?: string;
    applicationDefinitionId?: string;
    parameters?: unknown;
    outputs?: unknown;
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    billingDetails?: { resourceUsageId?: string };
    jitAccessPolicy?: {
      jitAccessEnabled: boolean;
      jitApprovalMode?: "NotSpecified" | "AutoApprove" | "ManualApprove";
      jitApprovers?: {
        id: string;
        type?: "user" | "group";
        displayName?: string;
      }[];
      maximumJitAccessDuration?: string;
    };
    publisherTenantId?: string;
    authorizations?: { principalId: string; roleDefinitionId: string }[];
    managementMode?: "NotSpecified" | "Unmanaged" | "Managed";
    customerSupport?: { contactName?: string; email: string; phone: string };
    supportUrls?: { publicAzure?: string; governmentCloud?: string };
    artifacts?: {
      name:
        | "NotSpecified"
        | "ViewDefinition"
        | "Authorizations"
        | "CustomRoleDefinition";
      uri: string;
      type: "NotSpecified" | "Template" | "Custom";
    }[];
    createdBy?: { oid?: string; puid?: string; applicationId?: string };
    updatedBy?: { oid?: string; puid?: string; applicationId?: string };
  };
  plan?: {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version: string;
  };
  kind: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; tenantId?: string }
    >;
  };
  managedBy?: string;
  sku?: {
    name: string;
    tier?: string;
    size?: string;
    family?: string;
    model?: string;
    capacity?: number;
  };
}
export const ApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      managedResourceGroupId: Schema.optional(Schema.String),
      applicationDefinitionId: Schema.optional(Schema.String),
      parameters: Schema.optional(Schema.Unknown),
      outputs: Schema.optional(Schema.Unknown),
      provisioningState: Schema.optional(
        Schema.Literals([
          "NotSpecified",
          "Accepted",
          "Running",
          "Deleting",
          "Deleted",
          "Canceled",
          "Failed",
          "Succeeded",
          "Updating",
        ]),
      ),
      billingDetails: Schema.optional(
        Schema.Struct({
          resourceUsageId: Schema.optional(Schema.String),
        }),
      ),
      jitAccessPolicy: Schema.optional(
        Schema.Struct({
          jitAccessEnabled: Schema.Boolean,
          jitApprovalMode: Schema.optional(
            Schema.Literals(["NotSpecified", "AutoApprove", "ManualApprove"]),
          ),
          jitApprovers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                type: Schema.optional(Schema.Literals(["user", "group"])),
                displayName: Schema.optional(Schema.String),
              }),
            ),
          ),
          maximumJitAccessDuration: Schema.optional(Schema.String),
        }),
      ),
      publisherTenantId: Schema.optional(Schema.String),
      authorizations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            roleDefinitionId: Schema.String,
          }),
        ),
      ),
      managementMode: Schema.optional(
        Schema.Literals(["NotSpecified", "Unmanaged", "Managed"]),
      ),
      customerSupport: Schema.optional(
        Schema.Struct({
          contactName: Schema.optional(Schema.String),
          email: Schema.String,
          phone: Schema.String,
        }),
      ),
      supportUrls: Schema.optional(
        Schema.Struct({
          publicAzure: Schema.optional(Schema.String),
          governmentCloud: Schema.optional(Schema.String),
        }),
      ),
      artifacts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.Literals([
              "NotSpecified",
              "ViewDefinition",
              "Authorizations",
              "CustomRoleDefinition",
            ]),
            uri: Schema.String,
            type: Schema.Literals(["NotSpecified", "Template", "Custom"]),
          }),
        ),
      ),
      createdBy: Schema.optional(
        Schema.Struct({
          oid: Schema.optional(Schema.String),
          puid: Schema.optional(Schema.String),
          applicationId: Schema.optional(Schema.String),
        }),
      ),
      updatedBy: Schema.optional(
        Schema.Struct({
          oid: Schema.optional(Schema.String),
          puid: Schema.optional(Schema.String),
          applicationId: Schema.optional(Schema.String),
        }),
      ),
    }),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.String,
      }),
    ),
    kind: Schema.String,
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsCreateOrUpdateInput>;

// Output Schema
export interface ApplicationsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ApplicationsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a managed application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param applicationName - The name of the managed application.
 */
export const ApplicationsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsCreateOrUpdateInput,
  outputSchema: ApplicationsCreateOrUpdateOutput,
}));
// Input Schema
export interface ApplicationsCreateOrUpdateByIdInput {
  applicationId: string;
  properties: {
    managedResourceGroupId?: string;
    applicationDefinitionId?: string;
    parameters?: unknown;
    outputs?: unknown;
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    billingDetails?: { resourceUsageId?: string };
    jitAccessPolicy?: {
      jitAccessEnabled: boolean;
      jitApprovalMode?: "NotSpecified" | "AutoApprove" | "ManualApprove";
      jitApprovers?: {
        id: string;
        type?: "user" | "group";
        displayName?: string;
      }[];
      maximumJitAccessDuration?: string;
    };
    publisherTenantId?: string;
    authorizations?: { principalId: string; roleDefinitionId: string }[];
    managementMode?: "NotSpecified" | "Unmanaged" | "Managed";
    customerSupport?: { contactName?: string; email: string; phone: string };
    supportUrls?: { publicAzure?: string; governmentCloud?: string };
    artifacts?: {
      name:
        | "NotSpecified"
        | "ViewDefinition"
        | "Authorizations"
        | "CustomRoleDefinition";
      uri: string;
      type: "NotSpecified" | "Template" | "Custom";
    }[];
    createdBy?: { oid?: string; puid?: string; applicationId?: string };
    updatedBy?: { oid?: string; puid?: string; applicationId?: string };
  };
  plan?: {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version: string;
  };
  kind: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; tenantId?: string }
    >;
  };
  managedBy?: string;
  sku?: {
    name: string;
    tier?: string;
    size?: string;
    family?: string;
    model?: string;
    capacity?: number;
  };
}
export const ApplicationsCreateOrUpdateByIdInput =
  /*@__PURE__*/ Schema.Struct({
    applicationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      managedResourceGroupId: Schema.optional(Schema.String),
      applicationDefinitionId: Schema.optional(Schema.String),
      parameters: Schema.optional(Schema.Unknown),
      outputs: Schema.optional(Schema.Unknown),
      provisioningState: Schema.optional(
        Schema.Literals([
          "NotSpecified",
          "Accepted",
          "Running",
          "Deleting",
          "Deleted",
          "Canceled",
          "Failed",
          "Succeeded",
          "Updating",
        ]),
      ),
      billingDetails: Schema.optional(
        Schema.Struct({
          resourceUsageId: Schema.optional(Schema.String),
        }),
      ),
      jitAccessPolicy: Schema.optional(
        Schema.Struct({
          jitAccessEnabled: Schema.Boolean,
          jitApprovalMode: Schema.optional(
            Schema.Literals(["NotSpecified", "AutoApprove", "ManualApprove"]),
          ),
          jitApprovers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                type: Schema.optional(Schema.Literals(["user", "group"])),
                displayName: Schema.optional(Schema.String),
              }),
            ),
          ),
          maximumJitAccessDuration: Schema.optional(Schema.String),
        }),
      ),
      publisherTenantId: Schema.optional(Schema.String),
      authorizations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            roleDefinitionId: Schema.String,
          }),
        ),
      ),
      managementMode: Schema.optional(
        Schema.Literals(["NotSpecified", "Unmanaged", "Managed"]),
      ),
      customerSupport: Schema.optional(
        Schema.Struct({
          contactName: Schema.optional(Schema.String),
          email: Schema.String,
          phone: Schema.String,
        }),
      ),
      supportUrls: Schema.optional(
        Schema.Struct({
          publicAzure: Schema.optional(Schema.String),
          governmentCloud: Schema.optional(Schema.String),
        }),
      ),
      artifacts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.Literals([
              "NotSpecified",
              "ViewDefinition",
              "Authorizations",
              "CustomRoleDefinition",
            ]),
            uri: Schema.String,
            type: Schema.Literals(["NotSpecified", "Template", "Custom"]),
          }),
        ),
      ),
      createdBy: Schema.optional(
        Schema.Struct({
          oid: Schema.optional(Schema.String),
          puid: Schema.optional(Schema.String),
          applicationId: Schema.optional(Schema.String),
        }),
      ),
      updatedBy: Schema.optional(
        Schema.Struct({
          oid: Schema.optional(Schema.String),
          puid: Schema.optional(Schema.String),
          applicationId: Schema.optional(Schema.String),
        }),
      ),
    }),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.String,
      }),
    ),
    kind: Schema.String,
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{applicationId}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsCreateOrUpdateByIdInput>;

// Output Schema
export interface ApplicationsCreateOrUpdateByIdOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ApplicationsCreateOrUpdateByIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationsCreateOrUpdateByIdOutput>;

// The operation
/**
 * Creates or updates a managed application.
 *
 * @param applicationId - The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsCreateOrUpdateById =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsCreateOrUpdateByIdInput,
    outputSchema: ApplicationsCreateOrUpdateByIdOutput,
  }));
// Input Schema
export interface ApplicationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationName: string;
}
export const ApplicationsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsDeleteInput>;

// Output Schema
export type ApplicationsDeleteOutput = void;
export const ApplicationsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsDeleteOutput>;

// The operation
/**
 * Deletes the managed application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param applicationName - The name of the managed application.
 */
export const ApplicationsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsDeleteInput,
  outputSchema: ApplicationsDeleteOutput,
}));
// Input Schema
export interface ApplicationsDeleteByIdInput {
  applicationId: string;
}
export const ApplicationsDeleteByIdInput =
  /*@__PURE__*/ Schema.Struct({
    applicationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{applicationId}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsDeleteByIdInput>;

// Output Schema
export type ApplicationsDeleteByIdOutput = void;
export const ApplicationsDeleteByIdOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsDeleteByIdOutput>;

// The operation
/**
 * Deletes the managed application.
 *
 * @param applicationId - The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsDeleteById = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsDeleteByIdInput,
  outputSchema: ApplicationsDeleteByIdOutput,
}));
// Input Schema
export interface ApplicationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationName: string;
}
export const ApplicationsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
    apiVersion: "2021-07-01",
  }),
) as unknown as Schema.Codec<ApplicationsGetInput>;

// Output Schema
export interface ApplicationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ApplicationsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
}) as unknown as Schema.Codec<ApplicationsGetOutput>;

// The operation
/**
 * Gets the managed application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param applicationName - The name of the managed application.
 */
export const ApplicationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetInput,
  outputSchema: ApplicationsGetOutput,
}));
// Input Schema
export interface ApplicationsGetByIdInput {
  applicationId: string;
}
export const ApplicationsGetByIdInput =
  /*@__PURE__*/ Schema.Struct({
    applicationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{applicationId}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsGetByIdInput>;

// Output Schema
export interface ApplicationsGetByIdOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ApplicationsGetByIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationsGetByIdOutput>;

// The operation
/**
 * Gets the managed application.
 *
 * @param applicationId - The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsGetById = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetByIdInput,
  outputSchema: ApplicationsGetByIdOutput,
}));
// Input Schema
export interface ApplicationsListAllowedUpgradePlansInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationName: string;
}
export const ApplicationsListAllowedUpgradePlansInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}/listAllowedUpgradePlans",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsListAllowedUpgradePlansInput>;

// Output Schema
export interface ApplicationsListAllowedUpgradePlansOutput {
  value?: {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version: string;
  }[];
}
export const ApplicationsListAllowedUpgradePlansOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          publisher: Schema.String,
          product: Schema.String,
          promotionCode: Schema.optional(Schema.String),
          version: Schema.String,
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ApplicationsListAllowedUpgradePlansOutput>;

// The operation
/**
 * List allowed upgrade plans for application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param applicationName - The name of the managed application.
 */
export const ApplicationsListAllowedUpgradePlans =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsListAllowedUpgradePlansInput,
    outputSchema: ApplicationsListAllowedUpgradePlansOutput,
  }));
// Input Schema
export interface ApplicationsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ApplicationsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsListByResourceGroupInput>;

// Output Schema
export interface ApplicationsListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
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
export const ApplicationsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationsListByResourceGroupOutput>;

// The operation
/**
 * Lists all the applications within a resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsListByResourceGroupInput,
    outputSchema: ApplicationsListByResourceGroupOutput,
  }));
// Input Schema
export interface ApplicationsListBySubscriptionInput {
  subscriptionId: string;
}
export const ApplicationsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Solutions/applications",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsListBySubscriptionInput>;

// Output Schema
export interface ApplicationsListBySubscriptionOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
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
export const ApplicationsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationsListBySubscriptionOutput>;

// The operation
/**
 * Lists all the applications within a subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsListBySubscriptionInput,
    outputSchema: ApplicationsListBySubscriptionOutput,
  }));
// Input Schema
export interface ApplicationsListTokensInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationName: string;
  authorizationAudience?: string;
  userAssignedIdentities?: string[];
}
export const ApplicationsListTokensInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    authorizationAudience: Schema.optional(Schema.String),
    userAssignedIdentities: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}/listTokens",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsListTokensInput>;

// Output Schema
export interface ApplicationsListTokensOutput {
  value?: {
    accessToken?: Redacted.Redacted<string>;
    expiresIn?: string;
    expiresOn?: string;
    notBefore?: string;
    authorizationAudience?: string;
    resourceId?: string;
    tokenType?: string;
  }[];
}
export const ApplicationsListTokensOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          accessToken: Schema.optional(SensitiveOutputString),
          expiresIn: Schema.optional(Schema.String),
          expiresOn: Schema.optional(Schema.String),
          notBefore: Schema.optional(Schema.String),
          authorizationAudience: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          tokenType: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ApplicationsListTokensOutput>;

// The operation
/**
 * List tokens for application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationName - The name of the managed application.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsListTokens = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsListTokensInput,
  outputSchema: ApplicationsListTokensOutput,
}));
// Input Schema
export interface ApplicationsRefreshPermissionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationName: string;
}
export const ApplicationsRefreshPermissionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}/refreshPermissions",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsRefreshPermissionsInput>;

// Output Schema
export type ApplicationsRefreshPermissionsOutput = void;
export const ApplicationsRefreshPermissionsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsRefreshPermissionsOutput>;

// The operation
/**
 * Refresh Permissions for application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param applicationName - The name of the managed application.
 */
export const ApplicationsRefreshPermissions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsRefreshPermissionsInput,
    outputSchema: ApplicationsRefreshPermissionsOutput,
  }));
// Input Schema
export interface ApplicationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationName: string;
  properties?: {
    managedResourceGroupId?: string;
    applicationDefinitionId?: string;
    parameters?: unknown;
    outputs?: unknown;
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    billingDetails?: { resourceUsageId?: string };
    jitAccessPolicy?: {
      jitAccessEnabled: boolean;
      jitApprovalMode?: "NotSpecified" | "AutoApprove" | "ManualApprove";
      jitApprovers?: {
        id: string;
        type?: "user" | "group";
        displayName?: string;
      }[];
      maximumJitAccessDuration?: string;
    };
    publisherTenantId?: string;
    authorizations?: { principalId: string; roleDefinitionId: string }[];
    managementMode?: "NotSpecified" | "Unmanaged" | "Managed";
    customerSupport?: { contactName?: string; email: string; phone: string };
    supportUrls?: { publicAzure?: string; governmentCloud?: string };
    artifacts?: {
      name:
        | "NotSpecified"
        | "ViewDefinition"
        | "Authorizations"
        | "CustomRoleDefinition";
      uri: string;
      type: "NotSpecified" | "Template" | "Custom";
    }[];
    createdBy?: { oid?: string; puid?: string; applicationId?: string };
    updatedBy?: { oid?: string; puid?: string; applicationId?: string };
  };
  plan?: {
    name?: string;
    publisher?: string;
    product?: string;
    promotionCode?: string;
    version?: string;
  };
  kind?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; tenantId?: string }
    >;
  };
  managedBy?: string;
  sku?: {
    name: string;
    tier?: string;
    size?: string;
    family?: string;
    model?: string;
    capacity?: number;
  };
}
export const ApplicationsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        managedResourceGroupId: Schema.optional(Schema.String),
        applicationDefinitionId: Schema.optional(Schema.String),
        parameters: Schema.optional(Schema.Unknown),
        outputs: Schema.optional(Schema.Unknown),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        billingDetails: Schema.optional(
          Schema.Struct({
            resourceUsageId: Schema.optional(Schema.String),
          }),
        ),
        jitAccessPolicy: Schema.optional(
          Schema.Struct({
            jitAccessEnabled: Schema.Boolean,
            jitApprovalMode: Schema.optional(
              Schema.Literals(["NotSpecified", "AutoApprove", "ManualApprove"]),
            ),
            jitApprovers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  type: Schema.optional(Schema.Literals(["user", "group"])),
                  displayName: Schema.optional(Schema.String),
                }),
              ),
            ),
            maximumJitAccessDuration: Schema.optional(Schema.String),
          }),
        ),
        publisherTenantId: Schema.optional(Schema.String),
        authorizations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              principalId: Schema.String,
              roleDefinitionId: Schema.String,
            }),
          ),
        ),
        managementMode: Schema.optional(
          Schema.Literals(["NotSpecified", "Unmanaged", "Managed"]),
        ),
        customerSupport: Schema.optional(
          Schema.Struct({
            contactName: Schema.optional(Schema.String),
            email: Schema.String,
            phone: Schema.String,
          }),
        ),
        supportUrls: Schema.optional(
          Schema.Struct({
            publicAzure: Schema.optional(Schema.String),
            governmentCloud: Schema.optional(Schema.String),
          }),
        ),
        artifacts: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.Literals([
                "NotSpecified",
                "ViewDefinition",
                "Authorizations",
                "CustomRoleDefinition",
              ]),
              uri: Schema.String,
              type: Schema.Literals(["NotSpecified", "Template", "Custom"]),
            }),
          ),
        ),
        createdBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
        updatedBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        publisher: Schema.optional(Schema.String),
        product: Schema.optional(Schema.String),
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsUpdateInput>;

// Output Schema
export interface ApplicationsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ApplicationsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationsUpdateOutput>;

// The operation
/**
 * Updates an existing managed application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param applicationName - The name of the managed application.
 */
export const ApplicationsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsUpdateInput,
  outputSchema: ApplicationsUpdateOutput,
}));
// Input Schema
export interface ApplicationsUpdateAccessInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationName: string;
  approver?: string;
  metadata: {
    originRequestId?: string;
    requestorId?: string;
    tenantDisplayName?: string;
    subjectDisplayName?: string;
  };
  status: "NotSpecified" | "Elevate" | "Remove";
  subStatus:
    | "NotSpecified"
    | "Approved"
    | "Denied"
    | "Failed"
    | "Expired"
    | "Timeout";
}
export const ApplicationsUpdateAccessInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    approver: Schema.optional(Schema.String),
    metadata: Schema.Struct({
      originRequestId: Schema.optional(Schema.String),
      requestorId: Schema.optional(Schema.String),
      tenantDisplayName: Schema.optional(Schema.String),
      subjectDisplayName: Schema.optional(Schema.String),
    }),
    status: Schema.Literals(["NotSpecified", "Elevate", "Remove"]),
    subStatus: Schema.Literals([
      "NotSpecified",
      "Approved",
      "Denied",
      "Failed",
      "Expired",
      "Timeout",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}/updateAccess",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsUpdateAccessInput>;

// Output Schema
export type ApplicationsUpdateAccessOutput = void;
export const ApplicationsUpdateAccessOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsUpdateAccessOutput>;

// The operation
/**
 * Update access for application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationName - The name of the managed application.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsUpdateAccess = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsUpdateAccessInput,
  outputSchema: ApplicationsUpdateAccessOutput,
}));
// Input Schema
export interface ApplicationsUpdateByIdInput {
  applicationId: string;
  properties?: {
    managedResourceGroupId?: string;
    applicationDefinitionId?: string;
    parameters?: unknown;
    outputs?: unknown;
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    billingDetails?: { resourceUsageId?: string };
    jitAccessPolicy?: {
      jitAccessEnabled: boolean;
      jitApprovalMode?: "NotSpecified" | "AutoApprove" | "ManualApprove";
      jitApprovers?: {
        id: string;
        type?: "user" | "group";
        displayName?: string;
      }[];
      maximumJitAccessDuration?: string;
    };
    publisherTenantId?: string;
    authorizations?: { principalId: string; roleDefinitionId: string }[];
    managementMode?: "NotSpecified" | "Unmanaged" | "Managed";
    customerSupport?: { contactName?: string; email: string; phone: string };
    supportUrls?: { publicAzure?: string; governmentCloud?: string };
    artifacts?: {
      name:
        | "NotSpecified"
        | "ViewDefinition"
        | "Authorizations"
        | "CustomRoleDefinition";
      uri: string;
      type: "NotSpecified" | "Template" | "Custom";
    }[];
    createdBy?: { oid?: string; puid?: string; applicationId?: string };
    updatedBy?: { oid?: string; puid?: string; applicationId?: string };
  };
  plan?: {
    name?: string;
    publisher?: string;
    product?: string;
    promotionCode?: string;
    version?: string;
  };
  kind?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; tenantId?: string }
    >;
  };
  managedBy?: string;
  sku?: {
    name: string;
    tier?: string;
    size?: string;
    family?: string;
    model?: string;
    capacity?: number;
  };
}
export const ApplicationsUpdateByIdInput =
  /*@__PURE__*/ Schema.Struct({
    applicationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        managedResourceGroupId: Schema.optional(Schema.String),
        applicationDefinitionId: Schema.optional(Schema.String),
        parameters: Schema.optional(Schema.Unknown),
        outputs: Schema.optional(Schema.Unknown),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        billingDetails: Schema.optional(
          Schema.Struct({
            resourceUsageId: Schema.optional(Schema.String),
          }),
        ),
        jitAccessPolicy: Schema.optional(
          Schema.Struct({
            jitAccessEnabled: Schema.Boolean,
            jitApprovalMode: Schema.optional(
              Schema.Literals(["NotSpecified", "AutoApprove", "ManualApprove"]),
            ),
            jitApprovers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  type: Schema.optional(Schema.Literals(["user", "group"])),
                  displayName: Schema.optional(Schema.String),
                }),
              ),
            ),
            maximumJitAccessDuration: Schema.optional(Schema.String),
          }),
        ),
        publisherTenantId: Schema.optional(Schema.String),
        authorizations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              principalId: Schema.String,
              roleDefinitionId: Schema.String,
            }),
          ),
        ),
        managementMode: Schema.optional(
          Schema.Literals(["NotSpecified", "Unmanaged", "Managed"]),
        ),
        customerSupport: Schema.optional(
          Schema.Struct({
            contactName: Schema.optional(Schema.String),
            email: Schema.String,
            phone: Schema.String,
          }),
        ),
        supportUrls: Schema.optional(
          Schema.Struct({
            publicAzure: Schema.optional(Schema.String),
            governmentCloud: Schema.optional(Schema.String),
          }),
        ),
        artifacts: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.Literals([
                "NotSpecified",
                "ViewDefinition",
                "Authorizations",
                "CustomRoleDefinition",
              ]),
              uri: Schema.String,
              type: Schema.Literals(["NotSpecified", "Template", "Custom"]),
            }),
          ),
        ),
        createdBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
        updatedBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        publisher: Schema.optional(Schema.String),
        product: Schema.optional(Schema.String),
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{applicationId}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsUpdateByIdInput>;

// Output Schema
export interface ApplicationsUpdateByIdOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ApplicationsUpdateByIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<ApplicationsUpdateByIdOutput>;

// The operation
/**
 * Updates an existing managed application.
 *
 * @param applicationId - The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsUpdateById = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsUpdateByIdInput,
  outputSchema: ApplicationsUpdateByIdOutput,
}));
// Input Schema
export interface JitRequestsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jitRequestName: string;
  properties?: {
    applicationResourceId: string;
    publisherTenantId?: string;
    jitAuthorizationPolicies: {
      principalId: string;
      roleDefinitionId: string;
    }[];
    jitSchedulingPolicy: {
      type: "NotSpecified" | "Once" | "Recurring";
      duration: string;
      startTime: string;
    };
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    jitRequestState?:
      | "NotSpecified"
      | "Pending"
      | "Approved"
      | "Denied"
      | "Failed"
      | "Canceled"
      | "Expired"
      | "Timeout";
    createdBy?: { oid?: string; puid?: string; applicationId?: string };
    updatedBy?: { oid?: string; puid?: string; applicationId?: string };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const JitRequestsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jitRequestName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        applicationResourceId: Schema.String,
        publisherTenantId: Schema.optional(Schema.String),
        jitAuthorizationPolicies: Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            roleDefinitionId: Schema.String,
          }),
        ),
        jitSchedulingPolicy: Schema.Struct({
          type: Schema.Literals(["NotSpecified", "Once", "Recurring"]),
          duration: Schema.String,
          startTime: Schema.String,
        }),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        jitRequestState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Pending",
            "Approved",
            "Denied",
            "Failed",
            "Canceled",
            "Expired",
            "Timeout",
          ]),
        ),
        createdBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
        updatedBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<JitRequestsCreateOrUpdateInput>;

// Output Schema
export interface JitRequestsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const JitRequestsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<JitRequestsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the JIT request.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param jitRequestName - The name of the JIT request.
 */
export const jitRequestsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: JitRequestsCreateOrUpdateInput,
  outputSchema: JitRequestsCreateOrUpdateOutput,
}));
// Input Schema
export interface JitRequestsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  jitRequestName: string;
}
export const JitRequestsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jitRequestName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}",
    apiVersion: "2021-07-01",
  }),
) as unknown as Schema.Codec<JitRequestsDeleteInput>;

// Output Schema
export type JitRequestsDeleteOutput = void;
export const JitRequestsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<JitRequestsDeleteOutput>;

// The operation
/**
 * Deletes the JIT request.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param jitRequestName - The name of the JIT request.
 */
export const jitRequestsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: JitRequestsDeleteInput,
  outputSchema: JitRequestsDeleteOutput,
}));
// Input Schema
export interface JitRequestsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  jitRequestName: string;
}
export const JitRequestsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jitRequestName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}",
    apiVersion: "2021-07-01",
  }),
) as unknown as Schema.Codec<JitRequestsGetInput>;

// Output Schema
export interface JitRequestsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const JitRequestsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
}) as unknown as Schema.Codec<JitRequestsGetOutput>;

// The operation
/**
 * Gets the JIT request.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param jitRequestName - The name of the JIT request.
 */
export const JitRequestsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: JitRequestsGetInput,
  outputSchema: JitRequestsGetOutput,
}));
// Input Schema
export interface JitRequestsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const JitRequestsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<JitRequestsListByResourceGroupInput>;

// Output Schema
export interface JitRequestsListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
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
export const JitRequestsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<JitRequestsListByResourceGroupOutput>;

// The operation
/**
 * Lists all JIT requests within the resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const jitRequestsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: JitRequestsListByResourceGroupInput,
    outputSchema: JitRequestsListByResourceGroupOutput,
  }));
// Input Schema
export interface JitRequestsListBySubscriptionInput {
  subscriptionId: string;
}
export const JitRequestsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Solutions/jitRequests",
      apiVersion: "2021-07-01",
    }),
  ) as unknown as Schema.Codec<JitRequestsListBySubscriptionInput>;

// Output Schema
export interface JitRequestsListBySubscriptionOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
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
export const JitRequestsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<JitRequestsListBySubscriptionOutput>;

// The operation
/**
 * Lists all JIT requests within the subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const jitRequestsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: JitRequestsListBySubscriptionInput,
    outputSchema: JitRequestsListBySubscriptionOutput,
  }));
// Input Schema
export interface JitRequestsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jitRequestName: string;
  tags?: Record<string, string>;
}
export const JitRequestsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jitRequestName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}",
    apiVersion: "2021-07-01",
  }),
) as unknown as Schema.Codec<JitRequestsUpdateInput>;

// Output Schema
export interface JitRequestsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const JitRequestsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }) as unknown as Schema.Codec<JitRequestsUpdateOutput>;

// The operation
/**
 * Updates the JIT request.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param jitRequestName - The name of the JIT request.
 */
export const JitRequestsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: JitRequestsUpdateInput,
  outputSchema: JitRequestsUpdateOutput,
}));
// Input Schema
export interface ListOperationsInput {}
export const ListOperationsInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Solutions/operations",
    apiVersion: "2021-07-01",
  }),
) as unknown as Schema.Codec<ListOperationsInput>;

// Output Schema
export interface ListOperationsOutput {
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
export const ListOperationsOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ListOperationsOutput>;

// The operation
/**
 * Lists all of the available Microsoft.Solutions REST API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ListOperations = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListOperationsInput,
  outputSchema: ListOperationsOutput,
}));
