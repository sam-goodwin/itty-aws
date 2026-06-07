/**
 * Azure Solutions API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Input Schema
export const ApplicationDefinitionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      lockLevel: Schema.Literals(["CanNotDelete", "ReadOnly", "None"]),
      displayName: Schema.optional(Schema.String),
      isEnabled: Schema.optional(Schema.Boolean),
      authorizations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            roleDefinitionId: Schema.String,
          }),
        ),
      ),
      artifacts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.Literals([
              "NotSpecified",
              "ApplicationResourceTemplate",
              "CreateUiDefinition",
              "MainTemplateParameters",
            ]),
            uri: Schema.String,
            type: Schema.Literals(["NotSpecified", "Template", "Custom"]),
          }),
        ),
      ),
      description: Schema.optional(Schema.String),
      packageFileUri: Schema.optional(Schema.String),
      storageAccountId: Schema.optional(Schema.String),
      mainTemplate: Schema.optional(Schema.Unknown),
      createUiDefinition: Schema.optional(Schema.Unknown),
      notificationPolicy: Schema.optional(
        Schema.Struct({
          notificationEndpoints: Schema.Array(
            Schema.Struct({
              uri: Schema.String,
            }),
          ),
        }),
      ),
      lockingPolicy: Schema.optional(
        Schema.Struct({
          allowedActions: Schema.optional(Schema.Array(Schema.String)),
          allowedDataActions: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      deploymentPolicy: Schema.optional(
        Schema.Struct({
          deploymentMode: Schema.Literals([
            "NotSpecified",
            "Incremental",
            "Complete",
          ]),
        }),
      ),
      managementPolicy: Schema.optional(
        Schema.Struct({
          mode: Schema.optional(
            Schema.Literals(["NotSpecified", "Unmanaged", "Managed"]),
          ),
        }),
      ),
      policies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            policyDefinitionId: Schema.optional(Schema.String),
            parameters: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
    managedBy: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationDefinitionsCreateOrUpdateInput =
  typeof ApplicationDefinitionsCreateOrUpdateInput.Type;

// Output Schema
export const ApplicationDefinitionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ApplicationDefinitionsCreateOrUpdateOutput =
  typeof ApplicationDefinitionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a managed application definition.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationDefinitionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationDefinitionsCreateOrUpdateInput,
    outputSchema: ApplicationDefinitionsCreateOrUpdateOutput,
  }));
// Input Schema
export const ApplicationDefinitionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationDefinitionsDeleteInput =
  typeof ApplicationDefinitionsDeleteInput.Type;

// Output Schema
export const ApplicationDefinitionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationDefinitionsDeleteOutput =
  typeof ApplicationDefinitionsDeleteOutput.Type;

// The operation
/**
 * Deletes the managed application definition.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationDefinitionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationDefinitionsDeleteInput,
    outputSchema: ApplicationDefinitionsDeleteOutput,
  }));
// Input Schema
export const ApplicationDefinitionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationDefinitionsGetInput =
  typeof ApplicationDefinitionsGetInput.Type;

// Output Schema
export const ApplicationDefinitionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ApplicationDefinitionsGetOutput =
  typeof ApplicationDefinitionsGetOutput.Type;

// The operation
/**
 * Gets the managed application definition.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationDefinitionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationDefinitionsGetInput,
    outputSchema: ApplicationDefinitionsGetOutput,
  }),
);
// Input Schema
export const ApplicationDefinitionsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationDefinitionsListByResourceGroupInput =
  typeof ApplicationDefinitionsListByResourceGroupInput.Type;

// Output Schema
export const ApplicationDefinitionsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
export type ApplicationDefinitionsListByResourceGroupOutput =
  typeof ApplicationDefinitionsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists the managed application definitions in a resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationDefinitionsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationDefinitionsListByResourceGroupInput,
    outputSchema: ApplicationDefinitionsListByResourceGroupOutput,
  }));
// Input Schema
export const ApplicationDefinitionsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Solutions/applicationDefinitions",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationDefinitionsListBySubscriptionInput =
  typeof ApplicationDefinitionsListBySubscriptionInput.Type;

// Output Schema
export const ApplicationDefinitionsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
export type ApplicationDefinitionsListBySubscriptionOutput =
  typeof ApplicationDefinitionsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all the application definitions within a subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationDefinitionsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationDefinitionsListBySubscriptionInput,
    outputSchema: ApplicationDefinitionsListBySubscriptionOutput,
  }));
// Input Schema
export const ApplicationDefinitionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationDefinitionsUpdateInput =
  typeof ApplicationDefinitionsUpdateInput.Type;

// Output Schema
export const ApplicationDefinitionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ApplicationDefinitionsUpdateOutput =
  typeof ApplicationDefinitionsUpdateOutput.Type;

// The operation
/**
 * Updates the managed application definition.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationDefinitionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationDefinitionsUpdateInput,
    outputSchema: ApplicationDefinitionsUpdateOutput,
  }));
// Input Schema
export const ApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      managedResourceGroupId: Schema.optional(Schema.String),
      applicationDefinitionId: Schema.optional(Schema.String),
      parameters: Schema.optional(Schema.Unknown),
      outputs: Schema.optional(Schema.Unknown),
      provisioningState: Schema.optional(
        Schema.Literals([
          "NotSpecified",
          "Accepted",
          "Running",
          "Deleting",
          "Deleted",
          "Canceled",
          "Failed",
          "Succeeded",
          "Updating",
        ]),
      ),
      billingDetails: Schema.optional(
        Schema.Struct({
          resourceUsageId: Schema.optional(Schema.String),
        }),
      ),
      jitAccessPolicy: Schema.optional(
        Schema.Struct({
          jitAccessEnabled: Schema.Boolean,
          jitApprovalMode: Schema.optional(
            Schema.Literals(["NotSpecified", "AutoApprove", "ManualApprove"]),
          ),
          jitApprovers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                type: Schema.optional(Schema.Literals(["user", "group"])),
                displayName: Schema.optional(Schema.String),
              }),
            ),
          ),
          maximumJitAccessDuration: Schema.optional(Schema.String),
        }),
      ),
      publisherTenantId: Schema.optional(Schema.String),
      authorizations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            roleDefinitionId: Schema.String,
          }),
        ),
      ),
      managementMode: Schema.optional(
        Schema.Literals(["NotSpecified", "Unmanaged", "Managed"]),
      ),
      customerSupport: Schema.optional(
        Schema.Struct({
          contactName: Schema.optional(Schema.String),
          email: Schema.String,
          phone: Schema.String,
        }),
      ),
      supportUrls: Schema.optional(
        Schema.Struct({
          publicAzure: Schema.optional(Schema.String),
          governmentCloud: Schema.optional(Schema.String),
        }),
      ),
      artifacts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.Literals([
              "NotSpecified",
              "ViewDefinition",
              "Authorizations",
              "CustomRoleDefinition",
            ]),
            uri: Schema.String,
            type: Schema.Literals(["NotSpecified", "Template", "Custom"]),
          }),
        ),
      ),
      createdBy: Schema.optional(
        Schema.Struct({
          oid: Schema.optional(Schema.String),
          puid: Schema.optional(Schema.String),
          applicationId: Schema.optional(Schema.String),
        }),
      ),
      updatedBy: Schema.optional(
        Schema.Struct({
          oid: Schema.optional(Schema.String),
          puid: Schema.optional(Schema.String),
          applicationId: Schema.optional(Schema.String),
        }),
      ),
    }),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.String,
      }),
    ),
    kind: Schema.String,
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsCreateOrUpdateInput =
  typeof ApplicationsCreateOrUpdateInput.Type;

// Output Schema
export const ApplicationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ApplicationsCreateOrUpdateOutput =
  typeof ApplicationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates a managed application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsCreateOrUpdateInput,
    outputSchema: ApplicationsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ApplicationsCreateOrUpdateByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      managedResourceGroupId: Schema.optional(Schema.String),
      applicationDefinitionId: Schema.optional(Schema.String),
      parameters: Schema.optional(Schema.Unknown),
      outputs: Schema.optional(Schema.Unknown),
      provisioningState: Schema.optional(
        Schema.Literals([
          "NotSpecified",
          "Accepted",
          "Running",
          "Deleting",
          "Deleted",
          "Canceled",
          "Failed",
          "Succeeded",
          "Updating",
        ]),
      ),
      billingDetails: Schema.optional(
        Schema.Struct({
          resourceUsageId: Schema.optional(Schema.String),
        }),
      ),
      jitAccessPolicy: Schema.optional(
        Schema.Struct({
          jitAccessEnabled: Schema.Boolean,
          jitApprovalMode: Schema.optional(
            Schema.Literals(["NotSpecified", "AutoApprove", "ManualApprove"]),
          ),
          jitApprovers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                type: Schema.optional(Schema.Literals(["user", "group"])),
                displayName: Schema.optional(Schema.String),
              }),
            ),
          ),
          maximumJitAccessDuration: Schema.optional(Schema.String),
        }),
      ),
      publisherTenantId: Schema.optional(Schema.String),
      authorizations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            roleDefinitionId: Schema.String,
          }),
        ),
      ),
      managementMode: Schema.optional(
        Schema.Literals(["NotSpecified", "Unmanaged", "Managed"]),
      ),
      customerSupport: Schema.optional(
        Schema.Struct({
          contactName: Schema.optional(Schema.String),
          email: Schema.String,
          phone: Schema.String,
        }),
      ),
      supportUrls: Schema.optional(
        Schema.Struct({
          publicAzure: Schema.optional(Schema.String),
          governmentCloud: Schema.optional(Schema.String),
        }),
      ),
      artifacts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.Literals([
              "NotSpecified",
              "ViewDefinition",
              "Authorizations",
              "CustomRoleDefinition",
            ]),
            uri: Schema.String,
            type: Schema.Literals(["NotSpecified", "Template", "Custom"]),
          }),
        ),
      ),
      createdBy: Schema.optional(
        Schema.Struct({
          oid: Schema.optional(Schema.String),
          puid: Schema.optional(Schema.String),
          applicationId: Schema.optional(Schema.String),
        }),
      ),
      updatedBy: Schema.optional(
        Schema.Struct({
          oid: Schema.optional(Schema.String),
          puid: Schema.optional(Schema.String),
          applicationId: Schema.optional(Schema.String),
        }),
      ),
    }),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.String,
      }),
    ),
    kind: Schema.String,
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{applicationId}",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsCreateOrUpdateByIdInput =
  typeof ApplicationsCreateOrUpdateByIdInput.Type;

// Output Schema
export const ApplicationsCreateOrUpdateByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ApplicationsCreateOrUpdateByIdOutput =
  typeof ApplicationsCreateOrUpdateByIdOutput.Type;

// The operation
/**
 * Creates or updates a managed application.
 *
 * @param applicationId - The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsCreateOrUpdateById =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsCreateOrUpdateByIdInput,
    outputSchema: ApplicationsCreateOrUpdateByIdOutput,
  }));
// Input Schema
export const ApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsDeleteInput = typeof ApplicationsDeleteInput.Type;

// Output Schema
export const ApplicationsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsDeleteOutput = typeof ApplicationsDeleteOutput.Type;

// The operation
/**
 * Deletes the managed application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsDeleteInput,
  outputSchema: ApplicationsDeleteOutput,
}));
// Input Schema
export const ApplicationsDeleteByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{applicationId}",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsDeleteByIdInput =
  typeof ApplicationsDeleteByIdInput.Type;

// Output Schema
export const ApplicationsDeleteByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsDeleteByIdOutput =
  typeof ApplicationsDeleteByIdOutput.Type;

// The operation
/**
 * Deletes the managed application.
 *
 * @param applicationId - The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsDeleteById = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsDeleteByIdInput,
    outputSchema: ApplicationsDeleteByIdOutput,
  }),
);
// Input Schema
export const ApplicationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
    apiVersion: "2021-07-01",
  }),
);
export type ApplicationsGetInput = typeof ApplicationsGetInput.Type;

// Output Schema
export const ApplicationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ApplicationsGetOutput = typeof ApplicationsGetOutput.Type;

// The operation
/**
 * Gets the managed application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetInput,
  outputSchema: ApplicationsGetOutput,
}));
// Input Schema
export const ApplicationsGetByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{applicationId}",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsGetByIdInput = typeof ApplicationsGetByIdInput.Type;

// Output Schema
export const ApplicationsGetByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ApplicationsGetByIdOutput = typeof ApplicationsGetByIdOutput.Type;

// The operation
/**
 * Gets the managed application.
 *
 * @param applicationId - The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsGetById = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetByIdInput,
  outputSchema: ApplicationsGetByIdOutput,
}));
// Input Schema
export const ApplicationsListAllowedUpgradePlansInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}/listAllowedUpgradePlans",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsListAllowedUpgradePlansInput =
  typeof ApplicationsListAllowedUpgradePlansInput.Type;

// Output Schema
export const ApplicationsListAllowedUpgradePlansOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          publisher: Schema.String,
          product: Schema.String,
          promotionCode: Schema.optional(Schema.String),
          version: Schema.String,
        }),
      ),
    ),
  });
export type ApplicationsListAllowedUpgradePlansOutput =
  typeof ApplicationsListAllowedUpgradePlansOutput.Type;

// The operation
/**
 * List allowed upgrade plans for application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsListAllowedUpgradePlans =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsListAllowedUpgradePlansInput,
    outputSchema: ApplicationsListAllowedUpgradePlansOutput,
  }));
// Input Schema
export const ApplicationsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsListByResourceGroupInput =
  typeof ApplicationsListByResourceGroupInput.Type;

// Output Schema
export const ApplicationsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
export type ApplicationsListByResourceGroupOutput =
  typeof ApplicationsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all the applications within a resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsListByResourceGroupInput,
    outputSchema: ApplicationsListByResourceGroupOutput,
  }));
// Input Schema
export const ApplicationsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Solutions/applications",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsListBySubscriptionInput =
  typeof ApplicationsListBySubscriptionInput.Type;

// Output Schema
export const ApplicationsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
export type ApplicationsListBySubscriptionOutput =
  typeof ApplicationsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all the applications within a subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsListBySubscriptionInput,
    outputSchema: ApplicationsListBySubscriptionOutput,
  }));
// Input Schema
export const ApplicationsListTokensInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    authorizationAudience: Schema.optional(Schema.String),
    userAssignedIdentities: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}/listTokens",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsListTokensInput =
  typeof ApplicationsListTokensInput.Type;

// Output Schema
export const ApplicationsListTokensOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          accessToken: Schema.optional(SensitiveOutputString),
          expiresIn: Schema.optional(Schema.String),
          expiresOn: Schema.optional(Schema.String),
          notBefore: Schema.optional(Schema.String),
          authorizationAudience: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          tokenType: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ApplicationsListTokensOutput =
  typeof ApplicationsListTokensOutput.Type;

// The operation
/**
 * List tokens for application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationName - The name of the managed application.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsListTokens = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsListTokensInput,
    outputSchema: ApplicationsListTokensOutput,
  }),
);
// Input Schema
export const ApplicationsRefreshPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}/refreshPermissions",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsRefreshPermissionsInput =
  typeof ApplicationsRefreshPermissionsInput.Type;

// Output Schema
export const ApplicationsRefreshPermissionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsRefreshPermissionsOutput =
  typeof ApplicationsRefreshPermissionsOutput.Type;

// The operation
/**
 * Refresh Permissions for application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsRefreshPermissions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsRefreshPermissionsInput,
    outputSchema: ApplicationsRefreshPermissionsOutput,
  }));
// Input Schema
export const ApplicationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        managedResourceGroupId: Schema.optional(Schema.String),
        applicationDefinitionId: Schema.optional(Schema.String),
        parameters: Schema.optional(Schema.Unknown),
        outputs: Schema.optional(Schema.Unknown),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        billingDetails: Schema.optional(
          Schema.Struct({
            resourceUsageId: Schema.optional(Schema.String),
          }),
        ),
        jitAccessPolicy: Schema.optional(
          Schema.Struct({
            jitAccessEnabled: Schema.Boolean,
            jitApprovalMode: Schema.optional(
              Schema.Literals(["NotSpecified", "AutoApprove", "ManualApprove"]),
            ),
            jitApprovers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  type: Schema.optional(Schema.Literals(["user", "group"])),
                  displayName: Schema.optional(Schema.String),
                }),
              ),
            ),
            maximumJitAccessDuration: Schema.optional(Schema.String),
          }),
        ),
        publisherTenantId: Schema.optional(Schema.String),
        authorizations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              principalId: Schema.String,
              roleDefinitionId: Schema.String,
            }),
          ),
        ),
        managementMode: Schema.optional(
          Schema.Literals(["NotSpecified", "Unmanaged", "Managed"]),
        ),
        customerSupport: Schema.optional(
          Schema.Struct({
            contactName: Schema.optional(Schema.String),
            email: Schema.String,
            phone: Schema.String,
          }),
        ),
        supportUrls: Schema.optional(
          Schema.Struct({
            publicAzure: Schema.optional(Schema.String),
            governmentCloud: Schema.optional(Schema.String),
          }),
        ),
        artifacts: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.Literals([
                "NotSpecified",
                "ViewDefinition",
                "Authorizations",
                "CustomRoleDefinition",
              ]),
              uri: Schema.String,
              type: Schema.Literals(["NotSpecified", "Template", "Custom"]),
            }),
          ),
        ),
        createdBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
        updatedBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        publisher: Schema.optional(Schema.String),
        product: Schema.optional(Schema.String),
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsUpdateInput = typeof ApplicationsUpdateInput.Type;

// Output Schema
export const ApplicationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ApplicationsUpdateOutput = typeof ApplicationsUpdateOutput.Type;

// The operation
/**
 * Updates an existing managed application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsUpdateInput,
  outputSchema: ApplicationsUpdateOutput,
}));
// Input Schema
export const ApplicationsUpdateAccessInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    approver: Schema.optional(Schema.String),
    metadata: Schema.Struct({
      originRequestId: Schema.optional(Schema.String),
      requestorId: Schema.optional(Schema.String),
      tenantDisplayName: Schema.optional(Schema.String),
      subjectDisplayName: Schema.optional(Schema.String),
    }),
    status: Schema.Literals(["NotSpecified", "Elevate", "Remove"]),
    subStatus: Schema.Literals([
      "NotSpecified",
      "Approved",
      "Denied",
      "Failed",
      "Expired",
      "Timeout",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}/updateAccess",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsUpdateAccessInput =
  typeof ApplicationsUpdateAccessInput.Type;

// Output Schema
export const ApplicationsUpdateAccessOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsUpdateAccessOutput =
  typeof ApplicationsUpdateAccessOutput.Type;

// The operation
/**
 * Update access for application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationName - The name of the managed application.
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsUpdateAccess = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsUpdateAccessInput,
    outputSchema: ApplicationsUpdateAccessOutput,
  }),
);
// Input Schema
export const ApplicationsUpdateByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applicationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        managedResourceGroupId: Schema.optional(Schema.String),
        applicationDefinitionId: Schema.optional(Schema.String),
        parameters: Schema.optional(Schema.Unknown),
        outputs: Schema.optional(Schema.Unknown),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        billingDetails: Schema.optional(
          Schema.Struct({
            resourceUsageId: Schema.optional(Schema.String),
          }),
        ),
        jitAccessPolicy: Schema.optional(
          Schema.Struct({
            jitAccessEnabled: Schema.Boolean,
            jitApprovalMode: Schema.optional(
              Schema.Literals(["NotSpecified", "AutoApprove", "ManualApprove"]),
            ),
            jitApprovers: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  type: Schema.optional(Schema.Literals(["user", "group"])),
                  displayName: Schema.optional(Schema.String),
                }),
              ),
            ),
            maximumJitAccessDuration: Schema.optional(Schema.String),
          }),
        ),
        publisherTenantId: Schema.optional(Schema.String),
        authorizations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              principalId: Schema.String,
              roleDefinitionId: Schema.String,
            }),
          ),
        ),
        managementMode: Schema.optional(
          Schema.Literals(["NotSpecified", "Unmanaged", "Managed"]),
        ),
        customerSupport: Schema.optional(
          Schema.Struct({
            contactName: Schema.optional(Schema.String),
            email: Schema.String,
            phone: Schema.String,
          }),
        ),
        supportUrls: Schema.optional(
          Schema.Struct({
            publicAzure: Schema.optional(Schema.String),
            governmentCloud: Schema.optional(Schema.String),
          }),
        ),
        artifacts: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.Literals([
                "NotSpecified",
                "ViewDefinition",
                "Authorizations",
                "CustomRoleDefinition",
              ]),
              uri: Schema.String,
              type: Schema.Literals(["NotSpecified", "Template", "Custom"]),
            }),
          ),
        ),
        createdBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
        updatedBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        publisher: Schema.optional(Schema.String),
        product: Schema.optional(Schema.String),
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
          ]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              tenantId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        model: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{applicationId}",
      apiVersion: "2021-07-01",
    }),
  );
export type ApplicationsUpdateByIdInput =
  typeof ApplicationsUpdateByIdInput.Type;

// Output Schema
export const ApplicationsUpdateByIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type ApplicationsUpdateByIdOutput =
  typeof ApplicationsUpdateByIdOutput.Type;

// The operation
/**
 * Updates an existing managed application.
 *
 * @param applicationId - The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
 * @param api-version - The API version to use for this operation.
 */
export const ApplicationsUpdateById = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsUpdateByIdInput,
    outputSchema: ApplicationsUpdateByIdOutput,
  }),
);
// Input Schema
export const JitRequestsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        applicationResourceId: Schema.String,
        publisherTenantId: Schema.optional(Schema.String),
        jitAuthorizationPolicies: Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            roleDefinitionId: Schema.String,
          }),
        ),
        jitSchedulingPolicy: Schema.Struct({
          type: Schema.Literals(["NotSpecified", "Once", "Recurring"]),
          duration: Schema.String,
          startTime: Schema.String,
        }),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        jitRequestState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Pending",
            "Approved",
            "Denied",
            "Failed",
            "Canceled",
            "Expired",
            "Timeout",
          ]),
        ),
        createdBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
        updatedBy: Schema.optional(
          Schema.Struct({
            oid: Schema.optional(Schema.String),
            puid: Schema.optional(Schema.String),
            applicationId: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}",
      apiVersion: "2021-07-01",
    }),
  );
export type JitRequestsCreateOrUpdateInput =
  typeof JitRequestsCreateOrUpdateInput.Type;

// Output Schema
export const JitRequestsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type JitRequestsCreateOrUpdateOutput =
  typeof JitRequestsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates the JIT request.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const jitRequestsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JitRequestsCreateOrUpdateInput,
    outputSchema: JitRequestsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const JitRequestsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}",
    apiVersion: "2021-07-01",
  }),
);
export type JitRequestsDeleteInput = typeof JitRequestsDeleteInput.Type;

// Output Schema
export const JitRequestsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type JitRequestsDeleteOutput = typeof JitRequestsDeleteOutput.Type;

// The operation
/**
 * Deletes the JIT request.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const jitRequestsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JitRequestsDeleteInput,
  outputSchema: JitRequestsDeleteOutput,
}));
// Input Schema
export const JitRequestsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}",
    apiVersion: "2021-07-01",
  }),
);
export type JitRequestsGetInput = typeof JitRequestsGetInput.Type;

// Output Schema
export const JitRequestsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type JitRequestsGetOutput = typeof JitRequestsGetOutput.Type;

// The operation
/**
 * Gets the JIT request.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const JitRequestsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JitRequestsGetInput,
  outputSchema: JitRequestsGetOutput,
}));
// Input Schema
export const JitRequestsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests",
      apiVersion: "2021-07-01",
    }),
  );
export type JitRequestsListByResourceGroupInput =
  typeof JitRequestsListByResourceGroupInput.Type;

// Output Schema
export const JitRequestsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
export type JitRequestsListByResourceGroupOutput =
  typeof JitRequestsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all JIT requests within the resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const jitRequestsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JitRequestsListByResourceGroupInput,
    outputSchema: JitRequestsListByResourceGroupOutput,
  }));
// Input Schema
export const JitRequestsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Solutions/jitRequests",
      apiVersion: "2021-07-01",
    }),
  );
export type JitRequestsListBySubscriptionInput =
  typeof JitRequestsListBySubscriptionInput.Type;

// Output Schema
export const JitRequestsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
export type JitRequestsListBySubscriptionOutput =
  typeof JitRequestsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all JIT requests within the subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const jitRequestsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JitRequestsListBySubscriptionInput,
    outputSchema: JitRequestsListBySubscriptionOutput,
  }));
// Input Schema
export const JitRequestsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}",
    apiVersion: "2021-07-01",
  }),
);
export type JitRequestsUpdateInput = typeof JitRequestsUpdateInput.Type;

// Output Schema
export const JitRequestsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
export type JitRequestsUpdateOutput = typeof JitRequestsUpdateOutput.Type;

// The operation
/**
 * Updates the JIT request.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const JitRequestsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JitRequestsUpdateInput,
  outputSchema: JitRequestsUpdateOutput,
}));
// Input Schema
export const ListOperationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Solutions/operations",
    apiVersion: "2021-07-01",
  }),
);
export type ListOperationsInput = typeof ListOperationsInput.Type;

// Output Schema
export const ListOperationsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ListOperationsOutput = typeof ListOperationsOutput.Type;

// The operation
/**
 * Lists all of the available Microsoft.Solutions REST API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const ListOperations = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListOperationsInput,
  outputSchema: ListOperationsOutput,
}));
