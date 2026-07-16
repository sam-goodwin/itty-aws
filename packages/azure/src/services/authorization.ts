/**
 * Azure Authorization API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DenyAssignmentsGetInput {
  scope: string;
  denyAssignmentId: string;
}
export const DenyAssignmentsGetInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    denyAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<DenyAssignmentsGetInput>;

// Output Schema
export interface DenyAssignmentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    denyAssignmentName?: string;
    description?: string;
    permissions?: {
      actions?: string[];
      notActions?: string[];
      dataActions?: string[];
      notDataActions?: string[];
      condition?: string;
      conditionVersion?: string;
    }[];
    scope?: string;
    doNotApplyToChildScopes?: boolean;
    principals?: {
      id?: string;
      displayName?: string;
      type?: string;
      email?: string;
    }[];
    excludePrincipals?: {
      id?: string;
      displayName?: string;
      type?: string;
      email?: string;
    }[];
    isSystemProtected?: boolean;
    condition?: string;
    conditionVersion?: string;
    createdOn?: string;
    updatedOn?: string;
    createdBy?: string;
    updatedBy?: string;
  };
}
export const DenyAssignmentsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        denyAssignmentName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        permissions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              actions: Schema.optional(Schema.Array(Schema.String)),
              notActions: Schema.optional(Schema.Array(Schema.String)),
              dataActions: Schema.optional(Schema.Array(Schema.String)),
              notDataActions: Schema.optional(Schema.Array(Schema.String)),
              condition: Schema.optional(Schema.String),
              conditionVersion: Schema.optional(Schema.String),
            }),
          ),
        ),
        scope: Schema.optional(Schema.String),
        doNotApplyToChildScopes: Schema.optional(Schema.Boolean),
        principals: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              email: Schema.optional(Schema.String),
            }),
          ),
        ),
        excludePrincipals: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              email: Schema.optional(Schema.String),
            }),
          ),
        ),
        isSystemProtected: Schema.optional(Schema.Boolean),
        condition: Schema.optional(Schema.String),
        conditionVersion: Schema.optional(Schema.String),
        createdOn: Schema.optional(Schema.String),
        updatedOn: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        updatedBy: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DenyAssignmentsGetOutput>;

// The operation
/**
 * Get the specified deny assignment.
 *
 * @param scope - The scope of the deny assignment.
 * @param denyAssignmentId - The ID of the deny assignment to get.
 * @param api-version - The API version to use for this operation.
 */
export const DenyAssignmentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DenyAssignmentsGetInput,
  outputSchema: DenyAssignmentsGetOutput,
}));
// Input Schema
export interface DenyAssignmentsGetByIdInput {
  denyAssignmentId: string;
}
export const DenyAssignmentsGetByIdInput =
  /*@__PURE__*/ Schema.Struct({
    denyAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{denyAssignmentId}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<DenyAssignmentsGetByIdInput>;

// Output Schema
export interface DenyAssignmentsGetByIdOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    denyAssignmentName?: string;
    description?: string;
    permissions?: {
      actions?: string[];
      notActions?: string[];
      dataActions?: string[];
      notDataActions?: string[];
      condition?: string;
      conditionVersion?: string;
    }[];
    scope?: string;
    doNotApplyToChildScopes?: boolean;
    principals?: {
      id?: string;
      displayName?: string;
      type?: string;
      email?: string;
    }[];
    excludePrincipals?: {
      id?: string;
      displayName?: string;
      type?: string;
      email?: string;
    }[];
    isSystemProtected?: boolean;
    condition?: string;
    conditionVersion?: string;
    createdOn?: string;
    updatedOn?: string;
    createdBy?: string;
    updatedBy?: string;
  };
}
export const DenyAssignmentsGetByIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        denyAssignmentName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        permissions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              actions: Schema.optional(Schema.Array(Schema.String)),
              notActions: Schema.optional(Schema.Array(Schema.String)),
              dataActions: Schema.optional(Schema.Array(Schema.String)),
              notDataActions: Schema.optional(Schema.Array(Schema.String)),
              condition: Schema.optional(Schema.String),
              conditionVersion: Schema.optional(Schema.String),
            }),
          ),
        ),
        scope: Schema.optional(Schema.String),
        doNotApplyToChildScopes: Schema.optional(Schema.Boolean),
        principals: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              email: Schema.optional(Schema.String),
            }),
          ),
        ),
        excludePrincipals: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              email: Schema.optional(Schema.String),
            }),
          ),
        ),
        isSystemProtected: Schema.optional(Schema.Boolean),
        condition: Schema.optional(Schema.String),
        conditionVersion: Schema.optional(Schema.String),
        createdOn: Schema.optional(Schema.String),
        updatedOn: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        updatedBy: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DenyAssignmentsGetByIdOutput>;

// The operation
/**
 * Gets a deny assignment by ID.
 *
 * @param denyAssignmentId - The fully qualified deny assignment ID. For example, use the format, /subscriptions/{guid}/providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId} for subscription level deny assignments, or /providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId} for tenant level deny assignments.
 * @param api-version - The API version to use for this operation.
 */
export const DenyAssignmentsGetById = /*@__PURE__*/ API.make(() => ({
  inputSchema: DenyAssignmentsGetByIdInput,
  outputSchema: DenyAssignmentsGetByIdOutput,
}));
// Input Schema
export interface DenyAssignmentsListInput {
  subscriptionId: string;
  $filter?: string;
}
export const DenyAssignmentsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/denyAssignments",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<DenyAssignmentsListInput>;

// Output Schema
export interface DenyAssignmentsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      denyAssignmentName?: string;
      description?: string;
      permissions?: {
        actions?: string[];
        notActions?: string[];
        dataActions?: string[];
        notDataActions?: string[];
        condition?: string;
        conditionVersion?: string;
      }[];
      scope?: string;
      doNotApplyToChildScopes?: boolean;
      principals?: {
        id?: string;
        displayName?: string;
        type?: string;
        email?: string;
      }[];
      excludePrincipals?: {
        id?: string;
        displayName?: string;
        type?: string;
        email?: string;
      }[];
      isSystemProtected?: boolean;
      condition?: string;
      conditionVersion?: string;
      createdOn?: string;
      updatedOn?: string;
      createdBy?: string;
      updatedBy?: string;
    };
  }[];
  nextLink?: string;
}
export const DenyAssignmentsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              denyAssignmentName: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              permissions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    actions: Schema.optional(Schema.Array(Schema.String)),
                    notActions: Schema.optional(Schema.Array(Schema.String)),
                    dataActions: Schema.optional(Schema.Array(Schema.String)),
                    notDataActions: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    condition: Schema.optional(Schema.String),
                    conditionVersion: Schema.optional(Schema.String),
                  }),
                ),
              ),
              scope: Schema.optional(Schema.String),
              doNotApplyToChildScopes: Schema.optional(Schema.Boolean),
              principals: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                    email: Schema.optional(Schema.String),
                  }),
                ),
              ),
              excludePrincipals: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                    email: Schema.optional(Schema.String),
                  }),
                ),
              ),
              isSystemProtected: Schema.optional(Schema.Boolean),
              condition: Schema.optional(Schema.String),
              conditionVersion: Schema.optional(Schema.String),
              createdOn: Schema.optional(Schema.String),
              updatedOn: Schema.optional(Schema.String),
              createdBy: Schema.optional(Schema.String),
              updatedBy: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DenyAssignmentsListOutput>;

// The operation
/**
 * Gets all deny assignments for the subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param $filter - The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned.
 */
export const DenyAssignmentsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DenyAssignmentsListInput,
  outputSchema: DenyAssignmentsListOutput,
}));
// Input Schema
export interface DenyAssignmentsListForResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceProviderNamespace: string;
  parentResourcePath: string;
  resourceType: string;
  resourceName: string;
  $filter?: string;
}
export const DenyAssignmentsListForResourceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceProviderNamespace: Schema.String.pipe(T.PathParam()),
    parentResourcePath: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/denyAssignments",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<DenyAssignmentsListForResourceInput>;

// Output Schema
export interface DenyAssignmentsListForResourceOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      denyAssignmentName?: string;
      description?: string;
      permissions?: {
        actions?: string[];
        notActions?: string[];
        dataActions?: string[];
        notDataActions?: string[];
        condition?: string;
        conditionVersion?: string;
      }[];
      scope?: string;
      doNotApplyToChildScopes?: boolean;
      principals?: {
        id?: string;
        displayName?: string;
        type?: string;
        email?: string;
      }[];
      excludePrincipals?: {
        id?: string;
        displayName?: string;
        type?: string;
        email?: string;
      }[];
      isSystemProtected?: boolean;
      condition?: string;
      conditionVersion?: string;
      createdOn?: string;
      updatedOn?: string;
      createdBy?: string;
      updatedBy?: string;
    };
  }[];
  nextLink?: string;
}
export const DenyAssignmentsListForResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              denyAssignmentName: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              permissions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    actions: Schema.optional(Schema.Array(Schema.String)),
                    notActions: Schema.optional(Schema.Array(Schema.String)),
                    dataActions: Schema.optional(Schema.Array(Schema.String)),
                    notDataActions: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    condition: Schema.optional(Schema.String),
                    conditionVersion: Schema.optional(Schema.String),
                  }),
                ),
              ),
              scope: Schema.optional(Schema.String),
              doNotApplyToChildScopes: Schema.optional(Schema.Boolean),
              principals: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                    email: Schema.optional(Schema.String),
                  }),
                ),
              ),
              excludePrincipals: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                    email: Schema.optional(Schema.String),
                  }),
                ),
              ),
              isSystemProtected: Schema.optional(Schema.Boolean),
              condition: Schema.optional(Schema.String),
              conditionVersion: Schema.optional(Schema.String),
              createdOn: Schema.optional(Schema.String),
              updatedOn: Schema.optional(Schema.String),
              createdBy: Schema.optional(Schema.String),
              updatedBy: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DenyAssignmentsListForResourceOutput>;

// The operation
/**
 * Gets deny assignments for a resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceProviderNamespace - The namespace of the resource provider.
 * @param parentResourcePath - The parent resource identity.
 * @param resourceType - The resource type of the resource.
 * @param resourceName - The name of the resource to get deny assignments for.
 * @param api-version - The API version to use for this operation.
 * @param $filter - The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned.
 */
export const DenyAssignmentsListForResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DenyAssignmentsListForResourceInput,
    outputSchema: DenyAssignmentsListForResourceOutput,
  }));
// Input Schema
export interface DenyAssignmentsListForResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
}
export const DenyAssignmentsListForResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/denyAssignments",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<DenyAssignmentsListForResourceGroupInput>;

// Output Schema
export interface DenyAssignmentsListForResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      denyAssignmentName?: string;
      description?: string;
      permissions?: {
        actions?: string[];
        notActions?: string[];
        dataActions?: string[];
        notDataActions?: string[];
        condition?: string;
        conditionVersion?: string;
      }[];
      scope?: string;
      doNotApplyToChildScopes?: boolean;
      principals?: {
        id?: string;
        displayName?: string;
        type?: string;
        email?: string;
      }[];
      excludePrincipals?: {
        id?: string;
        displayName?: string;
        type?: string;
        email?: string;
      }[];
      isSystemProtected?: boolean;
      condition?: string;
      conditionVersion?: string;
      createdOn?: string;
      updatedOn?: string;
      createdBy?: string;
      updatedBy?: string;
    };
  }[];
  nextLink?: string;
}
export const DenyAssignmentsListForResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              denyAssignmentName: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              permissions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    actions: Schema.optional(Schema.Array(Schema.String)),
                    notActions: Schema.optional(Schema.Array(Schema.String)),
                    dataActions: Schema.optional(Schema.Array(Schema.String)),
                    notDataActions: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    condition: Schema.optional(Schema.String),
                    conditionVersion: Schema.optional(Schema.String),
                  }),
                ),
              ),
              scope: Schema.optional(Schema.String),
              doNotApplyToChildScopes: Schema.optional(Schema.Boolean),
              principals: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                    email: Schema.optional(Schema.String),
                  }),
                ),
              ),
              excludePrincipals: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                    email: Schema.optional(Schema.String),
                  }),
                ),
              ),
              isSystemProtected: Schema.optional(Schema.Boolean),
              condition: Schema.optional(Schema.String),
              conditionVersion: Schema.optional(Schema.String),
              createdOn: Schema.optional(Schema.String),
              updatedOn: Schema.optional(Schema.String),
              createdBy: Schema.optional(Schema.String),
              updatedBy: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DenyAssignmentsListForResourceGroupOutput>;

// The operation
/**
 * Gets deny assignments for a resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param $filter - The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned.
 */
export const DenyAssignmentsListForResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DenyAssignmentsListForResourceGroupInput,
    outputSchema: DenyAssignmentsListForResourceGroupOutput,
  }));
// Input Schema
export interface DenyAssignmentsListForScopeInput {
  scope: string;
  $filter?: string;
}
export const DenyAssignmentsListForScopeInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.Authorization/denyAssignments",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<DenyAssignmentsListForScopeInput>;

// Output Schema
export interface DenyAssignmentsListForScopeOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      denyAssignmentName?: string;
      description?: string;
      permissions?: {
        actions?: string[];
        notActions?: string[];
        dataActions?: string[];
        notDataActions?: string[];
        condition?: string;
        conditionVersion?: string;
      }[];
      scope?: string;
      doNotApplyToChildScopes?: boolean;
      principals?: {
        id?: string;
        displayName?: string;
        type?: string;
        email?: string;
      }[];
      excludePrincipals?: {
        id?: string;
        displayName?: string;
        type?: string;
        email?: string;
      }[];
      isSystemProtected?: boolean;
      condition?: string;
      conditionVersion?: string;
      createdOn?: string;
      updatedOn?: string;
      createdBy?: string;
      updatedBy?: string;
    };
  }[];
  nextLink?: string;
}
export const DenyAssignmentsListForScopeOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              denyAssignmentName: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              permissions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    actions: Schema.optional(Schema.Array(Schema.String)),
                    notActions: Schema.optional(Schema.Array(Schema.String)),
                    dataActions: Schema.optional(Schema.Array(Schema.String)),
                    notDataActions: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    condition: Schema.optional(Schema.String),
                    conditionVersion: Schema.optional(Schema.String),
                  }),
                ),
              ),
              scope: Schema.optional(Schema.String),
              doNotApplyToChildScopes: Schema.optional(Schema.Boolean),
              principals: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                    email: Schema.optional(Schema.String),
                  }),
                ),
              ),
              excludePrincipals: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                    email: Schema.optional(Schema.String),
                  }),
                ),
              ),
              isSystemProtected: Schema.optional(Schema.Boolean),
              condition: Schema.optional(Schema.String),
              conditionVersion: Schema.optional(Schema.String),
              createdOn: Schema.optional(Schema.String),
              updatedOn: Schema.optional(Schema.String),
              createdBy: Schema.optional(Schema.String),
              updatedBy: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DenyAssignmentsListForScopeOutput>;

// The operation
/**
 * Gets deny assignments for a scope.
 *
 * @param scope - The scope of the deny assignments.
 * @param api-version - The API version to use for this operation.
 * @param $filter - The filter to apply on the operation. Use $filter=atScope() to return all deny assignments at or above the scope. Use $filter=denyAssignmentName eq '{name}' to search deny assignments by name at specified scope. Use $filter=principalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. Use $filter=gdprExportPrincipalId eq '{id}' to return all deny assignments at, above and below the scope for the specified principal. This filter is different from the principalId filter as it returns not only those deny assignments that contain the specified principal is the Principals list but also those deny assignments that contain the specified principal is the ExcludePrincipals list. Additionally, when gdprExportPrincipalId filter is used, only the deny assignment name and description properties are returned.
 */
export const DenyAssignmentsListForScope = /*@__PURE__*/ API.make(() => ({
  inputSchema: DenyAssignmentsListForScopeInput,
  outputSchema: DenyAssignmentsListForScopeOutput,
}));
// Input Schema
export interface PermissionsListForResourceInput {
  resourceGroupName: string;
  resourceProviderNamespace: string;
  parentResourcePath: string;
  resourceType: string;
  resourceName: string;
  subscriptionId: string;
}
export const PermissionsListForResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceProviderNamespace: Schema.String.pipe(T.PathParam()),
    parentResourcePath: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/permissions",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<PermissionsListForResourceInput>;

// Output Schema
export interface PermissionsListForResourceOutput {
  value?: {
    actions?: string[];
    notActions?: string[];
    dataActions?: string[];
    notDataActions?: string[];
  }[];
  nextLink?: string;
}
export const PermissionsListForResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          actions: Schema.optional(Schema.Array(Schema.String)),
          notActions: Schema.optional(Schema.Array(Schema.String)),
          dataActions: Schema.optional(Schema.Array(Schema.String)),
          notDataActions: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PermissionsListForResourceOutput>;

// The operation
/**
 * Gets all permissions the caller has for a resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceProviderNamespace - The namespace of the resource provider.
 * @param parentResourcePath - The parent resource identity.
 * @param resourceType - The resource type of the resource.
 * @param resourceName - The name of the resource to get the permissions for.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PermissionsListForResource = /*@__PURE__*/ API.make(() => ({
  inputSchema: PermissionsListForResourceInput,
  outputSchema: PermissionsListForResourceOutput,
}));
// Input Schema
export interface PermissionsListForResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const PermissionsListForResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Authorization/permissions",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<PermissionsListForResourceGroupInput>;

// Output Schema
export interface PermissionsListForResourceGroupOutput {
  value?: {
    actions?: string[];
    notActions?: string[];
    dataActions?: string[];
    notDataActions?: string[];
  }[];
  nextLink?: string;
}
export const PermissionsListForResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          actions: Schema.optional(Schema.Array(Schema.String)),
          notActions: Schema.optional(Schema.Array(Schema.String)),
          dataActions: Schema.optional(Schema.Array(Schema.String)),
          notDataActions: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PermissionsListForResourceGroupOutput>;

// The operation
/**
 * Gets all permissions the caller has for a resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PermissionsListForResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PermissionsListForResourceGroupInput,
    outputSchema: PermissionsListForResourceGroupOutput,
  }));
// Input Schema
export interface ProviderOperationsMetadataGetInput {
  resourceProviderNamespace: string;
  $expand?: string;
}
export const ProviderOperationsMetadataGetInput =
  /*@__PURE__*/ Schema.Struct({
    resourceProviderNamespace: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Authorization/providerOperations/{resourceProviderNamespace}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<ProviderOperationsMetadataGetInput>;

// Output Schema
export interface ProviderOperationsMetadataGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ProviderOperationsMetadataGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProviderOperationsMetadataGetOutput>;

// The operation
/**
 * Gets provider operations metadata for the specified resource provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceProviderNamespace - The namespace of the resource provider.
 * @param $expand - Specifies whether to expand the values.
 */
export const ProviderOperationsMetadataGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderOperationsMetadataGetInput,
    outputSchema: ProviderOperationsMetadataGetOutput,
  }));
// Input Schema
export interface ProviderOperationsMetadataListInput {
  $expand?: string;
}
export const ProviderOperationsMetadataListInput =
  /*@__PURE__*/ Schema.Struct({
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Authorization/providerOperations",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<ProviderOperationsMetadataListInput>;

// Output Schema
export interface ProviderOperationsMetadataListOutput {
  value: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ProviderOperationsMetadataListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProviderOperationsMetadataListOutput>;

// The operation
/**
 * Gets provider operations metadata for all resource providers.
 *
 * @param api-version - The API version to use for this operation.
 * @param $expand - Specifies whether to expand the values.
 */
export const ProviderOperationsMetadataList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderOperationsMetadataListInput,
    outputSchema: ProviderOperationsMetadataListOutput,
  }));
// Input Schema
export interface RoleAssignmentsCreateInput {
  scope: string;
  roleAssignmentName: string;
  properties: {
    scope?: string;
    roleDefinitionId: string;
    principalId: string;
    principalType?:
      | "User"
      | "Group"
      | "ServicePrincipal"
      | "ForeignGroup"
      | "Device";
    description?: string;
    condition?: string;
    conditionVersion?: string;
    createdOn?: string;
    updatedOn?: string;
    createdBy?: string;
    updatedBy?: string;
    delegatedManagedIdentityResourceId?: string;
  };
}
export const RoleAssignmentsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    roleAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      scope: Schema.optional(Schema.String),
      roleDefinitionId: Schema.String,
      principalId: Schema.String,
      principalType: Schema.optional(
        Schema.Literals([
          "User",
          "Group",
          "ServicePrincipal",
          "ForeignGroup",
          "Device",
        ]),
      ),
      description: Schema.optional(Schema.String),
      condition: Schema.optional(Schema.String),
      conditionVersion: Schema.optional(Schema.String),
      createdOn: Schema.optional(Schema.String),
      updatedOn: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      updatedBy: Schema.optional(Schema.String),
      delegatedManagedIdentityResourceId: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsCreateInput>;

// Output Schema
export interface RoleAssignmentsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RoleAssignmentsCreateOutput =
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
  }) as unknown as Schema.Codec<RoleAssignmentsCreateOutput>;

// The operation
/**
 * Create or update a role assignment by scope and name.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param roleAssignmentName - The name of the role assignment. It can be any valid GUID.
 */
export const RoleAssignmentsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoleAssignmentsCreateInput,
  outputSchema: RoleAssignmentsCreateOutput,
}));
// Input Schema
export interface RoleAssignmentsCreateByIdInput {
  roleAssignmentId: string;
  properties: {
    scope?: string;
    roleDefinitionId: string;
    principalId: string;
    principalType?:
      | "User"
      | "Group"
      | "ServicePrincipal"
      | "ForeignGroup"
      | "Device";
    description?: string;
    condition?: string;
    conditionVersion?: string;
    createdOn?: string;
    updatedOn?: string;
    createdBy?: string;
    updatedBy?: string;
    delegatedManagedIdentityResourceId?: string;
  };
}
export const RoleAssignmentsCreateByIdInput =
  /*@__PURE__*/ Schema.Struct({
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      scope: Schema.optional(Schema.String),
      roleDefinitionId: Schema.String,
      principalId: Schema.String,
      principalType: Schema.optional(
        Schema.Literals([
          "User",
          "Group",
          "ServicePrincipal",
          "ForeignGroup",
          "Device",
        ]),
      ),
      description: Schema.optional(Schema.String),
      condition: Schema.optional(Schema.String),
      conditionVersion: Schema.optional(Schema.String),
      createdOn: Schema.optional(Schema.String),
      updatedOn: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      updatedBy: Schema.optional(Schema.String),
      delegatedManagedIdentityResourceId: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{roleAssignmentId}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsCreateByIdInput>;

// Output Schema
export interface RoleAssignmentsCreateByIdOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RoleAssignmentsCreateByIdOutput =
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
  }) as unknown as Schema.Codec<RoleAssignmentsCreateByIdOutput>;

// The operation
/**
 * Create or update a role assignment by ID.
 *
 * @param api-version - The API version to use for this operation.
 * @param roleAssignmentId - The fully qualified ID of the role assignment including scope, resource name, and resource type. Format: /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/<SUB_ID>/resourcegroups/<RESOURCE_GROUP>/providers/Microsoft.Authorization/roleAssignments/<ROLE_ASSIGNMENT_NAME>
 */
export const RoleAssignmentsCreateById = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoleAssignmentsCreateByIdInput,
  outputSchema: RoleAssignmentsCreateByIdOutput,
}));
// Input Schema
export interface RoleAssignmentsDeleteInput {
  scope: string;
  roleAssignmentName: string;
  tenantId?: string;
}
export const RoleAssignmentsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    roleAssignmentName: Schema.String.pipe(T.PathParam()),
    tenantId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsDeleteInput>;

// Output Schema
export interface RoleAssignmentsDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RoleAssignmentsDeleteOutput =
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
  }) as unknown as Schema.Codec<RoleAssignmentsDeleteOutput>;

// The operation
/**
 * Delete a role assignment by scope and name.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param tenantId - Tenant ID for cross-tenant request
 * @param roleAssignmentName - The name of the role assignment. It can be any valid GUID.
 */
export const RoleAssignmentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoleAssignmentsDeleteInput,
  outputSchema: RoleAssignmentsDeleteOutput,
}));
// Input Schema
export interface RoleAssignmentsDeleteByIdInput {
  roleAssignmentId: string;
  tenantId?: string;
}
export const RoleAssignmentsDeleteByIdInput =
  /*@__PURE__*/ Schema.Struct({
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
    tenantId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{roleAssignmentId}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsDeleteByIdInput>;

// Output Schema
export interface RoleAssignmentsDeleteByIdOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RoleAssignmentsDeleteByIdOutput =
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
  }) as unknown as Schema.Codec<RoleAssignmentsDeleteByIdOutput>;

// The operation
/**
 * Delete a role assignment by ID.
 *
 * @param api-version - The API version to use for this operation.
 * @param roleAssignmentId - The fully qualified ID of the role assignment including scope, resource name, and resource type. Format: /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/<SUB_ID>/resourcegroups/<RESOURCE_GROUP>/providers/Microsoft.Authorization/roleAssignments/<ROLE_ASSIGNMENT_NAME>
 * @param tenantId - Tenant ID for cross-tenant request
 */
export const RoleAssignmentsDeleteById = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoleAssignmentsDeleteByIdInput,
  outputSchema: RoleAssignmentsDeleteByIdOutput,
}));
// Input Schema
export interface RoleAssignmentsGetInput {
  scope: string;
  roleAssignmentName: string;
  tenantId?: string;
}
export const RoleAssignmentsGetInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    roleAssignmentName: Schema.String.pipe(T.PathParam()),
    tenantId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsGetInput>;

// Output Schema
export interface RoleAssignmentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RoleAssignmentsGetOutput =
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
  }) as unknown as Schema.Codec<RoleAssignmentsGetOutput>;

// The operation
/**
 * Get a role assignment by scope and name.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param tenantId - Tenant ID for cross-tenant request
 * @param roleAssignmentName - The name of the role assignment. It can be any valid GUID.
 */
export const RoleAssignmentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoleAssignmentsGetInput,
  outputSchema: RoleAssignmentsGetOutput,
}));
// Input Schema
export interface RoleAssignmentsGetByIdInput {
  roleAssignmentId: string;
  tenantId?: string;
}
export const RoleAssignmentsGetByIdInput =
  /*@__PURE__*/ Schema.Struct({
    roleAssignmentId: Schema.String.pipe(T.PathParam()),
    tenantId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{roleAssignmentId}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsGetByIdInput>;

// Output Schema
export interface RoleAssignmentsGetByIdOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RoleAssignmentsGetByIdOutput =
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
  }) as unknown as Schema.Codec<RoleAssignmentsGetByIdOutput>;

// The operation
/**
 * Get a role assignment by ID.
 *
 * @param api-version - The API version to use for this operation.
 * @param roleAssignmentId - The fully qualified ID of the role assignment including scope, resource name, and resource type. Format: /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/<SUB_ID>/resourcegroups/<RESOURCE_GROUP>/providers/Microsoft.Authorization/roleAssignments/<ROLE_ASSIGNMENT_NAME>
 * @param tenantId - Tenant ID for cross-tenant request
 */
export const RoleAssignmentsGetById = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoleAssignmentsGetByIdInput,
  outputSchema: RoleAssignmentsGetByIdOutput,
}));
// Input Schema
export interface RoleAssignmentsListForResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceProviderNamespace: string;
  resourceType: string;
  resourceName: string;
  $filter?: string;
  tenantId?: string;
}
export const RoleAssignmentsListForResourceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceProviderNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/roleAssignments",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsListForResourceInput>;

// Output Schema
export interface RoleAssignmentsListForResourceOutput {
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
export const RoleAssignmentsListForResourceOutput =
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
  }) as unknown as Schema.Codec<RoleAssignmentsListForResourceOutput>;

// The operation
/**
 * List all role assignments that apply to a resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceProviderNamespace - The namespace of the resource provider.
 * @param resourceType - The resource type of the resource.
 * @param resourceName - The name of the resource to get role assignments for.
 * @param $filter - The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
 * @param tenantId - Tenant ID for cross-tenant request
 */
export const RoleAssignmentsListForResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RoleAssignmentsListForResourceInput,
    outputSchema: RoleAssignmentsListForResourceOutput,
  }));
// Input Schema
export interface RoleAssignmentsListForResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  tenantId?: string;
}
export const RoleAssignmentsListForResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/roleAssignments",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsListForResourceGroupInput>;

// Output Schema
export interface RoleAssignmentsListForResourceGroupOutput {
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
export const RoleAssignmentsListForResourceGroupOutput =
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
  }) as unknown as Schema.Codec<RoleAssignmentsListForResourceGroupOutput>;

// The operation
/**
 * List all role assignments that apply to a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
 * @param tenantId - Tenant ID for cross-tenant request
 */
export const RoleAssignmentsListForResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RoleAssignmentsListForResourceGroupInput,
    outputSchema: RoleAssignmentsListForResourceGroupOutput,
  }));
// Input Schema
export interface RoleAssignmentsListForScopeInput {
  scope: string;
  $filter?: string;
  tenantId?: string;
  $skipToken?: string;
}
export const RoleAssignmentsListForScopeInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.Authorization/roleAssignments",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsListForScopeInput>;

// Output Schema
export interface RoleAssignmentsListForScopeOutput {
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
export const RoleAssignmentsListForScopeOutput =
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
  }) as unknown as Schema.Codec<RoleAssignmentsListForScopeOutput>;

// The operation
/**
 * List all role assignments that apply to a scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 * @param $filter - The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
 * @param tenantId - Tenant ID for cross-tenant request
 * @param $skipToken - The skipToken to apply on the operation. Use $skipToken={skiptoken} to return paged role assignments following the skipToken passed. Only supported on provider level calls.
 */
export const RoleAssignmentsListForScope = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoleAssignmentsListForScopeInput,
  outputSchema: RoleAssignmentsListForScopeOutput,
}));
// Input Schema
export interface RoleAssignmentsListForSubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  tenantId?: string;
}
export const RoleAssignmentsListForSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/roleAssignments",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleAssignmentsListForSubscriptionInput>;

// Output Schema
export interface RoleAssignmentsListForSubscriptionOutput {
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
export const RoleAssignmentsListForSubscriptionOutput =
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
  }) as unknown as Schema.Codec<RoleAssignmentsListForSubscriptionOutput>;

// The operation
/**
 * List all role assignments that apply to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
 * @param tenantId - Tenant ID for cross-tenant request
 */
export const RoleAssignmentsListForSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RoleAssignmentsListForSubscriptionInput,
    outputSchema: RoleAssignmentsListForSubscriptionOutput,
  }));
// Input Schema
export interface RoleDefinitionsCreateOrUpdateInput {
  scope: string;
  roleDefinitionId: string;
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    roleName?: string;
    description?: string;
    type?: string;
    permissions?: {
      actions?: string[];
      notActions?: string[];
      dataActions?: string[];
      notDataActions?: string[];
    }[];
    assignableScopes?: string[];
    createdOn?: string;
    updatedOn?: string;
    createdBy?: string;
    updatedBy?: string;
  };
}
export const RoleDefinitionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        roleName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        permissions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              actions: Schema.optional(Schema.Array(Schema.String)),
              notActions: Schema.optional(Schema.Array(Schema.String)),
              dataActions: Schema.optional(Schema.Array(Schema.String)),
              notDataActions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        assignableScopes: Schema.optional(Schema.Array(Schema.String)),
        createdOn: Schema.optional(Schema.String),
        updatedOn: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        updatedBy: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleDefinitionsCreateOrUpdateInput>;

// Output Schema
export interface RoleDefinitionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    roleName?: string;
    description?: string;
    type?: string;
    permissions?: {
      actions?: string[];
      notActions?: string[];
      dataActions?: string[];
      notDataActions?: string[];
    }[];
    assignableScopes?: string[];
    createdOn?: string;
    updatedOn?: string;
    createdBy?: string;
    updatedBy?: string;
  };
}
export const RoleDefinitionsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        roleName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        permissions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              actions: Schema.optional(Schema.Array(Schema.String)),
              notActions: Schema.optional(Schema.Array(Schema.String)),
              dataActions: Schema.optional(Schema.Array(Schema.String)),
              notDataActions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        assignableScopes: Schema.optional(Schema.Array(Schema.String)),
        createdOn: Schema.optional(Schema.String),
        updatedOn: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        updatedBy: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RoleDefinitionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a role definition.
 *
 * @param scope - The scope of the role definition.
 * @param roleDefinitionId - The ID of the role definition.
 * @param api-version - The API version to use for this operation.
 */
export const RoleDefinitionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RoleDefinitionsCreateOrUpdateInput,
    outputSchema: RoleDefinitionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface RoleDefinitionsDeleteInput {
  scope: string;
  roleDefinitionId: string;
}
export const RoleDefinitionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleDefinitionsDeleteInput>;

// Output Schema
export interface RoleDefinitionsDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    roleName?: string;
    description?: string;
    type?: string;
    permissions?: {
      actions?: string[];
      notActions?: string[];
      dataActions?: string[];
      notDataActions?: string[];
    }[];
    assignableScopes?: string[];
    createdOn?: string;
    updatedOn?: string;
    createdBy?: string;
    updatedBy?: string;
  };
}
export const RoleDefinitionsDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        roleName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        permissions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              actions: Schema.optional(Schema.Array(Schema.String)),
              notActions: Schema.optional(Schema.Array(Schema.String)),
              dataActions: Schema.optional(Schema.Array(Schema.String)),
              notDataActions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        assignableScopes: Schema.optional(Schema.Array(Schema.String)),
        createdOn: Schema.optional(Schema.String),
        updatedOn: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        updatedBy: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RoleDefinitionsDeleteOutput>;

// The operation
/**
 * Deletes a role definition.
 *
 * @param scope - The scope of the role definition.
 * @param roleDefinitionId - The ID of the role definition to delete.
 * @param api-version - The API version to use for this operation.
 */
export const RoleDefinitionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoleDefinitionsDeleteInput,
  outputSchema: RoleDefinitionsDeleteOutput,
}));
// Input Schema
export interface RoleDefinitionsGetInput {
  scope: string;
  roleDefinitionId: string;
}
export const RoleDefinitionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    roleDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleDefinitionsGetInput>;

// Output Schema
export interface RoleDefinitionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    roleName?: string;
    description?: string;
    type?: string;
    permissions?: {
      actions?: string[];
      notActions?: string[];
      dataActions?: string[];
      notDataActions?: string[];
    }[];
    assignableScopes?: string[];
    createdOn?: string;
    updatedOn?: string;
    createdBy?: string;
    updatedBy?: string;
  };
}
export const RoleDefinitionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        roleName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        permissions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              actions: Schema.optional(Schema.Array(Schema.String)),
              notActions: Schema.optional(Schema.Array(Schema.String)),
              dataActions: Schema.optional(Schema.Array(Schema.String)),
              notDataActions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        assignableScopes: Schema.optional(Schema.Array(Schema.String)),
        createdOn: Schema.optional(Schema.String),
        updatedOn: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        updatedBy: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<RoleDefinitionsGetOutput>;

// The operation
/**
 * Get role definition by name (GUID).
 *
 * @param scope - The scope of the role definition.
 * @param roleDefinitionId - The ID of the role definition.
 * @param api-version - The API version to use for this operation.
 */
export const RoleDefinitionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoleDefinitionsGetInput,
  outputSchema: RoleDefinitionsGetOutput,
}));
// Input Schema
export interface RoleDefinitionsListInput {
  scope: string;
  $filter?: string;
}
export const RoleDefinitionsListInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.Authorization/roleDefinitions",
      apiVersion: "2022-04-01",
    }),
  ) as unknown as Schema.Codec<RoleDefinitionsListInput>;

// Output Schema
export interface RoleDefinitionsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      roleName?: string;
      description?: string;
      type?: string;
      permissions?: {
        actions?: string[];
        notActions?: string[];
        dataActions?: string[];
        notDataActions?: string[];
      }[];
      assignableScopes?: string[];
      createdOn?: string;
      updatedOn?: string;
      createdBy?: string;
      updatedBy?: string;
    };
  }[];
  nextLink?: string;
}
export const RoleDefinitionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              roleName: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              permissions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    actions: Schema.optional(Schema.Array(Schema.String)),
                    notActions: Schema.optional(Schema.Array(Schema.String)),
                    dataActions: Schema.optional(Schema.Array(Schema.String)),
                    notDataActions: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                  }),
                ),
              ),
              assignableScopes: Schema.optional(Schema.Array(Schema.String)),
              createdOn: Schema.optional(Schema.String),
              updatedOn: Schema.optional(Schema.String),
              createdBy: Schema.optional(Schema.String),
              updatedBy: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RoleDefinitionsListOutput>;

// The operation
/**
 * Get all role definitions that are applicable at scope and above.
 *
 * @param scope - The scope of the role definition.
 * @param $filter - The filter to apply on the operation. Use atScopeAndBelow filter to search below the given scope as well.
 * @param api-version - The API version to use for this operation.
 */
export const RoleDefinitionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoleDefinitionsListInput,
  outputSchema: RoleDefinitionsListOutput,
}));
