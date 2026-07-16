/**
 * Azure Vmware API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString, SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AddonsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  addonName: string;
  properties?: {
    addonType: "SRM" | "VR" | "HCX" | "Arc";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Cancelled"
      | "Building"
      | "Deleting"
      | "Updating";
  };
}
export const AddonsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    addonName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        addonType: Schema.Literals(["SRM", "VR", "HCX", "Arc"]),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Cancelled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<AddonsCreateOrUpdateInput>;

// Output Schema
export interface AddonsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const AddonsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AddonsCreateOrUpdateOutput>;

// The operation
/**
 * Create a Addon
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param addonName - Name of the addon.
 */
export const AddonsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddonsCreateOrUpdateInput,
  outputSchema: AddonsCreateOrUpdateOutput,
}));
// Input Schema
export interface AddonsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  addonName: string;
}
export const AddonsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  addonName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<AddonsDeleteInput>;

// Output Schema
export type AddonsDeleteOutput = void;
export const AddonsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AddonsDeleteOutput>;

// The operation
/**
 * Delete a Addon
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param addonName - Name of the addon.
 */
export const AddonsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddonsDeleteInput,
  outputSchema: AddonsDeleteOutput,
}));
// Input Schema
export interface AddonsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  addonName: string;
}
export const AddonsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  addonName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<AddonsGetInput>;

// Output Schema
export interface AddonsGetOutput {
  id?: string;
  name?: string;
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
export const AddonsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<AddonsGetOutput>;

// The operation
/**
 * Get a Addon
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param addonName - Name of the addon.
 */
export const AddonsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddonsGetInput,
  outputSchema: AddonsGetOutput,
}));
// Input Schema
export interface AddonsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const AddonsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<AddonsListInput>;

// Output Schema
export interface AddonsListOutput {
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
export const AddonsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AddonsListOutput>;

// The operation
/**
 * List Addon resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const AddonsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AddonsListInput,
  outputSchema: AddonsListOutput,
}));
// Input Schema
export interface AuthorizationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  authorizationName: string;
  properties?: {
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Updating";
    expressRouteAuthorizationId?: string;
    expressRouteAuthorizationKey?: string;
    expressRouteId?: string;
  };
}
export const AuthorizationsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    authorizationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Updating"]),
        ),
        expressRouteAuthorizationId: Schema.optional(Schema.String),
        expressRouteAuthorizationKey: Schema.optional(Schema.String),
        expressRouteId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<AuthorizationsCreateOrUpdateInput>;

// Output Schema
export interface AuthorizationsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const AuthorizationsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AuthorizationsCreateOrUpdateOutput>;

// The operation
/**
 * Create a ExpressRouteAuthorization
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param authorizationName - Name of the ExpressRoute Circuit Authorization
 */
export const AuthorizationsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationsCreateOrUpdateInput,
    outputSchema: AuthorizationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AuthorizationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  authorizationName: string;
}
export const AuthorizationsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    authorizationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<AuthorizationsDeleteInput>;

// Output Schema
export type AuthorizationsDeleteOutput = void;
export const AuthorizationsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AuthorizationsDeleteOutput>;

// The operation
/**
 * Delete a ExpressRouteAuthorization
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param authorizationName - Name of the ExpressRoute Circuit Authorization
 */
export const AuthorizationsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AuthorizationsDeleteInput,
  outputSchema: AuthorizationsDeleteOutput,
}));
// Input Schema
export interface AuthorizationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  authorizationName: string;
}
export const AuthorizationsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  authorizationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<AuthorizationsGetInput>;

// Output Schema
export interface AuthorizationsGetOutput {
  id?: string;
  name?: string;
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
export const AuthorizationsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AuthorizationsGetOutput>;

// The operation
/**
 * Get a ExpressRouteAuthorization
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param authorizationName - Name of the ExpressRoute Circuit Authorization
 */
export const AuthorizationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AuthorizationsGetInput,
  outputSchema: AuthorizationsGetOutput,
}));
// Input Schema
export interface AuthorizationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const AuthorizationsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<AuthorizationsListInput>;

// Output Schema
export interface AuthorizationsListOutput {
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
export const AuthorizationsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AuthorizationsListOutput>;

// The operation
/**
 * List ExpressRouteAuthorization resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const AuthorizationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AuthorizationsListInput,
  outputSchema: AuthorizationsListOutput,
}));
// Input Schema
export interface CloudLinksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  cloudLinkName: string;
  properties?: {
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    status?: "Active" | "Building" | "Deleting" | "Failed" | "Disconnected";
    linkedCloud?: string;
  };
}
export const CloudLinksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    cloudLinkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Active",
            "Building",
            "Deleting",
            "Failed",
            "Disconnected",
          ]),
        ),
        linkedCloud: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<CloudLinksCreateOrUpdateInput>;

// Output Schema
export interface CloudLinksCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const CloudLinksCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CloudLinksCreateOrUpdateOutput>;

// The operation
/**
 * Create a CloudLink
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param cloudLinkName - Name of the cloud link.
 */
export const CloudLinksCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudLinksCreateOrUpdateInput,
  outputSchema: CloudLinksCreateOrUpdateOutput,
}));
// Input Schema
export interface CloudLinksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  cloudLinkName: string;
}
export const CloudLinksDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  cloudLinkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<CloudLinksDeleteInput>;

// Output Schema
export type CloudLinksDeleteOutput = void;
export const CloudLinksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CloudLinksDeleteOutput>;

// The operation
/**
 * Delete a CloudLink
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param cloudLinkName - Name of the cloud link.
 */
export const CloudLinksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudLinksDeleteInput,
  outputSchema: CloudLinksDeleteOutput,
}));
// Input Schema
export interface CloudLinksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  cloudLinkName: string;
}
export const CloudLinksGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  cloudLinkName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<CloudLinksGetInput>;

// Output Schema
export interface CloudLinksGetOutput {
  id?: string;
  name?: string;
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
export const CloudLinksGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<CloudLinksGetOutput>;

// The operation
/**
 * Get a CloudLink
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param cloudLinkName - Name of the cloud link.
 */
export const CloudLinksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudLinksGetInput,
  outputSchema: CloudLinksGetOutput,
}));
// Input Schema
export interface CloudLinksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const CloudLinksListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<CloudLinksListInput>;

// Output Schema
export interface CloudLinksListOutput {
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
export const CloudLinksListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CloudLinksListOutput>;

// The operation
/**
 * List CloudLink resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const CloudLinksList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudLinksListInput,
  outputSchema: CloudLinksListOutput,
}));
// Input Schema
export interface ClustersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  properties?: {
    clusterSize?: number;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Cancelled"
      | "Deleting"
      | "Updating";
    clusterId?: number;
    hosts?: string[];
    vsanDatastoreName?: string;
  };
  sku: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
}
export const ClustersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        clusterSize: Schema.optional(Schema.Number),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Cancelled",
            "Deleting",
            "Updating",
          ]),
        ),
        clusterId: Schema.optional(Schema.Number),
        hosts: Schema.optional(Schema.Array(Schema.String)),
        vsanDatastoreName: Schema.optional(Schema.String),
      }),
    ),
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(
        Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
      ),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ClustersCreateOrUpdateInput>;

// Output Schema
export interface ClustersCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ClustersCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ClustersCreateOrUpdateOutput>;

// The operation
/**
 * Create a Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const ClustersCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersCreateOrUpdateInput,
  outputSchema: ClustersCreateOrUpdateOutput,
}));
// Input Schema
export interface ClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
}
export const ClustersDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ClustersDeleteInput>;

// Output Schema
export type ClustersDeleteOutput = void;
export const ClustersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeleteOutput>;

// The operation
/**
 * Delete a Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const ClustersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export interface ClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
}
export const ClustersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ClustersGetInput>;

// Output Schema
export interface ClustersGetOutput {
  id?: string;
  name?: string;
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
export const ClustersGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ClustersGetOutput>;

// The operation
/**
 * Get a Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const ClustersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export interface ClustersListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const ClustersListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ClustersListInput>;

// Output Schema
export interface ClustersListOutput {
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
export const ClustersListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ClustersListOutput>;

// The operation
/**
 * List Cluster resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const ClustersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersListInput,
  outputSchema: ClustersListOutput,
}));
// Input Schema
export interface ClustersListZonesInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
}
export const ClustersListZonesInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/listZones",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ClustersListZonesInput>;

// Output Schema
export interface ClustersListZonesOutput {
  zones?: { hosts?: string[]; zone?: string }[];
}
export const ClustersListZonesOutput =
  /*@__PURE__*/ Schema.Struct({
    zones: Schema.optional(
      Schema.Array(
        Schema.Struct({
          hosts: Schema.optional(Schema.Array(Schema.String)),
          zone: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ClustersListZonesOutput>;

// The operation
/**
 * List hosts by zone in a cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const ClustersListZones = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersListZonesInput,
  outputSchema: ClustersListZonesOutput,
}));
// Input Schema
export interface ClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  properties?: { clusterSize?: number; hosts?: string[] };
}
export const ClustersUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(
        Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
      ),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      clusterSize: Schema.optional(Schema.Number),
      hosts: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ClustersUpdateInput>;

// Output Schema
export interface ClustersUpdateOutput {
  id?: string;
  name?: string;
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
export const ClustersUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ClustersUpdateOutput>;

// The operation
/**
 * Update a Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const ClustersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export interface DatastoresCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  datastoreName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Cancelled"
      | "Pending"
      | "Creating"
      | "Updating"
      | "Deleting";
    netAppVolume?: { id: string };
    diskPoolVolume?: {
      targetId: string;
      lunName: string;
      mountOption?: "MOUNT" | "ATTACH";
      path?: string;
    };
    elasticSanVolume?: { targetId: string };
    pureStorageVolume?: { storagePoolId: string; sizeGb: number };
    status?:
      | "Unknown"
      | "Accessible"
      | "Inaccessible"
      | "Attached"
      | "Detached"
      | "LostCommunication"
      | "DeadOrError";
  };
}
export const DatastoresCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    datastoreName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Cancelled",
            "Pending",
            "Creating",
            "Updating",
            "Deleting",
          ]),
        ),
        netAppVolume: Schema.optional(
          Schema.Struct({
            id: Schema.String,
          }),
        ),
        diskPoolVolume: Schema.optional(
          Schema.Struct({
            targetId: Schema.String,
            lunName: Schema.String,
            mountOption: Schema.optional(Schema.Literals(["MOUNT", "ATTACH"])),
            path: Schema.optional(Schema.String),
          }),
        ),
        elasticSanVolume: Schema.optional(
          Schema.Struct({
            targetId: Schema.String,
          }),
        ),
        pureStorageVolume: Schema.optional(
          Schema.Struct({
            storagePoolId: Schema.String,
            sizeGb: Schema.Number,
          }),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Accessible",
            "Inaccessible",
            "Attached",
            "Detached",
            "LostCommunication",
            "DeadOrError",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<DatastoresCreateOrUpdateInput>;

// Output Schema
export interface DatastoresCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const DatastoresCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DatastoresCreateOrUpdateOutput>;

// The operation
/**
 * Create a Datastore
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param datastoreName - Name of the datastore
 */
export const DatastoresCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatastoresCreateOrUpdateInput,
  outputSchema: DatastoresCreateOrUpdateOutput,
}));
// Input Schema
export interface DatastoresDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  datastoreName: string;
}
export const DatastoresDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  datastoreName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<DatastoresDeleteInput>;

// Output Schema
export type DatastoresDeleteOutput = void;
export const DatastoresDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DatastoresDeleteOutput>;

// The operation
/**
 * Delete a Datastore
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param datastoreName - Name of the datastore
 */
export const DatastoresDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatastoresDeleteInput,
  outputSchema: DatastoresDeleteOutput,
}));
// Input Schema
export interface DatastoresGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  datastoreName: string;
}
export const DatastoresGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  datastoreName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<DatastoresGetInput>;

// Output Schema
export interface DatastoresGetOutput {
  id?: string;
  name?: string;
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
export const DatastoresGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<DatastoresGetOutput>;

// The operation
/**
 * Get a Datastore
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param datastoreName - Name of the datastore
 */
export const DatastoresGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatastoresGetInput,
  outputSchema: DatastoresGetOutput,
}));
// Input Schema
export interface DatastoresListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
}
export const DatastoresListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<DatastoresListInput>;

// Output Schema
export interface DatastoresListOutput {
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
export const DatastoresListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DatastoresListOutput>;

// The operation
/**
 * List Datastore resources by Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const DatastoresList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DatastoresListInput,
  outputSchema: DatastoresListOutput,
}));
// Input Schema
export interface GlobalReachConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  globalReachConnectionName: string;
  properties?: {
    provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Updating";
    addressPrefix?: string;
    authorizationKey?: string;
    circuitConnectionStatus?: "Connected" | "Connecting" | "Disconnected";
    peerExpressRouteCircuit?: string;
    expressRouteId?: string;
  };
}
export const GlobalReachConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    globalReachConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled", "Updating"]),
        ),
        addressPrefix: Schema.optional(Schema.String),
        authorizationKey: Schema.optional(Schema.String),
        circuitConnectionStatus: Schema.optional(
          Schema.Literals(["Connected", "Connecting", "Disconnected"]),
        ),
        peerExpressRouteCircuit: Schema.optional(Schema.String),
        expressRouteId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GlobalReachConnectionsCreateOrUpdateInput>;

// Output Schema
export interface GlobalReachConnectionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const GlobalReachConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GlobalReachConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Create a GlobalReachConnection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param globalReachConnectionName - Name of the global reach connection
 */
export const GlobalReachConnectionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GlobalReachConnectionsCreateOrUpdateInput,
    outputSchema: GlobalReachConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface GlobalReachConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  globalReachConnectionName: string;
}
export const GlobalReachConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    globalReachConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GlobalReachConnectionsDeleteInput>;

// Output Schema
export type GlobalReachConnectionsDeleteOutput = void;
export const GlobalReachConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GlobalReachConnectionsDeleteOutput>;

// The operation
/**
 * Delete a GlobalReachConnection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param globalReachConnectionName - Name of the global reach connection
 */
export const GlobalReachConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GlobalReachConnectionsDeleteInput,
    outputSchema: GlobalReachConnectionsDeleteOutput,
  }));
// Input Schema
export interface GlobalReachConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  globalReachConnectionName: string;
}
export const GlobalReachConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    globalReachConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GlobalReachConnectionsGetInput>;

// Output Schema
export interface GlobalReachConnectionsGetOutput {
  id?: string;
  name?: string;
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
export const GlobalReachConnectionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GlobalReachConnectionsGetOutput>;

// The operation
/**
 * Get a GlobalReachConnection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param globalReachConnectionName - Name of the global reach connection
 */
export const GlobalReachConnectionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: GlobalReachConnectionsGetInput,
  outputSchema: GlobalReachConnectionsGetOutput,
}));
// Input Schema
export interface GlobalReachConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const GlobalReachConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GlobalReachConnectionsListInput>;

// Output Schema
export interface GlobalReachConnectionsListOutput {
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
export const GlobalReachConnectionsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GlobalReachConnectionsListOutput>;

// The operation
/**
 * List GlobalReachConnection resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const GlobalReachConnectionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: GlobalReachConnectionsListInput,
  outputSchema: GlobalReachConnectionsListOutput,
}));
// Input Schema
export interface HcxEnterpriseSitesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  hcxEnterpriseSiteName: string;
  properties?: {
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
    activationKey?: string;
    status?: "Available" | "Consumed" | "Deactivated" | "Deleted";
  };
}
export const HcxEnterpriseSitesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    hcxEnterpriseSiteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
        activationKey: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals(["Available", "Consumed", "Deactivated", "Deleted"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<HcxEnterpriseSitesCreateOrUpdateInput>;

// Output Schema
export interface HcxEnterpriseSitesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const HcxEnterpriseSitesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<HcxEnterpriseSitesCreateOrUpdateOutput>;

// The operation
/**
 * Create a HcxEnterpriseSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param hcxEnterpriseSiteName - Name of the HCX Enterprise Site
 */
export const HcxEnterpriseSitesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: HcxEnterpriseSitesCreateOrUpdateInput,
    outputSchema: HcxEnterpriseSitesCreateOrUpdateOutput,
  }));
// Input Schema
export interface HcxEnterpriseSitesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  hcxEnterpriseSiteName: string;
}
export const HcxEnterpriseSitesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    hcxEnterpriseSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<HcxEnterpriseSitesDeleteInput>;

// Output Schema
export type HcxEnterpriseSitesDeleteOutput = void;
export const HcxEnterpriseSitesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<HcxEnterpriseSitesDeleteOutput>;

// The operation
/**
 * Delete a HcxEnterpriseSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param hcxEnterpriseSiteName - Name of the HCX Enterprise Site
 */
export const HcxEnterpriseSitesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: HcxEnterpriseSitesDeleteInput,
  outputSchema: HcxEnterpriseSitesDeleteOutput,
}));
// Input Schema
export interface HcxEnterpriseSitesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  hcxEnterpriseSiteName: string;
}
export const HcxEnterpriseSitesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    hcxEnterpriseSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<HcxEnterpriseSitesGetInput>;

// Output Schema
export interface HcxEnterpriseSitesGetOutput {
  id?: string;
  name?: string;
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
export const HcxEnterpriseSitesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<HcxEnterpriseSitesGetOutput>;

// The operation
/**
 * Get a HcxEnterpriseSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param hcxEnterpriseSiteName - Name of the HCX Enterprise Site
 */
export const HcxEnterpriseSitesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: HcxEnterpriseSitesGetInput,
  outputSchema: HcxEnterpriseSitesGetOutput,
}));
// Input Schema
export interface HcxEnterpriseSitesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const HcxEnterpriseSitesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<HcxEnterpriseSitesListInput>;

// Output Schema
export interface HcxEnterpriseSitesListOutput {
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
export const HcxEnterpriseSitesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<HcxEnterpriseSitesListOutput>;

// The operation
/**
 * List HcxEnterpriseSite resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const HcxEnterpriseSitesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: HcxEnterpriseSitesListInput,
  outputSchema: HcxEnterpriseSitesListOutput,
}));
// Input Schema
export interface HostsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  hostId: string;
}
export const HostsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  hostId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/hosts/{hostId}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<HostsGetInput>;

// Output Schema
export interface HostsGetOutput {
  id?: string;
  name?: string;
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
export const HostsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<HostsGetOutput>;

// The operation
/**
 * Get a Host
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param hostId - The host identifier.
 */
export const HostsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: HostsGetInput,
  outputSchema: HostsGetOutput,
}));
// Input Schema
export interface HostsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
}
export const HostsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/hosts",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<HostsListInput>;

// Output Schema
export interface HostsListOutput {
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
export const HostsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<HostsListOutput>;

// The operation
/**
 * List Host resources by Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const HostsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: HostsListInput,
  outputSchema: HostsListOutput,
}));
// Input Schema
export interface IscsiPathsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Building"
      | "Deleting"
      | "Updating";
    networkBlock: string;
  };
}
export const IscsiPathsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Pending",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        networkBlock: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IscsiPathsCreateOrUpdateInput>;

// Output Schema
export interface IscsiPathsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const IscsiPathsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<IscsiPathsCreateOrUpdateOutput>;

// The operation
/**
 * Create a IscsiPath
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const IscsiPathsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IscsiPathsCreateOrUpdateInput,
  outputSchema: IscsiPathsCreateOrUpdateOutput,
}));
// Input Schema
export interface IscsiPathsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const IscsiPathsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<IscsiPathsDeleteInput>;

// Output Schema
export type IscsiPathsDeleteOutput = void;
export const IscsiPathsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IscsiPathsDeleteOutput>;

// The operation
/**
 * Delete a IscsiPath
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const IscsiPathsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IscsiPathsDeleteInput,
  outputSchema: IscsiPathsDeleteOutput,
}));
// Input Schema
export interface IscsiPathsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const IscsiPathsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<IscsiPathsGetInput>;

// Output Schema
export interface IscsiPathsGetOutput {
  id?: string;
  name?: string;
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
export const IscsiPathsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<IscsiPathsGetOutput>;

// The operation
/**
 * Get a IscsiPath
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const IscsiPathsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IscsiPathsGetInput,
  outputSchema: IscsiPathsGetOutput,
}));
// Input Schema
export interface IscsiPathsListByPrivateCloudInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const IscsiPathsListByPrivateCloudInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<IscsiPathsListByPrivateCloudInput>;

// Output Schema
export interface IscsiPathsListByPrivateCloudOutput {
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
export const IscsiPathsListByPrivateCloudOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<IscsiPathsListByPrivateCloudOutput>;

// The operation
/**
 * List IscsiPath resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const IscsiPathsListByPrivateCloud =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IscsiPathsListByPrivateCloudInput,
    outputSchema: IscsiPathsListByPrivateCloudOutput,
  }));
// Input Schema
export interface LicensesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  licenseName: "VmwareFirewall";
  properties?: {
    kind: "VmwareFirewall";
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const LicensesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    licenseName: Schema.Literals(["VmwareFirewall"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        kind: Schema.Literals(["VmwareFirewall"]),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/licenses/{licenseName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<LicensesCreateOrUpdateInput>;

// Output Schema
export interface LicensesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const LicensesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<LicensesCreateOrUpdateOutput>;

// The operation
/**
 * Create a License
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param licenseName - Name of the license.
 */
export const LicensesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LicensesCreateOrUpdateInput,
  outputSchema: LicensesCreateOrUpdateOutput,
}));
// Input Schema
export interface LicensesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  licenseName: "VmwareFirewall";
}
export const LicensesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  licenseName: Schema.Literals(["VmwareFirewall"]).pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/licenses/{licenseName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<LicensesDeleteInput>;

// Output Schema
export type LicensesDeleteOutput = void;
export const LicensesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LicensesDeleteOutput>;

// The operation
/**
 * Delete a License
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param licenseName - Name of the license.
 */
export const LicensesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: LicensesDeleteInput,
  outputSchema: LicensesDeleteOutput,
}));
// Input Schema
export interface LicensesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  licenseName: "VmwareFirewall";
}
export const LicensesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  licenseName: Schema.Literals(["VmwareFirewall"]).pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/licenses/{licenseName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<LicensesGetInput>;

// Output Schema
export interface LicensesGetOutput {
  id?: string;
  name?: string;
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
export const LicensesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<LicensesGetOutput>;

// The operation
/**
 * Get a License
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param licenseName - Name of the license.
 */
export const LicensesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: LicensesGetInput,
  outputSchema: LicensesGetOutput,
}));
// Input Schema
export interface LicensesGetPropertiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  licenseName: "VmwareFirewall";
}
export const LicensesGetPropertiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    licenseName: Schema.Literals(["VmwareFirewall"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/licenses/{licenseName}/getProperties",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<LicensesGetPropertiesInput>;

// Output Schema
export interface LicensesGetPropertiesOutput {
  kind: "VmwareFirewall";
  provisioningState?: "Succeeded" | "Failed" | "Canceled";
}
export const LicensesGetPropertiesOutput =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.Literals(["VmwareFirewall"]),
    provisioningState: Schema.optional(
      Schema.Literals(["Succeeded", "Failed", "Canceled"]),
    ),
  }) as unknown as Schema.Codec<LicensesGetPropertiesOutput>;

// The operation
/**
 * Just like ArmResourceActionSync, but with no request body.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param licenseName - Name of the license.
 */
export const LicensesGetProperties = /*@__PURE__*/ API.make(() => ({
  inputSchema: LicensesGetPropertiesInput,
  outputSchema: LicensesGetPropertiesOutput,
}));
// Input Schema
export interface LicensesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const LicensesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/licenses",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<LicensesListInput>;

// Output Schema
export interface LicensesListOutput {
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
export const LicensesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<LicensesListOutput>;

// The operation
/**
 * List License resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const LicensesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: LicensesListInput,
  outputSchema: LicensesListOutput,
}));
// Input Schema
export interface LocationsCheckQuotaAvailabilityInput {
  subscriptionId: string;
  location: string;
}
export const LocationsCheckQuotaAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkQuotaAvailability",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<LocationsCheckQuotaAvailabilityInput>;

// Output Schema
export interface LocationsCheckQuotaAvailabilityOutput {
  hostsRemaining?: Record<string, number>;
  quotaEnabled?: "Enabled" | "Disabled";
}
export const LocationsCheckQuotaAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    hostsRemaining: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    quotaEnabled: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  }) as unknown as Schema.Codec<LocationsCheckQuotaAvailabilityOutput>;

// The operation
/**
 * Return quota for subscription by region
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const LocationsCheckQuotaAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LocationsCheckQuotaAvailabilityInput,
    outputSchema: LocationsCheckQuotaAvailabilityOutput,
  }));
// Input Schema
export interface LocationsCheckTrialAvailabilityInput {
  subscriptionId: string;
  location: string;
  name: string;
  tier?: "Free" | "Basic" | "Standard" | "Premium";
  size?: string;
  family?: string;
  capacity?: number;
}
export const LocationsCheckTrialAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    tier: Schema.optional(
      Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
    ),
    size: Schema.optional(Schema.String),
    family: Schema.optional(Schema.String),
    capacity: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkTrialAvailability",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<LocationsCheckTrialAvailabilityInput>;

// Output Schema
export interface LocationsCheckTrialAvailabilityOutput {
  status?: "TrialAvailable" | "TrialUsed" | "TrialDisabled";
  availableHosts?: number;
}
export const LocationsCheckTrialAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals(["TrialAvailable", "TrialUsed", "TrialDisabled"]),
    ),
    availableHosts: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<LocationsCheckTrialAvailabilityOutput>;

// The operation
/**
 * Return trial status for subscription by region
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param name - The name of the SKU. E.g. P3. It is typically a letter+number code
 * @param size - The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
 * @param family - If the service has different generations of hardware, for the same SKU, then that can be captured here.
 * @param capacity - If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
 */
export const LocationsCheckTrialAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LocationsCheckTrialAvailabilityInput,
    outputSchema: LocationsCheckTrialAvailabilityOutput,
  }));
// Input Schema
export interface MaintenancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  maintenanceName: string;
}
export const MaintenancesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  maintenanceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/maintenances/{maintenanceName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<MaintenancesGetInput>;

// Output Schema
export interface MaintenancesGetOutput {
  id?: string;
  name?: string;
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
export const MaintenancesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<MaintenancesGetOutput>;

// The operation
/**
 * Get a Maintenance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param maintenanceName - Name of the maintenance
 */
export const MaintenancesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: MaintenancesGetInput,
  outputSchema: MaintenancesGetOutput,
}));
// Input Schema
export interface MaintenancesInitiateChecksInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  maintenanceName: string;
}
export const MaintenancesInitiateChecksInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    maintenanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/maintenances/{maintenanceName}/initiateChecks",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<MaintenancesInitiateChecksInput>;

// Output Schema
export interface MaintenancesInitiateChecksOutput {
  id?: string;
  name?: string;
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
export const MaintenancesInitiateChecksOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<MaintenancesInitiateChecksOutput>;

// The operation
/**
 * Initiate maintenance readiness checks
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param maintenanceName - Name of the maintenance
 */
export const MaintenancesInitiateChecks = /*@__PURE__*/ API.make(() => ({
  inputSchema: MaintenancesInitiateChecksInput,
  outputSchema: MaintenancesInitiateChecksOutput,
}));
// Input Schema
export interface MaintenancesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  stateName?:
    | "NotScheduled"
    | "Scheduled"
    | "InProgress"
    | "Success"
    | "Failed"
    | "Canceled";
  status?: "Active" | "Inactive";
  from?: string;
  to?: string;
}
export const MaintenancesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  stateName: Schema.optional(
    Schema.Literals([
      "NotScheduled",
      "Scheduled",
      "InProgress",
      "Success",
      "Failed",
      "Canceled",
    ]),
  ),
  status: Schema.optional(Schema.Literals(["Active", "Inactive"])),
  from: Schema.optional(Schema.String),
  to: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/maintenances",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<MaintenancesListInput>;

// Output Schema
export interface MaintenancesListOutput {
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
export const MaintenancesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MaintenancesListOutput>;

// The operation
/**
 * List Maintenance resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param stateName - Filter maintenances based on state
 * @param status - Filter active or inactive maintenances
 * @param from - date from which result should be returned. ie. scheduledStartTime >= from
 * @param to - date till which result should be returned. i.e. scheduledStartTime <= to
 */
export const MaintenancesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: MaintenancesListInput,
  outputSchema: MaintenancesListOutput,
}));
// Input Schema
export interface MaintenancesRescheduleInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  maintenanceName: string;
  rescheduleTime?: string;
  message?: string;
}
export const MaintenancesRescheduleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    maintenanceName: Schema.String.pipe(T.PathParam()),
    rescheduleTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/maintenances/{maintenanceName}/reschedule",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<MaintenancesRescheduleInput>;

// Output Schema
export interface MaintenancesRescheduleOutput {
  id?: string;
  name?: string;
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
export const MaintenancesRescheduleOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<MaintenancesRescheduleOutput>;

// The operation
/**
 * Reschedule a maintenance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param maintenanceName - Name of the maintenance
 */
export const MaintenancesReschedule = /*@__PURE__*/ API.make(() => ({
  inputSchema: MaintenancesRescheduleInput,
  outputSchema: MaintenancesRescheduleOutput,
}));
// Input Schema
export interface MaintenancesScheduleInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  maintenanceName: string;
  scheduleTime?: string;
  message?: string;
}
export const MaintenancesScheduleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    maintenanceName: Schema.String.pipe(T.PathParam()),
    scheduleTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/maintenances/{maintenanceName}/schedule",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<MaintenancesScheduleInput>;

// Output Schema
export interface MaintenancesScheduleOutput {
  id?: string;
  name?: string;
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
export const MaintenancesScheduleOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<MaintenancesScheduleOutput>;

// The operation
/**
 * Schedule a maintenance
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param maintenanceName - Name of the maintenance
 */
export const MaintenancesSchedule = /*@__PURE__*/ API.make(() => ({
  inputSchema: MaintenancesScheduleInput,
  outputSchema: MaintenancesScheduleOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AVS/operations",
    apiVersion: "2025-09-01",
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PlacementPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  placementPolicyName: string;
  properties?: {
    type: "VmVm" | "VmHost";
    state?: "Enabled" | "Disabled";
    displayName?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
  };
}
export const PlacementPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    placementPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        type: Schema.Literals(["VmVm", "VmHost"]),
        state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        displayName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PlacementPoliciesCreateOrUpdateInput>;

// Output Schema
export interface PlacementPoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const PlacementPoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PlacementPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Create a PlacementPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param placementPolicyName - Name of the placement policy.
 */
export const PlacementPoliciesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PlacementPoliciesCreateOrUpdateInput,
    outputSchema: PlacementPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface PlacementPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  placementPolicyName: string;
}
export const PlacementPoliciesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    placementPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PlacementPoliciesDeleteInput>;

// Output Schema
export type PlacementPoliciesDeleteOutput = void;
export const PlacementPoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PlacementPoliciesDeleteOutput>;

// The operation
/**
 * Delete a PlacementPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param placementPolicyName - Name of the placement policy.
 */
export const PlacementPoliciesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PlacementPoliciesDeleteInput,
  outputSchema: PlacementPoliciesDeleteOutput,
}));
// Input Schema
export interface PlacementPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  placementPolicyName: string;
}
export const PlacementPoliciesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    placementPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PlacementPoliciesGetInput>;

// Output Schema
export interface PlacementPoliciesGetOutput {
  id?: string;
  name?: string;
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
export const PlacementPoliciesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PlacementPoliciesGetOutput>;

// The operation
/**
 * Get a PlacementPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param placementPolicyName - Name of the placement policy.
 */
export const PlacementPoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PlacementPoliciesGetInput,
  outputSchema: PlacementPoliciesGetOutput,
}));
// Input Schema
export interface PlacementPoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
}
export const PlacementPoliciesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PlacementPoliciesListInput>;

// Output Schema
export interface PlacementPoliciesListOutput {
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
export const PlacementPoliciesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PlacementPoliciesListOutput>;

// The operation
/**
 * List PlacementPolicy resources by Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const PlacementPoliciesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PlacementPoliciesListInput,
  outputSchema: PlacementPoliciesListOutput,
}));
// Input Schema
export interface PlacementPoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  placementPolicyName: string;
  properties?: {
    state?: "Enabled" | "Disabled";
    vmMembers?: string[];
    hostMembers?: string[];
    affinityStrength?: "Should" | "Must";
    azureHybridBenefitType?: "SqlHost" | "None";
  };
}
export const PlacementPoliciesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    placementPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        vmMembers: Schema.optional(Schema.Array(Schema.String)),
        hostMembers: Schema.optional(Schema.Array(Schema.String)),
        affinityStrength: Schema.optional(Schema.Literals(["Should", "Must"])),
        azureHybridBenefitType: Schema.optional(
          Schema.Literals(["SqlHost", "None"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PlacementPoliciesUpdateInput>;

// Output Schema
export interface PlacementPoliciesUpdateOutput {
  id?: string;
  name?: string;
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
export const PlacementPoliciesUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PlacementPoliciesUpdateOutput>;

// The operation
/**
 * Update a PlacementPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param placementPolicyName - Name of the placement policy.
 */
export const PlacementPoliciesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PlacementPoliciesUpdateInput,
  outputSchema: PlacementPoliciesUpdateOutput,
}));
// Input Schema
export interface PrivateCloudsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  properties?: {
    managementCluster: {
      clusterSize?: number;
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Cancelled"
        | "Deleting"
        | "Updating";
      clusterId?: number;
      hosts?: string[];
      vsanDatastoreName?: string;
    };
    internet?: "Enabled" | "Disabled";
    identitySources?: {
      name?: string;
      alias?: string;
      domain?: string;
      baseUserDN?: string;
      baseGroupDN?: string;
      primaryServer?: string;
      secondaryServer?: string;
      ssl?: "Enabled" | "Disabled";
      username?: string;
      password?: string | Redacted.Redacted<string>;
    }[];
    availability?: {
      strategy?: "SingleZone" | "DualZone";
      zone?: number;
      secondaryZone?: number;
    };
    encryption?: {
      status?: "Enabled" | "Disabled";
      keyVaultProperties?: {
        keyName?: string;
        keyVersion?: string;
        autoDetectedKeyVersion?: string;
        keyVaultUrl?: string;
        keyState?: "Connected" | "AccessDenied";
        versionType?: "Fixed" | "AutoDetected";
      };
    };
    extendedNetworkBlocks?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Cancelled"
      | "Pending"
      | "Building"
      | "Deleting"
      | "Updating";
    circuit?: {
      primarySubnet?: string;
      secondarySubnet?: string;
      expressRouteID?: string;
      expressRoutePrivatePeeringID?: string;
    };
    endpoints?: {
      nsxtManager?: string;
      vcsa?: string;
      hcxCloudManager?: string;
      nsxtManagerIp?: string;
      vcenterIp?: string;
      hcxCloudManagerIp?: string;
    };
    networkBlock: string;
    managementNetwork?: string;
    provisioningNetwork?: string;
    vmotionNetwork?: string;
    vcenterPassword?: string | Redacted.Redacted<string>;
    nsxtPassword?: string | Redacted.Redacted<string>;
    vcenterCertificateThumbprint?: string;
    nsxtCertificateThumbprint?: string;
    externalCloudLinks?: string[];
    secondaryCircuit?: {
      primarySubnet?: string;
      secondarySubnet?: string;
      expressRouteID?: string;
      expressRoutePrivatePeeringID?: string;
    };
    nsxPublicIpQuotaRaised?: "Enabled" | "Disabled";
    virtualNetworkId?: string;
    dnsZoneType?: "Public" | "Private";
    vcfLicense?: {
      kind: "vcf5";
      provisioningState?: "Succeeded" | "Failed" | "Canceled";
    };
  };
  sku: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
  zones?: string[];
  tags?: Record<string, string>;
  location: string;
}
export const PrivateCloudsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        managementCluster: Schema.Struct({
          clusterSize: Schema.optional(Schema.Number),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "Failed",
              "Canceled",
              "Cancelled",
              "Deleting",
              "Updating",
            ]),
          ),
          clusterId: Schema.optional(Schema.Number),
          hosts: Schema.optional(Schema.Array(Schema.String)),
          vsanDatastoreName: Schema.optional(Schema.String),
        }),
        internet: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        identitySources: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              alias: Schema.optional(Schema.String),
              domain: Schema.optional(Schema.String),
              baseUserDN: Schema.optional(Schema.String),
              baseGroupDN: Schema.optional(Schema.String),
              primaryServer: Schema.optional(Schema.String),
              secondaryServer: Schema.optional(Schema.String),
              ssl: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
              username: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveString),
            }),
          ),
        ),
        availability: Schema.optional(
          Schema.Struct({
            strategy: Schema.optional(
              Schema.Literals(["SingleZone", "DualZone"]),
            ),
            zone: Schema.optional(Schema.Number),
            secondaryZone: Schema.optional(Schema.Number),
          }),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyName: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
                autoDetectedKeyVersion: Schema.optional(Schema.String),
                keyVaultUrl: Schema.optional(Schema.String),
                keyState: Schema.optional(
                  Schema.Literals(["Connected", "AccessDenied"]),
                ),
                versionType: Schema.optional(
                  Schema.Literals(["Fixed", "AutoDetected"]),
                ),
              }),
            ),
          }),
        ),
        extendedNetworkBlocks: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Cancelled",
            "Pending",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        circuit: Schema.optional(
          Schema.Struct({
            primarySubnet: Schema.optional(Schema.String),
            secondarySubnet: Schema.optional(Schema.String),
            expressRouteID: Schema.optional(Schema.String),
            expressRoutePrivatePeeringID: Schema.optional(Schema.String),
          }),
        ),
        endpoints: Schema.optional(
          Schema.Struct({
            nsxtManager: Schema.optional(Schema.String),
            vcsa: Schema.optional(Schema.String),
            hcxCloudManager: Schema.optional(Schema.String),
            nsxtManagerIp: Schema.optional(Schema.String),
            vcenterIp: Schema.optional(Schema.String),
            hcxCloudManagerIp: Schema.optional(Schema.String),
          }),
        ),
        networkBlock: Schema.String,
        managementNetwork: Schema.optional(Schema.String),
        provisioningNetwork: Schema.optional(Schema.String),
        vmotionNetwork: Schema.optional(Schema.String),
        vcenterPassword: Schema.optional(SensitiveString),
        nsxtPassword: Schema.optional(SensitiveString),
        vcenterCertificateThumbprint: Schema.optional(Schema.String),
        nsxtCertificateThumbprint: Schema.optional(Schema.String),
        externalCloudLinks: Schema.optional(Schema.Array(Schema.String)),
        secondaryCircuit: Schema.optional(
          Schema.Struct({
            primarySubnet: Schema.optional(Schema.String),
            secondarySubnet: Schema.optional(Schema.String),
            expressRouteID: Schema.optional(Schema.String),
            expressRoutePrivatePeeringID: Schema.optional(Schema.String),
          }),
        ),
        nsxPublicIpQuotaRaised: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        virtualNetworkId: Schema.optional(Schema.String),
        dnsZoneType: Schema.optional(Schema.Literals(["Public", "Private"])),
        vcfLicense: Schema.optional(
          Schema.Struct({
            kind: Schema.Literals(["vcf5"]),
            provisioningState: Schema.optional(
              Schema.Literals(["Succeeded", "Failed", "Canceled"]),
            ),
          }),
        ),
      }),
    ),
    sku: Schema.Struct({
      name: Schema.String,
      tier: Schema.optional(
        Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
      ),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned"]),
      }),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateCloudsCreateOrUpdateInput>;

// Output Schema
export interface PrivateCloudsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const PrivateCloudsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateCloudsCreateOrUpdateOutput>;

// The operation
/**
 * Create a PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsCreateOrUpdateInput,
  outputSchema: PrivateCloudsCreateOrUpdateOutput,
}));
// Input Schema
export interface PrivateCloudsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const PrivateCloudsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateCloudsDeleteInput>;

// Output Schema
export type PrivateCloudsDeleteOutput = void;
export const PrivateCloudsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateCloudsDeleteOutput>;

// The operation
/**
 * Delete a PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsDeleteInput,
  outputSchema: PrivateCloudsDeleteOutput,
}));
// Input Schema
export interface PrivateCloudsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const PrivateCloudsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<PrivateCloudsGetInput>;

// Output Schema
export interface PrivateCloudsGetOutput {
  id?: string;
  name?: string;
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
export const PrivateCloudsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<PrivateCloudsGetOutput>;

// The operation
/**
 * Get a PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsGetInput,
  outputSchema: PrivateCloudsGetOutput,
}));
// Input Schema
export interface PrivateCloudsGetVcfLicenseInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const PrivateCloudsGetVcfLicenseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/getVcfLicense",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateCloudsGetVcfLicenseInput>;

// Output Schema
export interface PrivateCloudsGetVcfLicenseOutput {
  kind: "vcf5";
  provisioningState?: "Succeeded" | "Failed" | "Canceled";
}
export const PrivateCloudsGetVcfLicenseOutput =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.Literals(["vcf5"]),
    provisioningState: Schema.optional(
      Schema.Literals(["Succeeded", "Failed", "Canceled"]),
    ),
  }) as unknown as Schema.Codec<PrivateCloudsGetVcfLicenseOutput>;

// The operation
/**
 * Get the license for the private cloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsGetVcfLicense = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsGetVcfLicenseInput,
  outputSchema: PrivateCloudsGetVcfLicenseOutput,
}));
// Input Schema
export interface PrivateCloudsListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PrivateCloudsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<PrivateCloudsListInput>;

// Output Schema
export interface PrivateCloudsListOutput {
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
export const PrivateCloudsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateCloudsListOutput>;

// The operation
/**
 * List PrivateCloud resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PrivateCloudsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsListInput,
  outputSchema: PrivateCloudsListOutput,
}));
// Input Schema
export interface PrivateCloudsListAdminCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const PrivateCloudsListAdminCredentialsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/listAdminCredentials",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateCloudsListAdminCredentialsInput>;

// Output Schema
export interface PrivateCloudsListAdminCredentialsOutput {
  nsxtUsername?: string;
  nsxtPassword?: Redacted.Redacted<string>;
  vcenterUsername?: string;
  vcenterPassword?: Redacted.Redacted<string>;
}
export const PrivateCloudsListAdminCredentialsOutput =
  /*@__PURE__*/ Schema.Struct({
    nsxtUsername: Schema.optional(Schema.String),
    nsxtPassword: Schema.optional(SensitiveOutputString),
    vcenterUsername: Schema.optional(Schema.String),
    vcenterPassword: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<PrivateCloudsListAdminCredentialsOutput>;

// The operation
/**
 * List the admin credentials for the private cloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsListAdminCredentials =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateCloudsListAdminCredentialsInput,
    outputSchema: PrivateCloudsListAdminCredentialsOutput,
  }));
// Input Schema
export interface PrivateCloudsListInSubscriptionInput {
  subscriptionId: string;
}
export const PrivateCloudsListInSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/privateClouds",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateCloudsListInSubscriptionInput>;

// Output Schema
export interface PrivateCloudsListInSubscriptionOutput {
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
export const PrivateCloudsListInSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateCloudsListInSubscriptionOutput>;

// The operation
/**
 * List PrivateCloud resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PrivateCloudsListInSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateCloudsListInSubscriptionInput,
    outputSchema: PrivateCloudsListInSubscriptionOutput,
  }));
// Input Schema
export interface PrivateCloudsRotateNsxtPasswordInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const PrivateCloudsRotateNsxtPasswordInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateCloudsRotateNsxtPasswordInput>;

// Output Schema
export type PrivateCloudsRotateNsxtPasswordOutput = void;
export const PrivateCloudsRotateNsxtPasswordOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateCloudsRotateNsxtPasswordOutput>;

// The operation
/**
 * Rotate the NSX-T Manager password
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsRotateNsxtPassword =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateCloudsRotateNsxtPasswordInput,
    outputSchema: PrivateCloudsRotateNsxtPasswordOutput,
  }));
// Input Schema
export interface PrivateCloudsRotateVcenterPasswordInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const PrivateCloudsRotateVcenterPasswordInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateCloudsRotateVcenterPasswordInput>;

// Output Schema
export type PrivateCloudsRotateVcenterPasswordOutput = void;
export const PrivateCloudsRotateVcenterPasswordOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateCloudsRotateVcenterPasswordOutput>;

// The operation
/**
 * Rotate the vCenter password
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsRotateVcenterPassword =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateCloudsRotateVcenterPasswordInput,
    outputSchema: PrivateCloudsRotateVcenterPasswordOutput,
  }));
// Input Schema
export interface PrivateCloudsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  tags?: Record<string, string>;
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
  properties?: {
    managementCluster?: {
      clusterSize?: number;
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Cancelled"
        | "Deleting"
        | "Updating";
      clusterId?: number;
      hosts?: string[];
      vsanDatastoreName?: string;
    };
    internet?: "Enabled" | "Disabled";
    identitySources?: {
      name?: string;
      alias?: string;
      domain?: string;
      baseUserDN?: string;
      baseGroupDN?: string;
      primaryServer?: string;
      secondaryServer?: string;
      ssl?: "Enabled" | "Disabled";
      username?: string;
      password?: string | Redacted.Redacted<string>;
    }[];
    availability?: {
      strategy?: "SingleZone" | "DualZone";
      zone?: number;
      secondaryZone?: number;
    };
    encryption?: {
      status?: "Enabled" | "Disabled";
      keyVaultProperties?: {
        keyName?: string;
        keyVersion?: string;
        autoDetectedKeyVersion?: string;
        keyVaultUrl?: string;
        keyState?: "Connected" | "AccessDenied";
        versionType?: "Fixed" | "AutoDetected";
      };
    };
    extendedNetworkBlocks?: string[];
    dnsZoneType?: "Public" | "Private";
  };
}
export const PrivateCloudsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned"]),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        managementCluster: Schema.optional(
          Schema.Struct({
            clusterSize: Schema.optional(Schema.Number),
            provisioningState: Schema.optional(
              Schema.Literals([
                "Succeeded",
                "Failed",
                "Canceled",
                "Cancelled",
                "Deleting",
                "Updating",
              ]),
            ),
            clusterId: Schema.optional(Schema.Number),
            hosts: Schema.optional(Schema.Array(Schema.String)),
            vsanDatastoreName: Schema.optional(Schema.String),
          }),
        ),
        internet: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        identitySources: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              alias: Schema.optional(Schema.String),
              domain: Schema.optional(Schema.String),
              baseUserDN: Schema.optional(Schema.String),
              baseGroupDN: Schema.optional(Schema.String),
              primaryServer: Schema.optional(Schema.String),
              secondaryServer: Schema.optional(Schema.String),
              ssl: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
              username: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveString),
            }),
          ),
        ),
        availability: Schema.optional(
          Schema.Struct({
            strategy: Schema.optional(
              Schema.Literals(["SingleZone", "DualZone"]),
            ),
            zone: Schema.optional(Schema.Number),
            secondaryZone: Schema.optional(Schema.Number),
          }),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyName: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
                autoDetectedKeyVersion: Schema.optional(Schema.String),
                keyVaultUrl: Schema.optional(Schema.String),
                keyState: Schema.optional(
                  Schema.Literals(["Connected", "AccessDenied"]),
                ),
                versionType: Schema.optional(
                  Schema.Literals(["Fixed", "AutoDetected"]),
                ),
              }),
            ),
          }),
        ),
        extendedNetworkBlocks: Schema.optional(Schema.Array(Schema.String)),
        dnsZoneType: Schema.optional(Schema.Literals(["Public", "Private"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PrivateCloudsUpdateInput>;

// Output Schema
export interface PrivateCloudsUpdateOutput {
  id?: string;
  name?: string;
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
export const PrivateCloudsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateCloudsUpdateOutput>;

// The operation
/**
 * Update a PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PrivateCloudsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateCloudsUpdateInput,
  outputSchema: PrivateCloudsUpdateOutput,
}));
// Input Schema
export interface ProvisionedNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  provisionedNetworkName: string;
}
export const ProvisionedNetworksGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    provisionedNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/provisionedNetworks/{provisionedNetworkName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ProvisionedNetworksGetInput>;

// Output Schema
export interface ProvisionedNetworksGetOutput {
  id?: string;
  name?: string;
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
export const ProvisionedNetworksGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProvisionedNetworksGetOutput>;

// The operation
/**
 * Get a ProvisionedNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param provisionedNetworkName - Name of the cloud link.
 */
export const ProvisionedNetworksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProvisionedNetworksGetInput,
  outputSchema: ProvisionedNetworksGetOutput,
}));
// Input Schema
export interface ProvisionedNetworksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const ProvisionedNetworksListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/provisionedNetworks",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ProvisionedNetworksListInput>;

// Output Schema
export interface ProvisionedNetworksListOutput {
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
export const ProvisionedNetworksListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ProvisionedNetworksListOutput>;

// The operation
/**
 * List ProvisionedNetwork resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const ProvisionedNetworksList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProvisionedNetworksListInput,
  outputSchema: ProvisionedNetworksListOutput,
}));
// Input Schema
export interface PureStoragePoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  storagePolicyName: string;
  properties?: {
    storagePolicyDefinition: string;
    storagePoolId: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting"
      | "Updating";
  };
}
export const PureStoragePoliciesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    storagePolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        storagePolicyDefinition: Schema.String,
        storagePoolId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleting",
            "Updating",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies/{storagePolicyName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PureStoragePoliciesCreateOrUpdateInput>;

// Output Schema
export interface PureStoragePoliciesCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const PureStoragePoliciesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PureStoragePoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Create a PureStoragePolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param storagePolicyName - Name of the storage policy.
 */
export const PureStoragePoliciesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PureStoragePoliciesCreateOrUpdateInput,
    outputSchema: PureStoragePoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface PureStoragePoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  storagePolicyName: string;
}
export const PureStoragePoliciesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    storagePolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies/{storagePolicyName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PureStoragePoliciesDeleteInput>;

// Output Schema
export type PureStoragePoliciesDeleteOutput = void;
export const PureStoragePoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PureStoragePoliciesDeleteOutput>;

// The operation
/**
 * Delete a PureStoragePolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param storagePolicyName - Name of the storage policy.
 */
export const PureStoragePoliciesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PureStoragePoliciesDeleteInput,
  outputSchema: PureStoragePoliciesDeleteOutput,
}));
// Input Schema
export interface PureStoragePoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  storagePolicyName: string;
}
export const PureStoragePoliciesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    storagePolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies/{storagePolicyName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PureStoragePoliciesGetInput>;

// Output Schema
export interface PureStoragePoliciesGetOutput {
  id?: string;
  name?: string;
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
export const PureStoragePoliciesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PureStoragePoliciesGetOutput>;

// The operation
/**
 * Get a PureStoragePolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param storagePolicyName - Name of the storage policy.
 */
export const PureStoragePoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PureStoragePoliciesGetInput,
  outputSchema: PureStoragePoliciesGetOutput,
}));
// Input Schema
export interface PureStoragePoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const PureStoragePoliciesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/pureStoragePolicies",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<PureStoragePoliciesListInput>;

// Output Schema
export interface PureStoragePoliciesListOutput {
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
export const PureStoragePoliciesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PureStoragePoliciesListOutput>;

// The operation
/**
 * List PureStoragePolicy resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const PureStoragePoliciesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PureStoragePoliciesListInput,
  outputSchema: PureStoragePoliciesListOutput,
}));
// Input Schema
export interface ScriptCmdletsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  scriptPackageName: string;
  scriptCmdletName: string;
}
export const ScriptCmdletsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  scriptPackageName: Schema.String.pipe(T.PathParam()),
  scriptCmdletName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets/{scriptCmdletName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ScriptCmdletsGetInput>;

// Output Schema
export interface ScriptCmdletsGetOutput {
  id?: string;
  name?: string;
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
export const ScriptCmdletsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ScriptCmdletsGetOutput>;

// The operation
/**
 * Get a ScriptCmdlet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptPackageName - Name of the script package.
 * @param scriptCmdletName - Name of the script cmdlet.
 */
export const ScriptCmdletsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScriptCmdletsGetInput,
  outputSchema: ScriptCmdletsGetOutput,
}));
// Input Schema
export interface ScriptCmdletsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  scriptPackageName: string;
}
export const ScriptCmdletsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  scriptPackageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ScriptCmdletsListInput>;

// Output Schema
export interface ScriptCmdletsListOutput {
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
export const ScriptCmdletsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ScriptCmdletsListOutput>;

// The operation
/**
 * List ScriptCmdlet resources by ScriptPackage
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptPackageName - Name of the script package.
 */
export const ScriptCmdletsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScriptCmdletsListInput,
  outputSchema: ScriptCmdletsListOutput,
}));
// Input Schema
export interface ScriptExecutionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  scriptExecutionName: string;
  properties?: {
    scriptCmdletId?: string;
    parameters?: {
      type: "Value" | "SecureValue" | "Credential";
      name: string;
    }[];
    hiddenParameters?: {
      type: "Value" | "SecureValue" | "Credential";
      name: string;
    }[];
    failureReason?: string;
    timeout: string;
    retention?: string;
    submittedAt?: string;
    startedAt?: string;
    finishedAt?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Pending"
      | "Running"
      | "Cancelling"
      | "Cancelled"
      | "Deleting";
    output?: string[];
    namedOutputs?: Record<string, unknown>;
    information?: string[];
    warnings?: string[];
    errors?: string[];
  };
}
export const ScriptExecutionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    scriptExecutionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        scriptCmdletId: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals(["Value", "SecureValue", "Credential"]),
              name: Schema.String,
            }),
          ),
        ),
        hiddenParameters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals(["Value", "SecureValue", "Credential"]),
              name: Schema.String,
            }),
          ),
        ),
        failureReason: Schema.optional(Schema.String),
        timeout: Schema.String,
        retention: Schema.optional(Schema.String),
        submittedAt: Schema.optional(Schema.String),
        startedAt: Schema.optional(Schema.String),
        finishedAt: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Pending",
            "Running",
            "Cancelling",
            "Cancelled",
            "Deleting",
          ]),
        ),
        output: Schema.optional(Schema.Array(Schema.String)),
        namedOutputs: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        information: Schema.optional(Schema.Array(Schema.String)),
        warnings: Schema.optional(Schema.Array(Schema.String)),
        errors: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ScriptExecutionsCreateOrUpdateInput>;

// Output Schema
export interface ScriptExecutionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const ScriptExecutionsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ScriptExecutionsCreateOrUpdateOutput>;

// The operation
/**
 * Create a ScriptExecution
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptExecutionName - Name of the script cmdlet.
 */
export const ScriptExecutionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScriptExecutionsCreateOrUpdateInput,
    outputSchema: ScriptExecutionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ScriptExecutionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  scriptExecutionName: string;
}
export const ScriptExecutionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    scriptExecutionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ScriptExecutionsDeleteInput>;

// Output Schema
export type ScriptExecutionsDeleteOutput = void;
export const ScriptExecutionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ScriptExecutionsDeleteOutput>;

// The operation
/**
 * Delete a ScriptExecution
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptExecutionName - Name of the script cmdlet.
 */
export const ScriptExecutionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScriptExecutionsDeleteInput,
  outputSchema: ScriptExecutionsDeleteOutput,
}));
// Input Schema
export interface ScriptExecutionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  scriptExecutionName: string;
}
export const ScriptExecutionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    scriptExecutionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ScriptExecutionsGetInput>;

// Output Schema
export interface ScriptExecutionsGetOutput {
  id?: string;
  name?: string;
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
export const ScriptExecutionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ScriptExecutionsGetOutput>;

// The operation
/**
 * Get a ScriptExecution
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptExecutionName - Name of the script cmdlet.
 */
export const ScriptExecutionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScriptExecutionsGetInput,
  outputSchema: ScriptExecutionsGetOutput,
}));
// Input Schema
export interface ScriptExecutionsGetExecutionLogsInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  scriptExecutionName: string;
}
export const ScriptExecutionsGetExecutionLogsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    scriptExecutionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}/getExecutionLogs",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ScriptExecutionsGetExecutionLogsInput>;

// Output Schema
export interface ScriptExecutionsGetExecutionLogsOutput {
  id?: string;
  name?: string;
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
export const ScriptExecutionsGetExecutionLogsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ScriptExecutionsGetExecutionLogsOutput>;

// The operation
/**
 * Return the logs for a script execution resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptExecutionName - Name of the script cmdlet.
 */
export const ScriptExecutionsGetExecutionLogs =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ScriptExecutionsGetExecutionLogsInput,
    outputSchema: ScriptExecutionsGetExecutionLogsOutput,
  }));
// Input Schema
export interface ScriptExecutionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const ScriptExecutionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ScriptExecutionsListInput>;

// Output Schema
export interface ScriptExecutionsListOutput {
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
export const ScriptExecutionsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ScriptExecutionsListOutput>;

// The operation
/**
 * List ScriptExecution resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const ScriptExecutionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScriptExecutionsListInput,
  outputSchema: ScriptExecutionsListOutput,
}));
// Input Schema
export interface ScriptPackagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  scriptPackageName: string;
}
export const ScriptPackagesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  privateCloudName: Schema.String.pipe(T.PathParam()),
  scriptPackageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<ScriptPackagesGetInput>;

// Output Schema
export interface ScriptPackagesGetOutput {
  id?: string;
  name?: string;
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
export const ScriptPackagesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ScriptPackagesGetOutput>;

// The operation
/**
 * Get a ScriptPackage
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param scriptPackageName - Name of the script package.
 */
export const ScriptPackagesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScriptPackagesGetInput,
  outputSchema: ScriptPackagesGetOutput,
}));
// Input Schema
export interface ScriptPackagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const ScriptPackagesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ScriptPackagesListInput>;

// Output Schema
export interface ScriptPackagesListOutput {
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
export const ScriptPackagesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ScriptPackagesListOutput>;

// The operation
/**
 * List ScriptPackage resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const ScriptPackagesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ScriptPackagesListInput,
  outputSchema: ScriptPackagesListOutput,
}));
// Input Schema
export interface ServiceComponentsCheckAvailabilityInput {
  subscriptionId: string;
  location: string;
  serviceComponentName: string;
}
export const ServiceComponentsCheckAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    serviceComponentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/serviceComponents/{serviceComponentName}/checkAvailability",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<ServiceComponentsCheckAvailabilityInput>;

// Output Schema
export type ServiceComponentsCheckAvailabilityOutput = void;
export const ServiceComponentsCheckAvailabilityOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceComponentsCheckAvailabilityOutput>;

// The operation
/**
 * Return service component availability
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param serviceComponentName - A service component
 */
export const ServiceComponentsCheckAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ServiceComponentsCheckAvailabilityInput,
    outputSchema: ServiceComponentsCheckAvailabilityOutput,
  }));
// Input Schema
export interface SkusListInput {
  subscriptionId: string;
}
export const SkusListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/skus",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<SkusListInput>;

// Output Schema
export interface SkusListOutput {
  value: {
    resourceType: "privateClouds" | "privateClouds/clusters";
    name: string;
    tier?: string;
    size?: string;
    family?: string;
    locations: string[];
    locationInfo: {
      location: string;
      zones: string[];
      zoneDetails: {
        name: string[];
        capabilities: { name: string; value: string }[];
      }[];
    }[];
    capabilities?: { name: string; value: string }[];
    restrictions: {
      type?: "Location" | "Zone";
      values: string[];
      restrictionInfo: { locations?: string[]; zones?: string[] };
      reasonCode?: "QuotaId" | "NotAvailableForSubscription";
    }[];
  }[];
  nextLink?: string;
}
export const SkusListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      resourceType: Schema.Literals([
        "privateClouds",
        "privateClouds/clusters",
      ]),
      name: Schema.String,
      tier: Schema.optional(Schema.String),
      size: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      locations: Schema.Array(Schema.String),
      locationInfo: Schema.Array(
        Schema.Struct({
          location: Schema.String,
          zones: Schema.Array(Schema.String),
          zoneDetails: Schema.Array(
            Schema.Struct({
              name: Schema.Array(Schema.String),
              capabilities: Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  value: Schema.String,
                }),
              ),
            }),
          ),
        }),
      ),
      capabilities: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            value: Schema.String,
          }),
        ),
      ),
      restrictions: Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.Literals(["Location", "Zone"])),
          values: Schema.Array(Schema.String),
          restrictionInfo: Schema.Struct({
            locations: Schema.optional(Schema.Array(Schema.String)),
            zones: Schema.optional(Schema.Array(Schema.String)),
          }),
          reasonCode: Schema.optional(
            Schema.Literals(["QuotaId", "NotAvailableForSubscription"]),
          ),
        }),
      ),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SkusListOutput>;

// The operation
/**
 * A list of SKUs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SkusList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SkusListInput,
  outputSchema: SkusListOutput,
}));
// Input Schema
export interface VirtualMachinesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  virtualMachineId: string;
}
export const VirtualMachinesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    virtualMachineId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}",
      apiVersion: "2025-09-01",
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
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
 * Get a VirtualMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param virtualMachineId - ID of the virtual machine.
 */
export const VirtualMachinesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesGetInput,
  outputSchema: VirtualMachinesGetOutput,
}));
// Input Schema
export interface VirtualMachinesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
}
export const VirtualMachinesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines",
      apiVersion: "2025-09-01",
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
  /*@__PURE__*/ Schema.Struct({
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
 * List VirtualMachine resources by Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 */
export const VirtualMachinesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: VirtualMachinesListInput,
  outputSchema: VirtualMachinesListOutput,
}));
// Input Schema
export interface VirtualMachinesRestrictMovementInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  clusterName: string;
  virtualMachineId: string;
  restrictMovement?: "Enabled" | "Disabled";
}
export const VirtualMachinesRestrictMovementInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    virtualMachineId: Schema.String.pipe(T.PathParam()),
    restrictMovement: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachinesRestrictMovementInput>;

// Output Schema
export type VirtualMachinesRestrictMovementOutput = void;
export const VirtualMachinesRestrictMovementOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachinesRestrictMovementOutput>;

// The operation
/**
 * Enable or disable DRS-driven VM movement restriction
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param clusterName - Name of the cluster
 * @param virtualMachineId - ID of the virtual machine.
 */
export const VirtualMachinesRestrictMovement =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachinesRestrictMovementInput,
    outputSchema: VirtualMachinesRestrictMovementOutput,
  }));
// Input Schema
export interface WorkloadNetworksCreateDhcpInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  dhcpId: string;
  properties?: {
    dhcpType: "SERVER" | "RELAY";
    displayName?: string;
    segments?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksCreateDhcpInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dhcpId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        dhcpType: Schema.Literals(["SERVER", "RELAY"]),
        displayName: Schema.optional(Schema.String),
        segments: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksCreateDhcpInput>;

// Output Schema
export interface WorkloadNetworksCreateDhcpOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksCreateDhcpOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksCreateDhcpOutput>;

// The operation
/**
 * Create a WorkloadNetworkDhcp
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dhcpId - The ID of the DHCP configuration
 */
export const WorkloadNetworksCreateDhcp = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksCreateDhcpInput,
  outputSchema: WorkloadNetworksCreateDhcpOutput,
}));
// Input Schema
export interface WorkloadNetworksCreateDnsServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  dnsServiceId: string;
  properties?: {
    displayName?: string;
    dnsServiceIp?: string;
    defaultDnsZone?: string;
    fqdnZones?: string[];
    logLevel?: "DEBUG" | "INFO" | "WARNING" | "ERROR" | "FATAL";
    status?: "SUCCESS" | "FAILURE";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksCreateDnsServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsServiceId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        dnsServiceIp: Schema.optional(Schema.String),
        defaultDnsZone: Schema.optional(Schema.String),
        fqdnZones: Schema.optional(Schema.Array(Schema.String)),
        logLevel: Schema.optional(
          Schema.Literals(["DEBUG", "INFO", "WARNING", "ERROR", "FATAL"]),
        ),
        status: Schema.optional(Schema.Literals(["SUCCESS", "FAILURE"])),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksCreateDnsServiceInput>;

// Output Schema
export interface WorkloadNetworksCreateDnsServiceOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksCreateDnsServiceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksCreateDnsServiceOutput>;

// The operation
/**
 * Create a WorkloadNetworkDnsService
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsServiceId - ID of the DNS service.
 */
export const WorkloadNetworksCreateDnsService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreateDnsServiceInput,
    outputSchema: WorkloadNetworksCreateDnsServiceOutput,
  }));
// Input Schema
export interface WorkloadNetworksCreateDnsZoneInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  dnsZoneId: string;
  properties?: {
    displayName?: string;
    domain?: string[];
    dnsServerIps?: string[];
    sourceIp?: string;
    dnsServices?: number;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksCreateDnsZoneInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsZoneId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        domain: Schema.optional(Schema.Array(Schema.String)),
        dnsServerIps: Schema.optional(Schema.Array(Schema.String)),
        sourceIp: Schema.optional(Schema.String),
        dnsServices: Schema.optional(Schema.Number),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksCreateDnsZoneInput>;

// Output Schema
export interface WorkloadNetworksCreateDnsZoneOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksCreateDnsZoneOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksCreateDnsZoneOutput>;

// The operation
/**
 * Create a WorkloadNetworkDnsZone
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsZoneId - ID of the DNS zone.
 */
export const WorkloadNetworksCreateDnsZone =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreateDnsZoneInput,
    outputSchema: WorkloadNetworksCreateDnsZoneOutput,
  }));
// Input Schema
export interface WorkloadNetworksCreatePortMirroringInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  portMirroringId: string;
  properties?: {
    displayName?: string;
    direction?: "INGRESS" | "EGRESS" | "BIDIRECTIONAL";
    source?: string;
    destination?: string;
    status?: "SUCCESS" | "FAILURE";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksCreatePortMirroringInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    portMirroringId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        direction: Schema.optional(
          Schema.Literals(["INGRESS", "EGRESS", "BIDIRECTIONAL"]),
        ),
        source: Schema.optional(Schema.String),
        destination: Schema.optional(Schema.String),
        status: Schema.optional(Schema.Literals(["SUCCESS", "FAILURE"])),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksCreatePortMirroringInput>;

// Output Schema
export interface WorkloadNetworksCreatePortMirroringOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksCreatePortMirroringOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksCreatePortMirroringOutput>;

// The operation
/**
 * Create a WorkloadNetworkPortMirroring
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param portMirroringId - ID of the NSX port mirroring profile.
 */
export const WorkloadNetworksCreatePortMirroring =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreatePortMirroringInput,
    outputSchema: WorkloadNetworksCreatePortMirroringOutput,
  }));
// Input Schema
export interface WorkloadNetworksCreatePublicIPInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  publicIPId: string;
  properties?: {
    displayName?: string;
    numberOfPublicIPs?: number;
    publicIPBlock?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
  };
}
export const WorkloadNetworksCreatePublicIPInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    publicIPId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        numberOfPublicIPs: Schema.optional(Schema.Number),
        publicIPBlock: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksCreatePublicIPInput>;

// Output Schema
export interface WorkloadNetworksCreatePublicIPOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksCreatePublicIPOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksCreatePublicIPOutput>;

// The operation
/**
 * Create a WorkloadNetworkPublicIP
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param publicIPId - ID of the DNS zone.
 */
export const WorkloadNetworksCreatePublicIP =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreatePublicIPInput,
    outputSchema: WorkloadNetworksCreatePublicIPOutput,
  }));
// Input Schema
export interface WorkloadNetworksCreateSegmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  segmentId: string;
  properties?: {
    displayName?: string;
    connectedGateway?: string;
    subnet?: { dhcpRanges?: string[]; gatewayAddress?: string };
    portVif?: { portName?: string }[];
    status?: "SUCCESS" | "FAILURE";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksCreateSegmentsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    segmentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        connectedGateway: Schema.optional(Schema.String),
        subnet: Schema.optional(
          Schema.Struct({
            dhcpRanges: Schema.optional(Schema.Array(Schema.String)),
            gatewayAddress: Schema.optional(Schema.String),
          }),
        ),
        portVif: Schema.optional(
          Schema.Array(
            Schema.Struct({
              portName: Schema.optional(Schema.String),
            }),
          ),
        ),
        status: Schema.optional(Schema.Literals(["SUCCESS", "FAILURE"])),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksCreateSegmentsInput>;

// Output Schema
export interface WorkloadNetworksCreateSegmentsOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksCreateSegmentsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksCreateSegmentsOutput>;

// The operation
/**
 * Create a WorkloadNetworkSegment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param segmentId - The ID of the NSX Segment
 */
export const WorkloadNetworksCreateSegments =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreateSegmentsInput,
    outputSchema: WorkloadNetworksCreateSegmentsOutput,
  }));
// Input Schema
export interface WorkloadNetworksCreateVMGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  vmGroupId: string;
  properties?: {
    displayName?: string;
    members?: string[];
    status?: "SUCCESS" | "FAILURE";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksCreateVMGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    vmGroupId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        members: Schema.optional(Schema.Array(Schema.String)),
        status: Schema.optional(Schema.Literals(["SUCCESS", "FAILURE"])),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksCreateVMGroupInput>;

// Output Schema
export interface WorkloadNetworksCreateVMGroupOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksCreateVMGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksCreateVMGroupOutput>;

// The operation
/**
 * Create a WorkloadNetworkVMGroup
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param vmGroupId - ID of the VM group.
 */
export const WorkloadNetworksCreateVMGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksCreateVMGroupInput,
    outputSchema: WorkloadNetworksCreateVMGroupOutput,
  }));
// Input Schema
export interface WorkloadNetworksDeleteDhcpInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  dhcpId: string;
}
export const WorkloadNetworksDeleteDhcpInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dhcpId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksDeleteDhcpInput>;

// Output Schema
export type WorkloadNetworksDeleteDhcpOutput = void;
export const WorkloadNetworksDeleteDhcpOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkloadNetworksDeleteDhcpOutput>;

// The operation
/**
 * Delete a WorkloadNetworkDhcp
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dhcpId - The ID of the DHCP configuration
 */
export const WorkloadNetworksDeleteDhcp = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksDeleteDhcpInput,
  outputSchema: WorkloadNetworksDeleteDhcpOutput,
}));
// Input Schema
export interface WorkloadNetworksDeleteDnsServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsServiceId: string;
  privateCloudName: string;
}
export const WorkloadNetworksDeleteDnsServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsServiceId: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksDeleteDnsServiceInput>;

// Output Schema
export type WorkloadNetworksDeleteDnsServiceOutput = void;
export const WorkloadNetworksDeleteDnsServiceOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkloadNetworksDeleteDnsServiceOutput>;

// The operation
/**
 * Delete a WorkloadNetworkDnsService
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsServiceId - ID of the DNS service.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksDeleteDnsService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeleteDnsServiceInput,
    outputSchema: WorkloadNetworksDeleteDnsServiceOutput,
  }));
// Input Schema
export interface WorkloadNetworksDeleteDnsZoneInput {
  subscriptionId: string;
  resourceGroupName: string;
  dnsZoneId: string;
  privateCloudName: string;
}
export const WorkloadNetworksDeleteDnsZoneInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dnsZoneId: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksDeleteDnsZoneInput>;

// Output Schema
export type WorkloadNetworksDeleteDnsZoneOutput = void;
export const WorkloadNetworksDeleteDnsZoneOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkloadNetworksDeleteDnsZoneOutput>;

// The operation
/**
 * Delete a WorkloadNetworkDnsZone
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dnsZoneId - ID of the DNS zone.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksDeleteDnsZone =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeleteDnsZoneInput,
    outputSchema: WorkloadNetworksDeleteDnsZoneOutput,
  }));
// Input Schema
export interface WorkloadNetworksDeletePortMirroringInput {
  subscriptionId: string;
  resourceGroupName: string;
  portMirroringId: string;
  privateCloudName: string;
}
export const WorkloadNetworksDeletePortMirroringInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    portMirroringId: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksDeletePortMirroringInput>;

// Output Schema
export type WorkloadNetworksDeletePortMirroringOutput = void;
export const WorkloadNetworksDeletePortMirroringOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkloadNetworksDeletePortMirroringOutput>;

// The operation
/**
 * Delete a WorkloadNetworkPortMirroring
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param portMirroringId - ID of the NSX port mirroring profile.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksDeletePortMirroring =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeletePortMirroringInput,
    outputSchema: WorkloadNetworksDeletePortMirroringOutput,
  }));
// Input Schema
export interface WorkloadNetworksDeletePublicIPInput {
  subscriptionId: string;
  resourceGroupName: string;
  publicIPId: string;
  privateCloudName: string;
}
export const WorkloadNetworksDeletePublicIPInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    publicIPId: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksDeletePublicIPInput>;

// Output Schema
export type WorkloadNetworksDeletePublicIPOutput = void;
export const WorkloadNetworksDeletePublicIPOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkloadNetworksDeletePublicIPOutput>;

// The operation
/**
 * Delete a WorkloadNetworkPublicIP
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param publicIPId - ID of the DNS zone.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksDeletePublicIP =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeletePublicIPInput,
    outputSchema: WorkloadNetworksDeletePublicIPOutput,
  }));
// Input Schema
export interface WorkloadNetworksDeleteSegmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  segmentId: string;
}
export const WorkloadNetworksDeleteSegmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    segmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksDeleteSegmentInput>;

// Output Schema
export type WorkloadNetworksDeleteSegmentOutput = void;
export const WorkloadNetworksDeleteSegmentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkloadNetworksDeleteSegmentOutput>;

// The operation
/**
 * Delete a WorkloadNetworkSegment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param segmentId - The ID of the NSX Segment
 */
export const WorkloadNetworksDeleteSegment =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeleteSegmentInput,
    outputSchema: WorkloadNetworksDeleteSegmentOutput,
  }));
// Input Schema
export interface WorkloadNetworksDeleteVMGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmGroupId: string;
  privateCloudName: string;
}
export const WorkloadNetworksDeleteVMGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmGroupId: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksDeleteVMGroupInput>;

// Output Schema
export type WorkloadNetworksDeleteVMGroupOutput = void;
export const WorkloadNetworksDeleteVMGroupOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkloadNetworksDeleteVMGroupOutput>;

// The operation
/**
 * Delete a WorkloadNetworkVMGroup
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmGroupId - ID of the VM group.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksDeleteVMGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksDeleteVMGroupInput,
    outputSchema: WorkloadNetworksDeleteVMGroupOutput,
  }));
// Input Schema
export interface WorkloadNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const WorkloadNetworksGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksGetInput>;

// Output Schema
export interface WorkloadNetworksGetOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksGetOutput>;

// The operation
/**
 * Get a WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksGetInput,
  outputSchema: WorkloadNetworksGetOutput,
}));
// Input Schema
export interface WorkloadNetworksGetDhcpInput {
  subscriptionId: string;
  resourceGroupName: string;
  dhcpId: string;
  privateCloudName: string;
}
export const WorkloadNetworksGetDhcpInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    dhcpId: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksGetDhcpInput>;

// Output Schema
export interface WorkloadNetworksGetDhcpOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksGetDhcpOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksGetDhcpOutput>;

// The operation
/**
 * Get a WorkloadNetworkDhcp
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param dhcpId - The ID of the DHCP configuration
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksGetDhcp = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksGetDhcpInput,
  outputSchema: WorkloadNetworksGetDhcpOutput,
}));
// Input Schema
export interface WorkloadNetworksGetDnsServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  dnsServiceId: string;
}
export const WorkloadNetworksGetDnsServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsServiceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksGetDnsServiceInput>;

// Output Schema
export interface WorkloadNetworksGetDnsServiceOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksGetDnsServiceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksGetDnsServiceOutput>;

// The operation
/**
 * Get a WorkloadNetworkDnsService
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsServiceId - ID of the DNS service.
 */
export const WorkloadNetworksGetDnsService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksGetDnsServiceInput,
    outputSchema: WorkloadNetworksGetDnsServiceOutput,
  }));
// Input Schema
export interface WorkloadNetworksGetDnsZoneInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  dnsZoneId: string;
}
export const WorkloadNetworksGetDnsZoneInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsZoneId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksGetDnsZoneInput>;

// Output Schema
export interface WorkloadNetworksGetDnsZoneOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksGetDnsZoneOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksGetDnsZoneOutput>;

// The operation
/**
 * Get a WorkloadNetworkDnsZone
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsZoneId - ID of the DNS zone.
 */
export const WorkloadNetworksGetDnsZone = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksGetDnsZoneInput,
  outputSchema: WorkloadNetworksGetDnsZoneOutput,
}));
// Input Schema
export interface WorkloadNetworksGetGatewayInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  gatewayId: string;
}
export const WorkloadNetworksGetGatewayInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    gatewayId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways/{gatewayId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksGetGatewayInput>;

// Output Schema
export interface WorkloadNetworksGetGatewayOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksGetGatewayOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksGetGatewayOutput>;

// The operation
/**
 * Get a WorkloadNetworkGateway
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param gatewayId - The ID of the NSX Gateway
 */
export const WorkloadNetworksGetGateway = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksGetGatewayInput,
  outputSchema: WorkloadNetworksGetGatewayOutput,
}));
// Input Schema
export interface WorkloadNetworksGetPortMirroringInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  portMirroringId: string;
}
export const WorkloadNetworksGetPortMirroringInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    portMirroringId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksGetPortMirroringInput>;

// Output Schema
export interface WorkloadNetworksGetPortMirroringOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksGetPortMirroringOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksGetPortMirroringOutput>;

// The operation
/**
 * Get a WorkloadNetworkPortMirroring
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param portMirroringId - ID of the NSX port mirroring profile.
 */
export const WorkloadNetworksGetPortMirroring =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksGetPortMirroringInput,
    outputSchema: WorkloadNetworksGetPortMirroringOutput,
  }));
// Input Schema
export interface WorkloadNetworksGetPublicIPInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  publicIPId: string;
}
export const WorkloadNetworksGetPublicIPInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    publicIPId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksGetPublicIPInput>;

// Output Schema
export interface WorkloadNetworksGetPublicIPOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksGetPublicIPOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksGetPublicIPOutput>;

// The operation
/**
 * Get a WorkloadNetworkPublicIP
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param publicIPId - ID of the DNS zone.
 */
export const WorkloadNetworksGetPublicIP = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksGetPublicIPInput,
  outputSchema: WorkloadNetworksGetPublicIPOutput,
}));
// Input Schema
export interface WorkloadNetworksGetSegmentInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  segmentId: string;
}
export const WorkloadNetworksGetSegmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    segmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksGetSegmentInput>;

// Output Schema
export interface WorkloadNetworksGetSegmentOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksGetSegmentOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksGetSegmentOutput>;

// The operation
/**
 * Get a WorkloadNetworkSegment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param segmentId - The ID of the NSX Segment
 */
export const WorkloadNetworksGetSegment = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksGetSegmentInput,
  outputSchema: WorkloadNetworksGetSegmentOutput,
}));
// Input Schema
export interface WorkloadNetworksGetVirtualMachineInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  virtualMachineId: string;
}
export const WorkloadNetworksGetVirtualMachineInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    virtualMachineId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines/{virtualMachineId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksGetVirtualMachineInput>;

// Output Schema
export interface WorkloadNetworksGetVirtualMachineOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksGetVirtualMachineOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksGetVirtualMachineOutput>;

// The operation
/**
 * Get a WorkloadNetworkVirtualMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param virtualMachineId - ID of the virtual machine.
 */
export const WorkloadNetworksGetVirtualMachine =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksGetVirtualMachineInput,
    outputSchema: WorkloadNetworksGetVirtualMachineOutput,
  }));
// Input Schema
export interface WorkloadNetworksGetVMGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  vmGroupId: string;
}
export const WorkloadNetworksGetVMGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    vmGroupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksGetVMGroupInput>;

// Output Schema
export interface WorkloadNetworksGetVMGroupOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksGetVMGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksGetVMGroupOutput>;

// The operation
/**
 * Get a WorkloadNetworkVMGroup
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param vmGroupId - ID of the VM group.
 */
export const WorkloadNetworksGetVMGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksGetVMGroupInput,
  outputSchema: WorkloadNetworksGetVMGroupOutput,
}));
// Input Schema
export interface WorkloadNetworksListInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const WorkloadNetworksListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksListInput>;

// Output Schema
export interface WorkloadNetworksListOutput {
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
export const WorkloadNetworksListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkloadNetworksListOutput>;

// The operation
/**
 * List WorkloadNetwork resources by PrivateCloud
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksListInput,
  outputSchema: WorkloadNetworksListOutput,
}));
// Input Schema
export interface WorkloadNetworksListDhcpInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const WorkloadNetworksListDhcpInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksListDhcpInput>;

// Output Schema
export interface WorkloadNetworksListDhcpOutput {
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
export const WorkloadNetworksListDhcpOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkloadNetworksListDhcpOutput>;

// The operation
/**
 * List WorkloadNetworkDhcp resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListDhcp = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksListDhcpInput,
  outputSchema: WorkloadNetworksListDhcpOutput,
}));
// Input Schema
export interface WorkloadNetworksListDnsServicesInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const WorkloadNetworksListDnsServicesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksListDnsServicesInput>;

// Output Schema
export interface WorkloadNetworksListDnsServicesOutput {
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
export const WorkloadNetworksListDnsServicesOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkloadNetworksListDnsServicesOutput>;

// The operation
/**
 * List WorkloadNetworkDnsService resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListDnsServices =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListDnsServicesInput,
    outputSchema: WorkloadNetworksListDnsServicesOutput,
  }));
// Input Schema
export interface WorkloadNetworksListDnsZonesInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const WorkloadNetworksListDnsZonesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksListDnsZonesInput>;

// Output Schema
export interface WorkloadNetworksListDnsZonesOutput {
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
export const WorkloadNetworksListDnsZonesOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkloadNetworksListDnsZonesOutput>;

// The operation
/**
 * List WorkloadNetworkDnsZone resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListDnsZones =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListDnsZonesInput,
    outputSchema: WorkloadNetworksListDnsZonesOutput,
  }));
// Input Schema
export interface WorkloadNetworksListGatewaysInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const WorkloadNetworksListGatewaysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksListGatewaysInput>;

// Output Schema
export interface WorkloadNetworksListGatewaysOutput {
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
export const WorkloadNetworksListGatewaysOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkloadNetworksListGatewaysOutput>;

// The operation
/**
 * List WorkloadNetworkGateway resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListGateways =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListGatewaysInput,
    outputSchema: WorkloadNetworksListGatewaysOutput,
  }));
// Input Schema
export interface WorkloadNetworksListPortMirroringInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const WorkloadNetworksListPortMirroringInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksListPortMirroringInput>;

// Output Schema
export interface WorkloadNetworksListPortMirroringOutput {
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
export const WorkloadNetworksListPortMirroringOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkloadNetworksListPortMirroringOutput>;

// The operation
/**
 * List WorkloadNetworkPortMirroring resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListPortMirroring =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListPortMirroringInput,
    outputSchema: WorkloadNetworksListPortMirroringOutput,
  }));
// Input Schema
export interface WorkloadNetworksListPublicIPsInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const WorkloadNetworksListPublicIPsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksListPublicIPsInput>;

// Output Schema
export interface WorkloadNetworksListPublicIPsOutput {
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
export const WorkloadNetworksListPublicIPsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkloadNetworksListPublicIPsOutput>;

// The operation
/**
 * List WorkloadNetworkPublicIP resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListPublicIPs =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListPublicIPsInput,
    outputSchema: WorkloadNetworksListPublicIPsOutput,
  }));
// Input Schema
export interface WorkloadNetworksListSegmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const WorkloadNetworksListSegmentsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksListSegmentsInput>;

// Output Schema
export interface WorkloadNetworksListSegmentsOutput {
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
export const WorkloadNetworksListSegmentsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkloadNetworksListSegmentsOutput>;

// The operation
/**
 * List WorkloadNetworkSegment resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListSegments =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListSegmentsInput,
    outputSchema: WorkloadNetworksListSegmentsOutput,
  }));
// Input Schema
export interface WorkloadNetworksListVirtualMachinesInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const WorkloadNetworksListVirtualMachinesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksListVirtualMachinesInput>;

// Output Schema
export interface WorkloadNetworksListVirtualMachinesOutput {
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
export const WorkloadNetworksListVirtualMachinesOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkloadNetworksListVirtualMachinesOutput>;

// The operation
/**
 * List WorkloadNetworkVirtualMachine resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListVirtualMachines =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListVirtualMachinesInput,
    outputSchema: WorkloadNetworksListVirtualMachinesOutput,
  }));
// Input Schema
export interface WorkloadNetworksListVMGroupsInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
}
export const WorkloadNetworksListVMGroupsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksListVMGroupsInput>;

// Output Schema
export interface WorkloadNetworksListVMGroupsOutput {
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
export const WorkloadNetworksListVMGroupsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkloadNetworksListVMGroupsOutput>;

// The operation
/**
 * List WorkloadNetworkVMGroup resources by WorkloadNetwork
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 */
export const WorkloadNetworksListVMGroups =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksListVMGroupsInput,
    outputSchema: WorkloadNetworksListVMGroupsOutput,
  }));
// Input Schema
export interface WorkloadNetworksUpdateDhcpInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  dhcpId: string;
  properties?: {
    dhcpType: "SERVER" | "RELAY";
    displayName?: string;
    segments?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksUpdateDhcpInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dhcpId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        dhcpType: Schema.Literals(["SERVER", "RELAY"]),
        displayName: Schema.optional(Schema.String),
        segments: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksUpdateDhcpInput>;

// Output Schema
export interface WorkloadNetworksUpdateDhcpOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksUpdateDhcpOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksUpdateDhcpOutput>;

// The operation
/**
 * Update a WorkloadNetworkDhcp
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dhcpId - The ID of the DHCP configuration
 */
export const WorkloadNetworksUpdateDhcp = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkloadNetworksUpdateDhcpInput,
  outputSchema: WorkloadNetworksUpdateDhcpOutput,
}));
// Input Schema
export interface WorkloadNetworksUpdateDnsServiceInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  dnsServiceId: string;
  properties?: {
    displayName?: string;
    dnsServiceIp?: string;
    defaultDnsZone?: string;
    fqdnZones?: string[];
    logLevel?: "DEBUG" | "INFO" | "WARNING" | "ERROR" | "FATAL";
    status?: "SUCCESS" | "FAILURE";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksUpdateDnsServiceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsServiceId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        dnsServiceIp: Schema.optional(Schema.String),
        defaultDnsZone: Schema.optional(Schema.String),
        fqdnZones: Schema.optional(Schema.Array(Schema.String)),
        logLevel: Schema.optional(
          Schema.Literals(["DEBUG", "INFO", "WARNING", "ERROR", "FATAL"]),
        ),
        status: Schema.optional(Schema.Literals(["SUCCESS", "FAILURE"])),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksUpdateDnsServiceInput>;

// Output Schema
export interface WorkloadNetworksUpdateDnsServiceOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksUpdateDnsServiceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksUpdateDnsServiceOutput>;

// The operation
/**
 * Update a WorkloadNetworkDnsService
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsServiceId - ID of the DNS service.
 */
export const WorkloadNetworksUpdateDnsService =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksUpdateDnsServiceInput,
    outputSchema: WorkloadNetworksUpdateDnsServiceOutput,
  }));
// Input Schema
export interface WorkloadNetworksUpdateDnsZoneInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  dnsZoneId: string;
  properties?: {
    displayName?: string;
    domain?: string[];
    dnsServerIps?: string[];
    sourceIp?: string;
    dnsServices?: number;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksUpdateDnsZoneInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    dnsZoneId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        domain: Schema.optional(Schema.Array(Schema.String)),
        dnsServerIps: Schema.optional(Schema.Array(Schema.String)),
        sourceIp: Schema.optional(Schema.String),
        dnsServices: Schema.optional(Schema.Number),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksUpdateDnsZoneInput>;

// Output Schema
export interface WorkloadNetworksUpdateDnsZoneOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksUpdateDnsZoneOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksUpdateDnsZoneOutput>;

// The operation
/**
 * Update a WorkloadNetworkDnsZone
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param dnsZoneId - ID of the DNS zone.
 */
export const WorkloadNetworksUpdateDnsZone =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksUpdateDnsZoneInput,
    outputSchema: WorkloadNetworksUpdateDnsZoneOutput,
  }));
// Input Schema
export interface WorkloadNetworksUpdatePortMirroringInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  portMirroringId: string;
  properties?: {
    displayName?: string;
    direction?: "INGRESS" | "EGRESS" | "BIDIRECTIONAL";
    source?: string;
    destination?: string;
    status?: "SUCCESS" | "FAILURE";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksUpdatePortMirroringInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    portMirroringId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        direction: Schema.optional(
          Schema.Literals(["INGRESS", "EGRESS", "BIDIRECTIONAL"]),
        ),
        source: Schema.optional(Schema.String),
        destination: Schema.optional(Schema.String),
        status: Schema.optional(Schema.Literals(["SUCCESS", "FAILURE"])),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksUpdatePortMirroringInput>;

// Output Schema
export interface WorkloadNetworksUpdatePortMirroringOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksUpdatePortMirroringOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksUpdatePortMirroringOutput>;

// The operation
/**
 * Update a WorkloadNetworkPortMirroring
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param portMirroringId - ID of the NSX port mirroring profile.
 */
export const WorkloadNetworksUpdatePortMirroring =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksUpdatePortMirroringInput,
    outputSchema: WorkloadNetworksUpdatePortMirroringOutput,
  }));
// Input Schema
export interface WorkloadNetworksUpdateSegmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  segmentId: string;
  properties?: {
    displayName?: string;
    connectedGateway?: string;
    subnet?: { dhcpRanges?: string[]; gatewayAddress?: string };
    portVif?: { portName?: string }[];
    status?: "SUCCESS" | "FAILURE";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksUpdateSegmentsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    segmentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        connectedGateway: Schema.optional(Schema.String),
        subnet: Schema.optional(
          Schema.Struct({
            dhcpRanges: Schema.optional(Schema.Array(Schema.String)),
            gatewayAddress: Schema.optional(Schema.String),
          }),
        ),
        portVif: Schema.optional(
          Schema.Array(
            Schema.Struct({
              portName: Schema.optional(Schema.String),
            }),
          ),
        ),
        status: Schema.optional(Schema.Literals(["SUCCESS", "FAILURE"])),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksUpdateSegmentsInput>;

// Output Schema
export interface WorkloadNetworksUpdateSegmentsOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksUpdateSegmentsOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksUpdateSegmentsOutput>;

// The operation
/**
 * Update a WorkloadNetworkSegment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param segmentId - The ID of the NSX Segment
 */
export const WorkloadNetworksUpdateSegments =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksUpdateSegmentsInput,
    outputSchema: WorkloadNetworksUpdateSegmentsOutput,
  }));
// Input Schema
export interface WorkloadNetworksUpdateVMGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  privateCloudName: string;
  vmGroupId: string;
  properties?: {
    displayName?: string;
    members?: string[];
    status?: "SUCCESS" | "FAILURE";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Building"
      | "Deleting"
      | "Updating";
    revision?: number;
  };
}
export const WorkloadNetworksUpdateVMGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateCloudName: Schema.String.pipe(T.PathParam()),
    vmGroupId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        members: Schema.optional(Schema.Array(Schema.String)),
        status: Schema.optional(Schema.Literals(["SUCCESS", "FAILURE"])),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Building",
            "Deleting",
            "Updating",
          ]),
        ),
        revision: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<WorkloadNetworksUpdateVMGroupInput>;

// Output Schema
export interface WorkloadNetworksUpdateVMGroupOutput {
  id?: string;
  name?: string;
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
export const WorkloadNetworksUpdateVMGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WorkloadNetworksUpdateVMGroupOutput>;

// The operation
/**
 * Update a WorkloadNetworkVMGroup
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateCloudName - Name of the private cloud
 * @param vmGroupId - ID of the VM group.
 */
export const WorkloadNetworksUpdateVMGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkloadNetworksUpdateVMGroupInput,
    outputSchema: WorkloadNetworksUpdateVMGroupOutput,
  }));
