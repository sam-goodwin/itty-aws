/**
 * Azure Imagebuilder API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.VirtualMachineImages/operations",
    apiVersion: "2025-10-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    display?: {
      provider?: string;
      operation?: string;
      resource?: string;
      description?: string;
    };
    origin?: string;
    properties?: unknown;
    isDataAction?: boolean;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      display: Schema.optional(
        Schema.Struct({
          provider: Schema.optional(Schema.String),
          operation: Schema.optional(Schema.String),
          resource: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
        }),
      ),
      origin: Schema.optional(Schema.String),
      properties: Schema.optional(Schema.Unknown),
      isDataAction: Schema.optional(Schema.Boolean),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists available operations for the Microsoft.VirtualMachineImages provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface TriggersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
  triggerName: string;
  properties?: {
    kind: string;
    status?: { code?: string; message?: string; time?: string };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Canceled";
  };
}
export const TriggersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageTemplateName: Schema.String.pipe(T.PathParam()),
    triggerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        kind: Schema.String,
        status: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            time: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/triggers/{triggerName}",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<TriggersCreateOrUpdateInput>;

// Output Schema
export interface TriggersCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const TriggersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TriggersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a trigger for the specified virtual machine image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 * @param triggerName - The name of the trigger
 */
export const TriggersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TriggersCreateOrUpdateInput,
    outputSchema: TriggersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface TriggersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
  triggerName: string;
}
export const TriggersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  imageTemplateName: Schema.String.pipe(T.PathParam()),
  triggerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/triggers/{triggerName}",
    apiVersion: "2025-10-01",
  }),
) as unknown as Schema.Codec<TriggersDeleteInput>;

// Output Schema
export type TriggersDeleteOutput = void;
export const TriggersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TriggersDeleteOutput>;

// The operation
/**
 * Delete a trigger for the specified virtual machine image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 * @param triggerName - The name of the trigger
 */
export const TriggersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggersDeleteInput,
  outputSchema: TriggersDeleteOutput,
}));
// Input Schema
export interface TriggersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
  triggerName: string;
}
export const TriggersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  imageTemplateName: Schema.String.pipe(T.PathParam()),
  triggerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/triggers/{triggerName}",
    apiVersion: "2025-10-01",
  }),
) as unknown as Schema.Codec<TriggersGetInput>;

// Output Schema
export interface TriggersGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const TriggersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<TriggersGetOutput>;

// The operation
/**
 * Get the specified trigger for the specified image template resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 * @param triggerName - The name of the trigger
 */
export const TriggersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggersGetInput,
  outputSchema: TriggersGetOutput,
}));
// Input Schema
export interface TriggersListByImageTemplateInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
}
export const TriggersListByImageTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/triggers",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<TriggersListByImageTemplateInput>;

// Output Schema
export interface TriggersListByImageTemplateOutput {
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
export const TriggersListByImageTemplateOutput =
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
  }) as unknown as Schema.Codec<TriggersListByImageTemplateOutput>;

// The operation
/**
 * List all triggers for the specified Image Template resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 */
export const TriggersListByImageTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TriggersListByImageTemplateInput,
    outputSchema: TriggersListByImageTemplateOutput,
  }),
);
// Input Schema
export interface VirtualMachineImageTemplatesCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
}
export const VirtualMachineImageTemplatesCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/cancel",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineImageTemplatesCancelInput>;

// Output Schema
export type VirtualMachineImageTemplatesCancelOutput = void;
export const VirtualMachineImageTemplatesCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineImageTemplatesCancelOutput>;

// The operation
/**
 * Cancel the long running image build based on the image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 */
export const VirtualMachineImageTemplatesCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesCancelInput,
    outputSchema: VirtualMachineImageTemplatesCancelOutput,
  }));
// Input Schema
export interface VirtualMachineImageTemplatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
  properties?: {
    source: { type: string };
    customize?: { type: string; name?: string }[];
    optimize?: {
      vmBoot?: { state?: "Enabled" | "Disabled" };
      workload?: {
        state?: "Enabled" | "Disabled";
        scriptUri?: string;
        sha256Checksum?: string;
      };
    };
    validate?: {
      continueDistributeOnFailure?: boolean;
      sourceValidationOnly?: boolean;
      inVMValidations?: { type: string; name?: string }[];
    };
    distribute: {
      type: string;
      runOutputName: string;
      artifactTags?: Record<string, string>;
    }[];
    errorHandling?: {
      onCustomizerError?: "cleanup" | "abort";
      onValidationError?: "cleanup" | "abort";
    };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Canceled";
    provisioningError?: {
      provisioningErrorCode?:
        | "BadSourceType"
        | "BadPIRSource"
        | "BadManagedImageSource"
        | "BadSharedImageVersionSource"
        | "BadCustomizerType"
        | "UnsupportedCustomizerType"
        | "NoCustomizerScript"
        | "BadValidatorType"
        | "UnsupportedValidatorType"
        | "NoValidatorScript"
        | "BadDistributeType"
        | "BadSharedImageDistribute"
        | "BadStagingResourceGroup"
        | "ServerError"
        | "Other";
      message?: string;
    };
    lastRunStatus?: {
      startTime?: string;
      endTime?: string;
      runState?:
        | "Running"
        | "Canceling"
        | "Succeeded"
        | "PartiallySucceeded"
        | "Failed"
        | "Canceled";
      runSubState?:
        | "Queued"
        | "Building"
        | "Customizing"
        | "Optimizing"
        | "Validating"
        | "Distributing";
      message?: string;
    };
    buildTimeoutInMinutes?: number;
    vmProfile?: {
      vmSize?: string;
      osDiskSizeGB?: number;
      userAssignedIdentities?: string[];
      vnetConfig?: {
        subnetId?: string;
        containerInstanceSubnetId?: string;
        proxyVmSize?: string;
      };
    };
    additionalDataDisks?: { sizeGB?: number }[];
    stagingResourceGroup?: string;
    exactStagingResourceGroup?: string;
    autoRun?: { state?: "Enabled" | "Disabled" };
    managedResourceTags?: Record<string, string>;
  };
  identity: {
    type?: "UserAssigned" | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const VirtualMachineImageTemplatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageTemplateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        source: Schema.Struct({
          type: Schema.String,
        }),
        customize: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.String,
              name: Schema.optional(Schema.String),
            }),
          ),
        ),
        optimize: Schema.optional(
          Schema.Struct({
            vmBoot: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
              }),
            ),
            workload: Schema.optional(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                scriptUri: Schema.optional(Schema.String),
                sha256Checksum: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        validate: Schema.optional(
          Schema.Struct({
            continueDistributeOnFailure: Schema.optional(Schema.Boolean),
            sourceValidationOnly: Schema.optional(Schema.Boolean),
            inVMValidations: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  type: Schema.String,
                  name: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        distribute: Schema.Array(
          Schema.Struct({
            type: Schema.String,
            runOutputName: Schema.String,
            artifactTags: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        errorHandling: Schema.optional(
          Schema.Struct({
            onCustomizerError: Schema.optional(
              Schema.Literals(["cleanup", "abort"]),
            ),
            onValidationError: Schema.optional(
              Schema.Literals(["cleanup", "abort"]),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Succeeded",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        provisioningError: Schema.optional(
          Schema.Struct({
            provisioningErrorCode: Schema.optional(
              Schema.Literals([
                "BadSourceType",
                "BadPIRSource",
                "BadManagedImageSource",
                "BadSharedImageVersionSource",
                "BadCustomizerType",
                "UnsupportedCustomizerType",
                "NoCustomizerScript",
                "BadValidatorType",
                "UnsupportedValidatorType",
                "NoValidatorScript",
                "BadDistributeType",
                "BadSharedImageDistribute",
                "BadStagingResourceGroup",
                "ServerError",
                "Other",
              ]),
            ),
            message: Schema.optional(Schema.String),
          }),
        ),
        lastRunStatus: Schema.optional(
          Schema.Struct({
            startTime: Schema.optional(Schema.String),
            endTime: Schema.optional(Schema.String),
            runState: Schema.optional(
              Schema.Literals([
                "Running",
                "Canceling",
                "Succeeded",
                "PartiallySucceeded",
                "Failed",
                "Canceled",
              ]),
            ),
            runSubState: Schema.optional(
              Schema.Literals([
                "Queued",
                "Building",
                "Customizing",
                "Optimizing",
                "Validating",
                "Distributing",
              ]),
            ),
            message: Schema.optional(Schema.String),
          }),
        ),
        buildTimeoutInMinutes: Schema.optional(Schema.Number),
        vmProfile: Schema.optional(
          Schema.Struct({
            vmSize: Schema.optional(Schema.String),
            osDiskSizeGB: Schema.optional(Schema.Number),
            userAssignedIdentities: Schema.optional(
              Schema.Array(Schema.String),
            ),
            vnetConfig: Schema.optional(
              Schema.Struct({
                subnetId: Schema.optional(Schema.String),
                containerInstanceSubnetId: Schema.optional(Schema.String),
                proxyVmSize: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        additionalDataDisks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              sizeGB: Schema.optional(Schema.Number),
            }),
          ),
        ),
        stagingResourceGroup: Schema.optional(Schema.String),
        exactStagingResourceGroup: Schema.optional(Schema.String),
        autoRun: Schema.optional(
          Schema.Struct({
            state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          }),
        ),
        managedResourceTags: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    identity: Schema.Struct({
      type: Schema.optional(Schema.Literals(["UserAssigned", "None"])),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineImageTemplatesCreateOrUpdateInput>;

// Output Schema
export interface VirtualMachineImageTemplatesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const VirtualMachineImageTemplatesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineImageTemplatesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a virtual machine image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 */
export const VirtualMachineImageTemplatesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesCreateOrUpdateInput,
    outputSchema: VirtualMachineImageTemplatesCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualMachineImageTemplatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
}
export const VirtualMachineImageTemplatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineImageTemplatesDeleteInput>;

// Output Schema
export type VirtualMachineImageTemplatesDeleteOutput = void;
export const VirtualMachineImageTemplatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineImageTemplatesDeleteOutput>;

// The operation
/**
 * Delete a virtual machine image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 */
export const VirtualMachineImageTemplatesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesDeleteInput,
    outputSchema: VirtualMachineImageTemplatesDeleteOutput,
  }));
// Input Schema
export interface VirtualMachineImageTemplatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
}
export const VirtualMachineImageTemplatesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineImageTemplatesGetInput>;

// Output Schema
export interface VirtualMachineImageTemplatesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const VirtualMachineImageTemplatesGetOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineImageTemplatesGetOutput>;

// The operation
/**
 * Get information about a virtual machine image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 */
export const VirtualMachineImageTemplatesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesGetInput,
    outputSchema: VirtualMachineImageTemplatesGetOutput,
  }));
// Input Schema
export interface VirtualMachineImageTemplatesGetRunOutputInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
  runOutputName: string;
}
export const VirtualMachineImageTemplatesGetRunOutputInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageTemplateName: Schema.String.pipe(T.PathParam()),
    runOutputName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/runOutputs/{runOutputName}",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineImageTemplatesGetRunOutputInput>;

// Output Schema
export interface VirtualMachineImageTemplatesGetRunOutputOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const VirtualMachineImageTemplatesGetRunOutputOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineImageTemplatesGetRunOutputOutput>;

// The operation
/**
 * Get the specified run output for the specified image template resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 * @param runOutputName - The name of the run output
 */
export const VirtualMachineImageTemplatesGetRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesGetRunOutputInput,
    outputSchema: VirtualMachineImageTemplatesGetRunOutputOutput,
  }));
// Input Schema
export interface VirtualMachineImageTemplatesListInput {
  subscriptionId: string;
}
export const VirtualMachineImageTemplatesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VirtualMachineImages/imageTemplates",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineImageTemplatesListInput>;

// Output Schema
export interface VirtualMachineImageTemplatesListOutput {
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
export const VirtualMachineImageTemplatesListOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineImageTemplatesListOutput>;

// The operation
/**
 * Gets information about the VM image templates associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const VirtualMachineImageTemplatesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesListInput,
    outputSchema: VirtualMachineImageTemplatesListOutput,
  }));
// Input Schema
export interface VirtualMachineImageTemplatesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const VirtualMachineImageTemplatesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineImageTemplatesListByResourceGroupInput>;

// Output Schema
export interface VirtualMachineImageTemplatesListByResourceGroupOutput {
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
export const VirtualMachineImageTemplatesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineImageTemplatesListByResourceGroupOutput>;

// The operation
/**
 * Gets information about the VM image templates associated with the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualMachineImageTemplatesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesListByResourceGroupInput,
    outputSchema: VirtualMachineImageTemplatesListByResourceGroupOutput,
  }));
// Input Schema
export interface VirtualMachineImageTemplatesListRunOutputsInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
}
export const VirtualMachineImageTemplatesListRunOutputsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/runOutputs",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineImageTemplatesListRunOutputsInput>;

// Output Schema
export interface VirtualMachineImageTemplatesListRunOutputsOutput {
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
export const VirtualMachineImageTemplatesListRunOutputsOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineImageTemplatesListRunOutputsOutput>;

// The operation
/**
 * List all run outputs for the specified Image Template resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 */
export const VirtualMachineImageTemplatesListRunOutputs =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesListRunOutputsInput,
    outputSchema: VirtualMachineImageTemplatesListRunOutputsOutput,
  }));
// Input Schema
export interface VirtualMachineImageTemplatesRunInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
}
export const VirtualMachineImageTemplatesRunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/run",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineImageTemplatesRunInput>;

// Output Schema
export type VirtualMachineImageTemplatesRunOutput = void;
export const VirtualMachineImageTemplatesRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineImageTemplatesRunOutput>;

// The operation
/**
 * Create artifacts from a existing image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 */
export const VirtualMachineImageTemplatesRun =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesRunInput,
    outputSchema: VirtualMachineImageTemplatesRunOutput,
  }));
// Input Schema
export interface VirtualMachineImageTemplatesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  imageTemplateName: string;
  identity?: {
    type?: "UserAssigned" | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  properties?: {
    distribute?: {
      type: string;
      runOutputName: string;
      artifactTags?: Record<string, string>;
    }[];
    vmProfile?: {
      vmSize?: string;
      osDiskSizeGB?: number;
      userAssignedIdentities?: string[];
      vnetConfig?: {
        subnetId?: string;
        containerInstanceSubnetId?: string;
        proxyVmSize?: string;
      };
    };
  };
}
export const VirtualMachineImageTemplatesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    imageTemplateName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["UserAssigned", "None"])),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        distribute: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.String,
              runOutputName: Schema.String,
              artifactTags: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
            }),
          ),
        ),
        vmProfile: Schema.optional(
          Schema.Struct({
            vmSize: Schema.optional(Schema.String),
            osDiskSizeGB: Schema.optional(Schema.Number),
            userAssignedIdentities: Schema.optional(
              Schema.Array(Schema.String),
            ),
            vnetConfig: Schema.optional(
              Schema.Struct({
                subnetId: Schema.optional(Schema.String),
                containerInstanceSubnetId: Schema.optional(Schema.String),
                proxyVmSize: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}",
      apiVersion: "2025-10-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineImageTemplatesUpdateInput>;

// Output Schema
export interface VirtualMachineImageTemplatesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const VirtualMachineImageTemplatesUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineImageTemplatesUpdateOutput>;

// The operation
/**
 * Update the tags for this Virtual Machine Image Template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param imageTemplateName - The name of the image Template
 */
export const VirtualMachineImageTemplatesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesUpdateInput,
    outputSchema: VirtualMachineImageTemplatesUpdateOutput,
  }));
