/**
 * Azure Management API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CheckNameAvailabilityInput {
  name?: string;
  type?: "Microsoft.Management/managementGroups";
}
export const CheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["Microsoft.Management/managementGroups"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Management/checkNameAvailability",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<CheckNameAvailabilityInput>;

// Output Schema
export interface CheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const CheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CheckNameAvailabilityOutput>;

// The operation
/**
 * Checks if the specified management group name is valid and unique
 *
 * @param api-version - The API version to use for this operation.
 */
export const CheckNameAvailability = /*@__PURE__*/ API.make(() => ({
  inputSchema: CheckNameAvailabilityInput,
  outputSchema: CheckNameAvailabilityOutput,
}));
// Input Schema
export interface EntitiesListInput {
  $skiptoken?: string;
  $skip?: number;
  $top?: number;
  $select?: string;
  $search?:
    | "AllowedParents"
    | "AllowedChildren"
    | "ParentAndFirstLevelChildren"
    | "ParentOnly"
    | "ChildrenOnly";
  $filter?: string;
  $view?: "FullHierarchy" | "GroupsOnly" | "SubscriptionsOnly" | "Audit";
  groupName?: string;
}
export const EntitiesListInput = /*@__PURE__*/ Schema.Struct({
  $skiptoken: Schema.optional(Schema.String),
  $skip: Schema.optional(Schema.Number),
  $top: Schema.optional(Schema.Number),
  $select: Schema.optional(Schema.String),
  $search: Schema.optional(
    Schema.Literals([
      "AllowedParents",
      "AllowedChildren",
      "ParentAndFirstLevelChildren",
      "ParentOnly",
      "ChildrenOnly",
    ]),
  ),
  $filter: Schema.optional(Schema.String),
  $view: Schema.optional(
    Schema.Literals([
      "FullHierarchy",
      "GroupsOnly",
      "SubscriptionsOnly",
      "Audit",
    ]),
  ),
  groupName: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Management/getEntities",
    apiVersion: "2023-04-01",
  }),
) as unknown as Schema.Codec<EntitiesListInput>;

// Output Schema
export interface EntitiesListOutput {
  value: {
    id?: string | null;
    type?: string | null;
    name?: string;
    properties?: {
      tenantId?: string | null;
      displayName?: string | null;
      parent?: { id?: string };
      permissions?: "noaccess" | "view" | "edit" | "delete";
      inheritedPermissions?: "noaccess" | "view" | "edit" | "delete";
      numberOfDescendants?: number | null;
      numberOfChildren?: number | null;
      numberOfChildGroups?: number | null;
      parentDisplayNameChain?: string[] | null;
      parentNameChain?: string[] | null;
    };
  }[];
  nextLink?: string;
  count?: number;
}
export const EntitiesListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.NullOr(Schema.String)),
      type: Schema.optional(Schema.NullOr(Schema.String)),
      name: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Struct({
          tenantId: Schema.optional(Schema.NullOr(Schema.String)),
          displayName: Schema.optional(Schema.NullOr(Schema.String)),
          parent: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
          permissions: Schema.optional(
            Schema.Literals(["noaccess", "view", "edit", "delete"]),
          ),
          inheritedPermissions: Schema.optional(
            Schema.Literals(["noaccess", "view", "edit", "delete"]),
          ),
          numberOfDescendants: Schema.optional(Schema.NullOr(Schema.Number)),
          numberOfChildren: Schema.optional(Schema.NullOr(Schema.Number)),
          numberOfChildGroups: Schema.optional(Schema.NullOr(Schema.Number)),
          parentDisplayNameChain: Schema.optional(
            Schema.NullOr(Schema.Array(Schema.String)),
          ),
          parentNameChain: Schema.optional(
            Schema.NullOr(Schema.Array(Schema.String)),
          ),
        }),
      ),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
  count: Schema.optional(Schema.Number),
}) as unknown as Schema.Codec<EntitiesListOutput>;

// The operation
/**
 * List all entities (Management Groups, Subscriptions, etc.) for the authenticated user.
 *
 * @param api-version - The API version to use for this operation.
 * @param $skiptoken - Page continuation token is only used if a previous operation returned a partial result.
If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.
 * @param $skip - Number of entities to skip over when retrieving results. Passing this in will override $skipToken.
 * @param $top - Number of elements to return when retrieving results. Passing this in will override $skipToken.
 * @param $select - This parameter specifies the fields to include in the response. Can include any combination of Name,DisplayName,Type,ParentDisplayNameChain,ParentChain, e.g. '$select=Name,DisplayName,Type,ParentDisplayNameChain,ParentNameChain'. When specified the $select parameter can override select in $skipToken.
 * @param $search - The $search parameter is used in conjunction with the $filter parameter to return three different outputs depending on the parameter passed in.
With $search=AllowedParents the API will return the entity info of all groups that the requested entity will be able to reparent to as determined by the user's permissions.
With $search=AllowedChildren the API will return the entity info of all entities that can be added as children of the requested entity.
With $search=ParentAndFirstLevelChildren the API will return the parent and  first level of children that the user has either direct access to or indirect access via one of their descendants.
With $search=ParentOnly the API will return only the group if the user has access to at least one of the descendants of the group.
With $search=ChildrenOnly the API will return only the first level of children of the group entity info specified in $filter.  The user must have direct access to the children entities or one of it's descendants for it to show up in the results.
 * @param $filter - The filter parameter allows you to filter on the the name or display name fields. You can check for equality on the name field (e.g. name eq '{entityName}')  and you can check for substrings on either the name or display name fields(e.g. contains(name, '{substringToSearch}'), contains(displayName, '{substringToSearch')). Note that the '{entityName}' and '{substringToSearch}' fields are checked case insensitively.
 * @param $view - The view parameter allows clients to filter the type of data that is returned by the getEntities call.
 * @param groupName - A filter which allows the get entities call to focus on a particular group (i.e. "$filter=name eq 'groupName'")
 * @param Cache-Control - Indicates whether the request should utilize any caches. Populate the header with 'no-cache' value to bypass existing caches.
 */
export const EntitiesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: EntitiesListInput,
  outputSchema: EntitiesListOutput,
}));
// Input Schema
export interface HierarchySettingsCreateOrUpdateInput {
  groupId: string;
  properties?: {
    requireAuthorizationForGroupCreation?: boolean;
    defaultManagementGroup?: string;
  };
}
export const HierarchySettingsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        requireAuthorizationForGroupCreation: Schema.optional(Schema.Boolean),
        defaultManagementGroup: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}/settings/default",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<HierarchySettingsCreateOrUpdateInput>;

// Output Schema
export interface HierarchySettingsCreateOrUpdateOutput {
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
export const HierarchySettingsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<HierarchySettingsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the hierarchy settings defined at the Management Group level.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 */
export const HierarchySettingsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: HierarchySettingsCreateOrUpdateInput,
    outputSchema: HierarchySettingsCreateOrUpdateOutput,
  }));
// Input Schema
export interface HierarchySettingsDeleteInput {
  groupId: string;
}
export const HierarchySettingsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}/settings/default",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<HierarchySettingsDeleteInput>;

// Output Schema
export type HierarchySettingsDeleteOutput = void;
export const HierarchySettingsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<HierarchySettingsDeleteOutput>;

// The operation
/**
 * Deletes the hierarchy settings defined at the Management Group level.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 */
export const HierarchySettingsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: HierarchySettingsDeleteInput,
  outputSchema: HierarchySettingsDeleteOutput,
}));
// Input Schema
export interface HierarchySettingsGetInput {
  groupId: string;
}
export const HierarchySettingsGetInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}/settings/default",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<HierarchySettingsGetInput>;

// Output Schema
export interface HierarchySettingsGetOutput {
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
export const HierarchySettingsGetOutput =
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
  }) as unknown as Schema.Codec<HierarchySettingsGetOutput>;

// The operation
/**
 * Gets the hierarchy settings defined at the Management Group level. Settings can only be set on the root Management Group of the hierarchy.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 */
export const HierarchySettingsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: HierarchySettingsGetInput,
  outputSchema: HierarchySettingsGetOutput,
}));
// Input Schema
export interface HierarchySettingsListInput {
  groupId: string;
}
export const HierarchySettingsListInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}/settings",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<HierarchySettingsListInput>;

// Output Schema
export interface HierarchySettingsListOutput {
  value?: {
    id?: string;
    type?: string;
    name?: string;
    properties?: {
      tenantId?: string;
      requireAuthorizationForGroupCreation?: boolean;
      defaultManagementGroup?: string;
    };
  }[];
  "@nextLink"?: string;
}
export const HierarchySettingsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              tenantId: Schema.optional(Schema.String),
              requireAuthorizationForGroupCreation: Schema.optional(
                Schema.Boolean,
              ),
              defaultManagementGroup: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    "@nextLink": Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<HierarchySettingsListOutput>;

// The operation
/**
 * Gets all the hierarchy settings defined at the Management Group level. Settings can only be set on the root Management Group of the hierarchy.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 */
export const HierarchySettingsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: HierarchySettingsListInput,
  outputSchema: HierarchySettingsListOutput,
}));
// Input Schema
export interface HierarchySettingsUpdateInput {
  groupId: string;
  properties?: {
    requireAuthorizationForGroupCreation?: boolean;
    defaultManagementGroup?: string;
  };
}
export const HierarchySettingsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        requireAuthorizationForGroupCreation: Schema.optional(Schema.Boolean),
        defaultManagementGroup: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}/settings/default",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<HierarchySettingsUpdateInput>;

// Output Schema
export interface HierarchySettingsUpdateOutput {
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
export const HierarchySettingsUpdateOutput =
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
  }) as unknown as Schema.Codec<HierarchySettingsUpdateOutput>;

// The operation
/**
 * Updates the hierarchy settings defined at the Management Group level.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 */
export const HierarchySettingsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: HierarchySettingsUpdateInput,
  outputSchema: HierarchySettingsUpdateOutput,
}));
// Input Schema
export interface ManagementGroupsCreateOrUpdateInput {
  groupId: string;
  id?: string;
  type?: string;
  name?: string;
  properties?: {
    tenantId?: string;
    displayName?: string | null;
    details?: {
      version?: number;
      updatedTime?: string;
      updatedBy?: string;
      parent?: { id?: string; name?: string; displayName?: string };
    };
    children?:
      | {
          type?: "Microsoft.Management/managementGroups" | "/subscriptions";
          id?: string;
          name?: string;
          displayName?: string;
          children?: unknown[];
        }[]
      | null;
  };
}
export const ManagementGroupsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.NullOr(Schema.String)),
        details: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.Number),
            updatedTime: Schema.optional(Schema.String),
            updatedBy: Schema.optional(Schema.String),
            parent: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                displayName: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        children: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals([
                    "Microsoft.Management/managementGroups",
                    "/subscriptions",
                  ]),
                ),
                id: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                displayName: Schema.optional(Schema.String),
                children: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementGroupsCreateOrUpdateInput>;

// Output Schema
export interface ManagementGroupsCreateOrUpdateOutput {
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
export const ManagementGroupsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagementGroupsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a management group.
 * If a management group is already created and a subsequent create request is issued with different properties, the management group properties will be updated.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 * @param Cache-Control - Indicates whether the request should utilize any caches. Populate the header with 'no-cache' value to bypass existing caches.
 */
export const ManagementGroupsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagementGroupsCreateOrUpdateInput,
    outputSchema: ManagementGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManagementGroupsDeleteInput {
  groupId: string;
}
export const ManagementGroupsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementGroupsDeleteInput>;

// Output Schema
export type ManagementGroupsDeleteOutput = void;
export const ManagementGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagementGroupsDeleteOutput>;

// The operation
/**
 * Delete management group.
 * If a management group contains child resources, the request will fail.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 * @param Cache-Control - Indicates whether the request should utilize any caches. Populate the header with 'no-cache' value to bypass existing caches.
 */
export const ManagementGroupsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagementGroupsDeleteInput,
  outputSchema: ManagementGroupsDeleteOutput,
}));
// Input Schema
export interface ManagementGroupsGetInput {
  groupId: string;
  $expand?: "children" | "path" | "ancestors";
  $recurse?: boolean;
  $filter?: string;
}
export const ManagementGroupsGetInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(
      Schema.Literals(["children", "path", "ancestors"]),
    ),
    $recurse: Schema.optional(Schema.Boolean),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementGroupsGetInput>;

// Output Schema
export interface ManagementGroupsGetOutput {
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
export const ManagementGroupsGetOutput =
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
  }) as unknown as Schema.Codec<ManagementGroupsGetOutput>;

// The operation
/**
 * Get the details of the management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 * @param $expand - The $expand=children query string parameter allows clients to request inclusion of children in the response payload.  $expand=path includes the path from the root group to the current group.  $expand=ancestors includes the ancestor Ids of the current group.
 * @param $recurse - The $recurse=true query string parameter allows clients to request inclusion of entire hierarchy in the response payload. Note that  $expand=children must be passed up if $recurse is set to true.
 * @param $filter - A filter which allows the exclusion of subscriptions from results (i.e. '$filter=children.childType ne Subscription')
 * @param Cache-Control - Indicates whether the request should utilize any caches. Populate the header with 'no-cache' value to bypass existing caches.
 */
export const ManagementGroupsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagementGroupsGetInput,
  outputSchema: ManagementGroupsGetOutput,
}));
// Input Schema
export interface ManagementGroupsGetDescendantsInput {
  groupId: string;
  $skiptoken?: string;
  $top?: number;
}
export const ManagementGroupsGetDescendantsInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    $skiptoken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}/descendants",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementGroupsGetDescendantsInput>;

// Output Schema
export interface ManagementGroupsGetDescendantsOutput {
  value: {
    id?: string | null;
    type?: string | null;
    name?: string;
    properties?: { displayName?: string | null; parent?: { id?: string } };
  }[];
  nextLink?: string;
}
export const ManagementGroupsGetDescendantsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.NullOr(Schema.String)),
        type: Schema.optional(Schema.NullOr(Schema.String)),
        name: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            displayName: Schema.optional(Schema.NullOr(Schema.String)),
            parent: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ManagementGroupsGetDescendantsOutput>;

// The operation
/**
 * List all entities that descend from a management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 * @param $skiptoken - Page continuation token is only used if a previous operation returned a partial result.
If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.
 * @param $top - Number of elements to return when retrieving results. Passing this in will override $skipToken.
 */
export const ManagementGroupsGetDescendants =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagementGroupsGetDescendantsInput,
    outputSchema: ManagementGroupsGetDescendantsOutput,
  }));
// Input Schema
export interface ManagementGroupsListInput {
  $skiptoken?: string;
}
export const ManagementGroupsListInput =
  /*@__PURE__*/ Schema.Struct({
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementGroupsListInput>;

// Output Schema
export interface ManagementGroupsListOutput {
  value?: {
    id?: string;
    type?: string;
    name?: string;
    properties?: { tenantId?: string; displayName?: string };
  }[];
  "@nextLink"?: string;
}
export const ManagementGroupsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              tenantId: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    "@nextLink": Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ManagementGroupsListOutput>;

// The operation
/**
 * List management groups for the authenticated user.
 *
 * @param api-version - The API version to use for this operation.
 * @param Cache-Control - Indicates whether the request should utilize any caches. Populate the header with 'no-cache' value to bypass existing caches.
 * @param $skiptoken - Page continuation token is only used if a previous operation returned a partial result.
If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.
 */
export const ManagementGroupsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagementGroupsListInput,
  outputSchema: ManagementGroupsListOutput,
}));
// Input Schema
export interface ManagementGroupSubscriptionsCreateInput {
  groupId: string;
  subscriptionId: string;
}
export const ManagementGroupSubscriptionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}/subscriptions/{subscriptionId}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementGroupSubscriptionsCreateInput>;

// Output Schema
export interface ManagementGroupSubscriptionsCreateOutput {
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
export const ManagementGroupSubscriptionsCreateOutput =
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
  }) as unknown as Schema.Codec<ManagementGroupSubscriptionsCreateOutput>;

// The operation
/**
 * Associates existing subscription with the management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 * @param subscriptionId - Subscription ID.
 * @param Cache-Control - Indicates whether the request should utilize any caches. Populate the header with 'no-cache' value to bypass existing caches.
 */
export const ManagementGroupSubscriptionsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagementGroupSubscriptionsCreateInput,
    outputSchema: ManagementGroupSubscriptionsCreateOutput,
  }));
// Input Schema
export interface ManagementGroupSubscriptionsDeleteInput {
  groupId: string;
  subscriptionId: string;
}
export const ManagementGroupSubscriptionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}/subscriptions/{subscriptionId}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementGroupSubscriptionsDeleteInput>;

// Output Schema
export type ManagementGroupSubscriptionsDeleteOutput = void;
export const ManagementGroupSubscriptionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagementGroupSubscriptionsDeleteOutput>;

// The operation
/**
 * De-associates subscription from the management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 * @param subscriptionId - Subscription ID.
 * @param Cache-Control - Indicates whether the request should utilize any caches. Populate the header with 'no-cache' value to bypass existing caches.
 */
export const ManagementGroupSubscriptionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagementGroupSubscriptionsDeleteInput,
    outputSchema: ManagementGroupSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface ManagementGroupSubscriptionsGetSubscriptionInput {
  groupId: string;
  subscriptionId: string;
}
export const ManagementGroupSubscriptionsGetSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}/subscriptions/{subscriptionId}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementGroupSubscriptionsGetSubscriptionInput>;

// Output Schema
export interface ManagementGroupSubscriptionsGetSubscriptionOutput {
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
export const ManagementGroupSubscriptionsGetSubscriptionOutput =
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
  }) as unknown as Schema.Codec<ManagementGroupSubscriptionsGetSubscriptionOutput>;

// The operation
/**
 * Retrieves details about given subscription which is associated with the management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 * @param subscriptionId - Subscription ID.
 * @param Cache-Control - Indicates whether the request should utilize any caches. Populate the header with 'no-cache' value to bypass existing caches.
 */
export const ManagementGroupSubscriptionsGetSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagementGroupSubscriptionsGetSubscriptionInput,
    outputSchema: ManagementGroupSubscriptionsGetSubscriptionOutput,
  }));
// Input Schema
export interface ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupInput {
  groupId: string;
  $skiptoken?: string;
}
export const ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}/subscriptions",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupInput>;

// Output Schema
export interface ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOutput {
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
export const ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOutput =
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
  }) as unknown as Schema.Codec<ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOutput>;

// The operation
/**
 * Retrieves details about all subscriptions which are associated with the management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 * @param $skiptoken - Page continuation token is only used if a previous operation returned a partial result.
If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.
 */
export const ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupInput,
    outputSchema:
      ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOutput,
  }));
// Input Schema
export interface ManagementGroupsUpdateInput {
  groupId: string;
  displayName?: string;
  parentGroupId?: string;
}
export const ManagementGroupsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    displayName: Schema.optional(Schema.String),
    parentGroupId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Management/managementGroups/{groupId}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ManagementGroupsUpdateInput>;

// Output Schema
export interface ManagementGroupsUpdateOutput {
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
export const ManagementGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagementGroupsUpdateOutput>;

// The operation
/**
 * Update a management group.
 *
 * @param api-version - The API version to use for this operation.
 * @param groupId - Management Group ID.
 * @param Cache-Control - Indicates whether the request should utilize any caches. Populate the header with 'no-cache' value to bypass existing caches.
 */
export const ManagementGroupsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagementGroupsUpdateInput,
  outputSchema: ManagementGroupsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Management/operations",
    apiVersion: "2023-04-01",
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
export interface StartTenantBackfillInput {}
export const StartTenantBackfillInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Management/startTenantBackfill",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<StartTenantBackfillInput>;

// Output Schema
export interface StartTenantBackfillOutput {
  tenantId?: string;
  status?:
    | "NotStarted"
    | "NotStartedButGroupsExist"
    | "Started"
    | "Failed"
    | "Cancelled"
    | "Completed";
}
export const StartTenantBackfillOutput =
  /*@__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "NotStarted",
        "NotStartedButGroupsExist",
        "Started",
        "Failed",
        "Cancelled",
        "Completed",
      ]),
    ),
  }) as unknown as Schema.Codec<StartTenantBackfillOutput>;

// The operation
/**
 * Starts backfilling subscriptions for the Tenant.
 *
 * @param api-version - The API version to use for this operation.
 */
export const StartTenantBackfill = /*@__PURE__*/ API.make(() => ({
  inputSchema: StartTenantBackfillInput,
  outputSchema: StartTenantBackfillOutput,
}));
// Input Schema
export interface TenantBackfillStatusInput {}
export const TenantBackfillStatusInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Management/tenantBackfillStatus",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<TenantBackfillStatusInput>;

// Output Schema
export interface TenantBackfillStatusOutput {
  tenantId?: string;
  status?:
    | "NotStarted"
    | "NotStartedButGroupsExist"
    | "Started"
    | "Failed"
    | "Cancelled"
    | "Completed";
}
export const TenantBackfillStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "NotStarted",
        "NotStartedButGroupsExist",
        "Started",
        "Failed",
        "Cancelled",
        "Completed",
      ]),
    ),
  }) as unknown as Schema.Codec<TenantBackfillStatusOutput>;

// The operation
/**
 * Gets tenant backfill status
 *
 * @param api-version - The API version to use for this operation.
 */
export const TenantBackfillStatus = /*@__PURE__*/ API.make(() => ({
  inputSchema: TenantBackfillStatusInput,
  outputSchema: TenantBackfillStatusOutput,
}));
