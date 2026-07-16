/**
 * Azure Redis API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AccessPolicyAssignmentCreateUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  accessPolicyAssignmentName: string;
  properties?: {
    provisioningState?:
      | "Updating"
      | "Succeeded"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed";
    objectId: string;
    objectIdAlias: string;
    accessPolicyName: string;
  };
}
export const AccessPolicyAssignmentCreateUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    accessPolicyAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Updating",
            "Succeeded",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
          ]),
        ),
        objectId: Schema.String,
        objectIdAlias: Schema.String,
        accessPolicyName: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AccessPolicyAssignmentCreateUpdateInput>;

// Output Schema
export interface AccessPolicyAssignmentCreateUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccessPolicyAssignmentCreateUpdateOutput =
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
  }) as unknown as Schema.Codec<AccessPolicyAssignmentCreateUpdateOutput>;

// The operation
/**
 * Adds the access policy assignment to the specified users
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyAssignmentName - The name of the access policy assignment.
 */
export const AccessPolicyAssignmentCreateUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccessPolicyAssignmentCreateUpdateInput,
    outputSchema: AccessPolicyAssignmentCreateUpdateOutput,
  }));
// Input Schema
export interface AccessPolicyAssignmentDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  accessPolicyAssignmentName: string;
}
export const AccessPolicyAssignmentDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    accessPolicyAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AccessPolicyAssignmentDeleteInput>;

// Output Schema
export type AccessPolicyAssignmentDeleteOutput = void;
export const AccessPolicyAssignmentDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AccessPolicyAssignmentDeleteOutput>;

// The operation
/**
 * Deletes the access policy assignment from a redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyAssignmentName - The name of the access policy assignment.
 */
export const AccessPolicyAssignmentDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccessPolicyAssignmentDeleteInput,
    outputSchema: AccessPolicyAssignmentDeleteOutput,
  }));
// Input Schema
export interface AccessPolicyAssignmentGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  accessPolicyAssignmentName: string;
}
export const AccessPolicyAssignmentGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    accessPolicyAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AccessPolicyAssignmentGetInput>;

// Output Schema
export interface AccessPolicyAssignmentGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccessPolicyAssignmentGetOutput =
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
  }) as unknown as Schema.Codec<AccessPolicyAssignmentGetOutput>;

// The operation
/**
 * Gets the list of assignments for an access policy of a redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyAssignmentName - The name of the access policy assignment.
 */
export const AccessPolicyAssignmentGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessPolicyAssignmentGetInput,
  outputSchema: AccessPolicyAssignmentGetOutput,
}));
// Input Schema
export interface AccessPolicyAssignmentListInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const AccessPolicyAssignmentListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicyAssignments",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AccessPolicyAssignmentListInput>;

// Output Schema
export interface AccessPolicyAssignmentListOutput {
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
export const AccessPolicyAssignmentListOutput =
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
  }) as unknown as Schema.Codec<AccessPolicyAssignmentListOutput>;

// The operation
/**
 * Gets the list of access policy assignments associated with this redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const AccessPolicyAssignmentList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessPolicyAssignmentListInput,
  outputSchema: AccessPolicyAssignmentListOutput,
}));
// Input Schema
export interface AccessPolicyCreateUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  accessPolicyName: string;
  properties?: {
    provisioningState?:
      | "Updating"
      | "Succeeded"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed";
    type?: "Custom" | "BuiltIn";
    permissions: string;
  };
}
export const AccessPolicyCreateUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    accessPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Updating",
            "Succeeded",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
          ]),
        ),
        type: Schema.optional(Schema.Literals(["Custom", "BuiltIn"])),
        permissions: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicies/{accessPolicyName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AccessPolicyCreateUpdateInput>;

// Output Schema
export interface AccessPolicyCreateUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccessPolicyCreateUpdateOutput =
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
  }) as unknown as Schema.Codec<AccessPolicyCreateUpdateOutput>;

// The operation
/**
 * Adds an access policy to the redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyName - The name of the access policy that is being added to the Redis cache.
 */
export const AccessPolicyCreateUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessPolicyCreateUpdateInput,
  outputSchema: AccessPolicyCreateUpdateOutput,
}));
// Input Schema
export interface AccessPolicyDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  accessPolicyName: string;
}
export const AccessPolicyDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    accessPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicies/{accessPolicyName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AccessPolicyDeleteInput>;

// Output Schema
export type AccessPolicyDeleteOutput = void;
export const AccessPolicyDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AccessPolicyDeleteOutput>;

// The operation
/**
 * Deletes the access policy from a redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyName - The name of the access policy that is being added to the Redis cache.
 */
export const AccessPolicyDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessPolicyDeleteInput,
  outputSchema: AccessPolicyDeleteOutput,
}));
// Input Schema
export interface AccessPolicyGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  accessPolicyName: string;
}
export const AccessPolicyGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
  accessPolicyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicies/{accessPolicyName}",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<AccessPolicyGetInput>;

// Output Schema
export interface AccessPolicyGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AccessPolicyGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<AccessPolicyGetOutput>;

// The operation
/**
 * Gets the detailed information about an access policy of a redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyName - The name of the access policy that is being added to the Redis cache.
 */
export const AccessPolicyGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessPolicyGetInput,
  outputSchema: AccessPolicyGetOutput,
}));
// Input Schema
export interface AccessPolicyListInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const AccessPolicyListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicies",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<AccessPolicyListInput>;

// Output Schema
export interface AccessPolicyListOutput {
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
export const AccessPolicyListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AccessPolicyListOutput>;

// The operation
/**
 * Gets the list of access policies associated with this redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const AccessPolicyList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccessPolicyListInput,
  outputSchema: AccessPolicyListOutput,
}));
// Input Schema
export interface AsyncOperationStatusGetInput {
  location: string;
  operationId: string;
  subscriptionId: string;
}
export const AsyncOperationStatusGetInput =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cache/locations/{location}/asyncOperations/{operationId}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AsyncOperationStatusGetInput>;

// Output Schema
export interface AsyncOperationStatusGetOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const AsyncOperationStatusGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(Schema.Array(Schema.Unknown)),
          error: Schema.optional(
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
        }),
      ),
    ),
    error: Schema.optional(
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
  }) as unknown as Schema.Codec<AsyncOperationStatusGetOutput>;

// The operation
/**
 * For checking the ongoing status of an operation
 *
 * @param api-version - The API version to use for this operation.
 * @param location - The location at which operation was triggered
 * @param operationId - The ID of asynchronous operation
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AsyncOperationStatusGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AsyncOperationStatusGetInput,
  outputSchema: AsyncOperationStatusGetOutput,
}));
// Input Schema
export interface FirewallRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  ruleName: string;
  properties: { startIP: string; endIP: string };
}
export const FirewallRulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      startIP: Schema.String,
      endIP: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/firewallRules/{ruleName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesCreateOrUpdateInput>;

// Output Schema
export interface FirewallRulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const FirewallRulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FirewallRulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a redis cache firewall rule
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param ruleName - The name of the firewall rule.
 */
export const FirewallRulesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesCreateOrUpdateInput,
  outputSchema: FirewallRulesCreateOrUpdateOutput,
}));
// Input Schema
export interface FirewallRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  ruleName: string;
}
export const FirewallRulesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/firewallRules/{ruleName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesDeleteInput>;

// Output Schema
export type FirewallRulesDeleteOutput = void;
export const FirewallRulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FirewallRulesDeleteOutput>;

// The operation
/**
 * Deletes a single firewall rule in a specified redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param ruleName - The name of the firewall rule.
 */
export const FirewallRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesDeleteInput,
  outputSchema: FirewallRulesDeleteOutput,
}));
// Input Schema
export interface FirewallRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  ruleName: string;
}
export const FirewallRulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
  ruleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/firewallRules/{ruleName}",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<FirewallRulesGetInput>;

// Output Schema
export interface FirewallRulesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const FirewallRulesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<FirewallRulesGetOutput>;

// The operation
/**
 * Gets a single firewall rule in a specified redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param ruleName - The name of the firewall rule.
 */
export const FirewallRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesGetInput,
  outputSchema: FirewallRulesGetOutput,
}));
// Input Schema
export interface FirewallRulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const FirewallRulesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/firewallRules",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<FirewallRulesListInput>;

// Output Schema
export interface FirewallRulesListOutput {
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
export const FirewallRulesListOutput =
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
  }) as unknown as Schema.Codec<FirewallRulesListOutput>;

// The operation
/**
 * Gets all firewall rules in the specified redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const FirewallRulesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesListInput,
  outputSchema: FirewallRulesListOutput,
}));
// Input Schema
export interface LinkedServerCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  linkedServerName: string;
  properties: {
    linkedRedisCacheId: string;
    linkedRedisCacheLocation: string;
    serverRole: "Primary" | "Secondary";
    geoReplicatedPrimaryHostName?: string;
    primaryHostName?: string;
  };
}
export const LinkedServerCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    linkedServerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      linkedRedisCacheId: Schema.String,
      linkedRedisCacheLocation: Schema.String,
      serverRole: Schema.Literals(["Primary", "Secondary"]),
      geoReplicatedPrimaryHostName: Schema.optional(Schema.String),
      primaryHostName: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers/{linkedServerName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<LinkedServerCreateInput>;

// Output Schema
export interface LinkedServerCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LinkedServerCreateOutput =
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
  }) as unknown as Schema.Codec<LinkedServerCreateOutput>;

// The operation
/**
 * Adds a linked server to the Redis cache (requires Premium SKU).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param linkedServerName - The name of the RedisLinkedServerWithProperties
 */
export const LinkedServerCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkedServerCreateInput,
  outputSchema: LinkedServerCreateOutput,
}));
// Input Schema
export interface LinkedServerDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  linkedServerName: string;
}
export const LinkedServerDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    linkedServerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers/{linkedServerName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<LinkedServerDeleteInput>;

// Output Schema
export type LinkedServerDeleteOutput = void;
export const LinkedServerDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LinkedServerDeleteOutput>;

// The operation
/**
 * Deletes the linked server from a redis cache (requires Premium SKU).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param linkedServerName - The name of the RedisLinkedServerWithProperties
 */
export const LinkedServerDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkedServerDeleteInput,
  outputSchema: LinkedServerDeleteOutput,
}));
// Input Schema
export interface LinkedServerGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  linkedServerName: string;
}
export const LinkedServerGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  linkedServerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers/{linkedServerName}",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<LinkedServerGetInput>;

// Output Schema
export interface LinkedServerGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const LinkedServerGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<LinkedServerGetOutput>;

// The operation
/**
 * Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param linkedServerName - The name of the RedisLinkedServerWithProperties
 */
export const LinkedServerGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkedServerGetInput,
  outputSchema: LinkedServerGetOutput,
}));
// Input Schema
export interface LinkedServerListInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const LinkedServerListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<LinkedServerListInput>;

// Output Schema
export interface LinkedServerListOutput {
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
export const LinkedServerListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<LinkedServerListOutput>;

// The operation
/**
 * Gets the list of linked servers associated with this redis cache (requires Premium SKU).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 */
export const LinkedServerList = /*@__PURE__*/ API.make(() => ({
  inputSchema: LinkedServerListInput,
  outputSchema: LinkedServerListOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Cache/operations",
    apiVersion: "2024-11-01",
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
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
    }),
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
export interface PatchSchedulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  default: "default";
  properties: {
    scheduleEntries: {
      dayOfWeek:
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
        | "Sunday"
        | "Everyday"
        | "Weekend";
      startHourUtc: number;
      maintenanceWindow?: string;
    }[];
  };
  location?: string;
}
export const PatchSchedulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    default: Schema.Literals(["default"]).pipe(T.PathParam()),
    properties: Schema.Struct({
      scheduleEntries: Schema.Array(
        Schema.Struct({
          dayOfWeek: Schema.Literals([
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Everyday",
            "Weekend",
          ]),
          startHourUtc: Schema.Number,
          maintenanceWindow: Schema.optional(Schema.String),
        }),
      ),
    }),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/patchSchedules/{default}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<PatchSchedulesCreateOrUpdateInput>;

// Output Schema
export interface PatchSchedulesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PatchSchedulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PatchSchedulesCreateOrUpdateOutput>;

// The operation
/**
 * Create or replace the patching schedule for Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param default - The name of the RedisPatchSchedule
 */
export const PatchSchedulesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PatchSchedulesCreateOrUpdateInput,
    outputSchema: PatchSchedulesCreateOrUpdateOutput,
  }));
// Input Schema
export interface PatchSchedulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  default: "default";
}
export const PatchSchedulesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    default: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/patchSchedules/{default}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<PatchSchedulesDeleteInput>;

// Output Schema
export type PatchSchedulesDeleteOutput = void;
export const PatchSchedulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PatchSchedulesDeleteOutput>;

// The operation
/**
 * Deletes the patching schedule of a redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param default - The name of the RedisPatchSchedule
 */
export const PatchSchedulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PatchSchedulesDeleteInput,
  outputSchema: PatchSchedulesDeleteOutput,
}));
// Input Schema
export interface PatchSchedulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  default: "default";
}
export const PatchSchedulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  default: Schema.Literals(["default"]).pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/patchSchedules/{default}",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<PatchSchedulesGetInput>;

// Output Schema
export interface PatchSchedulesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PatchSchedulesGetOutput =
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
  }) as unknown as Schema.Codec<PatchSchedulesGetOutput>;

// The operation
/**
 * Gets the patching schedule of a redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param default - The name of the RedisPatchSchedule
 */
export const PatchSchedulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PatchSchedulesGetInput,
  outputSchema: PatchSchedulesGetOutput,
}));
// Input Schema
export interface PatchSchedulesListByRedisResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const PatchSchedulesListByRedisResourceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/patchSchedules",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<PatchSchedulesListByRedisResourceInput>;

// Output Schema
export interface PatchSchedulesListByRedisResourceOutput {
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
export const PatchSchedulesListByRedisResourceOutput =
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
  }) as unknown as Schema.Codec<PatchSchedulesListByRedisResourceOutput>;

// The operation
/**
 * Gets all patch schedules in the specified redis cache (there is only one).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const PatchSchedulesListByRedisResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PatchSchedulesListByRedisResourceInput,
    outputSchema: PatchSchedulesListByRedisResourceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PrivateEndpointConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
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
export const PrivateEndpointConnectionsListOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * List all the private endpoint connections associated with the redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  privateEndpointConnectionName: string;
  properties?: {
    groupIds?: string[];
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PrivateEndpointConnectionsPutInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.optional(
            Schema.Literals(["Pending", "Approved", "Rejected"]),
          ),
          description: Schema.optional(Schema.String),
          actionsRequired: Schema.optional(Schema.String),
        }),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsPutInput>;

// Output Schema
export interface PrivateEndpointConnectionsPutOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PrivateEndpointConnectionsPutOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsPutOutput>;

// The operation
/**
 * Update the state of specified private endpoint connection associated with the redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsPut =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsPutInput,
    outputSchema: PrivateEndpointConnectionsPutOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListByRedisCacheInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const PrivateLinkResourcesListByRedisCacheInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateLinkResources",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByRedisCacheInput>;

// Output Schema
export interface PrivateLinkResourcesListByRedisCacheOutput {
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
export const PrivateLinkResourcesListByRedisCacheOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByRedisCacheOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const PrivateLinkResourcesListByRedisCache =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByRedisCacheInput,
    outputSchema: PrivateLinkResourcesListByRedisCacheOutput,
  }));
// Input Schema
export interface RedisCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
  type: string;
}
export const RedisCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cache/checkNameAvailability",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<RedisCheckNameAvailabilityInput>;

// Output Schema
export type RedisCheckNameAvailabilityOutput = void;
export const RedisCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RedisCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the redis cache name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RedisCheckNameAvailability = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisCheckNameAvailabilityInput,
  outputSchema: RedisCheckNameAvailabilityOutput,
}));
// Input Schema
export interface RedisCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  properties: {
    redisConfiguration?: {
      "rdb-backup-enabled"?: string;
      "rdb-backup-frequency"?: string;
      "rdb-backup-max-snapshot-count"?: string;
      "rdb-storage-connection-string"?: string;
      "aof-backup-enabled"?: string;
      "aof-storage-connection-string-0"?: string;
      "aof-storage-connection-string-1"?: string;
      "maxfragmentationmemory-reserved"?: string;
      "maxmemory-policy"?: string;
      "maxmemory-reserved"?: string;
      "maxmemory-delta"?: string;
      maxclients?: string;
      "notify-keyspace-events"?: string;
      "preferred-data-archive-auth-method"?: string;
      "preferred-data-persistence-auth-method"?: string;
      "zonal-configuration"?: string;
      authnotrequired?: string;
      "storage-subscription-id"?: string;
      "aad-enabled"?: string;
    };
    redisVersion?: string;
    enableNonSslPort?: boolean;
    replicasPerMaster?: number;
    replicasPerPrimary?: number;
    tenantSettings?: Record<string, string>;
    shardCount?: number;
    minimumTlsVersion?: "1.0" | "1.1" | "1.2";
    publicNetworkAccess?: "Enabled" | "Disabled";
    updateChannel?: "Stable" | "Preview";
    disableAccessKeyAuthentication?: boolean;
    zonalAllocationPolicy?: "Automatic" | "UserDefined" | "NoZones";
  };
  zones?: string[];
  location: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const RedisCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    redisConfiguration: Schema.optional(
      Schema.Struct({
        "rdb-backup-enabled": Schema.optional(Schema.String),
        "rdb-backup-frequency": Schema.optional(Schema.String),
        "rdb-backup-max-snapshot-count": Schema.optional(Schema.String),
        "rdb-storage-connection-string": Schema.optional(Schema.String),
        "aof-backup-enabled": Schema.optional(Schema.String),
        "aof-storage-connection-string-0": Schema.optional(Schema.String),
        "aof-storage-connection-string-1": Schema.optional(Schema.String),
        "maxfragmentationmemory-reserved": Schema.optional(Schema.String),
        "maxmemory-policy": Schema.optional(Schema.String),
        "maxmemory-reserved": Schema.optional(Schema.String),
        "maxmemory-delta": Schema.optional(Schema.String),
        maxclients: Schema.optional(Schema.String),
        "notify-keyspace-events": Schema.optional(Schema.String),
        "preferred-data-archive-auth-method": Schema.optional(Schema.String),
        "preferred-data-persistence-auth-method": Schema.optional(
          Schema.String,
        ),
        "zonal-configuration": Schema.optional(Schema.String),
        authnotrequired: Schema.optional(Schema.String),
        "storage-subscription-id": Schema.optional(Schema.String),
        "aad-enabled": Schema.optional(Schema.String),
      }),
    ),
    redisVersion: Schema.optional(Schema.String),
    enableNonSslPort: Schema.optional(Schema.Boolean),
    replicasPerMaster: Schema.optional(Schema.Number),
    replicasPerPrimary: Schema.optional(Schema.Number),
    tenantSettings: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    shardCount: Schema.optional(Schema.Number),
    minimumTlsVersion: Schema.optional(Schema.Literals(["1.0", "1.1", "1.2"])),
    publicNetworkAccess: Schema.optional(
      Schema.Literals(["Enabled", "Disabled"]),
    ),
    updateChannel: Schema.optional(Schema.Literals(["Stable", "Preview"])),
    disableAccessKeyAuthentication: Schema.optional(Schema.Boolean),
    zonalAllocationPolicy: Schema.optional(
      Schema.Literals(["Automatic", "UserDefined", "NoZones"]),
    ),
  }),
  zones: Schema.optional(Schema.Array(Schema.String)),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned, UserAssigned",
      ]),
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
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<RedisCreateInput>;

// Output Schema
export interface RedisCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RedisCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<RedisCreateOutput>;

// The operation
/**
 * Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisCreateInput,
  outputSchema: RedisCreateOutput,
}));
// Input Schema
export interface RedisDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const RedisDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<RedisDeleteInput>;

// Output Schema
export type RedisDeleteOutput = void;
export const RedisDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RedisDeleteOutput>;

// The operation
/**
 * Deletes a Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisDeleteInput,
  outputSchema: RedisDeleteOutput,
}));
// Input Schema
export interface RedisExportDataInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  format?: string;
  prefix: string;
  container: string;
  "preferred-data-archive-auth-method"?: string;
  "storage-subscription-id"?: string;
}
export const RedisExportDataInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.String),
  prefix: Schema.String,
  container: Schema.String,
  "preferred-data-archive-auth-method": Schema.optional(Schema.String),
  "storage-subscription-id": Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/export",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<RedisExportDataInput>;

// Output Schema
export type RedisExportDataOutput = void;
export const RedisExportDataOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RedisExportDataOutput>;

// The operation
/**
 * Export data from the redis cache to blobs in a container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisExportData = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisExportDataInput,
  outputSchema: RedisExportDataOutput,
}));
// Input Schema
export interface RedisFlushCacheInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const RedisFlushCacheInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/flush",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<RedisFlushCacheInput>;

// Output Schema
export interface RedisFlushCacheOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const RedisFlushCacheOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.String,
  percentComplete: Schema.optional(Schema.Number),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  operations: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        status: Schema.String,
        percentComplete: Schema.optional(Schema.Number),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.String),
        operations: Schema.optional(Schema.Array(Schema.Unknown)),
        error: Schema.optional(
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
      }),
    ),
  ),
  error: Schema.optional(
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
}) as unknown as Schema.Codec<RedisFlushCacheOutput>;

// The operation
/**
 * Deletes all of the keys in a cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const RedisFlushCache = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisFlushCacheInput,
  outputSchema: RedisFlushCacheOutput,
}));
// Input Schema
export interface RedisForceRebootInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  rebootType?: "PrimaryNode" | "SecondaryNode" | "AllNodes";
  shardId?: number;
  ports?: number[];
}
export const RedisForceRebootInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  rebootType: Schema.optional(
    Schema.Literals(["PrimaryNode", "SecondaryNode", "AllNodes"]),
  ),
  shardId: Schema.optional(Schema.Number),
  ports: Schema.optional(Schema.Array(Schema.Number)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/forceReboot",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<RedisForceRebootInput>;

// Output Schema
export interface RedisForceRebootOutput {
  message?: string;
}
export const RedisForceRebootOutput = /*@__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<RedisForceRebootOutput>;

// The operation
/**
 * Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisForceReboot = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisForceRebootInput,
  outputSchema: RedisForceRebootOutput,
}));
// Input Schema
export interface RedisGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const RedisGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<RedisGetInput>;

// Output Schema
export interface RedisGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RedisGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<RedisGetOutput>;

// The operation
/**
 * Gets a Redis cache (resource description).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisGetInput,
  outputSchema: RedisGetOutput,
}));
// Input Schema
export interface RedisImportDataInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  format?: string;
  files: string[];
  "preferred-data-archive-auth-method"?: string;
  "storage-subscription-id"?: string;
}
export const RedisImportDataInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.String),
  files: Schema.Array(Schema.String),
  "preferred-data-archive-auth-method": Schema.optional(Schema.String),
  "storage-subscription-id": Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/import",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<RedisImportDataInput>;

// Output Schema
export type RedisImportDataOutput = void;
export const RedisImportDataOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RedisImportDataOutput>;

// The operation
/**
 * Import data into Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisImportData = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisImportDataInput,
  outputSchema: RedisImportDataOutput,
}));
// Input Schema
export interface RedisListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const RedisListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<RedisListByResourceGroupInput>;

// Output Schema
export interface RedisListByResourceGroupOutput {
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
export const RedisListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<RedisListByResourceGroupOutput>;

// The operation
/**
 * Lists all Redis caches in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const RedisListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisListByResourceGroupInput,
  outputSchema: RedisListByResourceGroupOutput,
}));
// Input Schema
export interface RedisListBySubscriptionInput {
  subscriptionId: string;
}
export const RedisListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cache/redis",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<RedisListBySubscriptionInput>;

// Output Schema
export interface RedisListBySubscriptionOutput {
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
export const RedisListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<RedisListBySubscriptionOutput>;

// The operation
/**
 * Gets all Redis caches in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RedisListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisListBySubscriptionInput,
  outputSchema: RedisListBySubscriptionOutput,
}));
// Input Schema
export interface RedisListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const RedisListKeysInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/listKeys",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<RedisListKeysInput>;

// Output Schema
export interface RedisListKeysOutput {
  primaryKey?: string;
  secondaryKey?: string;
}
export const RedisListKeysOutput = /*@__PURE__*/ Schema.Struct({
  primaryKey: Schema.optional(Schema.String),
  secondaryKey: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<RedisListKeysOutput>;

// The operation
/**
 * Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisListKeysInput,
  outputSchema: RedisListKeysOutput,
}));
// Input Schema
export interface RedisListUpgradeNotificationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  history: number;
}
export const RedisListUpgradeNotificationsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    history: Schema.Number,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/listUpgradeNotifications",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<RedisListUpgradeNotificationsInput>;

// Output Schema
export interface RedisListUpgradeNotificationsOutput {
  value: {
    name?: string;
    timestamp?: string;
    upsellNotification?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const RedisListUpgradeNotificationsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        timestamp: Schema.optional(Schema.String),
        upsellNotification: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RedisListUpgradeNotificationsOutput>;

// The operation
/**
 * [Deprecated] Gets any upgrade notifications for a Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 * @param history - how many minutes in past to look for upgrade notifications
 */
export const RedisListUpgradeNotifications =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RedisListUpgradeNotificationsInput,
    outputSchema: RedisListUpgradeNotificationsOutput,
  }));
// Input Schema
export interface RedisRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  keyType: "Primary" | "Secondary";
}
export const RedisRegenerateKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    keyType: Schema.Literals(["Primary", "Secondary"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/regenerateKey",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<RedisRegenerateKeyInput>;

// Output Schema
export interface RedisRegenerateKeyOutput {
  primaryKey?: string;
  secondaryKey?: string;
}
export const RedisRegenerateKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RedisRegenerateKeyOutput>;

// The operation
/**
 * Regenerate Redis cache's access keys. This operation requires write permission to the cache resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisRegenerateKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisRegenerateKeyInput,
  outputSchema: RedisRegenerateKeyOutput,
}));
// Input Schema
export interface RedisUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  properties?: {
    redisConfiguration?: {
      "rdb-backup-enabled"?: string;
      "rdb-backup-frequency"?: string;
      "rdb-backup-max-snapshot-count"?: string;
      "rdb-storage-connection-string"?: string;
      "aof-backup-enabled"?: string;
      "aof-storage-connection-string-0"?: string;
      "aof-storage-connection-string-1"?: string;
      "maxfragmentationmemory-reserved"?: string;
      "maxmemory-policy"?: string;
      "maxmemory-reserved"?: string;
      "maxmemory-delta"?: string;
      maxclients?: string;
      "notify-keyspace-events"?: string;
      "preferred-data-archive-auth-method"?: string;
      "preferred-data-persistence-auth-method"?: string;
      "zonal-configuration"?: string;
      authnotrequired?: string;
      "storage-subscription-id"?: string;
      "aad-enabled"?: string;
    };
    redisVersion?: string;
    enableNonSslPort?: boolean;
    replicasPerMaster?: number;
    replicasPerPrimary?: number;
    tenantSettings?: Record<string, string>;
    shardCount?: number;
    minimumTlsVersion?: "1.0" | "1.1" | "1.2";
    publicNetworkAccess?: "Enabled" | "Disabled";
    updateChannel?: "Stable" | "Preview";
    disableAccessKeyAuthentication?: boolean;
    zonalAllocationPolicy?: "Automatic" | "UserDefined" | "NoZones";
  };
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const RedisUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      redisConfiguration: Schema.optional(
        Schema.Struct({
          "rdb-backup-enabled": Schema.optional(Schema.String),
          "rdb-backup-frequency": Schema.optional(Schema.String),
          "rdb-backup-max-snapshot-count": Schema.optional(Schema.String),
          "rdb-storage-connection-string": Schema.optional(Schema.String),
          "aof-backup-enabled": Schema.optional(Schema.String),
          "aof-storage-connection-string-0": Schema.optional(Schema.String),
          "aof-storage-connection-string-1": Schema.optional(Schema.String),
          "maxfragmentationmemory-reserved": Schema.optional(Schema.String),
          "maxmemory-policy": Schema.optional(Schema.String),
          "maxmemory-reserved": Schema.optional(Schema.String),
          "maxmemory-delta": Schema.optional(Schema.String),
          maxclients: Schema.optional(Schema.String),
          "notify-keyspace-events": Schema.optional(Schema.String),
          "preferred-data-archive-auth-method": Schema.optional(Schema.String),
          "preferred-data-persistence-auth-method": Schema.optional(
            Schema.String,
          ),
          "zonal-configuration": Schema.optional(Schema.String),
          authnotrequired: Schema.optional(Schema.String),
          "storage-subscription-id": Schema.optional(Schema.String),
          "aad-enabled": Schema.optional(Schema.String),
        }),
      ),
      redisVersion: Schema.optional(Schema.String),
      enableNonSslPort: Schema.optional(Schema.Boolean),
      replicasPerMaster: Schema.optional(Schema.Number),
      replicasPerPrimary: Schema.optional(Schema.Number),
      tenantSettings: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
      shardCount: Schema.optional(Schema.Number),
      minimumTlsVersion: Schema.optional(
        Schema.Literals(["1.0", "1.1", "1.2"]),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      updateChannel: Schema.optional(Schema.Literals(["Stable", "Preview"])),
      disableAccessKeyAuthentication: Schema.optional(Schema.Boolean),
      zonalAllocationPolicy: Schema.optional(
        Schema.Literals(["Automatic", "UserDefined", "NoZones"]),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned, UserAssigned",
      ]),
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}",
    apiVersion: "2024-11-01",
  }),
) as unknown as Schema.Codec<RedisUpdateInput>;

// Output Schema
export interface RedisUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RedisUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<RedisUpdateOutput>;

// The operation
/**
 * Update an existing Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RedisUpdateInput,
  outputSchema: RedisUpdateOutput,
}));
