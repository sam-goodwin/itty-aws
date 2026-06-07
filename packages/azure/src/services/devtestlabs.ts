/**
 * Azure Devtestlabs API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
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
);
export type ArmTemplatesGetInput = typeof ArmTemplatesGetInput.Type;

// Output Schema
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
});
export type ArmTemplatesGetOutput = typeof ArmTemplatesGetOutput.Type;

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
);
export type ArmTemplatesListInput = typeof ArmTemplatesListInput.Type;

// Output Schema
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
);
export type ArmTemplatesListOutput = typeof ArmTemplatesListOutput.Type;

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
  );
export type ArtifactsGenerateArmTemplateInput =
  typeof ArtifactsGenerateArmTemplateInput.Type;

// Output Schema
export const ArtifactsGenerateArmTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    template: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  });
export type ArtifactsGenerateArmTemplateOutput =
  typeof ArtifactsGenerateArmTemplateOutput.Type;

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
);
export type ArtifactsGetInput = typeof ArtifactsGetInput.Type;

// Output Schema
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
});
export type ArtifactsGetOutput = typeof ArtifactsGetOutput.Type;

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
);
export type ArtifactsListInput = typeof ArtifactsListInput.Type;

// Output Schema
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
});
export type ArtifactsListOutput = typeof ArtifactsListOutput.Type;

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
  );
export type ArtifactSourcesCreateOrUpdateInput =
  typeof ArtifactSourcesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type ArtifactSourcesCreateOrUpdateOutput =
  typeof ArtifactSourcesCreateOrUpdateOutput.Type;

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
  );
export type ArtifactSourcesDeleteInput = typeof ArtifactSourcesDeleteInput.Type;

// Output Schema
export const ArtifactSourcesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ArtifactSourcesDeleteOutput =
  typeof ArtifactSourcesDeleteOutput.Type;

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
  );
export type ArtifactSourcesGetInput = typeof ArtifactSourcesGetInput.Type;

// Output Schema
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
  });
export type ArtifactSourcesGetOutput = typeof ArtifactSourcesGetOutput.Type;

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
  );
export type ArtifactSourcesListInput = typeof ArtifactSourcesListInput.Type;

// Output Schema
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
  });
export type ArtifactSourcesListOutput = typeof ArtifactSourcesListOutput.Type;

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
  );
export type ArtifactSourcesUpdateInput = typeof ArtifactSourcesUpdateInput.Type;

// Output Schema
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
  });
export type ArtifactSourcesUpdateOutput =
  typeof ArtifactSourcesUpdateOutput.Type;

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
  );
export type CostsCreateOrUpdateInput = typeof CostsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type CostsCreateOrUpdateOutput = typeof CostsCreateOrUpdateOutput.Type;

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
);
export type CostsGetInput = typeof CostsGetInput.Type;

// Output Schema
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
});
export type CostsGetOutput = typeof CostsGetOutput.Type;

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
  );
export type CustomImagesCreateOrUpdateInput =
  typeof CustomImagesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type CustomImagesCreateOrUpdateOutput =
  typeof CustomImagesCreateOrUpdateOutput.Type;

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
  );
export type CustomImagesDeleteInput = typeof CustomImagesDeleteInput.Type;

// Output Schema
export const CustomImagesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomImagesDeleteOutput = typeof CustomImagesDeleteOutput.Type;

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
);
export type CustomImagesGetInput = typeof CustomImagesGetInput.Type;

// Output Schema
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
});
export type CustomImagesGetOutput = typeof CustomImagesGetOutput.Type;

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
);
export type CustomImagesListInput = typeof CustomImagesListInput.Type;

// Output Schema
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
);
export type CustomImagesListOutput = typeof CustomImagesListOutput.Type;

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
  );
export type CustomImagesUpdateInput = typeof CustomImagesUpdateInput.Type;

// Output Schema
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
  });
export type CustomImagesUpdateOutput = typeof CustomImagesUpdateOutput.Type;

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
);
export type DisksAttachInput = typeof DisksAttachInput.Type;

// Output Schema
export const DisksAttachOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DisksAttachOutput = typeof DisksAttachOutput.Type;

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
  );
export type DisksCreateOrUpdateInput = typeof DisksCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type DisksCreateOrUpdateOutput = typeof DisksCreateOrUpdateOutput.Type;

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
);
export type DisksDeleteInput = typeof DisksDeleteInput.Type;

// Output Schema
export const DisksDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DisksDeleteOutput = typeof DisksDeleteOutput.Type;

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
);
export type DisksDetachInput = typeof DisksDetachInput.Type;

// Output Schema
export const DisksDetachOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DisksDetachOutput = typeof DisksDetachOutput.Type;

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
);
export type DisksGetInput = typeof DisksGetInput.Type;

// Output Schema
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
});
export type DisksGetOutput = typeof DisksGetOutput.Type;

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
);
export type DisksListInput = typeof DisksListInput.Type;

// Output Schema
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
});
export type DisksListOutput = typeof DisksListOutput.Type;

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
);
export type DisksUpdateInput = typeof DisksUpdateInput.Type;

// Output Schema
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
});
export type DisksUpdateOutput = typeof DisksUpdateOutput.Type;

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
  );
export type EnvironmentsCreateOrUpdateInput =
  typeof EnvironmentsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type EnvironmentsCreateOrUpdateOutput =
  typeof EnvironmentsCreateOrUpdateOutput.Type;

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
  );
export type EnvironmentsDeleteInput = typeof EnvironmentsDeleteInput.Type;

// Output Schema
export const EnvironmentsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EnvironmentsDeleteOutput = typeof EnvironmentsDeleteOutput.Type;

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
);
export type EnvironmentsGetInput = typeof EnvironmentsGetInput.Type;

// Output Schema
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
});
export type EnvironmentsGetOutput = typeof EnvironmentsGetOutput.Type;

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
);
export type EnvironmentsListInput = typeof EnvironmentsListInput.Type;

// Output Schema
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
);
export type EnvironmentsListOutput = typeof EnvironmentsListOutput.Type;

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
  );
export type EnvironmentsUpdateInput = typeof EnvironmentsUpdateInput.Type;

// Output Schema
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
  });
export type EnvironmentsUpdateOutput = typeof EnvironmentsUpdateOutput.Type;

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
  );
export type FormulasCreateOrUpdateInput =
  typeof FormulasCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type FormulasCreateOrUpdateOutput =
  typeof FormulasCreateOrUpdateOutput.Type;

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
);
export type FormulasDeleteInput = typeof FormulasDeleteInput.Type;

// Output Schema
export const FormulasDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FormulasDeleteOutput = typeof FormulasDeleteOutput.Type;

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
);
export type FormulasGetInput = typeof FormulasGetInput.Type;

// Output Schema
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
});
export type FormulasGetOutput = typeof FormulasGetOutput.Type;

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
);
export type FormulasListInput = typeof FormulasListInput.Type;

// Output Schema
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
});
export type FormulasListOutput = typeof FormulasListOutput.Type;

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
);
export type FormulasUpdateInput = typeof FormulasUpdateInput.Type;

// Output Schema
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
});
export type FormulasUpdateOutput = typeof FormulasUpdateOutput.Type;

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
);
export type GalleryImagesListInput = typeof GalleryImagesListInput.Type;

// Output Schema
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
  });
export type GalleryImagesListOutput = typeof GalleryImagesListOutput.Type;

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
  );
export type GlobalSchedulesCreateOrUpdateInput =
  typeof GlobalSchedulesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type GlobalSchedulesCreateOrUpdateOutput =
  typeof GlobalSchedulesCreateOrUpdateOutput.Type;

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
  );
export type GlobalSchedulesDeleteInput = typeof GlobalSchedulesDeleteInput.Type;

// Output Schema
export const GlobalSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GlobalSchedulesDeleteOutput =
  typeof GlobalSchedulesDeleteOutput.Type;

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
  );
export type GlobalSchedulesExecuteInput =
  typeof GlobalSchedulesExecuteInput.Type;

// Output Schema
export const GlobalSchedulesExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GlobalSchedulesExecuteOutput =
  typeof GlobalSchedulesExecuteOutput.Type;

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
  );
export type GlobalSchedulesGetInput = typeof GlobalSchedulesGetInput.Type;

// Output Schema
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
  });
export type GlobalSchedulesGetOutput = typeof GlobalSchedulesGetOutput.Type;

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
  );
export type GlobalSchedulesListByResourceGroupInput =
  typeof GlobalSchedulesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type GlobalSchedulesListByResourceGroupOutput =
  typeof GlobalSchedulesListByResourceGroupOutput.Type;

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
  );
export type GlobalSchedulesListBySubscriptionInput =
  typeof GlobalSchedulesListBySubscriptionInput.Type;

// Output Schema
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
  });
export type GlobalSchedulesListBySubscriptionOutput =
  typeof GlobalSchedulesListBySubscriptionOutput.Type;

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
  );
export type GlobalSchedulesRetargetInput =
  typeof GlobalSchedulesRetargetInput.Type;

// Output Schema
export const GlobalSchedulesRetargetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GlobalSchedulesRetargetOutput =
  typeof GlobalSchedulesRetargetOutput.Type;

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
  );
export type GlobalSchedulesUpdateInput = typeof GlobalSchedulesUpdateInput.Type;

// Output Schema
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
  });
export type GlobalSchedulesUpdateOutput =
  typeof GlobalSchedulesUpdateOutput.Type;

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
);
export type LabsClaimAnyVmInput = typeof LabsClaimAnyVmInput.Type;

// Output Schema
export const LabsClaimAnyVmOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LabsClaimAnyVmOutput = typeof LabsClaimAnyVmOutput.Type;

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
  );
export type LabsCreateEnvironmentInput = typeof LabsCreateEnvironmentInput.Type;

// Output Schema
export const LabsCreateEnvironmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LabsCreateEnvironmentOutput =
  typeof LabsCreateEnvironmentOutput.Type;

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
  );
export type LabsCreateOrUpdateInput = typeof LabsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type LabsCreateOrUpdateOutput = typeof LabsCreateOrUpdateOutput.Type;

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
);
export type LabsDeleteInput = typeof LabsDeleteInput.Type;

// Output Schema
export const LabsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LabsDeleteOutput = typeof LabsDeleteOutput.Type;

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
  );
export type LabsExportResourceUsageInput =
  typeof LabsExportResourceUsageInput.Type;

// Output Schema
export const LabsExportResourceUsageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LabsExportResourceUsageOutput =
  typeof LabsExportResourceUsageOutput.Type;

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
  );
export type LabsGenerateUploadUriInput = typeof LabsGenerateUploadUriInput.Type;

// Output Schema
export const LabsGenerateUploadUriOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uploadUri: Schema.optional(Schema.String),
  });
export type LabsGenerateUploadUriOutput =
  typeof LabsGenerateUploadUriOutput.Type;

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
);
export type LabsGetInput = typeof LabsGetInput.Type;

// Output Schema
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
});
export type LabsGetOutput = typeof LabsGetOutput.Type;

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
  );
export type LabsImportVirtualMachineInput =
  typeof LabsImportVirtualMachineInput.Type;

// Output Schema
export const LabsImportVirtualMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LabsImportVirtualMachineOutput =
  typeof LabsImportVirtualMachineOutput.Type;

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
  );
export type LabsListByResourceGroupInput =
  typeof LabsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type LabsListByResourceGroupOutput =
  typeof LabsListByResourceGroupOutput.Type;

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
  );
export type LabsListBySubscriptionInput =
  typeof LabsListBySubscriptionInput.Type;

// Output Schema
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
  });
export type LabsListBySubscriptionOutput =
  typeof LabsListBySubscriptionOutput.Type;

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
);
export type LabsListVhdsInput = typeof LabsListVhdsInput.Type;

// Output Schema
export const LabsListVhdsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type LabsListVhdsOutput = typeof LabsListVhdsOutput.Type;

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
);
export type LabsUpdateInput = typeof LabsUpdateInput.Type;

// Output Schema
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
});
export type LabsUpdateOutput = typeof LabsUpdateOutput.Type;

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
  );
export type NotificationChannelsCreateOrUpdateInput =
  typeof NotificationChannelsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type NotificationChannelsCreateOrUpdateOutput =
  typeof NotificationChannelsCreateOrUpdateOutput.Type;

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
  );
export type NotificationChannelsDeleteInput =
  typeof NotificationChannelsDeleteInput.Type;

// Output Schema
export const NotificationChannelsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NotificationChannelsDeleteOutput =
  typeof NotificationChannelsDeleteOutput.Type;

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
  );
export type NotificationChannelsGetInput =
  typeof NotificationChannelsGetInput.Type;

// Output Schema
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
  });
export type NotificationChannelsGetOutput =
  typeof NotificationChannelsGetOutput.Type;

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
  );
export type NotificationChannelsListInput =
  typeof NotificationChannelsListInput.Type;

// Output Schema
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
  });
export type NotificationChannelsListOutput =
  typeof NotificationChannelsListOutput.Type;

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
  );
export type NotificationChannelsNotifyInput =
  typeof NotificationChannelsNotifyInput.Type;

// Output Schema
export const NotificationChannelsNotifyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NotificationChannelsNotifyOutput =
  typeof NotificationChannelsNotifyOutput.Type;

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
  );
export type NotificationChannelsUpdateInput =
  typeof NotificationChannelsUpdateInput.Type;

// Output Schema
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
  });
export type NotificationChannelsUpdateOutput =
  typeof NotificationChannelsUpdateOutput.Type;

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
);
export type OperationsGetInput = typeof OperationsGetInput.Type;

// Output Schema
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
});
export type OperationsGetOutput = typeof OperationsGetOutput.Type;

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
  );
export type PoliciesCreateOrUpdateInput =
  typeof PoliciesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type PoliciesCreateOrUpdateOutput =
  typeof PoliciesCreateOrUpdateOutput.Type;

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
);
export type PoliciesDeleteInput = typeof PoliciesDeleteInput.Type;

// Output Schema
export const PoliciesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PoliciesDeleteOutput = typeof PoliciesDeleteOutput.Type;

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
);
export type PoliciesGetInput = typeof PoliciesGetInput.Type;

// Output Schema
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
});
export type PoliciesGetOutput = typeof PoliciesGetOutput.Type;

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
);
export type PoliciesListInput = typeof PoliciesListInput.Type;

// Output Schema
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
});
export type PoliciesListOutput = typeof PoliciesListOutput.Type;

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
);
export type PoliciesUpdateInput = typeof PoliciesUpdateInput.Type;

// Output Schema
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
});
export type PoliciesUpdateOutput = typeof PoliciesUpdateOutput.Type;

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
  );
export type PolicySetsEvaluatePoliciesInput =
  typeof PolicySetsEvaluatePoliciesInput.Type;

// Output Schema
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
  });
export type PolicySetsEvaluatePoliciesOutput =
  typeof PolicySetsEvaluatePoliciesOutput.Type;

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
export const ProviderOperationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.DevTestLab/operations",
      apiVersion: "2018-09-15",
    }),
  );
export type ProviderOperationsListInput =
  typeof ProviderOperationsListInput.Type;

// Output Schema
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
  });
export type ProviderOperationsListOutput =
  typeof ProviderOperationsListOutput.Type;

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
  );
export type SchedulesCreateOrUpdateInput =
  typeof SchedulesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type SchedulesCreateOrUpdateOutput =
  typeof SchedulesCreateOrUpdateOutput.Type;

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
);
export type SchedulesDeleteInput = typeof SchedulesDeleteInput.Type;

// Output Schema
export const SchedulesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SchedulesDeleteOutput = typeof SchedulesDeleteOutput.Type;

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
);
export type SchedulesExecuteInput = typeof SchedulesExecuteInput.Type;

// Output Schema
export const SchedulesExecuteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SchedulesExecuteOutput = typeof SchedulesExecuteOutput.Type;

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
);
export type SchedulesGetInput = typeof SchedulesGetInput.Type;

// Output Schema
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
});
export type SchedulesGetOutput = typeof SchedulesGetOutput.Type;

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
);
export type SchedulesListInput = typeof SchedulesListInput.Type;

// Output Schema
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
});
export type SchedulesListOutput = typeof SchedulesListOutput.Type;

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
  );
export type SchedulesListApplicableInput =
  typeof SchedulesListApplicableInput.Type;

// Output Schema
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
  });
export type SchedulesListApplicableOutput =
  typeof SchedulesListApplicableOutput.Type;

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
);
export type SchedulesUpdateInput = typeof SchedulesUpdateInput.Type;

// Output Schema
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
});
export type SchedulesUpdateOutput = typeof SchedulesUpdateOutput.Type;

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
  );
export type SecretsCreateOrUpdateInput = typeof SecretsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type SecretsCreateOrUpdateOutput =
  typeof SecretsCreateOrUpdateOutput.Type;

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
);
export type SecretsDeleteInput = typeof SecretsDeleteInput.Type;

// Output Schema
export const SecretsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SecretsDeleteOutput = typeof SecretsDeleteOutput.Type;

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
);
export type SecretsGetInput = typeof SecretsGetInput.Type;

// Output Schema
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
});
export type SecretsGetOutput = typeof SecretsGetOutput.Type;

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
);
export type SecretsListInput = typeof SecretsListInput.Type;

// Output Schema
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
});
export type SecretsListOutput = typeof SecretsListOutput.Type;

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
);
export type SecretsUpdateInput = typeof SecretsUpdateInput.Type;

// Output Schema
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
});
export type SecretsUpdateOutput = typeof SecretsUpdateOutput.Type;

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
  );
export type ServiceFabricSchedulesCreateOrUpdateInput =
  typeof ServiceFabricSchedulesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type ServiceFabricSchedulesCreateOrUpdateOutput =
  typeof ServiceFabricSchedulesCreateOrUpdateOutput.Type;

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
  );
export type ServiceFabricSchedulesDeleteInput =
  typeof ServiceFabricSchedulesDeleteInput.Type;

// Output Schema
export const ServiceFabricSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServiceFabricSchedulesDeleteOutput =
  typeof ServiceFabricSchedulesDeleteOutput.Type;

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
  );
export type ServiceFabricSchedulesExecuteInput =
  typeof ServiceFabricSchedulesExecuteInput.Type;

// Output Schema
export const ServiceFabricSchedulesExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServiceFabricSchedulesExecuteOutput =
  typeof ServiceFabricSchedulesExecuteOutput.Type;

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
  );
export type ServiceFabricSchedulesGetInput =
  typeof ServiceFabricSchedulesGetInput.Type;

// Output Schema
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
  });
export type ServiceFabricSchedulesGetOutput =
  typeof ServiceFabricSchedulesGetOutput.Type;

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
  );
export type ServiceFabricSchedulesListInput =
  typeof ServiceFabricSchedulesListInput.Type;

// Output Schema
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
  });
export type ServiceFabricSchedulesListOutput =
  typeof ServiceFabricSchedulesListOutput.Type;

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
  );
export type ServiceFabricSchedulesUpdateInput =
  typeof ServiceFabricSchedulesUpdateInput.Type;

// Output Schema
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
  });
export type ServiceFabricSchedulesUpdateOutput =
  typeof ServiceFabricSchedulesUpdateOutput.Type;

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
  );
export type ServiceFabricsCreateOrUpdateInput =
  typeof ServiceFabricsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type ServiceFabricsCreateOrUpdateOutput =
  typeof ServiceFabricsCreateOrUpdateOutput.Type;

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
  );
export type ServiceFabricsDeleteInput = typeof ServiceFabricsDeleteInput.Type;

// Output Schema
export const ServiceFabricsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServiceFabricsDeleteOutput = typeof ServiceFabricsDeleteOutput.Type;

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
);
export type ServiceFabricsGetInput = typeof ServiceFabricsGetInput.Type;

// Output Schema
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
  });
export type ServiceFabricsGetOutput = typeof ServiceFabricsGetOutput.Type;

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
  );
export type ServiceFabricsListInput = typeof ServiceFabricsListInput.Type;

// Output Schema
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
  });
export type ServiceFabricsListOutput = typeof ServiceFabricsListOutput.Type;

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
  );
export type ServiceFabricsListApplicableSchedulesInput =
  typeof ServiceFabricsListApplicableSchedulesInput.Type;

// Output Schema
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
  });
export type ServiceFabricsListApplicableSchedulesOutput =
  typeof ServiceFabricsListApplicableSchedulesOutput.Type;

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
  );
export type ServiceFabricsStartInput = typeof ServiceFabricsStartInput.Type;

// Output Schema
export const ServiceFabricsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServiceFabricsStartOutput = typeof ServiceFabricsStartOutput.Type;

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
  );
export type ServiceFabricsStopInput = typeof ServiceFabricsStopInput.Type;

// Output Schema
export const ServiceFabricsStopOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServiceFabricsStopOutput = typeof ServiceFabricsStopOutput.Type;

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
  );
export type ServiceFabricsUpdateInput = typeof ServiceFabricsUpdateInput.Type;

// Output Schema
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
  });
export type ServiceFabricsUpdateOutput = typeof ServiceFabricsUpdateOutput.Type;

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
  );
export type ServiceRunnersCreateOrUpdateInput =
  typeof ServiceRunnersCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type ServiceRunnersCreateOrUpdateOutput =
  typeof ServiceRunnersCreateOrUpdateOutput.Type;

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
  );
export type ServiceRunnersDeleteInput = typeof ServiceRunnersDeleteInput.Type;

// Output Schema
export const ServiceRunnersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServiceRunnersDeleteOutput = typeof ServiceRunnersDeleteOutput.Type;

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
);
export type ServiceRunnersGetInput = typeof ServiceRunnersGetInput.Type;

// Output Schema
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
  });
export type ServiceRunnersGetOutput = typeof ServiceRunnersGetOutput.Type;

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
  );
export type UsersCreateOrUpdateInput = typeof UsersCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type UsersCreateOrUpdateOutput = typeof UsersCreateOrUpdateOutput.Type;

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
);
export type UsersDeleteInput = typeof UsersDeleteInput.Type;

// Output Schema
export const UsersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersDeleteOutput = typeof UsersDeleteOutput.Type;

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
);
export type UsersGetInput = typeof UsersGetInput.Type;

// Output Schema
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
});
export type UsersGetOutput = typeof UsersGetOutput.Type;

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
);
export type UsersListInput = typeof UsersListInput.Type;

// Output Schema
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
});
export type UsersListOutput = typeof UsersListOutput.Type;

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
);
export type UsersUpdateInput = typeof UsersUpdateInput.Type;

// Output Schema
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
});
export type UsersUpdateOutput = typeof UsersUpdateOutput.Type;

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
  );
export type VirtualMachinesAddDataDiskInput =
  typeof VirtualMachinesAddDataDiskInput.Type;

// Output Schema
export const VirtualMachinesAddDataDiskOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesAddDataDiskOutput =
  typeof VirtualMachinesAddDataDiskOutput.Type;

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
  );
export type VirtualMachinesApplyArtifactsInput =
  typeof VirtualMachinesApplyArtifactsInput.Type;

// Output Schema
export const VirtualMachinesApplyArtifactsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesApplyArtifactsOutput =
  typeof VirtualMachinesApplyArtifactsOutput.Type;

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
  );
export type VirtualMachineSchedulesCreateOrUpdateInput =
  typeof VirtualMachineSchedulesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type VirtualMachineSchedulesCreateOrUpdateOutput =
  typeof VirtualMachineSchedulesCreateOrUpdateOutput.Type;

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
  );
export type VirtualMachineSchedulesDeleteInput =
  typeof VirtualMachineSchedulesDeleteInput.Type;

// Output Schema
export const VirtualMachineSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineSchedulesDeleteOutput =
  typeof VirtualMachineSchedulesDeleteOutput.Type;

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
  );
export type VirtualMachineSchedulesExecuteInput =
  typeof VirtualMachineSchedulesExecuteInput.Type;

// Output Schema
export const VirtualMachineSchedulesExecuteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineSchedulesExecuteOutput =
  typeof VirtualMachineSchedulesExecuteOutput.Type;

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
  );
export type VirtualMachineSchedulesGetInput =
  typeof VirtualMachineSchedulesGetInput.Type;

// Output Schema
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
  });
export type VirtualMachineSchedulesGetOutput =
  typeof VirtualMachineSchedulesGetOutput.Type;

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
  );
export type VirtualMachineSchedulesListInput =
  typeof VirtualMachineSchedulesListInput.Type;

// Output Schema
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
  });
export type VirtualMachineSchedulesListOutput =
  typeof VirtualMachineSchedulesListOutput.Type;

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
  );
export type VirtualMachineSchedulesUpdateInput =
  typeof VirtualMachineSchedulesUpdateInput.Type;

// Output Schema
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
  });
export type VirtualMachineSchedulesUpdateOutput =
  typeof VirtualMachineSchedulesUpdateOutput.Type;

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
  );
export type VirtualMachinesClaimInput = typeof VirtualMachinesClaimInput.Type;

// Output Schema
export const VirtualMachinesClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesClaimOutput = typeof VirtualMachinesClaimOutput.Type;

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
  );
export type VirtualMachinesCreateOrUpdateInput =
  typeof VirtualMachinesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type VirtualMachinesCreateOrUpdateOutput =
  typeof VirtualMachinesCreateOrUpdateOutput.Type;

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
  );
export type VirtualMachinesDeleteInput = typeof VirtualMachinesDeleteInput.Type;

// Output Schema
export const VirtualMachinesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesDeleteOutput =
  typeof VirtualMachinesDeleteOutput.Type;

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
  );
export type VirtualMachinesDetachDataDiskInput =
  typeof VirtualMachinesDetachDataDiskInput.Type;

// Output Schema
export const VirtualMachinesDetachDataDiskOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesDetachDataDiskOutput =
  typeof VirtualMachinesDetachDataDiskOutput.Type;

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
  );
export type VirtualMachinesGetInput = typeof VirtualMachinesGetInput.Type;

// Output Schema
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
  });
export type VirtualMachinesGetOutput = typeof VirtualMachinesGetOutput.Type;

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
  );
export type VirtualMachinesGetRdpFileContentsInput =
  typeof VirtualMachinesGetRdpFileContentsInput.Type;

// Output Schema
export const VirtualMachinesGetRdpFileContentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contents: Schema.optional(Schema.String),
  });
export type VirtualMachinesGetRdpFileContentsOutput =
  typeof VirtualMachinesGetRdpFileContentsOutput.Type;

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
  );
export type VirtualMachinesListInput = typeof VirtualMachinesListInput.Type;

// Output Schema
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
  });
export type VirtualMachinesListOutput = typeof VirtualMachinesListOutput.Type;

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
  );
export type VirtualMachinesListApplicableSchedulesInput =
  typeof VirtualMachinesListApplicableSchedulesInput.Type;

// Output Schema
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
  });
export type VirtualMachinesListApplicableSchedulesOutput =
  typeof VirtualMachinesListApplicableSchedulesOutput.Type;

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
  );
export type VirtualMachinesRedeployInput =
  typeof VirtualMachinesRedeployInput.Type;

// Output Schema
export const VirtualMachinesRedeployOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesRedeployOutput =
  typeof VirtualMachinesRedeployOutput.Type;

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
  );
export type VirtualMachinesResizeInput = typeof VirtualMachinesResizeInput.Type;

// Output Schema
export const VirtualMachinesResizeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesResizeOutput =
  typeof VirtualMachinesResizeOutput.Type;

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
  );
export type VirtualMachinesRestartInput =
  typeof VirtualMachinesRestartInput.Type;

// Output Schema
export const VirtualMachinesRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesRestartOutput =
  typeof VirtualMachinesRestartOutput.Type;

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
  );
export type VirtualMachinesStartInput = typeof VirtualMachinesStartInput.Type;

// Output Schema
export const VirtualMachinesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesStartOutput = typeof VirtualMachinesStartOutput.Type;

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
  );
export type VirtualMachinesStopInput = typeof VirtualMachinesStopInput.Type;

// Output Schema
export const VirtualMachinesStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesStopOutput = typeof VirtualMachinesStopOutput.Type;

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
  );
export type VirtualMachinesTransferDisksInput =
  typeof VirtualMachinesTransferDisksInput.Type;

// Output Schema
export const VirtualMachinesTransferDisksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesTransferDisksOutput =
  typeof VirtualMachinesTransferDisksOutput.Type;

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
  );
export type VirtualMachinesUnClaimInput =
  typeof VirtualMachinesUnClaimInput.Type;

// Output Schema
export const VirtualMachinesUnClaimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachinesUnClaimOutput =
  typeof VirtualMachinesUnClaimOutput.Type;

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
  );
export type VirtualMachinesUpdateInput = typeof VirtualMachinesUpdateInput.Type;

// Output Schema
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
  });
export type VirtualMachinesUpdateOutput =
  typeof VirtualMachinesUpdateOutput.Type;

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
  );
export type VirtualNetworksCreateOrUpdateInput =
  typeof VirtualNetworksCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type VirtualNetworksCreateOrUpdateOutput =
  typeof VirtualNetworksCreateOrUpdateOutput.Type;

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
  );
export type VirtualNetworksDeleteInput = typeof VirtualNetworksDeleteInput.Type;

// Output Schema
export const VirtualNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualNetworksDeleteOutput =
  typeof VirtualNetworksDeleteOutput.Type;

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
  );
export type VirtualNetworksGetInput = typeof VirtualNetworksGetInput.Type;

// Output Schema
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
  });
export type VirtualNetworksGetOutput = typeof VirtualNetworksGetOutput.Type;

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
  );
export type VirtualNetworksListInput = typeof VirtualNetworksListInput.Type;

// Output Schema
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
  });
export type VirtualNetworksListOutput = typeof VirtualNetworksListOutput.Type;

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
  );
export type VirtualNetworksUpdateInput = typeof VirtualNetworksUpdateInput.Type;

// Output Schema
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
  });
export type VirtualNetworksUpdateOutput =
  typeof VirtualNetworksUpdateOutput.Type;

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
