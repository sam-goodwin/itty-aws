/**
 * Azure Domainservices API
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
export interface DomainServiceOperationsListInput {}
export const DomainServiceOperationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.AAD/operations",
      apiVersion: "2022-12-01",
    }),
  ) as unknown as Schema.Codec<DomainServiceOperationsListInput>;

// Output Schema
export interface DomainServiceOperationsListOutput {
  value?: {
    name?: string;
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
    origin?: string;
  }[];
  nextLink?: string;
}
export const DomainServiceOperationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          display: Schema.optional(
            Schema.Struct({
              description: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              provider: Schema.optional(Schema.String),
              resource: Schema.optional(Schema.String),
            }),
          ),
          origin: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainServiceOperationsListOutput>;

// The operation
/**
 * Lists all the available Domain Services operations.
 *
 * @param api-version - Client Api Version.
 */
export const DomainServiceOperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainServiceOperationsListInput,
    outputSchema: DomainServiceOperationsListOutput,
  }),
);
// Input Schema
export interface DomainServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainServiceName: string;
  properties?: {
    version?: number;
    tenantId?: string;
    domainName?: string;
    deploymentId?: string;
    syncOwner?: string;
    syncApplicationId?: string;
    replicaSets?: {
      replicaSetId?: string;
      location?: string;
      vnetSiteId?: string;
      subnetId?: string;
      domainControllerIpAddress?: string[];
      externalAccessIpAddress?: string;
      serviceStatus?: string;
      healthLastEvaluated?: string;
      healthMonitors?: { id?: string; name?: string; details?: string }[];
      healthAlerts?: {
        id?: string;
        name?: string;
        issue?: string;
        severity?: string;
        raised?: string;
        lastDetected?: string;
        resolutionUri?: string;
      }[];
    }[];
    ldapsSettings?: {
      ldaps?: "Enabled" | "Disabled";
      pfxCertificate?: string;
      pfxCertificatePassword?: string | Redacted.Redacted<string>;
      publicCertificate?: string;
      certificateThumbprint?: string;
      certificateNotAfter?: string;
      externalAccess?: "Enabled" | "Disabled";
    };
    resourceForestSettings?: {
      settings?: {
        trustedDomainFqdn?: string;
        trustDirection?: string;
        friendlyName?: string;
        remoteDnsIps?: string;
        trustPassword?: string | Redacted.Redacted<string>;
      }[];
      resourceForest?: string;
    };
    domainSecuritySettings?: {
      ntlmV1?: "Enabled" | "Disabled";
      tlsV1?: "Enabled" | "Disabled";
      syncNtlmPasswords?: "Enabled" | "Disabled";
      syncKerberosPasswords?: "Enabled" | "Disabled";
      syncOnPremPasswords?: "Enabled" | "Disabled";
      kerberosRc4Encryption?: "Enabled" | "Disabled";
      kerberosArmoring?: "Enabled" | "Disabled";
      ldapSigning?: "Enabled" | "Disabled";
      channelBinding?: "Enabled" | "Disabled";
    };
    domainConfigurationType?: string;
    sku?: string;
    filteredSync?: "Enabled" | "Disabled";
    syncScope?: "All" | "CloudOnly";
    notificationSettings?: {
      notifyGlobalAdmins?: "Enabled" | "Disabled";
      notifyDcAdmins?: "Enabled" | "Disabled";
      additionalRecipients?: string[];
    };
    migrationProperties?: {
      oldSubnetId?: string;
      oldVnetSiteId?: string;
      migrationProgress?: {
        completionPercentage?: number;
        progressMessage?: string;
      };
    };
    provisioningState?: string;
    configDiagnostics?: {
      lastExecuted?: string;
      validatorResults?: {
        validatorId?: string;
        replicaSetSubnetDisplayName?: string;
        status?: "None" | "Running" | "OK" | "Failure" | "Warning" | "Skipped";
        issues?: { id?: string; descriptionParams?: string[] }[];
      }[];
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DomainServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        version: Schema.optional(Schema.Number),
        tenantId: Schema.optional(Schema.String),
        domainName: Schema.optional(Schema.String),
        deploymentId: Schema.optional(Schema.String),
        syncOwner: Schema.optional(Schema.String),
        syncApplicationId: Schema.optional(Schema.String),
        replicaSets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              replicaSetId: Schema.optional(Schema.String),
              location: Schema.optional(Schema.String),
              vnetSiteId: Schema.optional(Schema.String),
              subnetId: Schema.optional(Schema.String),
              domainControllerIpAddress: Schema.optional(
                Schema.Array(Schema.String),
              ),
              externalAccessIpAddress: Schema.optional(Schema.String),
              serviceStatus: Schema.optional(Schema.String),
              healthLastEvaluated: Schema.optional(Schema.String),
              healthMonitors: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    details: Schema.optional(Schema.String),
                  }),
                ),
              ),
              healthAlerts: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    issue: Schema.optional(Schema.String),
                    severity: Schema.optional(Schema.String),
                    raised: Schema.optional(Schema.String),
                    lastDetected: Schema.optional(Schema.String),
                    resolutionUri: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        ldapsSettings: Schema.optional(
          Schema.Struct({
            ldaps: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            pfxCertificate: Schema.optional(Schema.String),
            pfxCertificatePassword: Schema.optional(SensitiveString),
            publicCertificate: Schema.optional(Schema.String),
            certificateThumbprint: Schema.optional(Schema.String),
            certificateNotAfter: Schema.optional(Schema.String),
            externalAccess: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        resourceForestSettings: Schema.optional(
          Schema.Struct({
            settings: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  trustedDomainFqdn: Schema.optional(Schema.String),
                  trustDirection: Schema.optional(Schema.String),
                  friendlyName: Schema.optional(Schema.String),
                  remoteDnsIps: Schema.optional(Schema.String),
                  trustPassword: Schema.optional(SensitiveString),
                }),
              ),
            ),
            resourceForest: Schema.optional(Schema.String),
          }),
        ),
        domainSecuritySettings: Schema.optional(
          Schema.Struct({
            ntlmV1: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            tlsV1: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            syncNtlmPasswords: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            syncKerberosPasswords: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            syncOnPremPasswords: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            kerberosRc4Encryption: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            kerberosArmoring: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            ldapSigning: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            channelBinding: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        domainConfigurationType: Schema.optional(Schema.String),
        sku: Schema.optional(Schema.String),
        filteredSync: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        syncScope: Schema.optional(Schema.Literals(["All", "CloudOnly"])),
        notificationSettings: Schema.optional(
          Schema.Struct({
            notifyGlobalAdmins: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            notifyDcAdmins: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            additionalRecipients: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        migrationProperties: Schema.optional(
          Schema.Struct({
            oldSubnetId: Schema.optional(Schema.String),
            oldVnetSiteId: Schema.optional(Schema.String),
            migrationProgress: Schema.optional(
              Schema.Struct({
                completionPercentage: Schema.optional(Schema.Number),
                progressMessage: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
        configDiagnostics: Schema.optional(
          Schema.Struct({
            lastExecuted: Schema.optional(Schema.String),
            validatorResults: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  validatorId: Schema.optional(Schema.String),
                  replicaSetSubnetDisplayName: Schema.optional(Schema.String),
                  status: Schema.optional(
                    Schema.Literals([
                      "None",
                      "Running",
                      "OK",
                      "Failure",
                      "Warning",
                      "Skipped",
                    ]),
                  ),
                  issues: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                        descriptionParams: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
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
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
      apiVersion: "2022-12-01",
    }),
  ) as unknown as Schema.Codec<DomainServicesCreateOrUpdateInput>;

// Output Schema
export interface DomainServicesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DomainServicesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<DomainServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update Domain Service (PUT Resource)
 *
 * The Create Domain Service operation creates a new domain service with the specified parameters. If the specific service already exists, then any patchable properties will be updated and any immutable properties will remain unchanged.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param domainServiceName - The name of the domain service.
 */
export const DomainServicesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainServicesCreateOrUpdateInput,
    outputSchema: DomainServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface DomainServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainServiceName: string;
}
export const DomainServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
      apiVersion: "2022-12-01",
    }),
  ) as unknown as Schema.Codec<DomainServicesDeleteInput>;

// Output Schema
export type DomainServicesDeleteOutput = void;
export const DomainServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainServicesDeleteOutput>;

// The operation
/**
 * Delete Domain Service (DELETE Resource)
 *
 * The Delete Domain Service operation deletes an existing Domain Service.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param domainServiceName - The name of the domain service.
 */
export const DomainServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainServicesDeleteInput,
    outputSchema: DomainServicesDeleteOutput,
  }),
);
// Input Schema
export interface DomainServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainServiceName: string;
}
export const DomainServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainServiceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
    apiVersion: "2022-12-01",
  }),
) as unknown as Schema.Codec<DomainServicesGetInput>;

// Output Schema
export interface DomainServicesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DomainServicesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<DomainServicesGetOutput>;

// The operation
/**
 * Get Domain Service
 *
 * The Get Domain Service operation retrieves a json representation of the Domain Service.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param domainServiceName - The name of the domain service.
 */
export const DomainServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainServicesGetInput,
  outputSchema: DomainServicesGetOutput,
}));
// Input Schema
export interface DomainServicesListInput {
  subscriptionId: string;
}
export const DomainServicesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AAD/domainServices",
      apiVersion: "2022-12-01",
    }),
  ) as unknown as Schema.Codec<DomainServicesListInput>;

// Output Schema
export interface DomainServicesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    etag?: string;
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
export const DomainServicesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<DomainServicesListOutput>;

// The operation
/**
 * List Domain Services in Subscription
 *
 * The List Domain Services in Subscription operation lists all the domain services available under the given subscription (and across all resource groups within that subscription).
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 */
export const DomainServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainServicesListInput,
  outputSchema: DomainServicesListOutput,
}));
// Input Schema
export interface DomainServicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DomainServicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices",
      apiVersion: "2022-12-01",
    }),
  ) as unknown as Schema.Codec<DomainServicesListByResourceGroupInput>;

// Output Schema
export interface DomainServicesListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    etag?: string;
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
export const DomainServicesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<DomainServicesListByResourceGroupOutput>;

// The operation
/**
 * List Domain Services in Resource Group
 *
 * The List Domain Services in Resource Group operation lists all the domain services available under the given resource group.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 */
export const DomainServicesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainServicesListByResourceGroupInput,
    outputSchema: DomainServicesListByResourceGroupOutput,
  }));
// Input Schema
export interface DomainServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainServiceName: string;
  properties?: {
    version?: number;
    tenantId?: string;
    domainName?: string;
    deploymentId?: string;
    syncOwner?: string;
    syncApplicationId?: string;
    replicaSets?: {
      replicaSetId?: string;
      location?: string;
      vnetSiteId?: string;
      subnetId?: string;
      domainControllerIpAddress?: string[];
      externalAccessIpAddress?: string;
      serviceStatus?: string;
      healthLastEvaluated?: string;
      healthMonitors?: { id?: string; name?: string; details?: string }[];
      healthAlerts?: {
        id?: string;
        name?: string;
        issue?: string;
        severity?: string;
        raised?: string;
        lastDetected?: string;
        resolutionUri?: string;
      }[];
    }[];
    ldapsSettings?: {
      ldaps?: "Enabled" | "Disabled";
      pfxCertificate?: string;
      pfxCertificatePassword?: string | Redacted.Redacted<string>;
      publicCertificate?: string;
      certificateThumbprint?: string;
      certificateNotAfter?: string;
      externalAccess?: "Enabled" | "Disabled";
    };
    resourceForestSettings?: {
      settings?: {
        trustedDomainFqdn?: string;
        trustDirection?: string;
        friendlyName?: string;
        remoteDnsIps?: string;
        trustPassword?: string | Redacted.Redacted<string>;
      }[];
      resourceForest?: string;
    };
    domainSecuritySettings?: {
      ntlmV1?: "Enabled" | "Disabled";
      tlsV1?: "Enabled" | "Disabled";
      syncNtlmPasswords?: "Enabled" | "Disabled";
      syncKerberosPasswords?: "Enabled" | "Disabled";
      syncOnPremPasswords?: "Enabled" | "Disabled";
      kerberosRc4Encryption?: "Enabled" | "Disabled";
      kerberosArmoring?: "Enabled" | "Disabled";
      ldapSigning?: "Enabled" | "Disabled";
      channelBinding?: "Enabled" | "Disabled";
    };
    domainConfigurationType?: string;
    sku?: string;
    filteredSync?: "Enabled" | "Disabled";
    syncScope?: "All" | "CloudOnly";
    notificationSettings?: {
      notifyGlobalAdmins?: "Enabled" | "Disabled";
      notifyDcAdmins?: "Enabled" | "Disabled";
      additionalRecipients?: string[];
    };
    migrationProperties?: {
      oldSubnetId?: string;
      oldVnetSiteId?: string;
      migrationProgress?: {
        completionPercentage?: number;
        progressMessage?: string;
      };
    };
    provisioningState?: string;
    configDiagnostics?: {
      lastExecuted?: string;
      validatorResults?: {
        validatorId?: string;
        replicaSetSubnetDisplayName?: string;
        status?: "None" | "Running" | "OK" | "Failure" | "Warning" | "Skipped";
        issues?: { id?: string; descriptionParams?: string[] }[];
      }[];
    };
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DomainServicesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        version: Schema.optional(Schema.Number),
        tenantId: Schema.optional(Schema.String),
        domainName: Schema.optional(Schema.String),
        deploymentId: Schema.optional(Schema.String),
        syncOwner: Schema.optional(Schema.String),
        syncApplicationId: Schema.optional(Schema.String),
        replicaSets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              replicaSetId: Schema.optional(Schema.String),
              location: Schema.optional(Schema.String),
              vnetSiteId: Schema.optional(Schema.String),
              subnetId: Schema.optional(Schema.String),
              domainControllerIpAddress: Schema.optional(
                Schema.Array(Schema.String),
              ),
              externalAccessIpAddress: Schema.optional(Schema.String),
              serviceStatus: Schema.optional(Schema.String),
              healthLastEvaluated: Schema.optional(Schema.String),
              healthMonitors: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    details: Schema.optional(Schema.String),
                  }),
                ),
              ),
              healthAlerts: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    issue: Schema.optional(Schema.String),
                    severity: Schema.optional(Schema.String),
                    raised: Schema.optional(Schema.String),
                    lastDetected: Schema.optional(Schema.String),
                    resolutionUri: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        ldapsSettings: Schema.optional(
          Schema.Struct({
            ldaps: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            pfxCertificate: Schema.optional(Schema.String),
            pfxCertificatePassword: Schema.optional(SensitiveString),
            publicCertificate: Schema.optional(Schema.String),
            certificateThumbprint: Schema.optional(Schema.String),
            certificateNotAfter: Schema.optional(Schema.String),
            externalAccess: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        resourceForestSettings: Schema.optional(
          Schema.Struct({
            settings: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  trustedDomainFqdn: Schema.optional(Schema.String),
                  trustDirection: Schema.optional(Schema.String),
                  friendlyName: Schema.optional(Schema.String),
                  remoteDnsIps: Schema.optional(Schema.String),
                  trustPassword: Schema.optional(SensitiveString),
                }),
              ),
            ),
            resourceForest: Schema.optional(Schema.String),
          }),
        ),
        domainSecuritySettings: Schema.optional(
          Schema.Struct({
            ntlmV1: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            tlsV1: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            syncNtlmPasswords: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            syncKerberosPasswords: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            syncOnPremPasswords: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            kerberosRc4Encryption: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            kerberosArmoring: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            ldapSigning: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            channelBinding: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        domainConfigurationType: Schema.optional(Schema.String),
        sku: Schema.optional(Schema.String),
        filteredSync: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        syncScope: Schema.optional(Schema.Literals(["All", "CloudOnly"])),
        notificationSettings: Schema.optional(
          Schema.Struct({
            notifyGlobalAdmins: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            notifyDcAdmins: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            additionalRecipients: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        migrationProperties: Schema.optional(
          Schema.Struct({
            oldSubnetId: Schema.optional(Schema.String),
            oldVnetSiteId: Schema.optional(Schema.String),
            migrationProgress: Schema.optional(
              Schema.Struct({
                completionPercentage: Schema.optional(Schema.Number),
                progressMessage: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
        configDiagnostics: Schema.optional(
          Schema.Struct({
            lastExecuted: Schema.optional(Schema.String),
            validatorResults: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  validatorId: Schema.optional(Schema.String),
                  replicaSetSubnetDisplayName: Schema.optional(Schema.String),
                  status: Schema.optional(
                    Schema.Literals([
                      "None",
                      "Running",
                      "OK",
                      "Failure",
                      "Warning",
                      "Skipped",
                    ]),
                  ),
                  issues: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                        descriptionParams: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
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
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
      apiVersion: "2022-12-01",
    }),
  ) as unknown as Schema.Codec<DomainServicesUpdateInput>;

// Output Schema
export interface DomainServicesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const DomainServicesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<DomainServicesUpdateOutput>;

// The operation
/**
 * Update Domain Service (PATCH Resource)
 *
 * The Update Domain Service operation can be used to update the existing deployment. The update call only supports the properties listed in the PATCH body.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param domainServiceName - The name of the domain service.
 */
export const DomainServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainServicesUpdateInput,
    outputSchema: DomainServicesUpdateOutput,
  }),
);
// Input Schema
export interface OuContainerCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainServiceName: string;
  ouContainerName: string;
  accountName?: string;
  spn?: string;
  password?: string | Redacted.Redacted<string>;
}
export const OuContainerCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainServiceName: Schema.String.pipe(T.PathParam()),
    ouContainerName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.optional(Schema.String),
    spn: Schema.optional(Schema.String),
    password: Schema.optional(SensitiveString),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Aad/domainServices/{domainServiceName}/ouContainer/{ouContainerName}",
    apiVersion: "2022-12-01",
  }),
) as unknown as Schema.Codec<OuContainerCreateInput>;

// Output Schema
export interface OuContainerCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const OuContainerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<OuContainerCreateOutput>;

// The operation
/**
 * Create OuContainer
 *
 * The Create OuContainer operation creates a new OuContainer under the specified Domain Service instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param domainServiceName - The name of the domain service.
 * @param ouContainerName - The name of the OuContainer.
 */
export const OuContainerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OuContainerCreateInput,
  outputSchema: OuContainerCreateOutput,
}));
// Input Schema
export interface OuContainerDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainServiceName: string;
  ouContainerName: string;
}
export const OuContainerDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainServiceName: Schema.String.pipe(T.PathParam()),
    ouContainerName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Aad/domainServices/{domainServiceName}/ouContainer/{ouContainerName}",
    apiVersion: "2022-12-01",
  }),
) as unknown as Schema.Codec<OuContainerDeleteInput>;

// Output Schema
export type OuContainerDeleteOutput = void;
export const OuContainerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OuContainerDeleteOutput>;

// The operation
/**
 * Delete OuContainer
 *
 * The Delete OuContainer operation deletes specified OuContainer.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param domainServiceName - The name of the domain service.
 * @param ouContainerName - The name of the OuContainer.
 */
export const OuContainerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OuContainerDeleteInput,
  outputSchema: OuContainerDeleteOutput,
}));
// Input Schema
export interface OuContainerGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainServiceName: string;
  ouContainerName: string;
}
export const OuContainerGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  domainServiceName: Schema.String.pipe(T.PathParam()),
  ouContainerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Aad/domainServices/{domainServiceName}/ouContainer/{ouContainerName}",
    apiVersion: "2022-12-01",
  }),
) as unknown as Schema.Codec<OuContainerGetInput>;

// Output Schema
export interface OuContainerGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const OuContainerGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<OuContainerGetOutput>;

// The operation
/**
 * Get particular OuContainer in DomainService instance
 *
 * Get OuContainer in DomainService instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param domainServiceName - The name of the domain service.
 * @param ouContainerName - The name of the OuContainer.
 */
export const OuContainerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OuContainerGetInput,
  outputSchema: OuContainerGetOutput,
}));
// Input Schema
export interface OuContainerListInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainServiceName: string;
}
export const OuContainerListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  domainServiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Aad/domainServices/{domainServiceName}/ouContainer",
    apiVersion: "2022-12-01",
  }),
) as unknown as Schema.Codec<OuContainerListInput>;

// Output Schema
export interface OuContainerListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    etag?: string;
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
export const OuContainerListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        etag: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<OuContainerListOutput>;

// The operation
/**
 * List of OuContainers in DomainService instance
 *
 * The List of OuContainers in DomainService instance.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param domainServiceName - The name of the domain service.
 */
export const OuContainerList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OuContainerListInput,
  outputSchema: OuContainerListOutput,
}));
// Input Schema
export interface OuContainerOperationsListInput {}
export const OuContainerOperationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Aad/operations",
      apiVersion: "2022-12-01",
    }),
  ) as unknown as Schema.Codec<OuContainerOperationsListInput>;

// Output Schema
export interface OuContainerOperationsListOutput {
  value?: {
    name?: string;
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
    origin?: string;
  }[];
  nextLink?: string;
}
export const OuContainerOperationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          display: Schema.optional(
            Schema.Struct({
              description: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              provider: Schema.optional(Schema.String),
              resource: Schema.optional(Schema.String),
            }),
          ),
          origin: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OuContainerOperationsListOutput>;

// The operation
/**
 * Lists all the available OuContainer operations.
 *
 * @param api-version - Client Api Version.
 */
export const OuContainerOperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OuContainerOperationsListInput,
    outputSchema: OuContainerOperationsListOutput,
  }),
);
// Input Schema
export interface OuContainerUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainServiceName: string;
  ouContainerName: string;
  accountName?: string;
  spn?: string;
  password?: string | Redacted.Redacted<string>;
}
export const OuContainerUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainServiceName: Schema.String.pipe(T.PathParam()),
    ouContainerName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.optional(Schema.String),
    spn: Schema.optional(Schema.String),
    password: Schema.optional(SensitiveString),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Aad/domainServices/{domainServiceName}/ouContainer/{ouContainerName}",
    apiVersion: "2022-12-01",
  }),
) as unknown as Schema.Codec<OuContainerUpdateInput>;

// Output Schema
export interface OuContainerUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const OuContainerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<OuContainerUpdateOutput>;

// The operation
/**
 * Update OuContainer (PATCH Resource)
 *
 * The Update OuContainer operation can be used to update the existing OuContainers.
 *
 * @param api-version - Client Api Version.
 * @param subscriptionId - Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription. The name is case insensitive.
 * @param domainServiceName - The name of the domain service.
 * @param ouContainerName - The name of the OuContainer.
 */
export const OuContainerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OuContainerUpdateInput,
  outputSchema: OuContainerUpdateOutput,
}));
