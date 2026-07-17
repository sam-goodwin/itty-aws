/**
 * Azure Quota API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GroupQuotaLimitsListInput {
  managementGroupId: string;
  groupQuotaName: string;
  resourceProviderName: string;
  location: string;
}
export const GroupQuotaLimitsListInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    resourceProviderName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/groupQuotaLimits/{location}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaLimitsListInput>;

// Output Schema
export interface GroupQuotaLimitsListOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaLimitsListOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaLimitsListOutput>;

// The operation
/**
 * Gets the GroupQuotaLimits for the specified resource provider and location for resource names passed in $filter=resourceName eq {SKU}.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param resourceProviderName - The resource provider name, such as - Microsoft.Compute. Currently only Microsoft.Compute resource provider supports this API.
 * @param location - The name of the Azure region.
 */
export const GroupQuotaLimitsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupQuotaLimitsListInput,
  outputSchema: GroupQuotaLimitsListOutput,
}));
// Input Schema
export interface GroupQuotaLimitsRequestGetInput {
  managementGroupId: string;
  groupQuotaName: string;
  requestId: string;
}
export const GroupQuotaLimitsRequestGetInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    requestId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/groupQuotaRequests/{requestId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaLimitsRequestGetInput>;

// Output Schema
export interface GroupQuotaLimitsRequestGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaLimitsRequestGetOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaLimitsRequestGetOutput>;

// The operation
/**
 * Get API to check the status of a GroupQuota request by requestId.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param requestId - Request Id.
 */
export const GroupQuotaLimitsRequestGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupQuotaLimitsRequestGetInput,
  outputSchema: GroupQuotaLimitsRequestGetOutput,
}));
// Input Schema
export interface GroupQuotaLimitsRequestListInput {
  managementGroupId: string;
  groupQuotaName: string;
  resourceProviderName: string;
  $filter: string;
}
export const GroupQuotaLimitsRequestListInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    resourceProviderName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/groupQuotaRequests",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaLimitsRequestListInput>;

// Output Schema
export interface GroupQuotaLimitsRequestListOutput {
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
export const GroupQuotaLimitsRequestListOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaLimitsRequestListOutput>;

// The operation
/**
 * Get API to check the status of a GroupQuota request by requestId.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param resourceProviderName - The resource provider name, such as - Microsoft.Compute. Currently only Microsoft.Compute resource provider supports this API.
 * @param $filter - | Field | Supported operators  \\r\\n|---------------------|------------------------\\n\\r\\n location eq {location} and resource eq {resourceName}\\n Example: $filter=location eq eastus and resourceName eq cores
 */
export const GroupQuotaLimitsRequestList = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupQuotaLimitsRequestListInput,
  outputSchema: GroupQuotaLimitsRequestListOutput,
}));
// Input Schema
export interface GroupQuotaLimitsRequestUpdateInput {
  managementGroupId: string;
  groupQuotaName: string;
  resourceProviderName: string;
  location: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Created"
      | "Invalid"
      | "Succeeded"
      | "Escalated"
      | "Failed"
      | "InProgress"
      | "Canceled";
    value?: {
      properties?: {
        resourceName?: string;
        limit?: number;
        comment?: string;
        unit?: string;
        name?: { value?: string; localizedValue?: string };
        availableLimit?: number;
        allocatedToSubscriptions?: {
          value?: { subscriptionId?: string; quotaAllocated?: number }[];
        };
      };
    }[];
    nextLink?: string;
  };
}
export const GroupQuotaLimitsRequestUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    resourceProviderName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Created",
            "Invalid",
            "Succeeded",
            "Escalated",
            "Failed",
            "InProgress",
            "Canceled",
          ]),
        ),
        value: Schema.optional(
          Schema.Array(
            Schema.Struct({
              properties: Schema.optional(
                Schema.Struct({
                  resourceName: Schema.optional(Schema.String),
                  limit: Schema.optional(Schema.Number),
                  comment: Schema.optional(Schema.String),
                  unit: Schema.optional(Schema.String),
                  name: Schema.optional(
                    Schema.Struct({
                      value: Schema.optional(Schema.String),
                      localizedValue: Schema.optional(Schema.String),
                    }),
                  ),
                  availableLimit: Schema.optional(Schema.Number),
                  allocatedToSubscriptions: Schema.optional(
                    Schema.Struct({
                      value: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            subscriptionId: Schema.optional(Schema.String),
                            quotaAllocated: Schema.optional(Schema.Number),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        nextLink: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/groupQuotaLimits/{location}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaLimitsRequestUpdateInput>;

// Output Schema
export interface GroupQuotaLimitsRequestUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaLimitsRequestUpdateOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaLimitsRequestUpdateOutput>;

// The operation
/**
 * Create the GroupQuota requests for a specific ResourceProvider/Location/Resource. The resourceName properties are specified in the request body. Only 1 resource quota can be requested. Please note that patch request creates a new groupQuota request.
 * Use the polling API - OperationsStatus URI specified in Azure-AsyncOperation header field, with retry-after duration in seconds to check the intermediate status. This API provides the finals status with the request details and status.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param resourceProviderName - The resource provider name, such as - Microsoft.Compute. Currently only Microsoft.Compute resource provider supports this API.
 * @param location - The name of the Azure region.
 */
export const GroupQuotaLimitsRequestUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaLimitsRequestUpdateInput,
    outputSchema: GroupQuotaLimitsRequestUpdateOutput,
  }));
// Input Schema
export interface GroupQuotaLocationSettingsCreateOrUpdateInput {
  managementGroupId: string;
  groupQuotaName: string;
  resourceProviderName: string;
  location: string;
  properties?: {
    enforcementEnabled?: "Enabled" | "Disabled" | "NotAvailable";
    enforcedGroupName?: string;
    provisioningState?:
      | "Accepted"
      | "Created"
      | "Invalid"
      | "Succeeded"
      | "Escalated"
      | "Failed"
      | "InProgress"
      | "Canceled";
    faultCode?: string;
  };
}
export const GroupQuotaLocationSettingsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    resourceProviderName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        enforcementEnabled: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "NotAvailable"]),
        ),
        enforcedGroupName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Created",
            "Invalid",
            "Succeeded",
            "Escalated",
            "Failed",
            "InProgress",
            "Canceled",
          ]),
        ),
        faultCode: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/locationSettings/{location}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaLocationSettingsCreateOrUpdateInput>;

// Output Schema
export interface GroupQuotaLocationSettingsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaLocationSettingsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaLocationSettingsCreateOrUpdateOutput>;

// The operation
/**
 * Enables the GroupQuotas enforcement for the resource provider and the location specified. The resource provider will start using the group quotas as the overall quota for the subscriptions included in the GroupQuota. The subscriptions cannot request quota at subscription level since it is now part of an enforced group.
 * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
 * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable GroupQuota Enforcement -
 * 1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check the example - GroupQuotaSubscriptions_Delete).
 * 2. Then delete the GroupQuota (Check the example - GroupQuotas_Delete).
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param resourceProviderName - The resource provider name, such as - Microsoft.Compute. Currently only Microsoft.Compute resource provider supports this API.
 * @param location - The name of the Azure region.
 */
export const GroupQuotaLocationSettingsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaLocationSettingsCreateOrUpdateInput,
    outputSchema: GroupQuotaLocationSettingsCreateOrUpdateOutput,
  }));
// Input Schema
export interface GroupQuotaLocationSettingsGetInput {
  managementGroupId: string;
  groupQuotaName: string;
  resourceProviderName: string;
  location: string;
}
export const GroupQuotaLocationSettingsGetInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    resourceProviderName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/locationSettings/{location}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaLocationSettingsGetInput>;

// Output Schema
export interface GroupQuotaLocationSettingsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaLocationSettingsGetOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaLocationSettingsGetOutput>;

// The operation
/**
 * Gets the GroupQuotas enforcement settings for the ResourceProvider/location. The locations, where GroupQuota enforcement is not enabled will return Not Found.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param resourceProviderName - The resource provider name, such as - Microsoft.Compute. Currently only Microsoft.Compute resource provider supports this API.
 * @param location - The name of the Azure region.
 */
export const GroupQuotaLocationSettingsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaLocationSettingsGetInput,
    outputSchema: GroupQuotaLocationSettingsGetOutput,
  }));
// Input Schema
export interface GroupQuotaLocationSettingsUpdateInput {
  managementGroupId: string;
  groupQuotaName: string;
  resourceProviderName: string;
  location: string;
  properties?: {
    enforcementEnabled?: "Enabled" | "Disabled" | "NotAvailable";
    enforcedGroupName?: string;
    provisioningState?:
      | "Accepted"
      | "Created"
      | "Invalid"
      | "Succeeded"
      | "Escalated"
      | "Failed"
      | "InProgress"
      | "Canceled";
    faultCode?: string;
  };
}
export const GroupQuotaLocationSettingsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    resourceProviderName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        enforcementEnabled: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "NotAvailable"]),
        ),
        enforcedGroupName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Created",
            "Invalid",
            "Succeeded",
            "Escalated",
            "Failed",
            "InProgress",
            "Canceled",
          ]),
        ),
        faultCode: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/locationSettings/{location}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaLocationSettingsUpdateInput>;

// Output Schema
export interface GroupQuotaLocationSettingsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaLocationSettingsUpdateOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaLocationSettingsUpdateOutput>;

// The operation
/**
 * Enables the GroupQuotas enforcement for the resource provider and the location specified. The resource provider will start using the group quotas as the overall quota for the subscriptions included in the GroupQuota.  The subscriptions cannot request quota at subscription level since it is now part of an enforced group.
 * The subscriptions share the GroupQuotaLimits assigned to the GroupQuota. If the GroupQuotaLimits is used, then submit a groupQuotaLimit request for the specific resource - provider/location/resource.
 * Once the GroupQuota Enforcement is enabled then, it cannot be deleted or reverted back. To disable GroupQuota Enforcement -
 * 1. Remove all the subscriptions from the groupQuota using the delete API for Subscriptions (Check the example - GroupQuotaSubscriptions_Delete).
 * 2. Ten delete the GroupQuota (Check the example - GroupQuotas_Delete).
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param resourceProviderName - The resource provider name, such as - Microsoft.Compute. Currently only Microsoft.Compute resource provider supports this API.
 * @param location - The name of the Azure region.
 */
export const GroupQuotaLocationSettingsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaLocationSettingsUpdateInput,
    outputSchema: GroupQuotaLocationSettingsUpdateOutput,
  }));
// Input Schema
export interface GroupQuotasCreateOrUpdateInput {
  managementGroupId: string;
  groupQuotaName: string;
  properties?: {
    displayName?: string;
    groupType?: "AllocationGroup" | "EnforcedGroup";
    provisioningState?:
      | "Accepted"
      | "Created"
      | "Invalid"
      | "Succeeded"
      | "Escalated"
      | "Failed"
      | "InProgress"
      | "Canceled";
  };
}
export const GroupQuotasCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        groupType: Schema.optional(
          Schema.Literals(["AllocationGroup", "EnforcedGroup"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Created",
            "Invalid",
            "Succeeded",
            "Escalated",
            "Failed",
            "InProgress",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotasCreateOrUpdateInput>;

// Output Schema
export interface GroupQuotasCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotasCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<GroupQuotasCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new GroupQuota for the name passed. A RequestId will be returned by the Service. The status can be polled periodically. The status Async polling is using standards defined at - https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/async-api-reference.md#asynchronous-operations. Use the OperationsStatus URI provided in Azure-AsyncOperation header, the duration will be specified in retry-after header. Once the operation gets to terminal state - Succeeded | Failed, then the URI will change to Get URI and full details can be checked.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 */
export const GroupQuotasCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupQuotasCreateOrUpdateInput,
  outputSchema: GroupQuotasCreateOrUpdateOutput,
}));
// Input Schema
export interface GroupQuotasDeleteInput {
  managementGroupId: string;
  groupQuotaName: string;
}
export const GroupQuotasDeleteInput = /*@__PURE__*/ Schema.Struct({
  managementGroupId: Schema.String.pipe(T.PathParam()),
  groupQuotaName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<GroupQuotasDeleteInput>;

// Output Schema
export type GroupQuotasDeleteOutput = void;
export const GroupQuotasDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GroupQuotasDeleteOutput>;

// The operation
/**
 * Deletes the GroupQuotas for the name passed. All the remaining shareQuota in the GroupQuotas will be lost.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 */
export const GroupQuotasDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupQuotasDeleteInput,
  outputSchema: GroupQuotasDeleteOutput,
}));
// Input Schema
export interface GroupQuotasGetInput {
  managementGroupId: string;
  groupQuotaName: string;
}
export const GroupQuotasGetInput = /*@__PURE__*/ Schema.Struct({
  managementGroupId: Schema.String.pipe(T.PathParam()),
  groupQuotaName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<GroupQuotasGetInput>;

// Output Schema
export interface GroupQuotasGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotasGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<GroupQuotasGetOutput>;

// The operation
/**
 * Gets the GroupQuotas for the name passed. It will return the GroupQuotas properties only. The details on group quota can be access from the group quota APIs.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 */
export const GroupQuotasGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupQuotasGetInput,
  outputSchema: GroupQuotasGetOutput,
}));
// Input Schema
export interface GroupQuotasListInput {
  managementGroupId: string;
}
export const GroupQuotasListInput = /*@__PURE__*/ Schema.Struct({
  managementGroupId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<GroupQuotasListInput>;

// Output Schema
export interface GroupQuotasListOutput {
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
export const GroupQuotasListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GroupQuotasListOutput>;

// The operation
/**
 * Lists GroupQuotas for the scope passed. It will return the GroupQuotas QuotaEntity properties only.The details on group quota can be access from the group quota APIs.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 */
export const GroupQuotasList = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupQuotasListInput,
  outputSchema: GroupQuotasListOutput,
}));
// Input Schema
export interface GroupQuotaSubscriptionAllocationListInput {
  managementGroupId: string;
  subscriptionId: string;
  groupQuotaName: string;
  resourceProviderName: string;
  location: string;
}
export const GroupQuotaSubscriptionAllocationListInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    resourceProviderName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/subscriptions/{subscriptionId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/quotaAllocations/{location}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaSubscriptionAllocationListInput>;

// Output Schema
export interface GroupQuotaSubscriptionAllocationListOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaSubscriptionAllocationListOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaSubscriptionAllocationListOutput>;

// The operation
/**
 * Gets all the quota allocated to a subscription for the specified resource provider and location for resource names passed in $filter=resourceName eq {SKU}. This will include the GroupQuota and total quota allocated to the subscription. Only the Group quota allocated to the subscription can be allocated back to the MG Group Quota.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param resourceProviderName - The resource provider name, such as - Microsoft.Compute. Currently only Microsoft.Compute resource provider supports this API.
 * @param location - The name of the Azure region.
 */
export const GroupQuotaSubscriptionAllocationList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaSubscriptionAllocationListInput,
    outputSchema: GroupQuotaSubscriptionAllocationListOutput,
  }));
// Input Schema
export interface GroupQuotaSubscriptionAllocationRequestGetInput {
  managementGroupId: string;
  subscriptionId: string;
  groupQuotaName: string;
  resourceProviderName: string;
  allocationId: string;
}
export const GroupQuotaSubscriptionAllocationRequestGetInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    resourceProviderName: Schema.String.pipe(T.PathParam()),
    allocationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/subscriptions/{subscriptionId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/quotaAllocationRequests/{allocationId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaSubscriptionAllocationRequestGetInput>;

// Output Schema
export interface GroupQuotaSubscriptionAllocationRequestGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaSubscriptionAllocationRequestGetOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaSubscriptionAllocationRequestGetOutput>;

// The operation
/**
 * Get the quota allocation request status for the subscriptionId by allocationId.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param resourceProviderName - The resource provider name, such as - Microsoft.Compute. Currently only Microsoft.Compute resource provider supports this API.
 * @param allocationId - Request Id.
 */
export const GroupQuotaSubscriptionAllocationRequestGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaSubscriptionAllocationRequestGetInput,
    outputSchema: GroupQuotaSubscriptionAllocationRequestGetOutput,
  }));
// Input Schema
export interface GroupQuotaSubscriptionAllocationRequestListInput {
  managementGroupId: string;
  subscriptionId: string;
  groupQuotaName: string;
  resourceProviderName: string;
  $filter: string;
}
export const GroupQuotaSubscriptionAllocationRequestListInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    resourceProviderName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/subscriptions/{subscriptionId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/quotaAllocationRequests",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaSubscriptionAllocationRequestListInput>;

// Output Schema
export interface GroupQuotaSubscriptionAllocationRequestListOutput {
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
export const GroupQuotaSubscriptionAllocationRequestListOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaSubscriptionAllocationRequestListOutput>;

// The operation
/**
 * Get all the quotaAllocationRequests for a resourceProvider/location. The filter paramter for location is required.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param resourceProviderName - The resource provider name, such as - Microsoft.Compute. Currently only Microsoft.Compute resource provider supports this API.
 * @param $filter - | Field | Supported operators
|---------------------|------------------------

location eq {location}
Example: $filter=location eq eastus
 */
export const GroupQuotaSubscriptionAllocationRequestList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaSubscriptionAllocationRequestListInput,
    outputSchema: GroupQuotaSubscriptionAllocationRequestListOutput,
  }));
// Input Schema
export interface GroupQuotaSubscriptionAllocationRequestUpdateInput {
  managementGroupId: string;
  subscriptionId: string;
  groupQuotaName: string;
  resourceProviderName: string;
  location: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Created"
      | "Invalid"
      | "Succeeded"
      | "Escalated"
      | "Failed"
      | "InProgress"
      | "Canceled";
    value?: {
      properties?: {
        resourceName?: string;
        limit?: number;
        shareableQuota?: number;
        name?: { value?: string; localizedValue?: string };
      };
    }[];
    nextLink?: string;
  };
}
export const GroupQuotaSubscriptionAllocationRequestUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    resourceProviderName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Created",
            "Invalid",
            "Succeeded",
            "Escalated",
            "Failed",
            "InProgress",
            "Canceled",
          ]),
        ),
        value: Schema.optional(
          Schema.Array(
            Schema.Struct({
              properties: Schema.optional(
                Schema.Struct({
                  resourceName: Schema.optional(Schema.String),
                  limit: Schema.optional(Schema.Number),
                  shareableQuota: Schema.optional(Schema.Number),
                  name: Schema.optional(
                    Schema.Struct({
                      value: Schema.optional(Schema.String),
                      localizedValue: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        nextLink: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/subscriptions/{subscriptionId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/quotaAllocations/{location}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaSubscriptionAllocationRequestUpdateInput>;

// Output Schema
export interface GroupQuotaSubscriptionAllocationRequestUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaSubscriptionAllocationRequestUpdateOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaSubscriptionAllocationRequestUpdateOutput>;

// The operation
/**
 * Request to assign quota from group quota to a specific Subscription. The assign GroupQuota to subscriptions or reduce the quota allocated to subscription to give back the unused quota ( quota >= usages) to the groupQuota. So, this API can be used to assign Quota to subscriptions and assign back unused quota to group quota, which can be assigned to another subscriptions in the GroupQuota. User can collect unused quotas from multiple subscriptions within the groupQuota and assign the groupQuota to the subscription, where it's needed.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param resourceProviderName - The resource provider name, such as - Microsoft.Compute. Currently only Microsoft.Compute resource provider supports this API.
 * @param location - The name of the Azure region.
 */
export const GroupQuotaSubscriptionAllocationRequestUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaSubscriptionAllocationRequestUpdateInput,
    outputSchema: GroupQuotaSubscriptionAllocationRequestUpdateOutput,
  }));
// Input Schema
export interface GroupQuotaSubscriptionRequestsGetInput {
  managementGroupId: string;
  groupQuotaName: string;
  requestId: string;
}
export const GroupQuotaSubscriptionRequestsGetInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    requestId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/subscriptionRequests/{requestId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaSubscriptionRequestsGetInput>;

// Output Schema
export interface GroupQuotaSubscriptionRequestsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaSubscriptionRequestsGetOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaSubscriptionRequestsGetOutput>;

// The operation
/**
 * Get API to check the status of a subscriptionIds request by requestId.  Use the polling API - OperationsStatus URI specified in Azure-AsyncOperation header field, with retry-after duration in seconds to check the intermediate status. This API provides the finals status with the request details and status.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param requestId - Request Id.
 */
export const GroupQuotaSubscriptionRequestsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaSubscriptionRequestsGetInput,
    outputSchema: GroupQuotaSubscriptionRequestsGetOutput,
  }));
// Input Schema
export interface GroupQuotaSubscriptionRequestsListInput {
  managementGroupId: string;
  groupQuotaName: string;
}
export const GroupQuotaSubscriptionRequestsListInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/subscriptionRequests",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaSubscriptionRequestsListInput>;

// Output Schema
export interface GroupQuotaSubscriptionRequestsListOutput {
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
export const GroupQuotaSubscriptionRequestsListOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaSubscriptionRequestsListOutput>;

// The operation
/**
 * List API to check the status of a subscriptionId requests by requestId. Request history is maintained for 1 year.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 */
export const GroupQuotaSubscriptionRequestsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaSubscriptionRequestsListInput,
    outputSchema: GroupQuotaSubscriptionRequestsListOutput,
  }));
// Input Schema
export interface GroupQuotaSubscriptionsCreateOrUpdateInput {
  managementGroupId: string;
  groupQuotaName: string;
  subscriptionId: string;
}
export const GroupQuotaSubscriptionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/subscriptions/{subscriptionId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaSubscriptionsCreateOrUpdateInput>;

// Output Schema
export interface GroupQuotaSubscriptionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaSubscriptionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaSubscriptionsCreateOrUpdateOutput>;

// The operation
/**
 * Adds a subscription to GroupQuotas. The subscriptions will be validated based on the additionalAttributes defined in the GroupQuota. The additionalAttributes works as filter for the subscriptions, which can be included in the GroupQuotas. The request's TenantId is validated against the subscription's TenantId.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - Management Group Id.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const GroupQuotaSubscriptionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaSubscriptionsCreateOrUpdateInput,
    outputSchema: GroupQuotaSubscriptionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface GroupQuotaSubscriptionsDeleteInput {
  managementGroupId: string;
  groupQuotaName: string;
  subscriptionId: string;
}
export const GroupQuotaSubscriptionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/subscriptions/{subscriptionId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaSubscriptionsDeleteInput>;

// Output Schema
export type GroupQuotaSubscriptionsDeleteOutput = void;
export const GroupQuotaSubscriptionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GroupQuotaSubscriptionsDeleteOutput>;

// The operation
/**
 * Removes the subscription from GroupQuotas. The request's TenantId is validated against the subscription's TenantId.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const GroupQuotaSubscriptionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaSubscriptionsDeleteInput,
    outputSchema: GroupQuotaSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface GroupQuotaSubscriptionsGetInput {
  managementGroupId: string;
  groupQuotaName: string;
  subscriptionId: string;
}
export const GroupQuotaSubscriptionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/subscriptions/{subscriptionId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaSubscriptionsGetInput>;

// Output Schema
export interface GroupQuotaSubscriptionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaSubscriptionsGetOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaSubscriptionsGetOutput>;

// The operation
/**
 * Returns the subscriptionIds along with its provisioning state for being associated with the GroupQuota. If the subscription is not a member of GroupQuota, it will return 404, else 200.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const GroupQuotaSubscriptionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupQuotaSubscriptionsGetInput,
  outputSchema: GroupQuotaSubscriptionsGetOutput,
}));
// Input Schema
export interface GroupQuotaSubscriptionsListInput {
  managementGroupId: string;
  groupQuotaName: string;
}
export const GroupQuotaSubscriptionsListInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/subscriptions",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaSubscriptionsListInput>;

// Output Schema
export interface GroupQuotaSubscriptionsListOutput {
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
export const GroupQuotaSubscriptionsListOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaSubscriptionsListOutput>;

// The operation
/**
 * Returns a list of the subscriptionIds associated with the GroupQuotas.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 */
export const GroupQuotaSubscriptionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupQuotaSubscriptionsListInput,
  outputSchema: GroupQuotaSubscriptionsListOutput,
}));
// Input Schema
export interface GroupQuotaSubscriptionsUpdateInput {
  managementGroupId: string;
  groupQuotaName: string;
  subscriptionId: string;
}
export const GroupQuotaSubscriptionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/subscriptions/{subscriptionId}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaSubscriptionsUpdateInput>;

// Output Schema
export interface GroupQuotaSubscriptionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotaSubscriptionsUpdateOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaSubscriptionsUpdateOutput>;

// The operation
/**
 * Updates the GroupQuotas with the subscription to add to the subscriptions list. The subscriptions will be validated if additionalAttributes are defined in the GroupQuota. The request's TenantId is validated against the subscription's TenantId.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - Management Group Id.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const GroupQuotaSubscriptionsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupQuotaSubscriptionsUpdateInput,
    outputSchema: GroupQuotaSubscriptionsUpdateOutput,
  }));
// Input Schema
export interface GroupQuotasUpdateInput {
  managementGroupId: string;
  groupQuotaName: string;
  properties?: {
    displayName?: string;
    provisioningState?:
      | "Accepted"
      | "Created"
      | "Invalid"
      | "Succeeded"
      | "Escalated"
      | "Failed"
      | "InProgress"
      | "Canceled";
  };
}
export const GroupQuotasUpdateInput = /*@__PURE__*/ Schema.Struct({
  managementGroupId: Schema.String.pipe(T.PathParam()),
  groupQuotaName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      displayName: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Created",
          "Invalid",
          "Succeeded",
          "Escalated",
          "Failed",
          "InProgress",
          "Canceled",
        ]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<GroupQuotasUpdateInput>;

// Output Schema
export interface GroupQuotasUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const GroupQuotasUpdateOutput =
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
  }) as unknown as Schema.Codec<GroupQuotasUpdateOutput>;

// The operation
/**
 * Updates the GroupQuotas for the name passed. A GroupQuotas RequestId will be returned by the Service. The status can be polled periodically. The status Async polling is using standards defined at - https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/async-api-reference.md#asynchronous-operations. Use the OperationsStatus URI provided in Azure-AsyncOperation header, the duration will be specified in retry-after header. Once the operation gets to terminal state - Succeeded | Failed, then the URI will change to Get URI and full details can be checked.
 * Any change in the filters will be applicable to the future quota assignments, existing quota allocated to subscriptions from the GroupQuotas remains unchanged.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 */
export const GroupQuotasUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupQuotasUpdateInput,
  outputSchema: GroupQuotasUpdateOutput,
}));
// Input Schema
export interface GroupQuotaUsagesListInput {
  managementGroupId: string;
  groupQuotaName: string;
  resourceProviderName: string;
  location: string;
}
export const GroupQuotaUsagesListInput =
  /*@__PURE__*/ Schema.Struct({
    managementGroupId: Schema.String.pipe(T.PathParam()),
    groupQuotaName: Schema.String.pipe(T.PathParam()),
    resourceProviderName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Quota/groupQuotas/{groupQuotaName}/resourceProviders/{resourceProviderName}/locationUsages/{location}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<GroupQuotaUsagesListInput>;

// Output Schema
export interface GroupQuotaUsagesListOutput {
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
export const GroupQuotaUsagesListOutput =
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
  }) as unknown as Schema.Codec<GroupQuotaUsagesListOutput>;

// The operation
/**
 * Gets the GroupQuotas usages and limits(quota). Location is required paramter.
 *
 * @param api-version - The API version to use for this operation.
 * @param managementGroupId - The management group ID.
 * @param groupQuotaName - The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
 * @param resourceProviderName - The resource provider name, such as - Microsoft.Compute. Currently only Microsoft.Compute resource provider supports this API.
 * @param location - The name of the Azure region.
 */
export const GroupQuotaUsagesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupQuotaUsagesListInput,
  outputSchema: GroupQuotaUsagesListOutput,
}));
// Input Schema
export interface QuotaCreateOrUpdateInput {
  scope: string;
  resourceName: string;
  properties?: {
    limit?: { limitObjectType: "LimitValue" };
    unit?: string;
    name?: { value?: string; localizedValue?: string };
    resourceType?: string;
    quotaPeriod?: string;
    isQuotaApplicable?: boolean;
    properties?: unknown;
  };
}
export const QuotaCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        limit: Schema.optional(
          Schema.Struct({
            limitObjectType: Schema.Literals(["LimitValue"]),
          }),
        ),
        unit: Schema.optional(Schema.String),
        name: Schema.optional(
          Schema.Struct({
            value: Schema.optional(Schema.String),
            localizedValue: Schema.optional(Schema.String),
          }),
        ),
        resourceType: Schema.optional(Schema.String),
        quotaPeriod: Schema.optional(Schema.String),
        isQuotaApplicable: Schema.optional(Schema.Boolean),
        properties: Schema.optional(Schema.Unknown),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{scope}/providers/Microsoft.Quota/quotas/{resourceName}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<QuotaCreateOrUpdateInput>;

// Output Schema
export interface QuotaCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const QuotaCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<QuotaCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the quota limit for the specified resource with the requested value. To update the quota, follow these steps:
 * 1. Use the GET operation for quotas and usages to determine how much quota remains for the specific resource and to calculate the new quota limit. These steps are detailed in [this example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
 * 2. Use this PUT operation to update the quota limit. Please check the URI in location header for the detailed status of the request.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param resourceName - Resource name for a given resource provider. For example:
- SKU name for Microsoft.Compute
- SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
 For Microsoft.Network PublicIPAddresses.
 */
export const QuotaCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: QuotaCreateOrUpdateInput,
  outputSchema: QuotaCreateOrUpdateOutput,
}));
// Input Schema
export interface QuotaGetInput {
  scope: string;
  resourceName: string;
}
export const QuotaGetInput = /*@__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Quota/quotas/{resourceName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<QuotaGetInput>;

// Output Schema
export interface QuotaGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const QuotaGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<QuotaGetOutput>;

// The operation
/**
 * Get the quota limit of a resource. The response can be used to determine the remaining quota to calculate a new quota limit that can be submitted with a PUT request.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param resourceName - Resource name for a given resource provider. For example:
- SKU name for Microsoft.Compute
- SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
 For Microsoft.Network PublicIPAddresses.
 */
export const QuotaGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: QuotaGetInput,
  outputSchema: QuotaGetOutput,
}));
// Input Schema
export interface QuotaListInput {
  scope: string;
}
export const QuotaListInput = /*@__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Quota/quotas",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<QuotaListInput>;

// Output Schema
export interface QuotaListOutput {
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
export const QuotaListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<QuotaListOutput>;

// The operation
/**
 * Get a list of current quota limits of all resources for the specified scope. The response from this GET operation can be leveraged to submit requests to update a quota.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 */
export const QuotaList = /*@__PURE__*/ API.make(() => ({
  inputSchema: QuotaListInput,
  outputSchema: QuotaListOutput,
}));
// Input Schema
export interface QuotaOperationListInput {}
export const QuotaOperationListInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Quota/operations",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<QuotaOperationListInput>;

// Output Schema
export interface QuotaOperationListOutput {
  value: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
  }[];
  nextLink?: string;
}
export const QuotaOperationListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<QuotaOperationListOutput>;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const QuotaOperationList = /*@__PURE__*/ API.make(() => ({
  inputSchema: QuotaOperationListInput,
  outputSchema: QuotaOperationListOutput,
}));
// Input Schema
export interface QuotaRequestStatusGetInput {
  scope: string;
  id: string;
}
export const QuotaRequestStatusGetInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.Quota/quotaRequests/{id}",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<QuotaRequestStatusGetInput>;

// Output Schema
export interface QuotaRequestStatusGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const QuotaRequestStatusGetOutput =
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
  }) as unknown as Schema.Codec<QuotaRequestStatusGetOutput>;

// The operation
/**
 * Get the quota request details and status by quota request ID for the resources of the resource provider at a specific location. The quota request ID **id** is returned in the response of the PUT operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param id - Quota request ID.
 */
export const QuotaRequestStatusGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: QuotaRequestStatusGetInput,
  outputSchema: QuotaRequestStatusGetOutput,
}));
// Input Schema
export interface QuotaRequestStatusListInput {
  scope: string;
  $filter?: string;
  $top?: number;
  $skiptoken?: string;
}
export const QuotaRequestStatusListInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.Quota/quotaRequests",
      apiVersion: "2025-09-01",
    }),
  ) as unknown as Schema.Codec<QuotaRequestStatusListInput>;

// Output Schema
export interface QuotaRequestStatusListOutput {
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
export const QuotaRequestStatusListOutput =
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
  }) as unknown as Schema.Codec<QuotaRequestStatusListOutput>;

// The operation
/**
 * For the specified scope, get the current quota requests for a one year period ending at the time is made. Use the **oData** filter to select quota requests.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param $filter - | Field                    | Supported operators
|---------------------|------------------------

|requestSubmitTime | ge, le, eq, gt, lt
|provisioningState eq {QuotaRequestState}
|resourceName eq {resourceName}
 * @param $top - Number of records to return.
 * @param $skiptoken - The **Skiptoken** parameter is used only if a previous operation returned a partial result. If a previous response contains a **nextLink** element, its value includes a **skiptoken** parameter that specifies a starting point to use for subsequent calls.
 */
export const QuotaRequestStatusList = /*@__PURE__*/ API.make(() => ({
  inputSchema: QuotaRequestStatusListInput,
  outputSchema: QuotaRequestStatusListOutput,
}));
// Input Schema
export interface QuotaUpdateInput {
  scope: string;
  resourceName: string;
  properties?: {
    limit?: { limitObjectType: "LimitValue" };
    unit?: string;
    name?: { value?: string; localizedValue?: string };
    resourceType?: string;
    quotaPeriod?: string;
    isQuotaApplicable?: boolean;
    properties?: unknown;
  };
}
export const QuotaUpdateInput = /*@__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      limit: Schema.optional(
        Schema.Struct({
          limitObjectType: Schema.Literals(["LimitValue"]),
        }),
      ),
      unit: Schema.optional(Schema.String),
      name: Schema.optional(
        Schema.Struct({
          value: Schema.optional(Schema.String),
          localizedValue: Schema.optional(Schema.String),
        }),
      ),
      resourceType: Schema.optional(Schema.String),
      quotaPeriod: Schema.optional(Schema.String),
      isQuotaApplicable: Schema.optional(Schema.Boolean),
      properties: Schema.optional(Schema.Unknown),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/{scope}/providers/Microsoft.Quota/quotas/{resourceName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<QuotaUpdateInput>;

// Output Schema
export interface QuotaUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const QuotaUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<QuotaUpdateOutput>;

// The operation
/**
 * Update the quota limit for a specific resource to the specified value:
 * 1. Use the Usages-GET and Quota-GET operations to determine the remaining quota for the specific resource and to calculate the new quota limit. These steps are detailed in [this example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
 * 2. Use this PUT operation to update the quota limit. Please check the URI in location header for the detailed status of the request.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param resourceName - Resource name for a given resource provider. For example:
- SKU name for Microsoft.Compute
- SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
 For Microsoft.Network PublicIPAddresses.
 */
export const QuotaUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: QuotaUpdateInput,
  outputSchema: QuotaUpdateOutput,
}));
// Input Schema
export interface UsagesGetInput {
  scope: string;
  resourceName: string;
}
export const UsagesGetInput = /*@__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Quota/usages/{resourceName}",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<UsagesGetInput>;

// Output Schema
export interface UsagesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const UsagesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<UsagesGetOutput>;

// The operation
/**
 * Get the current usage of a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param resourceName - Resource name for a given resource provider. For example:
- SKU name for Microsoft.Compute
- SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
 For Microsoft.Network PublicIPAddresses.
 */
export const UsagesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsagesGetInput,
  outputSchema: UsagesGetOutput,
}));
// Input Schema
export interface UsagesListInput {
  scope: string;
}
export const UsagesListInput = /*@__PURE__*/ Schema.Struct({
  scope: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{scope}/providers/Microsoft.Quota/usages",
    apiVersion: "2025-09-01",
  }),
) as unknown as Schema.Codec<UsagesListInput>;

// Output Schema
export interface UsagesListOutput {
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
export const UsagesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<UsagesListOutput>;

// The operation
/**
 * Get a list of current usage for all resources for the scope specified.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 */
export const UsagesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsagesListInput,
  outputSchema: UsagesListOutput,
}));
