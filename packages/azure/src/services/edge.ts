/**
 * Azure Edge API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ArtifactsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  imageName: string;
  artifactName: string;
}
export const ArtifactsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  imageName: Schema.String.pipe(T.PathParam()),
  artifactName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}/images/{imageName}/artifacts/{artifactName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<ArtifactsGetInput>;

// Output Schema
export interface ArtifactsGetOutput {
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
export const ArtifactsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ArtifactsGetOutput>;

// The operation
/**
 * Get the resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 * @param imageName - The name of the Image
 * @param artifactName - The name of the Artifact
 */
export const ArtifactsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArtifactsGetInput,
  outputSchema: ArtifactsGetOutput,
}));
// Input Schema
export interface ArtifactsListByParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  imageName: string;
}
export const ArtifactsListByParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    imageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}/images/{imageName}/artifacts",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<ArtifactsListByParentInput>;

// Output Schema
export interface ArtifactsListByParentOutput {
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
export const ArtifactsListByParentOutput =
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
  }) as unknown as Schema.Codec<ArtifactsListByParentOutput>;

// The operation
/**
 * List by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 * @param imageName - The name of the Image
 */
export const ArtifactsListByParent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArtifactsListByParentInput,
    outputSchema: ArtifactsListByParentOutput,
  }),
);
// Input Schema
export interface ArtifactsListDownloadUriInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  imageName: string;
  artifactName: string;
}
export const ArtifactsListDownloadUriInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    imageName: Schema.String.pipe(T.PathParam()),
    artifactName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}/images/{imageName}/artifacts/{artifactName}/listDownloadUri",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<ArtifactsListDownloadUriInput>;

// Output Schema
export interface ArtifactsListDownloadUriOutput {
  provisioningState?: "Succeeded" | "Failed" | "Canceled";
  artifactOrder: number;
  title: string;
  description: string;
  size?: number;
  downloadLink: string;
  linkExpiry: string;
}
export const ArtifactsListDownloadUriOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.Literals(["Succeeded", "Failed", "Canceled"]),
    ),
    artifactOrder: Schema.Number,
    title: Schema.String,
    description: Schema.String,
    size: Schema.optional(Schema.Number),
    downloadLink: Schema.String,
    linkExpiry: Schema.String,
  }) as unknown as Schema.Codec<ArtifactsListDownloadUriOutput>;

// The operation
/**
 * Get artifact download link.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 * @param imageName - The name of the Image
 * @param artifactName - The name of the Artifact
 */
export const ArtifactsListDownloadUri = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArtifactsListDownloadUriInput,
    outputSchema: ArtifactsListDownloadUriOutput,
  }),
);
// Input Schema
export interface ConfigTemplateMetadatasCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  configTemplateMetadataName: string;
  properties?: {
    contextId?: string;
    linkedHierarchies?: { hierarchyIds?: string[]; level?: string }[];
    unLinkedHierarchies?: { hierarchyIds?: string[]; level?: string }[];
    templateUniqueIdentifier?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  eTag?: string;
}
export const ConfigTemplateMetadatasCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    configTemplateMetadataName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        contextId: Schema.optional(Schema.String),
        linkedHierarchies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hierarchyIds: Schema.optional(Schema.Array(Schema.String)),
              level: Schema.optional(Schema.String),
            }),
          ),
        ),
        unLinkedHierarchies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hierarchyIds: Schema.optional(Schema.Array(Schema.String)),
              level: Schema.optional(Schema.String),
            }),
          ),
        ),
        templateUniqueIdentifier: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/configTemplateMetadatas/{configTemplateMetadataName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateMetadatasCreateOrUpdateInput>;

// Output Schema
export interface ConfigTemplateMetadatasCreateOrUpdateOutput {
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
export const ConfigTemplateMetadatasCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplateMetadatasCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a ConfigTemplateMetadata Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 * @param configTemplateMetadataName - The name of the ConfigTemplateMetadataProperties
 */
export const ConfigTemplateMetadatasCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplateMetadatasCreateOrUpdateInput,
    outputSchema: ConfigTemplateMetadatasCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigTemplateMetadatasDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  configTemplateMetadataName: string;
}
export const ConfigTemplateMetadatasDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    configTemplateMetadataName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/configTemplateMetadatas/{configTemplateMetadataName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateMetadatasDeleteInput>;

// Output Schema
export type ConfigTemplateMetadatasDeleteOutput = void;
export const ConfigTemplateMetadatasDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigTemplateMetadatasDeleteOutput>;

// The operation
/**
 * Delete a ConfigTemplateMetadata Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 * @param configTemplateMetadataName - The name of the ConfigTemplateMetadataProperties
 */
export const ConfigTemplateMetadatasDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplateMetadatasDeleteInput,
    outputSchema: ConfigTemplateMetadatasDeleteOutput,
  }));
// Input Schema
export interface ConfigTemplateMetadatasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  configTemplateMetadataName: string;
}
export const ConfigTemplateMetadatasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    configTemplateMetadataName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/configTemplateMetadatas/{configTemplateMetadataName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateMetadatasGetInput>;

// Output Schema
export interface ConfigTemplateMetadatasGetOutput {
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
export const ConfigTemplateMetadatasGetOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplateMetadatasGetOutput>;

// The operation
/**
 * Get a ConfigTemplateMetadata Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 * @param configTemplateMetadataName - The name of the ConfigTemplateMetadataProperties
 */
export const ConfigTemplateMetadatasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigTemplateMetadatasGetInput,
    outputSchema: ConfigTemplateMetadatasGetOutput,
  }),
);
// Input Schema
export interface ConfigTemplateMetadatasListByConfigTemplateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
}
export const ConfigTemplateMetadatasListByConfigTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/configTemplateMetadatas",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateMetadatasListByConfigTemplateInput>;

// Output Schema
export interface ConfigTemplateMetadatasListByConfigTemplateOutput {
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
export const ConfigTemplateMetadatasListByConfigTemplateOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplateMetadatasListByConfigTemplateOutput>;

// The operation
/**
 * List by ConfigTemplate
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 */
export const ConfigTemplateMetadatasListByConfigTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplateMetadatasListByConfigTemplateInput,
    outputSchema: ConfigTemplateMetadatasListByConfigTemplateOutput,
  }));
// Input Schema
export interface ConfigTemplateMetadatasUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  configTemplateMetadataName: string;
  properties?: {
    contextId?: string;
    linkedHierarchies?: { hierarchyIds?: string[]; level?: string }[];
    unLinkedHierarchies?: { hierarchyIds?: string[]; level?: string }[];
  };
}
export const ConfigTemplateMetadatasUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    configTemplateMetadataName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        contextId: Schema.optional(Schema.String),
        linkedHierarchies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hierarchyIds: Schema.optional(Schema.Array(Schema.String)),
              level: Schema.optional(Schema.String),
            }),
          ),
        ),
        unLinkedHierarchies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hierarchyIds: Schema.optional(Schema.Array(Schema.String)),
              level: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/configTemplateMetadatas/{configTemplateMetadataName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateMetadatasUpdateInput>;

// Output Schema
export interface ConfigTemplateMetadatasUpdateOutput {
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
export const ConfigTemplateMetadatasUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplateMetadatasUpdateOutput>;

// The operation
/**
 * Update a ConfigTemplateMetadata Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 * @param configTemplateMetadataName - The name of the ConfigTemplateMetadataProperties
 */
export const ConfigTemplateMetadatasUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplateMetadatasUpdateInput,
    outputSchema: ConfigTemplateMetadatasUpdateOutput,
  }));
// Input Schema
export interface ConfigTemplateSchemasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  configTemplateVersionName: string;
  configTemplateSchemaName: string;
}
export const ConfigTemplateSchemasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    configTemplateVersionName: Schema.String.pipe(T.PathParam()),
    configTemplateSchemaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/versions/{configTemplateVersionName}/configTemplateSchemas/{configTemplateSchemaName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateSchemasGetInput>;

// Output Schema
export interface ConfigTemplateSchemasGetOutput {
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
export const ConfigTemplateSchemasGetOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplateSchemasGetOutput>;

// The operation
/**
 * Get a ConfigTemplateSchema Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 * @param configTemplateVersionName - The name of the ConfigTemplateVersion
 * @param configTemplateSchemaName - The name of the ConfigTemplateSchemaProperties
 */
export const ConfigTemplateSchemasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigTemplateSchemasGetInput,
    outputSchema: ConfigTemplateSchemasGetOutput,
  }),
);
// Input Schema
export interface ConfigTemplateSchemasListByConfigTemplateVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  configTemplateVersionName: string;
}
export const ConfigTemplateSchemasListByConfigTemplateVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    configTemplateVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/versions/{configTemplateVersionName}/configTemplateSchemas",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateSchemasListByConfigTemplateVersionInput>;

// Output Schema
export interface ConfigTemplateSchemasListByConfigTemplateVersionOutput {
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
export const ConfigTemplateSchemasListByConfigTemplateVersionOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplateSchemasListByConfigTemplateVersionOutput>;

// The operation
/**
 * List by ConfigTemplateVersion
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 * @param configTemplateVersionName - The name of the ConfigTemplateVersion
 */
export const ConfigTemplateSchemasListByConfigTemplateVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplateSchemasListByConfigTemplateVersionInput,
    outputSchema: ConfigTemplateSchemasListByConfigTemplateVersionOutput,
  }));
// Input Schema
export interface ConfigTemplatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  properties?: {
    uniqueIdentifier?: string;
    description: string;
    latestVersion?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  eTag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const ConfigTemplatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uniqueIdentifier: Schema.optional(Schema.String),
        description: Schema.String,
        latestVersion: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplatesCreateOrUpdateInput>;

// Output Schema
export interface ConfigTemplatesCreateOrUpdateOutput {
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
export const ConfigTemplatesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplatesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Config Template Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 */
export const ConfigTemplatesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplatesCreateOrUpdateInput,
    outputSchema: ConfigTemplatesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigTemplatesCreateVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  updateType?: "Major" | "Minor" | "Patch";
  version?: string;
  configTemplateVersion: {
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
  };
}
export const ConfigTemplatesCreateVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    updateType: Schema.optional(Schema.Literals(["Major", "Minor", "Patch"])),
    version: Schema.optional(Schema.String),
    configTemplateVersion: Schema.Struct({
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/createVersion",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplatesCreateVersionInput>;

// Output Schema
export interface ConfigTemplatesCreateVersionOutput {
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
export const ConfigTemplatesCreateVersionOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplatesCreateVersionOutput>;

// The operation
/**
 * Create or update a Config Template Version Resource with the specified UpdateType
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 */
export const ConfigTemplatesCreateVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplatesCreateVersionInput,
    outputSchema: ConfigTemplatesCreateVersionOutput,
  }));
// Input Schema
export interface ConfigTemplatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
}
export const ConfigTemplatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplatesDeleteInput>;

// Output Schema
export type ConfigTemplatesDeleteOutput = void;
export const ConfigTemplatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigTemplatesDeleteOutput>;

// The operation
/**
 * Delete a Config Template Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 */
export const ConfigTemplatesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigTemplatesDeleteInput,
    outputSchema: ConfigTemplatesDeleteOutput,
  }),
);
// Input Schema
export interface ConfigTemplatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
}
export const ConfigTemplatesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplatesGetInput>;

// Output Schema
export interface ConfigTemplatesGetOutput {
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
export const ConfigTemplatesGetOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplatesGetOutput>;

// The operation
/**
 * Get a Config Template Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 */
export const ConfigTemplatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConfigTemplatesGetInput,
  outputSchema: ConfigTemplatesGetOutput,
}));
// Input Schema
export interface ConfigTemplatesLinkToHierarchiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  contextId: string;
  hierarchyIds?: string[];
  level?: string;
}
export const ConfigTemplatesLinkToHierarchiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    contextId: Schema.String,
    hierarchyIds: Schema.optional(Schema.Array(Schema.String)),
    level: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/linkToHierarchies",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplatesLinkToHierarchiesInput>;

// Output Schema
export type ConfigTemplatesLinkToHierarchiesOutput = void;
export const ConfigTemplatesLinkToHierarchiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigTemplatesLinkToHierarchiesOutput>;

// The operation
/**
 * Apply a Config Template to a particular hierarchy node
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 */
export const ConfigTemplatesLinkToHierarchies =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplatesLinkToHierarchiesInput,
    outputSchema: ConfigTemplatesLinkToHierarchiesOutput,
  }));
// Input Schema
export interface ConfigTemplatesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ConfigTemplatesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplatesListByResourceGroupInput>;

// Output Schema
export interface ConfigTemplatesListByResourceGroupOutput {
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
export const ConfigTemplatesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplatesListByResourceGroupOutput>;

// The operation
/**
 * List by specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ConfigTemplatesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplatesListByResourceGroupInput,
    outputSchema: ConfigTemplatesListByResourceGroupOutput,
  }));
// Input Schema
export interface ConfigTemplatesListBySubscriptionInput {
  subscriptionId: string;
}
export const ConfigTemplatesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/configTemplates",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplatesListBySubscriptionInput>;

// Output Schema
export interface ConfigTemplatesListBySubscriptionOutput {
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
export const ConfigTemplatesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplatesListBySubscriptionOutput>;

// The operation
/**
 * List by subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ConfigTemplatesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplatesListBySubscriptionInput,
    outputSchema: ConfigTemplatesListBySubscriptionOutput,
  }));
// Input Schema
export interface ConfigTemplatesRemoveVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  version: string;
}
export const ConfigTemplatesRemoveVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    version: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/removeVersion",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplatesRemoveVersionInput>;

// Output Schema
export interface ConfigTemplatesRemoveVersionOutput {
  status: string;
}
export const ConfigTemplatesRemoveVersionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.String,
  }) as unknown as Schema.Codec<ConfigTemplatesRemoveVersionOutput>;

// The operation
/**
 * Remove Config Template Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 */
export const ConfigTemplatesRemoveVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplatesRemoveVersionInput,
    outputSchema: ConfigTemplatesRemoveVersionOutput,
  }));
// Input Schema
export interface ConfigTemplatesUnLinkFromHierarchiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  contextId: string;
  hierarchyIds?: string[];
  level?: string;
}
export const ConfigTemplatesUnLinkFromHierarchiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    contextId: Schema.String,
    hierarchyIds: Schema.optional(Schema.Array(Schema.String)),
    level: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/unLinkFromHierarchies",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplatesUnLinkFromHierarchiesInput>;

// Output Schema
export type ConfigTemplatesUnLinkFromHierarchiesOutput = void;
export const ConfigTemplatesUnLinkFromHierarchiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigTemplatesUnLinkFromHierarchiesOutput>;

// The operation
/**
 * Remove a Config Template from a particular hierarchy node
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 */
export const ConfigTemplatesUnLinkFromHierarchies =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplatesUnLinkFromHierarchiesInput,
    outputSchema: ConfigTemplatesUnLinkFromHierarchiesOutput,
  }));
// Input Schema
export interface ConfigTemplatesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  tags?: Record<string, string>;
  properties?: { description?: string };
}
export const ConfigTemplatesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplatesUpdateInput>;

// Output Schema
export interface ConfigTemplatesUpdateOutput {
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
export const ConfigTemplatesUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplatesUpdateOutput>;

// The operation
/**
 * update a Config Template Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 */
export const ConfigTemplatesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigTemplatesUpdateInput,
    outputSchema: ConfigTemplatesUpdateOutput,
  }),
);
// Input Schema
export interface ConfigTemplateVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  configTemplateVersionName: string;
  properties?: {
    configurations: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  eTag?: string;
}
export const ConfigTemplateVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    configTemplateVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configurations: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/versions/{configTemplateVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateVersionsCreateOrUpdateInput>;

// Output Schema
export interface ConfigTemplateVersionsCreateOrUpdateOutput {
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
export const ConfigTemplateVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplateVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Config Template Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 * @param configTemplateVersionName - The name of the ConfigTemplateVersion
 */
export const ConfigTemplateVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplateVersionsCreateOrUpdateInput,
    outputSchema: ConfigTemplateVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigTemplateVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  configTemplateVersionName: string;
}
export const ConfigTemplateVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    configTemplateVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/versions/{configTemplateVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateVersionsDeleteInput>;

// Output Schema
export type ConfigTemplateVersionsDeleteOutput = void;
export const ConfigTemplateVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigTemplateVersionsDeleteOutput>;

// The operation
/**
 * Delete a Config Template Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 * @param configTemplateVersionName - The name of the ConfigTemplateVersion
 */
export const ConfigTemplateVersionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplateVersionsDeleteInput,
    outputSchema: ConfigTemplateVersionsDeleteOutput,
  }));
// Input Schema
export interface ConfigTemplateVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  configTemplateVersionName: string;
}
export const ConfigTemplateVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    configTemplateVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/versions/{configTemplateVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateVersionsGetInput>;

// Output Schema
export interface ConfigTemplateVersionsGetOutput {
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
export const ConfigTemplateVersionsGetOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplateVersionsGetOutput>;

// The operation
/**
 * Get a Config Template Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 * @param configTemplateVersionName - The name of the ConfigTemplateVersion
 */
export const ConfigTemplateVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigTemplateVersionsGetInput,
    outputSchema: ConfigTemplateVersionsGetOutput,
  }),
);
// Input Schema
export interface ConfigTemplateVersionsListByConfigTemplateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
}
export const ConfigTemplateVersionsListByConfigTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateVersionsListByConfigTemplateInput>;

// Output Schema
export interface ConfigTemplateVersionsListByConfigTemplateOutput {
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
export const ConfigTemplateVersionsListByConfigTemplateOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplateVersionsListByConfigTemplateOutput>;

// The operation
/**
 * List Config Template Version Resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 */
export const ConfigTemplateVersionsListByConfigTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplateVersionsListByConfigTemplateInput,
    outputSchema: ConfigTemplateVersionsListByConfigTemplateOutput,
  }));
// Input Schema
export interface ConfigTemplateVersionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configTemplateName: string;
  configTemplateVersionName: string;
  properties?: { configurations?: string };
}
export const ConfigTemplateVersionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configTemplateName: Schema.String.pipe(T.PathParam()),
    configTemplateVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configurations: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/versions/{configTemplateVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ConfigTemplateVersionsUpdateInput>;

// Output Schema
export interface ConfigTemplateVersionsUpdateOutput {
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
export const ConfigTemplateVersionsUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigTemplateVersionsUpdateOutput>;

// The operation
/**
 * Update a Config Template Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configTemplateName - The name of the ConfigTemplate
 * @param configTemplateVersionName - The name of the ConfigTemplateVersion
 */
export const ConfigTemplateVersionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigTemplateVersionsUpdateInput,
    outputSchema: ConfigTemplateVersionsUpdateOutput,
  }));
// Input Schema
export interface ConfigurationReferencesCreateOrUpdateInput {
  resourceUri: string;
  configurationReferenceName: string;
  properties?: {
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    configurationResourceId?: string;
  };
}
export const ConfigurationReferencesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    configurationReferenceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        configurationResourceId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.Edge/configurationReferences/{configurationReferenceName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationReferencesCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationReferencesCreateOrUpdateOutput {
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
export const ConfigurationReferencesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationReferencesCreateOrUpdateOutput>;

// The operation
/**
 * Create a ConfigurationReference
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param configurationReferenceName - The name of the ConfigurationReference
 */
export const ConfigurationReferencesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationReferencesCreateOrUpdateInput,
    outputSchema: ConfigurationReferencesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationReferencesDeleteInput {
  resourceUri: string;
  configurationReferenceName: string;
}
export const ConfigurationReferencesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    configurationReferenceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.Edge/configurationReferences/{configurationReferenceName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationReferencesDeleteInput>;

// Output Schema
export type ConfigurationReferencesDeleteOutput = void;
export const ConfigurationReferencesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationReferencesDeleteOutput>;

// The operation
/**
 * Delete a ConfigurationReference
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param configurationReferenceName - The name of the ConfigurationReference
 */
export const ConfigurationReferencesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationReferencesDeleteInput,
    outputSchema: ConfigurationReferencesDeleteOutput,
  }));
// Input Schema
export interface ConfigurationReferencesGetInput {
  resourceUri: string;
  configurationReferenceName: string;
}
export const ConfigurationReferencesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    configurationReferenceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/configurationReferences/{configurationReferenceName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationReferencesGetInput>;

// Output Schema
export interface ConfigurationReferencesGetOutput {
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
export const ConfigurationReferencesGetOutput =
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
  }) as unknown as Schema.Codec<ConfigurationReferencesGetOutput>;

// The operation
/**
 * Get a ConfigurationReference
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param configurationReferenceName - The name of the ConfigurationReference
 */
export const ConfigurationReferencesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationReferencesGetInput,
    outputSchema: ConfigurationReferencesGetOutput,
  }),
);
// Input Schema
export interface ConfigurationReferencesListInput {
  resourceUri: string;
}
export const ConfigurationReferencesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/configurationReferences",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationReferencesListInput>;

// Output Schema
export interface ConfigurationReferencesListOutput {
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
export const ConfigurationReferencesListOutput =
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
  }) as unknown as Schema.Codec<ConfigurationReferencesListOutput>;

// The operation
/**
 * List ConfigurationReference resources by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const ConfigurationReferencesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationReferencesListInput,
    outputSchema: ConfigurationReferencesListOutput,
  }),
);
// Input Schema
export interface ConfigurationReferencesUpdateInput {
  resourceUri: string;
  configurationReferenceName: string;
  properties?: {
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    configurationResourceId?: string;
  };
}
export const ConfigurationReferencesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    configurationReferenceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        configurationResourceId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{resourceUri}/providers/Microsoft.Edge/configurationReferences/{configurationReferenceName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationReferencesUpdateInput>;

// Output Schema
export interface ConfigurationReferencesUpdateOutput {
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
export const ConfigurationReferencesUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationReferencesUpdateOutput>;

// The operation
/**
 * Update a ConfigurationReference
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param configurationReferenceName - The name of the ConfigurationReference
 */
export const ConfigurationReferencesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationReferencesUpdateInput,
    outputSchema: ConfigurationReferencesUpdateOutput,
  }));
// Input Schema
export interface ConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
  properties?: { provisioningState?: "Succeeded" | "Failed" | "Canceled" };
  tags?: Record<string, string>;
  location: string;
}
export const ConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationsCreateOrUpdateOutput {
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
export const ConfigurationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Configuration Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 */
export const ConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsCreateOrUpdateInput,
    outputSchema: ConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
}
export const ConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsDeleteInput>;

// Output Schema
export type ConfigurationsDeleteOutput = void;
export const ConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationsDeleteOutput>;

// The operation
/**
 * Delete a Configuration Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 */
export const ConfigurationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationsDeleteInput,
    outputSchema: ConfigurationsDeleteOutput,
  }),
);
// Input Schema
export interface ConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
}
export const ConfigurationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<ConfigurationsGetInput>;

// Output Schema
export interface ConfigurationsGetOutput {
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
export const ConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsGetOutput>;

// The operation
/**
 * Get a Configuration Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 */
export const ConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsGetInput,
  outputSchema: ConfigurationsGetOutput,
}));
// Input Schema
export interface ConfigurationsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ConfigurationsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsListByResourceGroupInput>;

// Output Schema
export interface ConfigurationsListByResourceGroupOutput {
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
export const ConfigurationsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsListByResourceGroupOutput>;

// The operation
/**
 * List by specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ConfigurationsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsListByResourceGroupInput,
    outputSchema: ConfigurationsListByResourceGroupOutput,
  }));
// Input Schema
export interface ConfigurationsListBySubscriptionInput {
  subscriptionId: string;
}
export const ConfigurationsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/configurations",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsListBySubscriptionInput>;

// Output Schema
export interface ConfigurationsListBySubscriptionOutput {
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
export const ConfigurationsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsListBySubscriptionOutput>;

// The operation
/**
 * List by subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ConfigurationsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationsListBySubscriptionInput,
    outputSchema: ConfigurationsListBySubscriptionOutput,
  }));
// Input Schema
export interface ConfigurationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
  properties?: { provisioningState?: "Succeeded" | "Failed" | "Canceled" };
  tags?: Record<string, string>;
}
export const ConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsUpdateInput>;

// Output Schema
export interface ConfigurationsUpdateOutput {
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
export const ConfigurationsUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsUpdateOutput>;

// The operation
/**
 * Update a Configuration Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 */
export const ConfigurationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationsUpdateInput,
    outputSchema: ConfigurationsUpdateOutput,
  }),
);
// Input Schema
export interface ContextsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  properties?: {
    uniqueIdentifier?: string;
    capabilities: {
      name: string;
      description: string;
      state?: "active" | "inactive";
    }[];
    hierarchies: { name: string; description: string }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  tags?: Record<string, string>;
  location: string;
}
export const ContextsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uniqueIdentifier: Schema.optional(Schema.String),
        capabilities: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            description: Schema.String,
            state: Schema.optional(Schema.Literals(["active", "inactive"])),
          }),
        ),
        hierarchies: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            description: Schema.String,
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ContextsCreateOrUpdateInput>;

// Output Schema
export interface ContextsCreateOrUpdateOutput {
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
export const ContextsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ContextsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update Context Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 */
export const ContextsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContextsCreateOrUpdateInput,
    outputSchema: ContextsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ContextsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
}
export const ContextsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  contextName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ContextsDeleteInput>;

// Output Schema
export type ContextsDeleteOutput = void;
export const ContextsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ContextsDeleteOutput>;

// The operation
/**
 * Delete Context Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 */
export const ContextsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContextsDeleteInput,
  outputSchema: ContextsDeleteOutput,
}));
// Input Schema
export interface ContextsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
}
export const ContextsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  contextName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ContextsGetInput>;

// Output Schema
export interface ContextsGetOutput {
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
export const ContextsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ContextsGetOutput>;

// The operation
/**
 * Get Context Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 */
export const ContextsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContextsGetInput,
  outputSchema: ContextsGetOutput,
}));
// Input Schema
export interface ContextsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ContextsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ContextsListByResourceGroupInput>;

// Output Schema
export interface ContextsListByResourceGroupOutput {
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
export const ContextsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ContextsListByResourceGroupOutput>;

// The operation
/**
 * List by specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ContextsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContextsListByResourceGroupInput,
    outputSchema: ContextsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface ContextsListBySubscriptionInput {
  subscriptionId: string;
}
export const ContextsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/contexts",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ContextsListBySubscriptionInput>;

// Output Schema
export interface ContextsListBySubscriptionOutput {
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
export const ContextsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ContextsListBySubscriptionOutput>;

// The operation
/**
 * List by subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ContextsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContextsListBySubscriptionInput,
    outputSchema: ContextsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface ContextsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  tags?: Record<string, string>;
  properties?: {
    capabilities?: {
      name: string;
      description: string;
      state?: "active" | "inactive";
    }[];
    hierarchies?: { name: string; description: string }[];
  };
}
export const ContextsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  contextName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      capabilities: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            description: Schema.String,
            state: Schema.optional(Schema.Literals(["active", "inactive"])),
          }),
        ),
      ),
      hierarchies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            description: Schema.String,
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ContextsUpdateInput>;

// Output Schema
export interface ContextsUpdateOutput {
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
export const ContextsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ContextsUpdateOutput>;

// The operation
/**
 * update an Context Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 */
export const ContextsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContextsUpdateInput,
  outputSchema: ContextsUpdateOutput,
}));
// Input Schema
export interface DiagnosticsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diagnosticName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  extendedLocation?: { name: string; type: "EdgeZone" | "CustomLocation" };
  eTag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const DiagnosticsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diagnosticName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["EdgeZone", "CustomLocation"]),
      }),
    ),
    eTag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/diagnostics/{diagnosticName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DiagnosticsCreateOrUpdateInput>;

// Output Schema
export interface DiagnosticsCreateOrUpdateOutput {
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
export const DiagnosticsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DiagnosticsCreateOrUpdateOutput>;

// The operation
/**
 * Creates new or updates existing Diagnostic resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diagnosticName - Name of Diagnostic.
 */
export const DiagnosticsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DiagnosticsCreateOrUpdateInput,
    outputSchema: DiagnosticsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DiagnosticsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  diagnosticName: string;
}
export const DiagnosticsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diagnosticName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/diagnostics/{diagnosticName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<DiagnosticsDeleteInput>;

// Output Schema
export type DiagnosticsDeleteOutput = void;
export const DiagnosticsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DiagnosticsDeleteOutput>;

// The operation
/**
 * Deletes specified Diagnostic resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diagnosticName - Name of Diagnostic.
 */
export const DiagnosticsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiagnosticsDeleteInput,
  outputSchema: DiagnosticsDeleteOutput,
}));
// Input Schema
export interface DiagnosticsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  diagnosticName: string;
}
export const DiagnosticsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  diagnosticName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/diagnostics/{diagnosticName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<DiagnosticsGetInput>;

// Output Schema
export interface DiagnosticsGetOutput {
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
export const DiagnosticsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DiagnosticsGetOutput>;

// The operation
/**
 * Returns details of specified Diagnostic resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diagnosticName - Name of Diagnostic.
 */
export const DiagnosticsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiagnosticsGetInput,
  outputSchema: DiagnosticsGetOutput,
}));
// Input Schema
export interface DiagnosticsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DiagnosticsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/diagnostics",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DiagnosticsListByResourceGroupInput>;

// Output Schema
export interface DiagnosticsListByResourceGroupOutput {
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
export const DiagnosticsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DiagnosticsListByResourceGroupOutput>;

// The operation
/**
 * Returns a collection of Diagnostic resources within the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DiagnosticsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiagnosticsListByResourceGroupInput,
    outputSchema: DiagnosticsListByResourceGroupOutput,
  }));
// Input Schema
export interface DiagnosticsListBySubscriptionInput {
  subscriptionId: string;
}
export const DiagnosticsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/diagnostics",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DiagnosticsListBySubscriptionInput>;

// Output Schema
export interface DiagnosticsListBySubscriptionOutput {
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
export const DiagnosticsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<DiagnosticsListBySubscriptionOutput>;

// The operation
/**
 * Lists Diagnostics resources within an Azure subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const DiagnosticsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DiagnosticsListBySubscriptionInput,
    outputSchema: DiagnosticsListBySubscriptionOutput,
  }));
// Input Schema
export interface DiagnosticsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  diagnosticName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  tags?: Record<string, string>;
}
export const DiagnosticsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    diagnosticName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/diagnostics/{diagnosticName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<DiagnosticsUpdateInput>;

// Output Schema
export interface DiagnosticsUpdateOutput {
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
export const DiagnosticsUpdateOutput =
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
  }) as unknown as Schema.Codec<DiagnosticsUpdateOutput>;

// The operation
/**
 * Updates existing Diagnostic resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param diagnosticName - Name of Diagnostic.
 */
export const DiagnosticsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DiagnosticsUpdateInput,
  outputSchema: DiagnosticsUpdateOutput,
}));
// Input Schema
export interface DisconnectedOperationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  properties?: {
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    stampId: string;
    billingModel: "Capacity";
    connectionIntent: "Connected" | "Disconnected";
    connectionStatus?: "Connected" | "Disconnected";
    registrationStatus?: "Registered" | "Unregistered";
    deviceVersion?: string;
    billingConfiguration?: {
      autoRenew: "Enabled" | "Disabled";
      billingStatus: "Enabled" | "Disabled" | "Stopped";
      current: {
        cores: number;
        pricingModel: "Trial" | "Annual";
        startDate?: string;
        endDate?: string;
      };
      upcoming?: {
        cores: number;
        pricingModel: "Trial" | "Annual";
        startDate?: string;
        endDate?: string;
      };
    };
    benefitPlans?: {
      azureHybridWindowsServerBenefit?: "Enabled" | "Disabled";
      windowsServerVmCount?: number;
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const DisconnectedOperationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        stampId: Schema.String,
        billingModel: Schema.Literals(["Capacity"]),
        connectionIntent: Schema.Literals(["Connected", "Disconnected"]),
        connectionStatus: Schema.optional(
          Schema.Literals(["Connected", "Disconnected"]),
        ),
        registrationStatus: Schema.optional(
          Schema.Literals(["Registered", "Unregistered"]),
        ),
        deviceVersion: Schema.optional(Schema.String),
        billingConfiguration: Schema.optional(
          Schema.Struct({
            autoRenew: Schema.Literals(["Enabled", "Disabled"]),
            billingStatus: Schema.Literals(["Enabled", "Disabled", "Stopped"]),
            current: Schema.Struct({
              cores: Schema.Number,
              pricingModel: Schema.Literals(["Trial", "Annual"]),
              startDate: Schema.optional(Schema.String),
              endDate: Schema.optional(Schema.String),
            }),
            upcoming: Schema.optional(
              Schema.Struct({
                cores: Schema.Number,
                pricingModel: Schema.Literals(["Trial", "Annual"]),
                startDate: Schema.optional(Schema.String),
                endDate: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        benefitPlans: Schema.optional(
          Schema.Struct({
            azureHybridWindowsServerBenefit: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            windowsServerVmCount: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DisconnectedOperationsCreateOrUpdateInput>;

// Output Schema
export interface DisconnectedOperationsCreateOrUpdateOutput {
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
export const DisconnectedOperationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DisconnectedOperationsCreateOrUpdateOutput>;

// The operation
/**
 * Create a DisconnectedOperation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 */
export const DisconnectedOperationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DisconnectedOperationsCreateOrUpdateInput,
    outputSchema: DisconnectedOperationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DisconnectedOperationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const DisconnectedOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DisconnectedOperationsDeleteInput>;

// Output Schema
export type DisconnectedOperationsDeleteOutput = void;
export const DisconnectedOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DisconnectedOperationsDeleteOutput>;

// The operation
/**
 * Delete a DisconnectedOperation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 */
export const DisconnectedOperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DisconnectedOperationsDeleteInput,
    outputSchema: DisconnectedOperationsDeleteOutput,
  }));
// Input Schema
export interface DisconnectedOperationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const DisconnectedOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DisconnectedOperationsGetInput>;

// Output Schema
export interface DisconnectedOperationsGetOutput {
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
export const DisconnectedOperationsGetOutput =
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
  }) as unknown as Schema.Codec<DisconnectedOperationsGetOutput>;

// The operation
/**
 * Get a DisconnectedOperation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 */
export const DisconnectedOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DisconnectedOperationsGetInput,
    outputSchema: DisconnectedOperationsGetOutput,
  }),
);
// Input Schema
export interface DisconnectedOperationsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DisconnectedOperationsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DisconnectedOperationsListByResourceGroupInput>;

// Output Schema
export interface DisconnectedOperationsListByResourceGroupOutput {
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
export const DisconnectedOperationsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<DisconnectedOperationsListByResourceGroupOutput>;

// The operation
/**
 * List DisconnectedOperation resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DisconnectedOperationsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DisconnectedOperationsListByResourceGroupInput,
    outputSchema: DisconnectedOperationsListByResourceGroupOutput,
  }));
// Input Schema
export interface DisconnectedOperationsListBySubscriptionInput {
  subscriptionId: string;
}
export const DisconnectedOperationsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/disconnectedOperations",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DisconnectedOperationsListBySubscriptionInput>;

// Output Schema
export interface DisconnectedOperationsListBySubscriptionOutput {
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
export const DisconnectedOperationsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<DisconnectedOperationsListBySubscriptionOutput>;

// The operation
/**
 * List DisconnectedOperation resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const DisconnectedOperationsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DisconnectedOperationsListBySubscriptionInput,
    outputSchema: DisconnectedOperationsListBySubscriptionOutput,
  }));
// Input Schema
export interface DisconnectedOperationsListDeploymentManifestInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const DisconnectedOperationsListDeploymentManifestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}/listDeploymentManifest",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DisconnectedOperationsListDeploymentManifestInput>;

// Output Schema
export interface DisconnectedOperationsListDeploymentManifestOutput {
  resourceId: string;
  resourceName: string;
  stampId: string;
  location: string;
  billingModel: "Capacity";
  connectionIntent: "Connected" | "Disconnected";
  cloud?: string;
  billingConfiguration?: {
    autoRenew: "Enabled" | "Disabled";
    billingStatus: "Enabled" | "Disabled" | "Stopped";
    current: {
      cores: number;
      pricingModel: "Trial" | "Annual";
      startDate?: string;
      endDate?: string;
    };
    upcoming?: {
      cores: number;
      pricingModel: "Trial" | "Annual";
      startDate?: string;
      endDate?: string;
    };
  };
  benefitPlans?: {
    azureHybridWindowsServerBenefit?: "Enabled" | "Disabled";
    windowsServerVmCount?: number;
  };
}
export const DisconnectedOperationsListDeploymentManifestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceId: Schema.String,
    resourceName: Schema.String,
    stampId: Schema.String,
    location: Schema.String,
    billingModel: Schema.Literals(["Capacity"]),
    connectionIntent: Schema.Literals(["Connected", "Disconnected"]),
    cloud: Schema.optional(Schema.String),
    billingConfiguration: Schema.optional(
      Schema.Struct({
        autoRenew: Schema.Literals(["Enabled", "Disabled"]),
        billingStatus: Schema.Literals(["Enabled", "Disabled", "Stopped"]),
        current: Schema.Struct({
          cores: Schema.Number,
          pricingModel: Schema.Literals(["Trial", "Annual"]),
          startDate: Schema.optional(Schema.String),
          endDate: Schema.optional(Schema.String),
        }),
        upcoming: Schema.optional(
          Schema.Struct({
            cores: Schema.Number,
            pricingModel: Schema.Literals(["Trial", "Annual"]),
            startDate: Schema.optional(Schema.String),
            endDate: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    benefitPlans: Schema.optional(
      Schema.Struct({
        azureHybridWindowsServerBenefit: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        windowsServerVmCount: Schema.optional(Schema.Number),
      }),
    ),
  }) as unknown as Schema.Codec<DisconnectedOperationsListDeploymentManifestOutput>;

// The operation
/**
 * get deployment manifest.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 */
export const DisconnectedOperationsListDeploymentManifest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DisconnectedOperationsListDeploymentManifestInput,
    outputSchema: DisconnectedOperationsListDeploymentManifestOutput,
  }));
// Input Schema
export interface DisconnectedOperationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  tags?: Record<string, string>;
  properties?: {
    connectionIntent?: "Connected" | "Disconnected";
    registrationStatus?: "Registered" | "Unregistered";
    deviceVersion?: string;
    billingConfiguration?: {
      autoRenew?: "Enabled" | "Disabled";
      current?: { cores?: number; pricingModel?: "Trial" | "Annual" };
      upcoming?: { cores?: number; pricingModel?: "Trial" | "Annual" };
    };
    benefitPlans?: {
      azureHybridWindowsServerBenefit?: "Enabled" | "Disabled";
      windowsServerVmCount?: number;
    };
  };
}
export const DisconnectedOperationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        connectionIntent: Schema.optional(
          Schema.Literals(["Connected", "Disconnected"]),
        ),
        registrationStatus: Schema.optional(
          Schema.Literals(["Registered", "Unregistered"]),
        ),
        deviceVersion: Schema.optional(Schema.String),
        billingConfiguration: Schema.optional(
          Schema.Struct({
            autoRenew: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            current: Schema.optional(
              Schema.Struct({
                cores: Schema.optional(Schema.Number),
                pricingModel: Schema.optional(
                  Schema.Literals(["Trial", "Annual"]),
                ),
              }),
            ),
            upcoming: Schema.optional(
              Schema.Struct({
                cores: Schema.optional(Schema.Number),
                pricingModel: Schema.optional(
                  Schema.Literals(["Trial", "Annual"]),
                ),
              }),
            ),
          }),
        ),
        benefitPlans: Schema.optional(
          Schema.Struct({
            azureHybridWindowsServerBenefit: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            windowsServerVmCount: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<DisconnectedOperationsUpdateInput>;

// Output Schema
export interface DisconnectedOperationsUpdateOutput {
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
export const DisconnectedOperationsUpdateOutput =
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
  }) as unknown as Schema.Codec<DisconnectedOperationsUpdateOutput>;

// The operation
/**
 * Update a DisconnectedOperation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 */
export const DisconnectedOperationsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DisconnectedOperationsUpdateInput,
    outputSchema: DisconnectedOperationsUpdateOutput,
  }));
// Input Schema
export interface DynamicConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
  dynamicConfigurationName: string;
  properties?: {
    currentVersion: string;
    displayName?: string;
    dynamicConfigurationType?: "Shared" | "Hierarchy";
    dynamicConfigurationModel?: "Application" | "Common";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
}
export const DynamicConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        currentVersion: Schema.String,
        displayName: Schema.optional(Schema.String),
        dynamicConfigurationType: Schema.optional(
          Schema.Literals(["Shared", "Hierarchy"]),
        ),
        dynamicConfigurationModel: Schema.optional(
          Schema.Literals(["Application", "Common"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}/dynamicConfigurations/{dynamicConfigurationName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<DynamicConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface DynamicConfigurationsCreateOrUpdateOutput {
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
export const DynamicConfigurationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DynamicConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Dynamic Configuration Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 * @param dynamicConfigurationName - Name of the dynamic configuration
 */
export const DynamicConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DynamicConfigurationsCreateOrUpdateInput,
    outputSchema: DynamicConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DynamicConfigurationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
  dynamicConfigurationName: string;
}
export const DynamicConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}/dynamicConfigurations/{dynamicConfigurationName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<DynamicConfigurationsDeleteInput>;

// Output Schema
export type DynamicConfigurationsDeleteOutput = void;
export const DynamicConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DynamicConfigurationsDeleteOutput>;

// The operation
/**
 * Delete a Dynamic Configuration Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 * @param dynamicConfigurationName - Name of the dynamic configuration
 */
export const DynamicConfigurationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DynamicConfigurationsDeleteInput,
    outputSchema: DynamicConfigurationsDeleteOutput,
  }),
);
// Input Schema
export interface DynamicConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
  dynamicConfigurationName: string;
}
export const DynamicConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}/dynamicConfigurations/{dynamicConfigurationName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<DynamicConfigurationsGetInput>;

// Output Schema
export interface DynamicConfigurationsGetOutput {
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
export const DynamicConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<DynamicConfigurationsGetOutput>;

// The operation
/**
 * Get a Dynamic Configuration Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 * @param dynamicConfigurationName - Name of the dynamic configuration
 */
export const DynamicConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DynamicConfigurationsGetInput,
    outputSchema: DynamicConfigurationsGetOutput,
  }),
);
// Input Schema
export interface DynamicConfigurationsListByConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
}
export const DynamicConfigurationsListByConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}/dynamicConfigurations",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<DynamicConfigurationsListByConfigurationInput>;

// Output Schema
export interface DynamicConfigurationsListByConfigurationOutput {
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
export const DynamicConfigurationsListByConfigurationOutput =
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
  }) as unknown as Schema.Codec<DynamicConfigurationsListByConfigurationOutput>;

// The operation
/**
 * List Dynamic Configuration Resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 */
export const DynamicConfigurationsListByConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DynamicConfigurationsListByConfigurationInput,
    outputSchema: DynamicConfigurationsListByConfigurationOutput,
  }));
// Input Schema
export interface DynamicConfigurationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
  dynamicConfigurationName: string;
  properties?: { currentVersion?: string };
}
export const DynamicConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        currentVersion: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}/dynamicConfigurations/{dynamicConfigurationName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<DynamicConfigurationsUpdateInput>;

// Output Schema
export interface DynamicConfigurationsUpdateOutput {
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
export const DynamicConfigurationsUpdateOutput =
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
  }) as unknown as Schema.Codec<DynamicConfigurationsUpdateOutput>;

// The operation
/**
 * Update a Dynamic Configuration Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 * @param dynamicConfigurationName - Name of the dynamic configuration
 */
export const DynamicConfigurationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DynamicConfigurationsUpdateInput,
    outputSchema: DynamicConfigurationsUpdateOutput,
  }),
);
// Input Schema
export interface DynamicConfigurationVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
  dynamicConfigurationName: string;
  dynamicConfigurationVersionName: string;
  properties?: {
    values: string;
    schemaId?: string;
    dynamicSchemaVersionId?: string;
    displayState?: string;
    state?: "ConfigurationCompleted" | "ConfigurationPending";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
}
export const DynamicConfigurationVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        values: Schema.String,
        schemaId: Schema.optional(Schema.String),
        dynamicSchemaVersionId: Schema.optional(Schema.String),
        displayState: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals(["ConfigurationCompleted", "ConfigurationPending"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}/dynamicConfigurations/{dynamicConfigurationName}/versions/{dynamicConfigurationVersionName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<DynamicConfigurationVersionsCreateOrUpdateInput>;

// Output Schema
export interface DynamicConfigurationVersionsCreateOrUpdateOutput {
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
export const DynamicConfigurationVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DynamicConfigurationVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Dynamic Configuration Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 * @param dynamicConfigurationName - Name of the dynamic configuration
 * @param dynamicConfigurationVersionName - The name of the DynamicConfigurationVersion
 */
export const DynamicConfigurationVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DynamicConfigurationVersionsCreateOrUpdateInput,
    outputSchema: DynamicConfigurationVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DynamicConfigurationVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
  dynamicConfigurationName: string;
  dynamicConfigurationVersionName: string;
}
export const DynamicConfigurationVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}/dynamicConfigurations/{dynamicConfigurationName}/versions/{dynamicConfigurationVersionName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<DynamicConfigurationVersionsDeleteInput>;

// Output Schema
export type DynamicConfigurationVersionsDeleteOutput = void;
export const DynamicConfigurationVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DynamicConfigurationVersionsDeleteOutput>;

// The operation
/**
 * Delete a Dynamic Configuration Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 * @param dynamicConfigurationName - Name of the dynamic configuration
 * @param dynamicConfigurationVersionName - The name of the DynamicConfigurationVersion
 */
export const DynamicConfigurationVersionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DynamicConfigurationVersionsDeleteInput,
    outputSchema: DynamicConfigurationVersionsDeleteOutput,
  }));
// Input Schema
export interface DynamicConfigurationVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
  dynamicConfigurationName: string;
  dynamicConfigurationVersionName: string;
}
export const DynamicConfigurationVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}/dynamicConfigurations/{dynamicConfigurationName}/versions/{dynamicConfigurationVersionName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<DynamicConfigurationVersionsGetInput>;

// Output Schema
export interface DynamicConfigurationVersionsGetOutput {
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
export const DynamicConfigurationVersionsGetOutput =
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
  }) as unknown as Schema.Codec<DynamicConfigurationVersionsGetOutput>;

// The operation
/**
 * Get a Dynamic Configuration Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 * @param dynamicConfigurationName - Name of the dynamic configuration
 * @param dynamicConfigurationVersionName - The name of the DynamicConfigurationVersion
 */
export const DynamicConfigurationVersionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DynamicConfigurationVersionsGetInput,
    outputSchema: DynamicConfigurationVersionsGetOutput,
  }));
// Input Schema
export interface DynamicConfigurationVersionsListByDynamicConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
  dynamicConfigurationName: string;
}
export const DynamicConfigurationVersionsListByDynamicConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}/dynamicConfigurations/{dynamicConfigurationName}/versions",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<DynamicConfigurationVersionsListByDynamicConfigurationInput>;

// Output Schema
export interface DynamicConfigurationVersionsListByDynamicConfigurationOutput {
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
export const DynamicConfigurationVersionsListByDynamicConfigurationOutput =
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
  }) as unknown as Schema.Codec<DynamicConfigurationVersionsListByDynamicConfigurationOutput>;

// The operation
/**
 * List Dynamic Configuration Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 * @param dynamicConfigurationName - Name of the dynamic configuration
 */
export const DynamicConfigurationVersionsListByDynamicConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DynamicConfigurationVersionsListByDynamicConfigurationInput,
    outputSchema: DynamicConfigurationVersionsListByDynamicConfigurationOutput,
  }));
// Input Schema
export interface DynamicConfigurationVersionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationName: string;
  dynamicConfigurationName: string;
  dynamicConfigurationVersionName: string;
  properties?: { values?: string };
}
export const DynamicConfigurationVersionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationName: Schema.String.pipe(T.PathParam()),
    dynamicConfigurationVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        values: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configurations/{configurationName}/dynamicConfigurations/{dynamicConfigurationName}/versions/{dynamicConfigurationVersionName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<DynamicConfigurationVersionsUpdateInput>;

// Output Schema
export interface DynamicConfigurationVersionsUpdateOutput {
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
export const DynamicConfigurationVersionsUpdateOutput =
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
  }) as unknown as Schema.Codec<DynamicConfigurationVersionsUpdateOutput>;

// The operation
/**
 * update a Dynamic Configuration Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationName - Name of the Configuration
 * @param dynamicConfigurationName - Name of the dynamic configuration
 * @param dynamicConfigurationVersionName - The name of the DynamicConfigurationVersion
 */
export const DynamicConfigurationVersionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DynamicConfigurationVersionsUpdateInput,
    outputSchema: DynamicConfigurationVersionsUpdateOutput,
  }));
// Input Schema
export interface DynamicSchemasCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  dynamicSchemaName: string;
  properties?: {
    displayName?: string;
    configurationType?: "Shared" | "Hierarchy";
    configurationModel?: "Application" | "Common";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  eTag?: string;
}
export const DynamicSchemasCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        configurationType: Schema.optional(
          Schema.Literals(["Shared", "Hierarchy"]),
        ),
        configurationModel: Schema.optional(
          Schema.Literals(["Application", "Common"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/dynamicSchemas/{dynamicSchemaName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DynamicSchemasCreateOrUpdateInput>;

// Output Schema
export interface DynamicSchemasCreateOrUpdateOutput {
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
export const DynamicSchemasCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DynamicSchemasCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a DynamicSchema Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param dynamicSchemaName - The name of the DynamicSchema
 */
export const DynamicSchemasCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DynamicSchemasCreateOrUpdateInput,
    outputSchema: DynamicSchemasCreateOrUpdateOutput,
  }));
// Input Schema
export interface DynamicSchemasDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  dynamicSchemaName: string;
}
export const DynamicSchemasDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/dynamicSchemas/{dynamicSchemaName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DynamicSchemasDeleteInput>;

// Output Schema
export type DynamicSchemasDeleteOutput = void;
export const DynamicSchemasDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DynamicSchemasDeleteOutput>;

// The operation
/**
 * Delete a DynamicSchema Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param dynamicSchemaName - The name of the DynamicSchema
 */
export const DynamicSchemasDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DynamicSchemasDeleteInput,
    outputSchema: DynamicSchemasDeleteOutput,
  }),
);
// Input Schema
export interface DynamicSchemasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  dynamicSchemaName: string;
}
export const DynamicSchemasGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/dynamicSchemas/{dynamicSchemaName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<DynamicSchemasGetInput>;

// Output Schema
export interface DynamicSchemasGetOutput {
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
export const DynamicSchemasGetOutput =
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
  }) as unknown as Schema.Codec<DynamicSchemasGetOutput>;

// The operation
/**
 * Get a DynamicSchema Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param dynamicSchemaName - The name of the DynamicSchema
 */
export const DynamicSchemasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DynamicSchemasGetInput,
  outputSchema: DynamicSchemasGetOutput,
}));
// Input Schema
export interface DynamicSchemasListBySchemaInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
}
export const DynamicSchemasListBySchemaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/dynamicSchemas",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DynamicSchemasListBySchemaInput>;

// Output Schema
export interface DynamicSchemasListBySchemaOutput {
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
export const DynamicSchemasListBySchemaOutput =
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
  }) as unknown as Schema.Codec<DynamicSchemasListBySchemaOutput>;

// The operation
/**
 * List by Schema
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 */
export const DynamicSchemasListBySchema = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DynamicSchemasListBySchemaInput,
    outputSchema: DynamicSchemasListBySchemaOutput,
  }),
);
// Input Schema
export interface DynamicSchemasUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  dynamicSchemaName: string;
  properties?: {
    displayName?: string;
    configurationType?: "Shared" | "Hierarchy";
    configurationModel?: "Application" | "Common";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
}
export const DynamicSchemasUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        configurationType: Schema.optional(
          Schema.Literals(["Shared", "Hierarchy"]),
        ),
        configurationModel: Schema.optional(
          Schema.Literals(["Application", "Common"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/dynamicSchemas/{dynamicSchemaName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DynamicSchemasUpdateInput>;

// Output Schema
export interface DynamicSchemasUpdateOutput {
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
export const DynamicSchemasUpdateOutput =
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
  }) as unknown as Schema.Codec<DynamicSchemasUpdateOutput>;

// The operation
/**
 * update a DynamicSchema Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param dynamicSchemaName - The name of the DynamicSchema
 */
export const DynamicSchemasUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DynamicSchemasUpdateInput,
    outputSchema: DynamicSchemasUpdateOutput,
  }),
);
// Input Schema
export interface DynamicSchemaVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  dynamicSchemaName: string;
  dynamicSchemaVersionName: string;
  properties?: {
    value: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  eTag?: string;
}
export const DynamicSchemaVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        value: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/dynamicSchemas/{dynamicSchemaName}/versions/{dynamicSchemaVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DynamicSchemaVersionsCreateOrUpdateInput>;

// Output Schema
export interface DynamicSchemaVersionsCreateOrUpdateOutput {
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
export const DynamicSchemaVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DynamicSchemaVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Dynamic Schema Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param dynamicSchemaName - The name of the DynamicSchema
 * @param dynamicSchemaVersionName - The name of the DynamicSchemaVersion
 */
export const DynamicSchemaVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DynamicSchemaVersionsCreateOrUpdateInput,
    outputSchema: DynamicSchemaVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DynamicSchemaVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  dynamicSchemaName: string;
  dynamicSchemaVersionName: string;
}
export const DynamicSchemaVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/dynamicSchemas/{dynamicSchemaName}/versions/{dynamicSchemaVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DynamicSchemaVersionsDeleteInput>;

// Output Schema
export type DynamicSchemaVersionsDeleteOutput = void;
export const DynamicSchemaVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DynamicSchemaVersionsDeleteOutput>;

// The operation
/**
 * Delete a Dynamic Schema Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param dynamicSchemaName - The name of the DynamicSchema
 * @param dynamicSchemaVersionName - The name of the DynamicSchemaVersion
 */
export const DynamicSchemaVersionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DynamicSchemaVersionsDeleteInput,
    outputSchema: DynamicSchemaVersionsDeleteOutput,
  }),
);
// Input Schema
export interface DynamicSchemaVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  dynamicSchemaName: string;
  dynamicSchemaVersionName: string;
}
export const DynamicSchemaVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/dynamicSchemas/{dynamicSchemaName}/versions/{dynamicSchemaVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DynamicSchemaVersionsGetInput>;

// Output Schema
export interface DynamicSchemaVersionsGetOutput {
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
export const DynamicSchemaVersionsGetOutput =
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
  }) as unknown as Schema.Codec<DynamicSchemaVersionsGetOutput>;

// The operation
/**
 * Get a Dynamic Schema Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param dynamicSchemaName - The name of the DynamicSchema
 * @param dynamicSchemaVersionName - The name of the DynamicSchemaVersion
 */
export const DynamicSchemaVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DynamicSchemaVersionsGetInput,
    outputSchema: DynamicSchemaVersionsGetOutput,
  }),
);
// Input Schema
export interface DynamicSchemaVersionsListByDynamicSchemaInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  dynamicSchemaName: string;
}
export const DynamicSchemaVersionsListByDynamicSchemaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/dynamicSchemas/{dynamicSchemaName}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DynamicSchemaVersionsListByDynamicSchemaInput>;

// Output Schema
export interface DynamicSchemaVersionsListByDynamicSchemaOutput {
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
export const DynamicSchemaVersionsListByDynamicSchemaOutput =
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
  }) as unknown as Schema.Codec<DynamicSchemaVersionsListByDynamicSchemaOutput>;

// The operation
/**
 * List by Dynamic Schema
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param dynamicSchemaName - The name of the DynamicSchema
 */
export const DynamicSchemaVersionsListByDynamicSchema =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DynamicSchemaVersionsListByDynamicSchemaInput,
    outputSchema: DynamicSchemaVersionsListByDynamicSchemaOutput,
  }));
// Input Schema
export interface DynamicSchemaVersionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  dynamicSchemaName: string;
  dynamicSchemaVersionName: string;
  properties?: { value?: string };
}
export const DynamicSchemaVersionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaName: Schema.String.pipe(T.PathParam()),
    dynamicSchemaVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        value: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/dynamicSchemas/{dynamicSchemaName}/versions/{dynamicSchemaVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<DynamicSchemaVersionsUpdateInput>;

// Output Schema
export interface DynamicSchemaVersionsUpdateOutput {
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
export const DynamicSchemaVersionsUpdateOutput =
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
  }) as unknown as Schema.Codec<DynamicSchemaVersionsUpdateOutput>;

// The operation
/**
 * update a Dynamic Schema Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param dynamicSchemaName - The name of the DynamicSchema
 * @param dynamicSchemaVersionName - The name of the DynamicSchemaVersion
 */
export const DynamicSchemaVersionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DynamicSchemaVersionsUpdateInput,
    outputSchema: DynamicSchemaVersionsUpdateOutput,
  }),
);
// Input Schema
export interface ExecutionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
  versionName: string;
  executionName: string;
  properties?: {
    workflowVersionId: string;
    specification?: Record<string, unknown>;
    status?: {
      updateTime?: string;
      status?: number;
      statusMessage?: string;
      stageHistory?: {
        status?: number;
        statusMessage?: string;
        stage?: string;
        nextstage?: string;
        errorMessage?: string;
        isActive?: "active" | "inactive";
        inputs?: Record<string, unknown>;
        outputs?: Record<string, unknown>;
      }[];
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  extendedLocation?: { name: string; type: "EdgeZone" | "CustomLocation" };
  eTag?: string;
}
export const ExecutionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
    executionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        workflowVersionId: Schema.String,
        specification: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        status: Schema.optional(
          Schema.Struct({
            updateTime: Schema.optional(Schema.String),
            status: Schema.optional(Schema.Number),
            statusMessage: Schema.optional(Schema.String),
            stageHistory: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  status: Schema.optional(Schema.Number),
                  statusMessage: Schema.optional(Schema.String),
                  stage: Schema.optional(Schema.String),
                  nextstage: Schema.optional(Schema.String),
                  errorMessage: Schema.optional(Schema.String),
                  isActive: Schema.optional(
                    Schema.Literals(["active", "inactive"]),
                  ),
                  inputs: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
                  ),
                  outputs: Schema.optional(
                    Schema.Record(Schema.String, Schema.Unknown),
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
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["EdgeZone", "CustomLocation"]),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}/versions/{versionName}/executions/{executionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ExecutionsCreateOrUpdateInput>;

// Output Schema
export interface ExecutionsCreateOrUpdateOutput {
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
export const ExecutionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ExecutionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update Execution Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 * @param versionName - The name of the workflowVersion.
 * @param executionName - The name of the Execution.
 */
export const ExecutionsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExecutionsCreateOrUpdateInput,
    outputSchema: ExecutionsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ExecutionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
  versionName: string;
  executionName: string;
}
export const ExecutionsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  contextName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
  versionName: Schema.String.pipe(T.PathParam()),
  executionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}/versions/{versionName}/executions/{executionName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ExecutionsDeleteInput>;

// Output Schema
export type ExecutionsDeleteOutput = void;
export const ExecutionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ExecutionsDeleteOutput>;

// The operation
/**
 * Delete Execution Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 * @param versionName - The name of the workflowVersion.
 * @param executionName - The name of the Execution.
 */
export const ExecutionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExecutionsDeleteInput,
  outputSchema: ExecutionsDeleteOutput,
}));
// Input Schema
export interface ExecutionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
  versionName: string;
  executionName: string;
}
export const ExecutionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  contextName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
  versionName: Schema.String.pipe(T.PathParam()),
  executionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}/versions/{versionName}/executions/{executionName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ExecutionsGetInput>;

// Output Schema
export interface ExecutionsGetOutput {
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
export const ExecutionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ExecutionsGetOutput>;

// The operation
/**
 * Get Execution Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 * @param versionName - The name of the workflowVersion.
 * @param executionName - The name of the Execution.
 */
export const ExecutionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExecutionsGetInput,
  outputSchema: ExecutionsGetOutput,
}));
// Input Schema
export interface ExecutionsListByWorkflowVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
  versionName: string;
}
export const ExecutionsListByWorkflowVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}/versions/{versionName}/executions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<ExecutionsListByWorkflowVersionInput>;

// Output Schema
export interface ExecutionsListByWorkflowVersionOutput {
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
export const ExecutionsListByWorkflowVersionOutput =
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
  }) as unknown as Schema.Codec<ExecutionsListByWorkflowVersionOutput>;

// The operation
/**
 * List Execution Resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 * @param versionName - The name of the workflowVersion.
 */
export const ExecutionsListByWorkflowVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExecutionsListByWorkflowVersionInput,
    outputSchema: ExecutionsListByWorkflowVersionOutput,
  }));
// Input Schema
export interface ExecutionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
  versionName: string;
  executionName: string;
  properties?: {
    workflowVersionId?: string;
    specification?: Record<string, unknown>;
  };
}
export const ExecutionsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  contextName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
  versionName: Schema.String.pipe(T.PathParam()),
  executionName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      workflowVersionId: Schema.optional(Schema.String),
      specification: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}/versions/{versionName}/executions/{executionName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<ExecutionsUpdateInput>;

// Output Schema
export interface ExecutionsUpdateOutput {
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
export const ExecutionsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<ExecutionsUpdateOutput>;

// The operation
/**
 * update an Execution Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 * @param versionName - The name of the workflowVersion.
 * @param executionName - The name of the Execution.
 */
export const ExecutionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExecutionsUpdateInput,
  outputSchema: ExecutionsUpdateOutput,
}));
// Input Schema
export interface HardwareSettingsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  hardwareSettingName: string;
  properties?: {
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    totalCores: number;
    diskSpaceInGb: number;
    memoryInGb: number;
    oem: string;
    hardwareSku: string;
    nodes: number;
    versionAtRegistration: string;
    solutionBuilderExtension: string;
    deviceId: string;
  };
}
export const HardwareSettingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    hardwareSettingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        totalCores: Schema.Number,
        diskSpaceInGb: Schema.Number,
        memoryInGb: Schema.Number,
        oem: Schema.String,
        hardwareSku: Schema.String,
        nodes: Schema.Number,
        versionAtRegistration: Schema.String,
        solutionBuilderExtension: Schema.String,
        deviceId: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}/hardwareSettings/{hardwareSettingName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<HardwareSettingsCreateOrUpdateInput>;

// Output Schema
export interface HardwareSettingsCreateOrUpdateOutput {
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
export const HardwareSettingsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<HardwareSettingsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update hardware settings
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 * @param hardwareSettingName - The name of the HardwareSetting
 */
export const HardwareSettingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HardwareSettingsCreateOrUpdateInput,
    outputSchema: HardwareSettingsCreateOrUpdateOutput,
  }));
// Input Schema
export interface HardwareSettingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  hardwareSettingName: string;
}
export const HardwareSettingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    hardwareSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}/hardwareSettings/{hardwareSettingName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<HardwareSettingsDeleteInput>;

// Output Schema
export type HardwareSettingsDeleteOutput = void;
export const HardwareSettingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HardwareSettingsDeleteOutput>;

// The operation
/**
 * Delete hardware settings
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 * @param hardwareSettingName - The name of the HardwareSetting
 */
export const HardwareSettingsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HardwareSettingsDeleteInput,
    outputSchema: HardwareSettingsDeleteOutput,
  }),
);
// Input Schema
export interface HardwareSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  hardwareSettingName: string;
}
export const HardwareSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    hardwareSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}/hardwareSettings/{hardwareSettingName}",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<HardwareSettingsGetInput>;

// Output Schema
export interface HardwareSettingsGetOutput {
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
export const HardwareSettingsGetOutput =
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
  }) as unknown as Schema.Codec<HardwareSettingsGetOutput>;

// The operation
/**
 * Get the hardware settings resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 * @param hardwareSettingName - The name of the HardwareSetting
 */
export const HardwareSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HardwareSettingsGetInput,
  outputSchema: HardwareSettingsGetOutput,
}));
// Input Schema
export interface HardwareSettingsListByParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const HardwareSettingsListByParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}/hardwareSettings",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<HardwareSettingsListByParentInput>;

// Output Schema
export interface HardwareSettingsListByParentOutput {
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
export const HardwareSettingsListByParentOutput =
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
  }) as unknown as Schema.Codec<HardwareSettingsListByParentOutput>;

// The operation
/**
 * List by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 */
export const HardwareSettingsListByParent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HardwareSettingsListByParentInput,
    outputSchema: HardwareSettingsListByParentOutput,
  }));
// Input Schema
export interface HierarchyConfigurationMetadatasGetInput {
  resourceUri: string;
  hierarchyConfigurationMetadataName: string;
}
export const HierarchyConfigurationMetadatasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    hierarchyConfigurationMetadataName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/hierarchyConfigurationMetadatas/{hierarchyConfigurationMetadataName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<HierarchyConfigurationMetadatasGetInput>;

// Output Schema
export interface HierarchyConfigurationMetadatasGetOutput {
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
export const HierarchyConfigurationMetadatasGetOutput =
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
  }) as unknown as Schema.Codec<HierarchyConfigurationMetadatasGetOutput>;

// The operation
/**
 * Get a Hierarchy Configuration Metadata resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param hierarchyConfigurationMetadataName - Name of the hierarchy configuration metadata
 */
export const HierarchyConfigurationMetadatasGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HierarchyConfigurationMetadatasGetInput,
    outputSchema: HierarchyConfigurationMetadatasGetOutput,
  }));
// Input Schema
export interface HierarchyConfigurationMetadatasListByParentInput {
  resourceUri: string;
}
export const HierarchyConfigurationMetadatasListByParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/hierarchyConfigurationMetadatas",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<HierarchyConfigurationMetadatasListByParentInput>;

// Output Schema
export interface HierarchyConfigurationMetadatasListByParentOutput {
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
export const HierarchyConfigurationMetadatasListByParentOutput =
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
  }) as unknown as Schema.Codec<HierarchyConfigurationMetadatasListByParentOutput>;

// The operation
/**
 * List Solution resources
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const HierarchyConfigurationMetadatasListByParent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HierarchyConfigurationMetadatasListByParentInput,
    outputSchema: HierarchyConfigurationMetadatasListByParentOutput,
  }));
// Input Schema
export interface HierarchyConfigurationMetadataVersionsGetInput {
  resourceUri: string;
  hierarchyConfigurationMetadataName: string;
  hierarchyConfigurationMetadataVersionName: string;
}
export const HierarchyConfigurationMetadataVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    hierarchyConfigurationMetadataName: Schema.String.pipe(T.PathParam()),
    hierarchyConfigurationMetadataVersionName: Schema.String.pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/hierarchyConfigurationMetadatas/{hierarchyConfigurationMetadataName}/versions/{hierarchyConfigurationMetadataVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<HierarchyConfigurationMetadataVersionsGetInput>;

// Output Schema
export interface HierarchyConfigurationMetadataVersionsGetOutput {
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
export const HierarchyConfigurationMetadataVersionsGetOutput =
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
  }) as unknown as Schema.Codec<HierarchyConfigurationMetadataVersionsGetOutput>;

// The operation
/**
 * Get a Hierarchy Configuration Metadata Version resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param hierarchyConfigurationMetadataName - Name of the hierarchy configuration metadata
 * @param hierarchyConfigurationMetadataVersionName - Name of the hierarchy configuration metadata version
 */
export const HierarchyConfigurationMetadataVersionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HierarchyConfigurationMetadataVersionsGetInput,
    outputSchema: HierarchyConfigurationMetadataVersionsGetOutput,
  }));
// Input Schema
export interface HierarchyConfigurationMetadataVersionsListByParentInput {
  resourceUri: string;
  hierarchyConfigurationMetadataName: string;
}
export const HierarchyConfigurationMetadataVersionsListByParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    hierarchyConfigurationMetadataName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/hierarchyConfigurationMetadatas/{hierarchyConfigurationMetadataName}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<HierarchyConfigurationMetadataVersionsListByParentInput>;

// Output Schema
export interface HierarchyConfigurationMetadataVersionsListByParentOutput {
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
export const HierarchyConfigurationMetadataVersionsListByParentOutput =
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
  }) as unknown as Schema.Codec<HierarchyConfigurationMetadataVersionsListByParentOutput>;

// The operation
/**
 * List Hierarchy Configuration Metadata Version resources
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param hierarchyConfigurationMetadataName - Name of the hierarchy configuration metadata
 */
export const HierarchyConfigurationMetadataVersionsListByParent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HierarchyConfigurationMetadataVersionsListByParentInput,
    outputSchema: HierarchyConfigurationMetadataVersionsListByParentOutput,
  }));
// Input Schema
export interface ImagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  imageName: string;
}
export const ImagesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  imageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}/images/{imageName}",
    apiVersion: "2026-03-15",
  }),
) as unknown as Schema.Codec<ImagesGetInput>;

// Output Schema
export interface ImagesGetOutput {
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
export const ImagesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ImagesGetOutput>;

// The operation
/**
 * Get the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 * @param imageName - The name of the Image
 */
export const ImagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ImagesGetInput,
  outputSchema: ImagesGetOutput,
}));
// Input Schema
export interface ImagesListByDisconnectedOperationInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  $filter?: string;
  $top?: number;
  $skip?: number;
}
export const ImagesListByDisconnectedOperationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}/images",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<ImagesListByDisconnectedOperationInput>;

// Output Schema
export interface ImagesListByDisconnectedOperationOutput {
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
export const ImagesListByDisconnectedOperationOutput =
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
  }) as unknown as Schema.Codec<ImagesListByDisconnectedOperationOutput>;

// The operation
/**
 * List by disconnected operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter the result list using the given expression.
 * @param $top - The number of result items to return.
 * @param $skip - The number of result items to skip.
 * @param name - Name of the resource
 */
export const ImagesListByDisconnectedOperation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImagesListByDisconnectedOperationInput,
    outputSchema: ImagesListByDisconnectedOperationOutput,
  }));
// Input Schema
export interface ImagesListDownloadUriInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  imageName: string;
}
export const ImagesListDownloadUriInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    imageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/disconnectedOperations/{name}/images/{imageName}/listDownloadUri",
      apiVersion: "2026-03-15",
    }),
  ) as unknown as Schema.Codec<ImagesListDownloadUriInput>;

// Output Schema
export interface ImagesListDownloadUriOutput {
  provisioningState?: "Succeeded" | "Failed" | "Canceled";
  releaseVersion: string;
  releaseDisplayName: string;
  releaseNotes: string;
  releaseDate: string;
  releaseType: "Install" | "Update";
  compatibleVersions?: string[];
  updateProperties?: {
    systemReboot: "Required" | "NotRequired";
    securityUpdates: string;
    osVersion: string;
    agentVersion: string;
    featureUpdates: string;
  };
  transactionId: string;
  downloadLink: string;
  linkExpiry: string;
}
export const ImagesListDownloadUriOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.Literals(["Succeeded", "Failed", "Canceled"]),
    ),
    releaseVersion: Schema.String,
    releaseDisplayName: Schema.String,
    releaseNotes: Schema.String,
    releaseDate: Schema.String,
    releaseType: Schema.Literals(["Install", "Update"]),
    compatibleVersions: Schema.optional(Schema.Array(Schema.String)),
    updateProperties: Schema.optional(
      Schema.Struct({
        systemReboot: Schema.Literals(["Required", "NotRequired"]),
        securityUpdates: Schema.String,
        osVersion: Schema.String,
        agentVersion: Schema.String,
        featureUpdates: Schema.String,
      }),
    ),
    transactionId: Schema.String,
    downloadLink: Schema.String,
    linkExpiry: Schema.String,
  }) as unknown as Schema.Codec<ImagesListDownloadUriOutput>;

// The operation
/**
 * Get the URI to download the image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the resource
 * @param imageName - The name of the Image
 */
export const ImagesListDownloadUri = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImagesListDownloadUriInput,
    outputSchema: ImagesListDownloadUriOutput,
  }),
);
// Input Schema
export interface InstanceHistoriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  instanceName: string;
  instanceHistoryName: string;
}
export const InstanceHistoriesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    instanceHistoryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/instances/{instanceName}/histories/{instanceHistoryName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<InstanceHistoriesGetInput>;

// Output Schema
export interface InstanceHistoriesGetOutput {
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
export const InstanceHistoriesGetOutput =
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
  }) as unknown as Schema.Codec<InstanceHistoriesGetOutput>;

// The operation
/**
 * Get InstanceHistory Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 * @param instanceName - Name of the instance
 * @param instanceHistoryName - Name of the instance history
 */
export const InstanceHistoriesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InstanceHistoriesGetInput,
    outputSchema: InstanceHistoriesGetOutput,
  }),
);
// Input Schema
export interface InstanceHistoriesListByInstanceInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  instanceName: string;
}
export const InstanceHistoriesListByInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/instances/{instanceName}/histories",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<InstanceHistoriesListByInstanceInput>;

// Output Schema
export interface InstanceHistoriesListByInstanceOutput {
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
export const InstanceHistoriesListByInstanceOutput =
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
  }) as unknown as Schema.Codec<InstanceHistoriesListByInstanceOutput>;

// The operation
/**
 * List InstanceHistory Resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 * @param instanceName - Name of the instance
 */
export const InstanceHistoriesListByInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InstanceHistoriesListByInstanceInput,
    outputSchema: InstanceHistoriesListByInstanceOutput,
  }));
// Input Schema
export interface InstancesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  instanceName: string;
  properties?: {
    solutionVersionId: string;
    targetId: string;
    activeState?: "active" | "inactive";
    reconciliationPolicy?: { state: "inactive" | "active"; interval: string };
    solutionScope?: string;
    status?: {
      lastModified?: string;
      deployed?: number;
      expectedRunningJobId?: number;
      runningJobId?: number;
      status?: string;
      statusDetails?: string;
      generation?: number;
      targetStatuses?: {
        name?: string;
        status?: string;
        componentStatuses?: { name?: string; status?: string }[];
      }[];
    };
    deploymentTimestampEpoch?: number;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  extendedLocation?: { name: string; type: "EdgeZone" | "CustomLocation" };
  eTag?: string;
}
export const InstancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionName: Schema.String.pipe(T.PathParam()),
    instanceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        solutionVersionId: Schema.String,
        targetId: Schema.String,
        activeState: Schema.optional(Schema.Literals(["active", "inactive"])),
        reconciliationPolicy: Schema.optional(
          Schema.Struct({
            state: Schema.Literals(["inactive", "active"]),
            interval: Schema.String,
          }),
        ),
        solutionScope: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Struct({
            lastModified: Schema.optional(Schema.String),
            deployed: Schema.optional(Schema.Number),
            expectedRunningJobId: Schema.optional(Schema.Number),
            runningJobId: Schema.optional(Schema.Number),
            status: Schema.optional(Schema.String),
            statusDetails: Schema.optional(Schema.String),
            generation: Schema.optional(Schema.Number),
            targetStatuses: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  status: Schema.optional(Schema.String),
                  componentStatuses: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        status: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
        deploymentTimestampEpoch: Schema.optional(Schema.Number),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["EdgeZone", "CustomLocation"]),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/instances/{instanceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<InstancesCreateOrUpdateInput>;

// Output Schema
export interface InstancesCreateOrUpdateOutput {
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
export const InstancesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<InstancesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update Instance Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 * @param instanceName - Name of the instance
 */
export const InstancesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InstancesCreateOrUpdateInput,
    outputSchema: InstancesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface InstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  instanceName: string;
}
export const InstancesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
  solutionName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/instances/{instanceName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<InstancesDeleteInput>;

// Output Schema
export type InstancesDeleteOutput = void;
export const InstancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<InstancesDeleteOutput>;

// The operation
/**
 * Delete Instance Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 * @param instanceName - Name of the instance
 */
export const InstancesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InstancesDeleteInput,
  outputSchema: InstancesDeleteOutput,
}));
// Input Schema
export interface InstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  instanceName: string;
}
export const InstancesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
  solutionName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/instances/{instanceName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<InstancesGetInput>;

// Output Schema
export interface InstancesGetOutput {
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
export const InstancesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<InstancesGetOutput>;

// The operation
/**
 * Get Instance Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 * @param instanceName - Name of the instance
 */
export const InstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InstancesGetInput,
  outputSchema: InstancesGetOutput,
}));
// Input Schema
export interface InstancesListBySolutionInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
}
export const InstancesListBySolutionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/instances",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<InstancesListBySolutionInput>;

// Output Schema
export interface InstancesListBySolutionOutput {
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
export const InstancesListBySolutionOutput =
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
  }) as unknown as Schema.Codec<InstancesListBySolutionOutput>;

// The operation
/**
 * List Instance Resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 */
export const InstancesListBySolution = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InstancesListBySolutionInput,
    outputSchema: InstancesListBySolutionOutput,
  }),
);
// Input Schema
export interface InstancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  instanceName: string;
  properties?: {
    solutionVersionId?: string;
    targetId?: string;
    activeState?: "active" | "inactive";
    reconciliationPolicy?: { state?: "inactive" | "active"; interval?: string };
    solutionScope?: string;
  };
}
export const InstancesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
  solutionName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      solutionVersionId: Schema.optional(Schema.String),
      targetId: Schema.optional(Schema.String),
      activeState: Schema.optional(Schema.Literals(["active", "inactive"])),
      reconciliationPolicy: Schema.optional(
        Schema.Struct({
          state: Schema.optional(Schema.Literals(["inactive", "active"])),
          interval: Schema.optional(Schema.String),
        }),
      ),
      solutionScope: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/instances/{instanceName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<InstancesUpdateInput>;

// Output Schema
export interface InstancesUpdateOutput {
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
export const InstancesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<InstancesUpdateOutput>;

// The operation
/**
 * Update an Instance Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 * @param instanceName - Name of the instance
 */
export const InstancesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InstancesUpdateInput,
  outputSchema: InstancesUpdateOutput,
}));
// Input Schema
export interface JobsGetInput {
  resourceUri: string;
  jobName: string;
}
export const JobsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.Edge/jobs/{jobName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<JobsGetInput>;

// Output Schema
export interface JobsGetOutput {
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
export const JobsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobsGetOutput>;

// The operation
/**
 * Get a Job resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param jobName - The name of the Job
 */
export const JobsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsGetInput,
  outputSchema: JobsGetOutput,
}));
// Input Schema
export interface JobsListByTargetInput {
  resourceUri: string;
}
export const JobsListByTargetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.Edge/jobs",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<JobsListByTargetInput>;

// Output Schema
export interface JobsListByTargetOutput {
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
export const JobsListByTargetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<JobsListByTargetOutput>;

// The operation
/**
 * List Jobs by parent resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const JobsListByTarget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsListByTargetInput,
  outputSchema: JobsListByTargetOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Edge/operations",
    apiVersion: "2025-06-01",
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
export interface SchemaReferencesCreateOrUpdateInput {
  resourceUri: string;
  schemaReferenceName: string;
  properties?: {
    schemaId: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  eTag?: string;
}
export const SchemaReferencesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    schemaReferenceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        schemaId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.Edge/schemaReferences/{schemaReferenceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemaReferencesCreateOrUpdateInput>;

// Output Schema
export interface SchemaReferencesCreateOrUpdateOutput {
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
export const SchemaReferencesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SchemaReferencesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Schema Reference Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param schemaReferenceName - The name of the SchemaReference
 */
export const SchemaReferencesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchemaReferencesCreateOrUpdateInput,
    outputSchema: SchemaReferencesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SchemaReferencesDeleteInput {
  resourceUri: string;
  schemaReferenceName: string;
}
export const SchemaReferencesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    schemaReferenceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.Edge/schemaReferences/{schemaReferenceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemaReferencesDeleteInput>;

// Output Schema
export type SchemaReferencesDeleteOutput = void;
export const SchemaReferencesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SchemaReferencesDeleteOutput>;

// The operation
/**
 * Delete a Schema Reference Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param schemaReferenceName - The name of the SchemaReference
 */
export const SchemaReferencesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemaReferencesDeleteInput,
    outputSchema: SchemaReferencesDeleteOutput,
  }),
);
// Input Schema
export interface SchemaReferencesGetInput {
  resourceUri: string;
  schemaReferenceName: string;
}
export const SchemaReferencesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    schemaReferenceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/schemaReferences/{schemaReferenceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemaReferencesGetInput>;

// Output Schema
export interface SchemaReferencesGetOutput {
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
export const SchemaReferencesGetOutput =
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
  }) as unknown as Schema.Codec<SchemaReferencesGetOutput>;

// The operation
/**
 * Get a Schema Reference Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param schemaReferenceName - The name of the SchemaReference
 */
export const SchemaReferencesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchemaReferencesGetInput,
  outputSchema: SchemaReferencesGetOutput,
}));
// Input Schema
export interface SchemaReferencesListByResourceGroupInput {
  resourceUri: string;
}
export const SchemaReferencesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/schemaReferences",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemaReferencesListByResourceGroupInput>;

// Output Schema
export interface SchemaReferencesListByResourceGroupOutput {
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
export const SchemaReferencesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<SchemaReferencesListByResourceGroupOutput>;

// The operation
/**
 * List by specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const SchemaReferencesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchemaReferencesListByResourceGroupInput,
    outputSchema: SchemaReferencesListByResourceGroupOutput,
  }));
// Input Schema
export interface SchemaReferencesUpdateInput {
  resourceUri: string;
  schemaReferenceName: string;
  properties?: { schemaId?: string };
}
export const SchemaReferencesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    schemaReferenceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        schemaId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{resourceUri}/providers/Microsoft.Edge/schemaReferences/{schemaReferenceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemaReferencesUpdateInput>;

// Output Schema
export interface SchemaReferencesUpdateOutput {
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
export const SchemaReferencesUpdateOutput =
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
  }) as unknown as Schema.Codec<SchemaReferencesUpdateOutput>;

// The operation
/**
 * update a Schema Reference Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param schemaReferenceName - The name of the SchemaReference
 */
export const SchemaReferencesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemaReferencesUpdateInput,
    outputSchema: SchemaReferencesUpdateOutput,
  }),
);
// Input Schema
export interface SchemasCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  properties?: {
    currentVersion?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  eTag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const SchemasCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        currentVersion: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemasCreateOrUpdateInput>;

// Output Schema
export interface SchemasCreateOrUpdateOutput {
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
export const SchemasCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SchemasCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Schema Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 */
export const SchemasCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemasCreateOrUpdateInput,
    outputSchema: SchemasCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface SchemasCreateVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  updateType?: "Major" | "Minor" | "Patch";
  version?: string;
  schemaVersion: {
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
  };
}
export const SchemasCreateVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    updateType: Schema.optional(Schema.Literals(["Major", "Minor", "Patch"])),
    version: Schema.optional(Schema.String),
    schemaVersion: Schema.Struct({
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/createVersion",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemasCreateVersionInput>;

// Output Schema
export interface SchemasCreateVersionOutput {
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
export const SchemasCreateVersionOutput =
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
  }) as unknown as Schema.Codec<SchemasCreateVersionOutput>;

// The operation
/**
 * Create a Schema Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 */
export const SchemasCreateVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemasCreateVersionInput,
    outputSchema: SchemasCreateVersionOutput,
  }),
);
// Input Schema
export interface SchemasDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
}
export const SchemasDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  schemaName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<SchemasDeleteInput>;

// Output Schema
export type SchemasDeleteOutput = void;
export const SchemasDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SchemasDeleteOutput>;

// The operation
/**
 * Delete a Schema Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 */
export const SchemasDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchemasDeleteInput,
  outputSchema: SchemasDeleteOutput,
}));
// Input Schema
export interface SchemasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
}
export const SchemasGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  schemaName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}",
    apiVersion: "2026-03-01",
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
 * Get a Schema Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 */
export const SchemasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchemasGetInput,
  outputSchema: SchemasGetOutput,
}));
// Input Schema
export interface SchemasListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SchemasListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemasListByResourceGroupInput>;

// Output Schema
export interface SchemasListByResourceGroupOutput {
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
export const SchemasListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<SchemasListByResourceGroupOutput>;

// The operation
/**
 * List by specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SchemasListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemasListByResourceGroupInput,
    outputSchema: SchemasListByResourceGroupOutput,
  }),
);
// Input Schema
export interface SchemasListBySubscriptionInput {
  subscriptionId: string;
}
export const SchemasListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/schemas",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemasListBySubscriptionInput>;

// Output Schema
export interface SchemasListBySubscriptionOutput {
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
export const SchemasListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<SchemasListBySubscriptionOutput>;

// The operation
/**
 * List by subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SchemasListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemasListBySubscriptionInput,
    outputSchema: SchemasListBySubscriptionOutput,
  }),
);
// Input Schema
export interface SchemasRemoveVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  version: string;
}
export const SchemasRemoveVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    version: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/removeVersion",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemasRemoveVersionInput>;

// Output Schema
export interface SchemasRemoveVersionOutput {
  status: string;
}
export const SchemasRemoveVersionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.String,
  }) as unknown as Schema.Codec<SchemasRemoveVersionOutput>;

// The operation
/**
 * Remove Schema Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 */
export const SchemasRemoveVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemasRemoveVersionInput,
    outputSchema: SchemasRemoveVersionOutput,
  }),
);
// Input Schema
export interface SchemasUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  properties?: {
    currentVersion?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  tags?: Record<string, string>;
}
export const SchemasUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  schemaName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      currentVersion: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Initialized",
          "InProgress",
          "Deleting",
        ]),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<SchemasUpdateInput>;

// Output Schema
export interface SchemasUpdateOutput {
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
export const SchemasUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SchemasUpdateOutput>;

// The operation
/**
 * update a Schema Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 */
export const SchemasUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchemasUpdateInput,
  outputSchema: SchemasUpdateOutput,
}));
// Input Schema
export interface SchemaVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  schemaVersionName: string;
  properties?: {
    value: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  eTag?: string;
}
export const SchemaVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    schemaVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        value: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/versions/{schemaVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemaVersionsCreateOrUpdateInput>;

// Output Schema
export interface SchemaVersionsCreateOrUpdateOutput {
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
export const SchemaVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SchemaVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Schema Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param schemaVersionName - The name of the SchemaVersion
 */
export const SchemaVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchemaVersionsCreateOrUpdateInput,
    outputSchema: SchemaVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SchemaVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  schemaVersionName: string;
}
export const SchemaVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    schemaVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/versions/{schemaVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemaVersionsDeleteInput>;

// Output Schema
export type SchemaVersionsDeleteOutput = void;
export const SchemaVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SchemaVersionsDeleteOutput>;

// The operation
/**
 * Delete a Schema Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param schemaVersionName - The name of the SchemaVersion
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
  schemaName: string;
  schemaVersionName: string;
}
export const SchemaVersionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    schemaVersionName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/versions/{schemaVersionName}",
    apiVersion: "2026-03-01",
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
 * Get a Schema Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param schemaVersionName - The name of the SchemaVersion
 */
export const SchemaVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchemaVersionsGetInput,
  outputSchema: SchemaVersionsGetOutput,
}));
// Input Schema
export interface SchemaVersionsListBySchemaInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
}
export const SchemaVersionsListBySchemaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/versions",
      apiVersion: "2026-03-01",
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
 * List by specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 */
export const SchemaVersionsListBySchema = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemaVersionsListBySchemaInput,
    outputSchema: SchemaVersionsListBySchemaOutput,
  }),
);
// Input Schema
export interface SchemaVersionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  schemaName: string;
  schemaVersionName: string;
  properties?: { value?: string };
}
export const SchemaVersionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schemaName: Schema.String.pipe(T.PathParam()),
    schemaVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        value: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/schemas/{schemaName}/versions/{schemaVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SchemaVersionsUpdateInput>;

// Output Schema
export interface SchemaVersionsUpdateOutput {
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
export const SchemaVersionsUpdateOutput =
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
  }) as unknown as Schema.Codec<SchemaVersionsUpdateOutput>;

// The operation
/**
 * update a Schema Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schemaName - The name of the Schema
 * @param schemaVersionName - The name of the SchemaVersion
 */
export const SchemaVersionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemaVersionsUpdateInput,
    outputSchema: SchemaVersionsUpdateOutput,
  }),
);
// Input Schema
export interface SiteReferencesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  siteReferenceName: string;
  properties?: {
    siteId: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
}
export const SiteReferencesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    siteReferenceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        siteId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/siteReferences/{siteReferenceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SiteReferencesCreateOrUpdateInput>;

// Output Schema
export interface SiteReferencesCreateOrUpdateOutput {
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
export const SiteReferencesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SiteReferencesCreateOrUpdateOutput>;

// The operation
/**
 * Get Site Reference Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param siteReferenceName - The name of the SiteReference
 */
export const SiteReferencesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SiteReferencesCreateOrUpdateInput,
    outputSchema: SiteReferencesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SiteReferencesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  siteReferenceName: string;
}
export const SiteReferencesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    siteReferenceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/siteReferences/{siteReferenceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SiteReferencesDeleteInput>;

// Output Schema
export type SiteReferencesDeleteOutput = void;
export const SiteReferencesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SiteReferencesDeleteOutput>;

// The operation
/**
 * Get Site Reference Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param siteReferenceName - The name of the SiteReference
 */
export const SiteReferencesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SiteReferencesDeleteInput,
    outputSchema: SiteReferencesDeleteOutput,
  }),
);
// Input Schema
export interface SiteReferencesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  siteReferenceName: string;
}
export const SiteReferencesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    siteReferenceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/siteReferences/{siteReferenceName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<SiteReferencesGetInput>;

// Output Schema
export interface SiteReferencesGetOutput {
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
export const SiteReferencesGetOutput =
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
  }) as unknown as Schema.Codec<SiteReferencesGetOutput>;

// The operation
/**
 * Get Site Reference Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param siteReferenceName - The name of the SiteReference
 */
export const SiteReferencesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SiteReferencesGetInput,
  outputSchema: SiteReferencesGetOutput,
}));
// Input Schema
export interface SiteReferencesListByContextInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
}
export const SiteReferencesListByContextInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/siteReferences",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SiteReferencesListByContextInput>;

// Output Schema
export interface SiteReferencesListByContextOutput {
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
export const SiteReferencesListByContextOutput =
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
  }) as unknown as Schema.Codec<SiteReferencesListByContextOutput>;

// The operation
/**
 * List Site Reference Resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 */
export const SiteReferencesListByContext = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SiteReferencesListByContextInput,
    outputSchema: SiteReferencesListByContextOutput,
  }),
);
// Input Schema
export interface SiteReferencesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  siteReferenceName: string;
  properties?: { siteId?: string };
}
export const SiteReferencesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    siteReferenceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        siteId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/siteReferences/{siteReferenceName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SiteReferencesUpdateInput>;

// Output Schema
export interface SiteReferencesUpdateOutput {
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
export const SiteReferencesUpdateOutput =
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
  }) as unknown as Schema.Codec<SiteReferencesUpdateOutput>;

// The operation
/**
 * Get Site Reference Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param siteReferenceName - The name of the SiteReference
 */
export const SiteReferencesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SiteReferencesUpdateInput,
    outputSchema: SiteReferencesUpdateOutput,
  }),
);
// Input Schema
export interface SitesByServiceGroupCreateOrUpdateInput {
  servicegroupName: string;
  siteName: string;
  properties?: {
    displayName?: string;
    description?: string;
    siteAddress?: {
      streetAddress1?: string;
      streetAddress2?: string;
      city?: string;
      stateOrProvince?: string;
      country?: string;
      postalCode?: string;
    };
    labels?: Record<string, string>;
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const SitesByServiceGroupCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    servicegroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        siteAddress: Schema.optional(
          Schema.Struct({
            streetAddress1: Schema.optional(Schema.String),
            streetAddress2: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            stateOrProvince: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            postalCode: Schema.optional(Schema.String),
          }),
        ),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Management/serviceGroups/{servicegroupName}/providers/Microsoft.Edge/sites/{siteName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<SitesByServiceGroupCreateOrUpdateInput>;

// Output Schema
export interface SitesByServiceGroupCreateOrUpdateOutput {
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
export const SitesByServiceGroupCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SitesByServiceGroupCreateOrUpdateOutput>;

// The operation
/**
 * Create a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param servicegroupName - The name of the service group
 * @param siteName - The name of the Site
 */
export const SitesByServiceGroupCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SitesByServiceGroupCreateOrUpdateInput,
    outputSchema: SitesByServiceGroupCreateOrUpdateOutput,
  }));
// Input Schema
export interface SitesByServiceGroupDeleteInput {
  servicegroupName: string;
  siteName: string;
}
export const SitesByServiceGroupDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    servicegroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Management/serviceGroups/{servicegroupName}/providers/Microsoft.Edge/sites/{siteName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<SitesByServiceGroupDeleteInput>;

// Output Schema
export type SitesByServiceGroupDeleteOutput = void;
export const SitesByServiceGroupDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SitesByServiceGroupDeleteOutput>;

// The operation
/**
 * Delete a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param servicegroupName - The name of the service group
 * @param siteName - The name of the Site
 */
export const SitesByServiceGroupDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesByServiceGroupDeleteInput,
    outputSchema: SitesByServiceGroupDeleteOutput,
  }),
);
// Input Schema
export interface SitesByServiceGroupGetInput {
  servicegroupName: string;
  siteName: string;
}
export const SitesByServiceGroupGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    servicegroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/serviceGroups/{servicegroupName}/providers/Microsoft.Edge/sites/{siteName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<SitesByServiceGroupGetInput>;

// Output Schema
export interface SitesByServiceGroupGetOutput {
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
export const SitesByServiceGroupGetOutput =
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
  }) as unknown as Schema.Codec<SitesByServiceGroupGetOutput>;

// The operation
/**
 * Get a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param servicegroupName - The name of the service group
 * @param siteName - The name of the Site
 */
export const SitesByServiceGroupGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesByServiceGroupGetInput,
    outputSchema: SitesByServiceGroupGetOutput,
  }),
);
// Input Schema
export interface SitesByServiceGroupListByServiceGroupInput {
  servicegroupName: string;
}
export const SitesByServiceGroupListByServiceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    servicegroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/serviceGroups/{servicegroupName}/providers/Microsoft.Edge/sites",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<SitesByServiceGroupListByServiceGroupInput>;

// Output Schema
export interface SitesByServiceGroupListByServiceGroupOutput {
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
export const SitesByServiceGroupListByServiceGroupOutput =
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
  }) as unknown as Schema.Codec<SitesByServiceGroupListByServiceGroupOutput>;

// The operation
/**
 * List Site resources by scope
 *
 * @param api-version - The API version to use for this operation.
 * @param servicegroupName - The name of the service group
 */
export const SitesByServiceGroupListByServiceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SitesByServiceGroupListByServiceGroupInput,
    outputSchema: SitesByServiceGroupListByServiceGroupOutput,
  }));
// Input Schema
export interface SitesByServiceGroupUpdateInput {
  servicegroupName: string;
  siteName: string;
  properties?: {
    displayName?: string;
    description?: string;
    siteAddress?: {
      streetAddress1?: string;
      streetAddress2?: string;
      city?: string;
      stateOrProvince?: string;
      country?: string;
      postalCode?: string;
    };
    labels?: Record<string, string>;
  };
}
export const SitesByServiceGroupUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    servicegroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        siteAddress: Schema.optional(
          Schema.Struct({
            streetAddress1: Schema.optional(Schema.String),
            streetAddress2: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            stateOrProvince: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            postalCode: Schema.optional(Schema.String),
          }),
        ),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Management/serviceGroups/{servicegroupName}/providers/Microsoft.Edge/sites/{siteName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<SitesByServiceGroupUpdateInput>;

// Output Schema
export interface SitesByServiceGroupUpdateOutput {
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
export const SitesByServiceGroupUpdateOutput =
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
  }) as unknown as Schema.Codec<SitesByServiceGroupUpdateOutput>;

// The operation
/**
 * Update a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param servicegroupName - The name of the service group
 * @param siteName - The name of the Site
 */
export const SitesByServiceGroupUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesByServiceGroupUpdateInput,
    outputSchema: SitesByServiceGroupUpdateOutput,
  }),
);
// Input Schema
export interface SitesBySubscriptionCreateOrUpdateInput {
  subscriptionId: string;
  siteName: string;
  properties?: {
    displayName?: string;
    description?: string;
    siteAddress?: {
      streetAddress1?: string;
      streetAddress2?: string;
      city?: string;
      stateOrProvince?: string;
      country?: string;
      postalCode?: string;
    };
    labels?: Record<string, string>;
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const SitesBySubscriptionCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        siteAddress: Schema.optional(
          Schema.Struct({
            streetAddress1: Schema.optional(Schema.String),
            streetAddress2: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            stateOrProvince: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            postalCode: Schema.optional(Schema.String),
          }),
        ),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<SitesBySubscriptionCreateOrUpdateInput>;

// Output Schema
export interface SitesBySubscriptionCreateOrUpdateOutput {
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
export const SitesBySubscriptionCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SitesBySubscriptionCreateOrUpdateOutput>;

// The operation
/**
 * Create a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param siteName - The name of the Site
 */
export const SitesBySubscriptionCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SitesBySubscriptionCreateOrUpdateInput,
    outputSchema: SitesBySubscriptionCreateOrUpdateOutput,
  }));
// Input Schema
export interface SitesBySubscriptionDeleteInput {
  subscriptionId: string;
  siteName: string;
}
export const SitesBySubscriptionDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<SitesBySubscriptionDeleteInput>;

// Output Schema
export type SitesBySubscriptionDeleteOutput = void;
export const SitesBySubscriptionDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SitesBySubscriptionDeleteOutput>;

// The operation
/**
 * Delete a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param siteName - The name of the Site
 */
export const SitesBySubscriptionDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesBySubscriptionDeleteInput,
    outputSchema: SitesBySubscriptionDeleteOutput,
  }),
);
// Input Schema
export interface SitesBySubscriptionGetInput {
  subscriptionId: string;
  siteName: string;
}
export const SitesBySubscriptionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<SitesBySubscriptionGetInput>;

// Output Schema
export interface SitesBySubscriptionGetOutput {
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
export const SitesBySubscriptionGetOutput =
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
  }) as unknown as Schema.Codec<SitesBySubscriptionGetOutput>;

// The operation
/**
 * Get a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param siteName - The name of the Site
 */
export const SitesBySubscriptionGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesBySubscriptionGetInput,
    outputSchema: SitesBySubscriptionGetOutput,
  }),
);
// Input Schema
export interface SitesBySubscriptionListInput {
  subscriptionId: string;
}
export const SitesBySubscriptionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<SitesBySubscriptionListInput>;

// Output Schema
export interface SitesBySubscriptionListOutput {
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
export const SitesBySubscriptionListOutput =
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
  }) as unknown as Schema.Codec<SitesBySubscriptionListOutput>;

// The operation
/**
 * List Site resources by scope
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SitesBySubscriptionList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesBySubscriptionListInput,
    outputSchema: SitesBySubscriptionListOutput,
  }),
);
// Input Schema
export interface SitesBySubscriptionUpdateInput {
  subscriptionId: string;
  siteName: string;
  properties?: {
    displayName?: string;
    description?: string;
    siteAddress?: {
      streetAddress1?: string;
      streetAddress2?: string;
      city?: string;
      stateOrProvince?: string;
      country?: string;
      postalCode?: string;
    };
    labels?: Record<string, string>;
  };
}
export const SitesBySubscriptionUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        siteAddress: Schema.optional(
          Schema.Struct({
            streetAddress1: Schema.optional(Schema.String),
            streetAddress2: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            stateOrProvince: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            postalCode: Schema.optional(Schema.String),
          }),
        ),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/sites/{siteName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<SitesBySubscriptionUpdateInput>;

// Output Schema
export interface SitesBySubscriptionUpdateOutput {
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
export const SitesBySubscriptionUpdateOutput =
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
  }) as unknown as Schema.Codec<SitesBySubscriptionUpdateOutput>;

// The operation
/**
 * Update a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param siteName - The name of the Site
 */
export const SitesBySubscriptionUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesBySubscriptionUpdateInput,
    outputSchema: SitesBySubscriptionUpdateOutput,
  }),
);
// Input Schema
export interface SitesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  siteName: string;
  properties?: {
    displayName?: string;
    description?: string;
    siteAddress?: {
      streetAddress1?: string;
      streetAddress2?: string;
      city?: string;
      stateOrProvince?: string;
      country?: string;
      postalCode?: string;
    };
    labels?: Record<string, string>;
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const SitesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        siteAddress: Schema.optional(
          Schema.Struct({
            streetAddress1: Schema.optional(Schema.String),
            streetAddress2: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            stateOrProvince: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            postalCode: Schema.optional(Schema.String),
          }),
        ),
        labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}",
      apiVersion: "2025-06-01",
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
 * Create a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - The name of the Site
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<SitesDeleteInput>;

// Output Schema
export type SitesDeleteOutput = void;
export const SitesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SitesDeleteOutput>;

// The operation
/**
 * Delete a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - The name of the Site
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}",
    apiVersion: "2025-06-01",
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
 * Get a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - The name of the Site
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<SitesListByResourceGroupInput>;

// Output Schema
export interface SitesListByResourceGroupOutput {
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
export const SitesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<SitesListByResourceGroupOutput>;

// The operation
/**
 * List Site resources by scope
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SitesListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesListByResourceGroupInput,
    outputSchema: SitesListByResourceGroupOutput,
  }),
);
// Input Schema
export interface SitesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  siteName: string;
  properties?: {
    displayName?: string;
    description?: string;
    siteAddress?: {
      streetAddress1?: string;
      streetAddress2?: string;
      city?: string;
      stateOrProvince?: string;
      country?: string;
      postalCode?: string;
    };
    labels?: Record<string, string>;
  };
}
export const SitesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  siteName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      displayName: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      siteAddress: Schema.optional(
        Schema.Struct({
          streetAddress1: Schema.optional(Schema.String),
          streetAddress2: Schema.optional(Schema.String),
          city: Schema.optional(Schema.String),
          stateOrProvince: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          postalCode: Schema.optional(Schema.String),
        }),
      ),
      labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/sites/{siteName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<SitesUpdateInput>;

// Output Schema
export interface SitesUpdateOutput {
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
export const SitesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SitesUpdateOutput>;

// The operation
/**
 * Update a Site
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - The name of the Site
 */
export const SitesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SitesUpdateInput,
  outputSchema: SitesUpdateOutput,
}));
// Input Schema
export interface SolutionMetadatasGetInput {
  resourceUri: string;
  solutionMetadataName: string;
}
export const SolutionMetadatasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    solutionMetadataName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/solutionMetadatas/{solutionMetadataName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionMetadatasGetInput>;

// Output Schema
export interface SolutionMetadatasGetOutput {
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
export const SolutionMetadatasGetOutput =
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
  }) as unknown as Schema.Codec<SolutionMetadatasGetOutput>;

// The operation
/**
 * Get a Solution resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param solutionMetadataName - Name of the solution metadata
 */
export const SolutionMetadatasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionMetadatasGetInput,
    outputSchema: SolutionMetadatasGetOutput,
  }),
);
// Input Schema
export interface SolutionMetadatasListByParentInput {
  resourceUri: string;
}
export const SolutionMetadatasListByParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/solutionMetadatas",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionMetadatasListByParentInput>;

// Output Schema
export interface SolutionMetadatasListByParentOutput {
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
export const SolutionMetadatasListByParentOutput =
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
  }) as unknown as Schema.Codec<SolutionMetadatasListByParentOutput>;

// The operation
/**
 * List Solution resources
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 */
export const SolutionMetadatasListByParent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionMetadatasListByParentInput,
    outputSchema: SolutionMetadatasListByParentOutput,
  }));
// Input Schema
export interface SolutionMetadataVersionsGetInput {
  resourceUri: string;
  solutionMetadataName: string;
  solutionMetadataVersionName: string;
}
export const SolutionMetadataVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    solutionMetadataName: Schema.String.pipe(T.PathParam()),
    solutionMetadataVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/solutionMetadatas/{solutionMetadataName}/versions/{solutionMetadataVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionMetadataVersionsGetInput>;

// Output Schema
export interface SolutionMetadataVersionsGetOutput {
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
export const SolutionMetadataVersionsGetOutput =
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
  }) as unknown as Schema.Codec<SolutionMetadataVersionsGetOutput>;

// The operation
/**
 * Get a Solution resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param solutionMetadataName - Name of the solution metadata
 * @param solutionMetadataVersionName - Name of the solution metadata version
 */
export const SolutionMetadataVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionMetadataVersionsGetInput,
    outputSchema: SolutionMetadataVersionsGetOutput,
  }),
);
// Input Schema
export interface SolutionMetadataVersionsListByParentInput {
  resourceUri: string;
  solutionMetadataName: string;
}
export const SolutionMetadataVersionsListByParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    solutionMetadataName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.Edge/solutionMetadatas/{solutionMetadataName}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionMetadataVersionsListByParentInput>;

// Output Schema
export interface SolutionMetadataVersionsListByParentOutput {
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
export const SolutionMetadataVersionsListByParentOutput =
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
  }) as unknown as Schema.Codec<SolutionMetadataVersionsListByParentOutput>;

// The operation
/**
 * List Solution resources
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param solutionMetadataName - Name of the solution metadata
 */
export const SolutionMetadataVersionsListByParent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionMetadataVersionsListByParentInput,
    outputSchema: SolutionMetadataVersionsListByParentOutput,
  }));
// Input Schema
export interface SolutionSchemasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  solutionTemplateVersionName: string;
  solutionSchemaName: string;
}
export const SolutionSchemasGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    solutionTemplateVersionName: Schema.String.pipe(T.PathParam()),
    solutionSchemaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/versions/{solutionTemplateVersionName}/solutionSchemas/{solutionSchemaName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionSchemasGetInput>;

// Output Schema
export interface SolutionSchemasGetOutput {
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
export const SolutionSchemasGetOutput =
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
  }) as unknown as Schema.Codec<SolutionSchemasGetOutput>;

// The operation
/**
 * Get a SolutionSchema Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 * @param solutionTemplateVersionName - The name of the SolutionTemplateVersion
 * @param solutionSchemaName - The name of the SolutionSchemaProperties
 */
export const SolutionSchemasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SolutionSchemasGetInput,
  outputSchema: SolutionSchemasGetOutput,
}));
// Input Schema
export interface SolutionSchemasListBySolutionTemplateVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  solutionTemplateVersionName: string;
}
export const SolutionSchemasListBySolutionTemplateVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    solutionTemplateVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/versions/{solutionTemplateVersionName}/solutionSchemas",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionSchemasListBySolutionTemplateVersionInput>;

// Output Schema
export interface SolutionSchemasListBySolutionTemplateVersionOutput {
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
export const SolutionSchemasListBySolutionTemplateVersionOutput =
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
  }) as unknown as Schema.Codec<SolutionSchemasListBySolutionTemplateVersionOutput>;

// The operation
/**
 * List by SolutionTemplateVersion
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 * @param solutionTemplateVersionName - The name of the SolutionTemplateVersion
 */
export const SolutionSchemasListBySolutionTemplateVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionSchemasListBySolutionTemplateVersionInput,
    outputSchema: SolutionSchemasListBySolutionTemplateVersionOutput,
  }));
// Input Schema
export interface SolutionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  properties?: {
    solutionTemplateId?: string;
    displayName?: string;
    availableSolutionTemplateVersions?: {
      solutionTemplateVersion: string;
      latestConfigRevision: string;
      isConfigured: boolean;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  extendedLocation?: { name: string; type: "EdgeZone" | "CustomLocation" };
  eTag?: string;
}
export const SolutionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        solutionTemplateId: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        availableSolutionTemplateVersions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              solutionTemplateVersion: Schema.String,
              latestConfigRevision: Schema.String,
              isConfigured: Schema.Boolean,
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["EdgeZone", "CustomLocation"]),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionsCreateOrUpdateInput>;

// Output Schema
export interface SolutionsCreateOrUpdateOutput {
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
export const SolutionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SolutionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Solution Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 */
export const SolutionsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionsCreateOrUpdateInput,
    outputSchema: SolutionsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface SolutionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
}
export const SolutionsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
  solutionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<SolutionsDeleteInput>;

// Output Schema
export type SolutionsDeleteOutput = void;
export const SolutionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SolutionsDeleteOutput>;

// The operation
/**
 * Delete a Solution Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 */
export const SolutionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SolutionsDeleteInput,
  outputSchema: SolutionsDeleteOutput,
}));
// Input Schema
export interface SolutionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
}
export const SolutionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
  solutionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<SolutionsGetInput>;

// Output Schema
export interface SolutionsGetOutput {
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
export const SolutionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SolutionsGetOutput>;

// The operation
/**
 * Get a Solution resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 */
export const SolutionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SolutionsGetInput,
  outputSchema: SolutionsGetOutput,
}));
// Input Schema
export interface SolutionsListByTargetInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
}
export const SolutionsListByTargetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionsListByTargetInput>;

// Output Schema
export interface SolutionsListByTargetOutput {
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
export const SolutionsListByTargetOutput =
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
  }) as unknown as Schema.Codec<SolutionsListByTargetOutput>;

// The operation
/**
 * List Solution resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const SolutionsListByTarget = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionsListByTargetInput,
    outputSchema: SolutionsListByTargetOutput,
  }),
);
// Input Schema
export interface SolutionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  properties?: {
    solutionTemplateId?: string;
    displayName?: string;
    availableSolutionTemplateVersions?: {
      solutionTemplateVersion: string;
      latestConfigRevision: string;
      isConfigured: boolean;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
}
export const SolutionsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
  solutionName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      solutionTemplateId: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      availableSolutionTemplateVersions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            solutionTemplateVersion: Schema.String,
            latestConfigRevision: Schema.String,
            isConfigured: Schema.Boolean,
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Initialized",
          "InProgress",
          "Deleting",
        ]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<SolutionsUpdateInput>;

// Output Schema
export interface SolutionsUpdateOutput {
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
export const SolutionsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SolutionsUpdateOutput>;

// The operation
/**
 * Update a Solution Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 */
export const SolutionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SolutionsUpdateInput,
  outputSchema: SolutionsUpdateOutput,
}));
// Input Schema
export interface SolutionTemplatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  properties?: {
    uniqueIdentifier?: string;
    description: string;
    capabilities: string[];
    latestVersion?: string;
    state?: "active" | "inactive";
    enableExternalValidation?: boolean;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  eTag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const SolutionTemplatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uniqueIdentifier: Schema.optional(Schema.String),
        description: Schema.String,
        capabilities: Schema.Array(Schema.String),
        latestVersion: Schema.optional(Schema.String),
        state: Schema.optional(Schema.Literals(["active", "inactive"])),
        enableExternalValidation: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplatesCreateOrUpdateInput>;

// Output Schema
export interface SolutionTemplatesCreateOrUpdateOutput {
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
export const SolutionTemplatesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SolutionTemplatesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Solution Template Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 */
export const SolutionTemplatesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplatesCreateOrUpdateInput,
    outputSchema: SolutionTemplatesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SolutionTemplatesCreateVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  updateType?: "Major" | "Minor" | "Patch";
  version?: string;
  solutionTemplateVersion: {
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
  };
}
export const SolutionTemplatesCreateVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    updateType: Schema.optional(Schema.Literals(["Major", "Minor", "Patch"])),
    version: Schema.optional(Schema.String),
    solutionTemplateVersion: Schema.Struct({
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/createVersion",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplatesCreateVersionInput>;

// Output Schema
export interface SolutionTemplatesCreateVersionOutput {
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
export const SolutionTemplatesCreateVersionOutput =
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
  }) as unknown as Schema.Codec<SolutionTemplatesCreateVersionOutput>;

// The operation
/**
 * Create a Solution Template Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 */
export const SolutionTemplatesCreateVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplatesCreateVersionInput,
    outputSchema: SolutionTemplatesCreateVersionOutput,
  }));
// Input Schema
export interface SolutionTemplatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
}
export const SolutionTemplatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplatesDeleteInput>;

// Output Schema
export type SolutionTemplatesDeleteOutput = void;
export const SolutionTemplatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SolutionTemplatesDeleteOutput>;

// The operation
/**
 * Delete a Solution Template Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 */
export const SolutionTemplatesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionTemplatesDeleteInput,
    outputSchema: SolutionTemplatesDeleteOutput,
  }),
);
// Input Schema
export interface SolutionTemplatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
}
export const SolutionTemplatesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplatesGetInput>;

// Output Schema
export interface SolutionTemplatesGetOutput {
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
export const SolutionTemplatesGetOutput =
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
  }) as unknown as Schema.Codec<SolutionTemplatesGetOutput>;

// The operation
/**
 * Get a Solution Template Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 */
export const SolutionTemplatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionTemplatesGetInput,
    outputSchema: SolutionTemplatesGetOutput,
  }),
);
// Input Schema
export interface SolutionTemplatesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SolutionTemplatesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplatesListByResourceGroupInput>;

// Output Schema
export interface SolutionTemplatesListByResourceGroupOutput {
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
export const SolutionTemplatesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<SolutionTemplatesListByResourceGroupOutput>;

// The operation
/**
 * List by specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SolutionTemplatesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplatesListByResourceGroupInput,
    outputSchema: SolutionTemplatesListByResourceGroupOutput,
  }));
// Input Schema
export interface SolutionTemplatesListBySubscriptionInput {
  subscriptionId: string;
}
export const SolutionTemplatesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/solutionTemplates",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplatesListBySubscriptionInput>;

// Output Schema
export interface SolutionTemplatesListBySubscriptionOutput {
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
export const SolutionTemplatesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<SolutionTemplatesListBySubscriptionOutput>;

// The operation
/**
 * List by subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SolutionTemplatesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplatesListBySubscriptionInput,
    outputSchema: SolutionTemplatesListBySubscriptionOutput,
  }));
// Input Schema
export interface SolutionTemplatesRemoveVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  version: string;
}
export const SolutionTemplatesRemoveVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    version: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/removeVersion",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplatesRemoveVersionInput>;

// Output Schema
export type SolutionTemplatesRemoveVersionOutput = void;
export const SolutionTemplatesRemoveVersionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SolutionTemplatesRemoveVersionOutput>;

// The operation
/**
 * Remove Solution Template Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 */
export const SolutionTemplatesRemoveVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplatesRemoveVersionInput,
    outputSchema: SolutionTemplatesRemoveVersionOutput,
  }));
// Input Schema
export interface SolutionTemplatesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  tags?: Record<string, string>;
  properties?: {
    description?: string;
    capabilities?: string[];
    state?: "active" | "inactive";
    enableExternalValidation?: boolean;
  };
}
export const SolutionTemplatesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        capabilities: Schema.optional(Schema.Array(Schema.String)),
        state: Schema.optional(Schema.Literals(["active", "inactive"])),
        enableExternalValidation: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplatesUpdateInput>;

// Output Schema
export interface SolutionTemplatesUpdateOutput {
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
export const SolutionTemplatesUpdateOutput =
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
  }) as unknown as Schema.Codec<SolutionTemplatesUpdateOutput>;

// The operation
/**
 * update a Solution Template Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 */
export const SolutionTemplatesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionTemplatesUpdateInput,
    outputSchema: SolutionTemplatesUpdateOutput,
  }),
);
// Input Schema
export interface SolutionTemplateVersionsBulkDeploySolutionInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  solutionTemplateVersionName: string;
  targets: { solutionVersionId: string }[];
}
export const SolutionTemplateVersionsBulkDeploySolutionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    solutionTemplateVersionName: Schema.String.pipe(T.PathParam()),
    targets: Schema.Array(
      Schema.Struct({
        solutionVersionId: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/versions/{solutionTemplateVersionName}/bulkDeploySolution",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplateVersionsBulkDeploySolutionInput>;

// Output Schema
export type SolutionTemplateVersionsBulkDeploySolutionOutput = void;
export const SolutionTemplateVersionsBulkDeploySolutionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SolutionTemplateVersionsBulkDeploySolutionOutput>;

// The operation
/**
 * Post request for bulk deploy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 * @param solutionTemplateVersionName - The name of the SolutionTemplateVersion
 */
export const SolutionTemplateVersionsBulkDeploySolution =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplateVersionsBulkDeploySolutionInput,
    outputSchema: SolutionTemplateVersionsBulkDeploySolutionOutput,
  }));
// Input Schema
export interface SolutionTemplateVersionsBulkPublishSolutionInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  solutionTemplateVersionName: string;
  targets: {
    targetId: string;
    solutionDependencies?: {
      solutionVersionId?: string;
      solutionTemplateId?: string;
      solutionTemplateVersion?: string;
      solutionInstanceName?: string;
      targetId?: string;
      dependencies?: unknown[];
    }[];
    solutionInstanceName?: string;
    solutionVersionId?: string;
    solutionConfiguration?: string;
  }[];
  solutionInstanceName?: string;
  solutionDependencies?: {
    solutionVersionId?: string;
    solutionTemplateId?: string;
    solutionTemplateVersion?: string;
    solutionInstanceName?: string;
    targetId?: string;
    dependencies?: unknown[];
  }[];
  solutionConfiguration?: string;
}
export const SolutionTemplateVersionsBulkPublishSolutionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    solutionTemplateVersionName: Schema.String.pipe(T.PathParam()),
    targets: Schema.Array(
      Schema.Struct({
        targetId: Schema.String,
        solutionDependencies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              solutionVersionId: Schema.optional(Schema.String),
              solutionTemplateId: Schema.optional(Schema.String),
              solutionTemplateVersion: Schema.optional(Schema.String),
              solutionInstanceName: Schema.optional(Schema.String),
              targetId: Schema.optional(Schema.String),
              dependencies: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
        ),
        solutionInstanceName: Schema.optional(Schema.String),
        solutionVersionId: Schema.optional(Schema.String),
        solutionConfiguration: Schema.optional(Schema.String),
      }),
    ),
    solutionInstanceName: Schema.optional(Schema.String),
    solutionDependencies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          solutionVersionId: Schema.optional(Schema.String),
          solutionTemplateId: Schema.optional(Schema.String),
          solutionTemplateVersion: Schema.optional(Schema.String),
          solutionInstanceName: Schema.optional(Schema.String),
          targetId: Schema.optional(Schema.String),
          dependencies: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
    ),
    solutionConfiguration: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/versions/{solutionTemplateVersionName}/bulkPublishSolution",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplateVersionsBulkPublishSolutionInput>;

// Output Schema
export type SolutionTemplateVersionsBulkPublishSolutionOutput = void;
export const SolutionTemplateVersionsBulkPublishSolutionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SolutionTemplateVersionsBulkPublishSolutionOutput>;

// The operation
/**
 * Post request for bulk publish
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 * @param solutionTemplateVersionName - The name of the SolutionTemplateVersion
 */
export const SolutionTemplateVersionsBulkPublishSolution =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplateVersionsBulkPublishSolutionInput,
    outputSchema: SolutionTemplateVersionsBulkPublishSolutionOutput,
  }));
// Input Schema
export interface SolutionTemplateVersionsBulkReviewSolutionInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  solutionTemplateVersionName: string;
  targets: {
    targetId: string;
    solutionDependencies?: {
      solutionVersionId?: string;
      solutionTemplateId?: string;
      solutionTemplateVersion?: string;
      solutionInstanceName?: string;
      targetId?: string;
      dependencies?: unknown[];
    }[];
    solutionInstanceName?: string;
    solutionConfiguration?: string;
  }[];
  solutionInstanceName?: string;
  solutionDependencies?: {
    solutionVersionId?: string;
    solutionTemplateId?: string;
    solutionTemplateVersion?: string;
    solutionInstanceName?: string;
    targetId?: string;
    dependencies?: unknown[];
  }[];
  solutionConfiguration?: string;
}
export const SolutionTemplateVersionsBulkReviewSolutionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    solutionTemplateVersionName: Schema.String.pipe(T.PathParam()),
    targets: Schema.Array(
      Schema.Struct({
        targetId: Schema.String,
        solutionDependencies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              solutionVersionId: Schema.optional(Schema.String),
              solutionTemplateId: Schema.optional(Schema.String),
              solutionTemplateVersion: Schema.optional(Schema.String),
              solutionInstanceName: Schema.optional(Schema.String),
              targetId: Schema.optional(Schema.String),
              dependencies: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
        ),
        solutionInstanceName: Schema.optional(Schema.String),
        solutionConfiguration: Schema.optional(Schema.String),
      }),
    ),
    solutionInstanceName: Schema.optional(Schema.String),
    solutionDependencies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          solutionVersionId: Schema.optional(Schema.String),
          solutionTemplateId: Schema.optional(Schema.String),
          solutionTemplateVersion: Schema.optional(Schema.String),
          solutionInstanceName: Schema.optional(Schema.String),
          targetId: Schema.optional(Schema.String),
          dependencies: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
    ),
    solutionConfiguration: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/versions/{solutionTemplateVersionName}/bulkReviewSolution",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplateVersionsBulkReviewSolutionInput>;

// Output Schema
export type SolutionTemplateVersionsBulkReviewSolutionOutput = void;
export const SolutionTemplateVersionsBulkReviewSolutionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SolutionTemplateVersionsBulkReviewSolutionOutput>;

// The operation
/**
 * Post request for bulk review
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 * @param solutionTemplateVersionName - The name of the SolutionTemplateVersion
 */
export const SolutionTemplateVersionsBulkReviewSolution =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplateVersionsBulkReviewSolutionInput,
    outputSchema: SolutionTemplateVersionsBulkReviewSolutionOutput,
  }));
// Input Schema
export interface SolutionTemplateVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  solutionTemplateVersionName: string;
  properties?: {
    configurations: string;
    specification: Record<string, unknown>;
    orchestratorType?: "TO";
    internalState?:
      | "PendingValidation"
      | "Validated"
      | "ValidatedWithSchema"
      | "ValidatedWithoutSchema";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  eTag?: string;
}
export const SolutionTemplateVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    solutionTemplateVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configurations: Schema.String,
        specification: Schema.Record(Schema.String, Schema.Unknown),
        orchestratorType: Schema.optional(Schema.Literals(["TO"])),
        internalState: Schema.optional(
          Schema.Literals([
            "PendingValidation",
            "Validated",
            "ValidatedWithSchema",
            "ValidatedWithoutSchema",
          ]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/versions/{solutionTemplateVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplateVersionsCreateOrUpdateInput>;

// Output Schema
export interface SolutionTemplateVersionsCreateOrUpdateOutput {
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
export const SolutionTemplateVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SolutionTemplateVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Solution Template Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 * @param solutionTemplateVersionName - The name of the SolutionTemplateVersion
 */
export const SolutionTemplateVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplateVersionsCreateOrUpdateInput,
    outputSchema: SolutionTemplateVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SolutionTemplateVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  solutionTemplateVersionName: string;
}
export const SolutionTemplateVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    solutionTemplateVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/versions/{solutionTemplateVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplateVersionsDeleteInput>;

// Output Schema
export type SolutionTemplateVersionsDeleteOutput = void;
export const SolutionTemplateVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SolutionTemplateVersionsDeleteOutput>;

// The operation
/**
 * Delete a Solution Template Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 * @param solutionTemplateVersionName - The name of the SolutionTemplateVersion
 */
export const SolutionTemplateVersionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplateVersionsDeleteInput,
    outputSchema: SolutionTemplateVersionsDeleteOutput,
  }));
// Input Schema
export interface SolutionTemplateVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  solutionTemplateVersionName: string;
}
export const SolutionTemplateVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    solutionTemplateVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/versions/{solutionTemplateVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplateVersionsGetInput>;

// Output Schema
export interface SolutionTemplateVersionsGetOutput {
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
export const SolutionTemplateVersionsGetOutput =
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
  }) as unknown as Schema.Codec<SolutionTemplateVersionsGetOutput>;

// The operation
/**
 * Get a Solution Template Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 * @param solutionTemplateVersionName - The name of the SolutionTemplateVersion
 */
export const SolutionTemplateVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionTemplateVersionsGetInput,
    outputSchema: SolutionTemplateVersionsGetOutput,
  }),
);
// Input Schema
export interface SolutionTemplateVersionsListBySolutionTemplateInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
}
export const SolutionTemplateVersionsListBySolutionTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplateVersionsListBySolutionTemplateInput>;

// Output Schema
export interface SolutionTemplateVersionsListBySolutionTemplateOutput {
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
export const SolutionTemplateVersionsListBySolutionTemplateOutput =
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
  }) as unknown as Schema.Codec<SolutionTemplateVersionsListBySolutionTemplateOutput>;

// The operation
/**
 * List Solution Template Version Resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 */
export const SolutionTemplateVersionsListBySolutionTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplateVersionsListBySolutionTemplateInput,
    outputSchema: SolutionTemplateVersionsListBySolutionTemplateOutput,
  }));
// Input Schema
export interface SolutionTemplateVersionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  solutionTemplateName: string;
  solutionTemplateVersionName: string;
  properties?: {
    configurations?: string;
    specification?: Record<string, unknown>;
    orchestratorType?: "TO";
  };
}
export const SolutionTemplateVersionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    solutionTemplateName: Schema.String.pipe(T.PathParam()),
    solutionTemplateVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configurations: Schema.optional(Schema.String),
        specification: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        orchestratorType: Schema.optional(Schema.Literals(["TO"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/solutionTemplates/{solutionTemplateName}/versions/{solutionTemplateVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionTemplateVersionsUpdateInput>;

// Output Schema
export interface SolutionTemplateVersionsUpdateOutput {
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
export const SolutionTemplateVersionsUpdateOutput =
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
  }) as unknown as Schema.Codec<SolutionTemplateVersionsUpdateOutput>;

// The operation
/**
 * Update a Solution Template Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param solutionTemplateName - The name of the SolutionTemplate
 * @param solutionTemplateVersionName - The name of the SolutionTemplateVersion
 */
export const SolutionTemplateVersionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionTemplateVersionsUpdateInput,
    outputSchema: SolutionTemplateVersionsUpdateOutput,
  }));
// Input Schema
export interface SolutionVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  solutionVersionName: string;
  properties?: {
    solutionTemplateVersionId?: string;
    revision?: number;
    targetDisplayName?: string;
    configuration?: string;
    targetLevelConfiguration?: string;
    specification: Record<string, unknown>;
    reviewId?: string;
    externalValidationId?: string;
    state?:
      | "InReview"
      | "UpgradeInReview"
      | "ReadyToDeploy"
      | "ReadyToUpgrade"
      | "Deploying"
      | "Deployed"
      | "Failed"
      | "Undeployed"
      | "PendingExternalValidation"
      | "ExternalValidationFailed"
      | "Staging"
      | "NotApplicable";
    currentStage?: {
      displayState: string;
      stage:
        | "Configuration"
        | "Publish"
        | "Deployment"
        | "Uninstallation"
        | "ExternalValidation"
        | "Staging"
        | "Unstaging";
      status: "Pending" | "InProgress" | "Completed" | "Failed" | "None";
      startTime?: string;
      endTime?: string;
      childStages?: unknown[];
    };
    stages?: {
      displayState: string;
      stage:
        | "Configuration"
        | "Publish"
        | "Deployment"
        | "Uninstallation"
        | "ExternalValidation"
        | "Staging"
        | "Unstaging";
      status: "Pending" | "InProgress" | "Completed" | "Failed" | "None";
      startTime?: string;
      endTime?: string;
      childStages?: unknown[];
    }[];
    solutionInstanceName?: string;
    solutionDependencies?: {
      solutionVersionId: string;
      solutionInstanceName?: string;
      solutionTemplateVersionId: string;
      targetId: string;
      dependencies?: unknown[];
    }[];
    errorDetails?: {
      code?: string;
      message?: string;
      target?: string;
      details?: {
        code?: string;
        message?: string;
        target?: string;
        details?: unknown[];
        additionalInfo?: { type?: string; info?: unknown }[];
      }[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
    latestActionTrackingUri?: string;
    latestActionTriggeredBy?: string;
    actionType?:
      | "deploy"
      | "publish"
      | "staging"
      | "externalValidation"
      | "uninstall";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  extendedLocation?: { name: string; type: "EdgeZone" | "CustomLocation" };
  eTag?: string;
}
export const SolutionVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionName: Schema.String.pipe(T.PathParam()),
    solutionVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        solutionTemplateVersionId: Schema.optional(Schema.String),
        revision: Schema.optional(Schema.Number),
        targetDisplayName: Schema.optional(Schema.String),
        configuration: Schema.optional(Schema.String),
        targetLevelConfiguration: Schema.optional(Schema.String),
        specification: Schema.Record(Schema.String, Schema.Unknown),
        reviewId: Schema.optional(Schema.String),
        externalValidationId: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals([
            "InReview",
            "UpgradeInReview",
            "ReadyToDeploy",
            "ReadyToUpgrade",
            "Deploying",
            "Deployed",
            "Failed",
            "Undeployed",
            "PendingExternalValidation",
            "ExternalValidationFailed",
            "Staging",
            "NotApplicable",
          ]),
        ),
        currentStage: Schema.optional(
          Schema.Struct({
            displayState: Schema.String,
            stage: Schema.Literals([
              "Configuration",
              "Publish",
              "Deployment",
              "Uninstallation",
              "ExternalValidation",
              "Staging",
              "Unstaging",
            ]),
            status: Schema.Literals([
              "Pending",
              "InProgress",
              "Completed",
              "Failed",
              "None",
            ]),
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            childStages: Schema.optional(Schema.Array(Schema.Unknown)),
          }),
        ),
        stages: Schema.optional(
          Schema.Array(
            Schema.Struct({
              displayState: Schema.String,
              stage: Schema.Literals([
                "Configuration",
                "Publish",
                "Deployment",
                "Uninstallation",
                "ExternalValidation",
                "Staging",
                "Unstaging",
              ]),
              status: Schema.Literals([
                "Pending",
                "InProgress",
                "Completed",
                "Failed",
                "None",
              ]),
              startTime: Schema.optional(Schema.String),
              endTime: Schema.optional(Schema.String),
              childStages: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
        ),
        solutionInstanceName: Schema.optional(Schema.String),
        solutionDependencies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              solutionVersionId: Schema.String,
              solutionInstanceName: Schema.optional(Schema.String),
              solutionTemplateVersionId: Schema.String,
              targetId: Schema.String,
              dependencies: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
        ),
        errorDetails: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            details: Schema.optional(
              Schema.Array(
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
            ),
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
        latestActionTrackingUri: Schema.optional(Schema.String),
        latestActionTriggeredBy: Schema.optional(Schema.String),
        actionType: Schema.optional(
          Schema.Literals([
            "deploy",
            "publish",
            "staging",
            "externalValidation",
            "uninstall",
          ]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["EdgeZone", "CustomLocation"]),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/versions/{solutionVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionVersionsCreateOrUpdateInput>;

// Output Schema
export interface SolutionVersionsCreateOrUpdateOutput {
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
export const SolutionVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SolutionVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Solution Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 * @param solutionVersionName - Name of the solution version
 */
export const SolutionVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionVersionsCreateOrUpdateInput,
    outputSchema: SolutionVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SolutionVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  solutionVersionName: string;
}
export const SolutionVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionName: Schema.String.pipe(T.PathParam()),
    solutionVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/versions/{solutionVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionVersionsDeleteInput>;

// Output Schema
export type SolutionVersionsDeleteOutput = void;
export const SolutionVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SolutionVersionsDeleteOutput>;

// The operation
/**
 * Delete a Solution Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 * @param solutionVersionName - Name of the solution version
 */
export const SolutionVersionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionVersionsDeleteInput,
    outputSchema: SolutionVersionsDeleteOutput,
  }),
);
// Input Schema
export interface SolutionVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  solutionVersionName: string;
}
export const SolutionVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionName: Schema.String.pipe(T.PathParam()),
    solutionVersionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/versions/{solutionVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionVersionsGetInput>;

// Output Schema
export interface SolutionVersionsGetOutput {
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
export const SolutionVersionsGetOutput =
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
  }) as unknown as Schema.Codec<SolutionVersionsGetOutput>;

// The operation
/**
 * Get a Solution Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 * @param solutionVersionName - Name of the solution version
 */
export const SolutionVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SolutionVersionsGetInput,
  outputSchema: SolutionVersionsGetOutput,
}));
// Input Schema
export interface SolutionVersionsListBySolutionInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
}
export const SolutionVersionsListBySolutionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionVersionsListBySolutionInput>;

// Output Schema
export interface SolutionVersionsListBySolutionOutput {
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
export const SolutionVersionsListBySolutionOutput =
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
  }) as unknown as Schema.Codec<SolutionVersionsListBySolutionOutput>;

// The operation
/**
 * List Solution Version Resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 */
export const SolutionVersionsListBySolution =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionVersionsListBySolutionInput,
    outputSchema: SolutionVersionsListBySolutionOutput,
  }));
// Input Schema
export interface SolutionVersionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionName: string;
  solutionVersionName: string;
  properties?: { specification?: Record<string, unknown> };
}
export const SolutionVersionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionName: Schema.String.pipe(T.PathParam()),
    solutionVersionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        specification: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/solutions/{solutionName}/versions/{solutionVersionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<SolutionVersionsUpdateInput>;

// Output Schema
export interface SolutionVersionsUpdateOutput {
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
export const SolutionVersionsUpdateOutput =
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
  }) as unknown as Schema.Codec<SolutionVersionsUpdateOutput>;

// The operation
/**
 * Update a Solution Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 * @param solutionName - Name of the solution
 * @param solutionVersionName - Name of the solution version
 */
export const SolutionVersionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionVersionsUpdateInput,
    outputSchema: SolutionVersionsUpdateOutput,
  }),
);
// Input Schema
export interface TargetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  properties?: {
    description: string;
    displayName: string;
    contextId: string;
    targetSpecification: Record<string, unknown>;
    capabilities: string[];
    hierarchyLevel: string;
    status?: {
      lastModified?: string;
      deployed?: number;
      expectedRunningJobId?: number;
      runningJobId?: number;
      status?: string;
      statusDetails?: string;
      generation?: number;
      targetStatuses?: {
        name?: string;
        status?: string;
        componentStatuses?: { name?: string; status?: string }[];
      }[];
    };
    solutionScope?: string;
    state?: "active" | "inactive";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  eTag?: string;
  extendedLocation?: { name: string; type: "EdgeZone" | "CustomLocation" };
  tags?: Record<string, string>;
  location: string;
}
export const TargetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.String,
        displayName: Schema.String,
        contextId: Schema.String,
        targetSpecification: Schema.Record(Schema.String, Schema.Unknown),
        capabilities: Schema.Array(Schema.String),
        hierarchyLevel: Schema.String,
        status: Schema.optional(
          Schema.Struct({
            lastModified: Schema.optional(Schema.String),
            deployed: Schema.optional(Schema.Number),
            expectedRunningJobId: Schema.optional(Schema.Number),
            runningJobId: Schema.optional(Schema.Number),
            status: Schema.optional(Schema.String),
            statusDetails: Schema.optional(Schema.String),
            generation: Schema.optional(Schema.Number),
            targetStatuses: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  status: Schema.optional(Schema.String),
                  componentStatuses: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        status: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
        solutionScope: Schema.optional(Schema.String),
        state: Schema.optional(Schema.Literals(["active", "inactive"])),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["EdgeZone", "CustomLocation"]),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<TargetsCreateOrUpdateInput>;

// Output Schema
export interface TargetsCreateOrUpdateOutput {
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
export const TargetsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TargetsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Target Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const TargetsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TargetsCreateOrUpdateInput,
    outputSchema: TargetsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface TargetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  forceDelete?: boolean;
}
export const TargetsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
  forceDelete: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<TargetsDeleteInput>;

// Output Schema
export type TargetsDeleteOutput = void;
export const TargetsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TargetsDeleteOutput>;

// The operation
/**
 * Delete a Target Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param forceDelete - Force delete
 * @param targetName - Name of the target
 */
export const TargetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TargetsDeleteInput,
  outputSchema: TargetsDeleteOutput,
}));
// Input Schema
export interface TargetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
}
export const TargetsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<TargetsGetInput>;

// Output Schema
export interface TargetsGetOutput {
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
export const TargetsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TargetsGetOutput>;

// The operation
/**
 * Get a Target Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const TargetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TargetsGetInput,
  outputSchema: TargetsGetOutput,
}));
// Input Schema
export interface TargetsInstallSolutionInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionVersionId: string;
}
export const TargetsInstallSolutionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionVersionId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/installSolution",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<TargetsInstallSolutionInput>;

// Output Schema
export type TargetsInstallSolutionOutput = void;
export const TargetsInstallSolutionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TargetsInstallSolutionOutput>;

// The operation
/**
 * Post request to deploy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const TargetsInstallSolution = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TargetsInstallSolutionInput,
    outputSchema: TargetsInstallSolutionOutput,
  }),
);
// Input Schema
export interface TargetsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const TargetsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<TargetsListByResourceGroupInput>;

// Output Schema
export interface TargetsListByResourceGroupOutput {
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
export const TargetsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<TargetsListByResourceGroupOutput>;

// The operation
/**
 * List by specified resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const TargetsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TargetsListByResourceGroupInput,
    outputSchema: TargetsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface TargetsListBySubscriptionInput {
  subscriptionId: string;
}
export const TargetsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Edge/targets",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<TargetsListBySubscriptionInput>;

// Output Schema
export interface TargetsListBySubscriptionOutput {
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
export const TargetsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<TargetsListBySubscriptionOutput>;

// The operation
/**
 * List by subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const TargetsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TargetsListBySubscriptionInput,
    outputSchema: TargetsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface TargetsPublishSolutionVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionVersionId: string;
}
export const TargetsPublishSolutionVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionVersionId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/publishSolutionVersion",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<TargetsPublishSolutionVersionInput>;

// Output Schema
export interface TargetsPublishSolutionVersionOutput {
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
export const TargetsPublishSolutionVersionOutput =
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
  }) as unknown as Schema.Codec<TargetsPublishSolutionVersionOutput>;

// The operation
/**
 * Post request to publish
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const TargetsPublishSolutionVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TargetsPublishSolutionVersionInput,
    outputSchema: TargetsPublishSolutionVersionOutput,
  }));
// Input Schema
export interface TargetsRemoveRevisionInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionTemplateId: string;
  solutionVersion: string;
}
export const TargetsRemoveRevisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionTemplateId: Schema.String,
    solutionVersion: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/removeRevision",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<TargetsRemoveRevisionInput>;

// Output Schema
export type TargetsRemoveRevisionOutput = void;
export const TargetsRemoveRevisionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TargetsRemoveRevisionOutput>;

// The operation
/**
 * Post request to remove solution version revision
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const TargetsRemoveRevision = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TargetsRemoveRevisionInput,
    outputSchema: TargetsRemoveRevisionOutput,
  }),
);
// Input Schema
export interface TargetsResolveConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionTemplateVersionId: string;
  solutionInstanceName?: string;
  solutionDependencies?: {
    solutionVersionId?: string;
    solutionTemplateId?: string;
    solutionTemplateVersion?: string;
    solutionInstanceName?: string;
    targetId?: string;
    dependencies?: unknown[];
  }[];
}
export const TargetsResolveConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionTemplateVersionId: Schema.String,
    solutionInstanceName: Schema.optional(Schema.String),
    solutionDependencies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          solutionVersionId: Schema.optional(Schema.String),
          solutionTemplateId: Schema.optional(Schema.String),
          solutionTemplateVersion: Schema.optional(Schema.String),
          solutionInstanceName: Schema.optional(Schema.String),
          targetId: Schema.optional(Schema.String),
          dependencies: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/resolveConfiguration",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<TargetsResolveConfigurationInput>;

// Output Schema
export interface TargetsResolveConfigurationOutput {
  configuration: string;
}
export const TargetsResolveConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration: Schema.String,
  }) as unknown as Schema.Codec<TargetsResolveConfigurationOutput>;

// The operation
/**
 * Post request to resolve configuration
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const TargetsResolveConfiguration = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TargetsResolveConfigurationInput,
    outputSchema: TargetsResolveConfigurationOutput,
  }),
);
// Input Schema
export interface TargetsReviewSolutionVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionTemplateVersionId: string;
  solutionInstanceName?: string;
  solutionDependencies?: {
    solutionVersionId?: string;
    solutionTemplateId?: string;
    solutionTemplateVersion?: string;
    solutionInstanceName?: string;
    targetId?: string;
    dependencies?: unknown[];
  }[];
}
export const TargetsReviewSolutionVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionTemplateVersionId: Schema.String,
    solutionInstanceName: Schema.optional(Schema.String),
    solutionDependencies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          solutionVersionId: Schema.optional(Schema.String),
          solutionTemplateId: Schema.optional(Schema.String),
          solutionTemplateVersion: Schema.optional(Schema.String),
          solutionInstanceName: Schema.optional(Schema.String),
          targetId: Schema.optional(Schema.String),
          dependencies: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/reviewSolutionVersion",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<TargetsReviewSolutionVersionInput>;

// Output Schema
export interface TargetsReviewSolutionVersionOutput {
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
export const TargetsReviewSolutionVersionOutput =
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
  }) as unknown as Schema.Codec<TargetsReviewSolutionVersionOutput>;

// The operation
/**
 * Post request to review configuration
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const TargetsReviewSolutionVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TargetsReviewSolutionVersionInput,
    outputSchema: TargetsReviewSolutionVersionOutput,
  }));
// Input Schema
export interface TargetsUninstallSolutionInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionTemplateId: string;
  solutionInstanceName?: string;
}
export const TargetsUninstallSolutionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionTemplateId: Schema.String,
    solutionInstanceName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/uninstallSolution",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<TargetsUninstallSolutionInput>;

// Output Schema
export type TargetsUninstallSolutionOutput = void;
export const TargetsUninstallSolutionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TargetsUninstallSolutionOutput>;

// The operation
/**
 * Post request to uninstall
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const TargetsUninstallSolution = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TargetsUninstallSolutionInput,
    outputSchema: TargetsUninstallSolutionOutput,
  }),
);
// Input Schema
export interface TargetsUnstageSolutionVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionVersionId: string;
}
export const TargetsUnstageSolutionVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionVersionId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/unstageSolutionVersion",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<TargetsUnstageSolutionVersionInput>;

// Output Schema
export interface TargetsUnstageSolutionVersionOutput {
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
export const TargetsUnstageSolutionVersionOutput =
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
  }) as unknown as Schema.Codec<TargetsUnstageSolutionVersionOutput>;

// The operation
/**
 * Post request to unstage solution version
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const TargetsUnstageSolutionVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TargetsUnstageSolutionVersionInput,
    outputSchema: TargetsUnstageSolutionVersionOutput,
  }));
// Input Schema
export interface TargetsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  tags?: Record<string, string>;
  properties?: {
    description?: string;
    displayName?: string;
    contextId?: string;
    targetSpecification?: Record<string, unknown>;
    capabilities?: string[];
    hierarchyLevel?: string;
    solutionScope?: string;
    state?: "active" | "inactive";
  };
}
export const TargetsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      contextId: Schema.optional(Schema.String),
      targetSpecification: Schema.optional(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      capabilities: Schema.optional(Schema.Array(Schema.String)),
      hierarchyLevel: Schema.optional(Schema.String),
      solutionScope: Schema.optional(Schema.String),
      state: Schema.optional(Schema.Literals(["active", "inactive"])),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<TargetsUpdateInput>;

// Output Schema
export interface TargetsUpdateOutput {
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
export const TargetsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TargetsUpdateOutput>;

// The operation
/**
 * update a Target Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const TargetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TargetsUpdateInput,
  outputSchema: TargetsUpdateOutput,
}));
// Input Schema
export interface TargetsUpdateExternalValidationStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  targetName: string;
  solutionVersionId: string;
  errorDetails?: {
    code?: string;
    message?: string;
    target?: string;
    details?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    }[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
  externalValidationId: string;
  validationStatus: "Valid" | "Invalid";
}
export const TargetsUpdateExternalValidationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    solutionVersionId: Schema.String,
    errorDetails: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(
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
        ),
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
    externalValidationId: Schema.String,
    validationStatus: Schema.Literals(["Valid", "Invalid"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/targets/{targetName}/updateExternalValidationStatus",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<TargetsUpdateExternalValidationStatusInput>;

// Output Schema
export interface TargetsUpdateExternalValidationStatusOutput {
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
export const TargetsUpdateExternalValidationStatusOutput =
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
  }) as unknown as Schema.Codec<TargetsUpdateExternalValidationStatusOutput>;

// The operation
/**
 * Post request to update external validation status
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param targetName - Name of the target
 */
export const TargetsUpdateExternalValidationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TargetsUpdateExternalValidationStatusInput,
    outputSchema: TargetsUpdateExternalValidationStatusOutput,
  }));
// Input Schema
export interface WorkflowsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
  properties?: {
    workflowTemplateId?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  extendedLocation?: { name: string; type: "EdgeZone" | "CustomLocation" };
  eTag?: string;
}
export const WorkflowsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        workflowTemplateId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["EdgeZone", "CustomLocation"]),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsCreateOrUpdateInput>;

// Output Schema
export interface WorkflowsCreateOrUpdateOutput {
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
export const WorkflowsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WorkflowsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Workflow resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 */
export const WorkflowsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowsCreateOrUpdateInput,
    outputSchema: WorkflowsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface WorkflowsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
}
export const WorkflowsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  contextName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<WorkflowsDeleteInput>;

// Output Schema
export type WorkflowsDeleteOutput = void;
export const WorkflowsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowsDeleteOutput>;

// The operation
/**
 * Delete a Workflow resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 */
export const WorkflowsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowsDeleteInput,
  outputSchema: WorkflowsDeleteOutput,
}));
// Input Schema
export interface WorkflowsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
}
export const WorkflowsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  contextName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<WorkflowsGetInput>;

// Output Schema
export interface WorkflowsGetOutput {
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
export const WorkflowsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WorkflowsGetOutput>;

// The operation
/**
 * Get a Workflow resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 */
export const WorkflowsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowsGetInput,
  outputSchema: WorkflowsGetOutput,
}));
// Input Schema
export interface WorkflowsListByContextInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
}
export const WorkflowsListByContextInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkflowsListByContextInput>;

// Output Schema
export interface WorkflowsListByContextOutput {
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
export const WorkflowsListByContextOutput =
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
  }) as unknown as Schema.Codec<WorkflowsListByContextOutput>;

// The operation
/**
 * List Workflow resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 */
export const WorkflowsListByContext = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowsListByContextInput,
    outputSchema: WorkflowsListByContextOutput,
  }),
);
// Input Schema
export interface WorkflowsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
  properties?: {
    workflowTemplateId?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
}
export const WorkflowsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  contextName: Schema.String.pipe(T.PathParam()),
  workflowName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      workflowTemplateId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Initialized",
          "InProgress",
          "Deleting",
        ]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}",
    apiVersion: "2026-03-01",
  }),
) as unknown as Schema.Codec<WorkflowsUpdateInput>;

// Output Schema
export interface WorkflowsUpdateOutput {
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
export const WorkflowsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WorkflowsUpdateOutput>;

// The operation
/**
 * update a Workflow resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 */
export const WorkflowsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowsUpdateInput,
  outputSchema: WorkflowsUpdateOutput,
}));
// Input Schema
export interface WorkflowVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
  versionName: string;
  properties?: {
    revision?: number;
    configuration?: string;
    stageSpec: {
      name: string;
      specification?: Record<string, unknown>;
      tasks?: {
        name: string;
        targetId?: string;
        specification: Record<string, unknown>;
      }[];
      taskOption?: {
        concurrency?: number;
        errorAction?: {
          mode?: "stopOnAnyFailure" | "stopOnNFailures" | "silentlyContinue";
          maxToleratedFailures?: number;
        };
      };
    }[];
    reviewId?: string;
    state?:
      | "InReview"
      | "UpgradeInReview"
      | "ReadyToDeploy"
      | "ReadyToUpgrade"
      | "Deploying"
      | "Deployed"
      | "Failed"
      | "Undeployed"
      | "PendingExternalValidation"
      | "ExternalValidationFailed"
      | "Staging"
      | "NotApplicable";
    specification?: Record<string, unknown>;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Initialized"
      | "InProgress"
      | "Deleting";
  };
  extendedLocation?: { name: string; type: "EdgeZone" | "CustomLocation" };
  eTag?: string;
}
export const WorkflowVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        revision: Schema.optional(Schema.Number),
        configuration: Schema.optional(Schema.String),
        stageSpec: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            specification: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            tasks: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  targetId: Schema.optional(Schema.String),
                  specification: Schema.Record(Schema.String, Schema.Unknown),
                }),
              ),
            ),
            taskOption: Schema.optional(
              Schema.Struct({
                concurrency: Schema.optional(Schema.Number),
                errorAction: Schema.optional(
                  Schema.Struct({
                    mode: Schema.optional(
                      Schema.Literals([
                        "stopOnAnyFailure",
                        "stopOnNFailures",
                        "silentlyContinue",
                      ]),
                    ),
                    maxToleratedFailures: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
          }),
        ),
        reviewId: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals([
            "InReview",
            "UpgradeInReview",
            "ReadyToDeploy",
            "ReadyToUpgrade",
            "Deploying",
            "Deployed",
            "Failed",
            "Undeployed",
            "PendingExternalValidation",
            "ExternalValidationFailed",
            "Staging",
            "NotApplicable",
          ]),
        ),
        specification: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Initialized",
            "InProgress",
            "Deleting",
          ]),
        ),
      }),
    ),
    extendedLocation: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals(["EdgeZone", "CustomLocation"]),
      }),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}/versions/{versionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkflowVersionsCreateOrUpdateInput>;

// Output Schema
export interface WorkflowVersionsCreateOrUpdateOutput {
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
export const WorkflowVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WorkflowVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Workflow Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 * @param versionName - The name of the workflowVersion.
 */
export const WorkflowVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowVersionsCreateOrUpdateInput,
    outputSchema: WorkflowVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface WorkflowVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
  versionName: string;
}
export const WorkflowVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}/versions/{versionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkflowVersionsDeleteInput>;

// Output Schema
export type WorkflowVersionsDeleteOutput = void;
export const WorkflowVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkflowVersionsDeleteOutput>;

// The operation
/**
 * Delete a Workflow Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 * @param versionName - The name of the workflowVersion.
 */
export const WorkflowVersionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowVersionsDeleteInput,
    outputSchema: WorkflowVersionsDeleteOutput,
  }),
);
// Input Schema
export interface WorkflowVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
  versionName: string;
}
export const WorkflowVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}/versions/{versionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkflowVersionsGetInput>;

// Output Schema
export interface WorkflowVersionsGetOutput {
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
export const WorkflowVersionsGetOutput =
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
  }) as unknown as Schema.Codec<WorkflowVersionsGetOutput>;

// The operation
/**
 * Get a Workflow Version Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 * @param versionName - The name of the workflowVersion.
 */
export const WorkflowVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkflowVersionsGetInput,
  outputSchema: WorkflowVersionsGetOutput,
}));
// Input Schema
export interface WorkflowVersionsListByWorkflowInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
}
export const WorkflowVersionsListByWorkflowInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}/versions",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkflowVersionsListByWorkflowInput>;

// Output Schema
export interface WorkflowVersionsListByWorkflowOutput {
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
export const WorkflowVersionsListByWorkflowOutput =
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
  }) as unknown as Schema.Codec<WorkflowVersionsListByWorkflowOutput>;

// The operation
/**
 * List Workflow Version Resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 */
export const WorkflowVersionsListByWorkflow =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkflowVersionsListByWorkflowInput,
    outputSchema: WorkflowVersionsListByWorkflowOutput,
  }));
// Input Schema
export interface WorkflowVersionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  contextName: string;
  workflowName: string;
  versionName: string;
  properties?: {
    stageSpec?: {
      name: string;
      specification?: Record<string, unknown>;
      tasks?: {
        name: string;
        targetId?: string;
        specification: Record<string, unknown>;
      }[];
      taskOption?: {
        concurrency?: number;
        errorAction?: {
          mode?: "stopOnAnyFailure" | "stopOnNFailures" | "silentlyContinue";
          maxToleratedFailures?: number;
        };
      };
    }[];
    specification?: Record<string, unknown>;
  };
}
export const WorkflowVersionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    contextName: Schema.String.pipe(T.PathParam()),
    workflowName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        stageSpec: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              specification: Schema.optional(
                Schema.Record(Schema.String, Schema.Unknown),
              ),
              tasks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    targetId: Schema.optional(Schema.String),
                    specification: Schema.Record(Schema.String, Schema.Unknown),
                  }),
                ),
              ),
              taskOption: Schema.optional(
                Schema.Struct({
                  concurrency: Schema.optional(Schema.Number),
                  errorAction: Schema.optional(
                    Schema.Struct({
                      mode: Schema.optional(
                        Schema.Literals([
                          "stopOnAnyFailure",
                          "stopOnNFailures",
                          "silentlyContinue",
                        ]),
                      ),
                      maxToleratedFailures: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        specification: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/contexts/{contextName}/workflows/{workflowName}/versions/{versionName}",
      apiVersion: "2026-03-01",
    }),
  ) as unknown as Schema.Codec<WorkflowVersionsUpdateInput>;

// Output Schema
export interface WorkflowVersionsUpdateOutput {
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
export const WorkflowVersionsUpdateOutput =
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
  }) as unknown as Schema.Codec<WorkflowVersionsUpdateOutput>;

// The operation
/**
 * update an WorkflowVersion Resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param contextName - The name of the Context.
 * @param workflowName - Name of the workflow
 * @param versionName - The name of the workflowVersion.
 */
export const WorkflowVersionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkflowVersionsUpdateInput,
    outputSchema: WorkflowVersionsUpdateOutput,
  }),
);
