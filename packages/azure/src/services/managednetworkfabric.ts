/**
 * Azure Managednetworkfabric API
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
export interface AccessControlListsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accessControlListName: string;
  properties: {
    annotation?: string;
    configurationType: "File" | "Inline";
    aclsUrl?: string;
    defaultAction?: "Permit" | "Deny";
    matchConfigurations?: {
      matchConfigurationName?: string;
      sequenceNumber?: number;
      ipAddressType?: "IPv4" | "IPv6";
      matchConditions?: {
        protocolTypes?: string[];
        vlanMatchCondition?: {
          vlans?: string[];
          innerVlans?: string[];
          vlanGroupNames?: string[];
        };
        ipCondition?: {
          type?: "SourceIP" | "DestinationIP" | "Bidirectional";
          prefixType?: "Prefix" | "LongestPrefix";
          ipPrefixValues?: string[];
          ipGroupNames?: string[];
        };
      }[];
      actions?: {
        type?: "Drop" | "Count" | "Log" | "Remark" | "PoliceRate";
        counterName?: string;
        remarkComment?: string;
        policeRateConfiguration?: {
          bitRate?: {
            rate?: number;
            unit?: "bps" | "Kbps" | "Mbps" | "Gbps" | "Pps";
          };
          burstSize?: {
            size?: number;
            unit?: "Bytes" | "KBytes" | "MBytes" | "GBytes" | "Packets";
          };
        };
      }[];
    }[];
    dynamicMatchConfigurations?: {
      ipGroups?: {
        name?: string;
        ipAddressType?: "IPv4" | "IPv6";
        ipPrefixes?: string[];
      }[];
      vlanGroups?: { name?: string; vlans?: string[] }[];
      portGroups?: { name?: string; ports?: string[] }[];
    }[];
    lastSyncedTime?: string;
    aclType?:
      | "ControlPlaneTrafficPolicy"
      | "Tenant"
      | "Management"
      | "ControlPlaneAcl";
    deviceRole?: "CE" | "ToR" | "NPB" | "ManagementSwitch";
    globalAccessControlListActions?: { enableCount?: "True" | "False" };
    lastOperation?: { details?: string };
    networkFabricIds?: string[];
    controlPlaneAclConfiguration?: {
      ipAddressType?: "IPv4" | "IPv6";
      matchConfigurations?: {
        matchConfigurationName?: string;
        sequenceNumber?: number;
        matchCondition?: {
          protocolTypes?: string;
          ipCondition?: {
            sourceIpPrefix?: string;
            destinationIpPrefix?: string;
          };
          ttlMatchCondition?: {
            ttlValue?: string;
            ttlMatchType?: "eq" | "neq" | "gt" | "lt";
          };
          portCondition?: {
            sourcePorts?: {
              ports?: string[];
              portMatchType?: "eq" | "neq" | "gt" | "lt" | "range";
            };
            destinationPorts?: {
              ports?: string[];
              portMatchType?: "eq" | "neq" | "gt" | "lt" | "range";
            };
          };
          flags?: string[];
          icmpConfiguration?: { icmpTypes?: string[] };
        };
        action?: {
          type?: "Permit" | "Deny" | "Remark";
          remarkComment?: string;
        };
      }[];
    }[];
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
  };
  tags?: Record<string, string>;
  location: string;
}
export const AccessControlListsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      configurationType: Schema.Literals(["File", "Inline"]),
      aclsUrl: Schema.optional(Schema.String),
      defaultAction: Schema.optional(Schema.Literals(["Permit", "Deny"])),
      matchConfigurations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            matchConfigurationName: Schema.optional(Schema.String),
            sequenceNumber: Schema.optional(Schema.Number),
            ipAddressType: Schema.optional(Schema.Literals(["IPv4", "IPv6"])),
            matchConditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  protocolTypes: Schema.optional(Schema.Array(Schema.String)),
                  vlanMatchCondition: Schema.optional(
                    Schema.Struct({
                      vlans: Schema.optional(Schema.Array(Schema.String)),
                      innerVlans: Schema.optional(Schema.Array(Schema.String)),
                      vlanGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                    }),
                  ),
                  ipCondition: Schema.optional(
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals([
                          "SourceIP",
                          "DestinationIP",
                          "Bidirectional",
                        ]),
                      ),
                      prefixType: Schema.optional(
                        Schema.Literals(["Prefix", "LongestPrefix"]),
                      ),
                      ipPrefixValues: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      ipGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            actions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  type: Schema.optional(
                    Schema.Literals([
                      "Drop",
                      "Count",
                      "Log",
                      "Remark",
                      "PoliceRate",
                    ]),
                  ),
                  counterName: Schema.optional(Schema.String),
                  remarkComment: Schema.optional(Schema.String),
                  policeRateConfiguration: Schema.optional(
                    Schema.Struct({
                      bitRate: Schema.optional(
                        Schema.Struct({
                          rate: Schema.optional(Schema.Number),
                          unit: Schema.optional(
                            Schema.Literals([
                              "bps",
                              "Kbps",
                              "Mbps",
                              "Gbps",
                              "Pps",
                            ]),
                          ),
                        }),
                      ),
                      burstSize: Schema.optional(
                        Schema.Struct({
                          size: Schema.optional(Schema.Number),
                          unit: Schema.optional(
                            Schema.Literals([
                              "Bytes",
                              "KBytes",
                              "MBytes",
                              "GBytes",
                              "Packets",
                            ]),
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            ),
          }),
        ),
      ),
      dynamicMatchConfigurations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipGroups: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  ipAddressType: Schema.optional(
                    Schema.Literals(["IPv4", "IPv6"]),
                  ),
                  ipPrefixes: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            vlanGroups: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  vlans: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            portGroups: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  ports: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
          }),
        ),
      ),
      lastSyncedTime: Schema.optional(Schema.String),
      aclType: Schema.optional(
        Schema.Literals([
          "ControlPlaneTrafficPolicy",
          "Tenant",
          "Management",
          "ControlPlaneAcl",
        ]),
      ),
      deviceRole: Schema.optional(
        Schema.Literals(["CE", "ToR", "NPB", "ManagementSwitch"]),
      ),
      globalAccessControlListActions: Schema.optional(
        Schema.Struct({
          enableCount: Schema.optional(Schema.Literals(["True", "False"])),
        }),
      ),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      networkFabricIds: Schema.optional(Schema.Array(Schema.String)),
      controlPlaneAclConfiguration: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipAddressType: Schema.optional(Schema.Literals(["IPv4", "IPv6"])),
            matchConfigurations: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  matchConfigurationName: Schema.optional(Schema.String),
                  sequenceNumber: Schema.optional(Schema.Number),
                  matchCondition: Schema.optional(
                    Schema.Struct({
                      protocolTypes: Schema.optional(Schema.String),
                      ipCondition: Schema.optional(
                        Schema.Struct({
                          sourceIpPrefix: Schema.optional(Schema.String),
                          destinationIpPrefix: Schema.optional(Schema.String),
                        }),
                      ),
                      ttlMatchCondition: Schema.optional(
                        Schema.Struct({
                          ttlValue: Schema.optional(Schema.String),
                          ttlMatchType: Schema.optional(
                            Schema.Literals(["eq", "neq", "gt", "lt"]),
                          ),
                        }),
                      ),
                      portCondition: Schema.optional(
                        Schema.Struct({
                          sourcePorts: Schema.optional(
                            Schema.Struct({
                              ports: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                              portMatchType: Schema.optional(
                                Schema.Literals([
                                  "eq",
                                  "neq",
                                  "gt",
                                  "lt",
                                  "range",
                                ]),
                              ),
                            }),
                          ),
                          destinationPorts: Schema.optional(
                            Schema.Struct({
                              ports: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                              portMatchType: Schema.optional(
                                Schema.Literals([
                                  "eq",
                                  "neq",
                                  "gt",
                                  "lt",
                                  "range",
                                ]),
                              ),
                            }),
                          ),
                        }),
                      ),
                      flags: Schema.optional(Schema.Array(Schema.String)),
                      icmpConfiguration: Schema.optional(
                        Schema.Struct({
                          icmpTypes: Schema.optional(
                            Schema.Array(Schema.String),
                          ),
                        }),
                      ),
                    }),
                  ),
                  action: Schema.optional(
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals(["Permit", "Deny", "Remark"]),
                      ),
                      remarkComment: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            ),
          }),
        ),
      ),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      administrativeState: Schema.optional(
        Schema.Literals([
          "Enabled",
          "Disabled",
          "MAT",
          "RMA",
          "UnderMaintenance",
          "EnabledDegraded",
        ]),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<AccessControlListsCreateInput>;

// Output Schema
export interface AccessControlListsCreateOutput {
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
export const AccessControlListsCreateOutput =
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
  }) as unknown as Schema.Codec<AccessControlListsCreateOutput>;

// The operation
/**
 * Implements Access Control List PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessControlListsCreateInput,
  outputSchema: AccessControlListsCreateOutput,
}));
// Input Schema
export interface AccessControlListsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accessControlListName: string;
}
export const AccessControlListsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<AccessControlListsDeleteInput>;

// Output Schema
export type AccessControlListsDeleteOutput = void;
export const AccessControlListsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AccessControlListsDeleteOutput>;

// The operation
/**
 * Implements Access Control List DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessControlListsDeleteInput,
  outputSchema: AccessControlListsDeleteOutput,
}));
// Input Schema
export interface AccessControlListsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accessControlListName: string;
}
export const AccessControlListsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<AccessControlListsGetInput>;

// Output Schema
export interface AccessControlListsGetOutput {
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
export const AccessControlListsGetOutput =
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
  }) as unknown as Schema.Codec<AccessControlListsGetOutput>;

// The operation
/**
 * Implements Access Control List GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessControlListsGetInput,
  outputSchema: AccessControlListsGetOutput,
}));
// Input Schema
export interface AccessControlListsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AccessControlListsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<AccessControlListsListByResourceGroupInput>;

// Output Schema
export interface AccessControlListsListByResourceGroupOutput {
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
export const AccessControlListsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AccessControlListsListByResourceGroupOutput>;

// The operation
/**
 * Implements AccessControlLists list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AccessControlListsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccessControlListsListByResourceGroupInput,
    outputSchema: AccessControlListsListByResourceGroupOutput,
  }));
// Input Schema
export interface AccessControlListsListBySubscriptionInput {
  subscriptionId: string;
}
export const AccessControlListsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/accessControlLists",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<AccessControlListsListBySubscriptionInput>;

// Output Schema
export interface AccessControlListsListBySubscriptionOutput {
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
export const AccessControlListsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AccessControlListsListBySubscriptionOutput>;

// The operation
/**
 * Implements AccessControlLists list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AccessControlListsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccessControlListsListBySubscriptionInput,
    outputSchema: AccessControlListsListBySubscriptionOutput,
  }));
// Input Schema
export interface AccessControlListsResyncInput {
  subscriptionId: string;
  resourceGroupName: string;
  accessControlListName: string;
}
export const AccessControlListsResyncInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}/resync",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<AccessControlListsResyncInput>;

// Output Schema
export interface AccessControlListsResyncOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const AccessControlListsResyncOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AccessControlListsResyncOutput>;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsResync = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessControlListsResyncInput,
  outputSchema: AccessControlListsResyncOutput,
}));
// Input Schema
export interface AccessControlListsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accessControlListName: string;
  properties?: {
    configurationType?: "File" | "Inline";
    aclsUrl?: string;
    defaultAction?: "Permit" | "Deny";
    matchConfigurations?: {
      matchConfigurationName?: string;
      sequenceNumber?: number;
      ipAddressType?: "IPv4" | "IPv6";
      matchConditions?: {
        protocolTypes?: string[];
        vlanMatchCondition?: {
          vlans?: string[];
          innerVlans?: string[];
          vlanGroupNames?: string[];
        };
        ipCondition?: {
          type?: "SourceIP" | "DestinationIP" | "Bidirectional";
          prefixType?: "Prefix" | "LongestPrefix";
          ipPrefixValues?: string[];
          ipGroupNames?: string[];
        };
      }[];
      actions?: {
        type?: "Drop" | "Count" | "Log" | "Remark" | "PoliceRate";
        counterName?: string;
        remarkComment?: string;
        policeRateConfiguration?: {
          bitRate?: {
            rate?: number;
            unit?: "bps" | "Kbps" | "Mbps" | "Gbps" | "Pps";
          };
          burstSize?: {
            size?: number;
            unit?: "Bytes" | "KBytes" | "MBytes" | "GBytes" | "Packets";
          };
        };
      }[];
    }[];
    dynamicMatchConfigurations?: {
      ipGroups?: {
        name?: string;
        ipAddressType?: "IPv4" | "IPv6";
        ipPrefixes?: string[];
      }[];
      vlanGroups?: { name?: string; vlans?: string[] }[];
      portGroups?: { name?: string; ports?: string[] }[];
    }[];
    controlPlaneAclConfiguration?: {
      ipAddressType?: "IPv4" | "IPv6";
      matchConfigurations?: {
        matchConfigurationName?: string;
        sequenceNumber?: number;
        matchCondition?: {
          protocolTypes?: string;
          ipCondition?: {
            sourceIpPrefix?: string;
            destinationIpPrefix?: string;
          };
          ttlMatchCondition?: {
            ttlValue?: string;
            ttlMatchType?: "eq" | "neq" | "gt" | "lt";
          };
          portCondition?: {
            sourcePorts?: {
              ports?: string[];
              portMatchType?: "eq" | "neq" | "gt" | "lt" | "range";
            };
            destinationPorts?: {
              ports?: string[];
              portMatchType?: "eq" | "neq" | "gt" | "lt" | "range";
            };
          };
          flags?: string[];
          icmpConfiguration?: { icmpTypes?: string[] };
        };
        action?: {
          type?: "Permit" | "Deny" | "Remark";
          remarkComment?: string;
        };
      }[];
    }[];
    aclType?:
      | "ControlPlaneTrafficPolicy"
      | "Tenant"
      | "Management"
      | "ControlPlaneAcl";
    deviceRole?: "CE" | "ToR" | "NPB" | "ManagementSwitch";
    globalAccessControlListActions?: { enableCount?: "True" | "False" };
    annotation?: string;
  };
  tags?: Record<string, string>;
}
export const AccessControlListsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configurationType: Schema.optional(Schema.Literals(["File", "Inline"])),
        aclsUrl: Schema.optional(Schema.String),
        defaultAction: Schema.optional(Schema.Literals(["Permit", "Deny"])),
        matchConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              matchConfigurationName: Schema.optional(Schema.String),
              sequenceNumber: Schema.optional(Schema.Number),
              ipAddressType: Schema.optional(Schema.Literals(["IPv4", "IPv6"])),
              matchConditions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    protocolTypes: Schema.optional(Schema.Array(Schema.String)),
                    vlanMatchCondition: Schema.optional(
                      Schema.Struct({
                        vlans: Schema.optional(Schema.Array(Schema.String)),
                        innerVlans: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        vlanGroupNames: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                      }),
                    ),
                    ipCondition: Schema.optional(
                      Schema.Struct({
                        type: Schema.optional(
                          Schema.Literals([
                            "SourceIP",
                            "DestinationIP",
                            "Bidirectional",
                          ]),
                        ),
                        prefixType: Schema.optional(
                          Schema.Literals(["Prefix", "LongestPrefix"]),
                        ),
                        ipPrefixValues: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        ipGroupNames: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                      }),
                    ),
                  }),
                ),
              ),
              actions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(
                      Schema.Literals([
                        "Drop",
                        "Count",
                        "Log",
                        "Remark",
                        "PoliceRate",
                      ]),
                    ),
                    counterName: Schema.optional(Schema.String),
                    remarkComment: Schema.optional(Schema.String),
                    policeRateConfiguration: Schema.optional(
                      Schema.Struct({
                        bitRate: Schema.optional(
                          Schema.Struct({
                            rate: Schema.optional(Schema.Number),
                            unit: Schema.optional(
                              Schema.Literals([
                                "bps",
                                "Kbps",
                                "Mbps",
                                "Gbps",
                                "Pps",
                              ]),
                            ),
                          }),
                        ),
                        burstSize: Schema.optional(
                          Schema.Struct({
                            size: Schema.optional(Schema.Number),
                            unit: Schema.optional(
                              Schema.Literals([
                                "Bytes",
                                "KBytes",
                                "MBytes",
                                "GBytes",
                                "Packets",
                              ]),
                            ),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
              ),
            }),
          ),
        ),
        dynamicMatchConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipGroups: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    ipAddressType: Schema.optional(
                      Schema.Literals(["IPv4", "IPv6"]),
                    ),
                    ipPrefixes: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              ),
              vlanGroups: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    vlans: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              ),
              portGroups: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    ports: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              ),
            }),
          ),
        ),
        controlPlaneAclConfiguration: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipAddressType: Schema.optional(Schema.Literals(["IPv4", "IPv6"])),
              matchConfigurations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    matchConfigurationName: Schema.optional(Schema.String),
                    sequenceNumber: Schema.optional(Schema.Number),
                    matchCondition: Schema.optional(
                      Schema.Struct({
                        protocolTypes: Schema.optional(Schema.String),
                        ipCondition: Schema.optional(
                          Schema.Struct({
                            sourceIpPrefix: Schema.optional(Schema.String),
                            destinationIpPrefix: Schema.optional(Schema.String),
                          }),
                        ),
                        ttlMatchCondition: Schema.optional(
                          Schema.Struct({
                            ttlValue: Schema.optional(Schema.String),
                            ttlMatchType: Schema.optional(
                              Schema.Literals(["eq", "neq", "gt", "lt"]),
                            ),
                          }),
                        ),
                        portCondition: Schema.optional(
                          Schema.Struct({
                            sourcePorts: Schema.optional(
                              Schema.Struct({
                                ports: Schema.optional(
                                  Schema.Array(Schema.String),
                                ),
                                portMatchType: Schema.optional(
                                  Schema.Literals([
                                    "eq",
                                    "neq",
                                    "gt",
                                    "lt",
                                    "range",
                                  ]),
                                ),
                              }),
                            ),
                            destinationPorts: Schema.optional(
                              Schema.Struct({
                                ports: Schema.optional(
                                  Schema.Array(Schema.String),
                                ),
                                portMatchType: Schema.optional(
                                  Schema.Literals([
                                    "eq",
                                    "neq",
                                    "gt",
                                    "lt",
                                    "range",
                                  ]),
                                ),
                              }),
                            ),
                          }),
                        ),
                        flags: Schema.optional(Schema.Array(Schema.String)),
                        icmpConfiguration: Schema.optional(
                          Schema.Struct({
                            icmpTypes: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                      }),
                    ),
                    action: Schema.optional(
                      Schema.Struct({
                        type: Schema.optional(
                          Schema.Literals(["Permit", "Deny", "Remark"]),
                        ),
                        remarkComment: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                ),
              ),
            }),
          ),
        ),
        aclType: Schema.optional(
          Schema.Literals([
            "ControlPlaneTrafficPolicy",
            "Tenant",
            "Management",
            "ControlPlaneAcl",
          ]),
        ),
        deviceRole: Schema.optional(
          Schema.Literals(["CE", "ToR", "NPB", "ManagementSwitch"]),
        ),
        globalAccessControlListActions: Schema.optional(
          Schema.Struct({
            enableCount: Schema.optional(Schema.Literals(["True", "False"])),
          }),
        ),
        annotation: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<AccessControlListsUpdateInput>;

// Output Schema
export interface AccessControlListsUpdateOutput {
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
export const AccessControlListsUpdateOutput =
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
  }) as unknown as Schema.Codec<AccessControlListsUpdateOutput>;

// The operation
/**
 * API to update certain properties of the Access Control List resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessControlListsUpdateInput,
  outputSchema: AccessControlListsUpdateOutput,
}));
// Input Schema
export interface AccessControlListsUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accessControlListName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const AccessControlListsUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<AccessControlListsUpdateAdministrativeStateInput>;

// Output Schema
export interface AccessControlListsUpdateAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const AccessControlListsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<AccessControlListsUpdateAdministrativeStateOutput>;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccessControlListsUpdateAdministrativeStateInput,
    outputSchema: AccessControlListsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface AccessControlListsValidateConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accessControlListName: string;
}
export const AccessControlListsValidateConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}/validateConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<AccessControlListsValidateConfigurationInput>;

// Output Schema
export interface AccessControlListsValidateConfigurationOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const AccessControlListsValidateConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AccessControlListsValidateConfigurationOutput>;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsValidateConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccessControlListsValidateConfigurationInput,
    outputSchema: AccessControlListsValidateConfigurationOutput,
  }));
// Input Schema
export interface ExternalNetworksCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  externalNetworkName: string;
  properties: {
    annotation?: string;
    networkToNetworkInterconnectId?: string;
    importRoutePolicy?: {
      importIpv4RoutePolicyId?: string;
      importIpv6RoutePolicyId?: string;
    };
    exportRoutePolicy?: {
      exportIpv4RoutePolicyId?: string;
      exportIpv6RoutePolicyId?: string;
    };
    peeringOption: "OptionA" | "OptionB";
    optionBProperties?: {
      importRouteTargets?: string[];
      exportRouteTargets?: string[];
      routeTargets?: {
        importIpv4RouteTargets?: string[];
        importIpv6RouteTargets?: string[];
        exportIpv4RouteTargets?: string[];
        exportIpv6RouteTargets?: string[];
      };
    };
    optionAProperties?: {
      primaryIpv4Prefix?: string;
      primaryIpv6Prefix?: string;
      secondaryIpv4Prefix?: string;
      secondaryIpv6Prefix?: string;
      mtu?: number;
      vlanId: number;
      fabricASN?: number;
      peerASN: number;
      bfdConfiguration?: {
        administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
        intervalInMilliSeconds?: number;
        multiplier?: number;
      };
      ingressAclId?: string;
      bmpConfiguration?: { configurationState?: "Enabled" | "Disabled" };
      egressAclId?: string;
      v4OverV6BgpSession?: "Enabled" | "Disabled";
      v6OverV4BgpSession?: "Enabled" | "Disabled";
      nativeIpv4PrefixLimit?: {
        prefixLimits?: {
          maximumRoutes?: number;
          threshold?: number;
          idleTimeExpiry?: number;
        }[];
      };
      nativeIpv6PrefixLimit?: {
        prefixLimits?: {
          maximumRoutes?: number;
          threshold?: number;
          idleTimeExpiry?: number;
        }[];
      };
    };
    staticRouteConfiguration?: {
      bfdConfiguration?: {
        administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
        intervalInMilliSeconds?: number;
        multiplier?: number;
      };
      ipv4Routes?: { prefix: string; nextHop: string[] }[];
      ipv6Routes?: { prefix: string; nextHop: string[] }[];
    };
    lastOperation?: { details?: string };
    networkFabricId?: string;
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
  };
}
export const ExternalNetworksCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      networkToNetworkInterconnectId: Schema.optional(Schema.String),
      importRoutePolicy: Schema.optional(
        Schema.Struct({
          importIpv4RoutePolicyId: Schema.optional(Schema.String),
          importIpv6RoutePolicyId: Schema.optional(Schema.String),
        }),
      ),
      exportRoutePolicy: Schema.optional(
        Schema.Struct({
          exportIpv4RoutePolicyId: Schema.optional(Schema.String),
          exportIpv6RoutePolicyId: Schema.optional(Schema.String),
        }),
      ),
      peeringOption: Schema.Literals(["OptionA", "OptionB"]),
      optionBProperties: Schema.optional(
        Schema.Struct({
          importRouteTargets: Schema.optional(Schema.Array(Schema.String)),
          exportRouteTargets: Schema.optional(Schema.Array(Schema.String)),
          routeTargets: Schema.optional(
            Schema.Struct({
              importIpv4RouteTargets: Schema.optional(
                Schema.Array(Schema.String),
              ),
              importIpv6RouteTargets: Schema.optional(
                Schema.Array(Schema.String),
              ),
              exportIpv4RouteTargets: Schema.optional(
                Schema.Array(Schema.String),
              ),
              exportIpv6RouteTargets: Schema.optional(
                Schema.Array(Schema.String),
              ),
            }),
          ),
        }),
      ),
      optionAProperties: Schema.optional(
        Schema.Struct({
          primaryIpv4Prefix: Schema.optional(Schema.String),
          primaryIpv6Prefix: Schema.optional(Schema.String),
          secondaryIpv4Prefix: Schema.optional(Schema.String),
          secondaryIpv6Prefix: Schema.optional(Schema.String),
          mtu: Schema.optional(Schema.Number),
          vlanId: Schema.Number,
          fabricASN: Schema.optional(Schema.Number),
          peerASN: Schema.Number,
          bfdConfiguration: Schema.optional(
            Schema.Struct({
              administrativeState: Schema.optional(
                Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
              ),
              intervalInMilliSeconds: Schema.optional(Schema.Number),
              multiplier: Schema.optional(Schema.Number),
            }),
          ),
          ingressAclId: Schema.optional(Schema.String),
          bmpConfiguration: Schema.optional(
            Schema.Struct({
              configurationState: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
            }),
          ),
          egressAclId: Schema.optional(Schema.String),
          v4OverV6BgpSession: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          v6OverV4BgpSession: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          nativeIpv4PrefixLimit: Schema.optional(
            Schema.Struct({
              prefixLimits: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    maximumRoutes: Schema.optional(Schema.Number),
                    threshold: Schema.optional(Schema.Number),
                    idleTimeExpiry: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
          nativeIpv6PrefixLimit: Schema.optional(
            Schema.Struct({
              prefixLimits: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    maximumRoutes: Schema.optional(Schema.Number),
                    threshold: Schema.optional(Schema.Number),
                    idleTimeExpiry: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
      staticRouteConfiguration: Schema.optional(
        Schema.Struct({
          bfdConfiguration: Schema.optional(
            Schema.Struct({
              administrativeState: Schema.optional(
                Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
              ),
              intervalInMilliSeconds: Schema.optional(Schema.Number),
              multiplier: Schema.optional(Schema.Number),
            }),
          ),
          ipv4Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
                nextHop: Schema.Array(Schema.String),
              }),
            ),
          ),
          ipv6Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
                nextHop: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      networkFabricId: Schema.optional(Schema.String),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      administrativeState: Schema.optional(
        Schema.Literals([
          "Enabled",
          "Disabled",
          "MAT",
          "RMA",
          "UnderMaintenance",
          "EnabledDegraded",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<ExternalNetworksCreateInput>;

// Output Schema
export interface ExternalNetworksCreateOutput {
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
export const ExternalNetworksCreateOutput =
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
  }) as unknown as Schema.Codec<ExternalNetworksCreateOutput>;

// The operation
/**
 * Creates ExternalNetwork PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExternalNetworksCreateInput,
  outputSchema: ExternalNetworksCreateOutput,
}));
// Input Schema
export interface ExternalNetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  externalNetworkName: string;
}
export const ExternalNetworksDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<ExternalNetworksDeleteInput>;

// Output Schema
export type ExternalNetworksDeleteOutput = void;
export const ExternalNetworksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExternalNetworksDeleteOutput>;

// The operation
/**
 * Implements ExternalNetworks DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExternalNetworksDeleteInput,
  outputSchema: ExternalNetworksDeleteOutput,
}));
// Input Schema
export interface ExternalNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  externalNetworkName: string;
}
export const ExternalNetworksGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<ExternalNetworksGetInput>;

// Output Schema
export interface ExternalNetworksGetOutput {
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
export const ExternalNetworksGetOutput =
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
  }) as unknown as Schema.Codec<ExternalNetworksGetOutput>;

// The operation
/**
 * Implements ExternalNetworks GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExternalNetworksGetInput,
  outputSchema: ExternalNetworksGetOutput,
}));
// Input Schema
export interface ExternalNetworksListByL3IsolationDomainInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
}
export const ExternalNetworksListByL3IsolationDomainInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<ExternalNetworksListByL3IsolationDomainInput>;

// Output Schema
export interface ExternalNetworksListByL3IsolationDomainOutput {
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
export const ExternalNetworksListByL3IsolationDomainOutput =
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
  }) as unknown as Schema.Codec<ExternalNetworksListByL3IsolationDomainOutput>;

// The operation
/**
 * Implements External Networks list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const ExternalNetworksListByL3IsolationDomain =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExternalNetworksListByL3IsolationDomainInput,
    outputSchema: ExternalNetworksListByL3IsolationDomainOutput,
  }));
// Input Schema
export interface ExternalNetworksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  externalNetworkName: string;
  properties?: {
    annotation?: string;
    networkToNetworkInterconnectId?: string;
    importRoutePolicy?: {
      importIpv4RoutePolicyId?: string;
      importIpv6RoutePolicyId?: string;
    };
    exportRoutePolicy?: {
      exportIpv4RoutePolicyId?: string;
      exportIpv6RoutePolicyId?: string;
    };
    peeringOption?: "OptionA" | "OptionB";
    optionBProperties?: {
      importRouteTargets?: string[];
      exportRouteTargets?: string[];
      routeTargets?: {
        importIpv4RouteTargets?: string[];
        importIpv6RouteTargets?: string[];
        exportIpv4RouteTargets?: string[];
        exportIpv6RouteTargets?: string[];
      };
    };
    optionAProperties?: {
      primaryIpv4Prefix?: string;
      primaryIpv6Prefix?: string;
      secondaryIpv4Prefix?: string;
      secondaryIpv6Prefix?: string;
      mtu?: number;
      vlanId?: number;
      fabricASN?: number;
      peerASN?: number;
      bfdConfiguration?: {
        administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
        intervalInMilliSeconds?: number;
        multiplier?: number;
      };
      ingressAclId?: string;
      egressAclId?: string;
      bmpConfiguration?: { configurationState?: "Enabled" | "Disabled" };
      v4OverV6BgpSession?: "Enabled" | "Disabled";
      v6OverV4BgpSession?: "Enabled" | "Disabled";
      nativeIpv4PrefixLimit?: {
        prefixLimits?: {
          maximumRoutes?: number;
          threshold?: number;
          idleTimeExpiry?: number;
        }[];
      };
      nativeIpv6PrefixLimit?: {
        prefixLimits?: {
          maximumRoutes?: number;
          threshold?: number;
          idleTimeExpiry?: number;
        }[];
      };
    };
    staticRouteConfiguration?: {
      bfdConfiguration?: {
        administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
        intervalInMilliSeconds?: number;
        multiplier?: number;
      };
      ipv4Routes?: { prefix: string; nextHop: string[] }[];
      ipv6Routes?: { prefix: string; nextHop: string[] }[];
    };
  };
}
export const ExternalNetworksUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
        networkToNetworkInterconnectId: Schema.optional(Schema.String),
        importRoutePolicy: Schema.optional(
          Schema.Struct({
            importIpv4RoutePolicyId: Schema.optional(Schema.String),
            importIpv6RoutePolicyId: Schema.optional(Schema.String),
          }),
        ),
        exportRoutePolicy: Schema.optional(
          Schema.Struct({
            exportIpv4RoutePolicyId: Schema.optional(Schema.String),
            exportIpv6RoutePolicyId: Schema.optional(Schema.String),
          }),
        ),
        peeringOption: Schema.optional(Schema.Literals(["OptionA", "OptionB"])),
        optionBProperties: Schema.optional(
          Schema.Struct({
            importRouteTargets: Schema.optional(Schema.Array(Schema.String)),
            exportRouteTargets: Schema.optional(Schema.Array(Schema.String)),
            routeTargets: Schema.optional(
              Schema.Struct({
                importIpv4RouteTargets: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                importIpv6RouteTargets: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                exportIpv4RouteTargets: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                exportIpv6RouteTargets: Schema.optional(
                  Schema.Array(Schema.String),
                ),
              }),
            ),
          }),
        ),
        optionAProperties: Schema.optional(
          Schema.Struct({
            primaryIpv4Prefix: Schema.optional(Schema.String),
            primaryIpv6Prefix: Schema.optional(Schema.String),
            secondaryIpv4Prefix: Schema.optional(Schema.String),
            secondaryIpv6Prefix: Schema.optional(Schema.String),
            mtu: Schema.optional(Schema.Number),
            vlanId: Schema.optional(Schema.Number),
            fabricASN: Schema.optional(Schema.Number),
            peerASN: Schema.optional(Schema.Number),
            bfdConfiguration: Schema.optional(
              Schema.Struct({
                administrativeState: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
                ),
                intervalInMilliSeconds: Schema.optional(Schema.Number),
                multiplier: Schema.optional(Schema.Number),
              }),
            ),
            ingressAclId: Schema.optional(Schema.String),
            egressAclId: Schema.optional(Schema.String),
            bmpConfiguration: Schema.optional(
              Schema.Struct({
                configurationState: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
              }),
            ),
            v4OverV6BgpSession: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            v6OverV4BgpSession: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            nativeIpv4PrefixLimit: Schema.optional(
              Schema.Struct({
                prefixLimits: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      maximumRoutes: Schema.optional(Schema.Number),
                      threshold: Schema.optional(Schema.Number),
                      idleTimeExpiry: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
            nativeIpv6PrefixLimit: Schema.optional(
              Schema.Struct({
                prefixLimits: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      maximumRoutes: Schema.optional(Schema.Number),
                      threshold: Schema.optional(Schema.Number),
                      idleTimeExpiry: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        staticRouteConfiguration: Schema.optional(
          Schema.Struct({
            bfdConfiguration: Schema.optional(
              Schema.Struct({
                administrativeState: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
                ),
                intervalInMilliSeconds: Schema.optional(Schema.Number),
                multiplier: Schema.optional(Schema.Number),
              }),
            ),
            ipv4Routes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  prefix: Schema.String,
                  nextHop: Schema.Array(Schema.String),
                }),
              ),
            ),
            ipv6Routes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  prefix: Schema.String,
                  nextHop: Schema.Array(Schema.String),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<ExternalNetworksUpdateInput>;

// Output Schema
export interface ExternalNetworksUpdateOutput {
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
export const ExternalNetworksUpdateOutput =
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
  }) as unknown as Schema.Codec<ExternalNetworksUpdateOutput>;

// The operation
/**
 * API to update certain properties of the ExternalNetworks resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExternalNetworksUpdateInput,
  outputSchema: ExternalNetworksUpdateOutput,
}));
// Input Schema
export interface ExternalNetworksUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  externalNetworkName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const ExternalNetworksUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<ExternalNetworksUpdateAdministrativeStateInput>;

// Output Schema
export interface ExternalNetworksUpdateAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const ExternalNetworksUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<ExternalNetworksUpdateAdministrativeStateOutput>;

// The operation
/**
 * Executes update operation to enable or disable administrative State for externalNetwork.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExternalNetworksUpdateAdministrativeStateInput,
    outputSchema: ExternalNetworksUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface ExternalNetworksUpdateBfdAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  externalNetworkName: string;
  routeType?: "Static" | "OptionA";
  administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
}
export const ExternalNetworksUpdateBfdAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    routeType: Schema.optional(Schema.Literals(["Static", "OptionA"])),
    administrativeState: Schema.optional(
      Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}/updateBfdAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<ExternalNetworksUpdateBfdAdministrativeStateInput>;

// Output Schema
export interface ExternalNetworksUpdateBfdAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: {
    routeType?: "Static" | "OptionA";
    administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
  };
}
export const ExternalNetworksUpdateBfdAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        routeType: Schema.optional(Schema.Literals(["Static", "OptionA"])),
        administrativeState: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ExternalNetworksUpdateBfdAdministrativeStateOutput>;

// The operation
/**
 * BFD administrative state for either static or bgp for internalNetwork.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksUpdateBfdAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExternalNetworksUpdateBfdAdministrativeStateInput,
    outputSchema: ExternalNetworksUpdateBfdAdministrativeStateOutput,
  }));
// Input Schema
export interface ExternalNetworksUpdateStaticRouteBfdAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  externalNetworkName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const ExternalNetworksUpdateStaticRouteBfdAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}/updateStaticRouteBfdAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<ExternalNetworksUpdateStaticRouteBfdAdministrativeStateInput>;

// Output Schema
export interface ExternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const ExternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<ExternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput>;

// The operation
/**
 * Update Static Route BFD for external Network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksUpdateStaticRouteBfdAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExternalNetworksUpdateStaticRouteBfdAdministrativeStateInput,
    outputSchema: ExternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput,
  }));
// Input Schema
export interface InternalNetworksCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  internalNetworkName: string;
  properties: {
    annotation?: string;
    extension?: "NoExtension" | "NPB";
    mtu?: number;
    connectedIPv4Subnets?: { annotation?: string }[];
    connectedIPv6Subnets?: { annotation?: string }[];
    importRoutePolicy?: {
      importIpv4RoutePolicyId?: string;
      importIpv6RoutePolicyId?: string;
    };
    exportRoutePolicy?: {
      exportIpv4RoutePolicyId?: string;
      exportIpv6RoutePolicyId?: string;
    };
    ingressAclId?: string;
    egressAclId?: string;
    isMonitoringEnabled?: "True" | "False";
    vlanId: number;
    bgpConfiguration?: { annotation?: string };
    staticRouteConfiguration?: {
      bfdConfiguration?: {
        administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
        intervalInMilliSeconds?: number;
        multiplier?: number;
      };
      ipv4Routes?: { prefix: string; nextHop: string[] }[];
      ipv6Routes?: { prefix: string; nextHop: string[] }[];
      extension?: "NoExtension" | "NPB";
    };
    nativeIpv4PrefixLimit?: {
      prefixLimits?: {
        maximumRoutes?: number;
        threshold?: number;
        idleTimeExpiry?: number;
      }[];
    };
    nativeIpv6PrefixLimit?: {
      prefixLimits?: {
        maximumRoutes?: number;
        threshold?: number;
        idleTimeExpiry?: number;
      }[];
    };
    lastOperation?: { details?: string };
    networkFabricId?: string;
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
  };
}
export const InternalNetworksCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      extension: Schema.optional(Schema.Literals(["NoExtension", "NPB"])),
      mtu: Schema.optional(Schema.Number),
      connectedIPv4Subnets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            annotation: Schema.optional(Schema.String),
          }),
        ),
      ),
      connectedIPv6Subnets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            annotation: Schema.optional(Schema.String),
          }),
        ),
      ),
      importRoutePolicy: Schema.optional(
        Schema.Struct({
          importIpv4RoutePolicyId: Schema.optional(Schema.String),
          importIpv6RoutePolicyId: Schema.optional(Schema.String),
        }),
      ),
      exportRoutePolicy: Schema.optional(
        Schema.Struct({
          exportIpv4RoutePolicyId: Schema.optional(Schema.String),
          exportIpv6RoutePolicyId: Schema.optional(Schema.String),
        }),
      ),
      ingressAclId: Schema.optional(Schema.String),
      egressAclId: Schema.optional(Schema.String),
      isMonitoringEnabled: Schema.optional(Schema.Literals(["True", "False"])),
      vlanId: Schema.Number,
      bgpConfiguration: Schema.optional(
        Schema.Struct({
          annotation: Schema.optional(Schema.String),
        }),
      ),
      staticRouteConfiguration: Schema.optional(
        Schema.Struct({
          bfdConfiguration: Schema.optional(
            Schema.Struct({
              administrativeState: Schema.optional(
                Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
              ),
              intervalInMilliSeconds: Schema.optional(Schema.Number),
              multiplier: Schema.optional(Schema.Number),
            }),
          ),
          ipv4Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
                nextHop: Schema.Array(Schema.String),
              }),
            ),
          ),
          ipv6Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
                nextHop: Schema.Array(Schema.String),
              }),
            ),
          ),
          extension: Schema.optional(Schema.Literals(["NoExtension", "NPB"])),
        }),
      ),
      nativeIpv4PrefixLimit: Schema.optional(
        Schema.Struct({
          prefixLimits: Schema.optional(
            Schema.Array(
              Schema.Struct({
                maximumRoutes: Schema.optional(Schema.Number),
                threshold: Schema.optional(Schema.Number),
                idleTimeExpiry: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
      nativeIpv6PrefixLimit: Schema.optional(
        Schema.Struct({
          prefixLimits: Schema.optional(
            Schema.Array(
              Schema.Struct({
                maximumRoutes: Schema.optional(Schema.Number),
                threshold: Schema.optional(Schema.Number),
                idleTimeExpiry: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      networkFabricId: Schema.optional(Schema.String),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      administrativeState: Schema.optional(
        Schema.Literals([
          "Enabled",
          "Disabled",
          "MAT",
          "RMA",
          "UnderMaintenance",
          "EnabledDegraded",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternalNetworksCreateInput>;

// Output Schema
export interface InternalNetworksCreateOutput {
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
export const InternalNetworksCreateOutput =
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
  }) as unknown as Schema.Codec<InternalNetworksCreateOutput>;

// The operation
/**
 * Creates InternalNetwork PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternalNetworksCreateInput,
  outputSchema: InternalNetworksCreateOutput,
}));
// Input Schema
export interface InternalNetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  internalNetworkName: string;
}
export const InternalNetworksDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternalNetworksDeleteInput>;

// Output Schema
export type InternalNetworksDeleteOutput = void;
export const InternalNetworksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InternalNetworksDeleteOutput>;

// The operation
/**
 * Implements InternalNetworks DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternalNetworksDeleteInput,
  outputSchema: InternalNetworksDeleteOutput,
}));
// Input Schema
export interface InternalNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  internalNetworkName: string;
}
export const InternalNetworksGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternalNetworksGetInput>;

// Output Schema
export interface InternalNetworksGetOutput {
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
export const InternalNetworksGetOutput =
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
  }) as unknown as Schema.Codec<InternalNetworksGetOutput>;

// The operation
/**
 * Gets a InternalNetworks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternalNetworksGetInput,
  outputSchema: InternalNetworksGetOutput,
}));
// Input Schema
export interface InternalNetworksListByL3IsolationDomainInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
}
export const InternalNetworksListByL3IsolationDomainInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternalNetworksListByL3IsolationDomainInput>;

// Output Schema
export interface InternalNetworksListByL3IsolationDomainOutput {
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
export const InternalNetworksListByL3IsolationDomainOutput =
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
  }) as unknown as Schema.Codec<InternalNetworksListByL3IsolationDomainOutput>;

// The operation
/**
 * Displays InternalNetworks list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const InternalNetworksListByL3IsolationDomain =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InternalNetworksListByL3IsolationDomainInput,
    outputSchema: InternalNetworksListByL3IsolationDomainOutput,
  }));
// Input Schema
export interface InternalNetworksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  internalNetworkName: string;
  properties?: {
    annotation?: string;
    mtu?: number;
    connectedIPv4Subnets?: { annotation?: string }[];
    connectedIPv6Subnets?: { annotation?: string }[];
    importRoutePolicy?: {
      importIpv4RoutePolicyId?: string;
      importIpv6RoutePolicyId?: string;
    };
    exportRoutePolicy?: {
      exportIpv4RoutePolicyId?: string;
      exportIpv6RoutePolicyId?: string;
    };
    ingressAclId?: string;
    egressAclId?: string;
    isMonitoringEnabled?: "True" | "False";
    bgpConfiguration?: { annotation?: string };
    staticRouteConfiguration?: {
      bfdConfiguration?: {
        administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
        intervalInMilliSeconds?: number;
        multiplier?: number;
      };
      ipv4Routes?: { prefix: string; nextHop: string[] }[];
      ipv6Routes?: { prefix: string; nextHop: string[] }[];
    };
    nativeIpv4PrefixLimit?: {
      prefixLimits?: {
        maximumRoutes?: number;
        threshold?: number;
        idleTimeExpiry?: number;
      }[];
    };
    nativeIpv6PrefixLimit?: {
      prefixLimits?: {
        maximumRoutes?: number;
        threshold?: number;
        idleTimeExpiry?: number;
      }[];
    };
  };
}
export const InternalNetworksUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
        mtu: Schema.optional(Schema.Number),
        connectedIPv4Subnets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              annotation: Schema.optional(Schema.String),
            }),
          ),
        ),
        connectedIPv6Subnets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              annotation: Schema.optional(Schema.String),
            }),
          ),
        ),
        importRoutePolicy: Schema.optional(
          Schema.Struct({
            importIpv4RoutePolicyId: Schema.optional(Schema.String),
            importIpv6RoutePolicyId: Schema.optional(Schema.String),
          }),
        ),
        exportRoutePolicy: Schema.optional(
          Schema.Struct({
            exportIpv4RoutePolicyId: Schema.optional(Schema.String),
            exportIpv6RoutePolicyId: Schema.optional(Schema.String),
          }),
        ),
        ingressAclId: Schema.optional(Schema.String),
        egressAclId: Schema.optional(Schema.String),
        isMonitoringEnabled: Schema.optional(
          Schema.Literals(["True", "False"]),
        ),
        bgpConfiguration: Schema.optional(
          Schema.Struct({
            annotation: Schema.optional(Schema.String),
          }),
        ),
        staticRouteConfiguration: Schema.optional(
          Schema.Struct({
            bfdConfiguration: Schema.optional(
              Schema.Struct({
                administrativeState: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
                ),
                intervalInMilliSeconds: Schema.optional(Schema.Number),
                multiplier: Schema.optional(Schema.Number),
              }),
            ),
            ipv4Routes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  prefix: Schema.String,
                  nextHop: Schema.Array(Schema.String),
                }),
              ),
            ),
            ipv6Routes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  prefix: Schema.String,
                  nextHop: Schema.Array(Schema.String),
                }),
              ),
            ),
          }),
        ),
        nativeIpv4PrefixLimit: Schema.optional(
          Schema.Struct({
            prefixLimits: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  maximumRoutes: Schema.optional(Schema.Number),
                  threshold: Schema.optional(Schema.Number),
                  idleTimeExpiry: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
        nativeIpv6PrefixLimit: Schema.optional(
          Schema.Struct({
            prefixLimits: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  maximumRoutes: Schema.optional(Schema.Number),
                  threshold: Schema.optional(Schema.Number),
                  idleTimeExpiry: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternalNetworksUpdateInput>;

// Output Schema
export interface InternalNetworksUpdateOutput {
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
export const InternalNetworksUpdateOutput =
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
  }) as unknown as Schema.Codec<InternalNetworksUpdateOutput>;

// The operation
/**
 * Updates a InternalNetworks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternalNetworksUpdateInput,
  outputSchema: InternalNetworksUpdateOutput,
}));
// Input Schema
export interface InternalNetworksUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  internalNetworkName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const InternalNetworksUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternalNetworksUpdateAdministrativeStateInput>;

// Output Schema
export interface InternalNetworksUpdateAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const InternalNetworksUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<InternalNetworksUpdateAdministrativeStateOutput>;

// The operation
/**
 * Executes update operation to enable or disable administrative State for InternalNetwork.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InternalNetworksUpdateAdministrativeStateInput,
    outputSchema: InternalNetworksUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface InternalNetworksUpdateBfdAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  internalNetworkName: string;
  routeType?: "Static" | "Bgp";
  neighborAddress?: string;
  administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
}
export const InternalNetworksUpdateBfdAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    routeType: Schema.optional(Schema.Literals(["Static", "Bgp"])),
    neighborAddress: Schema.optional(Schema.String),
    administrativeState: Schema.optional(
      Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}/updateBfdAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternalNetworksUpdateBfdAdministrativeStateInput>;

// Output Schema
export interface InternalNetworksUpdateBfdAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: {
    neighborAddressAdministrativeStatus?: {
      neighborAddress?: string;
      administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
      error?: string;
    }[];
  };
}
export const InternalNetworksUpdateBfdAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        neighborAddressAdministrativeStatus: Schema.optional(
          Schema.Array(
            Schema.Struct({
              neighborAddress: Schema.optional(Schema.String),
              administrativeState: Schema.optional(
                Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
              ),
              error: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<InternalNetworksUpdateBfdAdministrativeStateOutput>;

// The operation
/**
 * BFD administrative state for either static or bgp for internalNetwork.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksUpdateBfdAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InternalNetworksUpdateBfdAdministrativeStateInput,
    outputSchema: InternalNetworksUpdateBfdAdministrativeStateOutput,
  }));
// Input Schema
export interface InternalNetworksUpdateBgpAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  internalNetworkName: string;
  neighborAddress?: string;
  administrativeState?: "Enabled" | "Disabled";
}
export const InternalNetworksUpdateBgpAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    neighborAddress: Schema.optional(Schema.String),
    administrativeState: Schema.optional(
      Schema.Literals(["Enabled", "Disabled"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}/updateBgpAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternalNetworksUpdateBgpAdministrativeStateInput>;

// Output Schema
export interface InternalNetworksUpdateBgpAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: {
    neighborAddressAdministrativeStatus?: {
      neighborAddress?: string;
      administrativeState?: "Enabled" | "Disabled";
      error?: string;
    }[];
  };
}
export const InternalNetworksUpdateBgpAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        neighborAddressAdministrativeStatus: Schema.optional(
          Schema.Array(
            Schema.Struct({
              neighborAddress: Schema.optional(Schema.String),
              administrativeState: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
              error: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<InternalNetworksUpdateBgpAdministrativeStateOutput>;

// The operation
/**
 * Update BGP state for internalNetwork. Allowed only on edge devices.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksUpdateBgpAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InternalNetworksUpdateBgpAdministrativeStateInput,
    outputSchema: InternalNetworksUpdateBgpAdministrativeStateOutput,
  }));
// Input Schema
export interface InternalNetworksUpdateStaticRouteBfdAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  internalNetworkName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const InternalNetworksUpdateStaticRouteBfdAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}/updateStaticRouteBfdAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternalNetworksUpdateStaticRouteBfdAdministrativeStateInput>;

// Output Schema
export interface InternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const InternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<InternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput>;

// The operation
/**
 * Update Static Route BFD administrative state for internalNetwork.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksUpdateStaticRouteBfdAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InternalNetworksUpdateStaticRouteBfdAdministrativeStateInput,
    outputSchema: InternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput,
  }));
// Input Schema
export interface InternetGatewayRulesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  internetGatewayRuleName: string;
  properties: { annotation?: string };
  tags?: Record<string, string>;
  location: string;
}
export const InternetGatewayRulesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewayRulesCreateInput>;

// Output Schema
export interface InternetGatewayRulesCreateOutput {
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
export const InternetGatewayRulesCreateOutput =
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
  }) as unknown as Schema.Codec<InternetGatewayRulesCreateOutput>;

// The operation
/**
 * Creates an Internet Gateway rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayRuleName - Name of the Internet Gateway rule.
 */
export const InternetGatewayRulesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternetGatewayRulesCreateInput,
  outputSchema: InternetGatewayRulesCreateOutput,
}));
// Input Schema
export interface InternetGatewayRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  internetGatewayRuleName: string;
}
export const InternetGatewayRulesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewayRulesDeleteInput>;

// Output Schema
export type InternetGatewayRulesDeleteOutput = void;
export const InternetGatewayRulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InternetGatewayRulesDeleteOutput>;

// The operation
/**
 * Implements Internet Gateway Rules DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayRuleName - Name of the Internet Gateway rule.
 */
export const InternetGatewayRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternetGatewayRulesDeleteInput,
  outputSchema: InternetGatewayRulesDeleteOutput,
}));
// Input Schema
export interface InternetGatewayRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  internetGatewayRuleName: string;
}
export const InternetGatewayRulesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewayRulesGetInput>;

// Output Schema
export interface InternetGatewayRulesGetOutput {
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
export const InternetGatewayRulesGetOutput =
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
  }) as unknown as Schema.Codec<InternetGatewayRulesGetOutput>;

// The operation
/**
 * Gets an Internet Gateway Rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayRuleName - Name of the Internet Gateway rule.
 */
export const InternetGatewayRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternetGatewayRulesGetInput,
  outputSchema: InternetGatewayRulesGetOutput,
}));
// Input Schema
export interface InternetGatewayRulesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const InternetGatewayRulesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewayRulesListByResourceGroupInput>;

// Output Schema
export interface InternetGatewayRulesListByResourceGroupOutput {
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
export const InternetGatewayRulesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<InternetGatewayRulesListByResourceGroupOutput>;

// The operation
/**
 * Implements Internet Gateway Rules list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const InternetGatewayRulesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InternetGatewayRulesListByResourceGroupInput,
    outputSchema: InternetGatewayRulesListByResourceGroupOutput,
  }));
// Input Schema
export interface InternetGatewayRulesListBySubscriptionInput {
  subscriptionId: string;
}
export const InternetGatewayRulesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewayRulesListBySubscriptionInput>;

// Output Schema
export interface InternetGatewayRulesListBySubscriptionOutput {
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
export const InternetGatewayRulesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<InternetGatewayRulesListBySubscriptionOutput>;

// The operation
/**
 * List all Internet Gateway rules in the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const InternetGatewayRulesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InternetGatewayRulesListBySubscriptionInput,
    outputSchema: InternetGatewayRulesListBySubscriptionOutput,
  }));
// Input Schema
export interface InternetGatewayRulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  internetGatewayRuleName: string;
  tags?: Record<string, string>;
}
export const InternetGatewayRulesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayRuleName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewayRulesUpdateInput>;

// Output Schema
export interface InternetGatewayRulesUpdateOutput {
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
export const InternetGatewayRulesUpdateOutput =
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
  }) as unknown as Schema.Codec<InternetGatewayRulesUpdateOutput>;

// The operation
/**
 * API to update certain properties of the Internet Gateway Rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayRuleName - Name of the Internet Gateway rule.
 */
export const InternetGatewayRulesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternetGatewayRulesUpdateInput,
  outputSchema: InternetGatewayRulesUpdateOutput,
}));
// Input Schema
export interface InternetGatewaysCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  internetGatewayName: string;
  properties: {
    annotation?: string;
    internetGatewayRuleId?: string;
    ipv4Address?: string;
    port?: number;
    type?: "Infrastructure" | "Workload";
    internetGatewayType?: "Infrastructure" | "Workload";
    networkFabricControllerId: string;
    lastOperation?: { details?: string };
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const InternetGatewaysCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      internetGatewayRuleId: Schema.optional(Schema.String),
      ipv4Address: Schema.optional(Schema.String),
      port: Schema.optional(Schema.Number),
      type: Schema.optional(Schema.Literals(["Infrastructure", "Workload"])),
      internetGatewayType: Schema.optional(
        Schema.Literals(["Infrastructure", "Workload"]),
      ),
      networkFabricControllerId: Schema.String,
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGateways/{internetGatewayName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewaysCreateInput>;

// Output Schema
export interface InternetGatewaysCreateOutput {
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
export const InternetGatewaysCreateOutput =
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
  }) as unknown as Schema.Codec<InternetGatewaysCreateOutput>;

// The operation
/**
 * Creates a Network Fabric Service Internet Gateway resource instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayName - Name of the Internet Gateway.
 */
export const InternetGatewaysCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternetGatewaysCreateInput,
  outputSchema: InternetGatewaysCreateOutput,
}));
// Input Schema
export interface InternetGatewaysDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  internetGatewayName: string;
}
export const InternetGatewaysDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGateways/{internetGatewayName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewaysDeleteInput>;

// Output Schema
export type InternetGatewaysDeleteOutput = void;
export const InternetGatewaysDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InternetGatewaysDeleteOutput>;

// The operation
/**
 * Execute a delete on Network Fabric Service Internet Gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayName - Name of the Internet Gateway.
 */
export const InternetGatewaysDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternetGatewaysDeleteInput,
  outputSchema: InternetGatewaysDeleteOutput,
}));
// Input Schema
export interface InternetGatewaysGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  internetGatewayName: string;
}
export const InternetGatewaysGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGateways/{internetGatewayName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewaysGetInput>;

// Output Schema
export interface InternetGatewaysGetOutput {
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
export const InternetGatewaysGetOutput =
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
  }) as unknown as Schema.Codec<InternetGatewaysGetOutput>;

// The operation
/**
 * Implements Gateway GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayName - Name of the Internet Gateway.
 */
export const InternetGatewaysGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternetGatewaysGetInput,
  outputSchema: InternetGatewaysGetOutput,
}));
// Input Schema
export interface InternetGatewaysListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const InternetGatewaysListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGateways",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewaysListByResourceGroupInput>;

// Output Schema
export interface InternetGatewaysListByResourceGroupOutput {
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
export const InternetGatewaysListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<InternetGatewaysListByResourceGroupOutput>;

// The operation
/**
 * Displays Internet Gateways list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const InternetGatewaysListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InternetGatewaysListByResourceGroupInput,
    outputSchema: InternetGatewaysListByResourceGroupOutput,
  }));
// Input Schema
export interface InternetGatewaysListBySubscriptionInput {
  subscriptionId: string;
}
export const InternetGatewaysListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/internetGateways",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewaysListBySubscriptionInput>;

// Output Schema
export interface InternetGatewaysListBySubscriptionOutput {
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
export const InternetGatewaysListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<InternetGatewaysListBySubscriptionOutput>;

// The operation
/**
 * Displays Internet Gateways list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const InternetGatewaysListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InternetGatewaysListBySubscriptionInput,
    outputSchema: InternetGatewaysListBySubscriptionOutput,
  }));
// Input Schema
export interface InternetGatewaysUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  internetGatewayName: string;
  properties?: { internetGatewayRuleId?: string };
  tags?: Record<string, string>;
}
export const InternetGatewaysUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        internetGatewayRuleId: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGateways/{internetGatewayName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<InternetGatewaysUpdateInput>;

// Output Schema
export interface InternetGatewaysUpdateOutput {
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
export const InternetGatewaysUpdateOutput =
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
  }) as unknown as Schema.Codec<InternetGatewaysUpdateOutput>;

// The operation
/**
 * Execute patch on Network Fabric Service Internet Gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayName - Name of the Internet Gateway.
 */
export const InternetGatewaysUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InternetGatewaysUpdateInput,
  outputSchema: InternetGatewaysUpdateOutput,
}));
// Input Schema
export interface IpCommunitiesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipCommunityName: string;
  properties: {
    annotation?: string;
    networkFabricId?: string;
    ipCommunityRules: {
      action: "Permit" | "Deny";
      sequenceNumber: number;
      wellKnownCommunities?: (
        | "Internet"
        | "LocalAS"
        | "NoAdvertise"
        | "NoExport"
        | "GShut"
      )[];
      communityMembers: string[];
    }[];
    lastOperation?: { details?: string };
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
  };
  tags?: Record<string, string>;
  location: string;
}
export const IpCommunitiesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipCommunityName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      networkFabricId: Schema.optional(Schema.String),
      ipCommunityRules: Schema.Array(
        Schema.Struct({
          action: Schema.Literals(["Permit", "Deny"]),
          sequenceNumber: Schema.Number,
          wellKnownCommunities: Schema.optional(
            Schema.Array(
              Schema.Literals([
                "Internet",
                "LocalAS",
                "NoAdvertise",
                "NoExport",
                "GShut",
              ]),
            ),
          ),
          communityMembers: Schema.Array(Schema.String),
        }),
      ),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      administrativeState: Schema.optional(
        Schema.Literals([
          "Enabled",
          "Disabled",
          "MAT",
          "RMA",
          "UnderMaintenance",
          "EnabledDegraded",
        ]),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpCommunitiesCreateInput>;

// Output Schema
export interface IpCommunitiesCreateOutput {
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
export const IpCommunitiesCreateOutput =
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
  }) as unknown as Schema.Codec<IpCommunitiesCreateOutput>;

// The operation
/**
 * Implements an IP Community PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipCommunityName - Name of the IP Community.
 */
export const IpCommunitiesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpCommunitiesCreateInput,
  outputSchema: IpCommunitiesCreateOutput,
}));
// Input Schema
export interface IpCommunitiesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipCommunityName: string;
}
export const IpCommunitiesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipCommunityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpCommunitiesDeleteInput>;

// Output Schema
export type IpCommunitiesDeleteOutput = void;
export const IpCommunitiesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IpCommunitiesDeleteOutput>;

// The operation
/**
 * Implements IP Community DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipCommunityName - Name of the IP Community.
 */
export const IpCommunitiesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpCommunitiesDeleteInput,
  outputSchema: IpCommunitiesDeleteOutput,
}));
// Input Schema
export interface IpCommunitiesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipCommunityName: string;
}
export const IpCommunitiesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ipCommunityName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<IpCommunitiesGetInput>;

// Output Schema
export interface IpCommunitiesGetOutput {
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
export const IpCommunitiesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<IpCommunitiesGetOutput>;

// The operation
/**
 * Implements an IP Community GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipCommunityName - Name of the IP Community.
 */
export const IpCommunitiesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpCommunitiesGetInput,
  outputSchema: IpCommunitiesGetOutput,
}));
// Input Schema
export interface IpCommunitiesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const IpCommunitiesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpCommunitiesListByResourceGroupInput>;

// Output Schema
export interface IpCommunitiesListByResourceGroupOutput {
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
export const IpCommunitiesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<IpCommunitiesListByResourceGroupOutput>;

// The operation
/**
 * Implements IP Communities list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const IpCommunitiesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IpCommunitiesListByResourceGroupInput,
    outputSchema: IpCommunitiesListByResourceGroupOutput,
  }));
// Input Schema
export interface IpCommunitiesListBySubscriptionInput {
  subscriptionId: string;
}
export const IpCommunitiesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/ipCommunities",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpCommunitiesListBySubscriptionInput>;

// Output Schema
export interface IpCommunitiesListBySubscriptionOutput {
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
export const IpCommunitiesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<IpCommunitiesListBySubscriptionOutput>;

// The operation
/**
 * Implements IP Communities list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const IpCommunitiesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IpCommunitiesListBySubscriptionInput,
    outputSchema: IpCommunitiesListBySubscriptionOutput,
  }));
// Input Schema
export interface IpCommunitiesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipCommunityName: string;
  properties?: {
    ipCommunityRules?: {
      action: "Permit" | "Deny";
      sequenceNumber: number;
      wellKnownCommunities?: (
        | "Internet"
        | "LocalAS"
        | "NoAdvertise"
        | "NoExport"
        | "GShut"
      )[];
      communityMembers: string[];
    }[];
  };
  tags?: Record<string, string>;
}
export const IpCommunitiesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipCommunityName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        ipCommunityRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              action: Schema.Literals(["Permit", "Deny"]),
              sequenceNumber: Schema.Number,
              wellKnownCommunities: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "Internet",
                    "LocalAS",
                    "NoAdvertise",
                    "NoExport",
                    "GShut",
                  ]),
                ),
              ),
              communityMembers: Schema.Array(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpCommunitiesUpdateInput>;

// Output Schema
export interface IpCommunitiesUpdateOutput {
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
export const IpCommunitiesUpdateOutput =
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
  }) as unknown as Schema.Codec<IpCommunitiesUpdateOutput>;

// The operation
/**
 * API to update certain properties of the IP Community resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipCommunityName - Name of the IP Community.
 */
export const IpCommunitiesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpCommunitiesUpdateInput,
  outputSchema: IpCommunitiesUpdateOutput,
}));
// Input Schema
export interface IpExtendedCommunitiesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipExtendedCommunityName: string;
  properties: {
    annotation?: string;
    ipExtendedCommunityRules: {
      action: "Permit" | "Deny";
      sequenceNumber: number;
      routeTargets: string[];
    }[];
    networkFabricId?: string;
    lastOperation?: { details?: string };
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
  };
  tags?: Record<string, string>;
  location: string;
}
export const IpExtendedCommunitiesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipExtendedCommunityName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      ipExtendedCommunityRules: Schema.Array(
        Schema.Struct({
          action: Schema.Literals(["Permit", "Deny"]),
          sequenceNumber: Schema.Number,
          routeTargets: Schema.Array(Schema.String),
        }),
      ),
      networkFabricId: Schema.optional(Schema.String),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      administrativeState: Schema.optional(
        Schema.Literals([
          "Enabled",
          "Disabled",
          "MAT",
          "RMA",
          "UnderMaintenance",
          "EnabledDegraded",
        ]),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpExtendedCommunitiesCreateInput>;

// Output Schema
export interface IpExtendedCommunitiesCreateOutput {
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
export const IpExtendedCommunitiesCreateOutput =
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
  }) as unknown as Schema.Codec<IpExtendedCommunitiesCreateOutput>;

// The operation
/**
 * Implements IP Extended Community PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipExtendedCommunityName - Name of the IP Extended Community.
 */
export const IpExtendedCommunitiesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpExtendedCommunitiesCreateInput,
  outputSchema: IpExtendedCommunitiesCreateOutput,
}));
// Input Schema
export interface IpExtendedCommunitiesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipExtendedCommunityName: string;
}
export const IpExtendedCommunitiesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipExtendedCommunityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpExtendedCommunitiesDeleteInput>;

// Output Schema
export type IpExtendedCommunitiesDeleteOutput = void;
export const IpExtendedCommunitiesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IpExtendedCommunitiesDeleteOutput>;

// The operation
/**
 * Implements IP Extended Community DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipExtendedCommunityName - Name of the IP Extended Community.
 */
export const IpExtendedCommunitiesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpExtendedCommunitiesDeleteInput,
  outputSchema: IpExtendedCommunitiesDeleteOutput,
}));
// Input Schema
export interface IpExtendedCommunitiesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipExtendedCommunityName: string;
}
export const IpExtendedCommunitiesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipExtendedCommunityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpExtendedCommunitiesGetInput>;

// Output Schema
export interface IpExtendedCommunitiesGetOutput {
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
export const IpExtendedCommunitiesGetOutput =
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
  }) as unknown as Schema.Codec<IpExtendedCommunitiesGetOutput>;

// The operation
/**
 * Implements IP Extended Community GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipExtendedCommunityName - Name of the IP Extended Community.
 */
export const IpExtendedCommunitiesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpExtendedCommunitiesGetInput,
  outputSchema: IpExtendedCommunitiesGetOutput,
}));
// Input Schema
export interface IpExtendedCommunitiesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const IpExtendedCommunitiesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpExtendedCommunitiesListByResourceGroupInput>;

// Output Schema
export interface IpExtendedCommunitiesListByResourceGroupOutput {
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
export const IpExtendedCommunitiesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<IpExtendedCommunitiesListByResourceGroupOutput>;

// The operation
/**
 * Implements IpExtendedCommunities list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const IpExtendedCommunitiesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IpExtendedCommunitiesListByResourceGroupInput,
    outputSchema: IpExtendedCommunitiesListByResourceGroupOutput,
  }));
// Input Schema
export interface IpExtendedCommunitiesListBySubscriptionInput {
  subscriptionId: string;
}
export const IpExtendedCommunitiesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpExtendedCommunitiesListBySubscriptionInput>;

// Output Schema
export interface IpExtendedCommunitiesListBySubscriptionOutput {
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
export const IpExtendedCommunitiesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<IpExtendedCommunitiesListBySubscriptionOutput>;

// The operation
/**
 * Implements IpExtendedCommunities list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const IpExtendedCommunitiesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IpExtendedCommunitiesListBySubscriptionInput,
    outputSchema: IpExtendedCommunitiesListBySubscriptionOutput,
  }));
// Input Schema
export interface IpExtendedCommunitiesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipExtendedCommunityName: string;
  properties?: {
    annotation?: string;
    ipExtendedCommunityRules?: {
      action: "Permit" | "Deny";
      sequenceNumber: number;
      routeTargets: string[];
    }[];
  };
  tags?: Record<string, string>;
}
export const IpExtendedCommunitiesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipExtendedCommunityName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
        ipExtendedCommunityRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              action: Schema.Literals(["Permit", "Deny"]),
              sequenceNumber: Schema.Number,
              routeTargets: Schema.Array(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpExtendedCommunitiesUpdateInput>;

// Output Schema
export interface IpExtendedCommunitiesUpdateOutput {
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
export const IpExtendedCommunitiesUpdateOutput =
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
  }) as unknown as Schema.Codec<IpExtendedCommunitiesUpdateOutput>;

// The operation
/**
 * API to update certain properties of the IP Extended Community resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipExtendedCommunityName - Name of the IP Extended Community.
 */
export const IpExtendedCommunitiesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpExtendedCommunitiesUpdateInput,
  outputSchema: IpExtendedCommunitiesUpdateOutput,
}));
// Input Schema
export interface IpPrefixesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipPrefixName: string;
  properties: {
    annotation?: string;
    networkFabricId?: string;
    ipPrefixRules: {
      action: "Permit" | "Deny";
      sequenceNumber: number;
      networkPrefix: string;
      condition?:
        | "EqualTo"
        | "GreaterThanOrEqualTo"
        | "LesserThanOrEqualTo"
        | "Range";
      subnetMaskLength?: string;
    }[];
    lastOperation?: { details?: string };
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
  };
  tags?: Record<string, string>;
  location: string;
}
export const IpPrefixesCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ipPrefixName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    annotation: Schema.optional(Schema.String),
    networkFabricId: Schema.optional(Schema.String),
    ipPrefixRules: Schema.Array(
      Schema.Struct({
        action: Schema.Literals(["Permit", "Deny"]),
        sequenceNumber: Schema.Number,
        networkPrefix: Schema.String,
        condition: Schema.optional(
          Schema.Literals([
            "EqualTo",
            "GreaterThanOrEqualTo",
            "LesserThanOrEqualTo",
            "Range",
          ]),
        ),
        subnetMaskLength: Schema.optional(Schema.String),
      }),
    ),
    lastOperation: Schema.optional(
      Schema.Struct({
        details: Schema.optional(Schema.String),
      }),
    ),
    configurationState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Rejected",
        "Accepted",
        "Provisioned",
        "ErrorProvisioning",
        "Deprovisioning",
        "Deprovisioned",
        "ErrorDeprovisioning",
        "DeferredControl",
        "Provisioning",
        "PendingCommit",
        "PendingAdministrativeUpdate",
      ]),
    ),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Accepted",
        "Succeeded",
        "Updating",
        "Deleting",
        "Failed",
        "Canceled",
      ]),
    ),
    administrativeState: Schema.optional(
      Schema.Literals([
        "Enabled",
        "Disabled",
        "MAT",
        "RMA",
        "UnderMaintenance",
        "EnabledDegraded",
      ]),
    ),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<IpPrefixesCreateInput>;

// Output Schema
export interface IpPrefixesCreateOutput {
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
export const IpPrefixesCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<IpPrefixesCreateOutput>;

// The operation
/**
 * Implements IP Prefix PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipPrefixName - Name of the IP Prefix.
 */
export const IpPrefixesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpPrefixesCreateInput,
  outputSchema: IpPrefixesCreateOutput,
}));
// Input Schema
export interface IpPrefixesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipPrefixName: string;
}
export const IpPrefixesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ipPrefixName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<IpPrefixesDeleteInput>;

// Output Schema
export type IpPrefixesDeleteOutput = void;
export const IpPrefixesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IpPrefixesDeleteOutput>;

// The operation
/**
 * Implements IP Prefix DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipPrefixName - Name of the IP Prefix.
 */
export const IpPrefixesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpPrefixesDeleteInput,
  outputSchema: IpPrefixesDeleteOutput,
}));
// Input Schema
export interface IpPrefixesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipPrefixName: string;
}
export const IpPrefixesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ipPrefixName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<IpPrefixesGetInput>;

// Output Schema
export interface IpPrefixesGetOutput {
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
export const IpPrefixesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<IpPrefixesGetOutput>;

// The operation
/**
 * Implements IP Prefix GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipPrefixName - Name of the IP Prefix.
 */
export const IpPrefixesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpPrefixesGetInput,
  outputSchema: IpPrefixesGetOutput,
}));
// Input Schema
export interface IpPrefixesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const IpPrefixesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpPrefixesListByResourceGroupInput>;

// Output Schema
export interface IpPrefixesListByResourceGroupOutput {
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
export const IpPrefixesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<IpPrefixesListByResourceGroupOutput>;

// The operation
/**
 * Implements IpPrefixes list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const IpPrefixesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IpPrefixesListByResourceGroupInput,
    outputSchema: IpPrefixesListByResourceGroupOutput,
  }));
// Input Schema
export interface IpPrefixesListBySubscriptionInput {
  subscriptionId: string;
}
export const IpPrefixesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<IpPrefixesListBySubscriptionInput>;

// Output Schema
export interface IpPrefixesListBySubscriptionOutput {
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
export const IpPrefixesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<IpPrefixesListBySubscriptionOutput>;

// The operation
/**
 * Implements IpPrefixes list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const IpPrefixesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IpPrefixesListBySubscriptionInput,
    outputSchema: IpPrefixesListBySubscriptionOutput,
  }));
// Input Schema
export interface IpPrefixesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  ipPrefixName: string;
  properties?: {
    annotation?: string;
    ipPrefixRules?: {
      action: "Permit" | "Deny";
      sequenceNumber: number;
      networkPrefix: string;
      condition?:
        | "EqualTo"
        | "GreaterThanOrEqualTo"
        | "LesserThanOrEqualTo"
        | "Range";
      subnetMaskLength?: string;
    }[];
  };
  tags?: Record<string, string>;
}
export const IpPrefixesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ipPrefixName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      annotation: Schema.optional(Schema.String),
      ipPrefixRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            action: Schema.Literals(["Permit", "Deny"]),
            sequenceNumber: Schema.Number,
            networkPrefix: Schema.String,
            condition: Schema.optional(
              Schema.Literals([
                "EqualTo",
                "GreaterThanOrEqualTo",
                "LesserThanOrEqualTo",
                "Range",
              ]),
            ),
            subnetMaskLength: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<IpPrefixesUpdateInput>;

// Output Schema
export interface IpPrefixesUpdateOutput {
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
export const IpPrefixesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<IpPrefixesUpdateOutput>;

// The operation
/**
 * API to update certain properties of the IP Prefix resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipPrefixName - Name of the IP Prefix.
 */
export const IpPrefixesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IpPrefixesUpdateInput,
  outputSchema: IpPrefixesUpdateOutput,
}));
// Input Schema
export interface L2IsolationDomainsCommitConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  l2IsolationDomainName: string;
}
export const L2IsolationDomainsCommitConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}/commitConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L2IsolationDomainsCommitConfigurationInput>;

// Output Schema
export interface L2IsolationDomainsCommitConfigurationOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const L2IsolationDomainsCommitConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<L2IsolationDomainsCommitConfigurationOutput>;

// The operation
/**
 * Commits the configuration of the given resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsCommitConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L2IsolationDomainsCommitConfigurationInput,
    outputSchema: L2IsolationDomainsCommitConfigurationOutput,
  }));
// Input Schema
export interface L2IsolationDomainsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l2IsolationDomainName: string;
  properties: { annotation?: string };
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const L2IsolationDomainsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L2IsolationDomainsCreateInput>;

// Output Schema
export interface L2IsolationDomainsCreateOutput {
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
export const L2IsolationDomainsCreateOutput =
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
  }) as unknown as Schema.Codec<L2IsolationDomainsCreateOutput>;

// The operation
/**
 * Creates layer 2 network connectivity between compute nodes within a rack and across racks.The configuration is applied on the devices only after the isolation domain is enabled.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: L2IsolationDomainsCreateInput,
  outputSchema: L2IsolationDomainsCreateOutput,
}));
// Input Schema
export interface L2IsolationDomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  l2IsolationDomainName: string;
}
export const L2IsolationDomainsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L2IsolationDomainsDeleteInput>;

// Output Schema
export type L2IsolationDomainsDeleteOutput = void;
export const L2IsolationDomainsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<L2IsolationDomainsDeleteOutput>;

// The operation
/**
 * Deletes layer 2 connectivity between compute nodes by managed by named L2 Isolation name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: L2IsolationDomainsDeleteInput,
  outputSchema: L2IsolationDomainsDeleteOutput,
}));
// Input Schema
export interface L2IsolationDomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  l2IsolationDomainName: string;
}
export const L2IsolationDomainsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L2IsolationDomainsGetInput>;

// Output Schema
export interface L2IsolationDomainsGetOutput {
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
export const L2IsolationDomainsGetOutput =
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
  }) as unknown as Schema.Codec<L2IsolationDomainsGetOutput>;

// The operation
/**
 * Implements L2 Isolation Domain GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: L2IsolationDomainsGetInput,
  outputSchema: L2IsolationDomainsGetOutput,
}));
// Input Schema
export interface L2IsolationDomainsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const L2IsolationDomainsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L2IsolationDomainsListByResourceGroupInput>;

// Output Schema
export interface L2IsolationDomainsListByResourceGroupOutput {
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
export const L2IsolationDomainsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<L2IsolationDomainsListByResourceGroupOutput>;

// The operation
/**
 * Displays L2IsolationDomains list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const L2IsolationDomainsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L2IsolationDomainsListByResourceGroupInput,
    outputSchema: L2IsolationDomainsListByResourceGroupOutput,
  }));
// Input Schema
export interface L2IsolationDomainsListBySubscriptionInput {
  subscriptionId: string;
}
export const L2IsolationDomainsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L2IsolationDomainsListBySubscriptionInput>;

// Output Schema
export interface L2IsolationDomainsListBySubscriptionOutput {
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
export const L2IsolationDomainsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<L2IsolationDomainsListBySubscriptionOutput>;

// The operation
/**
 * Displays L2IsolationDomains list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const L2IsolationDomainsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L2IsolationDomainsListBySubscriptionInput,
    outputSchema: L2IsolationDomainsListBySubscriptionOutput,
  }));
// Input Schema
export interface L2IsolationDomainsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l2IsolationDomainName: string;
  properties?: { annotation?: string };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const L2IsolationDomainsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
      }),
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
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L2IsolationDomainsUpdateInput>;

// Output Schema
export interface L2IsolationDomainsUpdateOutput {
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
export const L2IsolationDomainsUpdateOutput =
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
  }) as unknown as Schema.Codec<L2IsolationDomainsUpdateOutput>;

// The operation
/**
 * API to update certain properties of the L2 Isolation Domain resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: L2IsolationDomainsUpdateInput,
  outputSchema: L2IsolationDomainsUpdateOutput,
}));
// Input Schema
export interface L2IsolationDomainsUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l2IsolationDomainName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const L2IsolationDomainsUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L2IsolationDomainsUpdateAdministrativeStateInput>;

// Output Schema
export interface L2IsolationDomainsUpdateAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const L2IsolationDomainsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<L2IsolationDomainsUpdateAdministrativeStateOutput>;

// The operation
/**
 * Enables isolation domain across the fabric or on specified racks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L2IsolationDomainsUpdateAdministrativeStateInput,
    outputSchema: L2IsolationDomainsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface L2IsolationDomainsValidateConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  l2IsolationDomainName: string;
}
export const L2IsolationDomainsValidateConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}/validateConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L2IsolationDomainsValidateConfigurationInput>;

// Output Schema
export interface L2IsolationDomainsValidateConfigurationOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const L2IsolationDomainsValidateConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<L2IsolationDomainsValidateConfigurationOutput>;

// The operation
/**
 * Validates the configuration of the resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsValidateConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L2IsolationDomainsValidateConfigurationInput,
    outputSchema: L2IsolationDomainsValidateConfigurationOutput,
  }));
// Input Schema
export interface L3IsolationDomainsCommitConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
}
export const L3IsolationDomainsCommitConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/commitConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L3IsolationDomainsCommitConfigurationInput>;

// Output Schema
export interface L3IsolationDomainsCommitConfigurationOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const L3IsolationDomainsCommitConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<L3IsolationDomainsCommitConfigurationOutput>;

// The operation
/**
 * Commits the configuration of the given resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsCommitConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L3IsolationDomainsCommitConfigurationInput,
    outputSchema: L3IsolationDomainsCommitConfigurationOutput,
  }));
// Input Schema
export interface L3IsolationDomainsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  properties: {
    annotation?: string;
    redistributeConnectedSubnets?: "True" | "False";
    redistributeStaticRoutes?: "True" | "False";
    aggregateRouteConfiguration?: {
      ipv4Routes?: { prefix: string }[];
      ipv6Routes?: { prefix: string }[];
    };
    connectedSubnetRoutePolicy?: {
      exportRoutePolicy?: {
        exportIpv4RoutePolicyId?: string;
        exportIpv6RoutePolicyId?: string;
      };
    };
    networkFabricId: string;
    staticRouteRoutePolicy?: {
      exportRoutePolicy?: {
        exportIpv4RoutePolicyId?: string;
        exportIpv6RoutePolicyId?: string;
      };
    };
    uniqueRdConfiguration?: { uniqueRds?: string[] };
    v4routePrefixLimit?: { hardLimit?: number; threshold?: number };
    v6routePrefixLimit?: { hardLimit?: number; threshold?: number };
    lastOperation?: { details?: string };
    exportPolicyConfiguration?: {
      exportPolicies?: ("Pre-Policy" | "Post-Policy" | "All" | "LocalRib")[];
    };
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const L3IsolationDomainsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      redistributeConnectedSubnets: Schema.optional(
        Schema.Literals(["True", "False"]),
      ),
      redistributeStaticRoutes: Schema.optional(
        Schema.Literals(["True", "False"]),
      ),
      aggregateRouteConfiguration: Schema.optional(
        Schema.Struct({
          ipv4Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
              }),
            ),
          ),
          ipv6Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
              }),
            ),
          ),
        }),
      ),
      connectedSubnetRoutePolicy: Schema.optional(
        Schema.Struct({
          exportRoutePolicy: Schema.optional(
            Schema.Struct({
              exportIpv4RoutePolicyId: Schema.optional(Schema.String),
              exportIpv6RoutePolicyId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      networkFabricId: Schema.String,
      staticRouteRoutePolicy: Schema.optional(
        Schema.Struct({
          exportRoutePolicy: Schema.optional(
            Schema.Struct({
              exportIpv4RoutePolicyId: Schema.optional(Schema.String),
              exportIpv6RoutePolicyId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      uniqueRdConfiguration: Schema.optional(
        Schema.Struct({
          uniqueRds: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      v4routePrefixLimit: Schema.optional(
        Schema.Struct({
          hardLimit: Schema.optional(Schema.Number),
          threshold: Schema.optional(Schema.Number),
        }),
      ),
      v6routePrefixLimit: Schema.optional(
        Schema.Struct({
          hardLimit: Schema.optional(Schema.Number),
          threshold: Schema.optional(Schema.Number),
        }),
      ),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      exportPolicyConfiguration: Schema.optional(
        Schema.Struct({
          exportPolicies: Schema.optional(
            Schema.Array(
              Schema.Literals(["Pre-Policy", "Post-Policy", "All", "LocalRib"]),
            ),
          ),
        }),
      ),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      administrativeState: Schema.optional(
        Schema.Literals([
          "Enabled",
          "Disabled",
          "MAT",
          "RMA",
          "UnderMaintenance",
          "EnabledDegraded",
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L3IsolationDomainsCreateInput>;

// Output Schema
export interface L3IsolationDomainsCreateOutput {
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
export const L3IsolationDomainsCreateOutput =
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
  }) as unknown as Schema.Codec<L3IsolationDomainsCreateOutput>;

// The operation
/**
 * Create isolation domain resources for layer 3 connectivity between compute nodes and for communication with external services .This configuration is applied on the devices only after the creation of networks is completed and isolation domain is enabled.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: L3IsolationDomainsCreateInput,
  outputSchema: L3IsolationDomainsCreateOutput,
}));
// Input Schema
export interface L3IsolationDomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
}
export const L3IsolationDomainsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L3IsolationDomainsDeleteInput>;

// Output Schema
export type L3IsolationDomainsDeleteOutput = void;
export const L3IsolationDomainsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<L3IsolationDomainsDeleteOutput>;

// The operation
/**
 * Deletes layer 3 connectivity between compute nodes by managed by named L3 Isolation name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: L3IsolationDomainsDeleteInput,
  outputSchema: L3IsolationDomainsDeleteOutput,
}));
// Input Schema
export interface L3IsolationDomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
}
export const L3IsolationDomainsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L3IsolationDomainsGetInput>;

// Output Schema
export interface L3IsolationDomainsGetOutput {
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
export const L3IsolationDomainsGetOutput =
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
  }) as unknown as Schema.Codec<L3IsolationDomainsGetOutput>;

// The operation
/**
 * Retrieves details of this L3 Isolation Domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: L3IsolationDomainsGetInput,
  outputSchema: L3IsolationDomainsGetOutput,
}));
// Input Schema
export interface L3IsolationDomainsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const L3IsolationDomainsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L3IsolationDomainsListByResourceGroupInput>;

// Output Schema
export interface L3IsolationDomainsListByResourceGroupOutput {
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
export const L3IsolationDomainsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<L3IsolationDomainsListByResourceGroupOutput>;

// The operation
/**
 * Displays L3IsolationDomains list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const L3IsolationDomainsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L3IsolationDomainsListByResourceGroupInput,
    outputSchema: L3IsolationDomainsListByResourceGroupOutput,
  }));
// Input Schema
export interface L3IsolationDomainsListBySubscriptionInput {
  subscriptionId: string;
}
export const L3IsolationDomainsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L3IsolationDomainsListBySubscriptionInput>;

// Output Schema
export interface L3IsolationDomainsListBySubscriptionOutput {
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
export const L3IsolationDomainsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<L3IsolationDomainsListBySubscriptionOutput>;

// The operation
/**
 * Displays L3IsolationDomains list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const L3IsolationDomainsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L3IsolationDomainsListBySubscriptionInput,
    outputSchema: L3IsolationDomainsListBySubscriptionOutput,
  }));
// Input Schema
export interface L3IsolationDomainsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  properties?: {
    annotation?: string;
    redistributeConnectedSubnets?: "True" | "False";
    redistributeStaticRoutes?: "True" | "False";
    aggregateRouteConfiguration?: {
      ipv4Routes?: { prefix: string }[];
      ipv6Routes?: { prefix: string }[];
    };
    connectedSubnetRoutePolicy?: {
      exportRoutePolicy?: {
        exportIpv4RoutePolicyId?: string;
        exportIpv6RoutePolicyId?: string;
      };
    };
    staticRouteRoutePolicy?: {
      exportRoutePolicy?: {
        exportIpv4RoutePolicyId?: string;
        exportIpv6RoutePolicyId?: string;
      };
    };
    v4routePrefixLimit?: { hardLimit?: number; threshold?: number };
    v6routePrefixLimit?: { hardLimit?: number; threshold?: number };
    exportPolicyConfiguration?: {
      exportPolicies?: ("Pre-Policy" | "Post-Policy" | "All" | "LocalRib")[];
    };
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const L3IsolationDomainsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
        redistributeConnectedSubnets: Schema.optional(
          Schema.Literals(["True", "False"]),
        ),
        redistributeStaticRoutes: Schema.optional(
          Schema.Literals(["True", "False"]),
        ),
        aggregateRouteConfiguration: Schema.optional(
          Schema.Struct({
            ipv4Routes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  prefix: Schema.String,
                }),
              ),
            ),
            ipv6Routes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  prefix: Schema.String,
                }),
              ),
            ),
          }),
        ),
        connectedSubnetRoutePolicy: Schema.optional(
          Schema.Struct({
            exportRoutePolicy: Schema.optional(
              Schema.Struct({
                exportIpv4RoutePolicyId: Schema.optional(Schema.String),
                exportIpv6RoutePolicyId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        staticRouteRoutePolicy: Schema.optional(
          Schema.Struct({
            exportRoutePolicy: Schema.optional(
              Schema.Struct({
                exportIpv4RoutePolicyId: Schema.optional(Schema.String),
                exportIpv6RoutePolicyId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        v4routePrefixLimit: Schema.optional(
          Schema.Struct({
            hardLimit: Schema.optional(Schema.Number),
            threshold: Schema.optional(Schema.Number),
          }),
        ),
        v6routePrefixLimit: Schema.optional(
          Schema.Struct({
            hardLimit: Schema.optional(Schema.Number),
            threshold: Schema.optional(Schema.Number),
          }),
        ),
        exportPolicyConfiguration: Schema.optional(
          Schema.Struct({
            exportPolicies: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "Pre-Policy",
                  "Post-Policy",
                  "All",
                  "LocalRib",
                ]),
              ),
            ),
          }),
        ),
      }),
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
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L3IsolationDomainsUpdateInput>;

// Output Schema
export interface L3IsolationDomainsUpdateOutput {
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
export const L3IsolationDomainsUpdateOutput =
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
  }) as unknown as Schema.Codec<L3IsolationDomainsUpdateOutput>;

// The operation
/**
 * API to update certain properties of the L3 Isolation Domain resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: L3IsolationDomainsUpdateInput,
  outputSchema: L3IsolationDomainsUpdateOutput,
}));
// Input Schema
export interface L3IsolationDomainsUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const L3IsolationDomainsUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L3IsolationDomainsUpdateAdministrativeStateInput>;

// Output Schema
export interface L3IsolationDomainsUpdateAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const L3IsolationDomainsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<L3IsolationDomainsUpdateAdministrativeStateOutput>;

// The operation
/**
 * Updates the administrative state of the L3 Isolation Domain resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L3IsolationDomainsUpdateAdministrativeStateInput,
    outputSchema: L3IsolationDomainsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface L3IsolationDomainsValidateConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  l3IsolationDomainName: string;
}
export const L3IsolationDomainsValidateConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/validateConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<L3IsolationDomainsValidateConfigurationInput>;

// Output Schema
export interface L3IsolationDomainsValidateConfigurationOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const L3IsolationDomainsValidateConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<L3IsolationDomainsValidateConfigurationOutput>;

// The operation
/**
 * Validates the configuration of the resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsValidateConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: L3IsolationDomainsValidateConfigurationInput,
    outputSchema: L3IsolationDomainsValidateConfigurationOutput,
  }));
// Input Schema
export interface NeighborGroupsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  neighborGroupName: string;
  properties: {
    annotation?: string;
    destination: { ipv4Addresses?: string[]; ipv6Addresses?: string[] };
    networkTapIds?: string[];
    networkTapRuleIds?: string[];
    networkFabricIds?: string[];
    lastOperation?: { details?: string };
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NeighborGroupsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    neighborGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      destination: Schema.Struct({
        ipv4Addresses: Schema.optional(Schema.Array(Schema.String)),
        ipv6Addresses: Schema.optional(Schema.Array(Schema.String)),
      }),
      networkTapIds: Schema.optional(Schema.Array(Schema.String)),
      networkTapRuleIds: Schema.optional(Schema.Array(Schema.String)),
      networkFabricIds: Schema.optional(Schema.Array(Schema.String)),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups/{neighborGroupName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NeighborGroupsCreateInput>;

// Output Schema
export interface NeighborGroupsCreateOutput {
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
export const NeighborGroupsCreateOutput =
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
  }) as unknown as Schema.Codec<NeighborGroupsCreateOutput>;

// The operation
/**
 * Implements the Neighbor Group PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param neighborGroupName - Name of the Neighbor Group.
 */
export const NeighborGroupsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NeighborGroupsCreateInput,
  outputSchema: NeighborGroupsCreateOutput,
}));
// Input Schema
export interface NeighborGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  neighborGroupName: string;
}
export const NeighborGroupsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    neighborGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups/{neighborGroupName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NeighborGroupsDeleteInput>;

// Output Schema
export type NeighborGroupsDeleteOutput = void;
export const NeighborGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NeighborGroupsDeleteOutput>;

// The operation
/**
 * Implements Neighbor Group DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param neighborGroupName - Name of the Neighbor Group.
 */
export const NeighborGroupsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NeighborGroupsDeleteInput,
  outputSchema: NeighborGroupsDeleteOutput,
}));
// Input Schema
export interface NeighborGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  neighborGroupName: string;
}
export const NeighborGroupsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  neighborGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups/{neighborGroupName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<NeighborGroupsGetInput>;

// Output Schema
export interface NeighborGroupsGetOutput {
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
export const NeighborGroupsGetOutput =
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
  }) as unknown as Schema.Codec<NeighborGroupsGetOutput>;

// The operation
/**
 * Gets the Neighbor Group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param neighborGroupName - Name of the Neighbor Group.
 */
export const NeighborGroupsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NeighborGroupsGetInput,
  outputSchema: NeighborGroupsGetOutput,
}));
// Input Schema
export interface NeighborGroupsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NeighborGroupsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NeighborGroupsListByResourceGroupInput>;

// Output Schema
export interface NeighborGroupsListByResourceGroupOutput {
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
export const NeighborGroupsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NeighborGroupsListByResourceGroupOutput>;

// The operation
/**
 * Displays NeighborGroups list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NeighborGroupsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NeighborGroupsListByResourceGroupInput,
    outputSchema: NeighborGroupsListByResourceGroupOutput,
  }));
// Input Schema
export interface NeighborGroupsListBySubscriptionInput {
  subscriptionId: string;
}
export const NeighborGroupsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/neighborGroups",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NeighborGroupsListBySubscriptionInput>;

// Output Schema
export interface NeighborGroupsListBySubscriptionOutput {
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
export const NeighborGroupsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NeighborGroupsListBySubscriptionOutput>;

// The operation
/**
 * Displays NeighborGroups list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NeighborGroupsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NeighborGroupsListBySubscriptionInput,
    outputSchema: NeighborGroupsListBySubscriptionOutput,
  }));
// Input Schema
export interface NeighborGroupsResyncInput {
  subscriptionId: string;
  resourceGroupName: string;
  neighborGroupName: string;
}
export const NeighborGroupsResyncInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    neighborGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups/{neighborGroupName}/resync",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NeighborGroupsResyncInput>;

// Output Schema
export interface NeighborGroupsResyncOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NeighborGroupsResyncOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NeighborGroupsResyncOutput>;

// The operation
/**
 * Resync the Neighbor Group after a configuration change.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param neighborGroupName - Name of the Neighbor Group.
 */
export const NeighborGroupsResync = /*@__PURE__*/ API.make(() => ({
  inputSchema: NeighborGroupsResyncInput,
  outputSchema: NeighborGroupsResyncOutput,
}));
// Input Schema
export interface NeighborGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  neighborGroupName: string;
  properties?: {
    annotation?: string;
    destination?: { ipv4Addresses?: string[]; ipv6Addresses?: string[] };
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const NeighborGroupsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    neighborGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
        destination: Schema.optional(
          Schema.Struct({
            ipv4Addresses: Schema.optional(Schema.Array(Schema.String)),
            ipv6Addresses: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
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
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups/{neighborGroupName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NeighborGroupsUpdateInput>;

// Output Schema
export interface NeighborGroupsUpdateOutput {
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
export const NeighborGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<NeighborGroupsUpdateOutput>;

// The operation
/**
 * Updates the Neighbor Group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param neighborGroupName - Name of the Neighbor Group.
 */
export const NeighborGroupsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NeighborGroupsUpdateInput,
  outputSchema: NeighborGroupsUpdateOutput,
}));
// Input Schema
export interface NetworkBootstrapDevicesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
  properties: {
    annotation?: string;
    hostName?: string;
    serialNumber?: string;
    version?: string;
    networkDeviceSku?: string;
    networkFabricId?: string;
    secondaryManagementIpv4Address?: string;
    dhcpV4ServerIpAddress?: string;
    primaryManagementIpv6Address?: string;
    secondaryManagementIpv6Address?: string;
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    primaryManagementIpv4Address?: string;
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkBootstrapDevicesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      hostName: Schema.optional(Schema.String),
      serialNumber: Schema.optional(Schema.String),
      version: Schema.optional(Schema.String),
      networkDeviceSku: Schema.optional(Schema.String),
      networkFabricId: Schema.optional(Schema.String),
      secondaryManagementIpv4Address: Schema.optional(Schema.String),
      dhcpV4ServerIpAddress: Schema.optional(Schema.String),
      primaryManagementIpv6Address: Schema.optional(Schema.String),
      secondaryManagementIpv6Address: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      primaryManagementIpv4Address: Schema.optional(Schema.String),
      administrativeState: Schema.optional(
        Schema.Literals([
          "Enabled",
          "Disabled",
          "MAT",
          "RMA",
          "UnderMaintenance",
          "EnabledDegraded",
        ]),
      ),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapDevicesCreateInput>;

// Output Schema
export interface NetworkBootstrapDevicesCreateOutput {
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
export const NetworkBootstrapDevicesCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkBootstrapDevicesCreateOutput>;

// The operation
/**
 * Creates a Network Bootstrap Device resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesCreateInput,
    outputSchema: NetworkBootstrapDevicesCreateOutput,
  }));
// Input Schema
export interface NetworkBootstrapDevicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
}
export const NetworkBootstrapDevicesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapDevicesDeleteInput>;

// Output Schema
export type NetworkBootstrapDevicesDeleteOutput = void;
export const NetworkBootstrapDevicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkBootstrapDevicesDeleteOutput>;

// The operation
/**
 * Deletes a Network Bootstrap Device resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesDeleteInput,
    outputSchema: NetworkBootstrapDevicesDeleteOutput,
  }));
// Input Schema
export interface NetworkBootstrapDevicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
}
export const NetworkBootstrapDevicesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapDevicesGetInput>;

// Output Schema
export interface NetworkBootstrapDevicesGetOutput {
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
export const NetworkBootstrapDevicesGetOutput =
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
  }) as unknown as Schema.Codec<NetworkBootstrapDevicesGetOutput>;

// The operation
/**
 * Gets a Network Bootstrap Device resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkBootstrapDevicesGetInput,
  outputSchema: NetworkBootstrapDevicesGetOutput,
}));
// Input Schema
export interface NetworkBootstrapDevicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NetworkBootstrapDevicesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapDevicesListByResourceGroupInput>;

// Output Schema
export interface NetworkBootstrapDevicesListByResourceGroupOutput {
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
export const NetworkBootstrapDevicesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NetworkBootstrapDevicesListByResourceGroupOutput>;

// The operation
/**
 * Lists all the Network Bootstrap Device resources in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkBootstrapDevicesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesListByResourceGroupInput,
    outputSchema: NetworkBootstrapDevicesListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkBootstrapDevicesListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkBootstrapDevicesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapDevicesListBySubscriptionInput>;

// Output Schema
export interface NetworkBootstrapDevicesListBySubscriptionOutput {
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
export const NetworkBootstrapDevicesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NetworkBootstrapDevicesListBySubscriptionOutput>;

// The operation
/**
 * List all the Network Bootstrap Device resources in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkBootstrapDevicesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesListBySubscriptionInput,
    outputSchema: NetworkBootstrapDevicesListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkBootstrapDevicesRebootInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
}
export const NetworkBootstrapDevicesRebootInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/reboot",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapDevicesRebootInput>;

// Output Schema
export interface NetworkBootstrapDevicesRebootOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkBootstrapDevicesRebootOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkBootstrapDevicesRebootOutput>;

// The operation
/**
 * Reboot the Network Bootstrap Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesReboot =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesRebootInput,
    outputSchema: NetworkBootstrapDevicesRebootOutput,
  }));
// Input Schema
export interface NetworkBootstrapDevicesRefreshConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
}
export const NetworkBootstrapDevicesRefreshConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/refreshConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapDevicesRefreshConfigurationInput>;

// Output Schema
export interface NetworkBootstrapDevicesRefreshConfigurationOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkBootstrapDevicesRefreshConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkBootstrapDevicesRefreshConfigurationOutput>;

// The operation
/**
 * Refreshes the configuration of Network Bootstrap Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesRefreshConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesRefreshConfigurationInput,
    outputSchema: NetworkBootstrapDevicesRefreshConfigurationOutput,
  }));
// Input Schema
export interface NetworkBootstrapDevicesResyncPasswordsInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
}
export const NetworkBootstrapDevicesResyncPasswordsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/resyncPasswords",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapDevicesResyncPasswordsInput>;

// Output Schema
export interface NetworkBootstrapDevicesResyncPasswordsOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkBootstrapDevicesResyncPasswordsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkBootstrapDevicesResyncPasswordsOutput>;

// The operation
/**
 * Resync the latest passwords to the Network Bootstrap Device.
 *
 * Updates the Network Bootstrap Device to use the latest passwords. Does not generate new passwords. Allows network bootstrap devices missed during a previous password rotation to be brought back into sync.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesResyncPasswords =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesResyncPasswordsInput,
    outputSchema: NetworkBootstrapDevicesResyncPasswordsOutput,
  }));
// Input Schema
export interface NetworkBootstrapDevicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
  properties?: {
    annotation?: string;
    hostName?: string;
    serialNumber?: string;
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const NetworkBootstrapDevicesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
        hostName: Schema.optional(Schema.String),
        serialNumber: Schema.optional(Schema.String),
      }),
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
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapDevicesUpdateInput>;

// Output Schema
export interface NetworkBootstrapDevicesUpdateOutput {
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
export const NetworkBootstrapDevicesUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkBootstrapDevicesUpdateOutput>;

// The operation
/**
 * Update certain properties of the Network Bootstrap Device resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesUpdateInput,
    outputSchema: NetworkBootstrapDevicesUpdateOutput,
  }));
// Input Schema
export interface NetworkBootstrapDevicesUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
  state?:
    | "RMA"
    | "UngracefulRMA"
    | "Resync"
    | "GracefulQuarantine"
    | "UngracefulQuarantine"
    | "Quarantine"
    | "UnderMaintenance"
    | "Enable"
    | "Disable";
  resourceIds?: string[];
}
export const NetworkBootstrapDevicesUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals([
        "RMA",
        "UngracefulRMA",
        "Resync",
        "GracefulQuarantine",
        "UngracefulQuarantine",
        "Quarantine",
        "UnderMaintenance",
        "Enable",
        "Disable",
      ]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapDevicesUpdateAdministrativeStateInput>;

// Output Schema
export interface NetworkBootstrapDevicesUpdateAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkBootstrapDevicesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkBootstrapDevicesUpdateAdministrativeStateOutput>;

// The operation
/**
 * Updates the Administrative state of the Network Bootstrap Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesUpdateAdministrativeStateInput,
    outputSchema: NetworkBootstrapDevicesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface NetworkBootstrapDevicesUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
  version?: string;
}
export const NetworkBootstrapDevicesUpgradeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    version: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/upgrade",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapDevicesUpgradeInput>;

// Output Schema
export interface NetworkBootstrapDevicesUpgradeOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkBootstrapDevicesUpgradeOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkBootstrapDevicesUpgradeOutput>;

// The operation
/**
 * Upgrades the version of the Network Bootstrap Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesUpgrade =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesUpgradeInput,
    outputSchema: NetworkBootstrapDevicesUpgradeOutput,
  }));
// Input Schema
export interface NetworkBootstrapInterfacesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
  networkBootstrapInterfaceName: string;
  properties: { annotation?: string };
}
export const NetworkBootstrapInterfacesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    networkBootstrapInterfaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces/{networkBootstrapInterfaceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapInterfacesCreateInput>;

// Output Schema
export interface NetworkBootstrapInterfacesCreateOutput {
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
export const NetworkBootstrapInterfacesCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkBootstrapInterfacesCreateOutput>;

// The operation
/**
 * Create a Network Bootstrap Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 * @param networkBootstrapInterfaceName - Name of the Network Bootstrap Interface.
 */
export const NetworkBootstrapInterfacesCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesCreateInput,
    outputSchema: NetworkBootstrapInterfacesCreateOutput,
  }));
// Input Schema
export interface NetworkBootstrapInterfacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
  networkBootstrapInterfaceName: string;
}
export const NetworkBootstrapInterfacesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    networkBootstrapInterfaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces/{networkBootstrapInterfaceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapInterfacesDeleteInput>;

// Output Schema
export type NetworkBootstrapInterfacesDeleteOutput = void;
export const NetworkBootstrapInterfacesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkBootstrapInterfacesDeleteOutput>;

// The operation
/**
 * Delete the Network Bootstrap Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 * @param networkBootstrapInterfaceName - Name of the Network Bootstrap Interface.
 */
export const NetworkBootstrapInterfacesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesDeleteInput,
    outputSchema: NetworkBootstrapInterfacesDeleteOutput,
  }));
// Input Schema
export interface NetworkBootstrapInterfacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
  networkBootstrapInterfaceName: string;
}
export const NetworkBootstrapInterfacesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    networkBootstrapInterfaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces/{networkBootstrapInterfaceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapInterfacesGetInput>;

// Output Schema
export interface NetworkBootstrapInterfacesGetOutput {
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
export const NetworkBootstrapInterfacesGetOutput =
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
  }) as unknown as Schema.Codec<NetworkBootstrapInterfacesGetOutput>;

// The operation
/**
 * Get the Network Bootstrap Interface resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 * @param networkBootstrapInterfaceName - Name of the Network Bootstrap Interface.
 */
export const NetworkBootstrapInterfacesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesGetInput,
    outputSchema: NetworkBootstrapInterfacesGetOutput,
  }));
// Input Schema
export interface NetworkBootstrapInterfacesListByNetworkBootstrapDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
}
export const NetworkBootstrapInterfacesListByNetworkBootstrapDeviceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapInterfacesListByNetworkBootstrapDeviceInput>;

// Output Schema
export interface NetworkBootstrapInterfacesListByNetworkBootstrapDeviceOutput {
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
export const NetworkBootstrapInterfacesListByNetworkBootstrapDeviceOutput =
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
  }) as unknown as Schema.Codec<NetworkBootstrapInterfacesListByNetworkBootstrapDeviceOutput>;

// The operation
/**
 * List all the Network Bootstrap Interface resources in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapInterfacesListByNetworkBootstrapDevice =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesListByNetworkBootstrapDeviceInput,
    outputSchema: NetworkBootstrapInterfacesListByNetworkBootstrapDeviceOutput,
  }));
// Input Schema
export interface NetworkBootstrapInterfacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
  networkBootstrapInterfaceName: string;
  properties?: { annotation?: string };
}
export const NetworkBootstrapInterfacesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    networkBootstrapInterfaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces/{networkBootstrapInterfaceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapInterfacesUpdateInput>;

// Output Schema
export interface NetworkBootstrapInterfacesUpdateOutput {
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
export const NetworkBootstrapInterfacesUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkBootstrapInterfacesUpdateOutput>;

// The operation
/**
 * Update certain properties of the Network Bootstrap Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 * @param networkBootstrapInterfaceName - Name of the Network Bootstrap Interface.
 */
export const NetworkBootstrapInterfacesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesUpdateInput,
    outputSchema: NetworkBootstrapInterfacesUpdateOutput,
  }));
// Input Schema
export interface NetworkBootstrapInterfacesUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkBootstrapDeviceName: string;
  networkBootstrapInterfaceName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const NetworkBootstrapInterfacesUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    networkBootstrapInterfaceName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces/{networkBootstrapInterfaceName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkBootstrapInterfacesUpdateAdministrativeStateInput>;

// Output Schema
export interface NetworkBootstrapInterfacesUpdateAdministrativeStateOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkBootstrapInterfacesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkBootstrapInterfacesUpdateAdministrativeStateOutput>;

// The operation
/**
 * Update the admin state of the Network Interface.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 * @param networkBootstrapInterfaceName - Name of the Network Bootstrap Interface.
 */
export const NetworkBootstrapInterfacesUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesUpdateAdministrativeStateInput,
    outputSchema: NetworkBootstrapInterfacesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface NetworkDevicesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  properties: {
    annotation?: string;
    hostName?: string;
    serialNumber: string;
    identitySelector?: {
      identityType: "SystemAssignedIdentity" | "UserAssignedIdentity";
      userAssignedIdentityResourceId?: string;
    };
    version?: string;
    networkDeviceSku?: string;
    networkDeviceRole?: "CE" | "ToR" | "NPB" | "TS" | "Management";
    networkRackId?: string;
    managementIpv4Address?: string;
    managementIpv6Address?: string;
    rwDeviceConfig?: string;
    lastOperation?: { details?: string };
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
    secretRotationStatus?: {
      lastRotationTime?: string;
      synchronizationStatus?: "InSync" | "Synchronizing" | "OutOfSync";
      secretArchiveReference?: {
        keyVaultUri?: string;
        keyVaultId?: string;
        secretName?: string;
        secretVersion?: string;
      };
      secretType?: string;
    }[];
    certificateRotationStatus?: {
      expireTime?: string;
      lastRotationTime?: string;
      synchronizationStatus?: "InSync" | "Synchronizing" | "OutOfSync";
      certificateArchiveReference?: {
        keyVaultUri?: string;
        keyVaultId?: string;
        certificateName?: string;
        certificateVersion?: string;
      };
      certificateType?: string;
    }[];
    networkFabricId?: string;
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkDevicesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      hostName: Schema.optional(Schema.String),
      serialNumber: Schema.String,
      identitySelector: Schema.optional(
        Schema.Struct({
          identityType: Schema.Literals([
            "SystemAssignedIdentity",
            "UserAssignedIdentity",
          ]),
          userAssignedIdentityResourceId: Schema.optional(Schema.String),
        }),
      ),
      version: Schema.optional(Schema.String),
      networkDeviceSku: Schema.optional(Schema.String),
      networkDeviceRole: Schema.optional(
        Schema.Literals(["CE", "ToR", "NPB", "TS", "Management"]),
      ),
      networkRackId: Schema.optional(Schema.String),
      managementIpv4Address: Schema.optional(Schema.String),
      managementIpv6Address: Schema.optional(Schema.String),
      rwDeviceConfig: Schema.optional(Schema.String),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      administrativeState: Schema.optional(
        Schema.Literals([
          "Enabled",
          "Disabled",
          "MAT",
          "RMA",
          "UnderMaintenance",
          "EnabledDegraded",
        ]),
      ),
      secretRotationStatus: Schema.optional(
        Schema.Array(
          Schema.Struct({
            lastRotationTime: Schema.optional(Schema.String),
            synchronizationStatus: Schema.optional(
              Schema.Literals(["InSync", "Synchronizing", "OutOfSync"]),
            ),
            secretArchiveReference: Schema.optional(
              Schema.Struct({
                keyVaultUri: Schema.optional(Schema.String),
                keyVaultId: Schema.optional(Schema.String),
                secretName: Schema.optional(Schema.String),
                secretVersion: Schema.optional(Schema.String),
              }),
            ),
            secretType: Schema.optional(Schema.String),
          }),
        ),
      ),
      certificateRotationStatus: Schema.optional(
        Schema.Array(
          Schema.Struct({
            expireTime: Schema.optional(Schema.String),
            lastRotationTime: Schema.optional(Schema.String),
            synchronizationStatus: Schema.optional(
              Schema.Literals(["InSync", "Synchronizing", "OutOfSync"]),
            ),
            certificateArchiveReference: Schema.optional(
              Schema.Struct({
                keyVaultUri: Schema.optional(Schema.String),
                keyVaultId: Schema.optional(Schema.String),
                certificateName: Schema.optional(Schema.String),
                certificateVersion: Schema.optional(Schema.String),
              }),
            ),
            certificateType: Schema.optional(Schema.String),
          }),
        ),
      ),
      networkFabricId: Schema.optional(Schema.String),
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesCreateInput>;

// Output Schema
export interface NetworkDevicesCreateOutput {
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
export const NetworkDevicesCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkDevicesCreateOutput>;

// The operation
/**
 * Create a Network Device resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkDevicesCreateInput,
  outputSchema: NetworkDevicesCreateOutput,
}));
// Input Schema
export interface NetworkDevicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
}
export const NetworkDevicesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesDeleteInput>;

// Output Schema
export type NetworkDevicesDeleteOutput = void;
export const NetworkDevicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkDevicesDeleteOutput>;

// The operation
/**
 * Delete the Network Device resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkDevicesDeleteInput,
  outputSchema: NetworkDevicesDeleteOutput,
}));
// Input Schema
export interface NetworkDevicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
}
export const NetworkDevicesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  networkDeviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<NetworkDevicesGetInput>;

// Output Schema
export interface NetworkDevicesGetOutput {
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
export const NetworkDevicesGetOutput =
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
  }) as unknown as Schema.Codec<NetworkDevicesGetOutput>;

// The operation
/**
 * Gets the Network Device resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkDevicesGetInput,
  outputSchema: NetworkDevicesGetOutput,
}));
// Input Schema
export interface NetworkDeviceSkusGetInput {
  subscriptionId: string;
  networkDeviceSkuName: string;
}
export const NetworkDeviceSkusGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    networkDeviceSkuName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkDeviceSkus/{networkDeviceSkuName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDeviceSkusGetInput>;

// Output Schema
export interface NetworkDeviceSkusGetOutput {
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
export const NetworkDeviceSkusGetOutput =
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
  }) as unknown as Schema.Codec<NetworkDeviceSkusGetOutput>;

// The operation
/**
 * Get a Network Device SKU details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param networkDeviceSkuName - Name of the Network Device SKU.
 */
export const NetworkDeviceSkusGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkDeviceSkusGetInput,
  outputSchema: NetworkDeviceSkusGetOutput,
}));
// Input Schema
export interface NetworkDeviceSkusListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkDeviceSkusListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkDeviceSkus",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDeviceSkusListBySubscriptionInput>;

// Output Schema
export interface NetworkDeviceSkusListBySubscriptionOutput {
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
export const NetworkDeviceSkusListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NetworkDeviceSkusListBySubscriptionOutput>;

// The operation
/**
 * List Network Device SKUs for the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkDeviceSkusListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkDeviceSkusListBySubscriptionInput,
    outputSchema: NetworkDeviceSkusListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkDevicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NetworkDevicesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesListByResourceGroupInput>;

// Output Schema
export interface NetworkDevicesListByResourceGroupOutput {
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
export const NetworkDevicesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NetworkDevicesListByResourceGroupOutput>;

// The operation
/**
 * List all the Network Device resources in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkDevicesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesListByResourceGroupInput,
    outputSchema: NetworkDevicesListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkDevicesListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkDevicesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkDevices",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesListBySubscriptionInput>;

// Output Schema
export interface NetworkDevicesListBySubscriptionOutput {
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
export const NetworkDevicesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NetworkDevicesListBySubscriptionOutput>;

// The operation
/**
 * List all the Network Device resources in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkDevicesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesListBySubscriptionInput,
    outputSchema: NetworkDevicesListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkDevicesRebootInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  rebootType?:
    | "GracefulRebootWithZTP"
    | "GracefulRebootWithoutZTP"
    | "UngracefulRebootWithZTP"
    | "UngracefulRebootWithoutZTP";
}
export const NetworkDevicesRebootInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    rebootType: Schema.optional(
      Schema.Literals([
        "GracefulRebootWithZTP",
        "GracefulRebootWithoutZTP",
        "UngracefulRebootWithZTP",
        "UngracefulRebootWithoutZTP",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/reboot",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesRebootInput>;

// Output Schema
export interface NetworkDevicesRebootOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkDevicesRebootOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
  }) as unknown as Schema.Codec<NetworkDevicesRebootOutput>;

// The operation
/**
 * Reboot the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesReboot = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkDevicesRebootInput,
  outputSchema: NetworkDevicesRebootOutput,
}));
// Input Schema
export interface NetworkDevicesRefreshConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
}
export const NetworkDevicesRefreshConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/refreshConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesRefreshConfigurationInput>;

// Output Schema
export interface NetworkDevicesRefreshConfigurationOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkDevicesRefreshConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkDevicesRefreshConfigurationOutput>;

// The operation
/**
 * Refreshes the configuration the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesRefreshConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesRefreshConfigurationInput,
    outputSchema: NetworkDevicesRefreshConfigurationOutput,
  }));
// Input Schema
export interface NetworkDevicesResyncCertificatesInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
}
export const NetworkDevicesResyncCertificatesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/resyncCertificates",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesResyncCertificatesInput>;

// Output Schema
export interface NetworkDevicesResyncCertificatesOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkDevicesResyncCertificatesOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkDevicesResyncCertificatesOutput>;

// The operation
/**
 * Resync the latest certificates to the Network Device.
 *
 * Updates the Network Device to use the latest certificates. Does not generate new certificates. Allows network devices missed during a previous certificate rotation to be brought back into sync.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesResyncCertificates =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesResyncCertificatesInput,
    outputSchema: NetworkDevicesResyncCertificatesOutput,
  }));
// Input Schema
export interface NetworkDevicesResyncPasswordsInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
}
export const NetworkDevicesResyncPasswordsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/resyncPasswords",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesResyncPasswordsInput>;

// Output Schema
export interface NetworkDevicesResyncPasswordsOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkDevicesResyncPasswordsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkDevicesResyncPasswordsOutput>;

// The operation
/**
 * Resync the latest passwords to the Network Device.
 *
 * Updates the Network Device to use the latest passwords. Does not generate new passwords. Allows network devices missed during a previous password rotation to be brought back into sync.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesResyncPasswords =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesResyncPasswordsInput,
    outputSchema: NetworkDevicesResyncPasswordsOutput,
  }));
// Input Schema
export interface NetworkDevicesRunRoCommandInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  command?: string;
}
export const NetworkDevicesRunRoCommandInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    command: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/runRoCommand",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesRunRoCommandInput>;

// Output Schema
export interface NetworkDevicesRunRoCommandOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkDevicesRunRoCommandOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkDevicesRunRoCommandOutput>;

// The operation
/**
 * Run the RO Command on the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesRunRoCommand = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkDevicesRunRoCommandInput,
  outputSchema: NetworkDevicesRunRoCommandOutput,
}));
// Input Schema
export interface NetworkDevicesRunRwCommandInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  command?: string;
  commandUrl?: string;
}
export const NetworkDevicesRunRwCommandInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    command: Schema.optional(Schema.String),
    commandUrl: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/runRwCommand",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesRunRwCommandInput>;

// Output Schema
export interface NetworkDevicesRunRwCommandOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: {
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    outputUrl?: string;
  };
}
export const NetworkDevicesRunRwCommandOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        configurationState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Rejected",
            "Accepted",
            "Provisioned",
            "ErrorProvisioning",
            "Deprovisioning",
            "Deprovisioned",
            "ErrorDeprovisioning",
            "DeferredControl",
            "Provisioning",
            "PendingCommit",
            "PendingAdministrativeUpdate",
          ]),
        ),
        outputUrl: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkDevicesRunRwCommandOutput>;

// The operation
/**
 * Run the RW Command on the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesRunRwCommand = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkDevicesRunRwCommandInput,
  outputSchema: NetworkDevicesRunRwCommandOutput,
}));
// Input Schema
export interface NetworkDevicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  properties?: {
    annotation?: string;
    hostName?: string;
    serialNumber?: string;
    identitySelector?: {
      identityType?: "SystemAssignedIdentity" | "UserAssignedIdentity";
      userAssignedIdentityResourceId?: string;
    };
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const NetworkDevicesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
        hostName: Schema.optional(Schema.String),
        serialNumber: Schema.optional(Schema.String),
        identitySelector: Schema.optional(
          Schema.Struct({
            identityType: Schema.optional(
              Schema.Literals([
                "SystemAssignedIdentity",
                "UserAssignedIdentity",
              ]),
            ),
            userAssignedIdentityResourceId: Schema.optional(Schema.String),
          }),
        ),
      }),
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
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesUpdateInput>;

// Output Schema
export interface NetworkDevicesUpdateOutput {
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
export const NetworkDevicesUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkDevicesUpdateOutput>;

// The operation
/**
 * Update certain properties of the Network Device resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkDevicesUpdateInput,
  outputSchema: NetworkDevicesUpdateOutput,
}));
// Input Schema
export interface NetworkDevicesUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  state?:
    | "RMA"
    | "UngracefulRMA"
    | "Resync"
    | "GracefulQuarantine"
    | "UngracefulQuarantine"
    | "Quarantine"
    | "UnderMaintenance"
    | "Enable"
    | "Disable";
  resourceIds?: string[];
}
export const NetworkDevicesUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals([
        "RMA",
        "UngracefulRMA",
        "Resync",
        "GracefulQuarantine",
        "UngracefulQuarantine",
        "Quarantine",
        "UnderMaintenance",
        "Enable",
        "Disable",
      ]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesUpdateAdministrativeStateInput>;

// Output Schema
export interface NetworkDevicesUpdateAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkDevicesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkDevicesUpdateAdministrativeStateOutput>;

// The operation
/**
 * Updates the Administrative state of the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesUpdateAdministrativeStateInput,
    outputSchema: NetworkDevicesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface NetworkDevicesUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  version: string;
  rwDeviceConfigUrl?: string;
}
export const NetworkDevicesUpgradeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    version: Schema.String,
    rwDeviceConfigUrl: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/upgrade",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkDevicesUpgradeInput>;

// Output Schema
export interface NetworkDevicesUpgradeOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkDevicesUpgradeOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkDevicesUpgradeOutput>;

// The operation
/**
 * Upgrades the version of the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesUpgrade = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkDevicesUpgradeInput,
  outputSchema: NetworkDevicesUpgradeOutput,
}));
// Input Schema
export interface NetworkFabricControllersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricControllerName: string;
  properties: {
    annotation?: string;
    infrastructureExpressRouteConnections?: {
      expressRouteCircuitId: string;
      expressRouteAuthorizationKey: string;
    }[];
    workloadExpressRouteConnections?: {
      expressRouteCircuitId: string;
      expressRouteAuthorizationKey: string;
    }[];
    infrastructureServices?: {
      ipv4AddressSpaces?: string[];
      ipv6AddressSpaces?: string[];
    };
    workloadServices?: {
      ipv4AddressSpaces?: string[];
      ipv6AddressSpaces?: string[];
    };
    managedResourceGroupConfiguration?: { name?: string; location?: string };
    networkFabricIds?: string[];
    isWorkloadManagementNetworkEnabled?: "True" | "False";
    tenantInternetGatewayIds?: string[];
    ipv4AddressSpace?: string;
    ipv6AddressSpace?: string;
    nfcSku?: "Basic" | "Standard" | "HighPerformance";
    lastOperation?: { details?: string };
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkFabricControllersCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricControllerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      infrastructureExpressRouteConnections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            expressRouteCircuitId: Schema.String,
            expressRouteAuthorizationKey: Schema.String,
          }),
        ),
      ),
      workloadExpressRouteConnections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            expressRouteCircuitId: Schema.String,
            expressRouteAuthorizationKey: Schema.String,
          }),
        ),
      ),
      infrastructureServices: Schema.optional(
        Schema.Struct({
          ipv4AddressSpaces: Schema.optional(Schema.Array(Schema.String)),
          ipv6AddressSpaces: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      workloadServices: Schema.optional(
        Schema.Struct({
          ipv4AddressSpaces: Schema.optional(Schema.Array(Schema.String)),
          ipv6AddressSpaces: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      managedResourceGroupConfiguration: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
        }),
      ),
      networkFabricIds: Schema.optional(Schema.Array(Schema.String)),
      isWorkloadManagementNetworkEnabled: Schema.optional(
        Schema.Literals(["True", "False"]),
      ),
      tenantInternetGatewayIds: Schema.optional(Schema.Array(Schema.String)),
      ipv4AddressSpace: Schema.optional(Schema.String),
      ipv6AddressSpace: Schema.optional(Schema.String),
      nfcSku: Schema.optional(
        Schema.Literals(["Basic", "Standard", "HighPerformance"]),
      ),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/{networkFabricControllerName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricControllersCreateInput>;

// Output Schema
export interface NetworkFabricControllersCreateOutput {
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
export const NetworkFabricControllersCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricControllersCreateOutput>;

// The operation
/**
 * Creates a Network Fabric Controller.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricControllerName - Name of the Network Fabric Controller.
 */
export const NetworkFabricControllersCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricControllersCreateInput,
    outputSchema: NetworkFabricControllersCreateOutput,
  }));
// Input Schema
export interface NetworkFabricControllersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricControllerName: string;
}
export const NetworkFabricControllersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/{networkFabricControllerName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricControllersDeleteInput>;

// Output Schema
export type NetworkFabricControllersDeleteOutput = void;
export const NetworkFabricControllersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkFabricControllersDeleteOutput>;

// The operation
/**
 * Deletes the Network Fabric Controller resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricControllerName - Name of the Network Fabric Controller.
 */
export const NetworkFabricControllersDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricControllersDeleteInput,
    outputSchema: NetworkFabricControllersDeleteOutput,
  }));
// Input Schema
export interface NetworkFabricControllersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricControllerName: string;
}
export const NetworkFabricControllersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/{networkFabricControllerName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricControllersGetInput>;

// Output Schema
export interface NetworkFabricControllersGetOutput {
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
export const NetworkFabricControllersGetOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricControllersGetOutput>;

// The operation
/**
 * Shows the provisioning status of Network Fabric Controller.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricControllerName - Name of the Network Fabric Controller.
 */
export const NetworkFabricControllersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricControllersGetInput,
  outputSchema: NetworkFabricControllersGetOutput,
}));
// Input Schema
export interface NetworkFabricControllersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NetworkFabricControllersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricControllersListByResourceGroupInput>;

// Output Schema
export interface NetworkFabricControllersListByResourceGroupOutput {
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
export const NetworkFabricControllersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricControllersListByResourceGroupOutput>;

// The operation
/**
 * Lists all the NetworkFabricControllers thats available in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkFabricControllersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricControllersListByResourceGroupInput,
    outputSchema: NetworkFabricControllersListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkFabricControllersListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkFabricControllersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricControllersListBySubscriptionInput>;

// Output Schema
export interface NetworkFabricControllersListBySubscriptionOutput {
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
export const NetworkFabricControllersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricControllersListBySubscriptionOutput>;

// The operation
/**
 * Lists all the NetworkFabricControllers by subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkFabricControllersListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricControllersListBySubscriptionInput,
    outputSchema: NetworkFabricControllersListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkFabricControllersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricControllerName: string;
  properties?: {
    infrastructureExpressRouteConnections?: {
      expressRouteCircuitId: string;
      expressRouteAuthorizationKey: string;
    }[];
    workloadExpressRouteConnections?: {
      expressRouteCircuitId: string;
      expressRouteAuthorizationKey: string;
    }[];
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const NetworkFabricControllersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricControllerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        infrastructureExpressRouteConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              expressRouteCircuitId: Schema.String,
              expressRouteAuthorizationKey: Schema.String,
            }),
          ),
        ),
        workloadExpressRouteConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              expressRouteCircuitId: Schema.String,
              expressRouteAuthorizationKey: Schema.String,
            }),
          ),
        ),
      }),
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
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/{networkFabricControllerName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricControllersUpdateInput>;

// Output Schema
export interface NetworkFabricControllersUpdateOutput {
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
export const NetworkFabricControllersUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricControllersUpdateOutput>;

// The operation
/**
 * Updates are currently not supported for the Network Fabric Controller resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricControllerName - Name of the Network Fabric Controller.
 */
export const NetworkFabricControllersUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricControllersUpdateInput,
    outputSchema: NetworkFabricControllersUpdateOutput,
  }));
// Input Schema
export interface NetworkFabricsArmConfigurationDiffInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsArmConfigurationDiffInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/armConfigurationDiff",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsArmConfigurationDiffInput>;

// Output Schema
export interface NetworkFabricsArmConfigurationDiffOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { configurationDiffUrl?: string };
}
export const NetworkFabricsArmConfigurationDiffOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        configurationDiffUrl: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkFabricsArmConfigurationDiffOutput>;

// The operation
/**
 * Post action: Triggers diff of NetworkFabric ARM Configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsArmConfigurationDiff =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsArmConfigurationDiffInput,
    outputSchema: NetworkFabricsArmConfigurationDiffOutput,
  }));
// Input Schema
export interface NetworkFabricsCommitBatchStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  commitBatchId?: string;
}
export const NetworkFabricsCommitBatchStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    commitBatchId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/commitBatchStatus",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsCommitBatchStatusInput>;

// Output Schema
export interface NetworkFabricsCommitBatchStatusOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: {
    commitBatchId?: string;
    commitBatchState?: "Processing" | "Succeeded" | "Failed";
    commitBatchDetails?: { failedDevices?: string[] };
  };
}
export const NetworkFabricsCommitBatchStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        commitBatchId: Schema.optional(Schema.String),
        commitBatchState: Schema.optional(
          Schema.Literals(["Processing", "Succeeded", "Failed"]),
        ),
        commitBatchDetails: Schema.optional(
          Schema.Struct({
            failedDevices: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkFabricsCommitBatchStatusOutput>;

// The operation
/**
 * Post action: Returns a status of commit batch operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsCommitBatchStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsCommitBatchStatusInput,
    outputSchema: NetworkFabricsCommitBatchStatusOutput,
  }));
// Input Schema
export interface NetworkFabricsCommitConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  commitStage?: "Start" | "Continue" | "Rollback";
  commitPolicy?: "StageCEConfiguration";
  devices?: string[];
}
export const NetworkFabricsCommitConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    commitStage: Schema.optional(
      Schema.Literals(["Start", "Continue", "Rollback"]),
    ),
    commitPolicy: Schema.optional(Schema.Literals(["StageCEConfiguration"])),
    devices: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/commitConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsCommitConfigurationInput>;

// Output Schema
export interface NetworkFabricsCommitConfigurationOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkFabricsCommitConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkFabricsCommitConfigurationOutput>;

// The operation
/**
 * Atomic update of the given Network Fabric instance. Sync update of NFA resources at Fabric level.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsCommitConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsCommitConfigurationInput,
    outputSchema: NetworkFabricsCommitConfigurationOutput,
  }));
// Input Schema
export interface NetworkFabricsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  properties: { annotation?: string };
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkFabricsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsCreateInput>;

// Output Schema
export interface NetworkFabricsCreateOutput {
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
export const NetworkFabricsCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricsCreateOutput>;

// The operation
/**
 * Create Network Fabric resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricsCreateInput,
  outputSchema: NetworkFabricsCreateOutput,
}));
// Input Schema
export interface NetworkFabricsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsDeleteInput>;

// Output Schema
export type NetworkFabricsDeleteOutput = void;
export const NetworkFabricsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkFabricsDeleteOutput>;

// The operation
/**
 * Delete Network Fabric resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricsDeleteInput,
  outputSchema: NetworkFabricsDeleteOutput,
}));
// Input Schema
export interface NetworkFabricsDeprovisionInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsDeprovisionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/deprovision",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsDeprovisionInput>;

// Output Schema
export interface NetworkFabricsDeprovisionOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkFabricsDeprovisionOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
  }) as unknown as Schema.Codec<NetworkFabricsDeprovisionOutput>;

// The operation
/**
 * Deprovisions the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsDeprovision = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricsDeprovisionInput,
  outputSchema: NetworkFabricsDeprovisionOutput,
}));
// Input Schema
export interface NetworkFabricsDiscardCommitBatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  commitBatchId?: string;
}
export const NetworkFabricsDiscardCommitBatchInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    commitBatchId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/discardCommitBatch",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsDiscardCommitBatchInput>;

// Output Schema
export interface NetworkFabricsDiscardCommitBatchOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { commitBatchId?: string };
}
export const NetworkFabricsDiscardCommitBatchOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        commitBatchId: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkFabricsDiscardCommitBatchOutput>;

// The operation
/**
 * Post action: Discards a Batch operation in progress.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsDiscardCommitBatch =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsDiscardCommitBatchInput,
    outputSchema: NetworkFabricsDiscardCommitBatchOutput,
  }));
// Input Schema
export interface NetworkFabricsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  networkFabricName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<NetworkFabricsGetInput>;

// Output Schema
export interface NetworkFabricsGetOutput {
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
export const NetworkFabricsGetOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricsGetOutput>;

// The operation
/**
 * Get Network Fabric resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricsGetInput,
  outputSchema: NetworkFabricsGetOutput,
}));
// Input Schema
export interface NetworkFabricsGetTopologyInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsGetTopologyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/getTopology",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsGetTopologyInput>;

// Output Schema
export interface NetworkFabricsGetTopologyOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { url?: string };
}
export const NetworkFabricsGetTopologyOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        url: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkFabricsGetTopologyOutput>;

// The operation
/**
 * Gets Topology of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsGetTopology = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricsGetTopologyInput,
  outputSchema: NetworkFabricsGetTopologyOutput,
}));
// Input Schema
export interface NetworkFabricSkusGetInput {
  subscriptionId: string;
  networkFabricSkuName: string;
}
export const NetworkFabricSkusGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    networkFabricSkuName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkFabricSkus/{networkFabricSkuName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricSkusGetInput>;

// Output Schema
export interface NetworkFabricSkusGetOutput {
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
export const NetworkFabricSkusGetOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricSkusGetOutput>;

// The operation
/**
 * Implements Network Fabric SKU GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param networkFabricSkuName - Name of the Network Fabric SKU.
 */
export const NetworkFabricSkusGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricSkusGetInput,
  outputSchema: NetworkFabricSkusGetOutput,
}));
// Input Schema
export interface NetworkFabricSkusListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkFabricSkusListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkFabricSkus",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricSkusListBySubscriptionInput>;

// Output Schema
export interface NetworkFabricSkusListBySubscriptionOutput {
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
export const NetworkFabricSkusListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricSkusListBySubscriptionOutput>;

// The operation
/**
 * Implements Network Fabric SKUs list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkFabricSkusListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricSkusListBySubscriptionInput,
    outputSchema: NetworkFabricSkusListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkFabricsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NetworkFabricsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsListByResourceGroupInput>;

// Output Schema
export interface NetworkFabricsListByResourceGroupOutput {
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
export const NetworkFabricsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricsListByResourceGroupOutput>;

// The operation
/**
 * List all the Network Fabric resources in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkFabricsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsListByResourceGroupInput,
    outputSchema: NetworkFabricsListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkFabricsListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkFabricsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkFabrics",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsListBySubscriptionInput>;

// Output Schema
export interface NetworkFabricsListBySubscriptionOutput {
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
export const NetworkFabricsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricsListBySubscriptionOutput>;

// The operation
/**
 * List all the Network Fabric resources in the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkFabricsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsListBySubscriptionInput,
    outputSchema: NetworkFabricsListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkFabricsLockFabricInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  lockType?: "Administrative" | "Configuration";
  action?: "Lock" | "Unlock";
}
export const NetworkFabricsLockFabricInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    lockType: Schema.optional(
      Schema.Literals(["Administrative", "Configuration"]),
    ),
    action: Schema.optional(Schema.Literals(["Lock", "Unlock"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/lockFabric",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsLockFabricInput>;

// Output Schema
export interface NetworkFabricsLockFabricOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkFabricsLockFabricOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
  }) as unknown as Schema.Codec<NetworkFabricsLockFabricOutput>;

// The operation
/**
 * Post action: Triggers network fabric lock operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsLockFabric = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricsLockFabricInput,
  outputSchema: NetworkFabricsLockFabricOutput,
}));
// Input Schema
export interface NetworkFabricsProvisionInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsProvisionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/provision",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsProvisionInput>;

// Output Schema
export interface NetworkFabricsProvisionOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkFabricsProvisionOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
  }) as unknown as Schema.Codec<NetworkFabricsProvisionOutput>;

// The operation
/**
 * Provisions the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsProvision = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricsProvisionInput,
  outputSchema: NetworkFabricsProvisionOutput,
}));
// Input Schema
export interface NetworkFabricsRefreshConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsRefreshConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/refreshConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsRefreshConfigurationInput>;

// Output Schema
export interface NetworkFabricsRefreshConfigurationOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkFabricsRefreshConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
  }) as unknown as Schema.Codec<NetworkFabricsRefreshConfigurationOutput>;

// The operation
/**
 * Refreshes the configuration of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsRefreshConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsRefreshConfigurationInput,
    outputSchema: NetworkFabricsRefreshConfigurationOutput,
  }));
// Input Schema
export interface NetworkFabricsResyncCertificatesInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsResyncCertificatesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/resyncCertificates",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsResyncCertificatesInput>;

// Output Schema
export interface NetworkFabricsResyncCertificatesOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkFabricsResyncCertificatesOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkFabricsResyncCertificatesOutput>;

// The operation
/**
 * Re-sync all certificates on Network Devices.
 *
 * Updates all Network Devices to use the latest certificates. Does not generate new certificates. Allows network devices missed during a previous certificate rotation to be brought back into sync.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsResyncCertificates =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsResyncCertificatesInput,
    outputSchema: NetworkFabricsResyncCertificatesOutput,
  }));
// Input Schema
export interface NetworkFabricsResyncPasswordsInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsResyncPasswordsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/resyncPasswords",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsResyncPasswordsInput>;

// Output Schema
export interface NetworkFabricsResyncPasswordsOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkFabricsResyncPasswordsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkFabricsResyncPasswordsOutput>;

// The operation
/**
 * Resync the latest passwords to the Terminal Server and Network Devices.
 *
 * Updates the Terminal Server and all Network Devices to use the latest passwords. Does not generate new passwords.
 * Allows devices to be brought back in sync after a partially successful password rotation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsResyncPasswords =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsResyncPasswordsInput,
    outputSchema: NetworkFabricsResyncPasswordsOutput,
  }));
// Input Schema
export interface NetworkFabricsRotateCertificatesInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsRotateCertificatesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/rotateCertificates",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsRotateCertificatesInput>;

// Output Schema
export interface NetworkFabricsRotateCertificatesOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkFabricsRotateCertificatesOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkFabricsRotateCertificatesOutput>;

// The operation
/**
 * Rotate all certificates on Network Devices.
 *
 * Creates new certificates, then updates the Network Devices to use the new certificates. Note that disabled devices cannot be updated and must be resynchronized with the new certificates once they are enabled.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsRotateCertificates =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsRotateCertificatesInput,
    outputSchema: NetworkFabricsRotateCertificatesOutput,
  }));
// Input Schema
export interface NetworkFabricsRotatePasswordsInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsRotatePasswordsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/rotatePasswords",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsRotatePasswordsInput>;

// Output Schema
export interface NetworkFabricsRotatePasswordsOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkFabricsRotatePasswordsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkFabricsRotatePasswordsOutput>;

// The operation
/**
 * Rotate all passwords on the Terminal Server and Network Devices.
 *
 * Creates new passwords, then updates the Terminal Server and Network Devices to use the new passwords.
 * Note that disabled devices cannot be updated and must be resynchronized with the new passwords once they are enabled.
 * Fails if any of the devices could not be updated with the new password.
 * Failed devices should be resynchronized with the new passwords once possible.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsRotatePasswords =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsRotatePasswordsInput,
    outputSchema: NetworkFabricsRotatePasswordsOutput,
  }));
// Input Schema
export interface NetworkFabricsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  properties?: {
    annotation?: string;
    rackCount?: number;
    serverCountPerRack?: number;
    ipv4Prefix?: string;
    ipv6Prefix?: string;
    fabricASN?: number;
    terminalServerConfiguration?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
      serialNumber?: string;
      primaryIpv4Prefix?: string;
      primaryIpv6Prefix?: string;
      secondaryIpv4Prefix?: string;
      secondaryIpv6Prefix?: string;
    };
    managementNetworkConfiguration?: {
      infrastructureVpnConfiguration?: {
        networkToNetworkInterconnectId?: string;
        peeringOption?: "OptionA" | "OptionB";
        optionBProperties?: {
          importRouteTargets?: string[];
          exportRouteTargets?: string[];
          routeTargets?: {
            importIpv4RouteTargets?: string[];
            importIpv6RouteTargets?: string[];
            exportIpv4RouteTargets?: string[];
            exportIpv6RouteTargets?: string[];
          };
        };
        optionAProperties?: {
          primaryIpv4Prefix?: string;
          primaryIpv6Prefix?: string;
          secondaryIpv4Prefix?: string;
          secondaryIpv6Prefix?: string;
        };
      };
      workloadVpnConfiguration?: {
        networkToNetworkInterconnectId?: string;
        peeringOption?: "OptionA" | "OptionB";
        optionBProperties?: {
          importRouteTargets?: string[];
          exportRouteTargets?: string[];
          routeTargets?: {
            importIpv4RouteTargets?: string[];
            importIpv6RouteTargets?: string[];
            exportIpv4RouteTargets?: string[];
            exportIpv6RouteTargets?: string[];
          };
        };
        optionAProperties?: {
          primaryIpv4Prefix?: string;
          primaryIpv6Prefix?: string;
          secondaryIpv4Prefix?: string;
          secondaryIpv6Prefix?: string;
        };
      };
    };
    storageAccountConfiguration?: {
      storageAccountId?: string;
      storageAccountIdentity?: {
        identityType?: "SystemAssignedIdentity" | "UserAssignedIdentity";
        userAssignedIdentityResourceId?: string;
      };
    };
    hardwareAlertThreshold?: number;
    controlPlaneAcls?: string[];
    trustedIpPrefixes?: string[];
    uniqueRdConfiguration?: {
      uniqueRdConfigurationState?: "Enabled" | "Disabled";
      nniDerivedUniqueRdConfigurationState?: "Enabled" | "Disabled";
    };
    qosConfiguration?: { qosConfigurationState?: "Disabled" | "Enabled" };
    featureFlags?: { featureFlagName?: string; featureFlagValue?: string }[];
    authorizedTransceiver?: { vendor?: string; key?: string };
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const NetworkFabricsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
        rackCount: Schema.optional(Schema.Number),
        serverCountPerRack: Schema.optional(Schema.Number),
        ipv4Prefix: Schema.optional(Schema.String),
        ipv6Prefix: Schema.optional(Schema.String),
        fabricASN: Schema.optional(Schema.Number),
        terminalServerConfiguration: Schema.optional(
          Schema.Struct({
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
            serialNumber: Schema.optional(Schema.String),
            primaryIpv4Prefix: Schema.optional(Schema.String),
            primaryIpv6Prefix: Schema.optional(Schema.String),
            secondaryIpv4Prefix: Schema.optional(Schema.String),
            secondaryIpv6Prefix: Schema.optional(Schema.String),
          }),
        ),
        managementNetworkConfiguration: Schema.optional(
          Schema.Struct({
            infrastructureVpnConfiguration: Schema.optional(
              Schema.Struct({
                networkToNetworkInterconnectId: Schema.optional(Schema.String),
                peeringOption: Schema.optional(
                  Schema.Literals(["OptionA", "OptionB"]),
                ),
                optionBProperties: Schema.optional(
                  Schema.Struct({
                    importRouteTargets: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    exportRouteTargets: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    routeTargets: Schema.optional(
                      Schema.Struct({
                        importIpv4RouteTargets: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        importIpv6RouteTargets: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        exportIpv4RouteTargets: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        exportIpv6RouteTargets: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                      }),
                    ),
                  }),
                ),
                optionAProperties: Schema.optional(
                  Schema.Struct({
                    primaryIpv4Prefix: Schema.optional(Schema.String),
                    primaryIpv6Prefix: Schema.optional(Schema.String),
                    secondaryIpv4Prefix: Schema.optional(Schema.String),
                    secondaryIpv6Prefix: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            workloadVpnConfiguration: Schema.optional(
              Schema.Struct({
                networkToNetworkInterconnectId: Schema.optional(Schema.String),
                peeringOption: Schema.optional(
                  Schema.Literals(["OptionA", "OptionB"]),
                ),
                optionBProperties: Schema.optional(
                  Schema.Struct({
                    importRouteTargets: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    exportRouteTargets: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    routeTargets: Schema.optional(
                      Schema.Struct({
                        importIpv4RouteTargets: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        importIpv6RouteTargets: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        exportIpv4RouteTargets: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        exportIpv6RouteTargets: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                      }),
                    ),
                  }),
                ),
                optionAProperties: Schema.optional(
                  Schema.Struct({
                    primaryIpv4Prefix: Schema.optional(Schema.String),
                    primaryIpv6Prefix: Schema.optional(Schema.String),
                    secondaryIpv4Prefix: Schema.optional(Schema.String),
                    secondaryIpv6Prefix: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        storageAccountConfiguration: Schema.optional(
          Schema.Struct({
            storageAccountId: Schema.optional(Schema.String),
            storageAccountIdentity: Schema.optional(
              Schema.Struct({
                identityType: Schema.optional(
                  Schema.Literals([
                    "SystemAssignedIdentity",
                    "UserAssignedIdentity",
                  ]),
                ),
                userAssignedIdentityResourceId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        hardwareAlertThreshold: Schema.optional(Schema.Number),
        controlPlaneAcls: Schema.optional(Schema.Array(Schema.String)),
        trustedIpPrefixes: Schema.optional(Schema.Array(Schema.String)),
        uniqueRdConfiguration: Schema.optional(
          Schema.Struct({
            uniqueRdConfigurationState: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            nniDerivedUniqueRdConfigurationState: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        qosConfiguration: Schema.optional(
          Schema.Struct({
            qosConfigurationState: Schema.optional(
              Schema.Literals(["Disabled", "Enabled"]),
            ),
          }),
        ),
        featureFlags: Schema.optional(
          Schema.Array(
            Schema.Struct({
              featureFlagName: Schema.optional(Schema.String),
              featureFlagValue: Schema.optional(Schema.String),
            }),
          ),
        ),
        authorizedTransceiver: Schema.optional(
          Schema.Struct({
            vendor: Schema.optional(Schema.String),
            key: Schema.optional(Schema.String),
          }),
        ),
      }),
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
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsUpdateInput>;

// Output Schema
export interface NetworkFabricsUpdateOutput {
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
export const NetworkFabricsUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkFabricsUpdateOutput>;

// The operation
/**
 * Update certain properties of the Network Fabric resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricsUpdateInput,
  outputSchema: NetworkFabricsUpdateOutput,
}));
// Input Schema
export interface NetworkFabricsUpdateInfraManagementBfdConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const NetworkFabricsUpdateInfraManagementBfdConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/updateInfraManagementBfdConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsUpdateInfraManagementBfdConfigurationInput>;

// Output Schema
export interface NetworkFabricsUpdateInfraManagementBfdConfigurationOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const NetworkFabricsUpdateInfraManagementBfdConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkFabricsUpdateInfraManagementBfdConfigurationOutput>;

// The operation
/**
 * Updates the Infra Management BFD Configuration of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsUpdateInfraManagementBfdConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsUpdateInfraManagementBfdConfigurationInput,
    outputSchema: NetworkFabricsUpdateInfraManagementBfdConfigurationOutput,
  }));
// Input Schema
export interface NetworkFabricsUpdateWorkloadManagementBfdConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const NetworkFabricsUpdateWorkloadManagementBfdConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/updateWorkloadManagementBfdConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsUpdateWorkloadManagementBfdConfigurationInput>;

// Output Schema
export interface NetworkFabricsUpdateWorkloadManagementBfdConfigurationOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const NetworkFabricsUpdateWorkloadManagementBfdConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkFabricsUpdateWorkloadManagementBfdConfigurationOutput>;

// The operation
/**
 * Updates the Workload Management BFD Configuration of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsUpdateWorkloadManagementBfdConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsUpdateWorkloadManagementBfdConfigurationInput,
    outputSchema: NetworkFabricsUpdateWorkloadManagementBfdConfigurationOutput,
  }));
// Input Schema
export interface NetworkFabricsUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  action?: "Start" | "Complete";
  version?: string;
}
export const NetworkFabricsUpgradeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    action: Schema.optional(Schema.Literals(["Start", "Complete"])),
    version: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/upgrade",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsUpgradeInput>;

// Output Schema
export interface NetworkFabricsUpgradeOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkFabricsUpgradeOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
  }) as unknown as Schema.Codec<NetworkFabricsUpgradeOutput>;

// The operation
/**
 * Upgrades the version of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsUpgrade = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricsUpgradeInput,
  outputSchema: NetworkFabricsUpgradeOutput,
}));
// Input Schema
export interface NetworkFabricsValidateConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  validateAction?: "Cabling" | "Configuration" | "Connectivity";
}
export const NetworkFabricsValidateConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    validateAction: Schema.optional(
      Schema.Literals(["Cabling", "Configuration", "Connectivity"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/validateConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsValidateConfigurationInput>;

// Output Schema
export interface NetworkFabricsValidateConfigurationOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkFabricsValidateConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkFabricsValidateConfigurationOutput>;

// The operation
/**
 * Validates the configuration of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsValidateConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsValidateConfigurationInput,
    outputSchema: NetworkFabricsValidateConfigurationOutput,
  }));
// Input Schema
export interface NetworkFabricsViewDeviceConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkFabricsViewDeviceConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/viewDeviceConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkFabricsViewDeviceConfigurationInput>;

// Output Schema
export interface NetworkFabricsViewDeviceConfigurationOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { deviceConfigurationUrl?: string };
}
export const NetworkFabricsViewDeviceConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        deviceConfigurationUrl: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkFabricsViewDeviceConfigurationOutput>;

// The operation
/**
 * Post action: Triggers view of network fabric configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsViewDeviceConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsViewDeviceConfigurationInput,
    outputSchema: NetworkFabricsViewDeviceConfigurationOutput,
  }));
// Input Schema
export interface NetworkInterfacesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  networkInterfaceName: string;
  properties: { annotation?: string };
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
    >;
  };
}
export const NetworkInterfacesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkInterfacesCreateInput>;

// Output Schema
export interface NetworkInterfacesCreateOutput {
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
export const NetworkInterfacesCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkInterfacesCreateOutput>;

// The operation
/**
 * Create a Network Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 * @param networkInterfaceName - Name of the Network Interface.
 */
export const NetworkInterfacesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkInterfacesCreateInput,
  outputSchema: NetworkInterfacesCreateOutput,
}));
// Input Schema
export interface NetworkInterfacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  networkInterfaceName: string;
}
export const NetworkInterfacesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkInterfacesDeleteInput>;

// Output Schema
export type NetworkInterfacesDeleteOutput = void;
export const NetworkInterfacesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkInterfacesDeleteOutput>;

// The operation
/**
 * Delete the Network Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 * @param networkInterfaceName - Name of the Network Interface.
 */
export const NetworkInterfacesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkInterfacesDeleteInput,
  outputSchema: NetworkInterfacesDeleteOutput,
}));
// Input Schema
export interface NetworkInterfacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  networkInterfaceName: string;
}
export const NetworkInterfacesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkInterfacesGetInput>;

// Output Schema
export interface NetworkInterfacesGetOutput {
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
export const NetworkInterfacesGetOutput =
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
  }) as unknown as Schema.Codec<NetworkInterfacesGetOutput>;

// The operation
/**
 * Get the Network Interface resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 * @param networkInterfaceName - Name of the Network Interface.
 */
export const NetworkInterfacesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkInterfacesGetInput,
  outputSchema: NetworkInterfacesGetOutput,
}));
// Input Schema
export interface NetworkInterfacesListByNetworkDeviceInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
}
export const NetworkInterfacesListByNetworkDeviceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkInterfacesListByNetworkDeviceInput>;

// Output Schema
export interface NetworkInterfacesListByNetworkDeviceOutput {
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
export const NetworkInterfacesListByNetworkDeviceOutput =
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
  }) as unknown as Schema.Codec<NetworkInterfacesListByNetworkDeviceOutput>;

// The operation
/**
 * List all the Network Interface resources in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkInterfacesListByNetworkDevice =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkInterfacesListByNetworkDeviceInput,
    outputSchema: NetworkInterfacesListByNetworkDeviceOutput,
  }));
// Input Schema
export interface NetworkInterfacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  networkInterfaceName: string;
  properties?: { annotation?: string };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const NetworkInterfacesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
      }),
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
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkInterfacesUpdateInput>;

// Output Schema
export interface NetworkInterfacesUpdateOutput {
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
export const NetworkInterfacesUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkInterfacesUpdateOutput>;

// The operation
/**
 * Update certain properties of the Network Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 * @param networkInterfaceName - Name of the Network Interface.
 */
export const NetworkInterfacesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkInterfacesUpdateInput,
  outputSchema: NetworkInterfacesUpdateOutput,
}));
// Input Schema
export interface NetworkInterfacesUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkDeviceName: string;
  networkInterfaceName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const NetworkInterfacesUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkInterfacesUpdateAdministrativeStateInput>;

// Output Schema
export interface NetworkInterfacesUpdateAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const NetworkInterfacesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkInterfacesUpdateAdministrativeStateOutput>;

// The operation
/**
 * Update the admin state of the Network Interface.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 * @param networkInterfaceName - Name of the Network Interface.
 */
export const NetworkInterfacesUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkInterfacesUpdateAdministrativeStateInput,
    outputSchema: NetworkInterfacesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface NetworkMonitorsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkMonitorName: string;
  properties: { annotation?: string };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkMonitorsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkMonitorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors/{networkMonitorName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkMonitorsCreateInput>;

// Output Schema
export interface NetworkMonitorsCreateOutput {
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
export const NetworkMonitorsCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkMonitorsCreateOutput>;

// The operation
/**
 * Creates NetworkMonitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkMonitorName - Name of the Network Monitor.
 */
export const NetworkMonitorsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkMonitorsCreateInput,
  outputSchema: NetworkMonitorsCreateOutput,
}));
// Input Schema
export interface NetworkMonitorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkMonitorName: string;
}
export const NetworkMonitorsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkMonitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors/{networkMonitorName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkMonitorsDeleteInput>;

// Output Schema
export type NetworkMonitorsDeleteOutput = void;
export const NetworkMonitorsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkMonitorsDeleteOutput>;

// The operation
/**
 * Deletes layer 2 connectivity between compute nodes by managed by named NetworkMonitor name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkMonitorName - Name of the Network Monitor.
 */
export const NetworkMonitorsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkMonitorsDeleteInput,
  outputSchema: NetworkMonitorsDeleteOutput,
}));
// Input Schema
export interface NetworkMonitorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkMonitorName: string;
}
export const NetworkMonitorsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkMonitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors/{networkMonitorName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkMonitorsGetInput>;

// Output Schema
export interface NetworkMonitorsGetOutput {
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
export const NetworkMonitorsGetOutput =
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
  }) as unknown as Schema.Codec<NetworkMonitorsGetOutput>;

// The operation
/**
 * Implements NetworkMonitor GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkMonitorName - Name of the Network Monitor.
 */
export const NetworkMonitorsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkMonitorsGetInput,
  outputSchema: NetworkMonitorsGetOutput,
}));
// Input Schema
export interface NetworkMonitorsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NetworkMonitorsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkMonitorsListByResourceGroupInput>;

// Output Schema
export interface NetworkMonitorsListByResourceGroupOutput {
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
export const NetworkMonitorsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NetworkMonitorsListByResourceGroupOutput>;

// The operation
/**
 * Displays NetworkMonitors list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkMonitorsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkMonitorsListByResourceGroupInput,
    outputSchema: NetworkMonitorsListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkMonitorsListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkMonitorsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkMonitors",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkMonitorsListBySubscriptionInput>;

// Output Schema
export interface NetworkMonitorsListBySubscriptionOutput {
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
export const NetworkMonitorsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NetworkMonitorsListBySubscriptionOutput>;

// The operation
/**
 * Displays NetworkMonitors list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkMonitorsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkMonitorsListBySubscriptionInput,
    outputSchema: NetworkMonitorsListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkMonitorsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkMonitorName: string;
  properties?: {
    bmpConfiguration?: {
      stationConfigurationState?: "Enabled" | "Disabled";
      scopeResourceId?: string;
      stationName?: string;
      stationIp?: string;
      stationPort?: number;
      stationConnectionMode?: "Active" | "Passive";
      stationConnectionProperties?: {
        keepaliveIdleTime?: number;
        probeInterval?: number;
        probeCount?: number;
      };
      stationNetwork?: string;
      monitoredNetworks?: string[];
      exportPolicy?: "Pre-Policy" | "Post-Policy" | "All" | "LocalRib";
      exportPolicyConfiguration?: {
        exportPolicies?: ("Pre-Policy" | "Post-Policy" | "All" | "LocalRib")[];
      };
      monitoredAddressFamilies?: (
        | "ipv4Unicast"
        | "ipv6Unicast"
        | "vpnIpv4"
        | "vpnIpv6"
        | "All"
      )[];
    };
  };
  tags?: Record<string, string>;
}
export const NetworkMonitorsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkMonitorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        bmpConfiguration: Schema.optional(
          Schema.Struct({
            stationConfigurationState: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            scopeResourceId: Schema.optional(Schema.String),
            stationName: Schema.optional(Schema.String),
            stationIp: Schema.optional(Schema.String),
            stationPort: Schema.optional(Schema.Number),
            stationConnectionMode: Schema.optional(
              Schema.Literals(["Active", "Passive"]),
            ),
            stationConnectionProperties: Schema.optional(
              Schema.Struct({
                keepaliveIdleTime: Schema.optional(Schema.Number),
                probeInterval: Schema.optional(Schema.Number),
                probeCount: Schema.optional(Schema.Number),
              }),
            ),
            stationNetwork: Schema.optional(Schema.String),
            monitoredNetworks: Schema.optional(Schema.Array(Schema.String)),
            exportPolicy: Schema.optional(
              Schema.Literals(["Pre-Policy", "Post-Policy", "All", "LocalRib"]),
            ),
            exportPolicyConfiguration: Schema.optional(
              Schema.Struct({
                exportPolicies: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "Pre-Policy",
                      "Post-Policy",
                      "All",
                      "LocalRib",
                    ]),
                  ),
                ),
              }),
            ),
            monitoredAddressFamilies: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "ipv4Unicast",
                  "ipv6Unicast",
                  "vpnIpv4",
                  "vpnIpv6",
                  "All",
                ]),
              ),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors/{networkMonitorName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkMonitorsUpdateInput>;

// Output Schema
export interface NetworkMonitorsUpdateOutput {
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
export const NetworkMonitorsUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkMonitorsUpdateOutput>;

// The operation
/**
 * API to update certain properties of the NetworkMonitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkMonitorName - Name of the Network Monitor.
 */
export const NetworkMonitorsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkMonitorsUpdateInput,
  outputSchema: NetworkMonitorsUpdateOutput,
}));
// Input Schema
export interface NetworkMonitorsUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkMonitorName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const NetworkMonitorsUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkMonitorName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors/{networkMonitorName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkMonitorsUpdateAdministrativeStateInput>;

// Output Schema
export interface NetworkMonitorsUpdateAdministrativeStateOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkMonitorsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkMonitorsUpdateAdministrativeStateOutput>;

// The operation
/**
 * Enables isolation domain across the fabric or on specified racks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkMonitorName - Name of the Network Monitor.
 */
export const NetworkMonitorsUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkMonitorsUpdateAdministrativeStateInput,
    outputSchema: NetworkMonitorsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface NetworkPacketBrokersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkPacketBrokerName: string;
  properties: {
    networkFabricId: string;
    networkDeviceIds?: string[];
    sourceInterfaceIds?: string[];
    networkTapIds?: string[];
    neighborGroupIds?: string[];
    lastOperation?: { details?: string };
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkPacketBrokersCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkPacketBrokerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      networkFabricId: Schema.String,
      networkDeviceIds: Schema.optional(Schema.Array(Schema.String)),
      sourceInterfaceIds: Schema.optional(Schema.Array(Schema.String)),
      networkTapIds: Schema.optional(Schema.Array(Schema.String)),
      neighborGroupIds: Schema.optional(Schema.Array(Schema.String)),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkPacketBrokersCreateInput>;

// Output Schema
export interface NetworkPacketBrokersCreateOutput {
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
export const NetworkPacketBrokersCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkPacketBrokersCreateOutput>;

// The operation
/**
 * Creates a Network Packet Broker.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkPacketBrokerName - Name of the Network Packet Broker.
 */
export const NetworkPacketBrokersCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkPacketBrokersCreateInput,
  outputSchema: NetworkPacketBrokersCreateOutput,
}));
// Input Schema
export interface NetworkPacketBrokersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkPacketBrokerName: string;
}
export const NetworkPacketBrokersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkPacketBrokerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkPacketBrokersDeleteInput>;

// Output Schema
export type NetworkPacketBrokersDeleteOutput = void;
export const NetworkPacketBrokersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkPacketBrokersDeleteOutput>;

// The operation
/**
 * Deletes Network Packet Broker.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkPacketBrokerName - Name of the Network Packet Broker.
 */
export const NetworkPacketBrokersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkPacketBrokersDeleteInput,
  outputSchema: NetworkPacketBrokersDeleteOutput,
}));
// Input Schema
export interface NetworkPacketBrokersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkPacketBrokerName: string;
}
export const NetworkPacketBrokersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkPacketBrokerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkPacketBrokersGetInput>;

// Output Schema
export interface NetworkPacketBrokersGetOutput {
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
export const NetworkPacketBrokersGetOutput =
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
  }) as unknown as Schema.Codec<NetworkPacketBrokersGetOutput>;

// The operation
/**
 * Retrieves details of this Network Packet Broker.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkPacketBrokerName - Name of the Network Packet Broker.
 */
export const NetworkPacketBrokersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkPacketBrokersGetInput,
  outputSchema: NetworkPacketBrokersGetOutput,
}));
// Input Schema
export interface NetworkPacketBrokersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NetworkPacketBrokersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkPacketBrokersListByResourceGroupInput>;

// Output Schema
export interface NetworkPacketBrokersListByResourceGroupOutput {
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
export const NetworkPacketBrokersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NetworkPacketBrokersListByResourceGroupOutput>;

// The operation
/**
 * Displays NetworkPacketBrokers list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkPacketBrokersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkPacketBrokersListByResourceGroupInput,
    outputSchema: NetworkPacketBrokersListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkPacketBrokersListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkPacketBrokersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkPacketBrokersListBySubscriptionInput>;

// Output Schema
export interface NetworkPacketBrokersListBySubscriptionOutput {
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
export const NetworkPacketBrokersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NetworkPacketBrokersListBySubscriptionOutput>;

// The operation
/**
 * Displays Network Packet Brokers list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkPacketBrokersListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkPacketBrokersListBySubscriptionInput,
    outputSchema: NetworkPacketBrokersListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkPacketBrokersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkPacketBrokerName: string;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const NetworkPacketBrokersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkPacketBrokerName: Schema.String.pipe(T.PathParam()),
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkPacketBrokersUpdateInput>;

// Output Schema
export interface NetworkPacketBrokersUpdateOutput {
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
export const NetworkPacketBrokersUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkPacketBrokersUpdateOutput>;

// The operation
/**
 * API to update certain properties of the Network Packet Broker resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkPacketBrokerName - Name of the Network Packet Broker.
 */
export const NetworkPacketBrokersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkPacketBrokersUpdateInput,
  outputSchema: NetworkPacketBrokersUpdateOutput,
}));
// Input Schema
export interface NetworkRacksCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkRackName: string;
  properties: { annotation?: string };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkRacksCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkRackName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkRacks/{networkRackName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkRacksCreateInput>;

// Output Schema
export interface NetworkRacksCreateOutput {
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
export const NetworkRacksCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkRacksCreateOutput>;

// The operation
/**
 * Create Network Rack resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkRackName - Name of the Network Rack.
 */
export const NetworkRacksCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkRacksCreateInput,
  outputSchema: NetworkRacksCreateOutput,
}));
// Input Schema
export interface NetworkRacksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkRackName: string;
}
export const NetworkRacksDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkRackName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkRacks/{networkRackName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkRacksDeleteInput>;

// Output Schema
export type NetworkRacksDeleteOutput = void;
export const NetworkRacksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkRacksDeleteOutput>;

// The operation
/**
 * Delete Network Rack resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkRackName - Name of the Network Rack.
 */
export const NetworkRacksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkRacksDeleteInput,
  outputSchema: NetworkRacksDeleteOutput,
}));
// Input Schema
export interface NetworkRacksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkRackName: string;
}
export const NetworkRacksGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  networkRackName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkRacks/{networkRackName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<NetworkRacksGetInput>;

// Output Schema
export interface NetworkRacksGetOutput {
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
export const NetworkRacksGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NetworkRacksGetOutput>;

// The operation
/**
 * Get Network Rack resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkRackName - Name of the Network Rack.
 */
export const NetworkRacksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkRacksGetInput,
  outputSchema: NetworkRacksGetOutput,
}));
// Input Schema
export interface NetworkRacksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NetworkRacksListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkRacks",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkRacksListByResourceGroupInput>;

// Output Schema
export interface NetworkRacksListByResourceGroupOutput {
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
export const NetworkRacksListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NetworkRacksListByResourceGroupOutput>;

// The operation
/**
 * List all Network Rack resources in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkRacksListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkRacksListByResourceGroupInput,
    outputSchema: NetworkRacksListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkRacksListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkRacksListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkRacks",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkRacksListBySubscriptionInput>;

// Output Schema
export interface NetworkRacksListBySubscriptionOutput {
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
export const NetworkRacksListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NetworkRacksListBySubscriptionOutput>;

// The operation
/**
 * List all Network Rack resources in the given subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkRacksListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkRacksListBySubscriptionInput,
    outputSchema: NetworkRacksListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkRacksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkRackName: string;
  tags?: Record<string, string>;
}
export const NetworkRacksUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkRackName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkRacks/{networkRackName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkRacksUpdateInput>;

// Output Schema
export interface NetworkRacksUpdateOutput {
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
export const NetworkRacksUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkRacksUpdateOutput>;

// The operation
/**
 * Update certain properties of the Network Rack resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkRackName - Name of the Network Rack.
 */
export const NetworkRacksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkRacksUpdateInput,
  outputSchema: NetworkRacksUpdateOutput,
}));
// Input Schema
export interface NetworkTapRulesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapRuleName: string;
  properties: {
    annotation?: string;
    configurationType: "File" | "Inline";
    tapRulesUrl?: string;
    identitySelector?: {
      identityType: "SystemAssignedIdentity" | "UserAssignedIdentity";
      userAssignedIdentityResourceId?: string;
    };
    matchConfigurations?: {
      matchConfigurationName?: string;
      sequenceNumber?: number;
      ipAddressType?: "IPv4" | "IPv6";
      matchConditions?: {
        protocolTypes?: string[];
        vlanMatchCondition?: {
          vlans?: string[];
          innerVlans?: string[];
          vlanGroupNames?: string[];
        };
        ipCondition?: {
          type?: "SourceIP" | "DestinationIP" | "Bidirectional";
          prefixType?: "Prefix" | "LongestPrefix";
          ipPrefixValues?: string[];
          ipGroupNames?: string[];
        };
      }[];
      actions?: {
        type?:
          | "Drop"
          | "Count"
          | "Log"
          | "Replicate"
          | "Goto"
          | "Redirect"
          | "Mirror";
        truncate?: string;
        isTimestampEnabled?: "True" | "False";
        destinationId?: string;
        matchConfigurationName?: string;
      }[];
    }[];
    dynamicMatchConfigurations?: {
      ipGroups?: {
        name?: string;
        ipAddressType?: "IPv4" | "IPv6";
        ipPrefixes?: string[];
      }[];
      vlanGroups?: { name?: string; vlans?: string[] }[];
      portGroups?: { name?: string; ports?: string[] }[];
    }[];
    networkTapId?: string;
    networkTapIds?: string[];
    pollingIntervalInSeconds?: number;
    lastSyncedTime?: string;
    globalNetworkTapRuleActions?: {
      enableCount?: "True" | "False";
      truncate?: string;
    };
    lastOperation?: { details?: string };
    networkFabricIds?: string[];
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkTapRulesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      configurationType: Schema.Literals(["File", "Inline"]),
      tapRulesUrl: Schema.optional(Schema.String),
      identitySelector: Schema.optional(
        Schema.Struct({
          identityType: Schema.Literals([
            "SystemAssignedIdentity",
            "UserAssignedIdentity",
          ]),
          userAssignedIdentityResourceId: Schema.optional(Schema.String),
        }),
      ),
      matchConfigurations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            matchConfigurationName: Schema.optional(Schema.String),
            sequenceNumber: Schema.optional(Schema.Number),
            ipAddressType: Schema.optional(Schema.Literals(["IPv4", "IPv6"])),
            matchConditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  protocolTypes: Schema.optional(Schema.Array(Schema.String)),
                  vlanMatchCondition: Schema.optional(
                    Schema.Struct({
                      vlans: Schema.optional(Schema.Array(Schema.String)),
                      innerVlans: Schema.optional(Schema.Array(Schema.String)),
                      vlanGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                    }),
                  ),
                  ipCondition: Schema.optional(
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals([
                          "SourceIP",
                          "DestinationIP",
                          "Bidirectional",
                        ]),
                      ),
                      prefixType: Schema.optional(
                        Schema.Literals(["Prefix", "LongestPrefix"]),
                      ),
                      ipPrefixValues: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      ipGroupNames: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            actions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  type: Schema.optional(
                    Schema.Literals([
                      "Drop",
                      "Count",
                      "Log",
                      "Replicate",
                      "Goto",
                      "Redirect",
                      "Mirror",
                    ]),
                  ),
                  truncate: Schema.optional(Schema.String),
                  isTimestampEnabled: Schema.optional(
                    Schema.Literals(["True", "False"]),
                  ),
                  destinationId: Schema.optional(Schema.String),
                  matchConfigurationName: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      ),
      dynamicMatchConfigurations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipGroups: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  ipAddressType: Schema.optional(
                    Schema.Literals(["IPv4", "IPv6"]),
                  ),
                  ipPrefixes: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            vlanGroups: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  vlans: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            portGroups: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  ports: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
          }),
        ),
      ),
      networkTapId: Schema.optional(Schema.String),
      networkTapIds: Schema.optional(Schema.Array(Schema.String)),
      pollingIntervalInSeconds: Schema.optional(Schema.Number),
      lastSyncedTime: Schema.optional(Schema.String),
      globalNetworkTapRuleActions: Schema.optional(
        Schema.Struct({
          enableCount: Schema.optional(Schema.Literals(["True", "False"])),
          truncate: Schema.optional(Schema.String),
        }),
      ),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      networkFabricIds: Schema.optional(Schema.Array(Schema.String)),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      administrativeState: Schema.optional(
        Schema.Literals([
          "Enabled",
          "Disabled",
          "MAT",
          "RMA",
          "UnderMaintenance",
          "EnabledDegraded",
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapRulesCreateInput>;

// Output Schema
export interface NetworkTapRulesCreateOutput {
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
export const NetworkTapRulesCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkTapRulesCreateOutput>;

// The operation
/**
 * Create Network Tap Rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapRulesCreateInput,
  outputSchema: NetworkTapRulesCreateOutput,
}));
// Input Schema
export interface NetworkTapRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapRuleName: string;
}
export const NetworkTapRulesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapRulesDeleteInput>;

// Output Schema
export type NetworkTapRulesDeleteOutput = void;
export const NetworkTapRulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkTapRulesDeleteOutput>;

// The operation
/**
 * Delete Network Tap Rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapRulesDeleteInput,
  outputSchema: NetworkTapRulesDeleteOutput,
}));
// Input Schema
export interface NetworkTapRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapRuleName: string;
}
export const NetworkTapRulesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapRulesGetInput>;

// Output Schema
export interface NetworkTapRulesGetOutput {
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
export const NetworkTapRulesGetOutput =
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
  }) as unknown as Schema.Codec<NetworkTapRulesGetOutput>;

// The operation
/**
 * Get Network Tap Rule resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapRulesGetInput,
  outputSchema: NetworkTapRulesGetOutput,
}));
// Input Schema
export interface NetworkTapRulesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NetworkTapRulesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapRulesListByResourceGroupInput>;

// Output Schema
export interface NetworkTapRulesListByResourceGroupOutput {
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
export const NetworkTapRulesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NetworkTapRulesListByResourceGroupOutput>;

// The operation
/**
 * List all the Network Tap Rule resources in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkTapRulesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapRulesListByResourceGroupInput,
    outputSchema: NetworkTapRulesListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkTapRulesListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkTapRulesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkTapRules",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapRulesListBySubscriptionInput>;

// Output Schema
export interface NetworkTapRulesListBySubscriptionOutput {
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
export const NetworkTapRulesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NetworkTapRulesListBySubscriptionOutput>;

// The operation
/**
 * List all the Network Tap Rule resources in the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkTapRulesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapRulesListBySubscriptionInput,
    outputSchema: NetworkTapRulesListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkTapRulesResyncInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapRuleName: string;
}
export const NetworkTapRulesResyncInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}/resync",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapRulesResyncInput>;

// Output Schema
export interface NetworkTapRulesResyncOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkTapRulesResyncOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkTapRulesResyncOutput>;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesResync = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapRulesResyncInput,
  outputSchema: NetworkTapRulesResyncOutput,
}));
// Input Schema
export interface NetworkTapRulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapRuleName: string;
  properties?: {
    annotation?: string;
    configurationType?: "File" | "Inline";
    tapRulesUrl?: string;
    matchConfigurations?: {
      matchConfigurationName?: string;
      sequenceNumber?: number;
      ipAddressType?: "IPv4" | "IPv6";
      matchConditions?: {
        protocolTypes?: string[];
        vlanMatchCondition?: {
          vlans?: string[];
          innerVlans?: string[];
          vlanGroupNames?: string[];
        };
        ipCondition?: {
          type?: "SourceIP" | "DestinationIP" | "Bidirectional";
          prefixType?: "Prefix" | "LongestPrefix";
          ipPrefixValues?: string[];
          ipGroupNames?: string[];
        };
      }[];
      actions?: {
        type?:
          | "Drop"
          | "Count"
          | "Log"
          | "Replicate"
          | "Goto"
          | "Redirect"
          | "Mirror";
        truncate?: string;
        isTimestampEnabled?: "True" | "False";
        destinationId?: string;
        matchConfigurationName?: string;
      }[];
    }[];
    dynamicMatchConfigurations?: {
      ipGroups?: {
        name?: string;
        ipAddressType?: "IPv4" | "IPv6";
        ipPrefixes?: string[];
      }[];
      vlanGroups?: { name?: string; vlans?: string[] }[];
      portGroups?: { name?: string; ports?: string[] }[];
    }[];
    identitySelector?: {
      identityType?: "SystemAssignedIdentity" | "UserAssignedIdentity";
      userAssignedIdentityResourceId?: string;
    };
    globalNetworkTapRuleActions?: {
      enableCount?: "True" | "False";
      truncate?: string;
    };
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const NetworkTapRulesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        annotation: Schema.optional(Schema.String),
        configurationType: Schema.optional(Schema.Literals(["File", "Inline"])),
        tapRulesUrl: Schema.optional(Schema.String),
        matchConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              matchConfigurationName: Schema.optional(Schema.String),
              sequenceNumber: Schema.optional(Schema.Number),
              ipAddressType: Schema.optional(Schema.Literals(["IPv4", "IPv6"])),
              matchConditions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    protocolTypes: Schema.optional(Schema.Array(Schema.String)),
                    vlanMatchCondition: Schema.optional(
                      Schema.Struct({
                        vlans: Schema.optional(Schema.Array(Schema.String)),
                        innerVlans: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        vlanGroupNames: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                      }),
                    ),
                    ipCondition: Schema.optional(
                      Schema.Struct({
                        type: Schema.optional(
                          Schema.Literals([
                            "SourceIP",
                            "DestinationIP",
                            "Bidirectional",
                          ]),
                        ),
                        prefixType: Schema.optional(
                          Schema.Literals(["Prefix", "LongestPrefix"]),
                        ),
                        ipPrefixValues: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        ipGroupNames: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                      }),
                    ),
                  }),
                ),
              ),
              actions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(
                      Schema.Literals([
                        "Drop",
                        "Count",
                        "Log",
                        "Replicate",
                        "Goto",
                        "Redirect",
                        "Mirror",
                      ]),
                    ),
                    truncate: Schema.optional(Schema.String),
                    isTimestampEnabled: Schema.optional(
                      Schema.Literals(["True", "False"]),
                    ),
                    destinationId: Schema.optional(Schema.String),
                    matchConfigurationName: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        dynamicMatchConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipGroups: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    ipAddressType: Schema.optional(
                      Schema.Literals(["IPv4", "IPv6"]),
                    ),
                    ipPrefixes: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              ),
              vlanGroups: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    vlans: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              ),
              portGroups: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    ports: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              ),
            }),
          ),
        ),
        identitySelector: Schema.optional(
          Schema.Struct({
            identityType: Schema.optional(
              Schema.Literals([
                "SystemAssignedIdentity",
                "UserAssignedIdentity",
              ]),
            ),
            userAssignedIdentityResourceId: Schema.optional(Schema.String),
          }),
        ),
        globalNetworkTapRuleActions: Schema.optional(
          Schema.Struct({
            enableCount: Schema.optional(Schema.Literals(["True", "False"])),
            truncate: Schema.optional(Schema.String),
          }),
        ),
      }),
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
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapRulesUpdateInput>;

// Output Schema
export interface NetworkTapRulesUpdateOutput {
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
export const NetworkTapRulesUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkTapRulesUpdateOutput>;

// The operation
/**
 * Update certain properties of the Network Tap Rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapRulesUpdateInput,
  outputSchema: NetworkTapRulesUpdateOutput,
}));
// Input Schema
export interface NetworkTapRulesUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapRuleName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const NetworkTapRulesUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapRulesUpdateAdministrativeStateInput>;

// Output Schema
export interface NetworkTapRulesUpdateAdministrativeStateOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkTapRulesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkTapRulesUpdateAdministrativeStateOutput>;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapRulesUpdateAdministrativeStateInput,
    outputSchema: NetworkTapRulesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface NetworkTapRulesValidateConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapRuleName: string;
}
export const NetworkTapRulesValidateConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}/validateConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapRulesValidateConfigurationInput>;

// Output Schema
export interface NetworkTapRulesValidateConfigurationOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const NetworkTapRulesValidateConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkTapRulesValidateConfigurationOutput>;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesValidateConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapRulesValidateConfigurationInput,
    outputSchema: NetworkTapRulesValidateConfigurationOutput,
  }));
// Input Schema
export interface NetworkTapsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapName: string;
  properties: { annotation?: string };
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkTapsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  networkTapName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    annotation: Schema.optional(Schema.String),
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
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<NetworkTapsCreateInput>;

// Output Schema
export interface NetworkTapsCreateOutput {
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
export const NetworkTapsCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkTapsCreateOutput>;

// The operation
/**
 * Creates a Network Tap.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapsCreateInput,
  outputSchema: NetworkTapsCreateOutput,
}));
// Input Schema
export interface NetworkTapsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapName: string;
}
export const NetworkTapsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  networkTapName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<NetworkTapsDeleteInput>;

// Output Schema
export type NetworkTapsDeleteOutput = void;
export const NetworkTapsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkTapsDeleteOutput>;

// The operation
/**
 * Deletes Network Tap.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapsDeleteInput,
  outputSchema: NetworkTapsDeleteOutput,
}));
// Input Schema
export interface NetworkTapsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapName: string;
}
export const NetworkTapsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  networkTapName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<NetworkTapsGetInput>;

// Output Schema
export interface NetworkTapsGetOutput {
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
export const NetworkTapsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NetworkTapsGetOutput>;

// The operation
/**
 * Retrieves details of this Network Tap.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapsGetInput,
  outputSchema: NetworkTapsGetOutput,
}));
// Input Schema
export interface NetworkTapsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NetworkTapsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapsListByResourceGroupInput>;

// Output Schema
export interface NetworkTapsListByResourceGroupOutput {
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
export const NetworkTapsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NetworkTapsListByResourceGroupOutput>;

// The operation
/**
 * Displays Network Taps list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkTapsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapsListByResourceGroupInput,
    outputSchema: NetworkTapsListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkTapsListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkTapsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkTaps",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapsListBySubscriptionInput>;

// Output Schema
export interface NetworkTapsListBySubscriptionOutput {
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
export const NetworkTapsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NetworkTapsListBySubscriptionOutput>;

// The operation
/**
 * Displays Network Taps list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkTapsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapsListBySubscriptionInput,
    outputSchema: NetworkTapsListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkTapsResyncInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapName: string;
}
export const NetworkTapsResyncInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  networkTapName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}/resync",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<NetworkTapsResyncInput>;

// Output Schema
export interface NetworkTapsResyncOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
}
export const NetworkTapsResyncOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkTapsResyncOutput>;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsResync = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapsResyncInput,
  outputSchema: NetworkTapsResyncOutput,
}));
// Input Schema
export interface NetworkTapsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapName: string;
  properties?: { annotation?: string };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
}
export const NetworkTapsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  networkTapName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      annotation: Schema.optional(Schema.String),
    }),
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
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<NetworkTapsUpdateInput>;

// Output Schema
export interface NetworkTapsUpdateOutput {
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
export const NetworkTapsUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkTapsUpdateOutput>;

// The operation
/**
 * API to update certain properties of the Network Tap resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapsUpdateInput,
  outputSchema: NetworkTapsUpdateOutput,
}));
// Input Schema
export interface NetworkTapsUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkTapName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const NetworkTapsUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkTapsUpdateAdministrativeStateInput>;

// Output Schema
export interface NetworkTapsUpdateAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const NetworkTapsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkTapsUpdateAdministrativeStateOutput>;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapsUpdateAdministrativeStateInput,
    outputSchema: NetworkTapsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface NetworkToNetworkInterconnectsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  networkToNetworkInterconnectName: string;
  properties: {
    nniType?: "CE" | "NPB";
    isManagementType?: "True" | "False";
    useOptionB: "True" | "False";
    layer2Configuration?: { mtu?: number; interfaces?: string[] };
    optionBLayer3Configuration?: {
      primaryIpv4Prefix?: string;
      primaryIpv6Prefix?: string;
      secondaryIpv4Prefix?: string;
      secondaryIpv6Prefix?: string;
    };
    npbStaticRouteConfiguration?: {
      bfdConfiguration?: {
        administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
        intervalInMilliSeconds?: number;
        multiplier?: number;
      };
      ipv4Routes?: { prefix: string; nextHop: string[] }[];
      ipv6Routes?: { prefix: string; nextHop: string[] }[];
    };
    staticRouteConfiguration?: {
      bfdConfiguration?: {
        administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
        intervalInMilliSeconds?: number;
        multiplier?: number;
      };
      ipv4Routes?: { prefix: string; nextHop: string[] }[];
      ipv6Routes?: { prefix: string; nextHop: string[] }[];
    };
    importRoutePolicy?: {
      importIpv4RoutePolicyId?: string;
      importIpv6RoutePolicyId?: string;
    };
    exportRoutePolicy?: {
      exportIpv4RoutePolicyId?: string;
      exportIpv6RoutePolicyId?: string;
    };
    egressAclId?: string;
    ingressAclId?: string;
    microBfdState?: "Enabled" | "Disabled";
    conditionalDefaultRouteConfiguration?: {
      ipv4Routes?: { prefix: string; nextHop: string[] }[];
      ipv6Routes?: { prefix: string; nextHop: string[] }[];
    };
    lastOperation?: { details?: string };
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
  };
}
export const NetworkToNetworkInterconnectsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      nniType: Schema.optional(Schema.Literals(["CE", "NPB"])),
      isManagementType: Schema.optional(Schema.Literals(["True", "False"])),
      useOptionB: Schema.Literals(["True", "False"]),
      layer2Configuration: Schema.optional(
        Schema.Struct({
          mtu: Schema.optional(Schema.Number),
          interfaces: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      optionBLayer3Configuration: Schema.optional(
        Schema.Struct({
          primaryIpv4Prefix: Schema.optional(Schema.String),
          primaryIpv6Prefix: Schema.optional(Schema.String),
          secondaryIpv4Prefix: Schema.optional(Schema.String),
          secondaryIpv6Prefix: Schema.optional(Schema.String),
        }),
      ),
      npbStaticRouteConfiguration: Schema.optional(
        Schema.Struct({
          bfdConfiguration: Schema.optional(
            Schema.Struct({
              administrativeState: Schema.optional(
                Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
              ),
              intervalInMilliSeconds: Schema.optional(Schema.Number),
              multiplier: Schema.optional(Schema.Number),
            }),
          ),
          ipv4Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
                nextHop: Schema.Array(Schema.String),
              }),
            ),
          ),
          ipv6Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
                nextHop: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
      staticRouteConfiguration: Schema.optional(
        Schema.Struct({
          bfdConfiguration: Schema.optional(
            Schema.Struct({
              administrativeState: Schema.optional(
                Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
              ),
              intervalInMilliSeconds: Schema.optional(Schema.Number),
              multiplier: Schema.optional(Schema.Number),
            }),
          ),
          ipv4Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
                nextHop: Schema.Array(Schema.String),
              }),
            ),
          ),
          ipv6Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
                nextHop: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
      importRoutePolicy: Schema.optional(
        Schema.Struct({
          importIpv4RoutePolicyId: Schema.optional(Schema.String),
          importIpv6RoutePolicyId: Schema.optional(Schema.String),
        }),
      ),
      exportRoutePolicy: Schema.optional(
        Schema.Struct({
          exportIpv4RoutePolicyId: Schema.optional(Schema.String),
          exportIpv6RoutePolicyId: Schema.optional(Schema.String),
        }),
      ),
      egressAclId: Schema.optional(Schema.String),
      ingressAclId: Schema.optional(Schema.String),
      microBfdState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      conditionalDefaultRouteConfiguration: Schema.optional(
        Schema.Struct({
          ipv4Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
                nextHop: Schema.Array(Schema.String),
              }),
            ),
          ),
          ipv6Routes: Schema.optional(
            Schema.Array(
              Schema.Struct({
                prefix: Schema.String,
                nextHop: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      administrativeState: Schema.optional(
        Schema.Literals([
          "Enabled",
          "Disabled",
          "MAT",
          "RMA",
          "UnderMaintenance",
          "EnabledDegraded",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkToNetworkInterconnectsCreateInput>;

// Output Schema
export interface NetworkToNetworkInterconnectsCreateOutput {
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
export const NetworkToNetworkInterconnectsCreateOutput =
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
  }) as unknown as Schema.Codec<NetworkToNetworkInterconnectsCreateOutput>;

// The operation
/**
 * Configuration used to setup CE-PE connectivity PUT Method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsCreateInput,
    outputSchema: NetworkToNetworkInterconnectsCreateOutput,
  }));
// Input Schema
export interface NetworkToNetworkInterconnectsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  networkToNetworkInterconnectName: string;
}
export const NetworkToNetworkInterconnectsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkToNetworkInterconnectsDeleteInput>;

// Output Schema
export type NetworkToNetworkInterconnectsDeleteOutput = void;
export const NetworkToNetworkInterconnectsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkToNetworkInterconnectsDeleteOutput>;

// The operation
/**
 * Implements NetworkToNetworkInterconnects DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsDeleteInput,
    outputSchema: NetworkToNetworkInterconnectsDeleteOutput,
  }));
// Input Schema
export interface NetworkToNetworkInterconnectsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  networkToNetworkInterconnectName: string;
}
export const NetworkToNetworkInterconnectsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkToNetworkInterconnectsGetInput>;

// Output Schema
export interface NetworkToNetworkInterconnectsGetOutput {
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
export const NetworkToNetworkInterconnectsGetOutput =
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
  }) as unknown as Schema.Codec<NetworkToNetworkInterconnectsGetOutput>;

// The operation
/**
 * Implements NetworkToNetworkInterconnects GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsGetInput,
    outputSchema: NetworkToNetworkInterconnectsGetOutput,
  }));
// Input Schema
export interface NetworkToNetworkInterconnectsListByNetworkFabricInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
}
export const NetworkToNetworkInterconnectsListByNetworkFabricInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkToNetworkInterconnectsListByNetworkFabricInput>;

// Output Schema
export interface NetworkToNetworkInterconnectsListByNetworkFabricOutput {
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
export const NetworkToNetworkInterconnectsListByNetworkFabricOutput =
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
  }) as unknown as Schema.Codec<NetworkToNetworkInterconnectsListByNetworkFabricOutput>;

// The operation
/**
 * Implements Network To Network Interconnects list by Network Fabric GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkToNetworkInterconnectsListByNetworkFabric =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsListByNetworkFabricInput,
    outputSchema: NetworkToNetworkInterconnectsListByNetworkFabricOutput,
  }));
// Input Schema
export interface NetworkToNetworkInterconnectsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  networkToNetworkInterconnectName: string;
  properties?: {
    layer2Configuration?: { mtu?: number; interfaces?: string[] };
    optionBLayer3Configuration?: {
      primaryIpv4Prefix?: string;
      primaryIpv6Prefix?: string;
      secondaryIpv4Prefix?: string;
      secondaryIpv6Prefix?: string;
    };
    npbStaticRouteConfiguration?: {
      bfdConfiguration?: {
        administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
        intervalInMilliSeconds?: number;
        multiplier?: number;
      };
      ipv4Routes?: { prefix: string; nextHop: string[] }[];
      ipv6Routes?: { prefix: string; nextHop: string[] }[];
    };
    staticRouteConfiguration?: {
      bfdConfiguration?: {
        administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
        intervalInMilliSeconds?: number;
        multiplier?: number;
      };
      ipv4Routes?: { prefix: string; nextHop: string[] }[];
      ipv6Routes?: { prefix: string; nextHop: string[] }[];
    };
    importRoutePolicy?: {
      importIpv4RoutePolicyId?: string;
      importIpv6RoutePolicyId?: string;
    };
    exportRoutePolicy?: {
      exportIpv4RoutePolicyId?: string;
      exportIpv6RoutePolicyId?: string;
    };
    egressAclId?: string;
    ingressAclId?: string;
    microBfdState?: "Enabled" | "Disabled";
  };
  id?: string;
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
export const NetworkToNetworkInterconnectsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        layer2Configuration: Schema.optional(
          Schema.Struct({
            mtu: Schema.optional(Schema.Number),
            interfaces: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        optionBLayer3Configuration: Schema.optional(
          Schema.Struct({
            primaryIpv4Prefix: Schema.optional(Schema.String),
            primaryIpv6Prefix: Schema.optional(Schema.String),
            secondaryIpv4Prefix: Schema.optional(Schema.String),
            secondaryIpv6Prefix: Schema.optional(Schema.String),
          }),
        ),
        npbStaticRouteConfiguration: Schema.optional(
          Schema.Struct({
            bfdConfiguration: Schema.optional(
              Schema.Struct({
                administrativeState: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
                ),
                intervalInMilliSeconds: Schema.optional(Schema.Number),
                multiplier: Schema.optional(Schema.Number),
              }),
            ),
            ipv4Routes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  prefix: Schema.String,
                  nextHop: Schema.Array(Schema.String),
                }),
              ),
            ),
            ipv6Routes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  prefix: Schema.String,
                  nextHop: Schema.Array(Schema.String),
                }),
              ),
            ),
          }),
        ),
        staticRouteConfiguration: Schema.optional(
          Schema.Struct({
            bfdConfiguration: Schema.optional(
              Schema.Struct({
                administrativeState: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
                ),
                intervalInMilliSeconds: Schema.optional(Schema.Number),
                multiplier: Schema.optional(Schema.Number),
              }),
            ),
            ipv4Routes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  prefix: Schema.String,
                  nextHop: Schema.Array(Schema.String),
                }),
              ),
            ),
            ipv6Routes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  prefix: Schema.String,
                  nextHop: Schema.Array(Schema.String),
                }),
              ),
            ),
          }),
        ),
        importRoutePolicy: Schema.optional(
          Schema.Struct({
            importIpv4RoutePolicyId: Schema.optional(Schema.String),
            importIpv6RoutePolicyId: Schema.optional(Schema.String),
          }),
        ),
        exportRoutePolicy: Schema.optional(
          Schema.Struct({
            exportIpv4RoutePolicyId: Schema.optional(Schema.String),
            exportIpv6RoutePolicyId: Schema.optional(Schema.String),
          }),
        ),
        egressAclId: Schema.optional(Schema.String),
        ingressAclId: Schema.optional(Schema.String),
        microBfdState: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkToNetworkInterconnectsUpdateInput>;

// Output Schema
export interface NetworkToNetworkInterconnectsUpdateOutput {
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
export const NetworkToNetworkInterconnectsUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkToNetworkInterconnectsUpdateOutput>;

// The operation
/**
 * Update certain properties of the Network To NetworkInterconnects resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsUpdateInput,
    outputSchema: NetworkToNetworkInterconnectsUpdateOutput,
  }));
// Input Schema
export interface NetworkToNetworkInterconnectsUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  networkToNetworkInterconnectName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const NetworkToNetworkInterconnectsUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkToNetworkInterconnectsUpdateAdministrativeStateInput>;

// Output Schema
export interface NetworkToNetworkInterconnectsUpdateAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const NetworkToNetworkInterconnectsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkToNetworkInterconnectsUpdateAdministrativeStateOutput>;

// The operation
/**
 * Updates the Admin State.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsUpdateAdministrativeStateInput,
    outputSchema: NetworkToNetworkInterconnectsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  networkToNetworkInterconnectName: string;
  routeType?: "Static" | "OptionA";
  administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
}
export const NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    routeType: Schema.optional(Schema.Literals(["Static", "OptionA"])),
    administrativeState: Schema.optional(
      Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}/updateBfdAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateInput>;

// Output Schema
export interface NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: {
    routeType?: "Static" | "OptionA";
    administrativeState?: "Enabled" | "Disabled" | "MAT" | "RMA";
  };
}
export const NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        routeType: Schema.optional(Schema.Literals(["Static", "OptionA"])),
        administrativeState: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateOutput>;

// The operation
/**
 * Updates the Admin State.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsUpdateBfdAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateInput,
    outputSchema:
      NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateOutput,
  }));
// Input Schema
export interface NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkFabricName: string;
  networkToNetworkInterconnectName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}/updateNpbStaticRouteBfdAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateInput>;

// Output Schema
export interface NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOutput>;

// The operation
/**
 * Updates the NPB Static Route BFD Administrative State.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateInput,
    outputSchema:
      NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ManagedNetworkFabric/operations",
    apiVersion: "2025-07-15",
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface RoutePoliciesCommitConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  routePolicyName: string;
}
export const RoutePoliciesCommitConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}/commitConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<RoutePoliciesCommitConfigurationInput>;

// Output Schema
export interface RoutePoliciesCommitConfigurationOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const RoutePoliciesCommitConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<RoutePoliciesCommitConfigurationOutput>;

// The operation
/**
 * Commits the configuration of the given resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesCommitConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RoutePoliciesCommitConfigurationInput,
    outputSchema: RoutePoliciesCommitConfigurationOutput,
  }));
// Input Schema
export interface RoutePoliciesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  routePolicyName: string;
  properties: {
    annotation?: string;
    defaultAction?: "Permit" | "Deny";
    statements: { annotation?: string }[];
    networkFabricId: string;
    addressFamilyType?: "IPv4" | "IPv6";
    lastOperation?: { details?: string };
    configurationState?:
      | "Succeeded"
      | "Failed"
      | "Rejected"
      | "Accepted"
      | "Provisioned"
      | "ErrorProvisioning"
      | "Deprovisioning"
      | "Deprovisioned"
      | "ErrorDeprovisioning"
      | "DeferredControl"
      | "Provisioning"
      | "PendingCommit"
      | "PendingAdministrativeUpdate";
    provisioningState?:
      | "Accepted"
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    administrativeState?:
      | "Enabled"
      | "Disabled"
      | "MAT"
      | "RMA"
      | "UnderMaintenance"
      | "EnabledDegraded";
  };
  tags?: Record<string, string>;
  location: string;
}
export const RoutePoliciesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      annotation: Schema.optional(Schema.String),
      defaultAction: Schema.optional(Schema.Literals(["Permit", "Deny"])),
      statements: Schema.Array(
        Schema.Struct({
          annotation: Schema.optional(Schema.String),
        }),
      ),
      networkFabricId: Schema.String,
      addressFamilyType: Schema.optional(Schema.Literals(["IPv4", "IPv6"])),
      lastOperation: Schema.optional(
        Schema.Struct({
          details: Schema.optional(Schema.String),
        }),
      ),
      configurationState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Rejected",
          "Accepted",
          "Provisioned",
          "ErrorProvisioning",
          "Deprovisioning",
          "Deprovisioned",
          "ErrorDeprovisioning",
          "DeferredControl",
          "Provisioning",
          "PendingCommit",
          "PendingAdministrativeUpdate",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Succeeded",
          "Updating",
          "Deleting",
          "Failed",
          "Canceled",
        ]),
      ),
      administrativeState: Schema.optional(
        Schema.Literals([
          "Enabled",
          "Disabled",
          "MAT",
          "RMA",
          "UnderMaintenance",
          "EnabledDegraded",
        ]),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<RoutePoliciesCreateInput>;

// Output Schema
export interface RoutePoliciesCreateOutput {
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
export const RoutePoliciesCreateOutput =
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
  }) as unknown as Schema.Codec<RoutePoliciesCreateOutput>;

// The operation
/**
 * Implements Route Policy PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoutePoliciesCreateInput,
  outputSchema: RoutePoliciesCreateOutput,
}));
// Input Schema
export interface RoutePoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  routePolicyName: string;
}
export const RoutePoliciesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<RoutePoliciesDeleteInput>;

// Output Schema
export type RoutePoliciesDeleteOutput = void;
export const RoutePoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RoutePoliciesDeleteOutput>;

// The operation
/**
 * Implements Route Policy DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoutePoliciesDeleteInput,
  outputSchema: RoutePoliciesDeleteOutput,
}));
// Input Schema
export interface RoutePoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  routePolicyName: string;
}
export const RoutePoliciesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  routePolicyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}",
    apiVersion: "2025-07-15",
  }),
) as unknown as Schema.Codec<RoutePoliciesGetInput>;

// Output Schema
export interface RoutePoliciesGetOutput {
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
export const RoutePoliciesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RoutePoliciesGetOutput>;

// The operation
/**
 * Implements Route Policy GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoutePoliciesGetInput,
  outputSchema: RoutePoliciesGetOutput,
}));
// Input Schema
export interface RoutePoliciesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const RoutePoliciesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<RoutePoliciesListByResourceGroupInput>;

// Output Schema
export interface RoutePoliciesListByResourceGroupOutput {
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
export const RoutePoliciesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<RoutePoliciesListByResourceGroupOutput>;

// The operation
/**
 * Implements RoutePolicies list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const RoutePoliciesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RoutePoliciesListByResourceGroupInput,
    outputSchema: RoutePoliciesListByResourceGroupOutput,
  }));
// Input Schema
export interface RoutePoliciesListBySubscriptionInput {
  subscriptionId: string;
}
export const RoutePoliciesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/routePolicies",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<RoutePoliciesListBySubscriptionInput>;

// Output Schema
export interface RoutePoliciesListBySubscriptionOutput {
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
export const RoutePoliciesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<RoutePoliciesListBySubscriptionOutput>;

// The operation
/**
 * Implements RoutePolicies list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RoutePoliciesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RoutePoliciesListBySubscriptionInput,
    outputSchema: RoutePoliciesListBySubscriptionOutput,
  }));
// Input Schema
export interface RoutePoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  routePolicyName: string;
  properties?: {
    defaultAction?: "Permit" | "Deny";
    statements?: { annotation?: string }[];
  };
  tags?: Record<string, string>;
}
export const RoutePoliciesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        defaultAction: Schema.optional(Schema.Literals(["Permit", "Deny"])),
        statements: Schema.optional(
          Schema.Array(
            Schema.Struct({
              annotation: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<RoutePoliciesUpdateInput>;

// Output Schema
export interface RoutePoliciesUpdateOutput {
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
export const RoutePoliciesUpdateOutput =
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
  }) as unknown as Schema.Codec<RoutePoliciesUpdateOutput>;

// The operation
/**
 * API to update certain properties of the Route Policy resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoutePoliciesUpdateInput,
  outputSchema: RoutePoliciesUpdateOutput,
}));
// Input Schema
export interface RoutePoliciesUpdateAdministrativeStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  routePolicyName: string;
  state?: "Enable" | "Disable" | "UnderMaintenance";
  resourceIds?: string[];
}
export const RoutePoliciesUpdateAdministrativeStateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(
      Schema.Literals(["Enable", "Disable", "UnderMaintenance"]),
    ),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}/updateAdministrativeState",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<RoutePoliciesUpdateAdministrativeStateInput>;

// Output Schema
export interface RoutePoliciesUpdateAdministrativeStateOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: {
      id?: string;
      resourceId?: string;
      name?: string;
      status: string;
      percentComplete?: number;
      startTime?: string;
      endTime?: string;
      operations?: unknown[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    }[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
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
  resourceId?: string;
  properties?: { successfulResources?: string[]; failedResources?: string[] };
}
export const RoutePoliciesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                resourceId: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                status: Schema.String,
                percentComplete: Schema.optional(Schema.Number),
                startTime: Schema.optional(Schema.String),
                endTime: Schema.optional(Schema.String),
                operations: Schema.optional(Schema.Array(Schema.Unknown)),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }) as unknown as Schema.Codec<RoutePoliciesUpdateAdministrativeStateOutput>;

// The operation
/**
 * Updated the admin state for this Route Policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesUpdateAdministrativeState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RoutePoliciesUpdateAdministrativeStateInput,
    outputSchema: RoutePoliciesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export interface RoutePoliciesValidateConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  routePolicyName: string;
}
export const RoutePoliciesValidateConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}/validateConfiguration",
      apiVersion: "2025-07-15",
    }),
  ) as unknown as Schema.Codec<RoutePoliciesValidateConfigurationInput>;

// Output Schema
export interface RoutePoliciesValidateConfigurationOutput {
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const RoutePoliciesValidateConfigurationOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<RoutePoliciesValidateConfigurationOutput>;

// The operation
/**
 * Validates the configuration of the resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesValidateConfiguration =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RoutePoliciesValidateConfigurationInput,
    outputSchema: RoutePoliciesValidateConfigurationOutput,
  }));
