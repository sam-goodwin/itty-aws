/**
 * Azure Powerbiprivatelinks API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.PowerBI/operations",
    apiVersion: "2020-06-01",
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
 * Lists all of the available Power BI RP operations.
 *
 * @param api-version - The API version to be used with the HTTP request.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PowerBIResourcesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureResourceName: string;
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
  location?: string;
  properties?: {
    tenantId?: string;
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
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: string;
        };
        provisioningState?:
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Succeeded"
          | "Canceled"
          | "Failed";
      };
    }[];
  };
  tags?: Record<string, string>;
}
export const PowerBIResourcesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureResourceName: Schema.String.pipe(T.PathParam()),
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
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
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
              properties: Schema.optional(
                Schema.Struct({
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  privateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      status: Schema.optional(
                        Schema.Literals([
                          "Pending",
                          "Approved",
                          "Rejected",
                          "Disconnected",
                        ]),
                      ),
                      description: Schema.optional(Schema.String),
                      actionsRequired: Schema.optional(Schema.String),
                    }),
                  ),
                  provisioningState: Schema.optional(
                    Schema.Literals([
                      "Creating",
                      "Updating",
                      "Deleting",
                      "Succeeded",
                      "Canceled",
                      "Failed",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI/{azureResourceName}",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PowerBIResourcesCreateInput>;

// Output Schema
export interface PowerBIResourcesCreateOutput {
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
  location?: string;
  properties?: {
    tenantId?: string;
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
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: string;
        };
        provisioningState?:
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Succeeded"
          | "Canceled"
          | "Failed";
      };
    }[];
  };
  tags?: Record<string, string>;
}
export const PowerBIResourcesCreateOutput =
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
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
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
              properties: Schema.optional(
                Schema.Struct({
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  privateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      status: Schema.optional(
                        Schema.Literals([
                          "Pending",
                          "Approved",
                          "Rejected",
                          "Disconnected",
                        ]),
                      ),
                      description: Schema.optional(Schema.String),
                      actionsRequired: Schema.optional(Schema.String),
                    }),
                  ),
                  provisioningState: Schema.optional(
                    Schema.Literals([
                      "Creating",
                      "Updating",
                      "Deleting",
                      "Succeeded",
                      "Canceled",
                      "Failed",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<PowerBIResourcesCreateOutput>;

// The operation
/**
 * Creates or updates a Private Link Service Resource for Power BI.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param resourceGroupName - The name of the resource group.
 * @param azureResourceName - The name of the Azure resource.
 * @param api-version - The API version to be used with the HTTP request.
 * @param x-ms-client-tenant-id - The client tenant id in header. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 */
export const PowerBIResourcesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PowerBIResourcesCreateInput,
  outputSchema: PowerBIResourcesCreateOutput,
}));
// Input Schema
export interface PowerBIResourcesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureResourceName: string;
}
export const PowerBIResourcesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI/{azureResourceName}",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PowerBIResourcesDeleteInput>;

// Output Schema
export type PowerBIResourcesDeleteOutput = void;
export const PowerBIResourcesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PowerBIResourcesDeleteOutput>;

// The operation
/**
 * Deletes a Private Link Service Resource for Power BI.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param resourceGroupName - The name of the resource group.
 * @param azureResourceName - The name of the Azure resource.
 * @param api-version - The API version to be used with the HTTP request.
 */
export const PowerBIResourcesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PowerBIResourcesDeleteInput,
  outputSchema: PowerBIResourcesDeleteOutput,
}));
// Input Schema
export interface PowerBIResourcesListByResourceNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureResourceName: string;
}
export const PowerBIResourcesListByResourceNameInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI/{azureResourceName}",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PowerBIResourcesListByResourceNameInput>;

// Output Schema
export type PowerBIResourcesListByResourceNameOutput = {
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
  location?: string;
  properties?: {
    tenantId?: string;
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
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: string;
        };
        provisioningState?:
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Succeeded"
          | "Canceled"
          | "Failed";
      };
    }[];
  };
  tags?: Record<string, string>;
}[];
export const PowerBIResourcesListByResourceNameOutput =
  /*@__PURE__*/ Schema.Array(
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
      location: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Struct({
          tenantId: Schema.optional(Schema.String),
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
                properties: Schema.optional(
                  Schema.Struct({
                    privateEndpoint: Schema.optional(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                    ),
                    privateLinkServiceConnectionState: Schema.optional(
                      Schema.Struct({
                        status: Schema.optional(
                          Schema.Literals([
                            "Pending",
                            "Approved",
                            "Rejected",
                            "Disconnected",
                          ]),
                        ),
                        description: Schema.optional(Schema.String),
                        actionsRequired: Schema.optional(Schema.String),
                      }),
                    ),
                    provisioningState: Schema.optional(
                      Schema.Literals([
                        "Creating",
                        "Updating",
                        "Deleting",
                        "Succeeded",
                        "Canceled",
                        "Failed",
                      ]),
                    ),
                  }),
                ),
              }),
            ),
          ),
        }),
      ),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ) as unknown as Schema.Codec<PowerBIResourcesListByResourceNameOutput>;

// The operation
/**
 * Gets all the private link resources for the given Azure resource.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param resourceGroupName - The name of the resource group.
 * @param azureResourceName - The name of the Azure resource.
 * @param api-version - The API version to be used with the HTTP request.
 */
export const PowerBIResourcesListByResourceName =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PowerBIResourcesListByResourceNameInput,
    outputSchema: PowerBIResourcesListByResourceNameOutput,
  }));
// Input Schema
export interface PowerBIResourcesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureResourceName: string;
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
  location?: string;
  properties?: {
    tenantId?: string;
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
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: string;
        };
        provisioningState?:
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Succeeded"
          | "Canceled"
          | "Failed";
      };
    }[];
  };
  tags?: Record<string, string>;
}
export const PowerBIResourcesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureResourceName: Schema.String.pipe(T.PathParam()),
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
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
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
              properties: Schema.optional(
                Schema.Struct({
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  privateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      status: Schema.optional(
                        Schema.Literals([
                          "Pending",
                          "Approved",
                          "Rejected",
                          "Disconnected",
                        ]),
                      ),
                      description: Schema.optional(Schema.String),
                      actionsRequired: Schema.optional(Schema.String),
                    }),
                  ),
                  provisioningState: Schema.optional(
                    Schema.Literals([
                      "Creating",
                      "Updating",
                      "Deleting",
                      "Succeeded",
                      "Canceled",
                      "Failed",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI/{azureResourceName}",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PowerBIResourcesUpdateInput>;

// Output Schema
export interface PowerBIResourcesUpdateOutput {
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
  location?: string;
  properties?: {
    tenantId?: string;
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
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: string;
        };
        provisioningState?:
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Succeeded"
          | "Canceled"
          | "Failed";
      };
    }[];
  };
  tags?: Record<string, string>;
}
export const PowerBIResourcesUpdateOutput =
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
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
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
              properties: Schema.optional(
                Schema.Struct({
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  privateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      status: Schema.optional(
                        Schema.Literals([
                          "Pending",
                          "Approved",
                          "Rejected",
                          "Disconnected",
                        ]),
                      ),
                      description: Schema.optional(Schema.String),
                      actionsRequired: Schema.optional(Schema.String),
                    }),
                  ),
                  provisioningState: Schema.optional(
                    Schema.Literals([
                      "Creating",
                      "Updating",
                      "Deleting",
                      "Succeeded",
                      "Canceled",
                      "Failed",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<PowerBIResourcesUpdateOutput>;

// The operation
/**
 * Creates or updates a Private Link Service Resource for Power BI.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param resourceGroupName - The name of the resource group.
 * @param azureResourceName - The name of the Azure resource.
 * @param api-version - The API version to be used with the HTTP request.
 * @param x-ms-client-tenant-id - The client tenant id in header. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 */
export const PowerBIResourcesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PowerBIResourcesUpdateInput,
  outputSchema: PowerBIResourcesUpdateOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureResourceName: string;
  privateEndpointName: string;
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
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
  };
}
export const PrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureResourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointName: Schema.String.pipe(T.PathParam()),
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
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI/{azureResourceName}/privateEndpointConnections/{privateEndpointName}",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOutput {
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
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
  };
}
export const PrivateEndpointConnectionsCreateOutput =
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
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOutput>;

// The operation
/**
 * Update a specific private endpoint connection.
 *
 * Updates the status of Private Endpoint Connection object. Used to approve or reject a connection.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param resourceGroupName - The name of the resource group.
 * @param azureResourceName - The name of the Azure resource.
 * @param privateEndpointName - The name of the private endpoint.
 * @param api-version - The API version to be used with the HTTP request.
 */
export const PrivateEndpointConnectionsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateInput,
    outputSchema: PrivateEndpointConnectionsCreateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureResourceName: string;
  privateEndpointName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureResourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI/{azureResourceName}/privateEndpointConnections/{privateEndpointName}",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Asynchronous API to delete a private endpoint connection for Power BI by private endpoint name.
 *
 * Deletes a private endpoint connection for Power BI by private endpoint name.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param resourceGroupName - The name of the resource group.
 * @param azureResourceName - The name of the Azure resource.
 * @param privateEndpointName - The name of the private endpoint.
 * @param api-version - The API version to be used with the HTTP request.
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
  azureResourceName: string;
  privateEndpointName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureResourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI/{azureResourceName}/privateEndpointConnections/{privateEndpointName}",
      apiVersion: "2020-06-01",
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
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
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
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Get a specific private endpoint connection.
 *
 * Get a specific private endpoint connection for Power BI by private endpoint name.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param resourceGroupName - The name of the resource group.
 * @param azureResourceName - The name of the Azure resource.
 * @param privateEndpointName - The name of the private endpoint.
 * @param api-version - The API version to be used with the HTTP request.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureResourceName: string;
}
export const PrivateEndpointConnectionsListByResourceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI/{azureResourceName}/privateEndpointConnections",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByResourceInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByResourceOutput {
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
    properties?: {
      privateEndpoint?: { id?: string };
      privateLinkServiceConnectionState?: {
        status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
        description?: string;
        actionsRequired?: string;
      };
      provisioningState?:
        | "Creating"
        | "Updating"
        | "Deleting"
        | "Succeeded"
        | "Canceled"
        | "Failed";
    };
  }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsListByResourceOutput =
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
          properties: Schema.optional(
            Schema.Struct({
              privateEndpoint: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              privateLinkServiceConnectionState: Schema.optional(
                Schema.Struct({
                  status: Schema.optional(
                    Schema.Literals([
                      "Pending",
                      "Approved",
                      "Rejected",
                      "Disconnected",
                    ]),
                  ),
                  description: Schema.optional(Schema.String),
                  actionsRequired: Schema.optional(Schema.String),
                }),
              ),
              provisioningState: Schema.optional(
                Schema.Literals([
                  "Creating",
                  "Updating",
                  "Deleting",
                  "Succeeded",
                  "Canceled",
                  "Failed",
                ]),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByResourceOutput>;

// The operation
/**
 * Lists all private endpoint connections under a resource.
 *
 * Gets private endpoint connection for Power BI.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param azureResourceName - The name of the powerbi resource.
 * @param api-version - The API version to be used with the HTTP request.
 */
export const PrivateEndpointConnectionsListByResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByResourceInput,
    outputSchema: PrivateEndpointConnectionsListByResourceOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureResourceName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureResourceName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI/{azureResourceName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  properties?: {
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
    properties: Schema.optional(
      Schema.Struct({
        groupId: Schema.optional(Schema.String),
        requiredMembers: Schema.optional(Schema.Array(Schema.String)),
        requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Get a private link resource.
 *
 * Get properties of a private link resource.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param resourceGroupName - The name of the resource group.
 * @param azureResourceName - The name of the Azure resource.
 * @param privateLinkResourceName - The name of private link resource.
 * @param api-version - The API version to be used with the HTTP request.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListByResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  azureResourceName: string;
}
export const PrivateLinkResourcesListByResourceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    azureResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI/{azureResourceName}/privateLinkResources",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByResourceInput>;

// Output Schema
export interface PrivateLinkResourcesListByResourceOutput {
  value?: {
    properties?: {
      groupId?: string;
      requiredMembers?: string[];
      requiredZoneNames?: string[];
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const PrivateLinkResourcesListByResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              groupId: Schema.optional(Schema.String),
              requiredMembers: Schema.optional(Schema.Array(Schema.String)),
              requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByResourceOutput>;

// The operation
/**
 * List private link Power BI resource.
 *
 * List private link resources under a specific Power BI resource.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param resourceGroupName - The name of the resource group.
 * @param azureResourceName - The name of the Azure resource.
 * @param api-version - The API version to be used with the HTTP request.
 */
export const PrivateLinkResourcesListByResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByResourceInput,
    outputSchema: PrivateLinkResourcesListByResourceOutput,
  }));
// Input Schema
export interface PrivateLinkServiceResourceOperationResultsGetInput {
  subscriptionId: string;
  operationId: string;
}
export const PrivateLinkServiceResourceOperationResultsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBI/operationResults/{operationId}",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServiceResourceOperationResultsGetInput>;

// Output Schema
export interface PrivateLinkServiceResourceOperationResultsGetOutput {
  id?: string;
  name?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    }[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const PrivateLinkServiceResourceOperationResultsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(
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
        ),
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
  }) as unknown as Schema.Codec<PrivateLinkServiceResourceOperationResultsGetOutput>;

// The operation
/**
 * Gets operation result of Private Link Service Resources for Power BI.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param operationId - The id of Azure async operation.
 * @param api-version - The API version to be used with the HTTP request.
 */
export const PrivateLinkServiceResourceOperationResultsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServiceResourceOperationResultsGetInput,
    outputSchema: PrivateLinkServiceResourceOperationResultsGetOutput,
  }));
// Input Schema
export interface PrivateLinkServicesForPowerBIListBySubscriptionIdInput {
  subscriptionId: string;
}
export const PrivateLinkServicesForPowerBIListBySubscriptionIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForPowerBIListBySubscriptionIdInput>;

// Output Schema
export type PrivateLinkServicesForPowerBIListBySubscriptionIdOutput = {
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
  location?: string;
  properties?: {
    tenantId?: string;
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
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: string;
        };
        provisioningState?:
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Succeeded"
          | "Canceled"
          | "Failed";
      };
    }[];
  };
  tags?: Record<string, string>;
}[];
export const PrivateLinkServicesForPowerBIListBySubscriptionIdOutput =
  /*@__PURE__*/ Schema.Array(
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
      location: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Struct({
          tenantId: Schema.optional(Schema.String),
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
                properties: Schema.optional(
                  Schema.Struct({
                    privateEndpoint: Schema.optional(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                    ),
                    privateLinkServiceConnectionState: Schema.optional(
                      Schema.Struct({
                        status: Schema.optional(
                          Schema.Literals([
                            "Pending",
                            "Approved",
                            "Rejected",
                            "Disconnected",
                          ]),
                        ),
                        description: Schema.optional(Schema.String),
                        actionsRequired: Schema.optional(Schema.String),
                      }),
                    ),
                    provisioningState: Schema.optional(
                      Schema.Literals([
                        "Creating",
                        "Updating",
                        "Deleting",
                        "Succeeded",
                        "Canceled",
                        "Failed",
                      ]),
                    ),
                  }),
                ),
              }),
            ),
          ),
        }),
      ),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesForPowerBIListBySubscriptionIdOutput>;

// The operation
/**
 * Gets all the private link resources for the given subscription id.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param api-version - The API version to be used with the HTTP request.
 */
export const privateLinkServicesForPowerBIListBySubscriptionId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesForPowerBIListBySubscriptionIdInput,
    outputSchema: PrivateLinkServicesForPowerBIListBySubscriptionIdOutput,
  }));
// Input Schema
export interface PrivateLinkServicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PrivateLinkServicesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/privateLinkServicesForPowerBI",
      apiVersion: "2020-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesListByResourceGroupInput>;

// Output Schema
export type PrivateLinkServicesListByResourceGroupOutput = {
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
  location?: string;
  properties?: {
    tenantId?: string;
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
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: string;
        };
        provisioningState?:
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Succeeded"
          | "Canceled"
          | "Failed";
      };
    }[];
  };
  tags?: Record<string, string>;
}[];
export const PrivateLinkServicesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Array(
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
      location: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Struct({
          tenantId: Schema.optional(Schema.String),
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
                properties: Schema.optional(
                  Schema.Struct({
                    privateEndpoint: Schema.optional(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                    ),
                    privateLinkServiceConnectionState: Schema.optional(
                      Schema.Struct({
                        status: Schema.optional(
                          Schema.Literals([
                            "Pending",
                            "Approved",
                            "Rejected",
                            "Disconnected",
                          ]),
                        ),
                        description: Schema.optional(Schema.String),
                        actionsRequired: Schema.optional(Schema.String),
                      }),
                    ),
                    provisioningState: Schema.optional(
                      Schema.Literals([
                        "Creating",
                        "Updating",
                        "Deleting",
                        "Succeeded",
                        "Canceled",
                        "Failed",
                      ]),
                    ),
                  }),
                ),
              }),
            ),
          ),
        }),
      ),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ) as unknown as Schema.Codec<PrivateLinkServicesListByResourceGroupOutput>;

// The operation
/**
 * Gets all the private link resources for the given resource group.
 *
 * @param subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - The API version to be used with the HTTP request.
 */
export const PrivateLinkServicesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkServicesListByResourceGroupInput,
    outputSchema: PrivateLinkServicesListByResourceGroupOutput,
  }));
