/**
 * Azure Imagebuilder API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.VirtualMachineImages/operations",
    apiVersion: "2025-10-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
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
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

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
export const TriggersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type TriggersCreateOrUpdateInput =
  typeof TriggersCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type TriggersCreateOrUpdateOutput =
  typeof TriggersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a trigger for the specified virtual machine image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const TriggersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TriggersCreateOrUpdateInput,
    outputSchema: TriggersCreateOrUpdateOutput,
  }),
);
// Input Schema
export const TriggersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/triggers/{triggerName}",
    apiVersion: "2025-10-01",
  }),
);
export type TriggersDeleteInput = typeof TriggersDeleteInput.Type;

// Output Schema
export const TriggersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TriggersDeleteOutput = typeof TriggersDeleteOutput.Type;

// The operation
/**
 * Delete a trigger for the specified virtual machine image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const TriggersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggersDeleteInput,
  outputSchema: TriggersDeleteOutput,
}));
// Input Schema
export const TriggersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/triggers/{triggerName}",
    apiVersion: "2025-10-01",
  }),
);
export type TriggersGetInput = typeof TriggersGetInput.Type;

// Output Schema
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
});
export type TriggersGetOutput = typeof TriggersGetOutput.Type;

// The operation
/**
 * Get the specified trigger for the specified image template resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const TriggersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TriggersGetInput,
  outputSchema: TriggersGetOutput,
}));
// Input Schema
export const TriggersListByImageTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/triggers",
      apiVersion: "2025-10-01",
    }),
  );
export type TriggersListByImageTemplateInput =
  typeof TriggersListByImageTemplateInput.Type;

// Output Schema
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
  });
export type TriggersListByImageTemplateOutput =
  typeof TriggersListByImageTemplateOutput.Type;

// The operation
/**
 * List all triggers for the specified Image Template resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const TriggersListByImageTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TriggersListByImageTemplateInput,
    outputSchema: TriggersListByImageTemplateOutput,
  }),
);
// Input Schema
export const VirtualMachineImageTemplatesCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/cancel",
      apiVersion: "2025-10-01",
    }),
  );
export type VirtualMachineImageTemplatesCancelInput =
  typeof VirtualMachineImageTemplatesCancelInput.Type;

// Output Schema
export const VirtualMachineImageTemplatesCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineImageTemplatesCancelOutput =
  typeof VirtualMachineImageTemplatesCancelOutput.Type;

// The operation
/**
 * Cancel the long running image build based on the image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualMachineImageTemplatesCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesCancelInput,
    outputSchema: VirtualMachineImageTemplatesCancelOutput,
  }));
// Input Schema
export const VirtualMachineImageTemplatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type VirtualMachineImageTemplatesCreateOrUpdateInput =
  typeof VirtualMachineImageTemplatesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type VirtualMachineImageTemplatesCreateOrUpdateOutput =
  typeof VirtualMachineImageTemplatesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a virtual machine image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualMachineImageTemplatesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesCreateOrUpdateInput,
    outputSchema: VirtualMachineImageTemplatesCreateOrUpdateOutput,
  }));
// Input Schema
export const VirtualMachineImageTemplatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}",
      apiVersion: "2025-10-01",
    }),
  );
export type VirtualMachineImageTemplatesDeleteInput =
  typeof VirtualMachineImageTemplatesDeleteInput.Type;

// Output Schema
export const VirtualMachineImageTemplatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineImageTemplatesDeleteOutput =
  typeof VirtualMachineImageTemplatesDeleteOutput.Type;

// The operation
/**
 * Delete a virtual machine image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualMachineImageTemplatesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesDeleteInput,
    outputSchema: VirtualMachineImageTemplatesDeleteOutput,
  }));
// Input Schema
export const VirtualMachineImageTemplatesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}",
      apiVersion: "2025-10-01",
    }),
  );
export type VirtualMachineImageTemplatesGetInput =
  typeof VirtualMachineImageTemplatesGetInput.Type;

// Output Schema
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
  });
export type VirtualMachineImageTemplatesGetOutput =
  typeof VirtualMachineImageTemplatesGetOutput.Type;

// The operation
/**
 * Get information about a virtual machine image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualMachineImageTemplatesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesGetInput,
    outputSchema: VirtualMachineImageTemplatesGetOutput,
  }));
// Input Schema
export const VirtualMachineImageTemplatesGetRunOutputInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/runOutputs/{runOutputName}",
      apiVersion: "2025-10-01",
    }),
  );
export type VirtualMachineImageTemplatesGetRunOutputInput =
  typeof VirtualMachineImageTemplatesGetRunOutputInput.Type;

// Output Schema
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
  });
export type VirtualMachineImageTemplatesGetRunOutputOutput =
  typeof VirtualMachineImageTemplatesGetRunOutputOutput.Type;

// The operation
/**
 * Get the specified run output for the specified image template resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualMachineImageTemplatesGetRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesGetRunOutputInput,
    outputSchema: VirtualMachineImageTemplatesGetRunOutputOutput,
  }));
// Input Schema
export const VirtualMachineImageTemplatesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VirtualMachineImages/imageTemplates",
      apiVersion: "2025-10-01",
    }),
  );
export type VirtualMachineImageTemplatesListInput =
  typeof VirtualMachineImageTemplatesListInput.Type;

// Output Schema
export const VirtualMachineImageTemplatesListOutput =
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
  });
export type VirtualMachineImageTemplatesListOutput =
  typeof VirtualMachineImageTemplatesListOutput.Type;

// The operation
/**
 * Gets information about the VM image templates associated with the subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineImageTemplatesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesListInput,
    outputSchema: VirtualMachineImageTemplatesListOutput,
  }));
// Input Schema
export const VirtualMachineImageTemplatesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates",
      apiVersion: "2025-10-01",
    }),
  );
export type VirtualMachineImageTemplatesListByResourceGroupInput =
  typeof VirtualMachineImageTemplatesListByResourceGroupInput.Type;

// Output Schema
export const VirtualMachineImageTemplatesListByResourceGroupOutput =
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
  });
export type VirtualMachineImageTemplatesListByResourceGroupOutput =
  typeof VirtualMachineImageTemplatesListByResourceGroupOutput.Type;

// The operation
/**
 * Gets information about the VM image templates associated with the specified resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineImageTemplatesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesListByResourceGroupInput,
    outputSchema: VirtualMachineImageTemplatesListByResourceGroupOutput,
  }));
// Input Schema
export const VirtualMachineImageTemplatesListRunOutputsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/runOutputs",
      apiVersion: "2025-10-01",
    }),
  );
export type VirtualMachineImageTemplatesListRunOutputsInput =
  typeof VirtualMachineImageTemplatesListRunOutputsInput.Type;

// Output Schema
export const VirtualMachineImageTemplatesListRunOutputsOutput =
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
  });
export type VirtualMachineImageTemplatesListRunOutputsOutput =
  typeof VirtualMachineImageTemplatesListRunOutputsOutput.Type;

// The operation
/**
 * List all run outputs for the specified Image Template resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualMachineImageTemplatesListRunOutputs =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesListRunOutputsInput,
    outputSchema: VirtualMachineImageTemplatesListRunOutputsOutput,
  }));
// Input Schema
export const VirtualMachineImageTemplatesRunInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/run",
      apiVersion: "2025-10-01",
    }),
  );
export type VirtualMachineImageTemplatesRunInput =
  typeof VirtualMachineImageTemplatesRunInput.Type;

// Output Schema
export const VirtualMachineImageTemplatesRunOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VirtualMachineImageTemplatesRunOutput =
  typeof VirtualMachineImageTemplatesRunOutput.Type;

// The operation
/**
 * Create artifacts from a existing image template
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const VirtualMachineImageTemplatesRun =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesRunInput,
    outputSchema: VirtualMachineImageTemplatesRunOutput,
  }));
// Input Schema
export const VirtualMachineImageTemplatesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type VirtualMachineImageTemplatesUpdateInput =
  typeof VirtualMachineImageTemplatesUpdateInput.Type;

// Output Schema
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
  });
export type VirtualMachineImageTemplatesUpdateOutput =
  typeof VirtualMachineImageTemplatesUpdateOutput.Type;

// The operation
/**
 * Update the tags for this Virtual Machine Image Template
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualMachineImageTemplatesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineImageTemplatesUpdateInput,
    outputSchema: VirtualMachineImageTemplatesUpdateOutput,
  }));
