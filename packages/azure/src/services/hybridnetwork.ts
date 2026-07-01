/**
 * Azure Hybridnetwork API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ArtifactManifestsCreateOrUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  artifactManifestName: string;
  subscriptionId: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    artifactManifestState?:
      | "Unknown"
      | "Uploading"
      | "Uploaded"
      | "Validating"
      | "ValidationFailed"
      | "Succeeded";
    artifacts?: {
      artifactName?: string;
      artifactType?:
        | "Unknown"
        | "OCIArtifact"
        | "VhdImageFile"
        | "ArmTemplate"
        | "ImageFile";
      artifactVersion?: string;
    }[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const ArtifactManifestsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    artifactManifestName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        artifactManifestState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Uploading",
            "Uploaded",
            "Validating",
            "ValidationFailed",
            "Succeeded",
          ]),
        ),
        artifacts: Schema.optional(
          Schema.Array(
            Schema.Struct({
              artifactName: Schema.optional(Schema.String),
              artifactType: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "OCIArtifact",
                  "VhdImageFile",
                  "ArmTemplate",
                  "ImageFile",
                ]),
              ),
              artifactVersion: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactManifestsCreateOrUpdateInput>;

// Output Schema
export interface ArtifactManifestsCreateOrUpdateOutput {
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
export const ArtifactManifestsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ArtifactManifestsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a artifact manifest.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param artifactManifestName - The name of the artifact manifest.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactManifestsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactManifestsCreateOrUpdateInput,
    outputSchema: ArtifactManifestsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ArtifactManifestsDeleteInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  artifactManifestName: string;
  subscriptionId: string;
}
export const ArtifactManifestsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    artifactManifestName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactManifestsDeleteInput>;

// Output Schema
export type ArtifactManifestsDeleteOutput = void;
export const ArtifactManifestsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ArtifactManifestsDeleteOutput>;

// The operation
/**
 * Deletes the specified artifact manifest.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param artifactManifestName - The name of the artifact manifest.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactManifestsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArtifactManifestsDeleteInput,
    outputSchema: ArtifactManifestsDeleteOutput,
  }),
);
// Input Schema
export interface ArtifactManifestsGetInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  artifactManifestName: string;
  subscriptionId: string;
}
export const ArtifactManifestsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    artifactManifestName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactManifestsGetInput>;

// Output Schema
export interface ArtifactManifestsGetOutput {
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
export const ArtifactManifestsGetOutput =
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
  }) as unknown as Schema.Codec<ArtifactManifestsGetOutput>;

// The operation
/**
 * Gets information about a artifact manifest resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param artifactManifestName - The name of the artifact manifest.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactManifestsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArtifactManifestsGetInput,
    outputSchema: ArtifactManifestsGetOutput,
  }),
);
// Input Schema
export interface ArtifactManifestsListByArtifactStoreInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
}
export const ArtifactManifestsListByArtifactStoreInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactManifestsListByArtifactStoreInput>;

// Output Schema
export interface ArtifactManifestsListByArtifactStoreOutput {
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
export const ArtifactManifestsListByArtifactStoreOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ArtifactManifestsListByArtifactStoreOutput>;

// The operation
/**
 * Gets information about the artifact manifest.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactManifestsListByArtifactStore =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactManifestsListByArtifactStoreInput,
    outputSchema: ArtifactManifestsListByArtifactStoreOutput,
  }));
// Input Schema
export interface ArtifactManifestsListCredentialInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  artifactManifestName: string;
  subscriptionId: string;
}
export const ArtifactManifestsListCredentialInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    artifactManifestName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}/listCredential",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactManifestsListCredentialInput>;

// Output Schema
export interface ArtifactManifestsListCredentialOutput {
  credentialType:
    | "Unknown"
    | "AzureContainerRegistryScopedToken"
    | "AzureStorageAccountToken";
}
export const ArtifactManifestsListCredentialOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    credentialType: Schema.Literals([
      "Unknown",
      "AzureContainerRegistryScopedToken",
      "AzureStorageAccountToken",
    ]),
  }) as unknown as Schema.Codec<ArtifactManifestsListCredentialOutput>;

// The operation
/**
 * List credential for publishing artifacts defined in artifact manifest.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param artifactManifestName - The name of the artifact manifest.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactManifestsListCredential =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactManifestsListCredentialInput,
    outputSchema: ArtifactManifestsListCredentialOutput,
  }));
// Input Schema
export interface ArtifactManifestsUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  artifactManifestName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const ArtifactManifestsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    artifactManifestName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactManifestsUpdateInput>;

// Output Schema
export interface ArtifactManifestsUpdateOutput {
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
export const ArtifactManifestsUpdateOutput =
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
  }) as unknown as Schema.Codec<ArtifactManifestsUpdateOutput>;

// The operation
/**
 * Updates a artifact manifest resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param artifactManifestName - The name of the artifact manifest.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param tags - Resource tags.
 */
export const ArtifactManifestsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArtifactManifestsUpdateInput,
    outputSchema: ArtifactManifestsUpdateOutput,
  }),
);
// Input Schema
export interface ArtifactManifestsUpdateStateInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  artifactManifestName: string;
  subscriptionId: string;
  artifactManifestState?:
    | "Unknown"
    | "Uploading"
    | "Uploaded"
    | "Validating"
    | "ValidationFailed"
    | "Succeeded";
}
export const ArtifactManifestsUpdateStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    artifactManifestName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    artifactManifestState: Schema.optional(
      Schema.Literals([
        "Unknown",
        "Uploading",
        "Uploaded",
        "Validating",
        "ValidationFailed",
        "Succeeded",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactManifests/{artifactManifestName}/updateState",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactManifestsUpdateStateInput>;

// Output Schema
export interface ArtifactManifestsUpdateStateOutput {
  artifactManifestState?:
    | "Unknown"
    | "Uploading"
    | "Uploaded"
    | "Validating"
    | "ValidationFailed"
    | "Succeeded";
}
export const ArtifactManifestsUpdateStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactManifestState: Schema.optional(
      Schema.Literals([
        "Unknown",
        "Uploading",
        "Uploaded",
        "Validating",
        "ValidationFailed",
        "Succeeded",
      ]),
    ),
  }) as unknown as Schema.Codec<ArtifactManifestsUpdateStateOutput>;

// The operation
/**
 * Update state for artifact manifest.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param artifactManifestName - The name of the artifact manifest.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactManifestsUpdateState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactManifestsUpdateStateInput,
    outputSchema: ArtifactManifestsUpdateStateOutput,
  }));
// Input Schema
export interface ArtifactStoresAddNetworkFabricControllerEndPointsInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
  networkFabricControllerIds?: { id?: string }[];
}
export const ArtifactStoresAddNetworkFabricControllerEndPointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    networkFabricControllerIds: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/addNetworkFabricControllerEndPoints",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactStoresAddNetworkFabricControllerEndPointsInput>;

// Output Schema
export type ArtifactStoresAddNetworkFabricControllerEndPointsOutput = void;
export const ArtifactStoresAddNetworkFabricControllerEndPointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ArtifactStoresAddNetworkFabricControllerEndPointsOutput>;

// The operation
/**
 * Add network fabric controllers to artifact stores
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactStoresAddNetworkFabricControllerEndPoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactStoresAddNetworkFabricControllerEndPointsInput,
    outputSchema: ArtifactStoresAddNetworkFabricControllerEndPointsOutput,
  }));
// Input Schema
export interface ArtifactStoresApprovePrivateEndPointsInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
  manualPrivateEndPointConnections?: { id?: string }[];
}
export const ArtifactStoresApprovePrivateEndPointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    manualPrivateEndPointConnections: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/approvePrivateEndPoints",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactStoresApprovePrivateEndPointsInput>;

// Output Schema
export type ArtifactStoresApprovePrivateEndPointsOutput = void;
export const ArtifactStoresApprovePrivateEndPointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ArtifactStoresApprovePrivateEndPointsOutput>;

// The operation
/**
 * Approve manual private endpoints on artifact stores
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactStoresApprovePrivateEndPoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactStoresApprovePrivateEndPointsInput,
    outputSchema: ArtifactStoresApprovePrivateEndPointsOutput,
  }));
// Input Schema
export interface ArtifactStoresCreateOrUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    storeType?: "Unknown" | "AzureContainerRegistry" | "AzureStorageAccount";
    backingResourcePublicNetworkAccess?: "Enabled" | "Disabled";
    replicationStrategy?: "Unknown" | "SingleReplication";
    managedResourceGroupConfiguration?: { name?: string; location?: string };
    storageResourceId?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ArtifactStoresCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        storeType: Schema.optional(
          Schema.Literals([
            "Unknown",
            "AzureContainerRegistry",
            "AzureStorageAccount",
          ]),
        ),
        backingResourcePublicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        replicationStrategy: Schema.optional(
          Schema.Literals(["Unknown", "SingleReplication"]),
        ),
        managedResourceGroupConfiguration: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            location: Schema.optional(Schema.String),
          }),
        ),
        storageResourceId: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactStoresCreateOrUpdateInput>;

// Output Schema
export interface ArtifactStoresCreateOrUpdateOutput {
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
export const ArtifactStoresCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ArtifactStoresCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a artifact store.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactStoresCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactStoresCreateOrUpdateInput,
    outputSchema: ArtifactStoresCreateOrUpdateOutput,
  }));
// Input Schema
export interface ArtifactStoresDeleteInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
}
export const ArtifactStoresDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactStoresDeleteInput>;

// Output Schema
export type ArtifactStoresDeleteOutput = void;
export const ArtifactStoresDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ArtifactStoresDeleteOutput>;

// The operation
/**
 * Deletes the specified artifact store.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactStoresDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArtifactStoresDeleteInput,
    outputSchema: ArtifactStoresDeleteOutput,
  }),
);
// Input Schema
export interface ArtifactStoresDeleteNetworkFabricControllerEndPointsInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
  networkFabricControllerIds?: { id?: string }[];
}
export const ArtifactStoresDeleteNetworkFabricControllerEndPointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    networkFabricControllerIds: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/deleteNetworkFabricControllerEndPoints",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactStoresDeleteNetworkFabricControllerEndPointsInput>;

// Output Schema
export type ArtifactStoresDeleteNetworkFabricControllerEndPointsOutput = void;
export const ArtifactStoresDeleteNetworkFabricControllerEndPointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ArtifactStoresDeleteNetworkFabricControllerEndPointsOutput>;

// The operation
/**
 * Delete network fabric controllers on artifact stores
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactStoresDeleteNetworkFabricControllerEndPoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactStoresDeleteNetworkFabricControllerEndPointsInput,
    outputSchema: ArtifactStoresDeleteNetworkFabricControllerEndPointsOutput,
  }));
// Input Schema
export interface ArtifactStoresGetInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
}
export const ArtifactStoresGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}",
    apiVersion: "2024-04-15",
  }),
) as unknown as Schema.Codec<ArtifactStoresGetInput>;

// Output Schema
export interface ArtifactStoresGetOutput {
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
export const ArtifactStoresGetOutput =
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
  }) as unknown as Schema.Codec<ArtifactStoresGetOutput>;

// The operation
/**
 * Gets information about the specified artifact store.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactStoresGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArtifactStoresGetInput,
  outputSchema: ArtifactStoresGetOutput,
}));
// Input Schema
export interface ArtifactStoresListByPublisherInput {
  resourceGroupName: string;
  publisherName: string;
  subscriptionId: string;
}
export const ArtifactStoresListByPublisherInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactStoresListByPublisherInput>;

// Output Schema
export interface ArtifactStoresListByPublisherOutput {
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
export const ArtifactStoresListByPublisherOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ArtifactStoresListByPublisherOutput>;

// The operation
/**
 * Gets information of the ArtifactStores under publisher.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactStoresListByPublisher =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactStoresListByPublisherInput,
    outputSchema: ArtifactStoresListByPublisherOutput,
  }));
// Input Schema
export interface ArtifactStoresListNetworkFabricControllerPrivateEndPointsInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
}
export const ArtifactStoresListNetworkFabricControllerPrivateEndPointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/listNetworkFabricControllerPrivateEndPoints",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactStoresListNetworkFabricControllerPrivateEndPointsInput>;

// Output Schema
export interface ArtifactStoresListNetworkFabricControllerPrivateEndPointsOutput {
  value?: { networkFabricControllerIds?: { id?: string }[] }[];
  nextLink?: string;
}
export const ArtifactStoresListNetworkFabricControllerPrivateEndPointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          networkFabricControllerIds: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ArtifactStoresListNetworkFabricControllerPrivateEndPointsOutput>;

// The operation
/**
 * List network fabric controllers to artifact stores
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactStoresListNetworkFabricControllerPrivateEndPoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactStoresListNetworkFabricControllerPrivateEndPointsInput,
    outputSchema:
      ArtifactStoresListNetworkFabricControllerPrivateEndPointsOutput,
  }));
// Input Schema
export interface ArtifactStoresListPrivateEndPointsInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
}
export const ArtifactStoresListPrivateEndPointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/listPrivateEndPoints",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactStoresListPrivateEndPointsInput>;

// Output Schema
export interface ArtifactStoresListPrivateEndPointsOutput {
  value?: { manualPrivateEndPointConnections?: { id?: string }[] }[];
  nextLink?: string;
}
export const ArtifactStoresListPrivateEndPointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          manualPrivateEndPointConnections: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ArtifactStoresListPrivateEndPointsOutput>;

// The operation
/**
 * List manual private endpoints on artifact stores
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactStoresListPrivateEndPoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactStoresListPrivateEndPointsInput,
    outputSchema: ArtifactStoresListPrivateEndPointsOutput,
  }));
// Input Schema
export interface ArtifactStoresRemovePrivateEndPointsInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
  manualPrivateEndPointConnections?: { id?: string }[];
}
export const ArtifactStoresRemovePrivateEndPointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    manualPrivateEndPointConnections: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/removePrivateEndPoints",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactStoresRemovePrivateEndPointsInput>;

// Output Schema
export type ArtifactStoresRemovePrivateEndPointsOutput = void;
export const ArtifactStoresRemovePrivateEndPointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ArtifactStoresRemovePrivateEndPointsOutput>;

// The operation
/**
 * Remove manual private endpoints on artifact stores
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ArtifactStoresRemovePrivateEndPoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactStoresRemovePrivateEndPointsInput,
    outputSchema: ArtifactStoresRemovePrivateEndPointsOutput,
  }));
// Input Schema
export interface ArtifactStoresUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const ArtifactStoresUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ArtifactStoresUpdateInput>;

// Output Schema
export interface ArtifactStoresUpdateOutput {
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
export const ArtifactStoresUpdateOutput =
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
  }) as unknown as Schema.Codec<ArtifactStoresUpdateOutput>;

// The operation
/**
 * Update artifact store resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param tags - Resource tags.
 */
export const ArtifactStoresUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArtifactStoresUpdateInput,
    outputSchema: ArtifactStoresUpdateOutput,
  }),
);
// Input Schema
export interface ComponentsGetInput {
  resourceGroupName: string;
  networkFunctionName: string;
  componentName: string;
  subscriptionId: string;
}
export const ComponentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  networkFunctionName: Schema.String.pipe(T.PathParam()),
  componentName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}/components/{componentName}",
    apiVersion: "2024-04-15",
  }),
) as unknown as Schema.Codec<ComponentsGetInput>;

// Output Schema
export interface ComponentsGetOutput {
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
export const ComponentsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ComponentsGetOutput>;

// The operation
/**
 * Gets information about the specified application instance resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFunctionName - The name of the network function.
 * @param componentName - The name of the component.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ComponentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ComponentsGetInput,
  outputSchema: ComponentsGetOutput,
}));
// Input Schema
export interface ComponentsListByNetworkFunctionInput {
  resourceGroupName: string;
  subscriptionId: string;
  networkFunctionName: string;
}
export const ComponentsListByNetworkFunctionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    networkFunctionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}/components",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ComponentsListByNetworkFunctionInput>;

// Output Schema
export interface ComponentsListByNetworkFunctionOutput {
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
export const ComponentsListByNetworkFunctionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ComponentsListByNetworkFunctionOutput>;

// The operation
/**
 * Lists all the component resources in a network function.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param networkFunctionName - The name of the network function.
 */
export const ComponentsListByNetworkFunction =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ComponentsListByNetworkFunctionInput,
    outputSchema: ComponentsListByNetworkFunctionOutput,
  }));
// Input Schema
export interface ConfigurationGroupSchemasCreateOrUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  configurationGroupSchemaName: string;
  subscriptionId: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    versionState?: "Unknown" | "Preview" | "Active" | "Deprecated";
    description?: string;
    schemaDefinition?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ConfigurationGroupSchemasCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    configurationGroupSchemaName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        versionState: Schema.optional(
          Schema.Literals(["Unknown", "Preview", "Active", "Deprecated"]),
        ),
        description: Schema.optional(Schema.String),
        schemaDefinition: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupSchemasCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationGroupSchemasCreateOrUpdateOutput {
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
export const ConfigurationGroupSchemasCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationGroupSchemasCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a configuration group schema.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param configurationGroupSchemaName - The name of the configuration group schema.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ConfigurationGroupSchemasCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationGroupSchemasCreateOrUpdateInput,
    outputSchema: ConfigurationGroupSchemasCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationGroupSchemasDeleteInput {
  resourceGroupName: string;
  publisherName: string;
  configurationGroupSchemaName: string;
  subscriptionId: string;
}
export const ConfigurationGroupSchemasDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    configurationGroupSchemaName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupSchemasDeleteInput>;

// Output Schema
export type ConfigurationGroupSchemasDeleteOutput = void;
export const ConfigurationGroupSchemasDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationGroupSchemasDeleteOutput>;

// The operation
/**
 * Deletes a specified configuration group schema.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param configurationGroupSchemaName - The name of the configuration group schema.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ConfigurationGroupSchemasDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationGroupSchemasDeleteInput,
    outputSchema: ConfigurationGroupSchemasDeleteOutput,
  }));
// Input Schema
export interface ConfigurationGroupSchemasGetInput {
  resourceGroupName: string;
  publisherName: string;
  configurationGroupSchemaName: string;
  subscriptionId: string;
}
export const ConfigurationGroupSchemasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    configurationGroupSchemaName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupSchemasGetInput>;

// Output Schema
export interface ConfigurationGroupSchemasGetOutput {
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
export const ConfigurationGroupSchemasGetOutput =
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
  }) as unknown as Schema.Codec<ConfigurationGroupSchemasGetOutput>;

// The operation
/**
 * Gets information about the specified configuration group schema.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param configurationGroupSchemaName - The name of the configuration group schema.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ConfigurationGroupSchemasGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationGroupSchemasGetInput,
    outputSchema: ConfigurationGroupSchemasGetOutput,
  }));
// Input Schema
export interface ConfigurationGroupSchemasListByPublisherInput {
  resourceGroupName: string;
  publisherName: string;
  subscriptionId: string;
}
export const ConfigurationGroupSchemasListByPublisherInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupSchemasListByPublisherInput>;

// Output Schema
export interface ConfigurationGroupSchemasListByPublisherOutput {
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
export const ConfigurationGroupSchemasListByPublisherOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ConfigurationGroupSchemasListByPublisherOutput>;

// The operation
/**
 * Gets information of the configuration group schemas under a publisher.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ConfigurationGroupSchemasListByPublisher =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationGroupSchemasListByPublisherInput,
    outputSchema: ConfigurationGroupSchemasListByPublisherOutput,
  }));
// Input Schema
export interface ConfigurationGroupSchemasUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  configurationGroupSchemaName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const ConfigurationGroupSchemasUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    configurationGroupSchemaName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupSchemasUpdateInput>;

// Output Schema
export interface ConfigurationGroupSchemasUpdateOutput {
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
export const ConfigurationGroupSchemasUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationGroupSchemasUpdateOutput>;

// The operation
/**
 * Updates a configuration group schema resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param configurationGroupSchemaName - The name of the configuration group schema.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param tags - Resource tags.
 */
export const ConfigurationGroupSchemasUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationGroupSchemasUpdateInput,
    outputSchema: ConfigurationGroupSchemasUpdateOutput,
  }));
// Input Schema
export interface ConfigurationGroupSchemasUpdateStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
  configurationGroupSchemaName: string;
  versionState?: "Unknown" | "Preview" | "Active" | "Deprecated";
}
export const ConfigurationGroupSchemasUpdateStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    configurationGroupSchemaName: Schema.String.pipe(T.PathParam()),
    versionState: Schema.optional(
      Schema.Literals(["Unknown", "Preview", "Active", "Deprecated"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/configurationGroupSchemas/{configurationGroupSchemaName}/updateState",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupSchemasUpdateStateInput>;

// Output Schema
export interface ConfigurationGroupSchemasUpdateStateOutput {
  versionState?: "Unknown" | "Preview" | "Active" | "Deprecated";
}
export const ConfigurationGroupSchemasUpdateStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionState: Schema.optional(
      Schema.Literals(["Unknown", "Preview", "Active", "Deprecated"]),
    ),
  }) as unknown as Schema.Codec<ConfigurationGroupSchemasUpdateStateOutput>;

// The operation
/**
 * Update configuration group schema state.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param configurationGroupSchemaName - The name of the configuration group schema.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationGroupSchemasUpdateState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationGroupSchemasUpdateStateInput,
    outputSchema: ConfigurationGroupSchemasUpdateStateOutput,
  }));
// Input Schema
export interface ConfigurationGroupValuesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationGroupValueName: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    publisherName?: string;
    publisherScope?: "Unknown" | "Private";
    configurationGroupSchemaName?: string;
    configurationGroupSchemaOfferingLocation?: string;
    configurationGroupSchemaResourceReference?: {
      idType: "Unknown" | "Open" | "Secret";
    };
    configurationType: "Unknown" | "Secret" | "Open";
  };
  tags?: Record<string, string>;
  location: string;
}
export const ConfigurationGroupValuesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationGroupValueName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        publisherName: Schema.optional(Schema.String),
        publisherScope: Schema.optional(
          Schema.Literals(["Unknown", "Private"]),
        ),
        configurationGroupSchemaName: Schema.optional(Schema.String),
        configurationGroupSchemaOfferingLocation: Schema.optional(
          Schema.String,
        ),
        configurationGroupSchemaResourceReference: Schema.optional(
          Schema.Struct({
            idType: Schema.Literals(["Unknown", "Open", "Secret"]),
          }),
        ),
        configurationType: Schema.Literals(["Unknown", "Secret", "Open"]),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupValuesCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationGroupValuesCreateOrUpdateOutput {
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
export const ConfigurationGroupValuesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationGroupValuesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a hybrid configuration group value.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param configurationGroupValueName - The name of the configuration group value.
 */
export const ConfigurationGroupValuesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationGroupValuesCreateOrUpdateInput,
    outputSchema: ConfigurationGroupValuesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationGroupValuesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationGroupValueName: string;
}
export const ConfigurationGroupValuesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationGroupValueName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupValuesDeleteInput>;

// Output Schema
export type ConfigurationGroupValuesDeleteOutput = void;
export const ConfigurationGroupValuesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationGroupValuesDeleteOutput>;

// The operation
/**
 * Deletes the specified hybrid configuration group value.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param configurationGroupValueName - The name of the configuration group value.
 */
export const ConfigurationGroupValuesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationGroupValuesDeleteInput,
    outputSchema: ConfigurationGroupValuesDeleteOutput,
  }));
// Input Schema
export interface ConfigurationGroupValuesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationGroupValueName: string;
}
export const ConfigurationGroupValuesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationGroupValueName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupValuesGetInput>;

// Output Schema
export interface ConfigurationGroupValuesGetOutput {
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
export const ConfigurationGroupValuesGetOutput =
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
  }) as unknown as Schema.Codec<ConfigurationGroupValuesGetOutput>;

// The operation
/**
 * Gets information about the specified hybrid configuration group values.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param configurationGroupValueName - The name of the configuration group value.
 */
export const ConfigurationGroupValuesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationGroupValuesGetInput,
    outputSchema: ConfigurationGroupValuesGetOutput,
  }),
);
// Input Schema
export interface ConfigurationGroupValuesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ConfigurationGroupValuesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupValuesListByResourceGroupInput>;

// Output Schema
export interface ConfigurationGroupValuesListByResourceGroupOutput {
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
export const ConfigurationGroupValuesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ConfigurationGroupValuesListByResourceGroupOutput>;

// The operation
/**
 * Lists all the hybrid network configurationGroupValues in a resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationGroupValuesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationGroupValuesListByResourceGroupInput,
    outputSchema: ConfigurationGroupValuesListByResourceGroupOutput,
  }));
// Input Schema
export interface ConfigurationGroupValuesListBySubscriptionInput {
  subscriptionId: string;
}
export const ConfigurationGroupValuesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/configurationGroupValues",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupValuesListBySubscriptionInput>;

// Output Schema
export interface ConfigurationGroupValuesListBySubscriptionOutput {
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
export const ConfigurationGroupValuesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ConfigurationGroupValuesListBySubscriptionOutput>;

// The operation
/**
 * Lists all sites in the configuration group value in a subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationGroupValuesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationGroupValuesListBySubscriptionInput,
    outputSchema: ConfigurationGroupValuesListBySubscriptionOutput,
  }));
// Input Schema
export interface ConfigurationGroupValuesUpdateTagsInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationGroupValueName: string;
  tags?: Record<string, string>;
}
export const ConfigurationGroupValuesUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationGroupValueName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/configurationGroupValues/{configurationGroupValueName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ConfigurationGroupValuesUpdateTagsInput>;

// Output Schema
export interface ConfigurationGroupValuesUpdateTagsOutput {
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
export const ConfigurationGroupValuesUpdateTagsOutput =
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
  }) as unknown as Schema.Codec<ConfigurationGroupValuesUpdateTagsOutput>;

// The operation
/**
 * Updates a hybrid configuration group tags.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param configurationGroupValueName - The name of the configuration group value.
 * @param tags - Resource tags.
 */
export const ConfigurationGroupValuesUpdateTags =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationGroupValuesUpdateTagsInput,
    outputSchema: ConfigurationGroupValuesUpdateTagsOutput,
  }));
// Input Schema
export interface NetworkFunctionDefinitionGroupsCreateOrUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  networkFunctionDefinitionGroupName: string;
  subscriptionId: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    description?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkFunctionDefinitionGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        description: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionDefinitionGroupsCreateOrUpdateInput>;

// Output Schema
export interface NetworkFunctionDefinitionGroupsCreateOrUpdateOutput {
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
export const NetworkFunctionDefinitionGroupsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkFunctionDefinitionGroupsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a network function definition group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkFunctionDefinitionGroupName - The name of the network function definition group.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionDefinitionGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionDefinitionGroupsCreateOrUpdateInput,
    outputSchema: NetworkFunctionDefinitionGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NetworkFunctionDefinitionGroupsDeleteInput {
  resourceGroupName: string;
  publisherName: string;
  networkFunctionDefinitionGroupName: string;
  subscriptionId: string;
}
export const NetworkFunctionDefinitionGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionDefinitionGroupsDeleteInput>;

// Output Schema
export type NetworkFunctionDefinitionGroupsDeleteOutput = void;
export const NetworkFunctionDefinitionGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkFunctionDefinitionGroupsDeleteOutput>;

// The operation
/**
 * Deletes a specified network function definition group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkFunctionDefinitionGroupName - The name of the network function definition group.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionDefinitionGroupsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionDefinitionGroupsDeleteInput,
    outputSchema: NetworkFunctionDefinitionGroupsDeleteOutput,
  }));
// Input Schema
export interface NetworkFunctionDefinitionGroupsGetInput {
  resourceGroupName: string;
  publisherName: string;
  networkFunctionDefinitionGroupName: string;
  subscriptionId: string;
}
export const NetworkFunctionDefinitionGroupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionDefinitionGroupsGetInput>;

// Output Schema
export interface NetworkFunctionDefinitionGroupsGetOutput {
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
export const NetworkFunctionDefinitionGroupsGetOutput =
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
  }) as unknown as Schema.Codec<NetworkFunctionDefinitionGroupsGetOutput>;

// The operation
/**
 * Gets information about the specified networkFunctionDefinition group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkFunctionDefinitionGroupName - The name of the network function definition group.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionDefinitionGroupsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionDefinitionGroupsGetInput,
    outputSchema: NetworkFunctionDefinitionGroupsGetOutput,
  }));
// Input Schema
export interface NetworkFunctionDefinitionGroupsListByPublisherInput {
  resourceGroupName: string;
  publisherName: string;
  subscriptionId: string;
}
export const NetworkFunctionDefinitionGroupsListByPublisherInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionDefinitionGroupsListByPublisherInput>;

// Output Schema
export interface NetworkFunctionDefinitionGroupsListByPublisherOutput {
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
export const NetworkFunctionDefinitionGroupsListByPublisherOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkFunctionDefinitionGroupsListByPublisherOutput>;

// The operation
/**
 * Gets information of the network function definition groups under a publisher.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionDefinitionGroupsListByPublisher =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionDefinitionGroupsListByPublisherInput,
    outputSchema: NetworkFunctionDefinitionGroupsListByPublisherOutput,
  }));
// Input Schema
export interface NetworkFunctionDefinitionGroupsUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  networkFunctionDefinitionGroupName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const NetworkFunctionDefinitionGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionDefinitionGroupsUpdateInput>;

// Output Schema
export interface NetworkFunctionDefinitionGroupsUpdateOutput {
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
export const NetworkFunctionDefinitionGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkFunctionDefinitionGroupsUpdateOutput>;

// The operation
/**
 * Updates a network function definition group resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkFunctionDefinitionGroupName - The name of the network function definition group.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param tags - Resource tags.
 */
export const NetworkFunctionDefinitionGroupsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionDefinitionGroupsUpdateInput,
    outputSchema: NetworkFunctionDefinitionGroupsUpdateOutput,
  }));
// Input Schema
export interface NetworkFunctionDefinitionVersionsCreateOrUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  networkFunctionDefinitionGroupName: string;
  networkFunctionDefinitionVersionName: string;
  subscriptionId: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    versionState?:
      | "Unknown"
      | "Preview"
      | "Validating"
      | "ValidationFailed"
      | "Active"
      | "Deprecated";
    description?: string;
    deployParameters?: string;
    networkFunctionType:
      | "Unknown"
      | "VirtualNetworkFunction"
      | "ContainerizedNetworkFunction";
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkFunctionDefinitionVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionGroupName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionVersionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        versionState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Preview",
            "Validating",
            "ValidationFailed",
            "Active",
            "Deprecated",
          ]),
        ),
        description: Schema.optional(Schema.String),
        deployParameters: Schema.optional(Schema.String),
        networkFunctionType: Schema.Literals([
          "Unknown",
          "VirtualNetworkFunction",
          "ContainerizedNetworkFunction",
        ]),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsCreateOrUpdateInput>;

// Output Schema
export interface NetworkFunctionDefinitionVersionsCreateOrUpdateOutput {
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
export const NetworkFunctionDefinitionVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a network function definition version.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkFunctionDefinitionGroupName - The name of the network function definition group.
 * @param networkFunctionDefinitionVersionName - The name of the network function definition version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionDefinitionVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionDefinitionVersionsCreateOrUpdateInput,
    outputSchema: NetworkFunctionDefinitionVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NetworkFunctionDefinitionVersionsDeleteInput {
  resourceGroupName: string;
  publisherName: string;
  networkFunctionDefinitionGroupName: string;
  networkFunctionDefinitionVersionName: string;
  subscriptionId: string;
}
export const NetworkFunctionDefinitionVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionGroupName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionVersionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsDeleteInput>;

// Output Schema
export type NetworkFunctionDefinitionVersionsDeleteOutput = void;
export const NetworkFunctionDefinitionVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsDeleteOutput>;

// The operation
/**
 * Deletes the specified network function definition version.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkFunctionDefinitionGroupName - The name of the network function definition group.
 * @param networkFunctionDefinitionVersionName - The name of the network function definition version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionDefinitionVersionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionDefinitionVersionsDeleteInput,
    outputSchema: NetworkFunctionDefinitionVersionsDeleteOutput,
  }));
// Input Schema
export interface NetworkFunctionDefinitionVersionsGetInput {
  resourceGroupName: string;
  publisherName: string;
  networkFunctionDefinitionGroupName: string;
  networkFunctionDefinitionVersionName: string;
  subscriptionId: string;
}
export const NetworkFunctionDefinitionVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionGroupName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionVersionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsGetInput>;

// Output Schema
export interface NetworkFunctionDefinitionVersionsGetOutput {
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
export const NetworkFunctionDefinitionVersionsGetOutput =
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
  }) as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsGetOutput>;

// The operation
/**
 * Gets information about a network function definition version.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkFunctionDefinitionGroupName - The name of the network function definition group.
 * @param networkFunctionDefinitionVersionName - The name of the network function definition version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionDefinitionVersionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionDefinitionVersionsGetInput,
    outputSchema: NetworkFunctionDefinitionVersionsGetOutput,
  }));
// Input Schema
export interface NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupInput {
  resourceGroupName: string;
  publisherName: string;
  networkFunctionDefinitionGroupName: string;
  subscriptionId: string;
}
export const NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupInput>;

// Output Schema
export interface NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupOutput {
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
export const NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupOutput>;

// The operation
/**
 * Gets information about a list of network function definition versions under a network function definition group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkFunctionDefinitionGroupName - The name of the network function definition group.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupInput,
    outputSchema:
      NetworkFunctionDefinitionVersionsListByNetworkFunctionDefinitionGroupOutput,
  }));
// Input Schema
export interface NetworkFunctionDefinitionVersionsUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  networkFunctionDefinitionGroupName: string;
  networkFunctionDefinitionVersionName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const NetworkFunctionDefinitionVersionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionGroupName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionVersionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsUpdateInput>;

// Output Schema
export interface NetworkFunctionDefinitionVersionsUpdateOutput {
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
export const NetworkFunctionDefinitionVersionsUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsUpdateOutput>;

// The operation
/**
 * Updates a network function definition version resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkFunctionDefinitionGroupName - The name of the network function definition group.
 * @param networkFunctionDefinitionVersionName - The name of the network function definition version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param tags - Resource tags.
 */
export const NetworkFunctionDefinitionVersionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionDefinitionVersionsUpdateInput,
    outputSchema: NetworkFunctionDefinitionVersionsUpdateOutput,
  }));
// Input Schema
export interface NetworkFunctionDefinitionVersionsUpdateStateInput {
  resourceGroupName: string;
  publisherName: string;
  networkFunctionDefinitionGroupName: string;
  networkFunctionDefinitionVersionName: string;
  subscriptionId: string;
  versionState?:
    | "Unknown"
    | "Preview"
    | "Validating"
    | "ValidationFailed"
    | "Active"
    | "Deprecated";
}
export const NetworkFunctionDefinitionVersionsUpdateStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionGroupName: Schema.String.pipe(T.PathParam()),
    networkFunctionDefinitionVersionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    versionState: Schema.optional(
      Schema.Literals([
        "Unknown",
        "Preview",
        "Validating",
        "ValidationFailed",
        "Active",
        "Deprecated",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkFunctionDefinitionGroups/{networkFunctionDefinitionGroupName}/networkFunctionDefinitionVersions/{networkFunctionDefinitionVersionName}/updateState",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsUpdateStateInput>;

// Output Schema
export interface NetworkFunctionDefinitionVersionsUpdateStateOutput {
  versionState?:
    | "Unknown"
    | "Preview"
    | "Validating"
    | "ValidationFailed"
    | "Active"
    | "Deprecated";
}
export const NetworkFunctionDefinitionVersionsUpdateStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionState: Schema.optional(
      Schema.Literals([
        "Unknown",
        "Preview",
        "Validating",
        "ValidationFailed",
        "Active",
        "Deprecated",
      ]),
    ),
  }) as unknown as Schema.Codec<NetworkFunctionDefinitionVersionsUpdateStateOutput>;

// The operation
/**
 * Update network function definition version state.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkFunctionDefinitionGroupName - The name of the network function definition group.
 * @param networkFunctionDefinitionVersionName - The name of the network function definition version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionDefinitionVersionsUpdateState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionDefinitionVersionsUpdateStateInput,
    outputSchema: NetworkFunctionDefinitionVersionsUpdateStateOutput,
  }));
// Input Schema
export interface NetworkFunctionsCreateOrUpdateInput {
  resourceGroupName: string;
  networkFunctionName: string;
  subscriptionId: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    publisherName?: string;
    publisherScope?: "Unknown" | "Private";
    networkFunctionDefinitionGroupName?: string;
    networkFunctionDefinitionVersion?: string;
    networkFunctionDefinitionOfferingLocation?: string;
    networkFunctionDefinitionVersionResourceReference?: {
      idType: "Unknown" | "Open" | "Secret";
    };
    nfviType?:
      | "Unknown"
      | "AzureArcKubernetes"
      | "AzureCore"
      | "AzureOperatorNexus";
    nfviId?: string;
    allowSoftwareUpdate?: boolean;
    configurationType: "Unknown" | "Secret" | "Open";
    roleOverrideValues?: string[];
  };
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkFunctionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFunctionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        publisherName: Schema.optional(Schema.String),
        publisherScope: Schema.optional(
          Schema.Literals(["Unknown", "Private"]),
        ),
        networkFunctionDefinitionGroupName: Schema.optional(Schema.String),
        networkFunctionDefinitionVersion: Schema.optional(Schema.String),
        networkFunctionDefinitionOfferingLocation: Schema.optional(
          Schema.String,
        ),
        networkFunctionDefinitionVersionResourceReference: Schema.optional(
          Schema.Struct({
            idType: Schema.Literals(["Unknown", "Open", "Secret"]),
          }),
        ),
        nfviType: Schema.optional(
          Schema.Literals([
            "Unknown",
            "AzureArcKubernetes",
            "AzureCore",
            "AzureOperatorNexus",
          ]),
        ),
        nfviId: Schema.optional(Schema.String),
        allowSoftwareUpdate: Schema.optional(Schema.Boolean),
        configurationType: Schema.Literals(["Unknown", "Secret", "Open"]),
        roleOverrideValues: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionsCreateOrUpdateInput>;

// Output Schema
export interface NetworkFunctionsCreateOrUpdateOutput {
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
export const NetworkFunctionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkFunctionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a network function resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFunctionName - Resource name for the network function resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionsCreateOrUpdateInput,
    outputSchema: NetworkFunctionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NetworkFunctionsDeleteInput {
  resourceGroupName: string;
  networkFunctionName: string;
  subscriptionId: string;
}
export const NetworkFunctionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFunctionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionsDeleteInput>;

// Output Schema
export type NetworkFunctionsDeleteOutput = void;
export const NetworkFunctionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkFunctionsDeleteOutput>;

// The operation
/**
 * Deletes the specified network function resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFunctionName - The name of the network function.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFunctionsDeleteInput,
    outputSchema: NetworkFunctionsDeleteOutput,
  }),
);
// Input Schema
export interface NetworkFunctionsExecuteRequestInput {
  resourceGroupName: string;
  networkFunctionName: string;
  subscriptionId: string;
  serviceEndpoint: string;
  requestMetadata: {
    relativePath: string;
    httpMethod: "Unknown" | "Post" | "Put" | "Get" | "Patch" | "Delete";
    serializedBody: string;
    apiVersion?: string;
  };
}
export const NetworkFunctionsExecuteRequestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFunctionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    serviceEndpoint: Schema.String,
    requestMetadata: Schema.Struct({
      relativePath: Schema.String,
      httpMethod: Schema.Literals([
        "Unknown",
        "Post",
        "Put",
        "Get",
        "Patch",
        "Delete",
      ]),
      serializedBody: Schema.String,
      apiVersion: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}/executeRequest",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionsExecuteRequestInput>;

// Output Schema
export type NetworkFunctionsExecuteRequestOutput = void;
export const NetworkFunctionsExecuteRequestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkFunctionsExecuteRequestOutput>;

// The operation
/**
 * Execute a request to services on a containerized network function.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFunctionName - The name of the network function.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkFunctionsExecuteRequest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionsExecuteRequestInput,
    outputSchema: NetworkFunctionsExecuteRequestOutput,
  }));
// Input Schema
export interface NetworkFunctionsGetInput {
  resourceGroupName: string;
  networkFunctionName: string;
  subscriptionId: string;
}
export const NetworkFunctionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFunctionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionsGetInput>;

// Output Schema
export interface NetworkFunctionsGetOutput {
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
export const NetworkFunctionsGetOutput =
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
  }) as unknown as Schema.Codec<NetworkFunctionsGetOutput>;

// The operation
/**
 * Gets information about the specified network function resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFunctionName - The name of the network function resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkFunctionsGetInput,
  outputSchema: NetworkFunctionsGetOutput,
}));
// Input Schema
export interface NetworkFunctionsListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const NetworkFunctionsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionsListByResourceGroupInput>;

// Output Schema
export interface NetworkFunctionsListByResourceGroupOutput {
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
export const NetworkFunctionsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkFunctionsListByResourceGroupOutput>;

// The operation
/**
 * Lists all the network function resources in a resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionsListByResourceGroupInput,
    outputSchema: NetworkFunctionsListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkFunctionsListBySubscriptionInput {
  subscriptionId: string;
}
export const NetworkFunctionsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/networkFunctions",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionsListBySubscriptionInput>;

// Output Schema
export interface NetworkFunctionsListBySubscriptionOutput {
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
export const NetworkFunctionsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkFunctionsListBySubscriptionOutput>;

// The operation
/**
 * Lists all the network functions in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NetworkFunctionsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFunctionsListBySubscriptionInput,
    outputSchema: NetworkFunctionsListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkFunctionsUpdateTagsInput {
  resourceGroupName: string;
  networkFunctionName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const NetworkFunctionsUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFunctionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkFunctionsUpdateTagsInput>;

// Output Schema
export interface NetworkFunctionsUpdateTagsOutput {
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
export const NetworkFunctionsUpdateTagsOutput =
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
  }) as unknown as Schema.Codec<NetworkFunctionsUpdateTagsOutput>;

// The operation
/**
 * Updates the tags for the network function resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFunctionName - Resource name for the network function resource.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param tags - Resource tags.
 */
export const NetworkFunctionsUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFunctionsUpdateTagsInput,
    outputSchema: NetworkFunctionsUpdateTagsOutput,
  }),
);
// Input Schema
export interface NetworkServiceDesignGroupsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
  networkServiceDesignGroupName: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    description?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkServiceDesignGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        description: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkServiceDesignGroupsCreateOrUpdateInput>;

// Output Schema
export interface NetworkServiceDesignGroupsCreateOrUpdateOutput {
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
export const NetworkServiceDesignGroupsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkServiceDesignGroupsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a network service design group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkServiceDesignGroupName - The name of the network service design group.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkServiceDesignGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkServiceDesignGroupsCreateOrUpdateInput,
    outputSchema: NetworkServiceDesignGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NetworkServiceDesignGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
  networkServiceDesignGroupName: string;
}
export const NetworkServiceDesignGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkServiceDesignGroupsDeleteInput>;

// Output Schema
export type NetworkServiceDesignGroupsDeleteOutput = void;
export const NetworkServiceDesignGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkServiceDesignGroupsDeleteOutput>;

// The operation
/**
 * Deletes a specified network service design group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkServiceDesignGroupName - The name of the network service design group.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkServiceDesignGroupsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkServiceDesignGroupsDeleteInput,
    outputSchema: NetworkServiceDesignGroupsDeleteOutput,
  }));
// Input Schema
export interface NetworkServiceDesignGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
  networkServiceDesignGroupName: string;
}
export const NetworkServiceDesignGroupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkServiceDesignGroupsGetInput>;

// Output Schema
export interface NetworkServiceDesignGroupsGetOutput {
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
export const NetworkServiceDesignGroupsGetOutput =
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
  }) as unknown as Schema.Codec<NetworkServiceDesignGroupsGetOutput>;

// The operation
/**
 * Gets information about the specified networkServiceDesign group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkServiceDesignGroupName - The name of the network service design group.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkServiceDesignGroupsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkServiceDesignGroupsGetInput,
    outputSchema: NetworkServiceDesignGroupsGetOutput,
  }));
// Input Schema
export interface NetworkServiceDesignGroupsListByPublisherInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
}
export const NetworkServiceDesignGroupsListByPublisherInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkServiceDesignGroupsListByPublisherInput>;

// Output Schema
export interface NetworkServiceDesignGroupsListByPublisherOutput {
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
export const NetworkServiceDesignGroupsListByPublisherOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkServiceDesignGroupsListByPublisherOutput>;

// The operation
/**
 * Gets information of the network service design groups under a publisher.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkServiceDesignGroupsListByPublisher =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkServiceDesignGroupsListByPublisherInput,
    outputSchema: NetworkServiceDesignGroupsListByPublisherOutput,
  }));
// Input Schema
export interface NetworkServiceDesignGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
  networkServiceDesignGroupName: string;
  tags?: Record<string, string>;
}
export const NetworkServiceDesignGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkServiceDesignGroupsUpdateInput>;

// Output Schema
export interface NetworkServiceDesignGroupsUpdateOutput {
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
export const NetworkServiceDesignGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkServiceDesignGroupsUpdateOutput>;

// The operation
/**
 * Updates a network service design groups resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkServiceDesignGroupName - The name of the network service design group.
 * @param api-version - The API version to use for this operation.
 * @param tags - Resource tags.
 */
export const NetworkServiceDesignGroupsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkServiceDesignGroupsUpdateInput,
    outputSchema: NetworkServiceDesignGroupsUpdateOutput,
  }));
// Input Schema
export interface NetworkServiceDesignVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
  networkServiceDesignGroupName: string;
  networkServiceDesignVersionName: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    versionState?: "Unknown" | "Preview" | "Active" | "Deprecated";
    description?: string;
    configurationGroupSchemaReferences?: Record<string, { id?: string }>;
    nfvisFromSite?: Record<string, { name?: string; type?: string }>;
    resourceElementTemplates?: {
      name?: string;
      type: "Unknown" | "ArmResourceDefinition" | "NetworkFunctionDefinition";
      dependsOnProfile?: {
        installDependsOn?: string[];
        uninstallDependsOn?: string[];
        updateDependsOn?: string[];
      };
    }[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkServiceDesignVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignGroupName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        versionState: Schema.optional(
          Schema.Literals(["Unknown", "Preview", "Active", "Deprecated"]),
        ),
        description: Schema.optional(Schema.String),
        configurationGroupSchemaReferences: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        nfvisFromSite: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        resourceElementTemplates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              type: Schema.Literals([
                "Unknown",
                "ArmResourceDefinition",
                "NetworkFunctionDefinition",
              ]),
              dependsOnProfile: Schema.optional(
                Schema.Struct({
                  installDependsOn: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  uninstallDependsOn: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  updateDependsOn: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkServiceDesignVersionsCreateOrUpdateInput>;

// Output Schema
export interface NetworkServiceDesignVersionsCreateOrUpdateOutput {
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
export const NetworkServiceDesignVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkServiceDesignVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a network service design version.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkServiceDesignGroupName - The name of the network service design group.
 * @param networkServiceDesignVersionName - The name of the network service design version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkServiceDesignVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkServiceDesignVersionsCreateOrUpdateInput,
    outputSchema: NetworkServiceDesignVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NetworkServiceDesignVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
  networkServiceDesignGroupName: string;
  networkServiceDesignVersionName: string;
}
export const NetworkServiceDesignVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignGroupName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkServiceDesignVersionsDeleteInput>;

// Output Schema
export type NetworkServiceDesignVersionsDeleteOutput = void;
export const NetworkServiceDesignVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkServiceDesignVersionsDeleteOutput>;

// The operation
/**
 * Deletes the specified network service design version.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkServiceDesignGroupName - The name of the network service design group.
 * @param networkServiceDesignVersionName - The name of the network service design version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkServiceDesignVersionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkServiceDesignVersionsDeleteInput,
    outputSchema: NetworkServiceDesignVersionsDeleteOutput,
  }));
// Input Schema
export interface NetworkServiceDesignVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
  networkServiceDesignGroupName: string;
  networkServiceDesignVersionName: string;
}
export const NetworkServiceDesignVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignGroupName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkServiceDesignVersionsGetInput>;

// Output Schema
export interface NetworkServiceDesignVersionsGetOutput {
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
export const NetworkServiceDesignVersionsGetOutput =
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
  }) as unknown as Schema.Codec<NetworkServiceDesignVersionsGetOutput>;

// The operation
/**
 * Gets information about a network service design version.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkServiceDesignGroupName - The name of the network service design group.
 * @param networkServiceDesignVersionName - The name of the network service design version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkServiceDesignVersionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkServiceDesignVersionsGetInput,
    outputSchema: NetworkServiceDesignVersionsGetOutput,
  }));
// Input Schema
export interface NetworkServiceDesignVersionsListByNetworkServiceDesignGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
  networkServiceDesignGroupName: string;
}
export const NetworkServiceDesignVersionsListByNetworkServiceDesignGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkServiceDesignVersionsListByNetworkServiceDesignGroupInput>;

// Output Schema
export interface NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOutput {
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
export const NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOutput>;

// The operation
/**
 * Gets information about a list of network service design versions under a network service design group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkServiceDesignGroupName - The name of the network service design group.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkServiceDesignVersionsListByNetworkServiceDesignGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkServiceDesignVersionsListByNetworkServiceDesignGroupInput,
    outputSchema:
      NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOutput,
  }));
// Input Schema
export interface NetworkServiceDesignVersionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
  networkServiceDesignGroupName: string;
  networkServiceDesignVersionName: string;
  tags?: Record<string, string>;
}
export const NetworkServiceDesignVersionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignGroupName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignVersionName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkServiceDesignVersionsUpdateInput>;

// Output Schema
export interface NetworkServiceDesignVersionsUpdateOutput {
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
export const NetworkServiceDesignVersionsUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkServiceDesignVersionsUpdateOutput>;

// The operation
/**
 * Updates a network service design version resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkServiceDesignGroupName - The name of the network service design group.
 * @param networkServiceDesignVersionName - The name of the network service design version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
 * @param api-version - The API version to use for this operation.
 * @param tags - Resource tags.
 */
export const NetworkServiceDesignVersionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkServiceDesignVersionsUpdateInput,
    outputSchema: NetworkServiceDesignVersionsUpdateOutput,
  }));
// Input Schema
export interface NetworkServiceDesignVersionsUpdateStateInput {
  subscriptionId: string;
  resourceGroupName: string;
  publisherName: string;
  networkServiceDesignGroupName: string;
  networkServiceDesignVersionName: string;
  versionState?: "Unknown" | "Preview" | "Active" | "Deprecated";
}
export const NetworkServiceDesignVersionsUpdateStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignGroupName: Schema.String.pipe(T.PathParam()),
    networkServiceDesignVersionName: Schema.String.pipe(T.PathParam()),
    versionState: Schema.optional(
      Schema.Literals(["Unknown", "Preview", "Active", "Deprecated"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}/updateState",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<NetworkServiceDesignVersionsUpdateStateInput>;

// Output Schema
export interface NetworkServiceDesignVersionsUpdateStateOutput {
  versionState?: "Unknown" | "Preview" | "Active" | "Deprecated";
}
export const NetworkServiceDesignVersionsUpdateStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versionState: Schema.optional(
      Schema.Literals(["Unknown", "Preview", "Active", "Deprecated"]),
    ),
  }) as unknown as Schema.Codec<NetworkServiceDesignVersionsUpdateStateOutput>;

// The operation
/**
 * Update network service design version state.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param networkServiceDesignGroupName - The name of the network service design group.
 * @param networkServiceDesignVersionName - The name of the network service design version. The name should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
 * @param api-version - The API version to use for this operation.
 */
export const NetworkServiceDesignVersionsUpdateState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkServiceDesignVersionsUpdateStateInput,
    outputSchema: NetworkServiceDesignVersionsUpdateStateOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HybridNetwork/operations",
    apiVersion: "2024-04-15",
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
 * Gets a list of the operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ProxyArtifactGetInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
  artifactName: string;
}
export const ProxyArtifactGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  publisherName: Schema.String.pipe(T.PathParam()),
  artifactStoreName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  artifactName: Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactVersions",
    apiVersion: "2024-04-15",
  }),
) as unknown as Schema.Codec<ProxyArtifactGetInput>;

// Output Schema
export interface ProxyArtifactGetOutput {
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
export const ProxyArtifactGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<ProxyArtifactGetOutput>;

// The operation
/**
 * Get a Artifact overview information.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param artifactName - The name of the artifact.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ProxyArtifactGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProxyArtifactGetInput,
  outputSchema: ProxyArtifactGetOutput,
}));
// Input Schema
export interface ProxyArtifactListInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  subscriptionId: string;
}
export const ProxyArtifactListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifacts",
    apiVersion: "2024-04-15",
  }),
) as unknown as Schema.Codec<ProxyArtifactListInput>;

// Output Schema
export interface ProxyArtifactListOutput {
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
export const ProxyArtifactListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ProxyArtifactListOutput>;

// The operation
/**
 * Lists all the available artifacts in the parent Artifact Store.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ProxyArtifactList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProxyArtifactListInput,
  outputSchema: ProxyArtifactListOutput,
}));
// Input Schema
export interface ProxyArtifactUpdateStateInput {
  resourceGroupName: string;
  publisherName: string;
  artifactStoreName: string;
  artifactVersionName: string;
  subscriptionId: string;
  artifactName: string;
  properties?: {
    artifactState?: "Unknown" | "Preview" | "Active" | "Deprecated";
  };
}
export const ProxyArtifactUpdateStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    artifactStoreName: Schema.String.pipe(T.PathParam()),
    artifactVersionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    artifactName: Schema.String,
    properties: Schema.optional(
      Schema.Struct({
        artifactState: Schema.optional(
          Schema.Literals(["Unknown", "Preview", "Active", "Deprecated"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/artifactStores/{artifactStoreName}/artifactVersions/{artifactVersionName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<ProxyArtifactUpdateStateInput>;

// Output Schema
export interface ProxyArtifactUpdateStateOutput {
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
export const ProxyArtifactUpdateStateOutput =
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
  }) as unknown as Schema.Codec<ProxyArtifactUpdateStateOutput>;

// The operation
/**
 * Change artifact state defined in artifact store.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param artifactStoreName - The name of the artifact store.
 * @param artifactName - The name of the artifact.
 * @param artifactVersionName - The name of the artifact version.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ProxyArtifactUpdateState = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProxyArtifactUpdateStateInput,
    outputSchema: ProxyArtifactUpdateStateOutput,
  }),
);
// Input Schema
export interface PublishersCreateOrUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  subscriptionId: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    scope?: "Unknown" | "Private";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  tags?: Record<string, string>;
  location: string;
}
export const PublishersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        scope: Schema.optional(Schema.Literals(["Unknown", "Private"])),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<PublishersCreateOrUpdateInput>;

// Output Schema
export interface PublishersCreateOrUpdateOutput {
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
export const PublishersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PublishersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a publisher.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PublishersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PublishersCreateOrUpdateInput,
    outputSchema: PublishersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface PublishersDeleteInput {
  resourceGroupName: string;
  publisherName: string;
  subscriptionId: string;
}
export const PublishersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  publisherName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}",
    apiVersion: "2024-04-15",
  }),
) as unknown as Schema.Codec<PublishersDeleteInput>;

// Output Schema
export type PublishersDeleteOutput = void;
export const PublishersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PublishersDeleteOutput>;

// The operation
/**
 * Deletes the specified publisher.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PublishersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PublishersDeleteInput,
  outputSchema: PublishersDeleteOutput,
}));
// Input Schema
export interface PublishersGetInput {
  resourceGroupName: string;
  publisherName: string;
  subscriptionId: string;
}
export const PublishersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  publisherName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}",
    apiVersion: "2024-04-15",
  }),
) as unknown as Schema.Codec<PublishersGetInput>;

// Output Schema
export interface PublishersGetOutput {
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
export const PublishersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PublishersGetOutput>;

// The operation
/**
 * Gets information about the specified publisher.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PublishersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PublishersGetInput,
  outputSchema: PublishersGetOutput,
}));
// Input Schema
export interface PublishersListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const PublishersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<PublishersListByResourceGroupInput>;

// Output Schema
export interface PublishersListByResourceGroupOutput {
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
export const PublishersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PublishersListByResourceGroupOutput>;

// The operation
/**
 * Lists all the publishers in a resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PublishersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PublishersListByResourceGroupInput,
    outputSchema: PublishersListByResourceGroupOutput,
  }));
// Input Schema
export interface PublishersListBySubscriptionInput {
  subscriptionId: string;
}
export const PublishersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/publishers",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<PublishersListBySubscriptionInput>;

// Output Schema
export interface PublishersListBySubscriptionOutput {
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
export const PublishersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PublishersListBySubscriptionOutput>;

// The operation
/**
 * Lists all the publishers in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PublishersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PublishersListBySubscriptionInput,
    outputSchema: PublishersListBySubscriptionOutput,
  }));
// Input Schema
export interface PublishersUpdateInput {
  resourceGroupName: string;
  publisherName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const PublishersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  publisherName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}",
    apiVersion: "2024-04-15",
  }),
) as unknown as Schema.Codec<PublishersUpdateInput>;

// Output Schema
export interface PublishersUpdateOutput {
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
export const PublishersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<PublishersUpdateOutput>;

// The operation
/**
 * Update a publisher resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publisherName - The name of the publisher.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param tags - Resource tags.
 */
export const PublishersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PublishersUpdateInput,
  outputSchema: PublishersUpdateOutput,
}));
// Input Schema
export interface SiteNetworkServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  siteNetworkServiceName: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    managedResourceGroupConfiguration?: { name?: string; location?: string };
    siteReference?: { id?: string };
    publisherName?: string;
    publisherScope?: "Unknown" | "Private";
    networkServiceDesignGroupName?: string;
    networkServiceDesignVersionName?: string;
    networkServiceDesignVersionOfferingLocation?: string;
    networkServiceDesignVersionResourceReference?: {
      idType: "Unknown" | "Open" | "Secret";
    };
    desiredStateConfigurationGroupValueReferences?: Record<
      string,
      { id?: string }
    >;
    lastStateNetworkServiceDesignVersionName?: string;
    lastStateConfigurationGroupValueReferences?: Record<
      string,
      { id?: string }
    >;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  sku?: { name: "Basic" | "Standard"; tier?: "Basic" | "Standard" };
  tags?: Record<string, string>;
  location: string;
}
export const SiteNetworkServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteNetworkServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        managedResourceGroupConfiguration: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            location: Schema.optional(Schema.String),
          }),
        ),
        siteReference: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        publisherName: Schema.optional(Schema.String),
        publisherScope: Schema.optional(
          Schema.Literals(["Unknown", "Private"]),
        ),
        networkServiceDesignGroupName: Schema.optional(Schema.String),
        networkServiceDesignVersionName: Schema.optional(Schema.String),
        networkServiceDesignVersionOfferingLocation: Schema.optional(
          Schema.String,
        ),
        networkServiceDesignVersionResourceReference: Schema.optional(
          Schema.Struct({
            idType: Schema.Literals(["Unknown", "Open", "Secret"]),
          }),
        ),
        desiredStateConfigurationGroupValueReferences: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        lastStateNetworkServiceDesignVersionName: Schema.optional(
          Schema.String,
        ),
        lastStateConfigurationGroupValueReferences: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["Basic", "Standard"]),
        tier: Schema.optional(Schema.Literals(["Basic", "Standard"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices/{siteNetworkServiceName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<SiteNetworkServicesCreateOrUpdateInput>;

// Output Schema
export interface SiteNetworkServicesCreateOrUpdateOutput {
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
export const SiteNetworkServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SiteNetworkServicesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a network site.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param siteNetworkServiceName - The name of the site network service.
 */
export const SiteNetworkServicesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SiteNetworkServicesCreateOrUpdateInput,
    outputSchema: SiteNetworkServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SiteNetworkServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  siteNetworkServiceName: string;
}
export const SiteNetworkServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteNetworkServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices/{siteNetworkServiceName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<SiteNetworkServicesDeleteInput>;

// Output Schema
export type SiteNetworkServicesDeleteOutput = void;
export const SiteNetworkServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SiteNetworkServicesDeleteOutput>;

// The operation
/**
 * Deletes the specified site network service.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param siteNetworkServiceName - The name of the site network service.
 */
export const SiteNetworkServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SiteNetworkServicesDeleteInput,
    outputSchema: SiteNetworkServicesDeleteOutput,
  }),
);
// Input Schema
export interface SiteNetworkServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  siteNetworkServiceName: string;
}
export const SiteNetworkServicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteNetworkServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices/{siteNetworkServiceName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<SiteNetworkServicesGetInput>;

// Output Schema
export interface SiteNetworkServicesGetOutput {
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
export const SiteNetworkServicesGetOutput =
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
  }) as unknown as Schema.Codec<SiteNetworkServicesGetOutput>;

// The operation
/**
 * Gets information about the specified site network service.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param siteNetworkServiceName - The name of the site network service.
 */
export const SiteNetworkServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SiteNetworkServicesGetInput,
    outputSchema: SiteNetworkServicesGetOutput,
  }),
);
// Input Schema
export interface SiteNetworkServicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SiteNetworkServicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<SiteNetworkServicesListByResourceGroupInput>;

// Output Schema
export interface SiteNetworkServicesListByResourceGroupOutput {
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
export const SiteNetworkServicesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SiteNetworkServicesListByResourceGroupOutput>;

// The operation
/**
 * Lists all site network services.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SiteNetworkServicesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SiteNetworkServicesListByResourceGroupInput,
    outputSchema: SiteNetworkServicesListByResourceGroupOutput,
  }));
// Input Schema
export interface SiteNetworkServicesListBySubscriptionInput {
  subscriptionId: string;
}
export const SiteNetworkServicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/siteNetworkServices",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<SiteNetworkServicesListBySubscriptionInput>;

// Output Schema
export interface SiteNetworkServicesListBySubscriptionOutput {
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
export const SiteNetworkServicesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SiteNetworkServicesListBySubscriptionOutput>;

// The operation
/**
 * Lists all sites in the network service in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SiteNetworkServicesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SiteNetworkServicesListBySubscriptionInput,
    outputSchema: SiteNetworkServicesListBySubscriptionOutput,
  }));
// Input Schema
export interface SiteNetworkServicesUpdateTagsInput {
  subscriptionId: string;
  resourceGroupName: string;
  siteNetworkServiceName: string;
  tags?: Record<string, string>;
}
export const SiteNetworkServicesUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteNetworkServiceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/siteNetworkServices/{siteNetworkServiceName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<SiteNetworkServicesUpdateTagsInput>;

// Output Schema
export interface SiteNetworkServicesUpdateTagsOutput {
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
export const SiteNetworkServicesUpdateTagsOutput =
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
  }) as unknown as Schema.Codec<SiteNetworkServicesUpdateTagsOutput>;

// The operation
/**
 * Updates a site update tags.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param siteNetworkServiceName - The name of the site network service.
 * @param tags - Resource tags.
 */
export const SiteNetworkServicesUpdateTags =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SiteNetworkServicesUpdateTagsInput,
    outputSchema: SiteNetworkServicesUpdateTagsOutput,
  }));
// Input Schema
export interface SitesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  siteName: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Accepted"
      | "Deleting"
      | "Failed"
      | "Canceled"
      | "Deleted"
      | "Converging";
    nfvis?: {
      name?: string;
      nfviType:
        | "Unknown"
        | "AzureArcKubernetes"
        | "AzureCore"
        | "AzureOperatorNexus";
    }[];
    siteNetworkServiceReferences?: { id?: string }[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const SitesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Accepted",
            "Deleting",
            "Failed",
            "Canceled",
            "Deleted",
            "Converging",
          ]),
        ),
        nfvis: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              nfviType: Schema.Literals([
                "Unknown",
                "AzureArcKubernetes",
                "AzureCore",
                "AzureOperatorNexus",
              ]),
            }),
          ),
        ),
        siteNetworkServiceReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites/{siteName}",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<SitesCreateOrUpdateInput>;

// Output Schema
export interface SitesCreateOrUpdateOutput {
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
export const SitesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SitesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a network site.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param siteName - The name of the network service site.
 */
export const SitesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SitesCreateOrUpdateInput,
  outputSchema: SitesCreateOrUpdateOutput,
}));
// Input Schema
export interface SitesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  siteName: string;
}
export const SitesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  siteName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites/{siteName}",
    apiVersion: "2024-04-15",
  }),
) as unknown as Schema.Codec<SitesDeleteInput>;

// Output Schema
export type SitesDeleteOutput = void;
export const SitesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SitesDeleteOutput>;

// The operation
/**
 * Deletes the specified network site.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param siteName - The name of the network service site.
 */
export const SitesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SitesDeleteInput,
  outputSchema: SitesDeleteOutput,
}));
// Input Schema
export interface SitesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  siteName: string;
}
export const SitesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  siteName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites/{siteName}",
    apiVersion: "2024-04-15",
  }),
) as unknown as Schema.Codec<SitesGetInput>;

// Output Schema
export interface SitesGetOutput {
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
export const SitesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SitesGetOutput>;

// The operation
/**
 * Gets information about the specified network site.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param siteName - The name of the network service site.
 */
export const SitesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SitesGetInput,
  outputSchema: SitesGetOutput,
}));
// Input Schema
export interface SitesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SitesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<SitesListByResourceGroupInput>;

// Output Schema
export interface SitesListByResourceGroupOutput {
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
export const SitesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SitesListByResourceGroupOutput>;

// The operation
/**
 * Lists all sites in the network service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SitesListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesListByResourceGroupInput,
    outputSchema: SitesListByResourceGroupOutput,
  }),
);
// Input Schema
export interface SitesListBySubscriptionInput {
  subscriptionId: string;
}
export const SitesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HybridNetwork/sites",
      apiVersion: "2024-04-15",
    }),
  ) as unknown as Schema.Codec<SitesListBySubscriptionInput>;

// Output Schema
export interface SitesListBySubscriptionOutput {
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
export const SitesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SitesListBySubscriptionOutput>;

// The operation
/**
 * Lists all sites in the network service in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SitesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesListBySubscriptionInput,
    outputSchema: SitesListBySubscriptionOutput,
  }),
);
// Input Schema
export interface SitesUpdateTagsInput {
  subscriptionId: string;
  resourceGroupName: string;
  siteName: string;
  tags?: Record<string, string>;
}
export const SitesUpdateTagsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  siteName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/sites/{siteName}",
    apiVersion: "2024-04-15",
  }),
) as unknown as Schema.Codec<SitesUpdateTagsInput>;

// Output Schema
export interface SitesUpdateTagsOutput {
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
export const SitesUpdateTagsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SitesUpdateTagsOutput>;

// The operation
/**
 * Updates a site update tags.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param siteName - The name of the network service site.
 * @param tags - Resource tags.
 */
export const SitesUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SitesUpdateTagsInput,
  outputSchema: SitesUpdateTagsOutput,
}));
