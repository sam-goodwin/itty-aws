/**
 * Azure Labservices API
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
export interface ImagesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labPlanName: string;
  imageName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: { enabledState?: "Enabled" | "Disabled" };
}
export const ImagesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labPlanName: Schema.String.pipe(T.PathParam()),
    imageName: Schema.String.pipe(T.PathParam()),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.Struct({
      enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}/images/{imageName}",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<ImagesCreateOrUpdateInput>;

// Output Schema
export interface ImagesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ImagesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ImagesCreateOrUpdateOutput>;

// The operation
/**
 * Updates an image via PUT.
 *
 * Updates an image resource via PUT. Creating new resources via PUT will not function.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labPlanName - The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
 * @param imageName - The image name.
 */
export const ImagesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesCreateOrUpdateInput,
  outputSchema: ImagesCreateOrUpdateOutput,
}));
// Input Schema
export interface ImagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labPlanName: string;
  imageName: string;
}
export const ImagesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labPlanName: Schema.String.pipe(T.PathParam()),
  imageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}/images/{imageName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<ImagesGetInput>;

// Output Schema
export interface ImagesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ImagesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ImagesGetOutput>;

// The operation
/**
 * Gets an image.
 *
 * Gets an image resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labPlanName - The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
 * @param imageName - The image name.
 */
export const ImagesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesGetInput,
  outputSchema: ImagesGetOutput,
}));
// Input Schema
export interface ImagesListByLabPlanInput {
  subscriptionId: string;
  resourceGroupName: string;
  labPlanName: string;
  $filter?: string;
}
export const ImagesListByLabPlanInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labPlanName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}/images",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<ImagesListByLabPlanInput>;

// Output Schema
export interface ImagesListByLabPlanOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ImagesListByLabPlanOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ImagesListByLabPlanOutput>;

// The operation
/**
 * Gets all images.
 *
 * Gets all images from galleries attached to a lab plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labPlanName - The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
 * @param $filter - The filter to apply to the operation.
 */
export const ImagesListByLabPlan = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesListByLabPlanInput,
  outputSchema: ImagesListByLabPlanOutput,
}));
// Input Schema
export interface ImagesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labPlanName: string;
  imageName: string;
  properties?: { enabledState?: "Enabled" | "Disabled" };
}
export const ImagesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labPlanName: Schema.String.pipe(T.PathParam()),
  imageName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}/images/{imageName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<ImagesUpdateInput>;

// Output Schema
export interface ImagesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ImagesUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ImagesUpdateOutput>;

// The operation
/**
 * Updates an image.
 *
 * Updates an image resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labPlanName - The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
 * @param imageName - The image name.
 */
export const ImagesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesUpdateInput,
  outputSchema: ImagesUpdateOutput,
}));
// Input Schema
export interface LabPlansCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labPlanName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: {
    defaultConnectionProfile?: {
      webSshAccess?: "Public" | "Private" | "None";
      webRdpAccess?: "Public" | "Private" | "None";
      clientSshAccess?: "Public" | "Private" | "None";
      clientRdpAccess?: "Public" | "Private" | "None";
    };
    defaultAutoShutdownProfile?: {
      shutdownOnDisconnect?: "Enabled" | "Disabled";
      shutdownWhenNotConnected?: "Enabled" | "Disabled";
      shutdownOnIdle?: "None" | "UserAbsence" | "LowUsage";
      disconnectDelay?: string;
      noConnectDelay?: string;
      idleDelay?: string;
    };
    defaultNetworkProfile?: { subnetId?: string };
    allowedRegions?: string[];
    sharedGalleryId?: string;
    supportInfo?: {
      url?: string;
      email?: string;
      phone?: string;
      instructions?: string;
    };
    linkedLmsInstance?: string;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned";
  };
  tags?: Record<string, string>;
  location: string;
}
export const LabPlansCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labPlanName: Schema.String.pipe(T.PathParam()),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.Struct({
      defaultConnectionProfile: Schema.optional(
        Schema.Struct({
          webSshAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          webRdpAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          clientSshAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          clientRdpAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
        }),
      ),
      defaultAutoShutdownProfile: Schema.optional(
        Schema.Struct({
          shutdownOnDisconnect: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          shutdownWhenNotConnected: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          shutdownOnIdle: Schema.optional(
            Schema.Literals(["None", "UserAbsence", "LowUsage"]),
          ),
          disconnectDelay: Schema.optional(Schema.String),
          noConnectDelay: Schema.optional(Schema.String),
          idleDelay: Schema.optional(Schema.String),
        }),
      ),
      defaultNetworkProfile: Schema.optional(
        Schema.Struct({
          subnetId: Schema.optional(Schema.String),
        }),
      ),
      allowedRegions: Schema.optional(Schema.Array(Schema.String)),
      sharedGalleryId: Schema.optional(Schema.String),
      supportInfo: Schema.optional(
        Schema.Struct({
          url: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          phone: Schema.optional(Schema.String),
          instructions: Schema.optional(Schema.String),
        }),
      ),
      linkedLmsInstance: Schema.optional(Schema.String),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["SystemAssigned"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<LabPlansCreateOrUpdateInput>;

// Output Schema
export interface LabPlansCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const LabPlansCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LabPlansCreateOrUpdateOutput>;

// The operation
/**
 * Updates or creates a Lab Plan resource.
 *
 * Operation to create or update a Lab Plan resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labPlanName - The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
 */
export const LabPlansCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabPlansCreateOrUpdateInput,
  outputSchema: LabPlansCreateOrUpdateOutput,
}));
// Input Schema
export interface LabPlansDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labPlanName: string;
}
export const LabPlansDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labPlanName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<LabPlansDeleteInput>;

// Output Schema
export type LabPlansDeleteOutput = void;
export const LabPlansDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LabPlansDeleteOutput>;

// The operation
/**
 * Deletes a Lab Plan resource.
 *
 * Operation to delete a Lab Plan resource. Deleting a lab plan does not delete labs associated with a lab plan, nor does it delete shared images added to a gallery via the lab plan permission container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labPlanName - The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
 */
export const LabPlansDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabPlansDeleteInput,
  outputSchema: LabPlansDeleteOutput,
}));
// Input Schema
export interface LabPlansGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labPlanName: string;
}
export const LabPlansGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labPlanName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<LabPlansGetInput>;

// Output Schema
export interface LabPlansGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const LabPlansGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<LabPlansGetOutput>;

// The operation
/**
 * Retrieves a Lab Plan resource.
 *
 * Retrieves the properties of a Lab Plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labPlanName - The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
 */
export const LabPlansGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabPlansGetInput,
  outputSchema: LabPlansGetOutput,
}));
// Input Schema
export interface LabPlansListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const LabPlansListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<LabPlansListByResourceGroupInput>;

// Output Schema
export interface LabPlansListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const LabPlansListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LabPlansListByResourceGroupOutput>;

// The operation
/**
 * Get all lab plans for a subscription and resource group.
 *
 * Returns a list of all lab plans for a subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const LabPlansListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabPlansListByResourceGroupInput,
  outputSchema: LabPlansListByResourceGroupOutput,
}));
// Input Schema
export interface LabPlansListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
}
export const LabPlansListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.LabServices/labPlans",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<LabPlansListBySubscriptionInput>;

// Output Schema
export interface LabPlansListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const LabPlansListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LabPlansListBySubscriptionOutput>;

// The operation
/**
 * Get all lab plans for a subscription.
 *
 * Returns a list of all lab plans within a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - The filter to apply to the operation.
 */
export const LabPlansListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabPlansListBySubscriptionInput,
  outputSchema: LabPlansListBySubscriptionOutput,
}));
// Input Schema
export interface LabPlansSaveImageInput {
  subscriptionId: string;
  resourceGroupName: string;
  labPlanName: string;
  name?: string;
  labVirtualMachineId?: string;
}
export const LabPlansSaveImageInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labPlanName: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  labVirtualMachineId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}/saveImage",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<LabPlansSaveImageInput>;

// Output Schema
export type LabPlansSaveImageOutput = void;
export const LabPlansSaveImageOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LabPlansSaveImageOutput>;

// The operation
/**
 * Save an image from a lab VM to the attached shared image gallery.
 *
 * Saves an image from a lab VM to the attached shared image gallery.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labPlanName - The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
 */
export const LabPlansSaveImage = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabPlansSaveImageInput,
  outputSchema: LabPlansSaveImageOutput,
}));
// Input Schema
export interface LabPlansUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labPlanName: string;
  properties?: {
    defaultConnectionProfile?: {
      webSshAccess?: "Public" | "Private" | "None";
      webRdpAccess?: "Public" | "Private" | "None";
      clientSshAccess?: "Public" | "Private" | "None";
      clientRdpAccess?: "Public" | "Private" | "None";
    };
    defaultAutoShutdownProfile?: {
      shutdownOnDisconnect?: "Enabled" | "Disabled";
      shutdownWhenNotConnected?: "Enabled" | "Disabled";
      shutdownOnIdle?: "None" | "UserAbsence" | "LowUsage";
      disconnectDelay?: string;
      noConnectDelay?: string;
      idleDelay?: string;
    };
    defaultNetworkProfile?: { subnetId?: string };
    allowedRegions?: string[];
    sharedGalleryId?: string;
    supportInfo?: {
      url?: string;
      email?: string;
      phone?: string;
      instructions?: string;
    };
    linkedLmsInstance?: string;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned";
  };
  tags?: string[];
}
export const LabPlansUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labPlanName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      defaultConnectionProfile: Schema.optional(
        Schema.Struct({
          webSshAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          webRdpAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          clientSshAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          clientRdpAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
        }),
      ),
      defaultAutoShutdownProfile: Schema.optional(
        Schema.Struct({
          shutdownOnDisconnect: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          shutdownWhenNotConnected: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          shutdownOnIdle: Schema.optional(
            Schema.Literals(["None", "UserAbsence", "LowUsage"]),
          ),
          disconnectDelay: Schema.optional(Schema.String),
          noConnectDelay: Schema.optional(Schema.String),
          idleDelay: Schema.optional(Schema.String),
        }),
      ),
      defaultNetworkProfile: Schema.optional(
        Schema.Struct({
          subnetId: Schema.optional(Schema.String),
        }),
      ),
      allowedRegions: Schema.optional(Schema.Array(Schema.String)),
      sharedGalleryId: Schema.optional(Schema.String),
      supportInfo: Schema.optional(
        Schema.Struct({
          url: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          phone: Schema.optional(Schema.String),
          instructions: Schema.optional(Schema.String),
        }),
      ),
      linkedLmsInstance: Schema.optional(Schema.String),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(Schema.Literals(["SystemAssigned"])),
    }),
  ),
  tags: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labPlans/{labPlanName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<LabPlansUpdateInput>;

// Output Schema
export interface LabPlansUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const LabPlansUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<LabPlansUpdateOutput>;

// The operation
/**
 * Updates a Lab Plan resource.
 *
 * Operation to update a Lab Plan resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labPlanName - The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
 */
export const LabPlansUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabPlansUpdateInput,
  outputSchema: LabPlansUpdateOutput,
}));
// Input Schema
export interface LabsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: {
    autoShutdownProfile?: {
      shutdownOnDisconnect?: "Enabled" | "Disabled";
      shutdownWhenNotConnected?: "Enabled" | "Disabled";
      shutdownOnIdle?: "None" | "UserAbsence" | "LowUsage";
      disconnectDelay?: string;
      noConnectDelay?: string;
      idleDelay?: string;
    };
    connectionProfile?: {
      webSshAccess?: "Public" | "Private" | "None";
      webRdpAccess?: "Public" | "Private" | "None";
      clientSshAccess?: "Public" | "Private" | "None";
      clientRdpAccess?: "Public" | "Private" | "None";
    };
    virtualMachineProfile?: {
      createOption: "Image" | "TemplateVM";
      imageReference: {
        id?: string;
        offer?: string;
        publisher?: string;
        sku?: string;
        version?: string;
        exactVersion?: string;
      };
      osType?: "Windows" | "Linux";
      sku: {
        name: string;
        tier?: "Free" | "Basic" | "Standard" | "Premium";
        size?: string;
        family?: string;
        capacity?: number;
      };
      additionalCapabilities?: { installGpuDrivers?: "Enabled" | "Disabled" };
      usageQuota: string;
      useSharedPassword?: "Enabled" | "Disabled";
      adminUser: {
        username: string;
        password?: string | Redacted.Redacted<string>;
      };
      nonAdminUser?: {
        username: string;
        password?: string | Redacted.Redacted<string>;
      };
    };
    securityProfile?: {
      registrationCode?: string;
      openAccess?: "Enabled" | "Disabled";
    };
    rosterProfile?: {
      activeDirectoryGroupId?: string;
      ltiContextId?: string;
      lmsInstance?: string;
      ltiClientId?: string;
      ltiRosterEndpoint?: string;
    };
    labPlanId?: string;
    title?: string;
    description?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const LabsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.Struct({
      autoShutdownProfile: Schema.optional(
        Schema.Struct({
          shutdownOnDisconnect: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          shutdownWhenNotConnected: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          shutdownOnIdle: Schema.optional(
            Schema.Literals(["None", "UserAbsence", "LowUsage"]),
          ),
          disconnectDelay: Schema.optional(Schema.String),
          noConnectDelay: Schema.optional(Schema.String),
          idleDelay: Schema.optional(Schema.String),
        }),
      ),
      connectionProfile: Schema.optional(
        Schema.Struct({
          webSshAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          webRdpAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          clientSshAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          clientRdpAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
        }),
      ),
      virtualMachineProfile: Schema.optional(
        Schema.Struct({
          createOption: Schema.Literals(["Image", "TemplateVM"]),
          imageReference: Schema.Struct({
            id: Schema.optional(Schema.String),
            offer: Schema.optional(Schema.String),
            publisher: Schema.optional(Schema.String),
            sku: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            exactVersion: Schema.optional(Schema.String),
          }),
          osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
          sku: Schema.Struct({
            name: Schema.String,
            tier: Schema.optional(
              Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
            ),
            size: Schema.optional(Schema.String),
            family: Schema.optional(Schema.String),
            capacity: Schema.optional(Schema.Number),
          }),
          additionalCapabilities: Schema.optional(
            Schema.Struct({
              installGpuDrivers: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
            }),
          ),
          usageQuota: Schema.String,
          useSharedPassword: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          adminUser: Schema.Struct({
            username: Schema.String,
            password: Schema.optional(SensitiveString),
          }),
          nonAdminUser: Schema.optional(
            Schema.Struct({
              username: Schema.String,
              password: Schema.optional(SensitiveString),
            }),
          ),
        }),
      ),
      securityProfile: Schema.optional(
        Schema.Struct({
          registrationCode: Schema.optional(Schema.String),
          openAccess: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        }),
      ),
      rosterProfile: Schema.optional(
        Schema.Struct({
          activeDirectoryGroupId: Schema.optional(Schema.String),
          ltiContextId: Schema.optional(Schema.String),
          lmsInstance: Schema.optional(Schema.String),
          ltiClientId: Schema.optional(Schema.String),
          ltiRosterEndpoint: Schema.optional(Schema.String),
        }),
      ),
      labPlanId: Schema.optional(Schema.String),
      title: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<LabsCreateOrUpdateInput>;

// Output Schema
export interface LabsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const LabsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LabsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a lab resource.
 *
 * Operation to create or update a lab resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 */
export const LabsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabsCreateOrUpdateInput,
  outputSchema: LabsCreateOrUpdateOutput,
}));
// Input Schema
export interface LabsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
}
export const LabsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<LabsDeleteInput>;

// Output Schema
export type LabsDeleteOutput = void;
export const LabsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LabsDeleteOutput>;

// The operation
/**
 * Deletes a lab resource.
 *
 * Operation to delete a lab resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 */
export const LabsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabsDeleteInput,
  outputSchema: LabsDeleteOutput,
}));
// Input Schema
export interface LabsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
}
export const LabsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<LabsGetInput>;

// Output Schema
export interface LabsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const LabsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<LabsGetOutput>;

// The operation
/**
 * Get a lab resource.
 *
 * Returns the properties of a lab resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 */
export const LabsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabsGetInput,
  outputSchema: LabsGetOutput,
}));
// Input Schema
export interface LabsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const LabsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<LabsListByResourceGroupInput>;

// Output Schema
export interface LabsListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const LabsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LabsListByResourceGroupOutput>;

// The operation
/**
 * Get all labs for a subscription and resource group.
 *
 * Returns a list of all labs in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const LabsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabsListByResourceGroupInput,
  outputSchema: LabsListByResourceGroupOutput,
}));
// Input Schema
export interface LabsListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
}
export const LabsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.LabServices/labs",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<LabsListBySubscriptionInput>;

// Output Schema
export interface LabsListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const LabsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LabsListBySubscriptionOutput>;

// The operation
/**
 * Get all labs for a subscription.
 *
 * Returns a list of all labs for a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - The filter to apply to the operation.
 */
export const LabsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabsListBySubscriptionInput,
  outputSchema: LabsListBySubscriptionOutput,
}));
// Input Schema
export interface LabsPublishInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
}
export const LabsPublishInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/publish",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<LabsPublishInput>;

// Output Schema
export type LabsPublishOutput = void;
export const LabsPublishOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LabsPublishOutput>;

// The operation
/**
 * Publish or re-publish a lab.
 *
 * Publish or re-publish a lab. This will create or update all lab resources, such as virtual machines.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 */
export const LabsPublish = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabsPublishInput,
  outputSchema: LabsPublishOutput,
}));
// Input Schema
export interface LabsSyncGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
}
export const LabsSyncGroupInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/syncGroup",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<LabsSyncGroupInput>;

// Output Schema
export type LabsSyncGroupOutput = void;
export const LabsSyncGroupOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LabsSyncGroupOutput>;

// The operation
/**
 * Manually sync the lab group.
 *
 * Action used to manually kick off an AAD group sync job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 */
export const LabsSyncGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabsSyncGroupInput,
  outputSchema: LabsSyncGroupOutput,
}));
// Input Schema
export interface LabsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  properties?: {
    autoShutdownProfile?: {
      shutdownOnDisconnect?: "Enabled" | "Disabled";
      shutdownWhenNotConnected?: "Enabled" | "Disabled";
      shutdownOnIdle?: "None" | "UserAbsence" | "LowUsage";
      disconnectDelay?: string;
      noConnectDelay?: string;
      idleDelay?: string;
    };
    connectionProfile?: {
      webSshAccess?: "Public" | "Private" | "None";
      webRdpAccess?: "Public" | "Private" | "None";
      clientSshAccess?: "Public" | "Private" | "None";
      clientRdpAccess?: "Public" | "Private" | "None";
    };
    virtualMachineProfile?: {
      createOption: "Image" | "TemplateVM";
      imageReference: {
        id?: string;
        offer?: string;
        publisher?: string;
        sku?: string;
        version?: string;
        exactVersion?: string;
      };
      osType?: "Windows" | "Linux";
      sku: {
        name: string;
        tier?: "Free" | "Basic" | "Standard" | "Premium";
        size?: string;
        family?: string;
        capacity?: number;
      };
      additionalCapabilities?: { installGpuDrivers?: "Enabled" | "Disabled" };
      usageQuota: string;
      useSharedPassword?: "Enabled" | "Disabled";
      adminUser: {
        username: string;
        password?: string | Redacted.Redacted<string>;
      };
      nonAdminUser?: {
        username: string;
        password?: string | Redacted.Redacted<string>;
      };
    };
    securityProfile?: {
      registrationCode?: string;
      openAccess?: "Enabled" | "Disabled";
    };
    rosterProfile?: {
      activeDirectoryGroupId?: string;
      ltiContextId?: string;
      lmsInstance?: string;
      ltiClientId?: string;
      ltiRosterEndpoint?: string;
    };
    labPlanId?: string;
    title?: string;
    description?: string;
  };
  tags?: string[];
}
export const LabsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      autoShutdownProfile: Schema.optional(
        Schema.Struct({
          shutdownOnDisconnect: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          shutdownWhenNotConnected: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          shutdownOnIdle: Schema.optional(
            Schema.Literals(["None", "UserAbsence", "LowUsage"]),
          ),
          disconnectDelay: Schema.optional(Schema.String),
          noConnectDelay: Schema.optional(Schema.String),
          idleDelay: Schema.optional(Schema.String),
        }),
      ),
      connectionProfile: Schema.optional(
        Schema.Struct({
          webSshAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          webRdpAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          clientSshAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
          clientRdpAccess: Schema.optional(
            Schema.Literals(["Public", "Private", "None"]),
          ),
        }),
      ),
      virtualMachineProfile: Schema.optional(
        Schema.Struct({
          createOption: Schema.Literals(["Image", "TemplateVM"]),
          imageReference: Schema.Struct({
            id: Schema.optional(Schema.String),
            offer: Schema.optional(Schema.String),
            publisher: Schema.optional(Schema.String),
            sku: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            exactVersion: Schema.optional(Schema.String),
          }),
          osType: Schema.optional(Schema.Literals(["Windows", "Linux"])),
          sku: Schema.Struct({
            name: Schema.String,
            tier: Schema.optional(
              Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
            ),
            size: Schema.optional(Schema.String),
            family: Schema.optional(Schema.String),
            capacity: Schema.optional(Schema.Number),
          }),
          additionalCapabilities: Schema.optional(
            Schema.Struct({
              installGpuDrivers: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
            }),
          ),
          usageQuota: Schema.String,
          useSharedPassword: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          adminUser: Schema.Struct({
            username: Schema.String,
            password: Schema.optional(SensitiveString),
          }),
          nonAdminUser: Schema.optional(
            Schema.Struct({
              username: Schema.String,
              password: Schema.optional(SensitiveString),
            }),
          ),
        }),
      ),
      securityProfile: Schema.optional(
        Schema.Struct({
          registrationCode: Schema.optional(Schema.String),
          openAccess: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        }),
      ),
      rosterProfile: Schema.optional(
        Schema.Struct({
          activeDirectoryGroupId: Schema.optional(Schema.String),
          ltiContextId: Schema.optional(Schema.String),
          lmsInstance: Schema.optional(Schema.String),
          ltiClientId: Schema.optional(Schema.String),
          ltiRosterEndpoint: Schema.optional(Schema.String),
        }),
      ),
      labPlanId: Schema.optional(Schema.String),
      title: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<LabsUpdateInput>;

// Output Schema
export interface LabsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const LabsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<LabsUpdateOutput>;

// The operation
/**
 * Update a lab resource.
 *
 * Operation to update a lab resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 */
export const LabsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LabsUpdateInput,
  outputSchema: LabsUpdateOutput,
}));
// Input Schema
export interface OperationResultsGetInput {
  subscriptionId: string;
  operationResultId: string;
}
export const OperationResultsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    operationResultId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.LabServices/operationResults/{operationResultId}",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<OperationResultsGetInput>;

// Output Schema
export interface OperationResultsGetOutput {
  id?: string;
  name?: string;
  status: "NotStarted" | "InProgress" | "Succeeded" | "Failed" | "Canceled";
  startTime?: string;
  endTime?: string;
  percentComplete?: number;
  error?: {
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
}
export const OperationResultsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.Literals([
      "NotStarted",
      "InProgress",
      "Succeeded",
      "Failed",
      "Canceled",
    ]),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    percentComplete: Schema.optional(Schema.Number),
    error: Schema.optional(
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
  }) as unknown as Schema.Codec<OperationResultsGetOutput>;

// The operation
/**
 * Get an azure operation result.
 *
 * Returns an azure operation result.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param operationResultId - The operation result ID / name.
 */
export const OperationResultsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationResultsGetInput,
  outputSchema: OperationResultsGetOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.LabServices/operations",
    apiVersion: "2023-06-07",
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
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
 * Get all operations
 *
 * Returns a list of all operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SchedulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  scheduleName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: {
    startAt?: string;
    stopAt?: string;
    recurrencePattern?: {
      frequency: "Daily" | "Weekly";
      weekDays?: (
        | "Sunday"
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
      )[];
      interval?: number;
      expirationDate: string;
    };
    timeZoneId?: string;
    notes?: string;
  };
}
export const SchedulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    scheduleName: Schema.String.pipe(T.PathParam()),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.Struct({
      startAt: Schema.optional(Schema.String),
      stopAt: Schema.optional(Schema.String),
      recurrencePattern: Schema.optional(
        Schema.Struct({
          frequency: Schema.Literals(["Daily", "Weekly"]),
          weekDays: Schema.optional(
            Schema.Array(
              Schema.Literals([
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ]),
            ),
          ),
          interval: Schema.optional(Schema.Number),
          expirationDate: Schema.String,
        }),
      ),
      timeZoneId: Schema.optional(Schema.String),
      notes: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/schedules/{scheduleName}",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<SchedulesCreateOrUpdateInput>;

// Output Schema
export interface SchedulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SchedulesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SchedulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a lab schedule.
 *
 * Operation to create or update a lab schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param scheduleName - The name of the schedule that uniquely identifies it within containing lab. Used in resource URIs.
 */
export const SchedulesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesCreateOrUpdateInput,
  outputSchema: SchedulesCreateOrUpdateOutput,
}));
// Input Schema
export interface SchedulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  scheduleName: string;
}
export const SchedulesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  scheduleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/schedules/{scheduleName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<SchedulesDeleteInput>;

// Output Schema
export type SchedulesDeleteOutput = void;
export const SchedulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SchedulesDeleteOutput>;

// The operation
/**
 * Deletes a schedule resource.
 *
 * Operation to delete a schedule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param scheduleName - The name of the schedule that uniquely identifies it within containing lab. Used in resource URIs.
 */
export const SchedulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesDeleteInput,
  outputSchema: SchedulesDeleteOutput,
}));
// Input Schema
export interface SchedulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  scheduleName: string;
}
export const SchedulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  scheduleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/schedules/{scheduleName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<SchedulesGetInput>;

// Output Schema
export interface SchedulesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SchedulesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SchedulesGetOutput>;

// The operation
/**
 * Get a lab Schedule.
 *
 * Returns the properties of a lab Schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param scheduleName - The name of the schedule that uniquely identifies it within containing lab. Used in resource URIs.
 */
export const SchedulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesGetInput,
  outputSchema: SchedulesGetOutput,
}));
// Input Schema
export interface SchedulesListByLabInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $filter?: string;
}
export const SchedulesListByLabInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/schedules",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<SchedulesListByLabInput>;

// Output Schema
export interface SchedulesListByLabOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SchedulesListByLabOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SchedulesListByLabOutput>;

// The operation
/**
 * Get all schedules for a lab.
 *
 * Returns a list of all schedules for a lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param $filter - The filter to apply to the operation.
 */
export const SchedulesListByLab = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesListByLabInput,
  outputSchema: SchedulesListByLabOutput,
}));
// Input Schema
export interface SchedulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  scheduleName: string;
  properties?: {
    startAt?: string;
    stopAt?: string;
    recurrencePattern?: {
      frequency: "Daily" | "Weekly";
      weekDays?: (
        | "Sunday"
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
      )[];
      interval?: number;
      expirationDate: string;
    };
    timeZoneId?: string;
    notes?: string;
  };
}
export const SchedulesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  scheduleName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      startAt: Schema.optional(Schema.String),
      stopAt: Schema.optional(Schema.String),
      recurrencePattern: Schema.optional(
        Schema.Struct({
          frequency: Schema.Literals(["Daily", "Weekly"]),
          weekDays: Schema.optional(
            Schema.Array(
              Schema.Literals([
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ]),
            ),
          ),
          interval: Schema.optional(Schema.Number),
          expirationDate: Schema.String,
        }),
      ),
      timeZoneId: Schema.optional(Schema.String),
      notes: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/schedules/{scheduleName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<SchedulesUpdateInput>;

// Output Schema
export interface SchedulesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SchedulesUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SchedulesUpdateOutput>;

// The operation
/**
 * Update a lab schedule.
 *
 * Operation to update a lab schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param scheduleName - The name of the schedule that uniquely identifies it within containing lab. Used in resource URIs.
 */
export const SchedulesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesUpdateInput,
  outputSchema: SchedulesUpdateOutput,
}));
// Input Schema
export interface SkusListInput {
  subscriptionId: string;
  $filter?: string;
}
export const SkusListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.LabServices/skus",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<SkusListInput>;

// Output Schema
export interface SkusListOutput {
  value?: {
    resourceType?: string;
    name?: string;
    tier?: "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: {
      default?: number;
      minimum?: number;
      maximum?: number;
      scaleType?: "None" | "Manual" | "Automatic";
    };
    capabilities?: { name?: string; value?: string }[];
    locations?: string[];
    costs?: { meterId?: string; quantity?: number; extendedUnit?: string }[];
    restrictions?: {
      type?: "Location";
      values?: string[];
      reasonCode?: "QuotaId" | "NotAvailableForSubscription";
    }[];
  }[];
  nextLink?: string;
}
export const SkusListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.Literals(["Standard", "Premium"])),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(
          Schema.Struct({
            default: Schema.optional(Schema.Number),
            minimum: Schema.optional(Schema.Number),
            maximum: Schema.optional(Schema.Number),
            scaleType: Schema.optional(
              Schema.Literals(["None", "Manual", "Automatic"]),
            ),
          }),
        ),
        capabilities: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        locations: Schema.optional(Schema.Array(Schema.String)),
        costs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              meterId: Schema.optional(Schema.String),
              quantity: Schema.optional(Schema.Number),
              extendedUnit: Schema.optional(Schema.String),
            }),
          ),
        ),
        restrictions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.Literals(["Location"])),
              values: Schema.optional(Schema.Array(Schema.String)),
              reasonCode: Schema.optional(
                Schema.Literals(["QuotaId", "NotAvailableForSubscription"]),
              ),
            }),
          ),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SkusListOutput>;

// The operation
/**
 * Gets the Azure Lab Services resource SKUs.
 *
 * Returns a list of Azure Lab Services resource SKUs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - The filter to apply to the operation.
 */
export const SkusList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SkusListInput,
  outputSchema: SkusListOutput,
}));
// Input Schema
export interface UsagesListByLocationInput {
  subscriptionId: string;
  location: string;
  $filter?: string;
}
export const UsagesListByLocationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.LabServices/locations/{location}/usages",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<UsagesListByLocationInput>;

// Output Schema
export interface UsagesListByLocationOutput {
  value?: {
    currentValue?: number;
    limit?: number;
    unit?: "Count";
    name?: { localizedValue?: string; skuInstances?: string[]; value?: string };
    id?: string;
  }[];
  nextLink?: string;
}
export const UsagesListByLocationOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          currentValue: Schema.optional(Schema.Number),
          limit: Schema.optional(Schema.Number),
          unit: Schema.optional(Schema.Literals(["Count"])),
          name: Schema.optional(
            Schema.Struct({
              localizedValue: Schema.optional(Schema.String),
              skuInstances: Schema.optional(Schema.Array(Schema.String)),
              value: Schema.optional(Schema.String),
            }),
          ),
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UsagesListByLocationOutput>;

// The operation
/**
 * Gets the list of usages.
 *
 * Returns list of usage per SKU family for the specified subscription in the specified region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location name.
 * @param $filter - The filter to apply to the operation.
 */
export const UsagesListByLocation = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsagesListByLocationInput,
  outputSchema: UsagesListByLocationOutput,
}));
// Input Schema
export interface UsersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: { additionalUsageQuota?: string };
}
export const UsersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.Struct({
      additionalUsageQuota: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users/{userName}",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<UsersCreateOrUpdateInput>;

// Output Schema
export interface UsersCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const UsersCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UsersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a lab user.
 *
 * Operation to create or update a lab user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param userName - The name of the user that uniquely identifies it within containing lab. Used in resource URIs.
 */
export const UsersCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersCreateOrUpdateInput,
  outputSchema: UsersCreateOrUpdateOutput,
}));
// Input Schema
export interface UsersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
}
export const UsersDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users/{userName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<UsersDeleteInput>;

// Output Schema
export type UsersDeleteOutput = void;
export const UsersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersDeleteOutput>;

// The operation
/**
 * Deletes a user resource.
 *
 * Operation to delete a user resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param userName - The name of the user that uniquely identifies it within containing lab. Used in resource URIs.
 */
export const UsersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersDeleteInput,
  outputSchema: UsersDeleteOutput,
}));
// Input Schema
export interface UsersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
}
export const UsersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users/{userName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<UsersGetInput>;

// Output Schema
export interface UsersGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const UsersGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UsersGetOutput>;

// The operation
/**
 * Get a lab user.
 *
 * Returns the properties of a lab user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param userName - The name of the user that uniquely identifies it within containing lab. Used in resource URIs.
 */
export const UsersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersGetInput,
  outputSchema: UsersGetOutput,
}));
// Input Schema
export interface UsersInviteInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  text?: string;
}
export const UsersInviteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  text: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users/{userName}/invite",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<UsersInviteInput>;

// Output Schema
export type UsersInviteOutput = void;
export const UsersInviteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersInviteOutput>;

// The operation
/**
 * Invite a user to a lab.
 *
 * Operation to invite a user to a lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param userName - The name of the user that uniquely identifies it within containing lab. Used in resource URIs.
 */
export const UsersInvite = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersInviteInput,
  outputSchema: UsersInviteOutput,
}));
// Input Schema
export interface UsersListByLabInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $filter?: string;
}
export const UsersListByLabInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<UsersListByLabInput>;

// Output Schema
export interface UsersListByLabOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const UsersListByLabOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UsersListByLabOutput>;

// The operation
/**
 * Get all users for a lab.
 *
 * Returns a list of all users for a lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param $filter - The filter to apply to the operation.
 */
export const UsersListByLab = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersListByLabInput,
  outputSchema: UsersListByLabOutput,
}));
// Input Schema
export interface UsersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  userName: string;
  properties?: { additionalUsageQuota?: string };
}
export const UsersUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  labName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      additionalUsageQuota: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users/{userName}",
    apiVersion: "2023-06-07",
  }),
) as unknown as Schema.Codec<UsersUpdateInput>;

// Output Schema
export interface UsersUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const UsersUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UsersUpdateOutput>;

// The operation
/**
 * Update a lab user.
 *
 * Operation to update a lab user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param userName - The name of the user that uniquely identifies it within containing lab. Used in resource URIs.
 */
export const UsersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersUpdateInput,
  outputSchema: UsersUpdateOutput,
}));
// Input Schema
export interface VirtualMachinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
}
export const VirtualMachinesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesGetInput>;

// Output Schema
export interface VirtualMachinesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const VirtualMachinesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualMachinesGetOutput>;

// The operation
/**
 * Get a lab virtual machine.
 *
 * Returns the properties for a lab virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param virtualMachineName - The ID of the virtual machine that uniquely identifies it within the containing lab. Used in resource URIs.
 */
export const VirtualMachinesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesGetInput,
  outputSchema: VirtualMachinesGetOutput,
}));
// Input Schema
export interface VirtualMachinesListByLabInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  $filter?: string;
}
export const VirtualMachinesListByLabInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesListByLabInput>;

// Output Schema
export interface VirtualMachinesListByLabOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const VirtualMachinesListByLabOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualMachinesListByLabOutput>;

// The operation
/**
 * Get all virtual machines for a lab.
 *
 * Returns a list of all virtual machines for a lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param $filter - The filter to apply to the operation.
 */
export const VirtualMachinesListByLab = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesListByLabInput,
  outputSchema: VirtualMachinesListByLabOutput,
}));
// Input Schema
export interface VirtualMachinesRedeployInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
}
export const VirtualMachinesRedeployInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}/redeploy",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesRedeployInput>;

// Output Schema
export type VirtualMachinesRedeployOutput = void;
export const VirtualMachinesRedeployOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesRedeployOutput>;

// The operation
/**
 * Redeploy a lab virtual machine to a different compute node. For troubleshooting connectivity.
 *
 * Action to redeploy a lab virtual machine to a different compute node. For troubleshooting connectivity.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param virtualMachineName - The ID of the virtual machine that uniquely identifies it within the containing lab. Used in resource URIs.
 */
export const VirtualMachinesRedeploy = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesRedeployInput,
  outputSchema: VirtualMachinesRedeployOutput,
}));
// Input Schema
export interface VirtualMachinesReimageInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
}
export const VirtualMachinesReimageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}/reimage",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesReimageInput>;

// Output Schema
export type VirtualMachinesReimageOutput = void;
export const VirtualMachinesReimageOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesReimageOutput>;

// The operation
/**
 * Re-image a lab virtual machine.
 *
 * Re-image a lab virtual machine. The virtual machine will be deleted and recreated using the latest published snapshot of the reference environment of the lab.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param virtualMachineName - The ID of the virtual machine that uniquely identifies it within the containing lab. Used in resource URIs.
 */
export const VirtualMachinesReimage = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesReimageInput,
  outputSchema: VirtualMachinesReimageOutput,
}));
// Input Schema
export interface VirtualMachinesResetPasswordInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
  username: string;
  password: string | Redacted.Redacted<string>;
}
export const VirtualMachinesResetPasswordInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
    username: Schema.String,
    password: SensitiveString,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}/resetPassword",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesResetPasswordInput>;

// Output Schema
export type VirtualMachinesResetPasswordOutput = void;
export const VirtualMachinesResetPasswordOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesResetPasswordOutput>;

// The operation
/**
 * Reset a lab virtual machine password.
 *
 * Resets a lab virtual machine password.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param virtualMachineName - The ID of the virtual machine that uniquely identifies it within the containing lab. Used in resource URIs.
 */
export const VirtualMachinesResetPassword =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesResetPasswordInput,
    outputSchema: VirtualMachinesResetPasswordOutput,
  }));
// Input Schema
export interface VirtualMachinesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
}
export const VirtualMachinesStartInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}/start",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesStartInput>;

// Output Schema
export type VirtualMachinesStartOutput = void;
export const VirtualMachinesStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesStartOutput>;

// The operation
/**
 * Start a lab virtual machine.
 *
 * Action to start a lab virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param virtualMachineName - The ID of the virtual machine that uniquely identifies it within the containing lab. Used in resource URIs.
 */
export const VirtualMachinesStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesStartInput,
  outputSchema: VirtualMachinesStartOutput,
}));
// Input Schema
export interface VirtualMachinesStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  labName: string;
  virtualMachineName: string;
}
export const VirtualMachinesStopInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    labName: Schema.String.pipe(T.PathParam()),
    virtualMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}/stop",
      apiVersion: "2023-06-07",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesStopInput>;

// Output Schema
export type VirtualMachinesStopOutput = void;
export const VirtualMachinesStopOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesStopOutput>;

// The operation
/**
 * Stop a lab virtual machine.
 *
 * Action to stop a lab virtual machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param labName - The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
 * @param virtualMachineName - The ID of the virtual machine that uniquely identifies it within the containing lab. Used in resource URIs.
 */
export const VirtualMachinesStop = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesStopInput,
  outputSchema: VirtualMachinesStopOutput,
}));
