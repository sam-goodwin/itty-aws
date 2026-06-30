/**
 * Azure Domainregistration API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DomainRegistrationProviderListOperationsInput {}
export const DomainRegistrationProviderListOperationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.DomainRegistration/operations",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainRegistrationProviderListOperationsInput>;

// Output Schema
export interface DomainRegistrationProviderListOperationsOutput {
  value: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          supportsInstanceLevelAggregation?: boolean;
          enableRegionalMdmAccount?: boolean;
          sourceMdmAccount?: string;
          sourceMdmNamespace?: string;
          metricFilterPattern?: string;
          fillGapWithZero?: boolean;
          isInternal?: boolean;
          dimensions?: {
            name?: string;
            displayName?: string;
            internalName?: string;
            toBeExportedForShoebox?: boolean;
          }[];
          category?: string;
          availabilities?: { timeGrain?: string; blobDuration?: string }[];
          supportedTimeGrainTypes?: string[];
          supportedAggregationTypes?: string[];
        }[];
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
          logFilterPattern?: string;
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const DomainRegistrationProviderListOperationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
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
        origin: Schema.optional(Schema.String),
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
                      supportsInstanceLevelAggregation: Schema.optional(
                        Schema.Boolean,
                      ),
                      enableRegionalMdmAccount: Schema.optional(Schema.Boolean),
                      sourceMdmAccount: Schema.optional(Schema.String),
                      sourceMdmNamespace: Schema.optional(Schema.String),
                      metricFilterPattern: Schema.optional(Schema.String),
                      fillGapWithZero: Schema.optional(Schema.Boolean),
                      isInternal: Schema.optional(Schema.Boolean),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
                            internalName: Schema.optional(Schema.String),
                            toBeExportedForShoebox: Schema.optional(
                              Schema.Boolean,
                            ),
                          }),
                        ),
                      ),
                      category: Schema.optional(Schema.String),
                      availabilities: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            timeGrain: Schema.optional(Schema.String),
                            blobDuration: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      supportedTimeGrainTypes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      supportedAggregationTypes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                    }),
                  ),
                ),
                logSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      blobDuration: Schema.optional(Schema.String),
                      logFilterPattern: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainRegistrationProviderListOperationsOutput>;

// The operation
/**
 * Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider
 *
 * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const DomainRegistrationProviderListOperations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainRegistrationProviderListOperationsInput,
    outputSchema: DomainRegistrationProviderListOperationsOutput,
  }));
// Input Schema
export interface DomainsCheckAvailabilityInput {
  subscriptionId: string;
  name?: string;
}
export const DomainsCheckAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/checkDomainAvailability",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainsCheckAvailabilityInput>;

// Output Schema
export interface DomainsCheckAvailabilityOutput {
  name?: string;
  available?: boolean;
  domainType?: "Regular" | "SoftDeleted";
}
export const DomainsCheckAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    available: Schema.optional(Schema.Boolean),
    domainType: Schema.optional(Schema.Literals(["Regular", "SoftDeleted"])),
  }) as unknown as Schema.Codec<DomainsCheckAvailabilityOutput>;

// The operation
/**
 * Check if a domain is available for registration.
 *
 * Description for Check if a domain is available for registration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DomainsCheckAvailability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsCheckAvailabilityInput,
    outputSchema: DomainsCheckAvailabilityOutput,
  }),
);
// Input Schema
export interface DomainsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  properties?: {
    contactAdmin: {
      addressMailing?: {
        address1: string;
        address2?: string;
        city: string;
        country: string;
        postalCode: string;
        state: string;
      };
      email: string;
      fax?: string;
      jobTitle?: string;
      nameFirst: string;
      nameLast: string;
      nameMiddle?: string;
      organization?: string;
      phone: string;
    };
    contactBilling: {
      addressMailing?: {
        address1: string;
        address2?: string;
        city: string;
        country: string;
        postalCode: string;
        state: string;
      };
      email: string;
      fax?: string;
      jobTitle?: string;
      nameFirst: string;
      nameLast: string;
      nameMiddle?: string;
      organization?: string;
      phone: string;
    };
    contactRegistrant: {
      addressMailing?: {
        address1: string;
        address2?: string;
        city: string;
        country: string;
        postalCode: string;
        state: string;
      };
      email: string;
      fax?: string;
      jobTitle?: string;
      nameFirst: string;
      nameLast: string;
      nameMiddle?: string;
      organization?: string;
      phone: string;
    };
    contactTech: {
      addressMailing?: {
        address1: string;
        address2?: string;
        city: string;
        country: string;
        postalCode: string;
        state: string;
      };
      email: string;
      fax?: string;
      jobTitle?: string;
      nameFirst: string;
      nameLast: string;
      nameMiddle?: string;
      organization?: string;
      phone: string;
    };
    registrationStatus?:
      | "Active"
      | "Awaiting"
      | "Cancelled"
      | "Confiscated"
      | "Disabled"
      | "Excluded"
      | "Expired"
      | "Failed"
      | "Held"
      | "Locked"
      | "Parked"
      | "Pending"
      | "Reserved"
      | "Reverted"
      | "Suspended"
      | "Transferred"
      | "Unknown"
      | "Unlocked"
      | "Unparked"
      | "Updated"
      | "JsonConverterFailed";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    nameServers?: string[];
    privacy?: boolean;
    createdTime?: string;
    expirationTime?: string;
    lastRenewedTime?: string;
    autoRenew?: boolean;
    readyForDnsRecordManagement?: boolean;
    managedHostNames?: {
      name?: string;
      siteNames?: string[];
      azureResourceName?: string;
      azureResourceType?: "Website" | "TrafficManager";
      customHostNameDnsRecordType?: "CName" | "A";
      hostNameType?: "Verified" | "Managed";
    }[];
    consent: { agreementKeys?: string[]; agreedBy?: string; agreedAt?: string };
    domainNotRenewableReasons?: (
      | "RegistrationStatusNotSupportedForRenewal"
      | "ExpirationNotInRenewalTimeRange"
      | "SubscriptionNotActive"
    )[];
    dnsType?: "AzureDns" | "DefaultDomainRegistrarDns";
    dnsZoneId?: string;
    targetDnsType?: "AzureDns" | "DefaultDomainRegistrarDns";
    authCode?: string;
  };
  kind?: string;
  tags?: Record<string, string>;
  location: string;
}
export const DomainsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        contactAdmin: Schema.Struct({
          addressMailing: Schema.optional(
            Schema.Struct({
              address1: Schema.String,
              address2: Schema.optional(Schema.String),
              city: Schema.String,
              country: Schema.String,
              postalCode: Schema.String,
              state: Schema.String,
            }),
          ),
          email: Schema.String,
          fax: Schema.optional(Schema.String),
          jobTitle: Schema.optional(Schema.String),
          nameFirst: Schema.String,
          nameLast: Schema.String,
          nameMiddle: Schema.optional(Schema.String),
          organization: Schema.optional(Schema.String),
          phone: Schema.String,
        }),
        contactBilling: Schema.Struct({
          addressMailing: Schema.optional(
            Schema.Struct({
              address1: Schema.String,
              address2: Schema.optional(Schema.String),
              city: Schema.String,
              country: Schema.String,
              postalCode: Schema.String,
              state: Schema.String,
            }),
          ),
          email: Schema.String,
          fax: Schema.optional(Schema.String),
          jobTitle: Schema.optional(Schema.String),
          nameFirst: Schema.String,
          nameLast: Schema.String,
          nameMiddle: Schema.optional(Schema.String),
          organization: Schema.optional(Schema.String),
          phone: Schema.String,
        }),
        contactRegistrant: Schema.Struct({
          addressMailing: Schema.optional(
            Schema.Struct({
              address1: Schema.String,
              address2: Schema.optional(Schema.String),
              city: Schema.String,
              country: Schema.String,
              postalCode: Schema.String,
              state: Schema.String,
            }),
          ),
          email: Schema.String,
          fax: Schema.optional(Schema.String),
          jobTitle: Schema.optional(Schema.String),
          nameFirst: Schema.String,
          nameLast: Schema.String,
          nameMiddle: Schema.optional(Schema.String),
          organization: Schema.optional(Schema.String),
          phone: Schema.String,
        }),
        contactTech: Schema.Struct({
          addressMailing: Schema.optional(
            Schema.Struct({
              address1: Schema.String,
              address2: Schema.optional(Schema.String),
              city: Schema.String,
              country: Schema.String,
              postalCode: Schema.String,
              state: Schema.String,
            }),
          ),
          email: Schema.String,
          fax: Schema.optional(Schema.String),
          jobTitle: Schema.optional(Schema.String),
          nameFirst: Schema.String,
          nameLast: Schema.String,
          nameMiddle: Schema.optional(Schema.String),
          organization: Schema.optional(Schema.String),
          phone: Schema.String,
        }),
        registrationStatus: Schema.optional(
          Schema.Literals([
            "Active",
            "Awaiting",
            "Cancelled",
            "Confiscated",
            "Disabled",
            "Excluded",
            "Expired",
            "Failed",
            "Held",
            "Locked",
            "Parked",
            "Pending",
            "Reserved",
            "Reverted",
            "Suspended",
            "Transferred",
            "Unknown",
            "Unlocked",
            "Unparked",
            "Updated",
            "JsonConverterFailed",
          ]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Deleting",
          ]),
        ),
        nameServers: Schema.optional(Schema.Array(Schema.String)),
        privacy: Schema.optional(Schema.Boolean),
        createdTime: Schema.optional(Schema.String),
        expirationTime: Schema.optional(Schema.String),
        lastRenewedTime: Schema.optional(Schema.String),
        autoRenew: Schema.optional(Schema.Boolean),
        readyForDnsRecordManagement: Schema.optional(Schema.Boolean),
        managedHostNames: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              siteNames: Schema.optional(Schema.Array(Schema.String)),
              azureResourceName: Schema.optional(Schema.String),
              azureResourceType: Schema.optional(
                Schema.Literals(["Website", "TrafficManager"]),
              ),
              customHostNameDnsRecordType: Schema.optional(
                Schema.Literals(["CName", "A"]),
              ),
              hostNameType: Schema.optional(
                Schema.Literals(["Verified", "Managed"]),
              ),
            }),
          ),
        ),
        consent: Schema.Struct({
          agreementKeys: Schema.optional(Schema.Array(Schema.String)),
          agreedBy: Schema.optional(Schema.String),
          agreedAt: Schema.optional(Schema.String),
        }),
        domainNotRenewableReasons: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "RegistrationStatusNotSupportedForRenewal",
              "ExpirationNotInRenewalTimeRange",
              "SubscriptionNotActive",
            ]),
          ),
        ),
        dnsType: Schema.optional(
          Schema.Literals(["AzureDns", "DefaultDomainRegistrarDns"]),
        ),
        dnsZoneId: Schema.optional(Schema.String),
        targetDnsType: Schema.optional(
          Schema.Literals(["AzureDns", "DefaultDomainRegistrarDns"]),
        ),
        authCode: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainsCreateOrUpdateInput>;

// Output Schema
export interface DomainsCreateOrUpdateOutput {
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
export const DomainsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DomainsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a domain.
 *
 * Description for Creates or updates a domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param domainName - Name of the domain.
 */
export const DomainsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsCreateOrUpdateInput,
    outputSchema: DomainsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DomainsCreateOrUpdateOwnershipIdentifierInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  name: string;
  properties?: { ownershipId?: string };
  kind?: string;
}
export const DomainsCreateOrUpdateOwnershipIdentifierInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        ownershipId: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainsCreateOrUpdateOwnershipIdentifierInput>;

// Output Schema
export interface DomainsCreateOrUpdateOwnershipIdentifierOutput {
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
export const DomainsCreateOrUpdateOwnershipIdentifierOutput =
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
  }) as unknown as Schema.Codec<DomainsCreateOrUpdateOwnershipIdentifierOutput>;

// The operation
/**
 * Creates an ownership identifier for a domain or updates identifier details for an existing identifier
 *
 * Description for Creates an ownership identifier for a domain or updates identifier details for an existing identifier
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param domainName - Name of the domain.
 * @param name - Name of identifier.
 */
export const DomainsCreateOrUpdateOwnershipIdentifier =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsCreateOrUpdateOwnershipIdentifierInput,
    outputSchema: DomainsCreateOrUpdateOwnershipIdentifierOutput,
  }));
// Input Schema
export interface DomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  forceHardDeleteDomain?: boolean;
}
export const DomainsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
  forceHardDeleteDomain: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<DomainsDeleteInput>;

// Output Schema
export type DomainsDeleteOutput = void;
export const DomainsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainsDeleteOutput>;

// The operation
/**
 * Delete a domain.
 *
 * Description for Delete a domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param domainName - Name of the domain.
 * @param forceHardDeleteDomain - Specify <code>true</code> to delete the domain immediately. The default is <code>false</code> which deletes the domain after 24 hours.
 */
export const DomainsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsDeleteInput,
  outputSchema: DomainsDeleteOutput,
}));
// Input Schema
export interface DomainsDeleteOwnershipIdentifierInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  name: string;
}
export const DomainsDeleteOwnershipIdentifierInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainsDeleteOwnershipIdentifierInput>;

// Output Schema
export type DomainsDeleteOwnershipIdentifierOutput = void;
export const DomainsDeleteOwnershipIdentifierOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainsDeleteOwnershipIdentifierOutput>;

// The operation
/**
 * Delete ownership identifier for domain
 *
 * Description for Delete ownership identifier for domain
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param domainName - Name of the domain.
 * @param name - Name of identifier.
 */
export const DomainsDeleteOwnershipIdentifier =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsDeleteOwnershipIdentifierInput,
    outputSchema: DomainsDeleteOwnershipIdentifierOutput,
  }));
// Input Schema
export interface DomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
}
export const DomainsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<DomainsGetInput>;

// Output Schema
export interface DomainsGetOutput {
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
export const DomainsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DomainsGetOutput>;

// The operation
/**
 * Get a domain.
 *
 * Description for Get a domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param domainName - Name of the domain.
 */
export const DomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsGetInput,
  outputSchema: DomainsGetOutput,
}));
// Input Schema
export interface DomainsGetControlCenterSsoRequestInput {
  subscriptionId: string;
}
export const DomainsGetControlCenterSsoRequestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/generateSsoRequest",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainsGetControlCenterSsoRequestInput>;

// Output Schema
export interface DomainsGetControlCenterSsoRequestOutput {
  url?: string;
  postParameterKey?: string;
  postParameterValue?: string;
}
export const DomainsGetControlCenterSsoRequestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    postParameterKey: Schema.optional(Schema.String),
    postParameterValue: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainsGetControlCenterSsoRequestOutput>;

// The operation
/**
 * Generate a single sign-on request for the domain management portal.
 *
 * Description for Generate a single sign-on request for the domain management portal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DomainsGetControlCenterSsoRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsGetControlCenterSsoRequestInput,
    outputSchema: DomainsGetControlCenterSsoRequestOutput,
  }));
// Input Schema
export interface DomainsGetOwnershipIdentifierInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  name: string;
}
export const DomainsGetOwnershipIdentifierInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainsGetOwnershipIdentifierInput>;

// Output Schema
export interface DomainsGetOwnershipIdentifierOutput {
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
export const DomainsGetOwnershipIdentifierOutput =
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
  }) as unknown as Schema.Codec<DomainsGetOwnershipIdentifierOutput>;

// The operation
/**
 * Get ownership identifier for domain
 *
 * Description for Get ownership identifier for domain
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param domainName - Name of the domain.
 * @param name - Name of identifier.
 */
export const DomainsGetOwnershipIdentifier =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsGetOwnershipIdentifierInput,
    outputSchema: DomainsGetOwnershipIdentifierOutput,
  }));
// Input Schema
export interface DomainsListInput {
  subscriptionId: string;
}
export const DomainsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/domains",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<DomainsListInput>;

// Output Schema
export interface DomainsListOutput {
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
export const DomainsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DomainsListOutput>;

// The operation
/**
 * Get all domains in a subscription.
 *
 * Description for Get all domains in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DomainsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsListInput,
  outputSchema: DomainsListOutput,
}));
// Input Schema
export interface DomainsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DomainsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainsListByResourceGroupInput>;

// Output Schema
export interface DomainsListByResourceGroupOutput {
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
export const DomainsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DomainsListByResourceGroupOutput>;

// The operation
/**
 * Get all domains in a resource group.
 *
 * Description for Get all domains in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DomainsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsListByResourceGroupInput,
    outputSchema: DomainsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface DomainsListOwnershipIdentifiersInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
}
export const DomainsListOwnershipIdentifiersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainsListOwnershipIdentifiersInput>;

// Output Schema
export interface DomainsListOwnershipIdentifiersOutput {
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
export const DomainsListOwnershipIdentifiersOutput =
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
  }) as unknown as Schema.Codec<DomainsListOwnershipIdentifiersOutput>;

// The operation
/**
 * Lists domain ownership identifiers.
 *
 * Description for Lists domain ownership identifiers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param domainName - Name of the domain.
 */
export const DomainsListOwnershipIdentifiers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsListOwnershipIdentifiersInput,
    outputSchema: DomainsListOwnershipIdentifiersOutput,
  }));
// Input Schema
export interface DomainsListRecommendationsInput {
  subscriptionId: string;
  keywords?: string;
  maxDomainRecommendations?: number;
}
export const DomainsListRecommendationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    keywords: Schema.optional(Schema.String),
    maxDomainRecommendations: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/listDomainRecommendations",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainsListRecommendationsInput>;

// Output Schema
export interface DomainsListRecommendationsOutput {
  value: { name?: string }[];
  nextLink?: string;
}
export const DomainsListRecommendationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainsListRecommendationsOutput>;

// The operation
/**
 * Get domain name recommendations based on keywords.
 *
 * Description for Get domain name recommendations based on keywords.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DomainsListRecommendations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsListRecommendationsInput,
    outputSchema: DomainsListRecommendationsOutput,
  }),
);
// Input Schema
export interface DomainsRenewInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
}
export const DomainsRenewInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/renew",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<DomainsRenewInput>;

// Output Schema
export type DomainsRenewOutput = void;
export const DomainsRenewOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainsRenewOutput>;

// The operation
/**
 * Renew a domain.
 *
 * Description for Renew a domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param domainName - Name of the domain.
 */
export const DomainsRenew = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsRenewInput,
  outputSchema: DomainsRenewOutput,
}));
// Input Schema
export interface DomainsTransferOutInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
}
export const DomainsTransferOutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/transferOut",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainsTransferOutInput>;

// Output Schema
export interface DomainsTransferOutOutput {
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
export const DomainsTransferOutOutput =
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
  }) as unknown as Schema.Codec<DomainsTransferOutOutput>;

// The operation
/**
 * Transfer out domain to another registrar
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param domainName - Name of the domain.
 */
export const DomainsTransferOut = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsTransferOutInput,
  outputSchema: DomainsTransferOutOutput,
}));
// Input Schema
export interface DomainsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  properties?: {
    contactAdmin: {
      addressMailing?: {
        address1: string;
        address2?: string;
        city: string;
        country: string;
        postalCode: string;
        state: string;
      };
      email: string;
      fax?: string;
      jobTitle?: string;
      nameFirst: string;
      nameLast: string;
      nameMiddle?: string;
      organization?: string;
      phone: string;
    };
    contactBilling: {
      addressMailing?: {
        address1: string;
        address2?: string;
        city: string;
        country: string;
        postalCode: string;
        state: string;
      };
      email: string;
      fax?: string;
      jobTitle?: string;
      nameFirst: string;
      nameLast: string;
      nameMiddle?: string;
      organization?: string;
      phone: string;
    };
    contactRegistrant: {
      addressMailing?: {
        address1: string;
        address2?: string;
        city: string;
        country: string;
        postalCode: string;
        state: string;
      };
      email: string;
      fax?: string;
      jobTitle?: string;
      nameFirst: string;
      nameLast: string;
      nameMiddle?: string;
      organization?: string;
      phone: string;
    };
    contactTech: {
      addressMailing?: {
        address1: string;
        address2?: string;
        city: string;
        country: string;
        postalCode: string;
        state: string;
      };
      email: string;
      fax?: string;
      jobTitle?: string;
      nameFirst: string;
      nameLast: string;
      nameMiddle?: string;
      organization?: string;
      phone: string;
    };
    registrationStatus?:
      | "Active"
      | "Awaiting"
      | "Cancelled"
      | "Confiscated"
      | "Disabled"
      | "Excluded"
      | "Expired"
      | "Failed"
      | "Held"
      | "Locked"
      | "Parked"
      | "Pending"
      | "Reserved"
      | "Reverted"
      | "Suspended"
      | "Transferred"
      | "Unknown"
      | "Unlocked"
      | "Unparked"
      | "Updated"
      | "JsonConverterFailed";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    nameServers?: string[];
    privacy?: boolean;
    createdTime?: string;
    expirationTime?: string;
    lastRenewedTime?: string;
    autoRenew?: boolean;
    readyForDnsRecordManagement?: boolean;
    managedHostNames?: {
      name?: string;
      siteNames?: string[];
      azureResourceName?: string;
      azureResourceType?: "Website" | "TrafficManager";
      customHostNameDnsRecordType?: "CName" | "A";
      hostNameType?: "Verified" | "Managed";
    }[];
    consent: { agreementKeys?: string[]; agreedBy?: string; agreedAt?: string };
    domainNotRenewableReasons?: (
      | "RegistrationStatusNotSupportedForRenewal"
      | "ExpirationNotInRenewalTimeRange"
      | "SubscriptionNotActive"
    )[];
    dnsType?: "AzureDns" | "DefaultDomainRegistrarDns";
    dnsZoneId?: string;
    targetDnsType?: "AzureDns" | "DefaultDomainRegistrarDns";
    authCode?: string;
  };
  id?: string;
  name?: string;
  kind?: string;
  type?: string;
}
export const DomainsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      contactAdmin: Schema.Struct({
        addressMailing: Schema.optional(
          Schema.Struct({
            address1: Schema.String,
            address2: Schema.optional(Schema.String),
            city: Schema.String,
            country: Schema.String,
            postalCode: Schema.String,
            state: Schema.String,
          }),
        ),
        email: Schema.String,
        fax: Schema.optional(Schema.String),
        jobTitle: Schema.optional(Schema.String),
        nameFirst: Schema.String,
        nameLast: Schema.String,
        nameMiddle: Schema.optional(Schema.String),
        organization: Schema.optional(Schema.String),
        phone: Schema.String,
      }),
      contactBilling: Schema.Struct({
        addressMailing: Schema.optional(
          Schema.Struct({
            address1: Schema.String,
            address2: Schema.optional(Schema.String),
            city: Schema.String,
            country: Schema.String,
            postalCode: Schema.String,
            state: Schema.String,
          }),
        ),
        email: Schema.String,
        fax: Schema.optional(Schema.String),
        jobTitle: Schema.optional(Schema.String),
        nameFirst: Schema.String,
        nameLast: Schema.String,
        nameMiddle: Schema.optional(Schema.String),
        organization: Schema.optional(Schema.String),
        phone: Schema.String,
      }),
      contactRegistrant: Schema.Struct({
        addressMailing: Schema.optional(
          Schema.Struct({
            address1: Schema.String,
            address2: Schema.optional(Schema.String),
            city: Schema.String,
            country: Schema.String,
            postalCode: Schema.String,
            state: Schema.String,
          }),
        ),
        email: Schema.String,
        fax: Schema.optional(Schema.String),
        jobTitle: Schema.optional(Schema.String),
        nameFirst: Schema.String,
        nameLast: Schema.String,
        nameMiddle: Schema.optional(Schema.String),
        organization: Schema.optional(Schema.String),
        phone: Schema.String,
      }),
      contactTech: Schema.Struct({
        addressMailing: Schema.optional(
          Schema.Struct({
            address1: Schema.String,
            address2: Schema.optional(Schema.String),
            city: Schema.String,
            country: Schema.String,
            postalCode: Schema.String,
            state: Schema.String,
          }),
        ),
        email: Schema.String,
        fax: Schema.optional(Schema.String),
        jobTitle: Schema.optional(Schema.String),
        nameFirst: Schema.String,
        nameLast: Schema.String,
        nameMiddle: Schema.optional(Schema.String),
        organization: Schema.optional(Schema.String),
        phone: Schema.String,
      }),
      registrationStatus: Schema.optional(
        Schema.Literals([
          "Active",
          "Awaiting",
          "Cancelled",
          "Confiscated",
          "Disabled",
          "Excluded",
          "Expired",
          "Failed",
          "Held",
          "Locked",
          "Parked",
          "Pending",
          "Reserved",
          "Reverted",
          "Suspended",
          "Transferred",
          "Unknown",
          "Unlocked",
          "Unparked",
          "Updated",
          "JsonConverterFailed",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "InProgress",
          "Deleting",
        ]),
      ),
      nameServers: Schema.optional(Schema.Array(Schema.String)),
      privacy: Schema.optional(Schema.Boolean),
      createdTime: Schema.optional(Schema.String),
      expirationTime: Schema.optional(Schema.String),
      lastRenewedTime: Schema.optional(Schema.String),
      autoRenew: Schema.optional(Schema.Boolean),
      readyForDnsRecordManagement: Schema.optional(Schema.Boolean),
      managedHostNames: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            siteNames: Schema.optional(Schema.Array(Schema.String)),
            azureResourceName: Schema.optional(Schema.String),
            azureResourceType: Schema.optional(
              Schema.Literals(["Website", "TrafficManager"]),
            ),
            customHostNameDnsRecordType: Schema.optional(
              Schema.Literals(["CName", "A"]),
            ),
            hostNameType: Schema.optional(
              Schema.Literals(["Verified", "Managed"]),
            ),
          }),
        ),
      ),
      consent: Schema.Struct({
        agreementKeys: Schema.optional(Schema.Array(Schema.String)),
        agreedBy: Schema.optional(Schema.String),
        agreedAt: Schema.optional(Schema.String),
      }),
      domainNotRenewableReasons: Schema.optional(
        Schema.Array(
          Schema.Literals([
            "RegistrationStatusNotSupportedForRenewal",
            "ExpirationNotInRenewalTimeRange",
            "SubscriptionNotActive",
          ]),
        ),
      ),
      dnsType: Schema.optional(
        Schema.Literals(["AzureDns", "DefaultDomainRegistrarDns"]),
      ),
      dnsZoneId: Schema.optional(Schema.String),
      targetDnsType: Schema.optional(
        Schema.Literals(["AzureDns", "DefaultDomainRegistrarDns"]),
      ),
      authCode: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<DomainsUpdateInput>;

// Output Schema
export interface DomainsUpdateOutput {
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
export const DomainsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DomainsUpdateOutput>;

// The operation
/**
 * Creates or updates a domain.
 *
 * Description for Creates or updates a domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param domainName - Name of the domain.
 */
export const DomainsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsUpdateInput,
  outputSchema: DomainsUpdateOutput,
}));
// Input Schema
export interface DomainsUpdateOwnershipIdentifierInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  name: string;
  properties?: { ownershipId?: string };
  kind?: string;
}
export const DomainsUpdateOwnershipIdentifierInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        ownershipId: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<DomainsUpdateOwnershipIdentifierInput>;

// Output Schema
export interface DomainsUpdateOwnershipIdentifierOutput {
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
export const DomainsUpdateOwnershipIdentifierOutput =
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
  }) as unknown as Schema.Codec<DomainsUpdateOwnershipIdentifierOutput>;

// The operation
/**
 * Creates an ownership identifier for a domain or updates identifier details for an existing identifier
 *
 * Description for Creates an ownership identifier for a domain or updates identifier details for an existing identifier
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param domainName - Name of the domain.
 * @param name - Name of identifier.
 */
export const DomainsUpdateOwnershipIdentifier =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsUpdateOwnershipIdentifierInput,
    outputSchema: DomainsUpdateOwnershipIdentifierOutput,
  }));
// Input Schema
export interface TopLevelDomainsGetInput {
  subscriptionId: string;
  name: string;
}
export const TopLevelDomainsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains/{name}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<TopLevelDomainsGetInput>;

// Output Schema
export interface TopLevelDomainsGetOutput {
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
export const TopLevelDomainsGetOutput =
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
  }) as unknown as Schema.Codec<TopLevelDomainsGetOutput>;

// The operation
/**
 * Get details of a top-level domain.
 *
 * Description for Get details of a top-level domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param name - Name of the top-level domain.
 */
export const TopLevelDomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopLevelDomainsGetInput,
  outputSchema: TopLevelDomainsGetOutput,
}));
// Input Schema
export interface TopLevelDomainsListInput {
  subscriptionId: string;
}
export const TopLevelDomainsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<TopLevelDomainsListInput>;

// Output Schema
export interface TopLevelDomainsListOutput {
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
export const TopLevelDomainsListOutput =
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
  }) as unknown as Schema.Codec<TopLevelDomainsListOutput>;

// The operation
/**
 * Get all top-level domains supported for registration.
 *
 * Description for Get all top-level domains supported for registration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const TopLevelDomainsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopLevelDomainsListInput,
  outputSchema: TopLevelDomainsListOutput,
}));
// Input Schema
export interface TopLevelDomainsListAgreementsInput {
  subscriptionId: string;
  name: string;
  includePrivacy?: boolean;
  forTransfer?: boolean;
}
export const TopLevelDomainsListAgreementsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    includePrivacy: Schema.optional(Schema.Boolean),
    forTransfer: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains/{name}/listAgreements",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<TopLevelDomainsListAgreementsInput>;

// Output Schema
export interface TopLevelDomainsListAgreementsOutput {
  value: {
    agreementKey: string;
    title: string;
    content: string;
    url?: string;
  }[];
  nextLink?: string;
}
export const TopLevelDomainsListAgreementsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        agreementKey: Schema.String,
        title: Schema.String,
        content: Schema.String,
        url: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopLevelDomainsListAgreementsOutput>;

// The operation
/**
 * Gets all legal agreements that user needs to accept before purchasing a domain.
 *
 * Description for Gets all legal agreements that user needs to accept before purchasing a domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param name - Name of the top-level domain.
 */
export const TopLevelDomainsListAgreements =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TopLevelDomainsListAgreementsInput,
    outputSchema: TopLevelDomainsListAgreementsOutput,
  }));
