/**
 * Azure Digitaltwins API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DigitalTwinsCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name: string;
  type: "Microsoft.DigitalTwins/digitalTwinsInstances";
}
export const DigitalTwinsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.DigitalTwins/digitalTwinsInstances"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DigitalTwins/locations/{location}/checkNameAvailability",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<DigitalTwinsCheckNameAvailabilityInput>;

// Output Schema
export interface DigitalTwinsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  message?: string | null;
  reason?: "Invalid" | "AlreadyExists" | null;
}
export const DigitalTwinsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    message: Schema.optional(Schema.NullOr(Schema.String)),
    reason: Schema.optional(
      Schema.NullOr(Schema.Literals(["Invalid", "AlreadyExists"])),
    ),
  }) as unknown as Schema.Codec<DigitalTwinsCheckNameAvailabilityOutput>;

// The operation
/**
 * Check if a DigitalTwinsInstance name is available.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param location - Location of DigitalTwinsInstance.
 */
export const DigitalTwinsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DigitalTwinsCheckNameAvailabilityInput,
    outputSchema: DigitalTwinsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface DigitalTwinsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    createdTime?: string;
    lastUpdatedTime?: string;
    provisioningState?:
      | "Provisioning"
      | "Deleting"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Warning"
      | "Suspending"
      | "Restoring"
      | "Moving";
    hostName?: string | null;
    privateEndpointConnections?:
      | {
          id?: string;
          name?: string;
          type?: string;
          properties: {
            provisioningState?:
              | "Pending"
              | "Approved"
              | "Rejected"
              | "Disconnected"
              | null;
            privateEndpoint?: { id?: string };
            groupIds?: string[];
            privateLinkServiceConnectionState?: {
              status: "Pending" | "Approved" | "Rejected" | "Disconnected";
              description: string;
              actionsRequired?: string;
            };
          };
          systemData?: {
            createdBy?: string | null;
            createdByType?:
              | "User"
              | "Application"
              | "ManagedIdentity"
              | "Key"
              | null;
            createdAt?: string | null;
            lastModifiedBy?: string | null;
            lastModifiedByType?:
              | "User"
              | "Application"
              | "ManagedIdentity"
              | "Key"
              | null;
            lastModifiedAt?: string | null;
          };
        }[]
      | null;
    publicNetworkAccess?: "Enabled" | "Disabled" | null;
  };
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string> | null;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    principalId?: string | null;
    tenantId?: string | null;
    userAssignedIdentities?: Record<
      string,
      { clientId?: string; principalId?: string }
    > | null;
  };
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const DigitalTwinsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        createdTime: Schema.optional(Schema.String),
        lastUpdatedTime: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Deleting",
            "Updating",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleted",
            "Warning",
            "Suspending",
            "Restoring",
            "Moving",
          ]),
        ),
        hostName: Schema.optional(Schema.NullOr(Schema.String)),
        privateEndpointConnections: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                properties: Schema.Struct({
                  provisioningState: Schema.optional(
                    Schema.NullOr(
                      Schema.Literals([
                        "Pending",
                        "Approved",
                        "Rejected",
                        "Disconnected",
                      ]),
                    ),
                  ),
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  groupIds: Schema.optional(Schema.Array(Schema.String)),
                  privateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      status: Schema.Literals([
                        "Pending",
                        "Approved",
                        "Rejected",
                        "Disconnected",
                      ]),
                      description: Schema.String,
                      actionsRequired: Schema.optional(Schema.String),
                    }),
                  ),
                }),
                systemData: Schema.optional(
                  Schema.Struct({
                    createdBy: Schema.optional(Schema.NullOr(Schema.String)),
                    createdByType: Schema.optional(
                      Schema.NullOr(
                        Schema.Literals([
                          "User",
                          "Application",
                          "ManagedIdentity",
                          "Key",
                        ]),
                      ),
                    ),
                    createdAt: Schema.optional(Schema.NullOr(Schema.String)),
                    lastModifiedBy: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    lastModifiedByType: Schema.optional(
                      Schema.NullOr(
                        Schema.Literals([
                          "User",
                          "Application",
                          "ManagedIdentity",
                          "Key",
                        ]),
                      ),
                    ),
                    lastModifiedAt: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                  }),
                ),
              }),
            ),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.NullOr(Schema.Literals(["Enabled", "Disabled"])),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
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
        principalId: Schema.optional(Schema.NullOr(Schema.String)),
        tenantId: Schema.optional(Schema.NullOr(Schema.String)),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                clientId: Schema.optional(Schema.String),
                principalId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<DigitalTwinsCreateOrUpdateInput>;

// Output Schema
export interface DigitalTwinsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string> | null;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    principalId?: string | null;
    tenantId?: string | null;
    userAssignedIdentities?: Record<
      string,
      { clientId?: string; principalId?: string }
    > | null;
  };
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const DigitalTwinsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
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
        principalId: Schema.optional(Schema.NullOr(Schema.String)),
        tenantId: Schema.optional(Schema.NullOr(Schema.String)),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                clientId: Schema.optional(Schema.String),
                principalId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<DigitalTwinsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the metadata of a DigitalTwinsInstance. The usual pattern to modify a property is to retrieve the DigitalTwinsInstance and security metadata, and then combine them with the modified values in a new body to update the DigitalTwinsInstance.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 */
export const DigitalTwinsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DigitalTwinsCreateOrUpdateInput,
  outputSchema: DigitalTwinsCreateOrUpdateOutput,
}));
// Input Schema
export interface DigitalTwinsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const DigitalTwinsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<DigitalTwinsDeleteInput>;

// Output Schema
export interface DigitalTwinsDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string> | null;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    principalId?: string | null;
    tenantId?: string | null;
    userAssignedIdentities?: Record<
      string,
      { clientId?: string; principalId?: string }
    > | null;
  };
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const DigitalTwinsDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
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
        principalId: Schema.optional(Schema.NullOr(Schema.String)),
        tenantId: Schema.optional(Schema.NullOr(Schema.String)),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                clientId: Schema.optional(Schema.String),
                principalId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<DigitalTwinsDeleteOutput>;

// The operation
/**
 * Delete a DigitalTwinsInstance.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 */
export const DigitalTwinsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DigitalTwinsDeleteInput,
  outputSchema: DigitalTwinsDeleteOutput,
}));
// Input Schema
export interface DigitalTwinsEndpointCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  endpointName: string;
  properties: {
    endpointType: "EventHub" | "EventGrid" | "ServiceBus";
    provisioningState?:
      | "Provisioning"
      | "Deleting"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Warning"
      | "Suspending"
      | "Restoring"
      | "Moving"
      | "Disabled"
      | null;
    createdTime?: string | null;
    authenticationType?: "KeyBased" | "IdentityBased";
    deadLetterSecret?: string | null;
    deadLetterUri?: string | null;
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string | null;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const DigitalTwinsEndpointCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      endpointType: Schema.Literals(["EventHub", "EventGrid", "ServiceBus"]),
      provisioningState: Schema.optional(
        Schema.NullOr(
          Schema.Literals([
            "Provisioning",
            "Deleting",
            "Updating",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleted",
            "Warning",
            "Suspending",
            "Restoring",
            "Moving",
            "Disabled",
          ]),
        ),
      ),
      createdTime: Schema.optional(Schema.NullOr(Schema.String)),
      authenticationType: Schema.optional(
        Schema.Literals(["KeyBased", "IdentityBased"]),
      ),
      deadLetterSecret: Schema.optional(Schema.NullOr(Schema.String)),
      deadLetterUri: Schema.optional(Schema.NullOr(Schema.String)),
      identity: Schema.optional(
        Schema.Struct({
          type: Schema.optional(
            Schema.Literals(["SystemAssigned", "UserAssigned"]),
          ),
          userAssignedIdentity: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<DigitalTwinsEndpointCreateOrUpdateInput>;

// Output Schema
export interface DigitalTwinsEndpointCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const DigitalTwinsEndpointCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<DigitalTwinsEndpointCreateOrUpdateOutput>;

// The operation
/**
 * Create or update DigitalTwinsInstance endpoint.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 * @param endpointName - Name of Endpoint Resource.
 */
export const DigitalTwinsEndpointCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DigitalTwinsEndpointCreateOrUpdateInput,
    outputSchema: DigitalTwinsEndpointCreateOrUpdateOutput,
  }));
// Input Schema
export interface DigitalTwinsEndpointDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  endpointName: string;
}
export const DigitalTwinsEndpointDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<DigitalTwinsEndpointDeleteInput>;

// Output Schema
export interface DigitalTwinsEndpointDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const DigitalTwinsEndpointDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<DigitalTwinsEndpointDeleteOutput>;

// The operation
/**
 * Delete a DigitalTwinsInstance endpoint.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 * @param endpointName - Name of Endpoint Resource.
 */
export const DigitalTwinsEndpointDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DigitalTwinsEndpointDeleteInput,
  outputSchema: DigitalTwinsEndpointDeleteOutput,
}));
// Input Schema
export interface DigitalTwinsEndpointGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  endpointName: string;
}
export const DigitalTwinsEndpointGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints/{endpointName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<DigitalTwinsEndpointGetInput>;

// Output Schema
export interface DigitalTwinsEndpointGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const DigitalTwinsEndpointGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<DigitalTwinsEndpointGetOutput>;

// The operation
/**
 * Get DigitalTwinsInstances Endpoint.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 * @param endpointName - Name of Endpoint Resource.
 */
export const DigitalTwinsEndpointGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DigitalTwinsEndpointGetInput,
  outputSchema: DigitalTwinsEndpointGetOutput,
}));
// Input Schema
export interface DigitalTwinsEndpointListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const DigitalTwinsEndpointListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/endpoints",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<DigitalTwinsEndpointListInput>;

// Output Schema
export interface DigitalTwinsEndpointListOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string | null;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
      createdAt?: string | null;
      lastModifiedBy?: string | null;
      lastModifiedByType?:
        | "User"
        | "Application"
        | "ManagedIdentity"
        | "Key"
        | null;
      lastModifiedAt?: string | null;
    };
  }[];
}
export const DigitalTwinsEndpointListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.NullOr(Schema.String)),
              createdByType: Schema.optional(
                Schema.NullOr(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
              ),
              createdAt: Schema.optional(Schema.NullOr(Schema.String)),
              lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
              lastModifiedByType: Schema.optional(
                Schema.NullOr(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
              ),
              lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DigitalTwinsEndpointListOutput>;

// The operation
/**
 * Get DigitalTwinsInstance Endpoints.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 */
export const DigitalTwinsEndpointList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DigitalTwinsEndpointListInput,
  outputSchema: DigitalTwinsEndpointListOutput,
}));
// Input Schema
export interface DigitalTwinsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const DigitalTwinsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
    apiVersion: "2023-01-31",
  }),
) as unknown as Schema.Codec<DigitalTwinsGetInput>;

// Output Schema
export interface DigitalTwinsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string> | null;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    principalId?: string | null;
    tenantId?: string | null;
    userAssignedIdentities?: Record<
      string,
      { clientId?: string; principalId?: string }
    > | null;
  };
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const DigitalTwinsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  ),
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
      principalId: Schema.optional(Schema.NullOr(Schema.String)),
      tenantId: Schema.optional(Schema.NullOr(Schema.String)),
      userAssignedIdentities: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              clientId: Schema.optional(Schema.String),
              principalId: Schema.optional(Schema.String),
            }),
          ),
        ),
      ),
    }),
  ),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.NullOr(Schema.String)),
      createdByType: Schema.optional(
        Schema.NullOr(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      ),
      createdAt: Schema.optional(Schema.NullOr(Schema.String)),
      lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
      lastModifiedByType: Schema.optional(
        Schema.NullOr(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      ),
      lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  ),
}) as unknown as Schema.Codec<DigitalTwinsGetOutput>;

// The operation
/**
 * Get DigitalTwinsInstances resource.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 */
export const DigitalTwinsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DigitalTwinsGetInput,
  outputSchema: DigitalTwinsGetOutput,
}));
// Input Schema
export interface DigitalTwinsListInput {
  subscriptionId: string;
}
export const DigitalTwinsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DigitalTwins/digitalTwinsInstances",
    apiVersion: "2023-01-31",
  }),
) as unknown as Schema.Codec<DigitalTwinsListInput>;

// Output Schema
export interface DigitalTwinsListOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string> | null;
    identity?: {
      type?:
        | "None"
        | "SystemAssigned"
        | "UserAssigned"
        | "SystemAssigned,UserAssigned";
      principalId?: string | null;
      tenantId?: string | null;
      userAssignedIdentities?: Record<
        string,
        { clientId?: string; principalId?: string }
      > | null;
    };
    systemData?: {
      createdBy?: string | null;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
      createdAt?: string | null;
      lastModifiedBy?: string | null;
      lastModifiedByType?:
        | "User"
        | "Application"
        | "ManagedIdentity"
        | "Key"
        | null;
      lastModifiedAt?: string | null;
    };
  }[];
}
export const DigitalTwinsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.NullOr(Schema.String)),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.String,
        tags: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        ),
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
            principalId: Schema.optional(Schema.NullOr(Schema.String)),
            tenantId: Schema.optional(Schema.NullOr(Schema.String)),
            userAssignedIdentities: Schema.optional(
              Schema.NullOr(
                Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    clientId: Schema.optional(Schema.String),
                    principalId: Schema.optional(Schema.String),
                  }),
                ),
              ),
            ),
          }),
        ),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.NullOr(Schema.String)),
            createdByType: Schema.optional(
              Schema.NullOr(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
            ),
            createdAt: Schema.optional(Schema.NullOr(Schema.String)),
            lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
            lastModifiedByType: Schema.optional(
              Schema.NullOr(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
            ),
            lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<DigitalTwinsListOutput>;

// The operation
/**
 * Get all the DigitalTwinsInstances in a subscription.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 */
export const DigitalTwinsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DigitalTwinsListInput,
  outputSchema: DigitalTwinsListOutput,
}));
// Input Schema
export interface DigitalTwinsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DigitalTwinsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<DigitalTwinsListByResourceGroupInput>;

// Output Schema
export interface DigitalTwinsListByResourceGroupOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string> | null;
    identity?: {
      type?:
        | "None"
        | "SystemAssigned"
        | "UserAssigned"
        | "SystemAssigned,UserAssigned";
      principalId?: string | null;
      tenantId?: string | null;
      userAssignedIdentities?: Record<
        string,
        { clientId?: string; principalId?: string }
      > | null;
    };
    systemData?: {
      createdBy?: string | null;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
      createdAt?: string | null;
      lastModifiedBy?: string | null;
      lastModifiedByType?:
        | "User"
        | "Application"
        | "ManagedIdentity"
        | "Key"
        | null;
      lastModifiedAt?: string | null;
    };
  }[];
}
export const DigitalTwinsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          ),
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
              principalId: Schema.optional(Schema.NullOr(Schema.String)),
              tenantId: Schema.optional(Schema.NullOr(Schema.String)),
              userAssignedIdentities: Schema.optional(
                Schema.NullOr(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      clientId: Schema.optional(Schema.String),
                      principalId: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              ),
            }),
          ),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.NullOr(Schema.String)),
              createdByType: Schema.optional(
                Schema.NullOr(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
              ),
              createdAt: Schema.optional(Schema.NullOr(Schema.String)),
              lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
              lastModifiedByType: Schema.optional(
                Schema.NullOr(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
              ),
              lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DigitalTwinsListByResourceGroupOutput>;

// The operation
/**
 * Get all the DigitalTwinsInstances in a resource group.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 */
export const DigitalTwinsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DigitalTwinsListByResourceGroupInput,
    outputSchema: DigitalTwinsListByResourceGroupOutput,
  }));
// Input Schema
export interface DigitalTwinsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: Record<string, string> | null;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    principalId?: string | null;
    tenantId?: string | null;
    userAssignedIdentities?: Record<
      string,
      { clientId?: string; principalId?: string }
    > | null;
  };
  properties?: { publicNetworkAccess?: "Enabled" | "Disabled" | null };
}
export const DigitalTwinsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
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
        principalId: Schema.optional(Schema.NullOr(Schema.String)),
        tenantId: Schema.optional(Schema.NullOr(Schema.String)),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                clientId: Schema.optional(Schema.String),
                principalId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        publicNetworkAccess: Schema.optional(
          Schema.NullOr(Schema.Literals(["Enabled", "Disabled"])),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<DigitalTwinsUpdateInput>;

// Output Schema
export interface DigitalTwinsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string> | null;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    principalId?: string | null;
    tenantId?: string | null;
    userAssignedIdentities?: Record<
      string,
      { clientId?: string; principalId?: string }
    > | null;
  };
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const DigitalTwinsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
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
        principalId: Schema.optional(Schema.NullOr(Schema.String)),
        tenantId: Schema.optional(Schema.NullOr(Schema.String)),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                clientId: Schema.optional(Schema.String),
                principalId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<DigitalTwinsUpdateOutput>;

// The operation
/**
 * Update metadata of DigitalTwinsInstance.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 */
export const DigitalTwinsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DigitalTwinsUpdateInput,
  outputSchema: DigitalTwinsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DigitalTwins/operations",
    apiVersion: "2023-01-31",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  nextLink?: string | null;
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string | null;
    isDataAction?: boolean;
    properties?: Record<string, unknown> | null;
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.NullOr(Schema.String)),
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
        origin: Schema.optional(Schema.NullOr(Schema.String)),
        isDataAction: Schema.optional(Schema.Boolean),
        properties: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available DigitalTwins service REST API operations.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
  id?: string;
  name?: string;
  type?: string;
  properties: {
    provisioningState?:
      | "Pending"
      | "Approved"
      | "Rejected"
      | "Disconnected"
      | null;
    privateEndpoint?: { id?: string };
    groupIds?: string[];
    privateLinkServiceConnectionState?: {
      status: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description: string;
      actionsRequired?: string;
    };
  };
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.NullOr(
          Schema.Literals(["Pending", "Approved", "Rejected", "Disconnected"]),
        ),
      ),
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      groupIds: Schema.optional(Schema.Array(Schema.String)),
      privateLinkServiceConnectionState: Schema.optional(
        Schema.Struct({
          status: Schema.Literals([
            "Pending",
            "Approved",
            "Rejected",
            "Disconnected",
          ]),
          description: Schema.String,
          actionsRequired: Schema.optional(Schema.String),
        }),
      ),
    }),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  properties: {
    provisioningState?:
      | "Pending"
      | "Approved"
      | "Rejected"
      | "Disconnected"
      | null;
    privateEndpoint?: { id?: string };
    groupIds?: string[];
    privateLinkServiceConnectionState?: {
      status: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description: string;
      actionsRequired?: string;
    };
  };
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.NullOr(
          Schema.Literals(["Pending", "Approved", "Rejected", "Disconnected"]),
        ),
      ),
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      groupIds: Schema.optional(Schema.Array(Schema.String)),
      privateLinkServiceConnectionState: Schema.optional(
        Schema.Struct({
          status: Schema.Literals([
            "Pending",
            "Approved",
            "Rejected",
            "Disconnected",
          ]),
          description: Schema.String,
          actionsRequired: Schema.optional(Schema.String),
        }),
      ),
    }),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Update the status of a private endpoint connection with the given name.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
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
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Delete private endpoint connection with the specified name.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
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
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties: {
    provisioningState?:
      | "Pending"
      | "Approved"
      | "Rejected"
      | "Disconnected"
      | null;
    privateEndpoint?: { id?: string };
    groupIds?: string[];
    privateLinkServiceConnectionState?: {
      status: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description: string;
      actionsRequired?: string;
    };
  };
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.NullOr(
          Schema.Literals(["Pending", "Approved", "Rejected", "Disconnected"]),
        ),
      ),
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      groupIds: Schema.optional(Schema.Array(Schema.String)),
      privateLinkServiceConnectionState: Schema.optional(
        Schema.Struct({
          status: Schema.Literals([
            "Pending",
            "Approved",
            "Rejected",
            "Disconnected",
          ]),
          description: Schema.String,
          actionsRequired: Schema.optional(Schema.String),
        }),
      ),
    }),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Get private endpoint connection properties for the given private endpoint.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
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
  resourceName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/privateEndpointConnections",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties: {
      provisioningState?:
        | "Pending"
        | "Approved"
        | "Rejected"
        | "Disconnected"
        | null;
      privateEndpoint?: { id?: string };
      groupIds?: string[];
      privateLinkServiceConnectionState?: {
        status: "Pending" | "Approved" | "Rejected" | "Disconnected";
        description: string;
        actionsRequired?: string;
      };
    };
    systemData?: {
      createdBy?: string | null;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
      createdAt?: string | null;
      lastModifiedBy?: string | null;
      lastModifiedByType?:
        | "User"
        | "Application"
        | "ManagedIdentity"
        | "Key"
        | null;
      lastModifiedAt?: string | null;
    };
  }[];
}
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.Struct({
            provisioningState: Schema.optional(
              Schema.NullOr(
                Schema.Literals([
                  "Pending",
                  "Approved",
                  "Rejected",
                  "Disconnected",
                ]),
              ),
            ),
            privateEndpoint: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
            groupIds: Schema.optional(Schema.Array(Schema.String)),
            privateLinkServiceConnectionState: Schema.optional(
              Schema.Struct({
                status: Schema.Literals([
                  "Pending",
                  "Approved",
                  "Rejected",
                  "Disconnected",
                ]),
                description: Schema.String,
                actionsRequired: Schema.optional(Schema.String),
              }),
            ),
          }),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.NullOr(Schema.String)),
              createdByType: Schema.optional(
                Schema.NullOr(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
              ),
              createdAt: Schema.optional(Schema.NullOr(Schema.String)),
              lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
              lastModifiedByType: Schema.optional(
                Schema.NullOr(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
              ),
              lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * List private endpoint connection properties.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  resourceId: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    resourceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/privateLinkResources/{resourceId}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  properties: {
    groupId?: string;
    requiredMembers?: string[];
    requiredZoneNames?: string[];
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      groupId: Schema.optional(Schema.String),
      requiredMembers: Schema.optional(Schema.Array(Schema.String)),
      requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Get the specified private link resource for the given Digital Twin.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 * @param resourceId - The name of the private link resource.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/privateLinkResources",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListInput>;

// Output Schema
export interface PrivateLinkResourcesListOutput {
  value?: {
    properties: {
      groupId?: string;
      requiredMembers?: string[];
      requiredZoneNames?: string[];
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
}
export const PrivateLinkResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.Struct({
            groupId: Schema.optional(Schema.String),
            requiredMembers: Schema.optional(Schema.Array(Schema.String)),
            requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
          }),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateLinkResourcesListOutput>;

// The operation
/**
 * List private link resources for given Digital Twin.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesListInput,
  outputSchema: PrivateLinkResourcesListOutput,
}));
// Input Schema
export interface TimeSeriesDatabaseConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  timeSeriesDatabaseConnectionName: string;
  properties?: {
    connectionType: "AzureDataExplorer";
    provisioningState?:
      | "Provisioning"
      | "Deleting"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Warning"
      | "Suspending"
      | "Restoring"
      | "Moving"
      | "Disabled";
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string | null;
    };
  };
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const TimeSeriesDatabaseConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    timeSeriesDatabaseConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        connectionType: Schema.Literals(["AzureDataExplorer"]),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Deleting",
            "Updating",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleted",
            "Warning",
            "Suspending",
            "Restoring",
            "Moving",
            "Disabled",
          ]),
        ),
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/timeSeriesDatabaseConnections/{timeSeriesDatabaseConnectionName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<TimeSeriesDatabaseConnectionsCreateOrUpdateInput>;

// Output Schema
export interface TimeSeriesDatabaseConnectionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const TimeSeriesDatabaseConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<TimeSeriesDatabaseConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a time series database connection.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 * @param timeSeriesDatabaseConnectionName - Name of time series database connection.
 */
export const TimeSeriesDatabaseConnectionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TimeSeriesDatabaseConnectionsCreateOrUpdateInput,
    outputSchema: TimeSeriesDatabaseConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface TimeSeriesDatabaseConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  timeSeriesDatabaseConnectionName: string;
  cleanupConnectionArtifacts?: "true" | "false";
}
export const TimeSeriesDatabaseConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    timeSeriesDatabaseConnectionName: Schema.String.pipe(T.PathParam()),
    cleanupConnectionArtifacts: Schema.optional(
      Schema.Literals(["true", "false"]),
    ),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/timeSeriesDatabaseConnections/{timeSeriesDatabaseConnectionName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<TimeSeriesDatabaseConnectionsDeleteInput>;

// Output Schema
export interface TimeSeriesDatabaseConnectionsDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const TimeSeriesDatabaseConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<TimeSeriesDatabaseConnectionsDeleteOutput>;

// The operation
/**
 * Delete a time series database connection.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 * @param timeSeriesDatabaseConnectionName - Name of time series database connection.
 * @param cleanupConnectionArtifacts - Specifies whether or not to attempt to clean up artifacts that were created in order to establish a connection to the time series database. This is a best-effort attempt that will fail if appropriate permissions are not in place. Setting this to 'true' does not delete any recorded data.
 */
export const TimeSeriesDatabaseConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TimeSeriesDatabaseConnectionsDeleteInput,
    outputSchema: TimeSeriesDatabaseConnectionsDeleteOutput,
  }));
// Input Schema
export interface TimeSeriesDatabaseConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  timeSeriesDatabaseConnectionName: string;
}
export const TimeSeriesDatabaseConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    timeSeriesDatabaseConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/timeSeriesDatabaseConnections/{timeSeriesDatabaseConnectionName}",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<TimeSeriesDatabaseConnectionsGetInput>;

// Output Schema
export interface TimeSeriesDatabaseConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string | null;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
    createdAt?: string | null;
    lastModifiedBy?: string | null;
    lastModifiedByType?:
      | "User"
      | "Application"
      | "ManagedIdentity"
      | "Key"
      | null;
    lastModifiedAt?: string | null;
  };
}
export const TimeSeriesDatabaseConnectionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.NullOr(Schema.String)),
        createdByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        createdAt: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
        lastModifiedByType: Schema.optional(
          Schema.NullOr(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
          ),
        ),
        lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<TimeSeriesDatabaseConnectionsGetOutput>;

// The operation
/**
 * Get the description of an existing time series database connection.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 * @param timeSeriesDatabaseConnectionName - Name of time series database connection.
 */
export const TimeSeriesDatabaseConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TimeSeriesDatabaseConnectionsGetInput,
    outputSchema: TimeSeriesDatabaseConnectionsGetOutput,
  }));
// Input Schema
export interface TimeSeriesDatabaseConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const TimeSeriesDatabaseConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/timeSeriesDatabaseConnections",
      apiVersion: "2023-01-31",
    }),
  ) as unknown as Schema.Codec<TimeSeriesDatabaseConnectionsListInput>;

// Output Schema
export interface TimeSeriesDatabaseConnectionsListOutput {
  nextLink?: string | null;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string | null;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key" | null;
      createdAt?: string | null;
      lastModifiedBy?: string | null;
      lastModifiedByType?:
        | "User"
        | "Application"
        | "ManagedIdentity"
        | "Key"
        | null;
      lastModifiedAt?: string | null;
    };
  }[];
}
export const TimeSeriesDatabaseConnectionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.NullOr(Schema.String)),
              createdByType: Schema.optional(
                Schema.NullOr(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
              ),
              createdAt: Schema.optional(Schema.NullOr(Schema.String)),
              lastModifiedBy: Schema.optional(Schema.NullOr(Schema.String)),
              lastModifiedByType: Schema.optional(
                Schema.NullOr(
                  Schema.Literals([
                    "User",
                    "Application",
                    "ManagedIdentity",
                    "Key",
                  ]),
                ),
              ),
              lastModifiedAt: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<TimeSeriesDatabaseConnectionsListOutput>;

// The operation
/**
 * Get all existing time series database connections for this DigitalTwins instance.
 *
 * @param api-version - Version of the DigitalTwinsInstance Management API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the DigitalTwinsInstance.
 * @param resourceName - The name of the DigitalTwinsInstance.
 */
export const TimeSeriesDatabaseConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TimeSeriesDatabaseConnectionsListInput,
    outputSchema: TimeSeriesDatabaseConnectionsListOutput,
  }));
