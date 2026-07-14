/**
 * Azure Peering API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CdnPeeringPrefixesListInput {
  subscriptionId: string;
  peeringLocation: string;
}
export const CdnPeeringPrefixesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    peeringLocation: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/cdnPeeringPrefixes",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<CdnPeeringPrefixesListInput>;

// Output Schema
export interface CdnPeeringPrefixesListOutput {
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
export const CdnPeeringPrefixesListOutput =
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
  }) as unknown as Schema.Codec<CdnPeeringPrefixesListOutput>;

// The operation
/**
 * Lists all of the advertised prefixes for the specified peering location
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param peeringLocation - The peering location.
 */
export const CdnPeeringPrefixesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CdnPeeringPrefixesListInput,
  outputSchema: CdnPeeringPrefixesListOutput,
}));
// Input Schema
export interface CheckServiceProviderAvailabilityInput {
  subscriptionId: string;
  peeringServiceLocation?: string;
  peeringServiceProvider?: string;
}
export const CheckServiceProviderAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    peeringServiceLocation: Schema.optional(Schema.String),
    peeringServiceProvider: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/checkServiceProviderAvailability",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<CheckServiceProviderAvailabilityInput>;

// Output Schema
export type CheckServiceProviderAvailabilityOutput =
  | "Available"
  | "Unavailable";
export const CheckServiceProviderAvailabilityOutput =
  /*@__PURE__*/ Schema.Literals([
    "Available",
    "Unavailable",
  ]) as unknown as Schema.Codec<CheckServiceProviderAvailabilityOutput>;

// The operation
/**
 * Checks if the peering service provider is present within 1000 miles of customer's location
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CheckServiceProviderAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CheckServiceProviderAvailabilityInput,
    outputSchema: CheckServiceProviderAvailabilityOutput,
  }));
// Input Schema
export interface ConnectionMonitorTestsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
  connectionMonitorTestName: string;
  properties?: {
    sourceAgent?: string;
    destination?: string;
    destinationPort?: number;
    testFrequencyInSec?: number;
    isTestSuccessful?: boolean;
    path?: string[];
    provisioningState?:
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
  };
}
export const ConnectionMonitorTestsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
    connectionMonitorTestName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sourceAgent: Schema.optional(Schema.String),
        destination: Schema.optional(Schema.String),
        destinationPort: Schema.optional(Schema.Number),
        testFrequencyInSec: Schema.optional(Schema.Number),
        isTestSuccessful: Schema.optional(Schema.Boolean),
        path: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Updating",
            "Deleting",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/connectionMonitorTests/{connectionMonitorTestName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ConnectionMonitorTestsCreateOrUpdateInput>;

// Output Schema
export interface ConnectionMonitorTestsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ConnectionMonitorTestsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConnectionMonitorTestsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a connection monitor test with the specified name under the given subscription, resource group and peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 * @param connectionMonitorTestName - The name of the connection monitor test
 */
export const ConnectionMonitorTestsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectionMonitorTestsCreateOrUpdateInput,
    outputSchema: ConnectionMonitorTestsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConnectionMonitorTestsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
  connectionMonitorTestName: string;
}
export const ConnectionMonitorTestsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
    connectionMonitorTestName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/connectionMonitorTests/{connectionMonitorTestName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ConnectionMonitorTestsDeleteInput>;

// Output Schema
export type ConnectionMonitorTestsDeleteOutput = void;
export const ConnectionMonitorTestsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConnectionMonitorTestsDeleteOutput>;

// The operation
/**
 * Deletes an existing connection monitor test with the specified name under the given subscription, resource group and peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 * @param connectionMonitorTestName - The name of the connection monitor test
 */
export const ConnectionMonitorTestsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectionMonitorTestsDeleteInput,
    outputSchema: ConnectionMonitorTestsDeleteOutput,
  }));
// Input Schema
export interface ConnectionMonitorTestsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
  connectionMonitorTestName: string;
}
export const ConnectionMonitorTestsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
    connectionMonitorTestName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/connectionMonitorTests/{connectionMonitorTestName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ConnectionMonitorTestsGetInput>;

// Output Schema
export interface ConnectionMonitorTestsGetOutput {
  id?: string;
  name?: string;
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
export const ConnectionMonitorTestsGetOutput =
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
  }) as unknown as Schema.Codec<ConnectionMonitorTestsGetOutput>;

// The operation
/**
 * Gets an existing connection monitor test with the specified name under the given subscription, resource group and peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 * @param connectionMonitorTestName - The name of the connection monitor test
 */
export const ConnectionMonitorTestsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConnectionMonitorTestsGetInput,
  outputSchema: ConnectionMonitorTestsGetOutput,
}));
// Input Schema
export interface ConnectionMonitorTestsListByPeeringServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
}
export const ConnectionMonitorTestsListByPeeringServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/connectionMonitorTests",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ConnectionMonitorTestsListByPeeringServiceInput>;

// Output Schema
export interface ConnectionMonitorTestsListByPeeringServiceOutput {
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
export const ConnectionMonitorTestsListByPeeringServiceOutput =
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
  }) as unknown as Schema.Codec<ConnectionMonitorTestsListByPeeringServiceOutput>;

// The operation
/**
 * Lists all connection monitor tests under the given subscription, resource group and peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 */
export const ConnectionMonitorTestsListByPeeringService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConnectionMonitorTestsListByPeeringServiceInput,
    outputSchema: ConnectionMonitorTestsListByPeeringServiceOutput,
  }));
// Input Schema
export interface LegacyPeeringsListInput {
  subscriptionId: string;
  peeringLocation: string;
  kind: "Direct" | "Exchange";
  asn?: number;
  directPeeringType?:
    | "Edge"
    | "Transit"
    | "Cdn"
    | "Internal"
    | "Ix"
    | "IxRs"
    | "Voice"
    | "EdgeZoneForOperators"
    | "PeerProp";
}
export const LegacyPeeringsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    peeringLocation: Schema.String,
    kind: Schema.Literals(["Direct", "Exchange"]),
    asn: Schema.optional(Schema.Number),
    directPeeringType: Schema.optional(
      Schema.Literals([
        "Edge",
        "Transit",
        "Cdn",
        "Internal",
        "Ix",
        "IxRs",
        "Voice",
        "EdgeZoneForOperators",
        "PeerProp",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/legacyPeerings",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<LegacyPeeringsListInput>;

// Output Schema
export interface LegacyPeeringsListOutput {
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
export const LegacyPeeringsListOutput =
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
  }) as unknown as Schema.Codec<LegacyPeeringsListOutput>;

// The operation
/**
 * Lists all of the legacy peerings under the given subscription matching the specified kind and location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param peeringLocation - The location of the peering.
 * @param kind - The kind of the peering.
 * @param asn - The ASN number associated with a legacy peering.
 * @param directPeeringType - The direct peering type.
 */
export const LegacyPeeringsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: LegacyPeeringsListInput,
  outputSchema: LegacyPeeringsListOutput,
}));
// Input Schema
export interface LookingGlassInvokeInput {
  subscriptionId: string;
  command: "Traceroute" | "Ping" | "BgpRoute";
  sourceType: "EdgeSite" | "AzureRegion";
  sourceLocation: string;
  destinationIP: string;
}
export const LookingGlassInvokeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    command: Schema.Literals(["Traceroute", "Ping", "BgpRoute"]),
    sourceType: Schema.Literals(["EdgeSite", "AzureRegion"]),
    sourceLocation: Schema.String,
    destinationIP: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/lookingGlass",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<LookingGlassInvokeInput>;

// Output Schema
export interface LookingGlassInvokeOutput {
  command?: "Traceroute" | "Ping" | "BgpRoute";
  output?: string;
}
export const LookingGlassInvokeOutput =
  /*@__PURE__*/ Schema.Struct({
    command: Schema.optional(
      Schema.Literals(["Traceroute", "Ping", "BgpRoute"]),
    ),
    output: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LookingGlassInvokeOutput>;

// The operation
/**
 * Run looking glass functionality
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param command - The command to be executed: ping, traceroute, bgpRoute.
 * @param sourceType - The type of the source: Edge site or Azure Region.
 * @param sourceLocation - The location of the source.
 * @param destinationIP - The IP address of the destination.
 */
export const LookingGlassInvoke = /*@__PURE__*/ API.make(() => ({
  inputSchema: LookingGlassInvokeInput,
  outputSchema: LookingGlassInvokeOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Peering/operations",
    apiVersion: "2025-05-01",
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
    isDataAction?: boolean;
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          supportedTimeGrainTypes?: string[];
          dimensions?: { name?: string; displayName?: string }[];
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
        isDataAction: Schema.optional(Schema.Boolean),
        properties: Schema.optional(
          Schema.Struct({
            serviceSpecification: Schema.optional(
              Schema.Struct({
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      aggregationType: Schema.optional(Schema.String),
                      supportedTimeGrainTypes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
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
export interface PeerAsnsCreateOrUpdateInput {
  subscriptionId: string;
  peerAsnName: string;
  properties?: {
    peerAsn?: number;
    peerContactDetail?: {
      role?:
        | "Noc"
        | "Policy"
        | "Technical"
        | "Service"
        | "Escalation"
        | "Other";
      email?: string;
      phone?: string;
    }[];
    peerName?: string;
    validationState?: "None" | "Pending" | "Approved" | "Failed";
    errorMessage?: string;
  };
}
export const PeerAsnsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    peerAsnName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        peerAsn: Schema.optional(Schema.Number),
        peerContactDetail: Schema.optional(
          Schema.Array(
            Schema.Struct({
              role: Schema.optional(
                Schema.Literals([
                  "Noc",
                  "Policy",
                  "Technical",
                  "Service",
                  "Escalation",
                  "Other",
                ]),
              ),
              email: Schema.optional(Schema.String),
              phone: Schema.optional(Schema.String),
            }),
          ),
        ),
        peerName: Schema.optional(Schema.String),
        validationState: Schema.optional(
          Schema.Literals(["None", "Pending", "Approved", "Failed"]),
        ),
        errorMessage: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns/{peerAsnName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeerAsnsCreateOrUpdateInput>;

// Output Schema
export interface PeerAsnsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const PeerAsnsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PeerAsnsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new peer ASN or updates an existing peer ASN with the specified name under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param peerAsnName - The peer ASN name.
 */
export const PeerAsnsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeerAsnsCreateOrUpdateInput,
  outputSchema: PeerAsnsCreateOrUpdateOutput,
}));
// Input Schema
export interface PeerAsnsDeleteInput {
  subscriptionId: string;
  peerAsnName: string;
}
export const PeerAsnsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  peerAsnName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns/{peerAsnName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<PeerAsnsDeleteInput>;

// Output Schema
export type PeerAsnsDeleteOutput = void;
export const PeerAsnsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PeerAsnsDeleteOutput>;

// The operation
/**
 * Deletes an existing peer ASN with the specified name under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param peerAsnName - The peer ASN name.
 */
export const PeerAsnsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeerAsnsDeleteInput,
  outputSchema: PeerAsnsDeleteOutput,
}));
// Input Schema
export interface PeerAsnsGetInput {
  subscriptionId: string;
  peerAsnName: string;
}
export const PeerAsnsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  peerAsnName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns/{peerAsnName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<PeerAsnsGetInput>;

// Output Schema
export interface PeerAsnsGetOutput {
  id?: string;
  name?: string;
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
export const PeerAsnsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PeerAsnsGetOutput>;

// The operation
/**
 * Gets the peer ASN with the specified name under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param peerAsnName - The peer ASN name.
 */
export const PeerAsnsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeerAsnsGetInput,
  outputSchema: PeerAsnsGetOutput,
}));
// Input Schema
export interface PeerAsnsListBySubscriptionInput {
  subscriptionId: string;
}
export const PeerAsnsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeerAsnsListBySubscriptionInput>;

// Output Schema
export interface PeerAsnsListBySubscriptionOutput {
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
export const PeerAsnsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<PeerAsnsListBySubscriptionOutput>;

// The operation
/**
 * Lists all of the peer ASNs under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeerAsnsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeerAsnsListBySubscriptionInput,
  outputSchema: PeerAsnsListBySubscriptionOutput,
}));
// Input Schema
export interface PeeringLocationsListInput {
  subscriptionId: string;
  kind: "Direct" | "Exchange";
  directPeeringType?:
    | "Edge"
    | "Transit"
    | "Cdn"
    | "Internal"
    | "Ix"
    | "IxRs"
    | "Voice"
    | "EdgeZoneForOperators"
    | "PeerProp";
}
export const PeeringLocationsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["Direct", "Exchange"]),
    directPeeringType: Schema.optional(
      Schema.Literals([
        "Edge",
        "Transit",
        "Cdn",
        "Internal",
        "Ix",
        "IxRs",
        "Voice",
        "EdgeZoneForOperators",
        "PeerProp",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringLocations",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringLocationsListInput>;

// Output Schema
export interface PeeringLocationsListOutput {
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
export const PeeringLocationsListOutput =
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
  }) as unknown as Schema.Codec<PeeringLocationsListOutput>;

// The operation
/**
 * Lists all of the available peering locations for the specified kind of peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param kind - The kind of the peering.
 * @param directPeeringType - The type of direct peering.
 */
export const PeeringLocationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringLocationsListInput,
  outputSchema: PeeringLocationsListOutput,
}));
// Input Schema
export interface PeeringsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
  properties?: {
    direct?: {
      connections?: {
        bandwidthInMbps?: number;
        provisionedBandwidthInMbps?: number;
        sessionAddressProvider?: "Microsoft" | "Peer";
        useForPeeringService?: boolean;
        microsoftTrackingId?: string;
        peeringDBFacilityId?: number;
        connectionState?:
          | "None"
          | "PendingApproval"
          | "Approved"
          | "ProvisioningStarted"
          | "ProvisioningFailed"
          | "ProvisioningCompleted"
          | "Validating"
          | "Active"
          | "TypeChangeRequested"
          | "TypeChangeInProgress"
          | "ExternalBlocker";
        bgpSession?: {
          sessionPrefixV4?: string;
          sessionPrefixV6?: string;
          microsoftSessionIPv4Address?: string;
          microsoftSessionIPv6Address?: string;
          peerSessionIPv4Address?: string;
          peerSessionIPv6Address?: string;
          sessionStateV4?:
            | "None"
            | "Idle"
            | "Connect"
            | "Active"
            | "OpenSent"
            | "OpenConfirm"
            | "OpenReceived"
            | "Established"
            | "PendingAdd"
            | "PendingUpdate"
            | "PendingRemove";
          sessionStateV6?:
            | "None"
            | "Idle"
            | "Connect"
            | "Active"
            | "OpenSent"
            | "OpenConfirm"
            | "OpenReceived"
            | "Established"
            | "PendingAdd"
            | "PendingUpdate"
            | "PendingRemove";
          maxPrefixesAdvertisedV4?: number;
          maxPrefixesAdvertisedV6?: number;
          md5AuthenticationKey?: string;
        };
        connectionIdentifier?: string;
        errorMessage?: string;
      }[];
      useForPeeringService?: boolean;
      peerAsn?: { id?: string };
      directPeeringType?:
        | "Edge"
        | "Transit"
        | "Cdn"
        | "Internal"
        | "Ix"
        | "IxRs"
        | "Voice"
        | "EdgeZoneForOperators"
        | "PeerProp";
    };
    exchange?: {
      connections?: {
        peeringDBFacilityId?: number;
        connectionState?:
          | "None"
          | "PendingApproval"
          | "Approved"
          | "ProvisioningStarted"
          | "ProvisioningFailed"
          | "ProvisioningCompleted"
          | "Validating"
          | "Active"
          | "TypeChangeRequested"
          | "TypeChangeInProgress"
          | "ExternalBlocker";
        bgpSession?: {
          sessionPrefixV4?: string;
          sessionPrefixV6?: string;
          microsoftSessionIPv4Address?: string;
          microsoftSessionIPv6Address?: string;
          peerSessionIPv4Address?: string;
          peerSessionIPv6Address?: string;
          sessionStateV4?:
            | "None"
            | "Idle"
            | "Connect"
            | "Active"
            | "OpenSent"
            | "OpenConfirm"
            | "OpenReceived"
            | "Established"
            | "PendingAdd"
            | "PendingUpdate"
            | "PendingRemove";
          sessionStateV6?:
            | "None"
            | "Idle"
            | "Connect"
            | "Active"
            | "OpenSent"
            | "OpenConfirm"
            | "OpenReceived"
            | "Established"
            | "PendingAdd"
            | "PendingUpdate"
            | "PendingRemove";
          maxPrefixesAdvertisedV4?: number;
          maxPrefixesAdvertisedV6?: number;
          md5AuthenticationKey?: string;
        };
        connectionIdentifier?: string;
        errorMessage?: string;
      }[];
      peerAsn?: { id?: string };
    };
    connectivityProbes?: {
      endpoint?: string;
      azureRegion?: string;
      protocol?: "None" | "ICMP" | "TCP";
      prefixesToAccesslist?: string[];
    }[];
    peeringLocation?: string;
    provisioningState?:
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
  };
  sku: {
    name?: string;
    tier?: "Basic" | "Premium";
    family?: "Direct" | "Exchange";
    size?: "Free" | "Metered" | "Unlimited";
  };
  kind: "Direct" | "Exchange";
  tags?: Record<string, string>;
  location: string;
}
export const PeeringsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        direct: Schema.optional(
          Schema.Struct({
            connections: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  bandwidthInMbps: Schema.optional(Schema.Number),
                  provisionedBandwidthInMbps: Schema.optional(Schema.Number),
                  sessionAddressProvider: Schema.optional(
                    Schema.Literals(["Microsoft", "Peer"]),
                  ),
                  useForPeeringService: Schema.optional(Schema.Boolean),
                  microsoftTrackingId: Schema.optional(Schema.String),
                  peeringDBFacilityId: Schema.optional(Schema.Number),
                  connectionState: Schema.optional(
                    Schema.Literals([
                      "None",
                      "PendingApproval",
                      "Approved",
                      "ProvisioningStarted",
                      "ProvisioningFailed",
                      "ProvisioningCompleted",
                      "Validating",
                      "Active",
                      "TypeChangeRequested",
                      "TypeChangeInProgress",
                      "ExternalBlocker",
                    ]),
                  ),
                  bgpSession: Schema.optional(
                    Schema.Struct({
                      sessionPrefixV4: Schema.optional(Schema.String),
                      sessionPrefixV6: Schema.optional(Schema.String),
                      microsoftSessionIPv4Address: Schema.optional(
                        Schema.String,
                      ),
                      microsoftSessionIPv6Address: Schema.optional(
                        Schema.String,
                      ),
                      peerSessionIPv4Address: Schema.optional(Schema.String),
                      peerSessionIPv6Address: Schema.optional(Schema.String),
                      sessionStateV4: Schema.optional(
                        Schema.Literals([
                          "None",
                          "Idle",
                          "Connect",
                          "Active",
                          "OpenSent",
                          "OpenConfirm",
                          "OpenReceived",
                          "Established",
                          "PendingAdd",
                          "PendingUpdate",
                          "PendingRemove",
                        ]),
                      ),
                      sessionStateV6: Schema.optional(
                        Schema.Literals([
                          "None",
                          "Idle",
                          "Connect",
                          "Active",
                          "OpenSent",
                          "OpenConfirm",
                          "OpenReceived",
                          "Established",
                          "PendingAdd",
                          "PendingUpdate",
                          "PendingRemove",
                        ]),
                      ),
                      maxPrefixesAdvertisedV4: Schema.optional(Schema.Number),
                      maxPrefixesAdvertisedV6: Schema.optional(Schema.Number),
                      md5AuthenticationKey: Schema.optional(Schema.String),
                    }),
                  ),
                  connectionIdentifier: Schema.optional(Schema.String),
                  errorMessage: Schema.optional(Schema.String),
                }),
              ),
            ),
            useForPeeringService: Schema.optional(Schema.Boolean),
            peerAsn: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
            directPeeringType: Schema.optional(
              Schema.Literals([
                "Edge",
                "Transit",
                "Cdn",
                "Internal",
                "Ix",
                "IxRs",
                "Voice",
                "EdgeZoneForOperators",
                "PeerProp",
              ]),
            ),
          }),
        ),
        exchange: Schema.optional(
          Schema.Struct({
            connections: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  peeringDBFacilityId: Schema.optional(Schema.Number),
                  connectionState: Schema.optional(
                    Schema.Literals([
                      "None",
                      "PendingApproval",
                      "Approved",
                      "ProvisioningStarted",
                      "ProvisioningFailed",
                      "ProvisioningCompleted",
                      "Validating",
                      "Active",
                      "TypeChangeRequested",
                      "TypeChangeInProgress",
                      "ExternalBlocker",
                    ]),
                  ),
                  bgpSession: Schema.optional(
                    Schema.Struct({
                      sessionPrefixV4: Schema.optional(Schema.String),
                      sessionPrefixV6: Schema.optional(Schema.String),
                      microsoftSessionIPv4Address: Schema.optional(
                        Schema.String,
                      ),
                      microsoftSessionIPv6Address: Schema.optional(
                        Schema.String,
                      ),
                      peerSessionIPv4Address: Schema.optional(Schema.String),
                      peerSessionIPv6Address: Schema.optional(Schema.String),
                      sessionStateV4: Schema.optional(
                        Schema.Literals([
                          "None",
                          "Idle",
                          "Connect",
                          "Active",
                          "OpenSent",
                          "OpenConfirm",
                          "OpenReceived",
                          "Established",
                          "PendingAdd",
                          "PendingUpdate",
                          "PendingRemove",
                        ]),
                      ),
                      sessionStateV6: Schema.optional(
                        Schema.Literals([
                          "None",
                          "Idle",
                          "Connect",
                          "Active",
                          "OpenSent",
                          "OpenConfirm",
                          "OpenReceived",
                          "Established",
                          "PendingAdd",
                          "PendingUpdate",
                          "PendingRemove",
                        ]),
                      ),
                      maxPrefixesAdvertisedV4: Schema.optional(Schema.Number),
                      maxPrefixesAdvertisedV6: Schema.optional(Schema.Number),
                      md5AuthenticationKey: Schema.optional(Schema.String),
                    }),
                  ),
                  connectionIdentifier: Schema.optional(Schema.String),
                  errorMessage: Schema.optional(Schema.String),
                }),
              ),
            ),
            peerAsn: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        connectivityProbes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              endpoint: Schema.optional(Schema.String),
              azureRegion: Schema.optional(Schema.String),
              protocol: Schema.optional(
                Schema.Literals(["None", "ICMP", "TCP"]),
              ),
              prefixesToAccesslist: Schema.optional(
                Schema.Array(Schema.String),
              ),
            }),
          ),
        ),
        peeringLocation: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Updating",
            "Deleting",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
    sku: Schema.Struct({
      name: Schema.optional(Schema.String),
      tier: Schema.optional(Schema.Literals(["Basic", "Premium"])),
      family: Schema.optional(Schema.Literals(["Direct", "Exchange"])),
      size: Schema.optional(Schema.Literals(["Free", "Metered", "Unlimited"])),
    }),
    kind: Schema.Literals(["Direct", "Exchange"]),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringsCreateOrUpdateInput>;

// Output Schema
export interface PeeringsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const PeeringsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PeeringsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 */
export const PeeringsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringsCreateOrUpdateInput,
  outputSchema: PeeringsCreateOrUpdateOutput,
}));
// Input Schema
export interface PeeringsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
}
export const PeeringsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  peeringName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<PeeringsDeleteInput>;

// Output Schema
export type PeeringsDeleteOutput = void;
export const PeeringsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PeeringsDeleteOutput>;

// The operation
/**
 * Deletes an existing peering with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 */
export const PeeringsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringsDeleteInput,
  outputSchema: PeeringsDeleteOutput,
}));
// Input Schema
export interface PeeringServiceCountriesListInput {
  subscriptionId: string;
}
export const PeeringServiceCountriesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringServiceCountries",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringServiceCountriesListInput>;

// Output Schema
export interface PeeringServiceCountriesListOutput {
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
export const PeeringServiceCountriesListOutput =
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
  }) as unknown as Schema.Codec<PeeringServiceCountriesListOutput>;

// The operation
/**
 * Lists all of the available countries for peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeeringServiceCountriesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringServiceCountriesListInput,
  outputSchema: PeeringServiceCountriesListOutput,
}));
// Input Schema
export interface PeeringServiceLocationsListInput {
  subscriptionId: string;
  country?: string;
}
export const PeeringServiceLocationsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    country: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringServiceLocations",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringServiceLocationsListInput>;

// Output Schema
export interface PeeringServiceLocationsListOutput {
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
export const PeeringServiceLocationsListOutput =
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
  }) as unknown as Schema.Codec<PeeringServiceLocationsListOutput>;

// The operation
/**
 * Lists all of the available locations for peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param country - The country of interest, in which the locations are to be present.
 */
export const PeeringServiceLocationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringServiceLocationsListInput,
  outputSchema: PeeringServiceLocationsListOutput,
}));
// Input Schema
export interface PeeringServiceProvidersListInput {
  subscriptionId: string;
}
export const PeeringServiceProvidersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringServiceProviders",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringServiceProvidersListInput>;

// Output Schema
export interface PeeringServiceProvidersListOutput {
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
export const PeeringServiceProvidersListOutput =
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
  }) as unknown as Schema.Codec<PeeringServiceProvidersListOutput>;

// The operation
/**
 * Lists all of the available peering service locations for the specified kind of peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeeringServiceProvidersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringServiceProvidersListInput,
  outputSchema: PeeringServiceProvidersListOutput,
}));
// Input Schema
export interface PeeringServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
  properties?: {
    peeringServiceLocation?: string;
    peeringServiceProvider?: string;
    provisioningState?:
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
    providerPrimaryPeeringLocation?: string;
    providerBackupPeeringLocation?: string;
    logAnalyticsWorkspaceProperties?: {
      workspaceID?: string;
      key?: string;
      connectedAgents?: string[];
    };
  };
  sku?: { name?: string };
  tags?: Record<string, string>;
  location: string;
}
export const PeeringServicesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        peeringServiceLocation: Schema.optional(Schema.String),
        peeringServiceProvider: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Updating",
            "Deleting",
            "Failed",
            "Canceled",
          ]),
        ),
        providerPrimaryPeeringLocation: Schema.optional(Schema.String),
        providerBackupPeeringLocation: Schema.optional(Schema.String),
        logAnalyticsWorkspaceProperties: Schema.optional(
          Schema.Struct({
            workspaceID: Schema.optional(Schema.String),
            key: Schema.optional(Schema.String),
            connectedAgents: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringServicesCreateOrUpdateInput>;

// Output Schema
export interface PeeringServicesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const PeeringServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PeeringServicesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new peering service or updates an existing peering with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 */
export const PeeringServicesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PeeringServicesCreateOrUpdateInput,
    outputSchema: PeeringServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface PeeringServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
}
export const PeeringServicesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringServicesDeleteInput>;

// Output Schema
export type PeeringServicesDeleteOutput = void;
export const PeeringServicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PeeringServicesDeleteOutput>;

// The operation
/**
 * Deletes an existing peering service with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 */
export const PeeringServicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringServicesDeleteInput,
  outputSchema: PeeringServicesDeleteOutput,
}));
// Input Schema
export interface PeeringServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
}
export const PeeringServicesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringServicesGetInput>;

// Output Schema
export interface PeeringServicesGetOutput {
  id?: string;
  name?: string;
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
export const PeeringServicesGetOutput =
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
  }) as unknown as Schema.Codec<PeeringServicesGetOutput>;

// The operation
/**
 * Gets an existing peering service with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 */
export const PeeringServicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringServicesGetInput,
  outputSchema: PeeringServicesGetOutput,
}));
// Input Schema
export interface PeeringServicesInitializeConnectionMonitorInput {
  subscriptionId: string;
}
export const PeeringServicesInitializeConnectionMonitorInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/initializeConnectionMonitor",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringServicesInitializeConnectionMonitorInput>;

// Output Schema
export type PeeringServicesInitializeConnectionMonitorOutput = void;
export const PeeringServicesInitializeConnectionMonitorOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PeeringServicesInitializeConnectionMonitorOutput>;

// The operation
/**
 * Initialize Peering Service for Connection Monitor functionality
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeeringServicesInitializeConnectionMonitor =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PeeringServicesInitializeConnectionMonitorInput,
    outputSchema: PeeringServicesInitializeConnectionMonitorOutput,
  }));
// Input Schema
export interface PeeringServicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PeeringServicesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringServicesListByResourceGroupInput>;

// Output Schema
export interface PeeringServicesListByResourceGroupOutput {
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
export const PeeringServicesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<PeeringServicesListByResourceGroupOutput>;

// The operation
/**
 * Lists all of the peering services under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PeeringServicesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PeeringServicesListByResourceGroupInput,
    outputSchema: PeeringServicesListByResourceGroupOutput,
  }));
// Input Schema
export interface PeeringServicesListBySubscriptionInput {
  subscriptionId: string;
}
export const PeeringServicesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringServices",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringServicesListBySubscriptionInput>;

// Output Schema
export interface PeeringServicesListBySubscriptionOutput {
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
export const PeeringServicesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<PeeringServicesListBySubscriptionOutput>;

// The operation
/**
 * Lists all of the peerings under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeeringServicesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PeeringServicesListBySubscriptionInput,
    outputSchema: PeeringServicesListBySubscriptionOutput,
  }));
// Input Schema
export interface PeeringServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
  tags?: Record<string, string>;
}
export const PeeringServicesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringServicesUpdateInput>;

// Output Schema
export interface PeeringServicesUpdateOutput {
  id?: string;
  name?: string;
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
export const PeeringServicesUpdateOutput =
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
  }) as unknown as Schema.Codec<PeeringServicesUpdateOutput>;

// The operation
/**
 * Updates tags for a peering service with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 */
export const PeeringServicesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringServicesUpdateInput,
  outputSchema: PeeringServicesUpdateOutput,
}));
// Input Schema
export interface PeeringsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
}
export const PeeringsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  peeringName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<PeeringsGetInput>;

// Output Schema
export interface PeeringsGetOutput {
  id?: string;
  name?: string;
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
export const PeeringsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PeeringsGetOutput>;

// The operation
/**
 * Gets an existing peering with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 */
export const PeeringsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringsGetInput,
  outputSchema: PeeringsGetOutput,
}));
// Input Schema
export interface PeeringsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PeeringsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringsListByResourceGroupInput>;

// Output Schema
export interface PeeringsListByResourceGroupOutput {
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
export const PeeringsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<PeeringsListByResourceGroupOutput>;

// The operation
/**
 * Lists all of the peerings under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PeeringsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringsListByResourceGroupInput,
  outputSchema: PeeringsListByResourceGroupOutput,
}));
// Input Schema
export interface PeeringsListBySubscriptionInput {
  subscriptionId: string;
}
export const PeeringsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerings",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PeeringsListBySubscriptionInput>;

// Output Schema
export interface PeeringsListBySubscriptionOutput {
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
export const PeeringsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<PeeringsListBySubscriptionOutput>;

// The operation
/**
 * Lists all of the peerings under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeeringsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringsListBySubscriptionInput,
  outputSchema: PeeringsListBySubscriptionOutput,
}));
// Input Schema
export interface PeeringsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
  tags?: Record<string, string>;
}
export const PeeringsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  peeringName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<PeeringsUpdateInput>;

// Output Schema
export interface PeeringsUpdateOutput {
  id?: string;
  name?: string;
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
export const PeeringsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PeeringsUpdateOutput>;

// The operation
/**
 * Updates tags for a peering with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 */
export const PeeringsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PeeringsUpdateInput,
  outputSchema: PeeringsUpdateOutput,
}));
// Input Schema
export interface PrefixesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
  prefixName: string;
  properties?: {
    prefix?: string;
    prefixValidationState?:
      | "None"
      | "Invalid"
      | "Verified"
      | "Failed"
      | "Pending"
      | "Warning"
      | "Unknown";
    learnedType?: "None" | "ViaServiceProvider" | "ViaSession";
    errorMessage?: string;
    events?: {
      eventTimestamp?: string;
      eventType?: string;
      eventSummary?: string;
      eventLevel?: string;
      eventDescription?: string;
    }[];
    peeringServicePrefixKey?: string;
    provisioningState?:
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
  };
}
export const PrefixesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
    prefixName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        prefix: Schema.optional(Schema.String),
        prefixValidationState: Schema.optional(
          Schema.Literals([
            "None",
            "Invalid",
            "Verified",
            "Failed",
            "Pending",
            "Warning",
            "Unknown",
          ]),
        ),
        learnedType: Schema.optional(
          Schema.Literals(["None", "ViaServiceProvider", "ViaSession"]),
        ),
        errorMessage: Schema.optional(Schema.String),
        events: Schema.optional(
          Schema.Array(
            Schema.Struct({
              eventTimestamp: Schema.optional(Schema.String),
              eventType: Schema.optional(Schema.String),
              eventSummary: Schema.optional(Schema.String),
              eventLevel: Schema.optional(Schema.String),
              eventDescription: Schema.optional(Schema.String),
            }),
          ),
        ),
        peeringServicePrefixKey: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Updating",
            "Deleting",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes/{prefixName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PrefixesCreateOrUpdateInput>;

// Output Schema
export interface PrefixesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const PrefixesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PrefixesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new prefix with the specified name under the given subscription, resource group and peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 * @param prefixName - The name of the prefix.
 */
export const PrefixesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrefixesCreateOrUpdateInput,
  outputSchema: PrefixesCreateOrUpdateOutput,
}));
// Input Schema
export interface PrefixesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
  prefixName: string;
}
export const PrefixesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  peeringServiceName: Schema.String.pipe(T.PathParam()),
  prefixName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes/{prefixName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<PrefixesDeleteInput>;

// Output Schema
export type PrefixesDeleteOutput = void;
export const PrefixesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrefixesDeleteOutput>;

// The operation
/**
 * Deletes an existing prefix with the specified name under the given subscription, resource group and peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 * @param prefixName - The name of the prefix.
 */
export const PrefixesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrefixesDeleteInput,
  outputSchema: PrefixesDeleteOutput,
}));
// Input Schema
export interface PrefixesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
  prefixName: string;
  $expand?: string;
}
export const PrefixesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  peeringServiceName: Schema.String.pipe(T.PathParam()),
  prefixName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes/{prefixName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<PrefixesGetInput>;

// Output Schema
export interface PrefixesGetOutput {
  id?: string;
  name?: string;
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
export const PrefixesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PrefixesGetOutput>;

// The operation
/**
 * Gets an existing prefix with the specified name under the given subscription, resource group and peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 * @param prefixName - The name of the prefix.
 * @param $expand - The properties to be expanded.
 */
export const PrefixesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrefixesGetInput,
  outputSchema: PrefixesGetOutput,
}));
// Input Schema
export interface PrefixesListByPeeringServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringServiceName: string;
  $expand?: string;
}
export const PrefixesListByPeeringServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<PrefixesListByPeeringServiceInput>;

// Output Schema
export interface PrefixesListByPeeringServiceOutput {
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
export const PrefixesListByPeeringServiceOutput =
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
  }) as unknown as Schema.Codec<PrefixesListByPeeringServiceOutput>;

// The operation
/**
 * Lists all prefixes under the given subscription, resource group and peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 * @param $expand - The properties to be expanded.
 */
export const PrefixesListByPeeringService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrefixesListByPeeringServiceInput,
    outputSchema: PrefixesListByPeeringServiceOutput,
  }));
// Input Schema
export interface ReceivedRoutesListByPeeringInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
  prefix?: string;
  asPath?: string;
  originAsValidationState?: string;
  rpkiValidationState?: string;
  $skipToken?: string;
}
export const ReceivedRoutesListByPeeringInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    prefix: Schema.optional(Schema.String),
    asPath: Schema.optional(Schema.String),
    originAsValidationState: Schema.optional(Schema.String),
    rpkiValidationState: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/receivedRoutes",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ReceivedRoutesListByPeeringInput>;

// Output Schema
export interface ReceivedRoutesListByPeeringOutput {
  value: {
    prefix?: string;
    nextHop?: string;
    asPath?: string;
    originAsValidationState?: string;
    rpkiValidationState?: string;
    trustAnchor?: string;
    receivedTimestamp?: string;
  }[];
  nextLink?: string;
}
export const ReceivedRoutesListByPeeringOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        prefix: Schema.optional(Schema.String),
        nextHop: Schema.optional(Schema.String),
        asPath: Schema.optional(Schema.String),
        originAsValidationState: Schema.optional(Schema.String),
        rpkiValidationState: Schema.optional(Schema.String),
        trustAnchor: Schema.optional(Schema.String),
        receivedTimestamp: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ReceivedRoutesListByPeeringOutput>;

// The operation
/**
 * Lists the prefixes received over the specified peering under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 * @param prefix - The optional prefix that can be used to filter the routes.
 * @param asPath - The optional AS path that can be used to filter the routes.
 * @param originAsValidationState - The optional origin AS validation state that can be used to filter the routes.
 * @param rpkiValidationState - The optional RPKI validation state that can be used to filter the routes.
 * @param $skipToken - The optional page continuation token that is used in the event of paginated result.
 */
export const ReceivedRoutesListByPeering = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReceivedRoutesListByPeeringInput,
  outputSchema: ReceivedRoutesListByPeeringOutput,
}));
// Input Schema
export interface RegisteredAsnsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
  registeredAsnName: string;
  properties?: {
    asn?: number;
    peeringServicePrefixKey?: string;
    provisioningState?:
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
  };
}
export const RegisteredAsnsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    registeredAsnName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        asn: Schema.optional(Schema.Number),
        peeringServicePrefixKey: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Updating",
            "Deleting",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredAsns/{registeredAsnName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<RegisteredAsnsCreateOrUpdateInput>;

// Output Schema
export interface RegisteredAsnsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const RegisteredAsnsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegisteredAsnsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new registered ASN with the specified name under the given subscription, resource group and peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 * @param registeredAsnName - The name of the registered ASN.
 */
export const RegisteredAsnsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegisteredAsnsCreateOrUpdateInput,
    outputSchema: RegisteredAsnsCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegisteredAsnsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
  registeredAsnName: string;
}
export const RegisteredAsnsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    registeredAsnName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredAsns/{registeredAsnName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<RegisteredAsnsDeleteInput>;

// Output Schema
export type RegisteredAsnsDeleteOutput = void;
export const RegisteredAsnsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegisteredAsnsDeleteOutput>;

// The operation
/**
 * Deletes an existing registered ASN with the specified name under the given subscription, resource group and peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 * @param registeredAsnName - The name of the registered ASN.
 */
export const RegisteredAsnsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegisteredAsnsDeleteInput,
  outputSchema: RegisteredAsnsDeleteOutput,
}));
// Input Schema
export interface RegisteredAsnsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
  registeredAsnName: string;
}
export const RegisteredAsnsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  peeringName: Schema.String.pipe(T.PathParam()),
  registeredAsnName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredAsns/{registeredAsnName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<RegisteredAsnsGetInput>;

// Output Schema
export interface RegisteredAsnsGetOutput {
  id?: string;
  name?: string;
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
export const RegisteredAsnsGetOutput =
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
  }) as unknown as Schema.Codec<RegisteredAsnsGetOutput>;

// The operation
/**
 * Gets an existing registered ASN with the specified name under the given subscription, resource group and peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 * @param registeredAsnName - The name of the registered ASN.
 */
export const RegisteredAsnsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegisteredAsnsGetInput,
  outputSchema: RegisteredAsnsGetOutput,
}));
// Input Schema
export interface RegisteredAsnsListByPeeringInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
}
export const RegisteredAsnsListByPeeringInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredAsns",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<RegisteredAsnsListByPeeringInput>;

// Output Schema
export interface RegisteredAsnsListByPeeringOutput {
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
export const RegisteredAsnsListByPeeringOutput =
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
  }) as unknown as Schema.Codec<RegisteredAsnsListByPeeringOutput>;

// The operation
/**
 * Lists all registered ASNs under the given subscription, resource group and peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 */
export const RegisteredAsnsListByPeering = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegisteredAsnsListByPeeringInput,
  outputSchema: RegisteredAsnsListByPeeringOutput,
}));
// Input Schema
export interface RegisteredPrefixesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
  registeredPrefixName: string;
  properties?: {
    prefix?: string;
    prefixValidationState?:
      | "None"
      | "Invalid"
      | "Verified"
      | "Failed"
      | "Pending"
      | "Warning"
      | "Unknown";
    peeringServicePrefixKey?: string;
    errorMessage?: string;
    provisioningState?:
      | "Succeeded"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Canceled";
  };
}
export const RegisteredPrefixesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    registeredPrefixName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        prefix: Schema.optional(Schema.String),
        prefixValidationState: Schema.optional(
          Schema.Literals([
            "None",
            "Invalid",
            "Verified",
            "Failed",
            "Pending",
            "Warning",
            "Unknown",
          ]),
        ),
        peeringServicePrefixKey: Schema.optional(Schema.String),
        errorMessage: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Updating",
            "Deleting",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredPrefixes/{registeredPrefixName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<RegisteredPrefixesCreateOrUpdateInput>;

// Output Schema
export interface RegisteredPrefixesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const RegisteredPrefixesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RegisteredPrefixesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new registered prefix with the specified name under the given subscription, resource group and peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 * @param registeredPrefixName - The name of the registered prefix.
 */
export const RegisteredPrefixesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegisteredPrefixesCreateOrUpdateInput,
    outputSchema: RegisteredPrefixesCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegisteredPrefixesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
  registeredPrefixName: string;
}
export const RegisteredPrefixesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    registeredPrefixName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredPrefixes/{registeredPrefixName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<RegisteredPrefixesDeleteInput>;

// Output Schema
export type RegisteredPrefixesDeleteOutput = void;
export const RegisteredPrefixesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegisteredPrefixesDeleteOutput>;

// The operation
/**
 * Deletes an existing registered prefix with the specified name under the given subscription, resource group and peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 * @param registeredPrefixName - The name of the registered prefix.
 */
export const RegisteredPrefixesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegisteredPrefixesDeleteInput,
  outputSchema: RegisteredPrefixesDeleteOutput,
}));
// Input Schema
export interface RegisteredPrefixesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
  registeredPrefixName: string;
}
export const RegisteredPrefixesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    registeredPrefixName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredPrefixes/{registeredPrefixName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<RegisteredPrefixesGetInput>;

// Output Schema
export interface RegisteredPrefixesGetOutput {
  id?: string;
  name?: string;
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
export const RegisteredPrefixesGetOutput =
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
  }) as unknown as Schema.Codec<RegisteredPrefixesGetOutput>;

// The operation
/**
 * Gets an existing registered prefix with the specified name under the given subscription, resource group and peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 * @param registeredPrefixName - The name of the registered prefix.
 */
export const RegisteredPrefixesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegisteredPrefixesGetInput,
  outputSchema: RegisteredPrefixesGetOutput,
}));
// Input Schema
export interface RegisteredPrefixesListByPeeringInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
}
export const RegisteredPrefixesListByPeeringInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredPrefixes",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<RegisteredPrefixesListByPeeringInput>;

// Output Schema
export interface RegisteredPrefixesListByPeeringOutput {
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
export const RegisteredPrefixesListByPeeringOutput =
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
  }) as unknown as Schema.Codec<RegisteredPrefixesListByPeeringOutput>;

// The operation
/**
 * Lists all registered prefixes under the given subscription, resource group and peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 */
export const RegisteredPrefixesListByPeering =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegisteredPrefixesListByPeeringInput,
    outputSchema: RegisteredPrefixesListByPeeringOutput,
  }));
// Input Schema
export interface RegisteredPrefixesValidateInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
  registeredPrefixName: string;
}
export const RegisteredPrefixesValidateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    registeredPrefixName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredPrefixes/{registeredPrefixName}/validate",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<RegisteredPrefixesValidateInput>;

// Output Schema
export interface RegisteredPrefixesValidateOutput {
  id?: string;
  name?: string;
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
export const RegisteredPrefixesValidateOutput =
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
  }) as unknown as Schema.Codec<RegisteredPrefixesValidateOutput>;

// The operation
/**
 * Validates an existing registered prefix with the specified name under the given subscription, resource group and peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 * @param registeredPrefixName - The name of the registered prefix.
 */
export const RegisteredPrefixesValidate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegisteredPrefixesValidateInput,
  outputSchema: RegisteredPrefixesValidateOutput,
}));
// Input Schema
export interface RpUnbilledPrefixesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  peeringName: string;
  consolidate?: boolean;
}
export const RpUnbilledPrefixesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    consolidate: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/rpUnbilledPrefixes",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<RpUnbilledPrefixesListInput>;

// Output Schema
export interface RpUnbilledPrefixesListOutput {
  value: { prefix?: string; azureRegion?: string; peerAsn?: number }[];
  nextLink?: string;
}
export const RpUnbilledPrefixesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        prefix: Schema.optional(Schema.String),
        azureRegion: Schema.optional(Schema.String),
        peerAsn: Schema.optional(Schema.Number),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RpUnbilledPrefixesListOutput>;

// The operation
/**
 * Lists all of the RP unbilled prefixes for the specified peering
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 * @param consolidate - Flag to enable consolidation prefixes
 */
export const RpUnbilledPrefixesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RpUnbilledPrefixesListInput,
  outputSchema: RpUnbilledPrefixesListOutput,
}));
