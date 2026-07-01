/**
 * Azure Deviceregistry API
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
export interface AssetEndpointProfilesCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  assetEndpointProfileName: string;
  properties?: {
    uuid?: string;
    targetAddress: string;
    endpointProfileType: string;
    authentication?: {
      method: "Anonymous" | "Certificate" | "UsernamePassword";
      usernamePasswordCredentials?: {
        usernameSecretName: string;
        passwordSecretName: string | Redacted.Redacted<string>;
      };
      x509Credentials?: { certificateSecretName: string };
    };
    additionalConfiguration?: string;
    discoveredAssetEndpointProfileRef?: string;
    status?: { errors?: { code?: number; message?: string }[] };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Deleting";
  };
  extendedLocation: { type: string; name: string };
  tags?: Record<string, string>;
  location: string;
}
export const AssetEndpointProfilesCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    assetEndpointProfileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        targetAddress: Schema.String,
        endpointProfileType: Schema.String,
        authentication: Schema.optional(
          Schema.Struct({
            method: Schema.Literals([
              "Anonymous",
              "Certificate",
              "UsernamePassword",
            ]),
            usernamePasswordCredentials: Schema.optional(
              Schema.Struct({
                usernameSecretName: Schema.String,
                passwordSecretName: SensitiveString,
              }),
            ),
            x509Credentials: Schema.optional(
              Schema.Struct({
                certificateSecretName: Schema.String,
              }),
            ),
          }),
        ),
        additionalConfiguration: Schema.optional(Schema.String),
        discoveredAssetEndpointProfileRef: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Struct({
            errors: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  code: Schema.optional(Schema.Number),
                  message: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Accepted",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      type: Schema.String,
      name: Schema.String,
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AssetEndpointProfilesCreateOrReplaceInput>;

// Output Schema
export interface AssetEndpointProfilesCreateOrReplaceOutput {
  id?: string;
  name?: string;
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
export const AssetEndpointProfilesCreateOrReplaceOutput =
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
  }) as unknown as Schema.Codec<AssetEndpointProfilesCreateOrReplaceOutput>;

// The operation
/**
 * Create a AssetEndpointProfile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param assetEndpointProfileName - Asset Endpoint Profile name parameter.
 */
export const AssetEndpointProfilesCreateOrReplace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssetEndpointProfilesCreateOrReplaceInput,
    outputSchema: AssetEndpointProfilesCreateOrReplaceOutput,
  }));
// Input Schema
export interface AssetEndpointProfilesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  assetEndpointProfileName: string;
}
export const AssetEndpointProfilesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    assetEndpointProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AssetEndpointProfilesDeleteInput>;

// Output Schema
export type AssetEndpointProfilesDeleteOutput = void;
export const AssetEndpointProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AssetEndpointProfilesDeleteOutput>;

// The operation
/**
 * Delete a AssetEndpointProfile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param assetEndpointProfileName - Asset Endpoint Profile name parameter.
 */
export const AssetEndpointProfilesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssetEndpointProfilesDeleteInput,
    outputSchema: AssetEndpointProfilesDeleteOutput,
  }),
);
// Input Schema
export interface AssetEndpointProfilesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  assetEndpointProfileName: string;
}
export const AssetEndpointProfilesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    assetEndpointProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AssetEndpointProfilesGetInput>;

// Output Schema
export interface AssetEndpointProfilesGetOutput {
  id?: string;
  name?: string;
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
export const AssetEndpointProfilesGetOutput =
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
  }) as unknown as Schema.Codec<AssetEndpointProfilesGetOutput>;

// The operation
/**
 * Get a AssetEndpointProfile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param assetEndpointProfileName - Asset Endpoint Profile name parameter.
 */
export const AssetEndpointProfilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssetEndpointProfilesGetInput,
    outputSchema: AssetEndpointProfilesGetOutput,
  }),
);
// Input Schema
export interface AssetEndpointProfilesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AssetEndpointProfilesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AssetEndpointProfilesListByResourceGroupInput>;

// Output Schema
export interface AssetEndpointProfilesListByResourceGroupOutput {
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
export const AssetEndpointProfilesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AssetEndpointProfilesListByResourceGroupOutput>;

// The operation
/**
 * List AssetEndpointProfile resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AssetEndpointProfilesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssetEndpointProfilesListByResourceGroupInput,
    outputSchema: AssetEndpointProfilesListByResourceGroupOutput,
  }));
// Input Schema
export interface AssetEndpointProfilesListBySubscriptionInput {
  subscriptionId: string;
}
export const AssetEndpointProfilesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AssetEndpointProfilesListBySubscriptionInput>;

// Output Schema
export interface AssetEndpointProfilesListBySubscriptionOutput {
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
export const AssetEndpointProfilesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AssetEndpointProfilesListBySubscriptionOutput>;

// The operation
/**
 * List AssetEndpointProfile resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AssetEndpointProfilesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssetEndpointProfilesListBySubscriptionInput,
    outputSchema: AssetEndpointProfilesListBySubscriptionOutput,
  }));
// Input Schema
export interface AssetEndpointProfilesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  assetEndpointProfileName: string;
  tags?: Record<string, string>;
  properties?: {
    targetAddress?: string;
    endpointProfileType?: string;
    authentication?: {
      method?: "Anonymous" | "Certificate" | "UsernamePassword";
      usernamePasswordCredentials?: {
        usernameSecretName?: string;
        passwordSecretName?: string | Redacted.Redacted<string>;
      };
      x509Credentials?: { certificateSecretName?: string };
    };
    additionalConfiguration?: string;
  };
}
export const AssetEndpointProfilesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    assetEndpointProfileName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        targetAddress: Schema.optional(Schema.String),
        endpointProfileType: Schema.optional(Schema.String),
        authentication: Schema.optional(
          Schema.Struct({
            method: Schema.optional(
              Schema.Literals(["Anonymous", "Certificate", "UsernamePassword"]),
            ),
            usernamePasswordCredentials: Schema.optional(
              Schema.Struct({
                usernameSecretName: Schema.optional(Schema.String),
                passwordSecretName: Schema.optional(SensitiveString),
              }),
            ),
            x509Credentials: Schema.optional(
              Schema.Struct({
                certificateSecretName: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        additionalConfiguration: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles/{assetEndpointProfileName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AssetEndpointProfilesUpdateInput>;

// Output Schema
export interface AssetEndpointProfilesUpdateOutput {
  id?: string;
  name?: string;
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
export const AssetEndpointProfilesUpdateOutput =
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
  }) as unknown as Schema.Codec<AssetEndpointProfilesUpdateOutput>;

// The operation
/**
 * Update a AssetEndpointProfile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param assetEndpointProfileName - Asset Endpoint Profile name parameter.
 */
export const AssetEndpointProfilesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssetEndpointProfilesUpdateInput,
    outputSchema: AssetEndpointProfilesUpdateOutput,
  }),
);
// Input Schema
export interface AssetsCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  assetName: string;
  properties?: {
    uuid?: string;
    enabled?: boolean;
    externalAssetId?: string;
    displayName?: string;
    description?: string;
    assetEndpointProfileRef: string;
    version?: number;
    manufacturer?: string;
    manufacturerUri?: string;
    model?: string;
    productCode?: string;
    hardwareRevision?: string;
    softwareRevision?: string;
    documentationUri?: string;
    serialNumber?: string;
    attributes?: Record<string, unknown>;
    discoveredAssetRefs?: string[];
    defaultDatasetsConfiguration?: string;
    defaultEventsConfiguration?: string;
    defaultTopic?: { path: string; retain?: "Keep" | "Never" };
    datasets?: {
      name: string;
      datasetConfiguration?: string;
      topic?: { path: string; retain?: "Keep" | "Never" };
      dataPoints?: {
        name: string;
        dataSource: string;
        dataPointConfiguration?: string;
      }[];
    }[];
    events?: {
      name: string;
      eventNotifier: string;
      eventConfiguration?: string;
      topic?: { path: string; retain?: "Keep" | "Never" };
    }[];
    status?: {
      errors?: { code?: number; message?: string }[];
      version?: number;
      datasets?: {
        name: string;
        messageSchemaReference?: {
          schemaRegistryNamespace: string;
          schemaName: string;
          schemaVersion: string;
        };
      }[];
      events?: {
        name: string;
        messageSchemaReference?: {
          schemaRegistryNamespace: string;
          schemaName: string;
          schemaVersion: string;
        };
      }[];
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Deleting";
  };
  extendedLocation: { type: string; name: string };
  tags?: Record<string, string>;
  location: string;
}
export const AssetsCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    assetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        enabled: Schema.optional(Schema.Boolean),
        externalAssetId: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        assetEndpointProfileRef: Schema.String,
        version: Schema.optional(Schema.Number),
        manufacturer: Schema.optional(Schema.String),
        manufacturerUri: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        productCode: Schema.optional(Schema.String),
        hardwareRevision: Schema.optional(Schema.String),
        softwareRevision: Schema.optional(Schema.String),
        documentationUri: Schema.optional(Schema.String),
        serialNumber: Schema.optional(Schema.String),
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        discoveredAssetRefs: Schema.optional(Schema.Array(Schema.String)),
        defaultDatasetsConfiguration: Schema.optional(Schema.String),
        defaultEventsConfiguration: Schema.optional(Schema.String),
        defaultTopic: Schema.optional(
          Schema.Struct({
            path: Schema.String,
            retain: Schema.optional(Schema.Literals(["Keep", "Never"])),
          }),
        ),
        datasets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              datasetConfiguration: Schema.optional(Schema.String),
              topic: Schema.optional(
                Schema.Struct({
                  path: Schema.String,
                  retain: Schema.optional(Schema.Literals(["Keep", "Never"])),
                }),
              ),
              dataPoints: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    dataSource: Schema.String,
                    dataPointConfiguration: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        events: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              eventNotifier: Schema.String,
              eventConfiguration: Schema.optional(Schema.String),
              topic: Schema.optional(
                Schema.Struct({
                  path: Schema.String,
                  retain: Schema.optional(Schema.Literals(["Keep", "Never"])),
                }),
              ),
            }),
          ),
        ),
        status: Schema.optional(
          Schema.Struct({
            errors: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  code: Schema.optional(Schema.Number),
                  message: Schema.optional(Schema.String),
                }),
              ),
            ),
            version: Schema.optional(Schema.Number),
            datasets: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  messageSchemaReference: Schema.optional(
                    Schema.Struct({
                      schemaRegistryNamespace: Schema.String,
                      schemaName: Schema.String,
                      schemaVersion: Schema.String,
                    }),
                  ),
                }),
              ),
            ),
            events: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  messageSchemaReference: Schema.optional(
                    Schema.Struct({
                      schemaRegistryNamespace: Schema.String,
                      schemaName: Schema.String,
                      schemaVersion: Schema.String,
                    }),
                  ),
                }),
              ),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Accepted",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      type: Schema.String,
      name: Schema.String,
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AssetsCreateOrReplaceInput>;

// Output Schema
export interface AssetsCreateOrReplaceOutput {
  id?: string;
  name?: string;
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
export const AssetsCreateOrReplaceOutput =
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
  }) as unknown as Schema.Codec<AssetsCreateOrReplaceOutput>;

// The operation
/**
 * Create a Asset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param assetName - Asset name parameter.
 */
export const AssetsCreateOrReplace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssetsCreateOrReplaceInput,
    outputSchema: AssetsCreateOrReplaceOutput,
  }),
);
// Input Schema
export interface AssetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  assetName: string;
}
export const AssetsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  assetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<AssetsDeleteInput>;

// Output Schema
export type AssetsDeleteOutput = void;
export const AssetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AssetsDeleteOutput>;

// The operation
/**
 * Delete a Asset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param assetName - Asset name parameter.
 */
export const AssetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AssetsDeleteInput,
  outputSchema: AssetsDeleteOutput,
}));
// Input Schema
export interface AssetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  assetName: string;
}
export const AssetsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  assetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<AssetsGetInput>;

// Output Schema
export interface AssetsGetOutput {
  id?: string;
  name?: string;
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
export const AssetsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AssetsGetOutput>;

// The operation
/**
 * Get a Asset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param assetName - Asset name parameter.
 */
export const AssetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AssetsGetInput,
  outputSchema: AssetsGetOutput,
}));
// Input Schema
export interface AssetsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AssetsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AssetsListByResourceGroupInput>;

// Output Schema
export interface AssetsListByResourceGroupOutput {
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
export const AssetsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AssetsListByResourceGroupOutput>;

// The operation
/**
 * List Asset resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AssetsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssetsListByResourceGroupInput,
    outputSchema: AssetsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface AssetsListBySubscriptionInput {
  subscriptionId: string;
}
export const AssetsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/assets",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AssetsListBySubscriptionInput>;

// Output Schema
export interface AssetsListBySubscriptionOutput {
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
export const AssetsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AssetsListBySubscriptionOutput>;

// The operation
/**
 * List Asset resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AssetsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssetsListBySubscriptionInput,
    outputSchema: AssetsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface AssetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  assetName: string;
  tags?: Record<string, string>;
  properties?: {
    enabled?: boolean;
    displayName?: string;
    description?: string;
    manufacturer?: string;
    manufacturerUri?: string;
    model?: string;
    productCode?: string;
    hardwareRevision?: string;
    softwareRevision?: string;
    documentationUri?: string;
    serialNumber?: string;
    attributes?: Record<string, unknown>;
    defaultDatasetsConfiguration?: string;
    defaultEventsConfiguration?: string;
    defaultTopic?: { path?: string; retain?: "Keep" | "Never" };
    datasets?: {
      name: string;
      datasetConfiguration?: string;
      topic?: { path: string; retain?: "Keep" | "Never" };
      dataPoints?: {
        name: string;
        dataSource: string;
        dataPointConfiguration?: string;
      }[];
    }[];
    events?: {
      name: string;
      eventNotifier: string;
      eventConfiguration?: string;
      topic?: { path: string; retain?: "Keep" | "Never" };
    }[];
  };
}
export const AssetsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  assetName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      enabled: Schema.optional(Schema.Boolean),
      displayName: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      manufacturer: Schema.optional(Schema.String),
      manufacturerUri: Schema.optional(Schema.String),
      model: Schema.optional(Schema.String),
      productCode: Schema.optional(Schema.String),
      hardwareRevision: Schema.optional(Schema.String),
      softwareRevision: Schema.optional(Schema.String),
      documentationUri: Schema.optional(Schema.String),
      serialNumber: Schema.optional(Schema.String),
      attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      defaultDatasetsConfiguration: Schema.optional(Schema.String),
      defaultEventsConfiguration: Schema.optional(Schema.String),
      defaultTopic: Schema.optional(
        Schema.Struct({
          path: Schema.optional(Schema.String),
          retain: Schema.optional(Schema.Literals(["Keep", "Never"])),
        }),
      ),
      datasets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            datasetConfiguration: Schema.optional(Schema.String),
            topic: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                retain: Schema.optional(Schema.Literals(["Keep", "Never"])),
              }),
            ),
            dataPoints: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  dataSource: Schema.String,
                  dataPointConfiguration: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
      ),
      events: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            eventNotifier: Schema.String,
            eventConfiguration: Schema.optional(Schema.String),
            topic: Schema.optional(
              Schema.Struct({
                path: Schema.String,
                retain: Schema.optional(Schema.Literals(["Keep", "Never"])),
              }),
            ),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<AssetsUpdateInput>;

// Output Schema
export interface AssetsUpdateOutput {
  id?: string;
  name?: string;
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
export const AssetsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AssetsUpdateOutput>;

// The operation
/**
 * Update a Asset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param assetName - Asset name parameter.
 */
export const AssetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AssetsUpdateInput,
  outputSchema: AssetsUpdateOutput,
}));
// Input Schema
export interface BillingContainersGetInput {
  subscriptionId: string;
  billingContainerName: string;
}
export const BillingContainersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    billingContainerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/billingContainers/{billingContainerName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BillingContainersGetInput>;

// Output Schema
export interface BillingContainersGetOutput {
  id?: string;
  name?: string;
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
export const BillingContainersGetOutput =
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
  }) as unknown as Schema.Codec<BillingContainersGetOutput>;

// The operation
/**
 * Get a BillingContainer
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param billingContainerName - Name of the billing container.
 */
export const BillingContainersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingContainersGetInput,
    outputSchema: BillingContainersGetOutput,
  }),
);
// Input Schema
export interface BillingContainersListBySubscriptionInput {
  subscriptionId: string;
}
export const BillingContainersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/billingContainers",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BillingContainersListBySubscriptionInput>;

// Output Schema
export interface BillingContainersListBySubscriptionOutput {
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
export const BillingContainersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<BillingContainersListBySubscriptionOutput>;

// The operation
/**
 * List BillingContainer resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const BillingContainersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingContainersListBySubscriptionInput,
    outputSchema: BillingContainersListBySubscriptionOutput,
  }));
// Input Schema
export interface NamespaceAssetsCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  assetName: string;
  properties?: {
    uuid?: string;
    enabled?: boolean;
    externalAssetId?: string;
    displayName?: string;
    description?: string;
    deviceRef: { deviceName: string; endpointName: string };
    assetTypeRefs?: string[];
    version?: number;
    lastTransitionTime?: string;
    manufacturer?: string;
    manufacturerUri?: string;
    model?: string;
    productCode?: string;
    hardwareRevision?: string;
    softwareRevision?: string;
    documentationUri?: string;
    serialNumber?: string;
    attributes?: Record<string, unknown>;
    discoveredAssetRefs?: string[];
    defaultDatasetsConfiguration?: string;
    defaultEventsConfiguration?: string;
    defaultStreamsConfiguration?: string;
    defaultManagementGroupsConfiguration?: string;
    defaultDatasetsDestinations?: {
      target: "Mqtt" | "BrokerStateStore" | "Storage";
    }[];
    defaultEventsDestinations?: { target: "Mqtt" | "Storage" }[];
    defaultStreamsDestinations?: { target: "Mqtt" | "Storage" }[];
    datasets?: {
      name: string;
      dataSource?: string;
      typeRef?: string;
      datasetConfiguration?: string;
      destinations?: { target: "Mqtt" | "BrokerStateStore" | "Storage" }[];
      dataPoints?: {
        name: string;
        dataSource: string;
        dataPointConfiguration?: string;
        typeRef?: string;
      }[];
    }[];
    eventGroups?: {
      name: string;
      dataSource?: string;
      eventGroupConfiguration?: string;
      defaultDestinations?: { target: "Mqtt" | "Storage" }[];
      typeRef?: string;
      events?: {
        name: string;
        dataSource?: string;
        eventConfiguration?: string;
        destinations?: { target: "Mqtt" | "Storage" }[];
        typeRef?: string;
      }[];
    }[];
    streams?: {
      name: string;
      streamConfiguration?: string;
      typeRef?: string;
      destinations?: { target: "Mqtt" | "Storage" }[];
    }[];
    managementGroups?: {
      name: string;
      dataSource?: string;
      managementGroupConfiguration?: string;
      typeRef?: string;
      defaultTopic?: string;
      defaultTimeoutInSeconds?: number;
      actions?: {
        name: string;
        actionConfiguration?: string;
        targetUri: string;
        typeRef?: string;
        topic?: string;
        actionType?: "Call" | "Read" | "Write";
        timeoutInSeconds?: number;
      }[];
    }[];
    status?: {
      config?: {
        version?: number;
        lastTransitionTime?: string;
        error?: {
          code?: string;
          message?: string;
          details?: {
            code?: string;
            message?: string;
            info?: string;
            correlationId?: string;
          }[];
        };
      };
      datasets?: {
        name: string;
        messageSchemaReference?: {
          schemaRegistryNamespace: string;
          schemaName: string;
          schemaVersion: string;
        };
        error?: {
          code?: string;
          message?: string;
          details?: {
            code?: string;
            message?: string;
            info?: string;
            correlationId?: string;
          }[];
        };
      }[];
      eventGroups?: {
        name: string;
        events?: {
          name: string;
          messageSchemaReference?: {
            schemaRegistryNamespace: string;
            schemaName: string;
            schemaVersion: string;
          };
          error?: {
            code?: string;
            message?: string;
            details?: {
              code?: string;
              message?: string;
              info?: string;
              correlationId?: string;
            }[];
          };
        }[];
      }[];
      streams?: {
        name: string;
        messageSchemaReference?: {
          schemaRegistryNamespace: string;
          schemaName: string;
          schemaVersion: string;
        };
        error?: {
          code?: string;
          message?: string;
          details?: {
            code?: string;
            message?: string;
            info?: string;
            correlationId?: string;
          }[];
        };
      }[];
      managementGroups?: {
        name: string;
        actions?: {
          name: string;
          requestMessageSchemaReference?: {
            schemaRegistryNamespace: string;
            schemaName: string;
            schemaVersion: string;
          };
          responseMessageSchemaReference?: {
            schemaRegistryNamespace: string;
            schemaName: string;
            schemaVersion: string;
          };
          error?: {
            code?: string;
            message?: string;
            details?: {
              code?: string;
              message?: string;
              info?: string;
              correlationId?: string;
            }[];
          };
        }[];
      }[];
      healthState?: {
        status?: "Unknown" | "Available" | "Degraded" | "Unavailable";
        lastTransitionTime?: string;
        lastUpdateTime?: string;
        message?: string;
        reasonCode?: string;
      };
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Deleting";
  };
  extendedLocation: { type: string; name: string };
  tags?: Record<string, string>;
  location: string;
}
export const NamespaceAssetsCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    assetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        enabled: Schema.optional(Schema.Boolean),
        externalAssetId: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        deviceRef: Schema.Struct({
          deviceName: Schema.String,
          endpointName: Schema.String,
        }),
        assetTypeRefs: Schema.optional(Schema.Array(Schema.String)),
        version: Schema.optional(Schema.Number),
        lastTransitionTime: Schema.optional(Schema.String),
        manufacturer: Schema.optional(Schema.String),
        manufacturerUri: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        productCode: Schema.optional(Schema.String),
        hardwareRevision: Schema.optional(Schema.String),
        softwareRevision: Schema.optional(Schema.String),
        documentationUri: Schema.optional(Schema.String),
        serialNumber: Schema.optional(Schema.String),
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        discoveredAssetRefs: Schema.optional(Schema.Array(Schema.String)),
        defaultDatasetsConfiguration: Schema.optional(Schema.String),
        defaultEventsConfiguration: Schema.optional(Schema.String),
        defaultStreamsConfiguration: Schema.optional(Schema.String),
        defaultManagementGroupsConfiguration: Schema.optional(Schema.String),
        defaultDatasetsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "BrokerStateStore", "Storage"]),
            }),
          ),
        ),
        defaultEventsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "Storage"]),
            }),
          ),
        ),
        defaultStreamsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "Storage"]),
            }),
          ),
        ),
        datasets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              dataSource: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              datasetConfiguration: Schema.optional(Schema.String),
              destinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals([
                      "Mqtt",
                      "BrokerStateStore",
                      "Storage",
                    ]),
                  }),
                ),
              ),
              dataPoints: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    dataSource: Schema.String,
                    dataPointConfiguration: Schema.optional(Schema.String),
                    typeRef: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        eventGroups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              dataSource: Schema.optional(Schema.String),
              eventGroupConfiguration: Schema.optional(Schema.String),
              defaultDestinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals(["Mqtt", "Storage"]),
                  }),
                ),
              ),
              typeRef: Schema.optional(Schema.String),
              events: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    dataSource: Schema.optional(Schema.String),
                    eventConfiguration: Schema.optional(Schema.String),
                    destinations: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          target: Schema.Literals(["Mqtt", "Storage"]),
                        }),
                      ),
                    ),
                    typeRef: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        streams: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              streamConfiguration: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              destinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals(["Mqtt", "Storage"]),
                  }),
                ),
              ),
            }),
          ),
        ),
        managementGroups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              dataSource: Schema.optional(Schema.String),
              managementGroupConfiguration: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              defaultTopic: Schema.optional(Schema.String),
              defaultTimeoutInSeconds: Schema.optional(Schema.Number),
              actions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    actionConfiguration: Schema.optional(Schema.String),
                    targetUri: Schema.String,
                    typeRef: Schema.optional(Schema.String),
                    topic: Schema.optional(Schema.String),
                    actionType: Schema.optional(
                      Schema.Literals(["Call", "Read", "Write"]),
                    ),
                    timeoutInSeconds: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
        ),
        status: Schema.optional(
          Schema.Struct({
            config: Schema.optional(
              Schema.Struct({
                version: Schema.optional(Schema.Number),
                lastTransitionTime: Schema.optional(Schema.String),
                error: Schema.optional(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    details: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          info: Schema.optional(Schema.String),
                          correlationId: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            datasets: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  messageSchemaReference: Schema.optional(
                    Schema.Struct({
                      schemaRegistryNamespace: Schema.String,
                      schemaName: Schema.String,
                      schemaVersion: Schema.String,
                    }),
                  ),
                  error: Schema.optional(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      details: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            code: Schema.optional(Schema.String),
                            message: Schema.optional(Schema.String),
                            info: Schema.optional(Schema.String),
                            correlationId: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            eventGroups: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  events: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.String,
                        messageSchemaReference: Schema.optional(
                          Schema.Struct({
                            schemaRegistryNamespace: Schema.String,
                            schemaName: Schema.String,
                            schemaVersion: Schema.String,
                          }),
                        ),
                        error: Schema.optional(
                          Schema.Struct({
                            code: Schema.optional(Schema.String),
                            message: Schema.optional(Schema.String),
                            details: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  code: Schema.optional(Schema.String),
                                  message: Schema.optional(Schema.String),
                                  info: Schema.optional(Schema.String),
                                  correlationId: Schema.optional(Schema.String),
                                }),
                              ),
                            ),
                          }),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            streams: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  messageSchemaReference: Schema.optional(
                    Schema.Struct({
                      schemaRegistryNamespace: Schema.String,
                      schemaName: Schema.String,
                      schemaVersion: Schema.String,
                    }),
                  ),
                  error: Schema.optional(
                    Schema.Struct({
                      code: Schema.optional(Schema.String),
                      message: Schema.optional(Schema.String),
                      details: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            code: Schema.optional(Schema.String),
                            message: Schema.optional(Schema.String),
                            info: Schema.optional(Schema.String),
                            correlationId: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
            ),
            managementGroups: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  actions: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.String,
                        requestMessageSchemaReference: Schema.optional(
                          Schema.Struct({
                            schemaRegistryNamespace: Schema.String,
                            schemaName: Schema.String,
                            schemaVersion: Schema.String,
                          }),
                        ),
                        responseMessageSchemaReference: Schema.optional(
                          Schema.Struct({
                            schemaRegistryNamespace: Schema.String,
                            schemaName: Schema.String,
                            schemaVersion: Schema.String,
                          }),
                        ),
                        error: Schema.optional(
                          Schema.Struct({
                            code: Schema.optional(Schema.String),
                            message: Schema.optional(Schema.String),
                            details: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  code: Schema.optional(Schema.String),
                                  message: Schema.optional(Schema.String),
                                  info: Schema.optional(Schema.String),
                                  correlationId: Schema.optional(Schema.String),
                                }),
                              ),
                            ),
                          }),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            healthState: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "Unknown",
                    "Available",
                    "Degraded",
                    "Unavailable",
                  ]),
                ),
                lastTransitionTime: Schema.optional(Schema.String),
                lastUpdateTime: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                reasonCode: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Accepted",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      type: Schema.String,
      name: Schema.String,
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/assets/{assetName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceAssetsCreateOrReplaceInput>;

// Output Schema
export interface NamespaceAssetsCreateOrReplaceOutput {
  id?: string;
  name?: string;
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
export const NamespaceAssetsCreateOrReplaceOutput =
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
  }) as unknown as Schema.Codec<NamespaceAssetsCreateOrReplaceOutput>;

// The operation
/**
 * Create a NamespaceAsset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param assetName - The name of the asset.
 */
export const NamespaceAssetsCreateOrReplace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceAssetsCreateOrReplaceInput,
    outputSchema: NamespaceAssetsCreateOrReplaceOutput,
  }));
// Input Schema
export interface NamespaceAssetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  assetName: string;
}
export const NamespaceAssetsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    assetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/assets/{assetName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceAssetsDeleteInput>;

// Output Schema
export type NamespaceAssetsDeleteOutput = void;
export const NamespaceAssetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespaceAssetsDeleteOutput>;

// The operation
/**
 * Delete a NamespaceAsset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param assetName - The name of the asset.
 */
export const NamespaceAssetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NamespaceAssetsDeleteInput,
    outputSchema: NamespaceAssetsDeleteOutput,
  }),
);
// Input Schema
export interface NamespaceAssetsExecuteActionInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  assetName: string;
  managementActionName: string;
  managementGroupName: string;
  payload?: Record<string, unknown>;
}
export const NamespaceAssetsExecuteActionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    assetName: Schema.String.pipe(T.PathParam()),
    managementActionName: Schema.String,
    managementGroupName: Schema.String,
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/assets/{assetName}/executeAction",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceAssetsExecuteActionInput>;

// Output Schema
export interface NamespaceAssetsExecuteActionOutput {
  status: "Succeeded" | "Failed" | "Canceled" | "InProgress";
  managementActionName: string;
  managementGroupName: string;
  assetResourceId: string;
  response?: string;
  error?: {
    code?: string;
    message?: string;
    details?: {
      code?: string;
      message?: string;
      info?: string;
      correlationId?: string;
    }[];
  };
}
export const NamespaceAssetsExecuteActionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.Literals(["Succeeded", "Failed", "Canceled", "InProgress"]),
    managementActionName: Schema.String,
    managementGroupName: Schema.String,
    assetResourceId: Schema.String,
    response: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              info: Schema.optional(Schema.String),
              correlationId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<NamespaceAssetsExecuteActionOutput>;

// The operation
/**
 * A long-running resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param assetName - The name of the asset.
 */
export const NamespaceAssetsExecuteAction =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceAssetsExecuteActionInput,
    outputSchema: NamespaceAssetsExecuteActionOutput,
  }));
// Input Schema
export interface NamespaceAssetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  assetName: string;
}
export const NamespaceAssetsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    assetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/assets/{assetName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceAssetsGetInput>;

// Output Schema
export interface NamespaceAssetsGetOutput {
  id?: string;
  name?: string;
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
export const NamespaceAssetsGetOutput =
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
  }) as unknown as Schema.Codec<NamespaceAssetsGetOutput>;

// The operation
/**
 * Get a NamespaceAsset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param assetName - The name of the asset.
 */
export const NamespaceAssetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NamespaceAssetsGetInput,
  outputSchema: NamespaceAssetsGetOutput,
}));
// Input Schema
export interface NamespaceAssetsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespaceAssetsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/assets",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceAssetsListByResourceGroupInput>;

// Output Schema
export interface NamespaceAssetsListByResourceGroupOutput {
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
export const NamespaceAssetsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NamespaceAssetsListByResourceGroupOutput>;

// The operation
/**
 * List NamespaceAsset resources by Namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 */
export const NamespaceAssetsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceAssetsListByResourceGroupInput,
    outputSchema: NamespaceAssetsListByResourceGroupOutput,
  }));
// Input Schema
export interface NamespaceAssetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  assetName: string;
  tags?: Record<string, string>;
  properties?: {
    enabled?: boolean;
    displayName?: string;
    description?: string;
    assetTypeRefs?: string[];
    manufacturer?: string;
    manufacturerUri?: string;
    model?: string;
    productCode?: string;
    hardwareRevision?: string;
    softwareRevision?: string;
    documentationUri?: string;
    serialNumber?: string;
    attributes?: Record<string, unknown>;
    defaultDatasetsConfiguration?: string;
    defaultEventsConfiguration?: string;
    defaultStreamsConfiguration?: string;
    defaultManagementGroupsConfiguration?: string;
    defaultDatasetsDestinations?: {
      target: "Mqtt" | "BrokerStateStore" | "Storage";
    }[];
    defaultEventsDestinations?: { target: "Mqtt" | "Storage" }[];
    defaultStreamsDestinations?: { target: "Mqtt" | "Storage" }[];
    datasets?: {
      name: string;
      dataSource?: string;
      typeRef?: string;
      datasetConfiguration?: string;
      destinations?: { target: "Mqtt" | "BrokerStateStore" | "Storage" }[];
      dataPoints?: {
        name: string;
        dataSource: string;
        dataPointConfiguration?: string;
        typeRef?: string;
      }[];
    }[];
    eventGroups?: {
      name: string;
      dataSource?: string;
      eventGroupConfiguration?: string;
      defaultDestinations?: { target: "Mqtt" | "Storage" }[];
      typeRef?: string;
      events?: {
        name: string;
        dataSource?: string;
        eventConfiguration?: string;
        destinations?: { target: "Mqtt" | "Storage" }[];
        typeRef?: string;
      }[];
    }[];
    streams?: {
      name: string;
      streamConfiguration?: string;
      typeRef?: string;
      destinations?: { target: "Mqtt" | "Storage" }[];
    }[];
    managementGroups?: {
      name: string;
      dataSource?: string;
      managementGroupConfiguration?: string;
      typeRef?: string;
      defaultTopic?: string;
      defaultTimeoutInSeconds?: number;
      actions?: {
        name: string;
        actionConfiguration?: string;
        targetUri: string;
        typeRef?: string;
        topic?: string;
        actionType?: "Call" | "Read" | "Write";
        timeoutInSeconds?: number;
      }[];
    }[];
  };
}
export const NamespaceAssetsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    assetName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        enabled: Schema.optional(Schema.Boolean),
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        assetTypeRefs: Schema.optional(Schema.Array(Schema.String)),
        manufacturer: Schema.optional(Schema.String),
        manufacturerUri: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        productCode: Schema.optional(Schema.String),
        hardwareRevision: Schema.optional(Schema.String),
        softwareRevision: Schema.optional(Schema.String),
        documentationUri: Schema.optional(Schema.String),
        serialNumber: Schema.optional(Schema.String),
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        defaultDatasetsConfiguration: Schema.optional(Schema.String),
        defaultEventsConfiguration: Schema.optional(Schema.String),
        defaultStreamsConfiguration: Schema.optional(Schema.String),
        defaultManagementGroupsConfiguration: Schema.optional(Schema.String),
        defaultDatasetsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "BrokerStateStore", "Storage"]),
            }),
          ),
        ),
        defaultEventsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "Storage"]),
            }),
          ),
        ),
        defaultStreamsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "Storage"]),
            }),
          ),
        ),
        datasets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              dataSource: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              datasetConfiguration: Schema.optional(Schema.String),
              destinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals([
                      "Mqtt",
                      "BrokerStateStore",
                      "Storage",
                    ]),
                  }),
                ),
              ),
              dataPoints: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    dataSource: Schema.String,
                    dataPointConfiguration: Schema.optional(Schema.String),
                    typeRef: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        eventGroups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              dataSource: Schema.optional(Schema.String),
              eventGroupConfiguration: Schema.optional(Schema.String),
              defaultDestinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals(["Mqtt", "Storage"]),
                  }),
                ),
              ),
              typeRef: Schema.optional(Schema.String),
              events: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    dataSource: Schema.optional(Schema.String),
                    eventConfiguration: Schema.optional(Schema.String),
                    destinations: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          target: Schema.Literals(["Mqtt", "Storage"]),
                        }),
                      ),
                    ),
                    typeRef: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        streams: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              streamConfiguration: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              destinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals(["Mqtt", "Storage"]),
                  }),
                ),
              ),
            }),
          ),
        ),
        managementGroups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              dataSource: Schema.optional(Schema.String),
              managementGroupConfiguration: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              defaultTopic: Schema.optional(Schema.String),
              defaultTimeoutInSeconds: Schema.optional(Schema.Number),
              actions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    actionConfiguration: Schema.optional(Schema.String),
                    targetUri: Schema.String,
                    typeRef: Schema.optional(Schema.String),
                    topic: Schema.optional(Schema.String),
                    actionType: Schema.optional(
                      Schema.Literals(["Call", "Read", "Write"]),
                    ),
                    timeoutInSeconds: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/assets/{assetName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceAssetsUpdateInput>;

// Output Schema
export interface NamespaceAssetsUpdateOutput {
  id?: string;
  name?: string;
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
export const NamespaceAssetsUpdateOutput =
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
  }) as unknown as Schema.Codec<NamespaceAssetsUpdateOutput>;

// The operation
/**
 * Update a NamespaceAsset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param assetName - The name of the asset.
 */
export const NamespaceAssetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NamespaceAssetsUpdateInput,
    outputSchema: NamespaceAssetsUpdateOutput,
  }),
);
// Input Schema
export interface NamespaceDevicesCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  deviceName: string;
  properties?: {
    uuid?: string;
    enabled?: boolean;
    externalDeviceId?: string;
    discoveredDeviceRef?: string;
    manufacturer?: string;
    model?: string;
    operatingSystem?: string;
    operatingSystemVersion?: string;
    endpoints?: {
      inbound?: Record<
        string,
        {
          endpointType: string;
          address: string;
          version?: string;
          authentication?: {
            method: "Anonymous" | "Certificate" | "UsernamePassword";
            usernamePasswordCredentials?: {
              usernameSecretName: string;
              passwordSecretName: string | Redacted.Redacted<string>;
            };
            x509Credentials?: {
              certificateSecretName: string;
              keySecretName?: string;
              intermediateCertificatesSecretName?: string;
            };
          };
          trustSettings?: { trustList?: string };
          additionalConfiguration?: string;
        }
      >;
      outbound?: {
        assigned: Record<string, { endpointType?: string; address: string }>;
        unassigned?: Record<string, { endpointType?: string; address: string }>;
      };
    };
    attributes?: Record<string, unknown>;
    status?: {
      config?: {
        version?: number;
        lastTransitionTime?: string;
        error?: {
          code?: string;
          message?: string;
          details?: {
            code?: string;
            message?: string;
            info?: string;
            correlationId?: string;
          }[];
        };
      };
      endpoints?: {
        inbound?: Record<
          string,
          {
            error?: {
              code?: string;
              message?: string;
              details?: {
                code?: string;
                message?: string;
                info?: string;
                correlationId?: string;
              }[];
            };
            healthState?: {
              status?: "Unknown" | "Available" | "Degraded" | "Unavailable";
              lastTransitionTime?: string;
              lastUpdateTime?: string;
              message?: string;
              reasonCode?: string;
            };
          }
        >;
      };
    };
    version?: number;
    lastTransitionTime?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Deleting";
  };
  etag?: string;
  extendedLocation?: { type: string; name: string };
  tags?: Record<string, string>;
  location: string;
}
export const NamespaceDevicesCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        enabled: Schema.optional(Schema.Boolean),
        externalDeviceId: Schema.optional(Schema.String),
        discoveredDeviceRef: Schema.optional(Schema.String),
        manufacturer: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        operatingSystem: Schema.optional(Schema.String),
        operatingSystemVersion: Schema.optional(Schema.String),
        endpoints: Schema.optional(
          Schema.Struct({
            inbound: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  endpointType: Schema.String,
                  address: Schema.String,
                  version: Schema.optional(Schema.String),
                  authentication: Schema.optional(
                    Schema.Struct({
                      method: Schema.Literals([
                        "Anonymous",
                        "Certificate",
                        "UsernamePassword",
                      ]),
                      usernamePasswordCredentials: Schema.optional(
                        Schema.Struct({
                          usernameSecretName: Schema.String,
                          passwordSecretName: SensitiveString,
                        }),
                      ),
                      x509Credentials: Schema.optional(
                        Schema.Struct({
                          certificateSecretName: Schema.String,
                          keySecretName: Schema.optional(Schema.String),
                          intermediateCertificatesSecretName: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                    }),
                  ),
                  trustSettings: Schema.optional(
                    Schema.Struct({
                      trustList: Schema.optional(Schema.String),
                    }),
                  ),
                  additionalConfiguration: Schema.optional(Schema.String),
                }),
              ),
            ),
            outbound: Schema.optional(
              Schema.Struct({
                assigned: Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    endpointType: Schema.optional(Schema.String),
                    address: Schema.String,
                  }),
                ),
                unassigned: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      endpointType: Schema.optional(Schema.String),
                      address: Schema.String,
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        status: Schema.optional(
          Schema.Struct({
            config: Schema.optional(
              Schema.Struct({
                version: Schema.optional(Schema.Number),
                lastTransitionTime: Schema.optional(Schema.String),
                error: Schema.optional(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    details: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          info: Schema.optional(Schema.String),
                          correlationId: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
            endpoints: Schema.optional(
              Schema.Struct({
                inbound: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      error: Schema.optional(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          details: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                code: Schema.optional(Schema.String),
                                message: Schema.optional(Schema.String),
                                info: Schema.optional(Schema.String),
                                correlationId: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                        }),
                      ),
                      healthState: Schema.optional(
                        Schema.Struct({
                          status: Schema.optional(
                            Schema.Literals([
                              "Unknown",
                              "Available",
                              "Degraded",
                              "Unavailable",
                            ]),
                          ),
                          lastTransitionTime: Schema.optional(Schema.String),
                          lastUpdateTime: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          reasonCode: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        version: Schema.optional(Schema.Number),
        lastTransitionTime: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Accepted",
            "Deleting",
          ]),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.String,
        name: Schema.String,
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/devices/{deviceName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDevicesCreateOrReplaceInput>;

// Output Schema
export interface NamespaceDevicesCreateOrReplaceOutput {
  id?: string;
  name?: string;
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
export const NamespaceDevicesCreateOrReplaceOutput =
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
  }) as unknown as Schema.Codec<NamespaceDevicesCreateOrReplaceOutput>;

// The operation
/**
 * Create a NamespaceDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param deviceName - The name of the device.
 */
export const NamespaceDevicesCreateOrReplace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDevicesCreateOrReplaceInput,
    outputSchema: NamespaceDevicesCreateOrReplaceOutput,
  }));
// Input Schema
export interface NamespaceDevicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  deviceName: string;
}
export const NamespaceDevicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/devices/{deviceName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDevicesDeleteInput>;

// Output Schema
export type NamespaceDevicesDeleteOutput = void;
export const NamespaceDevicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespaceDevicesDeleteOutput>;

// The operation
/**
 * Delete a NamespaceDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param deviceName - The name of the device.
 */
export const NamespaceDevicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NamespaceDevicesDeleteInput,
    outputSchema: NamespaceDevicesDeleteOutput,
  }),
);
// Input Schema
export interface NamespaceDevicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  deviceName: string;
}
export const NamespaceDevicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/devices/{deviceName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDevicesGetInput>;

// Output Schema
export interface NamespaceDevicesGetOutput {
  id?: string;
  name?: string;
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
export const NamespaceDevicesGetOutput =
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
  }) as unknown as Schema.Codec<NamespaceDevicesGetOutput>;

// The operation
/**
 * Get a NamespaceDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param deviceName - The name of the device.
 */
export const NamespaceDevicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NamespaceDevicesGetInput,
  outputSchema: NamespaceDevicesGetOutput,
}));
// Input Schema
export interface NamespaceDevicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespaceDevicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/devices",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDevicesListByResourceGroupInput>;

// Output Schema
export interface NamespaceDevicesListByResourceGroupOutput {
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
export const NamespaceDevicesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NamespaceDevicesListByResourceGroupOutput>;

// The operation
/**
 * List NamespaceDevice resources by Namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 */
export const NamespaceDevicesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDevicesListByResourceGroupInput,
    outputSchema: NamespaceDevicesListByResourceGroupOutput,
  }));
// Input Schema
export interface NamespaceDevicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  deviceName: string;
  tags?: Record<string, string>;
  properties?: {
    operatingSystemVersion?: string;
    endpoints?: {
      inbound?: Record<
        string,
        {
          endpointType?: string;
          address?: string;
          version?: string;
          authentication?: {
            method?: "Anonymous" | "Certificate" | "UsernamePassword";
            usernamePasswordCredentials?: {
              usernameSecretName?: string;
              passwordSecretName?: string | Redacted.Redacted<string>;
            };
            x509Credentials?: {
              certificateSecretName?: string;
              keySecretName?: string;
              intermediateCertificatesSecretName?: string;
            };
          };
          trustSettings?: { trustList?: string };
          additionalConfiguration?: string;
        }
      >;
      outbound?: {
        assigned?: Record<string, { endpointType?: string; address?: string }>;
        unassigned?: Record<
          string,
          { endpointType?: string; address?: string }
        >;
      };
    };
    attributes?: Record<string, unknown>;
    enabled?: boolean;
  };
}
export const NamespaceDevicesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    deviceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        operatingSystemVersion: Schema.optional(Schema.String),
        endpoints: Schema.optional(
          Schema.Struct({
            inbound: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  endpointType: Schema.optional(Schema.String),
                  address: Schema.optional(Schema.String),
                  version: Schema.optional(Schema.String),
                  authentication: Schema.optional(
                    Schema.Struct({
                      method: Schema.optional(
                        Schema.Literals([
                          "Anonymous",
                          "Certificate",
                          "UsernamePassword",
                        ]),
                      ),
                      usernamePasswordCredentials: Schema.optional(
                        Schema.Struct({
                          usernameSecretName: Schema.optional(Schema.String),
                          passwordSecretName: Schema.optional(SensitiveString),
                        }),
                      ),
                      x509Credentials: Schema.optional(
                        Schema.Struct({
                          certificateSecretName: Schema.optional(Schema.String),
                          keySecretName: Schema.optional(Schema.String),
                          intermediateCertificatesSecretName: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                    }),
                  ),
                  trustSettings: Schema.optional(
                    Schema.Struct({
                      trustList: Schema.optional(Schema.String),
                    }),
                  ),
                  additionalConfiguration: Schema.optional(Schema.String),
                }),
              ),
            ),
            outbound: Schema.optional(
              Schema.Struct({
                assigned: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      endpointType: Schema.optional(Schema.String),
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                unassigned: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      endpointType: Schema.optional(Schema.String),
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        enabled: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/devices/{deviceName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDevicesUpdateInput>;

// Output Schema
export interface NamespaceDevicesUpdateOutput {
  id?: string;
  name?: string;
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
export const NamespaceDevicesUpdateOutput =
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
  }) as unknown as Schema.Codec<NamespaceDevicesUpdateOutput>;

// The operation
/**
 * Update a NamespaceDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param deviceName - The name of the device.
 */
export const NamespaceDevicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NamespaceDevicesUpdateInput,
    outputSchema: NamespaceDevicesUpdateOutput,
  }),
);
// Input Schema
export interface NamespaceDiscoveredAssetsCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  discoveredAssetName: string;
  properties?: {
    deviceRef: { deviceName: string; endpointName: string };
    displayName?: string;
    assetTypeRefs?: string[];
    description?: string;
    discoveryId: string;
    externalAssetId?: string;
    version: number;
    manufacturer?: string;
    manufacturerUri?: string;
    model?: string;
    productCode?: string;
    hardwareRevision?: string;
    softwareRevision?: string;
    documentationUri?: string;
    serialNumber?: string;
    attributes?: Record<string, unknown>;
    defaultDatasetsConfiguration?: string;
    defaultEventsConfiguration?: string;
    defaultStreamsConfiguration?: string;
    defaultManagementGroupsConfiguration?: string;
    defaultDatasetsDestinations?: {
      target: "Mqtt" | "BrokerStateStore" | "Storage";
    }[];
    defaultEventsDestinations?: { target: "Mqtt" | "Storage" }[];
    defaultStreamsDestinations?: { target: "Mqtt" | "Storage" }[];
    datasets?: {
      name: string;
      dataSource?: string;
      typeRef?: string;
      datasetConfiguration?: string;
      destinations?: { target: "Mqtt" | "BrokerStateStore" | "Storage" }[];
      dataPoints?: {
        name: string;
        dataSource: string;
        dataPointConfiguration?: string;
        lastUpdatedOn?: string;
        typeRef?: string;
      }[];
      lastUpdatedOn?: string;
    }[];
    eventGroups?: {
      name: string;
      dataSource?: string;
      eventGroupConfiguration?: string;
      defaultDestinations?: { target: "Mqtt" | "Storage" }[];
      typeRef?: string;
      events?: {
        name: string;
        dataSource?: string;
        eventConfiguration?: string;
        destinations?: { target: "Mqtt" | "Storage" }[];
        typeRef?: string;
        lastUpdatedOn?: string;
      }[];
    }[];
    streams?: {
      name: string;
      streamConfiguration?: string;
      typeRef?: string;
      destinations?: { target: "Mqtt" | "Storage" }[];
      lastUpdatedOn?: string;
    }[];
    managementGroups?: {
      name: string;
      managementGroupConfiguration?: string;
      typeRef?: string;
      dataSource?: string;
      defaultTopic?: string;
      defaultTimeoutInSeconds?: number;
      actions?: {
        name: string;
        actionConfiguration?: string;
        targetUri: string;
        typeRef?: string;
        topic?: string;
        actionType?: "Call" | "Read" | "Write";
        timeoutInSeconds?: number;
        lastUpdatedOn?: string;
      }[];
      lastUpdatedOn?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Deleting";
  };
  extendedLocation: { type: string; name: string };
  tags?: Record<string, string>;
  location: string;
}
export const NamespaceDiscoveredAssetsCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    discoveredAssetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        deviceRef: Schema.Struct({
          deviceName: Schema.String,
          endpointName: Schema.String,
        }),
        displayName: Schema.optional(Schema.String),
        assetTypeRefs: Schema.optional(Schema.Array(Schema.String)),
        description: Schema.optional(Schema.String),
        discoveryId: Schema.String,
        externalAssetId: Schema.optional(Schema.String),
        version: Schema.Number,
        manufacturer: Schema.optional(Schema.String),
        manufacturerUri: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        productCode: Schema.optional(Schema.String),
        hardwareRevision: Schema.optional(Schema.String),
        softwareRevision: Schema.optional(Schema.String),
        documentationUri: Schema.optional(Schema.String),
        serialNumber: Schema.optional(Schema.String),
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        defaultDatasetsConfiguration: Schema.optional(Schema.String),
        defaultEventsConfiguration: Schema.optional(Schema.String),
        defaultStreamsConfiguration: Schema.optional(Schema.String),
        defaultManagementGroupsConfiguration: Schema.optional(Schema.String),
        defaultDatasetsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "BrokerStateStore", "Storage"]),
            }),
          ),
        ),
        defaultEventsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "Storage"]),
            }),
          ),
        ),
        defaultStreamsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "Storage"]),
            }),
          ),
        ),
        datasets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              dataSource: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              datasetConfiguration: Schema.optional(Schema.String),
              destinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals([
                      "Mqtt",
                      "BrokerStateStore",
                      "Storage",
                    ]),
                  }),
                ),
              ),
              dataPoints: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    dataSource: Schema.String,
                    dataPointConfiguration: Schema.optional(Schema.String),
                    lastUpdatedOn: Schema.optional(Schema.String),
                    typeRef: Schema.optional(Schema.String),
                  }),
                ),
              ),
              lastUpdatedOn: Schema.optional(Schema.String),
            }),
          ),
        ),
        eventGroups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              dataSource: Schema.optional(Schema.String),
              eventGroupConfiguration: Schema.optional(Schema.String),
              defaultDestinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals(["Mqtt", "Storage"]),
                  }),
                ),
              ),
              typeRef: Schema.optional(Schema.String),
              events: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    dataSource: Schema.optional(Schema.String),
                    eventConfiguration: Schema.optional(Schema.String),
                    destinations: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          target: Schema.Literals(["Mqtt", "Storage"]),
                        }),
                      ),
                    ),
                    typeRef: Schema.optional(Schema.String),
                    lastUpdatedOn: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        streams: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              streamConfiguration: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              destinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals(["Mqtt", "Storage"]),
                  }),
                ),
              ),
              lastUpdatedOn: Schema.optional(Schema.String),
            }),
          ),
        ),
        managementGroups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              managementGroupConfiguration: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              dataSource: Schema.optional(Schema.String),
              defaultTopic: Schema.optional(Schema.String),
              defaultTimeoutInSeconds: Schema.optional(Schema.Number),
              actions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    actionConfiguration: Schema.optional(Schema.String),
                    targetUri: Schema.String,
                    typeRef: Schema.optional(Schema.String),
                    topic: Schema.optional(Schema.String),
                    actionType: Schema.optional(
                      Schema.Literals(["Call", "Read", "Write"]),
                    ),
                    timeoutInSeconds: Schema.optional(Schema.Number),
                    lastUpdatedOn: Schema.optional(Schema.String),
                  }),
                ),
              ),
              lastUpdatedOn: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Accepted",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      type: Schema.String,
      name: Schema.String,
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/discoveredAssets/{discoveredAssetName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDiscoveredAssetsCreateOrReplaceInput>;

// Output Schema
export interface NamespaceDiscoveredAssetsCreateOrReplaceOutput {
  id?: string;
  name?: string;
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
export const NamespaceDiscoveredAssetsCreateOrReplaceOutput =
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
  }) as unknown as Schema.Codec<NamespaceDiscoveredAssetsCreateOrReplaceOutput>;

// The operation
/**
 * Create a NamespaceDiscoveredAsset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param discoveredAssetName - The name of the discovered asset.
 */
export const NamespaceDiscoveredAssetsCreateOrReplace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDiscoveredAssetsCreateOrReplaceInput,
    outputSchema: NamespaceDiscoveredAssetsCreateOrReplaceOutput,
  }));
// Input Schema
export interface NamespaceDiscoveredAssetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  discoveredAssetName: string;
}
export const NamespaceDiscoveredAssetsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    discoveredAssetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/discoveredAssets/{discoveredAssetName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDiscoveredAssetsDeleteInput>;

// Output Schema
export type NamespaceDiscoveredAssetsDeleteOutput = void;
export const NamespaceDiscoveredAssetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespaceDiscoveredAssetsDeleteOutput>;

// The operation
/**
 * Delete a NamespaceDiscoveredAsset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param discoveredAssetName - The name of the discovered asset.
 */
export const NamespaceDiscoveredAssetsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDiscoveredAssetsDeleteInput,
    outputSchema: NamespaceDiscoveredAssetsDeleteOutput,
  }));
// Input Schema
export interface NamespaceDiscoveredAssetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  discoveredAssetName: string;
}
export const NamespaceDiscoveredAssetsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    discoveredAssetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/discoveredAssets/{discoveredAssetName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDiscoveredAssetsGetInput>;

// Output Schema
export interface NamespaceDiscoveredAssetsGetOutput {
  id?: string;
  name?: string;
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
export const NamespaceDiscoveredAssetsGetOutput =
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
  }) as unknown as Schema.Codec<NamespaceDiscoveredAssetsGetOutput>;

// The operation
/**
 * Get a NamespaceDiscoveredAsset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param discoveredAssetName - The name of the discovered asset.
 */
export const NamespaceDiscoveredAssetsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDiscoveredAssetsGetInput,
    outputSchema: NamespaceDiscoveredAssetsGetOutput,
  }));
// Input Schema
export interface NamespaceDiscoveredAssetsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespaceDiscoveredAssetsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/discoveredAssets",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDiscoveredAssetsListByResourceGroupInput>;

// Output Schema
export interface NamespaceDiscoveredAssetsListByResourceGroupOutput {
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
export const NamespaceDiscoveredAssetsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NamespaceDiscoveredAssetsListByResourceGroupOutput>;

// The operation
/**
 * List NamespaceDiscoveredAsset resources by Namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 */
export const NamespaceDiscoveredAssetsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDiscoveredAssetsListByResourceGroupInput,
    outputSchema: NamespaceDiscoveredAssetsListByResourceGroupOutput,
  }));
// Input Schema
export interface NamespaceDiscoveredAssetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  discoveredAssetName: string;
  tags?: Record<string, string>;
  properties?: {
    deviceRef?: { deviceName?: string; endpointName?: string };
    displayName?: string;
    assetTypeRefs?: string[];
    description?: string;
    discoveryId?: string;
    version?: number;
    manufacturer?: string;
    manufacturerUri?: string;
    model?: string;
    productCode?: string;
    hardwareRevision?: string;
    softwareRevision?: string;
    documentationUri?: string;
    serialNumber?: string;
    attributes?: Record<string, unknown>;
    defaultDatasetsConfiguration?: string;
    defaultEventsConfiguration?: string;
    defaultStreamsConfiguration?: string;
    defaultManagementGroupsConfiguration?: string;
    defaultDatasetsDestinations?: {
      target: "Mqtt" | "BrokerStateStore" | "Storage";
    }[];
    defaultEventsDestinations?: { target: "Mqtt" | "Storage" }[];
    defaultStreamsDestinations?: { target: "Mqtt" | "Storage" }[];
    datasets?: {
      name: string;
      dataSource?: string;
      typeRef?: string;
      datasetConfiguration?: string;
      destinations?: { target: "Mqtt" | "BrokerStateStore" | "Storage" }[];
      dataPoints?: {
        name: string;
        dataSource: string;
        dataPointConfiguration?: string;
        lastUpdatedOn?: string;
        typeRef?: string;
      }[];
      lastUpdatedOn?: string;
    }[];
    eventGroups?: {
      name: string;
      dataSource?: string;
      eventGroupConfiguration?: string;
      defaultDestinations?: { target: "Mqtt" | "Storage" }[];
      typeRef?: string;
      events?: {
        name: string;
        dataSource?: string;
        eventConfiguration?: string;
        destinations?: { target: "Mqtt" | "Storage" }[];
        typeRef?: string;
        lastUpdatedOn?: string;
      }[];
    }[];
    streams?: {
      name: string;
      streamConfiguration?: string;
      typeRef?: string;
      destinations?: { target: "Mqtt" | "Storage" }[];
      lastUpdatedOn?: string;
    }[];
    managementGroups?: {
      name: string;
      managementGroupConfiguration?: string;
      typeRef?: string;
      dataSource?: string;
      defaultTopic?: string;
      defaultTimeoutInSeconds?: number;
      actions?: {
        name: string;
        actionConfiguration?: string;
        targetUri: string;
        typeRef?: string;
        topic?: string;
        actionType?: "Call" | "Read" | "Write";
        timeoutInSeconds?: number;
        lastUpdatedOn?: string;
      }[];
      lastUpdatedOn?: string;
    }[];
  };
}
export const NamespaceDiscoveredAssetsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    discoveredAssetName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        deviceRef: Schema.optional(
          Schema.Struct({
            deviceName: Schema.optional(Schema.String),
            endpointName: Schema.optional(Schema.String),
          }),
        ),
        displayName: Schema.optional(Schema.String),
        assetTypeRefs: Schema.optional(Schema.Array(Schema.String)),
        description: Schema.optional(Schema.String),
        discoveryId: Schema.optional(Schema.String),
        version: Schema.optional(Schema.Number),
        manufacturer: Schema.optional(Schema.String),
        manufacturerUri: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        productCode: Schema.optional(Schema.String),
        hardwareRevision: Schema.optional(Schema.String),
        softwareRevision: Schema.optional(Schema.String),
        documentationUri: Schema.optional(Schema.String),
        serialNumber: Schema.optional(Schema.String),
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        defaultDatasetsConfiguration: Schema.optional(Schema.String),
        defaultEventsConfiguration: Schema.optional(Schema.String),
        defaultStreamsConfiguration: Schema.optional(Schema.String),
        defaultManagementGroupsConfiguration: Schema.optional(Schema.String),
        defaultDatasetsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "BrokerStateStore", "Storage"]),
            }),
          ),
        ),
        defaultEventsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "Storage"]),
            }),
          ),
        ),
        defaultStreamsDestinations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              target: Schema.Literals(["Mqtt", "Storage"]),
            }),
          ),
        ),
        datasets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              dataSource: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              datasetConfiguration: Schema.optional(Schema.String),
              destinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals([
                      "Mqtt",
                      "BrokerStateStore",
                      "Storage",
                    ]),
                  }),
                ),
              ),
              dataPoints: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    dataSource: Schema.String,
                    dataPointConfiguration: Schema.optional(Schema.String),
                    lastUpdatedOn: Schema.optional(Schema.String),
                    typeRef: Schema.optional(Schema.String),
                  }),
                ),
              ),
              lastUpdatedOn: Schema.optional(Schema.String),
            }),
          ),
        ),
        eventGroups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              dataSource: Schema.optional(Schema.String),
              eventGroupConfiguration: Schema.optional(Schema.String),
              defaultDestinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals(["Mqtt", "Storage"]),
                  }),
                ),
              ),
              typeRef: Schema.optional(Schema.String),
              events: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    dataSource: Schema.optional(Schema.String),
                    eventConfiguration: Schema.optional(Schema.String),
                    destinations: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          target: Schema.Literals(["Mqtt", "Storage"]),
                        }),
                      ),
                    ),
                    typeRef: Schema.optional(Schema.String),
                    lastUpdatedOn: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        streams: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              streamConfiguration: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              destinations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    target: Schema.Literals(["Mqtt", "Storage"]),
                  }),
                ),
              ),
              lastUpdatedOn: Schema.optional(Schema.String),
            }),
          ),
        ),
        managementGroups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              managementGroupConfiguration: Schema.optional(Schema.String),
              typeRef: Schema.optional(Schema.String),
              dataSource: Schema.optional(Schema.String),
              defaultTopic: Schema.optional(Schema.String),
              defaultTimeoutInSeconds: Schema.optional(Schema.Number),
              actions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    actionConfiguration: Schema.optional(Schema.String),
                    targetUri: Schema.String,
                    typeRef: Schema.optional(Schema.String),
                    topic: Schema.optional(Schema.String),
                    actionType: Schema.optional(
                      Schema.Literals(["Call", "Read", "Write"]),
                    ),
                    timeoutInSeconds: Schema.optional(Schema.Number),
                    lastUpdatedOn: Schema.optional(Schema.String),
                  }),
                ),
              ),
              lastUpdatedOn: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/discoveredAssets/{discoveredAssetName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDiscoveredAssetsUpdateInput>;

// Output Schema
export interface NamespaceDiscoveredAssetsUpdateOutput {
  id?: string;
  name?: string;
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
export const NamespaceDiscoveredAssetsUpdateOutput =
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
  }) as unknown as Schema.Codec<NamespaceDiscoveredAssetsUpdateOutput>;

// The operation
/**
 * Update a NamespaceDiscoveredAsset
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param discoveredAssetName - The name of the discovered asset.
 */
export const NamespaceDiscoveredAssetsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDiscoveredAssetsUpdateInput,
    outputSchema: NamespaceDiscoveredAssetsUpdateOutput,
  }));
// Input Schema
export interface NamespaceDiscoveredDevicesCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  discoveredDeviceName: string;
  properties?: {
    externalDeviceId?: string;
    endpoints?: {
      inbound?: Record<
        string,
        {
          endpointType: string;
          address: string;
          version?: string;
          supportedAuthenticationMethods?: (
            | "Anonymous"
            | "Certificate"
            | "UsernamePassword"
          )[];
          additionalConfiguration?: string;
          lastUpdatedOn?: string;
        }
      >;
      outbound?: {
        assigned: Record<string, { endpointType?: string; address: string }>;
      };
    };
    manufacturer?: string;
    model?: string;
    operatingSystem?: string;
    operatingSystemVersion?: string;
    attributes?: Record<string, unknown>;
    discoveryId: string;
    version: number;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Deleting";
  };
  extendedLocation: { type: string; name: string };
  tags?: Record<string, string>;
  location: string;
}
export const NamespaceDiscoveredDevicesCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    discoveredDeviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        externalDeviceId: Schema.optional(Schema.String),
        endpoints: Schema.optional(
          Schema.Struct({
            inbound: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  endpointType: Schema.String,
                  address: Schema.String,
                  version: Schema.optional(Schema.String),
                  supportedAuthenticationMethods: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "Anonymous",
                        "Certificate",
                        "UsernamePassword",
                      ]),
                    ),
                  ),
                  additionalConfiguration: Schema.optional(Schema.String),
                  lastUpdatedOn: Schema.optional(Schema.String),
                }),
              ),
            ),
            outbound: Schema.optional(
              Schema.Struct({
                assigned: Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    endpointType: Schema.optional(Schema.String),
                    address: Schema.String,
                  }),
                ),
              }),
            ),
          }),
        ),
        manufacturer: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        operatingSystem: Schema.optional(Schema.String),
        operatingSystemVersion: Schema.optional(Schema.String),
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        discoveryId: Schema.String,
        version: Schema.Number,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Accepted",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.Struct({
      type: Schema.String,
      name: Schema.String,
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/discoveredDevices/{discoveredDeviceName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDiscoveredDevicesCreateOrReplaceInput>;

// Output Schema
export interface NamespaceDiscoveredDevicesCreateOrReplaceOutput {
  id?: string;
  name?: string;
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
export const NamespaceDiscoveredDevicesCreateOrReplaceOutput =
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
  }) as unknown as Schema.Codec<NamespaceDiscoveredDevicesCreateOrReplaceOutput>;

// The operation
/**
 * Create a NamespaceDiscoveredDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param discoveredDeviceName - The name of the discovered device.
 */
export const NamespaceDiscoveredDevicesCreateOrReplace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDiscoveredDevicesCreateOrReplaceInput,
    outputSchema: NamespaceDiscoveredDevicesCreateOrReplaceOutput,
  }));
// Input Schema
export interface NamespaceDiscoveredDevicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  discoveredDeviceName: string;
}
export const NamespaceDiscoveredDevicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    discoveredDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/discoveredDevices/{discoveredDeviceName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDiscoveredDevicesDeleteInput>;

// Output Schema
export type NamespaceDiscoveredDevicesDeleteOutput = void;
export const NamespaceDiscoveredDevicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespaceDiscoveredDevicesDeleteOutput>;

// The operation
/**
 * Delete a NamespaceDiscoveredDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param discoveredDeviceName - The name of the discovered device.
 */
export const NamespaceDiscoveredDevicesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDiscoveredDevicesDeleteInput,
    outputSchema: NamespaceDiscoveredDevicesDeleteOutput,
  }));
// Input Schema
export interface NamespaceDiscoveredDevicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  discoveredDeviceName: string;
}
export const NamespaceDiscoveredDevicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    discoveredDeviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/discoveredDevices/{discoveredDeviceName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDiscoveredDevicesGetInput>;

// Output Schema
export interface NamespaceDiscoveredDevicesGetOutput {
  id?: string;
  name?: string;
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
export const NamespaceDiscoveredDevicesGetOutput =
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
  }) as unknown as Schema.Codec<NamespaceDiscoveredDevicesGetOutput>;

// The operation
/**
 * Get a NamespaceDiscoveredDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param discoveredDeviceName - The name of the discovered device.
 */
export const NamespaceDiscoveredDevicesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDiscoveredDevicesGetInput,
    outputSchema: NamespaceDiscoveredDevicesGetOutput,
  }));
// Input Schema
export interface NamespaceDiscoveredDevicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespaceDiscoveredDevicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/discoveredDevices",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDiscoveredDevicesListByResourceGroupInput>;

// Output Schema
export interface NamespaceDiscoveredDevicesListByResourceGroupOutput {
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
export const NamespaceDiscoveredDevicesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NamespaceDiscoveredDevicesListByResourceGroupOutput>;

// The operation
/**
 * List NamespaceDiscoveredDevice resources by Namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 */
export const NamespaceDiscoveredDevicesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDiscoveredDevicesListByResourceGroupInput,
    outputSchema: NamespaceDiscoveredDevicesListByResourceGroupOutput,
  }));
// Input Schema
export interface NamespaceDiscoveredDevicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  discoveredDeviceName: string;
  tags?: Record<string, string>;
  properties?: {
    externalDeviceId?: string;
    endpoints?: {
      inbound?: Record<
        string,
        {
          endpointType?: string;
          address?: string;
          version?: string;
          supportedAuthenticationMethods?: (
            | "Anonymous"
            | "Certificate"
            | "UsernamePassword"
          )[];
          additionalConfiguration?: string;
          lastUpdatedOn?: string;
        }
      >;
      outbound?: {
        assigned?: Record<string, { endpointType?: string; address?: string }>;
      };
    };
    operatingSystemVersion?: string;
    attributes?: Record<string, unknown>;
    discoveryId?: string;
    version?: number;
  };
}
export const NamespaceDiscoveredDevicesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    discoveredDeviceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        externalDeviceId: Schema.optional(Schema.String),
        endpoints: Schema.optional(
          Schema.Struct({
            inbound: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  endpointType: Schema.optional(Schema.String),
                  address: Schema.optional(Schema.String),
                  version: Schema.optional(Schema.String),
                  supportedAuthenticationMethods: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "Anonymous",
                        "Certificate",
                        "UsernamePassword",
                      ]),
                    ),
                  ),
                  additionalConfiguration: Schema.optional(Schema.String),
                  lastUpdatedOn: Schema.optional(Schema.String),
                }),
              ),
            ),
            outbound: Schema.optional(
              Schema.Struct({
                assigned: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      endpointType: Schema.optional(Schema.String),
                      address: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        operatingSystemVersion: Schema.optional(Schema.String),
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        discoveryId: Schema.optional(Schema.String),
        version: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/discoveredDevices/{discoveredDeviceName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespaceDiscoveredDevicesUpdateInput>;

// Output Schema
export interface NamespaceDiscoveredDevicesUpdateOutput {
  id?: string;
  name?: string;
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
export const NamespaceDiscoveredDevicesUpdateOutput =
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
  }) as unknown as Schema.Codec<NamespaceDiscoveredDevicesUpdateOutput>;

// The operation
/**
 * Update a NamespaceDiscoveredDevice
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 * @param discoveredDeviceName - The name of the discovered device.
 */
export const NamespaceDiscoveredDevicesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceDiscoveredDevicesUpdateInput,
    outputSchema: NamespaceDiscoveredDevicesUpdateOutput,
  }));
// Input Schema
export interface NamespacesCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  properties?: {
    uuid?: string;
    messaging?: {
      endpoints?: Record<
        string,
        { endpointType?: string; address: string; resourceId?: string }
      >;
    };
    management?: {
      endpoints?: Record<
        string,
        {
          endpointType: string;
          address: string;
          scopeId: string;
          resourceId: string;
        }
      >;
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Deleting";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
  tags?: Record<string, string>;
  location: string;
}
export const NamespacesCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        messaging: Schema.optional(
          Schema.Struct({
            endpoints: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  endpointType: Schema.optional(Schema.String),
                  address: Schema.String,
                  resourceId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        management: Schema.optional(
          Schema.Struct({
            endpoints: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  endpointType: Schema.String,
                  address: Schema.String,
                  scopeId: Schema.String,
                  resourceId: Schema.String,
                }),
              ),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Accepted",
            "Deleting",
          ]),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned"]),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCreateOrReplaceInput>;

// Output Schema
export interface NamespacesCreateOrReplaceOutput {
  id?: string;
  name?: string;
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
export const NamespacesCreateOrReplaceOutput =
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
  }) as unknown as Schema.Codec<NamespacesCreateOrReplaceOutput>;

// The operation
/**
 * Create a Namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 */
export const NamespacesCreateOrReplace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NamespacesCreateOrReplaceInput,
    outputSchema: NamespacesCreateOrReplaceOutput,
  }),
);
// Input Schema
export interface NamespacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<NamespacesDeleteInput>;

// Output Schema
export type NamespacesDeleteOutput = void;
export const NamespacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespacesDeleteOutput>;

// The operation
/**
 * Delete a Namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 */
export const NamespacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NamespacesDeleteInput,
  outputSchema: NamespacesDeleteOutput,
}));
// Input Schema
export interface NamespacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}",
    apiVersion: "2026-04-01",
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
export const NamespacesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
 * Get a Namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 */
export const NamespacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NamespacesGetInput,
  outputSchema: NamespacesGetOutput,
}));
// Input Schema
export interface NamespacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NamespacesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListByResourceGroupInput>;

// Output Schema
export interface NamespacesListByResourceGroupOutput {
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
export const NamespacesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NamespacesListByResourceGroupOutput>;

// The operation
/**
 * List Namespace resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NamespacesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListByResourceGroupInput,
    outputSchema: NamespacesListByResourceGroupOutput,
  }));
// Input Schema
export interface NamespacesListBySubscriptionInput {
  subscriptionId: string;
}
export const NamespacesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/namespaces",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListBySubscriptionInput>;

// Output Schema
export interface NamespacesListBySubscriptionOutput {
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
export const NamespacesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<NamespacesListBySubscriptionOutput>;

// The operation
/**
 * List Namespace resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NamespacesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListBySubscriptionInput,
    outputSchema: NamespacesListBySubscriptionOutput,
  }));
// Input Schema
export interface NamespacesMigrateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  scope?: "Resources";
  resourceIds?: string[];
}
export const NamespacesMigrateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    scope: Schema.optional(Schema.Literals(["Resources"])),
    resourceIds: Schema.optional(Schema.Array(Schema.String)),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}/migrate",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<NamespacesMigrateInput>;

// Output Schema
export interface NamespacesMigrateOutput {
  migrateResults?: {
    resourceId?: string;
    result?: "Succeeded" | "Failed";
    error?: {
      code?: string;
      message?: string;
      details?: {
        code?: string;
        message?: string;
        info?: string;
        correlationId?: string;
      }[];
    };
  }[];
}
export const NamespacesMigrateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migrateResults: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          result: Schema.optional(Schema.Literals(["Succeeded", "Failed"])),
          error: Schema.optional(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              details: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    info: Schema.optional(Schema.String),
                    correlationId: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<NamespacesMigrateOutput>;

// The operation
/**
 * Migrate the resources into Namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 */
export const NamespacesMigrate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NamespacesMigrateInput,
  outputSchema: NamespacesMigrateOutput,
}));
// Input Schema
export interface NamespacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
  tags?: Record<string, string>;
  properties?: {
    messaging?: {
      endpoints?: Record<
        string,
        { endpointType?: string; address: string; resourceId?: string }
      >;
    };
    management?: {
      endpoints?: Record<
        string,
        {
          endpointType: string;
          address: string;
          scopeId: string;
          resourceId: string;
        }
      >;
    };
  };
}
export const NamespacesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals(["None", "SystemAssigned"]),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      messaging: Schema.optional(
        Schema.Struct({
          endpoints: Schema.optional(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                endpointType: Schema.optional(Schema.String),
                address: Schema.String,
                resourceId: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      management: Schema.optional(
        Schema.Struct({
          endpoints: Schema.optional(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                endpointType: Schema.String,
                address: Schema.String,
                scopeId: Schema.String,
                resourceId: Schema.String,
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/namespaces/{namespaceName}",
    apiVersion: "2026-04-01",
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
export const NamespacesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<NamespacesUpdateOutput>;

// The operation
/**
 * Update a Namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The name of the namespace.
 */
export const NamespacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NamespacesUpdateInput,
  outputSchema: NamespacesUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DeviceRegistry/operations",
    apiVersion: "2026-04-01",
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
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OperationStatusGetInput {
  subscriptionId: string;
  location: string;
  operationId: string;
}
export const OperationStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/locations/{location}/operationStatuses/{operationId}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<OperationStatusGetInput>;

// Output Schema
export interface OperationStatusGetOutput {
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
export const OperationStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<OperationStatusGetOutput>;

// The operation
/**
 * Returns the current status of an async operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param operationId - The ID of an ongoing async operation.
 */
export const OperationStatusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationStatusGetInput,
  outputSchema: OperationStatusGetOutput,
}));
// Input Schema
export interface SchemaRegistriesCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
  properties?: {
    uuid?: string;
    namespace: string;
    displayName?: string;
    description?: string;
    storageAccountContainerUrl: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Deleting";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
  tags?: Record<string, string>;
  location: string;
}
export const SchemaRegistriesCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaRegistryName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        namespace: Schema.String,
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        storageAccountContainerUrl: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Accepted",
            "Deleting",
          ]),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned"]),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SchemaRegistriesCreateOrReplaceInput>;

// Output Schema
export interface SchemaRegistriesCreateOrReplaceOutput {
  id?: string;
  name?: string;
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
export const SchemaRegistriesCreateOrReplaceOutput =
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
  }) as unknown as Schema.Codec<SchemaRegistriesCreateOrReplaceOutput>;

// The operation
/**
 * Create a SchemaRegistry
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 */
export const SchemaRegistriesCreateOrReplace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchemaRegistriesCreateOrReplaceInput,
    outputSchema: SchemaRegistriesCreateOrReplaceOutput,
  }));
// Input Schema
export interface SchemaRegistriesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
}
export const SchemaRegistriesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaRegistryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SchemaRegistriesDeleteInput>;

// Output Schema
export type SchemaRegistriesDeleteOutput = void;
export const SchemaRegistriesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SchemaRegistriesDeleteOutput>;

// The operation
/**
 * Delete a SchemaRegistry
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 */
export const SchemaRegistriesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemaRegistriesDeleteInput,
    outputSchema: SchemaRegistriesDeleteOutput,
  }),
);
// Input Schema
export interface SchemaRegistriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
}
export const SchemaRegistriesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaRegistryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SchemaRegistriesGetInput>;

// Output Schema
export interface SchemaRegistriesGetOutput {
  id?: string;
  name?: string;
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
export const SchemaRegistriesGetOutput =
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
  }) as unknown as Schema.Codec<SchemaRegistriesGetOutput>;

// The operation
/**
 * Get a SchemaRegistry
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 */
export const SchemaRegistriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchemaRegistriesGetInput,
  outputSchema: SchemaRegistriesGetOutput,
}));
// Input Schema
export interface SchemaRegistriesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SchemaRegistriesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SchemaRegistriesListByResourceGroupInput>;

// Output Schema
export interface SchemaRegistriesListByResourceGroupOutput {
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
export const SchemaRegistriesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<SchemaRegistriesListByResourceGroupOutput>;

// The operation
/**
 * List SchemaRegistry resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SchemaRegistriesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchemaRegistriesListByResourceGroupInput,
    outputSchema: SchemaRegistriesListByResourceGroupOutput,
  }));
// Input Schema
export interface SchemaRegistriesListBySubscriptionInput {
  subscriptionId: string;
}
export const SchemaRegistriesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/schemaRegistries",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SchemaRegistriesListBySubscriptionInput>;

// Output Schema
export interface SchemaRegistriesListBySubscriptionOutput {
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
export const SchemaRegistriesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<SchemaRegistriesListBySubscriptionOutput>;

// The operation
/**
 * List SchemaRegistry resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SchemaRegistriesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchemaRegistriesListBySubscriptionInput,
    outputSchema: SchemaRegistriesListBySubscriptionOutput,
  }));
// Input Schema
export interface SchemaRegistriesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
  tags?: Record<string, string>;
  properties?: { displayName?: string; description?: string };
}
export const SchemaRegistriesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaRegistryName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned"]),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SchemaRegistriesUpdateInput>;

// Output Schema
export interface SchemaRegistriesUpdateOutput {
  id?: string;
  name?: string;
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
export const SchemaRegistriesUpdateOutput =
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
  }) as unknown as Schema.Codec<SchemaRegistriesUpdateOutput>;

// The operation
/**
 * Update a SchemaRegistry
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 */
export const SchemaRegistriesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemaRegistriesUpdateInput,
    outputSchema: SchemaRegistriesUpdateOutput,
  }),
);
// Input Schema
export interface SchemasCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
  schemaName: string;
  properties?: {
    uuid?: string;
    displayName?: string;
    description?: string;
    format: "JsonSchema/draft-07" | "Delta/1.0";
    schemaType: "MessageSchema";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Deleting";
    tags?: Record<string, string>;
  };
}
export const SchemasCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaRegistryName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        format: Schema.Literals(["JsonSchema/draft-07", "Delta/1.0"]),
        schemaType: Schema.Literals(["MessageSchema"]),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Accepted",
            "Deleting",
          ]),
        ),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SchemasCreateOrReplaceInput>;

// Output Schema
export interface SchemasCreateOrReplaceOutput {
  id?: string;
  name?: string;
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
export const SchemasCreateOrReplaceOutput =
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
  }) as unknown as Schema.Codec<SchemasCreateOrReplaceOutput>;

// The operation
/**
 * Create a Schema
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 * @param schemaName - Schema name parameter.
 */
export const SchemasCreateOrReplace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemasCreateOrReplaceInput,
    outputSchema: SchemasCreateOrReplaceOutput,
  }),
);
// Input Schema
export interface SchemasDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
  schemaName: string;
}
export const SchemasDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  schemaRegistryName: Schema.String.pipe(T.PathParam()),
  schemaName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SchemasDeleteInput>;

// Output Schema
export type SchemasDeleteOutput = void;
export const SchemasDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SchemasDeleteOutput>;

// The operation
/**
 * Delete a Schema
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 * @param schemaName - Schema name parameter.
 */
export const SchemasDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchemasDeleteInput,
  outputSchema: SchemasDeleteOutput,
}));
// Input Schema
export interface SchemasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
  schemaName: string;
}
export const SchemasGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  schemaRegistryName: Schema.String.pipe(T.PathParam()),
  schemaName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SchemasGetInput>;

// Output Schema
export interface SchemasGetOutput {
  id?: string;
  name?: string;
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
export const SchemasGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SchemasGetOutput>;

// The operation
/**
 * Get a Schema
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 * @param schemaName - Schema name parameter.
 */
export const SchemasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchemasGetInput,
  outputSchema: SchemasGetOutput,
}));
// Input Schema
export interface SchemasListBySchemaRegistryInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
}
export const SchemasListBySchemaRegistryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaRegistryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SchemasListBySchemaRegistryInput>;

// Output Schema
export interface SchemasListBySchemaRegistryOutput {
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
export const SchemasListBySchemaRegistryOutput =
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
  }) as unknown as Schema.Codec<SchemasListBySchemaRegistryOutput>;

// The operation
/**
 * List Schema resources by SchemaRegistry
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 */
export const SchemasListBySchemaRegistry = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemasListBySchemaRegistryInput,
    outputSchema: SchemasListBySchemaRegistryOutput,
  }),
);
// Input Schema
export interface SchemaVersionsCreateOrReplaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
  schemaName: string;
  schemaVersionName: string;
  properties?: {
    uuid?: string;
    description?: string;
    schemaContent: string;
    hash?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Deleting";
  };
}
export const SchemaVersionsCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaRegistryName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    schemaVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        schemaContent: Schema.String,
        hash: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Accepted",
            "Deleting",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}/schemaVersions/{schemaVersionName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SchemaVersionsCreateOrReplaceInput>;

// Output Schema
export interface SchemaVersionsCreateOrReplaceOutput {
  id?: string;
  name?: string;
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
export const SchemaVersionsCreateOrReplaceOutput =
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
  }) as unknown as Schema.Codec<SchemaVersionsCreateOrReplaceOutput>;

// The operation
/**
 * Create a SchemaVersion
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 * @param schemaName - Schema name parameter.
 * @param schemaVersionName - Schema version name parameter.
 */
export const SchemaVersionsCreateOrReplace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchemaVersionsCreateOrReplaceInput,
    outputSchema: SchemaVersionsCreateOrReplaceOutput,
  }));
// Input Schema
export interface SchemaVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
  schemaName: string;
  schemaVersionName: string;
}
export const SchemaVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaRegistryName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    schemaVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}/schemaVersions/{schemaVersionName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SchemaVersionsDeleteInput>;

// Output Schema
export type SchemaVersionsDeleteOutput = void;
export const SchemaVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SchemaVersionsDeleteOutput>;

// The operation
/**
 * Delete a SchemaVersion
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 * @param schemaName - Schema name parameter.
 * @param schemaVersionName - Schema version name parameter.
 */
export const SchemaVersionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemaVersionsDeleteInput,
    outputSchema: SchemaVersionsDeleteOutput,
  }),
);
// Input Schema
export interface SchemaVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
  schemaName: string;
  schemaVersionName: string;
}
export const SchemaVersionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaRegistryName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    schemaVersionName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}/schemaVersions/{schemaVersionName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SchemaVersionsGetInput>;

// Output Schema
export interface SchemaVersionsGetOutput {
  id?: string;
  name?: string;
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
export const SchemaVersionsGetOutput =
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
  }) as unknown as Schema.Codec<SchemaVersionsGetOutput>;

// The operation
/**
 * Get a SchemaVersion
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 * @param schemaName - Schema name parameter.
 * @param schemaVersionName - Schema version name parameter.
 */
export const SchemaVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchemaVersionsGetInput,
  outputSchema: SchemaVersionsGetOutput,
}));
// Input Schema
export interface SchemaVersionsListBySchemaInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaRegistryName: string;
  schemaName: string;
}
export const SchemaVersionsListBySchemaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaRegistryName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/schemaRegistries/{schemaRegistryName}/schemas/{schemaName}/schemaVersions",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SchemaVersionsListBySchemaInput>;

// Output Schema
export interface SchemaVersionsListBySchemaOutput {
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
export const SchemaVersionsListBySchemaOutput =
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
  }) as unknown as Schema.Codec<SchemaVersionsListBySchemaOutput>;

// The operation
/**
 * List SchemaVersion resources by Schema
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaRegistryName - Schema registry name parameter.
 * @param schemaName - Schema name parameter.
 */
export const SchemaVersionsListBySchema = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemaVersionsListBySchemaInput,
    outputSchema: SchemaVersionsListBySchemaOutput,
  }),
);
