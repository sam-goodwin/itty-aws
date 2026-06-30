/**
 * Azure Devtestlabs API
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
export interface ArmTemplatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  artifactSourceName: string;
  name: string;
  $expand?: string;
}
export const ArmTemplatesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  artifactSourceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/armtemplates/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<ArmTemplatesGetInput>;

// Output Schema
export interface ArmTemplatesGetOutput {
  id?: string;
  name?: string;
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
export const ArmTemplatesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ArmTemplatesGetOutput>;

// The operation
/**
 * Get azure resource manager template.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param artifactSourceName - The name of the artifact source.
 * @param name - The name of the azure resource manager template.
 * @param $expand - Specify the $expand query. Example: 'properties($select=displayName)'
 */
export const ArmTemplatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArmTemplatesGetInput,
  outputSchema: ArmTemplatesGetOutput,
}));
// Input Schema
export interface ArmTemplatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  artifactSourceName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const ArmTemplatesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  artifactSourceName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $orderby: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/armtemplates",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<ArmTemplatesListInput>;

// Output Schema
export interface ArmTemplatesListOutput {
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
export const ArmTemplatesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<ArmTemplatesListOutput>;

// The operation
/**
 * List azure resource manager templates in a given artifact source.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param artifactSourceName - The name of the artifact source.
 * @param $expand - Specify the $expand query. Example: 'properties($select=displayName)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const ArmTemplatesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArmTemplatesListInput,
  outputSchema: ArmTemplatesListOutput,
}));
// Input Schema
export interface ArtifactsGenerateArmTemplateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  artifactSourceName: string;
  name: string;
  virtualMachineName?: string;
  parameters?: { name?: string; value?: string }[];
  location?: string;
  fileUploadOptions?: "UploadFilesAndGenerateSasTokens" | "None";
}
export const ArtifactsGenerateArmTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    artifactSourceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.optional(Schema.String),
    parameters: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
    location: Schema.optional(Schema.String),
    fileUploadOptions: Schema.optional(
      Schema.Literals(["UploadFilesAndGenerateSasTokens", "None"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts/{name}/generateArmTemplate",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ArtifactsGenerateArmTemplateInput>;

// Output Schema
export interface ArtifactsGenerateArmTemplateOutput {
  template?: Record<string, unknown>;
  parameters?: Record<string, unknown>;
}
export const ArtifactsGenerateArmTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    template: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }) as unknown as Schema.Codec<ArtifactsGenerateArmTemplateOutput>;

// The operation
/**
 * Generates an ARM template for the given artifact, uploads the required files to a storage account, and validates the generated artifact.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param artifactSourceName - The name of the artifact source.
 * @param name - The name of the artifact.
 */
export const ArtifactsGenerateArmTemplate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactsGenerateArmTemplateInput,
    outputSchema: ArtifactsGenerateArmTemplateOutput,
  }));
// Input Schema
export interface ArtifactsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  artifactSourceName: string;
  name: string;
  $expand?: string;
}
export const ArtifactsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  artifactSourceName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts/{name}",
    apiVersion: "2018-09-15",
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
 * Get artifact.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param artifactSourceName - The name of the artifact source.
 * @param name - The name of the artifact.
 * @param $expand - Specify the $expand query. Example: 'properties($select=title)'
 */
export const ArtifactsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArtifactsGetInput,
  outputSchema: ArtifactsGetOutput,
}));
// Input Schema
export interface ArtifactsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  artifactSourceName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const ArtifactsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  artifactSourceName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $orderby: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<ArtifactsListInput>;

// Output Schema
export interface ArtifactsListOutput {
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
export const ArtifactsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ArtifactsListOutput>;

// The operation
/**
 * List artifacts in a given artifact source.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param artifactSourceName - The name of the artifact source.
 * @param $expand - Specify the $expand query. Example: 'properties($select=title)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const ArtifactsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArtifactsListInput,
  outputSchema: ArtifactsListOutput,
}));
// Input Schema
export interface ArtifactSourcesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  properties: {
    displayName?: string;
    uri?: string;
    sourceType?: "VsoGit" | "GitHub" | "StorageAccount";
    folderPath?: string;
    armTemplateFolderPath?: string;
    branchRef?: string;
    securityToken?: string;
    status?: "Enabled" | "Disabled";
    createdDate?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const ArtifactSourcesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      displayName: Schema.optional(Schema.String),
      uri: Schema.optional(Schema.String),
      sourceType: Schema.optional(
        Schema.Literals(["VsoGit", "GitHub", "StorageAccount"]),
      ),
      folderPath: Schema.optional(Schema.String),
      armTemplateFolderPath: Schema.optional(Schema.String),
      branchRef: Schema.optional(Schema.String),
      securityToken: Schema.optional(Schema.String),
      status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      createdDate: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ArtifactSourcesCreateOrUpdateInput>;

// Output Schema
export interface ArtifactSourcesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ArtifactSourcesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ArtifactSourcesCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing artifact source.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the artifact source.
 */
export const ArtifactSourcesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ArtifactSourcesCreateOrUpdateInput,
    outputSchema: ArtifactSourcesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ArtifactSourcesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const ArtifactSourcesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ArtifactSourcesDeleteInput>;

// Output Schema
export type ArtifactSourcesDeleteOutput = void;
export const ArtifactSourcesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ArtifactSourcesDeleteOutput>;

// The operation
/**
 * Delete artifact source.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the artifact source.
 */
export const ArtifactSourcesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArtifactSourcesDeleteInput,
    outputSchema: ArtifactSourcesDeleteOutput,
  }),
);
// Input Schema
export interface ArtifactSourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  $expand?: string;
}
export const ArtifactSourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ArtifactSourcesGetInput>;

// Output Schema
export interface ArtifactSourcesGetOutput {
  id?: string;
  name?: string;
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
export const ArtifactSourcesGetOutput =
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
  }) as unknown as Schema.Codec<ArtifactSourcesGetOutput>;

// The operation
/**
 * Get artifact source.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the artifact source.
 * @param $expand - Specify the $expand query. Example: 'properties($select=displayName)'
 */
export const ArtifactSourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArtifactSourcesGetInput,
  outputSchema: ArtifactSourcesGetOutput,
}));
// Input Schema
export interface ArtifactSourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const ArtifactSourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ArtifactSourcesListInput>;

// Output Schema
export interface ArtifactSourcesListOutput {
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
export const ArtifactSourcesListOutput =
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
  }) as unknown as Schema.Codec<ArtifactSourcesListOutput>;

// The operation
/**
 * List artifact sources in a given lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param $expand - Specify the $expand query. Example: 'properties($select=displayName)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const ArtifactSourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ArtifactSourcesListInput,
  outputSchema: ArtifactSourcesListOutput,
}));
// Input Schema
export interface ArtifactSourcesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  tags?: Record<string, string>;
}
export const ArtifactSourcesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ArtifactSourcesUpdateInput>;

// Output Schema
export interface ArtifactSourcesUpdateOutput {
  id?: string;
  name?: string;
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
export const ArtifactSourcesUpdateOutput =
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
  }) as unknown as Schema.Codec<ArtifactSourcesUpdateOutput>;

// The operation
/**
 * Allows modifying tags of artifact sources. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the artifact source.
 */
export const ArtifactSourcesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ArtifactSourcesUpdateInput,
    outputSchema: ArtifactSourcesUpdateOutput,
  }),
);
// Input Schema
export interface CostsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  properties: {
    targetCost?: {
      status?: "Enabled" | "Disabled";
      target?: number;
      costThresholds?: {
        thresholdId?: string;
        percentageThreshold?: { thresholdValue?: number };
        displayOnChart?: "Enabled" | "Disabled";
        sendNotificationWhenExceeded?: "Enabled" | "Disabled";
        notificationSent?: string;
      }[];
      cycleStartDateTime?: string;
      cycleEndDateTime?: string;
      cycleType?: "CalendarMonth" | "Custom";
    };
    labCostSummary?: { estimatedLabCost?: number };
    labCostDetails?: {
      date?: string;
      cost?: number;
      costType?: "Unavailable" | "Reported" | "Projected";
    }[];
    resourceCosts?: {
      resourcename?: string;
      resourceUId?: string;
      resourceCost?: number;
      resourceType?: string;
      resourceOwner?: string;
      resourcePricingTier?: string;
      resourceStatus?: string;
      resourceId?: string;
      externalResourceId?: string;
    }[];
    currencyCode?: string;
    startDateTime?: string;
    endDateTime?: string;
    createdDate?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const CostsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      targetCost: Schema.optional(
        Schema.Struct({
          status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          target: Schema.optional(Schema.Number),
          costThresholds: Schema.optional(
            Schema.Array(
              Schema.Struct({
                thresholdId: Schema.optional(Schema.String),
                percentageThreshold: Schema.optional(
                  Schema.Struct({
                    thresholdValue: Schema.optional(Schema.Number),
                  }),
                ),
                displayOnChart: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                sendNotificationWhenExceeded: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                notificationSent: Schema.optional(Schema.String),
              }),
            ),
          ),
          cycleStartDateTime: Schema.optional(Schema.String),
          cycleEndDateTime: Schema.optional(Schema.String),
          cycleType: Schema.optional(
            Schema.Literals(["CalendarMonth", "Custom"]),
          ),
        }),
      ),
      labCostSummary: Schema.optional(
        Schema.Struct({
          estimatedLabCost: Schema.optional(Schema.Number),
        }),
      ),
      labCostDetails: Schema.optional(
        Schema.Array(
          Schema.Struct({
            date: Schema.optional(Schema.String),
            cost: Schema.optional(Schema.Number),
            costType: Schema.optional(
              Schema.Literals(["Unavailable", "Reported", "Projected"]),
            ),
          }),
        ),
      ),
      resourceCosts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resourcename: Schema.optional(Schema.String),
            resourceUId: Schema.optional(Schema.String),
            resourceCost: Schema.optional(Schema.Number),
            resourceType: Schema.optional(Schema.String),
            resourceOwner: Schema.optional(Schema.String),
            resourcePricingTier: Schema.optional(Schema.String),
            resourceStatus: Schema.optional(Schema.String),
            resourceId: Schema.optional(Schema.String),
            externalResourceId: Schema.optional(Schema.String),
          }),
        ),
      ),
      currencyCode: Schema.optional(Schema.String),
      startDateTime: Schema.optional(Schema.String),
      endDateTime: Schema.optional(Schema.String),
      createdDate: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costs/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<CostsCreateOrUpdateInput>;

// Output Schema
export interface CostsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const CostsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CostsCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing cost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the cost.
 */
export const CostsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CostsCreateOrUpdateInput,
  outputSchema: CostsCreateOrUpdateOutput,
}));
// Input Schema
export interface CostsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  $expand?: string;
}
export const CostsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costs/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<CostsGetInput>;

// Output Schema
export interface CostsGetOutput {
  id?: string;
  name?: string;
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
export const CostsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<CostsGetOutput>;

// The operation
/**
 * Get cost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the cost.
 * @param $expand - Specify the $expand query. Example: 'properties($expand=labCostDetails)'
 */
export const CostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CostsGetInput,
  outputSchema: CostsGetOutput,
}));
// Input Schema
export interface CustomImagesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  properties: {
    vm?: {
      sourceVmId?: string;
      windowsOsInfo?: {
        windowsOsState?:
          | "NonSysprepped"
          | "SysprepRequested"
          | "SysprepApplied";
      };
      linuxOsInfo?: {
        linuxOsState?:
          | "NonDeprovisioned"
          | "DeprovisionRequested"
          | "DeprovisionApplied";
      };
    };
    vhd?: {
      imageName?: string;
      sysPrep?: boolean;
      osType: "Windows" | "Linux" | "None";
    };
    description?: string;
    author?: string;
    creationDate?: string;
    managedImageId?: string;
    managedSnapshotId?: string;
    dataDiskStorageInfo?: {
      lun?: string;
      storageType?: "Standard" | "Premium" | "StandardSSD";
    }[];
    customImagePlan?: { id?: string; publisher?: string; offer?: string };
    isPlanAuthorized?: boolean;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const CustomImagesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      vm: Schema.optional(
        Schema.Struct({
          sourceVmId: Schema.optional(Schema.String),
          windowsOsInfo: Schema.optional(
            Schema.Struct({
              windowsOsState: Schema.optional(
                Schema.Literals([
                  "NonSysprepped",
                  "SysprepRequested",
                  "SysprepApplied",
                ]),
              ),
            }),
          ),
          linuxOsInfo: Schema.optional(
            Schema.Struct({
              linuxOsState: Schema.optional(
                Schema.Literals([
                  "NonDeprovisioned",
                  "DeprovisionRequested",
                  "DeprovisionApplied",
                ]),
              ),
            }),
          ),
        }),
      ),
      vhd: Schema.optional(
        Schema.Struct({
          imageName: Schema.optional(Schema.String),
          sysPrep: Schema.optional(Schema.Boolean),
          osType: Schema.Literals(["Windows", "Linux", "None"]),
        }),
      ),
      description: Schema.optional(Schema.String),
      author: Schema.optional(Schema.String),
      creationDate: Schema.optional(Schema.String),
      managedImageId: Schema.optional(Schema.String),
      managedSnapshotId: Schema.optional(Schema.String),
      dataDiskStorageInfo: Schema.optional(
        Schema.Array(
          Schema.Struct({
            lun: Schema.optional(Schema.String),
            storageType: Schema.optional(
              Schema.Literals(["Standard", "Premium", "StandardSSD"]),
            ),
          }),
        ),
      ),
      customImagePlan: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          publisher: Schema.optional(Schema.String),
          offer: Schema.optional(Schema.String),
        }),
      ),
      isPlanAuthorized: Schema.optional(Schema.Boolean),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<CustomImagesCreateOrUpdateInput>;

// Output Schema
export interface CustomImagesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const CustomImagesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CustomImagesCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing custom image. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the CustomImage
 */
export const CustomImagesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomImagesCreateOrUpdateInput,
    outputSchema: CustomImagesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface CustomImagesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const CustomImagesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<CustomImagesDeleteInput>;

// Output Schema
export type CustomImagesDeleteOutput = void;
export const CustomImagesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomImagesDeleteOutput>;

// The operation
/**
 * Delete custom image. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the CustomImage
 */
export const CustomImagesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomImagesDeleteInput,
  outputSchema: CustomImagesDeleteOutput,
}));
// Input Schema
export interface CustomImagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  $expand?: string;
}
export const CustomImagesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<CustomImagesGetInput>;

// Output Schema
export interface CustomImagesGetOutput {
  id?: string;
  name?: string;
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
export const CustomImagesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<CustomImagesGetOutput>;

// The operation
/**
 * Get custom image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the CustomImage
 * @param $expand - Specify the $expand query. Example: 'properties($select=vm)'
 */
export const CustomImagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomImagesGetInput,
  outputSchema: CustomImagesGetOutput,
}));
// Input Schema
export interface CustomImagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const CustomImagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $orderby: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<CustomImagesListInput>;

// Output Schema
export interface CustomImagesListOutput {
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
export const CustomImagesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<CustomImagesListOutput>;

// The operation
/**
 * List custom images in a given lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param $expand - Specify the $expand query. Example: 'properties($select=vm)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const CustomImagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomImagesListInput,
  outputSchema: CustomImagesListOutput,
}));
// Input Schema
export interface CustomImagesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  tags?: Record<string, string>;
}
export const CustomImagesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<CustomImagesUpdateInput>;

// Output Schema
export interface CustomImagesUpdateOutput {
  id?: string;
  name?: string;
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
export const CustomImagesUpdateOutput =
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
  }) as unknown as Schema.Codec<CustomImagesUpdateOutput>;

// The operation
/**
 * Allows modifying tags of custom images. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the CustomImage
 */
export const CustomImagesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomImagesUpdateInput,
  outputSchema: CustomImagesUpdateOutput,
}));
// Input Schema
export interface DisksAttachInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  leasedByLabVmId?: string;
}
export const DisksAttachInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  leasedByLabVmId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}/attach",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<DisksAttachInput>;

// Output Schema
export type DisksAttachOutput = void;
export const DisksAttachOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DisksAttachOutput>;

// The operation
/**
 * Attach and create the lease of the disk to the virtual machine. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the disk.
 */
export const DisksAttach = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksAttachInput,
  outputSchema: DisksAttachOutput,
}));
// Input Schema
export interface DisksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  properties: {
    diskType?: "Standard" | "Premium" | "StandardSSD";
    diskSizeGiB?: number;
    leasedByLabVmId?: string;
    diskBlobName?: string;
    diskUri?: string;
    storageAccountId?: string;
    createdDate?: string;
    hostCaching?: string;
    managedDiskId?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const DisksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      diskType: Schema.optional(
        Schema.Literals(["Standard", "Premium", "StandardSSD"]),
      ),
      diskSizeGiB: Schema.optional(Schema.Number),
      leasedByLabVmId: Schema.optional(Schema.String),
      diskBlobName: Schema.optional(Schema.String),
      diskUri: Schema.optional(Schema.String),
      storageAccountId: Schema.optional(Schema.String),
      createdDate: Schema.optional(Schema.String),
      hostCaching: Schema.optional(Schema.String),
      managedDiskId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<DisksCreateOrUpdateInput>;

// Output Schema
export interface DisksCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const DisksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DisksCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing disk. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the disk.
 */
export const DisksCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksCreateOrUpdateInput,
  outputSchema: DisksCreateOrUpdateOutput,
}));
// Input Schema
export interface DisksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
}
export const DisksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<DisksDeleteInput>;

// Output Schema
export type DisksDeleteOutput = void;
export const DisksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DisksDeleteOutput>;

// The operation
/**
 * Delete disk. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the disk.
 */
export const DisksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksDeleteInput,
  outputSchema: DisksDeleteOutput,
}));
// Input Schema
export interface DisksDetachInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  leasedByLabVmId?: string;
}
export const DisksDetachInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  leasedByLabVmId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}/detach",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<DisksDetachInput>;

// Output Schema
export type DisksDetachOutput = void;
export const DisksDetachOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DisksDetachOutput>;

// The operation
/**
 * Detach and break the lease of the disk attached to the virtual machine. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the disk.
 */
export const DisksDetach = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksDetachInput,
  outputSchema: DisksDetachOutput,
}));
// Input Schema
export interface DisksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  $expand?: string;
}
export const DisksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<DisksGetInput>;

// Output Schema
export interface DisksGetOutput {
  id?: string;
  name?: string;
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
export const DisksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<DisksGetOutput>;

// The operation
/**
 * Get disk.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the disk.
 * @param $expand - Specify the $expand query. Example: 'properties($select=diskType)'
 */
export const DisksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksGetInput,
  outputSchema: DisksGetOutput,
}));
// Input Schema
export interface DisksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const DisksListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $orderby: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<DisksListInput>;

// Output Schema
export interface DisksListOutput {
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
export const DisksListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DisksListOutput>;

// The operation
/**
 * List disks in a given user profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param $expand - Specify the $expand query. Example: 'properties($select=diskType)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const DisksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksListInput,
  outputSchema: DisksListOutput,
}));
// Input Schema
export interface DisksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  tags?: Record<string, string>;
}
export const DisksUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<DisksUpdateInput>;

// Output Schema
export interface DisksUpdateOutput {
  id?: string;
  name?: string;
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
export const DisksUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<DisksUpdateOutput>;

// The operation
/**
 * Allows modifying tags of disks. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the disk.
 */
export const DisksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DisksUpdateInput,
  outputSchema: DisksUpdateOutput,
}));
// Input Schema
export interface EnvironmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  properties: {
    deploymentProperties?: {
      armTemplateId?: string;
      parameters?: { name?: string; value?: string }[];
    };
    armTemplateDisplayName?: string;
    resourceGroupId?: string;
    createdByUser?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const EnvironmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      deploymentProperties: Schema.optional(
        Schema.Struct({
          armTemplateId: Schema.optional(Schema.String),
          parameters: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      armTemplateDisplayName: Schema.optional(Schema.String),
      resourceGroupId: Schema.optional(Schema.String),
      createdByUser: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<EnvironmentsCreateOrUpdateInput>;

// Output Schema
export interface EnvironmentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const EnvironmentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<EnvironmentsCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing environment. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the environment.
 */
export const EnvironmentsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EnvironmentsCreateOrUpdateInput,
    outputSchema: EnvironmentsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface EnvironmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
}
export const EnvironmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<EnvironmentsDeleteInput>;

// Output Schema
export type EnvironmentsDeleteOutput = void;
export const EnvironmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EnvironmentsDeleteOutput>;

// The operation
/**
 * Delete environment. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the environment.
 */
export const EnvironmentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentsDeleteInput,
  outputSchema: EnvironmentsDeleteOutput,
}));
// Input Schema
export interface EnvironmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  $expand?: string;
}
export const EnvironmentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<EnvironmentsGetInput>;

// Output Schema
export interface EnvironmentsGetOutput {
  id?: string;
  name?: string;
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
export const EnvironmentsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<EnvironmentsGetOutput>;

// The operation
/**
 * Get environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the environment.
 * @param $expand - Specify the $expand query. Example: 'properties($select=deploymentProperties)'
 */
export const EnvironmentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentsGetInput,
  outputSchema: EnvironmentsGetOutput,
}));
// Input Schema
export interface EnvironmentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const EnvironmentsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $orderby: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<EnvironmentsListInput>;

// Output Schema
export interface EnvironmentsListOutput {
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
export const EnvironmentsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<EnvironmentsListOutput>;

// The operation
/**
 * List environments in a given user profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param $expand - Specify the $expand query. Example: 'properties($select=deploymentProperties)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const EnvironmentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentsListInput,
  outputSchema: EnvironmentsListOutput,
}));
// Input Schema
export interface EnvironmentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  tags?: Record<string, string>;
}
export const EnvironmentsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/environments/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<EnvironmentsUpdateInput>;

// Output Schema
export interface EnvironmentsUpdateOutput {
  id?: string;
  name?: string;
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
export const EnvironmentsUpdateOutput =
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
  }) as unknown as Schema.Codec<EnvironmentsUpdateOutput>;

// The operation
/**
 * Allows modifying tags of environments. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the environment.
 */
export const EnvironmentsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentsUpdateInput,
  outputSchema: EnvironmentsUpdateOutput,
}));
// Input Schema
export interface FormulasCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  properties: {
    description?: string;
    author?: string;
    osType?: string;
    creationDate?: string;
    formulaContent?: {
      properties?: {
        bulkCreationParameters?: { instanceCount?: number };
        notes?: string;
        ownerObjectId?: string;
        ownerUserPrincipalName?: string;
        createdDate?: string;
        customImageId?: string;
        size?: string;
        userName?: string;
        password?: string | Redacted.Redacted<string>;
        sshKey?: string;
        isAuthenticationWithSshKey?: boolean;
        labSubnetName?: string;
        labVirtualNetworkId?: string;
        disallowPublicIpAddress?: boolean;
        artifacts?: {
          artifactId?: string;
          artifactTitle?: string;
          parameters?: { name?: string; value?: string }[];
          status?: string;
          deploymentStatusMessage?: string;
          vmExtensionStatusMessage?: string;
          installTime?: string;
        }[];
        galleryImageReference?: {
          offer?: string;
          publisher?: string;
          sku?: string;
          osType?: string;
          version?: string;
        };
        planId?: string;
        networkInterface?: {
          virtualNetworkId?: string;
          subnetId?: string;
          publicIpAddressId?: string;
          publicIpAddress?: string;
          privateIpAddress?: string;
          dnsName?: string;
          rdpAuthority?: string;
          sshAuthority?: string;
          sharedPublicIpAddressConfiguration?: {
            inboundNatRules?: {
              transportProtocol?: "Tcp" | "Udp";
              frontendPort?: number;
              backendPort?: number;
            }[];
          };
        };
        expirationDate?: string;
        allowClaim?: boolean;
        storageType?: string;
        environmentId?: string;
        dataDiskParameters?: {
          attachNewDataDiskOptions?: {
            diskSizeGiB?: number;
            diskName?: string;
            diskType?: "Standard" | "Premium" | "StandardSSD";
          };
          existingLabDiskId?: string;
          hostCaching?: "None" | "ReadOnly" | "ReadWrite";
        }[];
        scheduleParameters?: {
          properties?: {
            status?: "Enabled" | "Disabled";
            taskType?: string;
            weeklyRecurrence?: { weekdays?: string[]; time?: string };
            dailyRecurrence?: { time?: string };
            hourlyRecurrence?: { minute?: number };
            timeZoneId?: string;
            notificationSettings?: {
              status?: "Enabled" | "Disabled";
              timeInMinutes?: number;
              webhookUrl?: string;
              emailRecipient?: string;
              notificationLocale?: string;
            };
            targetResourceId?: string;
          };
          name?: string;
          location?: string;
          tags?: Record<string, string>;
        }[];
      };
      name?: string;
      location?: string;
      tags?: Record<string, string>;
    };
    vm?: { labVmId?: string };
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const FormulasCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.String),
      author: Schema.optional(Schema.String),
      osType: Schema.optional(Schema.String),
      creationDate: Schema.optional(Schema.String),
      formulaContent: Schema.optional(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              bulkCreationParameters: Schema.optional(
                Schema.Struct({
                  instanceCount: Schema.optional(Schema.Number),
                }),
              ),
              notes: Schema.optional(Schema.String),
              ownerObjectId: Schema.optional(Schema.String),
              ownerUserPrincipalName: Schema.optional(Schema.String),
              createdDate: Schema.optional(Schema.String),
              customImageId: Schema.optional(Schema.String),
              size: Schema.optional(Schema.String),
              userName: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveString),
              sshKey: Schema.optional(Schema.String),
              isAuthenticationWithSshKey: Schema.optional(Schema.Boolean),
              labSubnetName: Schema.optional(Schema.String),
              labVirtualNetworkId: Schema.optional(Schema.String),
              disallowPublicIpAddress: Schema.optional(Schema.Boolean),
              artifacts: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    artifactId: Schema.optional(Schema.String),
                    artifactTitle: Schema.optional(Schema.String),
                    parameters: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          value: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    status: Schema.optional(Schema.String),
                    deploymentStatusMessage: Schema.optional(Schema.String),
                    vmExtensionStatusMessage: Schema.optional(Schema.String),
                    installTime: Schema.optional(Schema.String),
                  }),
                ),
              ),
              galleryImageReference: Schema.optional(
                Schema.Struct({
                  offer: Schema.optional(Schema.String),
                  publisher: Schema.optional(Schema.String),
                  sku: Schema.optional(Schema.String),
                  osType: Schema.optional(Schema.String),
                  version: Schema.optional(Schema.String),
                }),
              ),
              planId: Schema.optional(Schema.String),
              networkInterface: Schema.optional(
                Schema.Struct({
                  virtualNetworkId: Schema.optional(Schema.String),
                  subnetId: Schema.optional(Schema.String),
                  publicIpAddressId: Schema.optional(Schema.String),
                  publicIpAddress: Schema.optional(Schema.String),
                  privateIpAddress: Schema.optional(Schema.String),
                  dnsName: Schema.optional(Schema.String),
                  rdpAuthority: Schema.optional(Schema.String),
                  sshAuthority: Schema.optional(Schema.String),
                  sharedPublicIpAddressConfiguration: Schema.optional(
                    Schema.Struct({
                      inboundNatRules: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            transportProtocol: Schema.optional(
                              Schema.Literals(["Tcp", "Udp"]),
                            ),
                            frontendPort: Schema.optional(Schema.Number),
                            backendPort: Schema.optional(Schema.Number),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
              expirationDate: Schema.optional(Schema.String),
              allowClaim: Schema.optional(Schema.Boolean),
              storageType: Schema.optional(Schema.String),
              environmentId: Schema.optional(Schema.String),
              dataDiskParameters: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    attachNewDataDiskOptions: Schema.optional(
                      Schema.Struct({
                        diskSizeGiB: Schema.optional(Schema.Number),
                        diskName: Schema.optional(Schema.String),
                        diskType: Schema.optional(
                          Schema.Literals([
                            "Standard",
                            "Premium",
                            "StandardSSD",
                          ]),
                        ),
                      }),
                    ),
                    existingLabDiskId: Schema.optional(Schema.String),
                    hostCaching: Schema.optional(
                      Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
                    ),
                  }),
                ),
              ),
              scheduleParameters: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    properties: Schema.optional(
                      Schema.Struct({
                        status: Schema.optional(
                          Schema.Literals(["Enabled", "Disabled"]),
                        ),
                        taskType: Schema.optional(Schema.String),
                        weeklyRecurrence: Schema.optional(
                          Schema.Struct({
                            weekdays: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                            time: Schema.optional(Schema.String),
                          }),
                        ),
                        dailyRecurrence: Schema.optional(
                          Schema.Struct({
                            time: Schema.optional(Schema.String),
                          }),
                        ),
                        hourlyRecurrence: Schema.optional(
                          Schema.Struct({
                            minute: Schema.optional(Schema.Number),
                          }),
                        ),
                        timeZoneId: Schema.optional(Schema.String),
                        notificationSettings: Schema.optional(
                          Schema.Struct({
                            status: Schema.optional(
                              Schema.Literals(["Enabled", "Disabled"]),
                            ),
                            timeInMinutes: Schema.optional(Schema.Number),
                            webhookUrl: Schema.optional(Schema.String),
                            emailRecipient: Schema.optional(Schema.String),
                            notificationLocale: Schema.optional(Schema.String),
                          }),
                        ),
                        targetResourceId: Schema.optional(Schema.String),
                      }),
                    ),
                    name: Schema.optional(Schema.String),
                    location: Schema.optional(Schema.String),
                    tags: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                  }),
                ),
              ),
            }),
          ),
          name: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
      vm: Schema.optional(
        Schema.Struct({
          labVmId: Schema.optional(Schema.String),
        }),
      ),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<FormulasCreateOrUpdateInput>;

// Output Schema
export interface FormulasCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const FormulasCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FormulasCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing formula. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the formula.
 */
export const FormulasCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FormulasCreateOrUpdateInput,
    outputSchema: FormulasCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface FormulasDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const FormulasDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<FormulasDeleteInput>;

// Output Schema
export type FormulasDeleteOutput = void;
export const FormulasDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FormulasDeleteOutput>;

// The operation
/**
 * Delete formula.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the formula.
 */
export const FormulasDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FormulasDeleteInput,
  outputSchema: FormulasDeleteOutput,
}));
// Input Schema
export interface FormulasGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  $expand?: string;
}
export const FormulasGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<FormulasGetInput>;

// Output Schema
export interface FormulasGetOutput {
  id?: string;
  name?: string;
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
export const FormulasGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<FormulasGetOutput>;

// The operation
/**
 * Get formula.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the formula.
 * @param $expand - Specify the $expand query. Example: 'properties($select=description)'
 */
export const FormulasGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FormulasGetInput,
  outputSchema: FormulasGetOutput,
}));
// Input Schema
export interface FormulasListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const FormulasListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $orderby: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<FormulasListInput>;

// Output Schema
export interface FormulasListOutput {
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
export const FormulasListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FormulasListOutput>;

// The operation
/**
 * List formulas in a given lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param $expand - Specify the $expand query. Example: 'properties($select=description)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const FormulasList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FormulasListInput,
  outputSchema: FormulasListOutput,
}));
// Input Schema
export interface FormulasUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  tags?: Record<string, string>;
}
export const FormulasUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<FormulasUpdateInput>;

// Output Schema
export interface FormulasUpdateOutput {
  id?: string;
  name?: string;
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
export const FormulasUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<FormulasUpdateOutput>;

// The operation
/**
 * Allows modifying tags of formulas. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the formula.
 */
export const FormulasUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FormulasUpdateInput,
  outputSchema: FormulasUpdateOutput,
}));
// Input Schema
export interface GalleryImagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const GalleryImagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/galleryimages",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<GalleryImagesListInput>;

// Output Schema
export interface GalleryImagesListOutput {
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
export const GalleryImagesListOutput =
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
  }) as unknown as Schema.Codec<GalleryImagesListOutput>;

// The operation
/**
 * List gallery images in a given lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param $expand - Specify the $expand query. Example: 'properties($select=displayName)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const GalleryImagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GalleryImagesListInput,
  outputSchema: GalleryImagesListOutput,
}));
// Input Schema
export interface GlobalSchedulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  properties: {
    status?: "Enabled" | "Disabled";
    taskType?: string;
    weeklyRecurrence?: { weekdays?: string[]; time?: string };
    dailyRecurrence?: { time?: string };
    hourlyRecurrence?: { minute?: number };
    timeZoneId?: string;
    notificationSettings?: {
      status?: "Enabled" | "Disabled";
      timeInMinutes?: number;
      webhookUrl?: string;
      emailRecipient?: string;
      notificationLocale?: string;
    };
    createdDate?: string;
    targetResourceId?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const GlobalSchedulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      taskType: Schema.optional(Schema.String),
      weeklyRecurrence: Schema.optional(
        Schema.Struct({
          weekdays: Schema.optional(Schema.Array(Schema.String)),
          time: Schema.optional(Schema.String),
        }),
      ),
      dailyRecurrence: Schema.optional(
        Schema.Struct({
          time: Schema.optional(Schema.String),
        }),
      ),
      hourlyRecurrence: Schema.optional(
        Schema.Struct({
          minute: Schema.optional(Schema.Number),
        }),
      ),
      timeZoneId: Schema.optional(Schema.String),
      notificationSettings: Schema.optional(
        Schema.Struct({
          status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          timeInMinutes: Schema.optional(Schema.Number),
          webhookUrl: Schema.optional(Schema.String),
          emailRecipient: Schema.optional(Schema.String),
          notificationLocale: Schema.optional(Schema.String),
        }),
      ),
      createdDate: Schema.optional(Schema.String),
      targetResourceId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<GlobalSchedulesCreateOrUpdateInput>;

// Output Schema
export interface GlobalSchedulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const GlobalSchedulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<GlobalSchedulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Schedule
 */
export const GlobalSchedulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GlobalSchedulesCreateOrUpdateInput,
    outputSchema: GlobalSchedulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface GlobalSchedulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const GlobalSchedulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<GlobalSchedulesDeleteInput>;

// Output Schema
export type GlobalSchedulesDeleteOutput = void;
export const GlobalSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GlobalSchedulesDeleteOutput>;

// The operation
/**
 * Delete schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Schedule
 */
export const GlobalSchedulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GlobalSchedulesDeleteInput,
    outputSchema: GlobalSchedulesDeleteOutput,
  }),
);
// Input Schema
export interface GlobalSchedulesExecuteInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const GlobalSchedulesExecuteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}/execute",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<GlobalSchedulesExecuteInput>;

// Output Schema
export type GlobalSchedulesExecuteOutput = void;
export const GlobalSchedulesExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GlobalSchedulesExecuteOutput>;

// The operation
/**
 * Execute a schedule. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Schedule
 */
export const GlobalSchedulesExecute = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GlobalSchedulesExecuteInput,
    outputSchema: GlobalSchedulesExecuteOutput,
  }),
);
// Input Schema
export interface GlobalSchedulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  $expand?: string;
}
export const GlobalSchedulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<GlobalSchedulesGetInput>;

// Output Schema
export interface GlobalSchedulesGetOutput {
  id?: string;
  name?: string;
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
export const GlobalSchedulesGetOutput =
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
  }) as unknown as Schema.Codec<GlobalSchedulesGetOutput>;

// The operation
/**
 * Get schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Schedule
 * @param $expand - Specify the $expand query. Example: 'properties($select=status)'
 */
export const GlobalSchedulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GlobalSchedulesGetInput,
  outputSchema: GlobalSchedulesGetOutput,
}));
// Input Schema
export interface GlobalSchedulesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const GlobalSchedulesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<GlobalSchedulesListByResourceGroupInput>;

// Output Schema
export interface GlobalSchedulesListByResourceGroupOutput {
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
export const GlobalSchedulesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<GlobalSchedulesListByResourceGroupOutput>;

// The operation
/**
 * List schedules in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $expand - Specify the $expand query. Example: 'properties($select=status)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const GlobalSchedulesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GlobalSchedulesListByResourceGroupInput,
    outputSchema: GlobalSchedulesListByResourceGroupOutput,
  }));
// Input Schema
export interface GlobalSchedulesListBySubscriptionInput {
  subscriptionId: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const GlobalSchedulesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevTestLab/schedules",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<GlobalSchedulesListBySubscriptionInput>;

// Output Schema
export interface GlobalSchedulesListBySubscriptionOutput {
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
export const GlobalSchedulesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<GlobalSchedulesListBySubscriptionOutput>;

// The operation
/**
 * List schedules in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $expand - Specify the $expand query. Example: 'properties($select=status)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const GlobalSchedulesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GlobalSchedulesListBySubscriptionInput,
    outputSchema: GlobalSchedulesListBySubscriptionOutput,
  }));
// Input Schema
export interface GlobalSchedulesRetargetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  currentResourceId?: string;
  targetResourceId?: string;
}
export const GlobalSchedulesRetargetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    currentResourceId: Schema.optional(Schema.String),
    targetResourceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}/retarget",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<GlobalSchedulesRetargetInput>;

// Output Schema
export type GlobalSchedulesRetargetOutput = void;
export const GlobalSchedulesRetargetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GlobalSchedulesRetargetOutput>;

// The operation
/**
 * Updates a schedule's target resource Id. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Schedule
 */
export const GlobalSchedulesRetarget = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GlobalSchedulesRetargetInput,
    outputSchema: GlobalSchedulesRetargetOutput,
  }),
);
// Input Schema
export interface GlobalSchedulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  tags?: Record<string, string>;
}
export const GlobalSchedulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<GlobalSchedulesUpdateInput>;

// Output Schema
export interface GlobalSchedulesUpdateOutput {
  id?: string;
  name?: string;
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
export const GlobalSchedulesUpdateOutput =
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
  }) as unknown as Schema.Codec<GlobalSchedulesUpdateOutput>;

// The operation
/**
 * Allows modifying tags of schedules. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Schedule
 */
export const GlobalSchedulesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GlobalSchedulesUpdateInput,
    outputSchema: GlobalSchedulesUpdateOutput,
  }),
);
// Input Schema
export interface LabsClaimAnyVmInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const LabsClaimAnyVmInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/claimAnyVm",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<LabsClaimAnyVmInput>;

// Output Schema
export type LabsClaimAnyVmOutput = void;
export const LabsClaimAnyVmOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LabsClaimAnyVmOutput>;

// The operation
/**
 * Claim a random claimable virtual machine in the lab. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the lab.
 */
export const LabsClaimAnyVm = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LabsClaimAnyVmInput,
  outputSchema: LabsClaimAnyVmOutput,
}));
// Input Schema
export interface LabsCreateEnvironmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  properties?: {
    bulkCreationParameters?: { instanceCount?: number };
    notes?: string;
    ownerObjectId?: string;
    ownerUserPrincipalName?: string;
    createdDate?: string;
    customImageId?: string;
    size?: string;
    userName?: string;
    password?: string | Redacted.Redacted<string>;
    sshKey?: string;
    isAuthenticationWithSshKey?: boolean;
    labSubnetName?: string;
    labVirtualNetworkId?: string;
    disallowPublicIpAddress?: boolean;
    artifacts?: {
      artifactId?: string;
      artifactTitle?: string;
      parameters?: { name?: string; value?: string }[];
      status?: string;
      deploymentStatusMessage?: string;
      vmExtensionStatusMessage?: string;
      installTime?: string;
    }[];
    galleryImageReference?: {
      offer?: string;
      publisher?: string;
      sku?: string;
      osType?: string;
      version?: string;
    };
    planId?: string;
    networkInterface?: {
      virtualNetworkId?: string;
      subnetId?: string;
      publicIpAddressId?: string;
      publicIpAddress?: string;
      privateIpAddress?: string;
      dnsName?: string;
      rdpAuthority?: string;
      sshAuthority?: string;
      sharedPublicIpAddressConfiguration?: {
        inboundNatRules?: {
          transportProtocol?: "Tcp" | "Udp";
          frontendPort?: number;
          backendPort?: number;
        }[];
      };
    };
    expirationDate?: string;
    allowClaim?: boolean;
    storageType?: string;
    environmentId?: string;
    dataDiskParameters?: {
      attachNewDataDiskOptions?: {
        diskSizeGiB?: number;
        diskName?: string;
        diskType?: "Standard" | "Premium" | "StandardSSD";
      };
      existingLabDiskId?: string;
      hostCaching?: "None" | "ReadOnly" | "ReadWrite";
    }[];
    scheduleParameters?: {
      properties?: {
        status?: "Enabled" | "Disabled";
        taskType?: string;
        weeklyRecurrence?: { weekdays?: string[]; time?: string };
        dailyRecurrence?: { time?: string };
        hourlyRecurrence?: { minute?: number };
        timeZoneId?: string;
        notificationSettings?: {
          status?: "Enabled" | "Disabled";
          timeInMinutes?: number;
          webhookUrl?: string;
          emailRecipient?: string;
          notificationLocale?: string;
        };
        targetResourceId?: string;
      };
      name?: string;
      location?: string;
      tags?: Record<string, string>;
    }[];
  };
  location?: string;
  tags?: Record<string, string>;
}
export const LabsCreateEnvironmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        bulkCreationParameters: Schema.optional(
          Schema.Struct({
            instanceCount: Schema.optional(Schema.Number),
          }),
        ),
        notes: Schema.optional(Schema.String),
        ownerObjectId: Schema.optional(Schema.String),
        ownerUserPrincipalName: Schema.optional(Schema.String),
        createdDate: Schema.optional(Schema.String),
        customImageId: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        userName: Schema.optional(Schema.String),
        password: Schema.optional(SensitiveString),
        sshKey: Schema.optional(Schema.String),
        isAuthenticationWithSshKey: Schema.optional(Schema.Boolean),
        labSubnetName: Schema.optional(Schema.String),
        labVirtualNetworkId: Schema.optional(Schema.String),
        disallowPublicIpAddress: Schema.optional(Schema.Boolean),
        artifacts: Schema.optional(
          Schema.Array(
            Schema.Struct({
              artifactId: Schema.optional(Schema.String),
              artifactTitle: Schema.optional(Schema.String),
              parameters: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                ),
              ),
              status: Schema.optional(Schema.String),
              deploymentStatusMessage: Schema.optional(Schema.String),
              vmExtensionStatusMessage: Schema.optional(Schema.String),
              installTime: Schema.optional(Schema.String),
            }),
          ),
        ),
        galleryImageReference: Schema.optional(
          Schema.Struct({
            offer: Schema.optional(Schema.String),
            publisher: Schema.optional(Schema.String),
            sku: Schema.optional(Schema.String),
            osType: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
          }),
        ),
        planId: Schema.optional(Schema.String),
        networkInterface: Schema.optional(
          Schema.Struct({
            virtualNetworkId: Schema.optional(Schema.String),
            subnetId: Schema.optional(Schema.String),
            publicIpAddressId: Schema.optional(Schema.String),
            publicIpAddress: Schema.optional(Schema.String),
            privateIpAddress: Schema.optional(Schema.String),
            dnsName: Schema.optional(Schema.String),
            rdpAuthority: Schema.optional(Schema.String),
            sshAuthority: Schema.optional(Schema.String),
            sharedPublicIpAddressConfiguration: Schema.optional(
              Schema.Struct({
                inboundNatRules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      transportProtocol: Schema.optional(
                        Schema.Literals(["Tcp", "Udp"]),
                      ),
                      frontendPort: Schema.optional(Schema.Number),
                      backendPort: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        expirationDate: Schema.optional(Schema.String),
        allowClaim: Schema.optional(Schema.Boolean),
        storageType: Schema.optional(Schema.String),
        environmentId: Schema.optional(Schema.String),
        dataDiskParameters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              attachNewDataDiskOptions: Schema.optional(
                Schema.Struct({
                  diskSizeGiB: Schema.optional(Schema.Number),
                  diskName: Schema.optional(Schema.String),
                  diskType: Schema.optional(
                    Schema.Literals(["Standard", "Premium", "StandardSSD"]),
                  ),
                }),
              ),
              existingLabDiskId: Schema.optional(Schema.String),
              hostCaching: Schema.optional(
                Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
              ),
            }),
          ),
        ),
        scheduleParameters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              properties: Schema.optional(
                Schema.Struct({
                  status: Schema.optional(
                    Schema.Literals(["Enabled", "Disabled"]),
                  ),
                  taskType: Schema.optional(Schema.String),
                  weeklyRecurrence: Schema.optional(
                    Schema.Struct({
                      weekdays: Schema.optional(Schema.Array(Schema.String)),
                      time: Schema.optional(Schema.String),
                    }),
                  ),
                  dailyRecurrence: Schema.optional(
                    Schema.Struct({
                      time: Schema.optional(Schema.String),
                    }),
                  ),
                  hourlyRecurrence: Schema.optional(
                    Schema.Struct({
                      minute: Schema.optional(Schema.Number),
                    }),
                  ),
                  timeZoneId: Schema.optional(Schema.String),
                  notificationSettings: Schema.optional(
                    Schema.Struct({
                      status: Schema.optional(
                        Schema.Literals(["Enabled", "Disabled"]),
                      ),
                      timeInMinutes: Schema.optional(Schema.Number),
                      webhookUrl: Schema.optional(Schema.String),
                      emailRecipient: Schema.optional(Schema.String),
                      notificationLocale: Schema.optional(Schema.String),
                    }),
                  ),
                  targetResourceId: Schema.optional(Schema.String),
                }),
              ),
              name: Schema.optional(Schema.String),
              location: Schema.optional(Schema.String),
              tags: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
            }),
          ),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/createEnvironment",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<LabsCreateEnvironmentInput>;

// Output Schema
export type LabsCreateEnvironmentOutput = void;
export const LabsCreateEnvironmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LabsCreateEnvironmentOutput>;

// The operation
/**
 * Create virtual machines in a lab. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the lab.
 */
export const LabsCreateEnvironment = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LabsCreateEnvironmentInput,
    outputSchema: LabsCreateEnvironmentOutput,
  }),
);
// Input Schema
export interface LabsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  properties: {
    defaultStorageAccount?: string;
    defaultPremiumStorageAccount?: string;
    artifactsStorageAccount?: string;
    premiumDataDiskStorageAccount?: string;
    vaultName?: string;
    labStorageType?: "Standard" | "Premium" | "StandardSSD";
    mandatoryArtifactsResourceIdsLinux?: string[];
    mandatoryArtifactsResourceIdsWindows?: string[];
    createdDate?: string;
    premiumDataDisks?: "Disabled" | "Enabled";
    environmentPermission?: "Reader" | "Contributor";
    announcement?: {
      title?: string;
      markdown?: string;
      enabled?: "Enabled" | "Disabled";
      expirationDate?: string;
      expired?: boolean;
      provisioningState?: string;
      uniqueIdentifier?: string;
    };
    support?: { enabled?: "Enabled" | "Disabled"; markdown?: string };
    vmCreationResourceGroup?: string;
    publicIpId?: string;
    loadBalancerId?: string;
    networkSecurityGroupId?: string;
    extendedProperties?: Record<string, string>;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const LabsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      defaultStorageAccount: Schema.optional(Schema.String),
      defaultPremiumStorageAccount: Schema.optional(Schema.String),
      artifactsStorageAccount: Schema.optional(Schema.String),
      premiumDataDiskStorageAccount: Schema.optional(Schema.String),
      vaultName: Schema.optional(Schema.String),
      labStorageType: Schema.optional(
        Schema.Literals(["Standard", "Premium", "StandardSSD"]),
      ),
      mandatoryArtifactsResourceIdsLinux: Schema.optional(
        Schema.Array(Schema.String),
      ),
      mandatoryArtifactsResourceIdsWindows: Schema.optional(
        Schema.Array(Schema.String),
      ),
      createdDate: Schema.optional(Schema.String),
      premiumDataDisks: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      environmentPermission: Schema.optional(
        Schema.Literals(["Reader", "Contributor"]),
      ),
      announcement: Schema.optional(
        Schema.Struct({
          title: Schema.optional(Schema.String),
          markdown: Schema.optional(Schema.String),
          enabled: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          expirationDate: Schema.optional(Schema.String),
          expired: Schema.optional(Schema.Boolean),
          provisioningState: Schema.optional(Schema.String),
          uniqueIdentifier: Schema.optional(Schema.String),
        }),
      ),
      support: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          markdown: Schema.optional(Schema.String),
        }),
      ),
      vmCreationResourceGroup: Schema.optional(Schema.String),
      publicIpId: Schema.optional(Schema.String),
      loadBalancerId: Schema.optional(Schema.String),
      networkSecurityGroupId: Schema.optional(Schema.String),
      extendedProperties: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<LabsCreateOrUpdateInput>;

// Output Schema
export interface LabsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const LabsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<LabsCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing lab. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the lab.
 */
export const LabsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LabsCreateOrUpdateInput,
  outputSchema: LabsCreateOrUpdateOutput,
}));
// Input Schema
export interface LabsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const LabsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<LabsDeleteInput>;

// Output Schema
export type LabsDeleteOutput = void;
export const LabsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LabsDeleteOutput>;

// The operation
/**
 * Delete lab. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the lab.
 */
export const LabsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LabsDeleteInput,
  outputSchema: LabsDeleteOutput,
}));
// Input Schema
export interface LabsExportResourceUsageInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  blobStorageAbsoluteSasUri?: string;
  usageStartDate?: string;
}
export const LabsExportResourceUsageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    blobStorageAbsoluteSasUri: Schema.optional(Schema.String),
    usageStartDate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/exportResourceUsage",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<LabsExportResourceUsageInput>;

// Output Schema
export type LabsExportResourceUsageOutput = void;
export const LabsExportResourceUsageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LabsExportResourceUsageOutput>;

// The operation
/**
 * Exports the lab resource usage into a storage account This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the lab.
 */
export const LabsExportResourceUsage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LabsExportResourceUsageInput,
    outputSchema: LabsExportResourceUsageOutput,
  }),
);
// Input Schema
export interface LabsGenerateUploadUriInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  blobName?: string;
}
export const LabsGenerateUploadUriInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    blobName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/generateUploadUri",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<LabsGenerateUploadUriInput>;

// Output Schema
export interface LabsGenerateUploadUriOutput {
  uploadUri?: string;
}
export const LabsGenerateUploadUriOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uploadUri: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LabsGenerateUploadUriOutput>;

// The operation
/**
 * Generate a URI for uploading custom disk images to a Lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the lab.
 */
export const LabsGenerateUploadUri = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LabsGenerateUploadUriInput,
    outputSchema: LabsGenerateUploadUriOutput,
  }),
);
// Input Schema
export interface LabsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  $expand?: string;
}
export const LabsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<LabsGetInput>;

// Output Schema
export interface LabsGetOutput {
  id?: string;
  name?: string;
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
export const LabsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<LabsGetOutput>;

// The operation
/**
 * Get lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the lab.
 * @param $expand - Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
 */
export const LabsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LabsGetInput,
  outputSchema: LabsGetOutput,
}));
// Input Schema
export interface LabsImportVirtualMachineInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  sourceVirtualMachineResourceId?: string;
  destinationVirtualMachineName?: string;
}
export const LabsImportVirtualMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    sourceVirtualMachineResourceId: Schema.optional(Schema.String),
    destinationVirtualMachineName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/importVirtualMachine",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<LabsImportVirtualMachineInput>;

// Output Schema
export type LabsImportVirtualMachineOutput = void;
export const LabsImportVirtualMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LabsImportVirtualMachineOutput>;

// The operation
/**
 * Import a virtual machine into a different lab. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the lab.
 */
export const LabsImportVirtualMachine = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LabsImportVirtualMachineInput,
    outputSchema: LabsImportVirtualMachineOutput,
  }),
);
// Input Schema
export interface LabsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const LabsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<LabsListByResourceGroupInput>;

// Output Schema
export interface LabsListByResourceGroupOutput {
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
export const LabsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<LabsListByResourceGroupOutput>;

// The operation
/**
 * List labs in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $expand - Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const LabsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LabsListByResourceGroupInput,
    outputSchema: LabsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface LabsListBySubscriptionInput {
  subscriptionId: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const LabsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevTestLab/labs",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<LabsListBySubscriptionInput>;

// Output Schema
export interface LabsListBySubscriptionOutput {
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
export const LabsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<LabsListBySubscriptionOutput>;

// The operation
/**
 * List labs in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $expand - Specify the $expand query. Example: 'properties($select=defaultStorageAccount)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const LabsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LabsListBySubscriptionInput,
    outputSchema: LabsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface LabsListVhdsInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const LabsListVhdsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/listVhds",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<LabsListVhdsInput>;

// Output Schema
export interface LabsListVhdsOutput {
  value: { id?: string }[];
  nextLink?: string;
}
export const LabsListVhdsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<LabsListVhdsOutput>;

// The operation
/**
 * List disk images available for custom image creation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the lab.
 */
export const LabsListVhds = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LabsListVhdsInput,
  outputSchema: LabsListVhdsOutput,
}));
// Input Schema
export interface LabsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  tags?: Record<string, string>;
}
export const LabsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<LabsUpdateInput>;

// Output Schema
export interface LabsUpdateOutput {
  id?: string;
  name?: string;
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
export const LabsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<LabsUpdateOutput>;

// The operation
/**
 * Allows modifying tags of labs. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the lab.
 */
export const LabsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LabsUpdateInput,
  outputSchema: LabsUpdateOutput,
}));
// Input Schema
export interface NotificationChannelsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  properties: {
    webHookUrl?: string;
    emailRecipient?: string;
    notificationLocale?: string;
    description?: string;
    events?: { eventName?: "AutoShutdown" | "Cost" }[];
    createdDate?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const NotificationChannelsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      webHookUrl: Schema.optional(Schema.String),
      emailRecipient: Schema.optional(Schema.String),
      notificationLocale: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      events: Schema.optional(
        Schema.Array(
          Schema.Struct({
            eventName: Schema.optional(
              Schema.Literals(["AutoShutdown", "Cost"]),
            ),
          }),
        ),
      ),
      createdDate: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<NotificationChannelsCreateOrUpdateInput>;

// Output Schema
export interface NotificationChannelsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const NotificationChannelsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NotificationChannelsCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing notification channel.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the notification channel.
 */
export const NotificationChannelsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotificationChannelsCreateOrUpdateInput,
    outputSchema: NotificationChannelsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NotificationChannelsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const NotificationChannelsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<NotificationChannelsDeleteInput>;

// Output Schema
export type NotificationChannelsDeleteOutput = void;
export const NotificationChannelsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NotificationChannelsDeleteOutput>;

// The operation
/**
 * Delete notification channel.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the notification channel.
 */
export const NotificationChannelsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NotificationChannelsDeleteInput,
    outputSchema: NotificationChannelsDeleteOutput,
  }),
);
// Input Schema
export interface NotificationChannelsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  $expand?: string;
}
export const NotificationChannelsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<NotificationChannelsGetInput>;

// Output Schema
export interface NotificationChannelsGetOutput {
  id?: string;
  name?: string;
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
export const NotificationChannelsGetOutput =
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
  }) as unknown as Schema.Codec<NotificationChannelsGetOutput>;

// The operation
/**
 * Get notification channel.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the notification channel.
 * @param $expand - Specify the $expand query. Example: 'properties($select=webHookUrl)'
 */
export const NotificationChannelsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NotificationChannelsGetInput,
    outputSchema: NotificationChannelsGetOutput,
  }),
);
// Input Schema
export interface NotificationChannelsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const NotificationChannelsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<NotificationChannelsListInput>;

// Output Schema
export interface NotificationChannelsListOutput {
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
export const NotificationChannelsListOutput =
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
  }) as unknown as Schema.Codec<NotificationChannelsListOutput>;

// The operation
/**
 * List notification channels in a given lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param $expand - Specify the $expand query. Example: 'properties($select=webHookUrl)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const NotificationChannelsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NotificationChannelsListInput,
    outputSchema: NotificationChannelsListOutput,
  }),
);
// Input Schema
export interface NotificationChannelsNotifyInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  eventName?: "AutoShutdown" | "Cost";
  jsonPayload?: string;
}
export const NotificationChannelsNotifyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    eventName: Schema.optional(Schema.Literals(["AutoShutdown", "Cost"])),
    jsonPayload: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}/notify",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<NotificationChannelsNotifyInput>;

// Output Schema
export type NotificationChannelsNotifyOutput = void;
export const NotificationChannelsNotifyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NotificationChannelsNotifyOutput>;

// The operation
/**
 * Send notification to provided channel.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the notification channel.
 */
export const NotificationChannelsNotify = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NotificationChannelsNotifyInput,
    outputSchema: NotificationChannelsNotifyOutput,
  }),
);
// Input Schema
export interface NotificationChannelsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  tags?: Record<string, string>;
}
export const NotificationChannelsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/notificationchannels/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<NotificationChannelsUpdateInput>;

// Output Schema
export interface NotificationChannelsUpdateOutput {
  id?: string;
  name?: string;
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
export const NotificationChannelsUpdateOutput =
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
  }) as unknown as Schema.Codec<NotificationChannelsUpdateOutput>;

// The operation
/**
 * Allows modifying tags of notification channels. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the notification channel.
 */
export const NotificationChannelsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NotificationChannelsUpdateInput,
    outputSchema: NotificationChannelsUpdateOutput,
  }),
);
// Input Schema
export interface OperationsGetInput {
  subscriptionId: string;
  locationName: string;
  name: string;
}
export const OperationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  locationName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevTestLab/locations/{locationName}/operations/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<OperationsGetInput>;

// Output Schema
export interface OperationsGetOutput {
  status?: string;
  statusCode?:
    | "Continue"
    | "SwitchingProtocols"
    | "OK"
    | "Created"
    | "Accepted"
    | "NonAuthoritativeInformation"
    | "NoContent"
    | "ResetContent"
    | "PartialContent"
    | "MultipleChoices"
    | "Ambiguous"
    | "MovedPermanently"
    | "Moved"
    | "Found"
    | "Redirect"
    | "SeeOther"
    | "RedirectMethod"
    | "NotModified"
    | "UseProxy"
    | "Unused"
    | "TemporaryRedirect"
    | "RedirectKeepVerb"
    | "BadRequest"
    | "Unauthorized"
    | "PaymentRequired"
    | "Forbidden"
    | "NotFound"
    | "MethodNotAllowed"
    | "NotAcceptable"
    | "ProxyAuthenticationRequired"
    | "RequestTimeout"
    | "Conflict"
    | "Gone"
    | "LengthRequired"
    | "PreconditionFailed"
    | "RequestEntityTooLarge"
    | "RequestUriTooLong"
    | "UnsupportedMediaType"
    | "RequestedRangeNotSatisfiable"
    | "ExpectationFailed"
    | "UpgradeRequired"
    | "InternalServerError"
    | "NotImplemented"
    | "BadGateway"
    | "ServiceUnavailable"
    | "GatewayTimeout"
    | "HttpVersionNotSupported";
  error?: { code?: string; message?: string };
}
export const OperationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  statusCode: Schema.optional(
    Schema.Literals([
      "Continue",
      "SwitchingProtocols",
      "OK",
      "Created",
      "Accepted",
      "NonAuthoritativeInformation",
      "NoContent",
      "ResetContent",
      "PartialContent",
      "MultipleChoices",
      "Ambiguous",
      "MovedPermanently",
      "Moved",
      "Found",
      "Redirect",
      "SeeOther",
      "RedirectMethod",
      "NotModified",
      "UseProxy",
      "Unused",
      "TemporaryRedirect",
      "RedirectKeepVerb",
      "BadRequest",
      "Unauthorized",
      "PaymentRequired",
      "Forbidden",
      "NotFound",
      "MethodNotAllowed",
      "NotAcceptable",
      "ProxyAuthenticationRequired",
      "RequestTimeout",
      "Conflict",
      "Gone",
      "LengthRequired",
      "PreconditionFailed",
      "RequestEntityTooLarge",
      "RequestUriTooLong",
      "UnsupportedMediaType",
      "RequestedRangeNotSatisfiable",
      "ExpectationFailed",
      "UpgradeRequired",
      "InternalServerError",
      "NotImplemented",
      "BadGateway",
      "ServiceUnavailable",
      "GatewayTimeout",
      "HttpVersionNotSupported",
    ]),
  ),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<OperationsGetOutput>;

// The operation
/**
 * Get operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param locationName - The name of the location.
 * @param name - The name of the operation.
 */
export const OperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsGetInput,
  outputSchema: OperationsGetOutput,
}));
// Input Schema
export interface PoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  policySetName: string;
  name: string;
  properties: {
    description?: string;
    status?: "Enabled" | "Disabled";
    factName?:
      | "UserOwnedLabVmCount"
      | "UserOwnedLabPremiumVmCount"
      | "LabVmCount"
      | "LabPremiumVmCount"
      | "LabVmSize"
      | "GalleryImage"
      | "UserOwnedLabVmCountInSubnet"
      | "LabTargetCost"
      | "EnvironmentTemplate"
      | "ScheduleEditPermission";
    factData?: string;
    threshold?: string;
    evaluatorType?: "AllowedValuesPolicy" | "MaxValuePolicy";
    createdDate?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const PoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    policySetName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      description: Schema.optional(Schema.String),
      status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      factName: Schema.optional(
        Schema.Literals([
          "UserOwnedLabVmCount",
          "UserOwnedLabPremiumVmCount",
          "LabVmCount",
          "LabPremiumVmCount",
          "LabVmSize",
          "GalleryImage",
          "UserOwnedLabVmCountInSubnet",
          "LabTargetCost",
          "EnvironmentTemplate",
          "ScheduleEditPermission",
        ]),
      ),
      factData: Schema.optional(Schema.String),
      threshold: Schema.optional(Schema.String),
      evaluatorType: Schema.optional(
        Schema.Literals(["AllowedValuesPolicy", "MaxValuePolicy"]),
      ),
      createdDate: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<PoliciesCreateOrUpdateInput>;

// Output Schema
export interface PoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const PoliciesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param policySetName - policysets
 * @param name - The name of the Policy
 */
export const PoliciesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoliciesCreateOrUpdateInput,
    outputSchema: PoliciesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface PoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  policySetName: string;
  name: string;
}
export const PoliciesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  policySetName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<PoliciesDeleteInput>;

// Output Schema
export type PoliciesDeleteOutput = void;
export const PoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PoliciesDeleteOutput>;

// The operation
/**
 * Delete policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param policySetName - policysets
 * @param name - The name of the Policy
 */
export const PoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoliciesDeleteInput,
  outputSchema: PoliciesDeleteOutput,
}));
// Input Schema
export interface PoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  policySetName: string;
  name: string;
  $expand?: string;
}
export const PoliciesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  policySetName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<PoliciesGetInput>;

// Output Schema
export interface PoliciesGetOutput {
  id?: string;
  name?: string;
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
export const PoliciesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<PoliciesGetOutput>;

// The operation
/**
 * Get policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param policySetName - policysets
 * @param name - The name of the Policy
 * @param $expand - Specify the $expand query. Example: 'properties($select=description)'
 */
export const PoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoliciesGetInput,
  outputSchema: PoliciesGetOutput,
}));
// Input Schema
export interface PoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  policySetName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const PoliciesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  policySetName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $orderby: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<PoliciesListInput>;

// Output Schema
export interface PoliciesListOutput {
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
export const PoliciesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoliciesListOutput>;

// The operation
/**
 * List policies in a given policy set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param policySetName - policysets
 * @param $expand - Specify the $expand query. Example: 'properties($select=description)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const PoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoliciesListInput,
  outputSchema: PoliciesListOutput,
}));
// Input Schema
export interface PoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  policySetName: string;
  name: string;
  tags?: Record<string, string>;
}
export const PoliciesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  policySetName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{policySetName}/policies/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<PoliciesUpdateInput>;

// Output Schema
export interface PoliciesUpdateOutput {
  id?: string;
  name?: string;
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
export const PoliciesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<PoliciesUpdateOutput>;

// The operation
/**
 * Allows modifying tags of policies. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param policySetName - policysets
 * @param name - The name of the Policy
 */
export const PoliciesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoliciesUpdateInput,
  outputSchema: PoliciesUpdateOutput,
}));
// Input Schema
export interface PolicySetsEvaluatePoliciesInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  policies?: {
    factName?: string;
    factData?: string;
    valueOffset?: string;
    userObjectId?: string;
  }[];
}
export const PolicySetsEvaluatePoliciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    policies: Schema.optional(
      Schema.Array(
        Schema.Struct({
          factName: Schema.optional(Schema.String),
          factData: Schema.optional(Schema.String),
          valueOffset: Schema.optional(Schema.String),
          userObjectId: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/policysets/{name}/evaluatePolicies",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<PolicySetsEvaluatePoliciesInput>;

// Output Schema
export interface PolicySetsEvaluatePoliciesOutput {
  results?: {
    hasError?: boolean;
    policyViolations?: { code?: string; message?: string }[];
  }[];
}
export const PolicySetsEvaluatePoliciesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          hasError: Schema.optional(Schema.Boolean),
          policyViolations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PolicySetsEvaluatePoliciesOutput>;

// The operation
/**
 * Evaluates lab policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the PolicySet
 */
export const PolicySetsEvaluatePolicies = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PolicySetsEvaluatePoliciesInput,
    outputSchema: PolicySetsEvaluatePoliciesOutput,
  }),
);
// Input Schema
export interface ProviderOperationsListInput {}
export const ProviderOperationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.DevTestLab/operations",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ProviderOperationsListInput>;

// Output Schema
export interface ProviderOperationsListOutput {
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
export const ProviderOperationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ProviderOperationsListOutput>;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const ProviderOperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderOperationsListInput,
    outputSchema: ProviderOperationsListOutput,
  }),
);
// Input Schema
export interface SchedulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  properties: {
    status?: "Enabled" | "Disabled";
    taskType?: string;
    weeklyRecurrence?: { weekdays?: string[]; time?: string };
    dailyRecurrence?: { time?: string };
    hourlyRecurrence?: { minute?: number };
    timeZoneId?: string;
    notificationSettings?: {
      status?: "Enabled" | "Disabled";
      timeInMinutes?: number;
      webhookUrl?: string;
      emailRecipient?: string;
      notificationLocale?: string;
    };
    createdDate?: string;
    targetResourceId?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const SchedulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      taskType: Schema.optional(Schema.String),
      weeklyRecurrence: Schema.optional(
        Schema.Struct({
          weekdays: Schema.optional(Schema.Array(Schema.String)),
          time: Schema.optional(Schema.String),
        }),
      ),
      dailyRecurrence: Schema.optional(
        Schema.Struct({
          time: Schema.optional(Schema.String),
        }),
      ),
      hourlyRecurrence: Schema.optional(
        Schema.Struct({
          minute: Schema.optional(Schema.Number),
        }),
      ),
      timeZoneId: Schema.optional(Schema.String),
      notificationSettings: Schema.optional(
        Schema.Struct({
          status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          timeInMinutes: Schema.optional(Schema.Number),
          webhookUrl: Schema.optional(Schema.String),
          emailRecipient: Schema.optional(Schema.String),
          notificationLocale: Schema.optional(Schema.String),
        }),
      ),
      createdDate: Schema.optional(Schema.String),
      targetResourceId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<SchedulesCreateOrUpdateInput>;

// Output Schema
export interface SchedulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const SchedulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SchedulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param name - The name of the Schedule
 */
export const SchedulesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchedulesCreateOrUpdateInput,
    outputSchema: SchedulesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface SchedulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const SchedulesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<SchedulesDeleteInput>;

// Output Schema
export type SchedulesDeleteOutput = void;
export const SchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SchedulesDeleteOutput>;

// The operation
/**
 * Delete schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param name - The name of the Schedule
 */
export const SchedulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulesDeleteInput,
  outputSchema: SchedulesDeleteOutput,
}));
// Input Schema
export interface SchedulesExecuteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const SchedulesExecuteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}/execute",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<SchedulesExecuteInput>;

// Output Schema
export type SchedulesExecuteOutput = void;
export const SchedulesExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SchedulesExecuteOutput>;

// The operation
/**
 * Execute a schedule. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param name - The name of the Schedule
 */
export const SchedulesExecute = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulesExecuteInput,
  outputSchema: SchedulesExecuteOutput,
}));
// Input Schema
export interface SchedulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  $expand?: string;
}
export const SchedulesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<SchedulesGetInput>;

// Output Schema
export interface SchedulesGetOutput {
  id?: string;
  name?: string;
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
export const SchedulesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<SchedulesGetOutput>;

// The operation
/**
 * Get schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param name - The name of the Schedule
 * @param $expand - Specify the $expand query. Example: 'properties($select=status)'
 */
export const SchedulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulesGetInput,
  outputSchema: SchedulesGetOutput,
}));
// Input Schema
export interface SchedulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const SchedulesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $orderby: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<SchedulesListInput>;

// Output Schema
export interface SchedulesListOutput {
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
export const SchedulesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SchedulesListOutput>;

// The operation
/**
 * List schedules in a given lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param $expand - Specify the $expand query. Example: 'properties($select=status)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const SchedulesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulesListInput,
  outputSchema: SchedulesListOutput,
}));
// Input Schema
export interface SchedulesListApplicableInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const SchedulesListApplicableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}/listApplicable",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<SchedulesListApplicableInput>;

// Output Schema
export interface SchedulesListApplicableOutput {
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
export const SchedulesListApplicableOutput =
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
  }) as unknown as Schema.Codec<SchedulesListApplicableOutput>;

// The operation
/**
 * Lists all applicable schedules
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param name - The name of the Schedule
 */
export const SchedulesListApplicable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchedulesListApplicableInput,
    outputSchema: SchedulesListApplicableOutput,
  }),
);
// Input Schema
export interface SchedulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  tags?: Record<string, string>;
}
export const SchedulesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/schedules/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<SchedulesUpdateInput>;

// Output Schema
export interface SchedulesUpdateOutput {
  id?: string;
  name?: string;
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
export const SchedulesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<SchedulesUpdateOutput>;

// The operation
/**
 * Allows modifying tags of schedules. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param name - The name of the Schedule
 */
export const SchedulesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulesUpdateInput,
  outputSchema: SchedulesUpdateOutput,
}));
// Input Schema
export interface SecretsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  properties: {
    value?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const SecretsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      value: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<SecretsCreateOrUpdateInput>;

// Output Schema
export interface SecretsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const SecretsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SecretsCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing secret. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the secret.
 */
export const SecretsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SecretsCreateOrUpdateInput,
    outputSchema: SecretsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface SecretsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
}
export const SecretsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<SecretsDeleteInput>;

// Output Schema
export type SecretsDeleteOutput = void;
export const SecretsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SecretsDeleteOutput>;

// The operation
/**
 * Delete secret.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the secret.
 */
export const SecretsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretsDeleteInput,
  outputSchema: SecretsDeleteOutput,
}));
// Input Schema
export interface SecretsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  $expand?: string;
}
export const SecretsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<SecretsGetInput>;

// Output Schema
export interface SecretsGetOutput {
  id?: string;
  name?: string;
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
export const SecretsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<SecretsGetOutput>;

// The operation
/**
 * Get secret.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the secret.
 * @param $expand - Specify the $expand query. Example: 'properties($select=value)'
 */
export const SecretsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretsGetInput,
  outputSchema: SecretsGetOutput,
}));
// Input Schema
export interface SecretsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const SecretsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $orderby: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<SecretsListInput>;

// Output Schema
export interface SecretsListOutput {
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
export const SecretsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SecretsListOutput>;

// The operation
/**
 * List secrets in a given user profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param $expand - Specify the $expand query. Example: 'properties($select=value)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const SecretsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretsListInput,
  outputSchema: SecretsListOutput,
}));
// Input Schema
export interface SecretsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  tags?: Record<string, string>;
}
export const SecretsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/secrets/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<SecretsUpdateInput>;

// Output Schema
export interface SecretsUpdateOutput {
  id?: string;
  name?: string;
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
export const SecretsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<SecretsUpdateOutput>;

// The operation
/**
 * Allows modifying tags of secrets. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the secret.
 */
export const SecretsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretsUpdateInput,
  outputSchema: SecretsUpdateOutput,
}));
// Input Schema
export interface ServiceFabricSchedulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  serviceFabricName: string;
  name: string;
  properties: {
    status?: "Enabled" | "Disabled";
    taskType?: string;
    weeklyRecurrence?: { weekdays?: string[]; time?: string };
    dailyRecurrence?: { time?: string };
    hourlyRecurrence?: { minute?: number };
    timeZoneId?: string;
    notificationSettings?: {
      status?: "Enabled" | "Disabled";
      timeInMinutes?: number;
      webhookUrl?: string;
      emailRecipient?: string;
      notificationLocale?: string;
    };
    createdDate?: string;
    targetResourceId?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const ServiceFabricSchedulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    serviceFabricName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      taskType: Schema.optional(Schema.String),
      weeklyRecurrence: Schema.optional(
        Schema.Struct({
          weekdays: Schema.optional(Schema.Array(Schema.String)),
          time: Schema.optional(Schema.String),
        }),
      ),
      dailyRecurrence: Schema.optional(
        Schema.Struct({
          time: Schema.optional(Schema.String),
        }),
      ),
      hourlyRecurrence: Schema.optional(
        Schema.Struct({
          minute: Schema.optional(Schema.Number),
        }),
      ),
      timeZoneId: Schema.optional(Schema.String),
      notificationSettings: Schema.optional(
        Schema.Struct({
          status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          timeInMinutes: Schema.optional(Schema.Number),
          webhookUrl: Schema.optional(Schema.String),
          emailRecipient: Schema.optional(Schema.String),
          notificationLocale: Schema.optional(Schema.String),
        }),
      ),
      createdDate: Schema.optional(Schema.String),
      targetResourceId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricSchedulesCreateOrUpdateInput>;

// Output Schema
export interface ServiceFabricSchedulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ServiceFabricSchedulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ServiceFabricSchedulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param userName - users
 * @param serviceFabricName - servicefabrics
 * @param name - The name of the Schedule
 */
export const ServiceFabricSchedulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceFabricSchedulesCreateOrUpdateInput,
    outputSchema: ServiceFabricSchedulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ServiceFabricSchedulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  serviceFabricName: string;
  name: string;
}
export const ServiceFabricSchedulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    serviceFabricName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricSchedulesDeleteInput>;

// Output Schema
export type ServiceFabricSchedulesDeleteOutput = void;
export const ServiceFabricSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceFabricSchedulesDeleteOutput>;

// The operation
/**
 * Delete schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param userName - users
 * @param serviceFabricName - servicefabrics
 * @param name - The name of the Schedule
 */
export const ServiceFabricSchedulesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceFabricSchedulesDeleteInput,
    outputSchema: ServiceFabricSchedulesDeleteOutput,
  }));
// Input Schema
export interface ServiceFabricSchedulesExecuteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  serviceFabricName: string;
  name: string;
}
export const ServiceFabricSchedulesExecuteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    serviceFabricName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}/execute",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricSchedulesExecuteInput>;

// Output Schema
export type ServiceFabricSchedulesExecuteOutput = void;
export const ServiceFabricSchedulesExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceFabricSchedulesExecuteOutput>;

// The operation
/**
 * Execute a schedule. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param userName - users
 * @param serviceFabricName - servicefabrics
 * @param name - The name of the Schedule
 */
export const ServiceFabricSchedulesExecute =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceFabricSchedulesExecuteInput,
    outputSchema: ServiceFabricSchedulesExecuteOutput,
  }));
// Input Schema
export interface ServiceFabricSchedulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  serviceFabricName: string;
  name: string;
  $expand?: string;
}
export const ServiceFabricSchedulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    serviceFabricName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricSchedulesGetInput>;

// Output Schema
export interface ServiceFabricSchedulesGetOutput {
  id?: string;
  name?: string;
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
export const ServiceFabricSchedulesGetOutput =
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
  }) as unknown as Schema.Codec<ServiceFabricSchedulesGetOutput>;

// The operation
/**
 * Get schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param userName - users
 * @param serviceFabricName - servicefabrics
 * @param name - The name of the Schedule
 * @param $expand - Specify the $expand query. Example: 'properties($select=status)'
 */
export const ServiceFabricSchedulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceFabricSchedulesGetInput,
    outputSchema: ServiceFabricSchedulesGetOutput,
  }),
);
// Input Schema
export interface ServiceFabricSchedulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  serviceFabricName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const ServiceFabricSchedulesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    serviceFabricName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricSchedulesListInput>;

// Output Schema
export interface ServiceFabricSchedulesListOutput {
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
export const ServiceFabricSchedulesListOutput =
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
  }) as unknown as Schema.Codec<ServiceFabricSchedulesListOutput>;

// The operation
/**
 * List schedules in a given service fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param userName - users
 * @param serviceFabricName - servicefabrics
 * @param $expand - Specify the $expand query. Example: 'properties($select=status)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const ServiceFabricSchedulesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceFabricSchedulesListInput,
    outputSchema: ServiceFabricSchedulesListOutput,
  }),
);
// Input Schema
export interface ServiceFabricSchedulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  serviceFabricName: string;
  name: string;
  tags?: Record<string, string>;
}
export const ServiceFabricSchedulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    serviceFabricName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricSchedulesUpdateInput>;

// Output Schema
export interface ServiceFabricSchedulesUpdateOutput {
  id?: string;
  name?: string;
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
export const ServiceFabricSchedulesUpdateOutput =
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
  }) as unknown as Schema.Codec<ServiceFabricSchedulesUpdateOutput>;

// The operation
/**
 * Allows modifying tags of schedules. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param userName - users
 * @param serviceFabricName - servicefabrics
 * @param name - The name of the Schedule
 */
export const ServiceFabricSchedulesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceFabricSchedulesUpdateInput,
    outputSchema: ServiceFabricSchedulesUpdateOutput,
  }));
// Input Schema
export interface ServiceFabricsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  properties: {
    externalServiceFabricId?: string;
    environmentId?: string;
    applicableSchedule?: {
      id?: string;
      name?: string;
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
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const ServiceFabricsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      externalServiceFabricId: Schema.optional(Schema.String),
      environmentId: Schema.optional(Schema.String),
      applicableSchedule: Schema.optional(
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
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricsCreateOrUpdateInput>;

// Output Schema
export interface ServiceFabricsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ServiceFabricsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ServiceFabricsCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing service fabric. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the service fabric.
 */
export const ServiceFabricsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceFabricsCreateOrUpdateInput,
    outputSchema: ServiceFabricsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ServiceFabricsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
}
export const ServiceFabricsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricsDeleteInput>;

// Output Schema
export type ServiceFabricsDeleteOutput = void;
export const ServiceFabricsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceFabricsDeleteOutput>;

// The operation
/**
 * Delete service fabric. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the service fabric.
 */
export const ServiceFabricsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceFabricsDeleteInput,
    outputSchema: ServiceFabricsDeleteOutput,
  }),
);
// Input Schema
export interface ServiceFabricsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  $expand?: string;
}
export const ServiceFabricsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<ServiceFabricsGetInput>;

// Output Schema
export interface ServiceFabricsGetOutput {
  id?: string;
  name?: string;
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
export const ServiceFabricsGetOutput =
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
  }) as unknown as Schema.Codec<ServiceFabricsGetOutput>;

// The operation
/**
 * Get service fabric.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the service fabric.
 * @param $expand - Specify the $expand query. Example: 'properties($expand=applicableSchedule)'
 */
export const ServiceFabricsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServiceFabricsGetInput,
  outputSchema: ServiceFabricsGetOutput,
}));
// Input Schema
export interface ServiceFabricsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const ServiceFabricsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricsListInput>;

// Output Schema
export interface ServiceFabricsListOutput {
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
export const ServiceFabricsListOutput =
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
  }) as unknown as Schema.Codec<ServiceFabricsListOutput>;

// The operation
/**
 * List service fabrics in a given user profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param $expand - Specify the $expand query. Example: 'properties($expand=applicableSchedule)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const ServiceFabricsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServiceFabricsListInput,
  outputSchema: ServiceFabricsListOutput,
}));
// Input Schema
export interface ServiceFabricsListApplicableSchedulesInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
}
export const ServiceFabricsListApplicableSchedulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/listApplicableSchedules",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricsListApplicableSchedulesInput>;

// Output Schema
export interface ServiceFabricsListApplicableSchedulesOutput {
  id?: string;
  name?: string;
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
export const ServiceFabricsListApplicableSchedulesOutput =
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
  }) as unknown as Schema.Codec<ServiceFabricsListApplicableSchedulesOutput>;

// The operation
/**
 * Lists the applicable start/stop schedules, if any.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the service fabric.
 */
export const ServiceFabricsListApplicableSchedules =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceFabricsListApplicableSchedulesInput,
    outputSchema: ServiceFabricsListApplicableSchedulesOutput,
  }));
// Input Schema
export interface ServiceFabricsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
}
export const ServiceFabricsStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/start",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricsStartInput>;

// Output Schema
export type ServiceFabricsStartOutput = void;
export const ServiceFabricsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceFabricsStartOutput>;

// The operation
/**
 * Start a service fabric. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the service fabric.
 */
export const ServiceFabricsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServiceFabricsStartInput,
  outputSchema: ServiceFabricsStartOutput,
}));
// Input Schema
export interface ServiceFabricsStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
}
export const ServiceFabricsStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}/stop",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricsStopInput>;

// Output Schema
export type ServiceFabricsStopOutput = void;
export const ServiceFabricsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceFabricsStopOutput>;

// The operation
/**
 * Stop a service fabric This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the service fabric.
 */
export const ServiceFabricsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServiceFabricsStopInput,
  outputSchema: ServiceFabricsStopOutput,
}));
// Input Schema
export interface ServiceFabricsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  name: string;
  tags?: Record<string, string>;
}
export const ServiceFabricsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceFabricsUpdateInput>;

// Output Schema
export interface ServiceFabricsUpdateOutput {
  id?: string;
  name?: string;
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
export const ServiceFabricsUpdateOutput =
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
  }) as unknown as Schema.Codec<ServiceFabricsUpdateOutput>;

// The operation
/**
 * Allows modifying tags of service fabrics. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param userName - The name of the user profile.
 * @param name - The name of the service fabric.
 */
export const ServiceFabricsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceFabricsUpdateInput,
    outputSchema: ServiceFabricsUpdateOutput,
  }),
);
// Input Schema
export interface ServiceRunnersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  tags?: Record<string, string>;
  location?: string;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    principalId?: string;
    tenantId?: string;
    clientSecretUrl?: string;
  };
}
export const ServiceRunnersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned,UserAssigned",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        clientSecretUrl: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/servicerunners/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceRunnersCreateOrUpdateInput>;

// Output Schema
export interface ServiceRunnersCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ServiceRunnersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ServiceRunnersCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing service runner.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the service runner.
 */
export const ServiceRunnersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceRunnersCreateOrUpdateInput,
    outputSchema: ServiceRunnersCreateOrUpdateOutput,
  }));
// Input Schema
export interface ServiceRunnersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const ServiceRunnersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/servicerunners/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<ServiceRunnersDeleteInput>;

// Output Schema
export type ServiceRunnersDeleteOutput = void;
export const ServiceRunnersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceRunnersDeleteOutput>;

// The operation
/**
 * Delete service runner.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the service runner.
 */
export const ServiceRunnersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceRunnersDeleteInput,
    outputSchema: ServiceRunnersDeleteOutput,
  }),
);
// Input Schema
export interface ServiceRunnersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const ServiceRunnersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/servicerunners/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<ServiceRunnersGetInput>;

// Output Schema
export interface ServiceRunnersGetOutput {
  id?: string;
  name?: string;
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
export const ServiceRunnersGetOutput =
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
  }) as unknown as Schema.Codec<ServiceRunnersGetOutput>;

// The operation
/**
 * Get service runner.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the service runner.
 */
export const ServiceRunnersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServiceRunnersGetInput,
  outputSchema: ServiceRunnersGetOutput,
}));
// Input Schema
export interface UsersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  properties: {
    identity?: {
      principalName?: string;
      principalId?: string;
      tenantId?: string;
      objectId?: string;
      appId?: string;
    };
    secretStore?: { keyVaultUri?: string; keyVaultId?: string };
    createdDate?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const UsersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      identity: Schema.optional(
        Schema.Struct({
          principalName: Schema.optional(Schema.String),
          principalId: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          objectId: Schema.optional(Schema.String),
          appId: Schema.optional(Schema.String),
        }),
      ),
      secretStore: Schema.optional(
        Schema.Struct({
          keyVaultUri: Schema.optional(Schema.String),
          keyVaultId: Schema.optional(Schema.String),
        }),
      ),
      createdDate: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<UsersCreateOrUpdateInput>;

// Output Schema
export interface UsersCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const UsersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<UsersCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing user profile. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the user profile.
 */
export const UsersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersCreateOrUpdateInput,
  outputSchema: UsersCreateOrUpdateOutput,
}));
// Input Schema
export interface UsersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const UsersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<UsersDeleteInput>;

// Output Schema
export type UsersDeleteOutput = void;
export const UsersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersDeleteOutput>;

// The operation
/**
 * Delete user profile. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the user profile.
 */
export const UsersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersDeleteInput,
  outputSchema: UsersDeleteOutput,
}));
// Input Schema
export interface UsersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  $expand?: string;
}
export const UsersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<UsersGetInput>;

// Output Schema
export interface UsersGetOutput {
  id?: string;
  name?: string;
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
export const UsersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<UsersGetOutput>;

// The operation
/**
 * Get user profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the user profile.
 * @param $expand - Specify the $expand query. Example: 'properties($select=identity)'
 */
export const UsersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersGetInput,
  outputSchema: UsersGetOutput,
}));
// Input Schema
export interface UsersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const UsersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
  $filter: Schema.optional(Schema.String),
  $top: Schema.optional(Schema.Number),
  $orderby: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<UsersListInput>;

// Output Schema
export interface UsersListOutput {
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
export const UsersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<UsersListOutput>;

// The operation
/**
 * List user profiles in a given lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param $expand - Specify the $expand query. Example: 'properties($select=identity)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const UsersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersListInput,
  outputSchema: UsersListOutput,
}));
// Input Schema
export interface UsersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  tags?: Record<string, string>;
}
export const UsersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{name}",
    apiVersion: "2018-09-15",
  }),
) as unknown as Schema.Codec<UsersUpdateInput>;

// Output Schema
export interface UsersUpdateOutput {
  id?: string;
  name?: string;
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
export const UsersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<UsersUpdateOutput>;

// The operation
/**
 * Allows modifying tags of user profiles. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the user profile.
 */
export const UsersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersUpdateInput,
  outputSchema: UsersUpdateOutput,
}));
// Input Schema
export interface VirtualMachinesAddDataDiskInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  attachNewDataDiskOptions?: {
    diskSizeGiB?: number;
    diskName?: string;
    diskType?: "Standard" | "Premium" | "StandardSSD";
  };
  existingLabDiskId?: string;
  hostCaching?: "None" | "ReadOnly" | "ReadWrite";
}
export const VirtualMachinesAddDataDiskInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    attachNewDataDiskOptions: Schema.optional(
      Schema.Struct({
        diskSizeGiB: Schema.optional(Schema.Number),
        diskName: Schema.optional(Schema.String),
        diskType: Schema.optional(
          Schema.Literals(["Standard", "Premium", "StandardSSD"]),
        ),
      }),
    ),
    existingLabDiskId: Schema.optional(Schema.String),
    hostCaching: Schema.optional(
      Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/addDataDisk",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesAddDataDiskInput>;

// Output Schema
export type VirtualMachinesAddDataDiskOutput = void;
export const VirtualMachinesAddDataDiskOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesAddDataDiskOutput>;

// The operation
/**
 * Attach a new or existing data disk to virtual machine. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesAddDataDisk = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesAddDataDiskInput,
    outputSchema: VirtualMachinesAddDataDiskOutput,
  }),
);
// Input Schema
export interface VirtualMachinesApplyArtifactsInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  artifacts?: {
    artifactId?: string;
    artifactTitle?: string;
    parameters?: { name?: string; value?: string }[];
    status?: string;
    deploymentStatusMessage?: string;
    vmExtensionStatusMessage?: string;
    installTime?: string;
  }[];
}
export const VirtualMachinesApplyArtifactsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    artifacts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          artifactId: Schema.optional(Schema.String),
          artifactTitle: Schema.optional(Schema.String),
          parameters: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          status: Schema.optional(Schema.String),
          deploymentStatusMessage: Schema.optional(Schema.String),
          vmExtensionStatusMessage: Schema.optional(Schema.String),
          installTime: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/applyArtifacts",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesApplyArtifactsInput>;

// Output Schema
export type VirtualMachinesApplyArtifactsOutput = void;
export const VirtualMachinesApplyArtifactsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesApplyArtifactsOutput>;

// The operation
/**
 * Apply artifacts to virtual machine. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesApplyArtifacts =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesApplyArtifactsInput,
    outputSchema: VirtualMachinesApplyArtifactsOutput,
  }));
// Input Schema
export interface VirtualMachineSchedulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
  name: string;
  properties: {
    status?: "Enabled" | "Disabled";
    taskType?: string;
    weeklyRecurrence?: { weekdays?: string[]; time?: string };
    dailyRecurrence?: { time?: string };
    hourlyRecurrence?: { minute?: number };
    timeZoneId?: string;
    notificationSettings?: {
      status?: "Enabled" | "Disabled";
      timeInMinutes?: number;
      webhookUrl?: string;
      emailRecipient?: string;
      notificationLocale?: string;
    };
    createdDate?: string;
    targetResourceId?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const VirtualMachineSchedulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      taskType: Schema.optional(Schema.String),
      weeklyRecurrence: Schema.optional(
        Schema.Struct({
          weekdays: Schema.optional(Schema.Array(Schema.String)),
          time: Schema.optional(Schema.String),
        }),
      ),
      dailyRecurrence: Schema.optional(
        Schema.Struct({
          time: Schema.optional(Schema.String),
        }),
      ),
      hourlyRecurrence: Schema.optional(
        Schema.Struct({
          minute: Schema.optional(Schema.Number),
        }),
      ),
      timeZoneId: Schema.optional(Schema.String),
      notificationSettings: Schema.optional(
        Schema.Struct({
          status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          timeInMinutes: Schema.optional(Schema.Number),
          webhookUrl: Schema.optional(Schema.String),
          emailRecipient: Schema.optional(Schema.String),
          notificationLocale: Schema.optional(Schema.String),
        }),
      ),
      createdDate: Schema.optional(Schema.String),
      targetResourceId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachineSchedulesCreateOrUpdateInput>;

// Output Schema
export interface VirtualMachineSchedulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualMachineSchedulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineSchedulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param virtualMachineName - virtualmachines
 * @param name - The name of the Schedule
 */
export const VirtualMachineSchedulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineSchedulesCreateOrUpdateInput,
    outputSchema: VirtualMachineSchedulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualMachineSchedulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
  name: string;
}
export const VirtualMachineSchedulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachineSchedulesDeleteInput>;

// Output Schema
export type VirtualMachineSchedulesDeleteOutput = void;
export const VirtualMachineSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineSchedulesDeleteOutput>;

// The operation
/**
 * Delete schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param virtualMachineName - virtualmachines
 * @param name - The name of the Schedule
 */
export const VirtualMachineSchedulesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineSchedulesDeleteInput,
    outputSchema: VirtualMachineSchedulesDeleteOutput,
  }));
// Input Schema
export interface VirtualMachineSchedulesExecuteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
  name: string;
}
export const VirtualMachineSchedulesExecuteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}/execute",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachineSchedulesExecuteInput>;

// Output Schema
export type VirtualMachineSchedulesExecuteOutput = void;
export const VirtualMachineSchedulesExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineSchedulesExecuteOutput>;

// The operation
/**
 * Execute a schedule. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param virtualMachineName - virtualmachines
 * @param name - The name of the Schedule
 */
export const VirtualMachineSchedulesExecute =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineSchedulesExecuteInput,
    outputSchema: VirtualMachineSchedulesExecuteOutput,
  }));
// Input Schema
export interface VirtualMachineSchedulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
  name: string;
  $expand?: string;
}
export const VirtualMachineSchedulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachineSchedulesGetInput>;

// Output Schema
export interface VirtualMachineSchedulesGetOutput {
  id?: string;
  name?: string;
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
export const VirtualMachineSchedulesGetOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineSchedulesGetOutput>;

// The operation
/**
 * Get schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param virtualMachineName - virtualmachines
 * @param name - The name of the Schedule
 * @param $expand - Specify the $expand query. Example: 'properties($select=status)'
 */
export const VirtualMachineSchedulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineSchedulesGetInput,
    outputSchema: VirtualMachineSchedulesGetOutput,
  }),
);
// Input Schema
export interface VirtualMachineSchedulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const VirtualMachineSchedulesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachineSchedulesListInput>;

// Output Schema
export interface VirtualMachineSchedulesListOutput {
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
export const VirtualMachineSchedulesListOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineSchedulesListOutput>;

// The operation
/**
 * List schedules in a given virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param virtualMachineName - virtualmachines
 * @param $expand - Specify the $expand query. Example: 'properties($select=status)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const VirtualMachineSchedulesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineSchedulesListInput,
    outputSchema: VirtualMachineSchedulesListOutput,
  }),
);
// Input Schema
export interface VirtualMachineSchedulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
  name: string;
  tags?: Record<string, string>;
}
export const VirtualMachineSchedulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachineSchedulesUpdateInput>;

// Output Schema
export interface VirtualMachineSchedulesUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualMachineSchedulesUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineSchedulesUpdateOutput>;

// The operation
/**
 * Allows modifying tags of schedules. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - labs
 * @param virtualMachineName - virtualmachines
 * @param name - The name of the Schedule
 */
export const VirtualMachineSchedulesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineSchedulesUpdateInput,
    outputSchema: VirtualMachineSchedulesUpdateOutput,
  }));
// Input Schema
export interface VirtualMachinesClaimInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const VirtualMachinesClaimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/claim",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesClaimInput>;

// Output Schema
export type VirtualMachinesClaimOutput = void;
export const VirtualMachinesClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesClaimOutput>;

// The operation
/**
 * Take ownership of an existing virtual machine This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesClaim = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesClaimInput,
    outputSchema: VirtualMachinesClaimOutput,
  }),
);
// Input Schema
export interface VirtualMachinesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  properties: {
    notes?: string;
    ownerObjectId?: string;
    ownerUserPrincipalName?: string;
    createdByUserId?: string;
    createdByUser?: string;
    createdDate?: string;
    computeId?: string;
    customImageId?: string;
    osType?: string;
    size?: string;
    userName?: string;
    password?: string | Redacted.Redacted<string>;
    sshKey?: string;
    isAuthenticationWithSshKey?: boolean;
    fqdn?: string;
    labSubnetName?: string;
    labVirtualNetworkId?: string;
    disallowPublicIpAddress?: boolean;
    artifacts?: {
      artifactId?: string;
      artifactTitle?: string;
      parameters?: { name?: string; value?: string }[];
      status?: string;
      deploymentStatusMessage?: string;
      vmExtensionStatusMessage?: string;
      installTime?: string;
    }[];
    artifactDeploymentStatus?: {
      deploymentStatus?: string;
      artifactsApplied?: number;
      totalArtifacts?: number;
    };
    galleryImageReference?: {
      offer?: string;
      publisher?: string;
      sku?: string;
      osType?: string;
      version?: string;
    };
    planId?: string;
    computeVm?: {
      statuses?: { code?: string; displayStatus?: string; message?: string }[];
      osType?: string;
      vmSize?: string;
      networkInterfaceId?: string;
      osDiskId?: string;
      dataDiskIds?: string[];
      dataDisks?: {
        name?: string;
        diskUri?: string;
        managedDiskId?: string;
        diskSizeGiB?: number;
      }[];
    };
    networkInterface?: {
      virtualNetworkId?: string;
      subnetId?: string;
      publicIpAddressId?: string;
      publicIpAddress?: string;
      privateIpAddress?: string;
      dnsName?: string;
      rdpAuthority?: string;
      sshAuthority?: string;
      sharedPublicIpAddressConfiguration?: {
        inboundNatRules?: {
          transportProtocol?: "Tcp" | "Udp";
          frontendPort?: number;
          backendPort?: number;
        }[];
      };
    };
    applicableSchedule?: {
      id?: string;
      name?: string;
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
    expirationDate?: string;
    allowClaim?: boolean;
    storageType?: string;
    virtualMachineCreationSource?:
      | "FromCustomImage"
      | "FromGalleryImage"
      | "FromSharedGalleryImage";
    environmentId?: string;
    dataDiskParameters?: {
      attachNewDataDiskOptions?: {
        diskSizeGiB?: number;
        diskName?: string;
        diskType?: "Standard" | "Premium" | "StandardSSD";
      };
      existingLabDiskId?: string;
      hostCaching?: "None" | "ReadOnly" | "ReadWrite";
    }[];
    scheduleParameters?: {
      properties?: {
        status?: "Enabled" | "Disabled";
        taskType?: string;
        weeklyRecurrence?: { weekdays?: string[]; time?: string };
        dailyRecurrence?: { time?: string };
        hourlyRecurrence?: { minute?: number };
        timeZoneId?: string;
        notificationSettings?: {
          status?: "Enabled" | "Disabled";
          timeInMinutes?: number;
          webhookUrl?: string;
          emailRecipient?: string;
          notificationLocale?: string;
        };
        targetResourceId?: string;
      };
      name?: string;
      location?: string;
      tags?: Record<string, string>;
    }[];
    lastKnownPowerState?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const VirtualMachinesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      notes: Schema.optional(Schema.String),
      ownerObjectId: Schema.optional(Schema.String),
      ownerUserPrincipalName: Schema.optional(Schema.String),
      createdByUserId: Schema.optional(Schema.String),
      createdByUser: Schema.optional(Schema.String),
      createdDate: Schema.optional(Schema.String),
      computeId: Schema.optional(Schema.String),
      customImageId: Schema.optional(Schema.String),
      osType: Schema.optional(Schema.String),
      size: Schema.optional(Schema.String),
      userName: Schema.optional(Schema.String),
      password: Schema.optional(SensitiveString),
      sshKey: Schema.optional(Schema.String),
      isAuthenticationWithSshKey: Schema.optional(Schema.Boolean),
      fqdn: Schema.optional(Schema.String),
      labSubnetName: Schema.optional(Schema.String),
      labVirtualNetworkId: Schema.optional(Schema.String),
      disallowPublicIpAddress: Schema.optional(Schema.Boolean),
      artifacts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            artifactId: Schema.optional(Schema.String),
            artifactTitle: Schema.optional(Schema.String),
            parameters: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  value: Schema.optional(Schema.String),
                }),
              ),
            ),
            status: Schema.optional(Schema.String),
            deploymentStatusMessage: Schema.optional(Schema.String),
            vmExtensionStatusMessage: Schema.optional(Schema.String),
            installTime: Schema.optional(Schema.String),
          }),
        ),
      ),
      artifactDeploymentStatus: Schema.optional(
        Schema.Struct({
          deploymentStatus: Schema.optional(Schema.String),
          artifactsApplied: Schema.optional(Schema.Number),
          totalArtifacts: Schema.optional(Schema.Number),
        }),
      ),
      galleryImageReference: Schema.optional(
        Schema.Struct({
          offer: Schema.optional(Schema.String),
          publisher: Schema.optional(Schema.String),
          sku: Schema.optional(Schema.String),
          osType: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
        }),
      ),
      planId: Schema.optional(Schema.String),
      computeVm: Schema.optional(
        Schema.Struct({
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                displayStatus: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
          ),
          osType: Schema.optional(Schema.String),
          vmSize: Schema.optional(Schema.String),
          networkInterfaceId: Schema.optional(Schema.String),
          osDiskId: Schema.optional(Schema.String),
          dataDiskIds: Schema.optional(Schema.Array(Schema.String)),
          dataDisks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                diskUri: Schema.optional(Schema.String),
                managedDiskId: Schema.optional(Schema.String),
                diskSizeGiB: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
      networkInterface: Schema.optional(
        Schema.Struct({
          virtualNetworkId: Schema.optional(Schema.String),
          subnetId: Schema.optional(Schema.String),
          publicIpAddressId: Schema.optional(Schema.String),
          publicIpAddress: Schema.optional(Schema.String),
          privateIpAddress: Schema.optional(Schema.String),
          dnsName: Schema.optional(Schema.String),
          rdpAuthority: Schema.optional(Schema.String),
          sshAuthority: Schema.optional(Schema.String),
          sharedPublicIpAddressConfiguration: Schema.optional(
            Schema.Struct({
              inboundNatRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    transportProtocol: Schema.optional(
                      Schema.Literals(["Tcp", "Udp"]),
                    ),
                    frontendPort: Schema.optional(Schema.Number),
                    backendPort: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
      applicableSchedule: Schema.optional(
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
      expirationDate: Schema.optional(Schema.String),
      allowClaim: Schema.optional(Schema.Boolean),
      storageType: Schema.optional(Schema.String),
      virtualMachineCreationSource: Schema.optional(
        Schema.Literals([
          "FromCustomImage",
          "FromGalleryImage",
          "FromSharedGalleryImage",
        ]),
      ),
      environmentId: Schema.optional(Schema.String),
      dataDiskParameters: Schema.optional(
        Schema.Array(
          Schema.Struct({
            attachNewDataDiskOptions: Schema.optional(
              Schema.Struct({
                diskSizeGiB: Schema.optional(Schema.Number),
                diskName: Schema.optional(Schema.String),
                diskType: Schema.optional(
                  Schema.Literals(["Standard", "Premium", "StandardSSD"]),
                ),
              }),
            ),
            existingLabDiskId: Schema.optional(Schema.String),
            hostCaching: Schema.optional(
              Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
            ),
          }),
        ),
      ),
      scheduleParameters: Schema.optional(
        Schema.Array(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                taskType: Schema.optional(Schema.String),
                weeklyRecurrence: Schema.optional(
                  Schema.Struct({
                    weekdays: Schema.optional(Schema.Array(Schema.String)),
                    time: Schema.optional(Schema.String),
                  }),
                ),
                dailyRecurrence: Schema.optional(
                  Schema.Struct({
                    time: Schema.optional(Schema.String),
                  }),
                ),
                hourlyRecurrence: Schema.optional(
                  Schema.Struct({
                    minute: Schema.optional(Schema.Number),
                  }),
                ),
                timeZoneId: Schema.optional(Schema.String),
                notificationSettings: Schema.optional(
                  Schema.Struct({
                    status: Schema.optional(
                      Schema.Literals(["Enabled", "Disabled"]),
                    ),
                    timeInMinutes: Schema.optional(Schema.Number),
                    webhookUrl: Schema.optional(Schema.String),
                    emailRecipient: Schema.optional(Schema.String),
                    notificationLocale: Schema.optional(Schema.String),
                  }),
                ),
                targetResourceId: Schema.optional(Schema.String),
              }),
            ),
            name: Schema.optional(Schema.String),
            location: Schema.optional(Schema.String),
            tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          }),
        ),
      ),
      lastKnownPowerState: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesCreateOrUpdateInput>;

// Output Schema
export interface VirtualMachinesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualMachinesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachinesCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing virtual machine. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesCreateOrUpdateInput,
    outputSchema: VirtualMachinesCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualMachinesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const VirtualMachinesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesDeleteInput>;

// Output Schema
export type VirtualMachinesDeleteOutput = void;
export const VirtualMachinesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesDeleteOutput>;

// The operation
/**
 * Delete virtual machine. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesDeleteInput,
    outputSchema: VirtualMachinesDeleteOutput,
  }),
);
// Input Schema
export interface VirtualMachinesDetachDataDiskInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  existingLabDiskId?: string;
}
export const VirtualMachinesDetachDataDiskInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    existingLabDiskId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/detachDataDisk",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesDetachDataDiskInput>;

// Output Schema
export type VirtualMachinesDetachDataDiskOutput = void;
export const VirtualMachinesDetachDataDiskOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesDetachDataDiskOutput>;

// The operation
/**
 * Detach the specified disk from the virtual machine. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesDetachDataDisk =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesDetachDataDiskInput,
    outputSchema: VirtualMachinesDetachDataDiskOutput,
  }));
// Input Schema
export interface VirtualMachinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  $expand?: string;
}
export const VirtualMachinesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesGetInput>;

// Output Schema
export interface VirtualMachinesGetOutput {
  id?: string;
  name?: string;
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
export const VirtualMachinesGetOutput =
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
  }) as unknown as Schema.Codec<VirtualMachinesGetOutput>;

// The operation
/**
 * Get virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 * @param $expand - Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
 */
export const VirtualMachinesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesGetInput,
  outputSchema: VirtualMachinesGetOutput,
}));
// Input Schema
export interface VirtualMachinesGetRdpFileContentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const VirtualMachinesGetRdpFileContentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/getRdpFileContents",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesGetRdpFileContentsInput>;

// Output Schema
export interface VirtualMachinesGetRdpFileContentsOutput {
  contents?: string;
}
export const VirtualMachinesGetRdpFileContentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualMachinesGetRdpFileContentsOutput>;

// The operation
/**
 * Gets a string that represents the contents of the RDP file for the virtual machine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesGetRdpFileContents =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesGetRdpFileContentsInput,
    outputSchema: VirtualMachinesGetRdpFileContentsOutput,
  }));
// Input Schema
export interface VirtualMachinesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const VirtualMachinesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesListInput>;

// Output Schema
export interface VirtualMachinesListOutput {
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
export const VirtualMachinesListOutput =
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
  }) as unknown as Schema.Codec<VirtualMachinesListOutput>;

// The operation
/**
 * List virtual machines in a given lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param $expand - Specify the $expand query. Example: 'properties($expand=artifacts,computeVm,networkInterface,applicableSchedule)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const VirtualMachinesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesListInput,
  outputSchema: VirtualMachinesListOutput,
}));
// Input Schema
export interface VirtualMachinesListApplicableSchedulesInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const VirtualMachinesListApplicableSchedulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/listApplicableSchedules",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesListApplicableSchedulesInput>;

// Output Schema
export interface VirtualMachinesListApplicableSchedulesOutput {
  id?: string;
  name?: string;
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
export const VirtualMachinesListApplicableSchedulesOutput =
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
  }) as unknown as Schema.Codec<VirtualMachinesListApplicableSchedulesOutput>;

// The operation
/**
 * Lists the applicable start/stop schedules, if any.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesListApplicableSchedules =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesListApplicableSchedulesInput,
    outputSchema: VirtualMachinesListApplicableSchedulesOutput,
  }));
// Input Schema
export interface VirtualMachinesRedeployInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const VirtualMachinesRedeployInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/redeploy",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesRedeployInput>;

// Output Schema
export type VirtualMachinesRedeployOutput = void;
export const VirtualMachinesRedeployOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesRedeployOutput>;

// The operation
/**
 * Redeploy a virtual machine This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesRedeploy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesRedeployInput,
    outputSchema: VirtualMachinesRedeployOutput,
  }),
);
// Input Schema
export interface VirtualMachinesResizeInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  size?: string;
}
export const VirtualMachinesResizeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    size: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/resize",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesResizeInput>;

// Output Schema
export type VirtualMachinesResizeOutput = void;
export const VirtualMachinesResizeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesResizeOutput>;

// The operation
/**
 * Resize Virtual Machine. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesResize = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesResizeInput,
    outputSchema: VirtualMachinesResizeOutput,
  }),
);
// Input Schema
export interface VirtualMachinesRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const VirtualMachinesRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/restart",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesRestartInput>;

// Output Schema
export type VirtualMachinesRestartOutput = void;
export const VirtualMachinesRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesRestartOutput>;

// The operation
/**
 * Restart a virtual machine. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesRestartInput,
    outputSchema: VirtualMachinesRestartOutput,
  }),
);
// Input Schema
export interface VirtualMachinesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const VirtualMachinesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/start",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesStartInput>;

// Output Schema
export type VirtualMachinesStartOutput = void;
export const VirtualMachinesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesStartOutput>;

// The operation
/**
 * Start a virtual machine. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesStartInput,
    outputSchema: VirtualMachinesStartOutput,
  }),
);
// Input Schema
export interface VirtualMachinesStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const VirtualMachinesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/stop",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesStopInput>;

// Output Schema
export type VirtualMachinesStopOutput = void;
export const VirtualMachinesStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesStopOutput>;

// The operation
/**
 * Stop a virtual machine This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesStopInput,
  outputSchema: VirtualMachinesStopOutput,
}));
// Input Schema
export interface VirtualMachinesTransferDisksInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const VirtualMachinesTransferDisksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/transferDisks",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesTransferDisksInput>;

// Output Schema
export type VirtualMachinesTransferDisksOutput = void;
export const VirtualMachinesTransferDisksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesTransferDisksOutput>;

// The operation
/**
 * Transfers all data disks attached to the virtual machine to be owned by the current user. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesTransferDisks =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesTransferDisksInput,
    outputSchema: VirtualMachinesTransferDisksOutput,
  }));
// Input Schema
export interface VirtualMachinesUnClaimInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const VirtualMachinesUnClaimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}/unClaim",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesUnClaimInput>;

// Output Schema
export type VirtualMachinesUnClaimOutput = void;
export const VirtualMachinesUnClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesUnClaimOutput>;

// The operation
/**
 * Release ownership of an existing virtual machine This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesUnClaim = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesUnClaimInput,
    outputSchema: VirtualMachinesUnClaimOutput,
  }),
);
// Input Schema
export interface VirtualMachinesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  tags?: Record<string, string>;
}
export const VirtualMachinesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesUpdateInput>;

// Output Schema
export interface VirtualMachinesUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualMachinesUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachinesUpdateOutput>;

// The operation
/**
 * Allows modifying tags of virtual machines. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual machine.
 */
export const VirtualMachinesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachinesUpdateInput,
    outputSchema: VirtualMachinesUpdateOutput,
  }),
);
// Input Schema
export interface VirtualNetworksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  properties: {
    allowedSubnets?: {
      resourceId?: string;
      labSubnetName?: string;
      allowPublicIp?: "Default" | "Deny" | "Allow";
    }[];
    description?: string;
    externalProviderResourceId?: string;
    externalSubnets?: { id?: string; name?: string }[];
    subnetOverrides?: {
      resourceId?: string;
      labSubnetName?: string;
      useInVmCreationPermission?: "Default" | "Deny" | "Allow";
      usePublicIpAddressPermission?: "Default" | "Deny" | "Allow";
      sharedPublicIpAddressConfiguration?: {
        allowedPorts?: {
          transportProtocol?: "Tcp" | "Udp";
          backendPort?: number;
        }[];
      };
      virtualNetworkPoolName?: string;
    }[];
    createdDate?: string;
    provisioningState?: string;
    uniqueIdentifier?: string;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const VirtualNetworksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      allowedSubnets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resourceId: Schema.optional(Schema.String),
            labSubnetName: Schema.optional(Schema.String),
            allowPublicIp: Schema.optional(
              Schema.Literals(["Default", "Deny", "Allow"]),
            ),
          }),
        ),
      ),
      description: Schema.optional(Schema.String),
      externalProviderResourceId: Schema.optional(Schema.String),
      externalSubnets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
      ),
      subnetOverrides: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resourceId: Schema.optional(Schema.String),
            labSubnetName: Schema.optional(Schema.String),
            useInVmCreationPermission: Schema.optional(
              Schema.Literals(["Default", "Deny", "Allow"]),
            ),
            usePublicIpAddressPermission: Schema.optional(
              Schema.Literals(["Default", "Deny", "Allow"]),
            ),
            sharedPublicIpAddressConfiguration: Schema.optional(
              Schema.Struct({
                allowedPorts: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      transportProtocol: Schema.optional(
                        Schema.Literals(["Tcp", "Udp"]),
                      ),
                      backendPort: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
            virtualNetworkPoolName: Schema.optional(Schema.String),
          }),
        ),
      ),
      createdDate: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      uniqueIdentifier: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksCreateOrUpdateInput>;

// Output Schema
export interface VirtualNetworksCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualNetworksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace an existing virtual network. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual network.
 */
export const VirtualNetworksCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksCreateOrUpdateInput,
    outputSchema: VirtualNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualNetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
}
export const VirtualNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksDeleteInput>;

// Output Schema
export type VirtualNetworksDeleteOutput = void;
export const VirtualNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualNetworksDeleteOutput>;

// The operation
/**
 * Delete virtual network. This operation can take a while to complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual network.
 */
export const VirtualNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksDeleteInput,
    outputSchema: VirtualNetworksDeleteOutput,
  }),
);
// Input Schema
export interface VirtualNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  $expand?: string;
}
export const VirtualNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksGetInput>;

// Output Schema
export interface VirtualNetworksGetOutput {
  id?: string;
  name?: string;
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
export const VirtualNetworksGetOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksGetOutput>;

// The operation
/**
 * Get virtual network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual network.
 * @param $expand - Specify the $expand query. Example: 'properties($expand=externalSubnets)'
 */
export const VirtualNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksGetInput,
  outputSchema: VirtualNetworksGetOutput,
}));
// Input Schema
export interface VirtualNetworksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $expand?: string;
  $filter?: string;
  $top?: number;
  $orderby?: string;
}
export const VirtualNetworksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksListInput>;

// Output Schema
export interface VirtualNetworksListOutput {
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
export const VirtualNetworksListOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksListOutput>;

// The operation
/**
 * List virtual networks in a given lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param $expand - Specify the $expand query. Example: 'properties($expand=externalSubnets)'
 * @param $filter - The filter to apply to the operation. Example: '$filter=contains(name,'myName')
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'
 * @param $orderby - The ordering expression for the results, using OData notation. Example: '$orderby=name desc'
 */
export const VirtualNetworksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksListInput,
  outputSchema: VirtualNetworksListOutput,
}));
// Input Schema
export interface VirtualNetworksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  name: string;
  tags?: Record<string, string>;
}
export const VirtualNetworksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualnetworks/{name}",
      apiVersion: "2018-09-15",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksUpdateInput>;

// Output Schema
export interface VirtualNetworksUpdateOutput {
  id?: string;
  name?: string;
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
export const VirtualNetworksUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualNetworksUpdateOutput>;

// The operation
/**
 * Allows modifying tags of virtual networks. All other properties will be ignored.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab.
 * @param name - The name of the virtual network.
 */
export const VirtualNetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksUpdateInput,
    outputSchema: VirtualNetworksUpdateOutput,
  }),
);
