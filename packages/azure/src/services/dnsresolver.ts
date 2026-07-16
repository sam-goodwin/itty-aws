/**
 * Azure Dnsresolver API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DnsForwardingRulesetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  properties: {
    dnsResolverOutboundEndpoints: { id: string }[];
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    resourceGuid?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const DnsForwardingRulesetsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      dnsResolverOutboundEndpoints: Schema.Array(
        Schema.Struct({
          id: Schema.String,
        }),
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
      resourceGuid: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsForwardingRulesetsCreateOrUpdateInput>;

// Output Schema
export interface DnsForwardingRulesetsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsForwardingRulesetsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsForwardingRulesetsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a DNS forwarding ruleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param if-none-match - Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored.
 */
export const DnsForwardingRulesetsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsForwardingRulesetsCreateOrUpdateInput,
    outputSchema: DnsForwardingRulesetsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DnsForwardingRulesetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
}
export const DnsForwardingRulesetsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsForwardingRulesetsDeleteInput>;

// Output Schema
export type DnsForwardingRulesetsDeleteOutput = void;
export const DnsForwardingRulesetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DnsForwardingRulesetsDeleteOutput>;

// The operation
/**
 * Deletes a DNS forwarding ruleset. WARNING: This operation cannot be undone. All forwarding rules within the ruleset will be deleted.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsForwardingRulesetsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsForwardingRulesetsDeleteInput,
  outputSchema: DnsForwardingRulesetsDeleteOutput,
}));
// Input Schema
export interface DnsForwardingRulesetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
}
export const DnsForwardingRulesetsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsForwardingRulesetsGetInput>;

// Output Schema
export interface DnsForwardingRulesetsGetOutput {
  id?: string;
  name?: string;
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
export const DnsForwardingRulesetsGetOutput =
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
  }) as unknown as Schema.Codec<DnsForwardingRulesetsGetOutput>;

// The operation
/**
 * Gets a DNS forwarding ruleset properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 */
export const DnsForwardingRulesetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsForwardingRulesetsGetInput,
  outputSchema: DnsForwardingRulesetsGetOutput,
}));
// Input Schema
export interface DnsForwardingRulesetsListInput {
  subscriptionId: string;
  $top?: number;
}
export const DnsForwardingRulesetsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/dnsForwardingRulesets",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsForwardingRulesetsListInput>;

// Output Schema
export interface DnsForwardingRulesetsListOutput {
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
export const DnsForwardingRulesetsListOutput =
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
  }) as unknown as Schema.Codec<DnsForwardingRulesetsListOutput>;

// The operation
/**
 * Lists DNS forwarding rulesets in all resource groups of a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsForwardingRulesetsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsForwardingRulesetsListInput,
  outputSchema: DnsForwardingRulesetsListOutput,
}));
// Input Schema
export interface DnsForwardingRulesetsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
}
export const DnsForwardingRulesetsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsForwardingRulesetsListByResourceGroupInput>;

// Output Schema
export interface DnsForwardingRulesetsListByResourceGroupOutput {
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
export const DnsForwardingRulesetsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DnsForwardingRulesetsListByResourceGroupOutput>;

// The operation
/**
 * Lists DNS forwarding rulesets within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsForwardingRulesetsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsForwardingRulesetsListByResourceGroupInput,
    outputSchema: DnsForwardingRulesetsListByResourceGroupOutput,
  }));
// Input Schema
export interface DnsForwardingRulesetsListByVirtualNetworkInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
  $top?: number;
}
export const DnsForwardingRulesetsListByVirtualNetworkInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/listDnsForwardingRulesets",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsForwardingRulesetsListByVirtualNetworkInput>;

// Output Schema
export interface DnsForwardingRulesetsListByVirtualNetworkOutput {
  value: {
    id?: string;
    properties?: { virtualNetworkLink?: { id: string } };
  }[];
  nextLink?: string;
}
export const DnsForwardingRulesetsListByVirtualNetworkOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            virtualNetworkLink: Schema.optional(
              Schema.Struct({
                id: Schema.String,
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DnsForwardingRulesetsListByVirtualNetworkOutput>;

// The operation
/**
 * Lists DNS forwarding ruleset resource IDs attached to a virtual network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - The name of the VirtualNetwork
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsForwardingRulesetsListByVirtualNetwork =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsForwardingRulesetsListByVirtualNetworkInput,
    outputSchema: DnsForwardingRulesetsListByVirtualNetworkOutput,
  }));
// Input Schema
export interface DnsForwardingRulesetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  dnsResolverOutboundEndpoints?: { id: string }[];
  tags?: Record<string, string>;
}
export const DnsForwardingRulesetsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    dnsResolverOutboundEndpoints: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
        }),
      ),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsForwardingRulesetsUpdateInput>;

// Output Schema
export interface DnsForwardingRulesetsUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsForwardingRulesetsUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsForwardingRulesetsUpdateOutput>;

// The operation
/**
 * Updates a DNS forwarding ruleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsForwardingRulesetsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsForwardingRulesetsUpdateInput,
  outputSchema: DnsForwardingRulesetsUpdateOutput,
}));
// Input Schema
export interface DnsResolverDomainListsBulkInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverDomainListName: string;
  properties: { storageUrl: string; action: "Upload" | "Download" };
}
export const DnsResolverDomainListsBulkInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverDomainListName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      storageUrl: Schema.String,
      action: Schema.Literals(["Upload", "Download"]),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverDomainLists/{dnsResolverDomainListName}/bulk",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverDomainListsBulkInput>;

// Output Schema
export interface DnsResolverDomainListsBulkOutput {
  id?: string;
  name?: string;
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
export const DnsResolverDomainListsBulkOutput =
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
  }) as unknown as Schema.Codec<DnsResolverDomainListsBulkOutput>;

// The operation
/**
 * Uploads or downloads the list of domains for a DNS Resolver Domain List from a storage link.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverDomainListName - The name of the DNS resolver domain list.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param if-none-match - Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored.
 */
export const DnsResolverDomainListsBulk = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolverDomainListsBulkInput,
  outputSchema: DnsResolverDomainListsBulkOutput,
}));
// Input Schema
export interface DnsResolverDomainListsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverDomainListName: string;
  properties?: {
    domains?: string[];
    domainsUrl?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    resourceGuid?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const DnsResolverDomainListsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverDomainListName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        domains: Schema.optional(Schema.Array(Schema.String)),
        domainsUrl: Schema.optional(Schema.String),
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
        resourceGuid: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverDomainLists/{dnsResolverDomainListName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverDomainListsCreateOrUpdateInput>;

// Output Schema
export interface DnsResolverDomainListsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsResolverDomainListsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsResolverDomainListsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a DNS resolver domain list.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverDomainListName - The name of the DNS resolver domain list.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param if-none-match - Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored.
 */
export const DnsResolverDomainListsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverDomainListsCreateOrUpdateInput,
    outputSchema: DnsResolverDomainListsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DnsResolverDomainListsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverDomainListName: string;
}
export const DnsResolverDomainListsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverDomainListName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverDomainLists/{dnsResolverDomainListName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverDomainListsDeleteInput>;

// Output Schema
export type DnsResolverDomainListsDeleteOutput = void;
export const DnsResolverDomainListsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DnsResolverDomainListsDeleteOutput>;

// The operation
/**
 * Deletes a DNS resolver domain list. WARNING: This operation cannot be undone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverDomainListName - The name of the DNS resolver domain list.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsResolverDomainListsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverDomainListsDeleteInput,
    outputSchema: DnsResolverDomainListsDeleteOutput,
  }));
// Input Schema
export interface DnsResolverDomainListsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverDomainListName: string;
}
export const DnsResolverDomainListsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverDomainListName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverDomainLists/{dnsResolverDomainListName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverDomainListsGetInput>;

// Output Schema
export interface DnsResolverDomainListsGetOutput {
  id?: string;
  name?: string;
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
export const DnsResolverDomainListsGetOutput =
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
  }) as unknown as Schema.Codec<DnsResolverDomainListsGetOutput>;

// The operation
/**
 * Gets properties of a DNS resolver domain list.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverDomainListName - The name of the DNS resolver domain list.
 */
export const DnsResolverDomainListsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolverDomainListsGetInput,
  outputSchema: DnsResolverDomainListsGetOutput,
}));
// Input Schema
export interface DnsResolverDomainListsListInput {
  subscriptionId: string;
  $top?: number;
}
export const DnsResolverDomainListsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/dnsResolverDomainLists",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverDomainListsListInput>;

// Output Schema
export interface DnsResolverDomainListsListOutput {
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
export const DnsResolverDomainListsListOutput =
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
  }) as unknown as Schema.Codec<DnsResolverDomainListsListOutput>;

// The operation
/**
 * Lists DNS resolver domain lists in all resource groups of a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsResolverDomainListsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolverDomainListsListInput,
  outputSchema: DnsResolverDomainListsListOutput,
}));
// Input Schema
export interface DnsResolverDomainListsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
}
export const DnsResolverDomainListsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverDomainLists",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverDomainListsListByResourceGroupInput>;

// Output Schema
export interface DnsResolverDomainListsListByResourceGroupOutput {
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
export const DnsResolverDomainListsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DnsResolverDomainListsListByResourceGroupOutput>;

// The operation
/**
 * Lists DNS resolver domain lists within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsResolverDomainListsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverDomainListsListByResourceGroupInput,
    outputSchema: DnsResolverDomainListsListByResourceGroupOutput,
  }));
// Input Schema
export interface DnsResolverDomainListsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverDomainListName: string;
  properties?: { domains?: string[] };
  tags?: Record<string, string>;
}
export const DnsResolverDomainListsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverDomainListName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        domains: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverDomainLists/{dnsResolverDomainListName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverDomainListsUpdateInput>;

// Output Schema
export interface DnsResolverDomainListsUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsResolverDomainListsUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsResolverDomainListsUpdateOutput>;

// The operation
/**
 * Updates a DNS resolver domain list.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverDomainListName - The name of the DNS resolver domain list.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsResolverDomainListsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverDomainListsUpdateInput,
    outputSchema: DnsResolverDomainListsUpdateOutput,
  }));
// Input Schema
export interface DnsResolverPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    resourceGuid?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const DnsResolverPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
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
        resourceGuid: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPoliciesCreateOrUpdateInput>;

// Output Schema
export interface DnsResolverPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsResolverPoliciesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsResolverPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a DNS resolver policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param if-none-match - Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored.
 */
export const DnsResolverPoliciesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverPoliciesCreateOrUpdateInput,
    outputSchema: DnsResolverPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface DnsResolverPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
}
export const DnsResolverPoliciesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPoliciesDeleteInput>;

// Output Schema
export type DnsResolverPoliciesDeleteOutput = void;
export const DnsResolverPoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DnsResolverPoliciesDeleteOutput>;

// The operation
/**
 * Deletes a DNS resolver policy. WARNING: This operation cannot be undone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsResolverPoliciesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolverPoliciesDeleteInput,
  outputSchema: DnsResolverPoliciesDeleteOutput,
}));
// Input Schema
export interface DnsResolverPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
}
export const DnsResolverPoliciesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPoliciesGetInput>;

// Output Schema
export interface DnsResolverPoliciesGetOutput {
  id?: string;
  name?: string;
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
export const DnsResolverPoliciesGetOutput =
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
  }) as unknown as Schema.Codec<DnsResolverPoliciesGetOutput>;

// The operation
/**
 * Gets properties of a DNS resolver policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 */
export const DnsResolverPoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolverPoliciesGetInput,
  outputSchema: DnsResolverPoliciesGetOutput,
}));
// Input Schema
export interface DnsResolverPoliciesListInput {
  subscriptionId: string;
  $top?: number;
}
export const DnsResolverPoliciesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/dnsResolverPolicies",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPoliciesListInput>;

// Output Schema
export interface DnsResolverPoliciesListOutput {
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
export const DnsResolverPoliciesListOutput =
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
  }) as unknown as Schema.Codec<DnsResolverPoliciesListOutput>;

// The operation
/**
 * Lists DNS resolver policies in all resource groups of a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsResolverPoliciesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolverPoliciesListInput,
  outputSchema: DnsResolverPoliciesListOutput,
}));
// Input Schema
export interface DnsResolverPoliciesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
}
export const DnsResolverPoliciesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPoliciesListByResourceGroupInput>;

// Output Schema
export interface DnsResolverPoliciesListByResourceGroupOutput {
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
export const DnsResolverPoliciesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DnsResolverPoliciesListByResourceGroupOutput>;

// The operation
/**
 * Lists DNS resolver policies within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsResolverPoliciesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverPoliciesListByResourceGroupInput,
    outputSchema: DnsResolverPoliciesListByResourceGroupOutput,
  }));
// Input Schema
export interface DnsResolverPoliciesListByVirtualNetworkInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
}
export const DnsResolverPoliciesListByVirtualNetworkInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/listDnsResolverPolicies",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPoliciesListByVirtualNetworkInput>;

// Output Schema
export interface DnsResolverPoliciesListByVirtualNetworkOutput {
  value: { id: string }[];
  nextLink?: string;
}
export const DnsResolverPoliciesListByVirtualNetworkOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.String,
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DnsResolverPoliciesListByVirtualNetworkOutput>;

// The operation
/**
 * Lists DNS resolver policy resource IDs linked to a virtual network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - The name of the VirtualNetwork
 */
export const DnsResolverPoliciesListByVirtualNetwork =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverPoliciesListByVirtualNetworkInput,
    outputSchema: DnsResolverPoliciesListByVirtualNetworkOutput,
  }));
// Input Schema
export interface DnsResolverPoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  tags?: Record<string, string>;
}
export const DnsResolverPoliciesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPoliciesUpdateInput>;

// Output Schema
export interface DnsResolverPoliciesUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsResolverPoliciesUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsResolverPoliciesUpdateOutput>;

// The operation
/**
 * Updates a DNS resolver policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsResolverPoliciesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolverPoliciesUpdateInput,
  outputSchema: DnsResolverPoliciesUpdateOutput,
}));
// Input Schema
export interface DnsResolverPolicyVirtualNetworkLinksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  dnsResolverPolicyVirtualNetworkLinkName: string;
  properties: {
    virtualNetwork: { id: string };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const DnsResolverPolicyVirtualNetworkLinksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyVirtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      virtualNetwork: Schema.Struct({
        id: Schema.String,
      }),
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
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}/virtualNetworkLinks/{dnsResolverPolicyVirtualNetworkLinkName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPolicyVirtualNetworkLinksCreateOrUpdateInput>;

// Output Schema
export interface DnsResolverPolicyVirtualNetworkLinksCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsResolverPolicyVirtualNetworkLinksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsResolverPolicyVirtualNetworkLinksCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a DNS resolver policy virtual network link.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param dnsResolverPolicyVirtualNetworkLinkName - The name of the DNS resolver policy virtual network link for the DNS resolver policy.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param if-none-match - Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored.
 */
export const DnsResolverPolicyVirtualNetworkLinksCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverPolicyVirtualNetworkLinksCreateOrUpdateInput,
    outputSchema: DnsResolverPolicyVirtualNetworkLinksCreateOrUpdateOutput,
  }));
// Input Schema
export interface DnsResolverPolicyVirtualNetworkLinksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  dnsResolverPolicyVirtualNetworkLinkName: string;
}
export const DnsResolverPolicyVirtualNetworkLinksDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyVirtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}/virtualNetworkLinks/{dnsResolverPolicyVirtualNetworkLinkName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPolicyVirtualNetworkLinksDeleteInput>;

// Output Schema
export type DnsResolverPolicyVirtualNetworkLinksDeleteOutput = void;
export const DnsResolverPolicyVirtualNetworkLinksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DnsResolverPolicyVirtualNetworkLinksDeleteOutput>;

// The operation
/**
 * Deletes a DNS resolver policy virtual network link. WARNING: This operation cannot be undone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param dnsResolverPolicyVirtualNetworkLinkName - The name of the DNS resolver policy virtual network link for the DNS resolver policy.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsResolverPolicyVirtualNetworkLinksDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverPolicyVirtualNetworkLinksDeleteInput,
    outputSchema: DnsResolverPolicyVirtualNetworkLinksDeleteOutput,
  }));
// Input Schema
export interface DnsResolverPolicyVirtualNetworkLinksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  dnsResolverPolicyVirtualNetworkLinkName: string;
}
export const DnsResolverPolicyVirtualNetworkLinksGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyVirtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}/virtualNetworkLinks/{dnsResolverPolicyVirtualNetworkLinkName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPolicyVirtualNetworkLinksGetInput>;

// Output Schema
export interface DnsResolverPolicyVirtualNetworkLinksGetOutput {
  id?: string;
  name?: string;
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
export const DnsResolverPolicyVirtualNetworkLinksGetOutput =
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
  }) as unknown as Schema.Codec<DnsResolverPolicyVirtualNetworkLinksGetOutput>;

// The operation
/**
 * Gets properties of a DNS resolver policy virtual network link.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param dnsResolverPolicyVirtualNetworkLinkName - The name of the DNS resolver policy virtual network link for the DNS resolver policy.
 */
export const DnsResolverPolicyVirtualNetworkLinksGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverPolicyVirtualNetworkLinksGetInput,
    outputSchema: DnsResolverPolicyVirtualNetworkLinksGetOutput,
  }));
// Input Schema
export interface DnsResolverPolicyVirtualNetworkLinksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  $top?: number;
}
export const DnsResolverPolicyVirtualNetworkLinksListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}/virtualNetworkLinks",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPolicyVirtualNetworkLinksListInput>;

// Output Schema
export interface DnsResolverPolicyVirtualNetworkLinksListOutput {
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
export const DnsResolverPolicyVirtualNetworkLinksListOutput =
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
  }) as unknown as Schema.Codec<DnsResolverPolicyVirtualNetworkLinksListOutput>;

// The operation
/**
 * Lists DNS resolver policy virtual network links.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsResolverPolicyVirtualNetworkLinksList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverPolicyVirtualNetworkLinksListInput,
    outputSchema: DnsResolverPolicyVirtualNetworkLinksListOutput,
  }));
// Input Schema
export interface DnsResolverPolicyVirtualNetworkLinksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  dnsResolverPolicyVirtualNetworkLinkName: string;
  tags?: Record<string, string>;
}
export const DnsResolverPolicyVirtualNetworkLinksUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyVirtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}/virtualNetworkLinks/{dnsResolverPolicyVirtualNetworkLinkName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolverPolicyVirtualNetworkLinksUpdateInput>;

// Output Schema
export interface DnsResolverPolicyVirtualNetworkLinksUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsResolverPolicyVirtualNetworkLinksUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsResolverPolicyVirtualNetworkLinksUpdateOutput>;

// The operation
/**
 * Updates a DNS resolver policy virtual network link.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param dnsResolverPolicyVirtualNetworkLinkName - The name of the DNS resolver policy virtual network link for the DNS resolver policy.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsResolverPolicyVirtualNetworkLinksUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolverPolicyVirtualNetworkLinksUpdateInput,
    outputSchema: DnsResolverPolicyVirtualNetworkLinksUpdateOutput,
  }));
// Input Schema
export interface DnsResolversCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  properties: {
    virtualNetwork: { id: string };
    dnsResolverState?: "Connected" | "Disconnected";
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    resourceGuid?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const DnsResolversCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      virtualNetwork: Schema.Struct({
        id: Schema.String,
      }),
      dnsResolverState: Schema.optional(
        Schema.Literals(["Connected", "Disconnected"]),
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
      resourceGuid: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolversCreateOrUpdateInput>;

// Output Schema
export interface DnsResolversCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsResolversCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsResolversCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a DNS resolver.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param if-none-match - Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored.
 */
export const DnsResolversCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolversCreateOrUpdateInput,
  outputSchema: DnsResolversCreateOrUpdateOutput,
}));
// Input Schema
export interface DnsResolversDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
}
export const DnsResolversDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolversDeleteInput>;

// Output Schema
export type DnsResolversDeleteOutput = void;
export const DnsResolversDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DnsResolversDeleteOutput>;

// The operation
/**
 * Deletes a DNS resolver. WARNING: This operation cannot be undone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsResolversDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolversDeleteInput,
  outputSchema: DnsResolversDeleteOutput,
}));
// Input Schema
export interface DnsResolversGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
}
export const DnsResolversGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  dnsResolverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<DnsResolversGetInput>;

// Output Schema
export interface DnsResolversGetOutput {
  id?: string;
  name?: string;
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
export const DnsResolversGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DnsResolversGetOutput>;

// The operation
/**
 * Gets properties of a DNS resolver.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 */
export const DnsResolversGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolversGetInput,
  outputSchema: DnsResolversGetOutput,
}));
// Input Schema
export interface DnsResolversListInput {
  subscriptionId: string;
  $top?: number;
}
export const DnsResolversListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/dnsResolvers",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<DnsResolversListInput>;

// Output Schema
export interface DnsResolversListOutput {
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
export const DnsResolversListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DnsResolversListOutput>;

// The operation
/**
 * Lists DNS resolvers in all resource groups of a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsResolversList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolversListInput,
  outputSchema: DnsResolversListOutput,
}));
// Input Schema
export interface DnsResolversListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
}
export const DnsResolversListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolversListByResourceGroupInput>;

// Output Schema
export interface DnsResolversListByResourceGroupOutput {
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
export const DnsResolversListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DnsResolversListByResourceGroupOutput>;

// The operation
/**
 * Lists DNS resolvers within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsResolversListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolversListByResourceGroupInput,
    outputSchema: DnsResolversListByResourceGroupOutput,
  }));
// Input Schema
export interface DnsResolversListByVirtualNetworkInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
  $top?: number;
}
export const DnsResolversListByVirtualNetworkInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/listDnsResolvers",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolversListByVirtualNetworkInput>;

// Output Schema
export interface DnsResolversListByVirtualNetworkOutput {
  value: { id: string }[];
  nextLink?: string;
}
export const DnsResolversListByVirtualNetworkOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.String,
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DnsResolversListByVirtualNetworkOutput>;

// The operation
/**
 * Lists DNS resolver resource IDs linked to a virtual network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param virtualNetworkName - The name of the VirtualNetwork
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsResolversListByVirtualNetwork =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsResolversListByVirtualNetworkInput,
    outputSchema: DnsResolversListByVirtualNetworkOutput,
  }));
// Input Schema
export interface DnsResolversUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  tags?: Record<string, string>;
}
export const DnsResolversUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsResolversUpdateInput>;

// Output Schema
export interface DnsResolversUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsResolversUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsResolversUpdateOutput>;

// The operation
/**
 * Updates a DNS resolver.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsResolversUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsResolversUpdateInput,
  outputSchema: DnsResolversUpdateOutput,
}));
// Input Schema
export interface DnsSecurityRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  dnsSecurityRuleName: string;
  properties: {
    priority: number;
    action: { actionType?: "Allow" | "Alert" | "Block" };
    dnsResolverDomainLists: { id: string }[];
    dnsSecurityRuleState?: "Enabled" | "Disabled";
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const DnsSecurityRulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    dnsSecurityRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      priority: Schema.Number,
      action: Schema.Struct({
        actionType: Schema.optional(
          Schema.Literals(["Allow", "Alert", "Block"]),
        ),
      }),
      dnsResolverDomainLists: Schema.Array(
        Schema.Struct({
          id: Schema.String,
        }),
      ),
      dnsSecurityRuleState: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
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
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}/dnsSecurityRules/{dnsSecurityRuleName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsSecurityRulesCreateOrUpdateInput>;

// Output Schema
export interface DnsSecurityRulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsSecurityRulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsSecurityRulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a DNS security rule for a DNS resolver policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param dnsSecurityRuleName - The name of the DNS security rule.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param if-none-match - Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored.
 */
export const DnsSecurityRulesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DnsSecurityRulesCreateOrUpdateInput,
    outputSchema: DnsSecurityRulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface DnsSecurityRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  dnsSecurityRuleName: string;
}
export const DnsSecurityRulesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    dnsSecurityRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}/dnsSecurityRules/{dnsSecurityRuleName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsSecurityRulesDeleteInput>;

// Output Schema
export type DnsSecurityRulesDeleteOutput = void;
export const DnsSecurityRulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DnsSecurityRulesDeleteOutput>;

// The operation
/**
 * Deletes a DNS security rule for a DNS resolver policy. WARNING: This operation cannot be undone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param dnsSecurityRuleName - The name of the DNS security rule.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsSecurityRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsSecurityRulesDeleteInput,
  outputSchema: DnsSecurityRulesDeleteOutput,
}));
// Input Schema
export interface DnsSecurityRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  dnsSecurityRuleName: string;
}
export const DnsSecurityRulesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    dnsSecurityRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}/dnsSecurityRules/{dnsSecurityRuleName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsSecurityRulesGetInput>;

// Output Schema
export interface DnsSecurityRulesGetOutput {
  id?: string;
  name?: string;
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
export const DnsSecurityRulesGetOutput =
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
  }) as unknown as Schema.Codec<DnsSecurityRulesGetOutput>;

// The operation
/**
 * Gets properties of a DNS security rule for a DNS resolver policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param dnsSecurityRuleName - The name of the DNS security rule.
 */
export const DnsSecurityRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsSecurityRulesGetInput,
  outputSchema: DnsSecurityRulesGetOutput,
}));
// Input Schema
export interface DnsSecurityRulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  $top?: number;
}
export const DnsSecurityRulesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}/dnsSecurityRules",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsSecurityRulesListInput>;

// Output Schema
export interface DnsSecurityRulesListOutput {
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
export const DnsSecurityRulesListOutput =
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
  }) as unknown as Schema.Codec<DnsSecurityRulesListOutput>;

// The operation
/**
 * Lists DNS security rules for a DNS resolver policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const DnsSecurityRulesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsSecurityRulesListInput,
  outputSchema: DnsSecurityRulesListOutput,
}));
// Input Schema
export interface DnsSecurityRulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverPolicyName: string;
  dnsSecurityRuleName: string;
  properties?: {
    action?: { actionType?: "Allow" | "Alert" | "Block" };
    dnsResolverDomainLists?: { id: string }[];
    dnsSecurityRuleState?: "Enabled" | "Disabled";
    priority?: number;
  };
  tags?: Record<string, string>;
}
export const DnsSecurityRulesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverPolicyName: Schema.String.pipe(T.PathParam()),
    dnsSecurityRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        action: Schema.optional(
          Schema.Struct({
            actionType: Schema.optional(
              Schema.Literals(["Allow", "Alert", "Block"]),
            ),
          }),
        ),
        dnsResolverDomainLists: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
            }),
          ),
        ),
        dnsSecurityRuleState: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        priority: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolverPolicies/{dnsResolverPolicyName}/dnsSecurityRules/{dnsSecurityRuleName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<DnsSecurityRulesUpdateInput>;

// Output Schema
export interface DnsSecurityRulesUpdateOutput {
  id?: string;
  name?: string;
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
export const DnsSecurityRulesUpdateOutput =
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
  }) as unknown as Schema.Codec<DnsSecurityRulesUpdateOutput>;

// The operation
/**
 * Updates a DNS security rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverPolicyName - The name of the DNS resolver policy.
 * @param dnsSecurityRuleName - The name of the DNS security rule.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const DnsSecurityRulesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DnsSecurityRulesUpdateInput,
  outputSchema: DnsSecurityRulesUpdateOutput,
}));
// Input Schema
export interface ForwardingRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  forwardingRuleName: string;
  properties: {
    domainName: string;
    targetDnsServers: { ipAddress: string; port?: number }[];
    metadata?: Record<string, string>;
    forwardingRuleState?: "Enabled" | "Disabled";
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
  etag?: string;
}
export const ForwardingRulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    forwardingRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      domainName: Schema.String,
      targetDnsServers: Schema.Array(
        Schema.Struct({
          ipAddress: Schema.String,
          port: Schema.optional(Schema.Number),
        }),
      ),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      forwardingRuleState: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
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
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/forwardingRules/{forwardingRuleName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ForwardingRulesCreateOrUpdateInput>;

// Output Schema
export interface ForwardingRulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ForwardingRulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ForwardingRulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a forwarding rule in a DNS forwarding ruleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param forwardingRuleName - The name of the forwarding rule.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param if-none-match - Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored.
 */
export const ForwardingRulesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ForwardingRulesCreateOrUpdateInput,
    outputSchema: ForwardingRulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ForwardingRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  forwardingRuleName: string;
}
export const ForwardingRulesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    forwardingRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/forwardingRules/{forwardingRuleName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ForwardingRulesDeleteInput>;

// Output Schema
export type ForwardingRulesDeleteOutput = void;
export const ForwardingRulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ForwardingRulesDeleteOutput>;

// The operation
/**
 * Deletes a forwarding rule in a DNS forwarding ruleset. WARNING: This operation cannot be undone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param forwardingRuleName - The name of the forwarding rule.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const ForwardingRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ForwardingRulesDeleteInput,
  outputSchema: ForwardingRulesDeleteOutput,
}));
// Input Schema
export interface ForwardingRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  forwardingRuleName: string;
}
export const ForwardingRulesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    forwardingRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/forwardingRules/{forwardingRuleName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ForwardingRulesGetInput>;

// Output Schema
export interface ForwardingRulesGetOutput {
  id?: string;
  name?: string;
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
export const ForwardingRulesGetOutput =
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
  }) as unknown as Schema.Codec<ForwardingRulesGetOutput>;

// The operation
/**
 * Gets properties of a forwarding rule in a DNS forwarding ruleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param forwardingRuleName - The name of the forwarding rule.
 */
export const ForwardingRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ForwardingRulesGetInput,
  outputSchema: ForwardingRulesGetOutput,
}));
// Input Schema
export interface ForwardingRulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  $top?: number;
}
export const ForwardingRulesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/forwardingRules",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ForwardingRulesListInput>;

// Output Schema
export interface ForwardingRulesListOutput {
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
export const ForwardingRulesListOutput =
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
  }) as unknown as Schema.Codec<ForwardingRulesListOutput>;

// The operation
/**
 * Lists forwarding rules in a DNS forwarding ruleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const ForwardingRulesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ForwardingRulesListInput,
  outputSchema: ForwardingRulesListOutput,
}));
// Input Schema
export interface ForwardingRulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  forwardingRuleName: string;
  properties?: {
    targetDnsServers?: { ipAddress: string; port?: number }[];
    metadata?: Record<string, string>;
    forwardingRuleState?: "Enabled" | "Disabled";
  };
}
export const ForwardingRulesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    forwardingRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetDnsServers: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipAddress: Schema.String,
              port: Schema.optional(Schema.Number),
            }),
          ),
        ),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        forwardingRuleState: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/forwardingRules/{forwardingRuleName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ForwardingRulesUpdateInput>;

// Output Schema
export interface ForwardingRulesUpdateOutput {
  id?: string;
  name?: string;
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
export const ForwardingRulesUpdateOutput =
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
  }) as unknown as Schema.Codec<ForwardingRulesUpdateOutput>;

// The operation
/**
 * Updates a forwarding rule in a DNS forwarding ruleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param forwardingRuleName - The name of the forwarding rule.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const ForwardingRulesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ForwardingRulesUpdateInput,
  outputSchema: ForwardingRulesUpdateOutput,
}));
// Input Schema
export interface InboundEndpointsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  inboundEndpointName: string;
  properties: {
    ipConfigurations: {
      subnet: { id: string };
      privateIpAddress?: string;
      privateIpAllocationMethod?: "Static" | "Dynamic";
    }[];
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    resourceGuid?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const InboundEndpointsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    inboundEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      ipConfigurations: Schema.Array(
        Schema.Struct({
          subnet: Schema.Struct({
            id: Schema.String,
          }),
          privateIpAddress: Schema.optional(Schema.String),
          privateIpAllocationMethod: Schema.optional(
            Schema.Literals(["Static", "Dynamic"]),
          ),
        }),
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
      resourceGuid: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/inboundEndpoints/{inboundEndpointName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<InboundEndpointsCreateOrUpdateInput>;

// Output Schema
export interface InboundEndpointsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const InboundEndpointsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<InboundEndpointsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an inbound endpoint for a DNS resolver.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param inboundEndpointName - The name of the inbound endpoint for the DNS resolver.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param if-none-match - Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored.
 */
export const InboundEndpointsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: InboundEndpointsCreateOrUpdateInput,
    outputSchema: InboundEndpointsCreateOrUpdateOutput,
  }));
// Input Schema
export interface InboundEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  inboundEndpointName: string;
}
export const InboundEndpointsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    inboundEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/inboundEndpoints/{inboundEndpointName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<InboundEndpointsDeleteInput>;

// Output Schema
export type InboundEndpointsDeleteOutput = void;
export const InboundEndpointsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InboundEndpointsDeleteOutput>;

// The operation
/**
 * Deletes an inbound endpoint for a DNS resolver. WARNING: This operation cannot be undone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param inboundEndpointName - The name of the inbound endpoint for the DNS resolver.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const InboundEndpointsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: InboundEndpointsDeleteInput,
  outputSchema: InboundEndpointsDeleteOutput,
}));
// Input Schema
export interface InboundEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  inboundEndpointName: string;
}
export const InboundEndpointsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    inboundEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/inboundEndpoints/{inboundEndpointName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<InboundEndpointsGetInput>;

// Output Schema
export interface InboundEndpointsGetOutput {
  id?: string;
  name?: string;
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
export const InboundEndpointsGetOutput =
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
  }) as unknown as Schema.Codec<InboundEndpointsGetOutput>;

// The operation
/**
 * Gets properties of an inbound endpoint for a DNS resolver.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param inboundEndpointName - The name of the inbound endpoint for the DNS resolver.
 */
export const InboundEndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: InboundEndpointsGetInput,
  outputSchema: InboundEndpointsGetOutput,
}));
// Input Schema
export interface InboundEndpointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  $top?: number;
}
export const InboundEndpointsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/inboundEndpoints",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<InboundEndpointsListInput>;

// Output Schema
export interface InboundEndpointsListOutput {
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
export const InboundEndpointsListOutput =
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
  }) as unknown as Schema.Codec<InboundEndpointsListOutput>;

// The operation
/**
 * Lists inbound endpoints for a DNS resolver.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const InboundEndpointsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: InboundEndpointsListInput,
  outputSchema: InboundEndpointsListOutput,
}));
// Input Schema
export interface InboundEndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  inboundEndpointName: string;
  tags?: Record<string, string>;
}
export const InboundEndpointsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    inboundEndpointName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/inboundEndpoints/{inboundEndpointName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<InboundEndpointsUpdateInput>;

// Output Schema
export interface InboundEndpointsUpdateOutput {
  id?: string;
  name?: string;
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
export const InboundEndpointsUpdateOutput =
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
  }) as unknown as Schema.Codec<InboundEndpointsUpdateOutput>;

// The operation
/**
 * Updates an inbound endpoint for a DNS resolver.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param inboundEndpointName - The name of the inbound endpoint for the DNS resolver.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const InboundEndpointsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InboundEndpointsUpdateInput,
  outputSchema: InboundEndpointsUpdateOutput,
}));
// Input Schema
export interface OutboundEndpointsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  outboundEndpointName: string;
  properties: {
    subnet: { id: string };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    resourceGuid?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const OutboundEndpointsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    outboundEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      subnet: Schema.Struct({
        id: Schema.String,
      }),
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
      resourceGuid: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/outboundEndpoints/{outboundEndpointName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<OutboundEndpointsCreateOrUpdateInput>;

// Output Schema
export interface OutboundEndpointsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const OutboundEndpointsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<OutboundEndpointsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an outbound endpoint for a DNS resolver.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param outboundEndpointName - The name of the outbound endpoint for the DNS resolver.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param if-none-match - Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored.
 */
export const OutboundEndpointsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OutboundEndpointsCreateOrUpdateInput,
    outputSchema: OutboundEndpointsCreateOrUpdateOutput,
  }));
// Input Schema
export interface OutboundEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  outboundEndpointName: string;
}
export const OutboundEndpointsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    outboundEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/outboundEndpoints/{outboundEndpointName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<OutboundEndpointsDeleteInput>;

// Output Schema
export type OutboundEndpointsDeleteOutput = void;
export const OutboundEndpointsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OutboundEndpointsDeleteOutput>;

// The operation
/**
 * Deletes an outbound endpoint for a DNS resolver. WARNING: This operation cannot be undone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param outboundEndpointName - The name of the outbound endpoint for the DNS resolver.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const OutboundEndpointsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: OutboundEndpointsDeleteInput,
  outputSchema: OutboundEndpointsDeleteOutput,
}));
// Input Schema
export interface OutboundEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  outboundEndpointName: string;
}
export const OutboundEndpointsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    outboundEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/outboundEndpoints/{outboundEndpointName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<OutboundEndpointsGetInput>;

// Output Schema
export interface OutboundEndpointsGetOutput {
  id?: string;
  name?: string;
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
export const OutboundEndpointsGetOutput =
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
  }) as unknown as Schema.Codec<OutboundEndpointsGetOutput>;

// The operation
/**
 * Gets properties of an outbound endpoint for a DNS resolver.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param outboundEndpointName - The name of the outbound endpoint for the DNS resolver.
 */
export const OutboundEndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OutboundEndpointsGetInput,
  outputSchema: OutboundEndpointsGetOutput,
}));
// Input Schema
export interface OutboundEndpointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  $top?: number;
}
export const OutboundEndpointsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/outboundEndpoints",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<OutboundEndpointsListInput>;

// Output Schema
export interface OutboundEndpointsListOutput {
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
export const OutboundEndpointsListOutput =
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
  }) as unknown as Schema.Codec<OutboundEndpointsListOutput>;

// The operation
/**
 * Lists outbound endpoints for a DNS resolver.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const OutboundEndpointsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OutboundEndpointsListInput,
  outputSchema: OutboundEndpointsListOutput,
}));
// Input Schema
export interface OutboundEndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsResolverName: string;
  outboundEndpointName: string;
  tags?: Record<string, string>;
}
export const OutboundEndpointsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsResolverName: Schema.String.pipe(T.PathParam()),
    outboundEndpointName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsResolvers/{dnsResolverName}/outboundEndpoints/{outboundEndpointName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<OutboundEndpointsUpdateInput>;

// Output Schema
export interface OutboundEndpointsUpdateOutput {
  id?: string;
  name?: string;
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
export const OutboundEndpointsUpdateOutput =
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
  }) as unknown as Schema.Codec<OutboundEndpointsUpdateOutput>;

// The operation
/**
 * Updates an outbound endpoint for a DNS resolver.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsResolverName - The name of the DNS resolver.
 * @param outboundEndpointName - The name of the outbound endpoint for the DNS resolver.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const OutboundEndpointsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: OutboundEndpointsUpdateInput,
  outputSchema: OutboundEndpointsUpdateOutput,
}));
// Input Schema
export interface VirtualNetworkLinksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  virtualNetworkLinkName: string;
  properties: {
    virtualNetwork: { id: string };
    metadata?: Record<string, string>;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Canceled";
  };
  etag?: string;
}
export const VirtualNetworkLinksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    virtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      virtualNetwork: Schema.Struct({
        id: Schema.String,
      }),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/virtualNetworkLinks/{virtualNetworkLinkName}",
      apiVersion: "2025-05-01",
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
  }) as unknown as Schema.Codec<VirtualNetworkLinksCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a virtual network link to a DNS forwarding ruleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param virtualNetworkLinkName - The name of the virtual network link.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 * @param if-none-match - Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored.
 */
export const VirtualNetworkLinksCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworkLinksCreateOrUpdateInput,
    outputSchema: VirtualNetworkLinksCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualNetworkLinksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  virtualNetworkLinkName: string;
}
export const VirtualNetworkLinksDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    virtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/virtualNetworkLinks/{virtualNetworkLinkName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkLinksDeleteInput>;

// Output Schema
export type VirtualNetworkLinksDeleteOutput = void;
export const VirtualNetworkLinksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualNetworkLinksDeleteOutput>;

// The operation
/**
 * Deletes a virtual network link to a DNS forwarding ruleset. WARNING: This operation cannot be undone.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param virtualNetworkLinkName - The name of the virtual network link.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const VirtualNetworkLinksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworkLinksDeleteInput,
  outputSchema: VirtualNetworkLinksDeleteOutput,
}));
// Input Schema
export interface VirtualNetworkLinksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  virtualNetworkLinkName: string;
}
export const VirtualNetworkLinksGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    virtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/virtualNetworkLinks/{virtualNetworkLinkName}",
      apiVersion: "2025-05-01",
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
  }) as unknown as Schema.Codec<VirtualNetworkLinksGetOutput>;

// The operation
/**
 * Gets properties of a virtual network link to a DNS forwarding ruleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param virtualNetworkLinkName - The name of the virtual network link.
 */
export const VirtualNetworkLinksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworkLinksGetInput,
  outputSchema: VirtualNetworkLinksGetOutput,
}));
// Input Schema
export interface VirtualNetworkLinksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  $top?: number;
}
export const VirtualNetworkLinksListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/virtualNetworkLinks",
      apiVersion: "2025-05-01",
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
  }) as unknown as Schema.Codec<VirtualNetworkLinksListOutput>;

// The operation
/**
 * Lists virtual network links to a DNS forwarding ruleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param $top - The maximum number of results to return. If not specified, returns up to 100 results.
 */
export const VirtualNetworkLinksList = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworkLinksListInput,
  outputSchema: VirtualNetworkLinksListOutput,
}));
// Input Schema
export interface VirtualNetworkLinksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsForwardingRulesetName: string;
  virtualNetworkLinkName: string;
  properties?: { metadata?: Record<string, string> };
}
export const VirtualNetworkLinksUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsForwardingRulesetName: Schema.String.pipe(T.PathParam()),
    virtualNetworkLinkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}/virtualNetworkLinks/{virtualNetworkLinkName}",
      apiVersion: "2025-05-01",
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
  }) as unknown as Schema.Codec<VirtualNetworkLinksUpdateOutput>;

// The operation
/**
 * Updates a virtual network link to a DNS forwarding ruleset.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsForwardingRulesetName - The name of the DNS forwarding ruleset.
 * @param virtualNetworkLinkName - The name of the virtual network link.
 * @param if-match - ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes.
 */
export const VirtualNetworkLinksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworkLinksUpdateInput,
  outputSchema: VirtualNetworkLinksUpdateOutput,
}));
