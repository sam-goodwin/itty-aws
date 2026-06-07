/**
 * Azure Deviceregistry API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
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
  );
export type AssetEndpointProfilesCreateOrReplaceInput =
  typeof AssetEndpointProfilesCreateOrReplaceInput.Type;

// Output Schema
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
  });
export type AssetEndpointProfilesCreateOrReplaceOutput =
  typeof AssetEndpointProfilesCreateOrReplaceOutput.Type;

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
  );
export type AssetEndpointProfilesDeleteInput =
  typeof AssetEndpointProfilesDeleteInput.Type;

// Output Schema
export const AssetEndpointProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AssetEndpointProfilesDeleteOutput =
  typeof AssetEndpointProfilesDeleteOutput.Type;

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
  );
export type AssetEndpointProfilesGetInput =
  typeof AssetEndpointProfilesGetInput.Type;

// Output Schema
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
  });
export type AssetEndpointProfilesGetOutput =
  typeof AssetEndpointProfilesGetOutput.Type;

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
  );
export type AssetEndpointProfilesListByResourceGroupInput =
  typeof AssetEndpointProfilesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type AssetEndpointProfilesListByResourceGroupOutput =
  typeof AssetEndpointProfilesListByResourceGroupOutput.Type;

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
export const AssetEndpointProfilesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/assetEndpointProfiles",
      apiVersion: "2026-04-01",
    }),
  );
export type AssetEndpointProfilesListBySubscriptionInput =
  typeof AssetEndpointProfilesListBySubscriptionInput.Type;

// Output Schema
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
  });
export type AssetEndpointProfilesListBySubscriptionOutput =
  typeof AssetEndpointProfilesListBySubscriptionOutput.Type;

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
  );
export type AssetEndpointProfilesUpdateInput =
  typeof AssetEndpointProfilesUpdateInput.Type;

// Output Schema
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
  });
export type AssetEndpointProfilesUpdateOutput =
  typeof AssetEndpointProfilesUpdateOutput.Type;

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
  );
export type AssetsCreateOrReplaceInput = typeof AssetsCreateOrReplaceInput.Type;

// Output Schema
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
  });
export type AssetsCreateOrReplaceOutput =
  typeof AssetsCreateOrReplaceOutput.Type;

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
);
export type AssetsDeleteInput = typeof AssetsDeleteInput.Type;

// Output Schema
export const AssetsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AssetsDeleteOutput = typeof AssetsDeleteOutput.Type;

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
);
export type AssetsGetInput = typeof AssetsGetInput.Type;

// Output Schema
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
});
export type AssetsGetOutput = typeof AssetsGetOutput.Type;

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
  );
export type AssetsListByResourceGroupInput =
  typeof AssetsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type AssetsListByResourceGroupOutput =
  typeof AssetsListByResourceGroupOutput.Type;

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
export const AssetsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/assets",
      apiVersion: "2026-04-01",
    }),
  );
export type AssetsListBySubscriptionInput =
  typeof AssetsListBySubscriptionInput.Type;

// Output Schema
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
  });
export type AssetsListBySubscriptionOutput =
  typeof AssetsListBySubscriptionOutput.Type;

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
);
export type AssetsUpdateInput = typeof AssetsUpdateInput.Type;

// Output Schema
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
});
export type AssetsUpdateOutput = typeof AssetsUpdateOutput.Type;

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
  );
export type BillingContainersGetInput = typeof BillingContainersGetInput.Type;

// Output Schema
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
  });
export type BillingContainersGetOutput = typeof BillingContainersGetOutput.Type;

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
export const BillingContainersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/billingContainers",
      apiVersion: "2026-04-01",
    }),
  );
export type BillingContainersListBySubscriptionInput =
  typeof BillingContainersListBySubscriptionInput.Type;

// Output Schema
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
  });
export type BillingContainersListBySubscriptionOutput =
  typeof BillingContainersListBySubscriptionOutput.Type;

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
  );
export type NamespaceAssetsCreateOrReplaceInput =
  typeof NamespaceAssetsCreateOrReplaceInput.Type;

// Output Schema
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
  });
export type NamespaceAssetsCreateOrReplaceOutput =
  typeof NamespaceAssetsCreateOrReplaceOutput.Type;

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
  );
export type NamespaceAssetsDeleteInput = typeof NamespaceAssetsDeleteInput.Type;

// Output Schema
export const NamespaceAssetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NamespaceAssetsDeleteOutput =
  typeof NamespaceAssetsDeleteOutput.Type;

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
  );
export type NamespaceAssetsExecuteActionInput =
  typeof NamespaceAssetsExecuteActionInput.Type;

// Output Schema
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
  });
export type NamespaceAssetsExecuteActionOutput =
  typeof NamespaceAssetsExecuteActionOutput.Type;

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
  );
export type NamespaceAssetsGetInput = typeof NamespaceAssetsGetInput.Type;

// Output Schema
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
  });
export type NamespaceAssetsGetOutput = typeof NamespaceAssetsGetOutput.Type;

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
  );
export type NamespaceAssetsListByResourceGroupInput =
  typeof NamespaceAssetsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type NamespaceAssetsListByResourceGroupOutput =
  typeof NamespaceAssetsListByResourceGroupOutput.Type;

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
  );
export type NamespaceAssetsUpdateInput = typeof NamespaceAssetsUpdateInput.Type;

// Output Schema
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
  });
export type NamespaceAssetsUpdateOutput =
  typeof NamespaceAssetsUpdateOutput.Type;

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
  );
export type NamespaceDevicesCreateOrReplaceInput =
  typeof NamespaceDevicesCreateOrReplaceInput.Type;

// Output Schema
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
  });
export type NamespaceDevicesCreateOrReplaceOutput =
  typeof NamespaceDevicesCreateOrReplaceOutput.Type;

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
  );
export type NamespaceDevicesDeleteInput =
  typeof NamespaceDevicesDeleteInput.Type;

// Output Schema
export const NamespaceDevicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NamespaceDevicesDeleteOutput =
  typeof NamespaceDevicesDeleteOutput.Type;

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
  );
export type NamespaceDevicesGetInput = typeof NamespaceDevicesGetInput.Type;

// Output Schema
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
  });
export type NamespaceDevicesGetOutput = typeof NamespaceDevicesGetOutput.Type;

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
  );
export type NamespaceDevicesListByResourceGroupInput =
  typeof NamespaceDevicesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type NamespaceDevicesListByResourceGroupOutput =
  typeof NamespaceDevicesListByResourceGroupOutput.Type;

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
  );
export type NamespaceDevicesUpdateInput =
  typeof NamespaceDevicesUpdateInput.Type;

// Output Schema
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
  });
export type NamespaceDevicesUpdateOutput =
  typeof NamespaceDevicesUpdateOutput.Type;

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
  );
export type NamespaceDiscoveredAssetsCreateOrReplaceInput =
  typeof NamespaceDiscoveredAssetsCreateOrReplaceInput.Type;

// Output Schema
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
  });
export type NamespaceDiscoveredAssetsCreateOrReplaceOutput =
  typeof NamespaceDiscoveredAssetsCreateOrReplaceOutput.Type;

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
  );
export type NamespaceDiscoveredAssetsDeleteInput =
  typeof NamespaceDiscoveredAssetsDeleteInput.Type;

// Output Schema
export const NamespaceDiscoveredAssetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NamespaceDiscoveredAssetsDeleteOutput =
  typeof NamespaceDiscoveredAssetsDeleteOutput.Type;

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
  );
export type NamespaceDiscoveredAssetsGetInput =
  typeof NamespaceDiscoveredAssetsGetInput.Type;

// Output Schema
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
  });
export type NamespaceDiscoveredAssetsGetOutput =
  typeof NamespaceDiscoveredAssetsGetOutput.Type;

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
  );
export type NamespaceDiscoveredAssetsListByResourceGroupInput =
  typeof NamespaceDiscoveredAssetsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type NamespaceDiscoveredAssetsListByResourceGroupOutput =
  typeof NamespaceDiscoveredAssetsListByResourceGroupOutput.Type;

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
  );
export type NamespaceDiscoveredAssetsUpdateInput =
  typeof NamespaceDiscoveredAssetsUpdateInput.Type;

// Output Schema
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
  });
export type NamespaceDiscoveredAssetsUpdateOutput =
  typeof NamespaceDiscoveredAssetsUpdateOutput.Type;

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
  );
export type NamespaceDiscoveredDevicesCreateOrReplaceInput =
  typeof NamespaceDiscoveredDevicesCreateOrReplaceInput.Type;

// Output Schema
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
  });
export type NamespaceDiscoveredDevicesCreateOrReplaceOutput =
  typeof NamespaceDiscoveredDevicesCreateOrReplaceOutput.Type;

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
  );
export type NamespaceDiscoveredDevicesDeleteInput =
  typeof NamespaceDiscoveredDevicesDeleteInput.Type;

// Output Schema
export const NamespaceDiscoveredDevicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NamespaceDiscoveredDevicesDeleteOutput =
  typeof NamespaceDiscoveredDevicesDeleteOutput.Type;

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
  );
export type NamespaceDiscoveredDevicesGetInput =
  typeof NamespaceDiscoveredDevicesGetInput.Type;

// Output Schema
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
  });
export type NamespaceDiscoveredDevicesGetOutput =
  typeof NamespaceDiscoveredDevicesGetOutput.Type;

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
  );
export type NamespaceDiscoveredDevicesListByResourceGroupInput =
  typeof NamespaceDiscoveredDevicesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type NamespaceDiscoveredDevicesListByResourceGroupOutput =
  typeof NamespaceDiscoveredDevicesListByResourceGroupOutput.Type;

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
  );
export type NamespaceDiscoveredDevicesUpdateInput =
  typeof NamespaceDiscoveredDevicesUpdateInput.Type;

// Output Schema
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
  });
export type NamespaceDiscoveredDevicesUpdateOutput =
  typeof NamespaceDiscoveredDevicesUpdateOutput.Type;

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
  );
export type NamespacesCreateOrReplaceInput =
  typeof NamespacesCreateOrReplaceInput.Type;

// Output Schema
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
  });
export type NamespacesCreateOrReplaceOutput =
  typeof NamespacesCreateOrReplaceOutput.Type;

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
);
export type NamespacesDeleteInput = typeof NamespacesDeleteInput.Type;

// Output Schema
export const NamespacesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NamespacesDeleteOutput = typeof NamespacesDeleteOutput.Type;

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
);
export type NamespacesGetInput = typeof NamespacesGetInput.Type;

// Output Schema
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
});
export type NamespacesGetOutput = typeof NamespacesGetOutput.Type;

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
  );
export type NamespacesListByResourceGroupInput =
  typeof NamespacesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type NamespacesListByResourceGroupOutput =
  typeof NamespacesListByResourceGroupOutput.Type;

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
export const NamespacesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/namespaces",
      apiVersion: "2026-04-01",
    }),
  );
export type NamespacesListBySubscriptionInput =
  typeof NamespacesListBySubscriptionInput.Type;

// Output Schema
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
  });
export type NamespacesListBySubscriptionOutput =
  typeof NamespacesListBySubscriptionOutput.Type;

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
);
export type NamespacesMigrateInput = typeof NamespacesMigrateInput.Type;

// Output Schema
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
  });
export type NamespacesMigrateOutput = typeof NamespacesMigrateOutput.Type;

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
);
export type NamespacesUpdateInput = typeof NamespacesUpdateInput.Type;

// Output Schema
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
);
export type NamespacesUpdateOutput = typeof NamespacesUpdateOutput.Type;

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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DeviceRegistry/operations",
    apiVersion: "2026-04-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
  );
export type OperationStatusGetInput = typeof OperationStatusGetInput.Type;

// Output Schema
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
  });
export type OperationStatusGetOutput = typeof OperationStatusGetOutput.Type;

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
  );
export type SchemaRegistriesCreateOrReplaceInput =
  typeof SchemaRegistriesCreateOrReplaceInput.Type;

// Output Schema
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
  });
export type SchemaRegistriesCreateOrReplaceOutput =
  typeof SchemaRegistriesCreateOrReplaceOutput.Type;

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
  );
export type SchemaRegistriesDeleteInput =
  typeof SchemaRegistriesDeleteInput.Type;

// Output Schema
export const SchemaRegistriesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SchemaRegistriesDeleteOutput =
  typeof SchemaRegistriesDeleteOutput.Type;

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
  );
export type SchemaRegistriesGetInput = typeof SchemaRegistriesGetInput.Type;

// Output Schema
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
  });
export type SchemaRegistriesGetOutput = typeof SchemaRegistriesGetOutput.Type;

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
  );
export type SchemaRegistriesListByResourceGroupInput =
  typeof SchemaRegistriesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type SchemaRegistriesListByResourceGroupOutput =
  typeof SchemaRegistriesListByResourceGroupOutput.Type;

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
export const SchemaRegistriesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/schemaRegistries",
      apiVersion: "2026-04-01",
    }),
  );
export type SchemaRegistriesListBySubscriptionInput =
  typeof SchemaRegistriesListBySubscriptionInput.Type;

// Output Schema
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
  });
export type SchemaRegistriesListBySubscriptionOutput =
  typeof SchemaRegistriesListBySubscriptionOutput.Type;

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
  );
export type SchemaRegistriesUpdateInput =
  typeof SchemaRegistriesUpdateInput.Type;

// Output Schema
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
  });
export type SchemaRegistriesUpdateOutput =
  typeof SchemaRegistriesUpdateOutput.Type;

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
  );
export type SchemasCreateOrReplaceInput =
  typeof SchemasCreateOrReplaceInput.Type;

// Output Schema
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
  });
export type SchemasCreateOrReplaceOutput =
  typeof SchemasCreateOrReplaceOutput.Type;

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
);
export type SchemasDeleteInput = typeof SchemasDeleteInput.Type;

// Output Schema
export const SchemasDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SchemasDeleteOutput = typeof SchemasDeleteOutput.Type;

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
);
export type SchemasGetInput = typeof SchemasGetInput.Type;

// Output Schema
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
});
export type SchemasGetOutput = typeof SchemasGetOutput.Type;

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
  );
export type SchemasListBySchemaRegistryInput =
  typeof SchemasListBySchemaRegistryInput.Type;

// Output Schema
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
  });
export type SchemasListBySchemaRegistryOutput =
  typeof SchemasListBySchemaRegistryOutput.Type;

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
  );
export type SchemaVersionsCreateOrReplaceInput =
  typeof SchemaVersionsCreateOrReplaceInput.Type;

// Output Schema
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
  });
export type SchemaVersionsCreateOrReplaceOutput =
  typeof SchemaVersionsCreateOrReplaceOutput.Type;

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
  );
export type SchemaVersionsDeleteInput = typeof SchemaVersionsDeleteInput.Type;

// Output Schema
export const SchemaVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SchemaVersionsDeleteOutput = typeof SchemaVersionsDeleteOutput.Type;

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
);
export type SchemaVersionsGetInput = typeof SchemaVersionsGetInput.Type;

// Output Schema
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
  });
export type SchemaVersionsGetOutput = typeof SchemaVersionsGetOutput.Type;

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
  );
export type SchemaVersionsListBySchemaInput =
  typeof SchemaVersionsListBySchemaInput.Type;

// Output Schema
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
  });
export type SchemaVersionsListBySchemaOutput =
  typeof SchemaVersionsListBySchemaOutput.Type;

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
