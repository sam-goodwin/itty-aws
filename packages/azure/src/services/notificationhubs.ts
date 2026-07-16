/**
 * Azure Notificationhubs API
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
export interface NamespacesCheckAvailabilityInput {
  subscriptionId: string;
  id?: string;
  name: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  isAvailiable?: boolean;
  sku?: {
    name: "Free" | "Basic" | "Standard";
    tier?: string;
    size?: string;
    family?: string;
    capacity?: number;
  };
}
export const NamespacesCheckAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.String,
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    isAvailiable: Schema.optional(Schema.Boolean),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["Free", "Basic", "Standard"]),
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NotificationHubs/checkNamespaceAvailability",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCheckAvailabilityInput>;

// Output Schema
export interface NamespacesCheckAvailabilityOutput {
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
export const NamespacesCheckAvailabilityOutput =
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
  }) as unknown as Schema.Codec<NamespacesCheckAvailabilityOutput>;

// The operation
/**
 * Checks the availability of the given service namespace across all Azure subscriptions. This is useful because the domain name is created based on the service namespace name.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesCheckAvailability = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesCheckAvailabilityInput,
  outputSchema: NamespacesCheckAvailabilityOutput,
}));
// Input Schema
export interface NamespacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  sku: {
    name: "Free" | "Basic" | "Standard";
    tier?: string;
    size?: string;
    family?: string;
    capacity?: number;
  };
  properties?: {
    name?: string;
    provisioningState?:
      | "Unknown"
      | "InProgress"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Disabled";
    status?: "Created" | "Creating" | "Suspended" | "Deleting";
    enabled?: boolean;
    critical?: boolean;
    subscriptionId?: string;
    region?: string;
    metricId?: string;
    createdAt?: string;
    updatedAt?: string;
    namespaceType?: "Messaging" | "NotificationHub";
    replicationRegion?:
      | "Default"
      | "WestUs2"
      | "NorthEurope"
      | "AustraliaEast"
      | "BrazilSouth"
      | "SouthEastAsia"
      | "SouthAfricaNorth"
      | "None";
    zoneRedundancy?: "Disabled" | "Enabled";
    networkAcls?: {
      ipRules?: { ipMask: string; rights: ("Manage" | "Send" | "Listen")[] }[];
      publicNetworkRule?: { rights: ("Manage" | "Send" | "Listen")[] };
    };
    pnsCredentials?: {
      admCredential?: {
        properties: {
          clientId: string;
          clientSecret: string | Redacted.Redacted<string>;
          authTokenUrl: string;
        };
      };
      apnsCredential?: {
        properties: {
          apnsCertificate?: string;
          certificateKey?: string;
          endpoint: string;
          thumbprint?: string;
          keyId?: string;
          appName?: string;
          appId?: string;
          token?: string;
        };
      };
      baiduCredential?: {
        properties: {
          baiduApiKey: string;
          baiduEndPoint: string;
          baiduSecretKey: string | Redacted.Redacted<string>;
        };
      };
      browserCredential?: {
        properties: {
          subject: string;
          vapidPrivateKey: string;
          vapidPublicKey: string;
        };
      };
      gcmCredential?: {
        properties: { gcmEndpoint?: string; googleApiKey: string };
      };
      mpnsCredential?: {
        properties: {
          mpnsCertificate: string;
          certificateKey: string;
          thumbprint: string;
        };
      };
      wnsCredential?: {
        properties: {
          packageSid?: string;
          secretKey?: string | Redacted.Redacted<string>;
          windowsLiveEndpoint?: string;
          certificateKey?: string;
          wnsCertificate?: string;
        };
      };
      xiaomiCredential?: {
        properties: { appSecret?: string; endpoint?: string };
      };
    };
    serviceBusEndpoint?: string;
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
    }[];
    scaleUnit?: string;
    dataCenter?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const NamespacesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    sku: Schema.Struct({
      name: Schema.Literals(["Free", "Basic", "Standard"]),
      tier: Schema.optional(Schema.String),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
    properties: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "InProgress",
            "Succeeded",
            "Failed",
            "Canceled",
            "Pending",
            "Disabled",
          ]),
        ),
        status: Schema.optional(
          Schema.Literals(["Created", "Creating", "Suspended", "Deleting"]),
        ),
        enabled: Schema.optional(Schema.Boolean),
        critical: Schema.optional(Schema.Boolean),
        subscriptionId: Schema.optional(Schema.String),
        region: Schema.optional(Schema.String),
        metricId: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
        namespaceType: Schema.optional(
          Schema.Literals(["Messaging", "NotificationHub"]),
        ),
        replicationRegion: Schema.optional(
          Schema.Literals([
            "Default",
            "WestUs2",
            "NorthEurope",
            "AustraliaEast",
            "BrazilSouth",
            "SouthEastAsia",
            "SouthAfricaNorth",
            "None",
          ]),
        ),
        zoneRedundancy: Schema.optional(
          Schema.Literals(["Disabled", "Enabled"]),
        ),
        networkAcls: Schema.optional(
          Schema.Struct({
            ipRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  ipMask: Schema.String,
                  rights: Schema.Array(
                    Schema.Literals(["Manage", "Send", "Listen"]),
                  ),
                }),
              ),
            ),
            publicNetworkRule: Schema.optional(
              Schema.Struct({
                rights: Schema.Array(
                  Schema.Literals(["Manage", "Send", "Listen"]),
                ),
              }),
            ),
          }),
        ),
        pnsCredentials: Schema.optional(
          Schema.Struct({
            admCredential: Schema.optional(
              Schema.Struct({
                properties: Schema.Struct({
                  clientId: Schema.String,
                  clientSecret: SensitiveString,
                  authTokenUrl: Schema.String,
                }),
              }),
            ),
            apnsCredential: Schema.optional(
              Schema.Struct({
                properties: Schema.Struct({
                  apnsCertificate: Schema.optional(Schema.String),
                  certificateKey: Schema.optional(Schema.String),
                  endpoint: Schema.String,
                  thumbprint: Schema.optional(Schema.String),
                  keyId: Schema.optional(Schema.String),
                  appName: Schema.optional(Schema.String),
                  appId: Schema.optional(Schema.String),
                  token: Schema.optional(Schema.String),
                }),
              }),
            ),
            baiduCredential: Schema.optional(
              Schema.Struct({
                properties: Schema.Struct({
                  baiduApiKey: Schema.String,
                  baiduEndPoint: Schema.String,
                  baiduSecretKey: SensitiveString,
                }),
              }),
            ),
            browserCredential: Schema.optional(
              Schema.Struct({
                properties: Schema.Struct({
                  subject: Schema.String,
                  vapidPrivateKey: Schema.String,
                  vapidPublicKey: Schema.String,
                }),
              }),
            ),
            gcmCredential: Schema.optional(
              Schema.Struct({
                properties: Schema.Struct({
                  gcmEndpoint: Schema.optional(Schema.String),
                  googleApiKey: Schema.String,
                }),
              }),
            ),
            mpnsCredential: Schema.optional(
              Schema.Struct({
                properties: Schema.Struct({
                  mpnsCertificate: Schema.String,
                  certificateKey: Schema.String,
                  thumbprint: Schema.String,
                }),
              }),
            ),
            wnsCredential: Schema.optional(
              Schema.Struct({
                properties: Schema.Struct({
                  packageSid: Schema.optional(Schema.String),
                  secretKey: Schema.optional(SensitiveString),
                  windowsLiveEndpoint: Schema.optional(Schema.String),
                  certificateKey: Schema.optional(Schema.String),
                  wnsCertificate: Schema.optional(Schema.String),
                }),
              }),
            ),
            xiaomiCredential: Schema.optional(
              Schema.Struct({
                properties: Schema.Struct({
                  appSecret: Schema.optional(Schema.String),
                  endpoint: Schema.optional(Schema.String),
                }),
              }),
            ),
          }),
        ),
        serviceBusEndpoint: Schema.optional(Schema.String),
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
            }),
          ),
        ),
        scaleUnit: Schema.optional(Schema.String),
        dataCenter: Schema.optional(Schema.String),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCreateOrUpdateInput>;

// Output Schema
export interface NamespacesCreateOrUpdateOutput {
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
export const NamespacesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NamespacesCreateOrUpdateOutput>;

// The operation
/**
 * Creates / Updates a Notification Hub namespace. This operation is idempotent.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesCreateOrUpdateInput,
  outputSchema: NamespacesCreateOrUpdateOutput,
}));
// Input Schema
export interface NamespacesCreateOrUpdateAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
  properties?: {
    rights: ("Manage" | "Send" | "Listen")[];
    primaryKey?: string;
    secondaryKey?: string;
    keyName?: string;
    modifiedTime?: string;
    createdTime?: string;
    claimType?: string;
    claimValue?: string;
    revision?: number;
  };
  location?: string;
  tags?: Record<string, string>;
}
export const NamespacesCreateOrUpdateAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        rights: Schema.Array(Schema.Literals(["Manage", "Send", "Listen"])),
        primaryKey: Schema.optional(Schema.String),
        secondaryKey: Schema.optional(Schema.String),
        keyName: Schema.optional(Schema.String),
        modifiedTime: Schema.optional(Schema.String),
        createdTime: Schema.optional(Schema.String),
        claimType: Schema.optional(Schema.String),
        claimValue: Schema.optional(Schema.String),
        revision: Schema.optional(Schema.Number),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCreateOrUpdateAuthorizationRuleInput>;

// Output Schema
export interface NamespacesCreateOrUpdateAuthorizationRuleOutput {
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
export const NamespacesCreateOrUpdateAuthorizationRuleOutput =
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
  }) as unknown as Schema.Codec<NamespacesCreateOrUpdateAuthorizationRuleOutput>;

// The operation
/**
 * Creates an authorization rule for a namespace
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param authorizationRuleName - Authorization Rule Name
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesCreateOrUpdateAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesCreateOrUpdateAuthorizationRuleInput,
    outputSchema: NamespacesCreateOrUpdateAuthorizationRuleOutput,
  }));
// Input Schema
export interface NamespacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}",
    apiVersion: "2023-09-01",
  }),
) as unknown as Schema.Codec<NamespacesDeleteInput>;

// Output Schema
export type NamespacesDeleteOutput = void;
export const NamespacesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespacesDeleteOutput>;

// The operation
/**
 * Deletes an existing namespace. This operation also removes all associated notificationHubs under the namespace.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesDeleteInput,
  outputSchema: NamespacesDeleteOutput,
}));
// Input Schema
export interface NamespacesDeleteAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
}
export const NamespacesDeleteAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NamespacesDeleteAuthorizationRuleInput>;

// Output Schema
export type NamespacesDeleteAuthorizationRuleOutput = void;
export const NamespacesDeleteAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespacesDeleteAuthorizationRuleOutput>;

// The operation
/**
 * Deletes a namespace authorization rule
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param authorizationRuleName - Authorization Rule Name
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesDeleteAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesDeleteAuthorizationRuleInput,
    outputSchema: NamespacesDeleteAuthorizationRuleOutput,
  }));
// Input Schema
export interface NamespacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}",
    apiVersion: "2023-09-01",
  }),
) as unknown as Schema.Codec<NamespacesGetInput>;

// Output Schema
export interface NamespacesGetOutput {
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
export const NamespacesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NamespacesGetOutput>;

// The operation
/**
 * Returns the given namespace.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesGetInput,
  outputSchema: NamespacesGetOutput,
}));
// Input Schema
export interface NamespacesGetAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
}
export const NamespacesGetAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NamespacesGetAuthorizationRuleInput>;

// Output Schema
export interface NamespacesGetAuthorizationRuleOutput {
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
export const NamespacesGetAuthorizationRuleOutput =
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
  }) as unknown as Schema.Codec<NamespacesGetAuthorizationRuleOutput>;

// The operation
/**
 * Gets an authorization rule for a namespace by name.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param authorizationRuleName - Authorization Rule Name
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesGetAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesGetAuthorizationRuleInput,
    outputSchema: NamespacesGetAuthorizationRuleOutput,
  }));
// Input Schema
export interface NamespacesGetPnsCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesGetPnsCredentialsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/pnsCredentials",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NamespacesGetPnsCredentialsInput>;

// Output Schema
export interface NamespacesGetPnsCredentialsOutput {
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
export const NamespacesGetPnsCredentialsOutput =
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
  }) as unknown as Schema.Codec<NamespacesGetPnsCredentialsOutput>;

// The operation
/**
 * Lists the PNS credentials associated with a namespace.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesGetPnsCredentials = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesGetPnsCredentialsInput,
  outputSchema: NamespacesGetPnsCredentialsOutput,
}));
// Input Schema
export interface NamespacesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  $skipToken?: string;
  $top?: number;
}
export const NamespacesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  $skipToken: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces",
    apiVersion: "2023-09-01",
  }),
) as unknown as Schema.Codec<NamespacesListInput>;

// Output Schema
export interface NamespacesListOutput {
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
  }[];
  nextLink?: string;
}
export const NamespacesListOutput = /*@__PURE__*/ Schema.Struct({
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
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<NamespacesListOutput>;

// The operation
/**
 * Lists the available namespaces within a resource group.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $skipToken - Skip token for subsequent requests.
 * @param $top - Maximum number of results to return.
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesListInput,
  outputSchema: NamespacesListOutput,
}));
// Input Schema
export interface NamespacesListAllInput {
  subscriptionId: string;
  $skipToken?: string;
  $top?: number;
}
export const NamespacesListAllInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $skipToken: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.NotificationHubs/namespaces",
    apiVersion: "2023-09-01",
  }),
) as unknown as Schema.Codec<NamespacesListAllInput>;

// Output Schema
export interface NamespacesListAllOutput {
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
  }[];
  nextLink?: string;
}
export const NamespacesListAllOutput =
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
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesListAllOutput>;

// The operation
/**
 * Lists all the available namespaces within the subscription.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $skipToken - Skip token for subsequent requests.
 * @param $top - Maximum number of results to return.
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesListAll = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesListAllInput,
  outputSchema: NamespacesListAllOutput,
}));
// Input Schema
export interface NamespacesListAuthorizationRulesInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesListAuthorizationRulesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListAuthorizationRulesInput>;

// Output Schema
export interface NamespacesListAuthorizationRulesOutput {
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
  }[];
  nextLink?: string;
}
export const NamespacesListAuthorizationRulesOutput =
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
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesListAuthorizationRulesOutput>;

// The operation
/**
 * Gets the authorization rules for a namespace.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesListAuthorizationRules =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListAuthorizationRulesInput,
    outputSchema: NamespacesListAuthorizationRulesOutput,
  }));
// Input Schema
export interface NamespacesListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
}
export const NamespacesListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}/listKeys",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListKeysInput>;

// Output Schema
export interface NamespacesListKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const NamespacesListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesListKeysOutput>;

// The operation
/**
 * Gets the Primary and Secondary ConnectionStrings to the namespace.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param authorizationRuleName - Authorization Rule Name
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesListKeysInput,
  outputSchema: NamespacesListKeysOutput,
}));
// Input Schema
export interface NamespacesRegenerateKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
  policyKey: "PrimaryKey" | "SecondaryKey";
}
export const NamespacesRegenerateKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    policyKey: Schema.Literals(["PrimaryKey", "SecondaryKey"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}/regenerateKeys",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NamespacesRegenerateKeysInput>;

// Output Schema
export interface NamespacesRegenerateKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const NamespacesRegenerateKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesRegenerateKeysOutput>;

// The operation
/**
 * Regenerates the Primary/Secondary Keys to the Namespace Authorization Rule
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param authorizationRuleName - Authorization Rule Name
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesRegenerateKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesRegenerateKeysInput,
  outputSchema: NamespacesRegenerateKeysOutput,
}));
// Input Schema
export interface NamespacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  sku?: {
    name: "Free" | "Basic" | "Standard";
    tier?: string;
    size?: string;
    family?: string;
    capacity?: number;
  };
  properties?: {
    name?: string;
    provisioningState?:
      | "Unknown"
      | "InProgress"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Disabled";
    status?: "Created" | "Creating" | "Suspended" | "Deleting";
    enabled?: boolean;
    critical?: boolean;
    subscriptionId?: string;
    region?: string;
    metricId?: string;
    createdAt?: string;
    updatedAt?: string;
    namespaceType?: "Messaging" | "NotificationHub";
    replicationRegion?:
      | "Default"
      | "WestUs2"
      | "NorthEurope"
      | "AustraliaEast"
      | "BrazilSouth"
      | "SouthEastAsia"
      | "SouthAfricaNorth"
      | "None";
    zoneRedundancy?: "Disabled" | "Enabled";
    networkAcls?: {
      ipRules?: { ipMask: string; rights: ("Manage" | "Send" | "Listen")[] }[];
      publicNetworkRule?: { rights: ("Manage" | "Send" | "Listen")[] };
    };
    pnsCredentials?: {
      admCredential?: {
        properties: {
          clientId: string;
          clientSecret: string | Redacted.Redacted<string>;
          authTokenUrl: string;
        };
      };
      apnsCredential?: {
        properties: {
          apnsCertificate?: string;
          certificateKey?: string;
          endpoint: string;
          thumbprint?: string;
          keyId?: string;
          appName?: string;
          appId?: string;
          token?: string;
        };
      };
      baiduCredential?: {
        properties: {
          baiduApiKey: string;
          baiduEndPoint: string;
          baiduSecretKey: string | Redacted.Redacted<string>;
        };
      };
      browserCredential?: {
        properties: {
          subject: string;
          vapidPrivateKey: string;
          vapidPublicKey: string;
        };
      };
      gcmCredential?: {
        properties: { gcmEndpoint?: string; googleApiKey: string };
      };
      mpnsCredential?: {
        properties: {
          mpnsCertificate: string;
          certificateKey: string;
          thumbprint: string;
        };
      };
      wnsCredential?: {
        properties: {
          packageSid?: string;
          secretKey?: string | Redacted.Redacted<string>;
          windowsLiveEndpoint?: string;
          certificateKey?: string;
          wnsCertificate?: string;
        };
      };
      xiaomiCredential?: {
        properties: { appSecret?: string; endpoint?: string };
      };
    };
    serviceBusEndpoint?: string;
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
    }[];
    scaleUnit?: string;
    dataCenter?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
  };
  tags?: Record<string, string>;
}
export const NamespacesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["Free", "Basic", "Standard"]),
      tier: Schema.optional(Schema.String),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "InProgress",
          "Succeeded",
          "Failed",
          "Canceled",
          "Pending",
          "Disabled",
        ]),
      ),
      status: Schema.optional(
        Schema.Literals(["Created", "Creating", "Suspended", "Deleting"]),
      ),
      enabled: Schema.optional(Schema.Boolean),
      critical: Schema.optional(Schema.Boolean),
      subscriptionId: Schema.optional(Schema.String),
      region: Schema.optional(Schema.String),
      metricId: Schema.optional(Schema.String),
      createdAt: Schema.optional(Schema.String),
      updatedAt: Schema.optional(Schema.String),
      namespaceType: Schema.optional(
        Schema.Literals(["Messaging", "NotificationHub"]),
      ),
      replicationRegion: Schema.optional(
        Schema.Literals([
          "Default",
          "WestUs2",
          "NorthEurope",
          "AustraliaEast",
          "BrazilSouth",
          "SouthEastAsia",
          "SouthAfricaNorth",
          "None",
        ]),
      ),
      zoneRedundancy: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      networkAcls: Schema.optional(
        Schema.Struct({
          ipRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                ipMask: Schema.String,
                rights: Schema.Array(
                  Schema.Literals(["Manage", "Send", "Listen"]),
                ),
              }),
            ),
          ),
          publicNetworkRule: Schema.optional(
            Schema.Struct({
              rights: Schema.Array(
                Schema.Literals(["Manage", "Send", "Listen"]),
              ),
            }),
          ),
        }),
      ),
      pnsCredentials: Schema.optional(
        Schema.Struct({
          admCredential: Schema.optional(
            Schema.Struct({
              properties: Schema.Struct({
                clientId: Schema.String,
                clientSecret: SensitiveString,
                authTokenUrl: Schema.String,
              }),
            }),
          ),
          apnsCredential: Schema.optional(
            Schema.Struct({
              properties: Schema.Struct({
                apnsCertificate: Schema.optional(Schema.String),
                certificateKey: Schema.optional(Schema.String),
                endpoint: Schema.String,
                thumbprint: Schema.optional(Schema.String),
                keyId: Schema.optional(Schema.String),
                appName: Schema.optional(Schema.String),
                appId: Schema.optional(Schema.String),
                token: Schema.optional(Schema.String),
              }),
            }),
          ),
          baiduCredential: Schema.optional(
            Schema.Struct({
              properties: Schema.Struct({
                baiduApiKey: Schema.String,
                baiduEndPoint: Schema.String,
                baiduSecretKey: SensitiveString,
              }),
            }),
          ),
          browserCredential: Schema.optional(
            Schema.Struct({
              properties: Schema.Struct({
                subject: Schema.String,
                vapidPrivateKey: Schema.String,
                vapidPublicKey: Schema.String,
              }),
            }),
          ),
          gcmCredential: Schema.optional(
            Schema.Struct({
              properties: Schema.Struct({
                gcmEndpoint: Schema.optional(Schema.String),
                googleApiKey: Schema.String,
              }),
            }),
          ),
          mpnsCredential: Schema.optional(
            Schema.Struct({
              properties: Schema.Struct({
                mpnsCertificate: Schema.String,
                certificateKey: Schema.String,
                thumbprint: Schema.String,
              }),
            }),
          ),
          wnsCredential: Schema.optional(
            Schema.Struct({
              properties: Schema.Struct({
                packageSid: Schema.optional(Schema.String),
                secretKey: Schema.optional(SensitiveString),
                windowsLiveEndpoint: Schema.optional(Schema.String),
                certificateKey: Schema.optional(Schema.String),
                wnsCertificate: Schema.optional(Schema.String),
              }),
            }),
          ),
          xiaomiCredential: Schema.optional(
            Schema.Struct({
              properties: Schema.Struct({
                appSecret: Schema.optional(Schema.String),
                endpoint: Schema.optional(Schema.String),
              }),
            }),
          ),
        }),
      ),
      serviceBusEndpoint: Schema.optional(Schema.String),
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
          }),
        ),
      ),
      scaleUnit: Schema.optional(Schema.String),
      dataCenter: Schema.optional(Schema.String),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}",
    apiVersion: "2023-09-01",
  }),
) as unknown as Schema.Codec<NamespacesUpdateInput>;

// Output Schema
export interface NamespacesUpdateOutput {
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
export const NamespacesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NamespacesUpdateOutput>;

// The operation
/**
 * Patches the existing namespace.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param api-version - The API version to use for this operation.
 */
export const NamespacesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesUpdateInput,
  outputSchema: NamespacesUpdateOutput,
}));
// Input Schema
export interface NotificationHubsCheckNotificationHubAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  id?: string;
  name: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  isAvailiable?: boolean;
  sku?: {
    name: "Free" | "Basic" | "Standard";
    tier?: string;
    size?: string;
    family?: string;
    capacity?: number;
  };
}
export const NotificationHubsCheckNotificationHubAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.String,
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    isAvailiable: Schema.optional(Schema.Boolean),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["Free", "Basic", "Standard"]),
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/checkNotificationHubAvailability",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsCheckNotificationHubAvailabilityInput>;

// Output Schema
export interface NotificationHubsCheckNotificationHubAvailabilityOutput {
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
export const NotificationHubsCheckNotificationHubAvailabilityOutput =
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
  }) as unknown as Schema.Codec<NotificationHubsCheckNotificationHubAvailabilityOutput>;

// The operation
/**
 * Checks the availability of the given notificationHub in a namespace.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsCheckNotificationHubAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotificationHubsCheckNotificationHubAvailabilityInput,
    outputSchema: NotificationHubsCheckNotificationHubAvailabilityOutput,
  }));
// Input Schema
export interface NotificationHubsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
  properties?: {
    name?: string;
    registrationTtl?: string;
    authorizationRules?: {
      rights: ("Manage" | "Send" | "Listen")[];
      primaryKey?: string;
      secondaryKey?: string;
      keyName?: string;
      modifiedTime?: string;
      createdTime?: string;
      claimType?: string;
      claimValue?: string;
      revision?: number;
    }[];
    apnsCredential?: {
      properties: {
        apnsCertificate?: string;
        certificateKey?: string;
        endpoint: string;
        thumbprint?: string;
        keyId?: string;
        appName?: string;
        appId?: string;
        token?: string;
      };
    };
    wnsCredential?: {
      properties: {
        packageSid?: string;
        secretKey?: string | Redacted.Redacted<string>;
        windowsLiveEndpoint?: string;
        certificateKey?: string;
        wnsCertificate?: string;
      };
    };
    gcmCredential?: {
      properties: { gcmEndpoint?: string; googleApiKey: string };
    };
    mpnsCredential?: {
      properties: {
        mpnsCertificate: string;
        certificateKey: string;
        thumbprint: string;
      };
    };
    admCredential?: {
      properties: {
        clientId: string;
        clientSecret: string | Redacted.Redacted<string>;
        authTokenUrl: string;
      };
    };
    baiduCredential?: {
      properties: {
        baiduApiKey: string;
        baiduEndPoint: string;
        baiduSecretKey: string | Redacted.Redacted<string>;
      };
    };
    browserCredential?: {
      properties: {
        subject: string;
        vapidPrivateKey: string;
        vapidPublicKey: string;
      };
    };
    xiaomiCredential?: {
      properties: { appSecret?: string; endpoint?: string };
    };
    dailyMaxActiveDevices?: number;
  };
  sku?: {
    name: "Free" | "Basic" | "Standard";
    tier?: string;
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NotificationHubsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        registrationTtl: Schema.optional(Schema.String),
        authorizationRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              rights: Schema.Array(
                Schema.Literals(["Manage", "Send", "Listen"]),
              ),
              primaryKey: Schema.optional(Schema.String),
              secondaryKey: Schema.optional(Schema.String),
              keyName: Schema.optional(Schema.String),
              modifiedTime: Schema.optional(Schema.String),
              createdTime: Schema.optional(Schema.String),
              claimType: Schema.optional(Schema.String),
              claimValue: Schema.optional(Schema.String),
              revision: Schema.optional(Schema.Number),
            }),
          ),
        ),
        apnsCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              apnsCertificate: Schema.optional(Schema.String),
              certificateKey: Schema.optional(Schema.String),
              endpoint: Schema.String,
              thumbprint: Schema.optional(Schema.String),
              keyId: Schema.optional(Schema.String),
              appName: Schema.optional(Schema.String),
              appId: Schema.optional(Schema.String),
              token: Schema.optional(Schema.String),
            }),
          }),
        ),
        wnsCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              packageSid: Schema.optional(Schema.String),
              secretKey: Schema.optional(SensitiveString),
              windowsLiveEndpoint: Schema.optional(Schema.String),
              certificateKey: Schema.optional(Schema.String),
              wnsCertificate: Schema.optional(Schema.String),
            }),
          }),
        ),
        gcmCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              gcmEndpoint: Schema.optional(Schema.String),
              googleApiKey: Schema.String,
            }),
          }),
        ),
        mpnsCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              mpnsCertificate: Schema.String,
              certificateKey: Schema.String,
              thumbprint: Schema.String,
            }),
          }),
        ),
        admCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              clientId: Schema.String,
              clientSecret: SensitiveString,
              authTokenUrl: Schema.String,
            }),
          }),
        ),
        baiduCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              baiduApiKey: Schema.String,
              baiduEndPoint: Schema.String,
              baiduSecretKey: SensitiveString,
            }),
          }),
        ),
        browserCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              subject: Schema.String,
              vapidPrivateKey: Schema.String,
              vapidPublicKey: Schema.String,
            }),
          }),
        ),
        xiaomiCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              appSecret: Schema.optional(Schema.String),
              endpoint: Schema.optional(Schema.String),
            }),
          }),
        ),
        dailyMaxActiveDevices: Schema.optional(Schema.Number),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["Free", "Basic", "Standard"]),
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsCreateOrUpdateInput>;

// Output Schema
export interface NotificationHubsCreateOrUpdateOutput {
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
export const NotificationHubsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NotificationHubsCreateOrUpdateOutput>;

// The operation
/**
 * Creates/Update a NotificationHub in a namespace.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotificationHubsCreateOrUpdateInput,
    outputSchema: NotificationHubsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NotificationHubsCreateOrUpdateAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
  authorizationRuleName: string;
  properties?: {
    rights: ("Manage" | "Send" | "Listen")[];
    primaryKey?: string;
    secondaryKey?: string;
    keyName?: string;
    modifiedTime?: string;
    createdTime?: string;
    claimType?: string;
    claimValue?: string;
    revision?: number;
  };
  location?: string;
  tags?: Record<string, string>;
}
export const NotificationHubsCreateOrUpdateAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        rights: Schema.Array(Schema.Literals(["Manage", "Send", "Listen"])),
        primaryKey: Schema.optional(Schema.String),
        secondaryKey: Schema.optional(Schema.String),
        keyName: Schema.optional(Schema.String),
        modifiedTime: Schema.optional(Schema.String),
        createdTime: Schema.optional(Schema.String),
        claimType: Schema.optional(Schema.String),
        claimValue: Schema.optional(Schema.String),
        revision: Schema.optional(Schema.Number),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsCreateOrUpdateAuthorizationRuleInput>;

// Output Schema
export interface NotificationHubsCreateOrUpdateAuthorizationRuleOutput {
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
export const NotificationHubsCreateOrUpdateAuthorizationRuleOutput =
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
  }) as unknown as Schema.Codec<NotificationHubsCreateOrUpdateAuthorizationRuleOutput>;

// The operation
/**
 * Creates/Updates an authorization rule for a NotificationHub
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param authorizationRuleName - Authorization Rule Name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsCreateOrUpdateAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotificationHubsCreateOrUpdateAuthorizationRuleInput,
    outputSchema: NotificationHubsCreateOrUpdateAuthorizationRuleOutput,
  }));
// Input Schema
export interface NotificationHubsDebugSendInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
}
export const NotificationHubsDebugSendInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/debugsend",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsDebugSendInput>;

// Output Schema
export interface NotificationHubsDebugSendOutput {
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
export const NotificationHubsDebugSendOutput =
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
  }) as unknown as Schema.Codec<NotificationHubsDebugSendOutput>;

// The operation
/**
 * Test send a push notification.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsDebugSend = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotificationHubsDebugSendInput,
  outputSchema: NotificationHubsDebugSendOutput,
}));
// Input Schema
export interface NotificationHubsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
}
export const NotificationHubsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsDeleteInput>;

// Output Schema
export type NotificationHubsDeleteOutput = void;
export const NotificationHubsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NotificationHubsDeleteOutput>;

// The operation
/**
 * Deletes a notification hub associated with a namespace.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotificationHubsDeleteInput,
  outputSchema: NotificationHubsDeleteOutput,
}));
// Input Schema
export interface NotificationHubsDeleteAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
  authorizationRuleName: string;
}
export const NotificationHubsDeleteAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsDeleteAuthorizationRuleInput>;

// Output Schema
export type NotificationHubsDeleteAuthorizationRuleOutput = void;
export const NotificationHubsDeleteAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NotificationHubsDeleteAuthorizationRuleOutput>;

// The operation
/**
 * Deletes a notificationHub authorization rule
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param authorizationRuleName - Authorization Rule Name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsDeleteAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotificationHubsDeleteAuthorizationRuleInput,
    outputSchema: NotificationHubsDeleteAuthorizationRuleOutput,
  }));
// Input Schema
export interface NotificationHubsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
}
export const NotificationHubsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsGetInput>;

// Output Schema
export interface NotificationHubsGetOutput {
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
export const NotificationHubsGetOutput =
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
  }) as unknown as Schema.Codec<NotificationHubsGetOutput>;

// The operation
/**
 * Gets the notification hub.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotificationHubsGetInput,
  outputSchema: NotificationHubsGetOutput,
}));
// Input Schema
export interface NotificationHubsGetAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
  authorizationRuleName: string;
}
export const NotificationHubsGetAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsGetAuthorizationRuleInput>;

// Output Schema
export interface NotificationHubsGetAuthorizationRuleOutput {
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
export const NotificationHubsGetAuthorizationRuleOutput =
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
  }) as unknown as Schema.Codec<NotificationHubsGetAuthorizationRuleOutput>;

// The operation
/**
 * Gets an authorization rule for a NotificationHub by name.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param authorizationRuleName - Authorization Rule Name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsGetAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotificationHubsGetAuthorizationRuleInput,
    outputSchema: NotificationHubsGetAuthorizationRuleOutput,
  }));
// Input Schema
export interface NotificationHubsGetPnsCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
}
export const NotificationHubsGetPnsCredentialsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/pnsCredentials",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsGetPnsCredentialsInput>;

// Output Schema
export interface NotificationHubsGetPnsCredentialsOutput {
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
export const NotificationHubsGetPnsCredentialsOutput =
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
  }) as unknown as Schema.Codec<NotificationHubsGetPnsCredentialsOutput>;

// The operation
/**
 * Lists the PNS Credentials associated with a notification hub.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsGetPnsCredentials =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotificationHubsGetPnsCredentialsInput,
    outputSchema: NotificationHubsGetPnsCredentialsOutput,
  }));
// Input Schema
export interface NotificationHubsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  $skipToken?: string;
  $top?: number;
}
export const NotificationHubsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsListInput>;

// Output Schema
export interface NotificationHubsListOutput {
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
  }[];
  nextLink?: string;
}
export const NotificationHubsListOutput =
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
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NotificationHubsListOutput>;

// The operation
/**
 * Lists the notification hubs associated with a namespace.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param $skipToken - Continuation token.
 * @param $top - Page size.
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotificationHubsListInput,
  outputSchema: NotificationHubsListOutput,
}));
// Input Schema
export interface NotificationHubsListAuthorizationRulesInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
}
export const NotificationHubsListAuthorizationRulesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/authorizationRules",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsListAuthorizationRulesInput>;

// Output Schema
export interface NotificationHubsListAuthorizationRulesOutput {
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
  }[];
  nextLink?: string;
}
export const NotificationHubsListAuthorizationRulesOutput =
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
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NotificationHubsListAuthorizationRulesOutput>;

// The operation
/**
 * Gets the authorization rules for a NotificationHub.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsListAuthorizationRules =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotificationHubsListAuthorizationRulesInput,
    outputSchema: NotificationHubsListAuthorizationRulesOutput,
  }));
// Input Schema
export interface NotificationHubsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
  authorizationRuleName: string;
}
export const NotificationHubsListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/authorizationRules/{authorizationRuleName}/listKeys",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsListKeysInput>;

// Output Schema
export interface NotificationHubsListKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const NotificationHubsListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NotificationHubsListKeysOutput>;

// The operation
/**
 * Gets the Primary and Secondary ConnectionStrings to the NotificationHub
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param authorizationRuleName - Authorization Rule Name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotificationHubsListKeysInput,
  outputSchema: NotificationHubsListKeysOutput,
}));
// Input Schema
export interface NotificationHubsRegenerateKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
  authorizationRuleName: string;
  policyKey: "PrimaryKey" | "SecondaryKey";
}
export const NotificationHubsRegenerateKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    policyKey: Schema.Literals(["PrimaryKey", "SecondaryKey"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}/authorizationRules/{authorizationRuleName}/regenerateKeys",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsRegenerateKeysInput>;

// Output Schema
export interface NotificationHubsRegenerateKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const NotificationHubsRegenerateKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NotificationHubsRegenerateKeysOutput>;

// The operation
/**
 * Regenerates the Primary/Secondary Keys to the NotificationHub Authorization Rule
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param authorizationRuleName - Authorization Rule Name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsRegenerateKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotificationHubsRegenerateKeysInput,
    outputSchema: NotificationHubsRegenerateKeysOutput,
  }));
// Input Schema
export interface NotificationHubsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  notificationHubName: string;
  properties?: {
    name?: string;
    registrationTtl?: string;
    authorizationRules?: {
      rights: ("Manage" | "Send" | "Listen")[];
      primaryKey?: string;
      secondaryKey?: string;
      keyName?: string;
      modifiedTime?: string;
      createdTime?: string;
      claimType?: string;
      claimValue?: string;
      revision?: number;
    }[];
    apnsCredential?: {
      properties: {
        apnsCertificate?: string;
        certificateKey?: string;
        endpoint: string;
        thumbprint?: string;
        keyId?: string;
        appName?: string;
        appId?: string;
        token?: string;
      };
    };
    wnsCredential?: {
      properties: {
        packageSid?: string;
        secretKey?: string | Redacted.Redacted<string>;
        windowsLiveEndpoint?: string;
        certificateKey?: string;
        wnsCertificate?: string;
      };
    };
    gcmCredential?: {
      properties: { gcmEndpoint?: string; googleApiKey: string };
    };
    mpnsCredential?: {
      properties: {
        mpnsCertificate: string;
        certificateKey: string;
        thumbprint: string;
      };
    };
    admCredential?: {
      properties: {
        clientId: string;
        clientSecret: string | Redacted.Redacted<string>;
        authTokenUrl: string;
      };
    };
    baiduCredential?: {
      properties: {
        baiduApiKey: string;
        baiduEndPoint: string;
        baiduSecretKey: string | Redacted.Redacted<string>;
      };
    };
    browserCredential?: {
      properties: {
        subject: string;
        vapidPrivateKey: string;
        vapidPublicKey: string;
      };
    };
    xiaomiCredential?: {
      properties: { appSecret?: string; endpoint?: string };
    };
    dailyMaxActiveDevices?: number;
  };
  sku?: {
    name: "Free" | "Basic" | "Standard";
    tier?: string;
    size?: string;
    family?: string;
    capacity?: number;
  };
  tags?: Record<string, string>;
}
export const NotificationHubsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    notificationHubName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        registrationTtl: Schema.optional(Schema.String),
        authorizationRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              rights: Schema.Array(
                Schema.Literals(["Manage", "Send", "Listen"]),
              ),
              primaryKey: Schema.optional(Schema.String),
              secondaryKey: Schema.optional(Schema.String),
              keyName: Schema.optional(Schema.String),
              modifiedTime: Schema.optional(Schema.String),
              createdTime: Schema.optional(Schema.String),
              claimType: Schema.optional(Schema.String),
              claimValue: Schema.optional(Schema.String),
              revision: Schema.optional(Schema.Number),
            }),
          ),
        ),
        apnsCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              apnsCertificate: Schema.optional(Schema.String),
              certificateKey: Schema.optional(Schema.String),
              endpoint: Schema.String,
              thumbprint: Schema.optional(Schema.String),
              keyId: Schema.optional(Schema.String),
              appName: Schema.optional(Schema.String),
              appId: Schema.optional(Schema.String),
              token: Schema.optional(Schema.String),
            }),
          }),
        ),
        wnsCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              packageSid: Schema.optional(Schema.String),
              secretKey: Schema.optional(SensitiveString),
              windowsLiveEndpoint: Schema.optional(Schema.String),
              certificateKey: Schema.optional(Schema.String),
              wnsCertificate: Schema.optional(Schema.String),
            }),
          }),
        ),
        gcmCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              gcmEndpoint: Schema.optional(Schema.String),
              googleApiKey: Schema.String,
            }),
          }),
        ),
        mpnsCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              mpnsCertificate: Schema.String,
              certificateKey: Schema.String,
              thumbprint: Schema.String,
            }),
          }),
        ),
        admCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              clientId: Schema.String,
              clientSecret: SensitiveString,
              authTokenUrl: Schema.String,
            }),
          }),
        ),
        baiduCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              baiduApiKey: Schema.String,
              baiduEndPoint: Schema.String,
              baiduSecretKey: SensitiveString,
            }),
          }),
        ),
        browserCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              subject: Schema.String,
              vapidPrivateKey: Schema.String,
              vapidPublicKey: Schema.String,
            }),
          }),
        ),
        xiaomiCredential: Schema.optional(
          Schema.Struct({
            properties: Schema.Struct({
              appSecret: Schema.optional(Schema.String),
              endpoint: Schema.optional(Schema.String),
            }),
          }),
        ),
        dailyMaxActiveDevices: Schema.optional(Schema.Number),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["Free", "Basic", "Standard"]),
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/notificationHubs/{notificationHubName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationHubsUpdateInput>;

// Output Schema
export interface NotificationHubsUpdateOutput {
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
export const NotificationHubsUpdateOutput =
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
  }) as unknown as Schema.Codec<NotificationHubsUpdateOutput>;

// The operation
/**
 * Patch a NotificationHub in a namespace.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param notificationHubName - Notification Hub name
 * @param api-version - The API version to use for this operation.
 */
export const NotificationHubsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotificationHubsUpdateInput,
  outputSchema: NotificationHubsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.NotificationHubs/operations",
    apiVersion: "2023-09-01",
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
    properties?: {
      serviceSpecification?: {
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
        }[];
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          availabilities?: { timeGrain?: string; blobDuration?: string }[];
          metricFilterPattern?: string;
          fillGapWithZero?: boolean;
        }[];
      };
    };
    isDataAction?: boolean;
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
        properties: Schema.optional(
          Schema.Struct({
            serviceSpecification: Schema.optional(
              Schema.Struct({
                logSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      blobDuration: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      aggregationType: Schema.optional(Schema.String),
                      availabilities: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            timeGrain: Schema.optional(Schema.String),
                            blobDuration: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      metricFilterPattern: Schema.optional(Schema.String),
                      fillGapWithZero: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        isDataAction: Schema.optional(Schema.Boolean),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all available Notification Hubs operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the Private Endpoint Connection.
This is a public API that can be called directly by Notification Hubs users.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param privateEndpointConnectionName - Private Endpoint Connection Name
 * @param api-version - The API version to use for this operation.
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
  namespaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-09-01",
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Returns a Private Endpoint Connection with a given name. 
This is a public API that can be called directly by Notification Hubs users.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param privateEndpointConnectionName - Private Endpoint Connection Name
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetGroupIdInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  subResourceName: string;
}
export const PrivateEndpointConnectionsGetGroupIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    subResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/privateLinkResources/{subResourceName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetGroupIdInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetGroupIdOutput {
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
export const PrivateEndpointConnectionsGetGroupIdOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetGroupIdOutput>;

// The operation
/**
 * Returns Group Id response. 
This is a public API required by the Networking RP contract. It can be used directly by Notification Hubs users.
 *
 * Even though this namespace requires subscription id, resource group and namespace name, it returns a constant payload (for a given namespacE) every time it's called.
 * That's why we don't send it to the sibling RP, but process it directly in the scale unit that received the request.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param subResourceName - Name of the Private Link sub-resource. The only supported sub-resource is "namespace"
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionsGetGroupId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetGroupIdInput,
    outputSchema: PrivateEndpointConnectionsGetGroupIdOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/privateEndpointConnections",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
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
  }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsListOutput =
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
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * Returns all Private Endpoint Connections that belong to the given Notification Hubs namespace.
This is a public API that can be called directly by Notification Hubs users.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListGroupIdsInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const PrivateEndpointConnectionsListGroupIdsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/privateLinkResources",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListGroupIdsInput>;

// Output Schema
export interface PrivateEndpointConnectionsListGroupIdsOutput {
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
  }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsListGroupIdsOutput =
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
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListGroupIdsOutput>;

// The operation
/**
 * Returns all Group Ids supported by the Notification Hubs RP.
This is a public API required by the Networking RP contract. It can be used directly by Notification Hubs users.
 *
 * Even though this namespace requires subscription id, resource group and namespace name, it returns a constant payload (for a given namespacE) every time it's called.
 * That's why we don't send it to the sibling RP, but process it directly in the scale unit that received the request.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionsListGroupIds =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListGroupIdsInput,
    outputSchema: PrivateEndpointConnectionsListGroupIdsOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  privateEndpointConnectionName: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Creating"
      | "Updating"
      | "UpdatingByProxy"
      | "Deleting"
      | "DeletingByProxy"
      | "Deleted";
    privateEndpoint?: { id?: string };
    groupIds?: string[];
    privateLinkServiceConnectionState?: {
      status?: "Disconnected" | "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
  };
}
export const PrivateEndpointConnectionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Creating",
            "Updating",
            "UpdatingByProxy",
            "Deleting",
            "DeletingByProxy",
            "Deleted",
          ]),
        ),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Disconnected",
                "Pending",
                "Approved",
                "Rejected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NotificationHubs/namespaces/{namespaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsUpdateOutput {
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
export const PrivateEndpointConnectionsUpdateOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateOutput>;

// The operation
/**
 * Approves or rejects Private Endpoint Connection.
This is a public API that can be called directly by Notification Hubs users.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - Namespace name
 * @param privateEndpointConnectionName - Private Endpoint Connection Name
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateInput,
    outputSchema: PrivateEndpointConnectionsUpdateOutput,
  }));
