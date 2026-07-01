/**
 * Azure Privatedns API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PrivateZonesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  properties?: {
    maxNumberOfRecordSets?: number;
    numberOfRecordSets?: number;
    maxNumberOfVirtualNetworkLinks?: number;
    numberOfVirtualNetworkLinks?: number;
    maxNumberOfVirtualNetworkLinksWithRegistration?: number;
    numberOfVirtualNetworkLinksWithRegistration?: number;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    internalId?: string;
  };
  tags?: Record<string, string>;
  location?: string;
  etag?: string;
}
export const PrivateZonesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateZoneName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        maxNumberOfRecordSets: Schema.optional(Schema.Number),
        numberOfRecordSets: Schema.optional(Schema.Number),
        maxNumberOfVirtualNetworkLinks: Schema.optional(Schema.Number),
        numberOfVirtualNetworkLinks: Schema.optional(Schema.Number),
        maxNumberOfVirtualNetworkLinksWithRegistration: Schema.optional(
          Schema.Number,
        ),
        numberOfVirtualNetworkLinksWithRegistration: Schema.optional(
          Schema.Number,
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        internalId: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateZonesCreateOrUpdateInput>;

// Output Schema
export interface PrivateZonesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const PrivateZonesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PrivateZonesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Private DNS zone. Does not modify Links to virtual networks or DNS records within the zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the Private DNS zone (without a terminating dot).
 * @param If-Match - The ETag of the Private DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new Private DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored.
 */
export const PrivateZonesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateZonesCreateOrUpdateInput,
    outputSchema: PrivateZonesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface PrivateZonesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
}
export const PrivateZonesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateZoneName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateZonesDeleteInput>;

// Output Schema
export type PrivateZonesDeleteOutput = void;
export const PrivateZonesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateZonesDeleteOutput>;

// The operation
/**
 * Deletes a Private DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone. Private DNS zone cannot be deleted unless all virtual network links to it are removed.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the Private DNS zone (without a terminating dot).
 * @param If-Match - The ETag of the Private DNS zone. Omit this value to always delete the current zone. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes.
 */
export const PrivateZonesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrivateZonesDeleteInput,
  outputSchema: PrivateZonesDeleteOutput,
}));
// Input Schema
export interface PrivateZonesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
}
export const PrivateZonesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateZoneName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<PrivateZonesGetInput>;

// Output Schema
export interface PrivateZonesGetOutput {
  id?: string;
  name?: string;
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
export const PrivateZonesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PrivateZonesGetOutput>;

// The operation
/**
 * Gets a Private DNS zone. Retrieves the zone properties, but not the virtual networks links or the record sets within the zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the Private DNS zone (without a terminating dot).
 */
export const PrivateZonesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrivateZonesGetInput,
  outputSchema: PrivateZonesGetOutput,
}));
// Input Schema
export interface PrivateZonesListInput {
  subscriptionId: string;
  $top?: number;
}
export const PrivateZonesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/privateDnsZones",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<PrivateZonesListInput>;

// Output Schema
export interface PrivateZonesListOutput {
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
export const PrivateZonesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<PrivateZonesListOutput>;

// The operation
/**
 * Lists the Private DNS zones in all resource groups in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $top - The maximum number of Private DNS zones to return. If not specified, returns up to 100 zones.
 */
export const PrivateZonesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrivateZonesListInput,
  outputSchema: PrivateZonesListOutput,
}));
// Input Schema
export interface PrivateZonesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
}
export const PrivateZonesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateZonesListByResourceGroupInput>;

// Output Schema
export interface PrivateZonesListByResourceGroupOutput {
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
export const PrivateZonesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<PrivateZonesListByResourceGroupOutput>;

// The operation
/**
 * Lists the Private DNS zones within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of record sets to return. If not specified, returns up to 100 record sets.
 */
export const PrivateZonesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateZonesListByResourceGroupInput,
    outputSchema: PrivateZonesListByResourceGroupOutput,
  }));
// Input Schema
export interface PrivateZonesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  properties?: {
    maxNumberOfRecordSets?: number;
    numberOfRecordSets?: number;
    maxNumberOfVirtualNetworkLinks?: number;
    numberOfVirtualNetworkLinks?: number;
    maxNumberOfVirtualNetworkLinksWithRegistration?: number;
    numberOfVirtualNetworkLinksWithRegistration?: number;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    internalId?: string;
  };
  tags?: Record<string, string>;
  location?: string;
  etag?: string;
}
export const PrivateZonesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateZoneName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        maxNumberOfRecordSets: Schema.optional(Schema.Number),
        numberOfRecordSets: Schema.optional(Schema.Number),
        maxNumberOfVirtualNetworkLinks: Schema.optional(Schema.Number),
        numberOfVirtualNetworkLinks: Schema.optional(Schema.Number),
        maxNumberOfVirtualNetworkLinksWithRegistration: Schema.optional(
          Schema.Number,
        ),
        numberOfVirtualNetworkLinksWithRegistration: Schema.optional(
          Schema.Number,
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        internalId: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateZonesUpdateInput>;

// Output Schema
export interface PrivateZonesUpdateOutput {
  id?: string;
  name?: string;
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
export const PrivateZonesUpdateOutput =
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
  }) as unknown as Schema.Codec<PrivateZonesUpdateOutput>;

// The operation
/**
 * Updates a Private DNS zone. Does not modify virtual network links or DNS records within the zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the Private DNS zone (without a terminating dot).
 * @param If-Match - The ETag of the Private DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const PrivateZonesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PrivateZonesUpdateInput,
  outputSchema: PrivateZonesUpdateOutput,
}));
// Input Schema
export interface RecordSetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  recordType: "A" | "AAAA" | "CNAME" | "MX" | "PTR" | "SOA" | "SRV" | "TXT";
  relativeRecordSetName: string;
  properties?: {
    metadata?: Record<string, string>;
    ttl?: number;
    fqdn?: string;
    isAutoRegistered?: boolean;
    aRecords?: { ipv4Address?: string }[];
    aaaaRecords?: { ipv6Address?: string }[];
    cnameRecord?: { cname?: string };
    mxRecords?: { preference?: number; exchange?: string }[];
    ptrRecords?: { ptrdname?: string }[];
    soaRecord?: {
      host?: string;
      email?: string;
      serialNumber?: number;
      refreshTime?: number;
      retryTime?: number;
      expireTime?: number;
      minimumTtl?: number;
    };
    srvRecords?: {
      priority?: number;
      weight?: number;
      port?: number;
      target?: string;
    }[];
    txtRecords?: { value?: string[] }[];
  };
  etag?: string;
}
export const RecordSetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateZoneName: Schema.String.pipe(T.PathParam()),
    recordType: Schema.Literals([
      "A",
      "AAAA",
      "CNAME",
      "MX",
      "PTR",
      "SOA",
      "SRV",
      "TXT",
    ]).pipe(T.PathParam()),
    relativeRecordSetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        ttl: Schema.optional(Schema.Number),
        fqdn: Schema.optional(Schema.String),
        isAutoRegistered: Schema.optional(Schema.Boolean),
        aRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipv4Address: Schema.optional(Schema.String),
            }),
          ),
        ),
        aaaaRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipv6Address: Schema.optional(Schema.String),
            }),
          ),
        ),
        cnameRecord: Schema.optional(
          Schema.Struct({
            cname: Schema.optional(Schema.String),
          }),
        ),
        mxRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              preference: Schema.optional(Schema.Number),
              exchange: Schema.optional(Schema.String),
            }),
          ),
        ),
        ptrRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ptrdname: Schema.optional(Schema.String),
            }),
          ),
        ),
        soaRecord: Schema.optional(
          Schema.Struct({
            host: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            serialNumber: Schema.optional(Schema.Number),
            refreshTime: Schema.optional(Schema.Number),
            retryTime: Schema.optional(Schema.Number),
            expireTime: Schema.optional(Schema.Number),
            minimumTtl: Schema.optional(Schema.Number),
          }),
        ),
        srvRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              priority: Schema.optional(Schema.Number),
              weight: Schema.optional(Schema.Number),
              port: Schema.optional(Schema.Number),
              target: Schema.optional(Schema.String),
            }),
          ),
        ),
        txtRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              value: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<RecordSetsCreateOrUpdateInput>;

// Output Schema
export interface RecordSetsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const RecordSetsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<RecordSetsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a record set within a Private DNS zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the DNS zone (without a terminating dot).
 * @param recordType - The type of DNS record in this record set.
 * @param relativeRecordSetName - The name of the record set, relative to the name of the zone.
 * @param If-Match - The ETag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored.
 */
export const RecordSetsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecordSetsCreateOrUpdateInput,
    outputSchema: RecordSetsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface RecordSetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  recordType: "A" | "AAAA" | "CNAME" | "MX" | "PTR" | "SOA" | "SRV" | "TXT";
  relativeRecordSetName: string;
}
export const RecordSetsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateZoneName: Schema.String.pipe(T.PathParam()),
  recordType: Schema.Literals([
    "A",
    "AAAA",
    "CNAME",
    "MX",
    "PTR",
    "SOA",
    "SRV",
    "TXT",
  ]).pipe(T.PathParam()),
  relativeRecordSetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName}",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<RecordSetsDeleteInput>;

// Output Schema
export type RecordSetsDeleteOutput = void;
export const RecordSetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RecordSetsDeleteOutput>;

// The operation
/**
 * Deletes a record set from a Private DNS zone. This operation cannot be undone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the DNS zone (without a terminating dot).
 * @param recordType - The type of DNS record in this record set.
 * @param relativeRecordSetName - The name of the record set, relative to the name of the zone.
 * @param If-Match - The ETag of the record set. Omit this value to always delete the current record set. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes.
 */
export const RecordSetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecordSetsDeleteInput,
  outputSchema: RecordSetsDeleteOutput,
}));
// Input Schema
export interface RecordSetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  recordType: "A" | "AAAA" | "CNAME" | "MX" | "PTR" | "SOA" | "SRV" | "TXT";
  relativeRecordSetName: string;
}
export const RecordSetsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateZoneName: Schema.String.pipe(T.PathParam()),
  recordType: Schema.Literals([
    "A",
    "AAAA",
    "CNAME",
    "MX",
    "PTR",
    "SOA",
    "SRV",
    "TXT",
  ]).pipe(T.PathParam()),
  relativeRecordSetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName}",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<RecordSetsGetInput>;

// Output Schema
export interface RecordSetsGetOutput {
  id?: string;
  name?: string;
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
export const RecordSetsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RecordSetsGetOutput>;

// The operation
/**
 * Gets a record set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the DNS zone (without a terminating dot).
 * @param recordType - The type of DNS record in this record set.
 * @param relativeRecordSetName - The name of the record set, relative to the name of the zone.
 */
export const RecordSetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecordSetsGetInput,
  outputSchema: RecordSetsGetOutput,
}));
// Input Schema
export interface RecordSetsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  $top?: number;
  $recordsetnamesuffix?: string;
}
export const RecordSetsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateZoneName: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
  $recordsetnamesuffix: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/aLL",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<RecordSetsListInput>;

// Output Schema
export interface RecordSetsListOutput {
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
export const RecordSetsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RecordSetsListOutput>;

// The operation
/**
 * Lists all record sets in a Private DNS zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the Private DNS zone (without a terminating dot).
 * @param $top - The maximum number of record sets to return. If not specified, returns up to 100 record sets.
 * @param $recordsetnamesuffix - The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with ".<recordsetnamesuffix>".
 */
export const RecordSetsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecordSetsListInput,
  outputSchema: RecordSetsListOutput,
}));
// Input Schema
export interface RecordSetsListByTypeInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  recordType: "A" | "AAAA" | "CNAME" | "MX" | "PTR" | "SOA" | "SRV" | "TXT";
  $top?: number;
  $recordsetnamesuffix?: string;
}
export const RecordSetsListByTypeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateZoneName: Schema.String.pipe(T.PathParam()),
    recordType: Schema.Literals([
      "A",
      "AAAA",
      "CNAME",
      "MX",
      "PTR",
      "SOA",
      "SRV",
      "TXT",
    ]).pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $recordsetnamesuffix: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<RecordSetsListByTypeInput>;

// Output Schema
export interface RecordSetsListByTypeOutput {
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
export const RecordSetsListByTypeOutput =
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
  }) as unknown as Schema.Codec<RecordSetsListByTypeOutput>;

// The operation
/**
 * Lists the record sets of a specified type in a Private DNS zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the DNS zone (without a terminating dot).
 * @param recordType - The type of DNS record in this record set.
 * @param $top - The maximum number of record sets to return. If not specified, returns up to 100 record sets.
 * @param $recordsetnamesuffix - The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with ".<recordsetnamesuffix>".
 */
export const RecordSetsListByType = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecordSetsListByTypeInput,
    outputSchema: RecordSetsListByTypeOutput,
  }),
);
// Input Schema
export interface RecordSetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  recordType: "A" | "AAAA" | "CNAME" | "MX" | "PTR" | "SOA" | "SRV" | "TXT";
  relativeRecordSetName: string;
  properties?: {
    metadata?: Record<string, string>;
    ttl?: number;
    fqdn?: string;
    isAutoRegistered?: boolean;
    aRecords?: { ipv4Address?: string }[];
    aaaaRecords?: { ipv6Address?: string }[];
    cnameRecord?: { cname?: string };
    mxRecords?: { preference?: number; exchange?: string }[];
    ptrRecords?: { ptrdname?: string }[];
    soaRecord?: {
      host?: string;
      email?: string;
      serialNumber?: number;
      refreshTime?: number;
      retryTime?: number;
      expireTime?: number;
      minimumTtl?: number;
    };
    srvRecords?: {
      priority?: number;
      weight?: number;
      port?: number;
      target?: string;
    }[];
    txtRecords?: { value?: string[] }[];
  };
  etag?: string;
}
export const RecordSetsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateZoneName: Schema.String.pipe(T.PathParam()),
  recordType: Schema.Literals([
    "A",
    "AAAA",
    "CNAME",
    "MX",
    "PTR",
    "SOA",
    "SRV",
    "TXT",
  ]).pipe(T.PathParam()),
  relativeRecordSetName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      ttl: Schema.optional(Schema.Number),
      fqdn: Schema.optional(Schema.String),
      isAutoRegistered: Schema.optional(Schema.Boolean),
      aRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipv4Address: Schema.optional(Schema.String),
          }),
        ),
      ),
      aaaaRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipv6Address: Schema.optional(Schema.String),
          }),
        ),
      ),
      cnameRecord: Schema.optional(
        Schema.Struct({
          cname: Schema.optional(Schema.String),
        }),
      ),
      mxRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            preference: Schema.optional(Schema.Number),
            exchange: Schema.optional(Schema.String),
          }),
        ),
      ),
      ptrRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ptrdname: Schema.optional(Schema.String),
          }),
        ),
      ),
      soaRecord: Schema.optional(
        Schema.Struct({
          host: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          serialNumber: Schema.optional(Schema.Number),
          refreshTime: Schema.optional(Schema.Number),
          retryTime: Schema.optional(Schema.Number),
          expireTime: Schema.optional(Schema.Number),
          minimumTtl: Schema.optional(Schema.Number),
        }),
      ),
      srvRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            priority: Schema.optional(Schema.Number),
            weight: Schema.optional(Schema.Number),
            port: Schema.optional(Schema.Number),
            target: Schema.optional(Schema.String),
          }),
        ),
      ),
      txtRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            value: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      ),
    }),
  ),
  etag: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName}",
    apiVersion: "2024-06-01",
  }),
) as unknown as Schema.Codec<RecordSetsUpdateInput>;

// Output Schema
export interface RecordSetsUpdateOutput {
  id?: string;
  name?: string;
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
export const RecordSetsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<RecordSetsUpdateOutput>;

// The operation
/**
 * Updates a record set within a Private DNS zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the DNS zone (without a terminating dot).
 * @param recordType - The type of DNS record in this record set.
 * @param relativeRecordSetName - The name of the record set, relative to the name of the zone.
 * @param If-Match - The ETag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 */
export const RecordSetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RecordSetsUpdateInput,
  outputSchema: RecordSetsUpdateOutput,
}));
// Input Schema
export interface VirtualNetworkLinksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  virtualNetworkLinkName: string;
  properties?: {
    virtualNetwork?: { id?: string };
    registrationEnabled?: boolean;
    resolutionPolicy?: "Default" | "NxDomainRedirect";
    virtualNetworkLinkState?: "InProgress" | "Completed";
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
  tags?: Record<string, string>;
  location?: string;
  etag?: string;
}
export const VirtualNetworkLinksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateZoneName: Schema.String.pipe(T.PathParam()),
    virtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        virtualNetwork: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        registrationEnabled: Schema.optional(Schema.Boolean),
        resolutionPolicy: Schema.optional(
          Schema.Literals(["Default", "NxDomainRedirect"]),
        ),
        virtualNetworkLinkState: Schema.optional(
          Schema.Literals(["InProgress", "Completed"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkLinksCreateOrUpdateInput>;

// Output Schema
export interface VirtualNetworkLinksCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualNetworkLinksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworkLinksCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a virtual network link to the specified Private DNS zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the Private DNS zone (without a terminating dot).
 * @param virtualNetworkLinkName - The name of the virtual network link.
 * @param If-Match - The ETag of the virtual network link to the Private DNS zone. Omit this value to always overwrite the current virtual network link. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new virtual network link to the Private DNS zone to be created, but to prevent updating an existing link. Other values will be ignored.
 */
export const VirtualNetworkLinksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworkLinksCreateOrUpdateInput,
    outputSchema: VirtualNetworkLinksCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualNetworkLinksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  virtualNetworkLinkName: string;
}
export const VirtualNetworkLinksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateZoneName: Schema.String.pipe(T.PathParam()),
    virtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkLinksDeleteInput>;

// Output Schema
export type VirtualNetworkLinksDeleteOutput = void;
export const VirtualNetworkLinksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualNetworkLinksDeleteOutput>;

// The operation
/**
 * Deletes a virtual network link to the specified Private DNS zone. WARNING: In case of a registration virtual network, all auto-registered DNS records in the zone for the virtual network will also be deleted. This operation cannot be undone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the Private DNS zone (without a terminating dot).
 * @param virtualNetworkLinkName - The name of the virtual network link.
 * @param If-Match - The ETag of the virtual network link to the Private DNS zone. Omit this value to always delete the current zone. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes.
 */
export const VirtualNetworkLinksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworkLinksDeleteInput,
    outputSchema: VirtualNetworkLinksDeleteOutput,
  }),
);
// Input Schema
export interface VirtualNetworkLinksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  virtualNetworkLinkName: string;
}
export const VirtualNetworkLinksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateZoneName: Schema.String.pipe(T.PathParam()),
    virtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkLinksGetInput>;

// Output Schema
export interface VirtualNetworkLinksGetOutput {
  id?: string;
  name?: string;
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
export const VirtualNetworkLinksGetOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworkLinksGetOutput>;

// The operation
/**
 * Gets a virtual network link to the specified Private DNS zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the Private DNS zone (without a terminating dot).
 * @param virtualNetworkLinkName - The name of the virtual network link.
 */
export const VirtualNetworkLinksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworkLinksGetInput,
    outputSchema: VirtualNetworkLinksGetOutput,
  }),
);
// Input Schema
export interface VirtualNetworkLinksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  $top?: number;
}
export const VirtualNetworkLinksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateZoneName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkLinksListInput>;

// Output Schema
export interface VirtualNetworkLinksListOutput {
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
export const VirtualNetworkLinksListOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworkLinksListOutput>;

// The operation
/**
 * Lists the virtual network links to the specified Private DNS zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the Private DNS zone (without a terminating dot).
 * @param $top - The maximum number of virtual network links to return. If not specified, returns up to 100 virtual network links.
 */
export const VirtualNetworkLinksList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworkLinksListInput,
    outputSchema: VirtualNetworkLinksListOutput,
  }),
);
// Input Schema
export interface VirtualNetworkLinksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateZoneName: string;
  virtualNetworkLinkName: string;
  properties?: {
    virtualNetwork?: { id?: string };
    registrationEnabled?: boolean;
    resolutionPolicy?: "Default" | "NxDomainRedirect";
    virtualNetworkLinkState?: "InProgress" | "Completed";
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
  tags?: Record<string, string>;
  location?: string;
  etag?: string;
}
export const VirtualNetworkLinksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateZoneName: Schema.String.pipe(T.PathParam()),
    virtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        virtualNetwork: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        registrationEnabled: Schema.optional(Schema.Boolean),
        resolutionPolicy: Schema.optional(
          Schema.Literals(["Default", "NxDomainRedirect"]),
        ),
        virtualNetworkLinkState: Schema.optional(
          Schema.Literals(["InProgress", "Completed"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/virtualNetworkLinks/{virtualNetworkLinkName}",
      apiVersion: "2024-06-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkLinksUpdateInput>;

// Output Schema
export interface VirtualNetworkLinksUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualNetworkLinksUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworkLinksUpdateOutput>;

// The operation
/**
 * Updates a virtual network link to the specified Private DNS zone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateZoneName - The name of the Private DNS zone (without a terminating dot).
 * @param virtualNetworkLinkName - The name of the virtual network link.
 * @param If-Match - The ETag of the virtual network link to the Private DNS zone. Omit this value to always overwrite the current virtual network link. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const VirtualNetworkLinksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworkLinksUpdateInput,
    outputSchema: VirtualNetworkLinksUpdateOutput,
  }),
);
