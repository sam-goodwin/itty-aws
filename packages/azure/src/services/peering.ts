/**
 * Azure Peering API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  display: Schema.optional(Schema.suspend(() => OperationDisplayInfoSchema)),
  isDataAction: Schema.optional(Schema.Boolean),
  properties: Schema.optional(Schema.suspend(() => OperationPropertiesSchema)),
});
const OperationDisplayInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const OperationPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceSpecification: Schema.optional(
    Schema.suspend(() => ServiceSpecificationSchema),
  ),
});
const ServiceSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metricSpecifications: Schema.optional(
    Schema.Array(Schema.suspend(() => MetricSpecificationSchema)),
  ),
});
const MetricSpecificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  displayDescription: Schema.optional(Schema.String),
  unit: Schema.optional(Schema.String),
  aggregationType: Schema.optional(Schema.String),
  supportedTimeGrainTypes: Schema.optional(Schema.Array(Schema.String)),
  dimensions: Schema.optional(
    Schema.Array(Schema.suspend(() => MetricDimensionSchema)),
  ),
});
const MetricDimensionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
});
const CdnPeeringPrefixSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const systemDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdBy: Schema.optional(Schema.String),
  createdByType: Schema.optional(
    Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
  ),
  createdAt: Schema.optional(Schema.String),
  lastModifiedBy: Schema.optional(Schema.String),
  lastModifiedByType: Schema.optional(
    Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
  ),
  lastModifiedAt: Schema.optional(Schema.String),
});
const PeeringSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CommandSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Traceroute",
  "Ping",
  "BgpRoute",
]);
const PeerAsnSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PeerAsnPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  peerAsn: Schema.optional(Schema.Number),
  peerContactDetail: Schema.optional(
    Schema.Array(Schema.suspend(() => ContactDetailSchema)),
  ),
  peerName: Schema.optional(Schema.String),
  validationState: Schema.optional(Schema.suspend(() => ValidationStateSchema)),
  errorMessage: Schema.optional(Schema.String),
});
const ContactDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  role: Schema.optional(Schema.suspend(() => RoleSchema)),
  email: Schema.optional(Schema.String),
  phone: Schema.optional(Schema.String),
});
const RoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Noc",
  "Policy",
  "Technical",
  "Service",
  "Escalation",
  "Other",
]);
const ValidationStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Pending",
  "Approved",
  "Failed",
]);
const PeeringLocationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PeeringServiceCountrySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PeeringServiceLocationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PeeringServiceProviderSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PeeringServiceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PeeringServicePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    peeringServiceLocation: Schema.optional(Schema.String),
    peeringServiceProvider: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    providerPrimaryPeeringLocation: Schema.optional(Schema.String),
    providerBackupPeeringLocation: Schema.optional(Schema.String),
    logAnalyticsWorkspaceProperties: Schema.optional(
      Schema.suspend(() => LogAnalyticsWorkspacePropertiesSchema),
    ),
  });
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Updating",
  "Deleting",
  "Failed",
  "Canceled",
]);
const LogAnalyticsWorkspacePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workspaceID: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    connectedAgents: Schema.optional(Schema.Array(Schema.String)),
  });
const PeeringServiceSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
});
const ConnectionMonitorTestSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ConnectionMonitorTestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceAgent: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    destinationPort: Schema.optional(Schema.Number),
    testFrequencyInSec: Schema.optional(Schema.Number),
    isTestSuccessful: Schema.optional(Schema.Boolean),
    path: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const PeeringServicePrefixSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PeeringServicePrefixPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prefix: Schema.optional(Schema.String),
    prefixValidationState: Schema.optional(
      Schema.suspend(() => PrefixValidationStateSchema),
    ),
    learnedType: Schema.optional(Schema.suspend(() => LearnedTypeSchema)),
    errorMessage: Schema.optional(Schema.String),
    events: Schema.optional(
      Schema.Array(Schema.suspend(() => PeeringServicePrefixEventSchema)),
    ),
    peeringServicePrefixKey: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const PrefixValidationStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["None", "Invalid", "Verified", "Failed", "Pending", "Warning", "Unknown"],
);
const LearnedTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "ViaServiceProvider",
  "ViaSession",
]);
const PeeringServicePrefixEventSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eventTimestamp: Schema.optional(Schema.String),
    eventType: Schema.optional(Schema.String),
    eventSummary: Schema.optional(Schema.String),
    eventLevel: Schema.optional(Schema.String),
    eventDescription: Schema.optional(Schema.String),
  });
const PeeringPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  direct: Schema.optional(Schema.suspend(() => PeeringPropertiesDirectSchema)),
  exchange: Schema.optional(
    Schema.suspend(() => PeeringPropertiesExchangeSchema),
  ),
  connectivityProbes: Schema.optional(
    Schema.Array(Schema.suspend(() => ConnectivityProbeSchema)),
  ),
  peeringLocation: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const PeeringPropertiesDirectSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    connections: Schema.optional(
      Schema.Array(Schema.suspend(() => DirectConnectionSchema)),
    ),
    useForPeeringService: Schema.optional(Schema.Boolean),
    peerAsn: Schema.optional(Schema.suspend(() => SubResourceSchema)),
    directPeeringType: Schema.optional(
      Schema.suspend(() => DirectPeeringTypeSchema),
    ),
  },
);
const DirectConnectionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bandwidthInMbps: Schema.optional(Schema.Number),
  provisionedBandwidthInMbps: Schema.optional(Schema.Number),
  sessionAddressProvider: Schema.optional(
    Schema.suspend(() => SessionAddressProviderSchema),
  ),
  useForPeeringService: Schema.optional(Schema.Boolean),
  microsoftTrackingId: Schema.optional(Schema.String),
  peeringDBFacilityId: Schema.optional(Schema.Number),
  connectionState: Schema.optional(Schema.suspend(() => ConnectionStateSchema)),
  bgpSession: Schema.optional(Schema.suspend(() => BgpSessionSchema)),
  connectionIdentifier: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
});
const SessionAddressProviderSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Microsoft", "Peer"]);
const ConnectionStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const BgpSessionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sessionPrefixV4: Schema.optional(Schema.String),
  sessionPrefixV6: Schema.optional(Schema.String),
  microsoftSessionIPv4Address: Schema.optional(Schema.String),
  microsoftSessionIPv6Address: Schema.optional(Schema.String),
  peerSessionIPv4Address: Schema.optional(Schema.String),
  peerSessionIPv6Address: Schema.optional(Schema.String),
  sessionStateV4: Schema.optional(Schema.suspend(() => SessionStateV4Schema)),
  sessionStateV6: Schema.optional(Schema.suspend(() => SessionStateV6Schema)),
  maxPrefixesAdvertisedV4: Schema.optional(Schema.Number),
  maxPrefixesAdvertisedV6: Schema.optional(Schema.Number),
  md5AuthenticationKey: Schema.optional(Schema.String),
});
const SessionStateV4Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const SessionStateV6Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const SubResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const DirectPeeringTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Edge",
  "Transit",
  "Cdn",
  "Internal",
  "Ix",
  "IxRs",
  "Voice",
  "EdgeZoneForOperators",
  "PeerProp",
]);
const PeeringPropertiesExchangeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connections: Schema.optional(
      Schema.Array(Schema.suspend(() => ExchangeConnectionSchema)),
    ),
    peerAsn: Schema.optional(Schema.suspend(() => SubResourceSchema)),
  });
const ExchangeConnectionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  peeringDBFacilityId: Schema.optional(Schema.Number),
  connectionState: Schema.optional(Schema.suspend(() => ConnectionStateSchema)),
  bgpSession: Schema.optional(Schema.suspend(() => BgpSessionSchema)),
  connectionIdentifier: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
});
const ConnectivityProbeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endpoint: Schema.optional(Schema.String),
  azureRegion: Schema.optional(Schema.String),
  protocol: Schema.optional(Schema.suspend(() => ProtocolSchema)),
  prefixesToAccesslist: Schema.optional(Schema.Array(Schema.String)),
});
const ProtocolSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "ICMP",
  "TCP",
]);
const PeeringSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  tier: Schema.optional(Schema.suspend(() => TierSchema)),
  family: Schema.optional(Schema.suspend(() => FamilySchema)),
  size: Schema.optional(Schema.suspend(() => SizeSchema)),
});
const TierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Basic",
  "Premium",
]);
const FamilySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Direct",
  "Exchange",
]);
const SizeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Free",
  "Metered",
  "Unlimited",
]);
const KindSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Direct",
  "Exchange",
]);
const PeeringReceivedRouteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  prefix: Schema.optional(Schema.String),
  nextHop: Schema.optional(Schema.String),
  asPath: Schema.optional(Schema.String),
  originAsValidationState: Schema.optional(Schema.String),
  rpkiValidationState: Schema.optional(Schema.String),
  trustAnchor: Schema.optional(Schema.String),
  receivedTimestamp: Schema.optional(Schema.String),
});
const PeeringRegisteredAsnSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PeeringRegisteredAsnPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    asn: Schema.optional(Schema.Number),
    peeringServicePrefixKey: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const PeeringRegisteredPrefixSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
const PeeringRegisteredPrefixPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prefix: Schema.optional(Schema.String),
    prefixValidationState: Schema.optional(
      Schema.suspend(() => PrefixValidationStateSchema),
    ),
    peeringServicePrefixKey: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const RpUnbilledPrefixSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  prefix: Schema.optional(Schema.String),
  azureRegion: Schema.optional(Schema.String),
  peerAsn: Schema.optional(Schema.Number),
});

// Input Schema
export const CdnPeeringPrefixesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    peeringLocation: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/cdnPeeringPrefixes",
      apiVersion: "2025-05-01",
    }),
  );
export type CdnPeeringPrefixesListInput =
  typeof CdnPeeringPrefixesListInput.Type;

// Output Schema
export const CdnPeeringPrefixesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CdnPeeringPrefixSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CdnPeeringPrefixesListOutput =
  typeof CdnPeeringPrefixesListOutput.Type;

// The operation
/**
 * Lists all of the advertised prefixes for the specified peering location
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param peeringLocation - The peering location.
 */
export const CdnPeeringPrefixesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CdnPeeringPrefixesListInput,
    outputSchema: CdnPeeringPrefixesListOutput,
  }),
);
// Input Schema
export const CheckServiceProviderAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    peeringServiceLocation: Schema.optional(Schema.String),
    peeringServiceProvider: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/checkServiceProviderAvailability",
      apiVersion: "2025-05-01",
    }),
  );
export type CheckServiceProviderAvailabilityInput =
  typeof CheckServiceProviderAvailabilityInput.Type;

// Output Schema
export const CheckServiceProviderAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Available", "Unavailable"]);
export type CheckServiceProviderAvailabilityOutput =
  typeof CheckServiceProviderAvailabilityOutput.Type;

// The operation
/**
 * Checks if the peering service provider is present within 1000 miles of customer's location
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CheckServiceProviderAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CheckServiceProviderAvailabilityInput,
    outputSchema: CheckServiceProviderAvailabilityOutput,
  }));
// Input Schema
export const ConnectionMonitorTestsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
    connectionMonitorTestName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ConnectionMonitorTestPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/connectionMonitorTests/{connectionMonitorTestName}",
      apiVersion: "2025-05-01",
    }),
  );
export type ConnectionMonitorTestsCreateOrUpdateInput =
  typeof ConnectionMonitorTestsCreateOrUpdateInput.Type;

// Output Schema
export const ConnectionMonitorTestsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ConnectionMonitorTestPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ConnectionMonitorTestsCreateOrUpdateOutput =
  typeof ConnectionMonitorTestsCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectionMonitorTestsCreateOrUpdateInput,
    outputSchema: ConnectionMonitorTestsCreateOrUpdateOutput,
  }));
// Input Schema
export const ConnectionMonitorTestsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ConnectionMonitorTestsDeleteInput =
  typeof ConnectionMonitorTestsDeleteInput.Type;

// Output Schema
export const ConnectionMonitorTestsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConnectionMonitorTestsDeleteOutput =
  typeof ConnectionMonitorTestsDeleteOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectionMonitorTestsDeleteInput,
    outputSchema: ConnectionMonitorTestsDeleteOutput,
  }));
// Input Schema
export const ConnectionMonitorTestsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ConnectionMonitorTestsGetInput =
  typeof ConnectionMonitorTestsGetInput.Type;

// Output Schema
export const ConnectionMonitorTestsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ConnectionMonitorTestPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ConnectionMonitorTestsGetOutput =
  typeof ConnectionMonitorTestsGetOutput.Type;

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
export const ConnectionMonitorTestsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectionMonitorTestsGetInput,
    outputSchema: ConnectionMonitorTestsGetOutput,
  }),
);
// Input Schema
export const ConnectionMonitorTestsListByPeeringServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/connectionMonitorTests",
      apiVersion: "2025-05-01",
    }),
  );
export type ConnectionMonitorTestsListByPeeringServiceInput =
  typeof ConnectionMonitorTestsListByPeeringServiceInput.Type;

// Output Schema
export const ConnectionMonitorTestsListByPeeringServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ConnectionMonitorTestSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ConnectionMonitorTestsListByPeeringServiceOutput =
  typeof ConnectionMonitorTestsListByPeeringServiceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectionMonitorTestsListByPeeringServiceInput,
    outputSchema: ConnectionMonitorTestsListByPeeringServiceOutput,
  }));
// Input Schema
export const LegacyPeeringsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type LegacyPeeringsListInput = typeof LegacyPeeringsListInput.Type;

// Output Schema
export const LegacyPeeringsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type LegacyPeeringsListOutput = typeof LegacyPeeringsListOutput.Type;

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
export const LegacyPeeringsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LegacyPeeringsListInput,
  outputSchema: LegacyPeeringsListOutput,
}));
// Input Schema
export const LookingGlassInvokeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type LookingGlassInvokeInput = typeof LookingGlassInvokeInput.Type;

// Output Schema
export const LookingGlassInvokeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    command: Schema.optional(Schema.suspend(() => CommandSchema)),
    output: Schema.optional(Schema.String),
  });
export type LookingGlassInvokeOutput = typeof LookingGlassInvokeOutput.Type;

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
export const LookingGlassInvoke = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LookingGlassInvokeInput,
  outputSchema: LookingGlassInvokeOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Peering/operations",
    apiVersion: "2025-05-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => OperationSchema))),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

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
// Input Schema
export const PeerAsnsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    peerAsnName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => PeerAsnPropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns/{peerAsnName}",
      apiVersion: "2025-05-01",
    }),
  );
export type PeerAsnsCreateOrUpdateInput =
  typeof PeerAsnsCreateOrUpdateInput.Type;

// Output Schema
export const PeerAsnsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => PeerAsnPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PeerAsnsCreateOrUpdateOutput =
  typeof PeerAsnsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates a new peer ASN or updates an existing peer ASN with the specified name under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param peerAsnName - The peer ASN name.
 */
export const PeerAsnsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PeerAsnsCreateOrUpdateInput,
    outputSchema: PeerAsnsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const PeerAsnsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  peerAsnName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns/{peerAsnName}",
    apiVersion: "2025-05-01",
  }),
);
export type PeerAsnsDeleteInput = typeof PeerAsnsDeleteInput.Type;

// Output Schema
export const PeerAsnsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PeerAsnsDeleteOutput = typeof PeerAsnsDeleteOutput.Type;

// The operation
/**
 * Deletes an existing peer ASN with the specified name under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param peerAsnName - The peer ASN name.
 */
export const PeerAsnsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PeerAsnsDeleteInput,
  outputSchema: PeerAsnsDeleteOutput,
}));
// Input Schema
export const PeerAsnsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  peerAsnName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns/{peerAsnName}",
    apiVersion: "2025-05-01",
  }),
);
export type PeerAsnsGetInput = typeof PeerAsnsGetInput.Type;

// Output Schema
export const PeerAsnsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => PeerAsnPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type PeerAsnsGetOutput = typeof PeerAsnsGetOutput.Type;

// The operation
/**
 * Gets the peer ASN with the specified name under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param peerAsnName - The peer ASN name.
 */
export const PeerAsnsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PeerAsnsGetInput,
  outputSchema: PeerAsnsGetOutput,
}));
// Input Schema
export const PeerAsnsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerAsns",
      apiVersion: "2025-05-01",
    }),
  );
export type PeerAsnsListBySubscriptionInput =
  typeof PeerAsnsListBySubscriptionInput.Type;

// Output Schema
export const PeerAsnsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeerAsnSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PeerAsnsListBySubscriptionOutput =
  typeof PeerAsnsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all of the peer ASNs under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeerAsnsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PeerAsnsListBySubscriptionInput,
    outputSchema: PeerAsnsListBySubscriptionOutput,
  }),
);
// Input Schema
export const PeeringLocationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PeeringLocationsListInput = typeof PeeringLocationsListInput.Type;

// Output Schema
export const PeeringLocationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringLocationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PeeringLocationsListOutput = typeof PeeringLocationsListOutput.Type;

// The operation
/**
 * Lists all of the available peering locations for the specified kind of peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param kind - The kind of the peering.
 * @param directPeeringType - The type of direct peering.
 */
export const PeeringLocationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PeeringLocationsListInput,
    outputSchema: PeeringLocationsListOutput,
  }),
);
// Input Schema
export const PeeringsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => PeeringPropertiesSchema)),
    sku: Schema.suspend(() => PeeringSkuSchema),
    kind: Schema.suspend(() => KindSchema),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringsCreateOrUpdateInput =
  typeof PeeringsCreateOrUpdateInput.Type;

// Output Schema
export const PeeringsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => PeeringPropertiesSchema)),
    sku: Schema.suspend(() => PeeringSkuSchema),
    kind: Schema.suspend(() => KindSchema),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PeeringsCreateOrUpdateOutput =
  typeof PeeringsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates a new peering or updates an existing peering with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 */
export const PeeringsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PeeringsCreateOrUpdateInput,
    outputSchema: PeeringsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const PeeringsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  peeringName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}",
    apiVersion: "2025-05-01",
  }),
);
export type PeeringsDeleteInput = typeof PeeringsDeleteInput.Type;

// Output Schema
export const PeeringsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PeeringsDeleteOutput = typeof PeeringsDeleteOutput.Type;

// The operation
/**
 * Deletes an existing peering with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 */
export const PeeringsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PeeringsDeleteInput,
  outputSchema: PeeringsDeleteOutput,
}));
// Input Schema
export const PeeringServiceCountriesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringServiceCountries",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringServiceCountriesListInput =
  typeof PeeringServiceCountriesListInput.Type;

// Output Schema
export const PeeringServiceCountriesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringServiceCountrySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PeeringServiceCountriesListOutput =
  typeof PeeringServiceCountriesListOutput.Type;

// The operation
/**
 * Lists all of the available countries for peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeeringServiceCountriesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PeeringServiceCountriesListInput,
    outputSchema: PeeringServiceCountriesListOutput,
  }),
);
// Input Schema
export const PeeringServiceLocationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    country: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringServiceLocations",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringServiceLocationsListInput =
  typeof PeeringServiceLocationsListInput.Type;

// Output Schema
export const PeeringServiceLocationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringServiceLocationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PeeringServiceLocationsListOutput =
  typeof PeeringServiceLocationsListOutput.Type;

// The operation
/**
 * Lists all of the available locations for peering service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param country - The country of interest, in which the locations are to be present.
 */
export const PeeringServiceLocationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PeeringServiceLocationsListInput,
    outputSchema: PeeringServiceLocationsListOutput,
  }),
);
// Input Schema
export const PeeringServiceProvidersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringServiceProviders",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringServiceProvidersListInput =
  typeof PeeringServiceProvidersListInput.Type;

// Output Schema
export const PeeringServiceProvidersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringServiceProviderSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PeeringServiceProvidersListOutput =
  typeof PeeringServiceProvidersListOutput.Type;

// The operation
/**
 * Lists all of the available peering service locations for the specified kind of peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeeringServiceProvidersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PeeringServiceProvidersListInput,
    outputSchema: PeeringServiceProvidersListOutput,
  }),
);
// Input Schema
export const PeeringServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PeeringServicePropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => PeeringServiceSkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringServicesCreateOrUpdateInput =
  typeof PeeringServicesCreateOrUpdateInput.Type;

// Output Schema
export const PeeringServicesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PeeringServicePropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => PeeringServiceSkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PeeringServicesCreateOrUpdateOutput =
  typeof PeeringServicesCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PeeringServicesCreateOrUpdateInput,
    outputSchema: PeeringServicesCreateOrUpdateOutput,
  }));
// Input Schema
export const PeeringServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringServicesDeleteInput = typeof PeeringServicesDeleteInput.Type;

// Output Schema
export const PeeringServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PeeringServicesDeleteOutput =
  typeof PeeringServicesDeleteOutput.Type;

// The operation
/**
 * Deletes an existing peering service with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 */
export const PeeringServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PeeringServicesDeleteInput,
    outputSchema: PeeringServicesDeleteOutput,
  }),
);
// Input Schema
export const PeeringServicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringServicesGetInput = typeof PeeringServicesGetInput.Type;

// Output Schema
export const PeeringServicesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PeeringServicePropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => PeeringServiceSkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PeeringServicesGetOutput = typeof PeeringServicesGetOutput.Type;

// The operation
/**
 * Gets an existing peering service with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 */
export const PeeringServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PeeringServicesGetInput,
  outputSchema: PeeringServicesGetOutput,
}));
// Input Schema
export const PeeringServicesInitializeConnectionMonitorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/initializeConnectionMonitor",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringServicesInitializeConnectionMonitorInput =
  typeof PeeringServicesInitializeConnectionMonitorInput.Type;

// Output Schema
export const PeeringServicesInitializeConnectionMonitorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PeeringServicesInitializeConnectionMonitorOutput =
  typeof PeeringServicesInitializeConnectionMonitorOutput.Type;

// The operation
/**
 * Initialize Peering Service for Connection Monitor functionality
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeeringServicesInitializeConnectionMonitor =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PeeringServicesInitializeConnectionMonitorInput,
    outputSchema: PeeringServicesInitializeConnectionMonitorOutput,
  }));
// Input Schema
export const PeeringServicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringServicesListByResourceGroupInput =
  typeof PeeringServicesListByResourceGroupInput.Type;

// Output Schema
export const PeeringServicesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringServiceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PeeringServicesListByResourceGroupOutput =
  typeof PeeringServicesListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all of the peering services under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PeeringServicesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PeeringServicesListByResourceGroupInput,
    outputSchema: PeeringServicesListByResourceGroupOutput,
  }));
// Input Schema
export const PeeringServicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringServices",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringServicesListBySubscriptionInput =
  typeof PeeringServicesListBySubscriptionInput.Type;

// Output Schema
export const PeeringServicesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringServiceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PeeringServicesListBySubscriptionOutput =
  typeof PeeringServicesListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all of the peerings under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeeringServicesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PeeringServicesListBySubscriptionInput,
    outputSchema: PeeringServicesListBySubscriptionOutput,
  }));
// Input Schema
export const PeeringServicesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PeeringServicesUpdateInput = typeof PeeringServicesUpdateInput.Type;

// Output Schema
export const PeeringServicesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PeeringServicePropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => PeeringServiceSkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PeeringServicesUpdateOutput =
  typeof PeeringServicesUpdateOutput.Type;

// The operation
/**
 * Updates tags for a peering service with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringServiceName - The name of the peering.
 */
export const PeeringServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PeeringServicesUpdateInput,
    outputSchema: PeeringServicesUpdateOutput,
  }),
);
// Input Schema
export const PeeringsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  peeringName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}",
    apiVersion: "2025-05-01",
  }),
);
export type PeeringsGetInput = typeof PeeringsGetInput.Type;

// Output Schema
export const PeeringsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => PeeringPropertiesSchema)),
  sku: Schema.suspend(() => PeeringSkuSchema),
  kind: Schema.suspend(() => KindSchema),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type PeeringsGetOutput = typeof PeeringsGetOutput.Type;

// The operation
/**
 * Gets an existing peering with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 */
export const PeeringsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PeeringsGetInput,
  outputSchema: PeeringsGetOutput,
}));
// Input Schema
export const PeeringsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringsListByResourceGroupInput =
  typeof PeeringsListByResourceGroupInput.Type;

// Output Schema
export const PeeringsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PeeringsListByResourceGroupOutput =
  typeof PeeringsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all of the peerings under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PeeringsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PeeringsListByResourceGroupInput,
    outputSchema: PeeringsListByResourceGroupOutput,
  }),
);
// Input Schema
export const PeeringsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Peering/peerings",
      apiVersion: "2025-05-01",
    }),
  );
export type PeeringsListBySubscriptionInput =
  typeof PeeringsListBySubscriptionInput.Type;

// Output Schema
export const PeeringsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PeeringsListBySubscriptionOutput =
  typeof PeeringsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all of the peerings under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PeeringsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PeeringsListBySubscriptionInput,
    outputSchema: PeeringsListBySubscriptionOutput,
  }),
);
// Input Schema
export const PeeringsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type PeeringsUpdateInput = typeof PeeringsUpdateInput.Type;

// Output Schema
export const PeeringsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => PeeringPropertiesSchema)),
  sku: Schema.suspend(() => PeeringSkuSchema),
  kind: Schema.suspend(() => KindSchema),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type PeeringsUpdateOutput = typeof PeeringsUpdateOutput.Type;

// The operation
/**
 * Updates tags for a peering with the specified name under the given subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 */
export const PeeringsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PeeringsUpdateInput,
  outputSchema: PeeringsUpdateOutput,
}));
// Input Schema
export const PrefixesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringServiceName: Schema.String.pipe(T.PathParam()),
    prefixName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PeeringServicePrefixPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}/prefixes/{prefixName}",
      apiVersion: "2025-05-01",
    }),
  );
export type PrefixesCreateOrUpdateInput =
  typeof PrefixesCreateOrUpdateInput.Type;

// Output Schema
export const PrefixesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PeeringServicePrefixPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrefixesCreateOrUpdateOutput =
  typeof PrefixesCreateOrUpdateOutput.Type;

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
export const PrefixesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrefixesCreateOrUpdateInput,
    outputSchema: PrefixesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const PrefixesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type PrefixesDeleteInput = typeof PrefixesDeleteInput.Type;

// Output Schema
export const PrefixesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrefixesDeleteOutput = typeof PrefixesDeleteOutput.Type;

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
export const PrefixesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrefixesDeleteInput,
  outputSchema: PrefixesDeleteOutput,
}));
// Input Schema
export const PrefixesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type PrefixesGetInput = typeof PrefixesGetInput.Type;

// Output Schema
export const PrefixesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => PeeringServicePrefixPropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type PrefixesGetOutput = typeof PrefixesGetOutput.Type;

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
export const PrefixesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrefixesGetInput,
  outputSchema: PrefixesGetOutput,
}));
// Input Schema
export const PrefixesListByPeeringServiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type PrefixesListByPeeringServiceInput =
  typeof PrefixesListByPeeringServiceInput.Type;

// Output Schema
export const PrefixesListByPeeringServiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringServicePrefixSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PrefixesListByPeeringServiceOutput =
  typeof PrefixesListByPeeringServiceOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrefixesListByPeeringServiceInput,
    outputSchema: PrefixesListByPeeringServiceOutput,
  }));
// Input Schema
export const ReceivedRoutesListByPeeringInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type ReceivedRoutesListByPeeringInput =
  typeof ReceivedRoutesListByPeeringInput.Type;

// Output Schema
export const ReceivedRoutesListByPeeringOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringReceivedRouteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ReceivedRoutesListByPeeringOutput =
  typeof ReceivedRoutesListByPeeringOutput.Type;

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
export const ReceivedRoutesListByPeering = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReceivedRoutesListByPeeringInput,
    outputSchema: ReceivedRoutesListByPeeringOutput,
  }),
);
// Input Schema
export const RegisteredAsnsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    registeredAsnName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PeeringRegisteredAsnPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredAsns/{registeredAsnName}",
      apiVersion: "2025-05-01",
    }),
  );
export type RegisteredAsnsCreateOrUpdateInput =
  typeof RegisteredAsnsCreateOrUpdateInput.Type;

// Output Schema
export const RegisteredAsnsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PeeringRegisteredAsnPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RegisteredAsnsCreateOrUpdateOutput =
  typeof RegisteredAsnsCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegisteredAsnsCreateOrUpdateInput,
    outputSchema: RegisteredAsnsCreateOrUpdateOutput,
  }));
// Input Schema
export const RegisteredAsnsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RegisteredAsnsDeleteInput = typeof RegisteredAsnsDeleteInput.Type;

// Output Schema
export const RegisteredAsnsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RegisteredAsnsDeleteOutput = typeof RegisteredAsnsDeleteOutput.Type;

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
export const RegisteredAsnsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegisteredAsnsDeleteInput,
    outputSchema: RegisteredAsnsDeleteOutput,
  }),
);
// Input Schema
export const RegisteredAsnsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    registeredAsnName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredAsns/{registeredAsnName}",
    apiVersion: "2025-05-01",
  }),
);
export type RegisteredAsnsGetInput = typeof RegisteredAsnsGetInput.Type;

// Output Schema
export const RegisteredAsnsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PeeringRegisteredAsnPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RegisteredAsnsGetOutput = typeof RegisteredAsnsGetOutput.Type;

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
export const RegisteredAsnsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RegisteredAsnsGetInput,
  outputSchema: RegisteredAsnsGetOutput,
}));
// Input Schema
export const RegisteredAsnsListByPeeringInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredAsns",
      apiVersion: "2025-05-01",
    }),
  );
export type RegisteredAsnsListByPeeringInput =
  typeof RegisteredAsnsListByPeeringInput.Type;

// Output Schema
export const RegisteredAsnsListByPeeringOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringRegisteredAsnSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type RegisteredAsnsListByPeeringOutput =
  typeof RegisteredAsnsListByPeeringOutput.Type;

// The operation
/**
 * Lists all registered ASNs under the given subscription, resource group and peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peeringName - The name of the peering.
 */
export const RegisteredAsnsListByPeering = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegisteredAsnsListByPeeringInput,
    outputSchema: RegisteredAsnsListByPeeringOutput,
  }),
);
// Input Schema
export const RegisteredPrefixesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    registeredPrefixName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PeeringRegisteredPrefixPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredPrefixes/{registeredPrefixName}",
      apiVersion: "2025-05-01",
    }),
  );
export type RegisteredPrefixesCreateOrUpdateInput =
  typeof RegisteredPrefixesCreateOrUpdateInput.Type;

// Output Schema
export const RegisteredPrefixesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PeeringRegisteredPrefixPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RegisteredPrefixesCreateOrUpdateOutput =
  typeof RegisteredPrefixesCreateOrUpdateOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegisteredPrefixesCreateOrUpdateInput,
    outputSchema: RegisteredPrefixesCreateOrUpdateOutput,
  }));
// Input Schema
export const RegisteredPrefixesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RegisteredPrefixesDeleteInput =
  typeof RegisteredPrefixesDeleteInput.Type;

// Output Schema
export const RegisteredPrefixesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RegisteredPrefixesDeleteOutput =
  typeof RegisteredPrefixesDeleteOutput.Type;

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
export const RegisteredPrefixesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegisteredPrefixesDeleteInput,
    outputSchema: RegisteredPrefixesDeleteOutput,
  }),
);
// Input Schema
export const RegisteredPrefixesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RegisteredPrefixesGetInput = typeof RegisteredPrefixesGetInput.Type;

// Output Schema
export const RegisteredPrefixesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PeeringRegisteredPrefixPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RegisteredPrefixesGetOutput =
  typeof RegisteredPrefixesGetOutput.Type;

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
export const RegisteredPrefixesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegisteredPrefixesGetInput,
    outputSchema: RegisteredPrefixesGetOutput,
  }),
);
// Input Schema
export const RegisteredPrefixesListByPeeringInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peerings/{peeringName}/registeredPrefixes",
      apiVersion: "2025-05-01",
    }),
  );
export type RegisteredPrefixesListByPeeringInput =
  typeof RegisteredPrefixesListByPeeringInput.Type;

// Output Schema
export const RegisteredPrefixesListByPeeringOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PeeringRegisteredPrefixSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type RegisteredPrefixesListByPeeringOutput =
  typeof RegisteredPrefixesListByPeeringOutput.Type;

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
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegisteredPrefixesListByPeeringInput,
    outputSchema: RegisteredPrefixesListByPeeringOutput,
  }));
// Input Schema
export const RegisteredPrefixesValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RegisteredPrefixesValidateInput =
  typeof RegisteredPrefixesValidateInput.Type;

// Output Schema
export const RegisteredPrefixesValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PeeringRegisteredPrefixPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RegisteredPrefixesValidateOutput =
  typeof RegisteredPrefixesValidateOutput.Type;

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
export const RegisteredPrefixesValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegisteredPrefixesValidateInput,
    outputSchema: RegisteredPrefixesValidateOutput,
  }),
);
// Input Schema
export const RpUnbilledPrefixesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type RpUnbilledPrefixesListInput =
  typeof RpUnbilledPrefixesListInput.Type;

// Output Schema
export const RpUnbilledPrefixesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => RpUnbilledPrefixSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type RpUnbilledPrefixesListOutput =
  typeof RpUnbilledPrefixesListOutput.Type;

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
export const RpUnbilledPrefixesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RpUnbilledPrefixesListInput,
    outputSchema: RpUnbilledPrefixesListOutput,
  }),
);
