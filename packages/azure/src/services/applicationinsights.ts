/**
 * Azure Applicationinsights API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface WorkbooksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  sourceId?: string;
  properties?: {
    displayName: string;
    serializedData: string | null;
    version?: string;
    timeModified?: string;
    category: string;
    tags?: string[];
    userId?: string;
    sourceId?: string;
    storageUri?: string | null;
    description?: string | null;
    revision?: string | null;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  kind?: "shared";
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const WorkbooksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    sourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.String,
        serializedData: Schema.NullOr(Schema.String),
        version: Schema.optional(Schema.String),
        timeModified: Schema.optional(Schema.String),
        category: Schema.String,
        tags: Schema.optional(Schema.Array(Schema.String)),
        userId: Schema.optional(Schema.String),
        sourceId: Schema.optional(Schema.String),
        storageUri: Schema.optional(Schema.NullOr(Schema.String)),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        revision: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    kind: Schema.optional(Schema.Literals(["shared"])),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<WorkbooksCreateOrUpdateInput>;

// Output Schema
export interface WorkbooksCreateOrUpdateOutput {
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
export const WorkbooksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WorkbooksCreateOrUpdateOutput>;

// The operation
/**
 * Create a new workbook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 * @param sourceId - Azure Resource Id that will fetch all linked workbooks.
 */
export const WorkbooksCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkbooksCreateOrUpdateInput,
  outputSchema: WorkbooksCreateOrUpdateOutput,
}));
// Input Schema
export interface WorkbooksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WorkbooksDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<WorkbooksDeleteInput>;

// Output Schema
export type WorkbooksDeleteOutput = void;
export const WorkbooksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkbooksDeleteOutput>;

// The operation
/**
 * Delete a workbook.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 */
export const WorkbooksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkbooksDeleteInput,
  outputSchema: WorkbooksDeleteOutput,
}));
// Input Schema
export interface WorkbooksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  canFetchContent?: boolean;
}
export const WorkbooksGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  canFetchContent: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<WorkbooksGetInput>;

// Output Schema
export interface WorkbooksGetOutput {
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
export const WorkbooksGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WorkbooksGetOutput>;

// The operation
/**
 * Get a single workbook by its resourceName.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 * @param canFetchContent - Flag indicating whether or not to return the full content for each applicable workbook. If false, only return summary content for workbooks.
 */
export const WorkbooksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkbooksGetInput,
  outputSchema: WorkbooksGetOutput,
}));
// Input Schema
export interface WorkbooksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  category: "workbook" | "TSG" | "performance" | "retention";
  tags?: string;
  sourceId?: string;
  canFetchContent?: boolean;
}
export const WorkbooksListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    category: Schema.Literals(["workbook", "TSG", "performance", "retention"]),
    tags: Schema.optional(Schema.String),
    sourceId: Schema.optional(Schema.String),
    canFetchContent: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<WorkbooksListByResourceGroupInput>;

// Output Schema
export interface WorkbooksListByResourceGroupOutput {
  value?: {
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
export const WorkbooksListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkbooksListByResourceGroupOutput>;

// The operation
/**
 * Get all Workbooks defined within a specified resource group and category.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param category - Category of workbook to return.
 * @param tags - Tags presents on each workbook returned.
 * @param sourceId - Azure Resource Id that will fetch all linked workbooks.
 * @param canFetchContent - Flag indicating whether or not to return the full content for each applicable workbook. If false, only return summary content for workbooks.
 */
export const WorkbooksListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WorkbooksListByResourceGroupInput,
    outputSchema: WorkbooksListByResourceGroupOutput,
  }));
// Input Schema
export interface WorkbooksListBySubscriptionInput {
  subscriptionId: string;
  category: "workbook" | "TSG" | "performance" | "retention";
  tags?: string;
  canFetchContent?: boolean;
}
export const WorkbooksListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    category: Schema.Literals(["workbook", "TSG", "performance", "retention"]),
    tags: Schema.optional(Schema.String),
    canFetchContent: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/workbooks",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<WorkbooksListBySubscriptionInput>;

// Output Schema
export interface WorkbooksListBySubscriptionOutput {
  value?: {
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
export const WorkbooksListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkbooksListBySubscriptionOutput>;

// The operation
/**
 * Get all Workbooks defined within a specified subscription and category.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param category - Category of workbook to return.
 * @param tags - Tags presents on each workbook returned.
 * @param canFetchContent - Flag indicating whether or not to return the full content for each applicable workbook. If false, only return summary content for workbooks.
 */
export const WorkbooksListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkbooksListBySubscriptionInput,
  outputSchema: WorkbooksListBySubscriptionOutput,
}));
// Input Schema
export interface WorkbooksRevisionGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  revisionId: string;
}
export const WorkbooksRevisionGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    revisionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}/revisions/{revisionId}",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<WorkbooksRevisionGetInput>;

// Output Schema
export interface WorkbooksRevisionGetOutput {
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
export const WorkbooksRevisionGetOutput =
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
  }) as unknown as Schema.Codec<WorkbooksRevisionGetOutput>;

// The operation
/**
 * Get a single workbook revision defined by its revisionId.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 * @param revisionId - The id of the workbook's revision.
 */
export const WorkbooksRevisionGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkbooksRevisionGetInput,
  outputSchema: WorkbooksRevisionGetOutput,
}));
// Input Schema
export interface WorkbooksRevisionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const WorkbooksRevisionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}/revisions",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<WorkbooksRevisionsListInput>;

// Output Schema
export interface WorkbooksRevisionsListOutput {
  value?: {
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
export const WorkbooksRevisionsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkbooksRevisionsListOutput>;

// The operation
/**
 * Get the revisions for the workbook defined by its resourceName.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 */
export const WorkbooksRevisionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkbooksRevisionsListInput,
  outputSchema: WorkbooksRevisionsListOutput,
}));
// Input Schema
export interface WorkbooksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  sourceId?: string;
  kind?: "shared";
  tags?: Record<string, string>;
  properties?: {
    displayName?: string;
    serializedData?: string;
    category?: string;
    tags?: string[];
    description?: string | null;
    revision?: string | null;
  };
}
export const WorkbooksUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  sourceId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.Literals(["shared"])),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      displayName: Schema.optional(Schema.String),
      serializedData: Schema.optional(Schema.String),
      category: Schema.optional(Schema.String),
      tags: Schema.optional(Schema.Array(Schema.String)),
      description: Schema.optional(Schema.NullOr(Schema.String)),
      revision: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/workbooks/{resourceName}",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<WorkbooksUpdateInput>;

// Output Schema
export interface WorkbooksUpdateOutput {
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
export const WorkbooksUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WorkbooksUpdateOutput>;

// The operation
/**
 * Updates a workbook that has already been added.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the workbook resource. The value must be an UUID.
 * @param sourceId - Azure Resource Id that will fetch all linked workbooks.
 */
export const WorkbooksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkbooksUpdateInput,
  outputSchema: WorkbooksUpdateOutput,
}));
