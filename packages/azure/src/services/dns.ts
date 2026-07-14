/**
 * Azure Dns API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DnsResourceReferenceGetByTargetResourcesInput {
  subscriptionId: string;
  properties?: { targetResources?: { id?: string }[] };
}
export const DnsResourceReferenceGetByTargetResourcesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetResources: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/getDnsResourceReference",
      apiVersion: "2018-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResourceReferenceGetByTargetResourcesInput>;

// Output Schema
export interface DnsResourceReferenceGetByTargetResourcesOutput {
  properties?: {
    dnsResourceReferences?: {
      dnsResources?: { id?: string }[];
      targetResource?: { id?: string };
    }[];
  };
}
export const DnsResourceReferenceGetByTargetResourcesOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        dnsResourceReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              dnsResources: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                  }),
                ),
              ),
              targetResource: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<DnsResourceReferenceGetByTargetResourcesOutput>;

// The operation
/**
 * Returns the DNS records specified by the referencing targetResourceIds.
 *
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const DnsResourceReferenceGetByTargetResources =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResourceReferenceGetByTargetResourcesInput,
    outputSchema: DnsResourceReferenceGetByTargetResourcesOutput,
  }));
// Input Schema
export interface RecordSetsCreateOrUpdateInput {
  resourceGroupName: string;
  zoneName: string;
  relativeRecordSetName: string;
  recordType:
    | "A"
    | "AAAA"
    | "CAA"
    | "CNAME"
    | "MX"
    | "NS"
    | "PTR"
    | "SOA"
    | "SRV"
    | "TXT";
  subscriptionId: string;
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
  properties?: {
    metadata?: Record<string, string>;
    TTL?: number;
    fqdn?: string;
    provisioningState?: string;
    targetResource?: { id?: string };
    ARecords?: { ipv4Address?: string }[];
    AAAARecords?: { ipv6Address?: string }[];
    MXRecords?: { preference?: number; exchange?: string }[];
    NSRecords?: { nsdname?: string }[];
    PTRRecords?: { ptrdname?: string }[];
    SRVRecords?: {
      priority?: number;
      weight?: number;
      port?: number;
      target?: string;
    }[];
    TXTRecords?: { value?: string[] }[];
    CNAMERecord?: { cname?: string };
    SOARecord?: {
      host?: string;
      email?: string;
      serialNumber?: number;
      refreshTime?: number;
      retryTime?: number;
      expireTime?: number;
      minimumTTL?: number;
    };
    caaRecords?: { flags?: number; tag?: string; value?: string }[];
  };
}
export const RecordSetsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    zoneName: Schema.String.pipe(T.PathParam()),
    relativeRecordSetName: Schema.String.pipe(T.PathParam()),
    recordType: Schema.Literals([
      "A",
      "AAAA",
      "CAA",
      "CNAME",
      "MX",
      "NS",
      "PTR",
      "SOA",
      "SRV",
      "TXT",
    ]).pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        TTL: Schema.optional(Schema.Number),
        fqdn: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        targetResource: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        ARecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipv4Address: Schema.optional(Schema.String),
            }),
          ),
        ),
        AAAARecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipv6Address: Schema.optional(Schema.String),
            }),
          ),
        ),
        MXRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              preference: Schema.optional(Schema.Number),
              exchange: Schema.optional(Schema.String),
            }),
          ),
        ),
        NSRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nsdname: Schema.optional(Schema.String),
            }),
          ),
        ),
        PTRRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ptrdname: Schema.optional(Schema.String),
            }),
          ),
        ),
        SRVRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              priority: Schema.optional(Schema.Number),
              weight: Schema.optional(Schema.Number),
              port: Schema.optional(Schema.Number),
              target: Schema.optional(Schema.String),
            }),
          ),
        ),
        TXTRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              value: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        CNAMERecord: Schema.optional(
          Schema.Struct({
            cname: Schema.optional(Schema.String),
          }),
        ),
        SOARecord: Schema.optional(
          Schema.Struct({
            host: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            serialNumber: Schema.optional(Schema.Number),
            refreshTime: Schema.optional(Schema.Number),
            retryTime: Schema.optional(Schema.Number),
            expireTime: Schema.optional(Schema.Number),
            minimumTTL: Schema.optional(Schema.Number),
          }),
        ),
        caaRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              flags: Schema.optional(Schema.Number),
              tag: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
      apiVersion: "2018-05-01",
    }),
  ) as unknown as Schema.Codec<RecordSetsCreateOrUpdateInput>;

// Output Schema
export interface RecordSetsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
  properties?: {
    metadata?: Record<string, string>;
    TTL?: number;
    fqdn?: string;
    provisioningState?: string;
    targetResource?: { id?: string };
    ARecords?: { ipv4Address?: string }[];
    AAAARecords?: { ipv6Address?: string }[];
    MXRecords?: { preference?: number; exchange?: string }[];
    NSRecords?: { nsdname?: string }[];
    PTRRecords?: { ptrdname?: string }[];
    SRVRecords?: {
      priority?: number;
      weight?: number;
      port?: number;
      target?: string;
    }[];
    TXTRecords?: { value?: string[] }[];
    CNAMERecord?: { cname?: string };
    SOARecord?: {
      host?: string;
      email?: string;
      serialNumber?: number;
      refreshTime?: number;
      retryTime?: number;
      expireTime?: number;
      minimumTTL?: number;
    };
    caaRecords?: { flags?: number; tag?: string; value?: string }[];
  };
}
export const RecordSetsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        TTL: Schema.optional(Schema.Number),
        fqdn: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        targetResource: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        ARecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipv4Address: Schema.optional(Schema.String),
            }),
          ),
        ),
        AAAARecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipv6Address: Schema.optional(Schema.String),
            }),
          ),
        ),
        MXRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              preference: Schema.optional(Schema.Number),
              exchange: Schema.optional(Schema.String),
            }),
          ),
        ),
        NSRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              nsdname: Schema.optional(Schema.String),
            }),
          ),
        ),
        PTRRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ptrdname: Schema.optional(Schema.String),
            }),
          ),
        ),
        SRVRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              priority: Schema.optional(Schema.Number),
              weight: Schema.optional(Schema.Number),
              port: Schema.optional(Schema.Number),
              target: Schema.optional(Schema.String),
            }),
          ),
        ),
        TXTRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              value: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        CNAMERecord: Schema.optional(
          Schema.Struct({
            cname: Schema.optional(Schema.String),
          }),
        ),
        SOARecord: Schema.optional(
          Schema.Struct({
            host: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            serialNumber: Schema.optional(Schema.Number),
            refreshTime: Schema.optional(Schema.Number),
            retryTime: Schema.optional(Schema.Number),
            expireTime: Schema.optional(Schema.Number),
            minimumTTL: Schema.optional(Schema.Number),
          }),
        ),
        caaRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              flags: Schema.optional(Schema.Number),
              tag: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<RecordSetsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a record set within a DNS zone.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param zoneName - The name of the DNS zone (without a terminating dot).
 * @param relativeRecordSetName - The name of the record set, relative to the name of the zone.
 * @param recordType - The type of DNS record in this record set. Record sets of type SOA can be updated but not created (they are created when the DNS zone is created).
 * @param If-Match - The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored.
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const RecordSetsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecordSetsCreateOrUpdateInput,
  outputSchema: RecordSetsCreateOrUpdateOutput,
}));
// Input Schema
export interface RecordSetsDeleteInput {
  resourceGroupName: string;
  zoneName: string;
  relativeRecordSetName: string;
  recordType:
    | "A"
    | "AAAA"
    | "CAA"
    | "CNAME"
    | "MX"
    | "NS"
    | "PTR"
    | "SOA"
    | "SRV"
    | "TXT";
  subscriptionId: string;
}
export const RecordSetsDeleteInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  zoneName: Schema.String.pipe(T.PathParam()),
  relativeRecordSetName: Schema.String.pipe(T.PathParam()),
  recordType: Schema.Literals([
    "A",
    "AAAA",
    "CAA",
    "CNAME",
    "MX",
    "NS",
    "PTR",
    "SOA",
    "SRV",
    "TXT",
  ]).pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
    apiVersion: "2018-05-01",
  }),
) as unknown as Schema.Codec<RecordSetsDeleteInput>;

// Output Schema
export type RecordSetsDeleteOutput = void;
export const RecordSetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RecordSetsDeleteOutput>;

// The operation
/**
 * Deletes a record set from a DNS zone. This operation cannot be undone.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param zoneName - The name of the DNS zone (without a terminating dot).
 * @param relativeRecordSetName - The name of the record set, relative to the name of the zone.
 * @param recordType - The type of DNS record in this record set. Record sets of type SOA cannot be deleted (they are deleted when the DNS zone is deleted).
 * @param If-Match - The etag of the record set. Omit this value to always delete the current record set. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes.
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const RecordSetsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecordSetsDeleteInput,
  outputSchema: RecordSetsDeleteOutput,
}));
// Input Schema
export interface RecordSetsGetInput {
  resourceGroupName: string;
  zoneName: string;
  relativeRecordSetName: string;
  recordType:
    | "A"
    | "AAAA"
    | "CAA"
    | "CNAME"
    | "MX"
    | "NS"
    | "PTR"
    | "SOA"
    | "SRV"
    | "TXT";
  subscriptionId: string;
}
export const RecordSetsGetInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  zoneName: Schema.String.pipe(T.PathParam()),
  relativeRecordSetName: Schema.String.pipe(T.PathParam()),
  recordType: Schema.Literals([
    "A",
    "AAAA",
    "CAA",
    "CNAME",
    "MX",
    "NS",
    "PTR",
    "SOA",
    "SRV",
    "TXT",
  ]).pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
    apiVersion: "2018-05-01",
  }),
) as unknown as Schema.Codec<RecordSetsGetInput>;

// Output Schema
export interface RecordSetsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
  properties?: {
    metadata?: Record<string, string>;
    TTL?: number;
    fqdn?: string;
    provisioningState?: string;
    targetResource?: { id?: string };
    ARecords?: { ipv4Address?: string }[];
    AAAARecords?: { ipv6Address?: string }[];
    MXRecords?: { preference?: number; exchange?: string }[];
    NSRecords?: { nsdname?: string }[];
    PTRRecords?: { ptrdname?: string }[];
    SRVRecords?: {
      priority?: number;
      weight?: number;
      port?: number;
      target?: string;
    }[];
    TXTRecords?: { value?: string[] }[];
    CNAMERecord?: { cname?: string };
    SOARecord?: {
      host?: string;
      email?: string;
      serialNumber?: number;
      refreshTime?: number;
      retryTime?: number;
      expireTime?: number;
      minimumTTL?: number;
    };
    caaRecords?: { flags?: number; tag?: string; value?: string }[];
  };
}
export const RecordSetsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      TTL: Schema.optional(Schema.Number),
      fqdn: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      targetResource: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      ARecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipv4Address: Schema.optional(Schema.String),
          }),
        ),
      ),
      AAAARecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipv6Address: Schema.optional(Schema.String),
          }),
        ),
      ),
      MXRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            preference: Schema.optional(Schema.Number),
            exchange: Schema.optional(Schema.String),
          }),
        ),
      ),
      NSRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            nsdname: Schema.optional(Schema.String),
          }),
        ),
      ),
      PTRRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ptrdname: Schema.optional(Schema.String),
          }),
        ),
      ),
      SRVRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            priority: Schema.optional(Schema.Number),
            weight: Schema.optional(Schema.Number),
            port: Schema.optional(Schema.Number),
            target: Schema.optional(Schema.String),
          }),
        ),
      ),
      TXTRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            value: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      ),
      CNAMERecord: Schema.optional(
        Schema.Struct({
          cname: Schema.optional(Schema.String),
        }),
      ),
      SOARecord: Schema.optional(
        Schema.Struct({
          host: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          serialNumber: Schema.optional(Schema.Number),
          refreshTime: Schema.optional(Schema.Number),
          retryTime: Schema.optional(Schema.Number),
          expireTime: Schema.optional(Schema.Number),
          minimumTTL: Schema.optional(Schema.Number),
        }),
      ),
      caaRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            flags: Schema.optional(Schema.Number),
            tag: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}) as unknown as Schema.Codec<RecordSetsGetOutput>;

// The operation
/**
 * Gets a record set.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param zoneName - The name of the DNS zone (without a terminating dot).
 * @param relativeRecordSetName - The name of the record set, relative to the name of the zone.
 * @param recordType - The type of DNS record in this record set.
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const RecordSetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecordSetsGetInput,
  outputSchema: RecordSetsGetOutput,
}));
// Input Schema
export interface RecordSetsListAllByDnsZoneInput {
  resourceGroupName: string;
  zoneName: string;
  subscriptionId: string;
  $top?: number;
  $recordsetnamesuffix?: string;
}
export const RecordSetsListAllByDnsZoneInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    zoneName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $recordsetnamesuffix: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/all",
      apiVersion: "2018-05-01",
    }),
  ) as unknown as Schema.Codec<RecordSetsListAllByDnsZoneInput>;

// Output Schema
export interface RecordSetsListAllByDnsZoneOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    etag?: string;
    properties?: {
      metadata?: Record<string, string>;
      TTL?: number;
      fqdn?: string;
      provisioningState?: string;
      targetResource?: { id?: string };
      ARecords?: { ipv4Address?: string }[];
      AAAARecords?: { ipv6Address?: string }[];
      MXRecords?: { preference?: number; exchange?: string }[];
      NSRecords?: { nsdname?: string }[];
      PTRRecords?: { ptrdname?: string }[];
      SRVRecords?: {
        priority?: number;
        weight?: number;
        port?: number;
        target?: string;
      }[];
      TXTRecords?: { value?: string[] }[];
      CNAMERecord?: { cname?: string };
      SOARecord?: {
        host?: string;
        email?: string;
        serialNumber?: number;
        refreshTime?: number;
        retryTime?: number;
        expireTime?: number;
        minimumTTL?: number;
      };
      caaRecords?: { flags?: number; tag?: string; value?: string }[];
    };
  }[];
  nextLink?: string;
}
export const RecordSetsListAllByDnsZoneOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              metadata: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              TTL: Schema.optional(Schema.Number),
              fqdn: Schema.optional(Schema.String),
              provisioningState: Schema.optional(Schema.String),
              targetResource: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              ARecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipv4Address: Schema.optional(Schema.String),
                  }),
                ),
              ),
              AAAARecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipv6Address: Schema.optional(Schema.String),
                  }),
                ),
              ),
              MXRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    preference: Schema.optional(Schema.Number),
                    exchange: Schema.optional(Schema.String),
                  }),
                ),
              ),
              NSRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nsdname: Schema.optional(Schema.String),
                  }),
                ),
              ),
              PTRRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ptrdname: Schema.optional(Schema.String),
                  }),
                ),
              ),
              SRVRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    priority: Schema.optional(Schema.Number),
                    weight: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.Number),
                    target: Schema.optional(Schema.String),
                  }),
                ),
              ),
              TXTRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    value: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              ),
              CNAMERecord: Schema.optional(
                Schema.Struct({
                  cname: Schema.optional(Schema.String),
                }),
              ),
              SOARecord: Schema.optional(
                Schema.Struct({
                  host: Schema.optional(Schema.String),
                  email: Schema.optional(Schema.String),
                  serialNumber: Schema.optional(Schema.Number),
                  refreshTime: Schema.optional(Schema.Number),
                  retryTime: Schema.optional(Schema.Number),
                  expireTime: Schema.optional(Schema.Number),
                  minimumTTL: Schema.optional(Schema.Number),
                }),
              ),
              caaRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    flags: Schema.optional(Schema.Number),
                    tag: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RecordSetsListAllByDnsZoneOutput>;

// The operation
/**
 * Lists all record sets in a DNS zone.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param zoneName - The name of the DNS zone (without a terminating dot).
 * @param $top - The maximum number of record sets to return. If not specified, returns up to 100 record sets.
 * @param $recordsetnamesuffix - The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix>
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const RecordSetsListAllByDnsZone = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecordSetsListAllByDnsZoneInput,
  outputSchema: RecordSetsListAllByDnsZoneOutput,
}));
// Input Schema
export interface RecordSetsListByDnsZoneInput {
  resourceGroupName: string;
  zoneName: string;
  subscriptionId: string;
  $top?: number;
  $recordsetnamesuffix?: string;
}
export const RecordSetsListByDnsZoneInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    zoneName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $recordsetnamesuffix: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/recordsets",
      apiVersion: "2018-05-01",
    }),
  ) as unknown as Schema.Codec<RecordSetsListByDnsZoneInput>;

// Output Schema
export interface RecordSetsListByDnsZoneOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    etag?: string;
    properties?: {
      metadata?: Record<string, string>;
      TTL?: number;
      fqdn?: string;
      provisioningState?: string;
      targetResource?: { id?: string };
      ARecords?: { ipv4Address?: string }[];
      AAAARecords?: { ipv6Address?: string }[];
      MXRecords?: { preference?: number; exchange?: string }[];
      NSRecords?: { nsdname?: string }[];
      PTRRecords?: { ptrdname?: string }[];
      SRVRecords?: {
        priority?: number;
        weight?: number;
        port?: number;
        target?: string;
      }[];
      TXTRecords?: { value?: string[] }[];
      CNAMERecord?: { cname?: string };
      SOARecord?: {
        host?: string;
        email?: string;
        serialNumber?: number;
        refreshTime?: number;
        retryTime?: number;
        expireTime?: number;
        minimumTTL?: number;
      };
      caaRecords?: { flags?: number; tag?: string; value?: string }[];
    };
  }[];
  nextLink?: string;
}
export const RecordSetsListByDnsZoneOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              metadata: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              TTL: Schema.optional(Schema.Number),
              fqdn: Schema.optional(Schema.String),
              provisioningState: Schema.optional(Schema.String),
              targetResource: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              ARecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipv4Address: Schema.optional(Schema.String),
                  }),
                ),
              ),
              AAAARecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipv6Address: Schema.optional(Schema.String),
                  }),
                ),
              ),
              MXRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    preference: Schema.optional(Schema.Number),
                    exchange: Schema.optional(Schema.String),
                  }),
                ),
              ),
              NSRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nsdname: Schema.optional(Schema.String),
                  }),
                ),
              ),
              PTRRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ptrdname: Schema.optional(Schema.String),
                  }),
                ),
              ),
              SRVRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    priority: Schema.optional(Schema.Number),
                    weight: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.Number),
                    target: Schema.optional(Schema.String),
                  }),
                ),
              ),
              TXTRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    value: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              ),
              CNAMERecord: Schema.optional(
                Schema.Struct({
                  cname: Schema.optional(Schema.String),
                }),
              ),
              SOARecord: Schema.optional(
                Schema.Struct({
                  host: Schema.optional(Schema.String),
                  email: Schema.optional(Schema.String),
                  serialNumber: Schema.optional(Schema.Number),
                  refreshTime: Schema.optional(Schema.Number),
                  retryTime: Schema.optional(Schema.Number),
                  expireTime: Schema.optional(Schema.Number),
                  minimumTTL: Schema.optional(Schema.Number),
                }),
              ),
              caaRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    flags: Schema.optional(Schema.Number),
                    tag: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RecordSetsListByDnsZoneOutput>;

// The operation
/**
 * Lists all record sets in a DNS zone.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param zoneName - The name of the DNS zone (without a terminating dot).
 * @param $top - The maximum number of record sets to return. If not specified, returns up to 100 record sets.
 * @param $recordsetnamesuffix - The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix>
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const RecordSetsListByDnsZone = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecordSetsListByDnsZoneInput,
  outputSchema: RecordSetsListByDnsZoneOutput,
}));
// Input Schema
export interface RecordSetsListByTypeInput {
  resourceGroupName: string;
  zoneName: string;
  recordType:
    | "A"
    | "AAAA"
    | "CAA"
    | "CNAME"
    | "MX"
    | "NS"
    | "PTR"
    | "SOA"
    | "SRV"
    | "TXT";
  subscriptionId: string;
  $top?: number;
  $recordsetnamesuffix?: string;
}
export const RecordSetsListByTypeInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    zoneName: Schema.String.pipe(T.PathParam()),
    recordType: Schema.Literals([
      "A",
      "AAAA",
      "CAA",
      "CNAME",
      "MX",
      "NS",
      "PTR",
      "SOA",
      "SRV",
      "TXT",
    ]).pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $recordsetnamesuffix: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}",
      apiVersion: "2018-05-01",
    }),
  ) as unknown as Schema.Codec<RecordSetsListByTypeInput>;

// Output Schema
export interface RecordSetsListByTypeOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    etag?: string;
    properties?: {
      metadata?: Record<string, string>;
      TTL?: number;
      fqdn?: string;
      provisioningState?: string;
      targetResource?: { id?: string };
      ARecords?: { ipv4Address?: string }[];
      AAAARecords?: { ipv6Address?: string }[];
      MXRecords?: { preference?: number; exchange?: string }[];
      NSRecords?: { nsdname?: string }[];
      PTRRecords?: { ptrdname?: string }[];
      SRVRecords?: {
        priority?: number;
        weight?: number;
        port?: number;
        target?: string;
      }[];
      TXTRecords?: { value?: string[] }[];
      CNAMERecord?: { cname?: string };
      SOARecord?: {
        host?: string;
        email?: string;
        serialNumber?: number;
        refreshTime?: number;
        retryTime?: number;
        expireTime?: number;
        minimumTTL?: number;
      };
      caaRecords?: { flags?: number; tag?: string; value?: string }[];
    };
  }[];
  nextLink?: string;
}
export const RecordSetsListByTypeOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              metadata: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              TTL: Schema.optional(Schema.Number),
              fqdn: Schema.optional(Schema.String),
              provisioningState: Schema.optional(Schema.String),
              targetResource: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              ARecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipv4Address: Schema.optional(Schema.String),
                  }),
                ),
              ),
              AAAARecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipv6Address: Schema.optional(Schema.String),
                  }),
                ),
              ),
              MXRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    preference: Schema.optional(Schema.Number),
                    exchange: Schema.optional(Schema.String),
                  }),
                ),
              ),
              NSRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    nsdname: Schema.optional(Schema.String),
                  }),
                ),
              ),
              PTRRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ptrdname: Schema.optional(Schema.String),
                  }),
                ),
              ),
              SRVRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    priority: Schema.optional(Schema.Number),
                    weight: Schema.optional(Schema.Number),
                    port: Schema.optional(Schema.Number),
                    target: Schema.optional(Schema.String),
                  }),
                ),
              ),
              TXTRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    value: Schema.optional(Schema.Array(Schema.String)),
                  }),
                ),
              ),
              CNAMERecord: Schema.optional(
                Schema.Struct({
                  cname: Schema.optional(Schema.String),
                }),
              ),
              SOARecord: Schema.optional(
                Schema.Struct({
                  host: Schema.optional(Schema.String),
                  email: Schema.optional(Schema.String),
                  serialNumber: Schema.optional(Schema.Number),
                  refreshTime: Schema.optional(Schema.Number),
                  retryTime: Schema.optional(Schema.Number),
                  expireTime: Schema.optional(Schema.Number),
                  minimumTTL: Schema.optional(Schema.Number),
                }),
              ),
              caaRecords: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    flags: Schema.optional(Schema.Number),
                    tag: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RecordSetsListByTypeOutput>;

// The operation
/**
 * Lists the record sets of a specified type in a DNS zone.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param zoneName - The name of the DNS zone (without a terminating dot).
 * @param recordType - The type of record sets to enumerate.
 * @param $top - The maximum number of record sets to return. If not specified, returns up to 100 record sets.
 * @param $recordsetnamesuffix - The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix>
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const RecordSetsListByType = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecordSetsListByTypeInput,
  outputSchema: RecordSetsListByTypeOutput,
}));
// Input Schema
export interface RecordSetsUpdateInput {
  resourceGroupName: string;
  zoneName: string;
  relativeRecordSetName: string;
  recordType:
    | "A"
    | "AAAA"
    | "CAA"
    | "CNAME"
    | "MX"
    | "NS"
    | "PTR"
    | "SOA"
    | "SRV"
    | "TXT";
  subscriptionId: string;
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
  properties?: {
    metadata?: Record<string, string>;
    TTL?: number;
    fqdn?: string;
    provisioningState?: string;
    targetResource?: { id?: string };
    ARecords?: { ipv4Address?: string }[];
    AAAARecords?: { ipv6Address?: string }[];
    MXRecords?: { preference?: number; exchange?: string }[];
    NSRecords?: { nsdname?: string }[];
    PTRRecords?: { ptrdname?: string }[];
    SRVRecords?: {
      priority?: number;
      weight?: number;
      port?: number;
      target?: string;
    }[];
    TXTRecords?: { value?: string[] }[];
    CNAMERecord?: { cname?: string };
    SOARecord?: {
      host?: string;
      email?: string;
      serialNumber?: number;
      refreshTime?: number;
      retryTime?: number;
      expireTime?: number;
      minimumTTL?: number;
    };
    caaRecords?: { flags?: number; tag?: string; value?: string }[];
  };
}
export const RecordSetsUpdateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  zoneName: Schema.String.pipe(T.PathParam()),
  relativeRecordSetName: Schema.String.pipe(T.PathParam()),
  recordType: Schema.Literals([
    "A",
    "AAAA",
    "CAA",
    "CNAME",
    "MX",
    "NS",
    "PTR",
    "SOA",
    "SRV",
    "TXT",
  ]).pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      TTL: Schema.optional(Schema.Number),
      fqdn: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      targetResource: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      ARecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipv4Address: Schema.optional(Schema.String),
          }),
        ),
      ),
      AAAARecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipv6Address: Schema.optional(Schema.String),
          }),
        ),
      ),
      MXRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            preference: Schema.optional(Schema.Number),
            exchange: Schema.optional(Schema.String),
          }),
        ),
      ),
      NSRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            nsdname: Schema.optional(Schema.String),
          }),
        ),
      ),
      PTRRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ptrdname: Schema.optional(Schema.String),
          }),
        ),
      ),
      SRVRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            priority: Schema.optional(Schema.Number),
            weight: Schema.optional(Schema.Number),
            port: Schema.optional(Schema.Number),
            target: Schema.optional(Schema.String),
          }),
        ),
      ),
      TXTRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            value: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      ),
      CNAMERecord: Schema.optional(
        Schema.Struct({
          cname: Schema.optional(Schema.String),
        }),
      ),
      SOARecord: Schema.optional(
        Schema.Struct({
          host: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          serialNumber: Schema.optional(Schema.Number),
          refreshTime: Schema.optional(Schema.Number),
          retryTime: Schema.optional(Schema.Number),
          expireTime: Schema.optional(Schema.Number),
          minimumTTL: Schema.optional(Schema.Number),
        }),
      ),
      caaRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            flags: Schema.optional(Schema.Number),
            tag: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{relativeRecordSetName}",
    apiVersion: "2018-05-01",
  }),
) as unknown as Schema.Codec<RecordSetsUpdateInput>;

// Output Schema
export interface RecordSetsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
  properties?: {
    metadata?: Record<string, string>;
    TTL?: number;
    fqdn?: string;
    provisioningState?: string;
    targetResource?: { id?: string };
    ARecords?: { ipv4Address?: string }[];
    AAAARecords?: { ipv6Address?: string }[];
    MXRecords?: { preference?: number; exchange?: string }[];
    NSRecords?: { nsdname?: string }[];
    PTRRecords?: { ptrdname?: string }[];
    SRVRecords?: {
      priority?: number;
      weight?: number;
      port?: number;
      target?: string;
    }[];
    TXTRecords?: { value?: string[] }[];
    CNAMERecord?: { cname?: string };
    SOARecord?: {
      host?: string;
      email?: string;
      serialNumber?: number;
      refreshTime?: number;
      retryTime?: number;
      expireTime?: number;
      minimumTTL?: number;
    };
    caaRecords?: { flags?: number; tag?: string; value?: string }[];
  };
}
export const RecordSetsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      TTL: Schema.optional(Schema.Number),
      fqdn: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      targetResource: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      ARecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipv4Address: Schema.optional(Schema.String),
          }),
        ),
      ),
      AAAARecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipv6Address: Schema.optional(Schema.String),
          }),
        ),
      ),
      MXRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            preference: Schema.optional(Schema.Number),
            exchange: Schema.optional(Schema.String),
          }),
        ),
      ),
      NSRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            nsdname: Schema.optional(Schema.String),
          }),
        ),
      ),
      PTRRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ptrdname: Schema.optional(Schema.String),
          }),
        ),
      ),
      SRVRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            priority: Schema.optional(Schema.Number),
            weight: Schema.optional(Schema.Number),
            port: Schema.optional(Schema.Number),
            target: Schema.optional(Schema.String),
          }),
        ),
      ),
      TXTRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            value: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      ),
      CNAMERecord: Schema.optional(
        Schema.Struct({
          cname: Schema.optional(Schema.String),
        }),
      ),
      SOARecord: Schema.optional(
        Schema.Struct({
          host: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          serialNumber: Schema.optional(Schema.Number),
          refreshTime: Schema.optional(Schema.Number),
          retryTime: Schema.optional(Schema.Number),
          expireTime: Schema.optional(Schema.Number),
          minimumTTL: Schema.optional(Schema.Number),
        }),
      ),
      caaRecords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            flags: Schema.optional(Schema.Number),
            tag: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}) as unknown as Schema.Codec<RecordSetsUpdateOutput>;

// The operation
/**
 * Updates a record set within a DNS zone.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param zoneName - The name of the DNS zone (without a terminating dot).
 * @param relativeRecordSetName - The name of the record set, relative to the name of the zone.
 * @param recordType - The type of DNS record in this record set.
 * @param If-Match - The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwriting concurrent changes.
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const RecordSetsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RecordSetsUpdateInput,
  outputSchema: RecordSetsUpdateOutput,
}));
// Input Schema
export interface ZonesCreateOrUpdateInput {
  resourceGroupName: string;
  zoneName: string;
  subscriptionId: string;
  etag?: string;
  properties?: {
    maxNumberOfRecordSets?: number;
    maxNumberOfRecordsPerRecordSet?: number;
    numberOfRecordSets?: number;
    nameServers?: string[];
    zoneType?: "Public" | "Private";
    registrationVirtualNetworks?: { id?: string }[];
    resolutionVirtualNetworks?: { id?: string }[];
  };
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const ZonesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    zoneName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        maxNumberOfRecordSets: Schema.optional(Schema.Number),
        maxNumberOfRecordsPerRecordSet: Schema.optional(Schema.Number),
        numberOfRecordSets: Schema.optional(Schema.Number),
        nameServers: Schema.optional(Schema.Array(Schema.String)),
        zoneType: Schema.optional(Schema.Literals(["Public", "Private"])),
        registrationVirtualNetworks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        resolutionVirtualNetworks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
      apiVersion: "2018-05-01",
    }),
  ) as unknown as Schema.Codec<ZonesCreateOrUpdateInput>;

// Output Schema
export interface ZonesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const ZonesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ZonesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a DNS zone. Does not modify DNS records within the zone.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param zoneName - The name of the DNS zone (without a terminating dot).
 * @param If-Match - The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored.
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const ZonesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ZonesCreateOrUpdateInput,
  outputSchema: ZonesCreateOrUpdateOutput,
}));
// Input Schema
export interface ZonesDeleteInput {
  resourceGroupName: string;
  zoneName: string;
  subscriptionId: string;
}
export const ZonesDeleteInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  zoneName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
    apiVersion: "2018-05-01",
  }),
) as unknown as Schema.Codec<ZonesDeleteInput>;

// Output Schema
export type ZonesDeleteOutput = void;
export const ZonesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ZonesDeleteOutput>;

// The operation
/**
 * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param zoneName - The name of the DNS zone (without a terminating dot).
 * @param If-Match - The etag of the DNS zone. Omit this value to always delete the current zone. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes.
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const ZonesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ZonesDeleteInput,
  outputSchema: ZonesDeleteOutput,
}));
// Input Schema
export interface ZonesGetInput {
  resourceGroupName: string;
  zoneName: string;
  subscriptionId: string;
}
export const ZonesGetInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  zoneName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
    apiVersion: "2018-05-01",
  }),
) as unknown as Schema.Codec<ZonesGetInput>;

// Output Schema
export interface ZonesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const ZonesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<ZonesGetOutput>;

// The operation
/**
 * Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param zoneName - The name of the DNS zone (without a terminating dot).
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const ZonesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ZonesGetInput,
  outputSchema: ZonesGetOutput,
}));
// Input Schema
export interface ZonesListInput {
  subscriptionId: string;
  $top?: number;
}
export const ZonesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/dnszones",
    apiVersion: "2018-05-01",
  }),
) as unknown as Schema.Codec<ZonesListInput>;

// Output Schema
export interface ZonesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const ZonesListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.String,
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ZonesListOutput>;

// The operation
/**
 * Lists the DNS zones in all resource groups in a subscription.
 *
 * @param $top - The maximum number of DNS zones to return. If not specified, returns up to 100 zones.
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const ZonesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ZonesListInput,
  outputSchema: ZonesListOutput,
}));
// Input Schema
export interface ZonesListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
  $top?: number;
}
export const ZonesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones",
      apiVersion: "2018-05-01",
    }),
  ) as unknown as Schema.Codec<ZonesListByResourceGroupInput>;

// Output Schema
export interface ZonesListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const ZonesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ZonesListByResourceGroupOutput>;

// The operation
/**
 * Lists the DNS zones within a resource group.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param $top - The maximum number of record sets to return. If not specified, returns up to 100 record sets.
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const ZonesListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ZonesListByResourceGroupInput,
  outputSchema: ZonesListByResourceGroupOutput,
}));
// Input Schema
export interface ZonesUpdateInput {
  resourceGroupName: string;
  zoneName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const ZonesUpdateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  zoneName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
    apiVersion: "2018-05-01",
  }),
) as unknown as Schema.Codec<ZonesUpdateInput>;

// Output Schema
export interface ZonesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const ZonesUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<ZonesUpdateOutput>;

// The operation
/**
 * Updates a DNS zone. Does not modify DNS records within the zone.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param zoneName - The name of the DNS zone (without a terminating dot).
 * @param If-Match - The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwriting any concurrent changes.
 * @param api-version - Specifies the API version.
 * @param subscriptionId - Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.
 */
export const ZonesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ZonesUpdateInput,
  outputSchema: ZonesUpdateOutput,
}));
